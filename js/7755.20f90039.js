"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[7755],{38015:(e,a,t)=>{function s(e,a,t,s,i,o){return null}t.d(a,{Z:()=>d});var i=t(80589),o=t(48825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,o.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,t,s,o){for(var r,n,l,d,m=i.Z.getItem("tokenTraducido"),c=0,p=m.usuario.roles.permisos.length;c<p;c++)if(m.usuario.roles.permisos[c].codigo===e&&(r=!0),m.usuario.roles.permisos[c].codigo===s&&(l=!0),m.usuario.roles.permisos[c].codigo===t&&(d=!0),m.usuario.roles.permisos[c].codigo===a&&(n=!0),c==m.usuario.roles.permisos.length.length-1)break;e=!0===r,s=!0===l,t=!0===d,a=!0===n,this.$emit(o,e,a,s,t)},desactivarOpciones(e){for(var a=i.Z.getItem("tokenTraducido"),t=0,s=this.permisos.length;t<s;t++){var o=0;for(s=a.usuario.roles.permisos.length;o<s;o++)if(a.usuario.roles.permisos[o].codigo==this.permisos[t].permisoName&&(this.permisos[t].permiso=!0),o==a.usuario.roles.permisos.length.length-1)break;if(t==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var n=t(74260);const l=(0,n.Z)(r,[["render",s]]),d=l},55325:(e,a,t)=>{function s(e,a,t,s,i,o){return null}t.d(a,{Z:()=>m});var i=t(80589),o=t(5474),r=t(48825);const n={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,s){void 0==s?s={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,s).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,a,t,s){void 0==s?s={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,s).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,a,t){void 0==t?t={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,t,s){void 0==s?s={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,t,s){void 0==s?s={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,a,s).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,a,t,s){void 0==s?s={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.put(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var l=t(74260);const d=(0,l.Z)(n,[["render",s]]),m=d},51226:(e,a,t)=>{function s(e,a,t,s,i,o){return null}t.d(a,{Z:()=>d});var i=t(61959),o=t(48825);const r={name:"rules",setup(){const e=(0,i.iH)(!1);(0,o.Z)();return{showSimulatedReturnData:e}},methods:{isReq(e,a){var t=!0;return null!=e&&""!=e.trim()||(t=a),t},isReqSelect(e,a){var t=!0;return null!=e&&e!=[]&&""!=e||(t=a),t},isMax(e,a,t){var s=!0;return""!==e&&null!==e&&e.length>a&&(s=t),s},isMin(e,a,t){var s=!0;return""!==e&&null!==e&&e.length<a?t:s}}};var n=t(74260);const l=(0,n.Z)(r,[["render",s]]),d=l},27755:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ne});var s=t(83673),i=t(62323);const o={class:"row"},r={class:"col-md-6 col-xs-12"},n={class:"col-md-6 col-xs-12"},l={class:"col-md-6 col-xs-12"},d={class:"col-md-6 col-xs-12"},m={class:"col-md-12 col-xs-12"},c={class:"col-md-12 col-xs-12"},p={class:"row"},u=(0,s._)("div",{class:"col-md-12 col-xs-12",style:{"align-self":"center","text-align":"left","margin-top":"-30px"}},[(0,s._)("h4",{style:{"font-size":"20px"},class:"text-secondary"},[(0,s._)("strong",null,"IDENTIFICACIÓN Y COMISIONES")])],-1),g={class:"col-md-6 col-xs-12"},h={class:"col-md-6 col-xs-12"},_={class:"col-md-4 col-xs-12"},f={class:"col-md-4 col-xs-12"},b={class:"col-md-4 col-xs-12"},v={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},w={class:"row q-pa-sm justify-center"},x={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},C={class:"q-pa-md row",style:{"margin-top":"2px"}},y=(0,s._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 text-secondary movilTitle",style:{"align-self":"center","text-align":"center","font-size":"20px"}},[(0,s._)("p",null,[(0,s._)("strong",null,"MANTENIMIENTO - AGENTES")])],-1),S={class:"col-md-5 col-xl-5 col-lg-5 col-xs-12 col-sm-6 cardMargin selectMobile",style:{"align-self":"center","text-align":"center"}},D=(0,s.Uk)(" Sin resultados "),V={class:"col-md-5 col-xl-5 col-lg-5 col-xs-12 col-sm-6 cardMarginFilter",style:{"align-self":"center","text-align":"center"}},A={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},q={class:"q-pa-md my-card row",bordered:"",flat:"",style:{"margin-top":"2px"}},$=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function W(e,a,t,W,k,Z){const I=(0,s.up)("q-icon"),N=(0,s.up)("q-input"),E=(0,s.up)("q-select"),M=(0,s.up)("q-card-section"),U=(0,s.up)("q-card"),z=(0,s.up)("q-btn"),R=(0,s.up)("q-form"),T=(0,s.up)("q-dialog"),P=(0,s.up)("q-item-section"),B=(0,s.up)("q-item"),Q=(0,s.up)("q-inner-loading"),F=(0,s.up)("q-td"),L=(0,s.up)("q-item-label"),j=(0,s.up)("q-chip"),O=(0,s.up)("q-list"),H=(0,s.up)("q-table"),G=(0,s.up)("q-card-actions"),Y=(0,s.up)("desactivate-crud"),K=(0,s.up)("methods"),J=(0,s.up)("rules-vue"),X=(0,s.up)("q-page"),ee=(0,s.Q2)("money"),ae=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(X,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{modelValue:W.formDialog,"onUpdate:modelValue":a[21]||(a[21]=e=>W.formDialog=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(M,null,{default:(0,s.w5)((()=>[(0,s.Wm)(R,{onSubmit:a[20]||(a[20]=e=>Z.sendData()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("div",r,[(0,s.Wm)(N,{outlined:"",modelValue:k.form.nb_agente,"onUpdate:modelValue":[a[0]||(a[0]=e=>k.form.nb_agente=e),a[1]||(a[1]=e=>k.form.nb_agente=k.form.nb_agente.toUpperCase())],label:"Nombre de Agente",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Valor Requerido"),e=>this.$refs.rulesVue.isMax(e,25,"Maximo 25 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",n,[(0,s.Wm)(N,{outlined:"",modelValue:k.form.fax_agente,"onUpdate:modelValue":[a[2]||(a[2]=e=>k.form.fax_agente=e),a[3]||(a[3]=e=>k.form.fax_agente=k.form.fax_agente.toUpperCase())],label:"Fax",hint:"",mask:"#### - ##########","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",l,[(0,s.Wm)(N,{outlined:"",modelValue:k.form.persona_responsable,"onUpdate:modelValue":[a[4]||(a[4]=e=>k.form.persona_responsable=e),a[5]||(a[5]=e=>k.form.persona_responsable=k.form.persona_responsable.toUpperCase())],label:"Persona Responsable",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"contact_phone"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",d,[(0,s.Wm)(E,{outlined:"",modelValue:k.form.flag_activo,"onUpdate:modelValue":a[6]||(a[6]=e=>k.form.flag_activo=e),label:"Activo",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Valor Requerido")||""],options:k.estatus,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",m,[(0,s.Wm)(N,{outlined:"",modelValue:k.form.dir_agente,"onUpdate:modelValue":[a[7]||(a[7]=e=>k.form.dir_agente=e),a[8]||(a[8]=e=>k.form.dir_agente=k.form.dir_agente.toUpperCase())],label:"Dirección",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,100,"Maximo 100 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",c,[(0,s.Wm)(N,{outlined:"",modelValue:k.form.email_web,"onUpdate:modelValue":[a[9]||(a[9]=e=>k.form.email_web=e),a[10]||(a[10]=e=>k.form.email_web=k.form.email_web.toUpperCase())],label:"Email",hint:"",type:"email","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,100,"Maximo 100 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"email"})])),_:1},8,["modelValue","rules"])]),(0,s.Wm)(U,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw","margin-bottom":"20px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(M,null,{default:(0,s.w5)((()=>[(0,s._)("div",p,[u,(0,s._)("div",g,[(0,s.Wm)(N,{outlined:"",modelValue:k.form.rif_ci_agente,"onUpdate:modelValue":[a[11]||(a[11]=e=>k.form.rif_ci_agente=e),a[12]||(a[12]=e=>k.form.rif_ci_agente=k.form.rif_ci_agente.toUpperCase())],label:"RIF/CI",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,20,"Maximo 20 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"account_box"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",h,[(0,s.Wm)(E,{outlined:"",modelValue:k.form.tipo_agente,"onUpdate:modelValue":a[13]||(a[13]=e=>k.form.tipo_agente=e),label:"Tipo de Agente",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Valor Requerido")||""],options:k.tipoDeAgente,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"face"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",_,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(N,{outlined:"",modelValue:k.form.porc_comision_venta,"onUpdate:modelValue":[a[14]||(a[14]=e=>k.form.porc_comision_venta=e),a[15]||(a[15]=e=>k.form.porc_comision_venta=k.form.porc_comision_venta.toUpperCase())],label:"% Comisión por Venta","input-class":"text-right",hint:"",class:"pcform","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"percent"})])),_:1},8,["modelValue"])),[[ee,k.money]])]),(0,s._)("div",f,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(N,{outlined:"",class:"pcform",modelValue:k.form.porc_comision_entrega,"onUpdate:modelValue":[a[16]||(a[16]=e=>k.form.porc_comision_entrega=e),a[17]||(a[17]=e=>k.form.porc_comision_entrega=k.form.porc_comision_entrega.toUpperCase())],label:"% Comisión por Entrega","input-class":"text-right",hint:"","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"percent"})])),_:1},8,["modelValue"])),[[ee,k.money]])]),(0,s._)("div",b,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(N,{outlined:"",modelValue:k.form.porc_comision_seguro,"onUpdate:modelValue":[a[18]||(a[18]=e=>k.form.porc_comision_seguro=e),a[19]||(a[19]=e=>k.form.porc_comision_seguro=k.form.porc_comision_seguro.toUpperCase())],label:"% Comisión por Seguro","input-class":"text-right",hint:"","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"percent"})])),_:1},8,["modelValue"])),[[ee,k.money]])])])])),_:1})])),_:1})]),(0,s._)("div",v,[(0,s.Wm)(z,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[ae]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",w,[(0,s._)("div",x,[(0,s._)("div",C,[y,(0,s._)("div",S,[(0,s.Wm)(E,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:k.agenciasSelected,onFilter:a[22]||(a[22]=(e,a,t)=>Z.filterArray(e,a,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:k.selectedAgencia,"onUpdate:modelValue":[a[23]||(a[23]=e=>k.selectedAgencia=e),a[24]||(a[24]=e=>Z.getDataTable("/agentes","setDataTable","agentes"))],outlined:"",standout:"",label:"Escoge una Agencia"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(B,null,{default:(0,s.w5)((()=>[(0,s.Wm)(P,{class:"text-grey"},{default:(0,s.w5)((()=>[D])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",V,[(0,s.Wm)(N,{rounded:"",outlined:"",standout:"",modelValue:W.filter,"onUpdate:modelValue":a[25]||(a[25]=e=>W.filter=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(I,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",A,[(0,s.Wm)(z,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:a[26]||(a[26]=e=>W.formDialog=!0),onClickCapture:a[27]||(a[27]=e=>Z.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,s._)("div",q,[(0,s.Wm)(H,{rows:k.agentes,"binary-state-sort":"","row-key":"id",columns:k.columns,separator:W.separator,"rows-per-page-options":[5,10,15,20,50],onRequest:Z.onRequest,filter:W.filter,style:{width:"100%"},loading:W.loading,grid:e.$q.screen.xs,pagination:W.pagination,"onUpdate:pagination":a[30]||(a[30]=e=>W.pagination=e)},{loading:(0,s.w5)((()=>[(0,s.Wm)(Q,{showing:"",color:"primary"})])),"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(F,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(z,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{Z.getData(`/agentes/${e.row.id}`,"setDataEdit","form"),W.formDialog=!0}},null,8,["disabled","onClick"]),(0,s.Wm)(z,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>k.selected=e.row.id,onClickCapture:a[28]||(a[28]=e=>W.agentesDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(U,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(O,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(t=>((0,s.wg)(),(0,s.j4)(B,{key:t.name},{default:(0,s.w5)((()=>[(0,s.Wm)(P,null,{default:(0,s.w5)((()=>[(0,s.Wm)(L,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(P,{side:""},{default:(0,s.w5)((()=>["status"===t.name?((0,s.wg)(),(0,s.j4)(j,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,s.wg)(),(0,s.j4)(z,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{Z.getData(`/agentes/${e.row.id}`,"setDataEdit","form"),W.formDialog=!0}},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"status"===t.name?((0,s.wg)(),(0,s.j4)(j,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,s.wg)(),(0,s.j4)(z,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>k.selected=e.row.id,onClickCapture:a[29]||(a[29]=e=>W.agentesDelete=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(L,{key:4,caption:"",class:(0,i.C_)(t.classes?t.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","onRequest","filter","loading","grid","pagination"])])])]),(0,s.Wm)(T,{modelValue:W.agentesDelete,"onUpdate:modelValue":a[32]||(a[32]=e=>W.agentesDelete=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(M,null,{default:(0,s.w5)((()=>[$])),_:1}),(0,s.Wm)(G,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(z,{flat:"",label:"Cancelar",color:"primary"},null,512),[[ae]]),(0,s.wy)((0,s.Wm)(z,{flat:"",label:"Aceptar",color:"primary",onClick:a[31]||(a[31]=e=>Z.deleteData(k.selected))},null,512),[[ae]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(Y,{ref:"desactivateCrud",onDesactivarCrud:Z.desactivarCrud},null,8,["onDesactivarCrud"]),(0,s.Wm)(K,{ref:"methods",onGetDataTable:a[33]||(a[33]=e=>Z.getDataTable("/agentes","setDataTable","agentes")),onSetDataTable:Z.setDataTable,onOnRequest:Z.onRequest,onResetLoading:Z.resetLoading,onSetDataEdit:Z.setDataEdit,onSetDataInit:Z.setDataInit},null,8,["onSetDataTable","onOnRequest","onResetLoading","onSetDataEdit","onSetDataInit"]),(0,s.Wm)(J,{ref:"rulesVue"},null,512)])),_:1})}t(65363),t(97768);var k=t(61959),Z=t(51226),I=t(48825),N=t(31885),E=t(55325),M=t(38015);const U={directives:{money:N.VMoney},components:{"desactivate-crud":M.Z,methods:E.Z,VMoney:N.VMoney,rulesVue:Z.Z},name:"Agentes",data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!0},columns:[{name:"nb_agente",label:"Nombre",field:"nb_agente",align:"left",sortable:!0,required:!0},{name:"persona_responsable",label:"Persona Responsable",field:"persona_responsable",align:"left",sortable:!0,required:!0},{name:"tipo_desc",label:"Tipo de Agente",field:"tipo_desc",align:"left",sortable:!0,required:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nb_agente:"",persona_responsable:"",dir_agente:"",tlf_agente:"",fax_agente:"",email_web:"",tipo_agente:"",flag_activo:"",rif_ci_agente:"",porc_comision_venta:"",porc_comision_entrega:"",porc_comision_seguro:"",cod_agencia:[]},estatus:[{label:"ACTIVO",value:"1"},{label:"INACTIVO",value:"0"}],tipoDeAgente:[{label:"RESPONSABLE DE AGENCIA",value:"RP"},{label:"COURIERS",value:"CR"}],count:1,currentPage:1,agencias:[],agenciasSelected:[],agentes:[],selected:[],selectedAgencia:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,I.Z)(),(0,k.iH)(!1),(0,k.iH)(!1);const e=(0,k.iH)({descending:"",page:1,rowsPerPage:9,rowsNumber:""});return{pagination:e,anulate:(0,k.iH)(!1),loading:(0,k.iH)(!1),separator:(0,k.iH)("vertical"),formDialog:(0,k.iH)(!1),agentesDelete:(0,k.iH)(!1),filter:(0,k.iH)("")}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Agentes",""),this.getData("/agencias","setDataInit","agencias"),this.$refs.desactivateCrud.desactivarCrud("c_agentes","r_agentes","u_agentes","d_agentes","desactivarCrud")},methods:{onRequest(e,a){if(1==this.count)this[a]=e.data,this.pagination.rowsNumber=e.total;else{let{page:a,rowsPerPage:r,sortBy:n,descending:l}=e.pagination;this.currentPage!==a&&(l="");e.filter;const d=0===r?this.pagination.rowsNumber:r;var t=a,s="",i=d;if(n)var o=n;else o="";if("tipo_desc"==o)o="tipo_agente";if("activo_desc"==o)o="flag_activo";""!==l&&(this.pagination.descending=!this.pagination.descending,s=1==this.pagination.descending?"DESC":"ASC"),n&&(this.pagination.sortBy=n),this.pagination.page=a,this.pagination.rowsPerPage=r,this.getData("/agentes","setDataTable","agentes",{headers:{agencia:this.selectedAgencia.id,page:t,limit:i,order_direction:s,order_by:o}})}this.count=0},filterArray(e,a,t,s,i,o){a(""!==e?()=>{const a=e.toUpperCase();for(var t=[],r=0;r<=this[i].length-1;r++)if(this[i][r][o].indexOf(a)>-1&&t.push(this[i][r]),r==this[i].length-1){this[s]=t;break}}:()=>{this[s]=this[i]})},desactivarCrud(e,a,t,s){1==a?(1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==s&&(this.disabledEdit=!1)):this.$router.push("/error403")},resetLoading(){this.loading=!1},filterSelect(e,a,t,s,i){var o=this[e].findIndex((e=>e[a]==t));this[s][i]=o>=0?this[e][o]:{label:"",value:null}},setDataInit(e,a){this[a]=e.data,this.selectedAgencia=this.agencias[0],this.$refs.methods.getData("/agentes","onRequest","agentes",{headers:{agencia:this.agencias[0].id,page:1,limit:9}}),this.loading=!1},getData(e,a,t,s){this.$refs.methods.getData(e,a,t,s)},getDataTable(e,a,t){this.$refs.methods.getData(e,a,t,{headers:{agencia:this.selectedAgencia.id,page:1,limit:10}}),this.loading=!0},setDataTable(e,a){this[a]=e.data,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},setDataEdit(e,a){this[a].id=e.id,this.filterSelect("estatus","value",e.flag_activo,"form","flag_activo"),this[a].nb_agente=e.nb_agente,this[a].persona_responsable=e.persona_responsable,this[a].dir_agente=e.dir_agente,this[a].tlf_agente=e.tlf_agente,this[a].fax_agente=e.fax_agente,this[a].email_web=e.email_web,this[a].rif_ci_agente=e.rif_ci_agente,this[a].porc_comision_venta=e.porc_comision_venta,this[a].porc_comision_seguro=e.porc_comision_seguro,this[a].porc_comision_entrega=e.porc_comision_entrega,this.filterSelect("tipoDeAgente","value",e.tipo_agente,"form","tipo_agente"),this[a].cod_agencia=e.cod_agencia,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/agentes/${e}`,"getDataTable"),this.loading=!0},sendData(){this.form.porc_comision_venta=this.form.porc_comision_venta.replaceAll(".","").replaceAll(",","."),this.form.porc_comision_entrega=this.form.porc_comision_entrega.replaceAll(".","").replaceAll(",","."),this.form.porc_comision_seguro=this.form.porc_comision_seguro.replaceAll(".","").replaceAll(",","."),this.form.cod_agencia=this.selectedAgencia.id,this.form.tipo_agente=this.form.tipo_agente.value,this.form.flag_activo=this.form.flag_activo.value,this.form.id?(this.$refs.methods.putData(`/agentes/${this.form.id}`,this.form,"getDataTable"),this.loading=!0,this.resetForm()):(this.$refs.methods.createData("/agentes",this.form,"getDataTable"),this.loading=!0,this.resetForm())},resetForm(){delete this.form.id,this.form.nb_agente="",this.form.persona_responsable="",this.form.dir_agente="",this.form.tlf_agente="",this.form.email_web="",this.form.tipo_agente="",this.form.fax_agente="",this.form.rif_ci_agente="",this.form.porc_comision_venta="",this.form.flag_activo="",this.form.porc_comision_entrega="",this.form.porc_comision_seguro="",this.form.cod_agencia=null,this.formDialog=!1}}};var z=t(74260),R=t(24379),T=t(46778),P=t(10151),B=t(25589),Q=t(68689),F=t(34842),L=t(24554),j=t(72448),O=t(48240),H=t(83414),G=t(52035),Y=t(17352),K=t(66941),J=t(83884),X=t(27011),ee=t(2350),ae=t(67030),te=t(99367),se=t(60677),ie=t(7518),oe=t.n(ie);const re=(0,z.Z)(U,[["render",W]]),ne=re;oe()(U,"components",{QPage:R.Z,QDialog:T.Z,QCard:P.Z,QCardSection:B.Z,QForm:Q.Z,QInput:F.Z,QIcon:L.Z,QSelect:j.Z,QBtn:O.Z,QItem:H.Z,QItemSection:G.Z,QTable:Y.Z,QInnerLoading:K.Z,QTd:J.Z,QList:X.Z,QItemLabel:ee.Z,QChip:ae.Z,QCardActions:te.Z}),oe()(U,"directives",{ClosePopup:se.Z})}}]);