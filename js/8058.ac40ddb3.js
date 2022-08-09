"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[8058],{8015:(e,a,o)=>{function t(e,a,o,t,r,i){return null}o.d(a,{Z:()=>n});var r=o(589),i=o(8825);const s={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${r.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,i.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,o,t,i){for(var s,l,d,n,m=r.Z.getItem("tokenTraducido"),c=0,p=m.usuario.roles.permisos.length;c<p;c++)if(m.usuario.roles.permisos[c].codigo===e&&(s=!0),m.usuario.roles.permisos[c].codigo===t&&(d=!0),m.usuario.roles.permisos[c].codigo===o&&(n=!0),m.usuario.roles.permisos[c].codigo===a&&(l=!0),c==m.usuario.roles.permisos.length.length-1)break;e=!0===s,t=!0===d,o=!0===n,a=!0===l,this.$emit(i,e,a,t,o)},desactivarOpciones(e){for(var a=r.Z.getItem("tokenTraducido"),o=0,t=this.permisos.length;o<t;o++){var i=0;for(t=a.usuario.roles.permisos.length;i<t;i++)if(a.usuario.roles.permisos[i].codigo==this.permisos[o].permisoName&&(this.permisos[o].permiso=!0),i==a.usuario.roles.permisos.length.length-1)break;if(o==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var l=o(4260);const d=(0,l.Z)(s,[["render",t]]),n=d},2635:(e,a,o)=>{function t(e,a,o,t,r,i){return null}o.d(a,{Z:()=>m});var r=o(589),i=o(5474),s=o(8825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,s.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,o,t){t.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,i.api.get(e,t).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,a,o,t){t.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,i.api.get(e,t).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,a,o){o.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,i.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,a,o,t){t.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,i.api.post(e,a,t).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,a,o,t){t.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,i.api.put(e,a,t).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var d=o(4260);const n=(0,d.Z)(l,[["render",t]]),m=n},8058:(e,a,o)=>{o.r(a),o.d(a,{default:()=>se});var t=o(3673),r=o(2323);const i={class:"row"},s={class:"col-md-6 col-xs-12"},l={class:"col-md-6 col-xs-12"},d={class:"col-md-3 col-xs-12",style:{"margin-bottom":"15px"}},n={class:"col-md-9 col-xs-12"},m={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},p={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},u={class:"row"},g={class:"col-md-6 col-xs-12"},h={class:"col-md-6 col-xs-12"},f={class:"col-md-3 col-xs-12",style:{"margin-bottom":"15px"}},b={class:"col-md-9 col-xs-12"},_={class:"col-md-6 col-xs-12"},w={class:"col-md-6 col-xs-12"},E={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},C={class:"row q-pa-sm justify-center"},v={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},y={class:"row"},S=(0,t._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,t._)("h4",null,[(0,t._)("strong",null,"MANTENIMIENTO - EMPLEADOS")])],-1),D={class:"col-md-5 col-sm-7 col-xs-6",style:{"align-self":"center","margin-right":"20px"}},x={class:"col-md-2 col-sm-4 col-xs-5",style:{"text-align":"center","align-self":"center"}},N={class:"q-pa-md"},W={class:"q-gutter-y-md"},V={bordered:"",flat:"",class:"row"},k=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function A(e,a,o,A,Z,q){const U=(0,t.up)("q-icon"),j=(0,t.up)("q-input"),z=(0,t.up)("q-checkbox"),P=(0,t.up)("q-btn"),$=(0,t.up)("q-form"),I=(0,t.up)("q-card-section"),Q=(0,t.up)("q-card"),H=(0,t.up)("q-dialog"),R=(0,t.up)("q-inner-loading"),L=(0,t.up)("q-td"),T=(0,t.up)("q-item-label"),B=(0,t.up)("q-item-section"),F=(0,t.up)("q-chip"),M=(0,t.up)("q-item"),O=(0,t.up)("q-list"),G=(0,t.up)("q-table"),K=(0,t.up)("q-card-actions"),Y=(0,t.up)("methods"),J=(0,t.up)("desactivate-crud"),X=(0,t.up)("q-page"),ee=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(X,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{modelValue:A.create,"onUpdate:modelValue":a[8]||(a[8]=e=>A.create=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(I,null,{default:(0,t.w5)((()=>[(0,t.Wm)($,{onSubmit:q.createData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",i,[(0,t._)("div",s,[(0,t.Wm)(j,{outlined:"",modelValue:Z.form.nombre,"onUpdate:modelValue":[a[0]||(a[0]=e=>Z.form.nombre=e),a[1]||(a[1]=e=>Z.form.nombre=Z.form.nombre.toUpperCase())],label:"Nombre de Empleado",rules:[q.reglasNotNull30],hint:"",class:"pcform","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(U,{name:"percent"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",l,[(0,t.Wm)(j,{outlined:"",modelValue:Z.form.rif_empleado,"onUpdate:modelValue":a[2]||(a[2]=e=>Z.form.rif_empleado=e),label:"RIF de Empleado",rules:[q.reglasNotNull10],hint:"","lazy-rules":"",mask:"##########"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(U,{name:"fact_check"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",d,[(0,t.Wm)(z,{size:"lg",modelValue:Z.form.aplica_retencion,"onUpdate:modelValue":a[3]||(a[3]=e=>Z.form.aplica_retencion=e),"true-value":"1","false-value":"0",style:{"font-size":"13px"},label:"¿APLICA RETENCIÓN?"},null,8,["modelValue"])]),(0,t._)("div",n,[(0,t.Wm)(j,{outlined:"",modelValue:Z.form.porcentaje_retencion,"onUpdate:modelValue":a[4]||(a[4]=e=>Z.form.porcentaje_retencion=e),label:"Porcentaje Retención",rules:[q.reglasNotNullPercent],hint:"",step:".01","lazy-rules":"",type:"number"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(U,{name:"percent"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",m,[(0,t.Wm)(j,{outlined:"",modelValue:Z.form.periodo,"onUpdate:modelValue":[a[5]||(a[5]=e=>Z.form.periodo=e),a[6]||(a[6]=e=>Z.form.periodo=Z.form.periodo.toUpperCase())],label:"Período",rules:[q.reglasNotNull6],hint:"",class:"pcform","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(U,{name:"calendar_today"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",c,[(0,t.Wm)(j,{outlined:"",modelValue:Z.form.sueldo,"onUpdate:modelValue":a[7]||(a[7]=e=>Z.form.sueldo=e),label:"Sueldo",rules:[q.reglasAllowNullSueldo],hint:"",step:".01","lazy-rules":"",type:"number"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(U,{name:"paid"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",p,[(0,t.Wm)(P,{label:"Agregar Empleado",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(P,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[ee]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(H,{modelValue:A.edit,"onUpdate:modelValue":a[17]||(a[17]=e=>A.edit=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(I,null,{default:(0,t.w5)((()=>[(0,t.Wm)($,{onSubmit:q.putData},{default:(0,t.w5)((()=>[(0,t._)("div",u,[(0,t._)("div",g,[(0,t.Wm)(j,{outlined:"",modelValue:Z.formEdit.nombre,"onUpdate:modelValue":[a[9]||(a[9]=e=>Z.formEdit.nombre=e),a[10]||(a[10]=e=>Z.formEdit.nombre=Z.formEdit.nombre.toUpperCase())],label:"Nombre de Empleado",rules:[q.reglasNotNull30],hint:"",class:"pcform","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(U,{name:"percent"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",h,[(0,t.Wm)(j,{outlined:"",modelValue:Z.formEdit.rif_empleado,"onUpdate:modelValue":a[11]||(a[11]=e=>Z.formEdit.rif_empleado=e),label:"RIF de Empleado",rules:[q.reglasNotNull10],hint:"","lazy-rules":"",mask:"##########"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(U,{name:"fact_check"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",f,[(0,t.Wm)(z,{size:"lg",modelValue:Z.formEdit.aplica_retencion,"onUpdate:modelValue":a[12]||(a[12]=e=>Z.formEdit.aplica_retencion=e),"true-value":"1","false-value":"0",style:{"font-size":"13px"},label:"¿APLICA RETENCIÓN?"},null,8,["modelValue"])]),(0,t._)("div",b,[(0,t.Wm)(j,{outlined:"",modelValue:Z.formEdit.porcentaje_retencion,"onUpdate:modelValue":a[13]||(a[13]=e=>Z.formEdit.porcentaje_retencion=e),label:"Porcentaje Retención",rules:[q.reglasNotNullPercent],hint:"",step:".01","lazy-rules":"",type:"number"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(U,{name:"percent"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",_,[(0,t.Wm)(j,{outlined:"",modelValue:Z.formEdit.periodo,"onUpdate:modelValue":[a[14]||(a[14]=e=>Z.formEdit.periodo=e),a[15]||(a[15]=e=>Z.formEdit.periodo=Z.formEdit.periodo.toUpperCase())],label:"Período",rules:[q.reglasNotNull6],hint:"",class:"pcform","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(U,{name:"calendar_today"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",w,[(0,t.Wm)(j,{outlined:"",modelValue:Z.formEdit.sueldo,"onUpdate:modelValue":a[16]||(a[16]=e=>Z.formEdit.sueldo=e),label:"Sueldo",rules:[q.reglasAllowNullSueldo],hint:"",step:".01","lazy-rules":"",type:"number"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(U,{name:"paid"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",E,[(0,t.Wm)(P,{label:"Editar Empleado",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(P,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[ee]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",C,[(0,t._)("div",v,[(0,t._)("div",y,[S,(0,t._)("div",D,[(0,t.Wm)(j,{modelValue:A.filter,"onUpdate:modelValue":a[18]||(a[18]=e=>A.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(U,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",x,[(0,t.Wm)(P,{label:"Insertar Empleado",rounded:"",color:"primary",onClick:a[19]||(a[19]=e=>A.create=!0),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,t._)("div",N,[(0,t._)("div",W,[(0,t._)("div",V,[(0,t.Wm)(G,{rows:Z.datos,"row-key":"id",loading:A.loading,columns:Z.columns,separator:A.separator,class:"my-sticky-column-table",filter:A.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:A.pagination,"onUpdate:pagination":a[22]||(a[22]=e=>A.pagination=e)},{loading:(0,t.w5)((()=>[(0,t.Wm)(R,{showing:"",color:"primary"})])),"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(L,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{q.getData(`/empleados/${e.row.id}`,"setDataEdit","formEdit"),A.edit=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(P,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>Z.selected=e.row.id,onClickCapture:a[20]||(a[20]=e=>A.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,r.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(Q,{class:(0,r.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(o=>((0,t.wg)(),(0,t.j4)(M,{key:o.name},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(B,{side:""},{default:(0,t.w5)((()=>["status"===o.name?((0,t.wg)(),(0,t.j4)(F,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,t.wg)(),(0,t.j4)(P,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{q.getData(`/empleados/${e.row.id}`,"setDataEdit","formEdit"),A.edit=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"status"===o.name?((0,t.wg)(),(0,t.j4)(F,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,t.wg)(),(0,t.j4)(P,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>Z.selected=e.row.id,onClickCapture:a[21]||(a[21]=e=>A.deletePopup=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(T,{key:4,caption:"",class:(0,r.C_)(o.classes?o.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])])])])]),(0,t.Wm)(H,{modelValue:A.deletePopup,"onUpdate:modelValue":a[24]||(a[24]=e=>A.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(I,null,{default:(0,t.w5)((()=>[k])),_:1}),(0,t.Wm)(K,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(P,{flat:"",label:"Cancelar",color:"primary"},null,512),[[ee]]),(0,t.wy)((0,t.Wm)(P,{flat:"",label:"Aceptar",color:"primary",onClick:a[23]||(a[23]=e=>q.deleteData(Z.selected))},null,512),[[ee]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(Y,{ref:"methods",onGetData:a[25]||(a[25]=e=>q.getData("/empleados","setData","datos")),onSetData:q.setData,onSetDataEdit:q.setData,onResetLoading:q.resetLoading},null,8,["onSetData","onSetDataEdit","onResetLoading"]),(0,t.Wm)(J,{ref:"desactivateCrud",onDesactivarCrud:q.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var Z=o(1959),q=(o(5474),o(8825)),U=(o(589),o(2635)),j=o(8015);const z={components:{"desactivate-crud":j.Z,methods:U.Z},name:"Empleados",data(){return{columns:[{name:"nombre",label:"Nombre del Empleado",field:"nombre",align:"left",sortable:!0},{name:"sueldo",label:"Sueldo",field:"sueldo",align:"left",sortable:!0},{name:"porcentaje_retencion",label:"Porcentaje Retención",field:"porcentaje_retencion",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{rif_empleado:"",nombre:"",aplica_retencion:"0",porcentaje_retencion:"",periodo:"",sueldo:""},datos:[],formEdit:{id:"",rif_empleado:"",nombre:"",aplica_retencion:"0",porcentaje_retencion:"",periodo:"",sueldo:""},selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:""}}}},setup(){(0,q.Z)(),(0,Z.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,Z.iH)({rowsPerPage:10}),separator:(0,Z.iH)("vertical"),create:(0,Z.iH)(!1),edit:(0,Z.iH)(!1),loading:(0,Z.iH)(!1),medium:(0,Z.iH)(!1),deletePopup:(0,Z.iH)(!1),filter:(0,Z.iH)("")}},mounted(){this.getData("/empleados","setData","datos"),this.$refs.desactivateCrud.desactivarCrud("c_empleados","r_empleados","u_empleados","d_empleados","desactivarCrud")},methods:{resetLoading(){this.loading=!1},reglasNotNull10(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>10)return"Deben ser Maximo 10 caracteres"}},reglasNotNull30(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>30)return"Deben ser Maximo 30 caracteres"}},reglasNotNullPercent(e){return null===e||""===e?"Debes Escribir Algo":null!==e!==""&&e>999.99?"Deben ser Maximo 5 caracteres":void 0},reglasNotNull6(e){return null===e||""===e?"Debes Escribir Algo":null!==e!==""&&e.length>6?"Deben ser Maximo 6 caracteres":void 0},reglasAllowNullSueldo(e){if(null!==e&&e.length>0&&e>99999999.99)return"Deben ser Maximo 10 caracteres"},desactivarCrud(e,a,o,t){1==a?(1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==t&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,a,o){this.$refs.methods.getData(e,a,o,this.axiosConfig),this.loading=!0},setData(e,a){this[a]=e,this.loading=!1},setDataEdit(e,a){this.formEdit.id=e.id,this.formEdit.rif_empleado=e.rif_empleado,this.formEdit.aplica_retencion=e.aplica_retencion,this.formEdit.porcentaje_retencion=e.porcentaje_retencion,this.formEdit.porcentaje_retencion=e.porcentaje_retencion,this.formEdit.sueldo=e.sueldo},deleteData(e){this.$refs.methods.deleteData(`/empleados/${e}`,"getData",this.axiosConfig),this.loading=!0},createData(){this.$refs.methods.createData("/empleados",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.$refs.methods.putData(`/empleados/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.resetFormEdit(),this.loading=!0},resetForm(){this.form.rif_empleado="",this.form.nombre="",this.form.aplica_retencion="0",this.form.porcentaje_retencion="",this.form.periodo="",this.form.sueldo="",this.create=!1},resetFormEdit(){this.formEdit.rif_empleado="",this.formEdit.nombre="",this.formEdit.aplica_retencion="0",this.formEdit.porcentaje_retencion="",this.formEdit.periodo="",this.formEdit.sueldo="",this.edit=!1}}};var P=o(4260),$=o(4379),I=o(6778),Q=o(151),H=o(5589),R=o(5269),L=o(4842),T=o(4554),B=o(5735),F=o(8240),M=o(7352),O=o(6941),G=o(3884),K=o(7011),Y=o(3414),J=o(2035),X=o(2350),ee=o(7030),ae=o(9367),oe=o(677),te=o(7518),re=o.n(te);const ie=(0,P.Z)(z,[["render",A]]),se=ie;re()(z,"components",{QPage:$.Z,QDialog:I.Z,QCard:Q.Z,QCardSection:H.Z,QForm:R.Z,QInput:L.Z,QIcon:T.Z,QCheckbox:B.Z,QBtn:F.Z,QTable:M.Z,QInnerLoading:O.Z,QTd:G.Z,QList:K.Z,QItem:Y.Z,QItemSection:J.Z,QItemLabel:X.Z,QChip:ee.Z,QCardActions:ae.Z}),re()(z,"directives",{ClosePopup:oe.Z})}}]);