"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[1837],{8015:(e,a,t)=>{function s(e,a,t,s,i,o){return null}t.d(a,{Z:()=>d});var i=t(589),o=t(8825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,o.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,t,s,o){for(var r,n,l,d,u=i.Z.getItem("tokenTraducido"),c=0,m=u.usuario.roles.permisos.length;c<m;c++)if(u.usuario.roles.permisos[c].codigo===e&&(r=!0),u.usuario.roles.permisos[c].codigo===s&&(l=!0),u.usuario.roles.permisos[c].codigo===t&&(d=!0),u.usuario.roles.permisos[c].codigo===a&&(n=!0),c==u.usuario.roles.permisos.length.length-1)break;e=!0===r,s=!0===l,t=!0===d,a=!0===n,this.$emit(o,e,a,s,t)},desactivarOpciones(e){for(var a=i.Z.getItem("tokenTraducido"),t=0,s=this.permisos.length;t<s;t++){var o=0;for(s=a.usuario.roles.permisos.length;o<s;o++)if(a.usuario.roles.permisos[o].codigo==this.permisos[t].permisoName&&(this.permisos[t].permiso=!0),o==a.usuario.roles.permisos.length.length-1)break;if(t==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var n=t(4260);const l=(0,n.Z)(r,[["render",s]]),d=l},9841:(e,a,t)=>{function s(e,a,t,s,i,o){return null}t.d(a,{Z:()=>u});var i=t(589),o=t(5474),r=t(8825);const n={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,s).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,s).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,a,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,a,s).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.put(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))}}};var l=t(4260);const d=(0,l.Z)(n,[["render",s]]),u=d},1837:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ie});var s=t(3673),i=t(2323);const o={class:"row"},r={class:"col-md-12 col-xs-12"},n={class:"col-md-5 col-xs-12"},l={class:"col-md-7 col-xs-12"},d={class:"col-md-12 col-xs-12"},u={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},c={class:"row"},m={class:"col-md-12 col-xs-12"},p={class:"col-md-5 col-xs-12"},g={class:"col-md-7 col-xs-12"},f={class:"col-md-12 col-xs-12"},h={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},b={class:"row q-pa-sm justify-center"},_={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},C={class:"row"},v=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,s._)("h4",{style:{"font-size":"26px"}},[(0,s._)("strong",null,"MANTENIMIENTO - CUENTAS BANCARIAS")])],-1),w={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},S={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},D={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},y={class:"q-pa-md",style:{"margin-top":"20px"}},x={class:"q-gutter-y-md"},E={bordered:"",flat:"",class:"my-card row"},W=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function z(e,a,t,z,k,A){const V=(0,s.up)("q-icon"),Z=(0,s.up)("q-input"),q=(0,s.up)("q-select"),N=(0,s.up)("q-btn"),I=(0,s.up)("q-form"),$=(0,s.up)("q-card-section"),U=(0,s.up)("q-card"),B=(0,s.up)("q-dialog"),Q=(0,s.up)("q-inner-loading"),R=(0,s.up)("q-td"),F=(0,s.up)("q-item-label"),T=(0,s.up)("q-item-section"),L=(0,s.up)("q-chip"),j=(0,s.up)("q-item"),H=(0,s.up)("q-list"),O=(0,s.up)("q-table"),P=(0,s.up)("q-card-actions"),G=(0,s.up)("desactivate-crud"),J=(0,s.up)("methods"),M=(0,s.up)("q-page"),K=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(M,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{modelValue:z.form,"onUpdate:modelValue":a[7]||(a[7]=e=>z.form=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,s.w5)((()=>[(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(I,{onSubmit:a[6]||(a[6]=e=>A.createDataCuentas()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("div",r,[(0,s.Wm)(Z,{outlined:"",modelValue:k.formCuentas.nro_cuenta,"onUpdate:modelValue":[a[0]||(a[0]=e=>k.formCuentas.nro_cuenta=e),a[1]||(a[1]=e=>k.formCuentas.nro_cuenta=k.formCuentas.nro_cuenta.toUpperCase())],label:"Numero de Cuenta",hint:"","lazy-rules":"",rules:[A.reglaInputCuenta]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"pin"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",n,[(0,s.Wm)(q,{outlined:"",modelValue:k.formCuentas.flag_activa,"onUpdate:modelValue":a[2]||(a[2]=e=>k.formCuentas.flag_activa=e),label:"Estatus",hint:"",class:"pcform",options:k.estatus,rules:[A.reglasSelect],"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"rule"})])),_:1},8,["modelValue","options","rules"])]),(0,s._)("div",l,[(0,s.Wm)(q,{outlined:"",modelValue:k.formCuentas.tipo_cuenta,"onUpdate:modelValue":a[3]||(a[3]=e=>k.formCuentas.tipo_cuenta=e),label:"Tipo de Cuenta",hint:"",rules:[A.reglasSelect],options:k.tipoDeCuenta,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"ballot"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",d,[(0,s.Wm)(Z,{outlined:"",modelValue:k.formCuentas.firma_autorizada,"onUpdate:modelValue":[a[4]||(a[4]=e=>k.formCuentas.firma_autorizada=e),a[5]||(a[5]=e=>k.formCuentas.firma_autorizada=k.formCuentas.firma_autorizada.toUpperCase())],label:"Firma Autorizada",hint:"","lazy-rules":"",rules:[A.reglaInputFirma]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"border_color"})])),_:1},8,["modelValue","rules"])])]),(0,s._)("div",u,[(0,s.Wm)(N,{label:"Agregar Cuenta",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(N,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[K]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(B,{modelValue:z.formEdit,"onUpdate:modelValue":a[15]||(a[15]=e=>z.formEdit=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,s.w5)((()=>[(0,s.Wm)($,null,{default:(0,s.w5)((()=>[(0,s.Wm)(I,{onSubmit:a[14]||(a[14]=e=>A.putDataCuentas())},{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s._)("div",m,[(0,s.Wm)(Z,{outlined:"",modelValue:k.formEditCuentas.nro_cuenta,"onUpdate:modelValue":[a[8]||(a[8]=e=>k.formEditCuentas.nro_cuenta=e),a[9]||(a[9]=e=>k.formEditCuentas.nro_cuenta=k.formEditCuentas.nro_cuenta.toUpperCase())],label:"Numero de Cuenta",hint:"","lazy-rules":"",rules:[A.reglaInputCuenta]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"pin"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",p,[(0,s.Wm)(q,{outlined:"",modelValue:k.formEditCuentas.flag_activa,"onUpdate:modelValue":a[10]||(a[10]=e=>k.formEditCuentas.flag_activa=e),label:"Estatus",hint:"",rules:[A.reglasSelect],options:k.estatus,class:"pcform","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",g,[(0,s.Wm)(q,{outlined:"",modelValue:k.formEditCuentas.tipo_cuenta,"onUpdate:modelValue":a[11]||(a[11]=e=>k.formEditCuentas.tipo_cuenta=e),label:"Tipo de Cuenta",hint:"",rules:[A.reglasSelect],options:k.tipoDeCuenta,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"ballot"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",f,[(0,s.Wm)(Z,{outlined:"",modelValue:k.formEditCuentas.firma_autorizada,"onUpdate:modelValue":[a[12]||(a[12]=e=>k.formEditCuentas.firma_autorizada=e),a[13]||(a[13]=e=>k.formEditCuentas.firma_autorizada=k.formEditCuentas.firma_autorizada.toUpperCase())],label:"Firma Autorizada",hint:"","lazy-rules":"",rules:[A.reglaInputFirma]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"border_color"})])),_:1},8,["modelValue","rules"])])]),(0,s._)("div",h,[(0,s.Wm)(N,{label:"Editar Cuenta",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(N,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[K]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",b,[(0,s._)("div",_,[(0,s._)("div",C,[v,(0,s._)("div",w,[(0,s.Wm)(q,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:k.bancosSelected,onFilter:a[16]||(a[16]=(e,a,t)=>A.filterArray(e,a,t,"bancosSelected","bancos","nb_banco")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_banco","option-value":"id",modelValue:k.selectedBanco,"onUpdate:modelValue":[a[17]||(a[17]=e=>k.selectedBanco=e),a[18]||(a[18]=e=>{this.axiosConfig.headers.banco=this.selectedBanco.id,A.getData("/cuentas","setDataCuentas","cuentas")})],outlined:"",standout:"",label:"Escoge un Banco"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",S,[(0,s.Wm)(Z,{rounded:"",outlined:"",standout:"",modelValue:z.filter,"onUpdate:modelValue":a[19]||(a[19]=e=>z.filter=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(V,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",D,[(0,s.Wm)(N,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:a[20]||(a[20]=e=>z.form=!0),onClickCapture:a[21]||(a[21]=e=>A.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,s._)("div",y,[(0,s._)("div",x,[(0,s._)("div",E,[(0,s.Wm)(O,{rows:k.cuentas,"row-key":"id",columns:k.columnsCuentas,separator:z.separator,class:"my-sticky-column-table",filter:z.filter,loading:z.loading,style:{width:"100%"},grid:e.$q.screen.xs,pagination:z.pagination,"onUpdate:pagination":a[24]||(a[24]=e=>z.pagination=e)},{loading:(0,s.w5)((()=>[(0,s.Wm)(Q,{showing:"",color:"primary"})])),"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(R,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{A.getData(`/cuentas/${e.row.id}`,"setDataCuentasEdit","formEditCuentas"),z.formEdit=!0}},null,8,["disabled","onClick"]),(0,s.Wm)(N,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>k.selected=e.row.id,onClickCapture:a[22]||(a[22]=e=>z.cuentasDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(U,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(t=>((0,s.wg)(),(0,s.j4)(j,{key:t.name},{default:(0,s.w5)((()=>[(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(T,{side:""},{default:(0,s.w5)((()=>["status"===t.name?((0,s.wg)(),(0,s.j4)(L,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,s.wg)(),(0,s.j4)(N,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{A.getData(`/cuentas/${e.row.id}`,"setDataCuentasEdit","formEditCuentas"),z.formEdit=!0}},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"status"===t.name?((0,s.wg)(),(0,s.j4)(L,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,s.wg)(),(0,s.j4)(N,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>k.selected=e.row.id,onClickCapture:a[23]||(a[23]=e=>z.cuentasDelete=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(F,{key:4,caption:"",class:(0,i.C_)(t.classes?t.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","loading","grid","pagination"])])])])])]),(0,s.Wm)(B,{modelValue:z.cuentasDelete,"onUpdate:modelValue":a[26]||(a[26]=e=>z.cuentasDelete=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)($,null,{default:(0,s.w5)((()=>[W])),_:1}),(0,s.Wm)(P,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(N,{flat:"",label:"Cancelar",color:"primary"},null,512),[[K]]),(0,s.wy)((0,s.Wm)(N,{flat:"",label:"Aceptar",color:"primary",onClick:a[25]||(a[25]=e=>A.deleteData(k.selected))},null,512),[[K]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(G,{ref:"desactivateCrud",onDesactivarCrud:A.desactivarCrud},null,8,["onDesactivarCrud"]),(0,s.Wm)(J,{ref:"methods",onGetData:a[27]||(a[27]=e=>{this.axiosConfig.headers.banco=this.selectedBanco.id,A.getData("/cuentas","setDataCuentas","cuentas")}),onSetDataCuentas:A.setDataCuentas,onResetLoading:A.resetLoading,onSetDataCuentasEdit:A.setDataRolesEdit,onSetData:A.setData},null,8,["onSetDataCuentas","onResetLoading","onSetDataCuentasEdit","onSetData"])])),_:1})}var k=t(1959),A=t(5474),V=t(8825),Z=(t(589),t(9841)),q=t(8015);const N={components:{"desactivate-crud":q.Z,methods:Z.Z},name:"Cuentas",data(){return{columnsCuentas:[{name:"nro_cuenta",label:"Numero de Cuenta",field:"nro_cuenta",align:"left",sortable:!0},{name:"tipo_desc",label:"Tipo de Cuenta",field:"tipo_desc",align:"left",sortable:!0},{name:"activa_desc",label:"Estatus",field:"activa_desc",align:"left",sortable:!0},{name:"firma_autorizada",label:"Firma Autorizada",field:"firma_autorizada",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formCuentas:{nro_cuenta:"",flag_activa:"",tipo_cuenta:"",firma_autorizada:"",cod_banco:[]},formEditCuentas:{nro_cuenta:"",flag_activa:"",tipo_cuenta:"",firma_autorizada:"",id:"",cod_banco:[]},estatus:[{label:"ACTIVA",value:"A"},{label:"INACTIVA",value:"I"}],tipoDeCuenta:[{label:"AHORRO",value:"A"},{label:"CORRIENTE",value:"C"}],bancos:[],cuentas:[],bancosSelected:[],selected:[],selectedBanco:[],bancoRef:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,V.Z)(),(0,k.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:"",banco:""}},pagination:(0,k.iH)({rowsPerPage:10}),separator:(0,k.iH)("vertical"),form:(0,k.iH)(!1),loading:(0,k.iH)(!1),formEdit:(0,k.iH)(!1),cuentasDelete:(0,k.iH)(!1),filter:(0,k.iH)("")}},mounted(){this.getData("/bancos","setData","bancos"),this.$refs.desactivateCrud.desactivarCrud("c_cuentas","r_cuentas","u_cuentas","d_cuentas","desactivarCrud")},methods:{filterArray(e,a,t,s,i,o){a(""!==e?()=>{const a=e.toUpperCase();for(var t=JSON.parse(JSON.stringify(this[i])),r=0,n=this[i].length;r<n;r++)if(this[i][r][o].indexOf(a)>-1||delete t[r],r==this[i].length-1){this[s]=t;break}}:()=>{this[s]=this[i]})},resetLoading(){this.loading=!1},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglaInputCuenta(e){if(""===e)return"Debes Escribir Algo";if(null===e)return"Debes Escribir Algo";if(null!==e){if(e.length>25)return"Deben ser máximo 25 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},reglaInputFirma(e){if(null!==e){if(e.length>50)return"Deben ser máximo 50 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},desactivarCrud(e,a,t,s){1==a?(1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==s&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,a,t){this.$refs.methods.getData(e,a,t,this.axiosConfig),this.loading=!0},setData(e,a){this[a]=e,this.getDataIniciar(),this.loading=!1},setDataCuentas(e,a){this[a]=e,this.loading=!1},setDataRolesEdit(e,a){this[a].id=e.id,this[a].nro_cuenta=e.nro_cuenta,this[a].flag_activa=e.activa_desc,this[a].tipo_cuenta=e.tipo_desc,this[a].firma_autorizada=e.firma_autorizada,this[a].cod_banco=e.cod_banco,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/cuentas/${e}`,"getData",this.axiosConfig),this.loading=!0},createDataCuentas(){this.formCuentas.cod_banco=this.selectedBanco.id,this.formCuentas.flag_activa=this.formCuentas.flag_activa.value,this.formCuentas.tipo_cuenta=this.formCuentas.tipo_cuenta.value,this.$refs.methods.createData("/cuentas",this.formCuentas,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putDataCuentas(){this.formEditCuentas.flag_activa=this.formEditCuentas.flag_activa.value,this.formEditCuentas.tipo_cuenta=this.formEditCuentas.tipo_cuenta.value,this.$refs.methods.putData(`/cuentas/${this.formEditCuentas.id}`,this.formEditCuentas,"getData",this.axiosConfig),this.resetFormEdit(),this.loading=!0},resetForm(){this.formCuentas.nro_cuenta="",this.formCuentas.flag_activa="",this.formCuentas.tipo_cuenta="",this.formCuentas.firma_autorizada="",this.form=!1},resetFormEdit(){this.formEditCuentas.nro_cuenta="",this.formEditCuentas.flag_activa="",this.formEditCuentas.tipo_cuenta="",this.formEditCuentas.firma_autorizada="",this.formEditCuentas.cod_banco=null,this.formEdit=!1},getDataIniciar(){this.bancoRef=this.bancos[0].id,this.selectedBanco=this.bancos[0],this.axiosConfig.headers.banco=this.bancoRef,A.api.get("/cuentas",this.axiosConfig).then((e=>{this.cuentas=e.data}))}}};var I=t(4260),$=t(4379),U=t(6778),B=t(151),Q=t(5589),R=t(5269),F=t(4842),T=t(4554),L=t(2448),j=t(8240),H=t(7352),O=t(6941),P=t(3884),G=t(7011),J=t(3414),M=t(2035),K=t(2350),Y=t(7030),X=t(9367),ee=t(677),ae=t(7518),te=t.n(ae);const se=(0,I.Z)(N,[["render",z]]),ie=se;te()(N,"components",{QPage:$.Z,QDialog:U.Z,QCard:B.Z,QCardSection:Q.Z,QForm:R.Z,QInput:F.Z,QIcon:T.Z,QSelect:L.Z,QBtn:j.Z,QTable:H.Z,QInnerLoading:O.Z,QTd:P.Z,QList:G.Z,QItem:J.Z,QItemSection:M.Z,QItemLabel:K.Z,QChip:Y.Z,QCardActions:X.Z}),te()(N,"directives",{ClosePopup:ee.Z})}}]);