import{_ as e,a as t}from"./TableImg.51b451b7.js";import"./BasicForm.e292c287.js";import{u as i}from"./useTable.d377fe38.js";import{j as s,b2 as d,br as a,K as r,o,m as n,n as m,Q as l,Y as c,q as p}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import{d as b}from"./table.557dc46d.js";/* empty css              *//* empty css              */import"./useForm.10272283.js";import"./index.f769efd5.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.393263b2.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.27d623ea.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.9bee2b44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d628f07d.js";import"./base64Conver.bb012c73.js";import"./index.48620b65.js";const j=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"头像",dataIndex:"avatar",width:100,slots:{customRender:"avatar"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"图片列表1",dataIndex:"imgArr",helpMessage:["这是简单模式的图片列表","只会显示一张在表格中","但点击可预览多张图片"],width:140,slots:{customRender:"img"}},{title:"照片列表2",dataIndex:"imgs",width:160,slots:{customRender:"imgs"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var x=s({components:{BasicTable:e,TableImg:t,Tag:d,Avatar:a},setup(){const[e]=i({title:"自定义列内容",titleHelpMessage:"表格中所有头像、图片均为mock生成，仅用于演示图片占位",api:b,columns:j,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const g={class:"p-4"};x.render=function(e,t,i,s,d,a){const b=r("Tag"),j=r("Avatar"),x=r("TableImg"),f=r("BasicTable");return o(),n("div",g,[m(f,{onRegister:e.registerTable},{id:l((({record:e})=>[c(" ID: "+p(e.id),1)])),no:l((({record:e})=>[m(b,{color:"green"},{default:l((()=>[c(p(e.no),1)])),_:2},1024)])),avatar:l((({record:e})=>[m(j,{size:60,src:e.avatar},null,8,["src"])])),img:l((({text:e})=>[m(x,{size:60,simpleShow:!0,imgList:e},null,8,["imgList"])])),imgs:l((({text:e})=>[m(x,{size:60,imgList:e},null,8,["imgList"])])),category:l((({record:e})=>[m(b,{color:"green"},{default:l((()=>[c(p(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default x;