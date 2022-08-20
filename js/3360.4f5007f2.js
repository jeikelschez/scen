"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[3360],{8015:(e,a,t)=>{function i(e,a,t,i,s,o){return null}t.d(a,{Z:()=>d});var s=t(589),o=t(8825);const l={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${s.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,o.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,t,i,o){for(var l,n,r,d,c=s.Z.getItem("tokenTraducido"),m=0,u=c.usuario.roles.permisos.length;m<u;m++)if(c.usuario.roles.permisos[m].codigo===e&&(l=!0),c.usuario.roles.permisos[m].codigo===i&&(r=!0),c.usuario.roles.permisos[m].codigo===t&&(d=!0),c.usuario.roles.permisos[m].codigo===a&&(n=!0),m==c.usuario.roles.permisos.length.length-1)break;e=!0===l,i=!0===r,t=!0===d,a=!0===n,this.$emit(o,e,a,i,t)},desactivarOpciones(e){for(var a=s.Z.getItem("tokenTraducido"),t=0,i=this.permisos.length;t<i;t++){var o=0;for(i=a.usuario.roles.permisos.length;o<i;o++)if(a.usuario.roles.permisos[o].codigo==this.permisos[t].permisoName&&(this.permisos[t].permiso=!0),o==a.usuario.roles.permisos.length.length-1)break;if(t==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var n=t(4260);const r=(0,n.Z)(l,[["render",i]]),d=r},9841:(e,a,t)=>{function i(e,a,t,i,s,o){return null}t.d(a,{Z:()=>c});var s=t(589),o=t(5474),l=t(8825);const n={name:"userLogout",data:function(){return{}},setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,i){i.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api.get(e,i).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,a,t,i){i.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api.get(e,i).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,a,t){t.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,t,i){i.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api.post(e,a,i).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,t,i){i.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api.post(e,a,i).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,a,t,i){i.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,o.api.put(e,a,i).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))}}};var r=t(4260);const d=(0,r.Z)(n,[["render",i]]),c=d},3360:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Ee});var i=t(3673),s=t(8880),o=t(2323);const l={class:"row"},n={class:"col-md-6 col-xs-12"},r={class:"col-md-6 col-xs-12"},d={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},m={class:"col-md-4 col-xs-12"},u={class:"col-md-4 col-xs-12"},g={class:"col-md-4 col-xs-12"},p={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},h={class:"row"},f={class:"col-md-6 col-xs-12"},_={class:"col-md-6 col-xs-12"},b={class:"col-md-6 col-xs-12"},C={class:"col-md-6 col-xs-12"},x={class:"col-md-4 col-xs-12"},D={class:"col-md-4 col-xs-12"},y={class:"col-md-4 col-xs-12"},v={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},w={class:"row q-pa-sm justify-center"},S=(0,i._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,i._)("h4",null,[(0,i._)("strong",null,"MANTENIMIENTO - ASIGNACIÓN DE GUIAS")])],-1),E={class:"row col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-bottom":"20px"}},V={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-3 selectmovil",style:{"align-self":"center","text-align":"center","margin-right":"20px"}},W={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-3 selectmovil",style:{"align-self":"center","text-align":"center","margin-right":"20px"}},A={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-4",style:{"align-self":"center","text-align":"center","margin-right":"30px"}},F=(0,i._)("div",{class:"col-md-4 col-xs-12 col-sm-4 titleMenu",style:{"align-self":"center","text-align":"center"}},[(0,i._)("p",{style:{"font-size":"16px","align-self":"center","text-align":"center","margin-bottom":"0px"},class:"text-secondary"},[(0,i._)("strong",null,"TIPO DE GUIA")])],-1),G={class:"col-md-4 col-xs-6 col-sm-4",style:{"margin-bottom":"7px","margin-top":"7px","align-self":"center","text-align":"center"},id:"select"},k={class:"col-md-4 col-xs-6 col-sm-4",style:{"margin-bottom":"7px","margin-top":"7px","align-self":"center","text-align":"center"},id:"select"},U={class:"row col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},Z={class:"col-md-5 col-xs-12"},q={class:"col-md-5 col-xs-7"},z={class:"col-md-2 col-xs-4 checkboxGuias"},I={class:"col-md-3 col-xl-4 col-lg-4 col-xs-12 col-sm-12 botonesGuias",style:{"text-align":"center","align-self":"center"}},N=(0,i.Uk)("Agregar Control"),$=(0,i.Uk)("Eliminar Filtros"),P=(0,i.Uk)("Carta para el Cliente"),Q={class:"q-pa-md",style:{"margin-top":"20px"}},M={class:"q-gutter-y-md"},T={bordered:"",flat:"",class:"my-card row"},j=(0,i._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1);function B(e,a,t,B,L,H){const R=(0,i.up)("q-icon"),Y=(0,i.up)("q-input"),O=(0,i.up)("q-select"),K=(0,i.up)("q-date"),J=(0,i.up)("q-popup-proxy"),X=(0,i.up)("q-btn"),ee=(0,i.up)("q-form"),ae=(0,i.up)("q-card-section"),te=(0,i.up)("q-card"),ie=(0,i.up)("q-dialog"),se=(0,i.up)("q-checkbox"),oe=(0,i.up)("q-field"),le=(0,i.up)("q-tooltip"),ne=(0,i.up)("q-inner-loading"),re=(0,i.up)("q-td"),de=(0,i.up)("q-item-label"),ce=(0,i.up)("q-item-section"),me=(0,i.up)("q-chip"),ue=(0,i.up)("q-item"),ge=(0,i.up)("q-list"),pe=(0,i.up)("q-table"),he=(0,i.up)("q-card-actions"),fe=(0,i.up)("desactive-crud"),_e=(0,i.up)("methods"),be=(0,i.up)("q-page"),Ce=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(be,{class:"pagina q-pa-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(ie,{modelValue:B.create,"onUpdate:modelValue":a[13]||(a[13]=e=>B.create=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(te,{class:"q-pa-md",bordered:"",style:{"max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(ae,null,{default:(0,i.w5)((()=>[(0,i.Wm)(ee,{onSubmit:a[12]||(a[12]=e=>H.createData()),class:"q-gutter-md"},{default:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i._)("div",n,[(0,i.Wm)(Y,{"upper-case":"",outlined:"",modelValue:L.form.control_inicio,"onUpdate:modelValue":a[0]||(a[0]=e=>L.form.control_inicio=e),label:"Primer Correlativo",class:"pcform",hint:"","lazy-rules":"",rules:[H.reglasNotNull10],type:"number"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",r,[(0,i.Wm)(Y,{outlined:"",modelValue:L.form.control_final,"onUpdate:modelValue":a[1]||(a[1]=e=>L.form.control_final=e),label:"Ultimo Correlativo",rules:[H.reglasSegundoCorrelativo],hint:"","lazy-rules":"",type:"number"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"account_circle"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",d,[(0,i.Wm)(O,{outlined:"",modelValue:L.form.tipo,"onUpdate:modelValue":a[2]||(a[2]=e=>L.form.tipo=e),label:"Tipo de Carga",hint:"",class:"pcform",rules:[H.reglasSelect],options:L.tipoGuia,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",c,[(0,i.Wm)(Y,{outlined:"",label:"Fecha de Asignación",hint:"",modelValue:L.form.fecha_asignacion,"onUpdate:modelValue":a[4]||(a[4]=e=>L.form.fecha_asignacion=e),"lazy-rules":"",mask:"##-##-####",rules:[H.dateValidation]},{append:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"event",class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(J,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{modelValue:L.form.fecha_asignacion,"onUpdate:modelValue":a[3]||(a[3]=e=>L.form.fecha_asignacion=e),mask:"DD-MM-YYYY"},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",m,[(0,i.Wm)(O,{outlined:"",modelValue:L.form.cod_agencia,"onUpdate:modelValue":[a[5]||(a[5]=e=>L.form.cod_agencia=e),a[7]||(a[7]=e=>{this.axiosConfig.headers.agencia=this.form.cod_agencia.id,H.getData("/clientes","setData","clientesForm"),H.getData("/agentes","setData","agentesForm"),this.form.cod_cliente="",this.form.cod_agente=""})],label:"Agencia",hint:"",class:"pcform",rules:[H.reglasSelect],options:L.agenciasSelected,onFilter:a[6]||(a[6]=(e,a,t)=>H.filterArray(e,a,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"nb_agencia","option-value":"id"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",u,[(0,i.Wm)(O,{outlined:"",modelValue:L.form.cod_agente,"onUpdate:modelValue":a[8]||(a[8]=e=>L.form.cod_agente=e),label:"Agente",class:"pcform",hint:"",options:L.agentesFormSelected,onFilter:a[9]||(a[9]=(e,a,t)=>H.filterArray(e,a,t,"agentesFormSelected","agentesForm","persona_responsable")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"persona_responsable","option-value":"id"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"south_america"})])),_:1},8,["modelValue","options"])]),(0,i._)("div",g,[(0,i.Wm)(O,{outlined:"",modelValue:L.form.cod_cliente,"onUpdate:modelValue":a[10]||(a[10]=e=>L.form.cod_cliente=e),label:"Cliente",hint:"",options:L.clientesFormSelected,onFilter:a[11]||(a[11]=(e,a,t)=>H.filterArray(e,a,t,"clientesFormSelected","clientesForm","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"nb_cliente","option-value":"id"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"south_america"})])),_:1},8,["modelValue","options"])])]),(0,i._)("div",p,[(0,i.Wm)(X,{label:"Agregar Control",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,i.wy)((0,i.Wm)(X,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[Ce]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(ie,{modelValue:B.edit,"onUpdate:modelValue":a[27]||(a[27]=e=>B.edit=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(te,{class:"q-pa-md",bordered:"",style:{"max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(ae,null,{default:(0,i.w5)((()=>[(0,i.Wm)(ee,{onSubmit:a[26]||(a[26]=e=>H.putData())},{default:(0,i.w5)((()=>[(0,i._)("div",h,[(0,i._)("div",f,[(0,i.Wm)(Y,{"upper-case":"",outlined:"",modelValue:L.formEdit.control_inicio,"onUpdate:modelValue":a[14]||(a[14]=e=>L.formEdit.control_inicio=e),label:"Primer Correlativo",class:"pcform",readonly:this.disabledInputsEdit,hint:"","lazy-rules":"",rules:[H.reglasNotNull10],type:"number"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"apartment"})])),_:1},8,["modelValue","readonly","rules"])]),(0,i._)("div",_,[(0,i.Wm)(Y,{outlined:"",modelValue:L.formEdit.control_final,"onUpdate:modelValue":a[15]||(a[15]=e=>L.formEdit.control_final=e),label:"Ultimo Correlativo",rules:[H.reglasSegundoCorrelativoEdit],hint:"",readonly:this.disabledInputsEdit,"lazy-rules":"",type:"number"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"account_circle"})])),_:1},8,["modelValue","rules","readonly"])]),(0,i._)("div",b,[(0,i.Wm)(O,{outlined:"",modelValue:L.formEdit.tipo,"onUpdate:modelValue":a[16]||(a[16]=e=>L.formEdit.tipo=e),label:"Tipo de Carga",hint:"",readonly:this.disabledInputsEdit,class:"pcform",rules:[H.reglasSelect],options:L.tipoGuia,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"south_america"})])),_:1},8,["modelValue","readonly","rules","options"])]),(0,i._)("div",C,[(0,i.Wm)(Y,{outlined:"",label:"Fecha de Asignación",hint:"",modelValue:L.formEdit.fecha_asignacion,"onUpdate:modelValue":a[18]||(a[18]=e=>L.formEdit.fecha_asignacion=e),"lazy-rules":"",mask:"##-##-####",readonly:this.disabledInputsEdit,rules:[H.dateValidation]},{append:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"event",class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(J,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{modelValue:L.formEdit.fecha_asignacion,"onUpdate:modelValue":a[17]||(a[17]=e=>L.formEdit.fecha_asignacion=e),mask:"DD-MM-YYYY"},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","readonly","rules"])]),(0,i._)("div",x,[(0,i.Wm)(O,{outlined:"",modelValue:L.formEdit.cod_agencia,"onUpdate:modelValue":[a[19]||(a[19]=e=>L.formEdit.cod_agencia=e),a[21]||(a[21]=e=>{this.axiosConfig.headers.agencia=this.formEdit.cod_agencia.id,H.getData("/clientes","setData","clientesForm"),H.getData("/agentes","setData","agentesForm"),this.formEdit.cod_cliente="",this.formEdit.cod_agente=""})],label:"Agencia",readonly:this.disabledInputsEdit,hint:"",class:"pcform",rules:[H.reglasSelect],options:L.agenciasSelected,onFilter:a[20]||(a[20]=(e,a,t)=>H.filterArray(e,a,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"nb_agencia","option-value":"id"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"south_america"})])),_:1},8,["modelValue","readonly","rules","options"])]),(0,i._)("div",D,[(0,i.Wm)(O,{outlined:"",modelValue:L.formEdit.cod_agente,"onUpdate:modelValue":a[22]||(a[22]=e=>L.formEdit.cod_agente=e),label:"Agente",class:"pcform",readonly:this.disabledInputsEdit,hint:"",options:L.agentesFormSelected,onFilter:a[23]||(a[23]=(e,a,t)=>H.filterArray(e,a,t,"agentesFormSelected","agentesForm","persona_responsable")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"persona_responsable","option-value":"id"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"south_america"})])),_:1},8,["modelValue","readonly","options"])]),(0,i._)("div",y,[(0,i.Wm)(O,{outlined:"",modelValue:L.formEdit.cod_cliente,"onUpdate:modelValue":a[24]||(a[24]=e=>L.formEdit.cod_cliente=e),label:"Cliente",hint:"",readonly:this.disabledInputsEdit,options:L.clientesFormSelected,onFilter:a[25]||(a[25]=(e,a,t)=>H.filterArray(e,a,t,"clientesFormSelected","clientesForm","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"nb_cliente","option-value":"id"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"south_america"})])),_:1},8,["modelValue","readonly","options"])])]),(0,i._)("div",v,[(0,i.Wm)(X,{label:"Editar Control",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,i.wy)((0,i.Wm)(X,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[Ce]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i._)("div",w,[S,(0,i._)("div",E,[(0,i._)("div",V,[(0,i.Wm)(O,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:L.agenciasSelected,onFilter:a[28]||(a[28]=(e,a,t)=>H.filterArray(e,a,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:L.selectedAgencia,"onUpdate:modelValue":[a[29]||(a[29]=e=>L.selectedAgencia=e),a[30]||(a[30]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,H.getData("/cguias","setDataGuias","datos"),H.getData("/agentes","setDataSelect","agentes"),H.getData("/clientes","setDataSelect","clientes")})],outlined:"",standout:"",label:"Agencia"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,i._)("div",W,[(0,i.Wm)(O,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:L.agentesSelected,onFilter:a[31]||(a[31]=(e,a,t)=>H.filterArray(e,a,t,"agentesSelected","agentes","persona_responsable")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"persona_responsable","option-value":"id",modelValue:L.selectedAgente,"onUpdate:modelValue":[a[32]||(a[32]=e=>L.selectedAgente=e),a[33]||(a[33]=e=>{this.axiosConfig.headers.agente=this.selectedAgente.id,H.getData("/cguias","setDataGuias","datos")})],outlined:"",standout:"",label:"Agente"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,i._)("div",A,[(0,i.Wm)(O,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:L.clientesSelected,onFilter:a[34]||(a[34]=(e,a,t)=>H.filterArray(e,a,t,"clientesSelected","clientes","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_cliente","option-value":"id",modelValue:L.selectedCliente,"onUpdate:modelValue":[a[35]||(a[35]=e=>L.selectedCliente=e),a[36]||(a[36]=e=>{this.axiosConfig.headers.cliente=this.selectedCliente.id,H.getData("/cguias","setDataGuias","datos")})],outlined:"",standout:"",label:"Cliente"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,i.Wm)(te,{bordered:"",class:"row col-md-5 col-xs-12 col-xl-5 col-lg-5 col-sm-12 espaciadoGuias"},{default:(0,i.w5)((()=>[(0,i.Wm)(ae,{class:"row col-md-12 col-xs-12",style:{padding:"2px"}},{default:(0,i.w5)((()=>[F,(0,i._)("div",G,[(0,i.Wm)(oe,{"hide-bottom-space":"",borderless:"",dense:"",class:"pcform",modelValue:L.selectedGuiaCarga,"onUpdate:modelValue":a[39]||(a[39]=e=>L.selectedGuiaCarga=e)},{control:(0,i.w5)((()=>[(0,i.Wm)(se,{size:"md",modelValue:L.selectedGuiaCarga,"onUpdate:modelValue":[a[37]||(a[37]=e=>L.selectedGuiaCarga=e),a[38]||(a[38]=e=>{this.axiosConfig.headers.tipo=this.selectedGuiaCarga,this.selectedGuiaFactura="",H.getData("/cguias","setDataGuias","datos")})],"true-value":"20","false-value":"",style:{"font-size":"13px"},label:"Guia de Carga"},null,8,["modelValue"])])),_:1},8,["modelValue"])]),(0,i._)("div",k,[(0,i.Wm)(oe,{"hide-bottom-space":"",borderless:"",dense:"",modelValue:L.selectedGuiaFactura,"onUpdate:modelValue":a[42]||(a[42]=e=>L.selectedGuiaFactura=e)},{control:(0,i.w5)((()=>[(0,i.Wm)(se,{size:"md",modelValue:L.selectedGuiaFactura,"onUpdate:modelValue":[a[40]||(a[40]=e=>L.selectedGuiaFactura=e),a[41]||(a[41]=e=>{this.axiosConfig.headers.tipo=this.selectedGuiaFactura,this.selectedGuiaCarga="",H.getData("/cguias","setDataGuias","datos")})],"true-value":"21","false-value":"",style:{"font-size":"13px"},label:"Guia de Factura"},null,8,["modelValue"])])),_:1},8,["modelValue"])])])),_:1})])),_:1})]),(0,i._)("div",U,[(0,i.Wm)(te,{bordered:"",class:"row col-md-7 col-xl-7 col-lg-7 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-right":"26px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(ae,{class:"row col-md-12 col-xs-12 menuFilter",style:{"align-self":"center","text-align":"center"}},{default:(0,i.w5)((()=>[(0,i._)("div",Z,[(0,i.Wm)(Y,{outlined:"",modelValue:L.guia_desde,"onUpdate:modelValue":a[43]||(a[43]=e=>L.guia_desde=e),label:"Guia Desde:",type:"number",class:"pcform",onKeydown:[a[44]||(a[44]=(0,s.D2)((e=>{this.axiosConfig.headers.desde=this.guia_desde,H.getData("/cguias","setDataGuias","datos"),""!==this.guia_hasta&&this.reglasCorrelativoFilter()}),["enter"])),a[45]||(a[45]=(0,s.D2)((e=>{this.axiosConfig.headers.desde=this.guia_desde,H.getData("/cguias","setDataGuias","datos"),""!==this.guia_hasta&&this.reglasCorrelativoFilter()}),["tab"]))],onBlur:a[46]||(a[46]=e=>{this.axiosConfig.headers.desde=this.guia_desde,H.getData("/cguias","setDataGuias","datos"),""!==this.guia_hasta&&this.reglasCorrelativoFilter()}),"hide-bottom-space":"",hint:"","lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"south_america"})])),_:1},8,["modelValue"])]),(0,i._)("div",q,[(0,i.Wm)(Y,{outlined:"",modelValue:L.guia_hasta,"onUpdate:modelValue":a[47]||(a[47]=e=>L.guia_hasta=e),onKeydown:[a[48]||(a[48]=(0,s.D2)((e=>{this.axiosConfig.headers.hasta=this.guia_hasta,H.getData("/cguias","setDataGuias","datos"),this.reglasCorrelativoFilter()}),["enter"])),a[49]||(a[49]=(0,s.D2)((e=>{this.axiosConfig.headers.hasta=this.guia_hasta,H.getData("/cguias","setDataGuias","datos"),this.reglasCorrelativoFilter()}),["tab"]))],onBlur:a[50]||(a[50]=e=>{this.axiosConfig.headers.hasta=this.guia_hasta,H.getData("/cguias","setDataGuias","datos"),this.reglasCorrelativoFilter()}),label:"Guia Hasta:",type:"number",class:"inputMenuGuias","hide-bottom-space":"","lazy-rules":"",hint:""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(R,{name:"south_america"})])),_:1},8,["modelValue"])]),(0,i._)("div",z,[(0,i.Wm)(oe,{"hide-bottom-space":"",borderless:"",dense:"",modelValue:L.selectedCulminado,"onUpdate:modelValue":a[53]||(a[53]=e=>L.selectedCulminado=e)},{control:(0,i.w5)((()=>[(0,i.Wm)(se,{size:"md",modelValue:L.selectedCulminado,"onUpdate:modelValue":[a[51]||(a[51]=e=>L.selectedCulminado=e),a[52]||(a[52]=e=>{this.axiosConfig.headers.disp=this.selectedCulminado,H.getData("/cguias","setDataGuias","datos")})],"true-value":"0","false-value":"",style:{"font-size":"13px"},label:"Culminado"},null,8,["modelValue"])])),_:1},8,["modelValue"])])])),_:1})])),_:1}),(0,i._)("div",I,[(0,i.Wm)(X,{dense:"",color:"primary",disabled:this.disabledCreate,round:"",onClick:a[54]||(a[54]=e=>this.create=!0),padding:"sm",style:{"margin-right":"25px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{size:"40px",name:"add",color:"white"}),(0,i.Wm)(le,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,i.w5)((()=>[N])),_:1})])),_:1},8,["disabled"]),(0,i.Wm)(X,{dense:"",color:"primary",round:"",padding:"sm",disabled:this.disabledDelete,style:{"margin-right":"25px"},onClick:a[55]||(a[55]=e=>{L.selectedAgencia=null,L.selectedCliente=null,L.selectedAgente=null,L.selectedGuiaCarga="",L.selectedGuiaFactura="",L.selectedCulminado="",this.axiosConfig.headers.agencia="",this.axiosConfig.headers.cliente="",this.axiosConfig.headers.agente="",this.axiosConfig.headers.disp="",this.axiosConfig.headers.desde="",this.axiosConfig.headers.hasta="",this.axiosConfig.headers.tipo="",this.guia_desde="",this.guia_hasta="",this.clientes=[],this.agentes=[],H.getData("/cguias","setDataGuias","datos")})},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{size:"40px",name:"filter_alt_off",color:"white"}),(0,i.Wm)(le,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,i.w5)((()=>[$])),_:1})])),_:1},8,["disabled"]),(0,i.Wm)(X,{dense:"",color:"primary",round:"",padding:"sm"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{size:"40px",name:"sticky_note_2",color:"white"}),(0,i.Wm)(le,{class:"bg-primary","transition-show":"scale",style:{"max-height":"30px"},"transition-hide":"scale",color:"primary"},{default:(0,i.w5)((()=>[P])),_:1})])),_:1})])])]),(0,i._)("div",Q,[(0,i._)("div",M,[(0,i._)("div",T,[(0,i.Wm)(pe,{rows:L.datos,"row-key":"id",columns:L.columns,loading:B.loading,separator:B.separator,class:"my-sticky-column-table",filter:B.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:B.pagination,"onUpdate:pagination":a[58]||(a[58]=e=>B.pagination=e)},{loading:(0,i.w5)((()=>[(0,i.Wm)(ne,{showing:"",color:"primary"})])),"body-cell-action":(0,i.w5)((e=>[(0,i.Wm)(re,{props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(X,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{this.resetFormEdit(),H.getDataEdit(`${e.row.id}`),B.edit=!0}},null,8,["disabled","onClick"]),(0,i.Wm)(X,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>L.selected=e.row.id,onClickCapture:a[56]||(a[56]=e=>B.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,i.w5)((e=>[(0,i._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.j5)(e.selected?"transform: scale(0.95);":"")},[(0,i.Wm)(te,{class:(0,o.C_)(e.selected?"bg-grey-2":"")},{default:(0,i.w5)((()=>[(0,i.Wm)(ge,{dense:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cols,(t=>((0,i.wg)(),(0,i.j4)(ue,{key:t.name},{default:(0,i.w5)((()=>[(0,i.Wm)(ce,null,{default:(0,i.w5)((()=>[(0,i.Wm)(de,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(ce,{side:""},{default:(0,i.w5)((()=>["status"===t.name?((0,i.wg)(),(0,i.j4)(me,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,i.wg)(),(0,i.j4)(X,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{this.resetFormEdit(),H.getDataEdit(`${e.row.id}`),B.edit=!0}},null,8,["disabled","onClick"])):(0,i.kq)("",!0),"status"===t.name?((0,i.wg)(),(0,i.j4)(me,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,i.wg)(),(0,i.j4)(X,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>L.selected=e.row.id,onClickCapture:a[57]||(a[57]=e=>B.deletePopup=!0)},null,8,["disabled","onClick"])):((0,i.wg)(),(0,i.j4)(de,{key:4,caption:"",class:(0,o.C_)(t.classes?t.classes:"")},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","filter","grid","pagination"])])])]),(0,i.Wm)(ie,{modelValue:B.deletePopup,"onUpdate:modelValue":a[60]||(a[60]=e=>B.deletePopup=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(te,{style:{width:"700px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(ae,null,{default:(0,i.w5)((()=>[j])),_:1}),(0,i.Wm)(he,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(X,{flat:"",label:"Cancelar",color:"primary"},null,512),[[Ce]]),(0,i.wy)((0,i.Wm)(X,{flat:"",label:"Aceptar",color:"primary",onClick:a[59]||(a[59]=e=>H.deleteData(L.selected))},null,512),[[Ce]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(fe,{ref:"desactiveCrud",onDesactivarCrud:H.desactivarCrud},null,8,["onDesactivarCrud"]),(0,i.Wm)(_e,{ref:"methods",onGetData:a[61]||(a[61]=e=>H.getData("/cguias","setDataGuias","datos")),onGetDataGuias:a[62]||(a[62]=e=>H.getDataGuias("/cguias","setDataGuias","datos")),onSetData:H.setData,onSetDataGuias:H.setDataGuias,onResetLoading:H.resetLoading,onSetDataIniciar:H.setDataIniciar,onSetDataEdit:H.setDataEdit,onSetDataSelect:H.setDataSelect},null,8,["onSetData","onSetDataGuias","onResetLoading","onSetDataIniciar","onSetDataEdit","onSetDataSelect"])])),_:1})}var L=t(1959),H=t(5474),R=(t(4434),t(8825)),Y=t(9841),O=(t(589),t(8015));const K={components:{"desactive-crud":O.Z,methods:Y.Z},name:"AsignacionGuias",data(){return{columns:[{name:"control_inicio",label:"Primer Correlativo",field:"control_inicio",align:"left",sortable:!0},{name:"control_final",label:"Segundo Correlativo",field:"control_final",align:"left",sortable:!0},{name:"cant_asignada",label:"Asignado",field:"cant_asignada",align:"left",sortable:!0},{name:"cant_disponible",label:"Disponible",field:"cant_disponible",align:"left",sortable:!0},{name:"fecha_asignacion",label:"Fecha de Asignación",field:"fecha_asignacion",align:"left",sortable:!0},{name:"fecha_asignacion",label:"Fecha de Asignación",field:"fecha_asignacion",align:"left",sortable:!0},{name:"cant_disponible",label:"Pendiente",field:"cant_disponible",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],tipoGuia:[{label:"GUÍA DE CARGA",value:"20"},{label:"GUÍA DE FACTURA",value:"21"}],form:{control_inicio:"",control_final:"",cant_asignada:"",cant_disponible:"",fecha_asignacion:"",cod_agencia:"",cod_agente:"",cod_cliente:"",tipo:""},formEdit:{control_inicio:"",control_final:"",cant_asignada:"",cant_disponible:"",fecha_asignacion:"",cod_agencia:"",cod_agente:"",cod_cliente:"",tipo:"0",id:""},datos:[],agencias:[],clientes:[],agentes:[],agenciasSelected:[],agentesSelected:[],agentesFormSelected:[],clientesSelected:[],clientesFormSelected:[],clientesForm:[],agentesForm:[],selected:[],selectedAgencia:[],selectedGuiaCarga:"20",selectedGuiaFactura:"",selectedCulminado:"",guia_desde:"",guia_hasta:"",selectedCliente:[],selectedAgente:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,disabledInputsEdit:!1}},setup(){const e=(0,R.Z)();(0,L.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:"",agencia:"",agente:"",cliente:"",disp:"",tipo:"20",desde:"",hasta:""}},pagination:(0,L.iH)({rowsPerPage:10}),separator:(0,L.iH)("vertical"),create:(0,L.iH)(!1),edit:(0,L.iH)(!1),loading:(0,L.iH)(!1),deletePopup:(0,L.iH)(!1),filter:(0,L.iH)(""),correlativoMayor(){e.notify({message:"El Ultimo Correlativo debe ser Mayor al Primero",color:"red"})}}},mounted(){this.getData("/agencias","setDataIniciar","agencias"),this.$refs.desactiveCrud.desactivarCrud("c_asignacionguias","r_asignacionguias","u_asignacionguias","d_asignacionguias","desactivarCrud")},methods:{filterArray(e,a,t,i,s,o){a(""!==e?()=>{const a=e.toUpperCase();for(var t=JSON.parse(JSON.stringify(this[s])),l=0,n=this[s].length;l<n;l++)if(this[s][l][o].indexOf(a)>-1||delete t[l],l==this[s].length-1){this[i]=t;break}}:()=>{this[i]=this[s]})},resetLoading(){this.loading=!1},reglasNotNull10(e){return null===e||""===e?"Debes Escribir Algo":void 0},reglasSegundoCorrelativo(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e<this.form.control_inicio)return"El Ultimo Correlativo debe ser Mayor al Primero";if(e.length>10)return"Deben ser Maximo 10 caracteres"}},reglasSegundoCorrelativoEdit(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e<this.formEdit.control_inicio)return"El Ultimo Correlativo debe ser Mayor al Primero";if(e.length>10)return"Deben ser Maximo 10 caracteres"}},reglasCorrelativoFilter(){this.guia_hasta-this.guia_desde<0&&this.correlativoMayor()},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},desactivarCrud(e,a,t,i){1==a?(1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==i&&(this.disabledEdit=!1)):this.$router.push("/error403")},setDataSelect(e,a){this[a]=e,this.selectedCliente=[],this.selectedAgente=[]},getDataGuias(e,a,t){this.axiosConfig.headers.agencia=this.selectedAgencia.id,this.axiosConfig.headers.cliente=this.selectedCliente.id,this.axiosConfig.headers.agente=this.selectedAgente.id,this.$refs.methods.getData(e,a,t,this.axiosConfig)},getData(e,a,t){this.$refs.methods.getData(e,a,t,this.axiosConfig),"/cguias"==e&&(this.loading=!0)},getDataEdit(e){this.$refs.methods.getDataEdit(`/cguias/${e}`,"setDataEdit","formEdit",this.axiosConfig)},setData(e,a){this[a]=e},setDataGuias(e,a){this[a]=e,this.loading=!1},setDataIniciar(e,a){this[a]=e,this.getDataIniciar()},setDataEdit(e,a){this.loading=!1,this[a].cant_disponible=e.cant_disponible,"0"==this.formEdit.cant_disponible&&(this.disabledInputsEdit=!0),this[a].control_inicio=e.control_inicio,this[a].control_final=e.control_final,this[a].cant_asignada=e.cant_asignada,this.formEdit.fecha_asignacion=e.fecha_asignacion.split("-").reverse().join("-");var t=e.cod_agencia,i=e.cod_agente,s=e.cod_cliente;H.api.get(`/agencias/${t}`,this.axiosConfig).then((e=>{this.formEdit.cod_agencia=e.data,this.axiosConfig.headers.agencia=t,this.getData("/clientes","setData","clientesForm"),this.getData("/agentes","setData","agentesForm"),s&&H.api.get(`/clientes/${s}`,this.axiosConfig).then((e=>{this.formEdit.cod_cliente=e.data})),i&&H.api.get(`/agentes/${i}`,this.axiosConfig).then((e=>{this.formEdit.cod_agente=e.data}))})),this[a].tipo=e.tipos.descripcion,this[a].id=e.id},deleteData(e){this.$refs.methods.deleteData(`/cguias/${e}`,"getData",this.axiosConfig),this.loading=!0},createData(){this.form.fecha_asignacion=this.form.fecha_asignacion.split("-").reverse().join("-"),this.form.cod_cliente=this.form.cod_cliente.id,this.form.cod_agente=this.form.cod_agente.id,this.form.tipo=this.form.tipo.value,this.form.cod_agencia=this.form.cod_agencia.id,this.axiosConfig.headers.agencia=this.selectedAgencia.id,this.selectedAgente.id&&(this.axiosConfig.headers.agente=this.selectedAgente.id),this.selectedCliente.id&&(this.axiosConfig.headers.cliente=this.selectedCliente.id),this.$refs.methods.createData("/cguias",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.formEdit.fecha_asignacion=this.formEdit.fecha_asignacion.split("-").reverse().join("-"),this.formEdit.cod_agencia=this.formEdit.cod_agencia.id,this.formEdit.cod_cliente=this.formEdit.cod_cliente.id,this.formEdit.cod_agente=this.formEdit.cod_agente.id,this.axiosConfig.headers.agencia=this.selectedAgencia.id,this.selectedAgente.id&&(this.axiosConfig.headers.agente=this.selectedAgente.id),this.selectedCliente.id&&(this.axiosConfig.headers.cliente=this.selectedCliente.id),this.formEdit.tipo&&(this.formEdit.tipo=this.formEdit.tipo.value),this.$refs.methods.putData(`/cguias/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.resetFormEdit(),this.loading=!0},resetForm(){this.form.control_inicio="",this.form.control_final="",this.form.cant_asignada="",this.form.cant_disponible="",this.form.fecha_asignacion="",this.form.cod_agencia="",this.form.cod_agente="",this.form.cod_cliente="",this.form.tipo="",this.agentesForm=[],this.clientesForm=[],this.create=!1},resetFormEdit(){this.disabledInputsEdit=!1,this.formEdit.control_inicio="",this.formEdit.control_final="",this.formEdit.cant_asignada="",this.formEdit.cant_disponible="",this.formEdit.fecha_asignacion="",this.formEdit.cod_agencia="",this.formEdit.cod_agente="",this.formEdit.cod_cliente="",this.formEdit.tipo="",this.agentesForm=[],this.clientesForm=[],this.edit=!1},getDataIniciar(){this.axiosConfig.headers.agencia=this.agencias[0].id,this.selectedAgencia=this.agencias[0],this.getData("/clientes","setData","clientes"),this.getData("/agentes","setData","agentes"),this.getData("/cguias","setDataGuias","datos")},dateValidation(e){let a=e;return a[0]+a[1]>31||a[3]+a[4]>12||a.length<10||a[3]+a[4]=="04"&&a[0]+a[1]>30||a[3]+a[4]=="06"&&a[0]+a[1]>30||a[3]+a[4]=="09"&&a[0]+a[1]>30||a[3]+a[4]=="11"&&a[0]+a[1]>30||a[3]+a[4]=="02"&&a[0]+a[1]>28?"Fecha Invalida":void 0}}};var J=t(4260),X=t(4379),ee=t(6778),ae=t(151),te=t(5589),ie=t(5269),se=t(4842),oe=t(4554),le=t(2448),ne=t(3944),re=t(5626),de=t(8240),ce=t(6115),me=t(5735),ue=t(9874),ge=t(7352),pe=t(6941),he=t(3884),fe=t(7011),_e=t(3414),be=t(2035),Ce=t(2350),xe=t(7030),De=t(9367),ye=t(677),ve=t(7518),we=t.n(ve);const Se=(0,J.Z)(K,[["render",B]]),Ee=Se;we()(K,"components",{QPage:X.Z,QDialog:ee.Z,QCard:ae.Z,QCardSection:te.Z,QForm:ie.Z,QInput:se.Z,QIcon:oe.Z,QSelect:le.Z,QPopupProxy:ne.Z,QDate:re.Z,QBtn:de.Z,QField:ce.Z,QCheckbox:me.Z,QTooltip:ue.Z,QTable:ge.Z,QInnerLoading:pe.Z,QTd:he.Z,QList:fe.Z,QItem:_e.Z,QItemSection:be.Z,QItemLabel:Ce.Z,QChip:xe.Z,QCardActions:De.Z}),we()(K,"directives",{ClosePopup:ye.Z})}}]);