"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[844],{8015:(e,a,t)=>{function i(e,a,t,i,o,s){return null}t.d(a,{Z:()=>n});var o=t(589),s=t(8825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,s.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,t,i,s){for(var r,l,d,n,m=o.Z.getItem("tokenTraducido"),u=0,c=m.usuario.roles.permisos.length;u<c;u++)if(m.usuario.roles.permisos[u].codigo===e&&(r=!0),m.usuario.roles.permisos[u].codigo===i&&(d=!0),m.usuario.roles.permisos[u].codigo===t&&(n=!0),m.usuario.roles.permisos[u].codigo===a&&(l=!0),u==m.usuario.roles.permisos.length.length-1)break;e=!0===r,i=!0===d,t=!0===n,a=!0===l,this.$emit(s,e,a,i,t)},desactivarOpciones(e){for(var a=o.Z.getItem("tokenTraducido"),t=0,i=this.permisos.length;t<i;t++){var s=0;for(i=a.usuario.roles.permisos.length;s<i;s++)if(a.usuario.roles.permisos[s].codigo==this.permisos[t].permisoName&&(this.permisos[t].permiso=!0),s==a.usuario.roles.permisos.length.length-1)break;if(t==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var l=t(4260);const d=(0,l.Z)(r,[["render",i]]),n=d},7105:(e,a,t)=>{function i(e,a,t,i,o,s){return null}t.d(a,{Z:()=>m});var o=t(589),s=t(5474),r=t(8825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,i){i.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,s.api.get(e,i).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))},getDataEdit:function(e,a,t,i){i.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,s.api.get(e,i).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))},deleteData:function(e,a,t){t.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,s.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))},createData:function(e,a,t,i){i.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,s.api.post(e,a,i).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))},putData:function(e,a,t,i){i.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,s.api.put(e,a,i).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))}}};var d=t(4260);const n=(0,d.Z)(l,[["render",i]]),m=n},844:(e,a,t)=>{t.r(a),t.d(a,{default:()=>te});var i=t(3673),o=t(2323);const s={class:"row"},r={class:"col-md-6 col-xs-12"},l={class:"col-md-6 col-xs-12"},d={class:"col-md-12 col-xs-12"},n={class:"col-md-12 col-xs-12"},m={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},u={class:"row"},c={class:"col-md-6 col-xs-12"},p={class:"col-md-6 col-xs-12"},g={class:"col-md-12 col-xs-12"},f={class:"col-md-12 col-xs-12"},h={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},b={class:"row q-pa-sm justify-center"},_={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},y={class:"row"},v=(0,i._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,i._)("h4",null,[(0,i._)("strong",null,"MANTENIMIENTO - AYUDANTES")])],-1),w={class:"col-md-5 col-sm-7 col-xs-6",style:{"align-self":"center","margin-right":"20px"}},C={class:"col-md-2 col-sm-4 col-xs-5",style:{"text-align":"center","align-self":"center"}},D={class:"q-pa-md"},S={class:"q-gutter-y-md"},x={bordered:"",flat:"",class:"row"},E=(0,i._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function W(e,a,t,W,k,V){const Z=(0,i.up)("q-icon"),A=(0,i.up)("q-input"),N=(0,i.up)("q-select"),q=(0,i.up)("q-btn"),I=(0,i.up)("q-form"),U=(0,i.up)("q-card-section"),$=(0,i.up)("q-card"),z=(0,i.up)("q-dialog"),Q=(0,i.up)("q-inner-loading"),P=(0,i.up)("q-td"),T=(0,i.up)("q-item-label"),B=(0,i.up)("q-item-section"),j=(0,i.up)("q-chip"),H=(0,i.up)("q-item"),L=(0,i.up)("q-list"),F=(0,i.up)("q-table"),R=(0,i.up)("q-card-actions"),O=(0,i.up)("methods"),G=(0,i.up)("desactive-crud"),M=(0,i.up)("q-page"),Y=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(M,{class:"pagina q-pa-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{modelValue:W.create,"onUpdate:modelValue":a[6]||(a[6]=e=>W.create=e)},{default:(0,i.w5)((()=>[(0,i.Wm)($,{class:"q-pa-md",bordered:"",style:{"max-width":"60vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(U,null,{default:(0,i.w5)((()=>[(0,i.Wm)(I,{onSubmit:V.createData,class:"q-gutter-md"},{default:(0,i.w5)((()=>[(0,i._)("div",s,[(0,i._)("div",r,[(0,i.Wm)(A,{outlined:"",modelValue:k.form.nb_ayudante,"onUpdate:modelValue":[a[0]||(a[0]=e=>k.form.nb_ayudante=e),a[1]||(a[1]=e=>k.form.nb_ayudante=k.form.nb_ayudante.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[V.reglaInputName]},{prepend:(0,i.w5)((()=>[(0,i.Wm)(Z,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",l,[(0,i.Wm)(A,{outlined:"",modelValue:k.form.tlf_ayudante,"onUpdate:modelValue":a[2]||(a[2]=e=>k.form.tlf_ayudante=e),label:"Teléfono",rules:[V.reglaInputPhone],hint:"","lazy-rules":"",mask:"### - ### - ##########"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(Z,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",d,[(0,i.Wm)(A,{outlined:"",modelValue:k.form.dir_ayudante,"onUpdate:modelValue":[a[3]||(a[3]=e=>k.form.dir_ayudante=e),a[4]||(a[4]=e=>k.form.dir_ayudante=k.form.dir_ayudante.toUpperCase())],label:"Direccion",hint:"",rules:[V.reglaDireccion],"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(Z,{name:"location_on"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",n,[(0,i.Wm)(N,{outlined:"",modelValue:k.form.flag_activo,"onUpdate:modelValue":a[5]||(a[5]=e=>k.form.flag_activo=e),label:"Vigente",hint:"",rules:[V.reglasSelect],options:k.vigente,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(Z,{name:"rule"})])),_:1},8,["modelValue","rules","options"])])]),(0,i._)("div",m,[(0,i.Wm)(q,{label:"Agregar Ayudante",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,i.wy)((0,i.Wm)(q,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[Y]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(z,{modelValue:W.edit,"onUpdate:modelValue":a[13]||(a[13]=e=>W.edit=e)},{default:(0,i.w5)((()=>[(0,i.Wm)($,{class:"q-pa-md",bordered:"",style:{"max-width":"60vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(U,null,{default:(0,i.w5)((()=>[(0,i.Wm)(I,{onSubmit:V.putData},{default:(0,i.w5)((()=>[(0,i._)("div",u,[(0,i._)("div",c,[(0,i.Wm)(A,{outlined:"",modelValue:k.formEdit.nb_ayudante,"onUpdate:modelValue":[a[7]||(a[7]=e=>k.formEdit.nb_ayudante=e),a[8]||(a[8]=e=>k.formEdit.nb_ayudante=k.formEdit.nb_ayudante.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[V.reglaInputName]},{prepend:(0,i.w5)((()=>[(0,i.Wm)(Z,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",p,[(0,i.Wm)(A,{outlined:"",modelValue:k.formEdit.tlf_ayudante,"onUpdate:modelValue":a[9]||(a[9]=e=>k.formEdit.tlf_ayudante=e),label:"Teléfono",rules:[V.reglaInputPhone],hint:"","lazy-rules":"",mask:"### - ### - ##########"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(Z,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",g,[(0,i.Wm)(A,{outlined:"",modelValue:k.formEdit.dir_ayudante,"onUpdate:modelValue":[a[10]||(a[10]=e=>k.formEdit.dir_ayudante=e),a[11]||(a[11]=e=>k.formEdit.dir_ayudante=k.formEdit.dir_ayudante.toUpperCase())],label:"Direccion",hint:"",rules:[V.reglaDireccion],"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(Z,{name:"location_on"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",f,[(0,i.Wm)(N,{outlined:"",modelValue:k.formEdit.flag_activo,"onUpdate:modelValue":a[12]||(a[12]=e=>k.formEdit.flag_activo=e),label:"Vigente",hint:"",rules:[V.reglasSelect],options:k.vigente,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(Z,{name:"rule"})])),_:1},8,["modelValue","rules","options"])])]),(0,i._)("div",h,[(0,i.Wm)(q,{label:"Editar Ayudante",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,i.wy)((0,i.Wm)(q,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[Y]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i._)("div",b,[(0,i._)("div",_,[(0,i._)("div",y,[v,(0,i._)("div",w,[(0,i.Wm)(A,{modelValue:W.filter,"onUpdate:modelValue":a[14]||(a[14]=e=>W.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(Z,{name:"search"})])),_:1},8,["modelValue"])]),(0,i._)("div",C,[(0,i.Wm)(q,{label:"Insertar Ayudante",rounded:"",color:"primary",onClick:a[15]||(a[15]=e=>W.create=!0),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,i._)("div",D,[(0,i._)("div",S,[(0,i._)("div",x,[(0,i.Wm)(F,{rows:k.datos,"row-key":"id",loading:W.loading,columns:k.columns,separator:W.separator,class:"my-sticky-column-table",filter:W.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:W.pagination,"onUpdate:pagination":a[18]||(a[18]=e=>W.pagination=e)},{loading:(0,i.w5)((()=>[(0,i.Wm)(Q,{showing:"",color:"primary"})])),"body-cell-action":(0,i.w5)((e=>[(0,i.Wm)(P,{props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{V.getData(`/ayudantes/${e.row.id}`,"setDataEdit","formEdit"),W.edit=!0}},null,8,["disabled","onClick"]),(0,i.Wm)(q,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>k.selected=e.row.id,onClickCapture:a[16]||(a[16]=e=>W.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,i.w5)((e=>[(0,i._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.j5)(e.selected?"transform: scale(0.95);":"")},[(0,i.Wm)($,{class:(0,o.C_)(e.selected?"bg-grey-2":"")},{default:(0,i.w5)((()=>[(0,i.Wm)(L,{dense:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cols,(t=>((0,i.wg)(),(0,i.j4)(H,{key:t.name},{default:(0,i.w5)((()=>[(0,i.Wm)(B,null,{default:(0,i.w5)((()=>[(0,i.Wm)(T,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(B,{side:""},{default:(0,i.w5)((()=>["status"===t.name?((0,i.wg)(),(0,i.j4)(j,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,i.wg)(),(0,i.j4)(q,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{V.getData(`/ayudantes/${e.row.id}`,"setDataEdit","formEdit"),W.edit=!0}},null,8,["disabled","onClick"])):(0,i.kq)("",!0),"status"===t.name?((0,i.wg)(),(0,i.j4)(j,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,i.wg)(),(0,i.j4)(q,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>k.selected=e.row.id,onClickCapture:a[17]||(a[17]=e=>W.deletePopup=!0)},null,8,["disabled","onClick"])):((0,i.wg)(),(0,i.j4)(T,{key:4,caption:"",class:(0,o.C_)(t.classes?t.classes:"")},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])])])])]),(0,i.Wm)(z,{modelValue:W.deletePopup,"onUpdate:modelValue":a[20]||(a[20]=e=>W.deletePopup=e)},{default:(0,i.w5)((()=>[(0,i.Wm)($,{style:{width:"700px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(U,null,{default:(0,i.w5)((()=>[E])),_:1}),(0,i.Wm)(R,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(q,{flat:"",label:"Cancelar",color:"primary"},null,512),[[Y]]),(0,i.wy)((0,i.Wm)(q,{flat:"",label:"Aceptar",color:"primary",onClick:a[19]||(a[19]=e=>V.deleteData(k.selected))},null,512),[[Y]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(O,{ref:"methods",onGetData:a[21]||(a[21]=e=>V.getData("/ayudantes","setData","datos")),onSetData:V.setData,onResetLoading:V.resetLoading,onSetDataEdit:V.setDataEdit},null,8,["onSetData","onResetLoading","onSetDataEdit"]),(0,i.Wm)(G,{ref:"desactiveCrud",onDesactivarCrud:V.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var k=t(1959),V=t(8825),Z=(t(589),t(7105)),A=t(8015);const N={components:{"desactive-crud":A.Z,methods:Z.Z},name:"Ayudantes",data(){return{columns:[{name:"nb_ayudante",label:"Nombre",field:"nb_ayudante",align:"left",sortable:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",sortable:!0},{name:"dir_ayudante",label:"Direccion",field:"dir_ayudante",align:"left",sortable:!0},{name:"tlf_ayudante",label:"Telefono",field:"tlf_ayudante",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nb_ayudante:"",dir_ayudante:"",tlf_ayudante:"",flag_activo:""},datos:[],formEdit:{nb_ayudante:"",dir_ayudante:"",tlf_ayudante:"",flag_activo:""},vigente:[{label:"ACTIVO",value:"1"},{label:"INACTIVO",value:"0"}],selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:""}}}},setup(){const e=(0,V.Z)();(0,k.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,k.iH)({rowsPerPage:10}),separator:(0,k.iH)("vertical"),create:(0,k.iH)(!1),loading:(0,k.iH)(!1),edit:(0,k.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Banco agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Banco editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Banco eliminado exitosamente",color:"green"})},medium:(0,k.iH)(!1),deletePopup:(0,k.iH)(!1),filter:(0,k.iH)("")}},mounted(){this.getData("/ayudantes","setData","datos"),this.$refs.desactiveCrud.desactivarCrud("c_ayudantes","r_ayudantes","u_ayudantes","d_ayudantes","desactivarCrud")},methods:{resetLoading(){this.loading=!1},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasInputs(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglaDireccion(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>100)return"Deben ser maximo 100 caracteres"}},reglaInputName(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>50)return"Deben ser maximo 50 caracteres"}},reglaInputPhone(e){if(null!==e!==""&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>50)return"Deben ser maximo 50 caracteres"}},desactivarCrud(e,a,t,i){1==a?(1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==i&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,a,t){this.$refs.methods.getData(e,a,t,this.axiosConfig),this.loading=!0},setData(e,a){this[a]=e,this.loading=!1},setDataEdit(e,a){this[a].id=e.id,this[a].nb_ayudante=e.nb_ayudante,this[a].dir_ayudante=e.dir_ayudante,this[a].tlf_ayudante=e.tlf_ayudante,this[a].flag_activo=e.activo_desc,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/ayudantes/${e}`,"getData",this.axiosConfig),this.loading=!0},createData(){this.form.flag_activo=this.form.flag_activo.value,this.$refs.methods.createData("/ayudantes",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.formEdit.flag_activo=this.formEdit.flag_activo.value,this.$refs.methods.putData(`/ayudantes/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.loading=!0},resetForm(){this.form.nb_ayudante=null,this.form.dir_ayudante=null,this.form.tlf_ayudante=null,this.form.flag_activo=null,this.create=!1},resetFormEdit(){this.formEdit.nb_ayudante=null,this.formEdit.dir_ayudante=null,this.formEdit.tlf_ayudante=null,this.formEdit.flag_activo=null,this.edit=!1}}};var q=t(4260),I=t(4379),U=t(6778),$=t(151),z=t(5589),Q=t(5269),P=t(4842),T=t(4554),B=t(2448),j=t(8240),H=t(7352),L=t(6941),F=t(3884),R=t(7011),O=t(3414),G=t(2035),M=t(2350),Y=t(7030),K=t(9367),J=t(677),X=t(7518),ee=t.n(X);const ae=(0,q.Z)(N,[["render",W]]),te=ae;ee()(N,"components",{QPage:I.Z,QDialog:U.Z,QCard:$.Z,QCardSection:z.Z,QForm:Q.Z,QInput:P.Z,QIcon:T.Z,QSelect:B.Z,QBtn:j.Z,QTable:H.Z,QInnerLoading:L.Z,QTd:F.Z,QList:R.Z,QItem:O.Z,QItemSection:G.Z,QItemLabel:M.Z,QChip:Y.Z,QCardActions:K.Z}),ee()(N,"directives",{ClosePopup:J.Z})}}]);