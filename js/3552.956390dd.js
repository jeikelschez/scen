"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[3552],{8015:(e,a,t)=>{function i(e,a,t,i,s,o){return null}t.d(a,{Z:()=>d});var s=t(589),o=t(8825);const l={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${s.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,o.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,t,i,o){for(var l,n,r,d,c=s.Z.getItem("tokenTraducido"),m=0,u=c.usuario.roles.permisos.length;m<u;m++)if(c.usuario.roles.permisos[m].codigo===e&&(l=!0),c.usuario.roles.permisos[m].codigo===i&&(r=!0),c.usuario.roles.permisos[m].codigo===t&&(d=!0),c.usuario.roles.permisos[m].codigo===a&&(n=!0),m==c.usuario.roles.permisos.length.length-1)break;e=!0===l,i=!0===r,t=!0===d,a=!0===n,this.$emit(o,e,a,i,t)},desactivarOpciones(e){for(var a=s.Z.getItem("tokenTraducido"),t=0,i=this.permisos.length;t<i;t++){var o=0;for(i=a.usuario.roles.permisos.length;o<i;o++)if(a.usuario.roles.permisos[o].codigo==this.permisos[t].permisoName&&(this.permisos[t].permiso=!0),o==a.usuario.roles.permisos.length.length-1)break;if(t==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var n=t(4260);const r=(0,n.Z)(l,[["render",i]]),d=r},5494:(e,a,t)=>{function i(e,a,t,i,s,o){return null}t.d(a,{Z:()=>c});var s=t(589),o=t(5474),l=t(8825);const n={name:"userLogout",data:function(){return{}},setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,i){i.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api.get(e,i).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,a,t,i){i.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api.get(e,i).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,a,t){t.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,t,i){i.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api.post(e,a,i).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,t,i){i.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api.post(e,a,i).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))},putData:function(e,a,t,i){i.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api.put(e,a,i).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))}}};var r=t(4260);const d=(0,r.Z)(n,[["render",i]]),c=d},3552:(e,a,t)=>{t.r(a),t.d(a,{default:()=>de});var i=t(3673),s=t(8880),o=t(2323);const l={class:"row"},n={class:"col-md-6 col-xs-12"},r={class:"row items-center justify-end"},d={class:"col-md-6 col-xs-12"},c={class:"col-md-12 col-xs-12"},m={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},u={class:"row q-pa-sm justify-center"},g={class:"row col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-6 filterTop",style:{"align-self":"center","text-align":"center","margin-top":"30px"}},p={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 selectmovil",style:{"align-self":"center","text-align":"center","margin-bottom":"20px"}},h={class:"col-md-6 col-xs-12"},f={class:"row items-center justify-end"},_={class:"col-md-6 col-xs-12"},b={class:"row items-center justify-end"},v={class:"row col-md-5 col-xl-5 col-lg-5 col-xs-12 col-sm-5 marginCards",style:{"align-self":"center","text-align":"center"}},D=(0,i._)("div",{class:"col-md-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-top":"15px"}},[(0,i._)("p",{style:{"font-size":"20px","align-self":"center","text-align":"center","margin-bottom":"20px"},class:"text-secondary"},[(0,i._)("strong",null,"TIPO DE GUIA")])],-1),x={class:"row col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 justify-center",style:{"align-self":"center","text-align":"center"}},w={class:"col-md-3 col-xs-12 col-sm-12 buttonMenuInitial",style:{"align-self":"center","text-align":"center"},id:"select"},C={class:"col-md-3 col-xs-12 col-sm-12 buttonMenu",style:{"align-self":"center","text-align":"center"},id:"select"},y={class:"col-md-3 col-xs-12 col-sm-12 buttonMenu",style:{"align-self":"center","text-align":"center"},id:"select"},S={class:"q-pa-md"},W={class:"q-gutter-y-md"},V={bordered:"",flat:"",class:"my-card row"},Z=(0,i._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1);function E(e,a,t,E,k,A){const $=(0,i.up)("q-btn"),q=(0,i.up)("q-date"),F=(0,i.up)("q-popup-proxy"),G=(0,i.up)("q-icon"),I=(0,i.up)("q-input"),U=(0,i.up)("q-select"),N=(0,i.up)("q-form"),z=(0,i.up)("q-card-section"),Q=(0,i.up)("q-card"),P=(0,i.up)("q-dialog"),B=(0,i.up)("q-checkbox"),L=(0,i.up)("q-field"),j=(0,i.up)("q-inner-loading"),T=(0,i.up)("q-td"),R=(0,i.up)("q-item-label"),H=(0,i.up)("q-item-section"),O=(0,i.up)("q-chip"),M=(0,i.up)("q-item"),K=(0,i.up)("q-list"),Y=(0,i.up)("q-table"),J=(0,i.up)("q-card-actions"),X=(0,i.up)("desactive-crud"),ee=(0,i.up)("methods"),ae=(0,i.up)("q-page"),te=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(ae,{class:"pagina q-pa-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(P,{modelValue:E.anulate,"onUpdate:modelValue":a[5]||(a[5]=e=>E.anulate=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"70vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(N,{onSubmit:A.createData,class:"q-gutter-md"},{default:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i._)("div",n,[(0,i.Wm)(I,{outlined:"",label:"Fecha",hint:"",modelValue:k.form.f_val,"onUpdate:modelValue":a[1]||(a[1]=e=>k.form.f_val=e),mask:"date",rules:["date"],class:"pcform","lazy-rules":""},{append:(0,i.w5)((()=>[(0,i.Wm)(G,{name:"event",class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(F,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{modelValue:k.form.f_val,"onUpdate:modelValue":a[0]||(a[0]=e=>k.form.f_val=e)},{default:(0,i.w5)((()=>[(0,i._)("div",r,[(0,i.wy)((0,i.Wm)($,{label:"Close",color:"primary",flat:""},null,512),[[te]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,i._)("div",d,[(0,i.Wm)(U,{outlined:"",modelValue:k.form.direccion_banco,"onUpdate:modelValue":[a[2]||(a[2]=e=>k.form.direccion_banco=e),a[3]||(a[3]=e=>k.form.direccion_banco=k.form.direccion_banco.toUpperCase())],label:"Motivo",hint:"",rules:[e.reglaInput],"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(G,{name:"location_on"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",c,[(0,i.Wm)(I,{outlined:"",modelValue:k.form.fax_banco,"onUpdate:modelValue":a[4]||(a[4]=e=>k.form.fax_banco=e),label:"Observación",rules:[e.reglaInput],hint:"","lazy-rules":"",mask:"#### - ##########"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(G,{name:"fax"})])),_:1},8,["modelValue","rules"])])]),(0,i._)("div",m,[(0,i.Wm)($,{label:"Anular Guia",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,i.wy)((0,i.Wm)($,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[te]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i._)("div",u,[(0,i._)("div",g,[(0,i._)("div",p,[(0,i.Wm)(U,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:k.agencias,"option-label":"nb_agencia","option-value":"id",modelValue:k.selectedAgencia,"onUpdate:modelValue":[a[6]||(a[6]=e=>k.selectedAgencia=e),a[7]||(a[7]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,A.getData("/mmovimientos","setData","datos")})],outlined:"",standout:"",label:"Agencia"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(G,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,i.Wm)(Q,{bordered:"",class:"row col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 inputGuias",style:{"align-self":"center","text-align":"center","margin-right":"26px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{class:"row col-md-12 col-xs-12 menuFilter",style:{"align-self":"center","text-align":"center"}},{default:(0,i.w5)((()=>[(0,i._)("div",h,[(0,i.Wm)(I,{outlined:"",label:"Guia Desde:",hint:"",modelValue:k.guia_desde,"onUpdate:modelValue":a[9]||(a[9]=e=>k.guia_desde=e),mask:"date",rules:["date"],class:"pcform","lazy-rules":"",onKeydown:[a[10]||(a[10]=(0,s.D2)((e=>{this.axiosConfig.headers.desde=this.guia_desde,A.getData("/mmovimientos","setData","datos")}),["enter"])),a[11]||(a[11]=(0,s.D2)((e=>{this.axiosConfig.headers.desde=this.guia_desde,A.getData("/mmovimientos","setData","datos")}),["tab"]))],onBlur:a[12]||(a[12]=e=>{this.axiosConfig.headers.desde=this.guia_desde,A.getData("/mmovimientos","setData","datos")})},{append:(0,i.w5)((()=>[(0,i.Wm)(G,{name:"event",class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(F,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{modelValue:k.guia_desde,"onUpdate:modelValue":a[8]||(a[8]=e=>k.guia_desde=e)},{default:(0,i.w5)((()=>[(0,i._)("div",f,[(0,i.wy)((0,i.Wm)($,{label:"Close",color:"primary",flat:""},null,512),[[te]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,i._)("div",_,[(0,i.Wm)(I,{outlined:"",label:"Guia Hasta:",hint:"",modelValue:k.guia_hasta,"onUpdate:modelValue":a[14]||(a[14]=e=>k.guia_hasta=e),mask:"date",rules:["date"],"lazy-rules":"",onKeydown:[a[15]||(a[15]=(0,s.D2)((e=>{this.axiosConfig.headers.hasta=this.guia_hasta,A.getData("/mmovimientos","setData","datos")}),["enter"])),a[16]||(a[16]=(0,s.D2)((e=>{this.axiosConfig.headers.hasta=this.guia_hasta,A.getData("/mmovimientos","setData","datos")}),["tab"]))],onBlur:a[17]||(a[17]=e=>{this.axiosConfig.headers.hasta=this.guia_hasta,A.getData("/mmovimientos","setData","datos")})},{append:(0,i.w5)((()=>[(0,i.Wm)(G,{name:"event",class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(F,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{modelValue:k.guia_hasta,"onUpdate:modelValue":a[13]||(a[13]=e=>k.guia_hasta=e)},{default:(0,i.w5)((()=>[(0,i._)("div",b,[(0,i.wy)((0,i.Wm)($,{label:"Close",color:"primary",flat:""},null,512),[[te]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])),_:1})])),_:1})]),(0,i._)("div",v,[(0,i.Wm)(Q,{bordered:"",class:"row col-md-12 col-xs-12 col-xl-12 col-lg-12 col-sm-12 espaciadoGuias"},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{class:"row col-md-12 col-xs-12"},{default:(0,i.w5)((()=>[D,(0,i._)("div",x,[(0,i._)("div",w,[(0,i.Wm)(L,{"hide-bottom-space":"",borderless:"",dense:"",modelValue:k.selectedGuiaCarga,"onUpdate:modelValue":a[20]||(a[20]=e=>k.selectedGuiaCarga=e)},{control:(0,i.w5)((()=>[(0,i.Wm)(B,{size:"md",modelValue:k.selectedGuiaCarga,"onUpdate:modelValue":[a[18]||(a[18]=e=>k.selectedGuiaCarga=e),a[19]||(a[19]=e=>{this.axiosConfig.headers.tipo=this.selectedGuiaCarga.value,A.getData("/mmovimientos","setData","datos")})],"true-value":"GC","false-value":"0",style:{"font-size":"13px"},label:"Guia de Carga"},null,8,["modelValue"])])),_:1},8,["modelValue"])]),(0,i._)("div",C,[(0,i.Wm)(L,{class:"check","hide-bottom-space":"",borderless:"",dense:"",modelValue:k.selectedGuiaFactura,"onUpdate:modelValue":a[23]||(a[23]=e=>k.selectedGuiaFactura=e)},{control:(0,i.w5)((()=>[(0,i.Wm)(B,{size:"md",modelValue:k.selectedGuiaFactura,"onUpdate:modelValue":[a[21]||(a[21]=e=>k.selectedGuiaFactura=e),a[22]||(a[22]=e=>{this.axiosConfig.headers.tipo=this.selectedGuiaFactura.value,A.getData("/mmovimientos","setData","datos")})],"true-value":"GF","false-value":"0",style:{"font-size":"13px"},label:"Guia de Factura"},null,8,["modelValue"])])),_:1},8,["modelValue"])]),(0,i._)("div",y,[(0,i.Wm)(L,{class:"check","hide-bottom-space":"",borderless:"",dense:"",modelValue:k.selectedFactura,"onUpdate:modelValue":a[26]||(a[26]=e=>k.selectedFactura=e)},{control:(0,i.w5)((()=>[(0,i.Wm)(B,{size:"md",modelValue:k.selectedFactura,"onUpdate:modelValue":[a[24]||(a[24]=e=>k.selectedFactura=e),a[25]||(a[25]=e=>{this.axiosConfig.headers.tipo=this.selectedFactura.value,A.getData("/cguias","setData","datos")})],"true-value":"F","false-value":"0",style:{"font-size":"13px"},label:"Factura"},null,8,["modelValue"])])),_:1},8,["modelValue"])])])])),_:1})])),_:1})])]),(0,i._)("div",S,[(0,i._)("div",W,[(0,i._)("div",V,[(0,i.Wm)(Y,{rows:k.datos,"row-key":"id",loading:E.loading,columns:k.columns,separator:E.separator,class:"my-sticky-column-table",filter:E.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:E.pagination,"onUpdate:pagination":a[29]||(a[29]=e=>E.pagination=e)},{loading:(0,i.w5)((()=>[(0,i.Wm)(j,{showing:"",color:"primary"})])),"body-cell-action":(0,i.w5)((t=>[(0,i.Wm)(T,{props:t},{default:(0,i.w5)((()=>[(0,i.Wm)($,{dense:"",round:"",flat:"",color:"primary",icon:"disabled_by_default",disabled:this.disabledDelete,onClickCapture:a[27]||(a[27]=a=>e.create=!0)},null,8,["disabled"])])),_:2},1032,["props"])])),item:(0,i.w5)((t=>[(0,i._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.j5)(t.selected?"transform: scale(0.95);":"")},[(0,i.Wm)(Q,{class:(0,o.C_)(t.selected?"bg-grey-2":"")},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{dense:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.cols,(s=>((0,i.wg)(),(0,i.j4)(M,{key:s.name},{default:(0,i.w5)((()=>[(0,i.Wm)(H,null,{default:(0,i.w5)((()=>[(0,i.Wm)(R,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(s.label),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(H,{side:""},{default:(0,i.w5)((()=>["status"===s.name?((0,i.wg)(),(0,i.j4)(O,{key:0,color:"Active"==t.row.status?"green":"Disable"==t.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,i.wg)(),(0,i.j4)($,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"disabled_by_default",disabled:this.disabledDelete,onClickCapture:a[28]||(a[28]=a=>e.create=!0)},null,8,["disabled"])):((0,i.wg)(),(0,i.j4)(R,{key:2,caption:"",class:(0,o.C_)(s.classes?s.classes:"")},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])])]),(0,i.Wm)(P,{modelValue:E.deletePopup,"onUpdate:modelValue":a[31]||(a[31]=e=>E.deletePopup=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{style:{width:"700px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(z,null,{default:(0,i.w5)((()=>[Z])),_:1}),(0,i.Wm)(J,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)($,{flat:"",label:"Cancelar",color:"primary"},null,512),[[te]]),(0,i.wy)((0,i.Wm)($,{flat:"",label:"Aceptar",color:"primary",onClick:a[30]||(a[30]=e=>A.deleteData(k.selected))},null,512),[[te]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(X,{ref:"desactiveCrud",onDesactivarCrud:A.desactivarCrud},null,8,["onDesactivarCrud"]),(0,i.Wm)(ee,{ref:"methods",onGetData:a[32]||(a[32]=e=>A.getData("/cguias","setData","datos")),onGetDataGuias:a[33]||(a[33]=e=>A.getDataGuias("/cguias","setData","datos")),onSetData:A.setData,onResetLoading:A.resetLoading,onSetDataIniciar:A.setDataIniciar,onSetDataEdit:A.setDataEdit,onSetDataSelect:A.setDataSelect},null,8,["onSetData","onResetLoading","onSetDataIniciar","onSetDataEdit","onSetDataSelect"])])),_:1})}var k=t(1959),A=t(5474),$=t(8825),q=t(5494),F=(t(589),t(8015));const G={components:{"desactive-crud":F.Z,methods:q.Z},name:"AsignacionGuias",data(){return{columns:[{name:"t_de_documento",field:"t_de_documento",align:"left",sortable:!0},{name:"nro_control",label:"NRO. Control",field:"nro_control",align:"left",sortable:!0},{name:"nro_documento",label:"NRO. Doc.",field:"nro_documento",align:"left",sortable:!0},{name:"cant_asignada",label:"Ref.",field:"cant_asignada",align:"left",sortable:!0},{name:"fecha_emision",label:"Fecha Emision",field:"fecha_emision",align:"left",sortable:!0},{name:"fecha_asignacion",label:"Cliente",field:"fecha_asignacion",align:"left",sortable:!0},{name:"monto_total",label:"Monto Total",field:"monto_total",align:"left",sortable:!0},{name:"cant_disponible",label:"Documento Principal",field:"cant_disponible",align:"left",sortable:!0},{name:"estatus_administra",label:"Estatus",field:"estatus_administra",align:"left",sortable:!0},{name:"tipo_factura",label:"Tipo Factura",field:"tipo_factura",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{control_inicio:"",control_final:"",cant_asignada:"",cant_disponible:"",fecha_asignacion:"",cod_agencia:"",cod_agente:"",cod_cliente:"",tipo:""},formEdit:{control_inicio:"",control_final:"",cant_asignada:"",cant_disponible:"",fecha_asignacion:"",cod_agencia:"",cod_agente:"",cod_cliente:"",tipo:"0",id:""},datos:[],agencias:[],selected:[],refAgencia:"",guia_hasta:"",guia_desde:"",selectedAgencia:[],selectedGuiaCarga:"0",selectedGuiaFactura:"0",selectedFactura:"0",selectedCliente:[],selectedAgente:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,$.Z)(),(0,k.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:"",agencia:"",tipo:""}},pagination:(0,k.iH)({rowsPerPage:10}),separator:(0,k.iH)("vertical"),anulate:(0,k.iH)(!1),loading:(0,k.iH)(!1),edit:(0,k.iH)(!1),deletePopup:(0,k.iH)(!1),filter:(0,k.iH)("")}},mounted(){this.getData("/agencias","setDataIniciar","agencias"),this.$refs.desactiveCrud.desactivarCrud("c_ciudades","r_ciudades","u_ciudades","d_ciudades","desactivarCrud")},methods:{resetLoading(){this.loading=!1},desactivarCrud(e,a,t,i){1==a?(1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==i&&(this.disabledEdit=!1)):this.$router.push("/error403")},setDataSelect(e,a){this[a]=e,this.selectedCliente=[],this.selectedAgente=[],this.loading=!1},getDataGuias(e,a,t){this.axiosConfig.headers.agencia=this.selectedAgencia.id,this.axiosConfig.headers.cliente=this.selectedCliente.id,this.axiosConfig.headers.agente=this.selectedAgente.id,this.$refs.methods.getData(e,a,t,this.axiosConfig)},getData(e,a,t){this.$refs.methods.getData(e,a,t,this.axiosConfig),this.loading=!0},getDataEdit(e){this.$refs.methods.getDataEdit(`/cguias/${e}`,"setDataEdit","formEdit",this.axiosConfig)},setData(e,a){this[a]=e,this.loading=!1},setDataIniciar(e,a){this[a]=e,this.getDataIniciar(),this.loading=!1},setDataEdit(e,a){this[a].control_inicio=e.control_inicio,this[a].control_final=e.control_final,this[a].cant_asignada=e.cant_asignada,this[a].cant_disponible=e.cant_disponible,this[a].fecha_asignacion=e.fecha_asignacion;var t=e.cod_agencia,i=e.cod_agente,s=e.cod_cliente;A.api.get(`/agencias/${t}`,this.axiosConfig).then((e=>{this.formEdit.cod_agencia=e.data,this.axiosConfig.headers.agencia=t,s&&(A.api.get(`/clientes/${s}`,this.axiosConfig).then((e=>{this.formEdit.cod_cliente=e.data})),this.getData("/clientes","setData","clientesForm")),i&&(A.api.get(`/agentes/${i}`,this.axiosConfig).then((e=>{this.formEdit.cod_agente=e.data})),this.getData("/agentes","setData","agentesForm"))})),this[a].tipo=e.tipo_desc,this[a].id=e.id},deleteData(e){this.$refs.methods.deleteData(`/cguias/${e}`,"getDataGuias",this.axiosConfig),this.loading=!0},createData(){this.form.cod_cliente=this.form.cod_cliente.id,this.form.cod_agente=this.form.cod_agente.id,this.form.tipo=this.form.tipo.value,this.form.cod_agencia=this.form.cod_agencia.id,this.$refs.methods.createData("/cguias",this.form,"getDataGuias",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.formEdit.cod_cliente=this.formEdit.cod_cliente.id,this.formEdit.cod_agente=this.formEdit.cod_agente.id,this.formEdit.cod_agencia=this.formEdit.cod_agencia.id,this.formEdit.tipo=this.formEdit.tipo.value,this.$refs.methods.putData(`/cguias/${this.formEdit.id}`,this.formEdit,"getDataGuias",this.axiosConfig),this.resetFormEdit(),this.loading=!0},resetForm(){this.form.control_inicio="",this.form.control_final="",this.form.cant_asignada="",this.form.cant_disponible="",this.form.fecha_asignacion="",this.form.cod_agencia="",this.form.cod_agente="",this.form.cod_cliente="",this.form.tipo="",this.agentesForm=[],this.clientesForm=[],this.create=!1},getDataIniciar(){this.axiosConfig.headers.agencia=this.agencias[0].id,this.selectedAgencia=this.agencias[0],this.getData("/mmovimientos","setData","datos")}}};var I=t(4260),U=t(4379),N=t(6778),z=t(151),Q=t(5589),P=t(5269),B=t(4842),L=t(4554),j=t(3944),T=t(5626),R=t(8240),H=t(2448),O=t(6115),M=t(5735),K=t(7352),Y=t(6941),J=t(3884),X=t(7011),ee=t(3414),ae=t(2035),te=t(2350),ie=t(7030),se=t(9367),oe=t(677),le=t(7518),ne=t.n(le);const re=(0,I.Z)(G,[["render",E]]),de=re;ne()(G,"components",{QPage:U.Z,QDialog:N.Z,QCard:z.Z,QCardSection:Q.Z,QForm:P.Z,QInput:B.Z,QIcon:L.Z,QPopupProxy:j.Z,QDate:T.Z,QBtn:R.Z,QSelect:H.Z,QField:O.Z,QCheckbox:M.Z,QTable:K.Z,QInnerLoading:Y.Z,QTd:J.Z,QList:X.Z,QItem:ee.Z,QItemSection:ae.Z,QItemLabel:te.Z,QChip:ie.Z,QCardActions:se.Z}),ne()(G,"directives",{ClosePopup:oe.Z})}}]);