import{_ as I,a as t,c as l,J as R,b as n,d as N,f as S,w as T,C as f,x as d,F as u,K as ue,g as B,l as O,t as A,L as K,M as G,r as w,o as X,N as pe,O as J,p as Y,h as Z,q as de,A as z,e as j,R as ve,P as q,Q as ee,u as fe,n as he,m as _e,H as me,S as be,T as ye,i as ge,I as ke,D as Ce,j as $e,k as je}from"./index.a7c9d519.js";/* empty css                                                                */import{A as Pe}from"./AdvancedSearch.ca6f1a3a.js";const we={},Te={class:"tooltip"},Se={class:"tooltip-text"};function xe(p,e){return t(),l("span",Te,[R(p.$slots,"default",{},void 0,!0),n("span",Se,[R(p.$slots,"text",{},void 0,!0)])])}const Ie=I(we,[["render",xe],["__scopeId","data-v-5b46f6b0"]]),Ne=["href"],Re=N({__name:"PredCell",props:{iri:null,qname:null,label:null,description:null,explanation:null},setup(p){const e=p;return(c,y)=>(t(),l("th",null,[(t(),S(ue(e.description?Ie:"slot"),null,{text:T(()=>[f(d(e.description),1)]),default:T(()=>[n("a",{href:e.iri,target:"_blank",rel:"noopener noreferrer"},[e.label?(t(),l(u,{key:0},[f(d(e.label),1)],64)):e.qname?(t(),l(u,{key:1},[f(d(e.qname),1)],64)):(t(),l(u,{key:2},[f(d(e.iri),1)],64))],8,Ne)]),_:1}))]))}}),Be={class:"prop-obj"},Ae={class:"obj-value"},De=["href"],Fe=["href"],Le=["href"],Oe=["href"],Ve={class:"obj-tag"},ze={key:0,class:"badge outline",title:"Language"},Ee=["href"],Ue=N({__name:"ObjCell",props:{value:null,qname:null,datatype:null,language:null,description:null,termType:null,label:null,rows:null},setup(p){const e=p;return(c,y)=>(t(),l("div",Be,[n("div",Ae,[e.termType==="BlankNode"?(t(),l(u,{key:0},[f(" blank node ")],64)):e.termType==="NamedNode"?(t(),l(u,{key:1},[e.label?(t(),l("a",{key:0,href:e.value,target:"_blank",rel:"noopener noreferrer"},d(e.label),9,De)):e.qname?(t(),l("a",{key:1,href:e.value,target:"_blank",rel:"noopener noreferrer"},d(e.qname),9,Fe)):(t(),l("a",{key:2,href:e.value,target:"_blank",rel:"noopener noreferrer"},d(e.value),9,Le))],64)):(t(),l(u,{key:2},[e.value.startsWith("http")?(t(),l("a",{key:0,href:e.value,target:"_blank",rel:"noopener noreferrer"},d(e.value),9,Oe)):(t(),l(u,{key:1},[f(d(e.value),1)],64))],64))]),n("div",Ve,[e.language?(t(),l("span",ze,d(e.language),1)):e.datatype?(t(),l("a",{key:1,href:e.datatype.value,target:"_blank",rel:"noopener noreferrer",class:"badge outline",title:"Datatype"},[e.datatype.qname?(t(),l(u,{key:0},[f(d(e.datatype.qname),1)],64)):(t(),l(u,{key:1},[f(d(e.datatype.value),1)],64))],8,Ee)):B("",!0)])]))}}),We=I(Ue,[["__scopeId","data-v-027097f9"]]),He={class:"prop-objs"},Me=N({__name:"PropRow",props:{iri:null,objs:null,qname:null,label:null,description:null,explanation:null,order:null},setup(p){const e=p;return(c,y)=>(t(),l("tr",null,[O(Re,{iri:e.iri,qname:e.qname,label:e.label,description:e.description,explanation:e.explanation},null,8,["iri","qname","label","description","explanation"]),n("td",He,[(t(!0),l(u,null,A(e.objs,i=>(t(),S(We,K(G(i)),null,16))),256))])]))}}),Qe=I(Me,[["__scopeId","data-v-3863cf0a"]]),E=p=>(Y("data-v-344a4af2"),p=p(),Z(),p),Je={class:"page-title"},Ke={class:"iri"},Ge=E(()=>n("span",{class:"badge"},"IRI",-1)),Xe=["href"],Ye=E(()=>n("i",{class:"fa-regular fa-clipboard"},null,-1)),Ze=[Ye],qe={class:"type"},et=E(()=>n("span",{class:"badge"},"Type",-1)),tt=["href"],lt={key:0},at=N({__name:"PropTableNew",props:{item:null,properties:null,prefixes:null,hiddenPreds:null},setup(p){const e=p,c=w({});function y(o){let m="";return Object.entries(e.prefixes).forEach(([a,x])=>{o.value.startsWith(x)&&(m=a+":"+o.value.split(x)[1])}),m}function i(o){if(o==="a")return e.prefixes.rdf+"type";{const[m,a]=o.split(":");return e.prefixes[m]+a}}function C(o,m){return o.annotations.find(a=>a.predicate.value===i(m))?.object.value}function _(){navigator.clipboard.writeText(e.item.iri.trim())}return X(()=>{e.properties.filter(o=>!e.hiddenPreds.includes(o.predicate.value)).forEach(o=>{var m,a;(m=c.value)[a=o.predicate.value]??(m[a]={iri:o.predicate.value,objs:[],qname:y(o.predicate),label:C(o.predicate,"rdfs:label"),description:C(o.predicate,"dcterms:description"),explanation:C(o.predicate,"dcterms:provenance"),order:0}),c.value[o.predicate.value].objs.push({value:o.object.value,qname:o.object instanceof pe?y(o.object):void 0,datatype:o.object instanceof J?{value:o.object.datatype.value,qname:y(o.object.datatype)}:void 0,language:o.object instanceof J?o.object.language:void 0,description:void 0,termType:o.object.termType,label:void 0,rows:[]})})}),(o,m)=>(t(),l(u,null,[n("h1",Je,[f(d(e.item.title)+" ",1),n("small",Ke,[Ge,n("a",{href:e.item.iri,target:"_blank",rel:"noopener noreferrer"},d(e.item.iri),9,Xe),n("button",{class:"btn outline sm",title:"Copy IRI",onClick:m[0]||(m[0]=a=>_())},Ze)]),n("small",qe,[et,n("a",{href:e.item.type,target:"_blank",rel:"noopener noreferrer"},d(e.item.type),9,tt)])]),R(o.$slots,"map",{},void 0,!0),e.item.description?(t(),l("p",lt,[n("em",null,d(e.item.description),1)])):B("",!0),n("table",null,[R(o.$slots,"top",{},void 0,!0),(t(!0),l(u,null,A(Object.values(c.value).sort((a,x)=>a.order-x.order),a=>(t(),S(Qe,K(G(a)),null,16))),256)),R(o.$slots,"bottom",{},void 0,!0)])],64))}});const nt=I(at,[["__scopeId","data-v-344a4af2"]]),ot={class:"concept-top"},rt={key:1,class:"concept-left"},st=N({__name:"ConceptComponent",props:{iri:null,title:null,link:null,children:null,narrower:null,broader:null,baseUrl:null,collapseAll:{type:Boolean}},setup(p){const e=p,c=w(!0);return de(()=>e.collapseAll,(y,i)=>{c.value=y}),(y,i)=>{const C=ee("ConceptComponent",!0);return t(),l(u,null,[n("div",ot,[e.children?(t(),l("button",{key:0,class:"concept-left btn outline",onClick:i[0]||(i[0]=_=>c.value=!c.value)},[n("i",{class:z(`fa-regular fa-${c.value?"plus":"minus"}`)},null,2)])):(t(),l("div",rt)),O(j(ve),{class:"concept",to:e.link},{default:T(()=>[f(d(e.title||e.iri),1)]),_:1},8,["to"])]),e.children?(t(),l("div",{key:0,class:z(`concept-children ${c.value?"collapse":""}`)},[(t(!0),l(u,null,A(e.children,_=>(t(),S(C,q(_,{baseUrl:e.baseUrl,collapseAll:e.collapseAll}),null,16,["baseUrl","collapseAll"]))),256))],2)):B("",!0)],64)}}});const it=I(st,[["__scopeId","data-v-e0711a9f"]]),D=p=>(Y("data-v-24114c05"),p=p(),Z(),p),ct=D(()=>n("th",null,"Concepts",-1)),ut=D(()=>n("i",{class:"fa-regular fa-chevron-down"},null,-1)),pt=D(()=>n("i",{class:"fa-regular fa-chevron-up"},null,-1)),dt=D(()=>n("i",{class:"fa-regular fa-plus"},null,-1)),vt=D(()=>n("i",{class:"fa-regular fa-minus"},null,-1)),ft=N({__name:"PropTableView",props:{type:null,getChildren:{type:Boolean},childPred:null,childTitlePred:null,childDisplayTitle:null,childButton:null,titlePred:null,descPred:null,enableSearch:{type:Boolean}},setup(p){const e=p,{namedNode:c}=Ce,{apiBaseUrl:y}=ge(je,$e),i=ke(),C=fe(),{store:_,prefixes:o,parseIntoStore:m,qname:a}=he(),{data:x,profiles:te,loading:le,error:U,doRequest:ae}=_e(),ne=[a("a"),a("dcterms:identifier"),a("prez:count"),a(e.titlePred),a(e.descPred),...e.type==="skos:ConceptScheme"?[a("skos:hasTopConcept")]:[],...e.childPred?[a(e.childPred)]:[]],P=me(()=>i.path.startsWith("/c/")?"CatPrez":i.path.startsWith("/s/")?"SpacePrez":i.path.startsWith("/v/")?"VocPrez":void 0),h=w({}),W=w([]),H=w([]),V=w([]),F=w(!0),L=w(!0);function oe(){const s=_.value.getSubjects(c(a("a")),c(a(e.type)),null)[0];h.value.iri=s.id,_.value.forEach(r=>{r.predicate.value===a(e.titlePred)?h.value.title=r.object.value:r.predicate.value===a(e.descPred)?h.value.description=r.object.value:r.predicate.value===a("a")&&(h.value.type=r.object.value);const g={termType:r.predicate.termType,value:r.predicate.value,id:r.predicate.id,annotations:_.value.getQuads(r.predicate,null,null,null)},k={subject:r.subject,predicate:g,object:r.object,value:r.value,graph:r.graph,termType:r.termType,equals:r.equals,toJSON:r.toJSON};V.value.push(k)},s,null,null,null)}function re(){let s=[];_.value.forSubjects(v=>{let b={iri:v.id,narrower:[],broader:"",title:"",link:""};_.value.forEach($=>{$.predicate.value===a(e.childTitlePred)?b.title=$.object.value:$.predicate.value===a("prez:link")?b.link=$.object.value:$.predicate.value===a("skos:narrower")?b.narrower.push($.object.value):$.predicate.value===a("skos:broader")&&(b.broader=$.object.value)},v,null,null,null),s.push(b)},c(a("skos:inScheme")),c(h.value.iri),null);const r=_.value.getObjects(c(h.value.iri),c(a("skos:hasTopConcept")),null).map(v=>v.id),g=_.value.getSubjects(c(a("skos:topConceptOf")),c(h.value.iri),null).map(v=>v.id),k=[...new Set([...r,...g])],M=s.reduce((v,b,$)=>(v[b.iri]=$,v),{});let Q=[];s.forEach(v=>{if(v.narrower.length>0&&v.narrower.forEach(b=>s[M[b]].broader=v.iri),k.includes(v.iri)){Q.push(v);return}if(v.broader){const b=s[M[v.broader]];b.children=[...b.children||[],v]}}),H.value=Q}function se(){e.type==="skos:ConceptScheme"?re():_.value.forObjects(s=>{let r={iri:s.id};_.value.forEach(g=>{g.predicate.value===a(e.childTitlePred)?r.title=g.object.value:g.predicate.value===a("prez:link")&&(r.link=g.object.value)},s,null,null,null),W.value.push(r)},c(h.value.iri),c(a(e.childPred)),null)}function ie(){let s=[];return P.value?(s.push({name:P.value,url:`/${P.value[0].toLowerCase()}`}),["skos:ConceptScheme","skos:Concept"].includes(e.type)&&s.push({name:"Vocabs",url:"/v/vocab"}),["skos:Concept"].includes(e.type)&&s.push({name:"Vocab",url:`/v/vocab/${i.params.vocabId}`}),["skos:Collection"].includes(e.type)&&s.push({name:"Collections",url:"/v/collection"}),["dcat:Catalog","dcat:Resource"].includes(e.type)&&s.push({name:"Catalogs",url:"/c/catalogs"}),["dcat:Resource"].includes(e.type)&&s.push({name:"Catalog",url:`/c/catalogs/${i.params.catalogId}`}),["dcat:Dataset","geo:FeatureCollection","geo:Feature"].includes(e.type)&&s.push({name:"Datasets",url:"/s/datasets"}),["geo:FeatureCollection","geo:Feature"].includes(e.type)&&(s.push({name:"Dataset",url:`/s/datasets/${i.params.datasetId}`}),s.push({name:"Feature Collections",url:`/s/datasets/${i.params.datasetId}/collections`})),["geo:Feature"].includes(e.type)&&(s.push({name:"Feature Collection",url:`/s/datasets/${i.params.datasetId}/collections/${i.params.featureCollectionId}`}),s.push({name:"Features",url:`/s/datasets/${i.params.datasetId}/collections/${i.params.featureCollectionId}/items`}))):e.type==="prof:Profile"&&s.push({name:"Profiles",url:"/profiles"}),s}function ce(){if(e.enableSearch)switch(e.type){case"skos:ConceptScheme":return{vocab:h.value.iri};case"dcat:Catalog":return{catalog:h.value.iri};case"dcat:Dataset":return{dataset:h.value.iri};case"geo:FeatureCollection":return{collection:h.value.iri};default:return{}}else return{}}return X(()=>{ae(`${y.replace(/\/$/,"")}${i.path}`,()=>{m(x.value),oe(),e.getChildren&&e.childTitlePred&&e.childPred&&se(),C.rightNavConfig={enabled:!0,profiles:te.value,currentUrl:i.path},document.title=`${h.value.title||e.type.split(":")[1]} | Prez`,P.value?C.pageHeading={name:P.value,url:`/${P.value[0].toLowerCase()}`}:C.pageHeading={name:"Prez",url:"/"},C.breadcrumbs=[...ie(),{name:h.value.title||e.type.split(":")[1],url:i.path}]})}),(s,r)=>{const g=ee("RouterLink");return t(),l(u,null,[V.value.length>0?(t(),S(nt,{key:0,item:h.value,properties:V.value,prefixes:j(o),hiddenPreds:ne},be({_:2},[e.type==="skos:ConceptScheme"?{name:"bottom",fn:T(()=>[n("tr",null,[ct,n("td",null,[n("button",{id:"concept-hide-btn",class:"btn",onClick:r[0]||(r[0]=k=>F.value=!F.value)},[F.value?(t(),l(u,{key:0},[f("Show "),ut],64)):(t(),l(u,{key:1},[f("Hide "),pt],64))]),n("div",{class:z(`concepts ${F.value?"collapse":""}`)},[n("button",{id:"collapse-all-btn",onClick:r[1]||(r[1]=k=>L.value=!L.value),class:"btn"},[L.value?(t(),l(u,{key:0},[dt,f(" Expand all")],64)):(t(),l(u,{key:1},[vt,f(" Collapse all")],64))]),(t(!0),l(u,null,A(H.value,k=>(t(),S(it,q(k,{baseUrl:j(i).path,collapseAll:L.value}),null,16,["baseUrl","collapseAll"]))),256))],2)])])]),key:"0"}:e.getChildren?{name:"bottom",fn:T(()=>[n("tr",null,[n("th",null,d(e.childDisplayTitle),1),n("td",null,[n("div",{class:"children-list"},[(t(!0),l(u,null,A(W.value,k=>(t(),S(g,{to:k.link||""},{default:T(()=>[f(d(k.title||k.iri),1)]),_:2},1032,["to"]))),256))])])])]),key:"1"}:e.childButton?{name:"bottom",fn:T(()=>[n("tr",null,[n("th",null,"Members"),n("td",null,[O(g,{to:`${j(i).path}${e.childButton.url}`,class:"btn"},{default:T(()=>[f(d(e.childButton.name),1)]),_:1},8,["to"])])])]),key:"2"}:void 0]),1032,["item","properties","prefixes"])):j(le)?(t(),l(u,{key:1},[f("loading...")],64)):j(U)?(t(),l(u,{key:2},[f("Network error: "+d(j(U)),1)],64)):B("",!0),e.enableSearch?(t(),S(ye,{key:3,to:"#right-bar-content"},[O(Pe,{flavour:j(P)?j(P).toLowerCase():void 0,query:ce()},null,8,["flavour","query"])])):B("",!0)],64)}}});const bt=I(ft,[["__scopeId","data-v-24114c05"]]);export{bt as default};
