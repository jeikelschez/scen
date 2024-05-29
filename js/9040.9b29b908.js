"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[9040],{93899:(e,t,s)=>{function o(e,t,s,o,a,r){return null}s.d(t,{A:()=>m});var a=s(45022),r=s(80660),i=s(14907);const n={setup(){const e=(0,i.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${a.A.getItem("token")}`,r.api.get(e,o).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${a.A.getItem("token")}`,r.api.post(e,t,o).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${a.A.getItem("token")}`,r.api.put(e,t,o).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${a.A.getItem("token")}`,r.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${a.A.getItem("token")}`,r.api.post(e,t,o).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var d=s(12807);const l=(0,d.A)(n,[["render",o]]),m=l},99040:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var o=s(61758);const a={class:"fix-center text-center",style:{"min-width":"320px"}},r={class:"column"},i={class:"col q-gutter-md"},n=(0,o.Lk)("div",{class:"q-pa-lg"},null,-1),d={class:"col q-gutter-md"};function l(e,t,s,l,m,u){const h=(0,o.g2)("q-img"),c=(0,o.g2)("q-icon"),g=(0,o.g2)("q-input"),p=(0,o.g2)("q-btn"),b=(0,o.g2)("q-form"),A=(0,o.g2)("q-page"),f=(0,o.g2)("q-page-container"),k=(0,o.g2)("q-layout");return(0,o.uX)(),(0,o.Wv)(k,null,{default:(0,o.k6)((()=>[(0,o.bF)(f,null,{default:(0,o.k6)((()=>[(0,o.bF)(A,{class:"login"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",a,[(0,o.bF)(b,{class:"q-gutter-md",onSubmit:u.onSubmit},{default:(0,o.k6)((()=>[(0,o.bF)(h,{src:"images/logo_rcs.png"}),(0,o.Lk)("div",r,[(0,o.Lk)("div",i,[(0,o.bF)(g,{required:"",dense:"","bg-color":"white",filled:"",outlined:"",modelValue:m.email,"onUpdate:modelValue":t[0]||(t[0]=e=>m.email=e),label:"Correo electrónico",autocomplete:"new-user",style:{"margin-top":"40px"}},{prepend:(0,o.k6)((()=>[(0,o.bF)(c,{name:"perm_identity"})])),_:1},8,["modelValue"]),(0,o.bF)(g,{dense:"","bg-color":"white",filled:"",autocomplete:"new-password",modelValue:m.password,"onUpdate:modelValue":t[2]||(t[2]=e=>m.password=e),label:"Contraseña",type:m.isPwd?"password":"text",rules:[e=>!!e&&e.length>5||""],style:{"margin-bottom":"-20px"}},{prepend:(0,o.k6)((()=>[(0,o.bF)(c,{name:"screen_lock_landscape"})])),append:(0,o.k6)((()=>[(0,o.bF)(c,{name:m.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[1]||(t[1]=e=>m.isPwd=!m.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])]),n,(0,o.Lk)("div",d,[(0,o.bF)(p,{glossy:"",label:"Ingresar",type:"submit"})])])])),_:1},8,["onSubmit"])])])),_:1})])),_:1})])),_:1})}s(10239);var m=s(14907),u=s(80660),h=s(93899),c=s(41903);const g={components:{methods:h.A},name:"login_user",data(){return{routes:[],email:"",password:"",isPwd:!0,axiosConfig:{headers:{Authorization:""}}}},setup(){(0,m.A)();return{}},mounted(){},methods:{async onSubmit(){u.api.get("cusuarios/login",{headers:{email:this.email,password:this.password}}).then((e=>{c.A.set("clientId",e.data.data),c.A.set("user",!0),this.$emit("changeTitle","SCEN - Mantenimiento - Clientes",""),this.$router.push("/dashboardUser")})).catch((e=>{this.$q.notify({message:e.response.data.message,color:"red"})}))}}};var p=s(12807),b=s(29078),A=s(45205),f=s(77716),k=s(49200),v=s(15046),w=s(67837),y=s(50492),$=s(56384),x=s(98582),C=s.n(x);const q=(0,p.A)(g,[["render",l]]),_=q;C()(g,"components",{QLayout:b.A,QPageContainer:A.A,QPage:f.A,QForm:k.A,QImg:v.A,QInput:w.A,QIcon:y.A,QBtn:$.A})}}]);