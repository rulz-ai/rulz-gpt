import{g as c,a as n,i as l,c as S,F as v,b as E,d as y,t as d}from"./entry-client-e2f3eefd.js";import{u as I}from"./index-0b421805.js";const F=d('<div class="flex flex-col w-full max-w-md py-24 mx-auto stretch"><!#><!/><form><input class="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl" placeholder="Say something...">'),L=d('<div class="whitespace-pre-wrap"><!#><!/><!#><!/>');function A(){const{messages:u,input:m,setInput:p,handleSubmit:h}=I(),f=e=>{p(e.target.value)};return(()=>{const e=c(F),g=e.firstChild,[a,x]=n(g.nextSibling),r=a.nextSibling,s=r.firstChild;return l(e,S(v,{get each(){return u()},children:i=>(()=>{const t=c(L),_=t.firstChild,[o,$]=n(_.nextSibling),b=o.nextSibling,[w,C]=n(b.nextSibling);return l(t,()=>i.role==="user"?"User: ":"AI: ",o,$),l(t,()=>i.content,w,C),t})()}),a,x),E(r,"submit",h),s.addEventListener("change",f),y(()=>s.value=m()),e})()}export{A as default};