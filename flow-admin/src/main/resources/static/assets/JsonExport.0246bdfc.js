import{_ as e}from"./TableImg.5453971a.js";import"./BasicForm.f252c294.js";import"./index.c9b18906.js";import{c as t,d as o,j as a}from"./data.4fe308e5.js";import{_ as s}from"./PageWrapper.e77aca1b.js";import{k as i,K as r,o as d,n,Q as m,q as c,Y as p}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.7c89f4ac.js";import"./index.6992208b.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.11986c6c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.e73ef165.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.14e97884.js";/* empty css              *//* empty css              */import"./download.f95f58dd.js";import"./StrengthMeter.505415db.js";import"./createAsyncComponent.c931d453.js";import"./usePageContext.87ea5c45.js";/* empty css              *//* empty css              */var f=i({components:{BasicTable:e,PageWrapper:s},setup:()=>({defaultHeader:function(){a({data:o,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){a({data:o,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:t,data:o})});const j=p(" 导出：默认头部 "),u=p(" 导出：自定义头部 ");f.render=function(e,t,o,a,s,i){const p=r("a-button"),f=r("BasicTable"),l=r("PageWrapper");return d(),n(l,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[c(f,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[c(p,{onClick:e.defaultHeader},{default:m((()=>[j])),_:1},8,["onClick"]),c(p,{onClick:e.customHeader},{default:m((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default f;