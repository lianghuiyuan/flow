var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(r,t,i)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,a=(e,r,t)=>new Promise(((i,s)=>{var a=e=>{try{n(t.next(e))}catch(r){s(r)}},o=e=>{try{n(t.throw(e))}catch(r){s(r)}},n=e=>e.done?i(e.value):Promise.resolve(e.value).then(a,o);n((t=t.apply(e,r)).next())}));import{_ as o,a as n}from"./useModal.14f2a57c.js";import{_ as d}from"./BasicForm.d23c40e0.js";import{u as l}from"./useForm.a6964f79.js";import{f as m}from"./app.data.a91e62a0.js";import{c,s as p}from"./app.e7ce3a5e.js";import{k as f,r as u,u as j,f as g,K as b,o as y,n as h,Q as v,q as x,N as w}from"./vendor.56d2c57f.js";import"./index.407e4786.js";import"./useWindowSizeFn.d0559e60.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.3d5d9047.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.dd3a6468.js";import"./StrengthMeter.ca48504f.js";var P=f({name:"AppModal",components:{BasicModal:o,BasicForm:d},emits:["success","register"],setup(e,{emit:o}){const d=u(!0),[f,{resetFields:b,updateSchema:y,setFieldsValue:h,validate:v}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[x,{setModalProps:w,closeModal:P}]=n((e=>a(this,null,(function*(){yield b(),w({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);let a=e.record;yield y([{field:"sn",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:40,message:"字符长度不能大于40！"},...(e={id:j(d)&&a&&a.id||"",field:"sn",fieldValue:"",fieldName:"标识"},[{trigger:"blur",validator:(r,t)=>t?c({id:e.id,field:e.field,fieldValue:t,fieldName:e.fieldName}).then((r=>r?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),j(d)&&h(((e,a)=>{for(var o in a||(a={}))t.call(a,o)&&s(e,o,a[o]);if(r)for(var o of r(a))i.call(a,o)&&s(e,o,a[o]);return e})({},e.record))}))));return{registerModal:x,registerForm:f,getTitle:g((()=>j(d)?"修改":"新增")),handleSubmit:function(){return a(this,null,(function*(){try{w({confirmLoading:!0});const e=yield v();e.status=e.status?1:0,yield p(e),P(),o("success")}finally{w({confirmLoading:!1})}}))}}}});P.render=function(e,r,t,i,s,a){const o=b("BasicForm"),n=b("BasicModal");return y(),h(n,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[x(o,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default P;