import{j as e,bB as r,K as o,o as i,m as s,Q as a,n,Y as t}from"./vendor.686fd1d4.js";/* empty css              */import{u as p}from"./index.8d19647b.js";import d from"./Drawer1.21c4db63.js";import m from"./Drawer2.2fe5411c.js";import f from"./Drawer3.7b05e2da.js";import c from"./Drawer4.55ba420b.js";import w from"./Drawer5.7aad71ef.js";import{P as j}from"./index.c524f834.js";import"./index.f9173908.js";/* empty css              */import"./BasicForm.aa38e971.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.d392ace2.js";/* empty css              *//* empty css              */import"./index.7e2439d5.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.ac69f24d.js";import"./base64Conver.bb012c73.js";import"./index.ca1d35f5.js";import"./useForm.8a322010.js";import"./useContentViewHeight.1a732a79.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var D=e({components:{Alert:r,PageWrapper:j,Drawer1:d,Drawer2:m,Drawer3:f,Drawer4:c,Drawer5:w},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[i,{openDrawer:s}]=p(),[a,{openDrawer:n}]=p(),[t,{openDrawer:d}]=p(),[m,{openDrawer:f}]=p();return{register1:e,openDrawer1:r,register2:i,openDrawer2:s,register3:a,openDrawer3:n,register4:t,register5:m,openDrawer5:f,send:function(){d(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const l=t(" 打开Drawer "),g=t(" 打开Drawer "),u=t(" 打开Drawer "),x=t(" 打开Drawer并传递数据 "),b=t(" 打开详情Drawer ");D.render=function(e,r,t,p,d,m){const f=o("Alert"),c=o("a-button"),w=o("Drawer1"),j=o("Drawer2"),D=o("Drawer3"),y=o("Drawer4"),R=o("Drawer5"),C=o("PageWrapper");return i(),s(C,{title:"抽屉组件使用示例"},{default:a((()=>[n(f,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),n(c,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:a((()=>[l])),_:1},8,["onClick"]),n(f,{message:"内外同时控制显示隐藏","show-icon":""}),n(c,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:a((()=>[g])),_:1}),n(f,{message:"自适应高度/显示footer","show-icon":""}),n(c,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:a((()=>[u])),_:1}),n(f,{message:"内外数据交互","show-icon":""}),n(c,{type:"primary",class:"my-4",onClick:e.send},{default:a((()=>[x])),_:1},8,["onClick"]),n(f,{message:"详情页模式","show-icon":""}),n(c,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:a((()=>[b])),_:1}),n(w,{onRegister:e.register1},null,8,["onRegister"]),n(j,{onRegister:e.register2},null,8,["onRegister"]),n(D,{onRegister:e.register3},null,8,["onRegister"]),n(y,{onRegister:e.register4},null,8,["onRegister"]),n(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default D;