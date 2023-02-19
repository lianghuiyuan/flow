import{P as x}from"./index.4dfdb4ab.js";import{az as U,a as w,ag as D,x as A,aB as m,i as s,l as k,C as a,q as e,D as _,j as l,m as O,p as i,H as P}from"./index.ef013507.js";import{U as M}from"./index.ac5849f2.js";import"./index.7e4b5f10.js";/* empty css               */import{B as S}from"./TableImg.6b85bf08.js";import{l as N}from"./BasicForm.d8aa86d3.js";import{u as R}from"./useTable.60e7369f.js";import{S as I,g as L,c as T,s as V,d as W}from"./SystemConfigModal.b2a90a61.js";import{b as $}from"./index.4ff668bf.js";import{P as J}from"./PlusOutlined.95fc7300.js";import{R as j,C as z}from"./index.4e2ec58e.js";import"./index.1eabbb9a.js";import"./index.0210df95.js";import"./useSize.55446702.js";import"./eagerComputed.487f958f.js";import"./useWindowSizeFn.37be93ea.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";import"./transButton.750f7635.js";import"./_baseIteratee.39b06e56.js";import"./get.fbc063d7.js";import"./DeleteOutlined.fda42126.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useRefs.5ed2b70f.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.4dfcf0e9.js";import"./useForm.d7bb3373.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0b0495b0.js";import"./uuid.2b29000c.js";import"./index.8a7cb11f.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.01e40c90.js";import"./FullscreenOutlined.d97e6502.js";import"./index.27c2d820.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f0dd617b.js";import"./index.eaeab232.js";/* empty css              */import"./index.0e08ed6e.js";import"./index.edd8ff4a.js";import"./index.0bfe1343.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./uniqBy.4bac5850.js";import"./constantEnum.bf6653fb.js";const G=w({name:"SystemConfig",components:{PlusOutlined:J,LoadingOutlined:D,Row:j,Col:z,Upload:M,BasicTable:S,TableAction:N,SystemConfigModal:I,PageWrapper:x},setup(){const[o,{openModal:d}]=$(),g=A(""),{createMessage:h}=P(),[C,{reload:c}]=R({title:"\u5217\u8868",api:L,columns:T,formConfig:{labelWidth:120,schemas:V,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function r(){d(!0,{isUpdate:!1})}function u(t){d(!0,{record:t,isUpdate:!0})}const n=(t,y)=>{const f=new FileReader;f.addEventListener("load",()=>y(f.result)),f.readAsDataURL(t)};function p(t){t={pid:t.id},d(!0,{record:t,isUpdate:!0})}function F(t){W([t.id]).then(()=>{c()})}const B=t=>t.type==="image/jpeg"||t.type==="image/png"?t.size/1024/1024<2?(n(t,E=>{g.value=E}),!1):(h.error("\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E2MB\uFF01"),!1):(h.error("\u53EA\u5141\u8BB8\u4E0A\u4F20JPG\u56FE\u7247\uFF01"),!1);function b(){c()}function v(){setTimeout(()=>{c()},200)}return{beforeUpload:B,registerTable:C,registerModal:o,handleCreate:r,handleEdit:u,handleCreateChild:p,handleDelete:F,handleSuccess:v,doSearch:b,imageUrl:g}}}),q=["src"],H=["src"],K={key:1},Q=i("div",{class:"ant-upload-text"},"\u4E0A\u4F20ICON",-1),X=["src"],Y={key:1},Z=i("div",{class:"ant-upload-text"},"\u4E0A\u4F20ICON",-1),ee=["src"],te={key:1},oe=i("div",{class:"ant-upload-text"},"\u4E0A\u4F20ICON",-1),ae=i("br",null,null,-1),re=i("br",null,null,-1),se=i("br",null,null,-1);function le(o,d,g,h,C,c){const r=m("Col"),u=m("plus-outlined"),n=m("Upload"),p=m("Row"),F=m("PageWrapper");return s(),k(F,{title:"\u7CFB\u7EDF\u914D\u7F6E",contentBackground:"",content:"",contentClass:"p-4 "},{default:a(()=>[e(p,{type:"flex",style:{"flex-wrap":"nowrap"}},{default:a(()=>[e(r,{flex:"150px"},{default:a(()=>[_("\u7F51\u7AD9ICON\u8BBE\u7F6E\uFF1A")]),_:1}),e(r,{flex:"auto",class:"icon-box"},{default:a(()=>[o.imageUrl?(s(),l("img",{key:0,src:o.imageUrl,alt:"avatar"},null,8,q)):O("",!0),e(n,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":o.beforeUpload,multiple:!1},{default:a(()=>[o.imageUrl?(s(),l("img",{key:0,src:o.imageUrl,alt:"avatar"},null,8,H)):(s(),l("div",K,[e(u),Q]))]),_:1},8,["before-upload"])]),_:1})]),_:1}),e(p,{type:"flex",style:{"flex-wrap":"nowrap"}},{default:a(()=>[e(r,{flex:"150px"},{default:a(()=>[_("\u7CFB\u7EDFLOGO\u8BBE\u7F6E\uFF1A")]),_:1}),e(r,{flex:"auto",class:"icon-box"},{default:a(()=>[e(n,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":o.beforeUpload,multiple:!1},{default:a(()=>[o.imageUrl?(s(),l("img",{key:0,src:o.imageUrl,alt:"avatar"},null,8,X)):(s(),l("div",Y,[e(u),Z]))]),_:1},8,["before-upload"])]),_:1})]),_:1}),e(p,{type:"flex",style:{"flex-wrap":"nowrap"}},{default:a(()=>[e(r,{flex:"150px"},{default:a(()=>[_("\u767B\u5F55\u9875\u80CC\u666F\u8BBE\u7F6E\uFF1A")]),_:1}),e(r,{flex:"auto",class:"icon-box"},{default:a(()=>[e(n,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":o.beforeUpload,multiple:!1},{default:a(()=>[o.imageUrl?(s(),l("img",{key:0,src:o.imageUrl,alt:"avatar"},null,8,ee)):(s(),l("div",te,[e(u),oe]))]),_:1},8,["before-upload"])]),_:1})]),_:1}),ae,re,se,_(" \u7CFB\u7EDF\u540D\u79F0 ")]),_:1})}var it=U(G,[["render",le]]);export{it as default};