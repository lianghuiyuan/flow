var f=(a,c,t)=>new Promise((n,i)=>{var l=e=>{try{o(t.next(e))}catch(r){i(r)}},s=e=>{try{o(t.throw(e))}catch(r){i(r)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(l,s);o((t=t.apply(a,c)).next())});import{az as u,a as _,b4 as h,w as d,O as v,aB as S,bS as T,y as g,o as D,i as B,p as b,an as k,j as p,fD as w}from"./index.7ea10544.js";import{_ as y}from"./index.694f5114.js";import{g as $}from"./positionSeq.130e8bba.js";import"./fromPairs.daf93cb7.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./useContextMenu.936ed174.js";import"./index.5d6fdc93.js";import"./get.4066932b.js";const q=_({name:"PositionSeqTree",components:{BasicTree:y,Spin:h},emits:["select"],setup(a,{emit:c}){const t=d([]),n=d(!1),i=d(null);function l(){return f(this,null,function*(){n.value=!0,$().then(o=>{t.value=o,k(()=>{var e;p(t).length<10&&((e=p(i))==null||e.filterByLevel(1))})}).finally(()=>{n.value=!1})})}function s(o,e){const r=w(t.value,m=>m.id===o[0],{id:"id",pid:"pid",children:"children"});c("select",r)}return v(()=>{l()}),{treeData:t,treeLoading:n,basicTreeRef:i,handleSelect:s}}}),C={class:"bg-white m-4 mr-0 overflow-hidden"};function E(a,c,t,n,i,l){const s=S("BasicTree"),o=T("loading");return g((D(),B("div",C,[b(s,{title:"\u5C97\u4F4D\u5E8F\u5217",toolbar:"",search:"",clickRowToExpand:!1,treeData:a.treeData,replaceFields:{key:"id",title:"name"},onSelect:a.handleSelect,ref:"basicTreeRef"},null,8,["treeData","onSelect"])])),[[o,a.treeLoading]])}var V=u(q,[["render",E]]);export{V as default};