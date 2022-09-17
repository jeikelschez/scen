"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[5745],{38015:(e,t,r)=>{function a(e,t,r,a,o,l){return null}r.d(t,{Z:()=>n});var o=r(80589),l=r(48825);const s={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,l.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,t,r,a,l){for(var s,i,d,n,c=o.Z.getItem("tokenTraducido"),m=0,p=c.usuario.roles.permisos.length;m<p;m++)if(c.usuario.roles.permisos[m].codigo===e&&(s=!0),c.usuario.roles.permisos[m].codigo===a&&(d=!0),c.usuario.roles.permisos[m].codigo===r&&(n=!0),c.usuario.roles.permisos[m].codigo===t&&(i=!0),m==c.usuario.roles.permisos.length.length-1)break;e=!0===s,a=!0===d,r=!0===n,t=!0===i,this.$emit(l,e,t,a,r)},desactivarOpciones(e){for(var t=o.Z.getItem("tokenTraducido"),r=0,a=this.permisos.length;r<a;r++){var l=0;for(a=t.usuario.roles.permisos.length;l<a;l++)if(t.usuario.roles.permisos[l].codigo==this.permisos[r].permisoName&&(this.permisos[r].permiso=!0),l==t.usuario.roles.permisos.length.length-1)break;if(r==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var i=r(74260);const d=(0,i.Z)(s,[["render",a]]),n=d},55325:(e,t,r)=>{function a(e,t,r,a,o,l){return null}r.d(t,{Z:()=>c});var o=r(80589),l=r(5474),s=r(48825);const i={name:"userLogout",data:function(){return{}},setup(){const e=(0,s.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,r,a){void 0==a?a={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.get(e,a).then((e=>{this.$emit(t,e.data,r)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,t,r,a){void 0==a?a={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.get(e,a).then((e=>{this.$emit(t,e.data,r)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,t,r){void 0==r?r={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:r.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api["delete"](e,r).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,r,a){void 0==a?a={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(r),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,r,a){void 0==a?a={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.post(e,t,a).then((e=>{(e.status=200)&&this.$emit(r,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,t,r,a){void 0==a?a={headers:{Authorization:`Bearer ${o.Z.getItem("token")}`}}:a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(r),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var d=r(74260);const n=(0,d.Z)(i,[["render",a]]),c=n},75745:(e,t,r)=>{r.r(t),r.d(t,{default:()=>me});var a=r(83673),o=r(62323);const l={class:"row"},s={class:"col-md-6 col-xs-12"},i={class:"col-md-6 col-xs-12"},d={class:"col-md-12 col-xs-12"},n={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},m={class:"col-md-6 col-xs-12"},p={class:"col-md-6 col-xs-12"},u={class:"col-md-12 col-xs-12"},g={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},f={class:"row"},h={class:"col-md-6 col-xs-12"},_={class:"col-md-6 col-xs-12"},b={class:"col-md-12 col-xs-12"},v={class:"col-md-6 col-xs-12"},w={class:"col-md-6 col-xs-12"},E={class:"col-md-6 col-xs-12"},C={class:"col-md-6 col-xs-12"},D={class:"col-md-12 col-xs-12"},y={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},S={class:"row q-pa-sm justify-center"},V={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},W={class:"row"},x=(0,a._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,a._)("h4",null,[(0,a._)("strong",null,"MANTENIMIENTO - RECEPTORES")])],-1),N={class:"col-md-5 col-sm-7 col-xs-6",style:{"align-self":"center","margin-right":"20px"}},k={class:"col-md-2 col-sm-4 col-xs-5",style:{"text-align":"center","align-self":"center"}},A={class:"q-pa-md"},Z={class:"q-gutter-y-md"},U={bordered:"",flat:"",class:"row"},$=(0,a._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function z(e,t,r,z,q,I){const B=(0,a.up)("q-icon"),R=(0,a.up)("q-input"),Q=(0,a.up)("q-select"),P=(0,a.up)("q-btn"),T=(0,a.up)("q-form"),L=(0,a.up)("q-card-section"),j=(0,a.up)("q-card"),F=(0,a.up)("q-dialog"),H=(0,a.up)("q-inner-loading"),M=(0,a.up)("q-td"),O=(0,a.up)("q-item-label"),G=(0,a.up)("q-item-section"),K=(0,a.up)("q-chip"),Y=(0,a.up)("q-item"),J=(0,a.up)("q-list"),X=(0,a.up)("q-table"),ee=(0,a.up)("q-card-actions"),te=(0,a.up)("methods"),re=(0,a.up)("desactivate-crud"),ae=(0,a.up)("q-page"),oe=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(ae,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{modelValue:z.create,"onUpdate:modelValue":t[15]||(t[15]=e=>z.create=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(T,{onSubmit:I.createData,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",s,[(0,a.Wm)(R,{outlined:"",modelValue:q.form.nb_receptor,"onUpdate:modelValue":[t[0]||(t[0]=e=>q.form.nb_receptor=e),t[1]||(t[1]=e=>q.form.nb_receptor=q.form.nb_receptor.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[I.reglasNotNull50]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",i,[(0,a.Wm)(Q,{outlined:"",modelValue:q.form.flag_activo,"onUpdate:modelValue":t[2]||(t[2]=e=>q.form.flag_activo=e),label:"Estatus",rules:[I.reglasSelect],hint:"",options:q.estatus,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"block"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",d,[(0,a.Wm)(R,{outlined:"",modelValue:q.form.dir_receptor,"onUpdate:modelValue":[t[3]||(t[3]=e=>q.form.dir_receptor=e),t[4]||(t[4]=e=>q.form.dir_receptor=q.form.dir_receptor.toUpperCase())],label:"Direccion",rules:[I.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",n,[(0,a.Wm)(R,{outlined:"",modelValue:q.form.tlf_receptor,"onUpdate:modelValue":[t[5]||(t[5]=e=>q.form.tlf_receptor=e),t[6]||(t[6]=e=>q.form.tlf_receptor=q.form.tlf_receptor.toUpperCase())],label:"Teléfonos",rules:[I.reglasAllowNull50],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",c,[(0,a.Wm)(R,{outlined:"",modelValue:q.form.cel_receptor,"onUpdate:modelValue":[t[7]||(t[7]=e=>q.form.cel_receptor=e),t[8]||(t[8]=e=>q.form.cel_receptor=q.form.cel_receptor.toUpperCase())],label:"Celular",rules:[I.reglasAllowNull50],hint:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"phone_iphone"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",m,[(0,a.Wm)(R,{outlined:"",modelValue:q.form.cedula_receptor,"onUpdate:modelValue":[t[9]||(t[9]=e=>q.form.cedula_receptor=e),t[10]||(t[10]=e=>q.form.cedula_receptor=q.form.cedula_receptor.toUpperCase())],label:"Cedula",rules:[I.reglasAllowNull20],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"contacts"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",p,[(0,a.Wm)(R,{outlined:"",modelValue:q.form.placa,"onUpdate:modelValue":[t[11]||(t[11]=e=>q.form.placa=e),t[12]||(t[12]=e=>q.form.placa=q.form.placa.toUpperCase())],label:"Placa",rules:[I.reglasAllowNull10],hint:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"money"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",u,[(0,a.Wm)(R,{outlined:"",modelValue:q.form.vehiculo,"onUpdate:modelValue":[t[13]||(t[13]=e=>q.form.vehiculo=e),t[14]||(t[14]=e=>q.form.vehiculo=q.form.vehiculo.toUpperCase())],label:"Descripcion de Vehiculo",rules:[I.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"directions_car"})])),_:1},8,["modelValue","rules"])])]),(0,a._)("div",g,[(0,a.Wm)(P,{label:"Agregar Receptor",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(P,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[oe]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(F,{modelValue:z.edit,"onUpdate:modelValue":t[31]||(t[31]=e=>z.edit=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(T,{onSubmit:I.putData},{default:(0,a.w5)((()=>[(0,a._)("div",f,[(0,a._)("div",h,[(0,a.Wm)(R,{outlined:"",modelValue:q.formEdit.nb_receptor,"onUpdate:modelValue":[t[16]||(t[16]=e=>q.formEdit.nb_receptor=e),t[17]||(t[17]=e=>q.formEdit.nb_receptor=q.formEdit.nb_receptor.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[I.reglasNotNull50]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",_,[(0,a.Wm)(Q,{outlined:"",modelValue:q.formEdit.flag_activo,"onUpdate:modelValue":t[18]||(t[18]=e=>q.formEdit.flag_activo=e),label:"Estatus","input-class":"input",rules:[I.reglasSelect],hint:"",options:q.estatus,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"block"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",b,[(0,a.Wm)(R,{outlined:"",modelValue:q.formEdit.dir_receptor,"onUpdate:modelValue":[t[19]||(t[19]=e=>q.formEdit.dir_receptor=e),t[20]||(t[20]=e=>q.formEdit.dir_receptor=q.formEdit.dir_receptor.toUpperCase())],label:"Direccion",rules:[I.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",v,[(0,a.Wm)(R,{outlined:"",modelValue:q.formEdit.tlf_receptor,"onUpdate:modelValue":[t[21]||(t[21]=e=>q.formEdit.tlf_receptor=e),t[22]||(t[22]=e=>q.formEdit.tlf_receptor=q.formEdit.tlf_receptor.toUpperCase())],label:"Teléfonos",rules:[I.reglasAllowNull50],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",w,[(0,a.Wm)(R,{outlined:"",modelValue:q.formEdit.cel_receptor,"onUpdate:modelValue":[t[23]||(t[23]=e=>q.formEdit.cel_receptor=e),t[24]||(t[24]=e=>q.formEdit.cel_receptor=q.formEdit.cel_receptor.toUpperCase())],label:"Celular",rules:[I.reglasAllowNull50],hint:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"phone_iphone"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",E,[(0,a.Wm)(R,{outlined:"",modelValue:q.formEdit.cedula_receptor,"onUpdate:modelValue":[t[25]||(t[25]=e=>q.formEdit.cedula_receptor=e),t[26]||(t[26]=e=>q.formEdit.cedula_receptor=q.formEdit.cedula_receptor.toUpperCase())],label:"Cedula",rules:[I.reglasAllowNull20],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"contacts"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",C,[(0,a.Wm)(R,{outlined:"",modelValue:q.formEdit.placa,"onUpdate:modelValue":[t[27]||(t[27]=e=>q.formEdit.placa=e),t[28]||(t[28]=e=>q.formEdit.placa=q.formEdit.placa.toUpperCase())],label:"Placa",rules:[I.reglasAllowNull10],hint:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"money"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",D,[(0,a.Wm)(R,{outlined:"",modelValue:q.formEdit.vehiculo,"onUpdate:modelValue":[t[29]||(t[29]=e=>q.formEdit.vehiculo=e),t[30]||(t[30]=e=>q.formEdit.vehiculo=q.formEdit.vehiculo.toUpperCase())],label:"Descripcion de Vehiculo",rules:[I.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"directions_car"})])),_:1},8,["modelValue","rules"])])]),(0,a._)("div",y,[(0,a.Wm)(P,{label:"Editar Receptor",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(P,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[oe]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",S,[(0,a._)("div",V,[(0,a._)("div",W,[x,(0,a._)("div",N,[(0,a.Wm)(R,{modelValue:z.filter,"onUpdate:modelValue":t[32]||(t[32]=e=>z.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(B,{name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",k,[(0,a.Wm)(P,{label:"Insertar Receptor",rounded:"",color:"primary",onClick:t[33]||(t[33]=e=>z.create=!0),onClickCapture:t[34]||(t[34]=e=>I.resetForm()),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,a._)("div",A,[(0,a._)("div",Z,[(0,a._)("div",U,[(0,a.Wm)(X,{rows:q.datos,"row-key":"id",columns:q.columns,"binary-state-sort":"",loading:z.loading,separator:z.separator,filter:z.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:z.pagination,"onUpdate:pagination":t[37]||(t[37]=e=>z.pagination=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(H,{showing:"",color:"primary"})])),"body-cell-action":(0,a.w5)((e=>[(0,a.Wm)(M,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{I.getData(`/receptores/${e.row.id}`,"setDataEdit","formEdit"),z.edit=!0}},null,8,["disabled","onClick"]),(0,a.Wm)(P,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>q.selected=e.row.id,onClickCapture:t[35]||(t[35]=e=>z.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(j,{class:(0,o.C_)(e.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(J,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(r=>((0,a.wg)(),(0,a.j4)(Y,{key:r.name},{default:(0,a.w5)((()=>[(0,a.Wm)(G,null,{default:(0,a.w5)((()=>[(0,a.Wm)(O,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(r.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(G,{side:""},{default:(0,a.w5)((()=>["status"===r.name?((0,a.wg)(),(0,a.j4)(K,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(r.value),1)])),_:2},1032,["color"])):"action"===r.name?((0,a.wg)(),(0,a.j4)(P,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{I.getData(`/receptores/${e.row.id}`,"setDataEdit","formEdit"),z.edit=!0}},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"status"===r.name?((0,a.wg)(),(0,a.j4)(K,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(r.value),1)])),_:2},1032,["color"])):"action"===r.name?((0,a.wg)(),(0,a.j4)(P,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>q.selected=e.row.id,onClickCapture:t[36]||(t[36]=e=>z.deletePopup=!0)},null,8,["disabled","onClick"])):((0,a.wg)(),(0,a.j4)(O,{key:4,caption:"",class:(0,o.C_)(r.classes?r.classes:"")},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(r.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","filter","grid","pagination"])])])])])]),(0,a.Wm)(F,{modelValue:z.deletePopup,"onUpdate:modelValue":t[39]||(t[39]=e=>z.deletePopup=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{style:{width:"700px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[$])),_:1}),(0,a.Wm)(ee,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(P,{flat:"",label:"Cancelar",color:"primary"},null,512),[[oe]]),(0,a.wy)((0,a.Wm)(P,{flat:"",label:"Aceptar",color:"primary",onClick:t[38]||(t[38]=e=>I.deleteData(q.selected))},null,512),[[oe]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(te,{ref:"methods",onGetDataReceptores:t[40]||(t[40]=e=>I.getDataReceptores("/receptores","setData","datos")),onSetData:I.setData,onResetLoading:I.resetLoading,onSetDataEdit:I.setDataEdit},null,8,["onSetData","onResetLoading","onSetDataEdit"]),(0,a.Wm)(re,{ref:"desactivateCrud",onDesactivarCrud:I.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var q=r(61959),I=(r(5474),r(48825)),B=r(80589),R=r(55325),Q=r(38015);const P={components:{"desactivate-crud":Q.Z,methods:R.Z},name:"Receptores",data(){return{columns:[{name:"nb_receptor",label:"Nombre",field:"nb_receptor",align:"left",sortable:!0,required:!0},{name:"cedula_receptor",label:"Cedula de Receptor",field:"cedula_receptor",align:"left",sortable:!0,required:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nb_receptor:"",dir_receptor:"",tlf_receptor:"",cel_receptor:"",cedula_receptor:"",placa:"",vehiculo:"",flag_activo:[]},estatus:[{label:"ACTIVO",value:"A"},{label:"INACTIVO",value:"I"}],datos:[],formEdit:{id:"",nb_receptor:"",dir_receptor:"",tlf_receptor:"",cel_receptor:"",cedula_receptor:"",placa:"",vehiculo:"",flag_activo:[]},selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,I.Z)(),(0,q.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,q.iH)({rowsPerPage:10}),separator:(0,q.iH)("vertical"),create:(0,q.iH)(!1),edit:(0,q.iH)(!1),loading:(0,q.iH)(!1),medium:(0,q.iH)(!1),deletePopup:(0,q.iH)(!1),filter:(0,q.iH)("")}},mounted(){this.getDataReceptores("/receptores","setData","datos"),this.$refs.desactivateCrud.desactivarCrud("c_receptores","r_receptores","u_receptores","d_receptores","desactivarCrud")},methods:{resetLoading(){this.loading=!1},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasNotNull100(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>99)return"Deben ser Maximo 100 caracteres"}},reglasNotNull20(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>19)return"Deben ser Maximo 19 caracteres"}},reglasNotNull200(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>199)return"Deben ser Maximo 200 caracteres"}},reglasNotNull50(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>49)return"Deben ser Maximo 50 caracteres"}},reglasAllowNull20(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>19)return"Deben ser Maximo 20 caracteres"}},reglasAllowNull100(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>99)return"Deben ser Maximo 100 caracteres"}},reglasAllowNull10(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>9)return"Deben ser Maximo 10 caracteres"}},reglasAllowNull50(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>49)return"Deben ser Maximo 50 caracteres"}},desactivarCrud(e,t,r,a){1==t?(1==e&&(this.disabledCreate=!1),1==r&&(this.disabledDelete=!1),1==a&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,t,r){this.$refs.methods.getData(e,t,r,{headers:{Authorization:`Bearer ${B.Z.getItem("token")}`}})},getDataReceptores(e,t,r){this.$refs.methods.getData(e,t,r,{headers:{Authorization:`Bearer ${B.Z.getItem("token")}`}}),this.loading=!0},setData(e,t){this[t]=e,this.loading=!1},setDataEdit(e,t){this.formEdit.id=e.id,this.formEdit.nb_receptor=e.nb_receptor,this.formEdit.dir_receptor=e.dir_receptor,this.formEdit.tlf_receptor=e.tlf_receptor,this.formEdit.cel_receptor=e.cel_receptor,this.formEdit.cedula_receptor=e.cedula_receptor,this.formEdit.placa=e.placa,this.formEdit.vehiculo=e.vehiculo,this.formEdit.flag_activo=e.activo_desc,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/receptores/${e}`,"getDataReceptores",{headers:{Authorization:`Bearer ${B.Z.getItem("token")}`}}),this.loading=!0},createData(){this.form.flag_activo=this.form.flag_activo.value,this.$refs.methods.createData("/receptores",this.form,"getDataReceptores",{headers:{Authorization:`Bearer ${B.Z.getItem("token")}`}}),this.resetForm(),this.loading=!0},putData(){this.formEdit.flag_activo=this.formEdit.flag_activo.value,this.$refs.methods.putData(`/receptores/${this.formEdit.id}`,this.formEdit,"getDataReceptores",{headers:{Authorization:`Bearer ${B.Z.getItem("token")}`}}),this.edit=!1,this.resetFormEdit(),this.loading=!0},resetForm(){this.form.nb_receptor="",this.form.dir_receptor="",this.form.tlf_receptor="",this.form.cel_receptor="",this.form.cedula_receptor="",this.form.cedula_receptor="",this.form.flag_activo="",this.create=!1},resetFormEdit(){this.formEdit.nb_receptor="",this.formEdit.dir_receptor="",this.formEdit.tlf_receptor="",this.formEdit.cel_receptor="",this.formEdit.cedula_receptor="",this.formEdit.flag_activo="",this.formEdit.placa="",this.edit=!1}}};var T=r(74260),L=r(24379),j=r(46778),F=r(10151),H=r(25589),M=r(68689),O=r(34842),G=r(24554),K=r(72448),Y=r(48240),J=r(17352),X=r(66941),ee=r(83884),te=r(27011),re=r(83414),ae=r(52035),oe=r(2350),le=r(67030),se=r(99367),ie=r(60677),de=r(7518),ne=r.n(de);const ce=(0,T.Z)(P,[["render",z]]),me=ce;ne()(P,"components",{QPage:L.Z,QDialog:j.Z,QCard:F.Z,QCardSection:H.Z,QForm:M.Z,QInput:O.Z,QIcon:G.Z,QSelect:K.Z,QBtn:Y.Z,QTable:J.Z,QInnerLoading:X.Z,QTd:ee.Z,QList:te.Z,QItem:re.Z,QItemSection:ae.Z,QItemLabel:oe.Z,QChip:le.Z,QCardActions:se.Z}),ne()(P,"directives",{ClosePopup:ie.Z})}}]);