"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[7394],{93899:(e,t,s)=>{function r(e,t,s,r,i,o){return null}s.d(t,{A:()=>u});var i=s(45022),o=s(80660),a=s(14907);const n={setup(){const e=(0,a.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,r={headers:{}}){r.headers.Authorization=`Bearer ${i.A.getItem("token")}`,o.api.get(e,r).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,r={headers:{}}){r.headers.Authorization=`Bearer ${i.A.getItem("token")}`,o.api.post(e,t,r).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,r={headers:{}}){r.headers.Authorization=`Bearer ${i.A.getItem("token")}`,o.api.put(e,t,r).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.A.getItem("token")}`,o.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,r={headers:{}}){r.headers.Authorization=`Bearer ${i.A.getItem("token")}`,o.api.post(e,t,r).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var l=s(12807);const d=(0,l.A)(n,[["render",r]]),u=d},47394:(e,t,s)=>{s.r(t),s.d(t,{default:()=>F});var r=s(61758);const i={class:"fix-center text-center",style:{"min-width":"320px"}},o={class:"column"},a={class:"col q-gutter-md"},n=(0,r.Lk)("div",{class:"q-pa-lg"},null,-1),l={class:"col q-gutter-md"};function d(e,t,s,d,u,c){const m=(0,r.g2)("q-img"),h=(0,r.g2)("q-icon"),p=(0,r.g2)("q-input"),g=(0,r.g2)("q-btn"),b=(0,r.g2)("q-form"),f=(0,r.g2)("q-page"),y=(0,r.g2)("q-page-container"),v=(0,r.g2)("q-layout");return(0,r.uX)(),(0,r.Wv)(v,null,{default:(0,r.k6)((()=>[(0,r.bF)(y,null,{default:(0,r.k6)((()=>[(0,r.bF)(f,{class:"login"},{default:(0,r.k6)((()=>[(0,r.Lk)("div",i,[(0,r.bF)(b,{class:"q-gutter-md",onSubmit:c.onSubmit},{default:(0,r.k6)((()=>[(0,r.bF)(m,{src:"images/logo_rcs.png"}),(0,r.Lk)("div",o,[(0,r.Lk)("div",a,[(0,r.bF)(p,{required:"",dense:"","bg-color":"white",filled:"",outlined:"",modelValue:u.email,"onUpdate:modelValue":t[0]||(t[0]=e=>u.email=e),disable:!0,label:"Correo electrónico",style:{"margin-top":"40px"}},{prepend:(0,r.k6)((()=>[(0,r.bF)(h,{name:"perm_identity"})])),_:1},8,["modelValue"]),(0,r.bF)(p,{color:"blue",dense:"","bg-color":"white",filled:"",modelValue:u.password,"onUpdate:modelValue":t[2]||(t[2]=e=>u.password=e),label:"Contraseña",type:u.isPwd?"password":"text",rules:[e=>!!e&&e.length>5||""],style:{"margin-bottom":"-20px"}},{prepend:(0,r.k6)((()=>[(0,r.bF)(h,{name:"screen_lock_landscape"})])),append:(0,r.k6)((()=>[(0,r.bF)(h,{name:u.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[1]||(t[1]=e=>u.isPwd=!u.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,r.bF)(p,{color:"blue",dense:"","bg-color":"white",filled:"",modelValue:u.confirm,"onUpdate:modelValue":t[4]||(t[4]=e=>u.confirm=e),label:"Confirmar Contraseña",type:u.isPwd?"password":"text",rules:[e=>!!e&&e===this.password||""]},{prepend:(0,r.k6)((()=>[(0,r.bF)(h,{name:"screen_lock_landscape"})])),append:(0,r.k6)((()=>[(0,r.bF)(h,{name:u.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[3]||(t[3]=e=>u.isPwd=!u.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])]),n,(0,r.Lk)("div",l,[(0,r.bF)(g,{glossy:"",label:"Confirmar",type:"submit"})])])])),_:1},8,["onSubmit"])])])),_:1})])),_:1})])),_:1})}s(10239);var u=s(14907),c=s(80660),m=s(80018),h=s(39364),p=s(93899);const g={components:{"user-logout":h.A,methods:p.A},name:"login_user",data(){return{routes:[],email:"",password:"",confirm:"",cliente:"",isPwd:!0,remember:!0,axiosConfig:{headers:{Authorization:""}}}},setup(){(0,u.A)();return{}},mounted(){this.cliente=this.$router.currentRoute._value.query.cliente,this.email=(0,m.D4)(this.$router.currentRoute._value.query.email),this.verifyUser()},methods:{async onSubmit(){let e={};e.cod_cliente=this.cliente,e.email=this.email,e.password=this.password,e.estatus="1",await c.api.post("/cusuarios",e,{}).then((()=>{c.api.get("cusuarios/send-confirm",{headers:{address:this.email,client:this.cliente,password:this.password}}),this.$router.push("/userCreated")})).catch((()=>{this.$q.notify({message:"Error del Sistema. Problemas al actualizar datos del Usuario. Comuníquese con el proveedor del Sistemas...",color:"red"})}))},verifyUser(){c.api.get(`clientes/verify/${this.cliente}`,{}).catch((e=>{this.$router.push("/errorVerify")})),c.api.get("cusuarios/verify",{headers:{email:this.email,cliente:this.cliente}}).then((e=>{e.data>0&&this.$router.push("/errorVerify")}))}}};var b=s(12807),f=s(29078),y=s(45205),v=s(77716),k=s(49200),A=s(15046),w=s(67837),$=s(50492),C=s(56384),_=s(98582),q=s.n(_);const x=(0,b.A)(g,[["render",d]]),F=x;q()(g,"components",{QLayout:f.A,QPageContainer:y.A,QPage:v.A,QForm:k.A,QImg:A.A,QInput:w.A,QIcon:$.A,QBtn:C.A})}}]);