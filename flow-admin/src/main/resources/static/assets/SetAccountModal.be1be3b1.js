var A=Object.defineProperty,C=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var B=(o,s,e)=>s in o?A(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,x=(o,s)=>{for(var e in s||(s={}))L.call(s,e)&&B(o,e,s[e]);if(g)for(var e of g(s))O.call(s,e)&&B(o,e,s[e]);return o},F=(o,s)=>C(o,y(s));var j=(o,s,e)=>new Promise((u,d)=>{var l=t=>{try{a(e.next(t))}catch(n){d(n)}},p=t=>{try{a(e.throw(t))}catch(n){d(n)}},a=t=>t.done?u(t.value):Promise.resolve(t.value).then(l,p);a((e=e.apply(o,s)).next())});import{B as U,a as $}from"./index.30115123.js";import{B as k}from"./BasicForm.6afa01de.js";import{u as R}from"./useForm.1fd322f5.js";import{a as D}from"./group.data.26d093eb.js";import{e as G}from"./account.d46e9cd1.js";import{b as I}from"./group.81647abb.js";import{A as N,bD as P,r as v,u as h,j as T,a0 as b,B as V,a1 as W,a6 as _,w as M,a4 as z}from"./vendor.7bee64cc.js";import{_ as q}from"./index.9eb02b52.js";import"./useWindowSizeFn.30e15ddc.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.1445cecb.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.78bd314d.js";import"./base64Conver.bb012c73.js";import"./index.83641cbd.js";const H=N({name:"SetAccountModal",components:{BasicModal:U,BasicForm:k,Select:P},emits:["success","register"],setup(o,{emit:s}){const e=v(!0),u=v([]),[d,{setFieldsValue:l,updateSchema:p,resetFields:a,validate:t}]=R({labelWidth:100,schemas:D,showActionButtonGroup:!1,actionColOptions:{span:23}}),[n,{setModalProps:c,closeModal:f}]=$(r=>j(this,null,function*(){a(),c({confirmLoading:!1,title:"\u7ED9\u7EC4\u3010"+r.record.name+"("+r.record.sn+")\u3011\u5206\u914D\u7528\u6237"}),e.value=!!(r==null?void 0:r.isUpdate);const m=yield G();if(m.forEach(i=>{i.label=i.realName+"("+i.username+")",i.value=i.id}),u.value=m,h(e)){let i=r.record.users||[];i=i.map(E=>E.id),l(F(x({},r.record),{users:i}))}}));let S=T(()=>h(e)?"\u4FEE\u6539":"\u65B0\u589E");function w(){return j(this,null,function*(){try{c({confirmLoading:!0});const r=yield t();console.log(r),r.users=r.users.map(m=>({id:m})),r.groupId=r.id,delete r.id,yield I(r),f(),s("success")}finally{c({confirmLoading:!1})}})}return{registerModal:n,registerForm:d,getTitle:S,accountOptions:u,handleSubmit:w}}});function J(o,s,e,u,d,l){const p=b("Select"),a=b("BasicForm"),t=b("BasicModal");return V(),W(t,z(o.$attrs,{onRegister:o.registerModal,title:o.getTitle,onOk:o.handleSubmit}),{default:_(()=>[M(a,{onRegister:o.registerForm},{users:_(({model:n,field:c})=>[M(p,{value:n[c],"onUpdate:value":f=>n[c]=f,mode:"multiple",style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u7528\u6237","option-label-prop":"label",options:o.accountOptions},null,8,["value","onUpdate:value","options"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var he=q(H,[["render",J]]);export{he as default};