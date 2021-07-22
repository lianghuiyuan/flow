import{_ as e}from"./TableImg.796610fd.js";import{f as t}from"./BasicForm.adb2a199.js";import{u as o}from"./useTable.82511bdc.js";import{g as i}from"./system.e7733661.js";import{P as n}from"./index.c1dc3b6b.js";import s from"./DeptTree.cbc93b8c.js";import{b as a}from"./index.13a30da8.js";import{_ as r,c as d,s as c}from"./AccountModal.1a7a2601.js";import{j as l,K as m,o as p,m as f,Q as u,n as b,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.40c52001.js";import"./index.04486bdf.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.979115a3.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a84c0e16.js";/* empty css              *//* empty css              *//* empty css              */import"./download.45a835c8.js";import"./base64Conver.bb012c73.js";import"./index.9702aa73.js";import"./useContentViewHeight.c5b829cb.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.93f19dfa.js";import"./useContextMenu.1f0fede2.js";var x=l({name:"AccountManagement",components:{BasicTable:e,PageWrapper:n,DeptTree:s,AccountModal:r,TableAction:t},setup(){const[e,{openModal:t}]=a(),[n,{reload:s,updateTableDataRecord:r}]=o({title:"账号列表",api:i,rowKey:"id",columns:d,formConfig:{labelWidth:120,schemas:c},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:n,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function({isUpdate:e,values:t}){if(e){r(t.id,t)}else s()},handleSelect:function(e=""){s({searchInfo:{deptId:e}})}}}});const g=j("新增账号");x.render=function(e,t,o,i,n,s){const a=m("DeptTree"),r=m("a-button"),d=m("TableAction"),c=m("BasicTable"),l=m("AccountModal"),j=m("PageWrapper");return p(),f(j,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:u((()=>[b(a,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),b(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:u((()=>[b(r,{type:"primary",onClick:e.handleCreate},{default:u((()=>[g])),_:1},8,["onClick"])])),action:u((({record:t})=>[b(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;