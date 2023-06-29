import{_ as U,h as s,c as r,n as W,a as n,d as F,e as k,w as N,q as P,t as h,F as m,P as Ee,r as D,Q as Z,S as q,f as O,p as ee,j as te,m as le,x as g,o as fe,U as Ie,V as de,W as he,y as xe,G as ve,b as S,R as Le,X as _e,N as be,i as Ne,L as Re,u as Ae,v as Oe,s as Be,M as De,Y as Ue,T as Fe,B as Ve,l as Me,D as ze}from"./index.e25ce7c1.js";import{A as We}from"./AdvancedSearch.d44f83a4.js";import{e as Ge,P as Qe,S as He}from"./helpers.2cb481e8.js";import{E as Je}from"./ErrorMessage.f8fd7f98.js";import{_ as Ke}from"./MapClient.vue_vue_type_script_setup_true_lang.2aa58df4.js";import{L as Xe}from"./LoadingMessage.0f6680de.js";const Ye={},Ze={class:"tooltip"},qe={class:"tooltip-text"};function et(d,e){return s(),r("span",Ze,[W(d.$slots,"default",{},void 0,!0),n("span",qe,[W(d.$slots,"text",{},void 0,!0)])])}const tt=U(Ye,[["render",et],["__scopeId","data-v-5b46f6b0"]]),lt=["href"],at=F({__name:"PredCell",props:{iri:null,qname:null,label:null,description:null,explanation:null},setup(d){const e=d;return(y,l)=>(s(),r("th",null,[(s(),k(Ee(e.description?tt:"slot"),null,{text:N(()=>[P(h(e.description),1)]),default:N(()=>[n("a",{href:e.iri,target:"_blank",rel:"noopener noreferrer"},[e.label?(s(),r(m,{key:0},[P(h(e.label),1)],64)):e.qname?(s(),r(m,{key:1},[P(h(e.qname),1)],64)):(s(),r(m,{key:2},[P(h(e.iri),1)],64))],8,lt)]),_:1}))]))}}),st=d=>(ee("data-v-bec69227"),d=d(),te(),d),ot={class:"prop-obj"},rt={class:"obj-value"},nt={key:0},it=["href"],ut=["href"],ct=["href"],pt=["href"],dt={key:1,class:"geom-cell"},vt=st(()=>n("i",{class:"fa-regular fa-clipboard"},null,-1)),ft=[vt],ht={class:"obj-tag"},_t={key:0,class:"badge outline",title:"Language"},bt=["href"],mt=F({__name:"ObjCell",props:{value:null,qname:null,datatype:null,language:null,description:null,termType:null,label:null,rows:null},setup(d){const e=d,y=["http://www.opengis.net/ont/geosparql#geoJSONLiteral","http://www.opengis.net/ont/geosparql#wktLiteral"],l=100;function C(v){navigator.clipboard.writeText(v.trim())}return(v,x)=>(s(),r("div",ot,[n("div",rt,[e.termType==="BlankNode"?(s(),r("table",nt,[(s(!0),r(m,null,D(e.rows,A=>(s(),k(me,Z(q(A)),null,16))),256))])):e.termType==="NamedNode"?(s(),r(m,{key:1},[e.label?(s(),r("a",{key:0,href:e.value,target:"_blank",rel:"noopener noreferrer"},h(e.label),9,it)):e.qname?(s(),r("a",{key:1,href:e.value,target:"_blank",rel:"noopener noreferrer"},h(e.qname),9,ut)):(s(),r("a",{key:2,href:e.value,target:"_blank",rel:"noopener noreferrer"},h(e.value),9,ct))],64)):(s(),r(m,{key:2},[e.value.startsWith("http")?(s(),r("a",{key:0,href:e.value,target:"_blank",rel:"noopener noreferrer"},h(e.value),9,pt)):e.datatype&&y.includes(e.datatype.value)?(s(),r("div",dt,[n("pre",null,h(e.value.length>l?`${e.value.slice(0,l)}...`:e.value),1),n("button",{class:"btn outline sm",title:"Copy geometry",onClick:x[0]||(x[0]=A=>C(e.value))},ft)])):(s(),r(m,{key:2},[P(h(e.value),1)],64))],64))]),n("div",ht,[e.language?(s(),r("span",_t,h(e.language),1)):e.datatype?(s(),r("a",{key:1,href:e.datatype.value,target:"_blank",rel:"noopener noreferrer",class:"badge outline",title:"Datatype"},[e.datatype.qname?(s(),r(m,{key:0},[P(h(e.datatype.qname),1)],64)):(s(),r(m,{key:1},[P(h(e.datatype.value),1)],64))],8,bt)):O("",!0)])]))}});const gt=U(mt,[["__scopeId","data-v-bec69227"]]),yt={class:"prop-objs"},kt=F({__name:"PropRow",props:{iri:null,objs:null,qname:null,label:null,description:null,explanation:null,order:null},setup(d){const e=d;return(y,l)=>(s(),r("tr",null,[le(at,{iri:e.iri,qname:e.qname,label:e.label,description:e.description,explanation:e.explanation},null,8,["iri","qname","label","description","explanation"]),n("td",yt,[(s(!0),r(m,null,D(e.objs,C=>(s(),k(gt,Z(q(C)),null,16))),256))])]))}});const me=U(kt,[["__scopeId","data-v-3863cf0a"]]),ae=d=>(ee("data-v-e15489e3"),d=d(),te(),d),Ct={class:"page-title"},$t={class:"iri"},jt=ae(()=>n("span",{class:"badge"},"IRI",-1)),wt=["href"],Pt=ae(()=>n("i",{class:"fa-regular fa-clipboard"},null,-1)),Tt=[Pt],St={class:"type"},Et=ae(()=>n("span",{class:"badge"},"Type",-1)),It=["href"],xt={key:0},Lt=F({__name:"PropTable",props:{item:null,properties:null,blankNodes:null,prefixes:null,hiddenPreds:null},setup(d){const e=d,y=g([]);function l(t){let b="";return Object.entries(e.prefixes).forEach(([i,E])=>{t.value.startsWith(E)&&(b=i+":"+t.value.split(E)[1])}),b}function C(t){if(t==="a")return e.prefixes.rdf+"type";{const[b,i]=t.split(":");return e.prefixes[b]+i}}function v(t,b){return t.annotations.find(i=>i.predicate.value===C(b))?.object.value}function x(){navigator.clipboard.writeText(e.item.iri.trim())}function A(t){let b={};return t.forEach(i=>{var E;b[E=i.predicate.value]??(b[E]={iri:i.predicate.value,objs:[],qname:l(i.predicate),label:v(i.predicate,"rdfs:label"),description:v(i.predicate,"dcterms:description"),explanation:v(i.predicate,"dcterms:provenance"),order:0}),b[i.predicate.value].objs.push({value:i.object.value,qname:i.object instanceof Ie?l(i.object):void 0,datatype:i.object instanceof de?{value:i.object.datatype.value,qname:l(i.object.datatype)}:void 0,language:i.object instanceof de?i.object.language:void 0,description:void 0,termType:i.object.termType,label:void 0,rows:i.object instanceof he?A(e.blankNodes.filter(G=>G.subject.id===i.object.id)):[]})}),Object.values(b).sort((i,E)=>i.order-E.order)}return fe(()=>{const t=e.properties.filter(b=>!e.hiddenPreds.includes(b.predicate.value));y.value=A(t)}),(t,b)=>(s(),r(m,null,[n("h1",Ct,[P(h(e.item.title||e.item.iri)+" ",1),n("small",$t,[jt,n("a",{href:e.item.iri,target:"_blank",rel:"noopener noreferrer"},h(e.item.iri),9,wt),n("button",{class:"btn outline sm",title:"Copy IRI",onClick:b[0]||(b[0]=i=>x())},Tt)]),n("small",St,[Et,n("a",{href:e.item.type,target:"_blank",rel:"noopener noreferrer"},h(e.item.type),9,It)])]),W(t.$slots,"map",{},void 0,!0),e.item.description?(s(),r("p",xt,[n("em",null,h(e.item.description),1)])):O("",!0),n("table",null,[W(t.$slots,"top",{},void 0,!0),(s(!0),r(m,null,D(y.value,i=>(s(),k(me,Z(q(i)),null,16))),256)),W(t.$slots,"bottom",{},void 0,!0)])],64))}});const Nt=U(Lt,[["__scopeId","data-v-e15489e3"]]),Rt={class:"concept-top"},At={key:1,class:"concept-left"},Ot=F({__name:"ConceptComponent",props:{iri:null,title:null,link:null,children:null,narrower:null,broader:null,baseUrl:null,collapseAll:{type:Boolean}},setup(d){const e=d,y=g(!0);return xe(()=>e.collapseAll,(l,C)=>{y.value=l}),(l,C)=>{const v=be("ConceptComponent",!0);return s(),r(m,null,[n("div",Rt,[e.children?(s(),r("button",{key:0,class:"concept-left btn outline",onClick:C[0]||(C[0]=x=>y.value=!y.value)},[n("i",{class:ve(`fa-regular fa-${y.value?"plus":"minus"}`)},null,2)])):(s(),r("div",At)),le(S(Le),{class:"concept",to:e.link},{default:N(()=>[P(h(e.title||e.iri),1)]),_:1},8,["to"])]),e.children?(s(),r("div",{key:0,class:ve(`concept-children ${y.value?"collapse":""}`)},[(s(!0),r(m,null,D(e.children,x=>(s(),k(v,_e(x,{baseUrl:e.baseUrl,collapseAll:e.collapseAll}),null,16,["baseUrl","collapseAll"]))),256))],2)):O("",!0)],64)}}});const Bt=U(Ot,[["__scopeId","data-v-e0711a9f"]]),se=d=>(ee("data-v-46a122c2"),d=d(),te(),d),Dt=se(()=>n("th",null,"Concepts",-1)),Ut={class:"concepts"},Ft=se(()=>n("i",{class:"fa-regular fa-plus"},null,-1)),Vt=se(()=>n("i",{class:"fa-regular fa-minus"},null,-1)),Mt=F({__name:"PropTableView",setup(d){const{namedNode:e}=ze,y=Ne(Ve),l=Re(),C=Ae(),{store:v,prefixes:x,parseIntoStore:A,qname:t}=Oe(),{data:b,profiles:i,loading:E,error:G,doRequest:ge}=Be(),oe=[t("rdfs:label")],ye=[t("dcterms:description")],ke=[t("geo:hasBoundingBox"),t("geo:hasGeometry")],Ce=[t("rdfs:member"),t("skos:member"),t("dcterms:hasPart")],$e=5,X="lt-prfl:alt-profile",p=g({}),Q=g([]),re=g([]),Y=g([]),ne=g([]),H=g(!0),J=g([]),B=g(!1),V=g(!1),I=g(null),M=g(!1),z=g({}),ie=g(""),K=g([t("a"),t("dcterms:identifier"),t("prez:count")]),R=g(null),$=g({showChildren:!1,childrenTitle:"",showButton:!1,buttonTitle:"",buttonLink:""});function j(a){switch(p.value.type=a,a){case t("dcat:Catalog"):M.value=!0,z.value={catalog:p.value.iri},$.value={...$.value,showChildren:!0,childrenTitle:"Resources"};break;case t("dcat:Resource"):break;case t("dcat:Dataset"):M.value=!0,z.value={dataset:p.value.iri},$.value={showChildren:!1,showButton:!0,childrenTitle:"Members",buttonTitle:"Collections",buttonLink:"/collections"};break;case t("geo:FeatureCollection"):M.value=!0,z.value={collection:p.value.iri},$.value={showChildren:!1,showButton:!0,childrenTitle:"Members",buttonTitle:"Features",buttonLink:"/items"};break;case t("geo:Feature"):break;case t("skos:ConceptScheme"):M.value=!0,z.value={vocab:p.value.iri},K.value.push(t("skos:hasTopConcept")),$.value.showChildren=!0;break;case t("skos:Collection"):$.value={...$.value,showChildren:!0,childrenTitle:"Concepts"};break;case t("skos:Concept"):break;case t("prof:Profile"):break}}function je(){const a=V.value?e(l.query.uri):v.value.getSubjects(e(t("a")),e(p.value.type),null)[0];p.value.iri=a.id;const u=R.value.labelPredicates.length>0?R.value.labelPredicates:oe,c=R.value.descriptionPredicates.length>0?R.value.labelPredicates:ye;K.value.push(...u,...c),v.value.forEach(o=>{if(u.includes(o.predicate.value)?p.value.title=o.object.value:c.includes(o.predicate.value)?p.value.description=o.object.value:Ce.includes(o.predicate.value)?(ie.value=o.predicate.value,K.value.push(o.predicate.value)):o.predicate.value===t("a")&&V.value?j(o.object.value):ke.indexOf(o.predicate.value)>=0&&v.value.forEach(f=>{J.value.push({label:"",fcLabel:"",wkt:f.object.value,uri:p.value.iri,link:`/object?uri=${p.value.iri}`})},o.object,e(t("geo:asWKT")),null,null),!B.value){const f=ce(o,v.value);Y.value.push(f);let L=0;pe(o,v.value,L)}},a,null,null,null),J.value.forEach(o=>{o.label=p.value.title?p.value.title:p.value.iri})}function we(){let a=[];if(V.value)a.push({name:"Get Object by URI",url:"/object"});else{I.value&&a.push({name:Me(I.value)+" Home",url:`/${I.value[0].toLowerCase()}`});const u=l.path.split("/").slice(1,-1);let c=!1;u.forEach((o,f)=>{if(c){c=!1;return}switch(o){case"catalogs":a.push({name:"Catalogs",url:"/c/catalogs"}),f+1!==u.length&&(a.push({name:"Catalog",url:`/c/catalogs/${l.params.catalogId}`}),c=!0);break;case"datasets":a.push({name:"Datasets",url:"/s/datasets"}),f+1!==u.length&&(a.push({name:"Dataset",url:`/s/datasets/${l.params.datasetId}`}),c=!0);break;case"collections":a.push({name:"Feature Collections",url:`/s/datasets/${l.params.datasetId}/collections`}),f+1!==u.length&&(a.push({name:"Feature Collection",url:`/s/datasets/${l.params.datasetId}/collections/${l.params.featureCollectionId}`}),c=!0);break;case"items":a.push({name:"Features",url:`/s/datasets/${l.params.datasetId}/collections/${l.params.featureCollectionId}/items`});break;case"vocab":a.push({name:"Vocabularies",url:"/v/vocab"}),f+1!==u.length&&(a.push({name:"Vocabulary",url:`/v/vocab/${l.params.vocabId}`}),c=!0);break;case"collection":a.push({name:"Collections",url:"/v/collection"}),f+1!==u.length&&(a.push({name:"Collection",url:`/v/vocab/${l.params.collectionId}`}),c=!0);break;case"profiles":a.push({name:"Profiles",url:`${I.value?I.value[0].toLowerCase():""}/profiles`});break}})}return a.push({name:p.value.title||p.value.iri,url:l.path}),B.value&&a.push({name:"Alternate Profiles",url:`${l.path}?_profile=${X}`}),a}function ue(a){let u=a.split("#");return u.length===1?u[0].split("/").slice(-1)[0]:u.slice(-1)[0]}function Pe(){if(p.value.type===t("skos:ConceptScheme"))Te();else{const a=R.value.labelPredicates.length>0?R.value.labelPredicates:oe;v.value.forObjects(u=>{let c={iri:u.id,extras:{}};v.value.forEach(o=>{if(a.includes(o.predicate.value))c.title=o.object.value;else if(o.predicate.value===t("prez:link"))c.link=o.object.value;else if(o.predicate.value===t("a"))c.type=o.object.value;else if(p.value.type===t("dcat:Catalog")&&o.predicate.value===t("dcterms:publisher")){const f={iri:o.object.value,label:ue(o.object.value)};v.value.forObjects(L=>{f.label=L.value},o.object,t("rdfs:label"),null),c.extras.publisher=f}else if(p.value.type===t("dcat:Catalog")&&o.predicate.value===t("dcterms:creator")){const f={iri:o.object.value,label:ue(o.object.value)};v.value.forObjects(L=>{f.label=L.value},o.object,t("rdfs:label"),null),c.extras.creator=f}else if(p.value.type===t("dcat:Catalog")&&o.predicate.value===t("dcterms:issued")){const f={label:o.object.value};c.extras.issued=f}},u,null,null,null),Q.value.push(c)},e(p.value.iri),e(ie.value),null),Q.value.sort((u,c)=>u.title&&c.title?u.title.localeCompare(c.title):u.title?-1:c.title?1:u.iri.localeCompare(c.iri))}}function Te(){let a=[];v.value.forSubjects(_=>{let w={iri:_.id,narrower:[],broader:"",title:"",link:""};v.value.forEach(T=>{T.predicate.value===t("skos:prefLabel")?w.title=T.object.value:T.predicate.value===t("prez:link")?w.link=T.object.value:T.predicate.value===t("skos:narrower")?w.narrower.push(T.object.value):T.predicate.value===t("skos:broader")&&(w.broader=T.object.value)},_,null,null,null),a.push(w)},e(t("skos:inScheme")),e(p.value.iri),null);const u=v.value.getObjects(e(p.value.iri),e(t("skos:hasTopConcept")),null).map(_=>_.id),c=v.value.getSubjects(e(t("skos:topConceptOf")),e(p.value.iri),null).map(_=>_.id),o=[...new Set([...u,...c])],f=a.reduce((_,w,T)=>(_[w.iri]=T,_),{});let L=[];a.forEach(_=>{if(_.narrower.length>0&&_.narrower.forEach(w=>a[f[w]].broader=_.iri),o.includes(_.iri)){L.push(_);return}if(_.broader){const w=a[f[_.broader]];w.children=[...w.children||[],_].sort((T,Se)=>T.title.localeCompare(Se.title))}}),L.sort((_,w)=>_.title.localeCompare(w.title)),re.value=L}function ce(a,u){return{subject:a.subject,predicate:{termType:a.predicate.termType,value:a.predicate.value,id:a.predicate.id,annotations:u.getQuads(a.predicate,null,null,null)},object:a.object,value:a.value,graph:a.graph,termType:a.termType,equals:a.equals,toJSON:a.toJSON}}function pe(a,u,c){a.object instanceof he&&(c++,u.forEach(o=>{const f=ce(o,u);ne.value.push(f),c<$e&&pe(o,u,c)},a.object,null,null,null))}return De(()=>{l.path.startsWith("/c/")?(I.value="CatPrez",l.path.match(/c\/profiles\/.+/)?j(t("prof:Profile")):l.path.match(/c\/catalogs\/.+\/.+/)?j(t("dcat:Resource")):l.path.match(/c\/catalogs\/.+/)&&j(t("dcat:Catalog"))):l.path.startsWith("/s/")?(I.value="SpacePrez",l.path.match(/s\/profiles\/.+/)?j(t("prof:Profile")):l.path.match(/s\/datasets\/.+\/collections\/.+\/items\/.+/)?j(t("geo:Feature")):l.path.match(/s\/datasets\/.+\/collections\/.+/)?j(t("geo:FeatureCollection")):l.path.match(/s\/datasets\/.+/)&&j(t("dcat:Dataset"))):l.path.startsWith("/v/")?(I.value="VocPrez",l.path.match(/v\/profiles\/.+/)?j(t("prof:Profile")):l.path.match(/v\/vocab\/.+\/.+/)||l.path.match(/v\/collection\/.+\/.+/)?j(t("skos:Concept")):l.path.match(/v\/vocab\/.+/)?j(t("skos:ConceptScheme")):l.path.match(/v\/collection\/.+/)&&j(t("skos:Collection"))):l.path.startsWith("/profiles/")?j(t("prof:Profile")):l.path.startsWith("/object")&&(V.value=!0),l.query._profile===X&&!l.query._mediatype&&(B.value=!0)}),fe(()=>{E.value=!0,Ge().then(()=>{console.log("profiles ready"),ge(`${y}${l.fullPath}`,()=>{R.value=C.profiles[i.value.find(a=>a.default).uri],l.query&&l.query._profile&&(l.query._mediatype||![R.value.token,X].includes(l.query._profile))&&window.location.replace(`${y}${l.path}?_profile=${l.query._profile}${l.query._mediatype?`&_mediatype=${l.query._mediatype}`:""}`),B.value?C.rightNavConfig={enabled:!1}:C.rightNavConfig={enabled:!0,profiles:i.value,currentUrl:l.path},A(b.value),je(),!B.value&&$.value.showChildren&&Pe(),document.title=p.value.title?`${p.value.title} | Prez`:"Prez",C.breadcrumbs=we()})})}),(a,u)=>{const c=be("RouterLink");return B.value?(s(),k(Qe,{key:0,profiles:S(i),path:S(l).path},null,8,["profiles","path"])):(s(),r(m,{key:1},[Y.value.length>0?(s(),k(Nt,{key:0,item:p.value,properties:Y.value,blankNodes:ne.value,prefixes:S(x),hiddenPreds:K.value},Ue({map:N(()=>[J.value.length?(s(),k(Ke,{key:0,ref:"searchMapRef","geo-w-k-t":J.value},null,8,["geo-w-k-t"])):O("",!0)]),_:2},[p.value.type===S(t)("skos:ConceptScheme")?{name:"bottom",fn:N(()=>[n("tr",null,[Dt,n("td",null,[n("div",Ut,[n("button",{id:"collapse-all-btn",onClick:u[0]||(u[0]=o=>H.value=!H.value),class:"btn"},[H.value?(s(),r(m,{key:0},[Ft,P(" Expand all")],64)):(s(),r(m,{key:1},[Vt,P(" Collapse all")],64))]),(s(!0),r(m,null,D(re.value,o=>(s(),k(Bt,_e(o,{baseUrl:S(l).path,collapseAll:H.value}),null,16,["baseUrl","collapseAll"]))),256))])])])]),key:"0"}:$.value.showChildren?{name:"bottom",fn:N(()=>[n("tr",null,[n("th",null,h($.value.childrenTitle),1),p.value.type===S(t)("dcat:Catalog")?(s(),k(He,{key:0,items:Q.value,predicates:["publisher","creator","issued"]},null,8,["items"])):(s(),r("td",{key:1},[n("div",{class:"children-list"},[(s(!0),r(m,null,D(Q.value,o=>(s(),k(c,{to:o.link||""},{default:N(()=>[P(h(o.title||o.iri),1)]),_:2},1032,["to"]))),256))])]))])]),key:"1"}:$.value.showButton&&!V.value?{name:"bottom",fn:N(()=>[n("tr",null,[n("th",null,h($.value.childrenTitle),1),n("td",null,[le(c,{to:`${S(l).path}${$.value.buttonLink}`,class:"btn"},{default:N(()=>[P(h($.value.buttonTitle),1)]),_:1},8,["to"])])])]),key:"2"}:void 0]),1032,["item","properties","blankNodes","prefixes","hiddenPreds"])):S(E)?(s(),k(Xe,{key:1})):S(G)?(s(),k(Je,{key:2,message:S(G)},null,8,["message"])):O("",!0),M.value?(s(),k(Fe,{key:3,to:"#right-bar-content"},[I.value?(s(),k(We,{key:0,flavour:I.value,query:z.value},null,8,["flavour","query"])):O("",!0)])):O("",!0)],64))}}});const Kt=U(Mt,[["__scopeId","data-v-46a122c2"]]);export{Kt as default};
