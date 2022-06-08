"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[2291],{7389:(e,t,o)=>{function s(e,t,o,s,a,r){return null}o.d(t,{Z:()=>d});var a=o(589),r=o(8825);const l={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}},error:""}},setup(){const e=(0,r.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,t,o,s){for(var r,l,i,n=a.Z.getItem("tokenTraducido"),d=0,m=n.usuario.roles.permisos.length;d<m;d++){if(n.usuario.roles.permisos[d].codigo===e&&(r=!0),1==r)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===r&&(e=!0);for(d=0,m=n.usuario.roles.permisos.length;d<m;d++){if(n.usuario.roles.permisos[d].codigo===t&&(l=!0),1==l)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===l&&(t=!0);for(d=0,m=n.usuario.roles.permisos.length;d<m;d++){if(n.usuario.roles.permisos[d].codigo===o&&(i=!0),1==i)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===i&&(o=!0,this.$emit(s,e,t,o))},desactivarOpciones(e,t,o,s,r,l,i){for(var n,d,m,c,g,u,p=a.Z.getItem("tokenTraducido"),_=0,f=p.usuario.roles.permisos.length;_<f;_++){if(p.usuario.roles.permisos[_].codigo==t&&(n=!0),1==n)break;if(_==p.usuario.roles.permisos.length.length-1)break}!0===n&&(t=!0);for(_=0,f=p.usuario.roles.permisos.length;_<f;_++){if(p.usuario.roles.permisos[_].codigo==o&&(d=!0),1==d)break;if(_==p.usuario.roles.permisos.length.length-1)break}!0===d&&(o=!0);for(_=0,f=p.usuario.roles.permisos.length;_<f;_++){if(p.usuario.roles.permisos[_].codigo===s&&(m=!0),1==m)break;if(_==p.usuario.roles.permisos.length.length-1)break}!0===m&&(s=!0);for(_=0,f=p.usuario.roles.permisos.length;_<f;_++){if(p.usuario.roles.permisos[_].codigo===r&&(c=!0),1==c)break;if(_==p.usuario.roles.permisos.length.length-1)break}!0===c&&(r=!0);for(_=0,f=p.usuario.roles.permisos.length;_<f;_++){if(p.usuario.roles.permisos[_].codigo===l&&(g=!0),1==g)break;if(_==p.usuario.roles.permisos.length.length-1)break}!0===g&&(l=!0);for(_=0,f=p.usuario.roles.permisos.length;_<f;_++){if(p.usuario.roles.permisos[_].codigo===i&&(u=!0),1==u)break;if(_==p.usuario.roles.permisos.length.length-1)break}!0===u&&(i=!0,this.$emit(e,t,o,s,r,l,i))}}};var i=o(4260);const n=(0,i.Z)(l,[["render",s]]),d=n},1444:(e,t,o)=>{function s(e,t,o,s,a,r){return null}o.d(t,{Z:()=>m});var a=o(589),r=o(5474),l=o(8825);const i={name:"userLogout",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}}},setup(){const e=(0,l.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,o,s){r.api.get(e,s).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,t,o,s){r.api.get(e,s).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,t,o){r.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,t,o,s){r.api.post(e,t,s).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,t,o,s){r.api.put(e,t,s).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var n=o(4260);const d=(0,n.Z)(i,[["render",s]]),m=d},2291:(e,t,o)=>{o.r(t),o.d(t,{default:()=>xe});var s=o(3673),a=o(2323);const r={class:"row"},l={class:"col-md-6 col-xs-12"},i={class:"col-md-6 col-xs-12"},n={class:"col-md-6 col-xs-12"},d={class:"col-md-6 col-xs-12"},m={class:"col-md-12 col-xs-12"},c={class:"col-md-12 col-xs-12"},g={class:"row"},u=(0,s._)("div",{class:"col-md-12 col-xs-12",style:{"align-self":"center","text-align":"left","margin-top":"-30px"}},[(0,s._)("h4",{style:{"font-size":"20px"},class:"text-secondary"},[(0,s._)("strong",null,"IDENTIFICACIÓN Y COMISIONES")])],-1),p={class:"col-md-6 col-xs-12"},_={class:"col-md-6 col-xs-12"},f={class:"col-md-4 col-xs-12"},h={class:"col-md-4 col-xs-12"},b={class:"col-md-4 col-xs-12"},A={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},v={class:"row"},w={class:"col-md-6 col-xs-12"},x={class:"col-md-6 col-xs-12"},E={class:"col-md-6 col-xs-12"},C={class:"col-md-6 col-xs-12"},y={class:"col-md-12 col-xs-12"},D={class:"col-md-12 col-xs-12"},V={class:"row"},W=(0,s._)("div",{class:"col-md-12 col-xs-12",style:{"align-self":"center","text-align":"left","margin-top":"-30px"}},[(0,s._)("h4",{style:{"font-size":"20px"},class:"text-secondary"},[(0,s._)("strong",null,"IDENTIFICACIÓN Y COMISIONES")])],-1),k={class:"col-md-6 col-xs-12"},I={class:"col-md-6 col-xs-12"},U={class:"col-md-4 col-xs-12"},S={class:"col-md-4 col-xs-12"},q={class:"col-md-4 col-xs-12"},z={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},Z={class:"row q-pa-sm justify-center"},$={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},Q={class:"row"},R=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,s._)("h4",{style:{"font-size":"26px"}},[(0,s._)("strong",null,"MANTENIMIENTO - AGENTES")])],-1),N={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},T={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},H={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},P={class:"q-pa-md",style:{"margin-top":"20px"}},F={class:"q-gutter-y-md"},j={bordered:"",flat:"",class:"my-card row"},O=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function B(e,t,o,B,L,M){const G=(0,s.up)("q-icon"),Y=(0,s.up)("q-input"),K=(0,s.up)("q-select"),J=(0,s.up)("q-card-section"),X=(0,s.up)("q-card"),ee=(0,s.up)("q-btn"),te=(0,s.up)("q-form"),oe=(0,s.up)("q-dialog"),se=(0,s.up)("q-td"),ae=(0,s.up)("q-item-label"),re=(0,s.up)("q-item-section"),le=(0,s.up)("q-chip"),ie=(0,s.up)("q-item"),ne=(0,s.up)("q-list"),de=(0,s.up)("q-table"),me=(0,s.up)("q-card-actions"),ce=(0,s.up)("desactivate-crud"),ge=(0,s.up)("methods"),ue=(0,s.up)("q-page"),pe=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(ue,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(oe,{modelValue:B.form,"onUpdate:modelValue":t[21]||(t[21]=e=>B.form=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(X,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(J,null,{default:(0,s.w5)((()=>[(0,s.Wm)(te,{onSubmit:t[20]||(t[20]=e=>M.createDataCuentas()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s._)("div",l,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formAgentes.nb_agente,"onUpdate:modelValue":[t[0]||(t[0]=e=>L.formAgentes.nb_agente=e),t[1]||(t[1]=e=>L.formAgentes.nb_agente=L.formAgentes.nb_agente.toUpperCase())],label:"Nombre de Agente",class:"pcform",hint:"","lazy-rules":"",rules:[M.reglaInput]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",i,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formAgentes.fax_agente,"onUpdate:modelValue":[t[2]||(t[2]=e=>L.formAgentes.fax_agente=e),t[3]||(t[3]=e=>L.formAgentes.fax_agente=L.formAgentes.fax_agente.toUpperCase())],label:"Fax",hint:"",mask:"#### - ##########","lazy-rules":"",rules:[M.reglaInput50]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",n,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formAgentes.persona_responsable,"onUpdate:modelValue":[t[4]||(t[4]=e=>L.formAgentes.persona_responsable=e),t[5]||(t[5]=e=>L.formAgentes.persona_responsable=L.formAgentes.persona_responsable.toUpperCase())],label:"Persona Responsable",class:"pcform",hint:"","lazy-rules":"",rules:[M.reglaInput50]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"contact_phone"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",d,[(0,s.Wm)(K,{outlined:"",modelValue:L.formAgentes.flag_activo,"onUpdate:modelValue":t[6]||(t[6]=e=>L.formAgentes.flag_activo=e),label:"Activo",hint:"",rules:[M.reglasSelect],options:L.estatus,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",m,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formAgentes.dir_agente,"onUpdate:modelValue":[t[7]||(t[7]=e=>L.formAgentes.dir_agente=e),t[8]||(t[8]=e=>L.formAgentes.dir_agente=L.formAgentes.dir_agente.toUpperCase())],label:"Dirección",hint:"","lazy-rules":"",rules:[M.reglaInput100]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",c,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formAgentes.email_web,"onUpdate:modelValue":[t[9]||(t[9]=e=>L.formAgentes.email_web=e),t[10]||(t[10]=e=>L.formAgentes.email_web=L.formAgentes.email_web.toUpperCase())],label:"Email",hint:"",type:"email","lazy-rules":"",rules:[M.reglaInput100]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"email"})])),_:1},8,["modelValue","rules"])]),(0,s.Wm)(X,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw","margin-bottom":"20px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(J,null,{default:(0,s.w5)((()=>[(0,s._)("div",g,[u,(0,s._)("div",p,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formAgentes.rif_ci_agente,"onUpdate:modelValue":[t[11]||(t[11]=e=>L.formAgentes.rif_ci_agente=e),t[12]||(t[12]=e=>L.formAgentes.rif_ci_agente=L.formAgentes.rif_ci_agente.toUpperCase())],label:"RIF/CI",hint:"",class:"pcform","lazy-rules":"",rules:[M.reglaInput20]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"account_box"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",_,[(0,s.Wm)(K,{outlined:"",modelValue:L.formAgentes.tipo_agente,"onUpdate:modelValue":t[13]||(t[13]=e=>L.formAgentes.tipo_agente=e),label:"Tipo de Agente",hint:"",rules:[M.reglasSelect],options:L.tipoDeAgente,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"face"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",f,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formAgentes.porc_comision_venta,"onUpdate:modelValue":[t[14]||(t[14]=e=>L.formAgentes.porc_comision_venta=e),t[15]||(t[15]=e=>L.formAgentes.porc_comision_venta=L.formAgentes.porc_comision_venta.toUpperCase())],label:"% Comisión por Venta",hint:"",class:"pcform","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"percent"})])),_:1},8,["modelValue"])]),(0,s._)("div",h,[(0,s.Wm)(Y,{outlined:"",class:"pcform",modelValue:L.formAgentes.porc_comision_entrega,"onUpdate:modelValue":[t[16]||(t[16]=e=>L.formAgentes.porc_comision_entrega=e),t[17]||(t[17]=e=>L.formAgentes.porc_comision_entrega=L.formAgentes.porc_comision_entrega.toUpperCase())],label:"% Comisión por Entrega",hint:"","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"percent"})])),_:1},8,["modelValue"])]),(0,s._)("div",b,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formAgentes.porc_comision_seguro,"onUpdate:modelValue":[t[18]||(t[18]=e=>L.formAgentes.porc_comision_seguro=e),t[19]||(t[19]=e=>L.formAgentes.porc_comision_seguro=L.formAgentes.porc_comision_seguro.toUpperCase())],label:"% Comisión por Seguro",hint:"","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"percent"})])),_:1},8,["modelValue"])])])])),_:1})])),_:1})]),(0,s._)("div",A,[(0,s.Wm)(ee,{label:"Agregar Agente",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(ee,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[pe]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(oe,{modelValue:B.formEdit,"onUpdate:modelValue":t[43]||(t[43]=e=>B.formEdit=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(X,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(J,null,{default:(0,s.w5)((()=>[(0,s.Wm)(te,{onSubmit:t[42]||(t[42]=e=>M.putDataCuentas())},{default:(0,s.w5)((()=>[(0,s._)("div",v,[(0,s._)("div",w,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formEditAgentes.nb_agente,"onUpdate:modelValue":[t[22]||(t[22]=e=>L.formEditAgentes.nb_agente=e),t[23]||(t[23]=e=>L.formEditAgentes.nb_agente=L.formEditAgentes.nb_agente.toUpperCase())],label:"Nombre de Agente",class:"pcform",hint:"","lazy-rules":"",rules:[M.reglaInput]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",x,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formEditAgentes.fax_agente,"onUpdate:modelValue":[t[24]||(t[24]=e=>L.formEditAgentes.fax_agente=e),t[25]||(t[25]=e=>L.formEditAgentes.fax_agente=L.formEditAgentes.fax_agente.toUpperCase())],label:"Fax",mask:"#### - ##########",hint:"","lazy-rules":"",rules:[M.reglaInput50]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",E,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formEditAgentes.persona_responsable,"onUpdate:modelValue":[t[26]||(t[26]=e=>L.formEditAgentes.persona_responsable=e),t[27]||(t[27]=e=>L.formEditAgentes.persona_responsable=L.formEditAgentes.persona_responsable.toUpperCase())],label:"Persona Responsable",class:"pcform",hint:"","lazy-rules":"",rules:[M.reglaInput50]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"contact_phone"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",C,[(0,s.Wm)(K,{outlined:"",modelValue:L.formEditAgentes.flag_activo,"onUpdate:modelValue":t[28]||(t[28]=e=>L.formEditAgentes.flag_activo=e),label:"Activo",hint:"",rules:[M.reglasSelect],options:L.estatus,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",y,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formEditAgentes.dir_agente,"onUpdate:modelValue":[t[29]||(t[29]=e=>L.formEditAgentes.dir_agente=e),t[30]||(t[30]=e=>L.formEditAgentes.dir_agente=L.formEditAgentes.dir_agente.toUpperCase())],label:"Dirección",hint:"","lazy-rules":"",rules:[M.reglaInput100]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",D,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formEditAgentes.email_web,"onUpdate:modelValue":[t[31]||(t[31]=e=>L.formEditAgentes.email_web=e),t[32]||(t[32]=e=>L.formEditAgentes.email_web=L.formEditAgentes.email_web.toUpperCase())],label:"Email",hint:"",type:"email","lazy-rules":"",rules:[M.reglaInput50]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"email"})])),_:1},8,["modelValue","rules"])]),(0,s.Wm)(X,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw","margin-bottom":"20px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(J,null,{default:(0,s.w5)((()=>[(0,s._)("div",V,[W,(0,s._)("div",k,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formEditAgentes.rif_ci_agente,"onUpdate:modelValue":[t[33]||(t[33]=e=>L.formEditAgentes.rif_ci_agente=e),t[34]||(t[34]=e=>L.formAgentes.rif_ci_agente=L.formAgentes.rif_ci_agente.toUpperCase())],label:"RIF/CI",hint:"",class:"pcform","lazy-rules":"",rules:[M.reglaInput20]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"account_box"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",I,[(0,s.Wm)(K,{outlined:"",modelValue:L.formEditAgentes.tipo_agente,"onUpdate:modelValue":t[35]||(t[35]=e=>L.formEditAgentes.tipo_agente=e),label:"Tipo de Agente",hint:"",rules:[M.reglasSelect],options:L.tipoDeAgente,"lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"face"})])),_:1},8,["modelValue","rules","options"])]),(0,s._)("div",U,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formEditAgentes.porc_comision_venta,"onUpdate:modelValue":[t[36]||(t[36]=e=>L.formEditAgentes.porc_comision_venta=e),t[37]||(t[37]=e=>L.formEditAgentes.porc_comision_venta=L.formEditAgentes.porc_comision_venta.toUpperCase())],label:"% Comisión por Venta",hint:"",class:"pcform","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"percent"})])),_:1},8,["modelValue"])]),(0,s._)("div",S,[(0,s.Wm)(Y,{outlined:"",class:"pcform",modelValue:L.formEditAgentes.porc_comision_entrega,"onUpdate:modelValue":[t[38]||(t[38]=e=>L.formEditAgentes.porc_comision_entrega=e),t[39]||(t[39]=e=>L.formEditAgentes.porc_comision_entrega=L.formEditAgentes.porc_comision_entrega.toUpperCase())],label:"% Comisión por Entrega",hint:"","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"percent"})])),_:1},8,["modelValue"])]),(0,s._)("div",q,[(0,s.Wm)(Y,{outlined:"",modelValue:L.formEditAgentes.porc_comision_seguro,"onUpdate:modelValue":[t[40]||(t[40]=e=>L.formEditAgentes.porc_comision_seguro=e),t[41]||(t[41]=e=>L.formEditAgentes.porc_comision_seguro=L.formEditAgentes.porc_comision_seguro.toUpperCase())],label:"% Comisión por Seguro",hint:"","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"percent"})])),_:1},8,["modelValue"])])])])),_:1})])),_:1})]),(0,s._)("div",z,[(0,s.Wm)(ee,{label:"Editar Cuenta",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(ee,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[pe]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",Z,[(0,s._)("div",$,[(0,s._)("div",Q,[R,(0,s._)("div",N,[(0,s.Wm)(K,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:L.agencias,"option-label":"nb_agencia","option-value":"id",modelValue:L.selectedAgencia,"onUpdate:modelValue":[t[44]||(t[44]=e=>L.selectedAgencia=e),t[45]||(t[45]=e=>M.getData(`/agencias/${this.selectedAgencia.id}/agentes`,"setDataAgentes","agentes"))],outlined:"",standout:"",label:"Escoge un Banco"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",T,[(0,s.Wm)(Y,{rounded:"",outlined:"",standout:"",modelValue:B.filter,"onUpdate:modelValue":t[46]||(t[46]=e=>B.filter=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(G,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",H,[(0,s.Wm)(ee,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:t[47]||(t[47]=e=>B.form=!0),onClickCapture:t[48]||(t[48]=e=>M.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,s._)("div",P,[(0,s._)("div",F,[(0,s._)("div",j,[(0,s.Wm)(de,{rows:L.agentes,"row-key":"id",columns:L.columnsAgentes,separator:B.separator,class:"my-sticky-column-table",filter:B.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:B.pagination,"onUpdate:pagination":t[51]||(t[51]=e=>B.pagination=e)},{"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(se,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(ee,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{M.getData(`/agentes/${e.row.id}`,"setDataAgentesEdit","formEditAgentes"),B.formEdit=!0}},null,8,["disabled","onClick"]),(0,s.Wm)(ee,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>L.selected=e.row.id,onClickCapture:t[49]||(t[49]=e=>B.agentesDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,a.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(X,{class:(0,a.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(ne,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(o=>((0,s.wg)(),(0,s.j4)(ie,{key:o.name},{default:(0,s.w5)((()=>[(0,s.Wm)(re,null,{default:(0,s.w5)((()=>[(0,s.Wm)(ae,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(re,{side:""},{default:(0,s.w5)((()=>["status"===o.name?((0,s.wg)(),(0,s.j4)(le,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(ee,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{M.getData(`/agentes/${e.row.id}`,"setDataAgentesEdit","formEditAgentes"),B.formEdit=!0}},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"status"===o.name?((0,s.wg)(),(0,s.j4)(le,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(ee,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>L.selected=e.row.id,onClickCapture:t[50]||(t[50]=e=>B.agentesDelete=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(ae,{key:4,caption:"",class:(0,a.C_)(o.classes?o.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","grid","pagination"])])])])])]),(0,s.Wm)(oe,{modelValue:B.agentesDelete,"onUpdate:modelValue":t[53]||(t[53]=e=>B.agentesDelete=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(X,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(J,null,{default:(0,s.w5)((()=>[O])),_:1}),(0,s.Wm)(me,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(ee,{flat:"",label:"Cancelar",color:"primary"},null,512),[[pe]]),(0,s.wy)((0,s.Wm)(ee,{flat:"",label:"Aceptar",color:"primary",onClick:t[52]||(t[52]=e=>M.deleteData(L.selected))},null,512),[[pe]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(ce,{ref:"desactivateCrud",onDesactivarCrudRoles:M.desactivarCrudRoles},null,8,["onDesactivarCrudRoles"]),(0,s.Wm)(ge,{ref:"methods",onGetData:t[54]||(t[54]=e=>M.getData(`/agencias/${this.selectedAgencia.id}/agentes`,"setDataAgentes","agentes")),onSetDataAgentes:M.setDataAgentes,onSetDataAgentesEdit:M.setDataAgentesEdit,onSetData:M.setData},null,8,["onSetDataAgentes","onSetDataAgentesEdit","onSetData"])])),_:1})}var L=o(1959),M=o(5474),G=o(8825),Y=o(589),K=o(1444),J=o(7389);const X={components:{"desactivate-crud":J.Z,methods:K.Z},name:"Agentes",data(){return{columnsAgentes:[{name:"id",label:"Codigo",field:"id",align:"left",sortable:!0},{name:"nb_agente",label:"Nombre",field:"nb_agente",align:"left",sortable:!0},{name:"persona_responsable",label:"Persona Responsable",field:"persona_responsable",align:"left",sortable:!0},{name:"tipo_desc",label:"Tipo de Cliente",field:"tipo_desc",align:"left",sortable:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formAgentes:{nb_agente:"",persona_responsable:"",dir_agente:"",tlf_agente:"",fax_agente:"",email_web:"",tipo_agente:"",flag_activo:"",rif_ci_agente:"",porc_comision_venta:"",porc_comision_entrega:"",porc_comision_seguro:"",cod_agencia:[]},formEditAgentes:{nb_agente:"",persona_responsable:"",dir_agente:"",tlf_agente:"",fax_agente:"",email_web:"",flag_activo:"",tipo_agente:"",rif_ci_agente:"",porc_comision_venta:"",porc_comision_entrega:"",porc_comision_seguro:"",cod_agencia:[],id:""},estatus:[{label:"ACTIVO",value:"A"},{label:"INACTIVO",value:"I"}],tipoDeAgente:[{label:"RESPONSABLE DE AGENCIA",value:"RP"},{label:"COURIERS",value:"CR"}],agencias:[],agentes:[],selected:[],selectedAgencia:[],agenciaRef:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,G.Z)(),(0,L.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:`Bearer ${Y.Z.getItem("token")}`}},pagination:(0,L.iH)({rowsPerPage:10}),separator:(0,L.iH)("vertical"),form:(0,L.iH)(!1),formEdit:(0,L.iH)(!1),agentesDelete:(0,L.iH)(!1),filter:(0,L.iH)("")}},mounted(){this.getData("/agencias","setData","agencias"),this.$refs.desactivateCrud.desactivarCrud("c_roles","d_roles","u_roles","desactivarCrudRoles")},methods:{reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglaInput(e){if(""===e)return"Debes Escribir Algo";if(null===e)return"Debes Escribir Algo";if(null!==e){if(e.length>25)return"Deben ser máximo 25 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},reglaInput100(e){if(null!==e){if(e.length>100)return"Deben ser máximo 100 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},reglaInput50(e){if(null!==e){if(e.length>50)return"Deben ser máximo 50 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},reglaInput20(e){if(null!==e){if(e.length>20)return"Deben ser máximo 20 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},desactivarCrudRoles(e,t,o){1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==o&&(this.disabledEdit=!1)},getData(e,t,o){this.$refs.methods.getData(e,t,o,this.axiosConfig)},setData(e,t){this[t]=e,this.getDataIniciar()},setDataAgentes(e,t){this[t]=e.agentes},setDataAgentesEdit(e,t){this[t].id=e.id,this[t].flag_activo=e.activo_desc,this[t].nb_agente=e.nb_agente,this[t].persona_responsable=e.persona_responsable,this[t].dir_agente=e.dir_agente,this[t].tlf_agente=e.tlf_agente,this[t].fax_agente=e.fax_agente,this[t].email_web=e.email_web,this[t].rif_ci_agente=e.rif_ci_agente,this[t].porc_comision_venta=e.porc_comision_venta,this[t].porc_comision_seguro=e.porc_comision_seguro,this[t].porc_comision_entrega=e.porc_comision_entrega,this[t].flag_activo=e.activo_desc,this[t].tipo_agente=e.tipo_desc,this[t].cod_agencia=e.cod_agencia},deleteData(e){this.$refs.methods.deleteData(`/agentes/${e}`,"getData",this.axiosConfig)},createDataCuentas(){this.formAgentes.cod_agencia=this.selectedAgencia.id,this.formAgentes.tipo_agente=this.formAgentes.tipo_agente.value,this.formAgentes.flag_activo=this.formAgentes.flag_activo.value,this.$refs.methods.createData("/agentes",this.formAgentes,"getData",this.axiosConfig),this.resetForm()},putDataCuentas(){this.formEditAgentes.flag_activo=this.formEditAgentes.flag_activo.value,this.formEditAgentes.tipo_agente=this.formEditAgentes.tipo_agente.value,this.$refs.methods.putData(`/agentes/${this.formEditAgentes.id}`,this.formEditAgentes,"getData",this.axiosConfig),this.resetFormEdit()},resetForm(){this.formAgentes.nb_agente="",this.formAgentes.persona_responsable="",this.formAgentes.dir_agente="",this.formAgentes.tlf_agente="",this.formAgentes.email_web="",this.formAgentes.tipo_agente="",this.formAgentes.rif_ci_agente="",this.formAgentes.porc_comision_venta="",this.formAgentes.flag_activo="",this.formAgentes.porc_comision_entrega="",this.formAgentes.porc_comision_seguro="",this.formAgentes.cod_agencia=null,this.form=!1},resetFormEdit(){this.formEditAgentes.nb_agente="",this.formEditAgentes.persona_responsable="",this.formEditAgentes.dir_agente="",this.formEditAgentes.tlf_agente="",this.formEditAgentes.email_web="",this.formEditAgentes.tipo_agente="",this.formEditAgentes.rif_ci_agente="",this.formEditAgentes.porc_comision_venta="",this.formEditAgentes.porc_comision_entrega="",this.formEditAgentes.porc_comision_seguro="",this.formEditAgentes.cod_agencia=null,this.formEdit=!1},getDataIniciar(){this.agenciaRef=this.agencias[0].id,this.selectedAgencia=this.agencias[0],M.api.get(`/agencias/${this.agenciaRef}/agentes`,this.axiosConfig).then((e=>{this.agentes=e.data.agentes}))}}};var ee=o(4260),te=o(4379),oe=o(6778),se=o(151),ae=o(5589),re=o(5269),le=o(4842),ie=o(4554),ne=o(2448),de=o(8240),me=o(7352),ce=o(3884),ge=o(7011),ue=o(3414),pe=o(2035),_e=o(2350),fe=o(7030),he=o(9367),be=o(677),Ae=o(7518),ve=o.n(Ae);const we=(0,ee.Z)(X,[["render",B]]),xe=we;ve()(X,"components",{QPage:te.Z,QDialog:oe.Z,QCard:se.Z,QCardSection:ae.Z,QForm:re.Z,QInput:le.Z,QIcon:ie.Z,QSelect:ne.Z,QBtn:de.Z,QTable:me.Z,QTd:ce.Z,QList:ge.Z,QItem:ue.Z,QItemSection:pe.Z,QItemLabel:_e.Z,QChip:fe.Z,QCardActions:he.Z}),ve()(X,"directives",{ClosePopup:be.Z})}}]);