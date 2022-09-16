(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[6268],{38015:(e,s,t)=>{"use strict";function a(e,s,t,a,i,o){return null}t.d(s,{Z:()=>d});var i=t(80589),o=t(48825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,o.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,s,t,a,o){for(var r,l,n,d,c=i.Z.getItem("tokenTraducido"),p=0,m=c.usuario.roles.permisos.length;p<m;p++)if(c.usuario.roles.permisos[p].codigo===e&&(r=!0),c.usuario.roles.permisos[p].codigo===a&&(n=!0),c.usuario.roles.permisos[p].codigo===t&&(d=!0),c.usuario.roles.permisos[p].codigo===s&&(l=!0),p==c.usuario.roles.permisos.length.length-1)break;e=!0===r,a=!0===n,t=!0===d,s=!0===l,this.$emit(o,e,s,a,t)},desactivarOpciones(e){for(var s=i.Z.getItem("tokenTraducido"),t=0,a=this.permisos.length;t<a;t++){var o=0;for(a=s.usuario.roles.permisos.length;o<a;o++)if(s.usuario.roles.permisos[o].codigo==this.permisos[t].permisoName&&(this.permisos[t].permiso=!0),o==s.usuario.roles.permisos.length.length-1)break;if(t==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var l=t(74260);const n=(0,l.Z)(r,[["render",a]]),d=n},55325:(e,s,t)=>{"use strict";function a(e,s,t,a,i,o){return null}t.d(s,{Z:()=>c});var i=t(80589),o=t(5474),r=t(48825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,s,t,a){void 0==a?a={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,a).then((e=>{this.$emit(s,e.data,t)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,s,t,a){void 0==a?a={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,a).then((e=>{this.$emit(s,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,s,t){void 0==t?t={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(s),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,s,t,a){void 0==a?a={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,s,t,a){void 0==a?a={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,s,a).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,s,t,a){void 0==a?a={headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.put(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=t(74260);const d=(0,n.Z)(l,[["render",a]]),c=d},92687:(e,s,t)=>{"use strict";function a(e,s,t,a,i,o){return null}t.d(s,{Z:()=>p});var i=t(61959),o=t(48825),r=t(11488),l=t.n(r);const n={name:"rules",setup(){const e=(0,i.iH)(!1);(0,o.Z)();return{showSimulatedReturnData:e}},methods:{isReq(e,s){var t=!0;return null!=e&&""!=e.trim()||(t=s),t},isReqSelect(e,s){var t=!0;return null!=e&&e!=[]&&""!=e||(t=s),t},isMax(e,s,t){console.log(e);var a=!0;return""!==e&&null!==e&&e.length>s&&(a=t),a},isMin(e,s,t){var a=!0;return""!==e&&null!==e&&e.length<s?t:a},checkDate(e){var s=!0;return 0==l()(e,"DD/MM/YYYY",!0)._isValid&&(s=!1),s}}};var d=t(74260);const c=(0,d.Z)(n,[["render",a]]),p=c},36740:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>J});var a=t(83673),i=t(62323);const o={class:"row"},r={class:"col-md-12 col-xs-12"},l={class:"col-md-12 col-xs-12 displayHide",style:{"margin-bottom":"7px"},id:"select"},n={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},d={class:"q-pa-sm justify-center"},c={class:"row q-pa-md"},p=(0,a._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a._)("p",{style:{"font-size":"30px"}},[(0,a._)("strong",null,"CONCEPTOS POR OPERACIÓN")])],-1),m={class:"col-md-5 col-xs-12 col-sm-6 cardMargin selectMobile",style:{"align-self":"center","text-align":"center"}},u=(0,a.Uk)(" Sin resultados "),g={class:"col-md-5 col-xs-12 col-sm-6 cardMarginLast selectMobile",style:{"align-self":"center","text-align":"center"}},h={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},f={class:"q-pa-md"},b={class:"q-gutter-y-md"},j={bordered:"",flat:"",class:"my-card row"},v=(0,a._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function _(e,s,t,_,y,D){const w=(0,a.up)("q-icon"),S=(0,a.up)("q-input"),k=(0,a.up)("q-checkbox"),C=(0,a.up)("q-field"),x=(0,a.up)("q-btn"),Z=(0,a.up)("q-form"),z=(0,a.up)("q-card-section"),q=(0,a.up)("q-card"),E=(0,a.up)("q-dialog"),$=(0,a.up)("q-item-section"),A=(0,a.up)("q-item"),W=(0,a.up)("q-select"),N=(0,a.up)("q-inner-loading"),V=(0,a.up)("q-td"),I=(0,a.up)("q-item-label"),T=(0,a.up)("q-chip"),O=(0,a.up)("q-list"),B=(0,a.up)("q-table"),L=(0,a.up)("q-card-actions"),Q=(0,a.up)("desactivate-crud"),U=(0,a.up)("methods"),R=(0,a.up)("rules-vue"),H=(0,a.up)("q-page"),P=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(H,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{modelValue:_.dialog,"onUpdate:modelValue":s[5]||(s[5]=e=>_.dialog=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{onSubmit:s[4]||(s[4]=e=>D.sendData()),class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a._)("div",r,[(0,a.Wm)(S,{outlined:"",modelValue:y.form.desc_concepto,"onUpdate:modelValue":[s[0]||(s[0]=e=>y.form.desc_concepto=e),s[1]||(s[1]=e=>y.form.desc_concepto=y.form.desc_concepto.toUpperCase())],label:"Descripcion de Concepto",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,100,"Maximo 100 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(w,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",l,[(0,a.Wm)(C,{rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],"hide-bottom-space":"",borderless:"",dense:"",modelValue:y.form.afecta_estado,"onUpdate:modelValue":s[3]||(s[3]=e=>y.form.afecta_estado=e),disable:_.disable},{control:(0,a.w5)((()=>[(0,a.Wm)(k,{size:"lg",modelValue:y.form.afecta_estado,"onUpdate:modelValue":s[2]||(s[2]=e=>y.form.afecta_estado=e),"true-value":"S","false-value":"N",style:{"font-size":"13px"},label:"¿AFECTA ESTADO DE GANANCIAS Y PERDIDAS?",disable:_.disable},null,8,["modelValue","disable"])])),_:1},8,["rules","modelValue","disable"])])]),(0,a._)("div",n,[(0,a.Wm)(x,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(x,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[P]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",d,[(0,a._)("div",c,[p,(0,a._)("div",m,[(0,a.Wm)(W,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:y.tipoDeOperacionSelected,onFilter:s[6]||(s[6]=(e,s,t)=>D.filterArray(e,s,t,"tipoDeOperacionSelected","tipoDeOperacion","descripcion")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"descripcion","option-value":"id",modelValue:y.selectedTipo,"onUpdate:modelValue":[s[7]||(s[7]=e=>y.selectedTipo=e),s[8]||(s[8]=e=>D.getData("/coperacion","setData","datos"))],outlined:"",standout:"",label:"Tipo de Operación"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a.Wm)($,{class:"text-grey"},{default:(0,a.w5)((()=>[u])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(w,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",g,[(0,a.Wm)(S,{rounded:"",outlined:"",standout:"",modelValue:_.filter,"onUpdate:modelValue":s[9]||(s[9]=e=>_.filter=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(w,{name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",h,[(0,a.Wm)(x,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:s[10]||(s[10]=e=>{_.dialog=!0,D.resetForm()}),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,a._)("div",f,[(0,a._)("div",b,[(0,a._)("div",j,[(0,a.Wm)(B,{rows:y.datos,"row-key":"id","binary-state-sort":"",columns:y.columns,loading:_.loading,separator:_.separator,filter:_.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:_.pagination,"onUpdate:pagination":s[13]||(s[13]=e=>_.pagination=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(N,{showing:"",color:"primary"})])),"body-cell-action":(0,a.w5)((e=>[(0,a.Wm)(V,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:s=>{D.getData(`/coperacion/${e.row.id}`,"setDataEdit","form"),_.dialog=!0}},null,8,["disabled","onClick"]),(0,a.Wm)(x,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:s=>y.selected=e.row.id,onClickCapture:s[11]||(s[11]=e=>_.conceptosDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(q,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(O,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(t=>((0,a.wg)(),(0,a.j4)(A,{key:t.name},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)($,{side:""},{default:(0,a.w5)((()=>["status"===t.name?((0,a.wg)(),(0,a.j4)(T,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,a.wg)(),(0,a.j4)(x,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:s=>{D.getData(`/coperacion/${e.row.id}`,"setDataEdit","form"),_.dialog=!0}},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"status"===t.name?((0,a.wg)(),(0,a.j4)(T,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,a.wg)(),(0,a.j4)(x,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:s=>y.selected=e.row.id,onClickCapture:s[12]||(s[12]=e=>_.conceptosDelete=!0)},null,8,["disabled","onClick"])):((0,a.wg)(),(0,a.j4)(I,{key:4,caption:"",class:(0,i.C_)(t.classes?t.classes:"")},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","filter","grid","pagination"])])])])]),(0,a.Wm)(E,{modelValue:_.conceptosDelete,"onUpdate:modelValue":s[15]||(s[15]=e=>_.conceptosDelete=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{style:{width:"700px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[v])),_:1}),(0,a.Wm)(L,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(x,{flat:"",label:"Cancelar",color:"primary"},null,512),[[P]]),(0,a.wy)((0,a.Wm)(x,{flat:"",label:"Aceptar",color:"primary",onClick:s[14]||(s[14]=e=>D.deleteData(y.selected))},null,512),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Q,{ref:"desactiveCrud",onDesactivarCrud:D.desactivarCrud},null,8,["onDesactivarCrud"]),(0,a.Wm)(U,{ref:"methods",onGetData:s[16]||(s[16]=e=>D.getData("/coperacion","setData","datos")),onSetDataConceptos:D.setData,onResetLoading:D.resetLoading,onSetDataEdit:D.setDataEdit,onSetData:D.setData,onSetDataTipos:D.setDataTipos},null,8,["onSetDataConceptos","onResetLoading","onSetDataEdit","onSetData","onSetDataTipos"]),(0,a.Wm)(R,{ref:"rulesVue"},null,512)])),_:1})}var y=t(61959),D=t(48825),w=t(92687),S=t(55325),k=t(38015);const C={components:{"desactivate-crud":k.Z,methods:S.Z,rulesVue:w.Z},data(){return{columns:[{name:"desc_concepto",label:"Concepto",field:"desc_concepto",align:"left",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{desc_concepto:"",tipo:"",afecta_estado:"N"},tipoDeOperacion:[],datos:[],selected:[],tipoDeOperacionSelected:[],selectedTipo:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,D.Z)(),(0,y.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:8});return{pagination:(0,y.iH)({rowsPerPage:8}),separator:(0,y.iH)("vertical"),dialog:(0,y.iH)(!1),loading:(0,y.iH)(!1),disable:(0,y.iH)(!0),disableEdit:(0,y.iH)(!0),conceptosDelete:(0,y.iH)(!1),filter:(0,y.iH)("")}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Conceptos de Operación",""),this.selectedTipo.id="1",this.getData("/tipos","setDataTipos","tipoDeOperacion"),this.getData("/coperacion","setData","datos"),this.$refs.desactiveCrud.desactivarCrud("c_concepto_operacion","r_concepto_operacion","u_concepto_operacion","d_concepto_operacion","desactivarCrud")},methods:{filterArray(e,s,t,a,i,o){s(""!==e?()=>{const s=e.toUpperCase();for(var t=[],r=0;r<=this[i].length-1;r++)if(this[i][r][o].indexOf(s)>-1&&t.push(this[i][r]),r==this[i].length-1){this[a]=t;break}}:()=>{this[a]=this[i]})},resetLoading(){this.loading=!1},desactivarCrud(e,s,t,a){1==s?(1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==a&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,s,t){this.$refs.methods.getData(e,s,t,{headers:{tipo:this.selectedTipo.id,fuente:"OP"}}),this.loading=!0},setData(e,s){this[s]=e,this.loading=!1},setDataTipos(e,s){this[s]=e,this.selectedTipo=e[0]},setDataEdit(e,s){this[s].tipo=e.tipos.descripcion,this[s].id=e.id,this[s].desc_concepto=e.desc_concepto,this[s].afecta_estado=e.afecta_estado;var t=e.tipos.codigo;if("DCO"==t){var a=document.getElementById("selectEdit");a.classList.remove("displayHide"),a.classList.add("displayShow"),this.disableEdit=!1}if("DGA"==t){a=document.getElementById("selectEdit");a.classList.remove("displayHide"),a.classList.add("displayShow"),this.disableEdit=!1}if("DCO"!==t&&"DGA"!==t){a=document.getElementById("selectEdit");a.classList.remove("displayShow"),a.classList.add("displayHide"),this.disableEdit=!0}},deleteData(e){this.$refs.methods.deleteData(`/coperacion/${e}`,"getData",this.axiosConfig),this.loading=!0},sendData(){this.form.tipo=this.selectedTipo.id,this.form.id?(this.$refs.methods.putData(`/coperacion/${this.form.id}`,this.form,"getData"),this.resetForm(),this.loading=!0,this.dialog=!1):(this.$refs.methods.createData("/coperacion",this.form,"getData"),this.resetForm(),this.loading=!0,this.dialog=!1)},resetForm(){delete this.form.id,this.form.desc_concepto="",this.form.afecta_estado="N",this.form.tipo=""}}};var x=t(74260),Z=t(24379),z=t(46778),q=t(10151),E=t(25589),$=t(68689),A=t(34842),W=t(24554),N=t(86115),V=t(65735),I=t(48240),T=t(72448),O=t(83414),B=t(52035),L=t(17352),Q=t(66941),U=t(83884),R=t(27011),H=t(2350),P=t(67030),M=t(99367),F=t(60677),G=t(7518),Y=t.n(G);const K=(0,x.Z)(C,[["render",_]]),J=K;Y()(C,"components",{QPage:Z.Z,QDialog:z.Z,QCard:q.Z,QCardSection:E.Z,QForm:$.Z,QInput:A.Z,QIcon:W.Z,QField:N.Z,QCheckbox:V.Z,QBtn:I.Z,QSelect:T.Z,QItem:O.Z,QItemSection:B.Z,QTable:L.Z,QInnerLoading:Q.Z,QTd:U.Z,QList:R.Z,QItemLabel:H.Z,QChip:P.Z,QCardActions:M.Z}),Y()(C,"directives",{ClosePopup:F.Z})},46700:(e,s,t)=>{var a={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function i(e){var s=o(e);return t(s)}function o(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=46700}}]);