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
        <a href="#all-vocabs">All Vocabs</a>
      </li>
      <li>
        <a href="#geochem-vocabs">Geochem Vocabs</a>
      </li>
      <li>
        <a href="#qsi-vocabs">QSI Vocabs</a>
      </li>
    </ul>

    <h3>Vocab Groups</h3>

    <h4 id="all-vocabs">All Vocabs</h4>

    <p>
      See <RouterLink to="/v/vocab">All Vocabs</RouterLink> for the vocabs
      listing page.
    </p>

    <h4 id="geochem-vocabs">Geochem Vocabs</h4>

    <table>
      <thead>
				<tr>
				  <th>Title</th>
				  <th>Description</th>
				  <th>Theme</th>
				</tr>
      </thead>

      <tbody>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/agent" target="_blank">Agent</a></td><td title="Agent">Agent</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/alteration" target="_blank">Alteration</a></td><td title="Alteration">Alteration</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/analytes" target="_blank">Analytes</a></td><td title="A substance or sample being analyzed, usually by means of a laboratory procedure or test">A substance or sample being analyzed, usually by m</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/commodity" target="_blank">Commodity</a></td><td title="Commodity">Commodity</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/coord-sys-id" target="_blank">Coord Sys Id</a></td><td title="Coord Sys Id">Coord Sys Id</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/current-class" target="_blank">Current Class</a></td><td title="Current Class">Current Class</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/depth-datum" target="_blank">Depth Datum</a></td><td title="Depth Datum">Depth Datum</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/drill-diameter" target="_blank">Drill Diameter</a></td><td title="Drill Diameter">Drill Diameter</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/drill-type" target="_blank">Drill Type</a></td><td title="Drill Type">Drill Type</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/sample-material" target="_blank">Geochemistry Sample Material</a></td><td title="Sample Material">Sample Material</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/grain-size" target="_blank">Grain Size</a></td><td title="Grain Size">Grain Size</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/lease-name" target="_blank">Lease Name</a></td><td title="Lease Name">Lease Name</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/loc-survey-type" target="_blank">Loc Survey Type</a></td><td title="Loc Survey Type">Loc Survey Type</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/mesh-size" target="_blank">Mesh Size</a></td><td title="Mesh Size">Mesh Size</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/qaqc" target="_blank">Qaqc</a></td><td title="Qaqc">Qaqc</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/reserve-class-id" target="_blank">Reserve Class Id</a></td><td title="Reserve Class Id">Reserve Class Id</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/resource-status" target="_blank">Resource Status</a></td><td title="Resource Status">Resource Status</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/rpt-survey-type" target="_blank">Rpt Survey Type</a></td><td title="Rpt Survey Type">Rpt Survey Type</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/sample-type-drilling" target="_blank">Sample Type Drilling</a></td><td title="Sample Type Drilling">Sample Type Drilling</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/sample-type-surface" target="_blank">Sample Type Surface</a></td><td title="Sample Type Surface">Sample Type Surface</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/soil-colour" target="_blank">Soil Colour</a></td><td title="Soil Colour">Soil Colour</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/structural-feature" target="_blank">Structural Feature</a></td><td title="Structural Feature">Structural Feature</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/structure" target="_blank">Structure</a></td><td title="Structure">Structure</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/texture" target="_blank">Texture</a></td><td title="Texture">Texture</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gsq-geochem/weathering" target="_blank">Weathering</a></td><td title="Weathering">Weathering</td><td><a href="http://linked.data.gov.au/def/earth-science-data-category/geochemistry">Geochemistry</a></td></tr>
      </tbody>
    </table>

    <h4 id="qsi-vocabs">QSI Vocabs</h4>

    <table>
      <thead>
				<tr>
				  <th>Title</th>
				  <th>Description</th>
				  <th>Theme</th>
				</tr>
      </thead>

      <tbody>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/ground-relationship" target="_blank">Ground Relationship</a></td><td title="This vocabulary describes relationships of a feature to the ground">This vocabulary describes relationships of a featu</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/buildings-and-settlements">Buildings And Settlements</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/address-alias-type" target="_blank">Address Alias Type</a></td><td title="This vocabulary describes types of address alias. ">This vocabulary describes types of address alias. </td><td><a href="https://linked.data.gov.au/def/fsdf/themes/geocoded-addressing">Geocoded Addressing</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/address-classes" target="_blank">Address Classes</a></td><td title="This vocabulary describes the address classes or types used in address allocation. ">This vocabulary describes the address classes or t</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/geocoded-addressing">Geocoded Addressing</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/address-status-type" target="_blank">Address Status Type</a></td><td title="This vocabulary describes types of address status. ">This vocabulary describes types of address status.</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/geocoded-addressing">Geocoded Addressing</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/geocode-types" target="_blank">Geocode Types</a></td><td title="This vocabulary describes types of geocode. A geocode is a point location with a specialised type or a role which can be assigned to position something. ">This vocabulary describes types of geocode. A geoc</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/geocoded-addressing">Geocoded Addressing</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/level-types" target="_blank">Level Types</a></td><td title="This vocabulary describes types of levels within a building">This vocabulary describes types of levels within a</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/geocoded-addressing">Geocoded Addressing</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/record-access" target="_blank">Record Access</a></td><td title="This vocabulary describes the access suitability of a record">This vocabulary describes the access suitability o</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/geocoded-addressing">Geocoded Addressing</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/subaddress-types" target="_blank">Sub-Address Types</a></td><td title="This vocabulary describes types of sub-address. A sub-address distinguishes the type of separately identifiable portion within a building, complex or marina. These are sometimes referred to as sub-dwelling types or unit types. ">This vocabulary describes types of sub-address. A </td><td><a href="https://linked.data.gov.au/def/fsdf/themes/geocoded-addressing">Geocoded Addressing</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gn-part-types" target="_blank">Geographical Name Part Types</a></td><td title="This vocabulary describes values of name part types used in geographical naming">This vocabulary describes values of name part type</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/place-names">Place Names</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/gn-statuses" target="_blank">Geographical Name Statuses</a></td><td title="This vocabulary contains classifications of how official, or otherwise, a Geographical Name is">This vocabulary contains classifications of how of</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/place-names">Place Names</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/go-categories" target="_blank">Geographical Object Categories</a></td><td title="A 3-level hierarchy of Geographical (Place) Object categories">A 3-level hierarchy of Geographical (Place) Object</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/place-names">Place Names</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/population-zone" target="_blank">Population Zone</a></td><td title="This vocabulary describes the population zone of rural or urban in which the entity is located. This has also been referred to as zone or entity zone">This vocabulary describes the population zone of r</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/population-distributions">Population Distributions</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/positional-accuracy" target="_blank">Positional Accuracy</a></td><td title="This vocabulary describes categories of positional accuracy information to indicate the spatial accuracy of data capture. ">This vocabulary describes categories of positional</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/positioning">Positioning</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/source" target="_blank">Source</a></td><td title="This vocabulary describes the source of information for a feature or attribute component">This vocabulary describes the source of informatio</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/spatial">Spatial</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/spatial-capture-method" target="_blank">Spatial capture method</a></td><td title="This vocabulary describes the method in which geometry was captured. ">This vocabulary describes the method in which geom</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/spatial">Spatial</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/lrrs-indicator" target="_blank">Local Road of Regional Significance Indicator</a></td><td title="This vocabulary describes whether a road is designated as a local road of regional significance (LRSS)">This vocabulary describes whether a road is design</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-cadastral-relationship" target="_blank">Road Cadastral Relationship</a></td><td title="This vocabulary describes the relationship, or alignment, of a road to a cadastral road area">This vocabulary describes the relationship, or ali</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-classifications" target="_blank">Road Classifications</a></td><td title="This vocabulary describes hierarchy classification types for roads">This vocabulary describes hierarchy classification</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-geometry-notes" target="_blank">Road Geometry Notes</a></td><td title="This vocabulary describes notes related to the geometry of a road segment. These notes indicate where the geometry has an exception to a geometry rule but is still valid. ">This vocabulary describes notes related to the geo</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-lane-count" target="_blank">Road Lane Count</a></td><td title="This vocabulary describes the number of lanes that indicate whether vehicles are able to travel past each other on the formed surface of the road. ">This vocabulary describes the number of lanes that</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-maintainer" target="_blank">Road Maintainer</a></td><td title="This vocabulary describes the maintainer of a road">This vocabulary describes the maintainer of a road</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-name-part-types" target="_blank">Road Name Part Types</a></td><td title="This vocabulary describes values of name part types used in road naming">This vocabulary describes values of name part type</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-operational-statuses" target="_blank">Road Operational Statuses</a></td><td title="This vocabulary describes the operational status for roads">This vocabulary describes the operational status f</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-owner" target="_blank">Road Owner</a></td><td title="This vocabulary describes the owner of a road">This vocabulary describes the owner of a road</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-seasonality" target="_blank">Road Seasonality</a></td><td title="This vocabulary describes whether a road may be subjected to seasonal road closures">This vocabulary describes whether a road may be su</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-sub-classes" target="_blank">Road Sub-Classes</a></td><td title="This vocabulary describes sub classes of roads">This vocabulary describes sub classes of roads</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-suffixes" target="_blank">Road Suffixes</a></td><td title="This vocabulary described values of suffixes used in road naming">This vocabulary described values of suffixes used </td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-surfaces" target="_blank">Road Surfaces</a></td><td title="This vocabulary describes surfaces of roads">This vocabulary describes surfaces of roads</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-trafficability" target="_blank">Road Trafficability</a></td><td title="This vocabulary describes the the primary vehicle type that can utilise the road. ">This vocabulary describes the the primary vehicle </td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-travel-direction" target="_blank">Road Travel Direction</a></td><td title="This vocabulary describes the travel direction assigned to a section of a road. ">This vocabulary describes the travel direction ass</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-types" target="_blank">Road Types</a></td><td title="This vocabulary describes road types. A road type is used as part of a road name and distinguishes the type of road. The road types that do not meet AS/NZS 4819:2011 exist to enable inclusion of roads named prior to the creation of AS/NZS 4819:2011. These types should not be used for any new road designations">This vocabulary describes road types. A road type </td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/road-user-access" target="_blank">Road User Access</a></td><td title="This vocabulary describes the user access for roads. ">This vocabulary describes the user access for road</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/scr-indicator" target="_blank">State Controlled Road Indicator</a></td><td title="This vocabulary describes whether a road is designated as a state controlled road (SCR)">This vocabulary describes whether a road is design</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
				<tr><td><a href="/object?uri=https://linked.data.gov.au/def/surface-capture-method" target="_blank">Surface capture method</a></td><td title="This vocabulary describes the method in which road surface type was captured. ">This vocabulary describes the method in which road</td><td><a href="https://linked.data.gov.au/def/fsdf/themes/transport">Transport</a></td></tr>
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
  margin: 1.25rem 1.25rem;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
