"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[9636],{4333:(e,o,t)=>{function s(e,o,t,s,a,l){return null}t.d(o,{Z:()=>c});var a=t(589),l=t(5474),i=t(8825);const r={name:"userLogout",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}}},setup(){const e=(0,i.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,o,t){l.api.get(e,this.axiosConfig).then((e=>{this.$emit(o,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,o,t){l.api.get(e,this.axiosConfig).then((e=>{this.$emit(o,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,o){l.api["delete"](e,this.axiosConfig).then((e=>{(e.status=200)&&(this.$emit(o),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,o,t){l.api.post(e,o,this.axiosConfig).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,o,t){l.api.put(e,o,this.axiosConfig).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var n=t(4260);const d=(0,n.Z)(r,[["render",s]]),c=d},9636:(e,o,t)=>{t.r(o),t.d(o,{default:()=>ee});var s=t(3673),a=t(2323);const l={class:"row"},i={class:"col-md-5 col-xs-12"},r={class:"col-md-7 col-xs-12"},n={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},d={class:"row"},c={class:"col-md-5 col-xs-12"},m={class:"col-md-7 col-xs-12"},u={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},p={class:"row q-pa-sm justify-center"},g={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},h={class:"row"},f=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,s._)("h4",{style:{"font-size":"30px"}},[(0,s._)("strong",null,"SEGURIDAD - ROLES")])],-1),b={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},D={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},w={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},_={class:"q-pa-md",style:{"margin-top":"20px"}},x={class:"q-gutter-y-md"},C={bordered:"",flat:"",class:"my-card row"},y=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function R(e,o,t,R,E,v){const W=(0,s.up)("q-icon"),q=(0,s.up)("q-input"),k=(0,s.up)("q-select"),A=(0,s.up)("q-btn"),V=(0,s.up)("q-form"),Z=(0,s.up)("q-card-section"),S=(0,s.up)("q-card"),$=(0,s.up)("q-dialog"),Q=(0,s.up)("q-td"),F=(0,s.up)("q-item-label"),U=(0,s.up)("q-item-section"),I=(0,s.up)("q-chip"),z=(0,s.up)("q-item"),H=(0,s.up)("q-list"),j=(0,s.up)("q-table"),P=(0,s.up)("q-card-actions"),B=(0,s.up)("user-logout"),L=(0,s.up)("methods"),G=(0,s.up)("q-page"),T=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(G,{class:"q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)($,{modelValue:R.rolesForm,"onUpdate:modelValue":o[4]||(o[4]=e=>R.rolesForm=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(V,{onSubmit:o[3]||(o[3]=e=>v.createDataRoles()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",l,[(0,s._)("div",i,[(0,s.Wm)(q,{outlined:"",modelValue:E.formRoles.descripcion,"onUpdate:modelValue":[o[0]||(o[0]=e=>E.formRoles.descripcion=e),o[1]||(o[1]=e=>E.formRoles.descripcion=E.formRoles.descripcion.toUpperCase())],label:"Descripcion",hint:"",class:"pcform","lazy-rules":"",rules:R.reglasDescripcion},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"south_america"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",r,[(0,s.Wm)(k,{outlined:"",modelValue:E.formRoles.cod_agencia,"onUpdate:modelValue":o[2]||(o[2]=e=>E.formRoles.cod_agencia=e),label:"Agencia",hint:"",rules:[v.reglasInputs],options:E.agencias,"option-label":"nb_agencia","option-value":"id","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])])]),(0,s._)("div",n,[(0,s.Wm)(A,{label:"Agregar Rol",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(A,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[T]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)($,{modelValue:R.rolesFormEdit,"onUpdate:modelValue":o[9]||(o[9]=e=>R.rolesFormEdit=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(V,{onSubmit:o[8]||(o[8]=e=>v.putDataRoles())},{default:(0,s.w5)((()=>[(0,s._)("div",d,[(0,s._)("div",c,[(0,s.Wm)(q,{outlined:"",modelValue:E.formEditRoles.descripcion,"onUpdate:modelValue":[o[5]||(o[5]=e=>E.formEditRoles.descripcion=e),o[6]||(o[6]=e=>E.formEditRoles.descripcion=E.formEditRoles.descripcion.toUpperCase())],label:"Descripción",hint:"",class:"pcform","lazy-rules":"",rules:R.reglasDescripcion},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"south_america"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",m,[(0,s.Wm)(k,{outlined:"",modelValue:E.formEditRoles.cod_agencia,"onUpdate:modelValue":o[7]||(o[7]=e=>E.formEditRoles.cod_agencia=e),label:"Agencia",hint:"",rules:[v.reglasInputs],options:E.agencias,"option-label":"nb_agencia","option-value":"id","lazy-rules":""},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])])]),(0,s._)("div",u,[(0,s.Wm)(A,{label:"Editar Rol",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(A,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[T]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",p,[(0,s._)("div",g,[(0,s._)("div",h,[f,(0,s._)("div",b,[(0,s.Wm)(k,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:E.agencias,"option-label":"nb_agencia","option-value":"id",modelValue:E.selectedAgencia,"onUpdate:modelValue":[o[10]||(o[10]=e=>E.selectedAgencia=e),o[11]||(o[11]=e=>v.getData(`/agencias/${this.selectedAgencia.id}/roles`,"setDataRoles","roles"))],outlined:"",standout:"",label:"Escoge una Agencia"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",D,[(0,s.Wm)(q,{rounded:"",outlined:"",standout:"",modelValue:R.filterRoles,"onUpdate:modelValue":o[12]||(o[12]=e=>R.filterRoles=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(W,{name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",w,[(0,s.Wm)(A,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:o[13]||(o[13]=e=>R.rolesForm=!0),onClickCapture:o[14]||(o[14]=e=>v.resetFormRoles()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,s._)("div",_,[(0,s._)("div",x,[(0,s._)("div",C,[(0,s.Wm)(j,{rows:E.roles,"row-key":"id",columns:E.columnsRoles,separator:R.separator,class:"my-sticky-column-table",filter:R.filterRoles,style:{width:"100%"},grid:e.$q.screen.xs,pagination:R.pagination,"onUpdate:pagination":o[17]||(o[17]=e=>R.pagination=e)},{"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(Q,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(A,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{v.getData(`/roles/${e.row.id}`,"setDataRolesEdit","formEditRoles"),R.rolesFormEdit=!0}},null,8,["disabled","onClick"]),(0,s.Wm)(A,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>E.selected=e.row.id,onClickCapture:o[15]||(o[15]=e=>R.rolesDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,a.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(S,{class:(0,a.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(t=>((0,s.wg)(),(0,s.j4)(z,{key:t.name},{default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(U,{side:""},{default:(0,s.w5)((()=>["status"===t.name?((0,s.wg)(),(0,s.j4)(I,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,s.wg)(),(0,s.j4)(A,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{v.getData(`/roles/${e.row.id}`,"setDataRolesEdit","formEditRoles"),R.rolesFormEdit=!0}},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"status"===t.name?((0,s.wg)(),(0,s.j4)(I,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.value),1)])),_:2},1032,["color"])):"action"===t.name?((0,s.wg)(),(0,s.j4)(A,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>E.selected=e.row.id,onClickCapture:o[16]||(o[16]=e=>R.rolesDelete=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(F,{key:4,caption:"",class:(0,a.C_)(t.classes?t.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","grid","pagination"])])])])])]),(0,s.Wm)($,{modelValue:R.rolesDelete,"onUpdate:modelValue":o[19]||(o[19]=e=>R.rolesDelete=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[y])),_:1}),(0,s.Wm)(P,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(A,{flat:"",label:"Cancelar",color:"primary"},null,512),[[T]]),(0,s.wy)((0,s.Wm)(A,{flat:"",label:"Aceptar",color:"primary",onClick:o[18]||(o[18]=e=>v.deleteData(E.selected))},null,512),[[T]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(B,{ref:"userlogout",onDesactivarCrudRoles:v.desactivarCrudRoles},null,8,["onDesactivarCrudRoles"]),(0,s.Wm)(L,{ref:"methods",onGetData:o[20]||(o[20]=e=>v.getData(`/agencias/${this.selectedAgencia.id}/roles`,"setDataRoles","roles")),onSetDataRoles:v.setDataRoles,onSetDataRolesEdit:v.setDataRolesEdit,onSetData:v.setData},null,8,["onSetDataRoles","onSetDataRolesEdit","onSetData"])])),_:1})}var E=t(1959),v=t(5244),W=t(5474),q=t(8825),k=t(589),A=t(4333);const V={components:{"user-logout":v.Z,methods:A.Z},name:"Bancos",data(){return{columnsRoles:[{name:"id",label:"ID",field:"id",align:"left",sortable:!0},{name:"descripcion",label:"Roles",field:"descripcion",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formRoles:{descripcion:"",cod_agencia:[]},formEditRoles:{descripcion:"",id:"",cod_agencia:[]},agencias:[],roles:[],selected:[],selectedAgencia:[],agenciaRef:"",agenciaRef2:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){const e=(0,q.Z)();(0,E.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:`Bearer ${k.Z.getItem("token")}`}},pagination:(0,E.iH)({rowsPerPage:10}),separator:(0,E.iH)("vertical"),rolesForm:(0,E.iH)(!1),rolesFormEdit:(0,E.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},rolesDelete:(0,E.iH)(!1),filterRoles:(0,E.iH)(""),reglasDescripcion:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<30||"Deben ser máximo 30 caracteres",e=>e.length>2||"Deben ser minimo 3 caracteres"]}},mounted(){this.getData("/agencias","setData","agencias"),this.$refs.userlogout.desactivarCrud("c_roles","d_roles","u_roles","desactivarCrudRoles")},methods:{reglasInputs(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},desactivarCrudRoles(e,o,t){1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==t&&(this.disabledEdit=!1)},getData(e,o,t){this.$refs.methods.getData(e,o,t)},setData(e,o){this[o]=e,this.getDataIniciar()},setDataRoles(e,o){this[o]=e.roles},setDataRolesEdit(e,o){this[o].id=e.id,this[o].descripcion=e.descripcion,this[o].cod_agencia=this.selectedAgencia},deleteData(e){this.$refs.methods.deleteData(`/roles/${e}`,"getData")},createDataRoles(){this.formRoles.cod_agencia=this.formRoles.cod_agencia.id,this.$refs.methods.createData("/roles",this.formRoles,"getData"),this.resetFormRoles()},putDataRoles(){this.formEditRoles.cod_agencia=this.formEditRoles.cod_agencia.id,this.$refs.methods.putData(`/roles/${this.formEditRoles.id}`,this.formEditRoles,"getData"),this.resetFormEditRoles()},resetFormRoles(){this.formRoles.descripcion="",this.formRoles.cod_agencia="",this.rolesForm=!1},resetFormEditRoles(){this.formEditRoles.descripcion=null,this.formEditRoles.cod_agencia=null,this.rolesFormEdit=!1},getDataIniciar(){this.agenciaRef2=this.agencias[0].id,this.selectedAgencia=this.agencias[0],W.api.get(`/agencias/${this.agenciaRef2}/roles`,this.axiosConfig).then((e=>{this.roles=e.data.roles}))}}};var Z=t(4260),S=t(4379),$=t(6778),Q=t(151),F=t(5589),U=t(5269),I=t(4842),z=t(4554),H=t(3314),j=t(8240),P=t(7352),B=t(3884),L=t(7011),G=t(3414),T=t(2035),K=t(2350),O=t(7030),Y=t(9367),J=t(677),M=t(7518),N=t.n(M);const X=(0,Z.Z)(V,[["render",R]]),ee=X;N()(V,"components",{QPage:S.Z,QDialog:$.Z,QCard:Q.Z,QCardSection:F.Z,QForm:U.Z,QInput:I.Z,QIcon:z.Z,QSelect:H.Z,QBtn:j.Z,QTable:P.Z,QTd:B.Z,QList:L.Z,QItem:G.Z,QItemSection:T.Z,QItemLabel:K.Z,QChip:O.Z,QCardActions:Y.Z}),N()(V,"directives",{ClosePopup:J.Z})}}]);