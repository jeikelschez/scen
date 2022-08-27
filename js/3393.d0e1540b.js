"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[3393],{8015:(e,s,a)=>{function o(e,s,a,o,i,t){return null}a.d(s,{Z:()=>d});var i=a(589),t=a(8825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,t.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,s,a,o,t){for(var r,l,n,d,u=i.Z.getItem("tokenTraducido"),c=0,m=u.usuario.roles.permisos.length;c<m;c++)if(u.usuario.roles.permisos[c].codigo===e&&(r=!0),u.usuario.roles.permisos[c].codigo===o&&(n=!0),u.usuario.roles.permisos[c].codigo===a&&(d=!0),u.usuario.roles.permisos[c].codigo===s&&(l=!0),c==u.usuario.roles.permisos.length.length-1)break;e=!0===r,o=!0===n,a=!0===d,s=!0===l,this.$emit(t,e,s,o,a)},desactivarOpciones(e){for(var s=i.Z.getItem("tokenTraducido"),a=0,o=this.permisos.length;a<o;a++){var t=0;for(o=s.usuario.roles.permisos.length;t<o;t++)if(s.usuario.roles.permisos[t].codigo==this.permisos[a].permisoName&&(this.permisos[a].permiso=!0),t==s.usuario.roles.permisos.length.length-1)break;if(a==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var l=a(4260);const n=(0,l.Z)(r,[["render",o]]),d=n},1496:(e,s,a)=>{function o(e,s,a,o,i,t){return null}a.d(s,{Z:()=>u});var i=a(589),t=a(5474),r=a(8825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,s,a,o){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,t.api.get(e,o).then((e=>{this.$emit(s,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,s,a,o){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,t.api.get(e,o).then((e=>{this.$emit(s,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,s,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,t.api["delete"](e,a).then((e=>{(e.status=200)&&(this.$emit(s),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,s,a,o){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,t.api.post(e,s,o).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,s,a,o){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,t.api.post(e,s,o).then((e=>{(e.status=200)&&this.$emit(a,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,s,a,o){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,t.api.put(e,s,o).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.message),this.errorDelServidor()}))}}};var n=a(4260);const d=(0,n.Z)(l,[["render",o]]),u=d},3393:(e,s,a)=>{a.r(s),a.d(s,{default:()=>le});var o=a(3673),i=a(2323);const t={class:"row"},r={class:"col-md-5 col-xs-12"},l={class:"col-md-7 col-xs-12"},n={class:"col-md-5 col-xs-12"},d={class:"col-md-7 col-xs-12"},u={class:"col-md-5 col-xs-12"},c={class:"col-md-7 col-xs-12"},m={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},p={class:"row"},g={class:"col-md-12 col-xs-12"},h={class:"col-md-5 col-xs-12"},f={class:"col-md-7 col-xs-12"},b={class:"col-md-5 col-xs-12"},_={class:"col-md-7 col-xs-12"},U={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},w={class:"row q-pa-sm justify-center"},v={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},D={class:"row"},C=(0,o._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,o._)("h4",{style:{"font-size":"30px"}},[(0,o._)("strong",null,"SEGURIDAD - USUARIOS")])],-1),y={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},x={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},S={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},E={class:"q-pa-md",style:{"margin-top":"20px"}},W={class:"q-gutter-y-md"},V={bordered:"",flat:"",class:"my-card row"},k=(0,o._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function A(e,s,a,A,Z,q){const I=(0,o.up)("q-icon"),N=(0,o.up)("q-input"),$=(0,o.up)("q-select"),R=(0,o.up)("q-btn"),z=(0,o.up)("q-form"),F=(0,o.up)("q-card-section"),P=(0,o.up)("q-card"),Q=(0,o.up)("q-dialog"),L=(0,o.up)("q-inner-loading"),B=(0,o.up)("q-td"),j=(0,o.up)("q-item-label"),H=(0,o.up)("q-item-section"),T=(0,o.up)("q-chip"),O=(0,o.up)("q-item"),G=(0,o.up)("q-list"),J=(0,o.up)("q-table"),K=(0,o.up)("q-card-actions"),Y=(0,o.up)("methods"),M=(0,o.up)("desactivate-crud"),X=(0,o.up)("q-page"),ee=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(X,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{modelValue:A.usuariosForm,"onUpdate:modelValue":s[12]||(s[12]=e=>A.usuariosForm=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{class:"q-pa-md",bordered:"",style:{"max-width":"60vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(F,null,{default:(0,o.w5)((()=>[(0,o.Wm)(z,{onSubmit:s[11]||(s[11]=e=>q.createDataUsuarios()),class:"q-gutter-md",autocomplete:"off"},{default:(0,o.w5)((()=>[(0,o._)("div",t,[(0,o._)("div",r,[(0,o.Wm)(N,{outlined:"",modelValue:Z.formUsuarios.login,"onUpdate:modelValue":[s[0]||(s[0]=e=>Z.formUsuarios.login=e),s[1]||(s[1]=e=>Z.formUsuarios.login=Z.formUsuarios.login.toUpperCase())],label:"Login",hint:"",class:"pcform","lazy-rules":"",rules:A.reglasLogin},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"login"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",l,[(0,o.Wm)(N,{outlined:"",modelValue:Z.formUsuarios.password,"onUpdate:modelValue":s[3]||(s[3]=e=>Z.formUsuarios.password=e),label:"Contraseña",type:A.isPwd?"password":"text","lazy-rules":"",rules:A.reglasPassword},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:A.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[2]||(s[2]=e=>A.isPwd=!A.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])]),(0,o._)("div",n,[(0,o.Wm)(N,{outlined:"",class:"pcform",modelValue:Z.formUsuarios.nombre,"onUpdate:modelValue":[s[4]||(s[4]=e=>Z.formUsuarios.nombre=e),s[5]||(s[5]=e=>Z.formUsuarios.nombre=Z.formUsuarios.nombre.toUpperCase())],label:"Nombre",hint:"","lazy-rules":"",rules:A.reglasNombre},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"face"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",d,[(0,o.Wm)($,{outlined:"",modelValue:Z.formUsuarios.activo,"onUpdate:modelValue":s[6]||(s[6]=e=>Z.formUsuarios.activo=e),label:"Vigente",hint:"",rules:[q.reglasInputs],options:Z.vigente,"lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,o._)("div",u,[(0,o.Wm)($,{class:"pcform",outlined:"",modelValue:Z.formUsuarios.cod_agencia,"onUpdate:modelValue":[s[7]||(s[7]=e=>Z.formUsuarios.cod_agencia=e),s[9]||(s[9]=e=>{this.axiosConfig.headers.agencia=this.formUsuarios.cod_agencia.id,q.getData("/roles","setDataRoles","roles")})],label:"Agencia",hint:"",rules:[q.reglasInputs],options:Z.agenciasSelected,onFilter:s[8]||(s[8]=(e,s,a)=>q.filterArray(e,s,a,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"apartment"})])),_:1},8,["modelValue","rules","options"])]),(0,o._)("div",c,[(0,o.Wm)($,{outlined:"",modelValue:Z.formUsuarios.cod_rol,"onUpdate:modelValue":s[10]||(s[10]=e=>Z.formUsuarios.cod_rol=e),label:"Rol Desempeñado",hint:"",rules:[q.reglasInputs],options:Z.roles,"option-label":"descripcion","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"badge"})])),_:1},8,["modelValue","rules","options"])])]),(0,o._)("div",m,[(0,o.Wm)(R,{label:"Agregar Usuario",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(R,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close",onClick:q.resetFormUsuarios},null,8,["onClick"]),[[ee]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(Q,{modelValue:A.usuariosFormEdit,"onUpdate:modelValue":s[23]||(s[23]=e=>A.usuariosFormEdit=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{class:"q-pa-md",bordered:"",style:{"max-width":"60vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(F,null,{default:(0,o.w5)((()=>[(0,o.Wm)(z,{onSubmit:s[22]||(s[22]=e=>q.putDataUsuarios()),autocomplete:"off"},{default:(0,o.w5)((()=>[(0,o._)("div",p,[(0,o._)("div",g,[(0,o.Wm)(N,{outlined:"",modelValue:Z.formEditUsuarios.login,"onUpdate:modelValue":[s[13]||(s[13]=e=>Z.formEditUsuarios.login=e),s[14]||(s[14]=e=>Z.formEditUsuarios.login=Z.formEditUsuarios.login.toUpperCase())],label:"Login",hint:"",readonly:"","lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"login"})])),_:1},8,["modelValue"])]),(0,o._)("div",h,[(0,o.Wm)(N,{outlined:"",class:"pcform",modelValue:Z.formEditUsuarios.nombre,"onUpdate:modelValue":[s[15]||(s[15]=e=>Z.formEditUsuarios.nombre=e),s[16]||(s[16]=e=>Z.formEditUsuarios.nombre=Z.formEditUsuarios.nombre.toUpperCase())],label:"Nombre",hint:"","lazy-rules":"",rules:A.reglasNombre},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"face"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",f,[(0,o.Wm)($,{outlined:"",modelValue:Z.formEditUsuarios.activo,"onUpdate:modelValue":s[17]||(s[17]=e=>Z.formEditUsuarios.activo=e),label:"Vigente",hint:"",rules:[q.reglasInputs],options:Z.vigente,"lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,o._)("div",b,[(0,o.Wm)($,{class:"pcform",outlined:"",modelValue:Z.formEditUsuarios.cod_agencia,"onUpdate:modelValue":[s[18]||(s[18]=e=>Z.formEditUsuarios.cod_agencia=e),s[20]||(s[20]=e=>{this.axiosConfig.headers.agencia=this.formEditUsuarios.cod_agencia.id,q.getData("/roles","setDataRoles","roles")})],label:"Agencia",hint:"",rules:[q.reglasInputs],options:Z.agenciasSelected,onFilter:s[19]||(s[19]=(e,s,a)=>q.filterArray(e,s,a,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"apartment"})])),_:1},8,["modelValue","rules","options"])]),(0,o._)("div",_,[(0,o.Wm)($,{outlined:"",modelValue:Z.formEditUsuarios.cod_rol,"onUpdate:modelValue":s[21]||(s[21]=e=>Z.formEditUsuarios.cod_rol=e),label:"Rol Desempeñado",hint:"",rules:[q.reglasInputs],options:Z.roles,"option-label":"descripcion","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"badge"})])),_:1},8,["modelValue","rules","options"])])]),(0,o._)("div",U,[(0,o.Wm)(R,{label:"Editar Usuario",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(R,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close",onClick:q.resetFormEditUsuarios},null,8,["onClick"]),[[ee]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",w,[(0,o._)("div",v,[(0,o._)("div",D,[C,(0,o._)("div",y,[(0,o.Wm)($,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:Z.agenciasSelected,onFilter:s[24]||(s[24]=(e,s,a)=>q.filterArray(e,s,a,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:Z.selectedAgencia,"onUpdate:modelValue":[s[25]||(s[25]=e=>Z.selectedAgencia=e),s[26]||(s[26]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,q.getData("/usuarios","setDataUsuarios","usuarios")})],outlined:"",standout:"",label:"Escoge una Agencia"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",x,[(0,o.Wm)(N,{rounded:"",outlined:"",standout:"",modelValue:A.filterUsuarios,"onUpdate:modelValue":s[27]||(s[27]=e=>A.filterUsuarios=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"search"})])),_:1},8,["modelValue"])]),(0,o._)("div",S,[(0,o.Wm)(R,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:s[28]||(s[28]=e=>A.usuariosForm=!0),onClickCapture:s[29]||(s[29]=e=>q.resetFormUsuarios()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,o._)("div",E,[(0,o._)("div",W,[(0,o._)("div",V,[(0,o.Wm)(J,{rows:Z.usuarios,"row-key":"id",columns:Z.columnsUsuarios,separator:A.separator,loading:A.loading,class:"my-sticky-column-table",filter:A.filterUsuarios,style:{width:"100%"},grid:e.$q.screen.xs,pagination:A.pagination,"onUpdate:pagination":s[32]||(s[32]=e=>A.pagination=e)},{loading:(0,o.w5)((()=>[(0,o.Wm)(L,{showing:"",color:"primary"})])),"body-cell-action":(0,o.w5)((e=>[(0,o.Wm)(B,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(R,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:s=>{q.getData(`/usuarios/${e.row.login}`,"setDataUsuariosEdit","formEditUsuarios"),A.usuariosFormEdit=!0}},null,8,["disabled","onClick"]),(0,o.Wm)(R,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:s=>Z.selected=e.row.login,onClickCapture:s[30]||(s[30]=e=>A.usuariosDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,o.w5)((e=>[(0,o._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,o.Wm)(P,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,o.w5)((()=>[(0,o.Wm)(G,{dense:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(a=>((0,o.wg)(),(0,o.j4)(O,{key:a.name},{default:(0,o.w5)((()=>[(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o.Wm)(j,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a.label),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(H,{side:""},{default:(0,o.w5)((()=>["status"===a.name?((0,o.wg)(),(0,o.j4)(T,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,o.wg)(),(0,o.j4)(R,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:s=>{q.getData(`/usuarios/${e.row.login}`,"setDataUsuariosEdit","formEditUsuarios"),A.usuariosFormEdit=!0}},null,8,["disabled","onClick"])):(0,o.kq)("",!0),"status"===a.name?((0,o.wg)(),(0,o.j4)(T,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,o.wg)(),(0,o.j4)(R,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:s=>Z.selected=e.row.id,onClickCapture:s[31]||(s[31]=e=>A.usuariosDelete=!0)},null,8,["disabled","onClick"])):((0,o.wg)(),(0,o.j4)(j,{key:4,caption:"",class:(0,i.C_)(a.classes?a.classes:"")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","loading","filter","grid","pagination"])])])])])]),(0,o.Wm)(Q,{modelValue:A.usuariosDelete,"onUpdate:modelValue":s[34]||(s[34]=e=>A.usuariosDelete=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{style:{width:"700px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(F,null,{default:(0,o.w5)((()=>[k])),_:1}),(0,o.Wm)(K,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(R,{flat:"",label:"Cancelar",color:"primary"},null,512),[[ee]]),(0,o.wy)((0,o.Wm)(R,{flat:"",label:"Aceptar",color:"primary",onClick:s[33]||(s[33]=e=>q.deleteData(Z.selected))},null,512),[[ee]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(Y,{ref:"methods",onGetData:s[35]||(s[35]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,q.getData("/usuarios","setDataRoles","usuarios")}),onGetDataUsuarios:s[36]||(s[36]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,q.getData("/usuarios","setDataUsuarios","usuarios")}),onSetDataUsuarios:q.setDataUsuarios,onResetLoading:q.resetLoading,onSetDataUsuariosEdit:q.setDataUsuariosEdit,onSetDataRoles:q.setDataRoles,onSetDataRolesIniciar:q.setDataRolesIniciar,onSetData:q.setData},null,8,["onSetDataUsuarios","onResetLoading","onSetDataUsuariosEdit","onSetDataRoles","onSetDataRolesIniciar","onSetData"]),(0,o.Wm)(M,{ref:"desactiveCrud",onDesactivarCrud:q.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var Z=a(1959),q=(a(589),a(5474)),I=a(8825),N=a(1496),$=a(8015);const R={components:{"desactivate-crud":$.Z,methods:N.Z},name:"Bancos",data(){return{columnsUsuarios:[{name:"login",label:"Login",field:"login",align:"left",sortable:!0},{name:"nombre",label:"Nombre",field:"nombre",align:"left",sortable:!0},{name:"roles",label:"Rol Desempeñado",field:e=>e.roles.descripcion,align:"left",sortable:!0},{name:"estatus_desc",label:"Vigente",field:"estatus_desc",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formUsuarios:{login:"",nombre:"",activo:"",cod_rol:[],password:"",cod_agencia:[]},formEditUsuarios:{login:"",nombre:"",activo:"",cod_rol:"",id:"",cod_agencia:""},vigente:[{label:"ACTIVO",value:"1"},{label:"INACTIVO",value:"0"}],agencias:[],roles:[],usuarios:[],selected:[],selectedAgencia:[],agenciasSelected:[],agenciaRef:"",agenciaRef2:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){const e=(0,I.Z)();(0,Z.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:"",agencia:""}},pagination:(0,Z.iH)({rowsPerPage:10}),separator:(0,Z.iH)("vertical"),password:(0,Z.iH)(""),loading:(0,Z.iH)(!1),isPwd:(0,Z.iH)(!0),usuariosForm:(0,Z.iH)(!1),usuariosFormEdit:(0,Z.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},usuariosDelete:(0,Z.iH)(!1),filterUsuarios:(0,Z.iH)(""),reglasLogin:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<12||"Deben ser máximo 11 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"],reglasPassword:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<=10||"Deben ser máximo 10 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"],reglasNombre:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<=50||"Deben ser máximo 50 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"]}},mounted(){this.getData("/agencias","setData","agencias"),this.$refs.desactiveCrud.desactivarCrud("c_usuarios","r_usuarios","u_usuarios","d_usuarios","desactivarCrud")},methods:{filterArray(e,s,a,o,i,t){s(""!==e?()=>{const s=e.toUpperCase();for(var a=JSON.parse(JSON.stringify(this[i])),r=0,l=this[i].length;r<l;r++)if(this[i][r][t].indexOf(s)>-1||delete a[r],r==this[i].length-1){this[o]=a;break}}:()=>{this[o]=this[i]})},resetLoading(){this.loading=!1},reglasInputs(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},desactivarCrud(e,s,a,o){1==s?(1==e&&(this.disabledCreate=!1),1==a&&(this.disabledDelete=!1),1==o&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,s,a){this.$refs.methods.getData(e,s,a,this.axiosConfig),this.loading=!0},setData(e,s){this[s]=e,this.getDatosIniciar(),this.loading=!1},setDataUsuarios(e,s){this[s]=e,this.loading=!1},setDataRoles(e,s){this[s]=e,this.formEditUsuarios.cod_rol="",this.loading=!1},setDataUsuariosEdit(e,s){this[s].login=e.login,this[s].nombre=e.nombre,this[s].id=e.id,this[s].cod_rol=e.roles.descripcion,this[s].activo=e.activo_desc,this[s].cod_agencia=this.selectedAgencia,this.axiosConfig.headers.agencia=this.formEditUsuarios.cod_agencia.id,this.getData("/roles","setDataRolesIniciar","roles")},deleteData(e){this.$refs.methods.deleteData(`/usuarios/${e}`,"getDataUsuarios",this.axiosConfig),this.loading=!0},createDataUsuarios(){this.formUsuarios.activo=this.formUsuarios.activo.value,this.formUsuarios.cod_rol=this.formUsuarios.cod_rol.id,this.formUsuarios.cod_agencia=this.formUsuarios.cod_agencia.id,this.$refs.methods.createData("/usuarios",this.formUsuarios,"getDataUsuarios",this.axiosConfig),this.usuariosForm=!1,this.loading=!0},putDataUsuarios(){this.formEditUsuarios.activo=this.formEditUsuarios.activo.value,this.formEditUsuarios.cod_rol=this.formEditUsuarios.cod_rol.id,this.formEditUsuarios.cod_agencia=this.formEditUsuarios.cod_agencia.id,this.$refs.methods.putData(`/usuarios/${this.formEditUsuarios.login}`,this.formEditUsuarios,"getDataUsuarios",this.axiosConfig),this.resetFormEditUsuarios(),this.loading=!0},resetFormUsuarios(){this.formUsuarios.nombre=null,this.formUsuarios.login=null,this.formUsuarios.cod_rol=null,this.formUsuarios.activo=null,this.formUsuarios.password=null,this.formUsuarios.cod_agencia=null,this.usuariosForm=!1},resetFormEditUsuarios(){this.formEditUsuarios.nombre=null,this.formEditUsuarios.login=null,this.formEditUsuarios.cod_rol=null,this.formEditUsuarios.activo=null,this.formUsuarios.password=null,this.formUsuarios.cod_agencia=null,this.usuariosFormEdit=!1},getDatosIniciar(){this.agenciaRef2=this.agencias[0].id,this.selectedAgencia=this.agencias[0],this.axiosConfig.headers.agencia=this.agenciaRef2,q.api.get("/roles",this.axiosConfig).then((e=>{this.roles=e.data})),q.api.get("/usuarios",this.axiosConfig).then((e=>{this.usuarios=e.data}))},setDataRolesIniciar(e,s){this[s]=e,this.loading=!1}}};var z=a(4260),F=a(4379),P=a(6778),Q=a(151),L=a(5589),B=a(5269),j=a(4842),H=a(4554),T=a(2448),O=a(8240),G=a(7352),J=a(6941),K=a(3884),Y=a(7011),M=a(3414),X=a(2035),ee=a(2350),se=a(7030),ae=a(9367),oe=a(677),ie=a(7518),te=a.n(ie);const re=(0,z.Z)(R,[["render",A]]),le=re;te()(R,"components",{QPage:F.Z,QDialog:P.Z,QCard:Q.Z,QCardSection:L.Z,QForm:B.Z,QInput:j.Z,QIcon:H.Z,QSelect:T.Z,QBtn:O.Z,QTable:G.Z,QInnerLoading:J.Z,QTd:K.Z,QList:Y.Z,QItem:M.Z,QItemSection:X.Z,QItemLabel:ee.Z,QChip:se.Z,QCardActions:ae.Z}),te()(R,"directives",{ClosePopup:oe.Z})}}]);