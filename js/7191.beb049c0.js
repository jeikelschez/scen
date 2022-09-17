"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[7191],{38015:(e,t,a)=>{function s(e,t,a,s,o,i){return null}a.d(t,{Z:()=>d});var o=a(80589),i=a(48825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,i.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,t,a,s,i){for(var r,n,l,d,m=o.Z.getItem("tokenTraducido"),c=0,g=m.usuario.roles.permisos.length;c<g;c++)if(m.usuario.roles.permisos[c].codigo===e&&(r=!0),m.usuario.roles.permisos[c].codigo===s&&(l=!0),m.usuario.roles.permisos[c].codigo===a&&(d=!0),m.usuario.roles.permisos[c].codigo===t&&(n=!0),c==m.usuario.roles.permisos.length.length-1)break;e=!0===r,s=!0===l,a=!0===d,t=!0===n,this.$emit(i,e,t,s,a)},desactivarOpciones(e){for(var t=o.Z.getItem("tokenTraducido"),a=0,s=this.permisos.length;a<s;a++){var i=0;for(s=t.usuario.roles.permisos.length;i<s;i++)if(t.usuario.roles.permisos[i].codigo==this.permisos[a].permisoName&&(this.permisos[a].permiso=!0),i==t.usuario.roles.permisos.length.length-1)break;if(a==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var n=a(74260);const l=(0,n.Z)(r,[["render",s]]),d=l},55325:(e,t,a)=>{function s(e,t,a,s,o,i){return null}a.d(t,{Z:()=>m});var o=a(80589),i=a(5474),r=a(48825);const n={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,a,s){void 0==s?s={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,i.api.get(e,s).then((e=>{this.$emit(t,e.data,a)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,t,a,s){void 0==s?s={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,i.api.get(e,s).then((e=>{this.$emit(t,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,t,a){void 0==a?a={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,i.api["delete"](e,a).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,a,s){void 0==s?s={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,i.api.post(e,t,s).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,a,s){void 0==s?s={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,i.api.post(e,t,s).then((e=>{(e.status=200)&&this.$emit(a,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,t,a,s){void 0==s?s={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,i.api.put(e,t,s).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var l=a(74260);const d=(0,l.Z)(n,[["render",s]]),m=d},51226:(e,t,a)=>{function s(e,t,a,s,o,i){return null}a.d(t,{Z:()=>d});var o=a(61959),i=a(48825);const r={name:"rules",setup(){const e=(0,o.iH)(!1);(0,i.Z)();return{showSimulatedReturnData:e}},methods:{isReq(e,t){var a=!0;return null!=e&&""!=e.trim()||(a=t),a},isReqSelect(e,t){var a=!0;return null!=e&&e!=[]&&""!=e||(a=t),a},isMax(e,t,a){var s=!0;return""!==e&&null!==e&&e.length>t&&(s=a),s},isMin(e,t,a){var s=!0;return""!==e&&null!==e&&e.length<t?a:s}}};var n=a(74260);const l=(0,n.Z)(r,[["render",s]]),d=l},87191:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ve});var s=a(83673),o=a(62323);const i={class:"row"},r={class:"col-md-6 col-xs-12"},n={class:"col-md-6 col-xs-12"},l={class:"col-md-6 col-xs-12"},d={class:"col-md-6 col-xs-12"},m={class:"col-md-12 col-xs-12"},c={class:"col-md-12 col-xs-12"},g={class:"row"},p=(0,s._)("div",{class:"col-md-12 col-xs-12",style:{"align-self":"center","text-align":"left","margin-top":"-30px"}},[(0,s._)("h4",{style:{"font-size":"20px"},class:"text-secondary"},[(0,s._)("strong",null,"IDENTIFICACIÓN Y COMISIONES")])],-1),u={class:"col-md-6 col-xs-12"},_={class:"col-md-6 col-xs-12"},f={class:"col-md-4 col-xs-12"},h={class:"col-md-4 col-xs-12"},A={class:"col-md-4 col-xs-12"},b={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},v={class:"row"},w={class:"col-md-6 col-xs-12"},x={class:"col-md-6 col-xs-12"},C={class:"col-md-6 col-xs-12"},V={class:"col-md-6 col-xs-12"},E={class:"col-md-12 col-xs-12"},y={class:"col-md-12 col-xs-12"},S={class:"row"},D=(0,s._)("div",{class:"col-md-12 col-xs-12",style:{"align-self":"center","text-align":"left","margin-top":"-30px"}},[(0,s._)("h4",{style:{"font-size":"20px"},class:"text-secondary"},[(0,s._)("strong",null,"IDENTIFICACIÓN Y COMISIONES")])],-1),W={class:"col-md-6 col-xs-12"},$={class:"col-md-6 col-xs-12"},q={class:"col-md-4 col-xs-12"},U={class:"col-md-4 col-xs-12"},M={class:"col-md-4 col-xs-12"},k={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},Z={class:"row q-pa-sm justify-center"},z={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},I={class:"row"},N=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,s._)("h4",{style:{"font-size":"26px"}},[(0,s._)("strong",null,"MANTENIMIENTO - AGENTES")])],-1),R={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},T=(0,s.Uk)(" Sin resultados "),P={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},B={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},Q={class:"q-pa-md",style:{"margin-top":"20px"}},O={class:"q-gutter-y-md"},j={bordered:"",flat:"",class:"my-card row"},F=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function L(e,t,a,L,H,G){const Y=(0,s.up)("q-icon"),K=(0,s.up)("q-input"),J=(0,s.up)("q-select"),X=(0,s.up)("q-card-section"),ee=(0,s.up)("q-card"),te=(0,s.up)("q-btn"),ae=(0,s.up)("q-form"),se=(0,s.up)("q-dialog"),oe=(0,s.up)("q-item-section"),ie=(0,s.up)("q-item"),re=(0,s.up)("q-inner-loading"),ne=(0,s.up)("q-td"),le=(0,s.up)("q-item-label"),de=(0,s.up)("q-chip"),me=(0,s.up)("q-list"),ce=(0,s.up)("q-table"),ge=(0,s.up)("q-card-actions"),pe=(0,s.up)("desactivate-crud"),ue=(0,s.up)("methods"),_e=(0,s.up)("rules-vue"),fe=(0,s.up)("q-page"),he=(0,s.Q2)("money"),Ae=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(fe,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(se,{modelValue:L.form,"onUpdate:modelValue":t[21]||(t[21]=e=>L.form=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(ee,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(X,null,{default:(0,s.w5)((()=>[(0,s.Wm)(ae,{onSubmit:t[20]||(t[20]=e=>G.createDataCuentas()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s._)("div",r,[(0,s.Wm)(K,{outlined:"",modelValue:H.formAgentes.nb_agente,"onUpdate:modelValue":[t[0]||(t[0]=e=>H.formAgentes.nb_agente=e),t[1]||(t[1]=e=>H.formAgentes.nb_agente=H.formAgentes.nb_agente.toUpperCase())],label:"Nombre de Agente",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Valor Requerido"),e=>this.$refs.rulesVue.isMax(e,25,"Maximo 25 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",n,[(0,s.Wm)(K,{outlined:"",modelValue:H.formAgentes.fax_agente,"onUpdate:modelValue":[t[2]||(t[2]=e=>H.formAgentes.fax_agente=e),t[3]||(t[3]=e=>H.formAgentes.fax_agente=H.formAgentes.fax_agente.toUpperCase())],label:"Fax",hint:"",mask:"#### - ##########","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",l,[(0,s.Wm)(K,{outlined:"",modelValue:H.formAgentes.persona_responsable,"onUpdate:modelValue":[t[4]||(t[4]=e=>H.formAgentes.persona_responsable=e),t[5]||(t[5]=e=>H.formAgentes.persona_responsable=H.formAgentes.persona_responsable.toUpperCase())],label:"Persona Responsable",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"contact_phone"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",d,[(0,s.Wm)(J,{outlined:"",modelValue:H.formAgentes.flag_activo,"onUpdate:modelValue":t[6]||(t[6]=e=>H.formAgentes.flag_activo=e),label:"Activo",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Valor Requerido")||""],options:H.estatus,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",m,[(0,s.Wm)(K,{outlined:"",modelValue:H.formAgentes.dir_agente,"onUpdate:modelValue":[t[7]||(t[7]=e=>H.formAgentes.dir_agente=e),t[8]||(t[8]=e=>H.formAgentes.dir_agente=H.formAgentes.dir_agente.toUpperCase())],label:"Dirección",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,100,"Maximo 100 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",c,[(0,s.Wm)(K,{outlined:"",modelValue:H.formAgentes.email_web,"onUpdate:modelValue":[t[9]||(t[9]=e=>H.formAgentes.email_web=e),t[10]||(t[10]=e=>H.formAgentes.email_web=H.formAgentes.email_web.toUpperCase())],label:"Email",hint:"",type:"email","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,100,"Maximo 100 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"email"})])),_:1},8,["modelValue","rules"])]),(0,s.Wm)(ee,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw","margin-bottom":"20px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(X,null,{default:(0,s.w5)((()=>[(0,s._)("div",g,[p,(0,s._)("div",u,[(0,s.Wm)(K,{outlined:"",modelValue:H.formAgentes.rif_ci_agente,"onUpdate:modelValue":[t[11]||(t[11]=e=>H.formAgentes.rif_ci_agente=e),t[12]||(t[12]=e=>H.formAgentes.rif_ci_agente=H.formAgentes.rif_ci_agente.toUpperCase())],label:"RIF/CI",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,20,"Maximo 20 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"account_box"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",_,[(0,s.Wm)(J,{outlined:"",modelValue:H.formAgentes.tipo_agente,"onUpdate:modelValue":t[13]||(t[13]=e=>H.formAgentes.tipo_agente=e),label:"Tipo de Agente",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Valor Requerido")||""],options:H.tipoDeAgente,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"face"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",f,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(K,{outlined:"",modelValue:H.formAgentes.porc_comision_venta,"onUpdate:modelValue":[t[14]||(t[14]=e=>H.formAgentes.porc_comision_venta=e),t[15]||(t[15]=e=>H.formAgentes.porc_comision_venta=H.formAgentes.porc_comision_venta.toUpperCase())],label:"% Comisión por Venta","input-class":"text-right",hint:"",class:"pcform","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"percent"})])),_:1},8,["modelValue"])),[[he,H.money]])]),(0,s._)("div",h,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(K,{outlined:"",class:"pcform",modelValue:H.formAgentes.porc_comision_entrega,"onUpdate:modelValue":[t[16]||(t[16]=e=>H.formAgentes.porc_comision_entrega=e),t[17]||(t[17]=e=>H.formAgentes.porc_comision_entrega=H.formAgentes.porc_comision_entrega.toUpperCase())],label:"% Comisión por Entrega","input-class":"text-right",hint:"","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"percent"})])),_:1},8,["modelValue"])),[[he,H.money]])]),(0,s._)("div",A,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(K,{outlined:"",modelValue:H.formAgentes.porc_comision_seguro,"onUpdate:modelValue":[t[18]||(t[18]=e=>H.formAgentes.porc_comision_seguro=e),t[19]||(t[19]=e=>H.formAgentes.porc_comision_seguro=H.formAgentes.porc_comision_seguro.toUpperCase())],label:"% Comisión por Seguro","input-class":"text-right",hint:"","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"percent"})])),_:1},8,["modelValue"])),[[he,H.money]])])])])),_:1})])),_:1})]),(0,s._)("div",b,[(0,s.Wm)(te,{label:"Agregar Agente",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(te,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[Ae]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(se,{modelValue:L.formEdit,"onUpdate:modelValue":t[43]||(t[43]=e=>L.formEdit=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(ee,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(X,null,{default:(0,s.w5)((()=>[(0,s.Wm)(ae,{onSubmit:t[42]||(t[42]=e=>G.putDataCuentas())},{default:(0,s.w5)((()=>[(0,s._)("div",v,[(0,s._)("div",w,[(0,s.Wm)(K,{outlined:"",modelValue:H.formEditAgentes.nb_agente,"onUpdate:modelValue":[t[22]||(t[22]=e=>H.formEditAgentes.nb_agente=e),t[23]||(t[23]=e=>H.formEditAgentes.nb_agente=H.formEditAgentes.nb_agente.toUpperCase())],label:"Nombre de Agente",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Valor Requerido")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",x,[(0,s.Wm)(K,{outlined:"",modelValue:H.formEditAgentes.fax_agente,"onUpdate:modelValue":[t[24]||(t[24]=e=>H.formEditAgentes.fax_agente=e),t[25]||(t[25]=e=>H.formEditAgentes.fax_agente=H.formEditAgentes.fax_agente.toUpperCase())],label:"Fax",mask:"#### - ##########",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",C,[(0,s.Wm)(K,{outlined:"",modelValue:H.formEditAgentes.persona_responsable,"onUpdate:modelValue":[t[26]||(t[26]=e=>H.formEditAgentes.persona_responsable=e),t[27]||(t[27]=e=>H.formEditAgentes.persona_responsable=H.formEditAgentes.persona_responsable.toUpperCase())],label:"Persona Responsable",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"contact_phone"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",V,[(0,s.Wm)(J,{outlined:"",modelValue:H.formEditAgentes.flag_activo,"onUpdate:modelValue":t[28]||(t[28]=e=>H.formEditAgentes.flag_activo=e),label:"Activo",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Valor Requerido")||""],options:H.estatus,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",E,[(0,s.Wm)(K,{outlined:"",modelValue:H.formEditAgentes.dir_agente,"onUpdate:modelValue":[t[29]||(t[29]=e=>H.formEditAgentes.dir_agente=e),t[30]||(t[30]=e=>H.formEditAgentes.dir_agente=H.formEditAgentes.dir_agente.toUpperCase())],label:"Dirección",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,100,"Maximo 100 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",y,[(0,s.Wm)(K,{outlined:"",modelValue:H.formEditAgentes.email_web,"onUpdate:modelValue":[t[31]||(t[31]=e=>H.formEditAgentes.email_web=e),t[32]||(t[32]=e=>H.formEditAgentes.email_web=H.formEditAgentes.email_web.toUpperCase())],label:"Email",hint:"",type:"email","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"email"})])),_:1},8,["modelValue","rules"])]),(0,s.Wm)(ee,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw","margin-bottom":"20px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(X,null,{default:(0,s.w5)((()=>[(0,s._)("div",S,[D,(0,s._)("div",W,[(0,s.Wm)(K,{outlined:"",modelValue:H.formEditAgentes.rif_ci_agente,"onUpdate:modelValue":[t[33]||(t[33]=e=>H.formEditAgentes.rif_ci_agente=e),t[34]||(t[34]=e=>H.formAgentes.rif_ci_agente=H.formAgentes.rif_ci_agente.toUpperCase())],label:"RIF/CI",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,20,"Maximo 20 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"account_box"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",$,[(0,s.Wm)(J,{outlined:"",modelValue:H.formEditAgentes.tipo_agente,"onUpdate:modelValue":t[35]||(t[35]=e=>H.formEditAgentes.tipo_agente=e),label:"Tipo de Agente",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Valor Requerido")||""],options:H.tipoDeAgente,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"face"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",q,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(K,{outlined:"",modelValue:H.formEditAgentes.porc_comision_venta,"onUpdate:modelValue":[t[36]||(t[36]=e=>H.formEditAgentes.porc_comision_venta=e),t[37]||(t[37]=e=>H.formEditAgentes.porc_comision_venta=H.formEditAgentes.porc_comision_venta.toUpperCase())],label:"% Comisión por Venta","input-class":"text-right",hint:"",class:"pcform","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"percent"})])),_:1},8,["modelValue"])),[[he,H.money]])]),(0,s._)("div",U,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(K,{outlined:"",class:"pcform",modelValue:H.formEditAgentes.porc_comision_entrega,"onUpdate:modelValue":[t[38]||(t[38]=e=>H.formEditAgentes.porc_comision_entrega=e),t[39]||(t[39]=e=>H.formEditAgentes.porc_comision_entrega=H.formEditAgentes.porc_comision_entrega.toUpperCase())],label:"% Comisión por Entrega","input-class":"text-right",hint:"","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"percent"})])),_:1},8,["modelValue"])),[[he,H.money]])]),(0,s._)("div",M,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(K,{outlined:"",modelValue:H.formEditAgentes.porc_comision_seguro,"onUpdate:modelValue":[t[40]||(t[40]=e=>H.formEditAgentes.porc_comision_seguro=e),t[41]||(t[41]=e=>H.formEditAgentes.porc_comision_seguro=H.formEditAgentes.porc_comision_seguro.toUpperCase())],label:"% Comisión por Seguro","input-class":"text-right",hint:"","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"percent"})])),_:1},8,["modelValue"])),[[he,H.money]])])])])),_:1})])),_:1})]),(0,s._)("div",k,[(0,s.Wm)(te,{label:"Editar Cuenta",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(te,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[Ae]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",Z,[(0,s._)("div",z,[(0,s._)("div",I,[N,(0,s._)("div",R,[(0,s.Wm)(J,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:H.agenciasSelected,onFilter:t[44]||(t[44]=(e,t,a)=>G.filterArray(e,t,a,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:H.selectedAgencia,"onUpdate:modelValue":[t[45]||(t[45]=e=>H.selectedAgencia=e),t[46]||(t[46]=e=>G.getDataAgentes("/agentes","setDataTable","agentes"))],outlined:"",standout:"",label:"Escoge una Agencia"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(ie,null,{default:(0,s.w5)((()=>[(0,s.Wm)(oe,{class:"text-grey"},{default:(0,s.w5)((()=>[T])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",P,[(0,s.Wm)(K,{rounded:"",outlined:"",standout:"",modelValue:L.filter,"onUpdate:modelValue":t[47]||(t[47]=e=>L.filter=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Y,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",B,[(0,s.Wm)(te,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:t[48]||(t[48]=e=>L.form=!0),onClickCapture:t[49]||(t[49]=e=>G.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,s._)("div",Q,[(0,s._)("div",O,[(0,s._)("div",j,[(0,s.Wm)(ce,{rows:H.agentes,"binary-state-sort":"","row-key":"id",columns:H.columnsAgentes,separator:L.separator,"rows-per-page-options":[5,10,15,20,50],onRequest:G.onRequest,filter:L.filter,style:{width:"100%"},loading:L.loading,grid:e.$q.screen.xs,pagination:L.pagination,"onUpdate:pagination":t[52]||(t[52]=e=>L.pagination=e)},{loading:(0,s.w5)((()=>[(0,s.Wm)(re,{showing:"",color:"primary"})])),"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(ne,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(te,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{G.getDataEdit(`/agentes/${e.row.id}`,"setDataAgentesEdit","formEditAgentes"),L.formEdit=!0}},null,8,["disabled","onClick"]),(0,s.Wm)(te,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>H.selected=e.row.id,onClickCapture:t[50]||(t[50]=e=>L.agentesDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(ee,{class:(0,o.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(me,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(a=>((0,s.wg)(),(0,s.j4)(ie,{key:a.name},{default:(0,s.w5)((()=>[(0,s.Wm)(oe,null,{default:(0,s.w5)((()=>[(0,s.Wm)(le,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(a.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(oe,{side:""},{default:(0,s.w5)((()=>["status"===a.name?((0,s.wg)(),(0,s.j4)(de,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,s.wg)(),(0,s.j4)(te,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{G.getDataEdit(`/agentes/${e.row.id}`,"setDataAgentesEdit","formEditAgentes"),L.formEdit=!0}},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"status"===a.name?((0,s.wg)(),(0,s.j4)(de,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,s.wg)(),(0,s.j4)(te,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>H.selected=e.row.id,onClickCapture:t[51]||(t[51]=e=>L.agentesDelete=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(le,{key:4,caption:"",class:(0,o.C_)(a.classes?a.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(a.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","onRequest","filter","loading","grid","pagination"])])])])])]),(0,s.Wm)(se,{modelValue:L.agentesDelete,"onUpdate:modelValue":t[54]||(t[54]=e=>L.agentesDelete=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(ee,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(X,null,{default:(0,s.w5)((()=>[F])),_:1}),(0,s.Wm)(ge,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(te,{flat:"",label:"Cancelar",color:"primary"},null,512),[[Ae]]),(0,s.wy)((0,s.Wm)(te,{flat:"",label:"Aceptar",color:"primary",onClick:t[53]||(t[53]=e=>G.deleteData(H.selected))},null,512),[[Ae]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(pe,{ref:"desactivateCrud",onDesactivarCrud:G.desactivarCrud},null,8,["onDesactivarCrud"]),(0,s.Wm)(ue,{ref:"methods",onGetDataAgentes:t[55]||(t[55]=e=>G.getDataAgentes("/agentes","setDataTable","agentes")),onSetDataTable:G.setDataTable,onOnRequest:G.onRequest,onResetLoading:G.resetLoading,onSetDataAgentesEdit:G.setDataAgentesEdit,onSetData:G.setData},null,8,["onSetDataTable","onOnRequest","onResetLoading","onSetDataAgentesEdit","onSetData"]),(0,s.Wm)(_e,{ref:"rulesVue"},null,512)])),_:1})}a(65363),a(97768);var H=a(61959),G=(a(5474),a(51226)),Y=a(48825),K=(a(80589),a(31885)),J=a(55325),X=a(38015);const ee={directives:{money:K.VMoney},components:{"desactivate-crud":X.Z,methods:J.Z,VMoney:K.VMoney,rulesVue:G.Z},name:"Agentes",data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!0},columnsAgentes:[{name:"nb_agente",label:"Nombre",field:"nb_agente",align:"left",sortable:!0,required:!0},{name:"persona_responsable",label:"Persona Responsable",field:"persona_responsable",align:"left",sortable:!0,required:!0},{name:"tipo_desc",label:"Tipo de Agente",field:"tipo_desc",align:"left",sortable:!0,required:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formAgentes:{nb_agente:"",persona_responsable:"",dir_agente:"",tlf_agente:"",fax_agente:"",email_web:"",tipo_agente:"",flag_activo:"",rif_ci_agente:"",porc_comision_venta:"",porc_comision_entrega:"",porc_comision_seguro:"",cod_agencia:[]},formEditAgentes:{nb_agente:"",persona_responsable:"",dir_agente:"",tlf_agente:"",fax_agente:"",email_web:"",flag_activo:"",tipo_agente:"",rif_ci_agente:"",porc_comision_venta:"",porc_comision_entrega:"",porc_comision_seguro:"",cod_agencia:[],id:""},estatus:[{label:"ACTIVO",value:"1"},{label:"INACTIVO",value:"0"}],tipoDeAgente:[{label:"RESPONSABLE DE AGENCIA",value:"RP"},{label:"COURIERS",value:"CR"}],count:1,currentPage:1,agencias:[],agenciasSelected:[],agentes:[],selected:[],selectedAgencia:[],agenciaRef:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,Y.Z)(),(0,H.iH)(!1),(0,H.iH)(!1);const e=(0,H.iH)({descending:"",page:1,rowsPerPage:10,rowsNumber:""});return{pagination:e,anulate:(0,H.iH)(!1),loading:(0,H.iH)(!1),separator:(0,H.iH)("vertical"),form:(0,H.iH)(!1),formEdit:(0,H.iH)(!1),agentesDelete:(0,H.iH)(!1),filter:(0,H.iH)("")}},mounted(){this.getData("/agencias","setData","agencias"),this.$refs.desactivateCrud.desactivarCrud("c_agentes","r_agentes","u_agentes","d_agentes","desactivarCrud")},methods:{onRequest(e,t){if(1==this.count)this[t]=e.data,this.pagination.rowsNumber=e.total;else{let{page:t,rowsPerPage:i,sortBy:r,descending:n}=e.pagination;this.currentPage!==t&&(n="");e.filter;const l=0===i?this.pagination.rowsNumber:i;var a=t,s=l;if(r)var o=r;else o="";if("tipo_desc"==o)o="tipo_agente";if("activo_desc"==o)o="flag_activo";""!==n&&(this.pagination.descending=!this.pagination.descending,1==this.pagination.descending?this.headerOrder_direction="DESC":this.headerOrder_direction="ASC"),r&&(this.pagination.sortBy=r),this.pagination.page=t,this.pagination.rowsPerPage=i,this.getData("/agentes","setDataTable","agentes",{headers:{agencia:this.selectedAgencia.id,page:a,limit:s,order_direction:this.headerOrder_direction,order_by:o}})}this.count=0},setDataTable(e,t){this[t]=e.data,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},filterArray(e,t,a,s,o,i){t(""!==e?()=>{const t=e.toUpperCase();for(var a=[],r=0;r<=this[o].length-1;r++)if(this[o][r][i].indexOf(t)>-1&&a.push(this[o][r]),r==this[o].length-1){this[s]=a;break}}:()=>{this[s]=this[o]})},desactivarCrud(e,t,a,s){1==t?(1==e&&(this.disabledCreate=!1),1==a&&(this.disabledDelete=!1),1==s&&(this.disabledEdit=!1)):this.$router.push("/error403")},resetLoading(){this.loading=!1},getData(e,t,a,s){this.$refs.methods.getData(e,t,a,s)},getDataEdit(e,t,a){this.$refs.methods.getData(e,t,a)},getDataAgentes(e,t,a){this.$refs.methods.getData(e,t,a,{headers:{agencia:this.selectedAgencia.id,page:1,limit:10}}),this.loading=!0},setData(e,t){this[t]=e.data,this.agenciaRef=this.agencias[0].id,this.selectedAgencia=this.agencias[0],this.$refs.methods.getData("/agentes","onRequest","agentes",{headers:{agencia:this.agenciaRef,page:1,limit:10}}),this.loading=!1},filterSelect(e,t,a,s,o){var i=this[e].findIndex((e=>e[t]==a));i>=0?(console.log(this[s][o]),console.log(this[e][i]),this[s][o]=this[e][i]):this[s][o]={label:"",value:null}},setDataAgentesEdit(e,t){this[t].id=e.id,this.filterSelect("estatus","value",e.flag_activo,"formEditAgentes","flag_activo"),this[t].nb_agente=e.nb_agente,this[t].persona_responsable=e.persona_responsable,this[t].dir_agente=e.dir_agente,this[t].tlf_agente=e.tlf_agente,this[t].fax_agente=e.fax_agente,this[t].email_web=e.email_web,this[t].rif_ci_agente=e.rif_ci_agente,this[t].porc_comision_venta=e.porc_comision_venta,this[t].porc_comision_seguro=e.porc_comision_seguro,this[t].porc_comision_entrega=e.porc_comision_entrega,this.filterSelect("tipoDeAgente","value",e.tipo_agente,"formEditAgentes","tipo_agente"),this[t].cod_agencia=e.cod_agencia,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/agentes/${e}`,"getDataAgentes"),this.loading=!0},createDataCuentas(){this.formAgentes.porc_comision_venta=this.formAgentes.porc_comision_venta.replaceAll(".","").replaceAll(",","."),this.formAgentes.porc_comision_entrega=this.formAgentes.porc_comision_entrega.replaceAll(".","").replaceAll(",","."),this.formAgentes.porc_comision_seguro=this.formAgentes.porc_comision_seguro.replaceAll(".","").replaceAll(",","."),this.formAgentes.cod_agencia=this.selectedAgencia.id,this.formAgentes.tipo_agente=this.formAgentes.tipo_agente.value,this.formAgentes.flag_activo=this.formAgentes.flag_activo.value,this.$refs.methods.createData("/agentes",this.formAgentes,"getDataAgentes"),this.loading=!0,this.resetForm()},putDataCuentas(){this.formEditAgentes.porc_comision_venta=this.formEditAgentes.porc_comision_venta.replaceAll(".","").replaceAll(",","."),this.formEditAgentes.porc_comision_entrega=this.formEditAgentes.porc_comision_entrega.replaceAll(".","").replaceAll(",","."),this.formEditAgentes.porc_comision_seguro=this.formEditAgentes.porc_comision_seguro.replaceAll(".","").replaceAll(",","."),this.formEditAgentes.flag_activo=this.formEditAgentes.flag_activo.value,this.formEditAgentes.tipo_agente=this.formEditAgentes.tipo_agente.value,this.$refs.methods.putData(`/agentes/${this.formEditAgentes.id}`,this.formEditAgentes,"getDataAgentes"),this.loading=!0,this.resetFormEdit()},resetForm(){this.formAgentes.nb_agente="",this.formAgentes.persona_responsable="",this.formAgentes.dir_agente="",this.formAgentes.tlf_agente="",this.formAgentes.email_web="",this.formAgentes.tipo_agente="",this.formAgentes.rif_ci_agente="",this.formAgentes.porc_comision_venta="",this.formAgentes.flag_activo="",this.formAgentes.porc_comision_entrega="",this.formAgentes.porc_comision_seguro="",this.formAgentes.cod_agencia=null,this.form=!1},resetFormEdit(){this.formEditAgentes.nb_agente="",this.formEditAgentes.persona_responsable="",this.formEditAgentes.dir_agente="",this.formEditAgentes.tlf_agente="",this.formEditAgentes.email_web="",this.formEditAgentes.tipo_agente="",this.formEditAgentes.rif_ci_agente="",this.formEditAgentes.porc_comision_venta="",this.formEditAgentes.porc_comision_entrega="",this.formEditAgentes.porc_comision_seguro="",this.formEditAgentes.cod_agencia=null,this.formEdit=!1}}};var te=a(74260),ae=a(24379),se=a(46778),oe=a(10151),ie=a(25589),re=a(68689),ne=a(34842),le=a(24554),de=a(72448),me=a(48240),ce=a(83414),ge=a(52035),pe=a(17352),ue=a(66941),_e=a(83884),fe=a(27011),he=a(2350),Ae=a(67030),be=a(99367),ve=a(60677),we=a(7518),xe=a.n(we);const Ce=(0,te.Z)(ee,[["render",L]]),Ve=Ce;xe()(ee,"components",{QPage:ae.Z,QDialog:se.Z,QCard:oe.Z,QCardSection:ie.Z,QForm:re.Z,QInput:ne.Z,QIcon:le.Z,QSelect:de.Z,QBtn:me.Z,QItem:ce.Z,QItemSection:ge.Z,QTable:pe.Z,QInnerLoading:ue.Z,QTd:_e.Z,QList:fe.Z,QItemLabel:he.Z,QChip:Ae.Z,QCardActions:be.Z}),xe()(ee,"directives",{ClosePopup:ve.Z})}}]);