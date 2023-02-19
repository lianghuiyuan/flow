var C=Object.defineProperty,S=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var B=(t,r,e)=>r in t?C(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,w=(t,r)=>{for(var e in r||(r={}))D.call(r,e)&&B(t,e,r[e]);if(h)for(var e of h(r))R.call(r,e)&&B(t,e,r[e]);return t},E=(t,r)=>S(t,b(r));var f=(t,r,e)=>new Promise((l,m)=>{var p=i=>{try{a(e.next(i))}catch(n){m(n)}},s=i=>{try{a(e.throw(i))}catch(n){m(n)}},a=i=>i.done?l(i.value):Promise.resolve(i.value).then(p,s);a((e=e.apply(t,r)).next())});import{B as k,a as A}from"./index.a492e5cd.js";import{B as P}from"./BasicForm.027cbf67.js";import{u as $}from"./useForm.81406efc.js";import{f as N,a as V,b as x}from"./module.data.c84baa3d.js";import{az as L,a as O,x as U,k as g,h as j,aB as M,i as q,l as z,C as T,q as G,aC as I}from"./index.e61ad282.js";import"./useWindowSizeFn.27de1b1b.js";import"./FullscreenOutlined.3a424424.js";/* empty css              *//* empty css               */import"./index.9f50e000.js";import"./index.ce1ab63a.js";import"./Checkbox.bb68ead3.js";import"./index.99ef178c.js";import"./index.6e0a0264.js";import"./index.8f86dec4.js";import"./index.9f299dd3.js";import"./index.9233793b.js";import"./get.bca7403a.js";import"./index.d92fc3ac.js";import"./eagerComputed.d3c262c3.js";import"./index.6749d186.js";import"./_baseIteratee.7ece590b.js";import"./DeleteOutlined.3b47e95d.js";import"./index.114515de.js";import"./useRefs.0c428178.js";import"./Form.8b25370b.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./useSize.5a37866d.js";import"./transButton.2c723edc.js";import"./index.8ba0bfed.js";import"./index.dbdde179.js";import"./index.e8295ad9.js";import"./uuid.2b29000c.js";import"./download.810571da.js";import"./base64Conver.08b9f4ec.js";import"./index.ebd81f61.js";import"./index.6d7de824.js";import"./uniqBy.8c214189.js";const W=O({name:"ModuleModal",components:{BasicModal:k,BasicForm:P},emits:["success","register"],setup(t,{emit:r}){const e=U(!0),[l,{resetFields:m,setFieldsValue:p,updateSchema:s,validate:a}]=$({labelWidth:100,schemas:N,showActionButtonGroup:!1}),i=o=>[{trigger:"blur",validator:(u,F)=>F?V({id:o.id,field:o.field,fieldValue:F,fieldName:o.fieldName}).then(d=>d?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(d=>Promise.reject(d)):Promise.resolve()}],[n,{setModalProps:c,closeModal:_}]=A(o=>f(this,null,function*(){yield m(),c({confirmLoading:!1}),e.value=!!(o!=null&&o.isUpdate);let u=o.record;yield s([{field:"sn",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{trigger:["change","blur"],pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{trigger:["change","blur"],max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"},...i({id:g(e)&&u&&u.id||"",field:"sn",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),g(e)&&p(E(w({},u),{status:u.status===1,showStatus:u.showStatus===1})),o.record.id?s([{field:"component",show:!1},{field:"url",show:!1}]):s([{field:"component",show:!0},{field:"url",show:!0}])})),v=j(()=>g(e)?"\u4FEE\u6539":"\u65B0\u589E");function y(){return f(this,null,function*(){try{c({confirmLoading:!0});const o=yield a();o.status=o.status?1:0,o.showStatus=o.showStatus?1:0,yield x(o),_(),r("success")}finally{c({confirmLoading:!1})}})}return{registerModal:n,registerForm:l,getTitle:v,handleSubmit:y}}});function Z(t,r,e,l,m,p){const s=M("BasicForm"),a=M("BasicModal");return q(),z(a,I(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:T(()=>[G(s,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Ne=L(W,[["render",Z]]);export{Ne as default};