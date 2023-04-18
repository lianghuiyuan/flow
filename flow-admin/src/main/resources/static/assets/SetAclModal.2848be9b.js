var O=Object.defineProperty,P=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var _=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,R=(e,t)=>{for(var r in t||(t={}))j.call(t,r)&&_(e,r,t[r]);if(M)for(var r of M(t))H.call(t,r)&&_(e,r,t[r]);return e},w=(e,t)=>P(e,W(t));var S=(e,t,r)=>new Promise((d,m)=>{var l=s=>{try{n(r.next(s))}catch(p){m(p)}},i=s=>{try{n(r.throw(s))}catch(p){m(p)}},n=s=>s.done?d(s.value):Promise.resolve(s.value).then(l,i);n((r=r.apply(e,t)).next())});import{B as X,a as q}from"./index.61c914e7.js";import{B as J}from"./TableImg.b4edebb6.js";import{B as K}from"./BasicForm.d977d74c.js";import{u as Q}from"./useTable.2d6a625d.js";import{u as Y}from"./useForm.d5452096.js";import{b as Z,d as ee}from"./group.data.d13bbd55.js";import{b as oe}from"./account.a010f74c.js";import{A as te,g as E,s as re}from"./AclCheckboxGroup.18fdb6df.js";import{az as ae,a as se,cX as le,w as f,j as G,f5 as z,aB as g,o as ie,k as ne,B as k,p as B,n as ce,C as me,aC as pe}from"./index.7ea10544.js";import{C as L}from"./index.f8eff8ab.js";import"./useWindowSizeFn.3dc14e02.js";import"./FullscreenOutlined.8864dded.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./index.0b8e7721.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useSize.b4cfb06d.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";import"./transButton.331b5127.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.6954dcaa.js";import"./uuid.2b29000c.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./get.4066932b.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./index.5d6fdc93.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.495d4eff.js";import"./index.32756aa0.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.17e7a4de.js";import"./index.056b642d.js";/* empty css              *//* empty css               */import"./index.c6794bd1.js";import"./index.a8777167.js";import"./index.d3af8cb2.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";const ue=L.Group,de=se({name:"SetAclModal",components:{BasicModal:X,BasicTable:J,BasicForm:K,Select:le,Checkbox:L,CheckboxGroup:ue,AclCheckboxGroup:te},emits:["success","register"],setup(e,{emit:t}){const r=f(!0),d=f(""),m=f([]),l=f(!0),i=f(!1),n=f(!1),[s,{setFieldsValue:p,updateSchema:T,resetFields:h,validate:v}]=Y({labelWidth:100,schemas:Z,showActionButtonGroup:!1,actionColOptions:{span:0}}),[c,{getDataSource:C,setTableData:y,reload:he,expandAll:I}]=Q({title:"",size:"small",dataSource:m,loading:l,immediate:!1,searchInfo:{},columns:ee,formConfig:{labelWidth:120},canResize:!0,maxHeight:400,isTreeTable:!0,useSearchForm:!1,showTableSetting:!1,bordered:!1,showIndexColumn:!1,pagination:!1}),[U,{setModalProps:A,closeModal:$}]=q(o=>S(this,null,function*(){if(h(),A({confirmLoading:!1,title:"\u7ED9\u7EC4\u3010"+o.record.name+"("+o.record.sn+")\u3011\u8BBE\u7F6E\u6743\u9650"}),r.value=!!(o!=null&&o.isUpdate),G(r)){let a=o.record.groups||[];a=a.map(u=>u.id),p(w(R({},o.record),{groups:a})),d.value=o.record.id}l.value=!0,E({groupId:o.record.id}).then(a=>{x(a),m.value=a,l.value=!1,setTimeout(()=>{I()})})}));function x(o){let a=0,u=0,b=0;z(o,F=>{F.pvs&&F.pvs.forEach(N=>{a++,N.flag?u++:b++})}),u===a?(n.value=!0,i.value=!1):b===a?(n.value=!1,i.value=!1):i.value=!0}function V(){return S(this,null,function*(){try{A({confirmLoading:!0});const o=yield v();o.groups=o.groups.map(a=>({id:a})),o.userId=o.id,delete o.id,yield oe(o),$(),t("success")}finally{A({confirmLoading:!1})}})}function D(){E({groupId:d.value}).then(o=>{x(o)})}return{registerTable:c,registerModal:U,indeterminate:i,registerForm:s,checkAllBox:n,handelChangeCheckAllStatus:D,checkAll:o=>{l.value=!0,i.value=!1,re({checked:o.target.checked?1:0,aclInfo:{releaseId:G(d)}}).then(a=>{z(m.value,u=>{u.pvs&&u.pvs.forEach(b=>{b.flag=o.target.checked})}),y(m.value),l.value=!1,setTimeout(()=>{I()})}).catch(()=>{l.value=!1})},handleSubmit:V}}});function fe(e,t,r,d,m,l){const i=g("Checkbox"),n=g("AclCheckboxGroup"),s=g("BasicTable"),p=g("BasicForm"),T=g("BasicModal");return ie(),ne(T,pe(e.$attrs,{onRegister:e.registerModal,onOk:e.handleSubmit}),{default:k(()=>[B(p,{onRegister:e.registerForm},{acls:k(({model:h,field:v})=>[B(s,{value:h[v],"onUpdate:value":c=>h[v]=c,onRegister:e.registerTable},{customTitle:k(()=>[ce("span",null,[B(i,{checked:e.checkAllBox,"onUpdate:checked":t[0]||(t[0]=c=>e.checkAllBox=c),indeterminate:e.indeterminate,onClick:e.checkAll},{default:k(()=>[me("\u5168\u9009")]),_:1},8,["checked","indeterminate","onClick"])])]),pvs:k(({record:c})=>[B(n,{onChangeCheckAllStatus:e.handelChangeCheckAllStatus,checkboxList:c.pvs.map(C=>({label:C.name,value:C.position,checked:C.flag})),groupId:h.id,moduleSn:c.sn,moduleId:c.id},null,8,["onChangeCheckAllStatus","checkboxList","groupId","moduleSn","moduleId"])]),_:2},1032,["value","onUpdate:value","onRegister"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","onOk"])}var Co=ae(de,[["render",fe]]);export{Co as default};