"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[5746],{5511:(e,a,o)=>{o.d(a,{Z:()=>u});var i=o(3673);function t(e,a,o,t,s,r){const l=(0,i.up)("q-input");return(0,i.wg)(),(0,i.j4)(l,{ref:"inputRef",modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),outlined:"",label:"Amount","error-message":t.errorMessage,error:!!t.errorMessage},null,8,["modelValue","error-message","error"])}var s=o(5806),r=o(8500);const l={name:"QCurrencyInput",props:{modelValue:Number,options:Object},setup(e){const{inputRef:a}=(0,s.Er)(e.options),{errorMessage:o,value:i}=(0,r.U$)("amount");return{inputRef:a,errorMessage:o,value:i}}};var d=o(4260),n=o(4842),m=o(7518),p=o.n(m);const c=(0,d.Z)(l,[["render",t]]),u=c;p()(l,"components",{QInput:n.Z})},8015:(e,a,o)=>{function i(e,a,o,i,t,s){return null}o.d(a,{Z:()=>n});var t=o(589),s=o(8825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${t.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,s.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,o,i,s){for(var r,l,d,n,m=t.Z.getItem("tokenTraducido"),p=0,c=m.usuario.roles.permisos.length;p<c;p++)if(m.usuario.roles.permisos[p].codigo===e&&(r=!0),m.usuario.roles.permisos[p].codigo===i&&(d=!0),m.usuario.roles.permisos[p].codigo===o&&(n=!0),m.usuario.roles.permisos[p].codigo===a&&(l=!0),p==m.usuario.roles.permisos.length.length-1)break;e=!0===r,i=!0===d,o=!0===n,a=!0===l,this.$emit(s,e,a,i,o)},desactivarOpciones(e){for(var a=t.Z.getItem("tokenTraducido"),o=0,i=this.permisos.length;o<i;o++){var s=0;for(i=a.usuario.roles.permisos.length;s<i;s++)if(a.usuario.roles.permisos[s].codigo==this.permisos[o].permisoName&&(this.permisos[o].permiso=!0),s==a.usuario.roles.permisos.length.length-1)break;if(o==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var l=o(4260);const d=(0,l.Z)(r,[["render",i]]),n=d},2635:(e,a,o)=>{function i(e,a,o,i,t,s){return null}o.d(a,{Z:()=>m});var t=o(589),s=o(5474),r=o(8825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,o,i){i.headers.Authorization=`Bearer ${t.Z.getItem("token")}`,s.api.get(e,i).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,a,o,i){i.headers.Authorization=`Bearer ${t.Z.getItem("token")}`,s.api.get(e,i).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,a,o){o.headers.Authorization=`Bearer ${t.Z.getItem("token")}`,s.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,a,o,i){i.headers.Authorization=`Bearer ${t.Z.getItem("token")}`,s.api.post(e,a,i).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,a,o,i){i.headers.Authorization=`Bearer ${t.Z.getItem("token")}`,s.api.put(e,a,i).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var d=o(4260);const n=(0,d.Z)(l,[["render",i]]),m=n},5746:(e,a,o)=>{o.r(a),o.d(a,{default:()=>he});var i=o(3673),t=o(2323);const s={class:"row"},r={class:"col-md-4 col-xs-12"},l={class:"col-md-4 col-xs-12"},d={class:"col-md-4 col-xs-12"},n={class:"col-md-4 col-xs-12"},m={class:"col-md-4 col-xs-12"},p={class:"col-md-4 col-xs-12"},c={class:"col-md-4 col-xs-12"},u={class:"col-md-4 col-xs-12"},g={class:"col-md-4 col-xs-12"},_={class:"col-md-6 col-xs-12"},f={class:"col-md-6 col-xs-12"},h={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},b={class:"row"},v={class:"col-md-4 col-xs-12"},E={class:"col-md-4 col-xs-12"},w={class:"col-md-4 col-xs-12"},C={class:"col-md-4 col-xs-12"},S={class:"col-md-4 col-xs-12"},y={class:"col-md-4 col-xs-12"},V={class:"col-md-4 col-xs-12"},W={class:"col-md-4 col-xs-12"},x={class:"col-md-4 col-xs-12"},D={class:"col-md-6 col-xs-12"},A={class:"col-md-6 col-xs-12"},k={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},U={class:"row q-pa-sm justify-center"},N={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},T={class:"row"},Z=(0,i._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,i._)("h4",null,[(0,i._)("strong",null,"MANTENIMIENTO - TARIFAS")])],-1),z={class:"col-md-5 col-sm-7 col-xs-6",style:{"align-self":"center","margin-right":"20px"}},R={class:"col-md-2 col-sm-4 col-xs-5",style:{"text-align":"center","align-self":"center"}},q={class:"q-pa-md"},I={class:"q-gutter-y-md"},O={bordered:"",flat:"",class:"row"},$=(0,i._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function P(e,a,o,P,Q,L){const B=(0,i.up)("q-icon"),H=(0,i.up)("q-select"),M=(0,i.up)("q-input"),j=(0,i.up)("q-btn"),F=(0,i.up)("q-form"),G=(0,i.up)("q-card-section"),K=(0,i.up)("q-card"),X=(0,i.up)("q-dialog"),Y=(0,i.up)("q-inner-loading"),J=(0,i.up)("q-td"),ee=(0,i.up)("q-item-label"),ae=(0,i.up)("q-item-section"),oe=(0,i.up)("q-chip"),ie=(0,i.up)("q-item"),te=(0,i.up)("q-list"),se=(0,i.up)("q-table"),re=(0,i.up)("q-card-actions"),le=(0,i.up)("methods"),de=(0,i.up)("desactivate-crud"),ne=(0,i.up)("q-page"),me=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(ne,{class:"pagina q-pa-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(X,{modelValue:P.create,"onUpdate:modelValue":a[11]||(a[11]=e=>P.create=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(G,null,{default:(0,i.w5)((()=>[(0,i.Wm)(F,{onSubmit:L.createData,class:"q-gutter-md"},{default:(0,i.w5)((()=>[(0,i._)("div",s,[(0,i._)("div",r,[(0,i.Wm)(H,{outlined:"",modelValue:Q.form.tipo_urgencia,"onUpdate:modelValue":a[0]||(a[0]=e=>Q.form.tipo_urgencia=e),label:"Tipo de Urgencia",class:"pcform","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.urgencias,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",l,[(0,i.Wm)(H,{outlined:"",modelValue:Q.form.tipo_tarifa,"onUpdate:modelValue":a[1]||(a[1]=e=>Q.form.tipo_tarifa=e),label:"Tipo de Tarifa",class:"pcform","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.tarifas,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",d,[(0,i.Wm)(H,{outlined:"",modelValue:Q.form.tipo_ubicacion,"onUpdate:modelValue":a[2]||(a[2]=e=>Q.form.tipo_ubicacion=e),label:"Tipo de Ubicación","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.ubicacion,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",n,[(0,i.Wm)(M,{outlined:"",modelValue:Q.form.monto_tarifa,"onUpdate:modelValue":a[3]||(a[3]=e=>Q.form.monto_tarifa=e),label:"Monto de Tarifa",hint:"",type:"number",step:".01",class:"pcform","lazy-rules":""},null,8,["modelValue"])]),(0,i._)("div",m,[(0,i.Wm)(M,{outlined:"",modelValue:Q.form.kgr_hasta,"onUpdate:modelValue":a[4]||(a[4]=e=>Q.form.kgr_hasta=e),label:"Kgrs Hasta",class:"pcform",rules:[L.reglasAllowNull6],hint:"","lazy-rules":"",mask:"#####"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"123"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",p,[(0,i.Wm)(H,{outlined:"",modelValue:Q.form.tipo_carga,"onUpdate:modelValue":a[5]||(a[5]=e=>Q.form.tipo_carga=e),label:"Tipo de Carga","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.cargas,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",c,[(0,i.Wm)(H,{outlined:"",modelValue:Q.form.modalidad_pago,"onUpdate:modelValue":a[6]||(a[6]=e=>Q.form.modalidad_pago=e),label:"Modalidad de Pago",class:"pcform","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.modalidad_pago,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",u,[(0,i.Wm)(H,{outlined:"",modelValue:Q.form.pagado_en,"onUpdate:modelValue":a[7]||(a[7]=e=>Q.form.pagado_en=e),label:"Lugar de Pago",class:"pcform","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.ubicacion_pago,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",g,[(0,i.Wm)(H,{outlined:"",modelValue:Q.form.region_origen,"onUpdate:modelValue":a[8]||(a[8]=e=>Q.form.region_origen=e),label:"Region Origen","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.region_origen,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",_,[(0,i.Wm)(H,{outlined:"",modelValue:Q.form.region_destino,"onUpdate:modelValue":a[9]||(a[9]=e=>Q.form.region_destino=e),label:"Region Destino","input-class":"input",class:"pcform",rules:[L.reglasSelect],hint:"",options:Q.region_destino,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",f,[(0,i.Wm)(M,{outlined:"",modelValue:Q.form.tiempo_servicio,"onUpdate:modelValue":a[10]||(a[10]=e=>Q.form.tiempo_servicio=e),label:"Tiempo (HRS) Servicio",hint:"",type:"number","lazy-rules":"",min:"0"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"badge"})])),_:1},8,["modelValue"])])]),(0,i._)("div",h,[(0,i.Wm)(j,{label:"Agregar Tarifa",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,i.wy)((0,i.Wm)(j,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[me]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(X,{modelValue:P.edit,"onUpdate:modelValue":a[23]||(a[23]=e=>P.edit=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,i.w5)((()=>[(0,i.Wm)(G,null,{default:(0,i.w5)((()=>[(0,i.Wm)(F,{onSubmit:L.putData},{default:(0,i.w5)((()=>[(0,i._)("div",b,[(0,i._)("div",v,[(0,i.Wm)(H,{outlined:"",modelValue:Q.formEdit.tipo_urgencia,"onUpdate:modelValue":a[12]||(a[12]=e=>Q.formEdit.tipo_urgencia=e),label:"Tipo de Urgencia",class:"pcform","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.urgencias,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",E,[(0,i.Wm)(H,{outlined:"",modelValue:Q.formEdit.tipo_tarifa,"onUpdate:modelValue":a[13]||(a[13]=e=>Q.formEdit.tipo_tarifa=e),label:"Tipo de Tarifa",class:"pcform","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.tarifas,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",w,[(0,i.Wm)(H,{outlined:"",modelValue:Q.formEdit.tipo_ubicacion,"onUpdate:modelValue":a[14]||(a[14]=e=>Q.formEdit.tipo_ubicacion=e),label:"Tipo de Ubicación","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.ubicacion,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",C,[(0,i.Wm)(M,{type:"number",outlined:"",step:".01",modelValue:Q.formEdit.monto_tarifa,"onUpdate:modelValue":a[15]||(a[15]=e=>Q.formEdit.monto_tarifa=e),label:"Monto de Tarifa",hint:"",class:"pcform","lazy-rules":""},null,8,["modelValue"])]),(0,i._)("div",S,[(0,i.Wm)(M,{outlined:"",modelValue:Q.formEdit.kgr_hasta,"onUpdate:modelValue":a[16]||(a[16]=e=>Q.formEdit.kgr_hasta=e),label:"Kgrs Hasta",class:"pcform",rules:[L.reglasAllowNull6],hint:"","lazy-rules":"",mask:"#####"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"123"})])),_:1},8,["modelValue","rules"])]),(0,i._)("div",y,[(0,i.Wm)(H,{outlined:"",modelValue:Q.formEdit.tipo_carga,"onUpdate:modelValue":a[17]||(a[17]=e=>Q.formEdit.tipo_carga=e),label:"Tipo de Carga","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.cargas,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",V,[(0,i.Wm)(H,{outlined:"",modelValue:Q.formEdit.modalidad_pago,"onUpdate:modelValue":a[18]||(a[18]=e=>Q.formEdit.modalidad_pago=e),label:"Modalidad de Pago",class:"pcform","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.modalidad_pago,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",W,[(0,i.Wm)(H,{outlined:"",modelValue:Q.formEdit.pagado_en,"onUpdate:modelValue":a[19]||(a[19]=e=>Q.formEdit.pagado_en=e),label:"Lugar de Pago",class:"pcform","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.ubicacion_pago,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",x,[(0,i.Wm)(H,{outlined:"",modelValue:Q.formEdit.region_origen,"onUpdate:modelValue":a[20]||(a[20]=e=>Q.formEdit.region_origen=e),label:"Region Origen","input-class":"input",rules:[L.reglasSelect],hint:"",options:Q.region_origen,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",D,[(0,i.Wm)(H,{outlined:"",modelValue:Q.formEdit.region_destino,"onUpdate:modelValue":a[21]||(a[21]=e=>Q.formEdit.region_destino=e),label:"Region Destino","input-class":"input",class:"pcform",rules:[L.reglasSelect],hint:"",options:Q.region_destino,"lazy-rules":""},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"support_agent"})])),_:1},8,["modelValue","rules","options"])]),(0,i._)("div",A,[(0,i.Wm)(M,{outlined:"",modelValue:Q.formEdit.tiempo_servicio,"onUpdate:modelValue":a[22]||(a[22]=e=>Q.formEdit.tiempo_servicio=e),label:"Tiempo (HRS) Servicio",hint:"",type:"number","lazy-rules":"",min:"0"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"badge"})])),_:1},8,["modelValue"])])]),(0,i._)("div",k,[(0,i.Wm)(j,{label:"Editar Tarifa",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,i.wy)((0,i.Wm)(j,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[me]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i._)("div",U,[(0,i._)("div",N,[(0,i._)("div",T,[Z,(0,i._)("div",z,[(0,i.Wm)(M,{modelValue:P.filter,"onUpdate:modelValue":a[24]||(a[24]=e=>P.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,i.w5)((()=>[(0,i.Wm)(B,{name:"search"})])),_:1},8,["modelValue"])]),(0,i._)("div",R,[(0,i.Wm)(j,{label:"Insertar Tarifa",rounded:"",color:"primary",onClick:a[25]||(a[25]=e=>P.create=!0),onClickCapture:a[26]||(a[26]=e=>L.resetForm()),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,i._)("div",q,[(0,i._)("div",I,[(0,i._)("div",O,[(0,i.Wm)(se,{rows:Q.datos,loading:P.loading,"row-key":"id",columns:Q.columns,separator:P.separator,class:"my-sticky-column-table",filter:P.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:P.pagination,"onUpdate:pagination":a[29]||(a[29]=e=>P.pagination=e)},{loading:(0,i.w5)((()=>[(0,i.Wm)(Y,{showing:"",color:"primary"})])),"body-cell-action":(0,i.w5)((e=>[(0,i.Wm)(J,{props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{L.getData(`/tarifas/${e.row.id}`,"setDataEdit","formEdit"),P.edit=!0}},null,8,["disabled","onClick"]),(0,i.Wm)(j,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>Q.selected=e.row.id,onClickCapture:a[27]||(a[27]=e=>P.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,i.w5)((e=>[(0,i._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,t.j5)(e.selected?"transform: scale(0.95);":"")},[(0,i.Wm)(K,{class:(0,t.C_)(e.selected?"bg-grey-2":"")},{default:(0,i.w5)((()=>[(0,i.Wm)(te,{dense:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cols,(o=>((0,i.wg)(),(0,i.j4)(ie,{key:o.name},{default:(0,i.w5)((()=>[(0,i.Wm)(ae,null,{default:(0,i.w5)((()=>[(0,i.Wm)(ee,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(ae,{side:""},{default:(0,i.w5)((()=>["status"===o.name?((0,i.wg)(),(0,i.j4)(oe,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,i.wg)(),(0,i.j4)(j,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{L.getData(`/tarifas/${e.row.id}`,"setDataEdit","formEdit"),P.edit=!0}},null,8,["disabled","onClick"])):(0,i.kq)("",!0),"status"===o.name?((0,i.wg)(),(0,i.j4)(oe,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,i.wg)(),(0,i.j4)(j,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>Q.selected=e.row.id,onClickCapture:a[28]||(a[28]=e=>P.deletePopup=!0)},null,8,["disabled","onClick"])):((0,i.wg)(),(0,i.j4)(ee,{key:4,caption:"",class:(0,t.C_)(o.classes?o.classes:"")},{default:(0,i.w5)((()=>[(0,i.Uk)((0,t.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])])])])]),(0,i.Wm)(X,{modelValue:P.deletePopup,"onUpdate:modelValue":a[31]||(a[31]=e=>P.deletePopup=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{style:{width:"700px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(G,null,{default:(0,i.w5)((()=>[$])),_:1}),(0,i.Wm)(re,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Cancelar",color:"primary"},null,512),[[me]]),(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Aceptar",color:"primary",onClick:a[30]||(a[30]=e=>L.deleteData(Q.selected))},null,512),[[me]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(le,{ref:"methods",onGetData:a[32]||(a[32]=e=>L.getData("/tarifas","setData","datos")),onSetData:L.setData,onResetLoading:L.resetLoading,onSetDataEdit:L.setDataEdit},null,8,["onSetData","onResetLoading","onSetDataEdit"]),(0,i.Wm)(de,{ref:"desactivateCrud",onDesactivarCrud:L.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var Q=o(1959),L=(o(5474),o(8825)),B=(o(589),o(2635)),H=o(8015),M=o(5511);const j={components:{"desactivate-crud":H.Z,methods:B.Z,"currency-input":M.Z},name:"Bancos",data(){return{columns:[{name:"monto_tarifa",label:"Monto de Tarifa",field:"monto_tarifa",align:"left",sortable:!0},{name:"urgencia_desc",label:"Tipo de Urgencia",field:"urgencia_desc",align:"left",sortable:!0},{name:"tarifa_desc",label:"Tipo de Tarifa",field:"tarifa_desc",align:"left",sortable:!0},{name:"ubicacion_desc",label:"Tipo de Ubicación",field:"ubicacion_desc",align:"left",sortable:!0},{name:"origen_desc",label:"Region Origen",field:"origen_desc",align:"left",sortable:!0},{name:"destino_desc",label:"Region Destino",field:"destino_desc",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{monto_tarifa:"0",tipo_urgencia:[],tipo_tarifa:[],tipo_ubicacion:[],kgr_hasta:"",tipo_carga:[],modalidad_pago:[],pagado_en:[],region_origen:[],region_destino:[],tiempo_servicio:""},urgencias:[{label:"NORMAL",value:"N"},{label:"EMERGENCIA",value:"E"}],tarifas:[{label:"BÁSICA",value:"BA"},{label:"KGRS.ADICIONALES",value:"KA"}],ubicacion:[{label:"URBANA",value:"U"},{label:"EXTRA-URBANA",value:"E"}],cargas:[{label:"PAQUETES",value:"PM"},{label:"SOBRE-BULTOS",value:"SB"}],modalidad_pago:[{label:"CONTADO",value:"CO"},{label:"CREDITO",value:"CR"}],ubicacion_pago:[{label:"ORIGEN",value:"O"},{label:"DESTINO",value:"D"}],region_origen:[{label:"CENTRAL",value:"CE"},{label:"OCCIDENTAL",value:"OC"},{label:"ORIENTAL",value:"OR"}],region_destino:[{label:"CENTRAL",value:"CE"},{label:"OCCIDENTAL",value:"OC"},{label:"ORIENTAL",value:"OR"}],datos:[],formEdit:{id:"",monto_tarifa:"0",tipo_urgencia:[],tipo_tarifa:[],tipo_ubicacion:[],kgr_hasta:"",tipo_carga:[],modalidad_pago:[],pagado_en:[],region_origen:[],region_destino:[],tiempo_servicio:""},selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:""}}}},setup(){(0,L.Z)(),(0,Q.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,Q.iH)({rowsPerPage:10}),separator:(0,Q.iH)("vertical"),create:(0,Q.iH)(!1),loading:(0,Q.iH)(!1),edit:(0,Q.iH)(!1),medium:(0,Q.iH)(!1),deletePopup:(0,Q.iH)(!1),filter:(0,Q.iH)("")}},mounted(){this.getData("/tarifas","setData","datos"),this.$refs.desactivateCrud.desactivarCrud("c_tarifas","r_tarifas","u_tarifas","d_tarifas","desactivarCrud")},methods:{resetLoading(){this.loading=!1},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasAllowNull6(e){if(null!==e&&e.length>0&&e.length>5)return"Deben ser Maximo 6 caracteres"},desactivarCrud(e,a,o,i){1==a?(1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==i&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,a,o){this.$refs.methods.getData(e,a,o,this.axiosConfig),this.loading=!0},setData(e,a){this[a]=e,this.loading=!1},setDataEdit(e,a){this.formEdit.id=e.id,this.formEdit.monto_tarifa=e.monto_tarifa,this.formEdit.kgr_hasta=e.kgr_hasta,this.formEdit.tiempo_servicio=e.tiempo_servicio,this.formEdit.tipo_urgencia=e.urgencia_desc,this.formEdit.tipo_tarifa=e.tarifa_desc,this.formEdit.tipo_ubicacion=e.ubicacion_desc,this.formEdit.tipo_carga=e.carga_desc,this.formEdit.modalidad_pago=e.modalidad_desc,this.formEdit.pagado_en=e.pagado_desc,this.formEdit.region_origen=e.origen_desc,this.formEdit.region_destino=e.destino_desc,this.formEdit.tiempo_servicio=e.tiempo_servicio,this.loading=!1,null==this.formEdit.tiempo_servicio&&(this.formEdit.tiempo_servicio="")},deleteData(e){this.$refs.methods.deleteData(`/tarifas/${e}`,"getData",this.axiosConfig),this.loading=!0},createData(){this.form.tipo_urgencia=this.form.tipo_urgencia.value,this.form.tipo_tarifa=this.form.tipo_tarifa.value,this.form.tipo_ubicacion=this.form.tipo_ubicacion.value,this.form.tipo_carga=this.form.tipo_carga.value,this.form.modalidad_pago=this.form.modalidad_pago.value,this.form.pagado_en=this.form.pagado_en.value,this.form.region_origen=this.form.region_origen.value,this.form.region_destino=this.form.region_destino.value,this.$refs.methods.createData("/tarifas",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.formEdit.tipo_urgencia=this.formEdit.tipo_urgencia.value,this.formEdit.tipo_tarifa=this.formEdit.tipo_tarifa.value,this.formEdit.tipo_ubicacion=this.formEdit.tipo_ubicacion.value,this.formEdit.tipo_carga=this.formEdit.tipo_carga.value,this.formEdit.modalidad_pago=this.formEdit.modalidad_pago.value,this.formEdit.pagado_en=this.formEdit.pagado_en.value,this.formEdit.region_origen=this.formEdit.region_origen.value,this.formEdit.region_destino=this.formEdit.region_destino.value,this.$refs.methods.putData(`/tarifas/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.resetFormEdit(),this.loading=!0},resetForm(){this.form.monto_tarifa="0",this.form.kgr_hasta="",this.form.tiempo_servicio="",this.form.tipo_urgencia="",this.form.tipo_tarifa="",this.form.tipo_ubicacion="",this.form.tipo_carga="",this.form.modalidad_pago="",this.form.pagado_en="",this.form.region_destino="",this.form.region_origen="",this.form.tiempo_servicio="",this.create=!1},resetFormEdit(){this.formEdit.monto_tarifa="0",this.formEdit.kgr_hasta="",this.formEdit.tiempo_servicio="",this.formEdit.tipo_urgencia="",this.formEdit.tipo_tarifa="",this.formEdit.tipo_ubicacion="",this.formEdit.tipo_carga="",this.formEdit.modalidad_pago="",this.formEdit.pagado_en="",this.formEdit.region_destino="",this.formEdit.region_origen="",this.formEdit.tiempo_servicio="",this.create=!1}}};var F=o(4260),G=o(4379),K=o(6778),X=o(151),Y=o(5589),J=o(5269),ee=o(2448),ae=o(4554),oe=o(4842),ie=o(8240),te=o(7352),se=o(6941),re=o(3884),le=o(7011),de=o(3414),ne=o(2035),me=o(2350),pe=o(7030),ce=o(9367),ue=o(677),ge=o(7518),_e=o.n(ge);const fe=(0,F.Z)(j,[["render",P]]),he=fe;_e()(j,"components",{QPage:G.Z,QDialog:K.Z,QCard:X.Z,QCardSection:Y.Z,QForm:J.Z,QSelect:ee.Z,QIcon:ae.Z,QInput:oe.Z,QBtn:ie.Z,QTable:te.Z,QInnerLoading:se.Z,QTd:re.Z,QList:le.Z,QItem:de.Z,QItemSection:ne.Z,QItemLabel:me.Z,QChip:pe.Z,QCardActions:ce.Z}),_e()(j,"directives",{ClosePopup:ue.Z})}}]);