"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[8450],{7389:(e,o,s)=>{function t(e,o,s,t,a,r){return null}s.d(o,{Z:()=>d});var a=s(589),r=s(8825);const i={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}},error:""}},setup(){const e=(0,r.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,o,s,t){for(var r,i,l,n=a.Z.getItem("tokenTraducido"),d=0,c=n.usuario.roles.permisos.length;d<c;d++){if(n.usuario.roles.permisos[d].codigo===e&&(r=!0),1==r)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===r&&(e=!0);for(d=0,c=n.usuario.roles.permisos.length;d<c;d++){if(n.usuario.roles.permisos[d].codigo===o&&(i=!0),1==i)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===i&&(o=!0);for(d=0,c=n.usuario.roles.permisos.length;d<c;d++){if(n.usuario.roles.permisos[d].codigo===s&&(l=!0),1==l)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===l&&(s=!0,this.$emit(t,e,o,s))},desactivarOpciones(e,o,s,t,r,i,l){for(var n,d,c,m,u,p,g=a.Z.getItem("tokenTraducido"),h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo==o&&(n=!0),1==n)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===n&&(o=!0);for(h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo==s&&(d=!0),1==d)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===d&&(s=!0);for(h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo===t&&(c=!0),1==c)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===c&&(t=!0);for(h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo===r&&(m=!0),1==m)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===m&&(r=!0);for(h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo===i&&(u=!0),1==u)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===u&&(i=!0);for(h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo===l&&(p=!0),1==p)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===p&&(l=!0,this.$emit(e,o,s,t,r,i,l))}}};var l=s(4260);const n=(0,l.Z)(i,[["render",t]]),d=n},1444:(e,o,s)=>{function t(e,o,s,t,a,r){return null}s.d(o,{Z:()=>c});var a=s(589),r=s(5474),i=s(8825);const l={name:"userLogout",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}}},setup(){const e=(0,i.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,o,s,t){r.api.get(e,t).then((e=>{this.$emit(o,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,o,s,t){r.api.get(e,t).then((e=>{this.$emit(o,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,o,s){r.api["delete"](e,s).then((e=>{(e.status=200)&&(this.$emit(o),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,o,s,t){r.api.post(e,o,t).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,o,s,t){r.api.put(e,o,t).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var n=s(4260);const d=(0,n.Z)(l,[["render",t]]),c=d},8450:(e,o,s)=>{s.r(o),s.d(o,{default:()=>ee});var t=s(3673),a=s(2323);const r={class:"row"},i={class:"col-md-5 col-xs-12"},l={class:"col-md-7 col-xs-12"},n={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},d={class:"row"},c={class:"col-md-5 col-xs-12"},m={class:"col-md-7 col-xs-12"},u={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},p={class:"row q-pa-sm justify-center"},g={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},h={class:"row"},f=(0,t._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,t._)("h4",{style:{"font-size":"30px"}},[(0,t._)("strong",null,"SEGURIDAD - ROLES")])],-1),b={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},D={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},w={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},C={class:"q-pa-md",style:{"margin-top":"20px"}},_={class:"q-gutter-y-md"},x={bordered:"",flat:"",class:"my-card row"},v=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function y(e,o,s,y,R,E){const k=(0,t.up)("q-icon"),W=(0,t.up)("q-input"),q=(0,t.up)("q-select"),Z=(0,t.up)("q-btn"),A=(0,t.up)("q-form"),S=(0,t.up)("q-card-section"),V=(0,t.up)("q-card"),$=(0,t.up)("q-dialog"),I=(0,t.up)("q-td"),Q=(0,t.up)("q-item-label"),F=(0,t.up)("q-item-section"),U=(0,t.up)("q-chip"),z=(0,t.up)("q-item"),H=(0,t.up)("q-list"),j=(0,t.up)("q-table"),P=(0,t.up)("q-card-actions"),B=(0,t.up)("desactivate-crud"),L=(0,t.up)("methods"),T=(0,t.up)("q-page"),G=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(T,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{modelValue:y.rolesForm,"onUpdate:modelValue":o[4]||(o[4]=e=>y.rolesForm=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Wm)(A,{onSubmit:o[3]||(o[3]=e=>E.createDataRoles()),class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",r,[(0,t._)("div",i,[(0,t.Wm)(W,{outlined:"",modelValue:R.formRoles.descripcion,"onUpdate:modelValue":[o[0]||(o[0]=e=>R.formRoles.descripcion=e),o[1]||(o[1]=e=>R.formRoles.descripcion=R.formRoles.descripcion.toUpperCase())],label:"Descripcion",hint:"",class:"pcform","lazy-rules":"",rules:y.reglasDescripcion},{prepend:(0,t.w5)((()=>[(0,t.Wm)(k,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",l,[(0,t.Wm)(q,{outlined:"",modelValue:R.formRoles.cod_agencia,"onUpdate:modelValue":o[2]||(o[2]=e=>R.formRoles.cod_agencia=e),label:"Agencia",hint:"",rules:[E.reglasInputs],options:R.agencias,"option-label":"nb_agencia","option-value":"id","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(k,{name:"apartment"})])),_:1},8,["modelValue","rules","options"])])]),(0,t._)("div",n,[(0,t.Wm)(Z,{label:"Agregar Rol",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(Z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[G]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)($,{modelValue:y.rolesFormEdit,"onUpdate:modelValue":o[9]||(o[9]=e=>y.rolesFormEdit=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Wm)(A,{onSubmit:o[8]||(o[8]=e=>E.putDataRoles())},{default:(0,t.w5)((()=>[(0,t._)("div",d,[(0,t._)("div",c,[(0,t.Wm)(W,{outlined:"",modelValue:R.formEditRoles.descripcion,"onUpdate:modelValue":[o[5]||(o[5]=e=>R.formEditRoles.descripcion=e),o[6]||(o[6]=e=>R.formEditRoles.descripcion=R.formEditRoles.descripcion.toUpperCase())],label:"Descripción",hint:"",class:"pcform","lazy-rules":"",rules:y.reglasDescripcion},{prepend:(0,t.w5)((()=>[(0,t.Wm)(k,{name:"description"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",m,[(0,t.Wm)(q,{outlined:"",modelValue:R.formEditRoles.cod_agencia,"onUpdate:modelValue":o[7]||(o[7]=e=>R.formEditRoles.cod_agencia=e),label:"Agencia",hint:"",rules:[E.reglasInputs],options:R.agencias,"option-label":"nb_agencia","option-value":"id","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(k,{name:"apartment"})])),_:1},8,["modelValue","rules","options"])])]),(0,t._)("div",u,[(0,t.Wm)(Z,{label:"Editar Rol",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(Z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[G]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",p,[(0,t._)("div",g,[(0,t._)("div",h,[f,(0,t._)("div",b,[(0,t.Wm)(q,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:R.agencias,"option-label":"nb_agencia","option-value":"id",modelValue:R.selectedAgencia,"onUpdate:modelValue":[o[10]||(o[10]=e=>R.selectedAgencia=e),o[11]||(o[11]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,E.getData("/roles","setDataRoles","roles")})],outlined:"",standout:"",label:"Escoge una Agencia"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(k,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,t._)("div",D,[(0,t.Wm)(W,{rounded:"",outlined:"",standout:"",modelValue:y.filterRoles,"onUpdate:modelValue":o[12]||(o[12]=e=>y.filterRoles=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(k,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",w,[(0,t.Wm)(Z,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:o[13]||(o[13]=e=>y.rolesForm=!0),onClickCapture:o[14]||(o[14]=e=>E.resetFormRoles()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,t._)("div",C,[(0,t._)("div",_,[(0,t._)("div",x,[(0,t.Wm)(j,{rows:R.roles,"row-key":"id",columns:R.columnsRoles,separator:y.separator,class:"my-sticky-column-table",filter:y.filterRoles,style:{width:"100%"},grid:e.$q.screen.xs,pagination:y.pagination,"onUpdate:pagination":o[17]||(o[17]=e=>y.pagination=e)},{"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{E.getData(`/roles/${e.row.id}`,"setDataRolesEdit","formEditRoles"),y.rolesFormEdit=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(Z,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>R.selected=e.row.id,onClickCapture:o[15]||(o[15]=e=>y.rolesDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,a.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(V,{class:(0,a.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(s=>((0,t.wg)(),(0,t.j4)(z,{key:s.name},{default:(0,t.w5)((()=>[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,a.zw)(s.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(F,{side:""},{default:(0,t.w5)((()=>["status"===s.name?((0,t.wg)(),(0,t.j4)(U,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,a.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,t.wg)(),(0,t.j4)(Z,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{E.getData(`/roles/${e.row.id}`,"setDataRolesEdit","formEditRoles"),y.rolesFormEdit=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"status"===s.name?((0,t.wg)(),(0,t.j4)(U,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,a.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,t.wg)(),(0,t.j4)(Z,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>R.selected=e.row.id,onClickCapture:o[16]||(o[16]=e=>y.rolesDelete=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(Q,{key:4,caption:"",class:(0,a.C_)(s.classes?s.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,a.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","grid","pagination"])])])])])]),(0,t.Wm)($,{modelValue:y.rolesDelete,"onUpdate:modelValue":o[19]||(o[19]=e=>y.rolesDelete=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[v])),_:1}),(0,t.Wm)(P,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(Z,{flat:"",label:"Cancelar",color:"primary"},null,512),[[G]]),(0,t.wy)((0,t.Wm)(Z,{flat:"",label:"Aceptar",color:"primary",onClick:o[18]||(o[18]=e=>E.deleteData(R.selected))},null,512),[[G]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(B,{ref:"desactiveCrud",onDesactivarCrudRoles:E.desactivarCrudRoles},null,8,["onDesactivarCrudRoles"]),(0,t.Wm)(L,{ref:"methods",onGetData:o[20]||(o[20]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,E.getData("/roles","setDataRoles","roles")}),onSetDataRoles:E.setDataRoles,onSetDataRolesEdit:E.setDataRolesEdit,onSetData:E.setData},null,8,["onSetDataRoles","onSetDataRolesEdit","onSetData"])])),_:1})}var R=s(1959),E=s(5474),k=s(8825),W=s(589),q=s(1444),Z=s(7389);const A={components:{"desactivate-crud":Z.Z,methods:q.Z},name:"Bancos",data(){return{columnsRoles:[{name:"id",label:"ID",field:"id",align:"left",sortable:!0},{name:"descripcion",label:"Roles",field:"descripcion",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formRoles:{descripcion:"",cod_agencia:[]},formEditRoles:{descripcion:"",id:"",cod_agencia:[]},agencias:[],roles:[],selected:[],selectedAgencia:[],agenciaRef:"",agenciaRef2:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){const e=(0,k.Z)();(0,R.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:`Bearer ${W.Z.getItem("token")}`,agencia:""}},pagination:(0,R.iH)({rowsPerPage:10}),separator:(0,R.iH)("vertical"),rolesForm:(0,R.iH)(!1),rolesFormEdit:(0,R.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},rolesDelete:(0,R.iH)(!1),filterRoles:(0,R.iH)(""),reglasDescripcion:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<30||"Deben ser máximo 30 caracteres",e=>e.length>2||"Deben ser minimo 3 caracteres"]}},mounted(){this.getData("/agencias","setData","agencias"),this.$refs.desactiveCrud.desactivarCrud("c_roles","d_roles","u_roles","desactivarCrudRoles")},methods:{reglasInputs(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},desactivarCrudRoles(e,o,s){1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==s&&(this.disabledEdit=!1)},getData(e,o,s){this.$refs.methods.getData(e,o,s,this.axiosConfig)},setData(e,o){this[o]=e,this.getDataIniciar()},setDataRoles(e,o){this[o]=e},setDataRolesEdit(e,o){this[o].id=e.id,this[o].descripcion=e.descripcion,this[o].cod_agencia=this.selectedAgencia},deleteData(e){this.$refs.methods.deleteData(`/roles/${e}`,"getData",this.axiosConfig)},createDataRoles(){this.formRoles.cod_agencia=this.formRoles.cod_agencia.id,this.$refs.methods.createData("/roles",this.formRoles,"getData",this.axiosConfig),this.resetFormRoles()},putDataRoles(){this.formEditRoles.cod_agencia=this.formEditRoles.cod_agencia.id,this.$refs.methods.putData(`/roles/${this.formEditRoles.id}`,this.formEditRoles,"getData",this.axiosConfig),this.resetFormEditRoles()},resetFormRoles(){this.formRoles.descripcion="",this.formRoles.cod_agencia="",this.rolesForm=!1},resetFormEditRoles(){this.formEditRoles.descripcion=null,this.formEditRoles.cod_agencia=null,this.rolesFormEdit=!1},getDataIniciar(){this.agenciaRef2=this.agencias[0].id,this.selectedAgencia=this.agencias[0],this.axiosConfig.headers.agencia=this.agenciaRef2,E.api.get("/roles",this.axiosConfig).then((e=>{this.roles=e.data}))}}};var S=s(4260),V=s(4379),$=s(6778),I=s(151),Q=s(5589),F=s(5269),U=s(4842),z=s(4554),H=s(2448),j=s(8240),P=s(7352),B=s(3884),L=s(7011),T=s(3414),G=s(2035),O=s(2350),K=s(7030),Y=s(9367),J=s(677),M=s(7518),N=s.n(M);const X=(0,S.Z)(A,[["render",y]]),ee=X;N()(A,"components",{QPage:V.Z,QDialog:$.Z,QCard:I.Z,QCardSection:Q.Z,QForm:F.Z,QInput:U.Z,QIcon:z.Z,QSelect:H.Z,QBtn:j.Z,QTable:P.Z,QTd:B.Z,QList:L.Z,QItem:T.Z,QItemSection:G.Z,QItemLabel:O.Z,QChip:K.Z,QCardActions:Y.Z}),N()(A,"directives",{ClosePopup:J.Z})}}]);