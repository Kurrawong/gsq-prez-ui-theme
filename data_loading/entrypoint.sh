#!/usr/bin/env bash

git clone --depth 1 https://github.com/geological-survey-of-queensland/vocabularies.git
git clone --depth 1 --branch v1.0 https://github.com/geological-survey-of-queensland/qldgeofeatures-dataset.git

echo "Creating Fuseki datasets..."
python create_fuseki_dataset.py

echo "Loading data into Fuseki..."
python data_loader.py
echo "Loading data finished."

echo "Enabling union default graph..."
python enable_union_default_graph.py /fuseki/configuration/gsq.ttl
echo "Union default graph enabled."

echo "Enable GeoSPARQL extension..."
python enable_geosparql.py /fuseki/configuration/gsq.ttl
echo "Geosparql extension enabled."