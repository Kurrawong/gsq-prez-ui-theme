import{_ as D,h as a,c as n,q as M,a as r,d as U,e as j,w as L,k as $,t as v,F as h,Q as Te,r as O,S as Z,U as ee,f as A,p as te,j as le,l as ae,x as m,o as ve,V as Ee,W as pe,X as fe,y as Se,G as de,b as S,R as Ie,Y as he,P as _e,i as xe,N as Le,u as Ne,v as Re,s as Ae,O as Be,Z as Oe,T as De,B as Ue,n as Fe,D as Ve}from"./index.65cb3f6a.js";import{A as ze}from"./AdvancedSearch.af91f3dc.js";import{P as Me}from"./ProfilesTable.251f4b0e.js";import{E as We}from"./ErrorMessage.bc6adef0.js";import{_ as Ge}from"./MapClient.vue_vue_type_script_setup_true_lang.dcff2de3.js";const Qe={},He={class:"tooltip"},Je={class:"tooltip-text"};function Ke(p,e){return a(),n("span",He,[M(p.$slots,"default",{},void 0,!0),r("span",Je,[M(p.$slots,"text",{},void 0,!0)])])}const Xe=D(Qe,[["render",Ke],["__scopeId","data-v-5b46f6b0"]]),qe=["href"],Ye=U({__name:"PredCell",props:{iri:null,qname:null,label:null,description:null,explanation:null},setup(p){const e=p;return(k,l)=>(a(),n("th",null,[(a(),j(Te(e.description?Xe:"slot"),null,{text:L(()=>[$(v(e.description),1)]),default:L(()=>[r("a",{href:e.iri,target:"_blank",rel:"noopener noreferrer"},[e.label?(a(),n(h,{key:0},[$(v(e.label),1)],64)):e.qname?(a(),n(h,{key:1},[$(v(e.qname),1)],64)):(a(),n(h,{key:2},[$(v(e.iri),1)],64))],8,qe)]),_:1}))]))}}),Ze=p=>(te("data-v-bec69227"),p=p(),le(),p),et={class:"prop-obj"},tt={class:"obj-value"},lt={key:0},at=["href"],st=["href"],ot=["href"],nt=["href"],rt={key:1,class:"geom-cell"},it=Ze(()=>r("i",{class:"fa-regular fa-clipboard"},null,-1)),ut=[it],ct={class:"obj-tag"},pt={key:0,class:"badge outline",title:"Language"},dt=["href"],vt=U({__name:"ObjCell",props:{value:null,qname:null,datatype:null,language:null,description:null,termType:null,label:null,rows:null},setup(p){const e=p,k=["http://www.opengis.net/ont/geosparql#geoJSONLiteral","http://www.opengis.net/ont/geosparql#wktLiteral"],l=100;function g(f){navigator.clipboard.writeText(f.trim())}return(f,I)=>(a(),n("div",et,[r("div",tt,[e.termType==="BlankNode"?(a(),n("table",lt,[(a(!0),n(h,null,O(e.rows,R=>(a(),j(be,Z(ee(R)),null,16))),256))])):e.termType==="NamedNode"?(a(),n(h,{key:1},[e.label?(a(),n("a",{key:0,href:e.value,target:"_blank",rel:"noopener noreferrer"},v(e.label),9,at)):e.qname?(a(),n("a",{key:1,href:e.value,target:"_blank",rel:"noopener noreferrer"},v(e.qname),9,st)):(a(),n("a",{key:2,href:e.value,target:"_blank",rel:"noopener noreferrer"},v(e.value),9,ot))],64)):(a(),n(h,{key:2},[e.value.startsWith("http")?(a(),n("a",{key:0,href:e.value,target:"_blank",rel:"noopener noreferrer"},v(e.value),9,nt)):e.datatype&&k.includes(e.datatype.value)?(a(),n("div",rt,[r("pre",null,v(e.value.length>l?`${e.value.slice(0,l)}...`:e.value),1),r("button",{class:"btn outline sm",title:"Copy geometry",onClick:I[0]||(I[0]=R=>g(e.value))},ut)])):(a(),n(h,{key:2},[$(v(e.value),1)],64))],64))]),r("div",ct,[e.language?(a(),n("span",pt,v(e.language),1)):e.datatype?(a(),n("a",{key:1,href:e.datatype.value,target:"_blank",rel:"noopener noreferrer",class:"badge outline",title:"Datatype"},[e.datatype.qname?(a(),n(h,{key:0},[$(v(e.datatype.qname),1)],64)):(a(),n(h,{key:1},[$(v(e.datatype.value),1)],64))],8,dt)):A("",!0)])]))}});const ft=D(vt,[["__scopeId","data-v-bec69227"]]),ht={class:"prop-objs"},_t=U({__name:"PropRow",props:{iri:null,objs:null,qname:null,label:null,description:null,explanation:null,order:null},setup(p){const e=p;return(k,l)=>(a(),n("tr",null,[ae(Ye,{iri:e.iri,qname:e.qname,label:e.label,description:e.description,explanation:e.explanation},null,8,["iri","qname","label","description","explanation"]),r("td",ht,[(a(!0),n(h,null,O(e.objs,g=>(a(),j(ft,Z(ee(g)),null,16))),256))])]))}});const be=D(_t,[["__scopeId","data-v-3863cf0a"]]),se=p=>(te("data-v-e15489e3"),p=p(),le(),p),bt={class:"page-title"},mt={class:"iri"},kt=se(()=>r("span",{class:"badge"},"IRI",-1)),gt=["href"],yt=se(()=>r("i",{class:"fa-regular fa-clipboard"},null,-1)),Ct=[yt],$t={class:"type"},wt=se(()=>r("span",{class:"badge"},"Type",-1)),jt=["href"],Pt={key:0},Tt=U({__name:"PropTable",props:{item:null,properties:null,blankNodes:null,prefixes:null,hiddenPreds:null},setup(p){const e=p,k=m([]);function l(t){let _="";return Object.entries(e.prefixes).forEach(([i,x])=>{t.value.startsWith(x)&&(_=i+":"+t.value.split(x)[1])}),_}function g(t){if(t==="a")return e.prefixes.rdf+"type";{const[_,i]=t.split(":");return e.prefixes[_]+i}}function f(t,_){return t.annotations.find(i=>i.predicate.value===g(_))?.object.value}function I(){navigator.clipboard.writeText(e.item.iri.trim())}function R(t){let _={};return t.forEach(i=>{var x;_[x=i.predicate.value]??(_[x]={iri:i.predicate.value,objs:[],qname:l(i.predicate),label:f(i.predicate,"rdfs:label"),description:f(i.predicate,"dcterms:description"),explanation:f(i.predicate,"dcterms:provenance"),order:0}),_[i.predicate.value].objs.push({value:i.object.value,qname:i.object instanceof Ee?l(i.object):void 0,datatype:i.object instanceof pe?{value:i.object.datatype.value,qname:l(i.object.datatype)}:void 0,language:i.object instanceof pe?i.object.language:void 0,description:void 0,termType:i.object.termType,label:void 0,rows:i.object instanceof fe?R(e.blankNodes.filter(W=>W.subject.id===i.object.id)):[]})}),Object.values(_).sort((i,x)=>i.order-x.order)}return ve(()=>{const t=e.properties.filter(_=>!e.hiddenPreds.includes(_.predicate.value));k.value=R(t)}),(t,_)=>(a(),n(h,null,[r("h1",bt,[$(v(e.item.title||e.item.iri)+" ",1),r("small",mt,[kt,r("a",{href:e.item.iri,target:"_blank",rel:"noopener noreferrer"},v(e.item.iri),9,gt),r("button",{class:"btn outline sm",title:"Copy IRI",onClick:_[0]||(_[0]=i=>I())},Ct)]),r("small",$t,[wt,r("a",{href:e.item.type,target:"_blank",rel:"noopener noreferrer"},v(e.item.type),9,jt)])]),M(t.$slots,"map",{},void 0,!0),e.item.description?(a(),n("p",Pt,[r("em",null,v(e.item.description),1)])):A("",!0),r("table",null,[M(t.$slots,"top",{},void 0,!0),(a(!0),n(h,null,O(k.value,i=>(a(),j(be,Z(ee(i)),null,16))),256)),M(t.$slots,"bottom",{},void 0,!0)])],64))}});const Et=D(Tt,[["__scopeId","data-v-e15489e3"]]),St={class:"concept-top"},It={key:1,class:"concept-left"},xt=U({__name:"ConceptComponent",props:{iri:null,title:null,link:null,children:null,narrower:null,broader:null,baseUrl:null,collapseAll:{type:Boolean}},setup(p){const e=p,k=m(!0);return Se(()=>e.collapseAll,(l,g)=>{k.value=l}),(l,g)=>{const f=_e("ConceptComponent",!0);return a(),n(h,null,[r("div",St,[e.children?(a(),n("button",{key:0,class:"concept-left btn outline",onClick:g[0]||(g[0]=I=>k.value=!k.value)},[r("i",{class:de(`fa-regular fa-${k.value?"plus":"minus"}`)},null,2)])):(a(),n("div",It)),ae(S(Ie),{class:"concept",to:e.link},{default:L(()=>[$(v(e.title||e.iri),1)]),_:1},8,["to"])]),e.children?(a(),n("div",{key:0,class:de(`concept-children ${k.value?"collapse":""}`)},[(a(!0),n(h,null,O(e.children,I=>(a(),j(f,he(I,{baseUrl:e.baseUrl,collapseAll:e.collapseAll}),null,16,["baseUrl","collapseAll"]))),256))],2)):A("",!0)],64)}}});const Lt=D(xt,[["__scopeId","data-v-e0711a9f"]]),K=p=>(te("data-v-7f0c151e"),p=p(),le(),p),Nt=K(()=>r("th",null,"Concepts",-1)),Rt={class:"concepts"},At=K(()=>r("i",{class:"fa-regular fa-plus"},null,-1)),Bt=K(()=>r("i",{class:"fa-regular fa-minus"},null,-1)),Ot=K(()=>r("i",{class:"fa-regular fa-spinner-third fa-spin"},null,-1)),Dt=U({__name:"PropTableView",setup(p){const{namedNode:e}=Ve,k=xe(Ue),l=Le(),g=Ne(),{store:f,prefixes:I,parseIntoStore:R,qname:t}=Re(),{data:_,profiles:i,loading:x,error:W,doRequest:me}=Ae(),oe=[t("rdfs:label")],ke=[t("dcterms:description")],ge=[t("geo:hasBoundingBox"),t("geo:hasGeometry")],ye=[t("rdfs:member"),t("skos:member"),t("dcterms:hasPart")],Ce=5,X="lt-prfl:alt-profile",d=m({}),q=m([]),ne=m([]),Y=m([]),re=m([]),G=m(!0),Q=m([]),B=m(!1),F=m(!1),T=m(null),V=m(!1),z=m({}),ie=m(""),H=m([t("a"),t("dcterms:identifier"),t("prez:count")]),N=m(null),y=m({showChildren:!1,childrenTitle:"",showButton:!1,buttonTitle:"",buttonLink:""});function C(s){switch(d.value.type=s,s){case t("dcat:Catalog"):V.value=!0,z.value={catalog:d.value.iri},y.value={...y.value,showChildren:!0,childrenTitle:"Resources"};break;case t("dcat:Resource"):break;case t("dcat:Dataset"):V.value=!0,z.value={dataset:d.value.iri},y.value={showChildren:!1,showButton:!0,childrenTitle:"Members",buttonTitle:"Collections",buttonLink:"/collections"};break;case t("geo:FeatureCollection"):V.value=!0,z.value={collection:d.value.iri},y.value={showChildren:!1,showButton:!0,childrenTitle:"Members",buttonTitle:"Features",buttonLink:"/items"};break;case t("geo:Feature"):break;case t("skos:ConceptScheme"):V.value=!0,z.value={vocab:d.value.iri},H.value.push(t("skos:hasTopConcept")),y.value.showChildren=!0;break;case t("skos:Collection"):y.value={...y.value,showChildren:!0,childrenTitle:"Concepts"};break;case t("skos:Concept"):break;case t("prof:Profile"):break}}function $e(){const s=F.value?e(l.query.uri):f.value.getSubjects(e(t("a")),e(d.value.type),null)[0];d.value.iri=s.id;const c=N.value.labelPredicates.length>0?N.value.labelPredicates:oe,u=N.value.descriptionPredicates.length>0?N.value.labelPredicates:ke;H.value.push(...c,...u),f.value.forEach(o=>{if(c.includes(o.predicate.value)?d.value.title=o.object.value:u.includes(o.predicate.value)?d.value.description=o.object.value:ye.includes(o.predicate.value)?(ie.value=o.predicate.value,H.value.push(o.predicate.value)):o.predicate.value===t("a")&&F.value?C(o.object.value):ge.indexOf(o.predicate.value)>=0&&f.value.forEach(w=>{Q.value.push({label:"",fcLabel:"",wkt:w.object.value,uri:d.value.iri,link:`/object?uri=${d.value.iri}`})},o.object,e(t("geo:asWKT")),null,null),!B.value){const w=ue(o,f.value);Y.value.push(w);let J=0;ce(o,f.value,J)}},s,null,null,null),Q.value.forEach(o=>{o.label=d.value.title?d.value.title:d.value.iri})}function we(){let s=[];if(F.value)s.push({name:"Get Object by URI",url:"/object"});else{T.value&&s.push({name:Fe(T.value)+" Home",url:`/${T.value[0].toLowerCase()}`});const c=l.path.split("/").slice(1,-1);let u=!1;c.forEach((o,w)=>{if(u){u=!1;return}switch(o){case"catalogs":s.push({name:"Catalogs",url:"/c/catalogs"});break;case"datasets":s.push({name:"Datasets",url:"/s/datasets"}),w+1!==c.length&&(s.push({name:"Dataset",url:`/s/datasets/${l.params.datasetId}`}),u=!0);break;case"collections":s.push({name:"Feature Collections",url:`/s/datasets/${l.params.datasetId}/collections`}),w+1!==c.length&&(s.push({name:"Feature Collection",url:`/s/datasets/${l.params.datasetId}/collections/${l.params.featureCollectionId}`}),u=!0);break;case"items":s.push({name:"Features",url:`/s/datasets/${l.params.datasetId}/collections/${l.params.featureCollectionId}/items`});break;case"vocab":s.push({name:"Vocabularies",url:"/v/vocab"}),w+1!==c.length&&(s.push({name:"Vocabulary",url:`/v/vocab/${l.params.vocabId}`}),u=!0);break;case"collection":s.push({name:"Collections",url:"/v/collection"}),w+1!==c.length&&(s.push({name:"Collection",url:`/v/vocab/${l.params.collectionId}`}),u=!0);break;case"profiles":s.push({name:"Profiles",url:`${T.value?T.value[0].toLowerCase():""}/profiles`});break}})}return s.push({name:d.value.title||d.value.iri,url:l.path}),B.value&&s.push({name:"Alternate Profiles",url:`${l.path}?_profile=${X}`}),s}function je(){if(d.value.type===t("skos:ConceptScheme"))Pe();else{const s=N.value.labelPredicates.length>0?N.value.labelPredicates:oe;f.value.forObjects(c=>{let u={iri:c.id};f.value.forEach(o=>{s.includes(o.predicate.value)?u.title=o.object.value:o.predicate.value===t("prez:link")?u.link=o.object.value:o.predicate.value===t("a")&&(u.type=o.object.value)},c,null,null,null),q.value.push(u)},e(d.value.iri),e(ie.value),null),q.value.sort((c,u)=>c.title&&u.title?c.title.localeCompare(u.title):c.title?-1:u.title?1:c.iri.localeCompare(u.iri))}}function Pe(){let s=[];f.value.forSubjects(b=>{let P={iri:b.id,narrower:[],broader:"",title:"",link:""};f.value.forEach(E=>{E.predicate.value===t("skos:prefLabel")?P.title=E.object.value:E.predicate.value===t("prez:link")?P.link=E.object.value:E.predicate.value===t("skos:narrower")?P.narrower.push(E.object.value):E.predicate.value===t("skos:broader")&&(P.broader=E.object.value)},b,null,null,null),s.push(P)},e(t("skos:inScheme")),e(d.value.iri),null);const c=f.value.getObjects(e(d.value.iri),e(t("skos:hasTopConcept")),null).map(b=>b.id),u=f.value.getSubjects(e(t("skos:topConceptOf")),e(d.value.iri),null).map(b=>b.id),o=[...new Set([...c,...u])],w=s.reduce((b,P,E)=>(b[P.iri]=E,b),{});let J=[];s.forEach(b=>{if(b.narrower.length>0&&b.narrower.forEach(P=>s[w[P]].broader=b.iri),o.includes(b.iri)){J.push(b);return}if(b.broader){const P=s[w[b.broader]];P.children=[...P.children||[],b]}}),ne.value=J}function ue(s,c){return{subject:s.subject,predicate:{termType:s.predicate.termType,value:s.predicate.value,id:s.predicate.id,annotations:c.getQuads(s.predicate,null,null,null)},object:s.object,value:s.value,graph:s.graph,termType:s.termType,equals:s.equals,toJSON:s.toJSON}}function ce(s,c,u){s.object instanceof fe&&(u++,c.forEach(o=>{const w=ue(o,c);re.value.push(w),u<Ce&&ce(o,c,u)},s.object,null,null,null))}return Be(()=>{l.path.startsWith("/c/")?(T.value="CatPrez",l.path.match(/c\/profiles\/.+/)?C(t("prof:Profile")):l.path.match(/c\/catalogs\/.+\/.+/)?C(t("dcat:Resource")):l.path.match(/c\/catalogs\/.+/)&&C(t("dcat:Catalog"))):l.path.startsWith("/s/")?(T.value="SpacePrez",l.path.match(/s\/profiles\/.+/)?C(t("prof:Profile")):l.path.match(/s\/datasets\/.+\/collections\/.+\/items\/.+/)?C(t("geo:Feature")):l.path.match(/s\/datasets\/.+\/collections\/.+/)?C(t("geo:FeatureCollection")):l.path.match(/s\/datasets\/.+/)&&C(t("dcat:Dataset"))):l.path.startsWith("/v/")?(T.value="VocPrez",l.path.match(/v\/profiles\/.+/)?C(t("prof:Profile")):l.path.match(/v\/vocab\/.+\/.+/)||l.path.match(/v\/collection\/.+\/.+/)?C(t("skos:Concept")):l.path.match(/v\/vocab\/.+/)?C(t("skos:ConceptScheme")):l.path.match(/v\/collection\/.+/)&&C(t("skos:Collection"))):l.path.startsWith("/profiles/")?C(t("prof:Profile")):l.path.startsWith("/object")&&(F.value=!0),l.query._profile===X&&!l.query._mediatype&&(B.value=!0)}),ve(()=>{me(`${k}${l.fullPath}`,()=>{N.value=g.profiles[i.value.find(s=>s.default).uri],l.query&&l.query._profile&&(l.query._mediatype||![N.value.token,X].includes(l.query._profile))&&window.location.replace(`${k}${l.path}?_profile=${l.query._profile}${l.query._mediatype?`&_mediatype=${l.query._mediatype}`:""}`),B.value?g.rightNavConfig={enabled:!1}:g.rightNavConfig={enabled:!0,profiles:i.value,currentUrl:l.path},R(_.value),$e(),!B.value&&y.value.showChildren&&je(),document.title=d.value.title?`${d.value.title} | Prez`:"Prez",g.breadcrumbs=we()})}),(s,c)=>{const u=_e("RouterLink");return B.value?(a(),j(Me,{key:0,profiles:S(i),path:S(l).path},null,8,["profiles","path"])):(a(),n(h,{key:1},[Y.value.length>0?(a(),j(Et,{key:0,item:d.value,properties:Y.value,blankNodes:re.value,prefixes:S(I),hiddenPreds:H.value},Oe({map:L(()=>[Q.value.length?(a(),j(Ge,{key:0,ref:"searchMapRef","geo-w-k-t":Q.value},null,8,["geo-w-k-t"])):A("",!0)]),_:2},[d.value.type===S(t)("skos:ConceptScheme")?{name:"bottom",fn:L(()=>[r("tr",null,[Nt,r("td",null,[r("div",Rt,[r("button",{id:"collapse-all-btn",onClick:c[0]||(c[0]=o=>G.value=!G.value),class:"btn"},[G.value?(a(),n(h,{key:0},[At,$(" Expand all")],64)):(a(),n(h,{key:1},[Bt,$(" Collapse all")],64))]),(a(!0),n(h,null,O(ne.value,o=>(a(),j(Lt,he(o,{baseUrl:S(l).path,collapseAll:G.value}),null,16,["baseUrl","collapseAll"]))),256))])])])]),key:"0"}:y.value.showChildren?{name:"bottom",fn:L(()=>[r("tr",null,[r("th",null,v(y.value.childrenTitle),1),r("td",null,[r("div",{class:"children-list"},[(a(!0),n(h,null,O(q.value,o=>(a(),j(u,{to:o.link||""},{default:L(()=>[$(v(o.title||o.iri),1)]),_:2},1032,["to"]))),256))])])])]),key:"1"}:y.value.showButton&&!F.value?{name:"bottom",fn:L(()=>[r("tr",null,[r("th",null,v(y.value.childrenTitle),1),r("td",null,[ae(u,{to:`${S(l).path}${y.value.buttonLink}`,class:"btn"},{default:L(()=>[$(v(y.value.buttonTitle),1)]),_:1},8,["to"])])])]),key:"2"}:void 0]),1032,["item","properties","blankNodes","prefixes","hiddenPreds"])):S(x)?(a(),n(h,{key:1},[Ot,$(" Loading... ")],64)):S(W)?(a(),j(We,{key:2,message:S(W)},null,8,["message"])):A("",!0),V.value?(a(),j(De,{key:3,to:"#right-bar-content"},[T.value?(a(),j(ze,{key:0,flavour:T.value,query:z.value},null,8,["flavour","query"])):A("",!0)])):A("",!0)],64))}}});const Wt=D(Dt,[["__scopeId","data-v-7f0c151e"]]);export{Wt as default};