import{a0 as x,i as D,B as q,d as F,x as w,o as G,h as a,c as o,a as t,F as R,r as b,z as y,C,q as p,t as g,b as c,E as N,f as k,m as L,p as X,j as V,_ as M,w as j,N as Y}from"./index.818176dd.js";import{S as H,_ as Q,s as W}from"./MapClient.vue_vue_type_script_setup_true_lang.73ee5935.js";import{a as z}from"./axios.98e08a26.js";function P(r){return x({id:r,state:()=>{const n=D(q);return{data:[],success:!1,loading:!1,error:null,apiBaseUrl:n}},actions:{async fetch(n,d){const l=`${this.apiBaseUrl}/${n}/sparql`;this.loading=!0,this.success=!1;try{const u=await z.get(l,{headers:{accept:"application/sparql-results+json"},params:{query:d}});this.data=u.data.results.bindings.map(i=>{let v={};return Object.keys(i).forEach(S=>{v[S]=i[S].value}),v}),this.success=!0,this.error=null}catch(u){this.error=u.message,this.data=[],this.success=!1}finally{this.loading=!1}}}})}const K=`
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>

SELECT ?c ?t
WHERE {
  GRAPH ?g {
  ?c a dcat:Catalog ;
  	dcterms:title ?t .
  }
}
ORDER BY ?t`;function J(r=[]){return`
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
SELECT ?th ?pl (COUNT(?th) AS ?count)
WHERE {
  ?r a dcat:Resource ;
    ^dcterms:hasPart ?hasPart .
  ${r.length>0?`FILTER (?hasPart IN (${r.map(n=>`<${n}>`).join(", ")}))`:""}  
  ?r dcat:theme ?th .
  ?th skos:prefLabel ?pl .
}
GROUP BY ?th ?pl
ORDER BY DESC(?count) ?pl
LIMIT 10`}function Z(r=[],n="",d=[],l="",u=0){return`
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dcterms: <http://purl.org/dc/terms/>
    PREFIX geo: <http://www.opengis.net/ont/geosparql#>
    PREFIX geof: <http://www.opengis.net/def/function/geosparql/>

    SELECT ?r ?t ?d (GROUP_CONCAT(?th;separator="	") AS ?thlist) (GROUP_CONCAT(?thpl;separator="	") AS ?thpllist) ?weight
    WHERE {
        # Only look for Resources (not spatial Datasets)
        ?r a dcat:Resource .

        # Only look in selected cats
        ?r  ^dcterms:hasPart ?hasPart  .
        ${r.length>0?`FILTER (?hasPart IN (${r.map(i=>`<${i}>`).join(", ")}))`:""}  

        # Weighted text search
        {
          SELECT DISTINCT ?r ?t ?d (SUM(?w) AS ?weight)
          WHERE {
            ?r a dcat:Resource .
            {
              ?r
                dcterms:title ?t ;
                dcterms:description ?d ;
                .
              BIND (50 AS ?w)
              FILTER REGEX(?t, "^${n}$", "i")
            }
            UNION
            {
              ?r 
                dcterms:title ?t ;
                dcterms:description ?d ;
                .
              BIND (10 AS ?w)
              FILTER REGEX(?t, "${n}", "i")
              FILTER(?d!="")
            }
            UNION
            {
              ?r 
                dcterms:title ?t ;
                dcterms:description ?d ;
                .
              BIND (5 AS ?w)
              FILTER REGEX(?d, "${n}", "i")
            }  
          }
          GROUP BY ?r ?t ?d ?match
          ORDER BY DESC(?weight) ?t
        }

        # Theme filter. each theme's IRI is a new line in the VALUES {}
        ${d.length>0?`VALUES ?th { ${d.map(i=>`<${i}>`).join(" ")} }`:""}
        ?r dcat:theme ?th .
        ?th skos:prefLabel ?thpl .

        # Spatial Filter
        ${l!=""?`
        ?r geo:hasBoundingBox/geo:asWKT ?wkt ;
        FILTER (geof:sfOverlaps("${l})"^^geo:wktLiteral, ?wkt))`:""}

    } GROUP BY ?r ?t ?d ?weight
    ${u>0?`LIMIT ${u}`:""}`}const _=r=>(X("data-v-513b58af"),r=r(),V(),r),tt={class:"container"},et={class:"left-panel"},st={class:"query-option"},at=_(()=>t("h4",{class:"query-option-title"},"Catalogues to include",-1)),ot=["value"],lt=_(()=>t("h4",{class:"query-option-title"},"Search text",-1)),nt=_(()=>t("h4",{class:"query-option-title"},"Theme filter",-1)),rt=["value"],it={key:0},ct={class:"btn-container"},dt={class:"nowrap"},ut={class:"nowrap"},ht={class:"space-right"},pt=_(()=>t("button",{class:"btn",type:"submit"},"Search",-1)),_t={class:"right-panel"},ft={key:0},mt=_(()=>t("h3",null,"Loading...",-1)),wt=_(()=>t("div",{class:"loading-icon"},null,-1)),gt=[mt,wt],vt={key:1},Rt={key:0},Et=_(()=>t("thead",null,[t("th",null,"Resource Label"),t("th",null,"Resource Description"),t("th",null,"Theme Labels")],-1)),yt=["href"],St={class:"th-list"},bt=["href"],It={key:1},Tt=_(()=>t("h3",null,"Unable to search map",-1)),Ct={class:"error"},kt={key:2},Pt=_(()=>t("h3",null,"No results",-1)),Lt=[Pt],$t={key:2,class:"debug"},Ut=_(()=>t("b",null,"SPARQL query:",-1)),Nt=F({__name:"CatPrezSearchMap",setup(r){const n=P("catalogs")(),d=P("themes")(),l=P("search")(),u=w(""),i=w([]),v=w([]),S=w(H.None),$=w([]),I=w(!1),T=w(""),h=w(10),A=async(f,s)=>{S.value=s,$.value=f,await E()},U=async()=>{await d.fetch("c",J(i.value))},E=async(f=null)=>{f&&f.preventDefault(),T.value=Z(i.value,u.value,v.value,W($.value),h.value>0?parseInt(h.value.toString())+1:0),await l.fetch("c",T.value)};return G(async()=>{await n.fetch("c",K),n.data.forEach(f=>{i.value.push(f.c)}),await U(),d.data.forEach(f=>{v.value.push(f.th)}),await E()}),(f,s)=>(a(),o(R,null,[t("div",tt,[t("div",et,[t("form",{onSubmit:s[7]||(s[7]=e=>E(e)),class:"query-options"},[t("div",st,[at,t("ul",null,[(a(!0),o(R,null,b(c(n).data,e=>(a(),o("li",{key:e.c},[t("label",null,[y(t("input",{type:"checkbox",value:e.c,"onUpdate:modelValue":s[0]||(s[0]=m=>i.value=m),onChange:s[1]||(s[1]=async m=>{await U(),await E()})},null,40,ot),[[C,i.value]]),p(" "+g(e.t),1)])]))),128))]),lt,t("p",null,[y(t("input",{type:"search",name:"term",class:"search-input","onUpdate:modelValue":s[2]||(s[2]=e=>u.value=e),placeholder:"enter search terms"},null,512),[[N,u.value]])]),nt,t("ul",null,[(a(!0),o(R,null,b(c(d).data,e=>(a(),o("li",{key:e.th},[t("label",null,[y(t("input",{type:"checkbox",value:e.th,"onUpdate:modelValue":s[3]||(s[3]=m=>v.value=m),onChange:s[4]||(s[4]=m=>E())},null,40,rt),[[C,v.value]]),p(" "+g(e.pl),1)])]))),128)),c(d).data.length==0?(a(),o("li",it,"(none)")):k("",!0)])]),t("div",ct,[t("span",dt,[p("Results limit: "),y(t("input",{id:"input-limit",class:"space-right","onUpdate:modelValue":s[5]||(s[5]=e=>h.value=e)},null,512),[[N,h.value]])]),t("span",ut,[t("label",ht,[y(t("input",{"onUpdate:modelValue":s[6]||(s[6]=e=>I.value=e),type:"checkbox"},null,512),[[C,I.value]]),p("Show query")])]),pt])],32)]),t("div",_t,[L(Q,{ref:"searchMapRef","drawing-modes":["RECTANGLE"],onSelectionUpdated:A,style:"width: 100%; height: 550px; background-color: #eee;"},null,512)])]),c(l).loading?(a(),o("div",ft,gt)):(a(),o("div",vt,[c(l).data&&c(l).data.length>0?(a(),o("div",Rt,[t("h3",null,"Result set ("+g(h.value==0?`${h.value}`:c(l).data.length>h.value?`${h.value}+`:c(l).data.length)+")",1),t("table",null,[Et,t("tbody",null,[(a(!0),o(R,null,b(c(l).data,(e,m)=>(a(),o(R,null,[h.value===0||m<h.value?(a(),o("tr",{key:m},[t("td",null,[t("a",{target:"_blank",href:`/object?uri=${e.r}`},g(e.t),9,yt)]),t("td",null,g(e.d),1),t("td",St,[(a(!0),o(R,null,b(e.thlist.split("	"),(B,O)=>(a(),o("a",{target:"_blank",href:`/object?uri=${B}`},g(e.thpllist.split("	")[O]),9,bt))),256))])])):k("",!0)],64))),256))])])])):c(l).error?(a(),o("div",It,[Tt,t("div",Ct,g(c(l).error),1)])):(a(),o("div",kt,Lt))])),I.value?(a(),o("pre",$t,[p(`
`),Ut,p(`

`+g(T.value)+`

`,1)])):k("",!0)],64))}});const Ft=M(Nt,[["__scopeId","data-v-513b58af"]]),At=t("h1",null,"Data Catalog",-1),Bt=t("a",{href:"https://www.w3.org/TR/vocab-dcat-2/"},"DCAT",-1),qt=F({__name:"CatPrezHomeView",setup(r){return(n,d)=>{const l=Y("RouterLink");return a(),o(R,null,[At,t("p",null,[p(" A general data catalog conforming to "),Bt,p(", delivered as a read-only web system in both human and machine-readable views. The views are known as profiles and a list of them are available "),L(l,{to:"/s/profiles"},{default:j(()=>[p("here")]),_:1}),p(". ")]),L(Ft)],64)}}});export{qt as default};
