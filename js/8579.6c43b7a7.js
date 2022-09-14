"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[8579],{38015:(e,a,t)=>{function o(e,a,t,o,i,s){return null}t.d(a,{Z:()=>d});var i=t(80589),s=t(48825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,s.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,t,o,s){for(var r,n,l,d,c=i.Z.getItem("tokenTraducido"),m=0,p=c.usuario.roles.permisos.length;m<p;m++)if(c.usuario.roles.permisos[m].codigo===e&&(r=!0),c.usuario.roles.permisos[m].codigo===o&&(l=!0),c.usuario.roles.permisos[m].codigo===t&&(d=!0),c.usuario.roles.permisos[m].codigo===a&&(n=!0),m==c.usuario.roles.permisos.length.length-1)break;e=!0===r,o=!0===l,t=!0===d,a=!0===n,this.$emit(s,e,a,o,t)},desactivarOpciones(e){for(var a=i.Z.getItem("tokenTraducido"),t=0,o=this.permisos.length;t<o;t++){var s=0;for(o=a.usuario.roles.permisos.length;s<o;s++)if(a.usuario.roles.permisos[s].codigo==this.permisos[t].permisoName&&(this.permisos[t].permiso=!0),s==a.usuario.roles.permisos.length.length-1)break;if(t==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var n=t(74260);const l=(0,n.Z)(r,[["render",o]]),d=l},55325:(e,a,t)=>{function o(e,a,t,o,i,s){return null}t.d(a,{Z:()=>c});var i=t(80589),s=t(5474),r=t(48825);const n={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,o){void 0==o?o={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,o).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,a,t,o){void 0==o?o={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,o).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,a,t){void 0==t?t={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,t,o){void 0==o?o={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,a,o).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,t,o){void 0==o?o={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,a,o).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,a,t,o){void 0==o?o={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.put(e,a,o).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var l=t(74260);const d=(0,l.Z)(n,[["render",o]]),c=d},73556:(e,a,t)=>{function o(e,a,t,o,i,s){return null}t.d(a,{Z:()=>d});var i=t(61959),s=t(48825);const r={name:"rules",setup(){const e=(0,i.iH)(!1);(0,s.Z)();return{showSimulatedReturnData:e}},methods:{isReq(e,a){var t=!0;return null!=e&&""!=e.trim()||(t=a),t},isReqSelect(e,a){var t=!0;return null!=e&&e!=[]&&""!=e||(t=a),t},isMax(e,a,t){console.log(e);var o=!0;return""!==e&&null!==e&&e.length>a&&(o=t),o},isMin(e,a,t){var o=!0;return""!==e&&null!==e&&e.length<a?t:o}}};var n=t(74260);const l=(0,n.Z)(r,[["render",o]]),d=l},48579:(e,a,t)=>{t.r(a),t.d(a,{default:()=>K});var o=t(83673),i=t(62323);const s={class:"row"},r={class:"col-md-5 col-xs-12"},n={class:"col-md-7 col-xs-12"},l={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},d={class:"row justify-center col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},c={class:"q-pa-md row col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},m=(0,o._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 text-secondary movilTitle",style:{"align-self":"center","text-align":"center","font-size":"20px"}},[(0,o._)("p",null,[(0,o._)("strong",null,"MANTENIMIENTO - ZONAS POR AGENCIA")])],-1),p={class:"col-md-5 col-xl-5 col-lg-5 col-xs-12 col-sm-6 marginHeader marginHeaderMobile",style:{"align-self":"center","text-align":"center"}},u=(0,o.Uk)(" Sin resultados "),g={class:"col-md-5 col-xl-5 col-lg-5 col-xs-12 col-sm-6 marginHeaderFilter",style:{"align-self":"center","text-align":"center"}},h={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},f={class:"q-gutter-y-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 q-pa-md"},b=(0,o._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function _(e,a,t,_,v,w){const D=(0,o.up)("q-icon"),S=(0,o.up)("q-input"),C=(0,o.up)("q-select"),Z=(0,o.up)("q-btn"),z=(0,o.up)("q-form"),x=(0,o.up)("q-card-section"),y=(0,o.up)("q-card"),k=(0,o.up)("q-dialog"),A=(0,o.up)("q-item-section"),$=(0,o.up)("q-item"),q=(0,o.up)("q-inner-loading"),W=(0,o.up)("q-td"),E=(0,o.up)("q-item-label"),N=(0,o.up)("q-chip"),I=(0,o.up)("q-list"),R=(0,o.up)("q-table"),V=(0,o.up)("q-card-actions"),B=(0,o.up)("desactivate-crud"),U=(0,o.up)("methods"),Q=(0,o.up)("rules-vue"),T=(0,o.up)("q-page"),L=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(T,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{modelValue:_.zonasDialog,"onUpdate:modelValue":a[4]||(a[4]=e=>_.zonasDialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[(0,o.Wm)(z,{onSubmit:a[3]||(a[3]=e=>w.sendData()),class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o._)("div",s,[(0,o._)("div",r,[(0,o.Wm)(S,{outlined:"",modelValue:v.form.nb_zona,"onUpdate:modelValue":[a[0]||(a[0]=e=>v.form.nb_zona=e),a[1]||(a[1]=e=>v.form.nb_zona=v.form.nb_zona.toUpperCase())],label:"Nombre de la Zona",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,250,"Maximo 250 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracterers")||""]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(D,{name:"drive_file_rename_outline"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",n,[(0,o.Wm)(C,{outlined:"",modelValue:v.form.tipo_zona,"onUpdate:modelValue":a[2]||(a[2]=e=>v.form.tipo_zona=e),label:"Tipo de Zona",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],options:v.tipoDeZona,"lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(D,{name:"domain"})])),_:1},8,["modelValue","rules","options"])])]),(0,o._)("div",l,[(0,o.Wm)(Z,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(Z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[L]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",d,[(0,o._)("div",c,[m,(0,o._)("div",p,[(0,o.Wm)(C,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:v.agenciasSelected,onFilter:a[5]||(a[5]=(e,a,t)=>w.filterArray(e,a,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:v.selectedAgencia,"onUpdate:modelValue":[a[6]||(a[6]=e=>v.selectedAgencia=e),a[7]||(a[7]=e=>w.getDataZonas("/zonas","setData","zonas"))],outlined:"",standout:"",label:"Escoge una Agencia"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)($,null,{default:(0,o.w5)((()=>[(0,o.Wm)(A,{class:"text-grey"},{default:(0,o.w5)((()=>[u])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(D,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",g,[(0,o.Wm)(S,{rounded:"",outlined:"",standout:"",modelValue:_.filterRoles,"onUpdate:modelValue":a[8]||(a[8]=e=>_.filterRoles=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(D,{name:"search"})])),_:1},8,["modelValue"])]),(0,o._)("div",h,[(0,o.Wm)(Z,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:a[9]||(a[9]=e=>_.zonasDialog=!0),onClickCapture:a[10]||(a[10]=e=>w.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,o._)("div",f,[(0,o.Wm)(R,{rows:v.zonas,"binary-state-sort":"",loading:_.loading,"row-key":"id",columns:v.columnsZonas,separator:_.separator,filter:_.filterRoles,style:{width:"100%"},grid:e.$q.screen.xs,pagination:_.pagination,"onUpdate:pagination":a[13]||(a[13]=e=>_.pagination=e)},{loading:(0,o.w5)((()=>[(0,o.Wm)(q,{showing:"",color:"primary"})])),"body-cell-action":(0,o.w5)((e=>[(0,o.Wm)(W,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{w.getData(`/Zonas/${e.row.id}`,"setDataEdit","form"),_.zonasDialog=!0}},null,8,["disabled","onClick"]),(0,o.Wm)(Z,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>v.selected=e.row.id,onClickCapture:a[11]||(a[11]=e=>_.deleteDialog=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,o.w5)((e=>[(0,o._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,o.Wm)(y,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{dense:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(t=>((0,o.wg)(),(0,o.j4)($,{key:t.name},{default:(0,o.w5)((()=>[(0,o.Wm)(A,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(A,{side:""},{default:(0,o.w5)((()=>["status"===t.name?((0,o.wg)(),(0,o.j4)(N,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,o.wg)(),(0,o.j4)(Z,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{w.getData(`/zonas/${e.row.id}`,"setDataEdit","form"),_.zonasDialog=!0}},null,8,["disabled","onClick"])):(0,o.kq)("",!0),"status"===t.name?((0,o.wg)(),(0,o.j4)(N,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,o.wg)(),(0,o.j4)(Z,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>v.selected=e.row.id,onClickCapture:a[12]||(a[12]=e=>_.deleteDialog=!0)},null,8,["disabled","onClick"])):((0,o.wg)(),(0,o.j4)(E,{key:4,caption:"",class:(0,i.C_)(t.classes?t.classes:"")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])]),(0,o.Wm)(k,{modelValue:_.deleteDialog,"onUpdate:modelValue":a[15]||(a[15]=e=>_.deleteDialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{style:{width:"700px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[b])),_:1}),(0,o.Wm)(V,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(Z,{flat:"",label:"Cancelar",color:"primary"},null,512),[[L]]),(0,o.wy)((0,o.Wm)(Z,{flat:"",label:"Aceptar",color:"primary",onClick:a[14]||(a[14]=e=>w.deleteData(v.selected))},null,512),[[L]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(B,{ref:"desactiveCrud",onDesactivarCrud:w.desactivarCrud},null,8,["onDesactivarCrud"]),(0,o.Wm)(U,{ref:"methods",onGetDataZonas:a[16]||(a[16]=e=>w.getDataZonas("/zonas","setData","zonas")),onSetData:w.setData,onResetLoading:w.resetLoading,onSetDataEdit:w.setDataEdit,onSetDataIniciar:w.setDataIniciar},null,8,["onSetData","onResetLoading","onSetDataEdit","onSetDataIniciar"]),(0,o.Wm)(Q,{ref:"rulesVue"},null,512)])),_:1})}var v=t(61959),w=t(5474),D=t(48825),S=t(80589),C=t(73556),Z=t(55325),z=t(38015);const x={components:{"desactivate-crud":z.Z,methods:Z.Z,rulesVue:C.Z},name:"Zonas",data(){return{columnsZonas:[{name:"nb_zona",label:"Nombre de la Zona",field:"nb_zona",align:"left",sortable:!0,required:!0},{name:"tipo_desc",label:"Tipo de Zona",field:"tipo_desc",align:"left",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nb_zona:"",tipo_zona:"",cod_agencia:[]},tipoDeZona:[{label:"URBANA",value:"U"},{label:"EXTRA URBANA",value:"E"}],agencias:[],zonas:[],selected:[],agenciasSelected:[],selectedAgencia:[],agenciaRef:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){const e=(0,D.Z)();(0,v.iH)({sortBy:"desc",descending:!1,page:1,control:0,rowsPerPage:9});return{pagination:(0,v.iH)({rowsPerPage:9}),loading:(0,v.iH)(!1),separator:(0,v.iH)("vertical"),zonasDialog:(0,v.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},deleteDialog:(0,v.iH)(!1),filterRoles:(0,v.iH)("")}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Zonas por Agencia",""),this.getData("/agencias","setDataIniciar","agencias"),this.$refs.desactiveCrud.desactivarCrud("c_zonas","r_zonas","u_zonas","d_zonas","desactivarCrud")},methods:{filterArray(e,a,t,o,i,s){a(""!==e?()=>{const a=e.toUpperCase();for(var t=[],r=0;r<=this[i].length-1;r++)if(this[i][r][s].indexOf(a)>-1&&t.push(this[i][r]),r==this[i].length-1){this[o]=t;break}}:()=>{this[o]=this[i]})},resetLoading(){this.loading=!1},desactivarCrud(e,a,t,o){console.log(e),console.log(a),console.log(t),console.log(o),1==a?(1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==o&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,a,t){this.$refs.methods.getData(e,a,t)},getDataZonas(e,a,t){this.$refs.methods.getData(e,a,t,{headers:{agencia:this.selectedAgencia.id}}),this.loading=!0},setDataIniciar(e,a){this[a]=e.data,this.agenciaRef=this.agencias[0].id,this.selectedAgencia=this.agencias[0],w.api.get("/zonas",{headers:{Authorization:`Bearer ${S.Z.getItem("token")}`,agencia:this.agenciaRef}}).then((e=>{this.zonas=e.data})),this.loading=!1},setData(e,a){this[a]=e,this.loading=!1},setDataEdit(e,a){this[a].id=e.id,this[a].nb_zona=e.nb_zona,this[a].tipo_zona=e.tipo_desc,this[a].cod_agencia=this.selectedAgencia,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/zonas/${e}`,"getDataZonas"),this.loading=!0},sendData(){this.form.cod_agencia=this.selectedAgencia.id,this.form.tipo_zona=this.form.tipo_zona.value,this.form.id?(this.$refs.methods.putData(`/zonas/${this.form.id}`,this.form,"getDataZonas"),this.resetForm(),this.loading=!0):(this.$refs.methods.createData("/zonas",this.form,"getDataZonas"),this.resetForm(),this.loading=!0)},resetForm(){delete this.form.id,this.form.nb_zona="",this.form.tipo_zona="",this.form.cod_agencia="",this.zonasDialog=!1}}};var y=t(74260),k=t(24379),A=t(46778),$=t(10151),q=t(25589),W=t(68689),E=t(34842),N=t(24554),I=t(72448),R=t(48240),V=t(83414),B=t(52035),U=t(17352),Q=t(66941),T=t(83884),L=t(27011),H=t(2350),F=t(67030),P=t(99367),j=t(60677),M=t(7518),O=t.n(M);const G=(0,y.Z)(x,[["render",_]]),K=G;O()(x,"components",{QPage:k.Z,QDialog:A.Z,QCard:$.Z,QCardSection:q.Z,QForm:W.Z,QInput:E.Z,QIcon:N.Z,QSelect:I.Z,QBtn:R.Z,QItem:V.Z,QItemSection:B.Z,QTable:U.Z,QInnerLoading:Q.Z,QTd:T.Z,QList:L.Z,QItemLabel:H.Z,QChip:F.Z,QCardActions:P.Z}),O()(x,"directives",{ClosePopup:j.Z})}}]);