"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[317],{38015:(e,t,o)=>{function s(e,t,o,s,a,i){return null}o.d(t,{Z:()=>d});var a=o(80589),i=o(48825);const l={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,i.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,t,o,s,i){for(var l,r,c,d,n=a.Z.getItem("tokenTraducido"),m=0,p=n.usuario.roles.permisos.length;m<p;m++)if(n.usuario.roles.permisos[m].codigo===e&&(l=!0),n.usuario.roles.permisos[m].codigo===s&&(c=!0),n.usuario.roles.permisos[m].codigo===o&&(d=!0),n.usuario.roles.permisos[m].codigo===t&&(r=!0),m==n.usuario.roles.permisos.length.length-1)break;e=!0===l,s=!0===c,o=!0===d,t=!0===r,this.$emit(i,e,t,s,o)},desactivarOpciones(e){for(var t=a.Z.getItem("tokenTraducido"),o=0,s=this.permisos.length;o<s;o++){var i=0;for(s=t.usuario.roles.permisos.length;i<s;i++)if(t.usuario.roles.permisos[i].codigo==this.permisos[o].permisoName&&(this.permisos[o].permiso=!0),i==t.usuario.roles.permisos.length.length-1)break;if(o==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var r=o(74260);const c=(0,r.Z)(l,[["render",s]]),d=c},30035:(e,t,o)=>{function s(e,t,o,s,a,i){return null}o.d(t,{Z:()=>n});var a=o(80589),i=o(5474),l=o(48825);const r={name:"userLogout",data:function(){return{}},setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,o,s){s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api.get(e,s).then((s=>{s.data.data&&"/cguias"!==e&&"/dmovimientos"!==e?this.$emit(t,s.data.data,o):this.$emit(t,s.data,o)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,t,o,s){s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api.get(e,s).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,t,o){o.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,o,s){s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api.post(e,t,s).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,o,s){s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api.post(e,t,s).then((e=>{(e.status=200)&&this.$emit(o,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,t,o,s){s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api.put(e,t,s).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var c=o(74260);const d=(0,c.Z)(r,[["render",s]]),n=d},317:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ie});var s=o(83673),a=o(62323);const i={class:"row"},l={class:"col-md-12 col-xs-12"},r={class:"col-md-6 col-xs-12"},c={class:"col-md-3 col-xs-6",style:{"margin-bottom":"7px"},id:"select"},d={class:"col-md-3 col-xs-6",style:{"margin-bottom":"7px"},id:"select"},n={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},m={class:"row"},p={class:"col-md-12 col-xs-12"},u={class:"col-md-6 col-xs-12"},h={class:"col-md-3 col-xs-6",style:{"margin-bottom":"7px"},id:"select"},g={class:"col-md-3 col-xs-6",style:{"margin-bottom":"7px"},id:"select"},f={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},_={class:"row q-pa-sm justify-center"},b={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},w={class:"row"},k=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,s._)("h4",{style:{"font-size":"26px"}},[(0,s._)("strong",null,"CONCEPTOS DE FACTURACIÓN")])],-1),v={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},S={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},C={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},x={class:"q-pa-md",style:{"margin-top":"20px"}},y={class:"q-gutter-y-md"},D={bordered:"",flat:"",class:"my-card row"},E=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function V(e,t,o,V,W,N){const Z=(0,s.up)("q-icon"),q=(0,s.up)("q-input"),A=(0,s.up)("q-select"),U=(0,s.up)("q-checkbox"),$=(0,s.up)("q-field"),I=(0,s.up)("q-btn"),z=(0,s.up)("q-form"),F=(0,s.up)("q-card-section"),Q=(0,s.up)("q-card"),L=(0,s.up)("q-dialog"),O=(0,s.up)("q-inner-loading"),T=(0,s.up)("q-td"),P=(0,s.up)("q-item-label"),B=(0,s.up)("q-item-section"),j=(0,s.up)("q-chip"),R=(0,s.up)("q-item"),H=(0,s.up)("q-list"),G=(0,s.up)("q-table"),M=(0,s.up)("q-card-actions"),Y=(0,s.up)("desactivate-crud"),J=(0,s.up)("methods"),K=(0,s.up)("q-page"),X=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(K,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(L,{modelValue:V.create,"onUpdate:modelValue":t[9]||(t[9]=e=>V.create=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(z,{onSubmit:t[8]||(t[8]=e=>N.createData()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s._)("div",l,[(0,s.Wm)(q,{outlined:"",modelValue:W.form.desc_concepto,"onUpdate:modelValue":[t[0]||(t[0]=e=>W.form.desc_concepto=e),t[1]||(t[1]=e=>W.form.desc_concepto=W.form.desc_concepto.toUpperCase())],label:"Descripcion de Concepto",hint:"",class:"pcform","lazy-rules":"",rules:[N.reglasNotNull100]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",r,[(0,s.Wm)(A,{"transition-show":"flip-up","transition-hide":"flip-down",options:W.conceptosSelected,onFilter:t[2]||(t[2]=(e,t,o)=>N.filterArray(e,t,o,"conceptosSelected","conceptos","desc_concepto")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_concepto","option-value":"id",class:"pcform",modelValue:W.form.cod_concepto,"onUpdate:modelValue":t[3]||(t[3]=e=>W.form.cod_concepto=e),outlined:"",standout:"",rules:[N.reglasSelect],label:"Tipo de Operación"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"format_list_bulleted"})])),_:1},8,["options","modelValue","rules"])]),(0,s._)("div",c,[(0,s.Wm)($,{rules:[N.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",class:"pcform",modelValue:W.form.check_comision,"onUpdate:modelValue":t[5]||(t[5]=e=>W.form.check_comision=e)},{control:(0,s.w5)((()=>[(0,s.Wm)(U,{size:"lg",modelValue:W.form.check_comision,"onUpdate:modelValue":t[4]||(t[4]=e=>W.form.check_comision=e),"true-value":"1","false-value":"0",style:{"font-size":"13px"},label:"¿GENERA COMISIÓN?"},null,8,["modelValue"])])),_:1},8,["rules","modelValue"])]),(0,s._)("div",d,[(0,s.Wm)($,{rules:[N.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",modelValue:W.form.check_impuesto,"onUpdate:modelValue":t[7]||(t[7]=e=>W.form.check_impuesto=e)},{control:(0,s.w5)((()=>[(0,s.Wm)(U,{size:"lg",modelValue:W.form.check_impuesto,"onUpdate:modelValue":t[6]||(t[6]=e=>W.form.check_impuesto=e),"true-value":"1","false-value":"0",style:{"font-size":"13px"},label:"¿INFLUYE EN IMPUESTO?"},null,8,["modelValue"])])),_:1},8,["rules","modelValue"])])]),(0,s._)("div",n,[(0,s.Wm)(I,{label:"Agregar Concepto",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(I,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[X]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(L,{modelValue:V.edit,"onUpdate:modelValue":t[19]||(t[19]=e=>V.edit=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(z,{onSubmit:t[18]||(t[18]=e=>N.putData())},{default:(0,s.w5)((()=>[(0,s._)("div",m,[(0,s._)("div",p,[(0,s.Wm)(q,{outlined:"",modelValue:W.formEdit.desc_concepto,"onUpdate:modelValue":[t[10]||(t[10]=e=>W.formEdit.desc_concepto=e),t[11]||(t[11]=e=>W.formEdit.desc_concepto=W.formEdit.desc_concepto.toUpperCase())],label:"Descripcion de Concepto",hint:"",class:"pcform","lazy-rules":"",rules:[N.reglasNotNull100]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",u,[(0,s.Wm)(A,{"transition-show":"flip-up","transition-hide":"flip-down",options:W.conceptosSelected,onFilter:t[12]||(t[12]=(e,t,o)=>N.filterArray(e,t,o,"conceptosSelected","conceptos","desc_concepto")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_concepto","option-value":"id",class:"pcform",modelValue:W.formEdit.cod_concepto,"onUpdate:modelValue":t[13]||(t[13]=e=>W.formEdit.cod_concepto=e),outlined:"",standout:"",rules:[N.reglasSelect],label:"Tipo de Operación"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"format_list_bulleted"})])),_:1},8,["options","modelValue","rules"])]),(0,s._)("div",h,[(0,s.Wm)($,{rules:[N.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",class:"pcform",modelValue:W.formEdit.check_comision,"onUpdate:modelValue":t[15]||(t[15]=e=>W.formEdit.check_comision=e)},{control:(0,s.w5)((()=>[(0,s.Wm)(U,{size:"lg",modelValue:W.formEdit.check_comision,"onUpdate:modelValue":t[14]||(t[14]=e=>W.formEdit.check_comision=e),"true-value":"1","false-value":"0",style:{"font-size":"13px"},label:"¿GENERA COMISIÓN?"},null,8,["modelValue"])])),_:1},8,["rules","modelValue"])]),(0,s._)("div",g,[(0,s.Wm)($,{rules:[N.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",modelValue:W.formEdit.check_impuesto,"onUpdate:modelValue":t[17]||(t[17]=e=>W.formEdit.check_impuesto=e)},{control:(0,s.w5)((()=>[(0,s.Wm)(U,{size:"lg",modelValue:W.formEdit.check_impuesto,"onUpdate:modelValue":t[16]||(t[16]=e=>W.formEdit.check_impuesto=e),"true-value":"1","false-value":"0",style:{"font-size":"13px"},label:"¿INFLUYE EN IMPUESTO?"},null,8,["modelValue"])])),_:1},8,["rules","modelValue"])])]),(0,s._)("div",f,[(0,s.Wm)(I,{label:"Editar Concepto",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(I,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[X]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",_,[(0,s._)("div",b,[(0,s._)("div",w,[k,(0,s._)("div",v,[(0,s.Wm)(A,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:W.conceptosSelected,onFilter:t[20]||(t[20]=(e,t,o)=>N.filterArray(e,t,o,"conceptosSelected","conceptos","desc_concepto")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_concepto","option-value":"id",modelValue:W.selectedConcepto,"onUpdate:modelValue":[t[21]||(t[21]=e=>W.selectedConcepto=e),t[22]||(t[22]=e=>N.getDataSelect("/cfacturacion","setData","datos"))],outlined:"",standout:"",label:"Escoge un Concepto"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",S,[(0,s.Wm)(q,{rounded:"",outlined:"",standout:"",modelValue:V.filter,"onUpdate:modelValue":t[23]||(t[23]=e=>V.filter=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",C,[(0,s.Wm)(I,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:t[24]||(t[24]=e=>V.create=!0),onClickCapture:t[25]||(t[25]=e=>N.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,s._)("div",x,[(0,s._)("div",y,[(0,s._)("div",D,[(0,s.Wm)(G,{rows:W.datos,"row-key":"id",columns:W.columns,loading:V.loading,separator:V.separator,filter:V.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:V.pagination,"onUpdate:pagination":t[28]||(t[28]=e=>V.pagination=e)},{loading:(0,s.w5)((()=>[(0,s.Wm)(O,{showing:"",color:"primary"})])),"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(T,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{N.getData(`/cfacturacion/${e.row.id}`,"setDataEdit","formEdit"),V.edit=!0}},null,8,["disabled","onClick"]),(0,s.Wm)(I,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>W.selected=e.row.id,onClickCapture:t[26]||(t[26]=e=>V.deleteForm=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,a.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(Q,{class:(0,a.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(o=>((0,s.wg)(),(0,s.j4)(R,{key:o.name},{default:(0,s.w5)((()=>[(0,s.Wm)(B,null,{default:(0,s.w5)((()=>[(0,s.Wm)(P,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{side:""},{default:(0,s.w5)((()=>["status"===o.name?((0,s.wg)(),(0,s.j4)(j,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(I,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{N.getData(`/cfacturacion/${e.row.id}`,"setDataEdit","formEdit"),V.edit=!0}},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"status"===o.name?((0,s.wg)(),(0,s.j4)(j,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(I,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>W.selected=e.row.id,onClickCapture:t[27]||(t[27]=e=>V.deleteForm=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(P,{key:4,caption:"",class:(0,a.C_)(o.classes?o.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","filter","grid","pagination"])])])])])]),(0,s.Wm)(L,{modelValue:V.deleteForm,"onUpdate:modelValue":t[30]||(t[30]=e=>V.deleteForm=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[E])),_:1}),(0,s.Wm)(M,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(I,{flat:"",label:"Cancelar",color:"primary"},null,512),[[X]]),(0,s.wy)((0,s.Wm)(I,{flat:"",label:"Aceptar",color:"primary",onClick:t[29]||(t[29]=e=>N.deleteData(W.selected))},null,512),[[X]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(Y,{ref:"desactivateCrud",onDesactivarCrud:N.desactivarCrud},null,8,["onDesactivarCrud"]),(0,s.Wm)(J,{ref:"methods",onGetData:t[31]||(t[31]=e=>N.getDataSelect("/cfacturacion","setData","datos")),onSetDataIniciar:N.setDataIniciar,onResetLoading:N.resetLoading,onSetDataEdit:N.setDataEdit,onSetData:N.setData},null,8,["onSetDataIniciar","onResetLoading","onSetDataEdit","onSetData"])])),_:1})}var W=o(61959),N=(o(5474),o(48825)),Z=(o(80589),o(30035)),q=o(38015);const A={components:{"desactivate-crud":q.Z,methods:Z.Z},name:"Agentes",data(){return{columns:[{name:"desc_concepto",label:"Nombre",field:"desc_concepto",align:"left",sortable:!0,required:!0},{name:"check_comision",label:"Genera Comision",field:"check_comision",align:"left",sortable:!0,required:!0},{name:"check_impuesto",label:"Influye en el Impuesto",field:"check_impuesto",align:"left",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{desc_concepto:"",check_comision:"0",check_impuesto:"0",cod_concepto:""},formEdit:{desc_concepto:"",check_comision:"0",check_impuesto:"0",cod_concepto:"",id:""},conceptos:[],datos:[],selected:[],conceptosSelected:[],selectedConcepto:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,N.Z)(),(0,W.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:"",tipo:"8"}},pagination:(0,W.iH)({rowsPerPage:10}),separator:(0,W.iH)("vertical"),create:(0,W.iH)(!1),loading:(0,W.iH)(!1),edit:(0,W.iH)(!1),deleteForm:(0,W.iH)(!1),filter:(0,W.iH)("")}},mounted(){this.getData("/coperacion","setDataIniciar","conceptos"),this.$refs.desactivateCrud.desactivarCrud("c_concepto_facturacion","r_concepto_facturacion","u_concepto_facturacion","d_concepto_facturacion","desactivarCrud")},methods:{filterArray(e,t,o,s,a,i){t(""!==e?()=>{const t=e.toUpperCase();for(var o=JSON.parse(JSON.stringify(this[a])),l=0,r=this[a].length;l<r;l++)if(this[a][l][i].indexOf(t)>-1||delete o[l],l==this[a].length-1){this[s]=o;break}}:()=>{this[s]=this[a]})},resetLoading(){this.loading=!1},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasNotNull100(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>100)return"Deben ser Maximo 100 caracteres"}},desactivarCrud(e,t,o,s){1==t?(1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==s&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,t,o){this.$refs.methods.getData(e,t,o,this.axiosConfig)},getDataSelect(e,t,o){this.$refs.methods.getData(e,t,o,{headers:{Authorization:"",cod_concepto:this.selectedConcepto.id,tipo:"8"}}),this.loading=!0},setDataIniciar(e,t){this[t]=e;for(var o=0,s=this.datos.length;o<s;o++)if("1"===this.datos[o].check_comision&&(this.datos[o].check_comision="✓"),"0"===this.datos[o].check_comision&&(this.datos[o].check_comision=""),"1"===this.datos[o].check_impuesto&&(this.datos[o].check_impuesto="✓"),"0"===this.datos[o].check_impuesto&&(this.datos[o].check_impuesto=""),o==this.datos.length-1)break;this.selectedConcepto=this.conceptos[0],this.getDataSelect("/cfacturacion","setData","datos"),this.loading=!1},setData(e,t){this[t]=e,this.loading=!1;for(var o=0,s=this.datos.length;o<s;o++)if("1"===this.datos[o].check_comision&&(this.datos[o].check_comision="✓"),"0"===this.datos[o].check_comision&&(this.datos[o].check_comision=""),"1"===this.datos[o].check_impuesto&&(this.datos[o].check_impuesto="✓"),"0"===this.datos[o].check_impuesto&&(this.datos[o].check_impuesto=""),o==this.datos.length-1)break},setDataEdit(e,t){this.loading=!1,this[t].id=e.id,this[t].desc_concepto=e.desc_concepto,this[t].check_comision=e.check_comision,this[t].check_impuesto=e.check_impuesto,this[t].cod_concepto=e.conceptos.desc_concepto},deleteData(e){this.$refs.methods.deleteData(`/cfacturacion/${e}`,"getData",this.axiosConfig),this.loading=!0},createData(){this.form.cod_concepto=this.form.cod_concepto.id,this.$refs.methods.createData("/cfacturacion",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.formEdit.cod_concepto=this.formEdit.cod_concepto.id,this.$refs.methods.putData(`/cfacturacion/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.resetFormEdit(),this.loading=!0},resetForm(){this.form.desc_concepto="",this.form.check_comision="0",this.form.check_impuesto="0",this.form.cod_concepto="",this.create=!1},resetFormEdit(){this.formEdit.desc_concepto="",this.formEdit.check_comision="0",this.formEdit.check_impuesto="0",this.formEdit.cod_concepto="",this.edit=!1}}};var U=o(74260),$=o(24379),I=o(46778),z=o(10151),F=o(25589),Q=o(68689),L=o(34842),O=o(24554),T=o(72448),P=o(86115),B=o(65735),j=o(48240),R=o(17352),H=o(66941),G=o(83884),M=o(27011),Y=o(83414),J=o(52035),K=o(2350),X=o(67030),ee=o(99367),te=o(60677),oe=o(7518),se=o.n(oe);const ae=(0,U.Z)(A,[["render",V]]),ie=ae;se()(A,"components",{QPage:$.Z,QDialog:I.Z,QCard:z.Z,QCardSection:F.Z,QForm:Q.Z,QInput:L.Z,QIcon:O.Z,QSelect:T.Z,QField:P.Z,QCheckbox:B.Z,QBtn:j.Z,QTable:R.Z,QInnerLoading:H.Z,QTd:G.Z,QList:M.Z,QItem:Y.Z,QItemSection:J.Z,QItemLabel:K.Z,QChip:X.Z,QCardActions:ee.Z}),se()(A,"directives",{ClosePopup:te.Z})}}]);