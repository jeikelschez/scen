"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[8232],{5511:(e,a,s)=>{s.d(a,{Z:()=>u});var t=s(3673);function i(e,a,s,i,o,r){const l=(0,t.up)("q-input");return(0,t.wg)(),(0,t.j4)(l,{ref:"inputRef",modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),outlined:"",label:"Amount","error-message":i.errorMessage,error:!!i.errorMessage},null,8,["modelValue","error-message","error"])}var o=s(5806),r=s(8500);const l={name:"QCurrencyInput",props:{modelValue:Number,options:Object},setup(e){const{inputRef:a}=(0,o.Er)(e.options),{errorMessage:s,value:t}=(0,r.U$)("amount");return{inputRef:a,errorMessage:s,value:t}}};var d=s(4260),n=s(4842),c=s(7518),m=s.n(c);const p=(0,d.Z)(l,[["render",i]]),u=p;m()(l,"components",{QInput:n.Z})},8015:(e,a,s)=>{function t(e,a,s,t,i,o){return null}s.d(a,{Z:()=>n});var i=s(589),o=s(8825);const r={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:"",permisos:[{permisoName:"r_bancos",permiso:!1,pagina:"disabledBancos",paginaSet:"disabledBancosSet"},{permisoName:"r_agencias",permiso:!1,pagina:"disabledAgencias",paginaSet:"disabledAgenciasSet"},{permisoName:"r_ciudades",permiso:!1,pagina:"disabledCiudades",paginaSet:"disabledCiudadesSet"},{permisoName:"r_permisos",permiso:!1,pagina:"disabledPermisos",paginaSet:"disabledPermisosSet"},{permisoName:"r_usuarios",permiso:!1,pagina:"disabledUsuarios",paginaSet:"disabledUsuariosSet"},{permisoName:"r_roles",permiso:!1,pagina:"disabledRoles",paginaSet:"disabledRolesSet"},{permisoName:"r_agentes",permiso:!1,pagina:"disabledAgentes",paginaSet:"disabledAgentesSet"},{permisoName:"r_zonas",permiso:!1,pagina:"disabledZonas",paginaSet:"disabledZonasSet"},{permisoName:"r_unidades",permiso:!1,pagina:"disabledUnidades",paginaSet:"disabledUnidadesSet"},{permisoName:"r_ayudantes",permiso:!1,pagina:"disabledAyudantes",paginaSet:"disabledAyudantesSet"},{permisoName:"r_receptores",permiso:!1,pagina:"disabledReceptores",paginaSet:"disabledReceptoresSet"},{permisoName:"r_tarifas",permiso:!1,pagina:"disabledTarifas",paginaSet:"disabledTarifasSet"},{permisoName:"r_ccorrelativo",permiso:!1,pagina:"disabledCcorrelativo",paginaSet:"disabledCcorrelativoSet"},{permisoName:"r_vcontrol",permiso:!1,pagina:"disabledVcontrol",paginaSet:"disabledVcontrolSet"},{permisoName:"r_cuentas",permiso:!1,pagina:"disabledCuentas",paginaSet:"disabledCuentasSet"},{permisoName:"r_clientes",permiso:!1,pagina:"disabledClientes",paginaSet:"disabledClientesSet"},{permisoName:"r_empleados",permiso:!1,pagina:"disabledEmpleados",paginaSet:"disabledEmpleadosSet"},{permisoName:"r_proveedores",permiso:!1,pagina:"disabledProveedores",paginaSet:"disabledProveedoresSet"},{permisoName:"r_retenciones",permiso:!1,pagina:"disabledRetenciones",paginaSet:"disabledRetencionesSet"},{permisoName:"r_concepto_operacion",permiso:!1,pagina:"disabledConceptoOperacion",paginaSet:"disabledConceptoOperacionSet"},{permisoName:"r_concepto_facturacion",permiso:!1,pagina:"disabledConceptoFacturacion",paginaSet:"disabledConceptoFacturacionSet"},{permisoName:"r_concepto_fpo",permiso:!1,pagina:"disabledConceptoFpo",paginaSet:"disabledConceptoFpoSet"},{permisoName:"r_asignacionguias",permiso:!1,pagina:"disabledAsignacionGuias",paginaSet:"disabledAsignacionGuiasSet"}]}},setup(){const e=(0,o.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,a,s,t,o){for(var r,l,d,n,c=i.Z.getItem("tokenTraducido"),m=0,p=c.usuario.roles.permisos.length;m<p;m++)if(c.usuario.roles.permisos[m].codigo===e&&(r=!0),c.usuario.roles.permisos[m].codigo===t&&(d=!0),c.usuario.roles.permisos[m].codigo===s&&(n=!0),c.usuario.roles.permisos[m].codigo===a&&(l=!0),m==c.usuario.roles.permisos.length.length-1)break;e=!0===r,t=!0===d,s=!0===n,a=!0===l,this.$emit(o,e,a,t,s)},desactivarOpciones(e){for(var a=i.Z.getItem("tokenTraducido"),s=0,t=this.permisos.length;s<t;s++){var o=0;for(t=a.usuario.roles.permisos.length;o<t;o++)if(a.usuario.roles.permisos[o].codigo==this.permisos[s].permisoName&&(this.permisos[s].permiso=!0),o==a.usuario.roles.permisos.length.length-1)break;if(s==this.permisos.length-1){this.$emit(e,this.permisos);break}}}}};var l=s(4260);const d=(0,l.Z)(r,[["render",t]]),n=d},7105:(e,a,s)=>{function t(e,a,s,t,i,o){return null}s.d(a,{Z:()=>c});var i=s(589),o=s(5474),r=s(8825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,s,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,t).then((e=>{this.$emit(a,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))},getDataEdit:function(e,a,s,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,t).then((e=>{this.$emit(a,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))},deleteData:function(e,a,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api["delete"](e,s).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))},createData:function(e,a,s,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,a,t).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))},putData:function(e,a,s,t){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.put(e,a,t).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.errors[0].message),this.errorDelServidor()}))}}};var d=s(4260);const n=(0,d.Z)(l,[["render",t]]),c=n},8232:(e,a,s)=>{s.r(a),s.d(a,{default:()=>ee});var t=s(3673),i=s(2323);const o={class:"row"},r={class:"col-md-6 col-xs-12"},l={class:"col-md-6 col-xs-12"},d={class:"col-md-12 col-xs-12"},n={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},c={class:"row"},m={class:"col-md-6 col-xs-12"},p={class:"col-md-6 col-xs-12"},u={class:"col-md-12 col-xs-12"},g={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},f={class:"row q-pa-sm justify-center"},h={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},b={class:"row"},w=(0,t._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,t._)("h4",null,[(0,t._)("strong",null,"MANTENIMIENTO - UNIDADES DE TRANSPORTE")])],-1),_={class:"col-md-5 col-sm-7 col-xs-6",style:{"align-self":"center","margin-right":"20px"}},v={class:"col-md-2 col-sm-4 col-xs-5",style:{"text-align":"center","align-self":"center"}},C={class:"q-pa-md"},D={class:"q-gutter-y-md"},S={bordered:"",flat:"",class:"row"},y=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function E(e,a,s,E,x,N){const W=(0,t.up)("q-icon"),Z=(0,t.up)("q-input"),k=(0,t.up)("q-btn"),V=(0,t.up)("q-form"),q=(0,t.up)("q-card-section"),A=(0,t.up)("q-card"),U=(0,t.up)("q-dialog"),$=(0,t.up)("q-inner-loading"),z=(0,t.up)("q-td"),I=(0,t.up)("q-item-label"),Q=(0,t.up)("q-item-section"),P=(0,t.up)("q-chip"),j=(0,t.up)("q-item"),R=(0,t.up)("q-list"),B=(0,t.up)("q-table"),T=(0,t.up)("q-card-actions"),F=(0,t.up)("methods"),H=(0,t.up)("desactivate-crud"),L=(0,t.up)("q-page"),M=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(L,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:E.create,"onUpdate:modelValue":a[6]||(a[6]=e=>E.create=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(V,{onSubmit:N.createData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t._)("div",r,[(0,t.Wm)(Z,{outlined:"",modelValue:x.form.placas,"onUpdate:modelValue":[a[0]||(a[0]=e=>x.form.placas=e),a[1]||(a[1]=e=>x.form.placas=x.form.placas.toUpperCase())],label:"Placa Vehículo",class:"pcform",rules:[N.reglasNotNull10],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(W,{name:"recent_actors"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",l,[(0,t.Wm)(Z,{outlined:"",modelValue:x.form.chofer,"onUpdate:modelValue":[a[2]||(a[2]=e=>x.form.chofer=e),a[3]||(a[3]=e=>x.form.chofer=x.form.chofer.toUpperCase())],label:"Chofer",rules:[N.reglasAllowNull30],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(W,{name:"face"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",d,[(0,t.Wm)(Z,{outlined:"",modelValue:x.form.descripcion,"onUpdate:modelValue":[a[4]||(a[4]=e=>x.form.descripcion=e),a[5]||(a[5]=e=>x.form.descripcion=x.form.descripcion.toUpperCase())],label:"Descripción",rules:[N.reglasNotNull100],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(W,{name:"description"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",n,[(0,t.Wm)(k,{label:"Agregar Unidad",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(k,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[M]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(U,{modelValue:E.edit,"onUpdate:modelValue":a[13]||(a[13]=e=>E.edit=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(V,{onSubmit:N.putData},{default:(0,t.w5)((()=>[(0,t._)("div",c,[(0,t._)("div",m,[(0,t.Wm)(Z,{outlined:"",modelValue:x.formEdit.placas,"onUpdate:modelValue":[a[7]||(a[7]=e=>x.formEdit.placas=e),a[8]||(a[8]=e=>x.formEdit.placas=x.formEdit.placas.toUpperCase())],label:"Placa Vehículo",class:"pcform",rules:[N.reglasNotNull10],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(W,{name:"recent_actors"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",p,[(0,t.Wm)(Z,{outlined:"",modelValue:x.formEdit.chofer,"onUpdate:modelValue":[a[9]||(a[9]=e=>x.formEdit.chofer=e),a[10]||(a[10]=e=>x.formEdit.chofer=x.formEdit.chofer.toUpperCase())],label:"Chofer",rules:[N.reglasAllowNull30],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(W,{name:"face"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",u,[(0,t.Wm)(Z,{outlined:"",modelValue:x.formEdit.descripcion,"onUpdate:modelValue":[a[11]||(a[11]=e=>x.formEdit.descripcion=e),a[12]||(a[12]=e=>x.formEdit.descripcion=x.formEdit.descripcion.toUpperCase())],label:"Descripción",rules:[N.reglasNotNull100],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(W,{name:"description"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",g,[(0,t.Wm)(k,{label:"Editar Unidad",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(k,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[M]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",f,[(0,t._)("div",h,[(0,t._)("div",b,[w,(0,t._)("div",_,[(0,t.Wm)(Z,{modelValue:E.filter,"onUpdate:modelValue":a[14]||(a[14]=e=>E.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(W,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",v,[(0,t.Wm)(k,{label:"Insertar Unidad",rounded:"",color:"primary",onClick:a[15]||(a[15]=e=>E.create=!0),onClickCapture:a[16]||(a[16]=e=>N.resetForm()),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,t._)("div",C,[(0,t._)("div",D,[(0,t._)("div",S,[(0,t.Wm)(B,{rows:x.datos,"row-key":"id",columns:x.columns,loading:E.loading,separator:E.separator,class:"my-sticky-column-table",filter:E.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:E.pagination,"onUpdate:pagination":a[19]||(a[19]=e=>E.pagination=e)},{loading:(0,t.w5)((()=>[(0,t.Wm)($,{showing:"",color:"primary"})])),"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(z,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{N.getData(`/unidades/${e.row.id}`,"setDataEdit","formEdit"),E.edit=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(k,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>x.selected=e.row.id,onClickCapture:a[17]||(a[17]=e=>E.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(A,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(s=>((0,t.wg)(),(0,t.j4)(j,{key:s.name},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(I,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(s.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(Q,{side:""},{default:(0,t.w5)((()=>["status"===s.name?((0,t.wg)(),(0,t.j4)(P,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,t.wg)(),(0,t.j4)(k,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:a=>{N.getData(`/unidades/${e.row.id}`,"setDataEdit","formEdit"),E.edit=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"status"===s.name?((0,t.wg)(),(0,t.j4)(P,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,t.wg)(),(0,t.j4)(k,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:a=>x.selected=e.row.id,onClickCapture:a[18]||(a[18]=e=>E.deletePopup=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(I,{key:4,caption:"",class:(0,i.C_)(s.classes?s.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","filter","grid","pagination"])])])])])]),(0,t.Wm)(U,{modelValue:E.deletePopup,"onUpdate:modelValue":a[21]||(a[21]=e=>E.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[y])),_:1}),(0,t.Wm)(T,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(k,{flat:"",label:"Cancelar",color:"primary"},null,512),[[M]]),(0,t.wy)((0,t.Wm)(k,{flat:"",label:"Aceptar",color:"primary",onClick:a[20]||(a[20]=e=>N.deleteData(x.selected))},null,512),[[M]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(F,{ref:"methods",onGetData:a[22]||(a[22]=e=>N.getData("/unidades","setData","datos")),onSetData:N.setData,onResetLoading:N.resetLoading,onSetDataEdit:N.setDataEdit},null,8,["onSetData","onResetLoading","onSetDataEdit"]),(0,t.Wm)(H,{ref:"desactivateCrud",onDesactivarCrud:N.desactivarCrud},null,8,["onDesactivarCrud"])])),_:1})}var x=s(1959),N=(s(5474),s(8825)),W=(s(589),s(7105)),Z=s(8015),k=s(5511);const V={components:{"desactivate-crud":Z.Z,methods:W.Z,"currency-input":k.Z},name:"Bancos",data(){return{columns:[{name:"placas",label:"Numero de Placa",field:"placas",align:"left",sortable:!0},{name:"chofer",label:"Chofer",field:"chofer",align:"left",sortable:!0},{name:"descripcion",label:"Descripcion de Unidad",field:"descripcion",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{placas:"",chofer:"",descripcion:""},datos:[],formEdit:{id:"",placas:"",chofer:"",descripcion:""},selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:""}}}},setup(){(0,N.Z)(),(0,x.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,x.iH)({rowsPerPage:10}),loading:(0,x.iH)(!1),separator:(0,x.iH)("vertical"),create:(0,x.iH)(!1),edit:(0,x.iH)(!1),medium:(0,x.iH)(!1),deletePopup:(0,x.iH)(!1),filter:(0,x.iH)("")}},mounted(){this.getData("/unidades","setData","datos"),this.$refs.desactivateCrud.desactivarCrud("c_unidades","r_unidades","u_unidades","d_unidades","desactivarCrud")},methods:{resetLoading(){this.loading=!1},reglasAllowNull30(e){if(null!==e!==""&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>29)return"Deben ser Maximo 30 caracteres"}},reglasNotNull10(e){if(null===e)return"Debes Seleccionar Algo";if(""===e)return"Debes Seleccionar Algo";if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>9)return"Deben ser Maximo 10 caracteres"}},reglasNotNull100(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>99)return"Deben ser Maximo 100 caracteres"}},desactivarCrud(e,a,s,t){1==a?(1==e&&(this.disabledCreate=!1),1==s&&(this.disabledDelete=!1),1==t&&(this.disabledEdit=!1)):this.$router.push("/error403")},getData(e,a,s){this.$refs.methods.getData(e,a,s,this.axiosConfig),this.loading=!0},setData(e,a){this[a]=e,this.loading=!1},setDataEdit(e,a){this.formEdit.id=e.id,this.formEdit.descripcion=e.descripcion,this.formEdit.placas=e.placas,this.formEdit.chofer=e.chofer,this.loading=!1},deleteData(e){this.$refs.methods.deleteData(`/unidades/${e}`,"getData",this.axiosConfig),this.loading=!0},createData(){this.$refs.methods.createData("/unidades",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.$refs.methods.putData(`/unidades/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.resetFormEdit(),this.loading=!0},resetForm(){this.form.chofer="",this.form.descripcion="",this.form.placas="",this.create=!1},resetFormEdit(){this.formEdit.chofer="",this.formEdit.descripcion="",this.formEdit.placas="",this.edit=!1}}};var q=s(4260),A=s(4379),U=s(6778),$=s(151),z=s(5589),I=s(5269),Q=s(4842),P=s(4554),j=s(8240),R=s(7352),B=s(6941),T=s(3884),F=s(7011),H=s(3414),L=s(2035),M=s(2350),O=s(7030),G=s(9367),K=s(677),Y=s(7518),J=s.n(Y);const X=(0,q.Z)(V,[["render",E]]),ee=X;J()(V,"components",{QPage:A.Z,QDialog:U.Z,QCard:$.Z,QCardSection:z.Z,QForm:I.Z,QInput:Q.Z,QIcon:P.Z,QBtn:j.Z,QTable:R.Z,QInnerLoading:B.Z,QTd:T.Z,QList:F.Z,QItem:H.Z,QItemSection:L.Z,QItemLabel:M.Z,QChip:O.Z,QCardActions:G.Z}),J()(V,"directives",{ClosePopup:K.Z})}}]);