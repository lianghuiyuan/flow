var e=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(a,i,r)=>i in a?e(a,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[i]=r,t=(e,a,i)=>new Promise(((r,s)=>{var t=e=>{try{d(i.next(e))}catch(a){s(a)}},o=e=>{try{d(i.throw(e))}catch(a){s(a)}},d=e=>e.done?r(e.value):Promise.resolve(e.value).then(t,o);d((i=i.apply(e,a)).next())}));import{B as o,a as d}from"./index.acbe981f.js";import{_ as l}from"./BasicForm.5cce9782.js";import{u as n}from"./useForm.5da8fb25.js";import{y as m,c0 as c,by as p,bD as u,r as f,u as g,j as b,z as j,A as y,Z as v,B as x,F as w,v as h,a0 as R,K as F}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import{h as P}from"./index.8c1d7da4.js";import{a as O}from"./account.data.a470356e.js";import{c as B,s as M}from"./account.8415d4f5.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.57b652cd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.22b91874.js";import"./base64Conver.bb012c73.js";import"./index.30a3342d.js";var N=m({name:"AccountModal",components:{BasicModal:o,BasicForm:l,PlusOutlined:c,LoadingOutlined:p,Upload:u},emits:["success","register"],setup(e,{emit:o}){const l=f(!0),m=f(""),{createMessage:c}=P(),[p,{setFieldsValue:u,updateSchema:j,resetFields:y,validate:v}]=n({labelWidth:100,schemas:O,showActionButtonGroup:!1,actionColOptions:{span:23}}),x=e=>[{trigger:"blur",validator:(a,i)=>i?B({id:e.id,field:e.field,fieldValue:i,fieldName:e.fieldName}).then((a=>a?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}],[w,{setModalProps:h,closeModal:R}]=d((e=>t(this,null,(function*(){yield y(),h({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate);let t=e.record;yield j([{field:"username",dynamicRules:()=>[{required:!0,whitespace:!0,message:"用户名不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:30,message:"字符长度不能大于30！"},...x({id:g(l)&&t&&t.id||"",field:"username",fieldValue:"",fieldName:"用户名"})]},{field:"userNo",dynamicRules:()=>[{required:!0,whitespace:!0,message:"工号不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:32,message:"字符长度不能大于32！"},...x({id:g(l)&&t&&t.id||"",field:"userNo",fieldValue:"",fieldName:"工号"})]},{field:"mobile",dynamicRules:()=>[{required:!0,whitespace:!0,message:"手机不能为空！"},{pattern:new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$"),type:"string",message:"请输入正确的手机号！"},{max:32,message:"字符长度不能大于32！"},...x({id:g(l)&&t&&t.id||"",field:"mobile",fieldValue:"",fieldName:"手机号"})]},{field:"email",dynamicRules:()=>[{pattern:new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"),type:"string",message:"请输入正确的邮箱地址！"},{max:256,message:"字符长度不能大于256！"},...x({id:g(l)&&t&&t.id||"",field:"email",fieldValue:"",fieldName:"邮箱"})]}]),m.value=e.record.image,u(((e,t)=>{for(var o in t||(t={}))i.call(t,o)&&s(e,o,t[o]);if(a)for(var o of a(t))r.call(t,o)&&s(e,o,t[o]);return e})({},e.record))})))),F=b((()=>g(l)?"修改":"新增"));return{registerModal:w,registerForm:p,getTitle:F,imageUrl:m,handleSubmit:function(){return t(this,null,(function*(){try{h({confirmLoading:!0});const e=yield v();e.image=m.value,yield M(e),R(),o("success")}finally{h({confirmLoading:!1})}}))},beforeUpload:e=>{if(!("image/jpeg"===e.type||"image/png"===e.type))return c.error("只允许上传JPG图片！"),!1;return e.size/1024/1024<2?(((e,a)=>{const i=new FileReader;i.addEventListener("load",(()=>a(i.result))),i.readAsDataURL(e)})(e,(e=>{m.value=e})),!1):(c.error("图片不能大于2MB！"),!1)}}}});const U=F();j("data-v-7499d809");const _={key:1},A=h("div",{class:"ant-upload-text"},"上传头像",-1);y();const E=U(((e,a,i,r,s,t)=>{const o=v("plus-outlined"),d=v("Upload"),l=v("BasicForm"),n=v("BasicModal");return x(),w(n,R(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:U((()=>[h(l,{onRegister:e.registerForm,class:"accountForm"},{headImg:U((({model:a,field:i})=>[h(d,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":e.beforeUpload,multiple:!1},{default:U((()=>[e.imageUrl?(x(),w("img",{key:0,src:e.imageUrl,alt:"avatar"},null,8,["src"])):(x(),w("div",_,[h(o),A]))])),_:1},8,["before-upload"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])}));N.render=E,N.__scopeId="data-v-7499d809";export default N;