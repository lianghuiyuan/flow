import{_ as e}from"./TableImg.5bb7b2c3.js";import{g as t}from"./BasicForm.3145f6c6.js";import{u as i}from"./useTable.4693838b.js";import{a as o,i as n,b as a,e as r}from"./dictionary.0e47b676.js";import{P as s}from"./index.22ff4fb2.js";import{h as d}from"./index.8bbed969.js";import{b as c}from"./index.dcc0b3b8.js";import l from"./DictionaryItemModal.de362ccd.js";import{y as m,r as p,Z as b,B as f,F as u,v as j,a2 as x,a8 as h,a9 as g}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.f6c4fcf0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.9bed7e43.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a0306c89.js";/* empty css              *//* empty css              *//* empty css              */import"./download.92b34d7b.js";import"./base64Conver.bb012c73.js";import"./index.adea3535.js";/* empty css              *//* empty css              */import"./useContentViewHeight.c0fc876b.js";const{createMessage:v}=d();var y=m({name:"DictionaryItemTable",components:{BasicTable:e,DictionaryItemModal:l,PageWrapper:s,TableAction:t},setup(){const[e,{openModal:t,setModalProps:s}]=c(),d=p(""),[l,{reload:m,setProps:b,setTableData:f}]=i({title:"字典项列表",api:o,columns:n,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictId:d,registerTable:l,registerModal:e,cleanTableData:function(){f([]),d.value=""},handleCreate:function(){""!==d.value?(s({title:"新增字典项"}),t(!0,{record:{mainId:d.value},isUpdate:!1})):v.warning("请选择数据字典！",2)},handleEdit:function(e){s({title:"修改字典项"}),t(!0,{record:e,isUpdate:!0})},filterByDict:function(e){d.value=e,b({searchInfo:{mainId:d.value}}),m({page:1})},handleDelete:function(e){r(e.id).then((()=>{m()}))},handleSuccess:function(){m()}}}});const I={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},T=g("新增");y.render=function(e,t,i,o,n,a){const r=b("a-button"),s=b("TableAction"),d=b("BasicTable"),c=b("DictionaryItemModal");return f(),u("div",I,[j(d,{onRegister:e.registerTable},{toolbar:x((()=>[""!==e.dictId?(f(),u(r,{key:0,type:"primary",onClick:e.handleCreate},{default:x((()=>[T])),_:1},8,["onClick"])):h("",!0)])),action:x((({record:t})=>[j(s,{actions:[{tooltip:"修改字典项",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default y;