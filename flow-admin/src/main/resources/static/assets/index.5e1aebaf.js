import e from"./index.512d8a69.js";import{u as a}from"./useFrameKeepAlive.01f37a1d.js";import{z as r,a as t,u as m,r as n,X as s,j as o,Z as i,D as l,F as d,w as f}from"./vendor.11d66826.js";import{a0 as u}from"./index.1bc1d740.js";import{a as c}from"./modelInfo.5424b940.js";import"./useWindowSizeFn.9fecf134.js";var p=r({name:"BpmnDesigner",components:{FramePage:e},setup(){const{currentRoute:e}=t(),{query:{modelId:r}}=m(e),i=n(""),l=n({}),d=u(),f=t(),p=d.getTabList.find((e=>e.fullPath===f.currentRoute.value.fullPath));s((()=>{0!==p.meta.title.indexOf("设计流程-")&&c(r).then((e=>{p.meta.title&&-1===p.meta.title.indexOf("-"+e.name)&&(p.meta.title=p.meta.title+"-"+e.name)})).catch((()=>{}))})),i.value="/flow-bpmn/index.html/#/bpmn/designer?modelId="+r;const{getFramePages:h,hasRenderFrame:g,showIframe:F}=a(),j=o((()=>m(h).length>0));return{getFramePages:h,hasRenderFrame:g,showIframe:F,showFrame:j,url:i,frame:l}}});p.render=function(e,a,r,t,m,n){const s=i("FramePage");return l(),d("div",null,[f(s,{frameSrc:e.url},null,8,["frameSrc"])])};export default p;