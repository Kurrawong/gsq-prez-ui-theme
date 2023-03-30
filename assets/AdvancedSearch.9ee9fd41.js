import{d as A,i as E,q as M,s as B,v as m,x as D,o as G,c as o,y as _,z,a,F as C,r as P,D as K,A as w,h as s,t as V,B as oe,C as ee,u as se,E as W,f as j,b as X,G as Y,k as Q,H as T,l as F,g as ue,p as ne,j as re,I as ce,_ as ie}from"./index.693cdf1e.js";const de={class:"search-form"},ve=a("label",{for:"catalog"},"Catalogs",-1),pe=["value"],fe=A({__name:"CatPrezSearch",props:{defaultSelected:null},emits:["updateOptions"],setup(h,{emit:l}){const b=h,{namedNode:d}=K,g=E(w),{data:c,loading:f,error:O,doRequest:y}=M(),{store:v,parseIntoStore:U,qname:i}=B(),$=m([]),n=m(b.defaultSelected?.split(",")||[]);return D(()=>b.defaultSelected,(t,e)=>{t&&t!==""&&(n.value=t.split(","),l("updateOptions",{catalog:n.value.join(",")}))}),G(()=>{y(`${g}/c/catalogs`,()=>{U(c.value);const t=v.value.getSubjects(d(i("a")),d(i("rdf:bag")),null)[0];v.value.forObjects(e=>{let u={iri:e.value};v.value.forEach(q=>{q.predicate.value===i("dcterms:title")&&(u.title=q.object.value)},e,null,null,null),$.value.push(u)},t,d(i("rdfs:member")),null)})}),(t,e)=>(s(),o("div",de,[ve,_(a("select",{name:"catalog",id:"catalog","onUpdate:modelValue":e[0]||(e[0]=u=>n.value=u),onChange:e[1]||(e[1]=u=>l("updateOptions",{catalog:n.value.join(",")})),multiple:""},[(s(!0),o(C,null,P($.value,u=>(s(),o("option",{value:u.iri},V(u.title||u.iri),9,pe))),256))],544),[[z,n.value]])]))}}),me={class:"search-form"},_e=a("label",{for:"dataset"},"Datasets",-1),he=["disabled"],be=["value"],Se=a("label",{for:"collection"},"Feature Collections",-1),ge=["disabled"],ye=["value"],$e=a("label",{for:"use-cql"},"Use CQL",-1),qe=a("label",{for:"cql"},"CQL Query",-1),je=["disabled"],Ce=A({__name:"SpacePrezSearch",props:{defaultSelected:null},emits:["updateOptions"],setup(h,{emit:l}){const b=h,{namedNode:d}=K,g=E(w),{data:c,loading:f,error:O,doRequest:y}=M(),{store:v,parseIntoStore:U,qname:i}=B(),$=m([]),n=m(b.defaultSelected?.dataset?.split(",")||[]),t=m([]),e=m(b.defaultSelected?.collection?.split(",")||[]),u=m(!1),q=m("");function L(){let S={};n.value.length>0&&(S.dataset=n.value.join(",")),e.value.length>0&&(S.collection=e.value.join(",")),l("updateOptions",S)}return D(()=>b.defaultSelected,(S,p)=>{S&&!Object.values(S).every(r=>r==="")&&(n.value=S.dataset?.split(",")||[],e.value=S.collection?.split(",")||[],L())},{deep:!0}),G(()=>{y(`${g}/s/datasets`,()=>{U(c.value);const S=v.value.getSubjects(d(i("a")),d(i("rdf:bag")),null)[0];v.value.forObjects(p=>{let r={iri:p.value},N="";if(v.value.forEach(x=>{x.predicate.value===i("dcterms:title")?r.title=x.object.value:x.predicate.value===i("prez:link")&&(N=x.object.value)},p,null,null,null),$.value.push(r),N!==""){const{data:x,loading:Xe,error:Ye,doRequest:te}=M(),{store:R,parseIntoStore:le,qname:I}=B();te(`${g}${N}/collections`,()=>{le(x.value);const ae=R.value.getSubjects(d(I("a")),d(I("rdf:bag")),null)[0];R.value.forObjects(H=>{let Z={iri:H.value};R.value.forEach(J=>{J.predicate.value===I("dcterms:title")&&(Z.title=J.object.value)},H,null,null,null),t.value.push(Z)},ae,d(I("rdfs:member")),null)})}},S,d(i("rdfs:member")),null)})}),(S,p)=>(s(),o("div",me,[_e,_(a("select",{name:"dataset",id:"dataset","onUpdate:modelValue":p[0]||(p[0]=r=>n.value=r),onChange:p[1]||(p[1]=r=>L()),multiple:"",disabled:u.value},[(s(!0),o(C,null,P($.value,r=>(s(),o("option",{value:r.iri},V(r.title||r.iri),9,be))),256))],40,he),[[z,n.value]]),Se,_(a("select",{name:"collection",id:"collection","onUpdate:modelValue":p[2]||(p[2]=r=>e.value=r),onChange:p[3]||(p[3]=r=>L()),multiple:"",disabled:u.value},[(s(!0),o(C,null,P(t.value,r=>(s(),o("option",{value:r.iri},V(r.title||r.iri),9,ye))),256))],40,ge),[[z,e.value]]),$e,_(a("input",{type:"checkbox",name:"use-cql",id:"use-cql","onUpdate:modelValue":p[4]||(p[4]=r=>u.value=r)},null,512),[[oe,u.value]]),qe,_(a("textarea",{name:"cql",id:"cql","onUpdate:modelValue":p[5]||(p[5]=r=>q.value=r),cols:"30",rows:"3",placeholder:"CQL query",disabled:!u.value},null,8,je),[[ee,q.value]])]))}}),ke={class:"search-form"},Oe=a("label",{for:"vocab"},"Vocabs",-1),Ue=["value"],xe=A({__name:"VocPrezSearch",props:{defaultSelected:null},emits:["updateOptions"],setup(h,{emit:l}){const b=h,{namedNode:d}=K,g=E(w),{data:c,loading:f,error:O,doRequest:y}=M(),{store:v,parseIntoStore:U,qname:i}=B(),$=m([]),n=m(b.defaultSelected?.split(",")||[]);return D(()=>b.defaultSelected,(t,e)=>{t&&t!==""&&(n.value=t.split(","),l("updateOptions",{vocab:n.value.join(",")}))}),G(()=>{y(`${g}/v/vocab`,()=>{U(c.value);const t=v.value.getSubjects(d(i("a")),d(i("rdf:bag")),null)[0];v.value.forObjects(e=>{let u={iri:e.value};v.value.forEach(q=>{q.predicate.value===i("skos:prefLabel")&&(u.title=q.object.value)},e,null,null,null),$.value.push(u)},t,d(i("rdfs:member")),null)})}),(t,e)=>(s(),o("div",ke,[Oe,_(a("select",{name:"vocab",id:"vocab","onUpdate:modelValue":e[0]||(e[0]=u=>n.value=u),onChange:e[1]||(e[1]=u=>l("updateOptions",{vocab:n.value.join(",")})),multiple:""},[(s(!0),o(C,null,P($.value,u=>(s(),o("option",{value:u.iri},V(u.title||u.iri),9,Ue))),256))],544),[[z,n.value]])]))}}),k=h=>(ne("data-v-8ac66f6a"),h=h(),re(),h),ze={class:"search-bar-container"},Pe=["placeholder"],Ve=k(()=>a("i",{class:"fa-regular fa-xmark"},null,-1)),Ie=[Ve],Me={key:0,type:"submit",class:"btn submit-btn"},Be=k(()=>a("i",{class:"fa-regular fa-magnifying-glass"},null,-1)),Ae=[Be],Ee={class:"search-below"},De=k(()=>a("option",{value:"all"},"All",-1)),Le=["value"],Ne=k(()=>a("i",{class:"fa-regular fa-chevron-up"},null,-1)),Re=k(()=>a("i",{class:"fa-regular fa-chevron-down"},null,-1)),Qe={key:0},Te=k(()=>a("label",{for:"search-method"},"Search Method",-1)),Fe=k(()=>a("br",null,null,-1)),Ge=["value"],Ke={key:1},we={key:2},He={key:3},Ze={key:4,type:"submit",class:"btn submit-btn"},Je=k(()=>a("i",{class:"fa-regular fa-magnifying-glass"},null,-1)),We=A({__name:"AdvancedSearch",props:{flavour:null,query:null,fullPage:{type:Boolean,default:!1}},setup(h){const l=h,b=E(ue),d=se(),g="exactMatch",c=m(!1),f=m(l.flavour?l.flavour:l.query&&l.query.prez||"all"),O=m(l.query?l.query.term:""),y=m(l.query&&l.query.method?l.query.method:g),v=m({});D(f,(n,t)=>{n!==t&&n==="all"&&(c.value=!1),y.value=g});function U(){ce.push({name:"search",query:{term:O.value,prez:f.value!=="all"?f.value:void 0,method:y.value||void 0,...v.value}})}function i(){O.value=""}function $(n){const t=n.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)}return(n,t)=>(s(),o("form",{onSubmit:t[8]||(t[8]=Y(e=>U(),["stop","prevent"]))},[a("div",{class:W(`search-form ${l.fullPage?"lg":""}`)},[a("div",ze,[a("div",{class:W(`search-bar ${c.value?"full-width":""}`)},[_(a("input",{type:"search",name:"term",id:"",class:"search-input","onUpdate:modelValue":t[0]||(t[0]=e=>O.value=e),placeholder:`${f.value==="all"?"Global search...":"Search..."}`},null,8,Pe),[[ee,O.value]]),a("button",{type:"button",onClick:t[1]||(t[1]=e=>i()),class:"clear-btn"},Ie)],2),c.value?j("",!0):(s(),o("button",Me,Ae))]),a("div",Ee,[l.flavour?j("",!0):_((s(),o("select",{key:0,name:"prez",id:"",class:"search-type","onUpdate:modelValue":t[2]||(t[2]=e=>f.value=e)},[De,(s(!0),o(C,null,P(X(b),e=>(s(),o("option",{value:e},V(e),9,Le))),256))],512)),[[z,f.value]]),f.value!=="all"?(s(),o("button",{key:1,type:"button",class:"collapse-btn",onClick:t[3]||(t[3]=Y(e=>c.value=!c.value,["prevent"]))},[c.value?(s(),o(C,{key:0},[Q("Collapse "),Ne],64)):(s(),o(C,{key:1},[Q("Expand "),Re],64))])):j("",!0)]),f.value!=="all"&&c.value?(s(),o("div",Qe,[Te,Fe,_(a("select",{name:"search-method",id:"search-method","onUpdate:modelValue":t[4]||(t[4]=e=>y.value=e)},[(s(!0),o(C,null,P(X(d).searchMethods[f.value],e=>(s(),o("option",{value:e},V($(e)),9,Ge))),256))],512),[[z,y.value]])])):j("",!0),!l.flavour||l.flavour==="CatPrez"?_((s(),o("div",Ke,[F(fe,{onUpdateOptions:t[5]||(t[5]=e=>v.value=e),defaultSelected:l.query?.catalog},null,8,["defaultSelected"])],512)),[[T,f.value==="CatPrez"&&c.value]]):j("",!0),!l.flavour||l.flavour==="SpacePrez"?_((s(),o("div",we,[F(Ce,{onUpdateOptions:t[6]||(t[6]=e=>v.value=e),defaultSelected:{dataset:l.query?.dataset,collection:l.query?.collection}},null,8,["defaultSelected"])],512)),[[T,f.value==="SpacePrez"&&c.value]]):j("",!0),!l.flavour||l.flavour==="VocPrez"?_((s(),o("div",He,[F(xe,{onUpdateOptions:t[7]||(t[7]=e=>v.value=e),defaultSelected:l.query?.vocab},null,8,["defaultSelected"])],512)),[[T,f.value==="VocPrez"&&c.value]]):j("",!0),c.value?(s(),o("button",Ze,[Q("Search "),Je])):j("",!0)],2)],32))}});const tt=ie(We,[["__scopeId","data-v-8ac66f6a"]]);export{tt as A};