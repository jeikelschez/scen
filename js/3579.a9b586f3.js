"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[3579],{3579:(e,s,o)=>{o.r(s),o.d(s,{default:()=>te});var a=o(3673),i=o(2323);const l={class:"row"},t={class:"col-md-5 col-xs-12"},r={class:"col-md-7 col-xs-12"},n={class:"col-md-5 col-xs-12"},d={class:"col-md-7 col-xs-12"},u={class:"col-md-5 col-xs-12"},c={class:"col-md-7 col-xs-12"},m={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},p={class:"row"},g={class:"col-md-12 col-xs-12"},f={class:"col-md-5 col-xs-12"},h={class:"col-md-7 col-xs-12"},U={class:"col-md-5 col-xs-12"},b={class:"col-md-7 col-xs-12"},_={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},w={class:"row q-pa-sm justify-center"},D={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},v={class:"row"},y=(0,a._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},[(0,a._)("h4",{style:{"font-size":"30px"}},"Seguridad - Usuarios")],-1),x={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},E={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},W={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},V={class:"q-pa-md",style:{"margin-top":"20px"}},C={class:"q-gutter-y-md"},k={bordered:"",flat:"",class:"my-card row"},q=(0,a._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function I(e,s,o,I,A,Z){const z=(0,a.up)("q-icon"),R=(0,a.up)("q-input"),F=(0,a.up)("q-select"),Q=(0,a.up)("q-btn"),S=(0,a.up)("q-form"),$=(0,a.up)("q-card-section"),P=(0,a.up)("q-card"),j=(0,a.up)("q-dialog"),H=(0,a.up)("q-td"),L=(0,a.up)("q-item-label"),N=(0,a.up)("q-item-section"),B=(0,a.up)("q-chip"),T=(0,a.up)("q-item"),G=(0,a.up)("q-list"),O=(0,a.up)("q-table"),K=(0,a.up)("q-card-actions"),Y=(0,a.up)("user-logout"),J=(0,a.up)("q-page"),M=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(J,{class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{modelValue:I.usuariosForm,"onUpdate:modelValue":s[11]||(s[11]=e=>I.usuariosForm=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,{onSubmit:s[10]||(s[10]=e=>Z.createDataUsuarios()),class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",t,[(0,a.Wm)(R,{outlined:"",modelValue:A.formUsuarios.login,"onUpdate:modelValue":[s[0]||(s[0]=e=>A.formUsuarios.login=e),s[1]||(s[1]=e=>A.formUsuarios.login=A.formUsuarios.login.toUpperCase())],label:"Login",hint:"",class:"pcform","lazy-rules":"",rules:I.reglasLogin},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"south_america"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",r,[(0,a.Wm)(R,{outlined:"",modelValue:A.formUsuarios.password,"onUpdate:modelValue":s[3]||(s[3]=e=>A.formUsuarios.password=e),label:"Contraseña",type:I.isPwd?"password":"text","lazy-rules":"",rules:I.reglasPassword},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:I.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[2]||(s[2]=e=>I.isPwd=!I.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])]),(0,a._)("div",n,[(0,a.Wm)(R,{outlined:"",class:"pcform",modelValue:A.formUsuarios.nombre,"onUpdate:modelValue":[s[4]||(s[4]=e=>A.formUsuarios.nombre=e),s[5]||(s[5]=e=>A.formUsuarios.nombre=A.formUsuarios.nombre.toUpperCase())],label:"Nombre",hint:"","lazy-rules":"",rules:I.reglasNombre},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"text_fields"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",d,[(0,a.Wm)(F,{outlined:"",modelValue:A.formUsuarios.activo,"onUpdate:modelValue":s[6]||(s[6]=e=>A.formUsuarios.activo=e),label:"Vigente",hint:"",rules:[Z.reglasInputs],options:A.vigente,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"text_fields"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",u,[(0,a.Wm)(F,{class:"pcform",outlined:"",modelValue:A.formUsuarios.cod_agencia,"onUpdate:modelValue":[s[7]||(s[7]=e=>A.formUsuarios.cod_agencia=e),s[8]||(s[8]=e=>Z.getData(`/agencias/${this.formUsuarios.cod_agencia.id}/roles`,"setDataRoles","roles"))],label:"Agencia",hint:"",rules:[Z.reglasInputs],options:A.agencias,"option-label":"nb_agencia","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",c,[(0,a.Wm)(F,{outlined:"",modelValue:A.formUsuarios.cod_rol,"onUpdate:modelValue":s[9]||(s[9]=e=>A.formUsuarios.cod_rol=e),label:"Rol Desempeñado",hint:"",rules:[Z.reglasInputs],options:A.roles,"option-label":"descripcion","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])])]),(0,a._)("div",m,[(0,a.Wm)(Q,{label:"Agregar Usuario",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(Q,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close",onClick:Z.resetFormUsuarios},null,8,["onClick"]),[[M]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(j,{modelValue:I.usuariosFormEdit,"onUpdate:modelValue":s[21]||(s[21]=e=>I.usuariosFormEdit=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,{onSubmit:s[20]||(s[20]=e=>Z.putDataUsuarios())},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a._)("div",g,[(0,a.Wm)(R,{outlined:"",modelValue:A.formEditUsuarios.login,"onUpdate:modelValue":[s[12]||(s[12]=e=>A.formEditUsuarios.login=e),s[13]||(s[13]=e=>A.formEditUsuarios.login=A.formEditUsuarios.login.toUpperCase())],label:"Login",hint:"",readonly:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"south_america"})])),_:1},8,["modelValue"])]),(0,a._)("div",f,[(0,a.Wm)(R,{outlined:"",class:"pcform",modelValue:A.formEditUsuarios.nombre,"onUpdate:modelValue":[s[14]||(s[14]=e=>A.formEditUsuarios.nombre=e),s[15]||(s[15]=e=>A.formEditUsuarios.nombre=A.formEditUsuarios.nombre.toUpperCase())],label:"Nombre",hint:"","lazy-rules":"",rules:[e=>e&&e.length>0||"Debes escribir algo"]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"text_fields"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",h,[(0,a.Wm)(F,{outlined:"",modelValue:A.formEditUsuarios.activo,"onUpdate:modelValue":s[16]||(s[16]=e=>A.formEditUsuarios.activo=e),label:"Vigente",hint:"",rules:[Z.reglasInputs],options:A.vigente,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"text_fields"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",U,[(0,a.Wm)(F,{class:"pcform",outlined:"",modelValue:A.formEditUsuarios.cod_agencia,"onUpdate:modelValue":[s[17]||(s[17]=e=>A.formEditUsuarios.cod_agencia=e),s[18]||(s[18]=e=>Z.getData(`/agencias/${this.formEditUsuarios.cod_agencia.id}/roles`,"setDataRoles","roles"))],label:"Agencia",hint:"",rules:[Z.reglasInputs],options:A.agencias,"option-label":"nb_agencia","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",b,[(0,a.Wm)(F,{outlined:"",modelValue:A.formEditUsuarios.cod_rol,"onUpdate:modelValue":s[19]||(s[19]=e=>A.formEditUsuarios.cod_rol=e),label:"Rol Desempeñado",hint:"",rules:[Z.reglasInputs],options:A.roles,"option-label":"descripcion","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"south_america"})])),_:1},8,["modelValue","rules","options"])])]),(0,a._)("div",_,[(0,a.Wm)(Q,{label:"Editar Usuario",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(Q,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close",onClick:Z.resetFormEditUsuarios},null,8,["onClick"]),[[M]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",w,[(0,a._)("div",D,[(0,a._)("div",v,[y,(0,a._)("div",x,[(0,a.Wm)(F,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.agencias,"option-label":"nb_agencia","option-value":"id",modelValue:A.selectedAgencia,"onUpdate:modelValue":[s[22]||(s[22]=e=>A.selectedAgencia=e),s[23]||(s[23]=e=>Z.getData(`/agencias/${this.selectedAgencia.id}/usuarios`,"setDataUsuarios","usuarios"))],outlined:"",standout:"",label:"Escoge una Agencia"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",E,[(0,a.Wm)(R,{rounded:"",outlined:"",standout:"",modelValue:I.filterUsuarios,"onUpdate:modelValue":s[24]||(s[24]=e=>I.filterUsuarios=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(z,{name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",W,[(0,a.Wm)(Q,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:s[25]||(s[25]=e=>I.usuariosForm=!0),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,a._)("div",V,[(0,a._)("div",C,[(0,a._)("div",k,[(0,a.Wm)(O,{rows:A.usuarios,"row-key":"id",columns:A.columnsUsuarios,separator:I.separator,class:"my-sticky-column-table",filter:I.filterUsuarios,style:{width:"100%"},grid:e.$q.screen.xs,pagination:I.pagination,"onUpdate:pagination":s[28]||(s[28]=e=>I.pagination=e)},{"body-cell-action":(0,a.w5)((e=>[(0,a.Wm)(H,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:s=>{Z.getData(`/usuarios/${e.row.login}`,"setDataUsuariosEdit","formEditUsuarios"),I.usuariosFormEdit=!0}},null,8,["disabled","onClick"]),(0,a.Wm)(Q,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:s=>A.selected=e.row.login,onClickCapture:s[26]||(s[26]=e=>I.usuariosDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(P,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(o=>((0,a.wg)(),(0,a.j4)(T,{key:o.name},{default:(0,a.w5)((()=>[(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(N,{side:""},{default:(0,a.w5)((()=>["status"===o.name?((0,a.wg)(),(0,a.j4)(B,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,a.wg)(),(0,a.j4)(Q,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:s=>{Z.getData(`/usuarios/${e.row.login}`,"setDataUsuariosEdit","formEditUsuarios"),I.usuariosFormEdit=!0}},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"status"===o.name?((0,a.wg)(),(0,a.j4)(B,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,a.wg)(),(0,a.j4)(Q,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:s=>A.selected=e.row.id,onClickCapture:s[27]||(s[27]=e=>I.usuariosDelete=!0)},null,8,["disabled","onClick"])):((0,a.wg)(),(0,a.j4)(L,{key:4,caption:"",class:(0,i.C_)(o.classes?o.classes:"")},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","grid","pagination"])])])])])]),(0,a.Wm)(j,{modelValue:I.usuariosDelete,"onUpdate:modelValue":s[30]||(s[30]=e=>I.usuariosDelete=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{style:{width:"700px"}},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[q])),_:1}),(0,a.Wm)(K,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(Q,{flat:"",label:"Cancelar",color:"primary"},null,512),[[M]]),(0,a.wy)((0,a.Wm)(Q,{flat:"",label:"Aceptar",color:"primary",onClick:s[29]||(s[29]=e=>Z.deleteData(A.selected))},null,512),[[M]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Y,{ref:"component",onGetData:s[31]||(s[31]=e=>Z.getData(`/agencias/${this.selectedAgencia.id}/usuarios`,"setDataRoles","usuarios")),onGetDataUsuarios:s[32]||(s[32]=e=>Z.getData(`/agencias/${this.selectedAgencia.id}/usuarios`,"setDataUsuarios","usuarios")),onSetDataUsuarios:Z.setDataUsuarios,onSetDataUsuariosEdit:Z.setDataUsuariosEdit,onSetDataRoles:Z.setDataRoles,onSetDataRolesIniciar:Z.setDataRolesIniciar,onSetData:Z.setData,onDesactivarCrudUsuarios:Z.desactivarCrudUsuarios},null,8,["onSetDataUsuarios","onSetDataUsuariosEdit","onSetDataRoles","onSetDataRolesIniciar","onSetData","onDesactivarCrudUsuarios"])])),_:1})}var A=o(1959),Z=o(3738),z=o(589),R=o(5474),F=o(8825);const Q={components:{"user-logout":Z.Z},name:"Bancos",data(){return{columnsUsuarios:[{name:"login",label:"Login",field:"login",align:"left",sortable:!0},{name:"nombre",label:"Nombre",field:"nombre",align:"left",sortable:!0},{name:"roles",label:"Rol Desempeñado",field:e=>e.roles.descripcion,align:"left",sortable:!0},{name:"estatus_desc",label:"Vigente",field:"estatus_desc",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formUsuarios:{login:"",nombre:"",activo:"",cod_rol:[],password:"",cod_agencia:[]},formEditUsuarios:{login:"",nombre:"",activo:"",cod_rol:"",id:"",cod_agencia:""},vigente:[{label:"ACTIVO",value:"1"},{label:"INACTIVO",value:"0"}],agencias:[],roles:[],usuarios:[],selected:[],selectedAgencia:[],agenciaRef:"",agenciaRef2:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){const e=(0,F.Z)();(0,A.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`}},pagination:(0,A.iH)({rowsPerPage:10}),separator:(0,A.iH)("vertical"),password:(0,A.iH)(""),isPwd:(0,A.iH)(!0),usuariosForm:(0,A.iH)(!1),usuariosFormEdit:(0,A.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},usuariosDelete:(0,A.iH)(!1),filterUsuarios:(0,A.iH)(""),reglasLogin:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<12||"Deben ser máximo 11 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"],reglasPassword:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<=10||"Deben ser máximo 10 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"],reglasNombre:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<=50||"Deben ser máximo 50 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"]}},mounted(){this.getData("/agencias","setData","agencias"),this.$refs.component.desactivarCrud("c_usuarios","d_usuarios","u_usuarios","desactivarCrudUsuarios")},methods:{reglasInputs(e){if(null===e)return"Debes Seleccionar Algo"},desactivarCrudUsuarios(e,s,o){1==e&&(this.disabledCreate=!1),1==s&&(this.disabledDelete=!1),1==o&&(this.disabledEdit=!1)},getData(e,s,o){this.$refs.component.getData(e,s,o)},setData(e,s){this[s]=e,this.getDatosIniciar()},setDataUsuarios(e,s){this[s]=e.usuarios},setDataRoles(e,s){this[s]=e.roles,this.formEditUsuarios.cod_rol=""},setDataUsuariosEdit(e,s){this[s].login=e.login,this[s].nombre=e.nombre,this[s].id=e.id,this[s].cod_rol=e.roles.descripcion,this[s].activo=e.activo_desc,this[s].cod_agencia=this.selectedAgencia,this.getData(`/agencias/${this.formEditUsuarios.cod_agencia.id}/roles`,"setDataRolesIniciar","roles")},deleteData(e){this.$refs.component.deleteData(`/usuarios/${e}`,"getDataUsuarios")},createDataUsuarios(){this.formUsuarios.activo=this.formUsuarios.activo.value,this.formUsuarios.cod_rol=this.formUsuarios.cod_rol.id,this.formUsuarios.cod_agencia=this.formUsuarios.cod_agencia.id,this.$refs.component.createData("/usuarios",this.formUsuarios,"getDataUsuarios"),this.resetFormUsuarios()},putDataUsuarios(){this.formEditUsuarios.activo=this.formEditUsuarios.activo.value,this.formEditUsuarios.cod_rol=this.formEditUsuarios.cod_rol.id,this.formEditUsuarios.cod_agencia=this.formEditUsuarios.cod_agencia.id,this.$refs.component.putData(`/usuarios/${this.formEditUsuarios.login}`,this.formEditUsuarios,"getDataUsuarios"),this.resetFormEditUsuarios()},resetFormUsuarios(){this.formUsuarios.nombre=null,this.formUsuarios.login=null,this.formUsuarios.cod_rol=null,this.formUsuarios.activo=null,this.formUsuarios.password=null,this.formUsuarios.cod_agencia=null,this.usuariosForm=!1},resetFormEditUsuarios(){this.formEditUsuarios.nombre=null,this.formEditUsuarios.login=null,this.formEditUsuarios.cod_rol=null,this.formEditUsuarios.activo=null,this.formUsuarios.password=null,this.formUsuarios.cod_agencia=null,this.usuariosFormEdit=!1},getDatosIniciar(){this.agenciaRef2=this.agencias[0].id,this.selectedAgencia=this.agencias[0],R.api.get(`/agencias/${this.agenciaRef2}/usuarios`,this.axiosConfig).then((e=>{this.usuarios=e.data.usuarios}))},setDataRolesIniciar(e,s){this[s]=e.roles}}};var S=o(4260),$=o(4379),P=o(6778),j=o(151),H=o(5589),L=o(5269),N=o(4842),B=o(4554),T=o(3314),G=o(8240),O=o(7352),K=o(3884),Y=o(7011),J=o(3414),M=o(2035),X=o(2350),ee=o(7030),se=o(9367),oe=o(677),ae=o(7518),ie=o.n(ae);const le=(0,S.Z)(Q,[["render",I]]),te=le;ie()(Q,"components",{QPage:$.Z,QDialog:P.Z,QCard:j.Z,QCardSection:H.Z,QForm:L.Z,QInput:N.Z,QIcon:B.Z,QSelect:T.Z,QBtn:G.Z,QTable:O.Z,QTd:K.Z,QList:Y.Z,QItem:J.Z,QItemSection:M.Z,QItemLabel:X.Z,QChip:ee.Z,QCardActions:se.Z}),ie()(Q,"directives",{ClosePopup:oe.Z})}}]);