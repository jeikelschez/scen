"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[520],{5511:(e,a,o)=>{o.d(a,{Z:()=>u});var t=o(3673);function l(e,a,o,l,s,i){const r=(0,t.up)("q-input");return(0,t.wg)(),(0,t.j4)(r,{ref:"inputRef",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),outlined:"",label:"Amount","error-message":l.errorMessage,error:!!l.errorMessage},null,8,["modelValue","error-message","error"])}var s=o(5806),i=o(8500);const r={name:"QCurrencyInput",props:{modelValue:Number,options:Object},setup(e){const{inputRef:a}=(0,s.Er)(e.options),{errorMessage:o,value:t}=(0,i.U$)("amount");return{inputRef:a,errorMessage:o,value:t}}};var d=o(4260),n=o(4842),m=o(7518),c=o.n(m);const p=(0,d.Z)(r,[["render",l]]),u=p;c()(r,"components",{QInput:n.Z})},8015:(e,a,o)=>{function t(e,a,o,t,l,s){return null}o.d(a,{Z:()=>n});var l=o(589),s=o(8825);const i={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${l.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,s.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,o,t,s){for(var i,r,d,n,m=l.Z.getItem("tokenTraducido"),c=0,p=m.usuario.roles.permisos.length;c<p;c++)if(m.usuario.roles.permisos[c].codigo===e&&(i=!0),m.usuario.roles.permisos[c].codigo===t&&(d=!0),m.usuario.roles.permisos[c].codigo===o&&(n=!0),m.usuario.roles.permisos[c].codigo===a&&(r=!0),c==m.usuario.roles.permisos.length.length-1)break;e=!0===i,t=!0===d,o=!0===n,a=!0===r,this.$emit(s,e,a,t,o)},desactivarOpciones(e){for(var a=l.Z.getItem("tokenTraducido"),o=0,t=this.permisos.length;o<t;o++){var s=0;for(t=a.usuario.roles.permisos.length;s<t;s++)if(a.usuario.roles.permisos[s].codigo==this.permisos[o].permisoName&&(this.permisos[o].permiso=!0),s==a.usuario.roles.permisos.length.length-1)break;if(o==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var r=o(4260);const d=(0,r.Z)(i,[["render",t]]),n=d},1496:(e,a,o)=>{function t(e,a,o,t,l,s){return null}o.d(a,{Z:()=>m});var l=o(589),s=o(5474),i=o(8825);const r={name:"userLogout",data:function(){return{}},setup(){const e=(0,i.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,o,t){t.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,s.api.get(e,t).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,a,o,t){t.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,s.api.get(e,t).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,a,o){o.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,s.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,o,t){t.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,s.api.post(e,a,t).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,o,t){t.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,s.api.post(e,a,t).then((e=>{(e.status=200)&&this.$emit(o,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,a,o,t){t.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,s.api.put(e,a,t).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.message),this.errorDelServidor()}))}}};var d=o(4260);const n=(0,d.Z)(r,[["render",t]]),m=n},520:(e,a,o)=>{o.r(a),o.d(a,{default:()=>be});var t=o(3673),l=o(2323);const s={class:"row"},i={class:"col-md-6 col-xs-12"},r={class:"col-md-6 col-xs-12"},d={class:"col-md-12 col-xs-12"},n={class:"row"},m=(0,t._)("div",{class:"col-md-12 col-xs-12",style:{"align-self":"center","text-align":"left","margin-top":"-30px"}},[(0,t._)("h4",{style:{"font-size":"20px"},class:"text-secondary"},[(0,t._)("strong",null,"FECHAS DE VALIDEZ")])],-1),c={class:"col-md-6 col-xs-12"},p={class:"col-md-6 col-xs-12"},u={class:"row"},f=(0,t._)("div",{class:"col-md-12 col-xs-12",style:{"align-self":"center","text-align":"left","margin-top":"-30px"}},[(0,t._)("h4",{style:{"font-size":"20px"},class:"text-secondary"},[(0,t._)("strong",null,"RANGOS DE PESO")])],-1),g={class:"col-md-6 col-xs-12"},_={class:"col-md-6 col-xs-12"},h={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},b={class:"row"},v={class:"col-md-6 col-xs-12"},w={class:"col-md-6 col-xs-12"},x={class:"col-md-12 col-xs-12"},y={class:"row"},E=(0,t._)("div",{class:"col-md-12 col-xs-12",style:{"align-self":"center","text-align":"left","margin-top":"-30px"}},[(0,t._)("h4",{style:{"font-size":"20px"},class:"text-secondary"},[(0,t._)("strong",null,"FECHAS DE VALIDEZ")])],-1),D={class:"col-md-6 col-xs-12"},V={class:"col-md-6 col-xs-12"},C={class:"row"},W=(0,t._)("div",{class:"col-md-12 col-xs-12",style:{"align-self":"center","text-align":"left","margin-top":"-30px"}},[(0,t._)("h4",{style:{"font-size":"20px"},class:"text-secondary"},[(0,t._)("strong",null,"RANGOS DE PESO")])],-1),S={class:"col-md-6 col-xs-12"},k={class:"col-md-6 col-xs-12"},q={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},N={class:"row q-pa-sm justify-center"},Z={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},A={class:"row"},U=(0,t._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,t._)("h4",null,[(0,t._)("strong",null,"CONCEPTOS DE FLANQUEO POSTAL OBLIGATORIO")])],-1),$={class:"col-md-5 col-sm-7 col-xs-6",style:{"align-self":"center","margin-right":"20px"}},z={class:"col-md-2 col-sm-4 col-xs-5",style:{"text-align":"center","align-self":"center"}},I={class:"q-pa-md"},P={class:"q-gutter-y-md"},Q={bordered:"",flat:"",class:"row"},F=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function j(e,a,o,j,L,M){const O=(0,t.up)("q-icon"),Y=(0,t.up)("q-input"),R=(0,t.up)("q-date"),B=(0,t.up)("q-popup-proxy"),H=(0,t.up)("q-card-section"),T=(0,t.up)("q-card"),G=(0,t.up)("q-btn"),K=(0,t.up)("q-form"),J=(0,t.up)("q-dialog"),X=(0,t.up)("q-inner-loading"),ee=(0,t.up)("q-td"),ae=(0,t.up)("q-item-label"),oe=(0,t.up)("q-item-section"),te=(0,t.up)("q-chip"),le=(0,t.up)("q-item"),se=(0,t.up)("q-list"),ie=(0,t.up)("q-table"),re=(0,t.up)("q-card-actions"),de=(0,t.up)("methods"),ne=(0,t.up)("desactivate-crud"),me=(0,t.up)("q-page"),ce=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(me,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{modelValue:j.create,"onUpdate:modelValue":a[14]||(a[14]=e=>j.create=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[(0,t.Wm)(K,{onSubmit:M.createData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",s,[(0,t._)("div",i,[(0,t.Wm)(Y,{outlined:"",modelValue:L.form.cod_fpo,"onUpdate:modelValue":[a[0]||(a[0]=e=>L.form.cod_fpo=e),a[1]||(a[1]=e=>L.form.cod_fpo=L.form.cod_fpo.toUpperCase())],label:"Codigo",hint:"",class:"pcform","lazy-rules":"",rules:[M.reglasNotNull6]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",r,[(0,t.Wm)(Y,{outlined:"",modelValue:L.form.valor,"onUpdate:modelValue":a[2]||(a[2]=e=>L.form.valor=e),label:"Valor",step:".01",hint:"",class:"pcform",type:"number",rules:[M.reglasValor],"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"sell"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",d,[(0,t.Wm)(Y,{outlined:"",modelValue:L.form.desc_tipo,"onUpdate:modelValue":[a[3]||(a[3]=e=>L.form.desc_tipo=e),a[4]||(a[4]=e=>L.form.desc_tipo=L.form.desc_tipo.toUpperCase())],label:"Descripción",hint:"",class:"pcform",rules:[M.reglasNotNull40],"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,t.Wm)(T,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw","margin-bottom":"20px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[(0,t._)("div",n,[m,(0,t._)("div",c,[(0,t.Wm)(Y,{outlined:"",label:"Inicial",hint:"",modelValue:L.form.f_val,"onUpdate:modelValue":a[7]||(a[7]=e=>L.form.f_val=e),class:"pcform","lazy-rules":"",mask:"##-##-####",rules:[M.dateValidation]},{append:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{modelValue:L.form.f_val,"onUpdate:modelValue":a[5]||(a[5]=e=>L.form.f_val=e),onInput:a[6]||(a[6]=()=>e.$refs.qDateProxy.hide()),mask:"DD-MM-YYYY"},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",p,[(0,t.Wm)(Y,{outlined:"",label:"Final",hint:"",modelValue:L.form.f_anul,"onUpdate:modelValue":a[10]||(a[10]=e=>L.form.f_anul=e),class:"pcform","lazy-rules":"",mask:"##-##-####",rules:[M.dateValidation]},{append:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{modelValue:L.form.f_anul,"onUpdate:modelValue":a[8]||(a[8]=e=>L.form.f_anul=e),onInput:a[9]||(a[9]=()=>e.$refs.qDateProxy.hide()),mask:"DD-MM-YYYY"},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])])])])),_:1})])),_:1}),(0,t.Wm)(T,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw","margin-bottom":"20px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[(0,t._)("div",u,[f,(0,t._)("div",g,[(0,t.Wm)(Y,{outlined:"",modelValue:L.form.peso_inicio,"onUpdate:modelValue":a[11]||(a[11]=e=>L.form.peso_inicio=e),label:"Inicial",hint:"",class:"pcform",type:"number",step:".01","lazy-rules":"",rules:[M.reglasAllowNull4]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"scale"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",_,[(0,t.Wm)(Y,{outlined:"",modelValue:L.form.peso_fin,"onUpdate:modelValue":a[12]||(a[12]=e=>L.form.peso_fin=e),label:"Final",hint:"",type:"number",step:".01","lazy-rules":"",rules:[M.reglasAllowNull4]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"scale"})])),_:1},8,["modelValue","rules"])])])])),_:1})])),_:1})]),(0,t._)("div",h,[(0,t.Wm)(G,{label:"Agregar Concepto FPO",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(G,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close",onClick:a[13]||(a[13]=e=>M.setData())},null,512),[[ce]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(J,{modelValue:j.edit,"onUpdate:modelValue":a[28]||(a[28]=e=>j.edit=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[(0,t.Wm)(K,{onSubmit:M.putData},{default:(0,t.w5)((()=>[(0,t._)("div",b,[(0,t._)("div",v,[(0,t.Wm)(Y,{outlined:"",modelValue:L.formEdit.cod_fpo,"onUpdate:modelValue":[a[15]||(a[15]=e=>L.formEdit.cod_fpo=e),a[16]||(a[16]=e=>L.formEdit.cod_fpo=L.formEdit.cod_fpo.toUpperCase())],label:"Codigo",hint:"",class:"pcform","lazy-rules":"",rules:[M.reglasNotNull6]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"qr_code_2"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",w,[(0,t.Wm)(Y,{type:"number",outlined:"",modelValue:L.formEdit.valor,"onUpdate:modelValue":a[17]||(a[17]=e=>L.formEdit.valor=e),label:"Valor",step:".01",hint:"",class:"pcform",rules:[M.reglasValorEdit],"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"sell"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",x,[(0,t.Wm)(Y,{outlined:"",modelValue:L.formEdit.desc_tipo,"onUpdate:modelValue":[a[18]||(a[18]=e=>L.formEdit.desc_tipo=e),a[19]||(a[19]=e=>L.formEdit.desc_tipo=L.formEdit.desc_tipo.toUpperCase())],label:"Descripción",hint:"",class:"pcform",rules:[M.reglasNotNull40],"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,t.Wm)(T,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw","margin-bottom":"20px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[(0,t._)("div",y,[E,(0,t._)("div",D,[(0,t.Wm)(Y,{outlined:"",label:"Inicial",hint:"",modelValue:L.formEdit.f_val,"onUpdate:modelValue":a[22]||(a[22]=e=>L.formEdit.f_val=e),class:"pcform","lazy-rules":"",mask:"##-##-####",rules:[M.dateValidation]},{append:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{modelValue:L.formEdit.f_val,"onUpdate:modelValue":a[20]||(a[20]=e=>L.formEdit.f_val=e),onInput:a[21]||(a[21]=()=>e.$refs.qDateProxy.hide()),mask:"DD-MM-YYYY"},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",V,[(0,t.Wm)(Y,{outlined:"",label:"Inicial",hint:"",modelValue:L.formEdit.f_anul,"onUpdate:modelValue":a[25]||(a[25]=e=>L.formEdit.f_anul=e),class:"pcform","lazy-rules":"",mask:"##-##-####",rules:[M.dateValidation]},{append:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{modelValue:L.formEdit.f_anul,"onUpdate:modelValue":a[23]||(a[23]=e=>L.formEdit.f_anul=e),onInput:a[24]||(a[24]=()=>e.$refs.qDateProxy.hide()),mask:"DD-MM-YYYY"},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])])])])),_:1})])),_:1}),(0,t.Wm)(T,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw","margin-bottom":"20px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[(0,t._)("div",C,[W,(0,t._)("div",S,[(0,t.Wm)(Y,{outlined:"",modelValue:L.formEdit.peso_inicio,"onUpdate:modelValue":a[26]||(a[26]=e=>L.formEdit.peso_inicio=e),label:"Inicial",hint:"",class:"pcform",type:"number",step:".01","lazy-rules":"",rules:[M.reglasAllowNull4]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"scale"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",k,[(0,t.Wm)(Y,{outlined:"",modelValue:L.formEdit.peso_fin,"onUpdate:modelValue":a[27]||(a[27]=e=>L.formEdit.peso_fin=e),label:"Final",hint:"",type:"number",step:".01","lazy-rules":"",rules:[M.reglasAllowNull4]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"scale"})])),_:1},8,["modelValue","rules"])])])])),_:1})])),_:1})]),(0,t._)("div",q,[(0,t.Wm)(G,{label:"Editar Concepto FPO",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(G,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[ce]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",N,[(0,t._)("div",Z,[(0,t._)("div",A,[U,(0,t._)("div",$,[(0,t.Wm)(Y,{modelValue:j.filter,"onUpdate:modelValue":a[29]||(a[29]=e=>j.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(O,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",z,[(0,t.Wm)(G,{label:"Insertar Concepto",rounded:"",color:"primary",onClick:a[30]||(a[30]=e=>j.create=!0),onClickCapture:a[31]||(a[31]=e=>M.resetForm()),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,t._)("div",I,[(0,t._)("div",P,[(0,t._)("div",Q,[(0,t.Wm)(ie,{rows:L.datos,"row-key":"id",columns:L.columns,separator:j.separator,loading:j.loading,class:"my-sticky-column-table",filter:j.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:j.pagination,"onUpdate:pagination":a[34]||(a[34]=e=>j.pagination=e)},{loading:(0,t.w5)((()=>[(0,t.Wm)(X,{showing:"",color:"primary"})])),"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(ee,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(G,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{M.getData(`/fpos/${e.row.id}`,"setDataEdit","formEdit"),j.edit=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(G,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>L.selected=e.row.id,onClickCapture:a[32]||(a[32]=e=>j.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,l.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(T,{class:(0,l.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(se,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(o=>((0,t.wg)(),(0,t.j4)(le,{key:o.name},{default:(0,t.w5)((()=>[(0,t.Wm)(oe,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(oe,{side:""},{default:(0,t.w5)((()=>["status"===o.name?((0,t.wg)(),(0,t.j4)(te,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,t.wg)(),(0,t.j4)(G,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{M.getData(`/fpos/${e.row.id}`,"setDataEdit","formEdit"),j.edit=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"status"===o.name?((0,t.wg)(),(0,t.j4)(te,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,t.wg)(),(0,t.j4)(G,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>L.selected=e.row.id,onClickCapture:a[33]||(a[33]=e=>j.deletePopup=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(ae,{key:4,caption:"",class:(0,l.C_)(o.classes?o.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","loading","filter","grid","pagination"])])])])])]),(0,t.Wm)(J,{modelValue:j.deletePopup,"onUpdate:modelValue":a[36]||(a[36]=e=>j.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(H,null,{default:(0,t.w5)((()=>[F])),_:1}),(0,t.Wm)(re,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(G,{flat:"",label:"Cancelar",color:"primary"},null,512),[[ce]]),(0,t.wy)((0,t.Wm)(G,{flat:"",label:"Aceptar",color:"primary",onClick:a[35]||(a[35]=e=>M.deleteData(L.selected))},null,512),[[ce]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(de,{ref:"methods",onGetData:a[37]||(a[37]=e=>M.getData("/fpos","setData","datos")),onSetData:M.setData,onResetLoading:M.resetLoading,onSetDataEdit:M.setDataEdit},null,8,["onSetData","onResetLoading","onSetDataEdit"]),(0,t.Wm)(ne,{ref:"desactivateCrud",onDesactivarCrud:M.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var L=o(1959),M=(o(5474),o(8825)),O=(o(5616),o(589),o(1496)),Y=o(8015),R=o(5511);const B={components:{"desactivate-crud":Y.Z,methods:O.Z,"currency-input":R.Z},name:"Bancos",data(){return{columns:[{name:"cod_fpo",label:"Código",field:"cod_fpo",align:"left",sortable:!0},{name:"desc_tipo",label:"Descripción",field:"desc_tipo",align:"left",sortable:!0},{name:"valor",label:"Valor",field:"valor",align:"left",sortable:!0},{name:"f_anul",label:"Valido Hasta",field:"f_anul",align:"left",sortable:!0},{name:"peso_inicio",label:"Rango de Peso Inicial",field:"peso_inicio",align:"left",sortable:!0},{name:"peso_fin",label:"Rango de Peso Final",field:"peso_fin",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{cod_fpo:"",desc_tipo:"",valor:0,f_val:"",f_anul:"",peso_inicio:0,peso_fin:0},datos:[],formEdit:{id:"",cod_fpo:"",desc_tipo:"",valor:0,f_anul:"",f_val:"",peso_inicio:0,peso_fin:0},selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:""}}}},setup(){(0,M.Z)(),(0,L.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,L.iH)({rowsPerPage:10}),separator:(0,L.iH)("vertical"),create:(0,L.iH)(!1),edit:(0,L.iH)(!1),loading:(0,L.iH)(!1),medium:(0,L.iH)(!1),deletePopup:(0,L.iH)(!1),filter:(0,L.iH)("")}},mounted(){this.getData("/fpos","setData","datos"),this.$refs.desactivateCrud.desactivarCrud("c_concepto_fpo","r_concepto_fpo","u_concepto_fpo","d_concepto_fpo","desactivarCrud")},methods:{dateValidation(e){let a=e;return a[0]+a[1]>31||a[3]+a[4]>12||a.length<10||a[3]+a[4]=="04"&&a[0]+a[1]>30||a[3]+a[4]=="06"&&a[0]+a[1]>30||a[3]+a[4]=="09"&&a[0]+a[1]>30||a[3]+a[4]=="11"&&a[0]+a[1]>30||a[3]+a[4]=="02"&&a[0]+a[1]>28?"Fecha Invalida":void 0},resetLoading(){this.loading=!1},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasValor(e){return null===this.form.valor||""===this.form.valor?"Debes Escribir Algo":null!==this.form.valor!==""&&this.form.valor>9.99?"El valor maximo es 9,99":void 0},reglasValorEdit(e){return null===this.formEdit.valor||""===this.formEdit.valor?"Debes Escribir Algo":null!==this.formEdit.valor!==""&&this.formEdit.valor>9.99?"El valor maximo es 9,99":void 0},reglasNotNull4(e){return null===e||""===e?"Debes Escribir Algo":null!==e!==""&&e>99.99?"Monto Maximo":void 0},reglasAllowNull4(e){if(null!==e!==""&&e>99.99)return"Monto Maximo"},reglasNotNull6(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>5)return"Deben ser Maximo 6 caracteres"}},reglasNotNull40(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>39)return"Deben ser Maximo 40 caracteres"}},desactivarCrud(e,a,o,t){1==a?(1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==t&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,a,o){this.$refs.methods.getData(e,a,o,this.axiosConfig),this.loading=!0},setData(e,a){this[a]=e,this.loading=!1},setDataEdit(e,a){this.loading=!1,this.formEdit.id=e.id,this.formEdit.cod_fpo=e.cod_fpo,this.formEdit.desc_tipo=e.desc_tipo,this.formEdit.valor=e.valor,this.formEdit.f_val=e.f_val.split("-").reverse().join("-"),this.formEdit.f_anul=e.f_anul.split("-").reverse().join("-"),this.formEdit.peso_inicio=e.peso_inicio,this.formEdit.peso_fin=e.peso_fin,this.formEdit.valor=e.valor},deleteData(e){this.$refs.methods.deleteData(`/fpos/${e}`,"getData",this.axiosConfig),this.loading=!0},createData(){this.form.f_val=this.form.f_val.split("-").reverse().join("-"),this.form.f_anul=this.form.f_anul.split("-").reverse().join("-"),this.$refs.methods.createData("/fpos",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.formEdit.f_val=this.formEdit.f_val.split("-").reverse().join("-"),this.formEdit.f_anul=this.formEdit.f_anul.split("-").reverse().join("-"),this.$refs.methods.putData(`/fpos/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.resetFormEdit(),this.loading=!0},resetForm(){this.form.cod_fpo="",this.form.desc_tipo="",this.form.valor="",this.form.f_anul="",this.form.f_val="",this.form.peso_inicio="",this.form.peso_fin="",this.create=!1},resetFormEdit(){this.formEdit.cod_fpo="",this.formEdit.desc_tipo="",this.formEdit.valor="",this.formEdit.f_anul="",this.formEdit.f_val="",this.formEdit.peso_inicio="",this.formEdit.peso_fin=""}}};var H=o(4260),T=o(4379),G=o(6778),K=o(151),J=o(5589),X=o(5269),ee=o(4842),ae=o(4554),oe=o(3944),te=o(5626),le=o(8240),se=o(7352),ie=o(6941),re=o(3884),de=o(7011),ne=o(3414),me=o(2035),ce=o(2350),pe=o(7030),ue=o(9367),fe=o(677),ge=o(7518),_e=o.n(ge);const he=(0,H.Z)(B,[["render",j]]),be=he;_e()(B,"components",{QPage:T.Z,QDialog:G.Z,QCard:K.Z,QCardSection:J.Z,QForm:X.Z,QInput:ee.Z,QIcon:ae.Z,QPopupProxy:oe.Z,QDate:te.Z,QBtn:le.Z,QTable:se.Z,QInnerLoading:ie.Z,QTd:re.Z,QList:de.Z,QItem:ne.Z,QItemSection:me.Z,QItemLabel:ce.Z,QChip:pe.Z,QCardActions:ue.Z}),_e()(B,"directives",{ClosePopup:fe.Z})}}]);