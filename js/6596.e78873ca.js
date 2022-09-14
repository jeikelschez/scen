"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[6596],{38015:(e,a,t)=>{function o(e,a,t,o,i,s){return null}t.d(a,{Z:()=>d});var i=t(80589),s=t(48825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,s.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,t,o,s){for(var r,l,n,d,m=i.Z.getItem("tokenTraducido"),p=0,c=m.usuario.roles.permisos.length;p<c;p++)if(m.usuario.roles.permisos[p].codigo===e&&(r=!0),m.usuario.roles.permisos[p].codigo===o&&(n=!0),m.usuario.roles.permisos[p].codigo===t&&(d=!0),m.usuario.roles.permisos[p].codigo===a&&(l=!0),p==m.usuario.roles.permisos.length.length-1)break;e=!0===r,o=!0===n,t=!0===d,a=!0===l,this.$emit(s,e,a,o,t)},desactivarOpciones(e){for(var a=i.Z.getItem("tokenTraducido"),t=0,o=this.permisos.length;t<o;t++){var s=0;for(o=a.usuario.roles.permisos.length;s<o;s++)if(a.usuario.roles.permisos[s].codigo==this.permisos[t].permisoName&&(this.permisos[t].permiso=!0),s==a.usuario.roles.permisos.length.length-1)break;if(t==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var l=t(74260);const n=(0,l.Z)(r,[["render",o]]),d=n},55325:(e,a,t)=>{function o(e,a,t,o,i,s){return null}t.d(a,{Z:()=>m});var i=t(80589),s=t(5474),r=t(48825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,o){void 0==o?o={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,o).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,a,t,o){void 0==o?o={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,o).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,a,t){void 0==t?t={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,t,o){void 0==o?o={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,a,o).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,t,o){void 0==o?o={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,a,o).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,a,t,o){void 0==o?o={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.put(e,a,o).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=t(74260);const d=(0,n.Z)(l,[["render",o]]),m=d},73556:(e,a,t)=>{function o(e,a,t,o,i,s){return null}t.d(a,{Z:()=>d});var i=t(61959),s=t(48825);const r={name:"rules",setup(){const e=(0,i.iH)(!1);(0,s.Z)();return{showSimulatedReturnData:e}},methods:{isReq(e,a){var t=!0;return null!=e&&""!=e.trim()||(t=a),t},isReqSelect(e,a){var t=!0;return null!=e&&e!=[]&&""!=e||(t=a),t},isMax(e,a,t){console.log(e);var o=!0;return""!==e&&null!==e&&e.length>a&&(o=t),o},isMin(e,a,t){var o=!0;return""!==e&&null!==e&&e.length<a?t:o}}};var l=t(74260);const n=(0,l.Z)(r,[["render",o]]),d=n},76596:(e,a,t)=>{t.r(a),t.d(a,{default:()=>O});var o=t(83673),i=t(62323);const s={class:"row"},r={class:"col-md-6 col-xs-12"},l={class:"col-md-6 col-xs-12"},n={class:"col-md-12 col-xs-12"},d={class:"full-width row justify-center items-center content-center"},m={class:"justify-center",style:{"margin-top":"7px"}},p={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 text-secondary justify-end"},c=(0,o._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 movilTitle"},[(0,o._)("p",{style:{"font-size":"25px","align-self":"center","text-align":"center","margin-top":"15px"}},[(0,o._)("strong",null,"MANTENIMIENTO - VARIABLE CONTROL")])],-1),u={class:"col-md-6 col-sm-7 col-xs-12 cardMargin selectMobile",style:{"align-self":"center"}},g={class:"col-md-2 col-xl-3 col-xs-12 col-sm-4",style:{"text-align":"center","align-self":"center"}},h={class:"q-pa-md q-gutter-y-md"},b=(0,o._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1);function f(e,a,t,f,v,w){const _=(0,o.up)("q-icon"),S=(0,o.up)("q-input"),y=(0,o.up)("q-select"),C=(0,o.up)("q-btn"),D=(0,o.up)("q-form"),x=(0,o.up)("q-card-section"),k=(0,o.up)("q-card"),Z=(0,o.up)("q-dialog"),q=(0,o.up)("q-inner-loading"),V=(0,o.up)("q-td"),$=(0,o.up)("q-item-label"),A=(0,o.up)("q-item-section"),W=(0,o.up)("q-chip"),E=(0,o.up)("q-item"),N=(0,o.up)("q-list"),I=(0,o.up)("q-table"),z=(0,o.up)("q-card-actions"),R=(0,o.up)("methods"),U=(0,o.up)("desactive-crud"),Q=(0,o.up)("rules-vue"),B=(0,o.up)("q-page"),T=(0,o.Q2)("money"),L=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(B,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{modelValue:f.dialog,"onUpdate:modelValue":a[4]||(a[4]=e=>f.dialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D,{onSubmit:w.sendData,class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o._)("div",s,[(0,o._)("div",r,[(0,o.Wm)(S,{outlined:"",modelValue:v.form.nombre,"onUpdate:modelValue":[a[0]||(a[0]=e=>v.form.nombre=e),a[1]||(a[1]=e=>v.form.nombre=v.form.nombre.toUpperCase())],label:"Descripción de Variable",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres")||""]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",l,[(0,o.wy)(((0,o.wg)(),(0,o.j4)(S,{"upper-case":"",outlined:"",modelValue:v.form.valor,"onUpdate:modelValue":a[2]||(a[2]=e=>v.form.valor=e),label:"Valor de Variable","input-class":"text-right",hint:"","lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"apartment"})])),_:1},8,["modelValue"])),[[T,v.money]])]),(0,o._)("div",n,[(0,o.Wm)(y,{outlined:"",modelValue:v.form.tipo,"onUpdate:modelValue":a[3]||(a[3]=e=>v.form.tipo=e),label:"Tipo de Variable",hint:"",options:v.tipo,"lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"done_all"})])),_:1},8,["modelValue","options","rules"])])]),(0,o._)("div",d,[(0,o.Wm)(C,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(C,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[L]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",m,[(0,o._)("div",p,[c,(0,o._)("div",u,[(0,o.Wm)(S,{modelValue:f.filter,"onUpdate:modelValue":a[5]||(a[5]=e=>f.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"search"})])),_:1},8,["modelValue"])]),(0,o._)("div",g,[(0,o.Wm)(C,{label:"Insertar",rounded:"",style:{"text-align":"center","align-self":"center"},color:"primary",disabled:this.disabledCreate,onClick:a[6]||(a[6]=e=>{f.dialog=!0,this.resetForm()}),size:"16px",class:"q-px-xl q-py-xs"},null,8,["disabled"])])]),(0,o._)("div",h,[(0,o.Wm)(I,{rows:v.datos,"row-key":"id","binary-state-sort":"",columns:v.columns,separator:f.separator,loading:f.loading,filter:f.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:f.pagination,"onUpdate:pagination":a[9]||(a[9]=e=>f.pagination=e)},{loading:(0,o.w5)((()=>[(0,o.Wm)(q,{showing:"",color:"primary"})])),"body-cell-tipo":(0,o.w5)((e=>[(0,o.Wm)(V,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{outlined:"",modelValue:e.row.tipo_desc,"onUpdate:modelValue":[a=>e.row.tipo_desc=a,a=>{w.getData(`/vcontrol/${e.row.id}`,"putDataSelect","form"),this.form.tipo=e.row.tipo_desc.value}],options:v.tipo},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1032,["props"])])),"body-cell-action":(0,o.w5)((t=>[(0,o.Wm)(V,{props:t},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:e=>{w.getData(`/vcontrol/${t.row.id}`,"setDataEdit","form"),f.dialog=!0}},null,8,["disabled","onClick"]),(0,o.Wm)(C,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>e.selected=t.row.id,onClickCapture:a[7]||(a[7]=e=>f.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,o.w5)((t=>[(0,o._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(t.selected?"transform: scale(0.95);":"")},[(0,o.Wm)(k,{class:(0,i.C_)(t.selected?"bg-grey-2":"")},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{dense:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.cols,(s=>((0,o.wg)(),(0,o.j4)(E,{key:s.name},{default:(0,o.w5)((()=>[(0,o.Wm)(A,null,{default:(0,o.w5)((()=>[(0,o.Wm)($,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(s.label),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(A,{side:""},{default:(0,o.w5)((()=>["status"===s.name?((0,o.wg)(),(0,o.j4)(W,{key:0,color:"Active"==t.row.status?"green":"Disable"==t.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,o.wg)(),(0,o.j4)(C,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:e=>{w.getData(`/vcontrol/${t.row.id}`,"setDataEdit","form"),f.dialog=!0}},null,8,["disabled","onClick"])):(0,o.kq)("",!0),"status"===s.name?((0,o.wg)(),(0,o.j4)(W,{key:2,color:"Active"==t.row.status?"green":"Disable"==t.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,o.wg)(),(0,o.j4)(C,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>e.selected=t.row.id,onClickCapture:a[8]||(a[8]=e=>f.deletePopup=!0)},null,8,["disabled","onClick"])):(0,o.kq)("",!0)])),_:2},1024),(0,o.Wm)(A,{side:""},{default:(0,o.w5)((()=>["status"===s.name?((0,o.wg)(),(0,o.j4)(W,{key:0,color:"Active"==t.row.status?"green":"Disable"==t.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"tipo"===s.name?((0,o.wg)(),(0,o.j4)(y,{key:1,outlined:"",modelValue:t.row.tipo_desc,"onUpdate:modelValue":[e=>t.row.tipo_desc=e,e=>{w.getData(`/vcontrol/${t.row.id}`,"putDataSelect","form"),this.form.tipo=t.row.tipo_desc.value}],options:v.tipo},null,8,["modelValue","onUpdate:modelValue","options"])):((0,o.wg)(),(0,o.j4)($,{key:2,caption:"",class:(0,i.C_)(s.classes?s.classes:"")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","loading","filter","grid","pagination"])])]),(0,o.Wm)(Z,{modelValue:f.deletePopup,"onUpdate:modelValue":a[11]||(a[11]=e=>f.deletePopup=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{style:{width:"700px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(x,null,{default:(0,o.w5)((()=>[b])),_:1}),(0,o.Wm)(z,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(C,{flat:"",label:"Cancelar",color:"primary"},null,512),[[L]]),(0,o.wy)((0,o.Wm)(C,{flat:"",label:"Aceptar",color:"primary",onClick:a[10]||(a[10]=a=>w.deleteData(e.selected))},null,512),[[L]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(R,{ref:"methods",onGetData:a[12]||(a[12]=e=>{w.getData("/vcontrol","setData","datos"),this.loading=!0}),onSetData:w.setData,onResetLoading:w.resetLoading,onSetDataEdit:w.setDataEdit,onPutDataSelect:w.putDataSelect},null,8,["onSetData","onResetLoading","onSetDataEdit","onPutDataSelect"]),(0,o.Wm)(U,{ref:"desactiveCrud",onDesactivarCrud:w.desactivarCrud},null,8,["onDesactivarCrud"]),(0,o.Wm)(Q,{ref:"rulesVue"},null,512)])),_:1})}t(65363),t(97768);var v=t(61959),w=t(48825),_=t(73556),S=t(55325),y=t(38015),C=t(31885);const D={directives:{money:C.VMoney},components:{"desactive-crud":y.Z,methods:S.Z,VMoney:C.VMoney,rulesVue:_.Z},data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!0},columns:[{name:"nombre",label:"Descripción de la Variable",field:"nombre",align:"left",sortable:!0,required:!0},{name:"tipo",label:"Tipo de Variable",align:"left",sortable:!0,required:!0},{name:"valor",label:"Valor de la Variable",field:"valor",align:"left",type:"string",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nombre:"",tipo:"",valor:""},tipo:[{label:"STRING",value:"1"},{label:"ENTERO",value:"2"},{label:"DECIMAL",value:"3"},{label:"FECHA",value:"4"},{label:"ENTERO LARGO",value:"5"}],tipos:[],datos:[],disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){const e=(0,w.Z)();(0,v.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:6});return{pagination:(0,v.iH)({rowsPerPage:6}),separator:(0,v.iH)("vertical"),loading:(0,v.iH)(!1),dialog:(0,v.iH)(!1),activoExistente(){e.notify({message:"Solo puede haber un Activo por Agencia",color:"red"})},deletePopup:(0,v.iH)(!1),filter:(0,v.iH)("")}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Variable Control",""),this.getData("/vcontrol","setData","datos"),this.loading=!0,this.$refs.desactiveCrud.desactivarCrud("c_vcontrol","r_vcontrol","u_vcontrol","d_vcontrol","desactivarCrud")},methods:{resetLoading(){this.loading=!1},desactivarCrud(e,a,t,o){1==a?(1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==o&&(this.disabledEdit=!1)):this.$router.push("/error403")},filterSelect(e,a,t,o,i){var s=this[e].findIndex((e=>e[a]==t));this[o][i]=s>=0?this[e][s]:{label:"",value:null}},getData(e,a,t){this.$refs.methods.getData(e,a,t,this.axiosConfig)},setData(e,a){this[a]=e,this.loading=!1},setDataEdit(e,a){this.filterSelect("tipo","value",e.tipo,"form","tipo"),this[a].id=e.id,this[a].nombre=e.nombre,this[a].valor=e.valor},deleteData(e){this.$refs.methods.deleteData(`/vcontrol/${e}`,"getData"),this.loading=!0},sendData(){this.form.valor=this.form.valor.replaceAll(".","").replaceAll(",","."),this.form.tipo=this.form.tipo.value,this.form.id?(this.$refs.methods.putData(`/vcontrol/${this.form.id}`,this.form,"getData"),this.resetForm(),this.dialog=!1,this.loading=!0):(this.$refs.methods.createData("/vcontrol",this.form,"getData"),this.resetForm(),this.dialog=!1,this.loading=!0)},putDataSelect(e,a){this[a].id=e.id,this[a].nombre=e.nombre,this[a].valor=e.valor,this.$refs.methods.putData(`/vcontrol/${this.form.id}`,this.form,"getData"),this.loading=!0},resetForm(){delete this.form.id,this.form.nombre="",this.form.tipo="",this.form.valor=""}}};var x=t(74260),k=t(24379),Z=t(46778),q=t(10151),V=t(25589),$=t(68689),A=t(34842),W=t(24554),E=t(72448),N=t(48240),I=t(17352),z=t(66941),R=t(83884),U=t(27011),Q=t(83414),B=t(52035),T=t(2350),L=t(67030),P=t(99367),j=t(60677),M=t(7518),F=t.n(M);const H=(0,x.Z)(D,[["render",f]]),O=H;F()(D,"components",{QPage:k.Z,QDialog:Z.Z,QCard:q.Z,QCardSection:V.Z,QForm:$.Z,QInput:A.Z,QIcon:W.Z,QSelect:E.Z,QBtn:N.Z,QTable:I.Z,QInnerLoading:z.Z,QTd:R.Z,QList:U.Z,QItem:Q.Z,QItemSection:B.Z,QItemLabel:T.Z,QChip:L.Z,QCardActions:P.Z}),F()(D,"directives",{ClosePopup:j.Z})}}]);