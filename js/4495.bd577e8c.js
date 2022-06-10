"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[4495],{7389:(e,t,o)=>{function s(e,t,o,s,a,i){return null}o.d(t,{Z:()=>n});var a=o(589),i=o(8825);const l={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}},error:""}},setup(){const e=(0,i.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,t,o,s){for(var i,l,r,d=a.Z.getItem("tokenTraducido"),n=0,c=d.usuario.roles.permisos.length;n<c;n++){if(d.usuario.roles.permisos[n].codigo===e&&(i=!0),1==i)break;if(n==d.usuario.roles.permisos.length.length-1)break}!0===i&&(e=!0);for(n=0,c=d.usuario.roles.permisos.length;n<c;n++){if(d.usuario.roles.permisos[n].codigo===t&&(l=!0),1==l)break;if(n==d.usuario.roles.permisos.length.length-1)break}!0===l&&(t=!0);for(n=0,c=d.usuario.roles.permisos.length;n<c;n++){if(d.usuario.roles.permisos[n].codigo===o&&(r=!0),1==r)break;if(n==d.usuario.roles.permisos.length.length-1)break}!0===r&&(o=!0,this.$emit(s,e,t,o))},desactivarOpciones(e,t,o,s,i,l,r){for(var d,n,c,u,m,p,f=a.Z.getItem("tokenTraducido"),h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo==t&&(d=!0),1==d)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===d&&(t=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo==o&&(n=!0),1==n)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===n&&(o=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===s&&(c=!0),1==c)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===c&&(s=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===i&&(u=!0),1==u)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===u&&(i=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===l&&(m=!0),1==m)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===m&&(l=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===r&&(p=!0),1==p)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===p&&(r=!0,this.$emit(e,t,o,s,i,l,r))}}};var r=o(4260);const d=(0,r.Z)(l,[["render",s]]),n=d},1444:(e,t,o)=>{function s(e,t,o,s,a,i){return null}o.d(t,{Z:()=>c});var a=o(589),i=o(5474),l=o(8825);const r={name:"userLogout",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}}},setup(){const e=(0,l.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,o,s){i.api.get(e,s).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,t,o,s){i.api.get(e,s).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,t,o){i.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,t,o,s){i.api.post(e,t,s).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,t,o,s){i.api.put(e,t,s).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var d=o(4260);const n=(0,d.Z)(r,[["render",s]]),c=n},2285:(e,t,o)=>{o.r(t),o.d(t,{default:()=>se});var s=o(3673),a=o(2323);const i={class:"row"},l={class:"col-md-6 col-xs-12"},r={class:"col-md-6 col-xs-12"},d={class:"col-md-12 col-xs-12 displayHide",style:{"margin-bottom":"7px"},id:"select"},n={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},c={class:"row"},u={class:"col-md-6 col-xs-12"},m={class:"col-md-6 col-xs-12"},p={class:"col-md-12 col-xs-12 displayHide",style:{"margin-bottom":"20px"},id:"selectEdit"},f={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},h={class:"row q-pa-sm justify-center"},g={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},b={class:"row"},v=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,s._)("h4",{style:{"font-size":"30px"}},[(0,s._)("strong",null,"CONCEPTOS POR OPERACIÓN")])],-1),D={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},C={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},E={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},y={class:"q-pa-md",style:{"margin-top":"20px"}},w={class:"q-gutter-y-md"},_={bordered:"",flat:"",class:"my-card row"},x=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function k(e,t,o,k,A,S){const W=(0,s.up)("q-icon"),V=(0,s.up)("q-input"),q=(0,s.up)("q-select"),I=(0,s.up)("q-checkbox"),Z=(0,s.up)("q-field"),H=(0,s.up)("q-btn"),O=(0,s.up)("q-form"),L=(0,s.up)("q-card-section"),$=(0,s.up)("q-card"),Q=(0,s.up)("q-dialog"),U=(0,s.up)("q-td"),z=(0,s.up)("q-item-label"),G=(0,s.up)("q-item-section"),T=(0,s.up)("q-chip"),B=(0,s.up)("q-item"),F=(0,s.up)("q-list"),N=(0,s.up)("q-table"),P=(0,s.up)("q-card-actions"),R=(0,s.up)("desactivate-crud"),j=(0,s.up)("methods"),Y=(0,s.up)("q-page"),M=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(Y,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{modelValue:k.create,"onUpdate:modelValue":t[7]||(t[7]=e=>k.create=e)},{default:(0,s.w5)((()=>[(0,s.Wm)($,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(L,null,{default:(0,s.w5)((()=>[(0,s.Wm)(O,{onSubmit:t[6]||(t[6]=e=>S.createData()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s._)("div",l,[(0,s.Wm)(V,{outlined:"",modelValue:A.form.desc_concepto,"onUpdate:modelValue":[t[0]||(t[0]=e=>A.form.desc_concepto=e),t[1]||(t[1]=e=>A.form.desc_concepto=A.form.desc_concepto.toUpperCase())],label:"Descripcion de Concepto",hint:"",class:"pcform","lazy-rules":"",rules:[S.reglasInputs]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",r,[(0,s.Wm)(q,{"transition-show":"flip-up","transition-hide":"flip-down",options:A.tipoDeOperacion,modelValue:A.form.tipo,"onUpdate:modelValue":[t[2]||(t[2]=e=>A.form.tipo=e),t[3]||(t[3]=e=>S.validationSelect())],outlined:"",standout:"",rules:[S.reglasSelect],label:"Tipo de Operación"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"format_list_bulleted"})])),_:1},8,["options","modelValue","rules"])]),(0,s._)("div",d,[(0,s.Wm)(Z,{rules:[S.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",modelValue:A.form.afecta_estado,"onUpdate:modelValue":t[5]||(t[5]=e=>A.form.afecta_estado=e),disable:k.disable},{control:(0,s.w5)((()=>[(0,s.Wm)(I,{size:"lg",modelValue:A.form.afecta_estado,"onUpdate:modelValue":t[4]||(t[4]=e=>A.form.afecta_estado=e),"true-value":"S","false-value":"N",style:{"font-size":"13px"},label:"¿AFECTA ESTADO DE GANANCIAS Y PERDIDAS?",disable:k.disable},null,8,["modelValue","disable"])])),_:1},8,["rules","modelValue","disable"])])]),(0,s._)("div",n,[(0,s.Wm)(H,{label:"Agregar Concepto",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(H,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[M]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(Q,{modelValue:k.edit,"onUpdate:modelValue":t[15]||(t[15]=e=>k.edit=e)},{default:(0,s.w5)((()=>[(0,s.Wm)($,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(L,null,{default:(0,s.w5)((()=>[(0,s.Wm)(O,{onSubmit:t[14]||(t[14]=e=>S.putData())},{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s._)("div",u,[(0,s.Wm)(V,{outlined:"",modelValue:A.formEdit.desc_concepto,"onUpdate:modelValue":[t[8]||(t[8]=e=>A.formEdit.desc_concepto=e),t[9]||(t[9]=e=>A.formEdit.desc_concepto=A.formEdit.desc_concepto.toUpperCase())],label:"Descripcion de Concepto",hint:"",class:"pcform","lazy-rules":"",rules:[S.reglasInputs]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",m,[(0,s.Wm)(q,{"transition-show":"flip-up","transition-hide":"flip-down",options:A.tipoDeOperacion,modelValue:A.formEdit.tipo,"onUpdate:modelValue":[t[10]||(t[10]=e=>A.formEdit.tipo=e),t[11]||(t[11]=e=>S.validationSelectEdit())],outlined:"",standout:"",rules:[S.reglasSelect],label:"Tipo de Operación"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"format_list_bulleted"})])),_:1},8,["options","modelValue","rules"])]),(0,s._)("div",p,[(0,s.Wm)(Z,{rules:[S.reglasSelect],"hide-bottom-space":"",borderless:"",dense:"",modelValue:A.formEdit.afecta_estado,"onUpdate:modelValue":t[13]||(t[13]=e=>A.formEdit.afecta_estado=e),disable:k.disableEdit},{control:(0,s.w5)((()=>[(0,s.Wm)(I,{size:"lg",modelValue:A.formEdit.afecta_estado,"onUpdate:modelValue":t[12]||(t[12]=e=>A.formEdit.afecta_estado=e),"true-value":"S","false-value":"N",style:{"font-size":"13px"},label:"¿AFECTA ESTADO DE GANANCIAS Y PERDIDAS?",disable:k.disableEdit},null,8,["modelValue","disable"])])),_:1},8,["rules","modelValue","disable"])])]),(0,s._)("div",f,[(0,s.Wm)(H,{label:"Editar Concepto",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(H,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[M]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",h,[(0,s._)("div",g,[(0,s._)("div",b,[v,(0,s._)("div",D,[(0,s.Wm)(q,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.tipoDeOperacion,modelValue:A.selectedTipo,"onUpdate:modelValue":[t[16]||(t[16]=e=>A.selectedTipo=e),t[17]||(t[17]=e=>S.getDataSelect("/coperacion","setDataConceptos","datos"))],outlined:"",standout:"",label:"Tipo de Operación"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",C,[(0,s.Wm)(V,{rounded:"",outlined:"",standout:"",modelValue:k.filter,"onUpdate:modelValue":t[18]||(t[18]=e=>k.filter=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",E,[(0,s.Wm)(H,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:t[19]||(t[19]=e=>k.create=!0),onClickCapture:t[20]||(t[20]=e=>S.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,s._)("div",y,[(0,s._)("div",w,[(0,s._)("div",_,[(0,s.Wm)(N,{rows:A.datos,"row-key":"id",columns:A.columns,separator:k.separator,class:"my-sticky-column-table",filter:k.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:k.pagination,"onUpdate:pagination":t[23]||(t[23]=e=>k.pagination=e)},{"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(U,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{S.getData(`/coperacion/${e.row.id}`,"setDataEdit","formEdit"),k.edit=!0}},null,8,["disabled","onClick"]),(0,s.Wm)(H,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>A.selected=e.row.id,onClickCapture:t[21]||(t[21]=e=>k.conceptosDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,a.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)($,{class:(0,a.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(F,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(o=>((0,s.wg)(),(0,s.j4)(B,{key:o.name},{default:(0,s.w5)((()=>[(0,s.Wm)(G,null,{default:(0,s.w5)((()=>[(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(G,{side:""},{default:(0,s.w5)((()=>["status"===o.name?((0,s.wg)(),(0,s.j4)(T,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(H,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{S.getData(`/coperacion/${e.row.id}`,"setDataEdit","formRoles"),k.edit=!0}},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"status"===o.name?((0,s.wg)(),(0,s.j4)(T,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(H,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>A.selected=e.row.id,onClickCapture:t[22]||(t[22]=e=>k.conceptosDelete=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(z,{key:4,caption:"",class:(0,a.C_)(o.classes?o.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","grid","pagination"])])])])])]),(0,s.Wm)(Q,{modelValue:k.conceptosDelete,"onUpdate:modelValue":t[25]||(t[25]=e=>k.conceptosDelete=e)},{default:(0,s.w5)((()=>[(0,s.Wm)($,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(L,null,{default:(0,s.w5)((()=>[x])),_:1}),(0,s.Wm)(P,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(H,{flat:"",label:"Cancelar",color:"primary"},null,512),[[M]]),(0,s.wy)((0,s.Wm)(H,{flat:"",label:"Aceptar",color:"primary",onClick:t[24]||(t[24]=e=>S.deleteData(A.selected))},null,512),[[M]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(R,{ref:"desactiveCrud",onDesactivarCrudRoles:S.desactivarCrudRoles},null,8,["onDesactivarCrudRoles"]),(0,s.Wm)(j,{ref:"methods",onGetData:t[26]||(t[26]=e=>S.getData("/coperacion","setDataConceptos","datos")),onSetDataConceptos:S.setDataConceptos,onSetDataIniciar:S.setDataIniciar,onSetDataEdit:S.setDataEdit},null,8,["onSetDataConceptos","onSetDataIniciar","onSetDataEdit"])])),_:1})}var A=o(1959),S=(o(5474),o(8825)),W=o(589),V=o(1444),q=o(7389);const I={components:{"desactivate-crud":q.Z,methods:V.Z},name:"Bancos",data(){return{columns:[{name:"id",label:"Codigo",field:"id",align:"left",sortable:!0},{name:"desc_concepto",label:"Concepto",field:"desc_concepto",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{desc_concepto:"",tipo:"",afecta_estado:""},formEdit:{id:"",desc_concepto:"",tipo:"",afecta_estado:""},tipoDeOperacion:[{label:"Facturación",value:"FA"},{label:"Notas De Crédito",value:"NC"},{label:"Notas De Débito",value:"ND"},{label:"Gastos De Ventas",value:"DCO"},{label:"Gastos De Administración",value:"DGA"},{label:"Anulación de Cheques",value:"ACH"},{label:"Anulación de Guías y Facturas",value:"AGF"},{label:"Anulación Guías Por Inutilización",value:"AGI"},{label:"Anulación Notas Contables",value:"AGI"},{label:"Anulación De Guías Y Facturas",value:"ANC"},{label:"Motivo De Retraso En Entrega",value:"MRE"},{label:"Costos",value:"CO"}],datos:[],selected:[],selectedTipo:[],tipoRef:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){const e=(0,S.Z)();(0,A.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:`Bearer ${W.Z.getItem("token")}`,tipo:"FA"}},pagination:(0,A.iH)({rowsPerPage:10}),separator:(0,A.iH)("vertical"),create:(0,A.iH)(!1),edit:(0,A.iH)(!1),disable:(0,A.iH)(!0),disableEdit:(0,A.iH)(!0),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},conceptosDelete:(0,A.iH)(!1),filter:(0,A.iH)("")}},mounted(){this.getData("/coperacion","setDataIniciar","datos"),this.$refs.desactiveCrud.desactivarCrud("c_roles","d_roles","u_roles","desactivarCrudRoles")},methods:{reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasInputs(e){if(""===e)return"Debes Escribir Algo";if(null===e)return"Debes Escribir Algo";if(null!==e){if(e.length>100)return"Deben ser máximo 100 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},desactivarCrudRoles(e,t,o){1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==o&&(this.disabledEdit=!1)},getData(e,t,o){this.$refs.methods.getData(e,t,o,this.axiosConfig)},validationSelect(){if("DGA"==this.form.tipo.value){var e=document.getElementById("select");e.classList.remove("displayHide"),e.classList.add("displayShow"),this.disable=!1}if("DCO"==this.form.tipo.value){e=document.getElementById("select");e.classList.remove("displayHide"),e.classList.add("displayShow"),this.disable=!1}if("DGA"!==this.form.tipo.value&&"DCO"!==this.form.tipo.value){e=document.getElementById("select");e.classList.remove("displayShow"),e.classList.add("displayHide"),this.disable=!0}},validationSelectEdit(){if("DGA"==this.formEdit.tipo.value){var e=document.getElementById("selectEdit");e.classList.remove("displayHide"),e.classList.add("displayShow"),this.disableEdit=!1}if("DCO"==this.formEdit.tipo.value){e=document.getElementById("selectEdit");e.classList.remove("displayHide"),e.classList.add("displayShow"),this.disableEdit=!1}if("DGA"!==this.formEdit.tipo.value&&"DCO"!==this.formEdit.tipo.value){e=document.getElementById("selectEdit");e.classList.remove("displayShow"),e.classList.add("displayHide"),this.disableEdit=!0}},getDataSelect(e,t,o){this.axiosConfig.headers.tipo=this.selectedTipo.value,this.$refs.methods.getData(e,t,o,this.axiosConfig)},setDataIniciar(e,t){this[t]=e,this.selectedTipo=e[0].tipos.descripcion},setDataConceptos(e,t){this[t]=e},setDataEdit(e,t){this[t].tipo=e.tipos.descripcion,this[t].id=e.id,this[t].desc_concepto=e.desc_concepto;var o=e.tipos.codigo;if("DCO"==o){var s=document.getElementById("selectEdit");s.classList.remove("displayHide"),s.classList.add("displayShow"),this.disableEdit=!1}if("DGA"==o){s=document.getElementById("selectEdit");s.classList.remove("displayHide"),s.classList.add("displayShow"),this.disableEdit=!1}if("DCO"!==o&&"DGA"!==o){s=document.getElementById("selectEdit");s.classList.remove("displayShow"),s.classList.add("displayHide"),this.disableEdit=!0}},deleteData(e){this.$refs.methods.deleteData(`/coperacion/${e}`,"getData",this.axiosConfig)},createData(){this.form.tipo=this.form.tipo.value,this.$refs.methods.createData("/coperacion",this.form,"getData",this.axiosConfig),this.resetForm()},putData(){this.formEdit.tipo=this.formEdit.tipo.value,this.$refs.methods.putData(`/coperacion/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.resetFormEdit()},resetForm(){this.form.desc_concepto="",this.form.afecta_estado=null,this.form.tipo="",(this.disable=!0)(this.create=!1)},resetFormEdit(){this.formEdit.desc_concepto="",this.formEdit.afecta_estado=null,this.formEdit.tipo="",(this.disableEdit=!0)(this.edit=!1)}}};var Z=o(4260),H=o(4379),O=o(6778),L=o(151),$=o(5589),Q=o(5269),U=o(4842),z=o(4554),G=o(2448),T=o(6115),B=o(5735),F=o(8240),N=o(7352),P=o(3884),R=o(7011),j=o(3414),Y=o(2035),M=o(2350),K=o(7030),J=o(9367),X=o(677),ee=o(7518),te=o.n(ee);const oe=(0,Z.Z)(I,[["render",k]]),se=oe;te()(I,"components",{QPage:H.Z,QDialog:O.Z,QCard:L.Z,QCardSection:$.Z,QForm:Q.Z,QInput:U.Z,QIcon:z.Z,QSelect:G.Z,QField:T.Z,QCheckbox:B.Z,QBtn:F.Z,QTable:N.Z,QTd:P.Z,QList:R.Z,QItem:j.Z,QItemSection:Y.Z,QItemLabel:M.Z,QChip:K.Z,QCardActions:J.Z}),te()(I,"directives",{ClosePopup:X.Z})}}]);