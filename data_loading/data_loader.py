import asyncio
from os import environ
from pathlib import Path

import httpx
from rich.progress import track
from rdflib import Graph, Literal, Namespace, URIRef
from rdflib.namespace import DCTERMS, RDFS, RDF, SKOS

# SPATIAL_DATA_FILE_PATH_ROOT = Path("/app/qldgeofeatures-dataset/qldgeofeatures.ttl")
# SPATIAL_DATA_BACKGROUND_ONT_ROOT = Path("/app/qldgeofeatures-dataset/background-onts")
VOCAB_DATA_BACKGROUND_ONT_ROOT = Path("/app/vocabularies/background-onts")
VOCAB_DATA_FILE_PATH_ROOT = "/app/vocabularies"
VOCAB_DATA_FILE_GLOB_PATTERN = "vocabularies-*"
FUSEKI_DATASET_NAME = "gsq"
FUSEKI_URL = environ["FUSEKI_URL"]
AUTH_CREDENTIALS = (environ["FUSEKI_USER"], environ["FUSEKI_PASSWORD"])


async def upload_file(
    url: str, graph_name: str, file: Path, http_client: httpx.AsyncClient
) -> None:
    params = {"graph": graph_name}
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

        # files += list(SPATIAL_DATA_BACKGROUND_ONT_ROOT.glob("**/*.ttl"))
        files += list(VOCAB_DATA_BACKGROUND_ONT_ROOT.glob("**/*.ttl"))

        directories = Path(VOCAB_DATA_FILE_PATH_ROOT).glob(VOCAB_DATA_FILE_GLOB_PATTERN)
        for directory in directories:
            files += directory.glob("**/*.ttl")

        for file in track(files, description="Uploading..."):
            await upload_file(url, f"urn:file:{file.name}", file, http_client)

        graph = Graph()
        for file in files:
            graph.parse(file)

        # Specify SpacePrez profile label for dataset and feature collection.
        spaceprez_graph = Graph()
        spaceprez_graph.add(
            (
                URIRef("https://www.w3.org/TR/vocab-dcat/"),
                URIRef("http://www.w3.org/ns/dx/conneg/altr-ext#hasLabelPredicate"),
                URIRef("https://schema.org/name"),
            )
        )
        spaceprez_graph.add(
            (
                URIRef("https://www.w3.org/TR/vocab-dcat/"),
                RDF.type,
                URIRef("http://www.w3.org/ns/dx/prof/Profile"),
            )
        )
        spaceprez_graph.add(
            (
                URIRef("http://www.opengis.net/spec/ogcapi-features-1/1.0/req/oas30"),
                URIRef("http://www.w3.org/ns/dx/conneg/altr-ext#hasLabelPredicate"),
                URIRef("https://schema.org/name"),
            )
        )
        spaceprez_graph.add(
            (
                URIRef("http://www.opengis.net/spec/ogcapi-features-1/1.0/req/oas30"),
                RDF.type,
                URIRef("http://www.w3.org/ns/dx/prof/Profile"),
            )
        )
        spaceprez_graph.add(
            (
                URIRef("https://w3id.org/profile/dcat2null"),
                URIRef("http://www.w3.org/ns/dx/conneg/altr-ext#hasLabelPredicate"),
                URIRef("https://schema.org/name"),
            )
        )
        spaceprez_graph.add(
            (
                URIRef("https://w3id.org/profile/dcat2null"),
                RDF.type,
                URIRef("http://www.w3.org/ns/dx/prof/Profile"),
            )
        )

        spaceprez_graph_file = Path("spaceprez_support_graph.ttl")
        spaceprez_graph.serialize(spaceprez_graph_file, format="turtle")

        await upload_file(
            url,
            "urn:file:spaceprez-support-graph",
            spaceprez_graph_file,
            http_client,
        )

        # await upload_file(
        #     url,
        #     f"urn:file:{SPATIAL_DATA_FILE_PATH_ROOT.name}",
        #     SPATIAL_DATA_FILE_PATH_ROOT,
        #     http_client,
        # )


if __name__ == "__main__":
    asyncio.run(main())
