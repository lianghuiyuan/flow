var C=(r,a,p)=>new Promise((m,u)=>{var o=t=>{try{i(p.next(t))}catch(e){u(e)}},n=t=>{try{i(p.throw(t))}catch(e){u(e)}},i=t=>t.done?m(t.value):Promise.resolve(t.value).then(o,n);i((p=p.apply(r,a)).next())});import{B as $}from"./BasicForm.d2fa120b.js";import{u as P}from"./useForm.431e5593.js";import{az as k,a as F,cF as I,I as v,dE as h,w as g,aB as c,o as d,k as B,B as l,p as _,C as f,l as b}from"./index.0280002f.js";import{P as y}from"./index.432b4215.js";/* empty css              *//* empty css               */import"./index.498da238.js";import"./index.5c81bb10.js";import"./Checkbox.61b53ada.js";import"./index.c68c747e.js";import"./index.3486105d.js";import"./index.6db63b77.js";import"./index.81d6e7a6.js";import"./index.46b96662.js";import"./get.742319ba.js";import"./index.86a12b41.js";import"./eagerComputed.832d624f.js";import"./index.9aa048a5.js";import"./_baseIteratee.9e690663.js";import"./DeleteOutlined.1c34c6c1.js";import"./index.a1c94158.js";import"./useRefs.f68e97c5.js";import"./Form.227e5499.js";import"./Col.32e8fee0.js";import"./useFlexGapSupport.f92812e7.js";import"./useSize.71621680.js";import"./transButton.fa31f1ed.js";import"./index.85e9aa1e.js";import"./index.0e48118d.js";import"./useWindowSizeFn.c0eea5f2.js";import"./FullscreenOutlined.d5490f36.js";import"./index.1d3f95d6.js";import"./index.3dcb35e5.js";import"./uuid.2b29000c.js";import"./download.f8a78464.js";import"./base64Conver.08b9f4ec.js";import"./index.e42b0536.js";import"./index.619bca12.js";import"./uniqBy.facde3d1.js";import"./index.4266ca8e.js";import"./index.02c8bfe1.js";import"./useContentViewHeight.084217e3.js";import"./ArrowLeftOutlined.e9ea5e65.js";import"./index.e0f520b3.js";const q=F({components:{BasicForm:$,CollapseContainer:I,PageWrapper:y,[v.name]:v,Button:h},setup(){const[r,{appendSchemaByField:a,removeSchemaByField:p,validate:m}]=P({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function u(){return C(this,null,function*(){try{const e=yield m()}catch(e){}})}const o=g(1);function n(){a({field:`field${o.value}a`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},""),a({field:`field${o.value}b`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},""),a({field:`${o.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),o.value++}function i(){a([{field:`field${o.value}a`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},{field:`field${o.value}b`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},{field:`${o.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"}],""),o.value++}function t(e){p([`field${e}a`,`field${e}b`,`${e}`]),o.value--}return{register:r,handleSubmit:u,add:n,del:t,batchAdd:i}}});function S(r,a,p,m,u,o){const n=c("Button"),i=c("BasicForm"),t=c("CollapseContainer"),e=c("PageWrapper");return d(),B(e,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:l(()=>[_(t,{title:"\u8868\u5355\u589E\u5220"},{default:l(()=>[_(i,{onRegister:r.register,onSubmit:r.handleSubmit},{add:l(({field:s})=>[Number(s)===0?(d(),B(n,{key:0,onClick:r.add},{default:l(()=>[f("+")]),_:1},8,["onClick"])):b("",!0),Number(s)===0?(d(),B(n,{key:1,class:"ml-2",onClick:r.add},{default:l(()=>[f("\u6279\u91CF\u6DFB\u52A0\u8868\u5355\u914D\u7F6E")]),_:1},8,["onClick"])):b("",!0),s>0?(d(),B(n,{key:2,onClick:N=>r.del(s)},{default:l(()=>[f("-")]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Fo=k(q,[["render",S]]);export{Fo as default};