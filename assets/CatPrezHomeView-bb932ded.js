import{d as Z,i as ue,M as de,E as he,a9 as j,G as pe,x as d,k as D,y as L,o as ee,J as me,h as l,c as o,a as e,z as I,aa as W,ac as _e,b as u,e as f,F as m,r as T,ab as Y,t as R,f as P,q as _,m as O,a0 as K,w as q,X as ge,O as ve,U as fe,p as we,j as ye,V as be,_ as Se,u as Re,l as Ee,$ as Ce}from"./index-8a67cbc7.js";import{S as ke,_ as Le,s as $e}from"./MapClient.vue_vue_type_script_setup_true_lang-8cc5b589.js";import{E as G,L as M}from"./LoadingMessage-3409ceb1.js";import{B as Ie}from"./BaseModal-3ad8610c.js";function Te(c=[]){return`
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dcterms: <http://purl.org/dc/terms/>
    
    SELECT ?theme ?title (COUNT(?theme) AS ?count)
    WHERE {
        ?resource a dcat:Resource ;
            ^dcterms:hasPart ?hasPart .
        ${c.length>0?`FILTER (?hasPart IN (${c.map(r=>`<${r}>`).join(", ")}))`:""}  
        ?resource dcat:theme ?theme .
        ?theme skos:prefLabel ?title .
    }
    GROUP BY ?theme ?title
    ORDER BY DESC(?count) ?title
    LIMIT 10`}function Pe(c=[],r="",w=[],E="",h=0){return`
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dcterms: <http://purl.org/dc/terms/>
    PREFIX geo: <http://www.opengis.net/ont/geosparql#>
    PREFIX geof: <http://www.opengis.net/def/function/geosparql/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

    SELECT ?resource ?title ?desc (GROUP_CONCAT(?theme;separator="	") AS ?themeList) (GROUP_CONCAT(?themeLabel;separator="	") AS ?themeListLabels) ?weight
    WHERE {
        # Only look for Resources (not spatial Datasets)
        ?resource a dcat:Resource .

        # Only look in selected cats
        ?resource ^dcterms:hasPart ?hasPart .
        ${c.length>0?`FILTER (?hasPart IN (${c.map(C=>`<${C}>`).join(", ")}))`:""}

        # Weighted text search
        {
            SELECT DISTINCT ?resource ?title ?desc (SUM(?w) AS ?weight)
            WHERE {
                ?resource a dcat:Resource .
                {
                    ?resource
                        dcterms:title ?title ;
                        dcterms:description ?desc ;
                        .
                    BIND (50 AS ?w)
                    FILTER REGEX(?title, "^${r}$", "i")
                } UNION {
                    ?resource 
                        dcterms:title ?title ;
                        dcterms:description ?desc ;
                        .
                    BIND (10 AS ?w)
                    FILTER REGEX(?title, "${r}", "i")
                    FILTER(?desc!="")
                } UNION {
                    ?resource 
                        dcterms:title ?title ;
                        dcterms:description ?desc ;
                        .
                    BIND (5 AS ?w)
                    FILTER REGEX(?desc, "${r}", "i")
                }  
            }
            GROUP BY ?resource ?title ?desc ?match
            ORDER BY DESC(?weight) ?title
        }

        # Theme filter. each theme's IRI is a new line in the VALUES {}
        ${w.length>0?`VALUES ?theme { ${w.map(C=>`<${C}>`).join(" ")} }`:""}
        ?resource dcat:theme ?theme .
        ?theme skos:prefLabel ?themeLabel .

        # Spatial Filter
        ${E!=""?`
        ?resource geo:hasBoundingBox/geo:asWKT ?wkt ;
        FILTER (geof:sfOverlaps("${E})"^^geo:wktLiteral, ?wkt))`:""}

    } GROUP BY ?resource ?title ?desc ?weight
    ${h>0?`LIMIT ${h}`:""}`}const i=c=>(we("data-v-a4be3fb2"),c=c(),ye(),c),qe={class:"catalog-search"},Ne={class:"search-options"},Ue={class:"search-form-container"},Ae={class:"search-form"},Ve={class:"form-section"},Be=i(()=>e("h4",null,"Text Search",-1)),Fe={class:"form-section"},De=i(()=>e("h4",null,"Catalogues",-1)),Ge={class:"catalog-buttons"},Me={class:"select-all-input"},Oe=["checked"],xe=i(()=>e("label",{for:"select-all-catalogs"},"Select all",-1)),Xe={key:2,class:"catalog-options"},ze={class:"catalog-option"},He=["id","value"],Qe=["for"],je={class:"form-section"},We=i(()=>e("h4",null,"Themes",-1)),Ye={class:"theme-buttons"},Ke={class:"select-all-input"},Je=["checked"],Ze=i(()=>e("label",{for:"select-all-themes"},"Select all",-1)),et={key:2,class:"theme-options"},tt={class:"theme-option"},at=["value","id"],st=["for"],lt={class:"bottom-buttons"},ot=i(()=>e("i",{class:"fa-regular fa-code"},null,-1)),nt={class:"right-buttons"},rt={class:"result-limit-input"},it=i(()=>e("label",{for:"result-limit"},"Result limit",-1)),ct=i(()=>e("i",{class:"fa-regular fa-magnifying-glass"},null,-1)),ut={class:"search-map"},dt={class:"results"},ht=i(()=>e("h3",null,"Results",-1)),pt={key:2},mt=i(()=>e("thead",null,[e("tr",null,[e("th",null,"Title"),e("th",null,"Themes")])],-1)),_t=["href"],gt=["href"],vt=i(()=>e("br",null,null,-1)),ft={colspan:"2",class:"desc"},wt={key:3},yt={class:"sparql-query-content"},bt=i(()=>e("i",{class:"fa-regular fa-copy"},null,-1)),J=200,St=Z({__name:"CatPrezSearchMap",setup(c){const{namedNode:r}=be,w=ue(de),{loading:E,error:h,apiGetRequest:C}=he(),{loading:te,error:N,sparqlGetRequest:ae}=j(),{loading:se,error:U,sparqlGetRequest:le}=j(),{store:x,parseIntoStore:oe,qnameToIri:X}=pe(),y=d([]),b=d([]),p=d([]),g=d([]),$=d(""),k=d(10),A=d({type:ke.None,coords:[]}),V=d(!1),B=d([]),F=D(()=>Pe(p.value,$.value,g.value,$e(A.value.coords),k.value>0?parseInt(k.value.toString()):0)),z=D(()=>y.value.every(a=>p.value.includes(a.iri))),H=D(()=>b.value.every(a=>g.value.includes(a.iri)));function ne(){p.value=z.value?[]:y.value.map(a=>a.iri)}function re(){g.value=H.value?[]:b.value.map(a=>a.iri)}function ie(a,t){A.value={type:t,coords:a}}async function ce(){const{data:a}=await C("/c/catalogs");if(a&&!h.value){oe(a);const t=[];x.value.forSubjects(s=>{if(!s.value.endsWith("/system/catprez")){const n={iri:s.value};n.title=ve(s.value,x.value),t.push(n)}},r(X("a")),r(X("dcat:Catalog")),null),y.value=t.sort(fe)}}async function Q(){const a=await ae(`${w}/sparql`,Te(p.value));a&&!N.value&&(b.value=a.results.bindings.map(t=>({title:t.title.value,iri:t.theme.value})))}async function v(){const a=await le(`${w}/sparql`,F.value);a&&!U.value&&(B.value=a.results.bindings.map(t=>({iri:t.resource.value,title:t.title.value,description:t.desc.value,themes:t.themeList.value.split("	").map((s,n)=>({iri:s,title:t.themeListLabels.value.split("	")[n]}))})))}return L(p,async(a,t)=>{await Q(),await v()},{deep:!0}),L(g,async(a,t)=>{await v()},{deep:!0}),L(k,async(a,t)=>{await v()}),L($,async(a,t)=>{await v()}),L(A,async(a,t)=>{await v()},{deep:!0}),ee(async()=>{await me(),await ce(),p.value=y.value.map(a=>a.iri),await Q(),g.value=b.value.map(a=>a.iri)}),(a,t)=>(l(),o(m,null,[e("div",qe,[e("div",Ne,[e("div",Ue,[e("div",Ae,[e("div",Ve,[Be,I(e("input",{type:"search",name:"term",class:"search-input","onUpdate:modelValue":t[0]||(t[0]=s=>$.value=s),placeholder:"Search...",onKeyup:t[1]||(t[1]=_e(s=>v(),["enter"]))},null,544),[[W,$.value]])]),e("div",Fe,[De,e("div",Ge,[e("div",Me,[e("input",{type:"checkbox",name:"select-all-catalogs",id:"select-all-catalogs",onChange:ne,checked:z.value},null,40,Oe),xe])]),u(E)?(l(),f(M,{key:0})):u(h)?(l(),f(G,{key:1,message:`Unable to load catalogs: ${u(h)}`},null,8,["message"])):y.value.length>0?(l(),o("ul",Xe,[(l(!0),o(m,null,T(y.value,(s,n)=>(l(),o("li",ze,[I(e("input",{type:"checkbox",id:`catalog-${n}`,value:s.iri,"onUpdate:modelValue":t[2]||(t[2]=S=>p.value=S)},null,8,He),[[Y,p.value]]),e("label",{for:`catalog-${n}`},R(s.title),9,Qe)]))),256))])):P("",!0)]),e("div",je,[We,e("div",Ye,[e("div",Ke,[e("input",{type:"checkbox",name:"select-all-themes",id:"select-all-themes",onChange:re,checked:H.value},null,40,Je),Ze])]),u(te)?(l(),f(M,{key:0})):u(N)?(l(),f(G,{key:1,message:`Unable to load catalogs: ${u(N)}`},null,8,["message"])):b.value.length>0?(l(),o("ul",et,[(l(!0),o(m,null,T(b.value,(s,n)=>(l(),o("li",tt,[I(e("input",{type:"checkbox",value:s.iri,"onUpdate:modelValue":t[3]||(t[3]=S=>g.value=S),id:`theme-${n}`},null,8,at),[[Y,g.value]]),e("label",{for:`theme-${n}`},R(s.title),9,st)]))),256))])):P("",!0)])]),e("div",lt,[e("button",{class:"btn outline",onClick:t[4]||(t[4]=s=>V.value=!0)},[_("Show Query "),ot]),e("div",nt,[e("div",rt,[it,I(e("input",{id:"result-limit",type:"number","onUpdate:modelValue":t[5]||(t[5]=s=>k.value=s),min:"1",max:"100"},null,512),[[W,k.value]])]),e("button",{class:"btn",onClick:t[6]||(t[6]=s=>v())},[_("Search "),ct])])])]),e("div",ut,[O(Le,{"drawing-modes":["RECTANGLE"],onSelectionUpdated:ie})])]),e("div",dt,[ht,u(se)?(l(),f(M,{key:0})):u(U)?(l(),f(G,{key:1,message:u(U)},null,8,["message"])):B.value.length>0?(l(),o("table",pt,[mt,e("tbody",null,[(l(!0),o(m,null,T(B.value,(s,n)=>(l(),o(m,null,[e("tr",{class:K(`${n%2===1?"grey":""}`)},[e("td",null,[e("a",{href:`/object?uri=${encodeURIComponent(s.iri)}`},R(s.title),9,_t)]),e("td",null,[(l(!0),o(m,null,T(s.themes,S=>(l(),o(m,null,[e("a",{href:`/object?uri=${S.iri}`},R(S.title),9,gt),vt],64))),256))])],2),s.description?(l(),o("tr",{key:0,class:K(`${n%2===1?"grey":""}`)},[e("td",ft,R(s.description.length>J?s.description.slice(0,J)+"...":s.description),1)],2)):P("",!0)],64))),256))])])):(l(),o("div",wt," No results "))])]),V.value?(l(),f(Ie,{key:0,onModalClosed:t[8]||(t[8]=s=>V.value=!1)},{headerMiddle:q(()=>[_("Spatial Search SPARQL Query")]),footer:q(()=>[e("button",{class:"btn outline sparql-copy-btn",onClick:t[7]||(t[7]=s=>u(ge)(F.value)),title:"Copy SPARQL query"},[_("Copy "),bt])]),default:q(()=>[e("div",yt,[e("pre",null,R(F.value.trim()),1)])]),_:1})):P("",!0)],64))}});const Rt=Se(St,[["__scopeId","data-v-a4be3fb2"]]),Et=e("h1",{class:"page-title"},"Data Catalog",-1),Ct=e("a",{href:"https://www.w3.org/TR/vocab-dcat-2/"},"DCAT",-1),Tt=Z({__name:"CatPrezHomeView",setup(c){const r=Re();return ee(()=>{r.rightNavConfig={enabled:!1},document.title="Data Catalog Home | Prez",r.pageHeading={name:"CatPrez",url:"/c"},r.breadcrumbs=[{name:Ee("CatPrez")+" Home",url:"/c"}]}),(w,E)=>{const h=Ce("RouterLink");return l(),o(m,null,[Et,e("p",null,[_(" A general data catalog conforming to "),Ct,_(", delivered as a read-only web system in both human and machine-readable views. The views are known as profiles and a list of them are available "),O(h,{to:"/s/profiles"},{default:q(()=>[_("here")]),_:1}),_(". ")]),O(Rt)],64)}}});export{Tt as default};
