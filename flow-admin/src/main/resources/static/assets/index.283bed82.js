import{_ as e}from"./TableImg.53dad38d.js";import{f as i}from"./BasicForm.2372b7e8.js";import{u as o}from"./useTable.8df61517.js";import{g as t,d as n}from"./dicType.66c7dc3d.js";import{_ as d,c as a,s}from"./DicTypeModal.0ec00fb9.js";import{h as r}from"./index.ba319b32.js";import{b as c}from"./index.131f7f29.js";import{j as l,K as m,o as p,m as f,n as u,Q as b,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.61e11b2d.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.5cefd2fe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c3ebc3c0.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6c35d74f.js";import"./base64Conver.bb012c73.js";import"./index.ed23997c.js";const{createMessage:h}=r();var x=l({name:"GetDic",components:{BasicTable:e,TableAction:i,GetDicModal:d},setup(){const[e,{openModal:i,setModalProps:d}]=c(),[r,{reload:l}]=o({title:"列表",api:t,columns:a,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,pagination:!1,expandRowByClick:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:r,registerModal:e,handleCreate:function(){d({title:"新增字典分类"}),i(!0,{isUpdate:!1})},handleEdit:function(e,o){o.stopPropagation(),d({title:"修改字典分类"}),i(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,o){o.stopPropagation(),d({title:"新增【"+e.name+"】的子分类"}),e={pid:e.id},i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},doSearch:function(){l()}}}});const g=j(" 新增 ");x.render=function(e,i,o,t,n,d){const a=m("a-button"),s=m("TableAction"),r=m("BasicTable"),c=m("GetDicModal");return p(),f("div",null,[u(r,{onRegister:e.registerTable},{toolbar:b((()=>[u(a,{type:"primary",onClick:e.handleCreate},{default:b((()=>[g])),_:1},8,["onClick"])])),action:b((({record:i})=>[u(s,{actions:[{title:"添加子分类",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,i)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;