import{B as j}from"./TableImg.56f74f95.js";import{T as h}from"./BasicForm.bfb70ce4.js";import{u as C}from"./useTable.df715f1a.js";import{g as B,d as g}from"./dicType.e10e2beb.js";import{G as x,c as T,s as F}from"./DicTypeModal.9c7a7abd.js";import{_,h as D}from"./index.aeb7d9f7.js";import{b as E}from"./index.309f7e13.js";import{A as w,a0 as u,B as M,D as S,w as r,a6 as m,ae as k}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.9d0149a6.js";import"./index.37a89528.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.6345b5e8.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";/* empty css               */import"./useSortable.514a2720.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.661e65ad.js";/* empty css                *//* empty css                *//* empty css                */import"./download.6c7231a4.js";import"./base64Conver.bb012c73.js";import"./index.77bdba74.js";import"./constantEnum.82824ec7.js";const{createMessage:y}=D(),A=w({name:"GetDic",components:{BasicTable:j,TableAction:h,GetDicModal:x},setup(){const[t,{openModal:n,setModalProps:i}]=E(),[f,{reload:s}]=C({title:"\u5217\u8868",api:B,columns:T,formConfig:{labelWidth:120,schemas:F,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,pagination:!1,expandRowByClick:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function b(){i({title:"\u65B0\u589E\u5B57\u5178\u5206\u7C7B"}),n(!0,{isUpdate:!1})}function d(e,a){a.stopPropagation(),i({title:"\u4FEE\u6539\u5B57\u5178\u5206\u7C7B"}),n(!0,{record:e,isUpdate:!0})}function l(e,a){a.stopPropagation(),i({title:"\u65B0\u589E\u3010"+e.name+"\u3011\u7684\u5B50\u5206\u7C7B"}),e={pid:e.id},n(!0,{record:e,isUpdate:!0})}function c(e){if(e.children&&e.children.length>0){y.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}g([e.id]).then(a=>{s()})}function p(){s()}function o(){s()}return{registerTable:f,registerModal:t,handleCreate:b,handleEdit:d,handleCreateChild:l,handleDelete:c,handleSuccess:o,doSearch:p}}}),R=k(" \u65B0\u589E ");function v(t,n,i,f,s,b){const d=u("a-button"),l=u("TableAction"),c=u("BasicTable"),p=u("GetDicModal");return M(),S("div",null,[r(c,{onRegister:t.registerTable},{toolbar:m(()=>[r(d,{type:"primary",onClick:t.handleCreate},{default:m(()=>[R]),_:1},8,["onClick"])]),action:m(({record:o})=>[r(l,{actions:[{tooltip:"\u6DFB\u52A0\u5B50\u5206\u7C7B",icon:"ant-design:plus-outlined",onClick:t.handleCreateChild.bind(null,o)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,o)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),r(p,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])])}var be=_(A,[["render",v]]);export{be as default};