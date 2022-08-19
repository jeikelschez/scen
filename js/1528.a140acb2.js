"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[1528],{5511:(e,o,a)=>{a.d(o,{Z:()=>u});var t=a(3673);function i(e,o,a,i,s,r){const l=(0,t.up)("q-input");return(0,t.wg)(),(0,t.j4)(l,{ref:"inputRef",modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=e=>i.value=e),outlined:"",label:"Amount","error-message":i.errorMessage,error:!!i.errorMessage},null,8,["modelValue","error-message","error"])}var s=a(5806),r=a(8500);const l={name:"QCurrencyInput",props:{modelValue:Number,options:Object},setup(e){const{inputRef:o}=(0,s.Er)(e.options),{errorMessage:a,value:t}=(0,r.U$)("amount");return{inputRef:o,errorMessage:a,value:t}}};var n=a(4260),d=a(4842),m=a(7518),c=a.n(m);const p=(0,n.Z)(l,[["render",i]]),u=p;c()(l,"components",{QInput:d.Z})},8015:(e,o,a)=>{function t(e,o,a,t,i,s){return null}a.d(o,{Z:()=>d});var i=a(589),s=a(8825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,s.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,o,a,t,s){for(var r,l,n,d,m=i.Z.getItem("tokenTraducido"),c=0,p=m.usuario.roles.permisos.length;c<p;c++)if(m.usuario.roles.permisos[c].codigo===e&&(r=!0),m.usuario.roles.permisos[c].codigo===t&&(n=!0),m.usuario.roles.permisos[c].codigo===a&&(d=!0),m.usuario.roles.permisos[c].codigo===o&&(l=!0),c==m.usuario.roles.permisos.length.length-1)break;e=!0===r,t=!0===n,a=!0===d,o=!0===l,this.$emit(s,e,o,t,a)},desactivarOpciones(e){for(var o=i.Z.getItem("tokenTraducido"),a=0,t=this.permisos.length;a<t;a++){var s=0;for(t=o.usuario.roles.permisos.length;s<t;s++)if(o.usuario.roles.permisos[s].codigo==this.permisos[a].permisoName&&(this.permisos[a].permiso=!0),s==o.usuario.roles.permisos.length.length-1)break;if(a==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var l=a(4260);const n=(0,l.Z)(r,[["render",t]]),d=n},5494:(e,o,a)=>{function t(e,o,a,t,i,s){return null}a.d(o,{Z:()=>m});var i=a(589),s=a(5474),r=a(8825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,o,a,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,t).then((e=>{this.$emit(o,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,o,a,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,t).then((e=>{this.$emit(o,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,o,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api["delete"](e,a).then((e=>{(e.status=200)&&(this.$emit(o),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,o,a,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,o,t).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,o,a,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,o,t).then((e=>{(e.status=200)&&this.$emit(a,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))},putData:function(e,o,a,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.put(e,o,t).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))}}};var n=a(4260);const d=(0,n.Z)(l,[["render",t]]),m=d},1528:(e,o,a)=>{a.r(o),a.d(o,{default:()=>ye});var t=a(3673),i=a(2323);const s={class:"row"},r={class:"col-md-3 col-xs-12"},l={class:"col-md-4 col-xs-12"},n={class:"col-md-5 col-xs-12"},d={class:"col-md-4 col-xs-12"},m={class:"col-md-4 col-xs-12"},c={class:"col-md-4 col-xs-12"},p={class:"col-md-6 col-xs-12"},u={class:"col-md-6 col-xs-12"},_={class:"col-md-6 col-xs-12"},f={class:"row items-center justify-end"},g={class:"col-md-6 col-xs-12"},h={class:"row items-center justify-end"},b={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},v={class:"row"},w={class:"col-md-3 col-xs-12"},y={class:"col-md-4 col-xs-12"},V={class:"col-md-5 col-xs-12"},E={class:"col-md-4 col-xs-12"},C={class:"col-md-4 col-xs-12"},W={class:"col-md-4 col-xs-12"},S={class:"col-md-6 col-xs-12"},x={class:"col-md-6 col-xs-12"},N={class:"col-md-6 col-xs-12"},D={class:"row items-center justify-end"},q={class:"col-md-6 col-xs-12"},k={class:"row items-center justify-end"},Z={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},U={class:"row q-pa-sm justify-center"},z={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},A={class:"row"},$=(0,t._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,t._)("h4",null,[(0,t._)("strong",null,"MANTENIMIENTO - RETENCIONES")])],-1),I={class:"col-md-5 col-sm-7 col-xs-6",style:{"align-self":"center","margin-right":"20px"}},P={class:"col-md-2 col-sm-4 col-xs-5",style:{"text-align":"center","align-self":"center"}},Q={class:"q-pa-md"},j={class:"q-gutter-y-md"},R={bordered:"",flat:"",class:"row"},T=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function F(e,o,a,F,B,L){const M=(0,t.up)("q-icon"),H=(0,t.up)("q-input"),O=(0,t.up)("q-select"),G=(0,t.up)("q-btn"),J=(0,t.up)("q-date"),K=(0,t.up)("q-popup-proxy"),Y=(0,t.up)("q-form"),X=(0,t.up)("q-card-section"),ee=(0,t.up)("q-card"),oe=(0,t.up)("q-dialog"),ae=(0,t.up)("q-inner-loading"),te=(0,t.up)("q-td"),ie=(0,t.up)("q-item-label"),se=(0,t.up)("q-item-section"),re=(0,t.up)("q-chip"),le=(0,t.up)("q-item"),ne=(0,t.up)("q-list"),de=(0,t.up)("q-table"),me=(0,t.up)("q-card-actions"),ce=(0,t.up)("methods"),pe=(0,t.up)("desactivate-crud"),ue=(0,t.up)("q-page"),_e=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(ue,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(oe,{modelValue:F.create,"onUpdate:modelValue":o[15]||(o[15]=e=>F.create=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(ee,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(X,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{onSubmit:L.createData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",s,[(0,t._)("div",r,[(0,t.Wm)(H,{outlined:"",modelValue:B.form.cod_tipo_retencion,"onUpdate:modelValue":o[0]||(o[0]=e=>B.form.cod_tipo_retencion=e),label:"Codigo",hint:"","lazy-rules":"",class:"pcform",type:"number",rules:[L.reglasNotNull2]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",l,[(0,t.Wm)(O,{outlined:"",modelValue:B.form.cod_tipo_persona,"onUpdate:modelValue":o[1]||(o[1]=e=>B.form.cod_tipo_persona=e),label:"Tipo Persona",hint:"",class:"pcform",rules:[L.reglasSelect],options:B.tipo_persona,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"group"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",n,[(0,t.Wm)(H,{outlined:"",modelValue:B.form.nb_tipo_retencion,"onUpdate:modelValue":[o[2]||(o[2]=e=>B.form.nb_tipo_retencion=e),o[3]||(o[3]=e=>B.form.nb_tipo_retencion=B.form.nb_tipo_retencion.toUpperCase())],label:"Descripción",hint:"","lazy-rules":"",rules:[L.reglasNotNull50]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",d,[(0,t.Wm)(H,{outlined:"",modelValue:B.form.porc_base,"onUpdate:modelValue":o[4]||(o[4]=e=>B.form.porc_base=e),label:"Porcentaje Base",hint:"",class:"pcform",type:"number","lazy-rules":"",step:".01",rules:[L.reglasNotNull12]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",m,[(0,t.Wm)(H,{outlined:"",modelValue:B.form.porc_retencion,"onUpdate:modelValue":o[5]||(o[5]=e=>B.form.porc_retencion=e),label:"Porcentaje Retención",hint:"","lazy-rules":"",step:".01",class:"pcform",type:"number",rules:[L.reglasNotNull12]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",c,[(0,t.Wm)(H,{outlined:"",modelValue:B.form.pago_mayor,"onUpdate:modelValue":o[6]||(o[6]=e=>B.form.pago_mayor=e),label:"Monto",hint:"",step:".01","lazy-rules":"",type:"number",rules:[L.reglasNotNull12]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",p,[(0,t.Wm)(H,{outlined:"",modelValue:B.form.sustraendo,"onUpdate:modelValue":o[7]||(o[7]=e=>B.form.sustraendo=e),label:"Sustraendo",hint:"","lazy-rules":"",step:".01",class:"pcform",type:"number",rules:[L.reglasNotNull12]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",u,[(0,t.Wm)(H,{outlined:"",modelValue:B.form.cod_seniat,"onUpdate:modelValue":[o[8]||(o[8]=e=>B.form.cod_seniat=e),o[9]||(o[9]=e=>B.form.cod_seniat=B.form.cod_seniat.toUpperCase())],label:"Codigo SENIAT",hint:"","lazy-rules":"",rules:[L.reglasNotNull3]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",_,[(0,t.Wm)(H,{outlined:"",label:"Fecha de Validez Inicial",hint:"",modelValue:B.form.fecha_ini_val,"onUpdate:modelValue":o[11]||(o[11]=e=>B.form.fecha_ini_val=e),mask:"date",rules:["date"],class:"pcform","lazy-rules":""},{append:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{modelValue:B.form.fecha_ini_val,"onUpdate:modelValue":o[10]||(o[10]=e=>B.form.fecha_ini_val=e)},{default:(0,t.w5)((()=>[(0,t._)("div",f,[(0,t.wy)((0,t.Wm)(G,{label:"Close",color:"primary",flat:""},null,512),[[_e]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,t._)("div",g,[(0,t.Wm)(H,{outlined:"",label:"Fecha de Validez Final",hint:"",modelValue:B.form.fecha_fin_val,"onUpdate:modelValue":o[13]||(o[13]=e=>B.form.fecha_fin_val=e),mask:"date",rules:["date"],"lazy-rules":""},{append:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{modelValue:B.form.fecha_fin_val,"onUpdate:modelValue":o[12]||(o[12]=e=>B.form.fecha_fin_val=e)},{default:(0,t.w5)((()=>[(0,t._)("div",h,[(0,t.wy)((0,t.Wm)(G,{label:"Close",color:"primary",flat:""},null,512),[[_e]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])]),(0,t._)("div",b,[(0,t.Wm)(G,{label:"Agregar Retención",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(G,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close",onClick:o[14]||(o[14]=e=>L.setData())},null,512),[[_e]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(oe,{modelValue:F.edit,"onUpdate:modelValue":o[30]||(o[30]=e=>F.edit=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(ee,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(X,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{onSubmit:L.putData},{default:(0,t.w5)((()=>[(0,t._)("div",v,[(0,t._)("div",w,[(0,t.Wm)(H,{outlined:"",modelValue:B.formEdit.cod_tipo_retencion,"onUpdate:modelValue":o[16]||(o[16]=e=>B.formEdit.cod_tipo_retencion=e),label:"Codigo",hint:"","lazy-rules":"",class:"pcform",type:"number",rules:[L.reglasNotNull2]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",y,[(0,t.Wm)(O,{outlined:"",modelValue:B.formEdit.cod_tipo_persona,"onUpdate:modelValue":o[17]||(o[17]=e=>B.formEdit.cod_tipo_persona=e),label:"Tipo Persona",hint:"",class:"pcform",rules:[L.reglasSelect],options:B.tipo_persona,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"group"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",V,[(0,t.Wm)(H,{outlined:"",modelValue:B.formEdit.nb_tipo_retencion,"onUpdate:modelValue":[o[18]||(o[18]=e=>B.formEdit.nb_tipo_retencion=e),o[19]||(o[19]=e=>B.formEdit.nb_tipo_retencion=B.formEdit.nb_tipo_retencion.toUpperCase())],label:"Descripción",hint:"","lazy-rules":"",rules:[L.reglasNotNull50]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",E,[(0,t.Wm)(H,{outlined:"",modelValue:B.formEdit.porc_base,"onUpdate:modelValue":o[20]||(o[20]=e=>B.formEdit.porc_base=e),label:"Porcentaje Base",hint:"",class:"pcform",step:".01",type:"number","lazy-rules":"",rules:[L.reglasNotNull12]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",C,[(0,t.Wm)(H,{outlined:"",modelValue:B.formEdit.porc_retencion,"onUpdate:modelValue":o[21]||(o[21]=e=>B.formEdit.porc_retencion=e),label:"Porcentaje Retención",hint:"","lazy-rules":"",step:".01",class:"pcform",type:"number",rules:[L.reglasNotNull12]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",W,[(0,t.Wm)(H,{outlined:"",modelValue:B.formEdit.pago_mayor,"onUpdate:modelValue":o[22]||(o[22]=e=>B.formEdit.pago_mayor=e),label:"Monto",step:".01",hint:"","lazy-rules":"",type:"number",rules:[L.reglasNotNull12]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",S,[(0,t.Wm)(H,{outlined:"",modelValue:B.formEdit.sustraendo,"onUpdate:modelValue":o[23]||(o[23]=e=>B.formEdit.sustraendo=e),label:"Sustraendo",hint:"","lazy-rules":"",step:".01",class:"pcform",type:"number",rules:[L.reglasNotNull12]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",x,[(0,t.Wm)(H,{outlined:"",modelValue:B.formEdit.cod_seniat,"onUpdate:modelValue":[o[24]||(o[24]=e=>B.formEdit.cod_seniat=e),o[25]||(o[25]=e=>B.formEdit.cod_seniat=B.formEdit.cod_seniat.toUpperCase())],label:"Codigo SENIAT",hint:"","lazy-rules":"",rules:[L.reglasNotNull3]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",N,[(0,t.Wm)(H,{outlined:"",label:"Fecha de Validez Inicial",hint:"",modelValue:B.formEdit.fecha_ini_val,"onUpdate:modelValue":o[27]||(o[27]=e=>B.formEdit.fecha_ini_val=e),mask:"date",rules:["date"],class:"pcform","lazy-rules":""},{append:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{modelValue:B.formEdit.fecha_ini_val,"onUpdate:modelValue":o[26]||(o[26]=e=>B.formEdit.fecha_ini_val=e)},{default:(0,t.w5)((()=>[(0,t._)("div",D,[(0,t.wy)((0,t.Wm)(G,{label:"Close",color:"primary",flat:""},null,512),[[_e]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,t._)("div",q,[(0,t.Wm)(H,{outlined:"",label:"Fecha de Validez Final",hint:"",modelValue:B.formEdit.fecha_fin_val,"onUpdate:modelValue":o[29]||(o[29]=e=>B.formEdit.fecha_fin_val=e),mask:"date",rules:["date"],"lazy-rules":""},{append:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{modelValue:B.formEdit.fecha_fin_val,"onUpdate:modelValue":o[28]||(o[28]=e=>B.formEdit.fecha_fin_val=e)},{default:(0,t.w5)((()=>[(0,t._)("div",k,[(0,t.wy)((0,t.Wm)(G,{label:"Close",color:"primary",flat:""},null,512),[[_e]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])]),(0,t._)("div",Z,[(0,t.Wm)(G,{label:"Editar Retención",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(G,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[_e]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",U,[(0,t._)("div",z,[(0,t._)("div",A,[$,(0,t._)("div",I,[(0,t.Wm)(H,{modelValue:F.filter,"onUpdate:modelValue":o[31]||(o[31]=e=>F.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(M,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",P,[(0,t.Wm)(G,{label:"Insertar Retención",rounded:"",color:"primary",onClick:o[32]||(o[32]=e=>F.create=!0),onClickCapture:o[33]||(o[33]=e=>L.resetForm()),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,t._)("div",Q,[(0,t._)("div",j,[(0,t._)("div",R,[(0,t.Wm)(de,{rows:B.datos,"row-key":"id",loading:F.loading,columns:B.columns,separator:F.separator,class:"my-sticky-column-table",filter:F.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:F.pagination,"onUpdate:pagination":o[36]||(o[36]=e=>F.pagination=e)},{loading:(0,t.w5)((()=>[(0,t.Wm)(ae,{showing:"",color:"primary"})])),"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(te,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(G,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{L.getData(`/mretenciones/${e.row.id}`,"setDataEdit","formEdit"),F.edit=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(G,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>B.selected=e.row.id,onClickCapture:o[34]||(o[34]=e=>F.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(ee,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(ne,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(a=>((0,t.wg)(),(0,t.j4)(le,{key:a.name},{default:(0,t.w5)((()=>[(0,t.Wm)(se,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ie,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(a.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(se,{side:""},{default:(0,t.w5)((()=>["status"===a.name?((0,t.wg)(),(0,t.j4)(re,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,t.wg)(),(0,t.j4)(G,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{L.getData(`/mretenciones/${e.row.id}`,"setDataEdit","formEdit"),F.edit=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"status"===a.name?((0,t.wg)(),(0,t.j4)(re,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,t.wg)(),(0,t.j4)(G,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>B.selected=e.row.id,onClickCapture:o[35]||(o[35]=e=>F.deletePopup=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(ie,{key:4,caption:"",class:(0,i.C_)(a.classes?a.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(a.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])])])])]),(0,t.Wm)(oe,{modelValue:F.deletePopup,"onUpdate:modelValue":o[38]||(o[38]=e=>F.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(ee,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(X,null,{default:(0,t.w5)((()=>[T])),_:1}),(0,t.Wm)(me,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(G,{flat:"",label:"Cancelar",color:"primary"},null,512),[[_e]]),(0,t.wy)((0,t.Wm)(G,{flat:"",label:"Aceptar",color:"primary",onClick:o[37]||(o[37]=e=>L.deleteData(B.selected))},null,512),[[_e]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(ce,{ref:"methods",onGetData:o[39]||(o[39]=e=>L.getData("/mretenciones","setData","datos")),onSetData:L.setData,onResetLoading:L.resetLoading,onSetDataEdit:L.setDataEdit},null,8,["onSetData","onResetLoading","onSetDataEdit"]),(0,t.Wm)(pe,{ref:"desactivateCrud",onDesactivarCrud:L.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var B=a(1959),L=a(8825),M=(a(589),a(5494)),H=a(8015),O=a(5511);const G={components:{"desactivate-crud":H.Z,methods:M.Z,"currency-input":O.Z},name:"retenciones",data(){return{columns:[{name:"cod_tipo_retencion",label:"Codigo",field:"cod_tipo_retencion",align:"left",sortable:!0},{name:"nb_tipo_retencion",label:"Descripción",field:"nb_tipo_retencion",align:"left",sortable:!0},{name:"porc_retencion",label:"Retención",field:"porc_retencion",align:"left",sortable:!0},{name:"pago_mayor",label:"Monto",field:"pago_mayor",align:"left",sortable:!0},{name:"sustraendo",label:"Sustraendo",field:"sustraendo",align:"left",sortable:!0},{name:"tipo_persona_desc",label:"Tipo de Persona",field:"tipo_persona_desc",align:"left",sortable:!0},{name:"fecha_fin_val",label:"Valido Hasta",field:"fecha_fin_val",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{cod_tipo_persona:"",cod_tipo_retencion:"",nb_tipo_retencion:"",porc_base:"",porc_retencion:"",pago_mayor:"",sustraendo:"",cod_seniat:"",fecha_ini_val:"",fecha_fin_val:""},datos:[],formEdit:{id:"",cod_tipo_persona:"",cod_tipo_retencion:"",nb_tipo_retencion:"",porc_base:"",porc_retencion:"",pago_mayor:"",sustraendo:"",cod_seniat:"",fecha_ini_val:"",fecha_fin_val:""},tipo_persona:[{label:"JURÍDICA",value:"J"},{label:"NATURAL",value:"N"}],selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:""}}}},setup(){(0,L.Z)(),(0,B.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,B.iH)({rowsPerPage:10}),separator:(0,B.iH)("vertical"),create:(0,B.iH)(!1),edit:(0,B.iH)(!1),loading:(0,B.iH)(!1),medium:(0,B.iH)(!1),deletePopup:(0,B.iH)(!1),filter:(0,B.iH)("")}},mounted(){this.getData("/mretenciones","setData","datos"),this.$refs.desactivateCrud.desactivarCrud("c_retenciones","r_retenciones","u_retenciones","d_retenciones","desactivarCrud")},methods:{resetLoading(){this.loading=!1},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasNotNull50(e){return null===e||""===e?"Debes Escribir Algo":null!==e!==""&&e>49?"Deben ser Maximo 50 Caracteres":void 0},reglasNotNull12(e){return null===e||""===e?"Debes Escribir Algo":null!==e!==""&&e>9999999999.99?"Monto Maximo Superado":void 0},reglasNotNull3(e){return null===e||""===e?"Debes Escribir Algo":null!==e!==""&&e>999?"Deben ser Maximo 3 Caracteres":void 0},reglasNotNull2(e){return null===e||""===e?"Debes Escribir Algo":null!==e!==""&&e>99?"Deben ser Maximo 2 Caracteres":void 0},desactivarCrud(e,o,a,t){1==o?(1==e&&(this.disabledCreate=!1),1==a&&(this.disabledDelete=!1),1==t&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,o,a){this.$refs.methods.getData(e,o,a,this.axiosConfig),this.loading=!0},setData(e,o){this[o]=e,this.loading=!1},setDataEdit(e,o){this.loading=!1,this.formEdit.id=e.id,this.formEdit.cod_tipo_persona=e.tipo_persona_desc,this.formEdit.cod_tipo_retencion=e.cod_tipo_retencion,this.formEdit.nb_tipo_retencion=e.nb_tipo_retencion,this.formEdit.porc_base=e.porc_base,this.formEdit.porc_retencion=e.porc_retencion,this.formEdit.pago_mayor=e.pago_mayor,this.formEdit.sustraendo=e.sustraendo,this.formEdit.cod_seniat=e.cod_seniat,this.formEdit.fecha_ini_val=e.fecha_ini_val,this.formEdit.fecha_fin_val=e.fecha_fin_val},deleteData(e){this.$refs.methods.deleteData(`/mretenciones/${e}`,"getData",this.axiosConfig),this.loading=!0},createData(){this.form.cod_tipo_persona=this.form.cod_tipo_persona.value,this.$refs.methods.createData("/mretenciones",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.formEdit.cod_tipo_persona=this.formEdit.cod_tipo_persona.value,this.$refs.methods.putData(`/mretenciones/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.resetFormEdit(),this.loading=!0},resetForm(){this.form.cod_tipo_persona="",this.form.cod_tipo_retencion="",this.form.nb_tipo_retencion="",this.form.porc_base="",this.form.porc_retencion="",this.form.pago_mayor="",this.form.cod_seniat="",this.form.sustraendo="",this.form.fecha_ini_val="",this.form.fecha_fin_val="",this.create=!1},resetFormEdit(){this.formEdit.id="",this.formEdit.cod_tipo_persona="",this.formEdit.cod_tipo_retencion="",this.formEdit.nb_tipo_retencion="",this.formEdit.porc_base="",this.formEdit.porc_retencion="",this.formEdit.pago_mayor="",this.formEdit.cod_seniat="",this.formEdit.sustraendo="",this.formEdit.fecha_ini_val="",this.formEdit.fecha_fin_val=""}}};var J=a(4260),K=a(4379),Y=a(6778),X=a(151),ee=a(5589),oe=a(5269),ae=a(4842),te=a(4554),ie=a(2448),se=a(3944),re=a(5626),le=a(8240),ne=a(7352),de=a(6941),me=a(3884),ce=a(7011),pe=a(3414),ue=a(2035),_e=a(2350),fe=a(7030),ge=a(9367),he=a(677),be=a(7518),ve=a.n(be);const we=(0,J.Z)(G,[["render",F]]),ye=we;ve()(G,"components",{QPage:K.Z,QDialog:Y.Z,QCard:X.Z,QCardSection:ee.Z,QForm:oe.Z,QInput:ae.Z,QIcon:te.Z,QSelect:ie.Z,QPopupProxy:se.Z,QDate:re.Z,QBtn:le.Z,QTable:ne.Z,QInnerLoading:de.Z,QTd:me.Z,QList:ce.Z,QItem:pe.Z,QItemSection:ue.Z,QItemLabel:_e.Z,QChip:fe.Z,QCardActions:ge.Z}),ve()(G,"directives",{ClosePopup:he.Z})}}]);