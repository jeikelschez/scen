(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[5815],{38015:(e,s,a)=>{"use strict";function t(e,s,a,t,i,o){return null}a.d(s,{Z:()=>d});var i=a(80589),o=a(48825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,o.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,s,a,t,o){for(var r,n,l,d,c=i.Z.getItem("tokenTraducido"),m=0,u=c.usuario.roles.permisos.length;m<u;m++)if(c.usuario.roles.permisos[m].codigo===e&&(r=!0),c.usuario.roles.permisos[m].codigo===t&&(l=!0),c.usuario.roles.permisos[m].codigo===a&&(d=!0),c.usuario.roles.permisos[m].codigo===s&&(n=!0),m==c.usuario.roles.permisos.length.length-1)break;e=!0===r,t=!0===l,a=!0===d,s=!0===n,this.$emit(o,e,s,t,a)},desactivarOpciones(e){for(var s=i.Z.getItem("tokenTraducido"),a=0,t=this.permisos.length;a<t;a++){var o=0;for(t=s.usuario.roles.permisos.length;o<t;o++)if(s.usuario.roles.permisos[o].codigo==this.permisos[a].permisoName&&(this.permisos[a].permiso=!0),o==s.usuario.roles.permisos.length.length-1)break;if(a==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var n=a(74260);const l=(0,n.Z)(r,[["render",t]]),d=l},55325:(e,s,a)=>{"use strict";function t(e,s,a,t,i,o){return null}a.d(s,{Z:()=>c});var i=a(80589),o=a(5474),r=a(48825);const n={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,s,a,t){void 0==t?t={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,t).then((e=>{this.$emit(s,e.data,a)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,s,a,t){void 0==t?t={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,t).then((e=>{this.$emit(s,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,s,a){void 0==a?a={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api["delete"](e,a).then((e=>{(e.status=200)&&(this.$emit(s),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,s,a,t){void 0==t?t={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,s,t).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,s,a,t){void 0==t?t={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,s,t).then((e=>{(e.status=200)&&this.$emit(a,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,s,a,t){void 0==t?t={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.put(e,s,t).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var l=a(74260);const d=(0,l.Z)(n,[["render",t]]),c=d},92687:(e,s,a)=>{"use strict";function t(e,s,a,t,i,o){return null}a.d(s,{Z:()=>m});var i=a(61959),o=a(48825),r=a(11488),n=a.n(r);const l={name:"rules",setup(){const e=(0,i.iH)(!1);(0,o.Z)();return{showSimulatedReturnData:e}},methods:{isReq(e,s){var a=!0;return null!=e&&""!=e.trim()||(a=s),a},isReqSelect(e,s){var a=!0;return null!=e&&e!=[]&&""!=e||(a=s),a},isMax(e,s,a){console.log(e);var t=!0;return""!==e&&null!==e&&e.length>s&&(t=a),t},isMin(e,s,a){var t=!0;return""!==e&&null!==e&&e.length<s?a:t},checkDate(e){var s=!0;return 0==n()(e,"DD/MM/YYYY",!0)._isValid&&(s=!1),s}}};var d=a(74260);const c=(0,d.Z)(l,[["render",t]]),m=c},97418:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>oe});var t=a(83673),i=a(62323);const o={class:"row"},r={class:"col-md-3 col-xs-12"},n={class:"col-md-4 col-xs-12"},l={class:"col-md-5 col-xs-12"},d={class:"col-md-4 col-xs-12"},c={class:"col-md-4 col-xs-12"},m={class:"col-md-4 col-xs-12"},u={class:"col-md-6 col-xs-12"},p={class:"col-md-6 col-xs-12"},h={class:"col-md-6 col-xs-12"},g={class:"row items-center justify-end"},f={class:"col-md-6 col-xs-12"},_={class:"row items-center justify-end"},b={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},j={class:"q-pa-sm justify-center"},v={class:"row q-pa-md justify-end"},y=(0,t._)("div",{class:"col-md-4 col-xs-12 text-secondary movilTitle",style:{"align-self":"center","text-align":"center","font-size":"20px"}},[(0,t._)("p",null,[(0,t._)("strong",null,"MANTENIMIENTO - RETENCIONES")])],-1),w={class:"col-md-5 col-sm-7 col-xs-12 cardMargin selectMobile",style:{"align-self":"center"}},k={class:"col-md-2 col-sm-4 col-xs-12",style:{"text-align":"center","align-self":"center"}},C={class:"q-pa-md q-gutter-y-md"},q=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function V(e,s,a,V,D,x){const S=(0,t.up)("q-icon"),$=(0,t.up)("q-input"),z=(0,t.up)("q-select"),Z=(0,t.up)("q-btn"),W=(0,t.up)("q-date"),R=(0,t.up)("q-popup-proxy"),M=(0,t.up)("q-form"),A=(0,t.up)("q-card-section"),N=(0,t.up)("q-card"),P=(0,t.up)("q-dialog"),E=(0,t.up)("q-inner-loading"),U=(0,t.up)("q-td"),I=(0,t.up)("q-item-label"),T=(0,t.up)("q-item-section"),Q=(0,t.up)("q-chip"),B=(0,t.up)("q-item"),L=(0,t.up)("q-list"),F=(0,t.up)("q-table"),Y=(0,t.up)("q-card-actions"),H=(0,t.up)("methods"),O=(0,t.up)("desactivate-crud"),G=(0,t.up)("rules-vue"),J=(0,t.up)("q-page"),K=(0,t.Q2)("money"),X=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(J,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{modelValue:V.dialog,"onUpdate:modelValue":s[16]||(s[16]=e=>V.dialog=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{onSubmit:x.sendData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t._)("div",r,[(0,t.Wm)($,{outlined:"",modelValue:D.form.cod_tipo_retencion,"onUpdate:modelValue":s[0]||(s[0]=e=>D.form.cod_tipo_retencion=e),label:"Codigo",hint:"","lazy-rules":"",class:"pcform",type:"number",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,2,"Maximo 2 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",n,[(0,t.Wm)(z,{outlined:"",modelValue:D.form.cod_tipo_persona,"onUpdate:modelValue":s[1]||(s[1]=e=>D.form.cod_tipo_persona=e),label:"Tipo Persona",hint:"",class:"pcform",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],options:D.tipo_persona,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"group"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",l,[(0,t.Wm)($,{outlined:"",modelValue:D.form.nb_tipo_retencion,"onUpdate:modelValue":[s[2]||(s[2]=e=>D.form.nb_tipo_retencion=e),s[3]||(s[3]=e=>D.form.nb_tipo_retencion=D.form.nb_tipo_retencion.toUpperCase())],label:"Descripción",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",d,[(0,t.wy)(((0,t.wg)(),(0,t.j4)($,{outlined:"",modelValue:D.form.porc_base,"onUpdate:modelValue":s[4]||(s[4]=e=>D.form.porc_base=e),label:"Porcentaje Base",hint:"",class:"pcform","input-class":"text-right","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,12,"Maximo 12 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])),[[K,D.money]])]),(0,t._)("div",c,[(0,t.wy)(((0,t.wg)(),(0,t.j4)($,{outlined:"",modelValue:D.form.porc_retencion,"onUpdate:modelValue":s[5]||(s[5]=e=>D.form.porc_retencion=e),label:"Porcentaje Retención",hint:"","lazy-rules":"","input-class":"text-right",class:"pcform",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,12,"Maximo 12 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])),[[K,D.money]])]),(0,t._)("div",m,[(0,t.wy)(((0,t.wg)(),(0,t.j4)($,{outlined:"",modelValue:D.form.pago_mayor,"onUpdate:modelValue":s[6]||(s[6]=e=>D.form.pago_mayor=e),label:"Monto",hint:"","input-class":"text-right","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,12,"Maximo 12 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])),[[K,D.money]])]),(0,t._)("div",u,[(0,t.wy)(((0,t.wg)(),(0,t.j4)($,{outlined:"",modelValue:D.form.sustraendo,"onUpdate:modelValue":s[7]||(s[7]=e=>D.form.sustraendo=e),label:"Sustraendo",hint:"","lazy-rules":"",class:"pcform","input-class":"text-right",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,12,"Maximo 12 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])),[[K,D.money]])]),(0,t._)("div",p,[(0,t.Wm)($,{outlined:"",modelValue:D.form.cod_seniat,"onUpdate:modelValue":[s[8]||(s[8]=e=>D.form.cod_seniat=e),s[9]||(s[9]=e=>D.form.cod_seniat=D.form.cod_seniat.toUpperCase())],label:"Codigo SENIAT",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,3,"Maximo 3 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",h,[(0,t.Wm)($,{outlined:"",label:"Fecha de Validez Inicial",hint:"",modelValue:D.form.fecha_ini_val,"onUpdate:modelValue":s[12]||(s[12]=e=>D.form.fecha_ini_val=e),mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e,"")||""],class:"pcform","lazy-rules":""},{append:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{ref:"qDateProxy",cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{modelValue:D.form.fecha_ini_val,"onUpdate:modelValue":[s[10]||(s[10]=e=>D.form.fecha_ini_val=e),s[11]||(s[11]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY"},{default:(0,t.w5)((()=>[(0,t._)("div",g,[(0,t.wy)((0,t.Wm)(Z,{label:"Close",color:"primary",flat:""},null,512),[[X]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",f,[(0,t.Wm)($,{outlined:"",label:"Fecha de Validez Final",hint:"",modelValue:D.form.fecha_fin_val,"onUpdate:modelValue":s[15]||(s[15]=e=>D.form.fecha_fin_val=e),mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e,"")||""],"lazy-rules":""},{append:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{ref:"qDateProxy",cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{modelValue:D.form.fecha_fin_val,"onUpdate:modelValue":[s[13]||(s[13]=e=>D.form.fecha_fin_val=e),s[14]||(s[14]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY"},{default:(0,t.w5)((()=>[(0,t._)("div",_,[(0,t.wy)((0,t.Wm)(Z,{label:"Close",color:"primary",flat:""},null,512),[[X]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",b,[(0,t.Wm)(Z,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(Z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[X]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",j,[(0,t._)("div",v,[y,(0,t._)("div",w,[(0,t.Wm)($,{modelValue:V.filter,"onUpdate:modelValue":s[17]||(s[17]=e=>V.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(S,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",k,[(0,t.Wm)(Z,{label:"Insertar Retención",rounded:"",color:"primary",onClick:s[18]||(s[18]=e=>{V.dialog=!0,this.resetForm()}),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,t._)("div",C,[(0,t.Wm)(F,{rows:D.datos,"binary-state-sort":"","rows-per-page-options":[5,10,15,20,50],onRequest:x.onRequest,"row-key":"id",loading:V.loading,columns:D.columns,separator:V.separator,filter:V.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:V.pagination,"onUpdate:pagination":s[21]||(s[21]=e=>V.pagination=e)},{loading:(0,t.w5)((()=>[(0,t.Wm)(E,{showing:"",color:"primary"})])),"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(U,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:s=>{x.getData(`/mretenciones/${e.row.id}`,"setDataEdit","form"),V.dialog=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(Z,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:s=>D.selected=e.row.id,onClickCapture:s[19]||(s[19]=e=>V.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(N,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(a=>((0,t.wg)(),(0,t.j4)(B,{key:a.name},{default:(0,t.w5)((()=>[(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Wm)(I,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(a.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(T,{side:""},{default:(0,t.w5)((()=>["status"===a.name?((0,t.wg)(),(0,t.j4)(Q,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,t.wg)(),(0,t.j4)(Z,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:s=>{x.getData(`/mretenciones/${e.row.id}`,"setDataEdit","form"),V.dialog=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"status"===a.name?((0,t.wg)(),(0,t.j4)(Q,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,t.wg)(),(0,t.j4)(Z,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:s=>D.selected=e.row.id,onClickCapture:s[20]||(s[20]=e=>V.deletePopup=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(I,{key:4,caption:"",class:(0,i.C_)(a.classes?a.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(a.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","onRequest","loading","columns","separator","filter","grid","pagination"])])]),(0,t.Wm)(P,{modelValue:V.deletePopup,"onUpdate:modelValue":s[23]||(s[23]=e=>V.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[q])),_:1}),(0,t.Wm)(Y,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(Z,{flat:"",label:"Cancelar",color:"primary"},null,512),[[X]]),(0,t.wy)((0,t.Wm)(Z,{flat:"",label:"Aceptar",color:"primary",onClick:s[22]||(s[22]=e=>x.deleteData(D.selected))},null,512),[[X]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(H,{ref:"methods",onGetDataRetenciones:s[24]||(s[24]=e=>x.getDataRetenciones("/mretenciones","setDataTable","datos")),onResetLoading:x.resetLoading,onSetDataEdit:x.setDataEdit,onSetDataTable:x.setDataTable,onOnRequest:x.onRequest},null,8,["onResetLoading","onSetDataEdit","onSetDataTable","onOnRequest"]),(0,t.Wm)(O,{ref:"desactivateCrud",onDesactivarCrud:x.desactivarCrud},null,8,["onDesactivarCrud"]),(0,t.Wm)(G,{ref:"rulesVue"},null,512)])),_:1})}a(65363),a(97768);var D=a(61959),x=a(48825),S=a(92687),$=a(31885),z=a(55325),Z=a(38015);const W={directives:{money:$.VMoney},components:{"desactivate-crud":Z.Z,methods:z.Z,VMoney:$.VMoney,rulesVue:S.Z},data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!0},columns:[{name:"cod_tipo_retencion",label:"Codigo",field:"cod_tipo_retencion",align:"left",sortable:!0,required:!0},{name:"nb_tipo_retencion",label:"Descripción",field:"nb_tipo_retencion",align:"left",sortable:!0,required:!0},{name:"porc_retencion",label:"Retención",field:"porc_retencion",align:"left",sortable:!0,required:!0},{name:"pago_mayor",label:"Monto",field:"pago_mayor",align:"left",sortable:!0,required:!0},{name:"sustraendo",label:"Sustraendo",field:"sustraendo",align:"left",sortable:!0,required:!0},{name:"tipo_persona_desc",label:"Tipo de Persona",field:"tipo_persona_desc",align:"left",sortable:!0,required:!0},{name:"fecha_fin_val",label:"Valido Hasta",field:"fecha_fin_val",align:"left",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{cod_tipo_persona:"",cod_tipo_retencion:"",nb_tipo_retencion:"",porc_base:"",porc_retencion:"",pago_mayor:"",sustraendo:"",cod_seniat:"",fecha_ini_val:"",fecha_fin_val:""},datos:[],count:1,currentPage:1,tipo_persona:[{label:"JURÍDICA",value:"J"},{label:"NATURAL",value:"N"}],selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,x.Z)(),(0,D.iH)(!1),(0,D.iH)(!1);const e=(0,D.iH)({descending:"",page:1,rowsPerPage:8,rowsNumber:""});return{pagination:e,anulate:(0,D.iH)(!1),separator:(0,D.iH)("vertical"),dialog:(0,D.iH)(!1),loading:(0,D.iH)(!1),deletePopup:(0,D.iH)(!1),filter:(0,D.iH)("")}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Retenciones",""),this.getDataRetenciones("/mretenciones","onRequest","datos"),this.$refs.desactivateCrud.desactivarCrud("c_retenciones","r_retenciones","u_retenciones","d_retenciones","desactivarCrud")},methods:{onRequest(e,s){if(1==this.count)this.loading=!1,this[s]=e.data,this.pagination.rowsNumber=e.total;else{let{page:s,rowsPerPage:r,sortBy:n,descending:l}=e.pagination;this.currentPage!==s&&(l="");e.filter;const d=0===r?this.pagination.rowsNumber:r;var a=s,t="",i=d;if(n)var o=n;else o="";""!==l&&(this.pagination.descending=!this.pagination.descending,t=1==this.pagination.descending?"DESC":"ASC"),n&&(this.pagination.sortBy=n),this.pagination.page=s,this.pagination.rowsPerPage=r,this.getData("/mretenciones","setDataTable","datos",{headers:{page:a,limit:i,order_direction:t,order_by:o}})}this.count=0},setDataTable(e,s){this[s]=e.data,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},resetLoading(){this.loading=!1},desactivarCrud(e,s,a,t){1==s?(1==e&&(this.disabledCreate=!1),1==a&&(this.disabledDelete=!1),1==t&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,s,a,t){this.$refs.methods.getData(e,s,a,t)},getDataRetenciones(e,s,a){this.$refs.methods.getData(e,s,a,{headers:{page:1,limit:8}}),this.loading=!0},setDataEdit(e,s){this.loading=!1,this.form.id=e.id,this.form.cod_tipo_persona=e.tipo_persona_desc,this.form.cod_tipo_retencion=e.cod_tipo_retencion,this.form.nb_tipo_retencion=e.nb_tipo_retencion,this.form.porc_base=e.porc_base,this.form.porc_retencion=e.porc_retencion,this.form.pago_mayor=e.pago_mayor,this.form.sustraendo=e.sustraendo,this.form.cod_seniat=e.cod_seniat,e.fecha_ini_val&&(this.form.fecha_ini_val=e.fecha_ini_val.split("-").reverse().join("/")),e.fecha_fin_val&&(this.form.fecha_fin_val=e.fecha_fin_val.split("-").reverse().join("/"))},deleteData(e){this.$refs.methods.deleteData(`/mretenciones/${e}`,"getDataRetenciones"),this.loading=!0},sendData(){this.form.fecha_ini_val=this.form.fecha_ini_val.split("/").reverse().join("-"),this.form.fecha_fin_val=this.form.fecha_fin_val.split("/").reverse().join("-"),this.form.porc_base=this.form.porc_base.replaceAll(".","").replaceAll(",","."),this.form.porc_retencion=this.form.porc_retencion.replaceAll(".","").replaceAll(",","."),this.form.pago_mayor=this.form.pago_mayor.replaceAll(".","").replaceAll(",","."),this.form.sustraendo=this.form.sustraendo.replaceAll(".","").replaceAll(",","."),this.form.cod_tipo_persona=this.form.cod_tipo_persona.value,this.form.id?(this.$refs.methods.putData(`/mretenciones/${this.form.id}`,this.form,"getDataRetenciones"),this.dialog=!1,this.resetForm(),this.loading=!0):(this.$refs.methods.createData("/mretenciones",this.form,"getDataRetenciones"),this.resetForm(),this.loading=!0,this.dialog=!1)},resetForm(){delete this.form.id,this.form.cod_tipo_persona="",this.form.cod_tipo_retencion="",this.form.nb_tipo_retencion="",this.form.porc_base="",this.form.porc_retencion="",this.form.pago_mayor="",this.form.cod_seniat="",this.form.sustraendo="",this.form.fecha_ini_val="",this.form.fecha_fin_val=""}}};var R=a(74260),M=a(24379),A=a(46778),N=a(10151),P=a(25589),E=a(68689),U=a(34842),I=a(24554),T=a(72448),Q=a(83944),B=a(85626),L=a(48240),F=a(17352),Y=a(66941),H=a(83884),O=a(27011),G=a(83414),J=a(52035),K=a(2350),X=a(67030),ee=a(99367),se=a(60677),ae=a(7518),te=a.n(ae);const ie=(0,R.Z)(W,[["render",V]]),oe=ie;te()(W,"components",{QPage:M.Z,QDialog:A.Z,QCard:N.Z,QCardSection:P.Z,QForm:E.Z,QInput:U.Z,QIcon:I.Z,QSelect:T.Z,QPopupProxy:Q.Z,QDate:B.Z,QBtn:L.Z,QTable:F.Z,QInnerLoading:Y.Z,QTd:H.Z,QList:O.Z,QItem:G.Z,QItemSection:J.Z,QItemLabel:K.Z,QChip:X.Z,QCardActions:ee.Z}),te()(W,"directives",{ClosePopup:se.Z})},46700:(e,s,a)=>{var t={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function i(e){var s=o(e);return a(s)}function o(e){if(!a.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=o,e.exports=i,i.id=46700}}]);