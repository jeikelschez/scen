"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[3764],{8015:(e,a,t)=>{function o(e,a,t,o,i,s){return null}t.d(a,{Z:()=>n});var i=t(589),s=t(8825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,s.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,t,o,s){for(var r,l,d,n,m=i.Z.getItem("tokenTraducido"),c=0,p=m.usuario.roles.permisos.length;c<p;c++)if(m.usuario.roles.permisos[c].codigo===e&&(r=!0),m.usuario.roles.permisos[c].codigo===o&&(d=!0),m.usuario.roles.permisos[c].codigo===t&&(n=!0),m.usuario.roles.permisos[c].codigo===a&&(l=!0),c==m.usuario.roles.permisos.length.length-1)break;e=!0===r,o=!0===d,t=!0===n,a=!0===l,this.$emit(s,e,a,o,t)},desactivarOpciones(e){for(var a=i.Z.getItem("tokenTraducido"),t=0,o=this.permisos.length;t<o;t++){var s=0;for(o=a.usuario.roles.permisos.length;s<o;s++)if(a.usuario.roles.permisos[s].codigo==this.permisos[t].permisoName&&(this.permisos[t].permiso=!0),s==a.usuario.roles.permisos.length.length-1)break;if(t==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var l=t(4260);const d=(0,l.Z)(r,[["render",o]]),n=d},9841:(e,a,t)=>{function o(e,a,t,o,i,s){return null}t.d(a,{Z:()=>m});var i=t(589),s=t(5474),r=t(8825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,o){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,o).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,a,t,o){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,o).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,a,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,t,o){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,a,o).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,t,o){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,a,o).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,a,t,o){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.put(e,a,o).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))}}};var d=t(4260);const n=(0,d.Z)(l,[["render",o]]),m=n},3764:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ee});var o=t(3673),i=t(2323);const s={class:"row"},r={class:"col-md-6 col-xs-12"},l={class:"col-md-6 col-xs-12"},d={class:"col-md-12 col-xs-12"},n={class:"full-width row justify-center items-center content-center"},m={class:"row"},c={class:"col-md-6 col-xs-12"},p={class:"col-md-6 col-xs-12"},u={class:"col-md-12 col-xs-12"},g={class:"full-width row justify-center items-center content-center",style:{"margin-top":"10px"}},h={class:"row q-pa-sm justify-center"},b={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 text-secondary"},f=(0,o._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},[(0,o._)("h4",{style:{"font-size":"35px","align-self":"center","text-align":"center"}},[(0,o._)("strong",null,"MANTENIMIENTO - VARIABLE CONTROL")])],-1),v={class:"col-md-8 col-sm-12 col-xs-12 filter",style:{"align-self":"center"}},w={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},_={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},D={class:"q-pa-md",style:{"margin-top":"20px"}},S={class:"q-gutter-y-md"},C={bordered:"",flat:"",class:"my-card row"},y=(0,o._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1);function x(e,a,t,x,E,V){const W=(0,o.up)("q-icon"),k=(0,o.up)("q-input"),N=(0,o.up)("q-select"),Z=(0,o.up)("q-btn"),q=(0,o.up)("q-form"),A=(0,o.up)("q-card-section"),$=(0,o.up)("q-card"),U=(0,o.up)("q-dialog"),z=(0,o.up)("q-inner-loading"),I=(0,o.up)("q-td"),Q=(0,o.up)("q-item-label"),L=(0,o.up)("q-item-section"),P=(0,o.up)("q-chip"),T=(0,o.up)("q-item"),R=(0,o.up)("q-list"),j=(0,o.up)("q-table"),B=(0,o.up)("q-card-actions"),H=(0,o.up)("methods"),F=(0,o.up)("desactive-crud"),O=(0,o.up)("q-page"),M=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(O,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{modelValue:x.create,"onUpdate:modelValue":a[4]||(a[4]=e=>x.create=e)},{default:(0,o.w5)((()=>[(0,o.Wm)($,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(A,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,{onSubmit:V.createDato,class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o._)("div",s,[(0,o._)("div",r,[(0,o.Wm)(k,{outlined:"",modelValue:E.form.nombre,"onUpdate:modelValue":[a[0]||(a[0]=e=>E.form.nombre=e),a[1]||(a[1]=e=>E.form.nombre=E.form.nombre.toUpperCase())],label:"Descripción de Variable",hint:"",class:"pcform","lazy-rules":"",rules:[V.reglasNotNull50]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(W,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",l,[(0,o.Wm)(k,{"upper-case":"",outlined:"",modelValue:E.form.valor,"onUpdate:modelValue":a[2]||(a[2]=e=>E.form.valor=e),label:"Valor de Variable",hint:"","lazy-rules":"",rules:[V.reglasNotNull100],type:"number"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(W,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",d,[(0,o.Wm)(N,{outlined:"",modelValue:E.form.tipo,"onUpdate:modelValue":a[3]||(a[3]=e=>E.form.tipo=e),label:"Tipo de Variable",hint:"",options:E.tipo,"lazy-rules":"",rules:[V.reglasSelect]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(W,{name:"done_all"})])),_:1},8,["modelValue","options","rules"])])]),(0,o._)("div",n,[(0,o.Wm)(Z,{label:"Agregar Control",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(Z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[M]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(U,{modelValue:x.edit,"onUpdate:modelValue":a[9]||(a[9]=e=>x.edit=e)},{default:(0,o.w5)((()=>[(0,o.Wm)($,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(A,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,{onSubmit:V.putDato},{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o._)("div",c,[(0,o.Wm)(k,{outlined:"",modelValue:E.formEdit.nombre,"onUpdate:modelValue":[a[5]||(a[5]=e=>E.formEdit.nombre=e),a[6]||(a[6]=e=>E.formEdit.nombre=E.formEdit.nombre.toUpperCase())],label:"Descripción de Variable",hint:"",class:"pcform","lazy-rules":"",rules:[V.reglasNotNull50]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(W,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",p,[(0,o.Wm)(k,{"upper-case":"",outlined:"",modelValue:E.formEdit.valor,"onUpdate:modelValue":a[7]||(a[7]=e=>E.formEdit.valor=e),label:"Valor de Variable",hint:"","lazy-rules":"",rules:[V.reglasNotNull100],type:"number"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(W,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",u,[(0,o.Wm)(N,{outlined:"",modelValue:E.formEdit.tipo,"onUpdate:modelValue":a[8]||(a[8]=e=>E.formEdit.tipo=e),label:"Tipo de Variable",hint:"",options:E.tipo,"lazy-rules":"",rules:[V.reglasSelect]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(W,{name:"done_all"})])),_:1},8,["modelValue","options","rules"])])]),(0,o._)("div",g,[(0,o.Wm)(Z,{label:"Editar Control",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(Z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[M]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",h,[(0,o._)("div",b,[f,(0,o._)("div",v,[(0,o.Wm)(k,{modelValue:x.filter,"onUpdate:modelValue":a[10]||(a[10]=e=>x.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(W,{name:"search"})])),_:1},8,["modelValue"])]),(0,o._)("div",w,[(0,o.Wm)(Z,{label:"Insertar",rounded:"",style:{"text-align":"center","align-self":"center"},color:"primary",disabled:this.disabledCreate,onClick:a[11]||(a[11]=e=>x.create=!0),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,o._)("div",_,[(0,o._)("div",D,[(0,o._)("div",S,[(0,o._)("div",C,[(0,o.Wm)(j,{rows:E.datos,"row-key":"id",columns:E.columns,separator:x.separator,loading:x.loading,class:"my-sticky-column-table",filter:x.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:x.pagination,"onUpdate:pagination":a[14]||(a[14]=e=>x.pagination=e)},{loading:(0,o.w5)((()=>[(0,o.Wm)(z,{showing:"",color:"primary"})])),"body-cell-tipo":(0,o.w5)((e=>[(0,o.Wm)(I,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{outlined:"",modelValue:e.row.tipo_desc,"onUpdate:modelValue":[a=>e.row.tipo_desc=a,a=>{this.getDataEdit(e.row.id,"putDatoSelect"),this.formEdit.tipo=e.row.tipo_desc.value}],options:E.tipo},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1032,["props"])])),"body-cell-action":(0,o.w5)((t=>[(0,o.Wm)(I,{props:t},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:e=>{V.getDataEdit(t.row.id,"setDataEdit"),x.edit=!0}},null,8,["disabled","onClick"]),(0,o.Wm)(Z,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>e.selected=t.row.id,onClickCapture:a[12]||(a[12]=e=>x.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,o.w5)((t=>[(0,o._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(t.selected?"transform: scale(0.95);":"")},[(0,o.Wm)($,{class:(0,i.C_)(t.selected?"bg-grey-2":"")},{default:(0,o.w5)((()=>[(0,o.Wm)(R,{dense:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.cols,(s=>((0,o.wg)(),(0,o.j4)(T,{key:s.name},{default:(0,o.w5)((()=>[(0,o.Wm)(L,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Q,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(s.label),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(L,{side:""},{default:(0,o.w5)((()=>["status"===s.name?((0,o.wg)(),(0,o.j4)(P,{key:0,color:"Active"==t.row.status?"green":"Disable"==t.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,o.wg)(),(0,o.j4)(Z,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:e=>{V.getDataEdit(t.row.id,"setDataEdit"),x.edit=!0}},null,8,["disabled","onClick"])):(0,o.kq)("",!0),"status"===s.name?((0,o.wg)(),(0,o.j4)(P,{key:2,color:"Active"==t.row.status?"green":"Disable"==t.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,o.wg)(),(0,o.j4)(Z,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>e.selected=t.row.id,onClickCapture:a[13]||(a[13]=e=>x.deletePopup=!0)},null,8,["disabled","onClick"])):((0,o.wg)(),(0,o.j4)(Q,{key:4,caption:"",class:(0,i.C_)(s.classes?s.classes:"")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024),(0,o.Wm)(L,{side:""},{default:(0,o.w5)((()=>["status"===s.name?((0,o.wg)(),(0,o.j4)(P,{key:0,color:"Active"==t.row.status?"green":"Disable"==t.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"tipo"===s.name?((0,o.wg)(),(0,o.j4)(N,{key:1,outlined:"",modelValue:t.row.tipo_desc,"onUpdate:modelValue":[e=>t.row.tipo_desc=e,e=>{V.getDataEdit(t.row.id,"putDatoSelect"),this.formEdit.tipo=t.row.tipo_desc.value}],options:E.tipo},null,8,["modelValue","onUpdate:modelValue","options"])):((0,o.wg)(),(0,o.j4)(Q,{key:2,caption:"",class:(0,i.C_)(s.classes?s.classes:"")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","loading","filter","grid","pagination"])])])])])]),(0,o.Wm)(U,{modelValue:x.deletePopup,"onUpdate:modelValue":a[16]||(a[16]=e=>x.deletePopup=e)},{default:(0,o.w5)((()=>[(0,o.Wm)($,{style:{width:"700px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(A,null,{default:(0,o.w5)((()=>[y])),_:1}),(0,o.Wm)(B,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(Z,{flat:"",label:"Cancelar",color:"primary"},null,512),[[M]]),(0,o.wy)((0,o.Wm)(Z,{flat:"",label:"Aceptar",color:"primary",onClick:a[15]||(a[15]=a=>V.deleteDato(e.selected))},null,512),[[M]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(H,{ref:"methods",onGetData:a[17]||(a[17]=e=>V.getData("/vcontrol","setData","datos")),onSetData:V.setData,onResetLoading:V.resetLoading,onSetDataEdit:V.setDataEdit,onPutDatoSelect:V.putDatoSelect},null,8,["onSetData","onResetLoading","onSetDataEdit","onPutDatoSelect"]),(0,o.Wm)(F,{ref:"desactiveCrud",onDesactivarCrud:V.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var E=t(1959),V=t(8825),W=t(9841),k=t(8015);t(589);const N={components:{"desactive-crud":k.Z,methods:W.Z},name:"Bancos",data(){return{columns:[{name:"nombre",label:"Descripción de la Variable",field:"nombre",align:"left",sortable:!0},{name:"tipo",label:"Tipo de Variable",align:"left",sortable:!0,required:!0},{name:"valor",label:"Valor de la Variable",field:"valor",align:"left",type:"string"},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nombre:"",tipo:"",valor:""},formEdit:{id:"",nombre:"",tipo:"",valor:""},tipo:[{label:"STRING",value:"1"},{label:"ENTERO",value:"2"},{label:"DECIMAL",value:"3"},{label:"FECHA",value:"4"},{label:"ENTERO LARGO",value:"5"}],tipos:[],datos:[],disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:"",agencia:"1",tipo:"16",fuente:"CR"}}}},setup(){const e=(0,V.Z)();(0,E.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,E.iH)({rowsPerPage:10}),separator:(0,E.iH)("vertical"),create:(0,E.iH)(!1),loading:(0,E.iH)(!1),edit:(0,E.iH)(!1),activoExistente(){e.notify({message:"Solo puede haber un Activo por Agencia",color:"red"})},deletePopup:(0,E.iH)(!1),filter:(0,E.iH)("")}},mounted(){this.getData("/vcontrol","setData","datos"),this.$refs.desactiveCrud.desactivarCrud("c_vcontrol","r_vcontrol","u_vcontrol","d_vcontrol","desactivarCrud")},methods:{resetLoading(){this.loading=!1},reglasAllowNull1(e){if(null!==e!==""&&e.length>1)return"Deben ser Maximo 1 caracter"},reglasNotNull50(e){return null===e||""===e?"Debes Escribir Algo":null!==e!==""&&e.length>50?"Deben ser Maximo 50 caracteres":void 0},reglasNotNull100(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e>999)return"Deben ser Maximo 3 caracteres";if(e.length<3)return"Deben ser Minimo 3 caracteres"}},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},desactivarCrud(e,a,t,o){1==a?(1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==o&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,a,t){this.$refs.methods.getData(e,a,t,this.axiosConfig),this.loading=!0},setData(e,a){this[a]=e,this.loading=!1},getDataEdit(e,a){this.$refs.methods.getDataEdit(`/vcontrol/${e}`,`${a}`,"formEdit",this.axiosConfig)},setDataEdit(e,a){this[a].id=e.id,this[a].nombre=e.nombre,this[a].tipo=e.tipo_desc,this[a].valor=e.valor},getDataSelect(e,a,t){this.$refs.methods.getData(e,a,t,this.axiosConfig)},deleteDato(e){this.$refs.methods.deleteData(`/vcontrol/${e}`,"getData",this.axiosConfig),this.loading=!0},createDato(){this.form.tipo=this.form.tipo.value,this.$refs.methods.createData("/vcontrol",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putDato(){this.formEdit.tipo=this.formEdit.tipo.value,this.$refs.methods.putData(`/vcontrol/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.loading=!0},putDatoSelect(e,a){this[a].id=e.id,this[a].nombre=e.nombre,this[a].valor=e.valor,this.$refs.methods.putData(`/vcontrol/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.loading=!0},resetForm(){this.form.nombre="",this.form.tipo="",this.form.valor="",this.create=null},resetFormEdit(){this.formEdit.nombre="",this.formEdit.tipo="",this.formEdit.valor="",this.edit=null}}};var Z=t(4260),q=t(4379),A=t(6778),$=t(151),U=t(5589),z=t(5269),I=t(4842),Q=t(4554),L=t(2448),P=t(8240),T=t(7352),R=t(6941),j=t(3884),B=t(7011),H=t(3414),F=t(2035),O=t(2350),M=t(7030),G=t(9367),K=t(677),Y=t(7518),J=t.n(Y);const X=(0,Z.Z)(N,[["render",x]]),ee=X;J()(N,"components",{QPage:q.Z,QDialog:A.Z,QCard:$.Z,QCardSection:U.Z,QForm:z.Z,QInput:I.Z,QIcon:Q.Z,QSelect:L.Z,QBtn:P.Z,QTable:T.Z,QInnerLoading:R.Z,QTd:j.Z,QList:B.Z,QItem:H.Z,QItemSection:F.Z,QItemLabel:O.Z,QChip:M.Z,QCardActions:G.Z}),J()(N,"directives",{ClosePopup:K.Z})}}]);