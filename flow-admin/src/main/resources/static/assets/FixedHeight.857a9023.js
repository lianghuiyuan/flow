import{_ as e}from"./TableImg.aff6a356.js";import"./BasicForm.8a33b99c.js";import{u as s}from"./useTable.b9ab9434.js";import{getCustomHeaderColumns as i}from"./tableData.3f3da3f1.js";import{d as o}from"./table.f3d67d62.js";import{ao as r}from"./index.4926e6da.js";import{y as t,bP as a,Z as m,B as d,F as n,v as p,a2 as c,a9 as f}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.64c4ba7e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.0795d69f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.4052c204.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";var j=t({components:{BasicTable:e,FormOutlined:a,BasicHelp:r},setup(){const[e]=s({title:"定高/头部自定义",api:o,columns:i(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const b={class:"p-4"},l=f(" 姓名 "),u=f(" 地址 ");j.render=function(e,s,i,o,r,t){const a=m("BasicHelp"),f=m("FormOutlined"),j=m("BasicTable");return d(),n("div",b,[p(j,{onRegister:e.registerTable},{customTitle:c((()=>[p("span",null,[l,p(a,{class:"ml-2",text:"姓名"})])])),customAddress:c((()=>[u,p(f,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default j;