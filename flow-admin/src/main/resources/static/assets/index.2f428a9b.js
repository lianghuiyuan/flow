import{_ as e}from"./TableImg.3a357da5.js";import{f as t}from"./BasicForm.9dacb4c6.js";import{u as i}from"./useTable.4c66a5b7.js";import{g as a,d as o}from"./dept.274e33af.js";import{P as n}from"./index.2b3a6879.js";import r from"./DictTypeTree.0a1f1153.js";import s from"./DictionaryTable.af3665d7.js";import d from"./DictionaryItemTable.1224c6d9.js";import{h as c}from"./index.643db95a.js";import{b as l}from"./index.2d1288e4.js";import{k as m,l as p}from"./dictionary.681aae34.js";import{j as f,r as b,K as j,o as u,m as x,Q as y,n as T}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.04030879.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.b1caa3b4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              */import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";import"./useContentViewHeight.dc5cb96c.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.550db6bb.js";import"./useContextMenu.9c927229.js";import"./dicType.6f685c58.js";import"./DictionaryModal.154eabee.js";import"./DictionaryItemModal.debfca70.js";const{createMessage:h}=c();var D=f({name:"Dictionary",components:{BasicTable:e,PageWrapper:n,DictTypeTree:r,DictionaryTable:s,DictionaryItemTable:d,TableAction:t},setup(){const[e,{openModal:t}]=l(),n=b(),r=b(),[s,{reload:d}]=i({title:"列表",api:a,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictionaryRef:n,dictionaryItemRef:r,registerTable:s,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDictSelect:function(e){e&&r.value.filterByDict(e)},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):o([e.id]).then((()=>{d()}))},handleSuccess:function(){d()},handleDictTypeSelect:function(e=""){e?(n.value.filterByDictType(e),r.value.cleanTableData()):n.value.cleanTableData()}}}});D.render=function(e,t,i,a,o,n){const r=j("DictTypeTree"),s=j("DictionaryTable"),d=j("DictionaryItemTable"),c=j("PageWrapper");return u(),x(c,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:y((()=>[T(r,{class:"w-1/5 xl:w-1/5",onSelect:e.handleDictTypeSelect},null,8,["onSelect"]),T(s,{ref:"dictionaryRef",onHandleSelect:e.handleDictSelect,class:"w-2/5 xl:w-2/5"},null,8,["onHandleSelect"]),T(d,{ref:"dictionaryItemRef",class:"w-2/5 xl:w-2/5"},null,512)])),_:1})};export default D;