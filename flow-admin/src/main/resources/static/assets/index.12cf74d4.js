import{D as e}from"./index.81fbb8fe.js";import{P as a}from"./index.daa15fb0.js";import{u as t}from"./useDescription.8ab64c09.js";import{y as s,Z as r,B as i,F as n,a2 as o,v as l}from"./vendor.880b4c6c.js";import"./index.e4d4c34e.js";/* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.0c12a40d.js";const c={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},m=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var d=s({components:{Description:e,PageWrapper:a},setup(){const[e]=t({title:"useDescription",data:c,schema:m}),[a]=t({title:"无边框",bordered:!1,data:c,schema:m});return{mockData:c,schema:m,register:e,register1:a}}});d.render=function(e,a,t,s,c,m){const d=r("Description"),p=r("PageWrapper");return i(),n(p,{title:"详情组件示例"},{default:o((()=>[l(d,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),l(d,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),l(d,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),l(d,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default d;