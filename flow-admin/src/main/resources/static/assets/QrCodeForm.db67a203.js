import{u as m,L as d,_ as u}from"./LoginFormTitle.16bb4761.js";import{a as p,e as _,h as f,j as e,o as g,i as x,p as t,n as C,B as a,C as n,t as o,D as h,F as k,l as S}from"./index.7ea10544.js";import{D as y}from"./index.5d6fdc93.js";import{Q as B}from"./index.d60546fb.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";const v={class:"enter-x min-w-64 min-h-64"},F=p({__name:"QrCodeForm",setup(D){const r="https://vvbin.cn/next/login",{t:s}=_(),{handleBackLogin:i,getLoginState:c}=m(),l=f(()=>e(c)===d.QR_CODE);return(L,w)=>e(l)?(g(),x(k,{key:0},[t(u,{class:"enter-x"}),C("div",v,[t(e(B),{value:r,class:"enter-x flex justify-center xl:justify-start",width:280}),t(e(y),{class:"enter-x"},{default:a(()=>[n(o(e(s)("sys.login.scanSign")),1)]),_:1}),t(e(h),{size:"large",block:"",class:"mt-4 enter-x",onClick:e(i)},{default:a(()=>[n(o(e(s)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])])],64)):S("",!0)}});export{F as default};