"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[2574],{7389:(e,o,s)=>{function a(e,o,s,a,i,r){return null}s.d(o,{Z:()=>d});var i=s(589),r=s(8825);const t={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},error:""}},setup(){const e=(0,r.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,o,s,a){for(var r,t,l,n=i.Z.getItem("tokenTraducido"),d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===e&&(r=!0),1==r)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===r&&(e=!0);for(d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===o&&(t=!0),1==t)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===t&&(o=!0);for(d=0,u=n.usuario.roles.permisos.length;d<u;d++){if(n.usuario.roles.permisos[d].codigo===s&&(l=!0),1==l)break;if(d==n.usuario.roles.permisos.length.length-1)break}!0===l&&(s=!0,this.$emit(a,e,o,s))},desactivarOpciones(e,o,s,a,r,t,l){for(var n,d,u,c,m,g,p=i.Z.getItem("tokenTraducido"),h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo==o&&(n=!0),1==n)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===n&&(o=!0);for(h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo==s&&(d=!0),1==d)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===d&&(s=!0);for(h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo===a&&(u=!0),1==u)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===u&&(a=!0);for(h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo===r&&(c=!0),1==c)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===c&&(r=!0);for(h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo===t&&(m=!0),1==m)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===m&&(t=!0);for(h=0,f=p.usuario.roles.permisos.length;h<f;h++){if(p.usuario.roles.permisos[h].codigo===l&&(g=!0),1==g)break;if(h==p.usuario.roles.permisos.length.length-1)break}!0===g&&(l=!0,this.$emit(e,o,s,a,r,t,l))}}};var l=s(4260);const n=(0,l.Z)(t,[["render",a]]),d=n},8007:(e,o,s)=>{function a(e,o,s,a,i,r){return null}s.d(o,{Z:()=>u});var i=s(589),r=s(5474),t=s(8825);const l={name:"userLogout",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}}}},setup(){const e=(0,t.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,o,s,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,r.api.get(e,a).then((e=>{this.$emit(o,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,o,s,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,r.api.get(e,a).then((e=>{this.$emit(o,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,o,s){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,r.api["delete"](e,s).then((e=>{(e.status=200)&&(this.$emit(o),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,o,s,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,r.api.post(e,o,a).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,o,s,a){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,r.api.put(e,o,a).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var n=s(4260);const d=(0,n.Z)(l,[["render",a]]),u=d},2574:(e,o,s)=>{s.r(o),s.d(o,{default:()=>le});var a=s(3673),i=s(2323);const r={class:"row"},t={class:"col-md-5 col-xs-12"},l={class:"col-md-7 col-xs-12"},n={class:"col-md-5 col-xs-12"},d={class:"col-md-7 col-xs-12"},u={class:"col-md-5 col-xs-12"},c={class:"col-md-7 col-xs-12"},m={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},g={class:"row"},p={class:"col-md-12 col-xs-12"},h={class:"col-md-5 col-xs-12"},f={class:"col-md-7 col-xs-12"},b={class:"col-md-5 col-xs-12"},U={class:"col-md-7 col-xs-12"},w={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},_={class:"row q-pa-sm justify-center"},v={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},D={class:"row"},C=(0,a._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,a._)("h4",{style:{"font-size":"30px"}},[(0,a._)("strong",null,"SEGURIDAD - USUARIOS")])],-1),x={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},y={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},E={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},k={class:"q-pa-md",style:{"margin-top":"20px"}},W={class:"q-gutter-y-md"},V={bordered:"",flat:"",class:"my-card row"},Z=(0,a._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function A(e,o,s,A,q,I){const S=(0,a.up)("q-icon"),z=(0,a.up)("q-input"),$=(0,a.up)("q-select"),R=(0,a.up)("q-btn"),F=(0,a.up)("q-form"),P=(0,a.up)("q-card-section"),Q=(0,a.up)("q-card"),H=(0,a.up)("q-dialog"),B=(0,a.up)("q-td"),j=(0,a.up)("q-item-label"),L=(0,a.up)("q-item-section"),N=(0,a.up)("q-chip"),T=(0,a.up)("q-item"),O=(0,a.up)("q-list"),G=(0,a.up)("q-table"),K=(0,a.up)("q-card-actions"),Y=(0,a.up)("methods"),J=(0,a.up)("desactivate-crud"),M=(0,a.up)("q-page"),X=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(M,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{modelValue:A.usuariosForm,"onUpdate:modelValue":o[11]||(o[11]=e=>A.usuariosForm=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{class:"q-pa-md",bordered:"",style:{"max-width":"60vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[(0,a.Wm)(F,{onSubmit:o[10]||(o[10]=e=>I.createDataUsuarios()),class:"q-gutter-md",autocomplete:"off"},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a._)("div",t,[(0,a.Wm)(z,{outlined:"",modelValue:q.formUsuarios.login,"onUpdate:modelValue":[o[0]||(o[0]=e=>q.formUsuarios.login=e),o[1]||(o[1]=e=>q.formUsuarios.login=q.formUsuarios.login.toUpperCase())],label:"Login",hint:"",class:"pcform","lazy-rules":"",rules:A.reglasLogin},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"login"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",l,[(0,a.Wm)(z,{outlined:"",modelValue:q.formUsuarios.password,"onUpdate:modelValue":o[3]||(o[3]=e=>q.formUsuarios.password=e),label:"Contraseña",type:A.isPwd?"password":"text","lazy-rules":"",rules:A.reglasPassword},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:A.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[2]||(o[2]=e=>A.isPwd=!A.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"])]),(0,a._)("div",n,[(0,a.Wm)(z,{outlined:"",class:"pcform",modelValue:q.formUsuarios.nombre,"onUpdate:modelValue":[o[4]||(o[4]=e=>q.formUsuarios.nombre=e),o[5]||(o[5]=e=>q.formUsuarios.nombre=q.formUsuarios.nombre.toUpperCase())],label:"Nombre",hint:"","lazy-rules":"",rules:A.reglasNombre},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"face"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",d,[(0,a.Wm)($,{outlined:"",modelValue:q.formUsuarios.activo,"onUpdate:modelValue":o[6]||(o[6]=e=>q.formUsuarios.activo=e),label:"Vigente",hint:"",rules:[I.reglasInputs],options:q.vigente,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",u,[(0,a.Wm)($,{class:"pcform",outlined:"",modelValue:q.formUsuarios.cod_agencia,"onUpdate:modelValue":[o[7]||(o[7]=e=>q.formUsuarios.cod_agencia=e),o[8]||(o[8]=e=>{this.axiosConfig.headers.agencia=this.formUsuarios.cod_agencia.id,I.getData("/roles","setDataRoles","roles")})],label:"Agencia",hint:"",rules:[I.reglasInputs],options:q.agencias,"option-label":"nb_agencia","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"apartment"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",c,[(0,a.Wm)($,{outlined:"",modelValue:q.formUsuarios.cod_rol,"onUpdate:modelValue":o[9]||(o[9]=e=>q.formUsuarios.cod_rol=e),label:"Rol Desempeñado",hint:"",rules:[I.reglasInputs],options:q.roles,"option-label":"descripcion","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"badge"})])),_:1},8,["modelValue","rules","options"])])]),(0,a._)("div",m,[(0,a.Wm)(R,{label:"Agregar Usuario",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(R,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close",onClick:I.resetFormUsuarios},null,8,["onClick"]),[[X]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(H,{modelValue:A.usuariosFormEdit,"onUpdate:modelValue":o[21]||(o[21]=e=>A.usuariosFormEdit=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{class:"q-pa-md",bordered:"",style:{"max-width":"60vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[(0,a.Wm)(F,{onSubmit:o[20]||(o[20]=e=>I.putDataUsuarios()),autocomplete:"off"},{default:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a._)("div",p,[(0,a.Wm)(z,{outlined:"",modelValue:q.formEditUsuarios.login,"onUpdate:modelValue":[o[12]||(o[12]=e=>q.formEditUsuarios.login=e),o[13]||(o[13]=e=>q.formEditUsuarios.login=q.formEditUsuarios.login.toUpperCase())],label:"Login",hint:"",readonly:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"login"})])),_:1},8,["modelValue"])]),(0,a._)("div",h,[(0,a.Wm)(z,{outlined:"",class:"pcform",modelValue:q.formEditUsuarios.nombre,"onUpdate:modelValue":[o[14]||(o[14]=e=>q.formEditUsuarios.nombre=e),o[15]||(o[15]=e=>q.formEditUsuarios.nombre=q.formEditUsuarios.nombre.toUpperCase())],label:"Nombre",hint:"","lazy-rules":"",rules:A.reglasNombre},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"face"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",f,[(0,a.Wm)($,{outlined:"",modelValue:q.formEditUsuarios.activo,"onUpdate:modelValue":o[16]||(o[16]=e=>q.formEditUsuarios.activo=e),label:"Vigente",hint:"",rules:[I.reglasInputs],options:q.vigente,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",b,[(0,a.Wm)($,{class:"pcform",outlined:"",modelValue:q.formEditUsuarios.cod_agencia,"onUpdate:modelValue":[o[17]||(o[17]=e=>q.formEditUsuarios.cod_agencia=e),o[18]||(o[18]=e=>{this.axiosConfig.headers.agencia=this.formEditUsuarios.cod_agencia.id,I.getData("/roles","setDataRoles","roles")})],label:"Agencia",hint:"",rules:[I.reglasInputs],options:q.agencias,"option-label":"nb_agencia","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"apartment"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",U,[(0,a.Wm)($,{outlined:"",modelValue:q.formEditUsuarios.cod_rol,"onUpdate:modelValue":o[19]||(o[19]=e=>q.formEditUsuarios.cod_rol=e),label:"Rol Desempeñado",hint:"",rules:[I.reglasInputs],options:q.roles,"option-label":"descripcion","option-value":"id","lazy-rules":"","transition-show":"flip-up","transition-hide":"flip-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"badge"})])),_:1},8,["modelValue","rules","options"])])]),(0,a._)("div",w,[(0,a.Wm)(R,{label:"Editar Usuario",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(R,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close",onClick:I.resetFormEditUsuarios},null,8,["onClick"]),[[X]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",_,[(0,a._)("div",v,[(0,a._)("div",D,[C,(0,a._)("div",x,[(0,a.Wm)($,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:q.agencias,"option-label":"nb_agencia","option-value":"id",modelValue:q.selectedAgencia,"onUpdate:modelValue":[o[22]||(o[22]=e=>q.selectedAgencia=e),o[23]||(o[23]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,I.getData("/usuarios","setDataUsuarios","usuarios")})],outlined:"",standout:"",label:"Escoge una Agencia"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",y,[(0,a.Wm)(z,{rounded:"",outlined:"",standout:"",modelValue:A.filterUsuarios,"onUpdate:modelValue":o[24]||(o[24]=e=>A.filterUsuarios=e),type:"search",label:"Búsqueda avanzada"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",E,[(0,a.Wm)(R,{label:"Insertar",rounded:"",color:"primary",disabled:this.disabledCreate,onClick:o[25]||(o[25]=e=>A.usuariosForm=!0),onClickCapture:o[26]||(o[26]=e=>I.resetFormUsuarios()),size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"},null,8,["disabled"])])]),(0,a._)("div",k,[(0,a._)("div",W,[(0,a._)("div",V,[(0,a.Wm)(G,{rows:q.usuarios,"row-key":"id",columns:q.columnsUsuarios,separator:A.separator,class:"my-sticky-column-table",filter:A.filterUsuarios,style:{width:"100%"},grid:e.$q.screen.xs,pagination:A.pagination,"onUpdate:pagination":o[29]||(o[29]=e=>A.pagination=e)},{"body-cell-action":(0,a.w5)((e=>[(0,a.Wm)(B,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(R,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{I.getData(`/usuarios/${e.row.login}`,"setDataUsuariosEdit","formEditUsuarios"),A.usuariosFormEdit=!0}},null,8,["disabled","onClick"]),(0,a.Wm)(R,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>q.selected=e.row.login,onClickCapture:o[27]||(o[27]=e=>A.usuariosDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(Q,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(O,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(s=>((0,a.wg)(),(0,a.j4)(T,{key:s.name},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(j,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(L,{side:""},{default:(0,a.w5)((()=>["status"===s.name?((0,a.wg)(),(0,a.j4)(N,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,a.wg)(),(0,a.j4)(R,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:o=>{I.getData(`/usuarios/${e.row.login}`,"setDataUsuariosEdit","formEditUsuarios"),A.usuariosFormEdit=!0}},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"status"===s.name?((0,a.wg)(),(0,a.j4)(N,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,a.wg)(),(0,a.j4)(R,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:o=>q.selected=e.row.id,onClickCapture:o[28]||(o[28]=e=>A.usuariosDelete=!0)},null,8,["disabled","onClick"])):((0,a.wg)(),(0,a.j4)(j,{key:4,caption:"",class:(0,i.C_)(s.classes?s.classes:"")},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","grid","pagination"])])])])])]),(0,a.Wm)(H,{modelValue:A.usuariosDelete,"onUpdate:modelValue":o[31]||(o[31]=e=>A.usuariosDelete=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{style:{width:"700px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[Z])),_:1}),(0,a.Wm)(K,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(R,{flat:"",label:"Cancelar",color:"primary"},null,512),[[X]]),(0,a.wy)((0,a.Wm)(R,{flat:"",label:"Aceptar",color:"primary",onClick:o[30]||(o[30]=e=>I.deleteData(q.selected))},null,512),[[X]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Y,{ref:"methods",onGetData:o[32]||(o[32]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,I.getData("/usuarios","setDataRoles","usuarios")}),onGetDataUsuarios:o[33]||(o[33]=e=>{this.axiosConfig.headers.agencia=this.selectedAgencia.id,I.getData("/usuarios","setDataUsuarios","usuarios")}),onSetDataUsuarios:I.setDataUsuarios,onSetDataUsuariosEdit:I.setDataUsuariosEdit,onSetDataRoles:I.setDataRoles,onSetDataRolesIniciar:I.setDataRolesIniciar,onSetData:I.setData},null,8,["onSetDataUsuarios","onSetDataUsuariosEdit","onSetDataRoles","onSetDataRolesIniciar","onSetData"]),(0,a.Wm)(J,{ref:"desactiveCrud",onDesactivarCrudUsuarios:I.desactivarCrudUsuarios},null,8,["onDesactivarCrudUsuarios"])])),_:1})}var q=s(1959),I=s(589),S=s(5474),z=s(8825),$=s(8007),R=s(7389);const F={components:{"desactivate-crud":R.Z,methods:$.Z},name:"Bancos",data(){return{columnsUsuarios:[{name:"login",label:"Login",field:"login",align:"left",sortable:!0},{name:"nombre",label:"Nombre",field:"nombre",align:"left",sortable:!0},{name:"roles",label:"Rol Desempeñado",field:e=>e.roles.descripcion,align:"left",sortable:!0},{name:"estatus_desc",label:"Vigente",field:"estatus_desc",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],formUsuarios:{login:"",nombre:"",activo:"",cod_rol:[],password:"",cod_agencia:[]},formEditUsuarios:{login:"",nombre:"",activo:"",cod_rol:"",id:"",cod_agencia:""},vigente:[{label:"ACTIVO",value:"1"},{label:"INACTIVO",value:"0"}],agencias:[],roles:[],usuarios:[],selected:[],selectedAgencia:[],agenciaRef:"",agenciaRef2:"",error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0}},setup(){const e=(0,z.Z)();(0,q.iH)({sortBy:"desc",descending:!1,page:2,control:0,rowsPerPage:4});return{axiosConfig:{headers:{Authorization:`Bearer ${I.Z.getItem("token")}`,agencia:""}},pagination:(0,q.iH)({rowsPerPage:10}),separator:(0,q.iH)("vertical"),password:(0,q.iH)(""),isPwd:(0,q.iH)(!0),usuariosForm:(0,q.iH)(!1),usuariosFormEdit:(0,q.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},usuariosDelete:(0,q.iH)(!1),filterUsuarios:(0,q.iH)(""),reglasLogin:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<12||"Deben ser máximo 11 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"],reglasPassword:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<=10||"Deben ser máximo 10 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"],reglasNombre:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<=50||"Deben ser máximo 50 caracteres",e=>e.length>=3||"Deben ser minimo 3 caracteres"]}},mounted(){this.getData("/agencias","setData","agencias"),this.$refs.desactiveCrud.desactivarCrud("c_usuarios","d_usuarios","u_usuarios","desactivarCrudUsuarios")},methods:{reglasInputs(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},desactivarCrudUsuarios(e,o,s){1==e&&(this.disabledCreate=!1),1==o&&(this.disabledDelete=!1),1==s&&(this.disabledEdit=!1)},getData(e,o,s){this.$refs.methods.getData(e,o,s,this.axiosConfig)},setData(e,o){this[o]=e,this.getDatosIniciar()},setDataUsuarios(e,o){this[o]=e},setDataRoles(e,o){this[o]=e,this.formEditUsuarios.cod_rol=""},setDataUsuariosEdit(e,o){this[o].login=e.login,this[o].nombre=e.nombre,this[o].id=e.id,this[o].cod_rol=e.roles.descripcion,this[o].activo=e.activo_desc,this[o].cod_agencia=this.selectedAgencia,this.axiosConfig.headers.agencia=this.formEditUsuarios.cod_agencia.id,this.getData("/roles","setDataRolesIniciar","roles")},deleteData(e){this.$refs.methods.deleteData(`/usuarios/${e}`,"getDataUsuarios",this.axiosConfig)},createDataUsuarios(){this.formUsuarios.activo=this.formUsuarios.activo.value,this.formUsuarios.cod_rol=this.formUsuarios.cod_rol.id,this.formUsuarios.cod_agencia=this.formUsuarios.cod_agencia.id,this.$refs.methods.createData("/usuarios",this.formUsuarios,"getDataUsuarios",this.axiosConfig),this.usuariosForm=!1},putDataUsuarios(){this.formEditUsuarios.activo=this.formEditUsuarios.activo.value,this.formEditUsuarios.cod_rol=this.formEditUsuarios.cod_rol.id,this.formEditUsuarios.cod_agencia=this.formEditUsuarios.cod_agencia.id,this.$refs.methods.putData(`/usuarios/${this.formEditUsuarios.login}`,this.formEditUsuarios,"getDataUsuarios",this.axiosConfig),this.resetFormEditUsuarios()},resetFormUsuarios(){this.formUsuarios.nombre=null,this.formUsuarios.login=null,this.formUsuarios.cod_rol=null,this.formUsuarios.activo=null,this.formUsuarios.password=null,this.formUsuarios.cod_agencia=null,this.usuariosForm=!1},resetFormEditUsuarios(){this.formEditUsuarios.nombre=null,this.formEditUsuarios.login=null,this.formEditUsuarios.cod_rol=null,this.formEditUsuarios.activo=null,this.formUsuarios.password=null,this.formUsuarios.cod_agencia=null,this.usuariosFormEdit=!1},getDatosIniciar(){this.agenciaRef2=this.agencias[0].id,this.selectedAgencia=this.agencias[0],this.axiosConfig.headers.agencia=this.agenciaRef2,S.api.get("/roles",this.axiosConfig).then((e=>{this.roles=e.data})),S.api.get("/usuarios",this.axiosConfig).then((e=>{this.usuarios=e.data}))},setDataRolesIniciar(e,o){this[o]=e}}};var P=s(4260),Q=s(4379),H=s(6778),B=s(151),j=s(5589),L=s(5269),N=s(4842),T=s(4554),O=s(2448),G=s(8240),K=s(7352),Y=s(3884),J=s(7011),M=s(3414),X=s(2035),ee=s(2350),oe=s(7030),se=s(9367),ae=s(677),ie=s(7518),re=s.n(ie);const te=(0,P.Z)(F,[["render",A]]),le=te;re()(F,"components",{QPage:Q.Z,QDialog:H.Z,QCard:B.Z,QCardSection:j.Z,QForm:L.Z,QInput:N.Z,QIcon:T.Z,QSelect:O.Z,QBtn:G.Z,QTable:K.Z,QTd:Y.Z,QList:J.Z,QItem:M.Z,QItemSection:X.Z,QItemLabel:ee.Z,QChip:oe.Z,QCardActions:se.Z}),re()(F,"directives",{ClosePopup:ae.Z})}}]);