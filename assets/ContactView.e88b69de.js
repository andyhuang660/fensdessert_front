import{_ as f,r as _,N as v,Q as x,R as y,U as o,W as l,at as g,a7 as w,ar as h,as as p,am as U}from"./index.ecbdd361.js";import{_ as V,a as b}from"./Form.4032c107.js";import{_ as C}from"./Space.c8d1c1cd.js";const k={class:"container"},N=w(" \u9001\u51FA "),R={__name:"ContactView",setup(S){const r=_(!1),c=_(null),e=v({name:"",phone:"",email:"",text:""}),u=async()=>{r.value=!0,console.log(e.name);try{await h.post("/contacts",e),p.fire({icon:"success",title:"\u6210\u529F",text:"\u9001\u51FA\u6210\u529F"})}catch(a){p.fire({icon:"error",title:"\u5931\u6557",text:a.isAxiosError&&a.response.data?a.response.data.message:"\u767C\u751F\u932F\u8AA4"})}e.name="",e.phone="",e.email="",e.text="",r.value=!1};return(a,t)=>{const s=b,i=C,m=U,d=V;return x(),y("div",k,[o(d,{class:"contactForm",onSubmit:g(u,["prevent"]),ref_key:"formRef",ref:c},{default:l(()=>[o(i,{vertical:""},{default:l(()=>[o(s,{value:e.name,"onUpdate:value":t[0]||(t[0]=n=>e.name=n),type:"text",placeholder:"\u59D3\u540D"},null,8,["value"]),o(s,{value:e.phone,"onUpdate:value":t[1]||(t[1]=n=>e.phone=n),type:"text",placeholder:"\u96FB\u8A71"},null,8,["value"]),o(s,{value:e.email,"onUpdate:value":t[2]||(t[2]=n=>e.email=n),type:"text",placeholder:"\u4FE1\u7BB1"},null,8,["value"]),o(s,{value:e.text,"onUpdate:value":t[3]||(t[3]=n=>e.text=n),type:"textarea",placeholder:"\u60F3\u554F\u82AC\u4EC0\u9EBC\u554F\u984C"},null,8,["value"])]),_:1}),o(m,{strong:"",secondary:"",round:"","attr-type":"submit",type:"warning"},{default:l(()=>[N]),_:1})]),_:1},8,["onSubmit"])])}}},F=f(R,[["__scopeId","data-v-ec75e6d1"]]);export{F as default};
