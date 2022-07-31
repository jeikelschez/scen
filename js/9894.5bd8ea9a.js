"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[9894],{7389:(e,a,t)=>{function s(e,a,t,s,i,o){return null}t.d(a,{Z:()=>n});var i=t(589),o=t(8825);const l={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:""}},setup(){const e=(0,o.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,t,s){for(var o,l,r,d=i.Z.getItem("tokenTraducido"),n=0,c=d.usuario.roles.permisos.length;n<c;n++){if(d.usuario.roles.permisos[n].codigo===e&&(o=!0),1==o)break;if(n==d.usuario.roles.permisos.length.length-1)break}!0===o&&(e=!0);for(n=0,c=d.usuario.roles.permisos.length;n<c;n++){if(d.usuario.roles.permisos[n].codigo===a&&(l=!0),1==l)break;if(n==d.usuario.roles.permisos.length.length-1)break}!0===l&&(a=!0);for(n=0,c=d.usuario.roles.permisos.length;n<c;n++){if(d.usuario.roles.permisos[n].codigo===t&&(r=!0),1==r)break;if(n==d.usuario.roles.permisos.length.length-1)break}!0===r&&(t=!0,this.$emit(s,e,a,t))},desactivarOpciones(e,a,t,s,o,l,r){for(var d,n,c,u,m,p,g=i.Z.getItem("tokenTraducido"),f=0,h=g.usuario.roles.permisos.length;f<h;f++){if(g.usuario.roles.permisos[f].codigo==a&&(d=!0),1==d)break;if(f==g.usuario.roles.permisos.length.length-1)break}!0===d&&(a=!0);for(f=0,h=g.usuario.roles.permisos.length;f<h;f++){if(g.usuario.roles.permisos[f].codigo==t&&(n=!0),1==n)break;if(f==g.usuario.roles.permisos.length.length-1)break}!0===n&&(t=!0);for(f=0,h=g.usuario.roles.permisos.length;f<h;f++){if(g.usuario.roles.permisos[f].codigo===s&&(c=!0),1==c)break;if(f==g.usuario.roles.permisos.length.length-1)break}!0===c&&(s=!0);for(f=0,h=g.usuario.roles.permisos.length;f<h;f++){if(g.usuario.roles.permisos[f].codigo===o&&(u=!0),1==u)break;if(f==g.usuario.roles.permisos.length.length-1)break}!0===u&&(o=!0);for(f=0,h=g.usuario.roles.permisos.length;f<h;f++){if(g.usuario.roles.permisos[f].codigo===l&&(m=!0),1==m)break;if(f==g.usuario.roles.permisos.length.length-1)break}!0===m&&(l=!0);for(f=0,h=g.usuario.roles.permisos.length;f<h;f++){if(g.usuario.roles.permisos[f].codigo===r&&(p=!0),1==p)break;if(f==g.usuario.roles.permisos.length.length-1)break}!0===p&&(r=!0,this.$emit(e,a,t,s,o,l,r))}}};var r=t(4260);const d=(0,r.Z)(l,[["render",s]]),n=d},2635:(e,a,t)=>{function s(e,a,t,s,i,o){return null}t.d(a,{Z:()=>c});var i=t(589),o=t(5474),l=t(8825);const r={name:"userLogout",data:function(){return{}},setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,s).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,s).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,a,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,a,t,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.put(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var d=t(4260);const n=(0,d.Z)(r,[["render",s]]),c=n},9894:(e,a,t)=>{t.r(a),t.d(a,{default:()=>be});var s=t(3673),i=t(2323);const o={class:"row"},l={class:"col-md-4 col-xs-12"},r={class:"col-md-4 col-xs-12"},d={class:"col-md-4 col-xs-12"},n={class:"col-md-7 col-xs-12"},c={class:"col-md-5 col-xs-12"},u={class:"col-md-7 col-xs-12"},m={class:"col-md-5 col-xs-12"},p={class:"col-md-4 col-xs-12"},g={class:"col-md-4 col-xs-12"},f={class:"col-md-4 col-xs-12"},h={class:"col-md-5 col-xs-12"},_={class:"col-md-7 col-xs-12"},b={class:"full-width row justify-center items-center content-center"},E={class:"row"},C={class:"col-md-5 col-xs-12"},D={class:"col-md-7 col-xs-12"},w={class:"col-md-5 col-xs-12"},x={class:"col-md-7 col-xs-12"},v={class:"col-md-5 col-xs-12"},y={class:"col-md-7 col-xs-12"},V={class:"col-md-5 col-xs-12"},W={class:"col-md-7 col-xs-12"},k={class:"col-md-5 col-xs-12"},S={class:"col-md-7 col-xs-12"},A={class:"col-md-5 col-xs-12"},U={class:"col-md-7 col-xs-12"},I={class:"full-width row justify-center items-center content-center",style:{"margin-top":"10px"}},z={class:"row q-pa-sm justify-center"},Z={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},q={class:"row"},P=(0,s._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,s._)("h4",null,[(0,s._)("strong",null,"MANTENIMIENTO - AGENCIAS")])],-1),$={class:"col-md-5 col-sm-7 col-xs-6",style:{"align-self":"center","margin-right":"20px"}},Q={class:"col-md-2 col-sm-4 col-xs-5",style:{"text-align":"center","align-self":"center"}},F={class:"q-pa-md"},T={class:"q-gutter-y-md"},H={bordered:"",flat:"",class:"row"},N=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1);function j(e,a,t,j,B,L){const O=(0,s.up)("q-icon"),R=(0,s.up)("q-select"),G=(0,s.up)("q-input"),J=(0,s.up)("q-btn"),M=(0,s.up)("q-form"),K=(0,s.up)("q-card-section"),Y=(0,s.up)("q-card"),X=(0,s.up)("q-dialog"),ee=(0,s.up)("q-inner-loading"),ae=(0,s.up)("q-td"),te=(0,s.up)("q-item-label"),se=(0,s.up)("q-item-section"),ie=(0,s.up)("q-chip"),oe=(0,s.up)("q-item"),le=(0,s.up)("q-list"),re=(0,s.up)("q-table"),de=(0,s.up)("q-card-actions"),ne=(0,s.up)("methods"),ce=(0,s.up)("desactive-crud"),ue=(0,s.up)("q-page"),me=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(ue,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(X,{modelValue:j.create,"onUpdate:modelValue":a[23]||(a[23]=e=>j.create=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(Y,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(K,null,{default:(0,s.w5)((()=>[(0,s.Wm)(M,{onSubmit:L.createDato,class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("div",l,[(0,s.Wm)(R,{outlined:"",modelValue:B.selectedPais,"onUpdate:modelValue":[a[0]||(a[0]=e=>B.selectedPais=e),a[2]||(a[2]=e=>{this.axiosConfig.headers.pais=this.selectedPais.id,L.getData("/estados","setDataEstados","estados")})],label:"País",class:"pcform","input-class":"input",rules:[L.reglasSelect],hint:"",options:B.paisesSelected,onFilter:a[1]||(a[1]=(e,a,t)=>L.filterArray(e,a,t,"paisesSelected","paises","desc_pais")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_pais","option-value":"id","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"public"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",r,[(0,s.Wm)(R,{outlined:"",modelValue:B.selectedEstado,"onUpdate:modelValue":[a[3]||(a[3]=e=>B.selectedEstado=e),a[5]||(a[5]=e=>{this.axiosConfig.headers.estado=this.selectedEstado.id,L.getData("/ciudades","setDataCiudades","ciudades")})],label:"Estado","input-class":"input",rules:[L.reglasSelect],hint:"",class:"pcform",options:B.estadosSelected,onFilter:a[4]||(a[4]=(e,a,t)=>L.filterArray(e,a,t,"estadosSelected","estados","desc_estado")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_estado","option-value":"id","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"public"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",d,[(0,s.Wm)(R,{outlined:"",modelValue:B.selectedCiudad,"onUpdate:modelValue":a[6]||(a[6]=e=>B.selectedCiudad=e),label:"Ciudad","input-class":"input",rules:[L.reglasSelect],hint:"",options:B.ciudadesSelected,onFilter:a[7]||(a[7]=(e,a,t)=>L.filterArray(e,a,t,"ciudadesSelected","ciudades","desc_ciudad")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_ciudad","option-value":"id","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"public"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",n,[(0,s.Wm)(G,{"upper-case":"",outlined:"",modelValue:B.form.nb_agencia,"onUpdate:modelValue":[a[8]||(a[8]=e=>B.form.nb_agencia=e),a[9]||(a[9]=e=>B.form.nb_agencia=B.form.nb_agencia.toUpperCase())],label:"Agencia",class:"pcform",hint:"","lazy-rules":"",rules:[L.reglaInputNombre]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",c,[(0,s.Wm)(G,{outlined:"",modelValue:B.form.persona_contacto,"onUpdate:modelValue":[a[10]||(a[10]=e=>B.form.persona_contacto=e),a[11]||(a[11]=e=>B.form.persona_contacto=B.form.persona_contacto.toUpperCase())],label:"Nombre",rules:[L.reglaInputDireccion],hint:"","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"account_circle"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",u,[(0,s.Wm)(G,{outlined:"",modelValue:B.form.dir_agencia,"onUpdate:modelValue":[a[12]||(a[12]=e=>B.form.dir_agencia=e),a[13]||(a[13]=e=>B.form.dir_agencia=B.form.dir_agencia.toUpperCase())],label:"Dirección",class:"pcform",hint:"","lazy-rules":"",rules:[L.reglaInputDireccion]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",m,[(0,s.Wm)(G,{outlined:"",modelValue:B.form.rif_agencia,"onUpdate:modelValue":[a[14]||(a[14]=e=>B.form.rif_agencia=e),a[15]||(a[15]=e=>B.form.rif_agencia=B.form.rif_agencia.toUpperCase())],label:"Rif",hint:"",rules:[L.reglaInputDireccion],"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"badge"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",p,[(0,s.Wm)(G,{outlined:"",modelValue:B.form.nit_agencia,"onUpdate:modelValue":[a[16]||(a[16]=e=>B.form.nit_agencia=e),a[17]||(a[17]=e=>B.form.nit_agencia=B.form.nit_agencia.toUpperCase())],label:"NIT Agencia",rules:[L.reglaInputDireccion],hint:"",class:"pcform","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"list"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",g,[(0,s.Wm)(G,{outlined:"",modelValue:B.form.fax_agencia,"onUpdate:modelValue":a[18]||(a[18]=e=>B.form.fax_agencia=e),label:"Fax",class:"pcform",hint:"","lazy-rules":"",rules:[L.reglaInputDireccion],mask:"####-#####"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",f,[(0,s.Wm)(G,{outlined:"",modelValue:B.form.tlf_agencia,"onUpdate:modelValue":a[19]||(a[19]=e=>B.form.tlf_agencia=e),label:"Teléfono",hint:"","lazy-rules":"",rules:[L.reglaInputDireccion],mask:"(###) ### - ####"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",h,[(0,s.Wm)(R,{outlined:"",modelValue:B.form.estatus,"onUpdate:modelValue":a[20]||(a[20]=e=>B.form.estatus=e),label:"Estatus",hint:"",class:"pcform",rules:[L.reglasSelect],options:B.estatus,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"done_all"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",_,[(0,s.Wm)(G,{outlined:"",modelValue:B.form.email_agencia,"onUpdate:modelValue":[a[21]||(a[21]=e=>B.form.email_agencia=e),a[22]||(a[22]=e=>B.form.email_agencia=B.form.email_agencia.toUpperCase())],label:"Correo Electrónico",hint:"",type:"email","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"email"})])),_:1},8,["modelValue"])])]),(0,s._)("div",b,[(0,s.Wm)(J,{label:"Agregar Agencia",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(J,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[me]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(X,{modelValue:j.edit,"onUpdate:modelValue":a[47]||(a[47]=e=>j.edit=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(Y,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(K,null,{default:(0,s.w5)((()=>[(0,s.Wm)(M,{onSubmit:L.putDato},{default:(0,s.w5)((()=>[(0,s._)("div",E,[(0,s._)("div",C,[(0,s.Wm)(R,{outlined:"",modelValue:B.selectedPais,"onUpdate:modelValue":[a[24]||(a[24]=e=>B.selectedPais=e),a[26]||(a[26]=e=>{this.axiosConfig.headers.pais=this.selectedPais.id,L.getData("/estados","setDataEstados","estados")})],label:"País",class:"pcform","input-class":"input",rules:[L.reglasSelect],hint:"",options:B.paisesSelected,onFilter:a[25]||(a[25]=(e,a,t)=>L.filterArray(e,a,t,"paisesSelected","paises","desc_pais")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_pais","option-value":"id","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"public"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",D,[(0,s.Wm)(R,{outlined:"",modelValue:B.selectedEstado,"onUpdate:modelValue":[a[27]||(a[27]=e=>B.selectedEstado=e),a[29]||(a[29]=e=>{this.axiosConfig.headers.estado=this.selectedEstado.id,L.getData("/ciudades","setDataCiudades","ciudades")})],label:"Estado","input-class":"input",rules:[L.reglasSelect],hint:"",options:B.estadosSelected,onFilter:a[28]||(a[28]=(e,a,t)=>L.filterArray(e,a,t,"estadosSelected","estados","desc_estado")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_estado","option-value":"id","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"public"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",w,[(0,s.Wm)(R,{outlined:"",modelValue:B.selectedCiudad,"onUpdate:modelValue":a[30]||(a[30]=e=>B.selectedCiudad=e),label:"Ciudad",class:"pcform","input-class":"input",rules:[L.reglasSelect],hint:"",options:B.ciudadesSelected,onFilter:a[31]||(a[31]=(e,a,t)=>L.filterArray(e,a,t,"ciudadesSelected","ciudades","desc_ciudad")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_ciudad","option-value":"id","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"public"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",x,[(0,s.Wm)(G,{outlined:"",modelValue:B.formEdit.nb_agencia,"onUpdate:modelValue":[a[32]||(a[32]=e=>B.formEdit.nb_agencia=e),a[33]||(a[33]=e=>B.formEdit.nb_agencia=B.formEdit.nb_agencia.toUpperCase())],label:"Agencia",hint:"","lazy-rules":"",rules:[L.reglaInputNombre]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",v,[(0,s.Wm)(G,{outlined:"",modelValue:B.formEdit.persona_contacto,"onUpdate:modelValue":[a[34]||(a[34]=e=>B.formEdit.persona_contacto=e),a[35]||(a[35]=e=>B.formEdit.persona_contacto=B.formEdit.persona_contacto.toUpperCase())],label:"Nombre",class:"pcform",hint:"","lazy-rules":"",rules:[L.reglaInputDireccion]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"account_circle"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",y,[(0,s.Wm)(G,{outlined:"",modelValue:B.formEdit.dir_agencia,"onUpdate:modelValue":[a[36]||(a[36]=e=>B.formEdit.dir_agencia=e),a[37]||(a[37]=e=>B.formEdit.dir_agencia=B.formEdit.dir_agencia.toUpperCase())],label:"Dirección",hint:"","lazy-rules":"",rules:[L.reglaInputDireccion]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",V,[(0,s.Wm)(G,{outlined:"",modelValue:B.formEdit.rif_agencia,"onUpdate:modelValue":[a[38]||(a[38]=e=>B.formEdit.rif_agencia=e),a[39]||(a[39]=e=>B.formEdit.rif_agencia=B.formEdit.rif_agencia.toUpperCase())],label:"Rif",hint:"",class:"pcform","lazy-rules":"",rules:[L.reglaInputDireccion]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"badge"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",W,[(0,s.Wm)(G,{outlined:"",modelValue:B.formEdit.nit_agencia,"onUpdate:modelValue":[a[40]||(a[40]=e=>B.formEdit.nit_agencia=e),a[41]||(a[41]=e=>B.formEdit.nit_agencia=B.formEdit.nit_agencia.toUpperCase())],label:"NIT Agencia",hint:"","lazy-rules":"",rules:[L.reglaInputDireccion]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"list"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",k,[(0,s.Wm)(G,{outlined:"",modelValue:B.formEdit.fax_agencia,"onUpdate:modelValue":a[42]||(a[42]=e=>B.formEdit.fax_agencia=e),label:"Fax",class:"pcform",hint:"","lazy-rules":"",rules:[L.reglaInputDireccion],mask:"####-#####"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",S,[(0,s.Wm)(G,{outlined:"",modelValue:B.formEdit.tlf_agencia,"onUpdate:modelValue":a[43]||(a[43]=e=>B.formEdit.tlf_agencia=e),label:"Teléfono",hint:"","lazy-rules":"",rules:[L.reglaInputDireccion],mask:"(###) ### - ######"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",A,[(0,s.Wm)(R,{outlined:"",modelValue:B.formEdit.estatus,"onUpdate:modelValue":a[44]||(a[44]=e=>B.formEdit.estatus=e),input:"",label:"Estatus",hint:"",rules:[L.reglasSelect],options:B.estatus,class:"pcform","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"done_all"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",U,[(0,s.Wm)(G,{outlined:"",modelValue:B.formEdit.email_agencia,"onUpdate:modelValue":[a[45]||(a[45]=e=>B.formEdit.email_agencia=e),a[46]||(a[46]=e=>B.formEdit.email_agencia=B.formEdit.email_agencia.toUpperCase())],label:"Correo Electrónico",hint:"",type:"email","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"email"})])),_:1},8,["modelValue"])])]),(0,s._)("div",I,[(0,s.Wm)(J,{label:"Editar Agencia",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(J,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[me]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",z,[(0,s._)("div",Z,[(0,s._)("div",q,[P,(0,s._)("div",$,[(0,s.Wm)(G,{modelValue:j.filter,"onUpdate:modelValue":a[48]||(a[48]=e=>j.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(O,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",Q,[(0,s.Wm)(J,{label:"Insertar Agencia",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:a[49]||(a[49]=e=>j.create=!0),onClickCapture:a[50]||(a[50]=e=>this.resetForm())},null,8,["disabled"])])]),(0,s._)("div",F,[(0,s._)("div",T,[(0,s._)("div",H,[(0,s.Wm)(re,{rows:B.datos,loading:j.loading,"row-key":"id",columns:B.columns,separator:j.separator,class:"my-sticky-column-table",filter:j.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:j.pagination,"onUpdate:pagination":a[53]||(a[53]=e=>j.pagination=e)},{loading:(0,s.w5)((()=>[(0,s.Wm)(ee,{showing:"",color:"primary"})])),"body-cell-action":(0,s.w5)((t=>[(0,s.Wm)(ae,{props:t},{default:(0,s.w5)((()=>[(0,s.Wm)(J,{dense:"",round:"",flat:"",color:"primary",icon:"edit",onClickCapture:L.resetFormEdit,disabled:this.disabledEdit,onClick:e=>{L.getDataEdit(t.row.id),j.edit=!0}},null,8,["onClickCapture","disabled","onClick"]),(0,s.Wm)(J,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>e.selected=t.row.id,onClickCapture:a[51]||(a[51]=e=>j.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((t=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(t.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(Y,{class:(0,i.C_)(t.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(le,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.cols,(o=>((0,s.wg)(),(0,s.j4)(oe,{key:o.name},{default:(0,s.w5)((()=>[(0,s.Wm)(se,null,{default:(0,s.w5)((()=>[(0,s.Wm)(te,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(se,{side:""},{default:(0,s.w5)((()=>["status"===o.name?((0,s.wg)(),(0,s.j4)(ie,{key:0,color:"Active"==t.row.status?"green":"Disable"==t.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(J,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClickCapture:L.resetFormEdit,onClick:e=>{L.getDataEdit(t.row.id),j.edit=!0}},null,8,["disabled","onClickCapture","onClick"])):(0,s.kq)("",!0),"status"===o.name?((0,s.wg)(),(0,s.j4)(ie,{key:2,color:"Active"==t.row.status?"green":"Disable"==t.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(J,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>e.selected=t.row.id,onClickCapture:a[52]||(a[52]=e=>j.deletePopup=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(te,{key:4,caption:"",class:(0,i.C_)(o.classes?o.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])])])])]),(0,s.Wm)(X,{modelValue:j.deletePopup,"onUpdate:modelValue":a[55]||(a[55]=e=>j.deletePopup=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(Y,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(K,null,{default:(0,s.w5)((()=>[N])),_:1}),(0,s.Wm)(de,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(J,{flat:"",label:"Cancelar",color:"primary"},null,512),[[me]]),(0,s.wy)((0,s.Wm)(J,{flat:"",label:"Aceptar",color:"primary",onClick:a[54]||(a[54]=a=>L.deleteDato(e.selected))},null,512),[[me]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(ne,{ref:"methods",onGetData:a[56]||(a[56]=e=>L.getData("/agencias","setData","datos")),onSetData:L.setData,onResetLoading:L.resetLoading,onSetDataEdit:L.setDataEdit,onSetDataEditCiudades:L.setDataEditCiudades,onSetDataEditEstados:L.setDataEditEstados,onSetDataEstados:L.setDataEstados,onSetDataCiudades:L.setDataCiudades},null,8,["onSetData","onResetLoading","onSetDataEdit","onSetDataEditCiudades","onSetDataEditEstados","onSetDataEstados","onSetDataCiudades"]),(0,s.Wm)(ce,{ref:"desactiveCrud",onDesactivarCrudAgencias:L.desactivarCrudAgencias},null,8,["onDesactivarCrudAgencias"])])),_:1})}var B=t(1959),L=t(8825),O=t(2635),R=t(7389);t(589);const G={components:{"desactive-crud":R.Z,methods:O.Z},name:"Bancos",data(){return{columns:[{name:"Ciudades",label:"Ciudad",field:e=>e.ciudades.desc_ciudad,align:"left",sortable:!0},{name:"nb_agencia",label:"Agencia",field:"nb_agencia",align:"left",sortable:!0},{name:"tlf_agencia",label:"Teléfono",field:"tlf_agencia",align:"left",sortable:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",type:"string"},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{cod_ciudad:"",nb_agencia:"",persona_contacto:"",dir_agencia:"",fax_agencia:"",email_agencia:"",tlf_agencia:"",rif_agencia:"",nit_agencia:"",estatus:""},formEdit:{id:"",cod_ciudad:"",nb_agencia:"",persona_contacto:"",dir_agencia:"",fax_agencia:"",email_agencia:"",tlf_agencia:"",rif_agencia:"",nit_agencia:"",estatus:""},estatus:[{label:"ACTIVA",value:"A"},{label:"INACTIVA",value:"I"}],paises:[],estados:[],ciudades:[],datos:[],paisesSelected:[],estadosSelected:[],ciudadesSelected:[],selectedPais:[],selectedEstado:[],selectedCiudad:[],selectedPaisEdit:"",selectedEstadoEdit:"",selectedCiudadEdit:"",CiudadEdit:"",EstadoEdit:"",PaisEdit:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:"",pais:"",estado:""}}}},setup(){const e=(0,L.Z)();(0,B.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,B.iH)({rowsPerPage:10}),loading:(0,B.iH)(!1),separator:(0,B.iH)("vertical"),create:(0,B.iH)(!1),edit:(0,B.iH)(!1),reglasInputs:[e=>null!==e&&""!==e||"Debes escribir algo",e=>e.length<=50||"Deben ser máximo 50 caracteres"],errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},deletePopup:(0,B.iH)(!1),filter:(0,B.iH)("")}},mounted(){this.getData("/agencias","setData","datos"),this.getData("/paises","setData","paises"),this.$refs.desactiveCrud.desactivarCrud("c_agencias","d_agencias","u_agencias","desactivarCrudAgencias")},methods:{filterArray(e,a,t,s,i,o){a(""!==e?()=>{const a=e.toUpperCase();for(var t=JSON.parse(JSON.stringify(this[i])),l=0,r=this[i].length;l<r;l++)if(this[i][l][o].indexOf(a)>-1||delete t[l],l==this[i].length-1){this[s]=t;break}}:()=>{this[s]=this[i]})},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglaInputDireccion(e){if(null!==e){if(e.length>200)return"Deben ser máximo 200 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},reglaInputNombre(e){if(null!==e){if(null===e)return"Debes escribir algo";if(""===e)return"Debes escribir Algo";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},desactivarCrudAgencias(e,a,t){1==e&&(this.disabledCreate=!1),1==a&&(this.disabledDelete=!1),1==t&&(this.disabledEdit=!1)},getData(e,a,t){this.$refs.methods.getData(e,a,t,this.axiosConfig),this.loading=!0},setData(e,a){this[a]=e,this.loading=!1},getDataEdit(e){this.$refs.methods.getDataEdit(`/agencias/${e}`,"setDataEdit","formEdit",this.axiosConfig)},setDataEdit(e,a){this[a].id=e.id,this[a].nb_agencia=e.nb_agencia,this[a].persona_contacto=e.persona_contacto,this[a].dir_agencia=e.dir_agencia,this[a].fax_agencia=e.fax_agencia,this[a].email_agencia=e.email_agencia,this[a].tlf_agencia=e.tlf_agencia,this[a].rif_agencia=e.rif_agencia,this[a].nit_agencia=e.nit_agencia,this[a].estatus=e.activo_desc,this.selectedCiudadEdit=e.ciudades.cod_estado,this.selectedCiudad=e.ciudades.desc_ciudad,this.ciudadEdit=e.ciudades.id,this.axiosConfig.headers.estado=this.selectedCiudadEdit,this.$refs.methods.getDataEdit("/ciudades","setDataEditCiudades","ciudades",this.axiosConfig)},setDataEditCiudades(e,a){this[a]=e,this.selectedEstadoEdit=e[0].estados.cod_pais,this.selectedEstado=e[0].estados.desc_estado,this.axiosConfig.headers.pais=this.selectedEstadoEdit,this.$refs.methods.getDataEdit("/estados","setDataEditEstados","estados",this.axiosConfig)},setDataEditEstados(e,a){this[a]=e,this.selectedPais=e[0].paises.desc_pais},setDataEstados(e,a){this[a]=e,this.selectedEstado="",this.selectedCiudad="",this.ciudades=""},setDataCiudades(e,a){this.selectedCiudad="",this[a]=e},deleteDato(e){this.$refs.methods.deleteData(`/agencias/${e}`,"getData",this.axiosConfig),this.loading=!0},resetLoading(){this.loading=!1},createDato(){this.form.cod_ciudad=this.selectedCiudad.id,this.form.estatus=this.form.estatus.value,this.$refs.methods.createData("/agencias",this.form,"getData",this.axiosConfig),this.loading=!0,this.resetForm()},putDato(){this.formEdit.cod_ciudad=this.selectedCiudad.id,this.formEdit.estatus=this.formEdit.estatus.value,this.$refs.methods.putData(`/agencias/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.loading=!0,this.edit=!1},resetForm(){this.selectedPais=null,this.selectedEstado=null,this.selectedCiudad=null,this.estados=null,this.ciudades=null,this.form.persona_contacto="",this.form.nb_agencia="",this.form.persona_contacto="",this.form.dir_agencia="",this.form.fax_agencia="",this.form.email_agencia="",this.form.tlf_agencia="",this.form.rif_agencia="",this.form.nit_agencia="",this.form.estatus="",this.create=null},resetFormEdit(){this.selectedPais=null,this.selectedEstado=null,this.selectedCiudad=null,this.formEdit.persona_contacto="",this.formEdit.dir_agencia="",this.formEdit.fax_agencia="",this.formEdit.email_agencia="",this.formEdit.tlf_agencia="",this.formEdit.rif_agencia="",this.formEdit.nit_agencia="",this.formEdit.nb_agencia="",this.formEdit.estatus=null}}};var J=t(4260),M=t(4379),K=t(6778),Y=t(151),X=t(5589),ee=t(5269),ae=t(2448),te=t(4554),se=t(4842),ie=t(8240),oe=t(7352),le=t(6941),re=t(3884),de=t(7011),ne=t(3414),ce=t(2035),ue=t(2350),me=t(7030),pe=t(9367),ge=t(677),fe=t(7518),he=t.n(fe);const _e=(0,J.Z)(G,[["render",j]]),be=_e;he()(G,"components",{QPage:M.Z,QDialog:K.Z,QCard:Y.Z,QCardSection:X.Z,QForm:ee.Z,QSelect:ae.Z,QIcon:te.Z,QInput:se.Z,QBtn:ie.Z,QTable:oe.Z,QInnerLoading:le.Z,QTd:re.Z,QList:de.Z,QItem:ne.Z,QItemSection:ce.Z,QItemLabel:ue.Z,QChip:me.Z,QCardActions:pe.Z}),he()(G,"directives",{ClosePopup:ge.Z})}}]);