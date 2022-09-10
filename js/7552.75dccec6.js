"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[7552],{38015:(e,a,t)=>{function s(e,a,t,s,i,o){return null}t.d(a,{Z:()=>d});var i=t(80589),o=t(48825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,o.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,t,s,o){for(var r,n,l,d,u=i.Z.getItem("tokenTraducido"),c=0,m=u.usuario.roles.permisos.length;c<m;c++)if(u.usuario.roles.permisos[c].codigo===e&&(r=!0),u.usuario.roles.permisos[c].codigo===s&&(l=!0),u.usuario.roles.permisos[c].codigo===t&&(d=!0),u.usuario.roles.permisos[c].codigo===a&&(n=!0),c==u.usuario.roles.permisos.length.length-1)break;e=!0===r,s=!0===l,t=!0===d,a=!0===n,this.$emit(o,e,a,s,t)},desactivarOpciones(e){for(var a=i.Z.getItem("tokenTraducido"),t=0,s=this.permisos.length;t<s;t++){var o=0;for(s=a.usuario.roles.permisos.length;o<s;o++)if(a.usuario.roles.permisos[o].codigo==this.permisos[t].permisoName&&(this.permisos[t].permiso=!0),o==a.usuario.roles.permisos.length.length-1)break;if(t==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var n=t(74260);const l=(0,n.Z)(r,[["render",s]]),d=l},78904:(e,a,t)=>{function s(e,a,t,s,i,o){return null}t.d(a,{Z:()=>u});var i=t(80589),o=t(5474),r=t(48825);const n={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,s).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,s).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,a,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,a,s).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.put(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var l=t(74260);const d=(0,l.Z)(n,[["render",s]]),u=d},87552:(e,a,t)=>{t.r(a),t.d(a,{default:()=>re});var s=t(83673),i=t(62323);const o={class:"row"},r={class:"col-md-12 col-xs-12"},n={class:"col-md-5 col-xs-12"},l={class:"col-md-7 col-xs-12"},d={class:"col-md-12 col-xs-12"},u={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},c={class:"row"},m={class:"col-md-12 col-xs-12"},p={class:"col-md-5 col-xs-12"},g={class:"col-md-7 col-xs-12"},f={class:"col-md-12 col-xs-12"},h={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},b={class:"row q-pa-sm justify-center"},_={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},C={class:"row"},v=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,s._)("h4",{style:{"font-size":"26px"}},[(0,s._)("strong",null,"MANTENIMIENTO - CUENTAS BANCARIAS")])],-1),w={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},D=(0,s.Uk)(" Sin resultados "),S={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},y={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},x={class:"q-pa-md",style:{"margin-top":"20px"}},E={class:"q-gutter-y-md"},W={bordered:"",flat:"",class:"my-card row"},z=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function k(e,a,t,k,A,V){const Z=(0,s.up)("q-icon"),q=(0,s.up)("q-input"),I=(0,s.up)("q-select"),N=(0,s.up)("q-btn"),$=(0,s.up)("q-form"),U=(0,s.up)("q-card-section"),B=(0,s.up)("q-card"),Q=(0,s.up)("q-dialog"),R=(0,s.up)("q-item-section"),F=(0,s.up)("q-item"),T=(0,s.up)("q-inner-loading"),L=(0,s.up)("q-td"),j=(0,s.up)("q-item-label"),H=(0,s.up)("q-chip"),P=(0,s.up)("q-list"),O=(0,s.up)("q-table"),G=(0,s.up)("q-card-actions"),M=(0,s.up)("desactivate-crud"),K=(0,s.up)("methods"),Y=(0,s.up)("q-page"),J=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(Y,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{modelValue:k.form,"onUpdate:modelValue":a[7]||(a[7]=e=>k.form=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Wm)($,{onSubmit:a[6]||(a[6]=e=>V.createDataCuentas()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("div",r,[(0,s.Wm)(q,{outlined:"",modelValue:A.formCuentas.nro_cuenta,"onUpdate:modelValue":[a[0]||(a[0]=e=>A.formCuentas.nro_cuenta=e),a[1]||(a[1]=e=>A.formCuentas.nro_cuenta=A.formCuentas.nro_cuenta.toUpperCase())],label:"Numero de Cuenta",hint:"","lazy-rules":"",rules:[V.reglaInputCuenta]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"pin"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",n,[(0,s.Wm)(I,{outlined:"",modelValue:A.formCuentas.flag_activa,"onUpdate:modelValue":a[2]||(a[2]=e=>A.formCuentas.flag_activa=e),label:"Estatus",hint:"",class:"pcform",options:A.estatus,rules:[V.reglasSelect],"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"rule"})])),_:1},8,["modelValue","options","rules"])]),(0,s._)("div",l,[(0,s.Wm)(I,{outlined:"",modelValue:A.formCuentas.tipo_cuenta,"onUpdate:modelValue":a[3]||(a[3]=e=>A.formCuentas.tipo_cuenta=e),label:"Tipo de Cuenta",hint:"",rules:[V.reglasSelect],options:A.tipoDeCuenta,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"ballot"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",d,[(0,s.Wm)(q,{outlined:"",modelValue:A.formCuentas.firma_autorizada,"onUpdate:modelValue":[a[4]||(a[4]=e=>A.formCuentas.firma_autorizada=e),a[5]||(a[5]=e=>A.formCuentas.firma_autorizada=A.formCuentas.firma_autorizada.toUpperCase())],label:"Firma Autorizada",hint:"","lazy-rules":"",rules:[V.reglaInputFirma]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"border_color"})])),_:1},8,["modelValue","rules"])])]),(0,s._)("div",u,[(0,s.Wm)(N,{label:"Agregar Cuenta",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(N,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[J]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(Q,{modelValue:k.formEdit,"onUpdate:modelValue":a[15]||(a[15]=e=>k.formEdit=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Wm)($,{onSubmit:a[14]||(a[14]=e=>V.putDataCuentas())},{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s._)("div",m,[(0,s.Wm)(q,{outlined:"",modelValue:A.formEditCuentas.nro_cuenta,"onUpdate:modelValue":[a[8]||(a[8]=e=>A.formEditCuentas.nro_cuenta=e),a[9]||(a[9]=e=>A.formEditCuentas.nro_cuenta=A.formEditCuentas.nro_cuenta.toUpperCase())],label:"Numero de Cuenta",hint:"","lazy-rules":"",rules:[V.reglaInputCuenta]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"pin"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",p,[(0,s.Wm)(I,{outlined:"",modelValue:A.formEditCuentas.flag_activa,"onUpdate:modelValue":a[10]||(a[10]=e=>A.formEditCuentas.flag_activa=e),label:"Estatus",hint:"",rules:[V.reglasSelect],options:A.estatus,class:"pcform","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",g,[(0,s.Wm)(I,{outlined:"",modelValue:A.formEditCuentas.tipo_cuenta,"onUpdate:modelValue":a[11]||(a[11]=e=>A.formEditCuentas.tipo_cuenta=e),label:"Tipo de Cuenta",hint:"",rules:[V.reglasSelect],options:A.tipoDeCuenta,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"ballot"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",f,[(0,s.Wm)(q,{outlined:"",modelValue:A.formEditCuentas.firma_autorizada,"onUpdate:modelValue":[a[12]||(a[12]=e=>A.formEditCuentas.firma_autorizada=e),a[13]||(a[13]=e=>A.formEditCuentas.firma_autorizada=A.formEditCuentas.firma_autorizada.toUpperCase())],label:"Firma Autorizada",hint:"","lazy-rules":"",rules:[V.reglaInputFirma]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"border_color"})])),_:1},8,["modelValue","rules"])])]),(0,s._)("div",h,[(0,s.Wm)(N,{label:"Editar Cuenta",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(N,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[J]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",b,[(0,s._)("div",_,[(0,s._)("div",C,[v,(0,s._)("div",w,[(0,s.Wm)(I,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.bancosSelected,onFilter:a[16]||(a[16]=(e,a,t)=>V.filterArray(e,a,t,"bancosSelected","bancos","nb_banco")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_banco","option-value":"id",modelValue:A.selectedBanco,"onUpdate:modelValue":[a[17]||(a[17]=e=>A.selectedBanco=e),a[18]||(a[18]=e=>V.getDataCuentas("/cuentas","setDataCuentas","cuentas"))],outlined:"",standout:"",label:"Escoge un Banco"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(R,{class:"text-grey"},{default:(0,s.w5)((()=>[D])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",S,[(0,s.Wm)(q,{rounded:"",outlined:"",standout:"",modelValue:k.filter,"onUpdate:modelValue":a[19]||(a[19]=e=>k.filter=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",y,[(0,s.Wm)(N,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:a[20]||(a[20]=e=>k.form=!0),onClickCapture:a[21]||(a[21]=e=>V.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,s._)("div",x,[(0,s._)("div",E,[(0,s._)("div",W,[(0,s.Wm)(O,{rows:A.cuentas,"row-key":"id","binary-state-sort":"",columns:A.columnsCuentas,separator:k.separator,filter:k.filter,loading:k.loading,style:{width:"100%"},grid:e.$q.screen.xs,pagination:k.pagination,"onUpdate:pagination":a[24]||(a[24]=e=>k.pagination=e)},{loading:(0,s.w5)((()=>[(0,s.Wm)(T,{showing:"",color:"primary"})])),"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(L,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{V.getData(`/cuentas/${e.row.id}`,"setDataCuentasEdit","formEditCuentas"),k.formEdit=!0}},null,8,["disabled","onClick"]),(0,s.Wm)(N,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>A.selected=e.row.id,onClickCapture:a[22]||(a[22]=e=>k.cuentasDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(B,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(t=>((0,s.wg)(),(0,s.j4)(F,{key:t.name},{default:(0,s.w5)((()=>[(0,s.Wm)(R,null,{default:(0,s.w5)((()=>[(0,s.Wm)(j,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(R,{side:""},{default:(0,s.w5)((()=>["status"===t.name?((0,s.wg)(),(0,s.j4)(H,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,s.wg)(),(0,s.j4)(N,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{V.getData(`/cuentas/${e.row.id}`,"setDataCuentasEdit","formEditCuentas"),k.formEdit=!0}},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"status"===t.name?((0,s.wg)(),(0,s.j4)(H,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,s.wg)(),(0,s.j4)(N,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>A.selected=e.row.id,onClickCapture:a[23]||(a[23]=e=>k.cuentasDelete=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(j,{key:4,caption:"",class:(0,i.C_)(t.classes?t.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","loading","grid","pagination"])])])])])]),(0,s.Wm)(Q,{modelValue:k.cuentasDelete,"onUpdate:modelValue":a[26]||(a[26]=e=>k.cuentasDelete=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[z])),_:1}),(0,s.Wm)(G,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(N,{flat:"",label:"Cancelar",color:"primary"},null,512),[[J]]),(0,s.wy)((0,s.Wm)(N,{flat:"",label:"Aceptar",color:"primary",onClick:a[25]||(a[25]=e=>V.deleteData(A.selected))},null,512),[[J]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(M,{ref:"desactivateCrud",onDesactivarCrud:V.desactivarCrud},null,8,["onDesactivarCrud"]),(0,s.Wm)(K,{ref:"methods",onGetDataCuentas:a[27]||(a[27]=e=>V.getDataCuentas("/cuentas","setDataCuentas","cuentas")),onSetDataCuentas:V.setDataCuentas,onResetLoading:V.resetLoading,onSetDataCuentasEdit:V.setDataRolesEdit,onSetData:V.setData},null,8,["onSetDataCuentas","onResetLoading","onSetDataCuentasEdit","onSetData"])])),_:1})}var A=t(61959),V=t(5474),Z=t(48825),q=t(80589),I=t(78904),N=t(38015);const $={components:{"desactivate-crud":N.Z,methods:I.Z},name:"Cuentas",data(){return{columnsCuentas:[{name:"nro_cuenta",label:"Numero de Cuenta",field:"nro_cuenta",align:"left",sortable:!0,required:!0},{name:"tipo_desc",label:"Tipo de Cuenta",field:"tipo_desc",align:"left",sortable:!0,required:!0},{name:"activa_desc",label:"Estatus",field:"activa_desc",align:"left",sortable:!0,required:!0},{name:"firma_autorizada",label:"Firma Autorizada",field:"firma_autorizada",align:"left",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formCuentas:{nro_cuenta:"",flag_activa:"",tipo_cuenta:"",firma_autorizada:"",cod_banco:[]},formEditCuentas:{nro_cuenta:"",flag_activa:"",tipo_cuenta:"",firma_autorizada:"",id:"",cod_banco:[]},estatus:[{label:"ACTIVA",value:"A"},{label:"INACTIVA",value:"I"}],tipoDeCuenta:[{label:"AHORRO",value:"A"},{label:"CORRIENTE",value:"C"}],bancos:[],cuentas:[],bancosSelected:[],selected:[],selectedBanco:[],bancoRef:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,Z.Z)(),(0,A.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:"",banco:""}},pagination:(0,A.iH)({rowsPerPage:10}),separator:(0,A.iH)("vertical"),form:(0,A.iH)(!1),loading:(0,A.iH)(!1),formEdit:(0,A.iH)(!1),cuentasDelete:(0,A.iH)(!1),filter:(0,A.iH)("")}},mounted(){this.getDataCuentas("/bancos","setData","bancos"),this.$refs.desactivateCrud.desactivarCrud("c_cuentas","r_cuentas","u_cuentas","d_cuentas","desactivarCrud")},methods:{filterArray(e,a,t,s,i,o){a(""!==e?()=>{const a=e.toUpperCase();for(var t=[],r=0;r<=this[i].length-1;r++)if(this[i][r][o].indexOf(a)>-1&&t.push(this[i][r]),r==this[i].length-1){this[s]=t;break}}:()=>{this[s]=this[i]})},resetLoading(){this.loading=!1},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglaInputCuenta(e){if(""===e)return"Debes Escribir Algo";if(null===e)return"Debes Escribir Algo";if(null!==e){if(e.length>25)return"Deben ser máximo 25 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},reglaInputFirma(e){if(null!==e){if(e.length>50)return"Deben ser máximo 50 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},desactivarCrud(e,a,t,s){1==a?(1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==s&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,a,t){this.$refs.methods.getData(e,a,t,this.axiosConfig)},getDataCuentas(e,a,t){this.$refs.methods.getData(e,a,t,{headers:{Authorization:`Bearer ${q.Z.getItem("token")}`,banco:this.selectedBanco.id}}),this.loading=!0},setData(e,a){this[a]=e,this.getDataIniciar(),this.loading=!1},setDataCuentas(e,a){this[a]=e,this.loading=!1},setDataRolesEdit(e,a){this[a].id=e.id,this[a].nro_cuenta=e.nro_cuenta,this[a].flag_activa=e.activa_desc,this[a].tipo_cuenta=e.tipo_desc,this[a].firma_autorizada=e.firma_autorizada,this[a].cod_banco=e.cod_banco,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/cuentas/${e}`,"getDataCuentas",this.axiosConfig),this.loading=!0},createDataCuentas(){this.formCuentas.cod_banco=this.selectedBanco.id,this.formCuentas.flag_activa=this.formCuentas.flag_activa.value,this.formCuentas.tipo_cuenta=this.formCuentas.tipo_cuenta.value,this.$refs.methods.createData("/cuentas",this.formCuentas,"getDataCuentas",this.axiosConfig),this.resetForm(),this.loading=!0},putDataCuentas(){this.formEditCuentas.flag_activa=this.formEditCuentas.flag_activa.value,this.formEditCuentas.tipo_cuenta=this.formEditCuentas.tipo_cuenta.value,this.$refs.methods.putData(`/cuentas/${this.formEditCuentas.id}`,this.formEditCuentas,"getDataCuentas",this.axiosConfig),this.resetFormEdit(),this.loading=!0},resetForm(){this.formCuentas.nro_cuenta="",this.formCuentas.flag_activa="",this.formCuentas.tipo_cuenta="",this.formCuentas.firma_autorizada="",this.form=!1},resetFormEdit(){this.formEditCuentas.nro_cuenta="",this.formEditCuentas.flag_activa="",this.formEditCuentas.tipo_cuenta="",this.formEditCuentas.firma_autorizada="",this.formEditCuentas.cod_banco=null,this.formEdit=!1},getDataIniciar(){this.bancoRef=this.bancos[0].id,this.selectedBanco=this.bancos[0],V.api.get("/cuentas",{headers:{Authorization:`Bearer ${q.Z.getItem("token")}`,banco:this.bancoRef}}).then((e=>{this.cuentas=e.data}))}}};var U=t(74260),B=t(24379),Q=t(46778),R=t(10151),F=t(25589),T=t(68689),L=t(34842),j=t(24554),H=t(72448),P=t(48240),O=t(83414),G=t(52035),M=t(17352),K=t(66941),Y=t(83884),J=t(27011),X=t(2350),ee=t(67030),ae=t(99367),te=t(60677),se=t(7518),ie=t.n(se);const oe=(0,U.Z)($,[["render",k]]),re=oe;ie()($,"components",{QPage:B.Z,QDialog:Q.Z,QCard:R.Z,QCardSection:F.Z,QForm:T.Z,QInput:L.Z,QIcon:j.Z,QSelect:H.Z,QBtn:P.Z,QItem:O.Z,QItemSection:G.Z,QTable:M.Z,QInnerLoading:K.Z,QTd:Y.Z,QList:J.Z,QItemLabel:X.Z,QChip:ee.Z,QCardActions:ae.Z}),ie()($,"directives",{ClosePopup:te.Z})}}]);