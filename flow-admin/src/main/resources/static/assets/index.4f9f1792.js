var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import i from"./Step1.c6c5a2bf.js";import a from"./Step2.3d36ae11.js";import p from"./Step3.019032bd.js";import{_ as s}from"./PageWrapper.acc8d12f.js";import{k as d,c9 as c,r as m,A as f,H as l,l as u,m as j,K as b,o as x,n as S,x as v,q as P,w as h,v as y,X as g}from"./vendor.9d9efc92.js";/* empty css              */import"./BasicForm.df85bae6.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.3f4b0a4c.js";import"./CountdownInput.07d1a2fc.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.fc795c66.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.42909391.js";import"./StrengthMeter.7f6a4ce0.js";import"./useForm.a42bd52f.js";import"./data.2505cb7f.js";/* empty css              *//* empty css              */import"./usePageContext.18bdf57b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var N=d({components:{Step1:i,Step2:a,Step3:p,PageWrapper:s,[c.name]:c,[c.Step.name]:c.Step},setup(){const e=m(0),i=f({initSetp2:!1,initSetp3:!1});return((e,i)=>{for(var a in i||(i={}))r.call(i,a)&&o(e,a,i[a]);if(t)for(var a of t(i))n.call(i,a)&&o(e,a,i[a]);return e})({current:e,handleStep1Next:function(t){e.value++,i.initSetp2=!0},handleStep2Next:function(t){e.value++,i.initSetp3=!0},handleRedo:function(){e.value=0,i.initSetp2=!1,i.initSetp3=!1},handleStepPrev:function(){e.value--}},l(i))}});const w=v();u("data-v-3b1653d3");const O={class:"step-form-form"},_={class:"mt-5"};j();const k=w(((e,t,r,n,o,i)=>{const a=b("a-step"),p=b("a-steps"),s=b("Step1"),d=b("Step2"),c=b("Step3"),m=b("PageWrapper");return x(),S(m,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:w((()=>[P("div",O,[P(p,{current:e.current},{default:w((()=>[P(a,{title:"填写转账信息"}),P(a,{title:"确认转账信息"}),P(a,{title:"完成"})])),_:1},8,["current"])]),P("div",_,[h(P(s,{onNext:e.handleStep1Next},null,8,["onNext"]),[[y,0===e.current]]),e.initSetp2?h((x(),S(d,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[y,1===e.current]]):g("",!0),e.initSetp3?h((x(),S(c,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[y,2===e.current]]):g("",!0)])])),_:1})}));N.render=k,N.__scopeId="data-v-3b1653d3";export default N;