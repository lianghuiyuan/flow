import{B as e,a as i}from"./index.6186eede.js";import{_ as s}from"./BasicForm.9dacb4c6.js";import{u as o}from"./useForm.04030879.js";import{j as r,K as t,o as d,m as n,Q as a,n as m,N as p}from"./vendor.686fd1d4.js";import"./index.643db95a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              */import"./index.2d1288e4.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";const f=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=r({components:{BasicDrawer:e,BasicForm:s},setup(){const[e,{setFieldsValue:s}]=o({labelWidth:120,schemas:f,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=i((e=>{s({field2:e.data,field1:e.info})}));return{register:r,schemas:f,registerForm:e}}});c.render=function(e,i,s,o,r,f){const c=t("BasicForm"),l=t("BasicDrawer");return d(),n(l,p(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:a((()=>[m("div",null,[m(c,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default c;