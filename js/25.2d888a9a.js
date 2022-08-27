"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[25],{8015:(e,t,o)=>{function a(e,t,o,a,i,s){return null}o.d(t,{Z:()=>n});var i=o(589),s=o(8825);const l={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,s.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,t,o,a,s){for(var l,r,d,n,c=i.Z.getItem("tokenTraducido"),m=0,u=c.usuario.roles.permisos.length;m<u;m++)if(c.usuario.roles.permisos[m].codigo===e&&(l=!0),c.usuario.roles.permisos[m].codigo===a&&(d=!0),c.usuario.roles.permisos[m].codigo===o&&(n=!0),c.usuario.roles.permisos[m].codigo===t&&(r=!0),m==c.usuario.roles.permisos.length.length-1)break;e=!0===l,a=!0===d,o=!0===n,t=!0===r,this.$emit(s,e,t,a,o)},desactivarOpciones(e){for(var t=i.Z.getItem("tokenTraducido"),o=0,a=this.permisos.length;o<a;o++){var s=0;for(a=t.usuario.roles.permisos.length;s<a;s++)if(t.usuario.roles.permisos[s].codigo==this.permisos[o].permisoName&&(this.permisos[o].permiso=!0),s==t.usuario.roles.permisos.length.length-1)break;if(o==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var r=o(4260);const d=(0,r.Z)(l,[["render",a]]),n=d},1496:(e,t,o)=>{function a(e,t,o,a,i,s){return null}o.d(t,{Z:()=>c});var i=o(589),s=o(5474),l=o(8825);const r={name:"userLogout",data:function(){return{}},setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,o,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,a).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,t,o,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,a).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,t,o){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,o,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,o,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,t,a).then((e=>{(e.status=200)&&this.$emit(o,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,t,o,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.message),this.errorDelServidor()}))}}};var d=o(4260);const n=(0,d.Z)(r,[["render",a]]),c=n},25:(e,t,o)=>{o.r(t),o.d(t,{default:()=>re});var a=o(3673),i=o(2323);const s={class:"row"},l={class:"col-md-6 col-xs-12"},r={class:"col-md-6 col-xs-12"},d={class:"col-md-2 col-xs-12"},n={class:"col-md-6 col-xs-12"},c={class:"col-md-4 col-xs-12"},m={class:"full-width row justify-center items-center content-center"},u={class:"row"},p={class:"col-md-6 col-xs-12"},g={class:"col-md-6 col-xs-12"},h={class:"col-md-2 col-xs-12"},f={class:"col-md-6 col-xs-12"},_={class:"col-md-4 col-xs-12"},b={class:"full-width row justify-center items-center content-center",style:{"margin-top":"10px"}},v={class:"row q-pa-sm justify-center"},w=(0,a._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 text-secondary"},[(0,a._)("div",null,[(0,a._)("h4",{style:{"font-size":"35px","align-self":"center","text-align":"center"}},[(0,a._)("strong",null,"MANTENIMIENTO - CONTROL CORRELATIVO")])])],-1),C={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},S={class:"col-md-11 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},D={class:"row"},E={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputciudadespc"},y={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputciudadespc2"},x={class:"col-md-3 col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputpc"},A={class:"col-md-2 col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-5 inputpc",style:{"text-align":"center","align-self":"center"}},V={class:"q-pa-md",style:{"margin-top":"20px"}},W={class:"q-gutter-y-md"},k={bordered:"",flat:"",class:"my-card row"},N=(0,a._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1);function U(e,t,o,U,Z,q){const $=(0,a.up)("q-icon"),z=(0,a.up)("q-input"),I=(0,a.up)("q-select"),P=(0,a.up)("q-btn"),T=(0,a.up)("q-form"),L=(0,a.up)("q-card-section"),Q=(0,a.up)("q-card"),R=(0,a.up)("q-dialog"),j=(0,a.up)("q-inner-loading"),O=(0,a.up)("q-td"),B=(0,a.up)("q-item-label"),F=(0,a.up)("q-item-section"),H=(0,a.up)("q-chip"),M=(0,a.up)("q-item"),G=(0,a.up)("q-list"),J=(0,a.up)("q-table"),K=(0,a.up)("q-card-actions"),X=(0,a.up)("methods"),Y=(0,a.up)("desactive-crud"),ee=(0,a.up)("q-page"),te=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(ee,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(R,{modelValue:U.create,"onUpdate:modelValue":t[6]||(t[6]=e=>U.create=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(T,{onSubmit:q.createDato,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a._)("div",l,[(0,a.Wm)(z,{"upper-case":"",outlined:"",modelValue:Z.form.control_inicio,"onUpdate:modelValue":t[0]||(t[0]=e=>Z.form.control_inicio=e),label:"Primer Correlativo",class:"pcform",hint:"","lazy-rules":"",rules:[q.reglasNotNull10],type:"number"},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",r,[(0,a.Wm)(z,{outlined:"",modelValue:Z.form.control_final,"onUpdate:modelValue":t[1]||(t[1]=e=>Z.form.control_final=e),label:"Ultimo Correlativo",rules:[q.reglasSegundoCorrelativo],hint:"","lazy-rules":"",type:"number"},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"account_circle"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",d,[(0,a.Wm)(z,{outlined:"",modelValue:Z.form.serie_doc,"onUpdate:modelValue":[t[2]||(t[2]=e=>Z.form.serie_doc=e),t[3]||(t[3]=e=>Z.form.serie_doc=Z.form.serie_doc.toUpperCase())],label:"Serie Lote",hint:"",class:"pcform","lazy-rules":"",rules:[q.reglasAllowNull1]},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",n,[(0,a.Wm)(z,{outlined:"",modelValue:Z.form.ult_doc_referencia,"onUpdate:modelValue":t[4]||(t[4]=e=>Z.form.ult_doc_referencia=e),label:"Ultimo Numero Asignado",hint:"",class:"pcform",type:"number",rules:[q.reglasAllowNull10],"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"badge"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",c,[(0,a.Wm)(I,{outlined:"",modelValue:Z.form.estatus_lote,"onUpdate:modelValue":t[5]||(t[5]=e=>Z.form.estatus_lote=e),label:"Estatus",hint:"",options:Z.estatus,"lazy-rules":"",rules:[q.reglasSelect]},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"done_all"})])),_:1},8,["modelValue","options","rules"])])]),(0,a._)("div",m,[(0,a.Wm)(P,{label:"Agregar Control",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(P,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[te]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(R,{modelValue:U.edit,"onUpdate:modelValue":t[13]||(t[13]=e=>U.edit=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(T,{onSubmit:q.putDato},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a._)("div",p,[(0,a.Wm)(z,{"upper-case":"",outlined:"",modelValue:Z.formEdit.control_inicio,"onUpdate:modelValue":t[7]||(t[7]=e=>Z.formEdit.control_inicio=e),label:"Primer Correlativo",class:"pcform",hint:"","lazy-rules":"",rules:[q.reglasNotNull10],type:"number"},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",g,[(0,a.Wm)(z,{outlined:"",modelValue:Z.formEdit.control_final,"onUpdate:modelValue":t[8]||(t[8]=e=>Z.formEdit.control_final=e),label:"Ultimo Correlativo",rules:[q.reglasSegundoCorrelativoEdit],hint:"","lazy-rules":"",type:"number"},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"account_circle"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",h,[(0,a.Wm)(z,{outlined:"",modelValue:Z.formEdit.serie_doc,"onUpdate:modelValue":[t[9]||(t[9]=e=>Z.formEdit.serie_doc=e),t[10]||(t[10]=e=>Z.formEdit.serie_doc=Z.formEdit.serie_doc.toUpperCase())],label:"Serie Lote",hint:"",class:"pcform","lazy-rules":"",rules:[q.reglasAllowNull1]},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",f,[(0,a.Wm)(z,{outlined:"",modelValue:Z.formEdit.ult_doc_referencia,"onUpdate:modelValue":t[11]||(t[11]=e=>Z.formEdit.ult_doc_referencia=e),label:"Ultimo Numero Asignado",hint:"",class:"pcform",type:"number",rules:[q.reglasAllowNull10],"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"badge"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",_,[(0,a.Wm)(I,{outlined:"",modelValue:Z.formEdit.estatus_lote,"onUpdate:modelValue":t[12]||(t[12]=e=>Z.formEdit.estatus_lote=e),label:"Estatus",hint:"",options:Z.estatus,rules:[q.reglasSelect],"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"done_all"})])),_:1},8,["modelValue","options","rules"])])]),(0,a._)("div",b,[(0,a.Wm)(P,{label:"Editar Control",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(P,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[te]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",v,[w,(0,a._)("div",C,[(0,a._)("div",S,[(0,a._)("div",D,[(0,a._)("div",E,[(0,a.Wm)(I,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down","option-label":"nb_agencia","option-value":"id",options:Z.agenciasSelected,onFilter:t[14]||(t[14]=(e,t,o)=>q.filterArray(e,t,o,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",modelValue:Z.selectedAgencia,"onUpdate:modelValue":[t[15]||(t[15]=e=>Z.selectedAgencia=e),t[16]||(t[16]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,q.getDataSelect("/correlativo","setData","datos")})],outlined:"",standout:"",label:"Escoge una Agencia"},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",y,[(0,a.Wm)(I,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:Z.tiposSelected,onFilter:t[17]||(t[17]=(e,t,o)=>q.filterArray(e,t,o,"tiposSelected","tipos","descripcion")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"descripcion","option-value":"id",modelValue:Z.selectedTipo,"onUpdate:modelValue":[t[18]||(t[18]=e=>Z.selectedTipo=e),t[19]||(t[19]=e=>{this.axiosConfig.headers.tipo=this.selectedTipo.id,q.getDataSelect("/correlativo","setData","datos")})],outlined:"",standout:"",label:"Tipo de Control"},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",x,[(0,a.Wm)(z,{rounded:"",outlined:"",modelValue:U.filter,"onUpdate:modelValue":t[20]||(t[20]=e=>U.filter=e),standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,a.w5)((()=>[(0,a.Wm)($,{name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",A,[(0,a.Wm)(P,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:t[21]||(t[21]=e=>U.create=!0),onClickCapture:q.resetForm,size:"16px",class:"q-px-xl q-py-xs"},null,8,["disabled","onClickCapture"])])]),(0,a._)("div",V,[(0,a._)("div",W,[(0,a._)("div",k,[(0,a.Wm)(J,{rows:Z.datos,"row-key":"id",loading:U.loading,columns:Z.columns,separator:U.separator,class:"my-sticky-column-table",filter:U.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:U.pagination,"onUpdate:pagination":t[24]||(t[24]=e=>U.pagination=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(j,{showing:"",color:"primary"})])),"body-cell-estatus":(0,a.w5)((e=>[(0,a.Wm)(O,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{outlined:"",modelValue:e.row.estatus_desc,"onUpdate:modelValue":[t=>e.row.estatus_desc=t,t=>{this.getDataEdit(e.row.id,"putDatoSelect"),this.formEdit.estatus_lote=e.row.estatus_desc.value}],options:Z.estatus},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1032,["props"])])),"body-cell-action":(0,a.w5)((o=>[(0,a.Wm)(O,{props:o},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:e=>{q.getDataEdit(o.row.id,"setDataEdit"),U.edit=!0}},null,8,["disabled","onClick"]),(0,a.Wm)(P,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>e.selected=o.row.id,onClickCapture:t[22]||(t[22]=e=>U.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.w5)((o=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(o.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(Q,{class:(0,i.C_)(o.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.cols,(s=>((0,a.wg)(),(0,a.j4)(M,{key:s.name},{default:(0,a.w5)((()=>[(0,a.Wm)(F,null,{default:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(F,{side:""},{default:(0,a.w5)((()=>["status"===s.name?((0,a.wg)(),(0,a.j4)(H,{key:0,color:"Active"==o.row.status?"green":"Disable"==o.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,a.wg)(),(0,a.j4)(P,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:e=>{q.getDataEdit(o.row.id,"setDataEdit"),U.edit=!0}},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"status"===s.name?((0,a.wg)(),(0,a.j4)(H,{key:2,color:"Active"==o.row.status?"green":"Disable"==o.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,a.wg)(),(0,a.j4)(P,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>e.selected=o.row.id,onClickCapture:t[23]||(t[23]=e=>U.deletePopup=!0)},null,8,["disabled","onClick"])):((0,a.wg)(),(0,a.j4)(B,{key:4,caption:"",class:(0,i.C_)(s.classes?s.classes:"")},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024),(0,a.Wm)(F,{side:""},{default:(0,a.w5)((()=>["status"===s.name?((0,a.wg)(),(0,a.j4)(H,{key:0,color:"Active"==o.row.status?"green":"Disable"==o.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"estatus"===s.name?((0,a.wg)(),(0,a.j4)(I,{key:1,outlined:"",modelValue:o.row.estatus_desc,"onUpdate:modelValue":[e=>o.row.estatus_desc=e,e=>{q.getDataEdit(o.row.id,"putDatoSelect"),this.formEdit.estatus_lote=o.row.estatus_desc.value}],options:Z.estatus},null,8,["modelValue","onUpdate:modelValue","options"])):((0,a.wg)(),(0,a.j4)(B,{key:2,caption:"",class:(0,i.C_)(s.classes?s.classes:"")},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])])])])])]),(0,a.Wm)(R,{modelValue:U.deletePopup,"onUpdate:modelValue":t[26]||(t[26]=e=>U.deletePopup=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{style:{width:"700px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[N])),_:1}),(0,a.Wm)(K,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(P,{flat:"",label:"Cancelar",color:"primary"},null,512),[[te]]),(0,a.wy)((0,a.Wm)(P,{flat:"",label:"Aceptar",color:"primary",onClick:t[25]||(t[25]=t=>q.deleteDato(e.selected))},null,512),[[te]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(X,{ref:"methods",onGetData:t[27]||(t[27]=e=>q.getData("/correlativo","setData","datos")),onSetData:q.setData,onResetLoading:q.resetLoading,onSetDataEdit:q.setDataEdit,onPutDatoSelect:q.putDatoSelect},null,8,["onSetData","onResetLoading","onSetDataEdit","onPutDatoSelect"]),(0,a.Wm)(Y,{ref:"desactiveCrud",onDesactivarCrud:q.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var Z=o(1959),q=o(8825),$=o(1496),z=o(8015);o(589);const I={components:{"desactive-crud":z.Z,methods:$.Z},name:"Bancos",data(){return{columns:[{name:"control_inicio",label:"Primer Correlativo",field:"control_inicio",align:"left",sortable:!0},{name:"control_final",label:"Ultimo Correlativo",field:"control_final",align:"left",sortable:!0},{name:"serie_doc",label:"Serie Lote",field:"serie_doc",align:"left",sortable:!0},{name:"ult_doc_referencia",label:"Ultimo Numero Asignado",field:"ult_doc_referencia",align:"left",type:"string"},{name:"estatus",label:"Estatus",align:"center",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{tipo:"",control_inicio:"",control_final:"",ult_doc_referencia:"",estatus_lote:"",serie_doc:"",cod_agencia:""},formEdit:{id:"",tipo:"",control_inicio:"",control_final:"",ult_doc_referencia:"",estatus_lote:"",serie_doc:"",cod_agencia:""},estatus:[{label:"CERRADO",value:"C"},{label:"ACTIVO",value:"A"},{label:"INACTIVO",value:"I"}],agencias:[],tipos:[],agenciasSelected:[],tiposSelected:[],datos:[],selectedTipo:{id:16,codigo:"FA",descripcion:"Facturación"},selectedAgencia:{id:1,nb_agencia:"VALENCIA, RCS EXPRESS"},disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:"",agencia:"1",tipo:"16",fuente:"CR"}}}},setup(){const e=(0,q.Z)();(0,Z.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,Z.iH)({rowsPerPage:10}),separator:(0,Z.iH)("vertical"),create:(0,Z.iH)(!1),edit:(0,Z.iH)(!1),loading:(0,Z.iH)(!1),activoExistente(){e.notify({message:"Solo puede haber un Activo por Agencia",color:"red"})},deletePopup:(0,Z.iH)(!1),filter:(0,Z.iH)("")}},mounted(){this.getData("/agencias","setData","agencias"),this.getData("/tipos","setData","tipos"),this.getData("/correlativo","setData","datos"),this.$refs.desactiveCrud.desactivarCrud("c_ccorrelativo","r_ccorrelativo","u_ccorrelativo","d_ccorrelativo","desactivarCrud")},methods:{filterArray(e,t,o,a,i,s){t(""!==e?()=>{const t=e.toUpperCase();for(var o=JSON.parse(JSON.stringify(this[i])),l=0,r=this[i].length;l<r;l++)if(this[i][l][s].indexOf(t)>-1||delete o[l],l==this[i].length-1){this[a]=o;break}}:()=>{this[a]=this[i]})},resetLoading(){this.loading=!1},reglasAllowNull1(e){if(console.log(e),e&&e.length>1)return"Deben ser Maximo 1 caracter"},reglasAllowNull10(e){if(console.log(e),e&&e.length>10)return"Deben ser Maximo 10 caracteres"},reglasNotNull10(e){return null===e||""===e?"Debes Escribir Algo":null!==e!==""&&e.length>10?"Deben ser Maximo 10 caracteres":void 0},reglasSegundoCorrelativo(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e<this.form.control_inicio)return"El Ultimo Correlativo debe ser Mayor al Primero";if(e.length>10)return"Deben ser Maximo 10 caracteres"}},reglasSegundoCorrelativoEdit(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e<this.formEdit.control_inicio)return"El Ultimo Correlativo debe ser Mayor al Primero";if(e.length>10)return"Deben ser Maximo 10 caracteres"}},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},desactivarCrud(e,t,o,a){1==t?(1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==a&&(this.disabledEdit=!1)):this.$router.push("/dashboard")},getData(e,t,o){this.$refs.methods.getData(e,t,o,this.axiosConfig),this.loading=!0},setData(e,t){this[t]=e,this.loading=!1},getDataEdit(e,t){this.$refs.methods.getDataEdit(`/correlativo/${e}`,`${t}`,"formEdit",this.axiosConfig)},setDataEdit(e,t){this[t].id=e.id,this[t].tipo=e.tipo,this[t].control_inicio=e.control_inicio,this[t].control_final=e.control_final,this[t].ult_doc_referencia=e.ult_doc_referencia,this[t].estatus_lote=e.estatus_desc,this[t].serie_doc=e.serie_doc,this[t].cod_agencia=e.cod_agencia},getDataSelect(e,t,o){this.$refs.methods.getData(e,t,o,this.axiosConfig),this.loading=!0},deleteDato(e){this.$refs.methods.deleteData(`/correlativo/${e}`,"getData",this.axiosConfig),this.loading=!0},createDato(){if("A"===this.form.estatus_lote.value)for(var e=0,t=this.datos.length;e<t;e++){if("A"===this.datos[e].estatus_lote&&this.form.id!==this.datos[e].id)return void this.activoExistente();if(e==this.datos.length-1)break}this.form.cod_agencia=this.selectedAgencia.id,this.form.tipo=this.selectedTipo.id,this.form.estatus_lote=this.form.estatus_lote.value,this.$refs.methods.createData("/correlativo",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putDato(){if("A"===this.formEdit.estatus_lote.value)for(var e=0,t=this.datos.length;e<t;e++){if("A"===this.datos[e].estatus_lote&&this.formEdit.id!==this.datos[e].id)return void this.activoExistente();if(e==this.datos.length-1)break}this.formEdit.estatus_lote=this.formEdit.estatus_lote.value,this.$refs.methods.putData(`/correlativo/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.loading=!0},putDatoSelect(e,t){if(this[t].id=e.id,this[t].tipo=e.tipo,this[t].control_inicio=e.control_inicio,this[t].control_final=e.control_final,this[t].ult_doc_referencia=e.ult_doc_referencia,this[t].serie_doc=e.serie_doc,this[t].cod_agencia=e.cod_agencia,console.log(this.formEdit),"A"===this.formEdit.estatus_lote)for(var o=0,a=this.datos.length;o<a;o++){if("A"===this.datos[o].estatus_lote&&this.formEdit.id!==this.datos[o].id)return this.activoExistente(),void this.getData("/correlativo","setData","datos");if(o==this.datos.length-1)break}this.$refs.methods.putData(`/correlativo/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.loading=!0},resetForm(){this.form.tipo="",this.form.control_inicio="",this.form.control_final="",this.form.ult_doc_referencia="",this.form.estatus_lote="",this.form.serie_doc="",this.form.cod_agencia="",this.create=null},resetFormEdit(){this.formEdit.tipo="",this.formEdit.control_inicio="",this.formEdit.control_final="",this.formEdit.ult_doc_referencia="",this.formEdit.estatus_lote="",this.formEdit.serie_doc="",this.formEdit.cod_agencia="",this.edit=null}}};var P=o(4260),T=o(4379),L=o(6778),Q=o(151),R=o(5589),j=o(5269),O=o(4842),B=o(4554),F=o(2448),H=o(8240),M=o(7352),G=o(6941),J=o(3884),K=o(7011),X=o(3414),Y=o(2035),ee=o(2350),te=o(7030),oe=o(9367),ae=o(677),ie=o(7518),se=o.n(ie);const le=(0,P.Z)(I,[["render",U]]),re=le;se()(I,"components",{QPage:T.Z,QDialog:L.Z,QCard:Q.Z,QCardSection:R.Z,QForm:j.Z,QInput:O.Z,QIcon:B.Z,QSelect:F.Z,QBtn:H.Z,QTable:M.Z,QInnerLoading:G.Z,QTd:J.Z,QList:K.Z,QItem:X.Z,QItemSection:Y.Z,QItemLabel:ee.Z,QChip:te.Z,QCardActions:oe.Z}),se()(I,"directives",{ClosePopup:ae.Z})}}]);