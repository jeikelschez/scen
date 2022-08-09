"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[8973],{8015:(e,r,a)=>{function t(e,r,a,t,o,l){return null}a.d(r,{Z:()=>n});var o=a(589),l=a(8825);const s={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,l.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,r,a,t,l){for(var s,i,d,n,c=o.Z.getItem("tokenTraducido"),m=0,p=c.usuario.roles.permisos.length;m<p;m++)if(c.usuario.roles.permisos[m].codigo===e&&(s=!0),c.usuario.roles.permisos[m].codigo===t&&(d=!0),c.usuario.roles.permisos[m].codigo===a&&(n=!0),c.usuario.roles.permisos[m].codigo===r&&(i=!0),m==c.usuario.roles.permisos.length.length-1)break;e=!0===s,t=!0===d,a=!0===n,r=!0===i,this.$emit(l,e,r,t,a)},desactivarOpciones(e){for(var r=o.Z.getItem("tokenTraducido"),a=0,t=this.permisos.length;a<t;a++){var l=0;for(t=r.usuario.roles.permisos.length;l<t;l++)if(r.usuario.roles.permisos[l].codigo==this.permisos[a].permisoName&&(this.permisos[a].permiso=!0),l==r.usuario.roles.permisos.length.length-1)break;if(a==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var i=a(4260);const d=(0,i.Z)(s,[["render",t]]),n=d},2635:(e,r,a)=>{function t(e,r,a,t,o,l){return null}a.d(r,{Z:()=>c});var o=a(589),l=a(5474),s=a(8825);const i={name:"userLogout",data:function(){return{}},setup(){const e=(0,s.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,r,a,t){t.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.get(e,t).then((e=>{this.$emit(r,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,r,a,t){t.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.get(e,t).then((e=>{this.$emit(r,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,r,a){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api["delete"](e,a).then((e=>{(e.status=200)&&(this.$emit(r),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,r,a,t){t.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.post(e,r,t).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,r,a,t){t.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.put(e,r,t).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var d=a(4260);const n=(0,d.Z)(i,[["render",t]]),c=n},8973:(e,r,a)=>{a.r(r),a.d(r,{default:()=>ce});var t=a(3673),o=a(2323);const l={class:"row"},s={class:"col-md-6 col-xs-12"},i={class:"col-md-6 col-xs-12"},d={class:"col-md-12 col-xs-12"},n={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},m={class:"col-md-6 col-xs-12"},p={class:"col-md-6 col-xs-12"},u={class:"col-md-12 col-xs-12"},f={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},g={class:"row"},h={class:"col-md-6 col-xs-12"},_={class:"col-md-6 col-xs-12"},b={class:"col-md-12 col-xs-12"},v={class:"col-md-6 col-xs-12"},w={class:"col-md-6 col-xs-12"},C={class:"col-md-6 col-xs-12"},E={class:"col-md-6 col-xs-12"},D={class:"col-md-12 col-xs-12"},y={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},S={class:"row q-pa-sm justify-center"},x={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},V={class:"row"},W=(0,t._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,t._)("h4",null,[(0,t._)("strong",null,"MANTENIMIENTO - RECEPTORES")])],-1),N={class:"col-md-5 col-sm-7 col-xs-6",style:{"align-self":"center","margin-right":"20px"}},A={class:"col-md-2 col-sm-4 col-xs-5",style:{"text-align":"center","align-self":"center"}},k={class:"q-pa-md"},U={class:"q-gutter-y-md"},Z={bordered:"",flat:"",class:"row"},q=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function z(e,r,a,z,$,I){const P=(0,t.up)("q-icon"),Q=(0,t.up)("q-input"),H=(0,t.up)("q-select"),R=(0,t.up)("q-btn"),T=(0,t.up)("q-form"),j=(0,t.up)("q-card-section"),B=(0,t.up)("q-card"),F=(0,t.up)("q-dialog"),M=(0,t.up)("q-inner-loading"),L=(0,t.up)("q-td"),O=(0,t.up)("q-item-label"),G=(0,t.up)("q-item-section"),K=(0,t.up)("q-chip"),Y=(0,t.up)("q-item"),J=(0,t.up)("q-list"),X=(0,t.up)("q-table"),ee=(0,t.up)("q-card-actions"),re=(0,t.up)("methods"),ae=(0,t.up)("desactivate-crud"),te=(0,t.up)("q-page"),oe=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(te,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{modelValue:z.create,"onUpdate:modelValue":r[15]||(r[15]=e=>z.create=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Wm)(T,{onSubmit:I.createData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",l,[(0,t._)("div",s,[(0,t.Wm)(Q,{outlined:"",modelValue:$.form.nb_receptor,"onUpdate:modelValue":[r[0]||(r[0]=e=>$.form.nb_receptor=e),r[1]||(r[1]=e=>$.form.nb_receptor=$.form.nb_receptor.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[I.reglasNotNull50]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",i,[(0,t.Wm)(H,{outlined:"",modelValue:$.form.flag_activo,"onUpdate:modelValue":r[2]||(r[2]=e=>$.form.flag_activo=e),label:"Estatus",rules:[I.reglasSelect],hint:"",options:$.estatus,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"block"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",d,[(0,t.Wm)(Q,{outlined:"",modelValue:$.form.dir_receptor,"onUpdate:modelValue":[r[3]||(r[3]=e=>$.form.dir_receptor=e),r[4]||(r[4]=e=>$.form.dir_receptor=$.form.dir_receptor.toUpperCase())],label:"Direccion",rules:[I.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",n,[(0,t.Wm)(Q,{outlined:"",modelValue:$.form.tlf_receptor,"onUpdate:modelValue":[r[5]||(r[5]=e=>$.form.tlf_receptor=e),r[6]||(r[6]=e=>$.form.tlf_receptor=$.form.tlf_receptor.toUpperCase())],label:"Teléfonos",rules:[I.reglasAllowNull50],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",c,[(0,t.Wm)(Q,{outlined:"",modelValue:$.form.cel_receptor,"onUpdate:modelValue":[r[7]||(r[7]=e=>$.form.cel_receptor=e),r[8]||(r[8]=e=>$.form.cel_receptor=$.form.cel_receptor.toUpperCase())],label:"Celular",rules:[I.reglasAllowNull50],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"phone_iphone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",m,[(0,t.Wm)(Q,{outlined:"",modelValue:$.form.cedula_receptor,"onUpdate:modelValue":[r[9]||(r[9]=e=>$.form.cedula_receptor=e),r[10]||(r[10]=e=>$.form.cedula_receptor=$.form.cedula_receptor.toUpperCase())],label:"Cedula",rules:[I.reglasAllowNull20],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"contacts"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",p,[(0,t.Wm)(Q,{outlined:"",modelValue:$.form.placa,"onUpdate:modelValue":[r[11]||(r[11]=e=>$.form.placa=e),r[12]||(r[12]=e=>$.form.placa=$.form.placa.toUpperCase())],label:"Placa",rules:[I.reglasAllowNull10],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"money"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",u,[(0,t.Wm)(Q,{outlined:"",modelValue:$.form.vehiculo,"onUpdate:modelValue":[r[13]||(r[13]=e=>$.form.vehiculo=e),r[14]||(r[14]=e=>$.form.vehiculo=$.form.vehiculo.toUpperCase())],label:"Descripcion de Vehiculo",rules:[I.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"directions_car"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",f,[(0,t.Wm)(R,{label:"Agregar Receptor",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(R,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[oe]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(F,{modelValue:z.edit,"onUpdate:modelValue":r[31]||(r[31]=e=>z.edit=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Wm)(T,{onSubmit:I.putData},{default:(0,t.w5)((()=>[(0,t._)("div",g,[(0,t._)("div",h,[(0,t.Wm)(Q,{outlined:"",modelValue:$.formEdit.nb_receptor,"onUpdate:modelValue":[r[16]||(r[16]=e=>$.formEdit.nb_receptor=e),r[17]||(r[17]=e=>$.formEdit.nb_receptor=$.formEdit.nb_receptor.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[I.reglasNotNull50]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",_,[(0,t.Wm)(H,{outlined:"",modelValue:$.formEdit.flag_activo,"onUpdate:modelValue":r[18]||(r[18]=e=>$.formEdit.flag_activo=e),label:"Estatus","input-class":"input",rules:[I.reglasSelect],hint:"",options:$.estatus,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"block"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",b,[(0,t.Wm)(Q,{outlined:"",modelValue:$.formEdit.dir_receptor,"onUpdate:modelValue":[r[19]||(r[19]=e=>$.formEdit.dir_receptor=e),r[20]||(r[20]=e=>$.formEdit.dir_receptor=$.formEdit.dir_receptor.toUpperCase())],label:"Direccion",rules:[I.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",v,[(0,t.Wm)(Q,{outlined:"",modelValue:$.formEdit.tlf_receptor,"onUpdate:modelValue":[r[21]||(r[21]=e=>$.formEdit.tlf_receptor=e),r[22]||(r[22]=e=>$.formEdit.tlf_receptor=$.formEdit.tlf_receptor.toUpperCase())],label:"Teléfonos",rules:[I.reglasAllowNull50],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",w,[(0,t.Wm)(Q,{outlined:"",modelValue:$.formEdit.cel_receptor,"onUpdate:modelValue":[r[23]||(r[23]=e=>$.formEdit.cel_receptor=e),r[24]||(r[24]=e=>$.formEdit.cel_receptor=$.formEdit.cel_receptor.toUpperCase())],label:"Celular",rules:[I.reglasAllowNull50],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"phone_iphone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",C,[(0,t.Wm)(Q,{outlined:"",modelValue:$.formEdit.cedula_receptor,"onUpdate:modelValue":[r[25]||(r[25]=e=>$.formEdit.cedula_receptor=e),r[26]||(r[26]=e=>$.formEdit.cedula_receptor=$.formEdit.cedula_receptor.toUpperCase())],label:"Cedula",rules:[I.reglasAllowNull20],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"contacts"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",E,[(0,t.Wm)(Q,{outlined:"",modelValue:$.formEdit.placa,"onUpdate:modelValue":[r[27]||(r[27]=e=>$.formEdit.placa=e),r[28]||(r[28]=e=>$.formEdit.placa=$.formEdit.placa.toUpperCase())],label:"Placa",rules:[I.reglasAllowNull10],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"money"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",D,[(0,t.Wm)(Q,{outlined:"",modelValue:$.formEdit.vehiculo,"onUpdate:modelValue":[r[29]||(r[29]=e=>$.formEdit.vehiculo=e),r[30]||(r[30]=e=>$.formEdit.vehiculo=$.formEdit.vehiculo.toUpperCase())],label:"Descripcion de Vehiculo",rules:[I.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"directions_car"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",y,[(0,t.Wm)(R,{label:"Editar Receptor",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(R,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[oe]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",S,[(0,t._)("div",x,[(0,t._)("div",V,[W,(0,t._)("div",N,[(0,t.Wm)(Q,{modelValue:z.filter,"onUpdate:modelValue":r[32]||(r[32]=e=>z.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",A,[(0,t.Wm)(R,{label:"Insertar Receptor",rounded:"",color:"primary",onClick:r[33]||(r[33]=e=>z.create=!0),onClickCapture:r[34]||(r[34]=e=>I.resetForm()),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,t._)("div",k,[(0,t._)("div",U,[(0,t._)("div",Z,[(0,t.Wm)(X,{rows:$.datos,"row-key":"id",columns:$.columns,loading:z.loading,separator:z.separator,class:"my-sticky-column-table",filter:z.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:z.pagination,"onUpdate:pagination":r[37]||(r[37]=e=>z.pagination=e)},{loading:(0,t.w5)((()=>[(0,t.Wm)(M,{showing:"",color:"primary"})])),"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(L,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:r=>{I.getData(`/receptores/${e.row.id}`,"setDataEdit","formEdit"),z.edit=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(R,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:r=>$.selected=e.row.id,onClickCapture:r[35]||(r[35]=e=>z.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(B,{class:(0,o.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(a=>((0,t.wg)(),(0,t.j4)(Y,{key:a.name},{default:(0,t.w5)((()=>[(0,t.Wm)(G,null,{default:(0,t.w5)((()=>[(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(a.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(G,{side:""},{default:(0,t.w5)((()=>["status"===a.name?((0,t.wg)(),(0,t.j4)(K,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,t.wg)(),(0,t.j4)(R,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:r=>{I.getData(`/receptores/${e.row.id}`,"setDataEdit","formEdit"),z.edit=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"status"===a.name?((0,t.wg)(),(0,t.j4)(K,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,t.wg)(),(0,t.j4)(R,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:r=>$.selected=e.row.id,onClickCapture:r[36]||(r[36]=e=>z.deletePopup=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(O,{key:4,caption:"",class:(0,o.C_)(a.classes?a.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(a.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","filter","grid","pagination"])])])])])]),(0,t.Wm)(F,{modelValue:z.deletePopup,"onUpdate:modelValue":r[39]||(r[39]=e=>z.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[q])),_:1}),(0,t.Wm)(ee,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(R,{flat:"",label:"Cancelar",color:"primary"},null,512),[[oe]]),(0,t.wy)((0,t.Wm)(R,{flat:"",label:"Aceptar",color:"primary",onClick:r[38]||(r[38]=e=>I.deleteData($.selected))},null,512),[[oe]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(re,{ref:"methods",onGetData:r[40]||(r[40]=e=>I.getData("/receptores","setData","datos")),onSetData:I.setData,onResetLoading:I.resetLoading,onSetDataEdit:I.setDataEdit},null,8,["onSetData","onResetLoading","onSetDataEdit"]),(0,t.Wm)(ae,{ref:"desactivateCrud",onDesactivarCrud:I.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var $=a(1959),I=(a(5474),a(8825)),P=(a(589),a(2635)),Q=a(8015);const H={components:{"desactivate-crud":Q.Z,methods:P.Z},name:"Receptores",data(){return{columns:[{name:"nb_receptor",label:"Nombre",field:"nb_receptor",align:"left",sortable:!0},{name:"cedula_receptor",label:"Cedula de Receptor",field:"cedula_receptor",align:"left",sortable:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nb_receptor:"",dir_receptor:"",tlf_receptor:"",cel_receptor:"",cedula_receptor:"",placa:"",vehiculo:"",flag_activo:[]},estatus:[{label:"ACTIVO",value:"A"},{label:"INACTIVO",value:"I"}],datos:[],formEdit:{id:"",nb_receptor:"",dir_receptor:"",tlf_receptor:"",cel_receptor:"",cedula_receptor:"",placa:"",vehiculo:"",flag_activo:[]},selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:""}}}},setup(){(0,I.Z)(),(0,$.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,$.iH)({rowsPerPage:10}),separator:(0,$.iH)("vertical"),create:(0,$.iH)(!1),edit:(0,$.iH)(!1),loading:(0,$.iH)(!1),medium:(0,$.iH)(!1),deletePopup:(0,$.iH)(!1),filter:(0,$.iH)("")}},mounted(){this.getData("/receptores","setData","datos"),this.$refs.desactivateCrud.desactivarCrud("c_receptores","r_receptores","u_receptores","d_receptores","desactivarCrud")},methods:{resetLoading(){this.loading=!1},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasNotNull100(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>99)return"Deben ser Maximo 100 caracteres"}},reglasNotNull20(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>19)return"Deben ser Maximo 19 caracteres"}},reglasNotNull200(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>199)return"Deben ser Maximo 200 caracteres"}},reglasNotNull50(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>49)return"Deben ser Maximo 50 caracteres"}},reglasAllowNull20(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>19)return"Deben ser Maximo 20 caracteres"}},reglasAllowNull100(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>99)return"Deben ser Maximo 100 caracteres"}},reglasAllowNull10(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>9)return"Deben ser Maximo 10 caracteres"}},reglasAllowNull50(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>49)return"Deben ser Maximo 50 caracteres"}},desactivarCrud(e,r,a,t){1==r?(1==e&&(this.disabledCreate=!1),1==a&&(this.disabledDelete=!1),1==t&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,r,a){this.$refs.methods.getData(e,r,a,this.axiosConfig),this.loading=!0},setData(e,r){this[r]=e,this.loading=!1},setDataEdit(e,r){this.formEdit.id=e.id,this.formEdit.nb_receptor=e.nb_receptor,this.formEdit.dir_receptor=e.dir_receptor,this.formEdit.tlf_receptor=e.tlf_receptor,this.formEdit.cel_receptor=e.cel_receptor,this.formEdit.cedula_receptor=e.cedula_receptor,this.formEdit.placa=e.placa,this.formEdit.vehiculo=e.vehiculo,this.formEdit.flag_activo=e.activo_desc,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/receptores/${e}`,"getData",this.axiosConfig),this.loading=!0},createData(){this.form.flag_activo=this.form.flag_activo.value,this.$refs.methods.createData("/receptores",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.formEdit.flag_activo=this.formEdit.flag_activo.value,this.$refs.methods.putData(`/receptores/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.resetFormEdit(),this.loading=!0},resetForm(){this.form.nb_receptor="",this.form.dir_receptor="",this.form.tlf_receptor="",this.form.cel_receptor="",this.form.cedula_receptor="",this.form.cedula_receptor="",this.form.flag_activo="",this.create=!1},resetFormEdit(){this.formEdit.nb_receptor="",this.formEdit.dir_receptor="",this.formEdit.tlf_receptor="",this.formEdit.cel_receptor="",this.formEdit.cedula_receptor="",this.formEdit.flag_activo="",this.formEdit.placa="",this.edit=!1}}};var R=a(4260),T=a(4379),j=a(6778),B=a(151),F=a(5589),M=a(5269),L=a(4842),O=a(4554),G=a(2448),K=a(8240),Y=a(7352),J=a(6941),X=a(3884),ee=a(7011),re=a(3414),ae=a(2035),te=a(2350),oe=a(7030),le=a(9367),se=a(677),ie=a(7518),de=a.n(ie);const ne=(0,R.Z)(H,[["render",z]]),ce=ne;de()(H,"components",{QPage:T.Z,QDialog:j.Z,QCard:B.Z,QCardSection:F.Z,QForm:M.Z,QInput:L.Z,QIcon:O.Z,QSelect:G.Z,QBtn:K.Z,QTable:Y.Z,QInnerLoading:J.Z,QTd:X.Z,QList:ee.Z,QItem:re.Z,QItemSection:ae.Z,QItemLabel:te.Z,QChip:oe.Z,QCardActions:le.Z}),de()(H,"directives",{ClosePopup:se.Z})}}]);