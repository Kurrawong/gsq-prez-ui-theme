#!/usr/bin/env bash

git clone --depth 1 https://github.com/geological-survey-of-queensland/vocabularies.git
if [ -n "$GSQ_DATA_BRANCH" -a -n "$GSQ_DATA_PR" ]; then
  pushd vocabularies
  git fetch origin pull/${GSQ_DATA_PR}/head:${GSQ_DATA_BRANCH}
  popd
fi
git clone --depth 1 --branch v1.0 https://github.com/geological-survey-of-queensland/qldgeofeatures-dataset.git

echo "Creating Fuseki datasets..."
python create_fuseki_dataset.py

echo "Loading data into Fuseki..."
kurra fuseki upload /app/qldgeofeatures-dataset/qldgeofeatures.ttl http://localhost:3030/gsq
kurra fuseki upload /app/qldgeofeatures-dataset/background-onts http://localhost:3030/gsq
kurra fuseki upload /app/vocabularies/background-onts http://localhost:3030/gsq
python data_loader.py
echo "Loading data finished."

echo "Enabling union default graph..."
python enable_union_default_graph.py /fuseki/configuration/gsq.ttl
echo "Union default graph enabled."

echo "Enable GeoSPARQL extension..."
python enable_geosparql.py /fuseki/configuration/gsq.ttl
echo "Geosparql extension enabled."