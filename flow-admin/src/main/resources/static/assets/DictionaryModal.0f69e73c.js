var e=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(i,r,t)=>r in i?e(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,s=(e,i,r)=>new Promise(((t,o)=>{var s=e=>{try{n(r.next(e))}catch(i){o(i)}},a=e=>{try{n(r.throw(e))}catch(i){o(i)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,a);n((r=r.apply(e,i)).next())}));import{B as a,a as n}from"./index.003114f2.js";import{_ as d}from"./BasicForm.1c70ff64.js";import{u as l}from"./useForm.24ec6471.js";import{f as c,g as m,h as p}from"./dictionary.747fed7d.js";import{y as f,r as u,u as j,j as b,Z as g,B as y,F as x,a2 as v,v as h,a0 as w}from"./vendor.880b4c6c.js";import"./index.e4d4c34e.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6f4ea15e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.3cef252b.js";import"./base64Conver.bb012c73.js";import"./index.78bdb162.js";var F=f({name:"DictionaryModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=u(!0),[f,{setFieldsValue:g,updateSchema:y,resetFields:x,validate:v}]=l({labelWidth:100,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:23}}),[h,{setModalProps:w,closeModal:F}]=n((e=>s(this,null,(function*(){yield x(),w({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);let s=e.record;yield y([{field:"code",dynamicRules:()=>{return[{whitespace:!0,required:!0,message:"编码不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{pattern:new RegExp("^.{1,32}$"),type:"string",message:"字符长度不能大于32！"},...(e={id:j(d)&&s&&s.id||"",field:"code",fieldValue:"",fieldName:"编码"},[{trigger:"blur",validator:(i,r)=>r?m({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((i=>i?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),g(((e,s)=>{for(var a in s||(s={}))r.call(s,a)&&o(e,a,s[a]);if(i)for(var a of i(s))t.call(s,a)&&o(e,a,s[a]);return e})({},e.record))}))));return{registerModal:h,registerForm:f,getTitle:b((()=>j(d)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{w({confirmLoading:!0});const e=yield v();yield p(e),F(),a("success")}finally{w({confirmLoading:!1})}}))}}}});F.render=function(e,i,r,t,o,s){const a=g("BasicForm"),n=g("BasicModal");return y(),x(n,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[h(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default F;