"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[7857],{7389:(e,o,s)=>{function a(e,o,s,a,i,r){return null}s.d(o,{Z:()=>d});var i=s(589),r=s(8825);const t={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:""}},setup(){const e=(0,r.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,o,s,a){for(var r,t,l,n=i.Z.getItem("tokenTraducido"),d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===e&&(r=!0),1==r)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===r&&(e=!0);for(d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===o&&(t=!0),1==t)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===t&&(o=!0);for(d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===s&&(l=!0),1==l)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===l&&(s=!0,this.$emit(a,e,o,s))},desactivarOpciones(e,o,s,a,r,t,l){for(var n,d,u,c,m,g,p=i.Z.getItem("tokenTraducido"),h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo==o&&(n=!0),1==n)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===n&&(o=!0);for(h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo==s&&(d=!0),1==d)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===d&&(s=!0);for(h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo===a&&(u=!0),1==u)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===u&&(a=!0);for(h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo===r&&(c=!0),1==c)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===c&&(r=!0);for(h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo===t&&(m=!0),1==m)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===m&&(t=!0);for(h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo===l&&(g=!0),1==g)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===g&&(l=!0,this.$emit(e,o,s,a,r,t,l))}}};var l=s(4260);const n=(0,l.Z)(t,[["render",a]]),d=n},2635:(e,o,s)=>{function a(e,o,s,a,i,r){return null}s.d(o,{Z:()=>u});var i=s(589),r=s(5474),t=s(8825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,t.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,o,s,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,r.api.get(e,a).then((e=>{this.$emit(o,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,o,s,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,r.api.get(e,a).then((e=>{this.$emit(o,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,o,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,r.api["delete"](e,s).then((e=>{(e.status=200)&&(this.$emit(o),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,o,s,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,r.api.post(e,o,a).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,o,s,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,r.api.put(e,o,a).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var n=s(4260);const d=(0,n.Z)(l,[["render",a]]),u=d},7857:(e,o,s)=>{s.r(o),s.d(o,{default:()=>le});var a=s(3673),i=s(2323);const r={class:"row"},t={class:"col-md-5 col-xs-12"},l={class:"col-md-7 col-xs-12"},n={class:"col-md-5 col-xs-12"},d={class:"col-md-7 col-xs-12"},u={class:"col-md-5 col-xs-12"},c={class:"col-md-7 col-xs-12"},m={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},g={class:"row"},p={class:"col-md-12 col-xs-12"},h={class:"col-md-5 col-xs-12"},f={class:"col-md-7 col-xs-12"},b={class:"col-md-5 col-xs-12"},U={class:"col-md-7 col-xs-12"},w={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},_={class:"row q-pa-sm justify-center"},v={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},D={class:"row"},C=(0,a._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,a._)("h4",{style:{"font-size":"30px"}},[(0,a._)("strong",null,"SEGURIDAD - USUARIOS")])],-1),x={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},y={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},E={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},k={class:"q-pa-md",style:{"margin-top":"20px"}},W={class:"q-gutter-y-md"},V={bordered:"",flat:"",class:"my-card row"},S=(0,a._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function A(e,o,s,A,Z,q){const I=(0,a.up)("q-icon"),z=(0,a.up)("q-input"),$=(0,a.up)("q-select"),R=(0,a.up)("q-btn"),F=(0,a.up)("q-form"),Q=(0,a.up)("q-card-section"),P=(0,a.up)("q-card"),H=(0,a.up)("q-dialog"),L=(0,a.up)("q-inner-loading"),j=(0,a.up)("q-td"),B=(0,a.up)("q-item-label"),N=(0,a.up)("q-item-section"),T=(0,a.up)("q-chip"),O=(0,a.up)("q-item"),G=(0,a.up)("q-list"),J=(0,a.up)("q-table"),K=(0,a.up)("q-card-actions"),Y=(0,a.up)("methods"),M=(0,a.up)("desactivate-crud"),X=(0,a.up)("q-page"),ee=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(X,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{modelValue:A.usuariosForm,"onUpdate:modelValue":o[12]||(o[12]=e=>A.usuariosForm=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{class:"q-pa-md",bordered:"",style:{"max-width":"60vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(F,{onSubmit:o[11]||(o[11]=e=>q.createDataUsuarios()),class:"q-gutter-md",autocomplete:"off"},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a._)("div",t,[(0,a.Wm)(z,{outlined:"",modelValue:Z.formUsuarios.login,"onUpdate:modelValue":[o[0]||(o[0]=e=>Z.formUsuarios.login=e),o[1]||(o[1]=e=>Z.formUsuarios.login=Z.formUsuarios.login.toUpperCase())],label:"Login",hint:"",class:"pcform","lazy-rules":"",rules:A.reglasLogin},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"login"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",l,[(0,a.Wm)(z,{outlined:"",modelValue:Z.formUsuarios.password,"onUpdate:modelValue":o[3]||(o[3]=e=>Z.formUsuarios.password=e),label:"Contraseña",type:A.isPwd?"password":"text","lazy-rules":"",rules:A.reglasPassword},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:A.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[2]||(o[2]=e=>A.isPwd=!A.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])]),(0,a._)("div",n,[(0,a.Wm)(z,{outlined:"",class:"pcform",modelValue:Z.formUsuarios.nombre,"onUpdate:modelValue":[o[4]||(o[4]=e=>Z.formUsuarios.nombre=e),o[5]||(o[5]=e=>Z.formUsuarios.nombre=Z.formUsuarios.nombre.toUpperCase())],label:"Nombre",hint:"","lazy-rules":"",rules:A.reglasNombre},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"face"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",d,[(0,a.Wm)($,{outlined:"",modelValue:Z.formUsuarios.activo,"onUpdate:modelValue":o[6]||(o[6]=e=>Z.formUsuarios.activo=e),label:"Vigente",hint:"",rules:[q.reglasInputs],options:Z.vigente,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",u,[(0,a.Wm)($,{class:"pcform",outlined:"",modelValue:Z.formUsuarios.cod_agencia,"onUpdate:modelValue":[o[7]||(o[7]=e=>Z.formUsuarios.cod_agencia=e),o[9]||(o[9]=e=>{this.axiosConfig.headers.agencia=this.formUsuarios.cod_agencia.id,q.getData("/roles","setDataRoles","roles")})],label:"Agencia",hint:"",rules:[q.reglasInputs],options:Z.agenciasSelected,onFilter:o[8]||(o[8]=(e,o,s)=>q.filterArray(e,o,s,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"apartment"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",c,[(0,a.Wm)($,{outlined:"",modelValue:Z.formUsuarios.cod_rol,"onUpdate:modelValue":o[10]||(o[10]=e=>Z.formUsuarios.cod_rol=e),label:"Rol Desempeñado",hint:"",rules:[q.reglasInputs],options:Z.roles,"option-label":"descripcion","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"badge"})])),_:1},8,["modelValue","rules","options"])])]),(0,a._)("div",m,[(0,a.Wm)(R,{label:"Agregar Usuario",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(R,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close",onClick:q.resetFormUsuarios},null,8,["onClick"]),[[ee]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(H,{modelValue:A.usuariosFormEdit,"onUpdate:modelValue":o[23]||(o[23]=e=>A.usuariosFormEdit=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{class:"q-pa-md",bordered:"",style:{"max-width":"60vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(F,{onSubmit:o[22]||(o[22]=e=>q.putDataUsuarios()),autocomplete:"off"},{default:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a._)("div",p,[(0,a.Wm)(z,{outlined:"",modelValue:Z.formEditUsuarios.login,"onUpdate:modelValue":[o[13]||(o[13]=e=>Z.formEditUsuarios.login=e),o[14]||(o[14]=e=>Z.formEditUsuarios.login=Z.formEditUsuarios.login.toUpperCase())],label:"Login",hint:"",readonly:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"login"})])),_:1},8,["modelValue"])]),(0,a._)("div",h,[(0,a.Wm)(z,{outlined:"",class:"pcform",modelValue:Z.formEditUsuarios.nombre,"onUpdate:modelValue":[o[15]||(o[15]=e=>Z.formEditUsuarios.nombre=e),o[16]||(o[16]=e=>Z.formEditUsuarios.nombre=Z.formEditUsuarios.nombre.toUpperCase())],label:"Nombre",hint:"","lazy-rules":"",rules:A.reglasNombre},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"face"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",f,[(0,a.Wm)($,{outlined:"",modelValue:Z.formEditUsuarios.activo,"onUpdate:modelValue":o[17]||(o[17]=e=>Z.formEditUsuarios.activo=e),label:"Vigente",hint:"",rules:[q.reglasInputs],options:Z.vigente,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",b,[(0,a.Wm)($,{class:"pcform",outlined:"",modelValue:Z.formEditUsuarios.cod_agencia,"onUpdate:modelValue":[o[18]||(o[18]=e=>Z.formEditUsuarios.cod_agencia=e),o[20]||(o[20]=e=>{this.axiosConfig.headers.agencia=this.formEditUsuarios.cod_agencia.id,q.getData("/roles","setDataRoles","roles")})],label:"Agencia",hint:"",rules:[q.reglasInputs],options:Z.agenciasSelected,onFilter:o[19]||(o[19]=(e,o,s)=>q.filterArray(e,o,s,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"apartment"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",U,[(0,a.Wm)($,{outlined:"",modelValue:Z.formEditUsuarios.cod_rol,"onUpdate:modelValue":o[21]||(o[21]=e=>Z.formEditUsuarios.cod_rol=e),label:"Rol Desempeñado",hint:"",rules:[q.reglasInputs],options:Z.roles,"option-label":"descripcion","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"badge"})])),_:1},8,["modelValue","rules","options"])])]),(0,a._)("div",w,[(0,a.Wm)(R,{label:"Editar Usuario",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(R,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close",onClick:q.resetFormEditUsuarios},null,8,["onClick"]),[[ee]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",_,[(0,a._)("div",v,[(0,a._)("div",D,[C,(0,a._)("div",x,[(0,a.Wm)($,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:Z.agenciasSelected,onFilter:o[24]||(o[24]=(e,o,s)=>q.filterArray(e,o,s,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:Z.selectedAgencia,"onUpdate:modelValue":[o[25]||(o[25]=e=>Z.selectedAgencia=e),o[26]||(o[26]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,q.getData("/usuarios","setDataUsuarios","usuarios")})],outlined:"",standout:"",label:"Escoge una Agencia"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",y,[(0,a.Wm)(z,{rounded:"",outlined:"",standout:"",modelValue:A.filterUsuarios,"onUpdate:modelValue":o[27]||(o[27]=e=>A.filterUsuarios=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(I,{name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",E,[(0,a.Wm)(R,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:o[28]||(o[28]=e=>A.usuariosForm=!0),onClickCapture:o[29]||(o[29]=e=>q.resetFormUsuarios()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,a._)("div",k,[(0,a._)("div",W,[(0,a._)("div",V,[(0,a.Wm)(J,{rows:Z.usuarios,"row-key":"id",columns:Z.columnsUsuarios,separator:A.separator,loading:A.loading,class:"my-sticky-column-table",filter:A.filterUsuarios,style:{width:"100%"},grid:e.$q.screen.xs,pagination:A.pagination,"onUpdate:pagination":o[32]||(o[32]=e=>A.pagination=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(L,{showing:"",color:"primary"})])),"body-cell-action":(0,a.w5)((e=>[(0,a.Wm)(j,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(R,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{q.getData(`/usuarios/${e.row.login}`,"setDataUsuariosEdit","formEditUsuarios"),A.usuariosFormEdit=!0}},null,8,["disabled","onClick"]),(0,a.Wm)(R,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>Z.selected=e.row.login,onClickCapture:o[30]||(o[30]=e=>A.usuariosDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(P,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(s=>((0,a.wg)(),(0,a.j4)(O,{key:s.name},{default:(0,a.w5)((()=>[(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(N,{side:""},{default:(0,a.w5)((()=>["status"===s.name?((0,a.wg)(),(0,a.j4)(T,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,a.wg)(),(0,a.j4)(R,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{q.getData(`/usuarios/${e.row.login}`,"setDataUsuariosEdit","formEditUsuarios"),A.usuariosFormEdit=!0}},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"status"===s.name?((0,a.wg)(),(0,a.j4)(T,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,a.wg)(),(0,a.j4)(R,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>Z.selected=e.row.id,onClickCapture:o[31]||(o[31]=e=>A.usuariosDelete=!0)},null,8,["disabled","onClick"])):((0,a.wg)(),(0,a.j4)(B,{key:4,caption:"",class:(0,i.C_)(s.classes?s.classes:"")},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","loading","filter","grid","pagination"])])])])])]),(0,a.Wm)(H,{modelValue:A.usuariosDelete,"onUpdate:modelValue":o[34]||(o[34]=e=>A.usuariosDelete=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{style:{width:"700px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[S])),_:1}),(0,a.Wm)(K,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(R,{flat:"",label:"Cancelar",color:"primary"},null,512),[[ee]]),(0,a.wy)((0,a.Wm)(R,{flat:"",label:"Aceptar",color:"primary",onClick:o[33]||(o[33]=e=>q.deleteData(Z.selected))},null,512),[[ee]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Y,{ref:"methods",onGetData:o[35]||(o[35]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,q.getData("/usuarios","setDataRoles","usuarios")}),onGetDataUsuarios:o[36]||(o[36]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,q.getData("/usuarios","setDataUsuarios","usuarios")}),onSetDataUsuarios:q.setDataUsuarios,onResetLoading:q.resetLoading,onSetDataUsuariosEdit:q.setDataUsuariosEdit,onSetDataRoles:q.setDataRoles,onSetDataRolesIniciar:q.setDataRolesIniciar,onSetData:q.setData},null,8,["onSetDataUsuarios","onResetLoading","onSetDataUsuariosEdit","onSetDataRoles","onSetDataRolesIniciar","onSetData"]),(0,a.Wm)(M,{ref:"desactiveCrud",onDesactivarCrudUsuarios:q.desactivarCrudUsuarios},null,8,["onDesactivarCrudUsuarios"])])),_:1})}var Z=s(1959),q=(s(589),s(5474)),I=s(8825),z=s(2635),$=s(7389);const R={components:{"desactivate-crud":$.Z,methods:z.Z},name:"Bancos",data(){return{columnsUsuarios:[{name:"login",label:"Login",field:"login",align:"left",sortable:!0},{name:"nombre",label:"Nombre",field:"nombre",align:"left",sortable:!0},{name:"roles",label:"Rol Desempeñado",field:e=>e.roles.descripcion,align:"left",sortable:!0},{name:"estatus_desc",label:"Vigente",field:"estatus_desc",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formUsuarios:{login:"",nombre:"",activo:"",cod_rol:[],password:"",cod_agencia:[]},formEditUsuarios:{login:"",nombre:"",activo:"",cod_rol:"",id:"",cod_agencia:""},vigente:[{label:"ACTIVO",value:"1"},{label:"INACTIVO",value:"0"}],agencias:[],roles:[],usuarios:[],selected:[],selectedAgencia:[],agenciasSelected:[],agenciaRef:"",agenciaRef2:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){const e=(0,I.Z)();(0,Z.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:"",agencia:""}},pagination:(0,Z.iH)({rowsPerPage:10}),separator:(0,Z.iH)("vertical"),password:(0,Z.iH)(""),loading:(0,Z.iH)(!1),isPwd:(0,Z.iH)(!0),usuariosForm:(0,Z.iH)(!1),usuariosFormEdit:(0,Z.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},usuariosDelete:(0,Z.iH)(!1),filterUsuarios:(0,Z.iH)(""),reglasLogin:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<12||"Deben ser máximo 11 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"],reglasPassword:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<=10||"Deben ser máximo 10 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"],reglasNombre:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<=50||"Deben ser máximo 50 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"]}},mounted(){this.getData("/agencias","setData","agencias"),this.$refs.desactiveCrud.desactivarCrud("c_usuarios","d_usuarios","u_usuarios","desactivarCrudUsuarios")},methods:{filterArray(e,o,s,a,i,r){o(""!==e?()=>{const o=e.toUpperCase();for(var s=JSON.parse(JSON.stringify(this[i])),t=0,l=this[i].length;t<l;t++)if(this[i][t][r].indexOf(o)>-1||delete s[t],t==this[i].length-1){this[a]=s;break}}:()=>{this[a]=this[i]})},resetLoading(){this.loading=!1},reglasInputs(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},desactivarCrudUsuarios(e,o,s){1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==s&&(this.disabledEdit=!1)},getData(e,o,s){this.$refs.methods.getData(e,o,s,this.axiosConfig),this.loading=!0},setData(e,o){this[o]=e,this.getDatosIniciar(),this.loading=!1},setDataUsuarios(e,o){this[o]=e,this.loading=!1},setDataRoles(e,o){this[o]=e,this.formEditUsuarios.cod_rol=""},setDataUsuariosEdit(e,o){this.loading=!1,this[o].login=e.login,this[o].nombre=e.nombre,this[o].id=e.id,this[o].cod_rol=e.roles.descripcion,this[o].activo=e.activo_desc,this[o].cod_agencia=this.selectedAgencia,this.axiosConfig.headers.agencia=this.formEditUsuarios.cod_agencia.id,this.getData("/roles","setDataRolesIniciar","roles")},deleteData(e){this.$refs.methods.deleteData(`/usuarios/${e}`,"getDataUsuarios",this.axiosConfig),this.loading=!0},createDataUsuarios(){this.formUsuarios.activo=this.formUsuarios.activo.value,this.formUsuarios.cod_rol=this.formUsuarios.cod_rol.id,this.formUsuarios.cod_agencia=this.formUsuarios.cod_agencia.id,this.$refs.methods.createData("/usuarios",this.formUsuarios,"getDataUsuarios",this.axiosConfig),this.usuariosForm=!1,this.loading=!0},putDataUsuarios(){this.formEditUsuarios.activo=this.formEditUsuarios.activo.value,this.formEditUsuarios.cod_rol=this.formEditUsuarios.cod_rol.id,this.formEditUsuarios.cod_agencia=this.formEditUsuarios.cod_agencia.id,this.$refs.methods.putData(`/usuarios/${this.formEditUsuarios.login}`,this.formEditUsuarios,"getDataUsuarios",this.axiosConfig),this.resetFormEditUsuarios(),this.loading=!0},resetFormUsuarios(){this.formUsuarios.nombre=null,this.formUsuarios.login=null,this.formUsuarios.cod_rol=null,this.formUsuarios.activo=null,this.formUsuarios.password=null,this.formUsuarios.cod_agencia=null,this.usuariosForm=!1},resetFormEditUsuarios(){this.formEditUsuarios.nombre=null,this.formEditUsuarios.login=null,this.formEditUsuarios.cod_rol=null,this.formEditUsuarios.activo=null,this.formUsuarios.password=null,this.formUsuarios.cod_agencia=null,this.usuariosFormEdit=!1},getDatosIniciar(){this.agenciaRef2=this.agencias[0].id,this.selectedAgencia=this.agencias[0],this.axiosConfig.headers.agencia=this.agenciaRef2,q.api.get("/roles",this.axiosConfig).then((e=>{this.roles=e.data})),q.api.get("/usuarios",this.axiosConfig).then((e=>{this.usuarios=e.data}))},setDataRolesIniciar(e,o){this[o]=e,this.loading=!0}}};var F=s(4260),Q=s(4379),P=s(6778),H=s(151),L=s(5589),j=s(5269),B=s(4842),N=s(4554),T=s(2448),O=s(8240),G=s(7352),J=s(6941),K=s(3884),Y=s(7011),M=s(3414),X=s(2035),ee=s(2350),oe=s(7030),se=s(9367),ae=s(677),ie=s(7518),re=s.n(ie);const te=(0,F.Z)(R,[["render",A]]),le=te;re()(R,"components",{QPage:Q.Z,QDialog:P.Z,QCard:H.Z,QCardSection:L.Z,QForm:j.Z,QInput:B.Z,QIcon:N.Z,QSelect:T.Z,QBtn:O.Z,QTable:G.Z,QInnerLoading:J.Z,QTd:K.Z,QList:Y.Z,QItem:M.Z,QItemSection:X.Z,QItemLabel:ee.Z,QChip:oe.Z,QCardActions:se.Z}),re()(R,"directives",{ClosePopup:ae.Z})}}]);