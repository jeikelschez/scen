"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[9791],{9791:(e,s,t)=>{t.r(s),t.d(s,{default:()=>C});var o=t(3673);const a={class:"fix-center text-center"},n={class:"frame q-pa-xl pad"},l=(0,o._)("p",{class:"titulo"},"SCEN",-1),r={class:"column"},u={class:"col q-gutter-md"},i=(0,o._)("div",{class:"q-pa-lg"},null,-1),d={class:"col q-gutter-md"};function m(e,s,t,m,p,c){const f=(0,o.up)("q-icon"),g=(0,o.up)("q-input"),b=(0,o.up)("q-btn"),h=(0,o.up)("q-form"),w=(0,o.up)("user-logout"),_=(0,o.up)("q-page"),v=(0,o.up)("q-page-container"),Z=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"login"},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o._)("div",n,[(0,o.Wm)(h,{class:"q-gutter-md",onSubmit:c.onSubmit,onReset:c.onReset,novalidate:"novalidate"},{default:(0,o.w5)((()=>[l,(0,o._)("div",r,[(0,o._)("div",u,[(0,o.Wm)(g,{required:"",color:"blue","bg-color":"white",filled:"",modelValue:p.form.username,"onUpdate:modelValue":s[0]||(s[0]=e=>p.form.username=e),label:e.$t("Login.user"),rules:[s=>!!s||e.$t("Login.blank_user")]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(f,{name:"perm_identity"})])),_:1},8,["modelValue","label","rules"]),(0,o.Wm)(g,{color:"blue",standout:"","bg-color":"white",filled:"",modelValue:p.form.password,"onUpdate:modelValue":s[2]||(s[2]=e=>p.form.password=e),label:e.$t("Login.password"),type:p.isPwd?"password":"text",rules:[s=>!!s||e.$t("Login.blank_pass")]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(f,{name:"screen_lock_landscape"})])),append:(0,o.w5)((()=>[(0,o.Wm)(f,{name:p.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[1]||(s[1]=e=>p.isPwd=!p.isPwd)},null,8,["name"])])),_:1},8,["modelValue","label","type","rules"])]),i,(0,o._)("div",d,[(0,o.Wm)(b,{glossy:"",label:e.$t("Login.login"),type:"submit"},null,8,["label"])])])])),_:1},8,["onSubmit","onReset"])])]),(0,o.Wm)(w,{ref:"component"},null,512)])),_:1})])),_:1})])),_:1})}var p=t(5474),c=t(589),f=t(8825),g=t(2270);const b={components:{"user-logout":g.Z},name:"PageLogin",data(){return{routes:[],form:{username:"",password:""},isPwd:!0,remember:!0}},setup(){const e=(0,f.Z)();return{isNotAuthenticated(){e.notify({message:"Usuario o Contraseña Invalida",color:"red"})}}},methods:{onSubmit(){c.Z.set("usuario",this.form.username),p.api.post("/usuarios/login",this.form).then((e=>{(e.status=201)&&(c.Z.set("token",`${e.data.data.accessToken}`),c.Z.set("user",!0),c.Z.set("refreshToken",`${e.data.data.refreshToken}`),this.$router.push("/dashboard"),this.$refs.component.login())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="404")&&(this.isNotAuthenticated(),this.onReset())}))},onReset(){this.form.username="",this.form.password=""}}};var h=t(4260),w=t(3066),_=t(2652),v=t(4379),Z=t(5269),q=t(4842),k=t(4554),y=t(8240),W=t(7518),$=t.n(W);const P=(0,h.Z)(b,[["render",m]]),C=P;$()(b,"components",{QLayout:w.Z,QPageContainer:_.Z,QPage:v.Z,QForm:Z.Z,QInput:q.Z,QIcon:k.Z,QBtn:y.Z})}}]);