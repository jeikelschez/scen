(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[7962],{38015:(e,o,s)=>{"use strict";function i(e,o,s,i,a,r){return null}s.d(o,{Z:()=>d});var a=s(80589),r=s(48825);const t={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,r.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,o,s,i,r){for(var t,n,l,d,c=a.Z.getItem("tokenTraducido"),m=0,p=c.usuario.roles.permisos.length;m<p;m++)if(c.usuario.roles.permisos[m].codigo===e&&(t=!0),c.usuario.roles.permisos[m].codigo===i&&(l=!0),c.usuario.roles.permisos[m].codigo===s&&(d=!0),c.usuario.roles.permisos[m].codigo===o&&(n=!0),m==c.usuario.roles.permisos.length.length-1)break;e=!0===t,i=!0===l,s=!0===d,o=!0===n,this.$emit(r,e,o,i,s)},desactivarOpciones(e){for(var o=a.Z.getItem("tokenTraducido"),s=0,i=this.permisos.length;s<i;s++){var r=0;for(i=o.usuario.roles.permisos.length;r<i;r++)if(o.usuario.roles.permisos[r].codigo==this.permisos[s].permisoName&&(this.permisos[s].permiso=!0),r==o.usuario.roles.permisos.length.length-1)break;if(s==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var n=s(74260);const l=(0,n.Z)(t,[["render",i]]),d=l},55325:(e,o,s)=>{"use strict";function i(e,o,s,i,a,r){return null}s.d(o,{Z:()=>c});var a=s(80589),r=s(5474),t=s(48825);const n={name:"userLogout",data:function(){return{}},setup(){const e=(0,t.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,o,s,i){void 0==i?i={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:i.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,r.api.get(e,i).then((e=>{this.$emit(o,e.data,s)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,o,s,i){void 0==i?i={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:i.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,r.api.get(e,i).then((e=>{this.$emit(o,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,o,s){void 0==s?s={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,r.api["delete"](e,s).then((e=>{(e.status=200)&&(this.$emit(o),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,o,s,i){void 0==i?i={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:i.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,r.api.post(e,o,i).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,o,s,i){void 0==i?i={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:i.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,r.api.post(e,o,i).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,o,s,i){void 0==i?i={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:i.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,r.api.put(e,o,i).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var l=s(74260);const d=(0,l.Z)(n,[["render",i]]),c=d},92687:(e,o,s)=>{"use strict";function i(e,o,s,i,a,r){return null}s.d(o,{Z:()=>m});var a=s(61959),r=s(48825),t=s(11488),n=s.n(t);const l={name:"rules",setup(){const e=(0,a.iH)(!1);(0,r.Z)();return{showSimulatedReturnData:e}},methods:{isReq(e,o){var s=!0;return null!=e&&""!=e.trim()||(s=o),s},isReqSelect(e,o){var s=!0;return null!=e&&e!=[]&&""!=e||(s=o),s},isMax(e,o,s){console.log(e);var i=!0;return""!==e&&null!==e&&e.length>o&&(i=s),i},isMin(e,o,s){var i=!0;return""!==e&&null!==e&&e.length<o?s:i},checkDate(e){var o=!0;return 0==n()(e,"DD/MM/YYYY",!0)._isValid&&(o=!1),o}}};var d=s(74260);const c=(0,d.Z)(l,[["render",i]]),m=c},91308:(e,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>ne});var i=s(83673),a=s(62323);const r={class:"row"},t={class:"col-md-4 col-xs-12"},n={class:"col-md-4 col-xs-12"},l={class:"col-md-4 col-xs-12"},d={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},m={class:"col-md-6 col-xs-12"},p={class:"col-md-6 col-xs-12"},u={class:"col-md-4 col-xs-12"},h={class:"col-md-4 col-xs-12"},f={class:"col-md-4 col-xs-12"},g={class:"col-md-4 col-xs-12"},_={class:"col-md-4 col-xs-12"},v={class:"col-md-4 col-xs-12"},b=(0,i.Uk)(" Sin resultados "),j={class:"col-md-6 col-xs-12"},w={class:"col-md-6 col-xs-12"},C={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},y={class:"q-pa-sm justify-center"},V={class:"q-pa-md row justify-end"},x=(0,i._)("div",{class:"col-md-4 col-xs-12 text-secondary movilTitle",style:{"align-self":"center","text-align":"center","font-size":"20px","margin-bottom":"15px"}},[(0,i._)("p",null,[(0,i._)("strong",null,"MANTENIMIENTO - PROVEEDORES")])],-1),S={class:"col-md-5 col-sm-7 col-xs-12 cardMargin selectMobile",style:{"align-self":"center"}},k={class:"col-md-2 col-sm-4 col-xs-12",style:{"text-align":"center","align-self":"center"}},D={class:"q-pa-md q-gutter-y-md"},$=(0,i._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function z(e,o,s,z,q,W){const M=(0,i.up)("q-icon"),Z=(0,i.up)("q-input"),N=(0,i.up)("q-select"),P=(0,i.up)("q-item-section"),A=(0,i.up)("q-item"),U=(0,i.up)("q-btn"),E=(0,i.up)("q-form"),R=(0,i.up)("q-card-section"),I=(0,i.up)("q-card"),T=(0,i.up)("q-dialog"),B=(0,i.up)("q-inner-loading"),Q=(0,i.up)("q-td"),O=(0,i.up)("q-item-label"),L=(0,i.up)("q-chip"),F=(0,i.up)("q-list"),H=(0,i.up)("q-table"),G=(0,i.up)("q-card-actions"),Y=(0,i.up)("methods"),J=(0,i.up)("rules-vue"),K=(0,i.up)("desactivate-crud"),X=(0,i.up)("q-page"),ee=(0,i.Q2)("money"),oe=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(X,{class:"pagina q-pa-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(T,{modelValue:z.dialog,"onUpdate:modelValue":o[26]||(o[26]=e=>z.dialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(R,null,{default:(0,i.w5)((()=>[(0,i.Wm)(E,{onSubmit:W.sendData,class:"q-gutter-md"},{default:(0,i.w5)((()=>[(0,i._)("div",r,[(0,i._)("div",t,[(0,i.Wm)(Z,{outlined:"",modelValue:q.form.nb_beneficiario,"onUpdate:modelValue":[o[0]||(o[0]=e=>q.form.nb_beneficiario=e),o[1]||(o[1]=e=>q.form.nb_beneficiario=q.form.nb_beneficiario.toUpperCase())],label:"Beneficiario",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",n,[(0,i.Wm)(Z,{outlined:"",modelValue:q.form.nb_proveedor,"onUpdate:modelValue":[o[2]||(o[2]=e=>q.form.nb_proveedor=e),o[3]||(o[3]=e=>q.form.nb_proveedor=q.form.nb_proveedor.toUpperCase())],label:"Proveedor",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,100,"Maximo 100 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",l,[(0,i.Wm)(Z,{outlined:"",modelValue:q.form.rif_proveedor,"onUpdate:modelValue":[o[4]||(o[4]=e=>q.form.rif_proveedor=e),o[5]||(o[5]=e=>q.form.rif_proveedor=q.form.rif_proveedor.toUpperCase())],label:"RIF",hint:"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,20,"Maximo 22 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"badge"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",d,[(0,i.Wm)(Z,{outlined:"",modelValue:q.form.nit_proveedor,"onUpdate:modelValue":[o[6]||(o[6]=e=>q.form.nit_proveedor=e),o[7]||(o[7]=e=>q.form.nit_proveedor=q.form.nit_proveedor.toUpperCase())],label:"NIT",class:"pcform",rules:[e=>this.$refs.rulesVue.isMax(e,20,"Maximo 20 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"","lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"123"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",c,[(0,i.wy)(((0,i.wg)(),(0,i.j4)(Z,{outlined:"",modelValue:q.form.condicion_pago,"onUpdate:modelValue":o[8]||(o[8]=e=>q.form.condicion_pago=e),label:"Condición de Pago (Días)",rules:[e=>this.$refs.rulesVue.isMax(e,2,"Maximo 2 Caracteres")||""],"input-class":"text-right",hint:"","lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"free_cancellation"})])),_:1},8,["modelValue","rules"])),[[ee,q.moneyNotDecimal]])]),(0,i._)("div",m,[(0,i.Wm)(Z,{outlined:"",modelValue:q.form.direccion_correo,"onUpdate:modelValue":[o[9]||(o[9]=e=>q.form.direccion_correo=e),o[10]||(o[10]=e=>q.form.direccion_correo=q.form.direccion_correo.toUpperCase())],label:"Direccion de Correo",rules:[e=>this.$refs.rulesVue.isMax(e,200,"Maximo 200 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"",class:"pcform","lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"drafts"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",p,[(0,i.Wm)(Z,{outlined:"",modelValue:q.form.direccion_fiscal,"onUpdate:modelValue":[o[11]||(o[11]=e=>q.form.direccion_fiscal=e),o[12]||(o[12]=e=>q.form.direccion_fiscal=q.form.direccion_fiscal.toUpperCase())],label:"Direccion Fiscal",rules:[e=>this.$refs.rulesVue.isMax(e,200,"Maximo 200 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"","lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",u,[(0,i.Wm)(Z,{outlined:"",modelValue:q.form.tlf_proveedor,"onUpdate:modelValue":o[13]||(o[13]=e=>q.form.tlf_proveedor=e),label:"Telefono",rules:[e=>this.$refs.rulesVue.isMax(e,100,"Maximo 100 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"","lazy-rules":"",class:"pcform",mask:"### - ### - ##########"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",h,[(0,i.Wm)(Z,{outlined:"",modelValue:q.form.fax_proveedor,"onUpdate:modelValue":[o[14]||(o[14]=e=>q.form.fax_proveedor=e),o[15]||(o[15]=e=>q.form.fax_proveedor=q.form.fax_proveedor.toUpperCase())],label:"Fax",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",f,[(0,i.Wm)(Z,{outlined:"",modelValue:q.form.email_proveedor,"onUpdate:modelValue":[o[16]||(o[16]=e=>q.form.email_proveedor=e),o[17]||(o[17]=e=>q.form.email_proveedor=q.form.email_proveedor.toUpperCase())],label:"Email",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"","lazy-rules":"",type:"email"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"email"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",g,[(0,i.Wm)(N,{outlined:"",modelValue:q.form.tipo_servicio,"onUpdate:modelValue":o[18]||(o[18]=e=>q.form.tipo_servicio=e),label:"Servicio Prestado",class:"pcform","input-class":"input",hint:"",options:q.servicio_prestado,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,i._)("div",_,[(0,i.Wm)(N,{outlined:"",modelValue:q.form.tipo_persona,"onUpdate:modelValue":[o[19]||(o[19]=e=>q.form.tipo_persona=e),o[20]||(o[20]=e=>{this.getData("/mretenciones","setData","retenciones",{headers:{vigente:"s",tipo_persona:q.form.tipo_persona.value}}),this.form.cod_tipo_retencion=[]})],label:"Tipo de Persona",class:"pcform","input-class":"input",hint:"",options:q.tipo_persona,rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"group"})])),_:1},8,["modelValue","options","rules"])]),(0,i._)("div",v,[(0,i.Wm)(N,{outlined:"",modelValue:q.form.cod_tipo_retencion,"onUpdate:modelValue":o[21]||(o[21]=e=>q.form.cod_tipo_retencion=e),label:"Tipo Retención ISLR",hint:"",options:q.retencionesSelected,onFilter:o[22]||(o[22]=(e,o,s)=>W.filterArray(e,o,s,"retencionesSelected","retenciones","nb_tipo_retencion")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],"option-label":"nb_tipo_retencion","option-value":"id","lazy-rules":""},{"no-option":(0,i.w5)((()=>[(0,i.Wm)(A,null,{default:(0,i.w5)((()=>[(0,i.Wm)(P,{class:"text-grey"},{default:(0,i.w5)((()=>[b])),_:1})])),_:1})])),prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"block"})])),_:1},8,["modelValue","options","rules"])]),(0,i._)("div",j,[(0,i.Wm)(N,{outlined:"",modelValue:q.form.flag_activo,"onUpdate:modelValue":o[23]||(o[23]=e=>q.form.flag_activo=e),label:"Estatus","input-class":"input",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],hint:"",class:"pcform",options:q.estatus,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"block"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",w,[(0,i.Wm)(Z,{outlined:"",modelValue:q.form.observacion,"onUpdate:modelValue":[o[24]||(o[24]=e=>q.form.observacion=e),o[25]||(o[25]=e=>q.form.observacion=q.form.observacion.toUpperCase())],label:"Observaciones",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"visibility"})])),_:1},8,["modelValue","rules"])])]),(0,i._)("div",C,[(0,i.Wm)(U,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,i.wy)((0,i.Wm)(U,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[oe]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i._)("div",y,[(0,i._)("div",V,[x,(0,i._)("div",S,[(0,i.Wm)(Z,{modelValue:z.filter,"onUpdate:modelValue":o[27]||(o[27]=e=>z.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(M,{name:"search"})])),_:1},8,["modelValue"])]),(0,i._)("div",k,[(0,i.Wm)(U,{label:"Insertar Proveedor",rounded:"",color:"primary",onClick:o[28]||(o[28]=e=>{z.dialog=!0,this.resetForm()}),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,i._)("div",D,[(0,i.Wm)(H,{rows:q.datos,"binary-state-sort":"",loading:z.loading,"row-key":"id",columns:q.columns,"rows-per-page-options":[5,10,15,20,50],onRequest:W.onRequest,separator:z.separator,filter:z.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:z.pagination,"onUpdate:pagination":o[31]||(o[31]=e=>z.pagination=e)},{loading:(0,i.w5)((()=>[(0,i.Wm)(B,{showing:"",color:"primary"})])),"body-cell-action":(0,i.w5)((e=>[(0,i.Wm)(Q,{props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{W.getData(`/proveedores/${e.row.id}`,"setDataEdit","form",{headers:{Authorization:"",vigente:"s"}}),z.dialog=!0,this.resetForm()}},null,8,["disabled","onClick"]),(0,i.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>q.selected=e.row.id,onClickCapture:o[29]||(o[29]=e=>z.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,i.w5)((e=>[(0,i._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,a.j5)(e.selected?"transform: scale(0.95);":"")},[(0,i.Wm)(I,{class:(0,a.C_)(e.selected?"bg-grey-2":"")},{default:(0,i.w5)((()=>[(0,i.Wm)(F,{dense:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cols,(s=>((0,i.wg)(),(0,i.j4)(A,{key:s.name},{default:(0,i.w5)((()=>[(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[(0,i.Wm)(O,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(s.label),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(P,{side:""},{default:(0,i.w5)((()=>["status"===s.name?((0,i.wg)(),(0,i.j4)(L,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,i.wg)(),(0,i.j4)(U,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{W.getData(`/proveedores/${e.row.id}`,"setDataEdit","form",{headers:{Authorization:"",vigente:"s"}}),this.resetForm(),z.dialog=!0}},null,8,["disabled","onClick"])):(0,i.kq)("",!0),"status"===s.name?((0,i.wg)(),(0,i.j4)(L,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,i.wg)(),(0,i.j4)(U,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>q.selected=e.row.id,onClickCapture:o[30]||(o[30]=e=>z.deletePopup=!0)},null,8,["disabled","onClick"])):((0,i.wg)(),(0,i.j4)(O,{key:4,caption:"",class:(0,a.C_)(s.classes?s.classes:"")},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","onRequest","separator","filter","grid","pagination"])])]),(0,i.Wm)(T,{modelValue:z.deletePopup,"onUpdate:modelValue":o[33]||(o[33]=e=>z.deletePopup=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{style:{width:"700px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(R,null,{default:(0,i.w5)((()=>[$])),_:1}),(0,i.Wm)(G,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(U,{flat:"",label:"Cancelar",color:"primary"},null,512),[[oe]]),(0,i.wy)((0,i.Wm)(U,{flat:"",label:"Aceptar",color:"primary",onClick:o[32]||(o[32]=e=>W.deleteData(q.selected))},null,512),[[oe]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(Y,{ref:"methods",onGetDataProveedores:o[34]||(o[34]=e=>W.getDataProveedores("/proveedores","setDataTable","datos")),onSetDataTable:W.setDataTable,onOnRequest:W.onRequest,onSetData:W.setData,onResetLoading:W.resetLoading,onSetDataEdit:W.setDataEdit},null,8,["onSetDataTable","onOnRequest","onSetData","onResetLoading","onSetDataEdit"]),(0,i.Wm)(J,{ref:"rulesVue"},null,512),(0,i.Wm)(K,{ref:"desactivateCrud",onDesactivarCrud:W.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}s(65363),s(97768);var q=s(61959),W=s(48825),M=s(92687),Z=s(31885),N=s(55325),P=s(38015);const A={directives:{money:Z.VMoney},components:{"desactivate-crud":P.Z,methods:N.Z,VMoney:Z.VMoney,rulesVue:M.Z},data(){return{moneyNotDecimal:{decimal:",",thousands:".",prefix:"",suffix:"",precision:0,masked:!0},columns:[{name:"nb_proveedor",label:"Nombre del Proveedor",field:"nb_proveedor",align:"left",sortable:!0,required:!0},{name:"condicion_pago",label:"Condicion de Pago",field:"condicion_pago",align:"left",sortable:!0,required:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nb_proveedor:"",nb_beneficiario:"",rif_proveedor:"",nit_proveedor:"",direccion_fiscal:"",direccion_correo:"",tlf_proveedor:"",fax_proveedor:"",email_proveedor:"",condicion_pago:"",observacion:"",tipo_servicio:[],cod_tipo_retencion:[],tipo_persona:[],flag_activo:[]},tipo_persona:[{label:"JURÍDICA",value:"J"},{label:"NATURAL",value:"N"}],servicio_prestado:[{label:"TRANSPORTE",value:"TP"},{label:"PAPELERIA",value:"PP"},{label:"SUMINISTROS DE COMPUTACIÓN",value:"SC"},{label:"GENERALES",value:"GE"}],estatus:[{label:"ACTIVO",value:"A"},{label:"INACTIVO",value:"I"}],retenciones:[],count:1,currentPage:1,datos:[],selected:[],retencionesSelected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,W.Z)(),(0,q.iH)(!1),(0,q.iH)(!1);const e=(0,q.iH)({descending:"",page:1,rowsPerPage:8,rowsNumber:""});return{pagination:e,anulate:(0,q.iH)(!1),separator:(0,q.iH)("vertical"),loading:(0,q.iH)(!1),dialog:(0,q.iH)(!1),deletePopup:(0,q.iH)(!1),filter:(0,q.iH)("")}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Proveedores",""),this.getDataProveedores("/proveedores","onRequest","datos"),this.$refs.desactivateCrud.desactivarCrud("c_proveedores","r_proveedores","u_proveedores","d_proveedores","desactivarCrud")},methods:{onRequest(e,o){if(1==this.count){this[o]=e.data,this.pagination.rowsNumber=e.total;for(var s=0,i=this.datos.length;s<i;s++)if(null!==this.datos[s].condicion_pago&&(this.datos[s].condicion_pago=this.datos[s].condicion_pago+" Dias"),s==this.datos.length-1)break;this.loading=!1}else{let{page:o,rowsPerPage:s,sortBy:i,descending:l}=e.pagination;this.currentPage!==o&&(l="");e.filter;const d=0===s?this.pagination.rowsNumber:s;var a="",r=o,t=d;if(i)var n=i;else n="nro_item";""!==l&&(this.pagination.descending=!this.pagination.descending,a=1==this.pagination.descending?"DESC":"ASC"),i&&(this.pagination.sortBy=i),this.pagination.page=o,this.pagination.rowsPerPage=s,this.getData("/proveedores","setDataTable","datos",{headers:{page:r,limit:t,order_direction:a,order_by:n}})}this.count=0},setDataTable(e,o){this[o]=e.data,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1;for(var s=0,i=this.datos.length;s<i;s++)if(null!==this.datos[s].condicion_pago&&(this.datos[s].condicion_pago=this.datos[s].condicion_pago+" Dias"),s==this.datos.length-1)break},filterArray(e,o,s,i,a,r){o(""!==e?()=>{const o=e.toUpperCase();for(var s=[],t=0;t<=this[a].length-1;t++)if(this[a][t][r].indexOf(o)>-1&&s.push(this[a][t]),t==this[a].length-1){this[i]=s;break}}:()=>{this[i]=this[a]})},resetLoading(){this.loading=!1},desactivarCrud(e,o,s,i){1==o?(1==e&&(this.disabledCreate=!1),1==s&&(this.disabledDelete=!1),1==i&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,o,s,i){this.$refs.methods.getData(e,o,s,i)},getDataProveedores(e,o,s){this.$refs.methods.getData(e,o,s,{headers:{vigente:"s",page:1,limit:8}}),this.loading=!0},setData(e,o){this.loading=!1,this[o]=e.data},setDataEdit(e,o){if("J"===e.tipo_persona)var s="J";else if("N"===e.tipo_persona)s="N";this.loading=!1,this.getData("/mretenciones","setData","retenciones",{headers:{vigente:"s",tipo_persona:s}}),this.form.id=e.id,this.form.condicion_pago=e.condicion_pago,this.form.nb_proveedor=e.nb_proveedor,this.form.nb_beneficiario=e.nb_beneficiario,this.form.rif_proveedor=e.rif_proveedor,this.form.nit_proveedor=e.nit_proveedor,this.form.direccion_fiscal=e.direccion_fiscal,this.form.direccion_correo=e.direccion_correo,this.form.tlf_proveedor=e.tlf_proveedor,this.form.fax_proveedor=e.fax_proveedor,this.form.email_proveedor=e.email_proveedor,this.form.observacion=e.observacion,this.form.tipo_servicio=e.tipo_svc,this.form.tipo_persona=e.tipo_desc,this.form.flag_activo=e.activo_desc,this.form.cod_tipo_retencion=e.retenciones},deleteData(e){this.$refs.methods.deleteData(`/proveedores/${e}`,"getDataProveedores"),this.loading=!0},sendData(){this.form.condicion_pago=this.form.condicion_pago.replaceAll(".","").replaceAll(",","."),this.form.tipo_servicio=this.form.tipo_servicio.value,this.form.tipo_persona=this.form.tipo_persona.value,this.form.flag_activo=this.form.flag_activo.value,this.form.cod_tipo_retencion=this.form.cod_tipo_retencion.id,this.form.id?(this.$refs.methods.putData(`/proveedores/${this.form.id}`,this.form,"getDataProveedores"),this.dialog=!1,this.resetForm(),this.loading=!0):(this.$refs.methods.createData("/proveedores",this.form,"getDataProveedores"),this.resetForm(),this.loading=!0,this.dialog=!1)},resetForm(){delete this.form.id,this.form.nb_proveedor="",this.form.nb_beneficiario="",this.form.rif_proveedor="",this.form.nit_proveedor="",this.form.direccion_fiscal="",this.form.direccion_correo="",this.form.tlf_proveedor="",this.form.fax_proveedor="",this.form.email_proveedor="",this.form.condicion_pago="",this.form.observacion="",this.form.tipo_servicio="",this.form.cod_tipo_retencion="",this.retenciones=[],this.form.tipo_persona="",this.form.flag_activo=""}}};var U=s(74260),E=s(24379),R=s(46778),I=s(10151),T=s(25589),B=s(68689),Q=s(34842),O=s(24554),L=s(72448),F=s(83414),H=s(52035),G=s(48240),Y=s(17352),J=s(66941),K=s(83884),X=s(27011),ee=s(2350),oe=s(67030),se=s(99367),ie=s(60677),ae=s(7518),re=s.n(ae);const te=(0,U.Z)(A,[["render",z]]),ne=te;re()(A,"components",{QPage:E.Z,QDialog:R.Z,QCard:I.Z,QCardSection:T.Z,QForm:B.Z,QInput:Q.Z,QIcon:O.Z,QSelect:L.Z,QItem:F.Z,QItemSection:H.Z,QBtn:G.Z,QTable:Y.Z,QInnerLoading:J.Z,QTd:K.Z,QList:X.Z,QItemLabel:ee.Z,QChip:oe.Z,QCardActions:se.Z}),re()(A,"directives",{ClosePopup:ie.Z})},46700:(e,o,s)=>{var i={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function a(e){var o=r(e);return s(o)}function r(e){if(!s.o(i,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id=46700}}]);