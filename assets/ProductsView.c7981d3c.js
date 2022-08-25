import{c as ve,aU as we,m as ee,n as i,bx as te,q as Y,s as w,aa as ne,e as xe,f as ye,A as le,a$ as ke,r as M,w as Se,v as Ce,j as U,af as C,aC as q,az as x,B as Be,bR as Q,h,ah as B,by as Ve,aO as Re,ak as Z,_ as $e,N as oe,Q as D,R as H,S as d,U as l,W as p,a0 as G,as as T,am as ze,at as Fe,$ as ae,a3 as We,X as ie,a4 as J,Z as Ue,a7 as P,a5 as Me,a6 as Pe}from"./index.903683bf.js";import{_ as Le,a as Ne,b as De}from"./InputNumber.5dc74382.js";import{_ as He}from"./Modal.d7423b7b.js";import{_ as Te}from"./Space.81fc3f83.js";import{_ as Ae}from"./Upload.c8924b43.js";import{_ as je}from"./FormItem.d4c7189c.js";import{_ as Ie}from"./Input.91644a02.js";import{_ as Ke}from"./Form.7fb16de5.js";import{_ as Oe}from"./Divider.355ca78f.js";import{_ as Ee}from"./Table.fc21822f.js";import"./utils.21d41833.js";import"./Card.a5488642.js";const Xe={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},Ye=t=>{const{primaryColor:r,opacityDisabled:g,borderRadius:c,textColor3:u}=t,b="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Xe),{iconColor:u,textColor:"white",loadingColor:r,opacityDisabled:g,railColor:b,railColorActive:r,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:c,railBorderRadiusMedium:c,railBorderRadiusLarge:c,buttonBorderRadiusSmall:c,buttonBorderRadiusMedium:c,buttonBorderRadiusLarge:c,boxShadowFocus:`0 0 0 2px ${we(r,{alpha:.2})}`})},qe={name:"Switch",common:ve,self:Ye},Qe=qe,Ze=ee("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[i("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),i("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),i("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),ee("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[te({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),i("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),i("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),i("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),Y("&:focus",[i("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),w("round",[i("rail","border-radius: calc(var(--n-rail-height) / 2);",[i("button","border-radius: calc(var(--n-button-height) / 2);")])]),ne("disabled",[ne("icon",[w("rubber-band",[w("pressed",[i("rail",[i("button","max-width: var(--n-button-width-pressed);")])]),i("rail",[Y("&:active",[i("button","max-width: var(--n-button-width-pressed);")])]),w("active",[w("pressed",[i("rail",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),i("rail",[Y("&:active",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),w("active",[i("rail",[i("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),i("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[i("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[te()]),i("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),w("active",[i("rail","background-color: var(--n-rail-color-active);")]),w("loading",[i("rail",`
 cursor: wait;
 `)]),w("disabled",[i("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ge=Object.assign(Object.assign({},le.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]}),Je=xe({name:"Switch",props:Ge,setup(t){const{mergedClsPrefixRef:r,inlineThemeDisabled:g}=ye(t),c=le("Switch","-switch",Ze,Qe,t,r),u=ke(t),{mergedSizeRef:b,mergedDisabledRef:_}=u,n=M(t.defaultValue),k=Se(t,"value"),v=Ce(k,n),V=U(()=>v.value===t.checkedValue),s=M(!1),e=M(!1),f=U(()=>{const{railStyle:a}=t;if(!!a)return a({focused:e.value,checked:V.value})});function m(a){const{"onUpdate:value":R,onChange:o,onUpdateValue:$}=t,{nTriggerFormInput:N,nTriggerFormChange:E}=u;R&&Z(R,a),$&&Z($,a),o&&Z(o,a),n.value=a,N(),E()}function S(){const{nTriggerFormFocus:a}=u;a()}function L(){const{nTriggerFormBlur:a}=u;a()}function A(){t.loading||_.value||(v.value!==t.checkedValue?m(t.checkedValue):m(t.uncheckedValue))}function j(){e.value=!0,S()}function I(){e.value=!1,L(),s.value=!1}function K(a){t.loading||_.value||a.key===" "&&(v.value!==t.checkedValue?m(t.checkedValue):m(t.uncheckedValue),s.value=!1)}function O(a){t.loading||_.value||a.key===" "&&(a.preventDefault(),s.value=!0)}const z=U(()=>{const{value:a}=b,{self:{opacityDisabled:R,railColor:o,railColorActive:$,buttonBoxShadow:N,buttonColor:E,boxShadowFocus:se,loadingColor:re,textColor:de,iconColor:ce,[C("buttonHeight",a)]:F,[C("buttonWidth",a)]:ue,[C("buttonWidthPressed",a)]:he,[C("railHeight",a)]:W,[C("railWidth",a)]:X,[C("railBorderRadius",a)]:pe,[C("buttonBorderRadius",a)]:fe},common:{cubicBezierEaseInOut:ge}}=c.value,me=q((x(W)-x(F))/2),be=q(Math.max(x(W),x(F))),_e=x(W)>x(F)?X:q(x(X)+x(F)-x(W));return{"--n-bezier":ge,"--n-button-border-radius":fe,"--n-button-box-shadow":N,"--n-button-color":E,"--n-button-width":ue,"--n-button-width-pressed":he,"--n-button-height":F,"--n-height":be,"--n-offset":me,"--n-opacity-disabled":R,"--n-rail-border-radius":pe,"--n-rail-color":o,"--n-rail-color-active":$,"--n-rail-height":W,"--n-rail-width":X,"--n-width":_e,"--n-box-shadow-focus":se,"--n-loading-color":re,"--n-text-color":de,"--n-icon-color":ce}}),y=g?Be("switch",U(()=>b.value[0]),z,t):void 0;return{handleClick:A,handleBlur:I,handleFocus:j,handleKeyup:K,handleKeydown:O,mergedRailStyle:f,pressed:s,mergedClsPrefix:r,mergedValue:v,checked:V,mergedDisabled:_,cssVars:g?void 0:z,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:r,checked:g,mergedRailStyle:c,onRender:u,$slots:b}=this;u==null||u();const{checked:_,unchecked:n,icon:k,"checked-icon":v,"unchecked-icon":V}=b,s=!(Q(k)&&Q(v)&&Q(V));return h("div",{role:"switch","aria-checked":g,class:[`${t}-switch`,this.themeClass,s&&`${t}-switch--icon`,g&&`${t}-switch--active`,r&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},h("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:c},B(_,e=>B(n,f=>e||f?h("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},h("div",{class:`${t}-switch__rail-placeholder`},h("div",{class:`${t}-switch__button-placeholder`}),e),h("div",{class:`${t}-switch__rail-placeholder`},h("div",{class:`${t}-switch__button-placeholder`}),f)):null)),h("div",{class:`${t}-switch__button`},B(k,e=>B(v,f=>B(V,m=>h(Ve,null,{default:()=>this.loading?h(Re,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(f||e)?h("div",{class:`${t}-switch__button-icon`,key:f?"checked-icon":"icon"},f||e):!this.checked&&(m||e)?h("div",{class:`${t}-switch__button-icon`,key:m?"unchecked-icon":"icon"},m||e):null})))),B(_,e=>e&&h("div",{key:"checked",class:`${t}-switch__checked`},e)),B(n,e=>e&&h("div",{key:"unchecked",class:`${t}-switch__unchecked`},e)))))}});const et=t=>(Me("data-v-4cb472ea"),t=t(),Pe(),t),tt={class:"wrap"},nt={class:"container"},ot=P(" \u65B0\u589E\u5546\u54C1 "),at=P(" \u9EDE\u64CA\u4E0A\u50B3 "),it=P("\u662F\u5426\u4E0A\u67B6 "),lt=P(" \u78BA\u8A8D "),st=et(()=>d("thead",null,[d("tr",null,[d("th",null,"\u5716\u7247"),d("th",null,"\u540D\u7A31"),d("th",null,"\u50F9\u683C"),d("th",null,"\u63CF\u8FF0"),d("th",null,"\u7DE8\u8F2F")])],-1)),rt=["src"],dt=P("\u7DE8\u8F2F"),ct={__name:"ProductsView",setup(t){const r=oe([]),g=M(!1),c=M(1),u=5,b=U(()=>r.slice(c.value*u-u,c.value*u)),_=[{label:"\u8089\u6842\u6372",value:"\u8089\u6842\u6372"},{label:"\u63D0\u62C9\u7C73\u8607",value:"\u63D0\u62C9\u7C73\u8607"},{label:"\u5B63\u7BC0\u9650\u5B9A",value:"\u5B63\u7BC0\u9650\u5B9A"}],n=oe({_id:"",name:"",price:0,category:"",sell:!1,image:[],description:"",idx:-1,dialog:!1,valid:!1,submitting:!1}),k=(s,e)=>{g.value=!0,n._id=s,e>-1?(n.name=r[e].name,n.price=r[e].price,n.description=r[e].description,n.sell=r[e].sell,n.category=r[e].category):(n.name="",n.price=0,n.description="",n.sell=!1,n.category=""),n.image=[],n.idx=e,n.dialog=!0,n.valid=!1,n.submitting=!1},v=async()=>{n.submitting=!0;const s=new FormData;for(const e in n)["_id","idx","dialog","valid","submitting"].includes(e)||(e==="image"?n.image.length>0&&s.append(e,n[e][0].file):s.append(e,n[e]));try{if(n._id.length===0){const{data:e}=await G.post("/products",s);r.push(e.result),T.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:e}=await G.patch("/products/"+n._id,s);r[n.idx]=e.result,T.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}n.dialog=!1}catch(e){T.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}n.submitting=!1};return(async()=>{try{const{data:s}=await G.get("/products/all");r.push(...s.result)}catch(s){console.log(s),T.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}})(),(s,e)=>{const f=ze,m=Ae,S=je,L=Ie,A=Ne,j=Je,I=De,K=Ke,O=He,z=Oe,y=Ee,a=Te,R=Le;return D(),H("div",tt,[d("div",nt,[l(f,{color:"#ffcb98",onClick:e[0]||(e[0]=o=>k("",-1))},{default:p(()=>[ot]),_:1}),l(O,{show:g.value,"onUpdate:show":e[9]||(e[9]=o=>g.value=o),preset:"dialog",title:"\u65B0\u589E\u5546\u54C1"},{default:p(()=>[l(K,{modelValue:n.valid,"onUpdate:modelValue":e[8]||(e[8]=o=>n.valid=o),onSubmit:Fe(v,["prevent"])},{default:p(()=>[l(S,{label:"\u5716\u7247"},{default:p(()=>[l(m,{"file-list":n.image,"onUpdate:file-list":e[1]||(e[1]=o=>n.image=o),"list-type":"image-card"},{default:p(()=>[l(f,null,{default:p(()=>[at]),_:1})]),_:1},8,["file-list"])]),_:1}),l(S,{label:"name"},{default:p(()=>[l(L,{value:n.name,"onUpdate:value":e[2]||(e[2]=o=>n.name=o)},null,8,["value"])]),_:1}),l(S,{label:"price"},{default:p(()=>[l(A,{value:n.price,"onUpdate:value":e[3]||(e[3]=o=>n.price=o)},null,8,["value"])]),_:1}),l(S,{label:"description"},{default:p(()=>[l(L,{value:n.description,"onUpdate:value":e[4]||(e[4]=o=>n.description=o),type:"textarea"},null,8,["value"])]),_:1}),l(S,{label:"sell"},{default:p(()=>[l(j,{value:n.sell,"onUpdate:value":e[5]||(e[5]=o=>n.sell=o)},null,8,["value"]),it]),_:1}),l(I,{value:n.category,"onUpdate:value":e[6]||(e[6]=o=>n.category=o),options:_},null,8,["value"]),l(f,{color:"#ffcb98","attr-type":"submit",onClick:e[7]||(e[7]=o=>g.value=!1)},{default:p(()=>[lt]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1},8,["show"]),l(z),d("div",null,[l(a,{vertical:""},{default:p(()=>[l(y,{striped:""},{default:p(()=>[st,d("tbody",null,[(D(!0),H(ae,null,We(ie(b),(o,$)=>(D(),H(ae,null,[ie(b).length>0?(D(),H("tr",{key:o._id},[d("td",null,[d("img",{style:{height:"150px"},src:o.image},null,8,rt)]),d("td",null,J(o.name),1),d("td",null,J(o.price),1),d("td",null,J(o.description),1),d("td",null,[l(f,{color:"#ffcb98",onClick:N=>k(o._id,$)},{default:p(()=>[dt]),_:2},1032,["onClick"])])])):Ue("",!0)],64))),256))])]),_:1})]),_:1})]),l(z),l(R,{page:c.value,"onUpdate:page":e[10]||(e[10]=o=>c.value=o),"page-count":Math.ceil(r.length/u),style:{float:"right"},"default-page-size":6},null,8,["page","page-count"])])])}}},kt=$e(ct,[["__scopeId","data-v-4cb472ea"]]);export{kt as default};
