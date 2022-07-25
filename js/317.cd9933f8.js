"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[317],{7389:(e,t,a)=>{function o(e,t,a,o,r,l){return null}a.d(t,{Z:()=>d});var r=a(589),l=a(8825);const s={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${r.Z.getItem("token")}`}},error:""}},setup(){const e=(0,l.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,t,a,o){for(var l,s,i,n=r.Z.getItem("tokenTraducido"),d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===e&&(l=!0),1==l)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===l&&(e=!0);for(d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===t&&(s=!0),1==s)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===s&&(t=!0);for(d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===a&&(i=!0),1==i)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===i&&(a=!0,this.$emit(o,e,t,a))},desactivarOpciones(e,t,a,o,l,s,i){for(var n,d,u,m,c,g,f=r.Z.getItem("tokenTraducido"),p=0,h=f.usuario.roles.permisos.length;p<h;p++){if(f.usuario.roles.permisos[p].codigo==t&&(n=!0),1==n)break;if(p==f.usuario.roles.permisos.length.length-1)break}!0===n&&(t=!0);for(p=0,h=f.usuario.roles.permisos.length;p<h;p++){if(f.usuario.roles.permisos[p].codigo==a&&(d=!0),1==d)break;if(p==f.usuario.roles.permisos.length.length-1)break}!0===d&&(a=!0);for(p=0,h=f.usuario.roles.permisos.length;p<h;p++){if(f.usuario.roles.permisos[p].codigo===o&&(u=!0),1==u)break;if(p==f.usuario.roles.permisos.length.length-1)break}!0===u&&(o=!0);for(p=0,h=f.usuario.roles.permisos.length;p<h;p++){if(f.usuario.roles.permisos[p].codigo===l&&(m=!0),1==m)break;if(p==f.usuario.roles.permisos.length.length-1)break}!0===m&&(l=!0);for(p=0,h=f.usuario.roles.permisos.length;p<h;p++){if(f.usuario.roles.permisos[p].codigo===s&&(c=!0),1==c)break;if(p==f.usuario.roles.permisos.length.length-1)break}!0===c&&(s=!0);for(p=0,h=f.usuario.roles.permisos.length;p<h;p++){if(f.usuario.roles.permisos[p].codigo===i&&(g=!0),1==g)break;if(p==f.usuario.roles.permisos.length.length-1)break}!0===g&&(i=!0,this.$emit(e,t,a,o,l,s,i))}}};var i=a(4260);const n=(0,i.Z)(s,[["render",o]]),d=n},2635:(e,t,a)=>{function o(e,t,a,o,r,l){return null}a.d(t,{Z:()=>u});var r=a(589),l=a(5474),s=a(8825);const i={name:"userLogout",data:function(){return{}},setup(){const e=(0,s.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,a,o){o.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,l.api.get(e,o).then((e=>{this.$emit(t,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,t,a,o){o.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,l.api.get(e,o).then((e=>{this.$emit(t,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,t,a){a.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,l.api["delete"](e,a).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,t,a,o){o.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,l.api.post(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,t,a,o){o.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,l.api.put(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var n=a(4260);const d=(0,n.Z)(i,[["render",o]]),u=d},317:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var o=a(3673),r=a(2323);const l={class:"row"},s={class:"col-md-6 col-xs-12"},i={class:"col-md-6 col-xs-12"},n={class:"col-md-12 col-xs-12"},d={class:"col-md-12 col-xs-12"},u={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},m={class:"row"},c={class:"col-md-6 col-xs-12"},g={class:"col-md-6 col-xs-12"},f={class:"col-md-12 col-xs-12"},p={class:"col-md-12 col-xs-12"},h={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},b={class:"row q-pa-sm justify-center"},y={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},_={class:"row"},v=(0,o._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,o._)("h4",null,[(0,o._)("strong",null,"MANTENIMIENTO - AYUDANTES")])],-1),w={class:"col-md-5 col-sm-7 col-xs-6",style:{"align-self":"center","margin-right":"20px"}},D={class:"col-md-2 col-sm-4 col-xs-5",style:{"text-align":"center","align-self":"center"}},C={class:"q-pa-md"},E={class:"q-gutter-y-md"},x={bordered:"",flat:"",class:"row"},k=(0,o._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function W(e,t,a,W,V,A){const Z=(0,o.up)("q-icon"),q=(0,o.up)("q-input"),S=(0,o.up)("q-select"),I=(0,o.up)("q-btn"),$=(0,o.up)("q-form"),U=(0,o.up)("q-card-section"),z=(0,o.up)("q-card"),Q=(0,o.up)("q-dialog"),P=(0,o.up)("q-inner-loading"),H=(0,o.up)("q-td"),T=(0,o.up)("q-item-label"),B=(0,o.up)("q-item-section"),j=(0,o.up)("q-chip"),N=(0,o.up)("q-item"),L=(0,o.up)("q-list"),F=(0,o.up)("q-table"),O=(0,o.up)("q-card-actions"),M=(0,o.up)("methods"),R=(0,o.up)("desactive-crud"),Y=(0,o.up)("q-page"),G=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(Y,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{modelValue:W.create,"onUpdate:modelValue":t[6]||(t[6]=e=>W.create=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(z,{class:"q-pa-md",bordered:"",style:{"max-width":"60vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(U,null,{default:(0,o.w5)((()=>[(0,o.Wm)($,{onSubmit:A.createData,class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o._)("div",l,[(0,o._)("div",s,[(0,o.Wm)(q,{outlined:"",modelValue:V.form.nb_ayudante,"onUpdate:modelValue":[t[0]||(t[0]=e=>V.form.nb_ayudante=e),t[1]||(t[1]=e=>V.form.nb_ayudante=V.form.nb_ayudante.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[A.reglaInputName]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",i,[(0,o.Wm)(q,{outlined:"",modelValue:V.form.tlf_ayudante,"onUpdate:modelValue":t[2]||(t[2]=e=>V.form.tlf_ayudante=e),label:"Teléfono",rules:[A.reglaInputPhone],hint:"","lazy-rules":"",mask:"### - ### - ##########"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",n,[(0,o.Wm)(q,{outlined:"",modelValue:V.form.dir_ayudante,"onUpdate:modelValue":[t[3]||(t[3]=e=>V.form.dir_ayudante=e),t[4]||(t[4]=e=>V.form.dir_ayudante=V.form.dir_ayudante.toUpperCase())],label:"Direccion",hint:"",rules:[A.reglaDireccion],"lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"location_on"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",d,[(0,o.Wm)(S,{outlined:"",modelValue:V.form.flag_activo,"onUpdate:modelValue":t[5]||(t[5]=e=>V.form.flag_activo=e),label:"Vigente",hint:"",rules:[A.reglasSelect],options:V.vigente,"lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"rule"})])),_:1},8,["modelValue","rules","options"])])]),(0,o._)("div",u,[(0,o.Wm)(I,{label:"Agregar Ayudante",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(I,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[G]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(Q,{modelValue:W.edit,"onUpdate:modelValue":t[13]||(t[13]=e=>W.edit=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(z,{class:"q-pa-md",bordered:"",style:{"max-width":"60vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(U,null,{default:(0,o.w5)((()=>[(0,o.Wm)($,{onSubmit:A.putData},{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o._)("div",c,[(0,o.Wm)(q,{outlined:"",modelValue:V.formEdit.nb_ayudante,"onUpdate:modelValue":[t[7]||(t[7]=e=>V.formEdit.nb_ayudante=e),t[8]||(t[8]=e=>V.formEdit.nb_ayudante=V.formEdit.nb_ayudante.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[A.reglaInputName]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",g,[(0,o.Wm)(q,{outlined:"",modelValue:V.formEdit.tlf_ayudante,"onUpdate:modelValue":t[9]||(t[9]=e=>V.formEdit.tlf_ayudante=e),label:"Teléfono",rules:[A.reglaInputPhone],hint:"","lazy-rules":"",mask:"### - ### - ##########"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",f,[(0,o.Wm)(q,{outlined:"",modelValue:V.formEdit.dir_ayudante,"onUpdate:modelValue":[t[10]||(t[10]=e=>V.formEdit.dir_ayudante=e),t[11]||(t[11]=e=>V.formEdit.dir_ayudante=V.formEdit.dir_ayudante.toUpperCase())],label:"Direccion",hint:"",rules:[A.reglaDireccion],"lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"location_on"})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",p,[(0,o.Wm)(S,{outlined:"",modelValue:V.formEdit.flag_activo,"onUpdate:modelValue":t[12]||(t[12]=e=>V.formEdit.flag_activo=e),label:"Vigente",hint:"",rules:[A.reglasSelect],options:V.vigente,"lazy-rules":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"rule"})])),_:1},8,["modelValue","rules","options"])])]),(0,o._)("div",h,[(0,o.Wm)(I,{label:"Editar Ayudante",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(I,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[G]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",b,[(0,o._)("div",y,[(0,o._)("div",_,[v,(0,o._)("div",w,[(0,o.Wm)(q,{modelValue:W.filter,"onUpdate:modelValue":t[14]||(t[14]=e=>W.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(Z,{name:"search"})])),_:1},8,["modelValue"])]),(0,o._)("div",D,[(0,o.Wm)(I,{label:"Insertar Ayudante",rounded:"",color:"primary",onClick:t[15]||(t[15]=e=>W.create=!0),onClickCapture:t[16]||(t[16]=e=>A.getData("/ayudantes","setdata","datos")),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,o._)("div",C,[(0,o._)("div",E,[(0,o._)("div",x,[(0,o.Wm)(F,{rows:V.datos,"row-key":"id",loading:W.loading,columns:V.columns,separator:W.separator,class:"my-sticky-column-table",filter:W.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:W.pagination,"onUpdate:pagination":t[19]||(t[19]=e=>W.pagination=e)},{loading:(0,o.w5)((()=>[(0,o.Wm)(P,{showing:"",color:"primary"})])),"body-cell-action":(0,o.w5)((e=>[(0,o.Wm)(H,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{A.getData(`/ayudantes/${e.row.id}`,"setDataEdit","formEdit"),W.edit=!0}},null,8,["disabled","onClick"]),(0,o.Wm)(I,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>V.selected=e.row.id,onClickCapture:t[17]||(t[17]=e=>W.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,o.w5)((e=>[(0,o._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,r.j5)(e.selected?"transform: scale(0.95);":"")},[(0,o.Wm)(z,{class:(0,r.C_)(e.selected?"bg-grey-2":"")},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{dense:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(a=>((0,o.wg)(),(0,o.j4)(N,{key:a.name},{default:(0,o.w5)((()=>[(0,o.Wm)(B,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.label),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(B,{side:""},{default:(0,o.w5)((()=>["status"===a.name?((0,o.wg)(),(0,o.j4)(j,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,o.wg)(),(0,o.j4)(I,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:t=>{A.getData(`/ayudantes/${e.row.id}`,"setDataEdit","formEdit"),W.edit=!0}},null,8,["disabled","onClick"])):(0,o.kq)("",!0),"status"===a.name?((0,o.wg)(),(0,o.j4)(j,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.value),1)])),_:2},1032,["color"])):"action"===a.name?((0,o.wg)(),(0,o.j4)(I,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:t=>V.selected=e.row.id,onClickCapture:t[18]||(t[18]=e=>W.deletePopup=!0)},null,8,["disabled","onClick"])):((0,o.wg)(),(0,o.j4)(T,{key:4,caption:"",class:(0,r.C_)(a.classes?a.classes:"")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])])])])]),(0,o.Wm)(Q,{modelValue:W.deletePopup,"onUpdate:modelValue":t[21]||(t[21]=e=>W.deletePopup=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(z,{style:{width:"700px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(U,null,{default:(0,o.w5)((()=>[k])),_:1}),(0,o.Wm)(O,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(I,{flat:"",label:"Cancelar",color:"primary"},null,512),[[G]]),(0,o.wy)((0,o.Wm)(I,{flat:"",label:"Aceptar",color:"primary",onClick:t[20]||(t[20]=e=>A.deleteData(V.selected))},null,512),[[G]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(M,{ref:"methods",onGetData:t[22]||(t[22]=e=>A.getData("/ayudantes","setData","datos")),onSetData:A.setData,onResetLoading:A.resetLoading,onSetDataEdit:A.setDataEdit},null,8,["onSetData","onResetLoading","onSetDataEdit"]),(0,o.Wm)(R,{ref:"desactiveCrud",onDesactivarCrudAyudantes:A.desactivarCrudAyudantes},null,8,["onDesactivarCrudAyudantes"])])),_:1})}var V=a(1959),A=a(8825),Z=(a(589),a(2635)),q=a(7389);const S={components:{"desactive-crud":q.Z,methods:Z.Z},name:"Ayudantes",data(){return{columns:[{name:"nb_ayudante",label:"Nombre",field:"nb_ayudante",align:"left",sortable:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",sortable:!0},{name:"dir_ayudante",label:"Direccion",field:"dir_ayudante",align:"left",sortable:!0},{name:"tlf_ayudante",label:"Telefono",field:"tlf_ayudante",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nb_ayudante:"",dir_ayudante:"",tlf_ayudante:"",flag_activo:""},datos:[],formEdit:{nb_ayudante:"",dir_ayudante:"",tlf_ayudante:"",flag_activo:""},vigente:[{label:"ACTIVO",value:"1"},{label:"INACTIVO",value:"0"}],selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:""}}}},setup(){const e=(0,A.Z)();(0,V.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,V.iH)({rowsPerPage:10}),separator:(0,V.iH)("vertical"),create:(0,V.iH)(!1),loading:(0,V.iH)(!1),edit:(0,V.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Banco agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Banco editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Banco eliminado exitosamente",color:"green"})},medium:(0,V.iH)(!1),deletePopup:(0,V.iH)(!1),filter:(0,V.iH)("")}},mounted(){this.getData("/ayudantes","setData","datos"),this.$refs.desactiveCrud.desactivarCrud("c_bancos","d_bancos","u_bancos","desactivarCrudAyudantes")},methods:{resetLoading(){this.loading=!1},reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasInputs(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglaDireccion(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>100)return"Deben ser maximo 100 caracteres"}},reglaInputName(e){if(null===e)return"Debes Escribir Algo";if(""===e)return"Debes Escribir Algo";if(null!==e!==""&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>50)return"Deben ser maximo 50 caracteres"}},reglaInputPhone(e){if(null!==e!==""&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>50)return"Deben ser maximo 50 caracteres"}},desactivarCrudAyudantes(e,t,a){1==e&&(this.disabledCreate=!1),1==t&&(this.disabledDelete=!1),1==a&&(this.disabledEdit=!1)},getData(e,t,a){this.$refs.methods.getData(e,t,a,this.axiosConfig),this.loading=!0},setData(e,t){this[t]=e,this.loading=!1},setDataEdit(e,t){this[t].id=e.id,this[t].nb_ayudante=e.nb_ayudante,this[t].dir_ayudante=e.dir_ayudante,this[t].tlf_ayudante=e.tlf_ayudante,this[t].flag_activo=e.activo_desc},deleteData(e){this.$refs.methods.deleteData(`/ayudantes/${e}`,"getData",this.axiosConfig),this.loading=!0},createData(){this.form.flag_activo=this.form.flag_activo.value,this.$refs.methods.createData("/ayudantes",this.form,"getData",this.axiosConfig),this.resetForm(),this.loading=!0},putData(){this.formEdit.flag_activo=this.formEdit.flag_activo.value,this.$refs.methods.putData(`/ayudantes/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.loading=!0},resetForm(){this.form.nb_ayudante=null,this.form.dir_ayudante=null,this.form.tlf_ayudante=null,this.form.flag_activo=null,this.create=!1},resetFormEdit(){this.formEdit.nb_ayudante=null,this.formEdit.dir_ayudante=null,this.formEdit.tlf_ayudante=null,this.formEdit.flag_activo=null,this.edit=!1}}};var I=a(4260),$=a(4379),U=a(6778),z=a(151),Q=a(5589),P=a(5269),H=a(4842),T=a(4554),B=a(2448),j=a(8240),N=a(7352),L=a(6941),F=a(3884),O=a(7011),M=a(3414),R=a(2035),Y=a(2350),G=a(7030),K=a(9367),J=a(677),X=a(7518),ee=a.n(X);const te=(0,I.Z)(S,[["render",W]]),ae=te;ee()(S,"components",{QPage:$.Z,QDialog:U.Z,QCard:z.Z,QCardSection:Q.Z,QForm:P.Z,QInput:H.Z,QIcon:T.Z,QSelect:B.Z,QBtn:j.Z,QTable:N.Z,QInnerLoading:L.Z,QTd:F.Z,QList:O.Z,QItem:M.Z,QItemSection:R.Z,QItemLabel:Y.Z,QChip:G.Z,QCardActions:K.Z}),ee()(S,"directives",{ClosePopup:J.Z})}}]);