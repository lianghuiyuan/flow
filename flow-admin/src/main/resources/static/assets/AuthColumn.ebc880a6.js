import{_ as e}from"./TableImg.c292f6c6.js";import{g as t}from"./BasicForm.8dd34761.js";import{u as i}from"./useTable.28113166.js";import{d as n}from"./table.69ec72a6.js";import{y as o,Z as a,B as d,F as s,v as r,a2 as l}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.ba0f60da.js";import"./index.63ccfb82.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.0433a71f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.7fdc4a8b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b3d678de.js";/* empty css              *//* empty css              *//* empty css              */import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";import"./index.c6f733ce.js";const c=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",auth:"test"},{title:"状态",dataIndex:"status"},{title:"地址",dataIndex:"address",auth:"super",ifShow:e=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=o({components:{BasicTable:e,TableAction:t},setup(){const[e]=i({title:"TableAction组件及固定列示例",api:n,columns:c,bordered:!0,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleEdit:function(e){},handleDelete:function(e){},handleOpen:function(e){}}}});const p={class:"p-4"};m.render=function(e,t,i,n,o,c){const m=a("TableAction"),f=a("BasicTable");return d(),s("div",p,[r(f,{onRegister:e.registerTable},{action:l((({record:t})=>[r(m,{actions:[{label:"编辑",onClick:e.handleEdit.bind(null,t),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,t),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,t)},ifShow:e=>"enable"!==t.status},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:e.handleOpen.bind(null,t)},ifShow:()=>"enable"===t.status},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:e.handleOpen.bind(null,t)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;