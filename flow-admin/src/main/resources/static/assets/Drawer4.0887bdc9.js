import{B as p,a as d}from"./index.b78cb146.js";import{B as m}from"./BasicForm.0ba2e15f.js";import{u as c}from"./useForm.696aa965.js";import{_ as l}from"./index.e84e956c.js";import{A as u,a0 as i,B as j,a1 as f,a6 as B,H as x,w as b,a4 as w}from"./vendor.5879c5ca.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./index.c505e96f.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css                */import"./uuid.2b29000c.js";import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";const t=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:12}}],_=u({components:{BasicDrawer:p,BasicForm:m},setup(){const[e,{setFieldsValue:s}]=c({labelWidth:120,schemas:t,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=d(o=>{s({field2:o.data,field1:o.info})});return{register:r,schemas:t,registerForm:e}}});function F(e,s,r,o,g,h){const n=i("BasicForm"),a=i("BasicDrawer");return j(),f(a,w(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:B(()=>[x("div",null,[b(n,{onRegister:e.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}var Q=l(_,[["render",F]]);export{Q as default};