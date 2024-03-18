import{d as m,u as S,k as f,o as $,l as d,c as h,a as e,t as _,b as t,F as v,r as k,m as l,S as w,n as V,h as i,e as b,w as s,f as P,R as r,_ as C,q as o}from"./index-e24ad5b5.js";const A={class:"page-title"},H={class:"home-page-links"},L={class:"link-title"},x={key:0,class:"link-desc"},z={style:{width:"50%"}},B=m({__name:"FlavourHome",props:{flavour:{},links:{}},setup(p){const a=p,c=S(),n=f(()=>a.flavour[0].toLowerCase()),g=f(()=>[...a.links,{label:"Profiles",description:`A list of Profiles used by ${a.flavour}`,url:`/${n.value}/profiles`},{label:`About ${a.flavour}`,url:`/${n.value}/about`}]);return $(()=>{c.rightNavConfig={enabled:!1},document.title=`${d(a.flavour)+" Home"} | Prez`,c.pageHeading={name:a.flavour,url:`/${n.value}`},c.breadcrumbs=[{name:d(a.flavour)+" Home",url:`/${n.value}`}]}),(y,I)=>(i(),h(v,null,[e("h1",A,_(t(d)(a.flavour)),1),e("div",H,[(i(!0),h(v,null,k(g.value,u=>(i(),b(t(r),{to:u.url,class:"home-page-link"},{default:s(()=>[e("h4",L,_(u.label),1),u.description?(i(),h("p",x,_(u.description),1)):P("",!0)]),_:2},1032,["to"]))),256))]),e("div",z,[l(w,{flavour:a.flavour,size:"large"},null,8,["flavour"])]),V(y.$slots,"default",{},void 0,!0)],64))}});const F=C(B,[["__scopeId","data-v-22060d4b"]]),N=e("p",null," More specifically, the vocabularies defined in this system conform to the VocPub profile, which itself is an opinionated profile of the SKOS (Simple Knowledge Organisation System) data model. ",-1),R=e("h2",null,"Vocabularies",-1),T=e("p",null," A vocabulary (concept scheme) is a hierarchical list of terms (concepts). ",-1),q=e("h2",null,"Collections",-1),K=e("p",null," A collection is a flat grouping of terms (concepts). ",-1),O=e("h2",null,"Concepts",-1),Q=e("p",null," Vocabulary terms (concepts) are listed within a vocabulary's home page. Each vocabulary presents both a concept hierarchy (tree) view and a link to a flat list of its concepts. ",-1),E=e("h2",null,"Search and Querying",-1),M=e("p",null," You can search for concepts within one vocabulary or across all vocabularies. ",-1),D=e("li",null,"To search across vocabularies, use the search bar above.",-1),Y=m({__name:"VocPrezHomeView",setup(p){const a=[{label:"Vocabularies",url:"/v/vocab",description:"A list of SKOS vocabularies"},{label:"Collections",url:"/v/collection",description:"A list of SKOS collections"}];return(c,n)=>(i(),b(F,{flavour:"VocPrez",links:a},{default:s(()=>[e("p",null,[o(" The vocabularies are provided as a read-only web delivery system, providing a standardised set of profiles in both human and machine-readable views. See the available profiles "),l(t(r),{to:"/v/profiles"},{default:s(()=>[o("here")]),_:1}),o(". ")]),N,R,T,e("p",null,[o(" See the "),l(t(r),{to:"/v/vocab"},{default:s(()=>[o("Vocabularies Register")]),_:1}),o(" for a list of vocabularies. ")]),q,K,e("p",null,[o(" See the "),l(t(r),{to:"/v/collection"},{default:s(()=>[o("Collections page")]),_:1}),o(" for a list of collections. ")]),O,Q,E,M,e("ul",null,[D,e("li",null,[o("To search across the entire Prez system, use the "),l(t(r),{to:"/search"},{default:s(()=>[o("Search")]),_:1}),o(".")]),e("li",null,[o("To perform custom queries, use the SPARQL query language on the "),l(t(r),{to:"/sparql"},{default:s(()=>[o("SPARQL page")]),_:1})])])]),_:1}))}});export{Y as default};