"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[4724],{7389:(e,t,o)=>{function s(e,t,o,s,i,a){return null}o.d(t,{Z:()=>n});var i=o(589),a=o(8825);const l={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:""}},setup(){const e=(0,a.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,t,o,s){for(var a,l,r,d=i.Z.getItem("tokenTraducido"),n=0,c=d.usuario.roles.permisos.length;n<c;n++){if(d.usuario.roles.permisos[n].codigo===e&&(a=!0),1==a)break;if(n==d.usuario.roles.permisos.length.length-1)break}!0===a&&(e=!0);for(n=0,c=d.usuario.roles.permisos.length;n<c;n++){if(d.usuario.roles.permisos[n].codigo===t&&(l=!0),1==l)break;if(n==d.usuario.roles.permisos.length.length-1)break}!0===l&&(t=!0);for(n=0,c=d.usuario.roles.permisos.length;n<c;n++){if(d.usuario.roles.permisos[n].codigo===o&&(r=!0),1==r)break;if(n==d.usuario.roles.permisos.length.length-1)break}!0===r&&(o=!0,this.$emit(s,e,t,o))},desactivarOpciones(e,t,o,s,a,l,r){for(var d,n,c,m,p,u,f=i.Z.getItem("tokenTraducido"),h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo==t&&(d=!0),1==d)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===d&&(t=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo==o&&(n=!0),1==n)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===n&&(o=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===s&&(c=!0),1==c)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===c&&(s=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===a&&(m=!0),1==m)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===m&&(a=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===l&&(p=!0),1==p)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===p&&(l=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===r&&(u=!0),1==u)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===u&&(r=!0,this.$emit(e,t,o,s,a,l,r))}}};var r=o(4260);const d=(0,r.Z)(l,[["render",s]]),n=d},1444:(e,t,o)=>{function s(e,t,o,s,i,a){return null}o.d(t,{Z:()=>c});var i=o(589),a=o(5474),l=o(8825);const r={name:"userLogout",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}}},setup(){const e=(0,l.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,o,s){a.api.get(e,s).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,t,o,s){a.api.get(e,s).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,t,o){a.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,t,o,s){a.api.post(e,t,s).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,t,o,s){a.api.put(e,t,s).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var d=o(4260);const n=(0,d.Z)(r,[["render",s]]),c=n},4724:(e,t,o)=>{o.r(t),o.d(t,{default:()=>se});var s=o(3673),i=o(2323);const a={class:"row"},l={class:"col-md-6 col-xs-12"},r={class:"col-md-6 col-xs-12"},d={class:"col-md-12 col-xs-12 displayHide",style:{"margin-bottom":"7px"},id:"select"},n={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},c={class:"row"},m={class:"col-md-6 col-xs-12"},p={class:"col-md-6 col-xs-12"},u={class:"col-md-12 col-xs-12 displayHide",style:{"margin-bottom":"20px"},id:"selectEdit"},f={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},h={class:"row q-pa-sm justify-center"},g={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},b={class:"row"},D=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,s._)("h4",{style:{"font-size":"30px"}},[(0,s._)("strong",null,"CONCEPTOS POR OPERACIÓN")])],-1),C={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},E={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},w={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},y={class:"q-pa-md",style:{"margin-top":"20px"}},_={class:"q-gutter-y-md"},v={bordered:"",flat:"",class:"my-card row"},x=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function S(e,t,o,S,k,W){const A=(0,s.up)("q-icon"),V=(0,s.up)("q-input"),q=(0,s.up)("q-select"),Z=(0,s.up)("q-checkbox"),I=(0,s.up)("q-field"),H=(0,s.up)("q-btn"),T=(0,s.up)("q-form"),O=(0,s.up)("q-card-section"),L=(0,s.up)("q-card"),$=(0,s.up)("q-dialog"),Q=(0,s.up)("q-td"),U=(0,s.up)("q-item-label"),z=(0,s.up)("q-item-section"),B=(0,s.up)("q-chip"),P=(0,s.up)("q-item"),N=(0,s.up)("q-list"),j=(0,s.up)("q-table"),R=(0,s.up)("q-card-actions"),F=(0,s.up)("desactivate-crud"),G=(0,s.up)("methods"),Y=(0,s.up)("q-page"),K=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(Y,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)($,{modelValue:S.create,"onUpdate:modelValue":t[7]||(t[7]=e=>S.create=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(L,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(O,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{onSubmit:t[6]||(t[6]=e=>W.createData()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",a,[(0,s._)("div",l,[(0,s.Wm)(V,{outlined:"",modelValue:k.form.desc_concepto,"onUpdate:modelValue":[t[0]||(t[0]=e=>k.form.desc_concepto=e),t[1]||(t[1]=e=>k.form.desc_concepto=k.form.desc_concepto.toUpperCase())],label:"Descripcion de Concepto",hint:"",class:"pcform","lazy-rules":"",rules:[W.reglasInputs]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(A,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",r,[(0,s.Wm)(q,{"transition-show":"flip-up","transition-hide":"flip-down",options:k.tipoDeOperacion,"option-label":"descripcion","option-value":"id",modelValue:k.form.tipo,"onUpdate:modelValue":[t[2]||(t[2]=e=>k.form.tipo=e),t[3]||(t[3]=e=>W.validationSelect())],outlined:"",standout:"",rules:[W.reglasSelect],label:"Tipo de Operación"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(A,{name:"format_list_bulleted"})])),_:1},8,["options","modelValue","rules"])]),(0,s._)("div",d,[(0,s.Wm)(I,{rules:[W.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",modelValue:k.form.afecta_estado,"onUpdate:modelValue":t[5]||(t[5]=e=>k.form.afecta_estado=e),disable:S.disable},{control:(0,s.w5)((()=>[(0,s.Wm)(Z,{size:"lg",modelValue:k.form.afecta_estado,"onUpdate:modelValue":t[4]||(t[4]=e=>k.form.afecta_estado=e),"true-value":"S","false-value":"N",style:{"font-size":"13px"},label:"¿AFECTA ESTADO DE GANANCIAS Y PERDIDAS?",disable:S.disable},null,8,["modelValue","disable"])])),_:1},8,["rules","modelValue","disable"])])]),(0,s._)("div",n,[(0,s.Wm)(H,{label:"Agregar Concepto",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(H,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[K]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)($,{modelValue:S.edit,"onUpdate:modelValue":t[15]||(t[15]=e=>S.edit=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(L,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(O,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{onSubmit:t[14]||(t[14]=e=>W.putData())},{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s._)("div",m,[(0,s.Wm)(V,{outlined:"",modelValue:k.formEdit.desc_concepto,"onUpdate:modelValue":[t[8]||(t[8]=e=>k.formEdit.desc_concepto=e),t[9]||(t[9]=e=>k.formEdit.desc_concepto=k.formEdit.desc_concepto.toUpperCase())],label:"Descripcion de Concepto",hint:"",class:"pcform","lazy-rules":"",rules:[W.reglasInputs]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(A,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",p,[(0,s.Wm)(q,{"transition-show":"flip-up","transition-hide":"flip-down",options:k.tipoDeOperacion,"option-label":"descripcion","option-value":"id",modelValue:k.formEdit.tipo,"onUpdate:modelValue":[t[10]||(t[10]=e=>k.formEdit.tipo=e),t[11]||(t[11]=e=>W.validationSelectEdit())],outlined:"",standout:"",rules:[W.reglasSelect],label:"Tipo de Operación"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(A,{name:"format_list_bulleted"})])),_:1},8,["options","modelValue","rules"])]),(0,s._)("div",u,[(0,s.Wm)(I,{rules:[W.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",modelValue:k.formEdit.afecta_estado,"onUpdate:modelValue":t[13]||(t[13]=e=>k.formEdit.afecta_estado=e),disable:S.disableEdit},{control:(0,s.w5)((()=>[(0,s.Wm)(Z,{size:"lg",modelValue:k.formEdit.afecta_estado,"onUpdate:modelValue":t[12]||(t[12]=e=>k.formEdit.afecta_estado=e),"true-value":"S","false-value":"N",style:{"font-size":"13px"},label:"¿AFECTA ESTADO DE GANANCIAS Y PERDIDAS?",disable:S.disableEdit},null,8,["modelValue","disable"])])),_:1},8,["rules","modelValue","disable"])])]),(0,s._)("div",f,[(0,s.Wm)(H,{label:"Editar Concepto",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(H,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[K]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",h,[(0,s._)("div",g,[(0,s._)("div",b,[D,(0,s._)("div",C,[(0,s.Wm)(q,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:k.tipoDeOperacion,"option-label":"descripcion","option-value":"id",modelValue:k.selectedTipo,"onUpdate:modelValue":[t[16]||(t[16]=e=>k.selectedTipo=e),t[17]||(t[17]=e=>{this.axiosConfig.headers.tipo=this.selectedTipo.id,W.getDataSelect("/coperacion","setDataConceptos","datos")})],outlined:"",standout:"",label:"Tipo de Operación"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(A,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",E,[(0,s.Wm)(V,{rounded:"",outlined:"",standout:"",modelValue:S.filter,"onUpdate:modelValue":t[18]||(t[18]=e=>S.filter=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(A,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",w,[(0,s.Wm)(H,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:t[19]||(t[19]=e=>S.create=!0),onClickCapture:t[20]||(t[20]=e=>W.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,s._)("div",y,[(0,s._)("div",_,[(0,s._)("div",v,[(0,s.Wm)(j,{rows:k.datos,"row-key":"id",columns:k.columns,separator:S.separator,class:"my-sticky-column-table",filter:S.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:S.pagination,"onUpdate:pagination":t[23]||(t[23]=e=>S.pagination=e)},{"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(Q,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{W.getData(`/coperacion/${e.row.id}`,"setDataEdit","formEdit"),S.edit=!0}},null,8,["disabled","onClick"]),(0,s.Wm)(H,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>k.selected=e.row.id,onClickCapture:t[21]||(t[21]=e=>S.conceptosDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(L,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(o=>((0,s.wg)(),(0,s.j4)(P,{key:o.name},{default:(0,s.w5)((()=>[(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(z,{side:""},{default:(0,s.w5)((()=>["status"===o.name?((0,s.wg)(),(0,s.j4)(B,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(H,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{W.getData(`/coperacion/${e.row.id}`,"setDataEdit","formRoles"),S.edit=!0}},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"status"===o.name?((0,s.wg)(),(0,s.j4)(B,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(H,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>k.selected=e.row.id,onClickCapture:t[22]||(t[22]=e=>S.conceptosDelete=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(U,{key:4,caption:"",class:(0,i.C_)(o.classes?o.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","grid","pagination"])])])])])]),(0,s.Wm)($,{modelValue:S.conceptosDelete,"onUpdate:modelValue":t[25]||(t[25]=e=>S.conceptosDelete=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(L,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(O,null,{default:(0,s.w5)((()=>[x])),_:1}),(0,s.Wm)(R,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(H,{flat:"",label:"Cancelar",color:"primary"},null,512),[[K]]),(0,s.wy)((0,s.Wm)(H,{flat:"",label:"Aceptar",color:"primary",onClick:t[24]||(t[24]=e=>W.deleteData(k.selected))},null,512),[[K]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(F,{ref:"desactiveCrud",onDesactivarCrudRoles:W.desactivarCrudRoles},null,8,["onDesactivarCrudRoles"]),(0,s.Wm)(G,{ref:"methods",onGetData:t[26]||(t[26]=e=>W.getData("/coperacion","setDataConceptos","datos")),onSetDataConceptos:W.setDataConceptos,onSetDataIniciar:W.setDataIniciar,onSetDataEdit:W.setDataEdit,onSetDataTipos:W.setDataTipos},null,8,["onSetDataConceptos","onSetDataIniciar","onSetDataEdit","onSetDataTipos"])])),_:1})}var k=o(1959),W=(o(5474),o(8825)),A=o(589),V=o(1444),q=o(7389);const Z={components:{"desactivate-crud":q.Z,methods:V.Z},name:"Bancos",data(){return{columns:[{name:"id",label:"Codigo",field:"id",align:"left",sortable:!0},{name:"desc_concepto",label:"Concepto",field:"desc_concepto",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{desc_concepto:"",tipo:"",afecta_estado:"N"},formEdit:{id:"",desc_concepto:"",tipo:"",afecta_estado:"N"},tipoDeOperacion:[],datos:[],selected:[],selectedTipo:[],tipoRef:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){const e=(0,W.Z)();(0,k.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:`Bearer ${A.Z.getItem("token")}`,tipo:"1",fuente:"OP"}},pagination:(0,k.iH)({rowsPerPage:10}),separator:(0,k.iH)("vertical"),create:(0,k.iH)(!1),edit:(0,k.iH)(!1),disable:(0,k.iH)(!0),disableEdit:(0,k.iH)(!0),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},conceptosDelete:(0,k.iH)(!1),filter:(0,k.iH)("")}},mounted(){this.getData("/coperacion","setDataIniciar","datos"),this.$refs.desactiveCrud.desactivarCrud("c_roles","d_roles","u_roles","desactivarCrudRoles")},methods:{reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasInputs(e){if(""===e)return"Debes Escribir Algo";if(null===e)return"Debes Escribir Algo";if(null!==e){if(e.length>100)return"Deben ser máximo 100 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},desactivarCrudRoles(e,t,o){1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==o&&(this.disabledEdit=!1)},getData(e,t,o){this.$refs.methods.getData(e,t,o,this.axiosConfig)},validationSelect(){if("DGA"==this.form.tipo.codigo){var e=document.getElementById("select");e.classList.remove("displayHide"),e.classList.add("displayShow"),this.disable=!1}if("DCO"==this.form.tipo.codigo){e=document.getElementById("select");e.classList.remove("displayHide"),e.classList.add("displayShow"),this.disable=!1}if("DGA"!==this.form.tipo.codigo&&"DCO"!==this.form.tipo.codigo){e=document.getElementById("select");e.classList.remove("displayShow"),e.classList.add("displayHide"),this.disable=!0}},validationSelectEdit(){if("DGA"==this.formEdit.tipo.codigo){var e=document.getElementById("selectEdit");e.classList.remove("displayHide"),e.classList.add("displayShow"),this.disableEdit=!1}if("DCO"==this.formEdit.tipo.codigo){e=document.getElementById("selectEdit");e.classList.remove("displayHide"),e.classList.add("displayShow"),this.disableEdit=!1}if("DGA"!==this.formEdit.tipo.codigo&&"DCO"!==this.formEdit.tipo.codigo){e=document.getElementById("selectEdit");e.classList.remove("displayShow"),e.classList.add("displayHide"),this.disableEdit=!0}},getDataSelect(e,t,o){this.axiosConfig.headers.tipo=this.selectedTipo.id,this.$refs.methods.getData(e,t,o,this.axiosConfig)},setDataIniciar(e,t){this[t]=e,this.getData("/tipos","setDataTipos","tipoDeOperacion")},setDataTipos(e,t){this[t]=e,this.selectedTipo=e[0].descripcion},setDataConceptos(e,t){this[t]=e},setDataEdit(e,t){this[t].tipo=e.tipos.descripcion,this[t].id=e.id,this[t].desc_concepto=e.desc_concepto,this[t].afecta_estado=e.afecta_estado;var o=e.tipos.codigo;if("DCO"==o){var s=document.getElementById("selectEdit");s.classList.remove("displayHide"),s.classList.add("displayShow"),this.disableEdit=!1}if("DGA"==o){s=document.getElementById("selectEdit");s.classList.remove("displayHide"),s.classList.add("displayShow"),this.disableEdit=!1}if("DCO"!==o&&"DGA"!==o){s=document.getElementById("selectEdit");s.classList.remove("displayShow"),s.classList.add("displayHide"),this.disableEdit=!0}},deleteData(e){this.$refs.methods.deleteData(`/coperacion/${e}`,"getData",this.axiosConfig)},createData(){this.form.tipo=this.form.tipo.id,this.$refs.methods.createData("/coperacion",this.form,"getData",this.axiosConfig),this.resetForm()},putData(){this.formEdit.tipo=this.formEdit.tipo.id,this.$refs.methods.putData(`/coperacion/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.resetFormEdit()},resetForm(){this.form.desc_concepto="",this.form.afecta_estado="N",this.form.tipo="",(this.disable=!0)(this.create=!1)},resetFormEdit(){this.formEdit.desc_concepto="",this.formEdit.afecta_estado="N",this.formEdit.tipo="",(this.disableEdit=!0)(this.edit=!1)}}};var I=o(4260),H=o(4379),T=o(6778),O=o(151),L=o(5589),$=o(5269),Q=o(4842),U=o(4554),z=o(2448),B=o(6115),P=o(5735),N=o(8240),j=o(7352),R=o(3884),F=o(7011),G=o(3414),Y=o(2035),K=o(2350),J=o(7030),M=o(9367),X=o(677),ee=o(7518),te=o.n(ee);const oe=(0,I.Z)(Z,[["render",S]]),se=oe;te()(Z,"components",{QPage:H.Z,QDialog:T.Z,QCard:O.Z,QCardSection:L.Z,QForm:$.Z,QInput:Q.Z,QIcon:U.Z,QSelect:z.Z,QField:B.Z,QCheckbox:P.Z,QBtn:N.Z,QTable:j.Z,QTd:R.Z,QList:F.Z,QItem:G.Z,QItemSection:Y.Z,QItemLabel:K.Z,QChip:J.Z,QCardActions:M.Z}),te()(Z,"directives",{ClosePopup:X.Z})}}]);