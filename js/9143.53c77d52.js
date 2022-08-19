"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[9143],{8015:(e,a,o)=>{function t(e,a,o,t,s,i){return null}o.d(a,{Z:()=>d});var s=o(589),i=o(8825);const l={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${s.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,i.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,o,t,i){for(var l,r,n,d,c=s.Z.getItem("tokenTraducido"),m=0,p=c.usuario.roles.permisos.length;m<p;m++)if(c.usuario.roles.permisos[m].codigo===e&&(l=!0),c.usuario.roles.permisos[m].codigo===t&&(n=!0),c.usuario.roles.permisos[m].codigo===o&&(d=!0),c.usuario.roles.permisos[m].codigo===a&&(r=!0),m==c.usuario.roles.permisos.length.length-1)break;e=!0===l,t=!0===n,o=!0===d,a=!0===r,this.$emit(i,e,a,t,o)},desactivarOpciones(e){for(var a=s.Z.getItem("tokenTraducido"),o=0,t=this.permisos.length;o<t;o++){var i=0;for(t=a.usuario.roles.permisos.length;i<t;i++)if(a.usuario.roles.permisos[i].codigo==this.permisos[o].permisoName&&(this.permisos[o].permiso=!0),i==a.usuario.roles.permisos.length.length-1)break;if(o==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var r=o(4260);const n=(0,r.Z)(l,[["render",t]]),d=n},5494:(e,a,o)=>{function t(e,a,o,t,s,i){return null}o.d(a,{Z:()=>c});var s=o(589),i=o(5474),l=o(8825);const r={name:"userLogout",data:function(){return{}},setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,o,t){t.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.get(e,t).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,a,o,t){t.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.get(e,t).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,a,o){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,o,t){t.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.post(e,a,t).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,o,t){t.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.post(e,a,t).then((e=>{(e.status=200)&&this.$emit(o,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))},putData:function(e,a,o,t){t.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.put(e,a,t).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))}}};var n=o(4260);const d=(0,n.Z)(r,[["render",t]]),c=d},9143:(e,a,o)=>{o.r(a),o.d(a,{default:()=>ie});var t=o(3673),s=o(2323);const i={class:"row"},l={class:"col-md-6 col-xs-12"},r={class:"col-md-6 col-xs-12"},n={class:"col-md-6 col-xs-12"},d={class:"col-md-6 col-xs-12"},c={class:"col-md-5 col-xs-12"},m={class:"col-md-7 col-xs-12"},p={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},u={class:"row"},g={class:"col-md-5 col-xs-12"},b={class:"col-md-7 col-xs-12"},f={class:"col-md-6 col-xs-12"},_={class:"col-md-6 col-xs-12"},h={class:"col-md-5 col-xs-12"},w={class:"col-md-7 col-xs-12"},C={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},v={class:"row q-pa-sm justify-center"},x={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},y={class:"row"},S=(0,t._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,t._)("h4",null,[(0,t._)("strong",null,"MANTENIMIENTO - BANCOS")])],-1),D={class:"col-md-5 col-sm-9 col-xs-12",style:{"align-self":"center","margin-right":"20px"}},W={class:"col-md-2 col-sm-2 col-xs-12",style:{"text-align":"center","align-self":"center"}},E={class:"q-pa-md"},V={class:"q-gutter-y-md"},k={bordered:"",flat:"",class:"row"},Z=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function q(e,a,o,q,N,U){const $=(0,t.up)("q-icon"),I=(0,t.up)("q-input"),z=(0,t.up)("q-btn"),A=(0,t.up)("q-form"),B=(0,t.up)("q-card-section"),Q=(0,t.up)("q-card"),P=(0,t.up)("q-dialog"),L=(0,t.up)("q-inner-loading"),T=(0,t.up)("q-td"),j=(0,t.up)("q-item-label"),F=(0,t.up)("q-item-section"),H=(0,t.up)("q-chip"),R=(0,t.up)("q-item"),O=(0,t.up)("q-list"),G=(0,t.up)("q-table"),M=(0,t.up)("q-card-actions"),K=(0,t.up)("methods"),Y=(0,t.up)("desactive-crud"),J=(0,t.up)("q-page"),X=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(J,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{modelValue:q.create,"onUpdate:modelValue":a[9]||(a[9]=e=>q.create=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"70vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t.Wm)(A,{onSubmit:U.createData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",i,[(0,t._)("div",l,[(0,t.Wm)(I,{outlined:"",modelValue:N.form.nb_banco,"onUpdate:modelValue":[a[0]||(a[0]=e=>N.form.nb_banco=e),a[1]||(a[1]=e=>N.form.nb_banco=N.form.nb_banco.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[U.reglaInputBancos]},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",r,[(0,t.Wm)(I,{outlined:"",modelValue:N.form.direccion_banco,"onUpdate:modelValue":[a[2]||(a[2]=e=>N.form.direccion_banco=e),a[3]||(a[3]=e=>N.form.direccion_banco=N.form.direccion_banco.toUpperCase())],label:"Direccion",hint:"",rules:[U.reglaInput],"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"location_on"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",n,[(0,t.Wm)(I,{outlined:"",modelValue:N.form.fax_banco,"onUpdate:modelValue":a[4]||(a[4]=e=>N.form.fax_banco=e),label:"Fax",class:"pcform",rules:[U.reglaInput],hint:"","lazy-rules":"",mask:"#### - ##########"},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",d,[(0,t.Wm)(I,{outlined:"",modelValue:N.form.tlf_banco,"onUpdate:modelValue":a[5]||(a[5]=e=>N.form.tlf_banco=e),label:"Teléfono",rules:[U.reglaInput],hint:"","lazy-rules":"",mask:"### - ### - ##########"},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",c,[(0,t.Wm)(I,{outlined:"",modelValue:N.form.cod_postal,"onUpdate:modelValue":a[6]||(a[6]=e=>N.form.cod_postal=e),label:"Código Postal",hint:"",class:"pcform","lazy-rules":"",mask:"##########"},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"dialpad"})])),_:1},8,["modelValue"])]),(0,t._)("div",m,[(0,t.Wm)(I,{outlined:"",modelValue:N.form.email_banco,"onUpdate:modelValue":[a[7]||(a[7]=e=>N.form.email_banco=e),a[8]||(a[8]=e=>N.form.email_banco=N.form.email_banco.toUpperCase())],label:"Correo Electrónico",hint:"",type:"email","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"email"})])),_:1},8,["modelValue"])])]),(0,t._)("div",p,[(0,t.Wm)(z,{label:"Agregar Banco",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[X]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(P,{modelValue:q.edit,"onUpdate:modelValue":a[19]||(a[19]=e=>q.edit=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"70vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t.Wm)(A,{onSubmit:U.putData},{default:(0,t.w5)((()=>[(0,t._)("div",u,[(0,t._)("div",g,[(0,t.Wm)(I,{outlined:"",modelValue:N.formEdit.nb_banco,"onUpdate:modelValue":[a[10]||(a[10]=e=>N.formEdit.nb_banco=e),a[11]||(a[11]=e=>N.formEdit.nb_banco=N.formEdit.nb_banco.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[U.reglaInputBancos]},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",b,[(0,t.Wm)(I,{outlined:"",modelValue:N.formEdit.direccion_banco,"onUpdate:modelValue":[a[12]||(a[12]=e=>N.formEdit.direccion_banco=e),a[13]||(a[13]=e=>N.formEdit.direccion_banco=N.formEdit.direccion_banco.toUpperCase())],label:"Direccion",hint:"",rules:[U.reglaInput],"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"location_on"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",f,[(0,t.Wm)(I,{outlined:"",modelValue:N.formEdit.fax_banco,"onUpdate:modelValue":a[14]||(a[14]=e=>N.formEdit.fax_banco=e),label:"Fax",hint:"",rules:[U.reglaInput],class:"pcform","lazy-rules":"",mask:"#### - #######################"},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",_,[(0,t.Wm)(I,{outlined:"",modelValue:N.formEdit.tlf_banco,"onUpdate:modelValue":a[15]||(a[15]=e=>N.formEdit.tlf_banco=e),label:"Teléfono",rules:[U.reglaInput],hint:"","lazy-rules":"",mask:"### - ### - ##########"},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",h,[(0,t.Wm)(I,{outlined:"",modelValue:N.formEdit.cod_postal,"onUpdate:modelValue":a[16]||(a[16]=e=>N.formEdit.cod_postal=e),label:"Código Postal",hint:"",class:"pcform","lazy-rules":"",mask:"##########"},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"dialpad"})])),_:1},8,["modelValue"])]),(0,t._)("div",w,[(0,t.Wm)(I,{outlined:"",modelValue:N.formEdit.email_banco,"onUpdate:modelValue":[a[17]||(a[17]=e=>N.formEdit.email_banco=e),a[18]||(a[18]=e=>N.formEdit.email_banco=N.formEdit.email_banco.toUpperCase())],label:"Correo Electrónico",hint:"",type:"email","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"email"})])),_:1},8,["modelValue"])])]),(0,t._)("div",C,[(0,t.Wm)(z,{label:"Editar Banco",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[X]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",v,[(0,t._)("div",x,[(0,t._)("div",y,[S,(0,t._)("div",D,[(0,t.Wm)(I,{modelValue:q.filter,"onUpdate:modelValue":a[20]||(a[20]=e=>q.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)($,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",W,[(0,t.Wm)(z,{label:"Insertar Banco",rounded:"",color:"primary",onClick:a[21]||(a[21]=e=>q.create=!0),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,t._)("div",E,[(0,t._)("div",V,[(0,t._)("div",k,[(0,t.Wm)(G,{rows:N.datos,loading:q.loading,"row-key":"id",columns:N.columns,separator:q.separator,class:"my-sticky-column-table",filter:q.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:q.pagination,"onUpdate:pagination":a[24]||(a[24]=e=>q.pagination=e)},{loading:(0,t.w5)((()=>[(0,t.Wm)(L,{showing:"",color:"primary"})])),"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(T,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{U.getData(`/bancos/${e.row.id}`,"setData","formEdit"),q.edit=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(z,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>N.selected=e.row.id,onClickCapture:a[22]||(a[22]=e=>q.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,s.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(Q,{class:(0,s.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(o=>((0,t.wg)(),(0,t.j4)(R,{key:o.name},{default:(0,t.w5)((()=>[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(F,{side:""},{default:(0,t.w5)((()=>["status"===o.name?((0,t.wg)(),(0,t.j4)(H,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,t.wg)(),(0,t.j4)(z,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{U.getData(`/bancos/${e.row.id}`,"setData","formEdit"),q.edit=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"status"===o.name?((0,t.wg)(),(0,t.j4)(H,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,t.wg)(),(0,t.j4)(z,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>N.selected=e.row.id,onClickCapture:a[23]||(a[23]=e=>q.deletePopup=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(j,{key:4,caption:"",class:(0,s.C_)(o.classes?o.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])])])])]),(0,t.Wm)(P,{modelValue:q.deletePopup,"onUpdate:modelValue":a[26]||(a[26]=e=>q.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[Z])),_:1}),(0,t.Wm)(M,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(z,{flat:"",label:"Cancelar",color:"primary"},null,512),[[X]]),(0,t.wy)((0,t.Wm)(z,{flat:"",label:"Aceptar",color:"primary",onClick:a[25]||(a[25]=e=>U.deleteData(N.selected))},null,512),[[X]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(K,{ref:"methods",onGetData:a[27]||(a[27]=e=>U.getData("/bancos","setData","datos")),onResetLoading:U.resetLoading,onSetData:U.setData,onSetDataEdit:U.setData},null,8,["onResetLoading","onSetData","onSetDataEdit"]),(0,t.Wm)(Y,{ref:"desactiveCrud",onDesactivarCrud:U.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var N=o(1959),U=o(8825),$=(o(589),o(5494)),I=o(8015);const z={components:{"desactive-crud":I.Z,methods:$.Z},name:"Bancos",data(){return{columns:[{name:"nb_banco",label:"Nombre",field:"nb_banco",align:"left",sortable:!0},{name:"tlf_banco",label:"Teléfono",field:"tlf_banco",align:"left",sortable:!0},{name:"fax_banco",label:"Fax",field:"fax_banco",align:"left",sortable:!0},{name:"cod_postal",label:"Código postal",field:"cod_postal",align:"left",sortable:!0},{name:"email_banco",label:"Correo electrónico",field:"email_banco",align:"left",type:"string"},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nb_banco:"",direccion_banco:"",tlf_banco:"",fax_banco:"",cod_postal:"",email_banco:""},datos:[],formEdit:{nb_banco:"",direccion_banco:"",tlf_banco:"",fax_banco:"",cod_postal:"",email_banco:""},selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:""}}}},setup(){const e=(0,U.Z)();(0,N.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,N.iH)({rowsPerPage:10}),separator:(0,N.iH)("vertical"),create:(0,N.iH)(!1),loading:(0,N.iH)(!1),edit:(0,N.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Banco agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Banco editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Banco eliminado exitosamente",color:"green"})},medium:(0,N.iH)(!1),deletePopup:(0,N.iH)(!1),filter:(0,N.iH)("")}},mounted(){this.getData("/bancos","setData","datos"),this.$refs.desactiveCrud.desactivarCrud("c_bancos","r_bancos","u_bancos","d_bancos","desactivarCrud")},methods:{resetLoading(){this.loading=!1},reglaInputBancos(e){return null===e||""===e?"Debes Escribir Algo":e.length>0&&e.length<3?"Deben ser minimo 3 caracteres":void 0},reglaInput(e){if(null!==e&&e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"},desactivarCrud(e,a,o,t){1==a?(1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==t&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,a,o){this.$refs.methods.getData(e,a,o,this.axiosConfig),this.loading=!0},setData(e,a){this[a]=e,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/bancos/${e}`,"getData",this.axiosConfig),this.loading=!0},createData(){this.$refs.methods.createData("/bancos",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.$refs.methods.putData(`/bancos/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.loading=!0},resetForm(){this.form.nb_banco=null,this.form.direccion_banco=null,this.form.tlf_banco=null,this.form.fax_banco=null,this.form.cod_postal=null,this.form.email_banco=null,this.create=!1}}};var A=o(4260),B=o(4379),Q=o(6778),P=o(151),L=o(5589),T=o(5269),j=o(4842),F=o(4554),H=o(8240),R=o(7352),O=o(6941),G=o(3884),M=o(7011),K=o(3414),Y=o(2035),J=o(2350),X=o(7030),ee=o(9367),ae=o(677),oe=o(7518),te=o.n(oe);const se=(0,A.Z)(z,[["render",q]]),ie=se;te()(z,"components",{QPage:B.Z,QDialog:Q.Z,QCard:P.Z,QCardSection:L.Z,QForm:T.Z,QInput:j.Z,QIcon:F.Z,QBtn:H.Z,QTable:R.Z,QInnerLoading:O.Z,QTd:G.Z,QList:M.Z,QItem:K.Z,QItemSection:Y.Z,QItemLabel:J.Z,QChip:X.Z,QCardActions:ee.Z}),te()(z,"directives",{ClosePopup:ae.Z})}}]);