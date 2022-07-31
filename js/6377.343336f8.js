"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[6377],{7389:(e,t,o)=>{function a(e,t,o,a,r,l){return null}o.d(t,{Z:()=>d});var r=o(589),l=o(8825);const s={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${r.Z.getItem("token")}`}},error:""}},setup(){const e=(0,l.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,t,o,a){for(var l,s,i,n=r.Z.getItem("tokenTraducido"),d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===e&&(l=!0),1==l)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===l&&(e=!0);for(d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===t&&(s=!0),1==s)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===s&&(t=!0);for(d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===o&&(i=!0),1==i)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===i&&(o=!0,this.$emit(a,e,t,o))},desactivarOpciones(e,t,o,a,l,s,i){for(var n,d,u,c,m,p,g=r.Z.getItem("tokenTraducido"),h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo==t&&(n=!0),1==n)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===n&&(t=!0);for(h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo==o&&(d=!0),1==d)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===d&&(o=!0);for(h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo===a&&(u=!0),1==u)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===u&&(a=!0);for(h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo===l&&(c=!0),1==c)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===c&&(l=!0);for(h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo===s&&(m=!0),1==m)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===m&&(s=!0);for(h=0,f=g.usuario.roles.permisos.length;h<f;h++){if(g.usuario.roles.permisos[h].codigo===i&&(p=!0),1==p)break;if(h==g.usuario.roles.permisos.length.length-1)break}!0===p&&(i=!0,this.$emit(e,t,o,a,l,s,i))}}};var i=o(4260);const n=(0,i.Z)(s,[["render",a]]),d=n},2635:(e,t,o)=>{function a(e,t,o,a,r,l){return null}o.d(t,{Z:()=>u});var r=o(589),l=o(5474),s=o(8825);const i={name:"userLogout",data:function(){return{}},setup(){const e=(0,s.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,o,a){a.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,l.api.get(e,a).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,t,o,a){a.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,l.api.get(e,a).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,t,o){o.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,l.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,t,o,a){a.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,l.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,t,o,a){a.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,l.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var n=o(4260);const d=(0,n.Z)(i,[["render",a]]),u=d},6377:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ee});var a=o(3673),r=o(2323);const l={class:"row"},s={class:"col-md-6 col-xs-12"},i={class:"col-md-6 col-xs-12"},n={class:"col-md-12 col-xs-12"},d={class:"full-width row justify-center items-center content-center"},u={class:"row"},c={class:"col-md-6 col-xs-12"},m={class:"col-md-6 col-xs-12"},p={class:"col-md-12 col-xs-12"},g={class:"full-width row justify-center items-center content-center",style:{"margin-top":"10px"}},h={class:"row q-pa-sm justify-center"},f={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 text-secondary"},b=(0,a._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},[(0,a._)("h4",{style:{"font-size":"35px","align-self":"center","text-align":"center"}},[(0,a._)("strong",null,"MANTENIMIENTO - VARIABLE CONTROL")])],-1),w={class:"col-md-8 col-sm-12 col-xs-12 filter",style:{"align-self":"center"}},v={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},D={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},C={class:"q-pa-md",style:{"margin-top":"20px"}},_={class:"q-gutter-y-md"},y={bordered:"",flat:"",class:"my-card row"},E=(0,a._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1);function x(e,t,o,x,k,V){const W=(0,a.up)("q-icon"),q=(0,a.up)("q-input"),A=(0,a.up)("q-select"),Z=(0,a.up)("q-btn"),S=(0,a.up)("q-form"),$=(0,a.up)("q-card-section"),z=(0,a.up)("q-card"),U=(0,a.up)("q-dialog"),I=(0,a.up)("q-inner-loading"),N=(0,a.up)("q-td"),Q=(0,a.up)("q-item-label"),H=(0,a.up)("q-item-section"),P=(0,a.up)("q-chip"),T=(0,a.up)("q-item"),j=(0,a.up)("q-list"),L=(0,a.up)("q-table"),B=(0,a.up)("q-card-actions"),R=(0,a.up)("methods"),M=(0,a.up)("desactive-crud"),O=(0,a.up)("q-page"),F=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(O,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{modelValue:x.create,"onUpdate:modelValue":t[4]||(t[4]=e=>x.create=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,{onSubmit:V.createDato,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",s,[(0,a.Wm)(q,{outlined:"",modelValue:k.form.nombre,"onUpdate:modelValue":[t[0]||(t[0]=e=>k.form.nombre=e),t[1]||(t[1]=e=>k.form.nombre=k.form.nombre.toUpperCase())],label:"Descripción de Variable",hint:"",class:"pcform","lazy-rules":"",rules:[V.reglasNotNull50]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",i,[(0,a.Wm)(q,{"upper-case":"",outlined:"",modelValue:k.form.valor,"onUpdate:modelValue":t[2]||(t[2]=e=>k.form.valor=e),label:"Valor de Variable",hint:"","lazy-rules":"",rules:[V.reglasNotNull100],type:"number"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",n,[(0,a.Wm)(A,{outlined:"",modelValue:k.form.tipo,"onUpdate:modelValue":t[3]||(t[3]=e=>k.form.tipo=e),label:"Tipo de Variable",hint:"",options:k.tipo,"lazy-rules":"",rules:[V.reglasSelect]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"done_all"})])),_:1},8,["modelValue","options","rules"])])]),(0,a._)("div",d,[(0,a.Wm)(Z,{label:"Agregar Control",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(Z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[F]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(U,{modelValue:x.edit,"onUpdate:modelValue":t[9]||(t[9]=e=>x.edit=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,{onSubmit:V.putDato},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a._)("div",c,[(0,a.Wm)(q,{outlined:"",modelValue:k.formEdit.nombre,"onUpdate:modelValue":[t[5]||(t[5]=e=>k.formEdit.nombre=e),t[6]||(t[6]=e=>k.formEdit.nombre=k.formEdit.nombre.toUpperCase())],label:"Descripción de Variable",hint:"",class:"pcform","lazy-rules":"",rules:[V.reglasNotNull50]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",m,[(0,a.Wm)(q,{"upper-case":"",outlined:"",modelValue:k.formEdit.valor,"onUpdate:modelValue":t[7]||(t[7]=e=>k.formEdit.valor=e),label:"Valor de Variable",hint:"","lazy-rules":"",rules:[V.reglasNotNull100],type:"number"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",p,[(0,a.Wm)(A,{outlined:"",modelValue:k.formEdit.tipo,"onUpdate:modelValue":t[8]||(t[8]=e=>k.formEdit.tipo=e),label:"Tipo de Variable",hint:"",options:k.tipo,"lazy-rules":"",rules:[V.reglasSelect]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"done_all"})])),_:1},8,["modelValue","options","rules"])])]),(0,a._)("div",g,[(0,a.Wm)(Z,{label:"Editar Control",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(Z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[F]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",h,[(0,a._)("div",f,[b,(0,a._)("div",w,[(0,a.Wm)(q,{modelValue:x.filter,"onUpdate:modelValue":t[10]||(t[10]=e=>x.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",v,[(0,a.Wm)(Z,{label:"Insertar",rounded:"",style:{"text-align":"center","align-self":"center"},color:"primary",disabled:this.disabledCreate,onClick:t[11]||(t[11]=e=>x.create=!0),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,a._)("div",D,[(0,a._)("div",C,[(0,a._)("div",_,[(0,a._)("div",y,[(0,a.Wm)(L,{rows:k.datos,"row-key":"id",columns:k.columns,separator:x.separator,loading:x.loading,class:"my-sticky-column-table",filter:x.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:x.pagination,"onUpdate:pagination":t[14]||(t[14]=e=>x.pagination=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(I,{showing:"",color:"primary"})])),"body-cell-tipo":(0,a.w5)((e=>[(0,a.Wm)(N,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{outlined:"",modelValue:e.row.tipo_desc,"onUpdate:modelValue":[t=>e.row.tipo_desc=t,t=>{this.getDataEdit(e.row.id,"putDatoSelect"),this.formEdit.tipo=e.row.tipo_desc.value}],options:k.tipo},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1032,["props"])])),"body-cell-action":(0,a.w5)((o=>[(0,a.Wm)(N,{props:o},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:e=>{V.getDataEdit(o.row.id,"setDataEdit"),x.edit=!0}},null,8,["disabled","onClick"]),(0,a.Wm)(Z,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>e.selected=o.row.id,onClickCapture:t[12]||(t[12]=e=>x.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.w5)((o=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,r.j5)(o.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(z,{class:(0,r.C_)(o.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.cols,(l=>((0,a.wg)(),(0,a.j4)(T,{key:l.name},{default:(0,a.w5)((()=>[(0,a.Wm)(H,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(l.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(H,{side:""},{default:(0,a.w5)((()=>["status"===l.name?((0,a.wg)(),(0,a.j4)(P,{key:0,color:"Active"==o.row.status?"green":"Disable"==o.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(l.value),1)])),_:2},1032,["color"])):"action"===l.name?((0,a.wg)(),(0,a.j4)(Z,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:e=>{V.getDataEdit(o.row.id,"setDataEdit"),x.edit=!0}},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"status"===l.name?((0,a.wg)(),(0,a.j4)(P,{key:2,color:"Active"==o.row.status?"green":"Disable"==o.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(l.value),1)])),_:2},1032,["color"])):"action"===l.name?((0,a.wg)(),(0,a.j4)(Z,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>e.selected=o.row.id,onClickCapture:t[13]||(t[13]=e=>x.deletePopup=!0)},null,8,["disabled","onClick"])):((0,a.wg)(),(0,a.j4)(Q,{key:4,caption:"",class:(0,r.C_)(l.classes?l.classes:"")},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(l.value),1)])),_:2},1032,["class"]))])),_:2},1024),(0,a.Wm)(H,{side:""},{default:(0,a.w5)((()=>["status"===l.name?((0,a.wg)(),(0,a.j4)(P,{key:0,color:"Active"==o.row.status?"green":"Disable"==o.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(l.value),1)])),_:2},1032,["color"])):"tipo"===l.name?((0,a.wg)(),(0,a.j4)(A,{key:1,outlined:"",modelValue:o.row.tipo_desc,"onUpdate:modelValue":[e=>o.row.tipo_desc=e,e=>{V.getDataEdit(o.row.id,"putDatoSelect"),this.formEdit.tipo=o.row.tipo_desc.value}],options:k.tipo},null,8,["modelValue","onUpdate:modelValue","options"])):((0,a.wg)(),(0,a.j4)(Q,{key:2,caption:"",class:(0,r.C_)(l.classes?l.classes:"")},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(l.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","loading","filter","grid","pagination"])])])])])]),(0,a.Wm)(U,{modelValue:x.deletePopup,"onUpdate:modelValue":t[16]||(t[16]=e=>x.deletePopup=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{style:{width:"700px"}},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[E])),_:1}),(0,a.Wm)(B,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(Z,{flat:"",label:"Cancelar",color:"primary"},null,512),[[F]]),(0,a.wy)((0,a.Wm)(Z,{flat:"",label:"Aceptar",color:"primary",onClick:t[15]||(t[15]=t=>V.deleteDato(e.selected))},null,512),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(R,{ref:"methods",onGetData:t[17]||(t[17]=e=>V.getData("/vcontrol","setData","datos")),onSetData:V.setData,onResetLoading:V.resetLoading,onSetDataEdit:V.setDataEdit,onPutDatoSelect:V.putDatoSelect},null,8,["onSetData","onResetLoading","onSetDataEdit","onPutDatoSelect"]),(0,a.Wm)(M,{ref:"desactiveCrud",onDesactivarCrudAgencias:V.desactivarCrudAgencias},null,8,["onDesactivarCrudAgencias"])])),_:1})}var k=o(1959),V=o(8825),W=o(2635),q=o(7389);o(589);const A={components:{"desactive-crud":q.Z,methods:W.Z},name:"Bancos",data(){return{columns:[{name:"nombre",label:"Descripción de la Variable",field:"nombre",align:"left",sortable:!0},{name:"tipo",label:"Tipo de Variable",align:"left",sortable:!0,required:!0},{name:"valor",label:"Valor de la Variable",field:"valor",align:"left",type:"string"},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nombre:"",tipo:"",valor:""},formEdit:{id:"",nombre:"",tipo:"",valor:""},tipo:[{label:"STRING",value:"1"},{label:"ENTERO",value:"2"},{label:"DECIMAL",value:"3"},{label:"FECHA",value:"4"},{label:"ENTERO LARGO",value:"5"}],tipos:[],datos:[],disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:"",agencia:"1",tipo:"16",fuente:"CR"}}}},setup(){const e=(0,V.Z)();(0,k.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,k.iH)({rowsPerPage:10}),separator:(0,k.iH)("vertical"),create:(0,k.iH)(!1),loading:(0,k.iH)(!1),edit:(0,k.iH)(!1),activoExistente(){e.notify({message:"Solo puede haber un Activo por Agencia",color:"red"})},deletePopup:(0,k.iH)(!1),filter:(0,k.iH)("")}},mounted(){this.getData("/vcontrol","setData","datos"),this.$refs.desactiveCrud.desactivarCrud("c_agencias","d_agencias","u_agencias","desactivarCrudAgencias")},methods:{resetLoading(){this.loading=!1},reglasAllowNull1(e){if(null!==e!==""&&e.length>1)return"Deben ser Maximo 1 caracter"},reglasNotNull50(e){return null===e||""===e?"Debes Escribir Algo":null!==e!==""&&e.length>50?"Deben ser Maximo 50 caracteres":void 0},reglasNotNull100(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""){if(e>999)return"Deben ser Maximo 3 caracteres";if(e.length<3)return"Deben ser Minimo 3 caracteres"}},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},desactivarCrudAgencias(e,t,o){1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==o&&(this.disabledEdit=!1)},getData(e,t,o){this.$refs.methods.getData(e,t,o,this.axiosConfig),this.loading=!0},setData(e,t){this[t]=e,this.loading=!1},getDataEdit(e,t){this.$refs.methods.getDataEdit(`/vcontrol/${e}`,`${t}`,"formEdit",this.axiosConfig)},setDataEdit(e,t){this[t].id=e.id,this[t].nombre=e.nombre,this[t].tipo=e.tipo_desc,this[t].valor=e.valor},getDataSelect(e,t,o){this.$refs.methods.getData(e,t,o,this.axiosConfig)},deleteDato(e){this.$refs.methods.deleteData(`/vcontrol/${e}`,"getData",this.axiosConfig),this.loading=!0},createDato(){this.form.tipo=this.form.tipo.value,this.$refs.methods.createData("/vcontrol",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putDato(){this.formEdit.tipo=this.formEdit.tipo.value,this.$refs.methods.putData(`/vcontrol/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.loading=!0},putDatoSelect(e,t){this[t].id=e.id,this[t].nombre=e.nombre,this[t].valor=e.valor,this.$refs.methods.putData(`/vcontrol/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.loading=!0},resetForm(){this.form.nombre="",this.form.tipo="",this.form.valor="",this.create=null},resetFormEdit(){this.formEdit.nombre="",this.formEdit.tipo="",this.formEdit.valor="",this.edit=null}}};var Z=o(4260),S=o(4379),$=o(6778),z=o(151),U=o(5589),I=o(5269),N=o(4842),Q=o(4554),H=o(2448),P=o(8240),T=o(7352),j=o(6941),L=o(3884),B=o(7011),R=o(3414),M=o(2035),O=o(2350),F=o(7030),G=o(9367),K=o(677),Y=o(7518),J=o.n(Y);const X=(0,Z.Z)(A,[["render",x]]),ee=X;J()(A,"components",{QPage:S.Z,QDialog:$.Z,QCard:z.Z,QCardSection:U.Z,QForm:I.Z,QInput:N.Z,QIcon:Q.Z,QSelect:H.Z,QBtn:P.Z,QTable:T.Z,QInnerLoading:j.Z,QTd:L.Z,QList:B.Z,QItem:R.Z,QItemSection:M.Z,QItemLabel:O.Z,QChip:F.Z,QCardActions:G.Z}),J()(A,"directives",{ClosePopup:K.Z})}}]);