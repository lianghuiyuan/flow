import{_ as e}from"./TableImg.ed458e7b.js";import{f as i}from"./BasicForm.60d248ec.js";import{u as o}from"./useTable.4d31d66c.js";import{d as n}from"./system.1f000189.js";import{u as t}from"./index.df7f350e.js";import{_ as r,c as s,s as a}from"./MenuDrawer.bc967124.js";import{j as d,K as c,o as m,m as l,n as p,Q as f,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.cb0c17a2.js";import"./index.91fd9f50.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.ae3ca81c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a91eed20.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.262ea813.js";/* empty css              *//* empty css              *//* empty css              */import"./download.7e240992.js";import"./base64Conver.bb012c73.js";import"./index.11164cc8.js";/* empty css              */var j=d({name:"MenuManagement",components:{BasicTable:e,MenuDrawer:r,TableAction:i},setup(){const[e,{openDrawer:i}]=t(),[r,{reload:d}]=o({title:"菜单列表",api:n,columns:s,formConfig:{labelWidth:120,schemas:a},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:r,registerDrawer:e,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:function(e){i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const b=u(" 新增菜单 ");j.render=function(e,i,o,n,t,r){const s=c("a-button"),a=c("TableAction"),d=c("BasicTable"),u=c("MenuDrawer");return m(),l("div",null,[p(d,{onRegister:e.registerTable},{toolbar:f((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:f((()=>[b])),_:1},8,["onClick"])])),action:f((({record:i})=>[p(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(u,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;