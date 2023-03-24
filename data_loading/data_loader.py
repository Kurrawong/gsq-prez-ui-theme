import asyncio
from pathlib import Path

import httpx
from rich.progress import track
from rdflib import Graph, Literal, Namespace
from rdflib.namespace import DCTERMS

DATA_FILE_PATH_ROOT = "/app/vocabularies"
DATA_FILE_GLOB_PATTERN = ""
FUSEKI_DATASET_NAME = "gsq"
FUSEKI_URL = "http://fuseki:3030"
AUTH_CREDENTIALS = ("admin", "admin")


async def upload_file(url: str, file: Path, http_client: httpx.AsyncClient) -> None:
    params = {"graph": f"urn:file:{file.name}"}
    headers = {"content-type": "text/turtle"}
    with open(file, "r", encoding="utf-8") as f:
        data = f.read()
        response = await http_client.put(
            url, params=params, headers=headers, data=data, auth=AUTH_CREDENTIALS
        )
        status_code = response.status_code

        if status_code != 200 and status_code != 201 and status_code != 204:
            raise RuntimeError(
                f"Received status code {status_code} for file {file} at url {url}. {response.text}"
            )


async def main() -> None:
    files = []

    async with httpx.AsyncClient() as http_client:
        url = f"{FUSEKI_URL}/{FUSEKI_DATASET_NAME}"

        directories = Path(DATA_FILE_PATH_ROOT).glob("vocabularies-*")
        for directory in directories:
            files += directory.glob("**/*.ttl")

        for file in track(files, description="Uploading..."):
            await upload_file(url, file, http_client)

        graph = Graph()
        for file in files:
            graph.parse(file)

        PREZ = Namespace("https://prez.dev/")
        identifiers_graph = Graph()
        identifiers_graph.bind("dcterms", DCTERMS)
        identifiers_graph.bind("prez", PREZ)

        print("Generating identifiers...")
        subjects = set(graph.subjects(None, None))
        for subject in subjects:
            local_name = subject.split("#")[-1].split("/")[-1]
            base_name = subject.replace(local_name, "")
            prefix = base_name[:-1].split("/")[-1]
            identifiers_graph.add(
                (
                    subject,
                    DCTERMS.identifier,
                    Literal(f"{prefix}:{local_name}", datatype=PREZ.slug),
                )
            )

        print("Uploading identifiers.ttl...")
        identifiers_file = Path("identifiers.ttl")
        identifiers_graph.serialize(identifiers_file, format="turtle")

        await upload_file(url, identifiers_file, http_client)


if __name__ == "__main__":
    asyncio.run(main())