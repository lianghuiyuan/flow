import{w as e}from"./index.ffeb6485.js";import{j as t,r as i,cb as n,I as s,o as d,m as r,R as a,K as o,n as c,q as u,x as l}from"./vendor.686fd1d4.js";import{P as f}from"./index.52d50d5a.js";import"./useContentViewHeight.7085396b.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var m=t({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const d=i(null);return n(d,(()=>{t("clickOutside")})),s((()=>{t("mounted")})),{wrap:d}}});const p={ref:"wrap"};m.render=function(e,t,i,n,s,o){return d(),r("div",p,[a(e.$slots,"default")],512)};var k=t({components:{ClickOutSide:e(m),PageWrapper:f},setup(){const e=i("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const C=l(),O=C(((e,t,i,n,s,a)=>{const l=o("ClickOutSide"),f=o("PageWrapper");return d(),r(f,{title:"点内外部触发事件"},{default:C((()=>[c(l,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:C((()=>[c("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},u(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));k.render=O,k.__scopeId="data-v-824d9cd0";export default k;