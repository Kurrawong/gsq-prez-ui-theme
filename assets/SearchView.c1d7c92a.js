import{d as o,u,r as s,q as l,o as d,a as i,c as h,l as m,F as f,b as g,I as p}from"./index.7a8f168a.js";import{A as _}from"./AdvancedSearch.c7da4f93.js";const q=g("h1",null,"Advanced Search",-1),A=o({__name:"SearchView",setup(y){const e=p(),a=u(),c=s(e.query);s([]);function t(){console.log("API request...")}return l(()=>e.query,(r,n)=>{Object.keys(r).length>0&&r!==n&&t()},{deep:!0}),d(()=>{a.rightNavConfig={enabled:!1},document.title="Advanced Search | Prez",a.pageHeading={name:"Prez",url:"/"},a.breadcrumbs=[{name:"Advanced Search",url:"/search"}],Object.keys(e.query).length>0&&t()}),(r,n)=>(i(),h(f,null,[q,m(_,{query:c.value,fullPage:""},null,8,["query"])],64))}});export{A as default};