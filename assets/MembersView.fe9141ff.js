import{_ as v,N as w,Q as c,R as r,S as t,U as n,W as i,a0 as d,aA as l,$ as y,a3 as S,a4 as u,a5 as V,a6 as k,a7 as A,am as E}from"./index.9a92b458.js";import{_ as I}from"./Space.a4ba9484.js";import{_ as N}from"./Divider.44c7c2f8.js";import{_ as B}from"./Table.442081fc.js";const m=o=>(V("data-v-aa9be039"),o=o(),k(),o),C={class:"wrap"},M={class:"container"},$=m(()=>t("h1",null,"\u6703\u54E1\u8CC7\u6599\u7BA1\u7406",-1)),D=m(()=>t("thead",null,[t("tr",null,[t("th",null,"\u5E33\u865F"),t("th",null,"Email"),t("th",null,"\u522A\u9664\u6703\u54E1")])],-1)),F={style:{"white-space":"pre"}},L=A("\u522A\u9664"),Q={__name:"MembersView",setup(o){const _=w([]),h=async(e,p)=>{try{await d.delete("/users/"+e),l.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),_.splice(p,1)}catch(s){l.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}};return(async()=>{try{const{data:e}=await d.get("/users/all");_.push(...e.result),console.log(e)}catch(e){console.log(e),l.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}})(),(e,p)=>{const s=N,f=E,g=B,x=I;return c(),r("div",C,[t("div",M,[$,n(s),n(x,{vertical:""},{default:i(()=>[n(g,{striped:""},{default:i(()=>[D,t("tbody",null,[(c(!0),r(y,null,S(_,(a,b)=>(c(),r("tr",{key:a._id},[t("td",null,u(a.account),1),t("td",F,u(a.email),1),n(f,{color:"#ffcb98",onClick:T=>h(a._id,b)},{default:i(()=>[L]),_:2},1032,["onClick"])]))),128))])]),_:1})]),_:1})])])}}},z=v(Q,[["__scopeId","data-v-aa9be039"]]);export{z as default};
