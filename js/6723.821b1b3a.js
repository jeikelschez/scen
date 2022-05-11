"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[6723],{4333:(e,o,a)=>{function t(e,o,a,t,s,l){return null}a.d(o,{Z:()=>c});var s=a(589),l=a(5474),i=a(8825);const r={name:"userLogout",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${s.Z.getItem("token")}`}}}},setup(){const e=(0,i.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,o,a){l.api.get(e,this.axiosConfig).then((e=>{this.$emit(o,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,o,a){l.api.get(e,this.axiosConfig).then((e=>{this.$emit(o,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,o){l.api["delete"](e,this.axiosConfig).then((e=>{(e.status=200)&&(this.$emit(o),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,o,a){l.api.post(e,o,this.axiosConfig).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,o,a){l.api.put(e,o,this.axiosConfig).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var n=a(4260);const d=(0,n.Z)(r,[["render",t]]),c=d},6723:(e,o,a)=>{a.r(o),a.d(o,{default:()=>se});var t=a(3673),s=a(2323);const l={class:"row"},i={class:"col-md-12 col-xs-12"},r={class:"col-md-5 col-xs-12"},n={class:"col-md-7 col-xs-12"},d={class:"col-md-12 col-xs-12"},c={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},m={class:"row"},u={class:"col-md-12 col-xs-12"},p={class:"col-md-5 col-xs-12"},g={class:"col-md-7 col-xs-12"},f={class:"col-md-12 col-xs-12"},h={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},b={class:"row q-pa-sm justify-center"},_={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},w={class:"row"},C=(0,t._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,t._)("h4",{style:{"font-size":"26px"}},[(0,t._)("strong",null,"MANTENIMIENTO - CUENTAS BANCARIAS")])],-1),D={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},R={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},x={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},y={class:"q-pa-md",style:{"margin-top":"20px"}},E={class:"q-gutter-y-md"},v={bordered:"",flat:"",class:"my-card row"},W=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function V(e,o,a,V,q,k){const A=(0,t.up)("q-icon"),Z=(0,t.up)("q-input"),S=(0,t.up)("q-select"),U=(0,t.up)("q-btn"),z=(0,t.up)("q-form"),$=(0,t.up)("q-card-section"),I=(0,t.up)("q-card"),Q=(0,t.up)("q-dialog"),H=(0,t.up)("q-td"),j=(0,t.up)("q-item-label"),F=(0,t.up)("q-item-section"),P=(0,t.up)("q-chip"),B=(0,t.up)("q-item"),N=(0,t.up)("q-list"),T=(0,t.up)("q-table"),L=(0,t.up)("q-card-actions"),M=(0,t.up)("user-logout"),G=(0,t.up)("methods"),K=(0,t.up)("q-page"),O=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(K,{class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{modelValue:V.form,"onUpdate:modelValue":o[7]||(o[7]=e=>V.form=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,t.w5)((()=>[(0,t.Wm)($,null,{default:(0,t.w5)((()=>[(0,t.Wm)(z,{onSubmit:o[6]||(o[6]=e=>k.createDataRoles()),class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",l,[(0,t._)("div",i,[(0,t.Wm)(Z,{outlined:"",modelValue:q.formRoles.descripcion,"onUpdate:modelValue":[o[0]||(o[0]=e=>q.formRoles.descripcion=e),o[1]||(o[1]=e=>q.formRoles.descripcion=q.formRoles.descripcion.toUpperCase())],label:"Numero de Cuenta",hint:"","lazy-rules":"",rules:V.reglasDescripcion},{prepend:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"south_america"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",r,[(0,t.Wm)(S,{outlined:"",modelValue:q.formRoles.cod_agencia,"onUpdate:modelValue":o[2]||(o[2]=e=>q.formRoles.cod_agencia=e),label:"Estatus",hint:"",class:"pcform",rules:[k.reglasInputs],options:q.agencias,"option-label":"nb_agencia","option-value":"id","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",n,[(0,t.Wm)(S,{outlined:"",modelValue:q.formRoles.cod_agencia,"onUpdate:modelValue":o[3]||(o[3]=e=>q.formRoles.cod_agencia=e),label:"Tipo de Cuenta",hint:"",rules:[k.reglasInputs],options:q.agencias,"option-label":"nb_agencia","option-value":"id","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",d,[(0,t.Wm)(Z,{outlined:"",modelValue:q.formRoles.descripcion,"onUpdate:modelValue":[o[4]||(o[4]=e=>q.formRoles.descripcion=e),o[5]||(o[5]=e=>q.formRoles.descripcion=q.formRoles.descripcion.toUpperCase())],label:"Firma Autorizada",hint:"","lazy-rules":"",rules:V.reglasDescripcion},{prepend:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"south_america"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",c,[(0,t.Wm)(U,{label:"Agregar Cuenta",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(U,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[O]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(Q,{modelValue:V.formEdit,"onUpdate:modelValue":o[15]||(o[15]=e=>V.formEdit=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,t.w5)((()=>[(0,t.Wm)($,null,{default:(0,t.w5)((()=>[(0,t.Wm)(z,{onSubmit:o[14]||(o[14]=e=>k.putDataRoles())},{default:(0,t.w5)((()=>[(0,t._)("div",m,[(0,t._)("div",u,[(0,t.Wm)(Z,{outlined:"",modelValue:q.formEditRoles.descripcion,"onUpdate:modelValue":[o[8]||(o[8]=e=>q.formEditRoles.descripcion=e),o[9]||(o[9]=e=>q.formEditRoles.descripcion=q.formEditRoles.descripcion.toUpperCase())],label:"Numero de Cuenta",hint:"","lazy-rules":"",rules:V.reglasDescripcion},{prepend:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"south_america"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",p,[(0,t.Wm)(S,{outlined:"",modelValue:q.formEditRoles.cod_agencia,"onUpdate:modelValue":o[10]||(o[10]=e=>q.formEditRoles.cod_agencia=e),label:"Estatus",hint:"",rules:[k.reglasInputs],options:q.agencias,class:"pcform","option-label":"nb_agencia","option-value":"id","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",g,[(0,t.Wm)(S,{outlined:"",modelValue:q.formEditRoles.cod_agencia,"onUpdate:modelValue":o[11]||(o[11]=e=>q.formEditRoles.cod_agencia=e),label:"Tipo de Cuenta",hint:"",rules:[k.reglasInputs],options:q.agencias,"option-label":"nb_agencia","option-value":"id","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",f,[(0,t.Wm)(Z,{outlined:"",modelValue:q.formEditRoles.descripcion,"onUpdate:modelValue":[o[12]||(o[12]=e=>q.formEditRoles.descripcion=e),o[13]||(o[13]=e=>q.formEditRoles.descripcion=q.formEditRoles.descripcion.toUpperCase())],label:"Firma Autorizada",hint:"","lazy-rules":"",rules:V.reglasDescripcion},{prepend:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"south_america"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",h,[(0,t.Wm)(U,{label:"Editar Cuenta",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(U,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[O]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",b,[(0,t._)("div",_,[(0,t._)("div",w,[C,(0,t._)("div",D,[(0,t.Wm)(S,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:q.agencias,"option-label":"nb_agencia","option-value":"id",modelValue:q.selectedAgencia,"onUpdate:modelValue":[o[16]||(o[16]=e=>q.selectedAgencia=e),o[17]||(o[17]=e=>k.getData(`/agencias/${this.selectedAgencia.id}/roles`,"setDataRoles","roles"))],outlined:"",standout:"",label:"Escoge un Banco"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,t._)("div",R,[(0,t.Wm)(Z,{rounded:"",outlined:"",standout:"",modelValue:V.filterRoles,"onUpdate:modelValue":o[18]||(o[18]=e=>V.filterRoles=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",x,[(0,t.Wm)(U,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:o[19]||(o[19]=e=>V.form=!0),onClickCapture:o[20]||(o[20]=o=>e.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,t._)("div",y,[(0,t._)("div",E,[(0,t._)("div",v,[(0,t.Wm)(T,{rows:q.roles,"row-key":"id",columns:q.columnsRoles,separator:V.separator,class:"my-sticky-column-table",filter:V.filterRoles,style:{width:"100%"},grid:e.$q.screen.xs,pagination:V.pagination,"onUpdate:pagination":o[23]||(o[23]=e=>V.pagination=e)},{"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(H,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{k.getData(`/roles/${e.row.id}`,"setDataRolesEdit","formEditRoles"),V.formEdit=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>q.selected=e.row.id,onClickCapture:o[21]||(o[21]=e=>V.rolesDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,s.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(I,{class:(0,s.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(a=>((0,t.wg)(),(0,t.j4)(B,{key:a.name},{default:(0,t.w5)((()=>[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(F,{side:""},{default:(0,t.w5)((()=>["status"===a.name?((0,t.wg)(),(0,t.j4)(P,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,t.wg)(),(0,t.j4)(U,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{k.getData(`/roles/${e.row.id}`,"setDataRolesEdit","formEditRoles"),V.formEdit=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"status"===a.name?((0,t.wg)(),(0,t.j4)(P,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,t.wg)(),(0,t.j4)(U,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>q.selected=e.row.id,onClickCapture:o[22]||(o[22]=e=>V.rolesDelete=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(j,{key:4,caption:"",class:(0,s.C_)(a.classes?a.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","grid","pagination"])])])])])]),(0,t.Wm)(Q,{modelValue:V.rolesDelete,"onUpdate:modelValue":o[25]||(o[25]=e=>V.rolesDelete=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)($,null,{default:(0,t.w5)((()=>[W])),_:1}),(0,t.Wm)(L,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(U,{flat:"",label:"Cancelar",color:"primary"},null,512),[[O]]),(0,t.wy)((0,t.Wm)(U,{flat:"",label:"Aceptar",color:"primary",onClick:o[24]||(o[24]=e=>k.deleteData(q.selected))},null,512),[[O]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(M,{ref:"userlogout",onDesactivarCrudRoles:k.desactivarCrudRoles},null,8,["onDesactivarCrudRoles"]),(0,t.Wm)(G,{ref:"methods",onGetData:o[26]||(o[26]=e=>k.getData(`/agencias/${this.selectedAgencia.id}/roles`,"setDataRoles","roles")),onSetDataRoles:k.setDataRoles,onSetDataRolesEdit:k.setDataRolesEdit,onSetData:k.setData},null,8,["onSetDataRoles","onSetDataRolesEdit","onSetData"])])),_:1})}var q=a(1959),k=a(5244),A=a(5474),Z=a(8825),S=a(589),U=a(4333);const z={components:{"user-logout":k.Z,methods:U.Z},name:"Bancos",data(){return{columnsRoles:[{name:"id",label:"Codigo",field:"id",align:"left",sortable:!0},{name:"descripcion",label:"Numero de Cuenta",field:"descripcion",align:"left",sortable:!0},{name:"descripcion",label:"Tipo de Cuenta",field:"descripcion",align:"left",sortable:!0},{name:"descripcion",label:"Estatus",field:"descripcion",align:"left",sortable:!0},{name:"descripcion",label:"Firma Autorizada",field:"descripcion",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formRoles:{descripcion:"",cod_agencia:[]},formEditRoles:{descripcion:"",id:"",cod_agencia:[]},agencias:[],roles:[],selected:[],selectedAgencia:[],agenciaRef:"",agenciaRef2:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,Z.Z)(),(0,q.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:`Bearer ${S.Z.getItem("token")}`}},pagination:(0,q.iH)({rowsPerPage:10}),separator:(0,q.iH)("vertical"),form:(0,q.iH)(!1),formEdit:(0,q.iH)(!1),rolesDelete:(0,q.iH)(!1),filterRoles:(0,q.iH)(""),reglasDescripcion:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<30||"Deben ser máximo 30 caracteres",e=>e.length>2||"Deben ser minimo 3 caracteres"]}},mounted(){this.getData("/agencias","setData","agencias"),this.$refs.userlogout.desactivarCrud("c_roles","d_roles","u_roles","desactivarCrudRoles")},methods:{reglasInputs(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},desactivarCrudRoles(e,o,a){1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==a&&(this.disabledEdit=!1)},getData(e,o,a){this.$refs.methods.getData(e,o,a)},setData(e,o){this[o]=e,this.getDataIniciar()},setDataRoles(e,o){this[o]=e.roles},setDataRolesEdit(e,o){this[o].id=e.id,this[o].descripcion=e.descripcion,this[o].cod_agencia=this.selectedAgencia},deleteData(e){this.$refs.methods.deleteData(`/roles/${e}`,"getData")},createDataRoles(){this.formRoles.cod_agencia=this.formRoles.cod_agencia.id,this.$refs.methods.createData("/roles",this.formRoles,"getData"),this.resetForm()},putDataRoles(){this.formEditRoles.cod_agencia=this.formEditRoles.cod_agencia.id,this.$refs.methods.putData(`/roles/${this.formEditRoles.id}`,this.formEditRoles,"getData"),this.resetFormEdit()},resetFormRoles(){this.formRoles.descripcion="",this.formRoles.cod_agencia="",this.form=!1},resetFormEdit(){this.formEditRoles.descripcion=null,this.formEditRoles.cod_agencia=null,this.formEdit=!1},getDataIniciar(){this.agenciaRef2=this.agencias[0].id,this.selectedAgencia=this.agencias[0],A.api.get(`/agencias/${this.agenciaRef2}/roles`,this.axiosConfig).then((e=>{this.roles=e.data.roles}))}}};var $=a(4260),I=a(4379),Q=a(6778),H=a(151),j=a(5589),F=a(5269),P=a(4842),B=a(4554),N=a(3314),T=a(8240),L=a(7352),M=a(3884),G=a(7011),K=a(3414),O=a(2035),Y=a(2350),J=a(7030),X=a(9367),ee=a(677),oe=a(7518),ae=a.n(oe);const te=(0,$.Z)(z,[["render",V]]),se=te;ae()(z,"components",{QPage:I.Z,QDialog:Q.Z,QCard:H.Z,QCardSection:j.Z,QForm:F.Z,QInput:P.Z,QIcon:B.Z,QSelect:N.Z,QBtn:T.Z,QTable:L.Z,QTd:M.Z,QList:G.Z,QItem:K.Z,QItemSection:O.Z,QItemLabel:Y.Z,QChip:J.Z,QCardActions:X.Z}),ae()(z,"directives",{ClosePopup:ee.Z})}}]);