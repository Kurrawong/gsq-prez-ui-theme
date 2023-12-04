<script lang="ts" setup>
import { RouterLink } from "vue-router";
import FlavourHome from "@/components/FlavourHome.vue";

const links = [
  {
    label: "Vocabularies",
    url: "/v/vocab",
    description: "A list of SKOS vocabularies",
  },
  {
    label: "Collections",
    url: "/v/collection",
    description: "A list of SKOS collections",
  },
];
</script>

<template>
  <FlavourHome flavour="VocPrez" :links="links">
    <h2>GSQ's Vocabulary System</h2>
    <p>
      Welcome to the
      <a
        href="https://www.business.qld.gov.au/industries/mining-energy-water/resources/geoscience-information/gsq"
        >Geological Survey of Queensland (GSQ)'s</a
      >
      instance of VocPrez, a read-only web delivery system for Simple Knowledge
      Organization System (SKOS)-formulated RDF vocabularies.
    </p>

    <ul>
      <li>
        <RouterLink to="/v/vocab">All Vocabs</RouterLink>
      </li>
      <li>
        <a href="#geochem-vocabs">Geochem Vocabs</a>
      </li>
      <li>
        <a href="#qsi-vocabs">QSI Vocabs</a>
      </li>
    </ul>

    <h3>Vocab Groups</h3>

    <p>
      See <RouterLink to="/v/vocab">All Vocabs</RouterLink> for the vocabs
      listing page.
    </p>

    <h4 id="geochem-vocabs">Geochem Vocabs</h4>

    <table>
      <thead>
        <tr>
          <th>Vocab Name</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <RouterLink
              to="/object?uri=http://linked.data.gov.au/def/geological-observation-method"
              >Observation Method</RouterLink
            >
          </td>
        </tr>
      </tbody>
    </table>

    <h4 id="qsi-vocabs">QSI Vocabs</h4>

    <table>
      <thead>
        <tr>
          <th>Vocab Name</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/address-alias-type"
              target="_blank"
              >Address Alias Type</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/address-classes"
              target="_blank"
              >Address Classes</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/address-status-type"
              target="_blank"
              >Address Status Type</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/geocode-types"
              target="_blank"
              >Geocode Types</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/gn-part-types"
              target="_blank"
              >Geographical Name Part Types</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/gn-statuses"
              target="_blank"
              >Geographical Name Statuses</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/go-categories"
              target="_blank"
              >Geographical Object Categories</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/ground-relationship"
              target="_blank"
              >Ground Relationship</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/level-types"
              target="_blank"
              >Level Types</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/lrrs-indicator"
              target="_blank"
              >Local Road of Regional Significance Indicator</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/population-zone"
              target="_blank"
              >Population Zone</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/positional-accuracy"
              target="_blank"
              >Positional Accuracy</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/record-access"
              target="_blank"
              >Record Access</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-cadastral-relationship"
              target="_blank"
              >Road Cadastral Relationship</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-classifications"
              target="_blank"
              >Road Classifications</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-geometry-notes"
              target="_blank"
              >Road Geometry Notes</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-lane-count"
              target="_blank"
              >Road Lane Count</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-maintainer"
              target="_blank"
              >Road Maintainer</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-name-part-types"
              target="_blank"
              >Road Name Part Types</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-operational-statuses"
              target="_blank"
              >Road Operational Statuses</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-owner"
              target="_blank"
              >Road Owner</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-seasonality"
              target="_blank"
              >Road Seasonality</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-sub-classes"
              target="_blank"
              >Road Sub-Classes</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-suffixes"
              target="_blank"
              >Road Suffixes</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-surfaces"
              target="_blank"
              >Road Surfaces</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-trafficability"
              target="_blank"
              >Road Trafficability</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-travel-direction"
              target="_blank"
              >Road Travel Direction</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-types"
              target="_blank"
              >Road Types</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/road-user-access"
              target="_blank"
              >Road User Access</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/source"
              target="_blank"
              >Source</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/spatial-capture-method"
              target="_blank"
              >Spatial capture method</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/scr-indicator"
              target="_blank"
              >State Controlled Road Indicator</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/subaddress-types"
              target="_blank"
              >Sub-Address Types</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="/object?uri=https://linked.data.gov.au/def/surface-capture-method"
              target="_blank"
              >Surface capture method</a
            >
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Vocab Model</h3>

    <h4>Vocab Profile</h4>
    <p>
      The current vocab content is based on
      <a target="_blank" href="https://w3id.org/profile/vocpub">VocPub</a>, a
      profile of SKOS.
    </p>

    <h4>Concept Schemes</h4>

    <p>
      Concept Schemes are the main way to model vocabularies. They are
      well-suited in modelling codelists, taxonomies and classification schemes
      where vocab terms can be either presented as a flat structure or a
      hierarhical tree-like structure.
    </p>

    <h4>Collections</h4>

    <p>
      Collections are a grouping of terms (or Concepts), represented as a flat
      listing of Concepts.
    </p>

    <h4>Concepts</h4>

    <p>
      Vocabulary terms (or Concepts) are listed within a vocabulary's home page.
      Each vocabulary is presented as a concept hierarchy (tree) view.
    </p>

    <h3>Vocab System</h3>

    <p>
      The vocabularies here are powered by VocPrez, a technical system that's
      part of a larger system called
      <a target="_blank" href="https://prez.dev">Prez</a>. See the
      <RouterLink to="/v/about">About Page</RouterLink> for more information.
    </p>

    <h2>Search and Querying</h2>
    <p>
      You can search for Concepts within one vocabularies or across all
      vocabularies by using the search bar below or the
      <RouterLink to="/search">Advanced Search page</RouterLink>, or perform
      SPARQL queries using the
      <RouterLink to="/sparql">SPARQL page</RouterLink>.
    </p>

    <h3>Vocab Data</h3>
    <p>
      Note that GSQ's vocabularies are also available as text files from their
      point-of-truth code repository:
    </p>
    <ul>
      <a href="https://github.com/geological-survey-of-queensland/vocabularies/"
        >GSQ's vocabulary source files on GitHub</a
      >
    </ul>
  </FlavourHome>
</template>

<style lang="scss" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
