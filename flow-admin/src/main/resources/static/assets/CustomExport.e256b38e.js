import{_ as e}from"./TableImg.796610fd.js";import"./BasicForm.adb2a199.js";import{E as o}from"./index.57ea88fd.js";import{c as i,d as t,j as a}from"./data.85b6d390.js";import{b as s}from"./index.13a30da8.js";import{P as r}from"./index.c1dc3b6b.js";import{j as d,K as n,o as m,m as p,Q as c,n as f,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.40c52001.js";import"./index.04486bdf.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.979115a3.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a84c0e16.js";/* empty css              *//* empty css              *//* empty css              */import"./download.45a835c8.js";import"./base64Conver.bb012c73.js";import"./index.9702aa73.js";import"./useContentViewHeight.c5b829cb.js";/* empty css              *//* empty css              */var l=d({components:{BasicTable:e,ExpExcelModal:o,PageWrapper:r},setup(){const[e,{openModal:o}]=s();return{defaultHeader:function({filename:e,bookType:o}){a({data:t,filename:e,write2excelOpts:{bookType:o}})},columns:i,data:t,register:e,openModal:o}}});const b=j(" 导出 ");l.render=function(e,o,i,t,a,s){const r=n("a-button"),d=n("BasicTable"),j=n("ExpExcelModal"),l=n("PageWrapper");return m(),p(l,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[f(d,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[f(r,{onClick:e.openModal},{default:c((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),f(j,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;