import{az as p,a as m,b9 as d,bn as f,bg as _,fz as g,h as E,aB as e,i as C,l as L,C as a,q as c,e as h,b2 as B}from"./index.ef013507.js";import{B as b}from"./index.eaeab232.js";const T=m({name:"ErrorAction",components:{Icon:d,Tooltip:f,Badge:b},setup(){const{t:o}=h(),{push:n}=_(),t=g(),r=E(()=>t.getErrorLogListCount);function s(){n(B.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function k(o,n,t,r,s,I){const u=e("Icon"),i=e("Badge"),l=e("Tooltip");return C(),L(l,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(i,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(u,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var v=p(T,[["render",k]]);export{v as default};