"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[2718],{7389:(e,o,t)=>{function s(e,o,t,s,a,i){return null}t.d(o,{Z:()=>d});var a=t(589),i=t(8825);const l={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}},error:""}},setup(){const e=(0,i.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,o,t,s){for(var i,l,r,c=a.Z.getItem("tokenTraducido"),d=0,n=c.usuario.roles.permisos.length;d<n;d++){if(c.usuario.roles.permisos[d].codigo===e&&(i=!0),1==i)break;if(d==c.usuario.roles.permisos.length.length-1)break}!0===i&&(e=!0);for(d=0,n=c.usuario.roles.permisos.length;d<n;d++){if(c.usuario.roles.permisos[d].codigo===o&&(l=!0),1==l)break;if(d==c.usuario.roles.permisos.length.length-1)break}!0===l&&(o=!0);for(d=0,n=c.usuario.roles.permisos.length;d<n;d++){if(c.usuario.roles.permisos[d].codigo===t&&(r=!0),1==r)break;if(d==c.usuario.roles.permisos.length.length-1)break}!0===r&&(t=!0,this.$emit(s,e,o,t))},desactivarOpciones(e,o,t,s,i,l,r){for(var c,d,n,m,u,p,h=a.Z.getItem("tokenTraducido"),f=0,g=h.usuario.roles.permisos.length;f<g;f++){if(h.usuario.roles.permisos[f].codigo==o&&(c=!0),1==c)break;if(f==h.usuario.roles.permisos.length.length-1)break}!0===c&&(o=!0);for(f=0,g=h.usuario.roles.permisos.length;f<g;f++){if(h.usuario.roles.permisos[f].codigo==t&&(d=!0),1==d)break;if(f==h.usuario.roles.permisos.length.length-1)break}!0===d&&(t=!0);for(f=0,g=h.usuario.roles.permisos.length;f<g;f++){if(h.usuario.roles.permisos[f].codigo===s&&(n=!0),1==n)break;if(f==h.usuario.roles.permisos.length.length-1)break}!0===n&&(s=!0);for(f=0,g=h.usuario.roles.permisos.length;f<g;f++){if(h.usuario.roles.permisos[f].codigo===i&&(m=!0),1==m)break;if(f==h.usuario.roles.permisos.length.length-1)break}!0===m&&(i=!0);for(f=0,g=h.usuario.roles.permisos.length;f<g;f++){if(h.usuario.roles.permisos[f].codigo===l&&(u=!0),1==u)break;if(f==h.usuario.roles.permisos.length.length-1)break}!0===u&&(l=!0);for(f=0,g=h.usuario.roles.permisos.length;f<g;f++){if(h.usuario.roles.permisos[f].codigo===r&&(p=!0),1==p)break;if(f==h.usuario.roles.permisos.length.length-1)break}!0===p&&(r=!0,this.$emit(e,o,t,s,i,l,r))}}};var r=t(4260);const c=(0,r.Z)(l,[["render",s]]),d=c},1444:(e,o,t)=>{function s(e,o,t,s,a,i){return null}t.d(o,{Z:()=>n});var a=t(589),i=t(5474),l=t(8825);const r={name:"userLogout",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}}},setup(){const e=(0,l.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,o,t,s){i.api.get(e,s).then((e=>{this.$emit(o,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,o,t,s){i.api.get(e,s).then((e=>{this.$emit(o,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,o,t){i.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(o),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,o,t,s){i.api.post(e,o,s).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,o,t,s){i.api.put(e,o,s).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var c=t(4260);const d=(0,c.Z)(r,[["render",s]]),n=d},2718:(e,o,t)=>{t.r(o),t.d(o,{default:()=>ie});var s=t(3673),a=t(2323);const i={class:"row"},l={class:"col-md-12 col-xs-12"},r={class:"col-md-6 col-xs-12"},c={class:"col-md-3 col-xs-6",style:{"margin-bottom":"7px"},id:"select"},d={class:"col-md-3 col-xs-6",style:{"margin-bottom":"7px"},id:"select"},n={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},m={class:"row"},u={class:"col-md-12 col-xs-12"},p={class:"col-md-6 col-xs-12"},h={class:"col-md-3 col-xs-6",style:{"margin-bottom":"7px"},id:"select"},f={class:"col-md-3 col-xs-6",style:{"margin-bottom":"7px"},id:"select"},g={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},_={class:"row q-pa-sm justify-center"},b={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},k={class:"row"},w=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,s._)("h4",{style:{"font-size":"26px"}},[(0,s._)("strong",null,"CONCEPTOS DE FACTURACIÓN")])],-1),C={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},v={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},x={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},D={class:"q-pa-md",style:{"margin-top":"20px"}},E={class:"q-gutter-y-md"},y={bordered:"",flat:"",class:"my-card row"},V=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function W(e,o,t,W,S,q){const Z=(0,s.up)("q-icon"),U=(0,s.up)("q-input"),I=(0,s.up)("q-select"),A=(0,s.up)("q-checkbox"),z=(0,s.up)("q-field"),$=(0,s.up)("q-btn"),Q=(0,s.up)("q-form"),N=(0,s.up)("q-card-section"),F=(0,s.up)("q-card"),H=(0,s.up)("q-dialog"),j=(0,s.up)("q-td"),P=(0,s.up)("q-item-label"),T=(0,s.up)("q-item-section"),O=(0,s.up)("q-chip"),R=(0,s.up)("q-item"),B=(0,s.up)("q-list"),L=(0,s.up)("q-table"),M=(0,s.up)("q-card-actions"),G=(0,s.up)("desactivate-crud"),Y=(0,s.up)("methods"),K=(0,s.up)("q-page"),J=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(K,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{modelValue:W.create,"onUpdate:modelValue":o[8]||(o[8]=e=>W.create=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(F,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{onSubmit:o[7]||(o[7]=e=>q.createData()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s._)("div",l,[(0,s.Wm)(U,{outlined:"",modelValue:S.form.desc_concepto,"onUpdate:modelValue":[o[0]||(o[0]=e=>S.form.desc_concepto=e),o[1]||(o[1]=e=>S.form.desc_concepto=S.form.desc_concepto.toUpperCase())],label:"Descripcion de Concepto",hint:"",class:"pcform","lazy-rules":"",rules:[q.reglasNotNull100]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",r,[(0,s.Wm)(I,{"transition-show":"flip-up","transition-hide":"flip-down",options:S.conceptos,"option-label":"desc_concepto","option-value":"id",class:"pcform",modelValue:S.form.cod_concepto,"onUpdate:modelValue":o[2]||(o[2]=e=>S.form.cod_concepto=e),outlined:"",standout:"",rules:[q.reglasSelect],label:"Tipo de Operación"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"format_list_bulleted"})])),_:1},8,["options","modelValue","rules"])]),(0,s._)("div",c,[(0,s.Wm)(z,{rules:[q.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",class:"pcform",modelValue:S.form.check_comision,"onUpdate:modelValue":o[4]||(o[4]=e=>S.form.check_comision=e)},{control:(0,s.w5)((()=>[(0,s.Wm)(A,{size:"lg",modelValue:S.form.check_comision,"onUpdate:modelValue":o[3]||(o[3]=e=>S.form.check_comision=e),"true-value":"1","false-value":"0",style:{"font-size":"13px"},label:"¿GENERA COMISIÓN?"},null,8,["modelValue"])])),_:1},8,["rules","modelValue"])]),(0,s._)("div",d,[(0,s.Wm)(z,{rules:[q.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",modelValue:S.form.check_impuesto,"onUpdate:modelValue":o[6]||(o[6]=e=>S.form.check_impuesto=e)},{control:(0,s.w5)((()=>[(0,s.Wm)(A,{size:"lg",modelValue:S.form.check_impuesto,"onUpdate:modelValue":o[5]||(o[5]=e=>S.form.check_impuesto=e),"true-value":"1","false-value":"0",style:{"font-size":"13px"},label:"¿INFLUYE EN IMPUESTO?"},null,8,["modelValue"])])),_:1},8,["rules","modelValue"])])]),(0,s._)("div",n,[(0,s.Wm)($,{label:"Agregar Concepto",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)($,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[J]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(H,{modelValue:W.edit,"onUpdate:modelValue":o[17]||(o[17]=e=>W.edit=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(F,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{onSubmit:o[16]||(o[16]=e=>q.putData())},{default:(0,s.w5)((()=>[(0,s._)("div",m,[(0,s._)("div",u,[(0,s.Wm)(U,{outlined:"",modelValue:S.formEdit.desc_concepto,"onUpdate:modelValue":[o[9]||(o[9]=e=>S.formEdit.desc_concepto=e),o[10]||(o[10]=e=>S.formEdit.desc_concepto=S.formEdit.desc_concepto.toUpperCase())],label:"Descripcion de Concepto",hint:"",class:"pcform","lazy-rules":"",rules:[q.reglasNotNull100]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",p,[(0,s.Wm)(I,{"transition-show":"flip-up","transition-hide":"flip-down",options:S.conceptos,"option-label":"desc_concepto","option-value":"id",class:"pcform",modelValue:S.formEdit.cod_concepto,"onUpdate:modelValue":o[11]||(o[11]=e=>S.formEdit.cod_concepto=e),outlined:"",standout:"",rules:[q.reglasSelect],label:"Tipo de Operación"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"format_list_bulleted"})])),_:1},8,["options","modelValue","rules"])]),(0,s._)("div",h,[(0,s.Wm)(z,{rules:[q.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",class:"pcform",modelValue:S.formEdit.check_comision,"onUpdate:modelValue":o[13]||(o[13]=e=>S.formEdit.check_comision=e)},{control:(0,s.w5)((()=>[(0,s.Wm)(A,{size:"lg",modelValue:S.formEdit.check_comision,"onUpdate:modelValue":o[12]||(o[12]=e=>S.formEdit.check_comision=e),"true-value":"1","false-value":"0",style:{"font-size":"13px"},label:"¿GENERA COMISIÓN?"},null,8,["modelValue"])])),_:1},8,["rules","modelValue"])]),(0,s._)("div",f,[(0,s.Wm)(z,{rules:[q.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",modelValue:S.formEdit.check_impuesto,"onUpdate:modelValue":o[15]||(o[15]=e=>S.formEdit.check_impuesto=e)},{control:(0,s.w5)((()=>[(0,s.Wm)(A,{size:"lg",modelValue:S.formEdit.check_impuesto,"onUpdate:modelValue":o[14]||(o[14]=e=>S.formEdit.check_impuesto=e),"true-value":"1","false-value":"0",style:{"font-size":"13px"},label:"¿INFLUYE EN IMPUESTO?"},null,8,["modelValue"])])),_:1},8,["rules","modelValue"])])]),(0,s._)("div",g,[(0,s.Wm)($,{label:"Editar Concepto",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)($,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[J]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",_,[(0,s._)("div",b,[(0,s._)("div",k,[w,(0,s._)("div",C,[(0,s.Wm)(I,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:S.conceptos,"option-label":"desc_concepto","option-value":"id",modelValue:S.selectedConcepto,"onUpdate:modelValue":[o[18]||(o[18]=e=>S.selectedConcepto=e),o[19]||(o[19]=e=>q.getDataSelect("/cfacturacion","setData","datos"))],outlined:"",standout:"",label:"Escoge un Concepto"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",v,[(0,s.Wm)(U,{rounded:"",outlined:"",standout:"",modelValue:W.filter,"onUpdate:modelValue":o[20]||(o[20]=e=>W.filter=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(Z,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",x,[(0,s.Wm)($,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:o[21]||(o[21]=e=>W.create=!0),onClickCapture:o[22]||(o[22]=e=>q.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,s._)("div",D,[(0,s._)("div",E,[(0,s._)("div",y,[(0,s.Wm)(L,{rows:S.datos,"row-key":"id",columns:S.columns,separator:W.separator,class:"my-sticky-column-table",filter:W.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:W.pagination,"onUpdate:pagination":o[25]||(o[25]=e=>W.pagination=e)},{"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(j,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)($,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{q.getData(`/cfacturacion/${e.row.id}`,"setDataEdit","formEdit"),W.edit=!0}},null,8,["disabled","onClick"]),(0,s.Wm)($,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>S.selected=e.row.id,onClickCapture:o[23]||(o[23]=e=>W.deleteForm=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,a.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(F,{class:(0,a.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(t=>((0,s.wg)(),(0,s.j4)(R,{key:t.name},{default:(0,s.w5)((()=>[(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[(0,s.Wm)(P,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(T,{side:""},{default:(0,s.w5)((()=>["status"===t.name?((0,s.wg)(),(0,s.j4)(O,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,s.wg)(),(0,s.j4)($,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{q.getData(`/cfacturacion/${e.row.id}`,"setDataEdit","formEdit"),W.edit=!0}},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"status"===t.name?((0,s.wg)(),(0,s.j4)(O,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,s.wg)(),(0,s.j4)($,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>S.selected=e.row.id,onClickCapture:o[24]||(o[24]=e=>W.deleteForm=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(P,{key:4,caption:"",class:(0,a.C_)(t.classes?t.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","grid","pagination"])])])])])]),(0,s.Wm)(H,{modelValue:W.deleteForm,"onUpdate:modelValue":o[27]||(o[27]=e=>W.deleteForm=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(F,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(N,null,{default:(0,s.w5)((()=>[V])),_:1}),(0,s.Wm)(M,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)($,{flat:"",label:"Cancelar",color:"primary"},null,512),[[J]]),(0,s.wy)((0,s.Wm)($,{flat:"",label:"Aceptar",color:"primary",onClick:o[26]||(o[26]=e=>q.deleteData(S.selected))},null,512),[[J]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(G,{ref:"desactivateCrud",onDesactivarCrudRoles:q.desactivarCrudRoles},null,8,["onDesactivarCrudRoles"]),(0,s.Wm)(Y,{ref:"methods",onGetData:o[28]||(o[28]=e=>q.getData("/cfacturacion","setData","datos")),onSetDataIniciar:q.setDataIniciar,onSetDataEdit:q.setDataEdit,onSetData:q.setData},null,8,["onSetDataIniciar","onSetDataEdit","onSetData"])])),_:1})}var S=t(1959),q=(t(5474),t(8825)),Z=t(589),U=t(1444),I=t(7389);const A={components:{"desactivate-crud":I.Z,methods:U.Z},name:"Agentes",data(){return{columns:[{name:"id",label:"Codigo",field:"id",align:"left",sortable:!0},{name:"desc_concepto",label:"Nombre",field:"desc_concepto",align:"left",sortable:!0},{name:"check_comision",label:"Genera Comision",field:"check_comision",align:"left",sortable:!0},{name:"check_impuesto",label:"Influye en el Impuesto",field:"check_impuesto",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{desc_concepto:"",check_comision:"0",check_impuesto:"0",cod_concepto:""},formEdit:{desc_concepto:"",check_comision:"0",check_impuesto:"0",cod_concepto:"",id:""},conceptos:[],datos:[],selected:[],selectedConcepto:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,q.Z)(),(0,S.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:`Bearer ${Z.Z.getItem("token")}`,cod_concepto:"1",tipo:"8"}},pagination:(0,S.iH)({rowsPerPage:10}),separator:(0,S.iH)("vertical"),create:(0,S.iH)(!1),edit:(0,S.iH)(!1),deleteForm:(0,S.iH)(!1),filter:(0,S.iH)("")}},mounted(){this.getData("/coperacion","setDataIniciar","conceptos"),this.getData("/cfacturacion","setData","datos"),this.$refs.desactivateCrud.desactivarCrud("c_roles","d_roles","u_roles","desactivarCrudRoles")},methods:{reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasNotNull100(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>100)return"Deben ser Maximo 100 caracteres"}},desactivarCrudRoles(e,o,t){1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==t&&(this.disabledEdit=!1)},getData(e,o,t){this.$refs.methods.getData(e,o,t,this.axiosConfig)},getDataSelect(e,o,t){this.axiosConfig.headers.cod_concepto=this.selectedConcepto.id,this.$refs.methods.getData(e,o,t,this.axiosConfig)},setDataIniciar(e,o){this[o]=e;for(var t=0,s=this.datos.length;t<s;t++)if("1"===this.datos[t].check_comision&&(this.datos[t].check_comision="✓"),"0"===this.datos[t].check_comision&&(this.datos[t].check_comision=""),"1"===this.datos[t].check_impuesto&&(this.datos[t].check_impuesto="✓"),"0"===this.datos[t].check_impuesto&&(this.datos[t].check_impuesto=""),t==this.datos.length-1)break;this.selectedConcepto=this.conceptos[0].desc_concepto,this.getData("/cfacturacion","setData","datos")},setData(e,o){this[o]=e;for(var t=0,s=this.datos.length;t<s;t++)if("1"===this.datos[t].check_comision&&(this.datos[t].check_comision="✓"),"0"===this.datos[t].check_comision&&(this.datos[t].check_comision=""),"1"===this.datos[t].check_impuesto&&(this.datos[t].check_impuesto="✓"),"0"===this.datos[t].check_impuesto&&(this.datos[t].check_impuesto=""),t==this.datos.length-1)break},setDataEdit(e,o){this[o].id=e.id,this[o].desc_concepto=e.desc_concepto,this[o].check_comision=e.check_comision,this[o].check_impuesto=e.check_impuesto,this[o].cod_concepto=e.conceptos.desc_concepto},deleteData(e){this.$refs.methods.deleteData(`/cfacturacion/${e}`,"getData",this.axiosConfig)},createData(){this.form.cod_concepto=this.form.cod_concepto.id,this.$refs.methods.createData("/cfacturacion",this.form,"getData",this.axiosConfig),this.resetForm()},putData(){this.formEdit.cod_concepto=this.formEdit.cod_concepto.id,this.$refs.methods.putData(`/cfacturacion/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.resetFormEdit()},resetForm(){this.form.desc_concepto="",this.form.check_comision="0",this.form.check_impuesto="0",this.form.cod_concepto="",this.create=!1},resetFormEdit(){this.formEdit.desc_concepto="",this.formEdit.check_comision="0",this.formEdit.check_impuesto="0",this.formEdit.cod_concepto="",this.edit=!1}}};var z=t(4260),$=t(4379),Q=t(6778),N=t(151),F=t(5589),H=t(5269),j=t(4842),P=t(4554),T=t(2448),O=t(6115),R=t(5735),B=t(8240),L=t(7352),M=t(3884),G=t(7011),Y=t(3414),K=t(2035),J=t(2350),X=t(7030),ee=t(9367),oe=t(677),te=t(7518),se=t.n(te);const ae=(0,z.Z)(A,[["render",W]]),ie=ae;se()(A,"components",{QPage:$.Z,QDialog:Q.Z,QCard:N.Z,QCardSection:F.Z,QForm:H.Z,QInput:j.Z,QIcon:P.Z,QSelect:T.Z,QField:O.Z,QCheckbox:R.Z,QBtn:B.Z,QTable:L.Z,QTd:M.Z,QList:G.Z,QItem:Y.Z,QItemSection:K.Z,QItemLabel:J.Z,QChip:X.Z,QCardActions:ee.Z}),se()(A,"directives",{ClosePopup:oe.Z})}}]);