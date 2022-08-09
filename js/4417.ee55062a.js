"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[4417],{8015:(e,a,o)=>{function s(e,a,o,s,t,i){return null}o.d(a,{Z:()=>d});var t=o(589),i=o(8825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${t.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,i.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,o,s,i){for(var r,n,l,d,c=t.Z.getItem("tokenTraducido"),m=0,p=c.usuario.roles.permisos.length;m<p;m++)if(c.usuario.roles.permisos[m].codigo===e&&(r=!0),c.usuario.roles.permisos[m].codigo===s&&(l=!0),c.usuario.roles.permisos[m].codigo===o&&(d=!0),c.usuario.roles.permisos[m].codigo===a&&(n=!0),m==c.usuario.roles.permisos.length.length-1)break;e=!0===r,s=!0===l,o=!0===d,a=!0===n,this.$emit(i,e,a,s,o)},desactivarOpciones(e){for(var a=t.Z.getItem("tokenTraducido"),o=0,s=this.permisos.length;o<s;o++){var i=0;for(s=a.usuario.roles.permisos.length;i<s;i++)if(a.usuario.roles.permisos[i].codigo==this.permisos[o].permisoName&&(this.permisos[o].permiso=!0),i==a.usuario.roles.permisos.length.length-1)break;if(o==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var n=o(4260);const l=(0,n.Z)(r,[["render",s]]),d=l},2635:(e,a,o)=>{function s(e,a,o,s,t,i){return null}o.d(a,{Z:()=>c});var t=o(589),i=o(5474),r=o(8825);const n={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,o,s){s.headers.Authorization=`Bearer ${t.Z.getItem("token")}`,i.api.get(e,s).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,a,o,s){s.headers.Authorization=`Bearer ${t.Z.getItem("token")}`,i.api.get(e,s).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,a,o){o.headers.Authorization=`Bearer ${t.Z.getItem("token")}`,i.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,a,o,s){s.headers.Authorization=`Bearer ${t.Z.getItem("token")}`,i.api.post(e,a,s).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,a,o,s){s.headers.Authorization=`Bearer ${t.Z.getItem("token")}`,i.api.put(e,a,s).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var l=o(4260);const d=(0,l.Z)(n,[["render",s]]),c=d},4417:(e,a,o)=>{o.r(a),o.d(a,{default:()=>ee});var s=o(3673),t=o(2323);const i={class:"row"},r={class:"col-md-5 col-xs-12"},n={class:"col-md-7 col-xs-12"},l={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},d={class:"row"},c={class:"col-md-5 col-xs-12"},m={class:"col-md-7 col-xs-12"},p={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},u={class:"row q-pa-sm justify-center"},g={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},h={class:"row"},b=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,s._)("h4",{style:{"font-size":"25px"}},[(0,s._)("strong",null,"MANTENIMIENTO - ZONAS POR AGENCIA")])],-1),f={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},_={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},Z={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},C={class:"q-pa-md",style:{"margin-top":"20px"}},w={class:"q-gutter-y-md"},v={bordered:"",flat:"",class:"my-card row"},z=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function D(e,a,o,D,S,x){const y=(0,s.up)("q-icon"),E=(0,s.up)("q-input"),A=(0,s.up)("q-select"),W=(0,s.up)("q-btn"),k=(0,s.up)("q-form"),q=(0,s.up)("q-card-section"),N=(0,s.up)("q-card"),V=(0,s.up)("q-dialog"),$=(0,s.up)("q-inner-loading"),U=(0,s.up)("q-td"),I=(0,s.up)("q-item-label"),F=(0,s.up)("q-item-section"),Q=(0,s.up)("q-chip"),R=(0,s.up)("q-item"),H=(0,s.up)("q-list"),P=(0,s.up)("q-table"),T=(0,s.up)("q-card-actions"),B=(0,s.up)("desactivate-crud"),j=(0,s.up)("methods"),L=(0,s.up)("q-page"),O=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(L,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(V,{modelValue:D.zonasForm,"onUpdate:modelValue":a[4]||(a[4]=e=>D.zonasForm=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,{onSubmit:a[3]||(a[3]=e=>x.createDataZonas()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s._)("div",r,[(0,s.Wm)(E,{outlined:"",modelValue:S.formZonas.nb_zona,"onUpdate:modelValue":[a[0]||(a[0]=e=>S.formZonas.nb_zona=e),a[1]||(a[1]=e=>S.formZonas.nb_zona=S.formZonas.nb_zona.toUpperCase())],label:"Nombre de la Zona",hint:"",class:"pcform","lazy-rules":"",rules:D.reglasDescripcion},{prepend:(0,s.w5)((()=>[(0,s.Wm)(y,{name:"drive_file_rename_outline"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",n,[(0,s.Wm)(A,{outlined:"",modelValue:S.formZonas.tipo_zona,"onUpdate:modelValue":a[2]||(a[2]=e=>S.formZonas.tipo_zona=e),label:"Tipo de Zona",hint:"",rules:[x.reglasInputs],options:S.tipoDeZona,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(y,{name:"domain"})])),_:1},8,["modelValue","rules","options"])])]),(0,s._)("div",l,[(0,s.Wm)(W,{label:"Agregar Zona",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(W,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[O]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(V,{modelValue:D.zonasFormEdit,"onUpdate:modelValue":a[9]||(a[9]=e=>D.zonasFormEdit=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,{onSubmit:a[8]||(a[8]=e=>x.putDataZonas())},{default:(0,s.w5)((()=>[(0,s._)("div",d,[(0,s._)("div",c,[(0,s.Wm)(E,{outlined:"",modelValue:S.formEditZonas.nb_zona,"onUpdate:modelValue":[a[5]||(a[5]=e=>S.formEditZonas.nb_zona=e),a[6]||(a[6]=e=>S.formEditZonas.nb_zona=S.formEditZonas.nb_zona.toUpperCase())],label:"Nombre de la Zona",hint:"",class:"pcform","lazy-rules":"",rules:D.reglasDescripcion},{prepend:(0,s.w5)((()=>[(0,s.Wm)(y,{name:"drive_file_rename_outline"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",m,[(0,s.Wm)(A,{outlined:"",modelValue:S.formEditZonas.tipo_zona,"onUpdate:modelValue":a[7]||(a[7]=e=>S.formEditZonas.tipo_zona=e),label:"Tipo de Zona",hint:"",rules:[x.reglasInputs],options:S.tipoDeZona,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(y,{name:"domain"})])),_:1},8,["modelValue","rules","options"])])]),(0,s._)("div",p,[(0,s.Wm)(W,{label:"Editar Zona",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(W,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[O]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",u,[(0,s._)("div",g,[(0,s._)("div",h,[b,(0,s._)("div",f,[(0,s.Wm)(A,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:S.agenciasSelected,onFilter:a[10]||(a[10]=(e,a,o)=>x.filterArray(e,a,o,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:S.selectedAgencia,"onUpdate:modelValue":[a[11]||(a[11]=e=>S.selectedAgencia=e),a[12]||(a[12]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,x.getData("/zonas","setDataZonas","zonas")})],outlined:"",standout:"",label:"Escoge una Agencia"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(y,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",_,[(0,s.Wm)(E,{rounded:"",outlined:"",standout:"",modelValue:D.filterRoles,"onUpdate:modelValue":a[13]||(a[13]=e=>D.filterRoles=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(y,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",Z,[(0,s.Wm)(W,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:a[14]||(a[14]=e=>D.zonasForm=!0),onClickCapture:a[15]||(a[15]=e=>x.resetFormZonas()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,s._)("div",C,[(0,s._)("div",w,[(0,s._)("div",v,[(0,s.Wm)(P,{rows:S.zonas,loading:D.loading,"row-key":"id",columns:S.columnsZonas,separator:D.separator,class:"my-sticky-column-table",filter:D.filterRoles,style:{width:"100%"},grid:e.$q.screen.xs,pagination:D.pagination,"onUpdate:pagination":a[18]||(a[18]=e=>D.pagination=e)},{loading:(0,s.w5)((()=>[(0,s.Wm)($,{showing:"",color:"primary"})])),"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(U,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{x.getData(`/Zonas/${e.row.id}`,"setDataZonasEdit","formEditZonas"),D.zonasFormEdit=!0}},null,8,["disabled","onClick"]),(0,s.Wm)(W,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>S.selected=e.row.id,onClickCapture:a[16]||(a[16]=e=>D.zonasDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,t.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(N,{class:(0,t.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(o=>((0,s.wg)(),(0,s.j4)(R,{key:o.name},{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(I,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,t.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(F,{side:""},{default:(0,s.w5)((()=>["status"===o.name?((0,s.wg)(),(0,s.j4)(Q,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,t.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(W,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{x.getData(`/zonas/${e.row.id}`,"setDataZonasEdit","formEditZonas"),D.zonasFormEdit=!0}},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"status"===o.name?((0,s.wg)(),(0,s.j4)(Q,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,t.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(W,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>S.selected=e.row.id,onClickCapture:a[17]||(a[17]=e=>D.zonasDelete=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(I,{key:4,caption:"",class:(0,t.C_)(o.classes?o.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,t.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])])])])]),(0,s.Wm)(V,{modelValue:D.zonasDelete,"onUpdate:modelValue":a[20]||(a[20]=e=>D.zonasDelete=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(q,null,{default:(0,s.w5)((()=>[z])),_:1}),(0,s.Wm)(T,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(W,{flat:"",label:"Cancelar",color:"primary"},null,512),[[O]]),(0,s.wy)((0,s.Wm)(W,{flat:"",label:"Aceptar",color:"primary",onClick:a[19]||(a[19]=e=>x.deleteData(S.selected))},null,512),[[O]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(B,{ref:"desactiveCrud",onDesactivarCrud:x.desactivarCrud},null,8,["onDesactivarCrud"]),(0,s.Wm)(j,{ref:"methods",onGetData:a[21]||(a[21]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,x.getData("/zonas","setDataZonas","zonas")}),onSetDataZonas:x.setDataZonas,onResetLoading:x.resetLoading,onSetDataZonasEdit:x.setDataZonasEdit,onSetData:x.setData},null,8,["onSetDataZonas","onResetLoading","onSetDataZonasEdit","onSetData"])])),_:1})}var S=o(1959),x=o(5474),y=o(8825),E=(o(589),o(2635)),A=o(8015);const W={components:{"desactivate-crud":A.Z,methods:E.Z},name:"Zonas",data(){return{columnsZonas:[{name:"nb_zona",label:"Nombre de la Zona",field:"nb_zona",align:"left",sortable:!0},{name:"tipo_desc",label:"Tipo de Zona",field:"tipo_desc",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formZonas:{nb_zona:"",tipo_zona:"",cod_agencia:[]},formEditZonas:{nb_zona:"",tipo_zona:"",id:"",cod_agencia:[]},tipoDeZona:[{label:"URBANA",value:"U"},{label:"EXTRA URBANA",value:"E"}],agencias:[],zonas:[],selected:[],agenciasSelected:[],selectedAgencia:[],agenciaRef:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){const e=(0,y.Z)();(0,S.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:"",agencia:""}},pagination:(0,S.iH)({rowsPerPage:10}),loading:(0,S.iH)(!1),separator:(0,S.iH)("vertical"),zonasForm:(0,S.iH)(!1),zonasFormEdit:(0,S.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},zonasDelete:(0,S.iH)(!1),filterRoles:(0,S.iH)(""),reglasDescripcion:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<250||"Deben ser máximo 250 caracteres",e=>e.length>2||"Deben ser minimo 3 caracteres"]}},mounted(){this.getData("/agencias","setData","agencias"),this.$refs.desactiveCrud.desactivarCrud("c_zonas","r_zonas","u_zonas","d_zonas","desactivarCrud")},methods:{filterArray(e,a,o,s,t,i){a(""!==e?()=>{const a=e.toUpperCase();for(var o=JSON.parse(JSON.stringify(this[t])),r=0,n=this[t].length;r<n;r++)if(this[t][r][i].indexOf(a)>-1||delete o[r],r==this[t].length-1){this[s]=o;break}}:()=>{this[s]=this[t]})},resetLoading(){this.loading=!1},reglasInputs(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},desactivarCrud(e,a,o,s){console.log(e),console.log(a),console.log(o),console.log(s),1==a?(1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==s&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,a,o){this.$refs.methods.getData(e,a,o,this.axiosConfig),this.loading=!0},setData(e,a){this[a]=e,this.getDataIniciar(),this.loading=!1},setDataZonas(e,a){this[a]=e,this.loading=!1},setDataZonasEdit(e,a){this[a].id=e.id,this[a].nb_zona=e.nb_zona,this[a].tipo_zona=e.tipo_desc,this[a].cod_agencia=this.selectedAgencia,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/zonas/${e}`,"getData",this.axiosConfig),this.loading=!0},createDataZonas(){this.formZonas.cod_agencia=this.selectedAgencia.id,this.formZonas.tipo_zona=this.formZonas.tipo_zona.value,this.$refs.methods.createData("/zonas",this.formZonas,"getData",this.axiosConfig),this.resetFormZonas(),this.loading=!0},putDataZonas(){this.formEditZonas.cod_agencia=this.selectedAgencia.id,this.formEditZonas.tipo_zona=this.formEditZonas.tipo_zona.value,this.$refs.methods.putData(`/zonas/${this.formEditZonas.id}`,this.formEditZonas,"getData",this.axiosConfig),this.resetFormEditZonas(),this.loading=!0},resetFormZonas(){this.formZonas.nb_zona="",this.formZonas.tipo_zona="",this.formZonas.cod_agencia="",this.zonasForm=!1},resetFormEditZonas(){this.formEditZonas.nb_zona="",this.formEditZonas.tipo_zona="",this.formEditZonas.cod_agencia=null,this.zonasFormEdit=!1},getDataIniciar(){this.agenciaRef=this.agencias[0].id,this.selectedAgencia=this.agencias[0],this.axiosConfig.headers.agencia=this.agenciaRef,x.api.get("/zonas",this.axiosConfig).then((e=>{this.zonas=e.data}))}}};var k=o(4260),q=o(4379),N=o(6778),V=o(151),$=o(5589),U=o(5269),I=o(4842),F=o(4554),Q=o(2448),R=o(8240),H=o(7352),P=o(6941),T=o(3884),B=o(7011),j=o(3414),L=o(2035),O=o(2350),G=o(7030),J=o(9367),M=o(677),K=o(7518),X=o.n(K);const Y=(0,k.Z)(W,[["render",D]]),ee=Y;X()(W,"components",{QPage:q.Z,QDialog:N.Z,QCard:V.Z,QCardSection:$.Z,QForm:U.Z,QInput:I.Z,QIcon:F.Z,QSelect:Q.Z,QBtn:R.Z,QTable:H.Z,QInnerLoading:P.Z,QTd:T.Z,QList:B.Z,QItem:j.Z,QItemSection:L.Z,QItemLabel:O.Z,QChip:G.Z,QCardActions:J.Z}),X()(W,"directives",{ClosePopup:M.Z})}}]);