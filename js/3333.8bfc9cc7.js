(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[3333],{93899:(e,t,a)=>{"use strict";function o(e,t,a,o,i,r){return null}a.d(t,{A:()=>d});var i=a(45022),r=a(80660),l=a(14907);const n={setup(){const e=(0,l.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${i.A.getItem("token")}`,r.api.get(e,o).then((e=>{this.$emit(t,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${i.A.getItem("token")}`,r.api.post(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${i.A.getItem("token")}`,r.api.put(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,a={headers:{}}){a.headers.Authorization=`Bearer ${i.A.getItem("token")}`,r.api.delete(e,a).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${i.A.getItem("token")}`,r.api.post(e,t,o).then((e=>{(e.status=200)&&this.$emit(a,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var s=a(12807);const u=(0,s.A)(n,[["render",o]]),d=u},3333:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>U});var o=a(61758),i=a(58790),r=a(29104),l=a(16902),n=a.n(l);const s=(0,o.Lk)("img",{src:n()},null,-1),u={key:0},d={key:0},m={key:0,class:"q-pl-lg"},c={class:"tool"},g={key:0},h={class:"tool"},p={class:"float-left",style:{"margin-top":"10px","margin-bottom":"10px","margin-left":"15px"}},b=(0,o.Lk)("div",{class:"text-caption float-right items-center creditos"},[(0,o.Lk)("p",{style:{"font-size":"12px","margin-right":"20px","padding-top":"16px"}},[(0,o.Lk)("strong",null,"© 2022. LOS DERECHOS RESERVADOS. RCS EXPRESS")])],-1);function f(e,t,a,l,n,f){const v=(0,o.g2)("q-btn"),k=(0,o.g2)("q-toolbar-title"),A=(0,o.g2)("q-space"),_=(0,o.g2)("q-icon"),T=(0,o.g2)("q-avatar"),F=(0,o.g2)("q-item-section"),S=(0,o.g2)("q-item"),I=(0,o.g2)("q-list"),w=(0,o.g2)("q-menu"),L=(0,o.g2)("q-toolbar"),x=(0,o.g2)("q-header"),C=(0,o.g2)("q-item-label"),D=(0,o.g2)("q-tooltip"),E=(0,o.g2)("q-expansion-item"),y=(0,o.g2)("q-drawer"),$=(0,o.g2)("router-view"),q=(0,o.g2)("user-logout"),Q=(0,o.g2)("q-footer"),X=(0,o.g2)("q-page-container"),W=(0,o.g2)("q-layout"),z=(0,o.g2)("methods"),V=(0,o.gN)("ripple");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(W,{view:"hHh Lpr fFf"},{default:(0,o.k6)((()=>[(0,o.bF)(X,{style:{padding:"0px"}},{default:(0,o.k6)((()=>[(0,o.bF)(x,{elevated:""},{default:(0,o.k6)((()=>[(0,o.bF)(L,{class:"bg-indigo-9"},{default:(0,o.k6)((()=>[(0,o.bF)(v,{flat:"",dense:"",round:"",onClick:t[0]||(t[0]=e=>{this.hideItems(),this.drawerClick()}),icon:"menu","aria-label":"Menu",class:"q-mr-sm"}),(0,o.bF)(k,{class:"titleMainLayout"},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(n.title),1)])),_:1}),(0,o.bF)(k,{class:"titleMainLayoutMobile"},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(n.titleMobile),1)])),_:1}),(0,o.bF)(A),(0,o.bF)(v,{dense:"",color:"white",round:"",style:{"margin-right":"10px"},clickable:"",to:"/m_bancos",padding:"xs"},{default:(0,o.k6)((()=>[(0,o.bF)(_,{size:"20px",name:"question_mark",color:"primary"})])),_:1}),(0,o.bF)(v,{flat:"",dense:""},{default:(0,o.k6)((()=>[(0,o.bF)(T,{size:"42px"},{default:(0,o.k6)((()=>[s])),_:1}),(0,o.bF)(w,{"transition-show":"flip-right","transition-hide":"flip-left","auto-close":""},{default:(0,o.k6)((()=>[(0,o.bF)(I,{style:{"min-width":"100px"}},{default:(0,o.k6)((()=>[(0,o.bo)(((0,o.uX)(),(0,o.Wv)(S,{clickable:"",onClick:f.logout},{default:(0,o.k6)((()=>[(0,o.bF)(F,{avatar:""},{default:(0,o.k6)((()=>[(0,o.bF)(_,{name:"logout"})])),_:1}),(0,o.bF)(F,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.$t("Menu.logout")),1)])),_:1})])),_:1},8,["onClick"])),[[V]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.bF)(y,{modelValue:n.drawer,"onUpdate:modelValue":t[1]||(t[1]=e=>n.drawer=e),"show-if-above":"",breakpoint:500,bordered:"",width:350,"auto-close":"",mini:!n.drawer||n.miniState,onClick:t[2]||(t[2]=e=>n.miniState=!1),"content-class":"bg-grey-3"},{default:(0,o.k6)((()=>[(0,o.bF)(I,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",null,[(0,o.bF)(I,{class:"rounded-borders"},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.items,(e=>((0,o.uX)(),(0,o.CE)("div",null,[0==e.level?((0,o.uX)(),(0,o.CE)("div",u,[e.qitem?((0,o.uX)(),(0,o.Wv)(S,{key:0,style:{"margin-top":"5px"},clickable:"",to:e.url,disable:f.allowOption(e),exact:""},{default:(0,o.k6)((()=>[(0,o.bF)(F,{avatar:""},{default:(0,o.k6)((()=>[(0,o.bF)(_,{size:"28px",name:e.icon},null,8,["name"])])),_:2},1024),(0,o.bF)(F,null,{default:(0,o.k6)((()=>[(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.label),1)])),_:2},1024),(0,o.bF)(C,{caption:""})])),_:2},1024)])),_:2},1032,["to","disable"])):((0,o.uX)(),(0,o.Wv)(E,{key:1,"expand-separator":"",icon:e.icon,group:"somegroup","default-opened":"",label:e.label,modelValue:n.items_model[e.name],"onUpdate:modelValue":t=>n.items_model[e.name]=t},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.items,(t=>((0,o.uX)(),(0,o.CE)("div",null,[1==t.level&&e.name==t.padre?((0,o.uX)(),(0,o.CE)("div",d,[t.qitem?((0,o.uX)(),(0,o.CE)("div",m,[(0,o.bF)(S,{clickable:"",to:t.url,disable:f.allowOption(t),exact:""},{default:(0,o.k6)((()=>[(0,o.bF)(F,{avatar:""},{default:(0,o.k6)((()=>[(0,o.bF)(_,{size:"28px",name:t.icon},null,8,["name"]),n.miniState?((0,o.uX)(),(0,o.Wv)(D,{key:0,anchor:"center right",self:"center left",offset:[10,10],"transition-show":"scale","transition-hide":"scale"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",c,(0,i.v_)(t.label),1)])),_:2},1024)):(0,o.Q3)("",!0)])),_:2},1024),(0,o.bF)(F,null,{default:(0,o.k6)((()=>[(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(t.label),1)])),_:2},1024),(0,o.bF)(C,{caption:""})])),_:2},1024)])),_:2},1032,["to","disable"])])):((0,o.uX)(),(0,o.Wv)(E,{key:1,"header-inset-level":.4,"content-inset-level":.9,"expand-separator":"",group:"somegroup2","default-opened":"",icon:t.icon,label:t.label,modelValue:n.items_model[t.name],"onUpdate:modelValue":e=>n.items_model[t.name]=e},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.items,(e=>((0,o.uX)(),(0,o.CE)("div",null,[2==e.level&&t.name==e.padre?((0,o.uX)(),(0,o.CE)("div",g,[(0,o.bF)(S,{clickable:"",to:e.url,disable:f.allowOption(e),exact:""},{default:(0,o.k6)((()=>[(0,o.bF)(F,{avatar:""},{default:(0,o.k6)((()=>[(0,o.bF)(_,{size:"28px",name:e.icon},null,8,["name"]),n.miniState?((0,o.uX)(),(0,o.Wv)(D,{key:0,anchor:"center right",self:"center left",offset:[10,10],"transition-show":"scale","transition-hide":"scale"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",h,(0,i.v_)(e.label),1)])),_:2},1024)):(0,o.Q3)("",!0)])),_:2},1024),(0,o.bF)(F,null,{default:(0,o.k6)((()=>[(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.label),1)])),_:2},1024),(0,o.bF)(C,{caption:""})])),_:2},1024)])),_:2},1032,["to","disable"])])):(0,o.Q3)("",!0)])))),256))])),_:2},1032,["icon","label","modelValue","onUpdate:modelValue"]))])):(0,o.Q3)("",!0)])))),256))])),_:2},1032,["icon","label","modelValue","onUpdate:modelValue"]))])):(0,o.Q3)("",!0)])))),256))])),_:1})])])),_:1})])),_:1},8,["modelValue","mini"]),(0,o.bF)($,{onChangeTitle:f.changeTitle,onMouseover:t[3]||(t[3]=e=>{this.hideItems(),this.miniState=!0})},null,8,["onChangeTitle"]),(0,o.bF)(o.PR),(0,o.bF)(Q,{elevated:"",bordered:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.directs,((e,t)=>((0,o.uX)(),(0,o.CE)("div",p,[(0,o.bo)((0,o.bF)(v,{dense:"",color:"white",round:"",class:(0,i.C4)(`b${t+1}`),clickable:"",to:e.url,exact:"",padding:"xs",disable:f.allowOption(e)},{default:(0,o.k6)((()=>[(0,o.bF)(_,{size:"25px",name:e.icon,color:"primary"},{default:(0,o.k6)((()=>[(0,o.bF)(D,{"transition-show":"flip-right","transition-hide":"flip-left",class:"bg-primary",style:{"max-height":"30px"},color:"primary","max-height":"40px"},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.label),1)])),_:2},1024)])),_:2},1032,["name"])])),_:2},1032,["class","to","disable"]),[[r.aG,e.direct]])])))),256)),b,(0,o.bF)(q,{ref:"component"},null,512)])),_:1})])),_:1})])),_:1}),(0,o.bF)(z,{ref:"methods",onSetData:f.setData},null,8,["onSetData"])],64)}a(10239);var v=a(45022),k=a(39364),A=a(93899);const _={emits:["changeTitle","mouseover"],components:{"user-logout":k.A,methods:A.A},data(){return{directs:[],title:"SCEN - Sistema de Control de Encomiendas",titleMobile:"SCEN",items:[],items_model:{},events:["click","mousemove","mousedown","scroll","keypress","load"],drawer:!1,miniState:!1,intervalLogout:null,dashboard:this.$t("Menu.dashboard")}},mounted(){this.events.forEach((function(e){window.addEventListener(e,this.resetLogoutTimer)}),this),this.resetLogoutTimer(),this.miniState=!0,this.authenticator(),this.refreshTimer(),this.getData("/menus","setData","items",{headers:{rol:v.A.getItem("tokenTraducido").usuario.roles.id,read:"S"}}),this.getData("/menus","setData","directs",{headers:{rol:v.A.getItem("tokenTraducido").usuario.roles.id,direct:1,read:"S"}})},methods:{getData(e,t,a,o){this.$refs.methods.getData(e,t,a,o)},setData(e,t){this[t]=e},drawerClick(){this.miniState?(this.miniState=!1,this.drawer=!0):(this.miniState=!0,this.drawer=!0)},allowOption(e){return 0==e.acciones[0].rpermisos.length},authenticator(){1!=v.A.getItem("user")&&this.$router.push("/login")},logout(){v.A.remove("user"),this.$router.push("/login")},refreshTimer(){let e=this;var t;let a=19,o=localStorage.getItem("currentTime"),i=localStorage.getItem("targetTime");function r(){!0===v.A.getItem("user")?(o=localStorage.getItem("currentTime"),i=localStorage.getItem("targetTime"),o>i?(clearInterval(t),v.A.remove("currentTime"),v.A.remove("targetTime"),e.$refs.component.refreshToken(),e.refreshTimer()):(o=new Date,localStorage.setItem("currentTime",o))):(clearInterval(t),v.A.remove("currentTime"),v.A.remove("targetTime"),e.$router.push("/login"))}null==i&&null==o?(o=new Date,i=new Date(o.getTime()+6e4*a),localStorage.setItem("currentTime",o),localStorage.setItem("targetTime",i)):(o=new Date(o),i=new Date(i)),r()||(t=setInterval(r,1e3)),document.onbeforeunload=function(){localStorage.setItem("currentTime",o)}},resetLogoutTimer(){clearInterval(this.intervalLogout),v.A.remove("currentTimeLogout"),v.A.remove("targetTimeLogout");var e=new Date,t=new Date(e.getTime()+3e5);localStorage.setItem("currentTimeLogout",e),localStorage.setItem("targetTimeLogout",t),this.logoutTimer()},logoutTimer(){let e=this,t=5,a=localStorage.getItem("currentTimeLogout"),o=localStorage.getItem("targetTimeLogout");function i(){!0===v.A.getItem("user")?(a=localStorage.getItem("currentTimeLogout"),o=localStorage.getItem("targetTimeLogout"),a>o?(clearInterval(e.intervalLogout),v.A.remove("currentTimeLogout"),v.A.remove("targetTimeLogout"),v.A.remove("user"),e.$router.push("/login")):(a=new Date,localStorage.setItem("currentTimeLogout",a))):(clearInterval(e.intervalLogout),v.A.remove("currentTimeLogout"),v.A.remove("targetTimeLogout"),e.$router.push("/login"))}null==o&&null==a?(a=new Date,o=new Date(a.getTime()+6e4*t),localStorage.setItem("currentTimeLogout",a),localStorage.setItem("targetTimeLogout",o)):(a=new Date(a),o=new Date(o)),i()||(e.intervalLogout=setInterval(i,1e3)),document.onbeforeunload=function(){localStorage.setItem("currentTime",a)}},hideItems(){for(var e=0;e<this.items.length-1;e++)this.items_model[this.items[e].name]=!1},changeTitle(e,t){this.title=e,this.titleMobile=t}}};var T=a(12807),F=a(29078),S=a(45205),I=a(8416),w=a(36914),L=a(56384),x=a(39150),C=a(93676),D=a(50492),E=a(3952),y=a(84436),$=a(53999),q=a(90124),Q=a(25173),X=a(76056),W=a(13796),z=a(9459),V=a(97410),M=a(57092),O=a(39626),R=a(98582),B=a.n(R);const K=(0,T.A)(_,[["render",f]]),U=K;B()(_,"components",{QLayout:F.A,QPageContainer:S.A,QHeader:I.A,QToolbar:w.A,QBtn:L.A,QToolbarTitle:x.A,QSpace:C.A,QIcon:D.A,QAvatar:E.A,QMenu:y.A,QList:$.A,QItem:q.A,QItemSection:Q.A,QDrawer:X.A,QItemLabel:W.A,QExpansionItem:z.A,QTooltip:V.A,QFooter:M.A}),B()(_,"directives",{Ripple:O.A})},16902:(e,t,a)=>{e.exports=a.p+"img/avatar.498e291a.jpg"}}]);