"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[7147],{7389:(e,t,a)=>{function o(e,t,a,o,s,r){return null}a.d(t,{Z:()=>d});var s=a(589),r=a(8825);const i={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${s.Z.getItem("token")}`}},error:""}},setup(){const e=(0,r.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,t,a,o){for(var r,i,l,n=s.Z.getItem("tokenTraducido"),d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===e&&(r=!0),1==r)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===r&&(e=!0);for(d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===t&&(i=!0),1==i)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===i&&(t=!0);for(d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===a&&(l=!0),1==l)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===l&&(a=!0,this.$emit(o,e,t,a))},desactivarOpciones(e,t,a,o,r,i,l){for(var n,d,u,c,m,p,f=s.Z.getItem("tokenTraducido"),h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo==t&&(n=!0),1==n)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===n&&(t=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo==a&&(d=!0),1==d)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===d&&(a=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===o&&(u=!0),1==u)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===u&&(o=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===r&&(c=!0),1==c)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===c&&(r=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===i&&(m=!0),1==m)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===m&&(i=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===l&&(p=!0),1==p)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===p&&(l=!0,this.$emit(e,t,a,o,r,i,l))}}};var l=a(4260);const n=(0,l.Z)(i,[["render",o]]),d=n},2635:(e,t,a)=>{function o(e,t,a,o,s,r){return null}a.d(t,{Z:()=>u});var s=a(589),r=a(5474),i=a(8825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,i.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,a,o){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,r.api.get(e,o).then((e=>{this.$emit(t,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,t,a,o){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,r.api.get(e,o).then((e=>{this.$emit(t,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,t,a){a.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,r.api["delete"](e,a).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,t,a,o){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,r.api.post(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,t,a,o){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,r.api.put(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var n=a(4260);const d=(0,n.Z)(l,[["render",o]]),u=d},7147:(e,t,a)=>{a.r(t),a.d(t,{default:()=>se});var o=a(3673),s=a(2323);const r={class:"row"},i={class:"col-md-12 col-xs-12"},l={class:"col-md-5 col-xs-12"},n={class:"col-md-7 col-xs-12"},d={class:"col-md-12 col-xs-12"},u={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},c={class:"row"},m={class:"col-md-12 col-xs-12"},p={class:"col-md-5 col-xs-12"},f={class:"col-md-7 col-xs-12"},h={class:"col-md-12 col-xs-12"},g={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},C={class:"row q-pa-sm justify-center"},b={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},_={class:"row"},v=(0,o._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,o._)("h4",{style:{"font-size":"26px"}},[(0,o._)("strong",null,"MANTENIMIENTO - CUENTAS BANCARIAS")])],-1),w={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},D={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},E={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},x={class:"q-pa-md",style:{"margin-top":"20px"}},y={class:"q-gutter-y-md"},k={bordered:"",flat:"",class:"my-card row"},W=(0,o._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function z(e,t,a,z,V,A){const Z=(0,o.up)("q-icon"),q=(0,o.up)("q-input"),S=(0,o.up)("q-select"),I=(0,o.up)("q-btn"),U=(0,o.up)("q-form"),$=(0,o.up)("q-card-section"),Q=(0,o.up)("q-card"),B=(0,o.up)("q-dialog"),R=(0,o.up)("q-inner-loading"),H=(0,o.up)("q-td"),T=(0,o.up)("q-item-label"),F=(0,o.up)("q-item-section"),N=(0,o.up)("q-chip"),j=(0,o.up)("q-item"),L=(0,o.up)("q-list"),O=(0,o.up)("q-table"),P=(0,o.up)("q-card-actions"),J=(0,o.up)("desactivate-crud"),M=(0,o.up)("methods"),G=(0,o.up)("q-page"),K=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(G,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{modelValue:z.form,"onUpdate:modelValue":t[7]||(t[7]=e=>z.form=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,o.w5)((()=>[(0,o.Wm)($,null,{default:(0,o.w5)((()=>[(0,o.Wm)(U,{onSubmit:t[6]||(t[6]=e=>A.createDataCuentas()),class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o._)("div",i,[(0,o.Wm)(q,{outlined:"",modelValue:V.formCuentas.nro_cuenta,"onUpdate:modelValue":[t[0]||(t[0]=e=>V.formCuentas.nro_cuenta=e),t[1]||(t[1]=e=>V.formCuentas.nro_cuenta=V.formCuentas.nro_cuenta.toUpperCase())],label:"Numero de Cuenta",hint:"","lazy-rules":"",rules:[A.reglaInputCuenta]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"pin"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",l,[(0,o.Wm)(S,{outlined:"",modelValue:V.formCuentas.flag_activa,"onUpdate:modelValue":t[2]||(t[2]=e=>V.formCuentas.flag_activa=e),label:"Estatus",hint:"",class:"pcform",options:V.estatus,rules:[A.reglasSelect],"lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"rule"})])),_:1},8,["modelValue","options","rules"])]),(0,o._)("div",n,[(0,o.Wm)(S,{outlined:"",modelValue:V.formCuentas.tipo_cuenta,"onUpdate:modelValue":t[3]||(t[3]=e=>V.formCuentas.tipo_cuenta=e),label:"Tipo de Cuenta",hint:"",rules:[A.reglasSelect],options:V.tipoDeCuenta,"lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"ballot"})])),_:1},8,["modelValue","rules","options"])]),(0,o._)("div",d,[(0,o.Wm)(q,{outlined:"",modelValue:V.formCuentas.firma_autorizada,"onUpdate:modelValue":[t[4]||(t[4]=e=>V.formCuentas.firma_autorizada=e),t[5]||(t[5]=e=>V.formCuentas.firma_autorizada=V.formCuentas.firma_autorizada.toUpperCase())],label:"Firma Autorizada",hint:"","lazy-rules":"",rules:[A.reglaInputFirma]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"border_color"})])),_:1},8,["modelValue","rules"])])]),(0,o._)("div",u,[(0,o.Wm)(I,{label:"Agregar Cuenta",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(I,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[K]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(B,{modelValue:z.formEdit,"onUpdate:modelValue":t[15]||(t[15]=e=>z.formEdit=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,o.w5)((()=>[(0,o.Wm)($,null,{default:(0,o.w5)((()=>[(0,o.Wm)(U,{onSubmit:t[14]||(t[14]=e=>A.putDataCuentas())},{default:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o._)("div",m,[(0,o.Wm)(q,{outlined:"",modelValue:V.formEditCuentas.nro_cuenta,"onUpdate:modelValue":[t[8]||(t[8]=e=>V.formEditCuentas.nro_cuenta=e),t[9]||(t[9]=e=>V.formEditCuentas.nro_cuenta=V.formEditCuentas.nro_cuenta.toUpperCase())],label:"Numero de Cuenta",hint:"","lazy-rules":"",rules:[A.reglaInputCuenta]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"pin"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",p,[(0,o.Wm)(S,{outlined:"",modelValue:V.formEditCuentas.flag_activa,"onUpdate:modelValue":t[10]||(t[10]=e=>V.formEditCuentas.flag_activa=e),label:"Estatus",hint:"",rules:[A.reglasSelect],options:V.estatus,class:"pcform","lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,o._)("div",f,[(0,o.Wm)(S,{outlined:"",modelValue:V.formEditCuentas.tipo_cuenta,"onUpdate:modelValue":t[11]||(t[11]=e=>V.formEditCuentas.tipo_cuenta=e),label:"Tipo de Cuenta",hint:"",rules:[A.reglasSelect],options:V.tipoDeCuenta,"lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"ballot"})])),_:1},8,["modelValue","rules","options"])]),(0,o._)("div",h,[(0,o.Wm)(q,{outlined:"",modelValue:V.formEditCuentas.firma_autorizada,"onUpdate:modelValue":[t[12]||(t[12]=e=>V.formEditCuentas.firma_autorizada=e),t[13]||(t[13]=e=>V.formEditCuentas.firma_autorizada=V.formEditCuentas.firma_autorizada.toUpperCase())],label:"Firma Autorizada",hint:"","lazy-rules":"",rules:[A.reglaInputFirma]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"border_color"})])),_:1},8,["modelValue","rules"])])]),(0,o._)("div",g,[(0,o.Wm)(I,{label:"Editar Cuenta",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(I,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[K]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",C,[(0,o._)("div",b,[(0,o._)("div",_,[v,(0,o._)("div",w,[(0,o.Wm)(S,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:V.bancosSelected,onFilter:t[16]||(t[16]=(e,t,a)=>A.filterArray(e,t,a,"bancosSelected","bancos","nb_banco")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_banco","option-value":"id",modelValue:V.selectedBanco,"onUpdate:modelValue":[t[17]||(t[17]=e=>V.selectedBanco=e),t[18]||(t[18]=e=>{this.axiosConfig.headers.banco=this.selectedBanco.id,A.getData("/cuentas","setDataCuentas","cuentas")})],outlined:"",standout:"",label:"Escoge un Banco"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",D,[(0,o.Wm)(q,{rounded:"",outlined:"",standout:"",modelValue:z.filter,"onUpdate:modelValue":t[19]||(t[19]=e=>z.filter=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"search"})])),_:1},8,["modelValue"])]),(0,o._)("div",E,[(0,o.Wm)(I,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:t[20]||(t[20]=e=>z.form=!0),onClickCapture:t[21]||(t[21]=e=>A.resetForm()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,o._)("div",x,[(0,o._)("div",y,[(0,o._)("div",k,[(0,o.Wm)(O,{rows:V.cuentas,"row-key":"id",columns:V.columnsCuentas,separator:z.separator,class:"my-sticky-column-table",filter:z.filter,loading:z.loading,style:{width:"100%"},grid:e.$q.screen.xs,pagination:z.pagination,"onUpdate:pagination":t[24]||(t[24]=e=>z.pagination=e)},{loading:(0,o.w5)((()=>[(0,o.Wm)(R,{showing:"",color:"primary"})])),"body-cell-action":(0,o.w5)((e=>[(0,o.Wm)(H,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{A.getData(`/cuentas/${e.row.id}`,"setDataCuentasEdit","formEditCuentas"),z.formEdit=!0}},null,8,["disabled","onClick"]),(0,o.Wm)(I,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>V.selected=e.row.id,onClickCapture:t[22]||(t[22]=e=>z.cuentasDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,o.w5)((e=>[(0,o._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,s.j5)(e.selected?"transform: scale(0.95);":"")},[(0,o.Wm)(Q,{class:(0,s.C_)(e.selected?"bg-grey-2":"")},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{dense:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(a=>((0,o.wg)(),(0,o.j4)(j,{key:a.name},{default:(0,o.w5)((()=>[(0,o.Wm)(F,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(a.label),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(F,{side:""},{default:(0,o.w5)((()=>["status"===a.name?((0,o.wg)(),(0,o.j4)(N,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,o.wg)(),(0,o.j4)(I,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{A.getData(`/cuentas/${e.row.id}`,"setDataCuentasEdit","formEditCuentas"),z.formEdit=!0}},null,8,["disabled","onClick"])):(0,o.kq)("",!0),"status"===a.name?((0,o.wg)(),(0,o.j4)(N,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,o.wg)(),(0,o.j4)(I,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>V.selected=e.row.id,onClickCapture:t[23]||(t[23]=e=>z.cuentasDelete=!0)},null,8,["disabled","onClick"])):((0,o.wg)(),(0,o.j4)(T,{key:4,caption:"",class:(0,s.C_)(a.classes?a.classes:"")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(a.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","loading","grid","pagination"])])])])])]),(0,o.Wm)(B,{modelValue:z.cuentasDelete,"onUpdate:modelValue":t[26]||(t[26]=e=>z.cuentasDelete=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{style:{width:"700px"}},{default:(0,o.w5)((()=>[(0,o.Wm)($,null,{default:(0,o.w5)((()=>[W])),_:1}),(0,o.Wm)(P,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(I,{flat:"",label:"Cancelar",color:"primary"},null,512),[[K]]),(0,o.wy)((0,o.Wm)(I,{flat:"",label:"Aceptar",color:"primary",onClick:t[25]||(t[25]=e=>A.deleteData(V.selected))},null,512),[[K]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(J,{ref:"desactivateCrud",onDesactivarCrudRoles:A.desactivarCrudRoles},null,8,["onDesactivarCrudRoles"]),(0,o.Wm)(M,{ref:"methods",onGetData:t[27]||(t[27]=e=>{this.axiosConfig.headers.banco=this.selectedBanco.id,A.getData("/cuentas","setDataCuentas","cuentas")}),onSetDataCuentas:A.setDataCuentas,onResetLoading:A.resetLoading,onSetDataCuentasEdit:A.setDataRolesEdit,onSetData:A.setData},null,8,["onSetDataCuentas","onResetLoading","onSetDataCuentasEdit","onSetData"])])),_:1})}var V=a(1959),A=a(5474),Z=a(8825),q=(a(589),a(2635)),S=a(7389);const I={components:{"desactivate-crud":S.Z,methods:q.Z},name:"Cuentas",data(){return{columnsCuentas:[{name:"nro_cuenta",label:"Numero de Cuenta",field:"nro_cuenta",align:"left",sortable:!0},{name:"tipo_desc",label:"Tipo de Cuenta",field:"tipo_desc",align:"left",sortable:!0},{name:"activa_desc",label:"Estatus",field:"activa_desc",align:"left",sortable:!0},{name:"firma_autorizada",label:"Firma Autorizada",field:"firma_autorizada",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formCuentas:{nro_cuenta:"",flag_activa:"",tipo_cuenta:"",firma_autorizada:"",cod_banco:[]},formEditCuentas:{nro_cuenta:"",flag_activa:"",tipo_cuenta:"",firma_autorizada:"",id:"",cod_banco:[]},estatus:[{label:"ACTIVA",value:"A"},{label:"INACTIVA",value:"I"}],tipoDeCuenta:[{label:"AHORRO",value:"A"},{label:"CORRIENTE",value:"C"}],bancos:[],cuentas:[],bancosSelected:[],selected:[],selectedBanco:[],bancoRef:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){(0,Z.Z)(),(0,V.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:"",banco:""}},pagination:(0,V.iH)({rowsPerPage:10}),separator:(0,V.iH)("vertical"),form:(0,V.iH)(!1),loading:(0,V.iH)(!1),formEdit:(0,V.iH)(!1),cuentasDelete:(0,V.iH)(!1),filter:(0,V.iH)("")}},mounted(){this.getData("/bancos","setData","bancos"),this.$refs.desactivateCrud.desactivarCrud("c_roles","d_roles","u_roles","desactivarCrudRoles")},methods:{filterArray(e,t,a,o,s,r){t(""!==e?()=>{const t=e.toUpperCase();for(var a=JSON.parse(JSON.stringify(this[s])),i=0,l=this[s].length;i<l;i++)if(this[s][i][r].indexOf(t)>-1||delete a[i],i==this[s].length-1){this[o]=a;break}}:()=>{this[o]=this[s]})},resetLoading(){this.loading=!1},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglaInputCuenta(e){if(""===e)return"Debes Escribir Algo";if(null===e)return"Debes Escribir Algo";if(null!==e){if(e.length>25)return"Deben ser máximo 25 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},reglaInputFirma(e){if(null!==e){if(e.length>50)return"Deben ser máximo 50 caracteres";if(e.length>0&&e.length<3)return"Deben ser minimo 3 caracteres"}},desactivarCrudRoles(e,t,a){1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==a&&(this.disabledEdit=!1)},getData(e,t,a){this.$refs.methods.getData(e,t,a,this.axiosConfig),this.loading=!0},setData(e,t){this[t]=e,this.getDataIniciar(),this.loading=!1},setDataCuentas(e,t){this[t]=e,this.loading=!1},setDataRolesEdit(e,t){this[t].id=e.id,this[t].nro_cuenta=e.nro_cuenta,this[t].flag_activa=e.activa_desc,this[t].tipo_cuenta=e.tipo_desc,this[t].firma_autorizada=e.firma_autorizada,this[t].cod_banco=e.cod_banco,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/cuentas/${e}`,"getData",this.axiosConfig),this.loading=!0},createDataCuentas(){this.formCuentas.cod_banco=this.selectedBanco.id,this.formCuentas.flag_activa=this.formCuentas.flag_activa.value,this.formCuentas.tipo_cuenta=this.formCuentas.tipo_cuenta.value,this.$refs.methods.createData("/cuentas",this.formCuentas,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putDataCuentas(){this.formEditCuentas.flag_activa=this.formEditCuentas.flag_activa.value,this.formEditCuentas.tipo_cuenta=this.formEditCuentas.tipo_cuenta.value,this.$refs.methods.putData(`/cuentas/${this.formEditCuentas.id}`,this.formEditCuentas,"getData",this.axiosConfig),this.resetFormEdit(),this.loading=!0},resetForm(){this.formCuentas.nro_cuenta="",this.formCuentas.flag_activa="",this.formCuentas.tipo_cuenta="",this.formCuentas.firma_autorizada="",this.form=!1},resetFormEdit(){this.formEditCuentas.nro_cuenta="",this.formEditCuentas.flag_activa="",this.formEditCuentas.tipo_cuenta="",this.formEditCuentas.firma_autorizada="",this.formEditCuentas.cod_banco=null,this.formEdit=!1},getDataIniciar(){this.bancoRef=this.bancos[0].id,this.selectedBanco=this.bancos[0],this.axiosConfig.headers.banco=this.bancoRef,A.api.get("/cuentas",this.axiosConfig).then((e=>{this.cuentas=e.data}))}}};var U=a(4260),$=a(4379),Q=a(6778),B=a(151),R=a(5589),H=a(5269),T=a(4842),F=a(4554),N=a(2448),j=a(8240),L=a(7352),O=a(6941),P=a(3884),J=a(7011),M=a(3414),G=a(2035),K=a(2350),Y=a(7030),X=a(9367),ee=a(677),te=a(7518),ae=a.n(te);const oe=(0,U.Z)(I,[["render",z]]),se=oe;ae()(I,"components",{QPage:$.Z,QDialog:Q.Z,QCard:B.Z,QCardSection:R.Z,QForm:H.Z,QInput:T.Z,QIcon:F.Z,QSelect:N.Z,QBtn:j.Z,QTable:L.Z,QInnerLoading:O.Z,QTd:P.Z,QList:J.Z,QItem:M.Z,QItemSection:G.Z,QItemLabel:K.Z,QChip:Y.Z,QCardActions:X.Z}),ae()(I,"directives",{ClosePopup:ee.Z})}}]);