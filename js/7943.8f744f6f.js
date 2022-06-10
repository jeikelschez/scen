"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[7943],{7389:(e,r,o)=>{function t(e,r,o,t,l,a){return null}o.d(r,{Z:()=>c});var l=o(589),a=o(8825);const s={name:"desactivateCrud",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${l.Z.getItem("token")}`}},error:""}},setup(){const e=(0,a.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})}}},methods:{desactivarCrud(e,r,o,t){for(var a,s,i,d=l.Z.getItem("tokenTraducido"),c=0,n=d.usuario.roles.permisos.length;c<n;c++){if(d.usuario.roles.permisos[c].codigo===e&&(a=!0),1==a)break;if(c==d.usuario.roles.permisos.length.length-1)break}!0===a&&(e=!0);for(c=0,n=d.usuario.roles.permisos.length;c<n;c++){if(d.usuario.roles.permisos[c].codigo===r&&(s=!0),1==s)break;if(c==d.usuario.roles.permisos.length.length-1)break}!0===s&&(r=!0);for(c=0,n=d.usuario.roles.permisos.length;c<n;c++){if(d.usuario.roles.permisos[c].codigo===o&&(i=!0),1==i)break;if(c==d.usuario.roles.permisos.length.length-1)break}!0===i&&(o=!0,this.$emit(t,e,r,o))},desactivarOpciones(e,r,o,t,a,s,i){for(var d,c,n,u,m,p,f=l.Z.getItem("tokenTraducido"),h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo==r&&(d=!0),1==d)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===d&&(r=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo==o&&(c=!0),1==c)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===c&&(o=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===t&&(n=!0),1==n)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===n&&(t=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===a&&(u=!0),1==u)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===u&&(a=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===s&&(m=!0),1==m)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===m&&(s=!0);for(h=0,g=f.usuario.roles.permisos.length;h<g;h++){if(f.usuario.roles.permisos[h].codigo===i&&(p=!0),1==p)break;if(h==f.usuario.roles.permisos.length.length-1)break}!0===p&&(i=!0,this.$emit(e,r,o,t,a,s,i))}}};var i=o(4260);const d=(0,i.Z)(s,[["render",t]]),c=d},1444:(e,r,o)=>{function t(e,r,o,t,l,a){return null}o.d(r,{Z:()=>n});var l=o(589),a=o(5474),s=o(8825);const i={name:"userLogout",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${l.Z.getItem("token")}`}}}},setup(){const e=(0,s.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,r,o,t){a.api.get(e,t).then((e=>{this.$emit(r,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,r,o,t){a.api.get(e,t).then((e=>{this.$emit(r,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,r,o){a.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(r),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.status),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),this.errorDelServidor()}))},createData:function(e,r,o,t){a.api.post(e,r,t).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))},putData:function(e,r,o,t){a.api.put(e,r,t).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),400===this.error&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),500===this.error&&(this.error="Este elemento tiene otros elementos asociados... Eliminalos primero"),409===this.error&&(this.error="El elemento ya existe en la tabla. Por favor verificalo..."),this.errorDelServidor()}))}}};var d=o(4260);const c=(0,d.Z)(i,[["render",t]]),n=c},7943:(e,r,o)=>{o.r(r),o.d(r,{default:()=>ne});var t=o(3673),l=o(2323);const a={class:"row"},s={class:"col-md-6 col-xs-12"},i={class:"col-md-6 col-xs-12"},d={class:"col-md-12 col-xs-12"},c={class:"col-md-6 col-xs-12"},n={class:"col-md-6 col-xs-12"},u={class:"col-md-6 col-xs-12"},m={class:"col-md-6 col-xs-12"},p={class:"col-md-12 col-xs-12"},f={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},h={class:"row"},g={class:"col-md-6 col-xs-12"},_={class:"col-md-6 col-xs-12"},b={class:"col-md-12 col-xs-12"},w={class:"col-md-6 col-xs-12"},v={class:"col-md-6 col-xs-12"},E={class:"col-md-6 col-xs-12"},C={class:"col-md-6 col-xs-12"},D={class:"col-md-12 col-xs-12"},y={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},x={class:"row q-pa-sm justify-center"},V={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},W={class:"row"},k=(0,t._)("div",{class:"col-md-4 col-xs-12 text-secondary",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,t._)("h4",null,[(0,t._)("strong",null,"MANTENIMIENTO - RECEPTORES")])],-1),U={class:"col-md-5 col-sm-7 col-xs-6",style:{"align-self":"center","margin-right":"20px"}},A={class:"col-md-2 col-sm-4 col-xs-5",style:{"text-align":"center","align-self":"center"}},N={class:"q-pa-md"},q={class:"q-gutter-y-md"},Z={bordered:"",flat:"",class:"row"},S=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function z(e,r,o,z,$,Q){const I=(0,t.up)("q-icon"),P=(0,t.up)("q-input"),H=(0,t.up)("q-select"),j=(0,t.up)("q-btn"),B=(0,t.up)("q-form"),T=(0,t.up)("q-card-section"),M=(0,t.up)("q-card"),R=(0,t.up)("q-dialog"),F=(0,t.up)("q-td"),O=(0,t.up)("q-item-label"),L=(0,t.up)("q-item-section"),G=(0,t.up)("q-chip"),K=(0,t.up)("q-item"),Y=(0,t.up)("q-list"),J=(0,t.up)("q-table"),X=(0,t.up)("q-card-actions"),ee=(0,t.up)("methods"),re=(0,t.up)("desactivate-crud"),oe=(0,t.up)("q-page"),te=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(oe,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{modelValue:z.create,"onUpdate:modelValue":r[15]||(r[15]=e=>z.create=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Wm)(B,{onSubmit:Q.createData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",a,[(0,t._)("div",s,[(0,t.Wm)(P,{outlined:"",modelValue:$.form.nb_receptor,"onUpdate:modelValue":[r[0]||(r[0]=e=>$.form.nb_receptor=e),r[1]||(r[1]=e=>$.form.nb_receptor=$.form.nb_receptor.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[Q.reglasNotNull50]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",i,[(0,t.Wm)(H,{outlined:"",modelValue:$.form.flag_activo,"onUpdate:modelValue":r[2]||(r[2]=e=>$.form.flag_activo=e),label:"Estatus",rules:[Q.reglasSelect],hint:"",options:$.estatus,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"block"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",d,[(0,t.Wm)(P,{outlined:"",modelValue:$.form.dir_receptor,"onUpdate:modelValue":[r[3]||(r[3]=e=>$.form.dir_receptor=e),r[4]||(r[4]=e=>$.form.dir_receptor=$.form.dir_receptor.toUpperCase())],label:"Direccion",rules:[Q.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",c,[(0,t.Wm)(P,{outlined:"",modelValue:$.form.tlf_receptor,"onUpdate:modelValue":[r[5]||(r[5]=e=>$.form.tlf_receptor=e),r[6]||(r[6]=e=>$.form.tlf_receptor=$.form.tlf_receptor.toUpperCase())],label:"Teléfonos",rules:[Q.reglasAllowNull50],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",n,[(0,t.Wm)(P,{outlined:"",modelValue:$.form.cel_receptor,"onUpdate:modelValue":[r[7]||(r[7]=e=>$.form.cel_receptor=e),r[8]||(r[8]=e=>$.form.cel_receptor=$.form.cel_receptor.toUpperCase())],label:"Celular",rules:[Q.reglasAllowNull50],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"phone_iphone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",u,[(0,t.Wm)(P,{outlined:"",modelValue:$.form.cedula_receptor,"onUpdate:modelValue":[r[9]||(r[9]=e=>$.form.cedula_receptor=e),r[10]||(r[10]=e=>$.form.cedula_receptor=$.form.cedula_receptor.toUpperCase())],label:"Cedula",rules:[Q.reglasAllowNull20],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"contacts"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",m,[(0,t.Wm)(P,{outlined:"",modelValue:$.form.placa,"onUpdate:modelValue":[r[11]||(r[11]=e=>$.form.placa=e),r[12]||(r[12]=e=>$.form.placa=$.form.placa.toUpperCase())],label:"Placa",rules:[Q.reglasAllowNull10],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"money"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",p,[(0,t.Wm)(P,{outlined:"",modelValue:$.form.vehiculo,"onUpdate:modelValue":[r[13]||(r[13]=e=>$.form.vehiculo=e),r[14]||(r[14]=e=>$.form.vehiculo=$.form.vehiculo.toUpperCase())],label:"Descripcion de Vehiculo",rules:[Q.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"directions_car"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",f,[(0,t.Wm)(j,{label:"Agregar Receptor",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(j,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[te]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(R,{modelValue:z.edit,"onUpdate:modelValue":r[31]||(r[31]=e=>z.edit=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Wm)(B,{onSubmit:Q.putData},{default:(0,t.w5)((()=>[(0,t._)("div",h,[(0,t._)("div",g,[(0,t.Wm)(P,{outlined:"",modelValue:$.formEdit.nb_receptor,"onUpdate:modelValue":[r[16]||(r[16]=e=>$.formEdit.nb_receptor=e),r[17]||(r[17]=e=>$.formEdit.nb_receptor=$.formEdit.nb_receptor.toUpperCase())],label:"Nombre",hint:"",class:"pcform","lazy-rules":"",rules:[Q.reglasNotNull50]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",_,[(0,t.Wm)(H,{outlined:"",modelValue:$.formEdit.flag_activo,"onUpdate:modelValue":r[18]||(r[18]=e=>$.formEdit.flag_activo=e),label:"Estatus","input-class":"input",rules:[Q.reglasSelect],hint:"",options:$.estatus,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"block"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",b,[(0,t.Wm)(P,{outlined:"",modelValue:$.formEdit.dir_receptor,"onUpdate:modelValue":[r[19]||(r[19]=e=>$.formEdit.dir_receptor=e),r[20]||(r[20]=e=>$.formEdit.dir_receptor=$.formEdit.dir_receptor.toUpperCase())],label:"Direccion",rules:[Q.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",w,[(0,t.Wm)(P,{outlined:"",modelValue:$.formEdit.tlf_receptor,"onUpdate:modelValue":[r[21]||(r[21]=e=>$.formEdit.tlf_receptor=e),r[22]||(r[22]=e=>$.formEdit.tlf_receptor=$.formEdit.tlf_receptor.toUpperCase())],label:"Teléfonos",rules:[Q.reglasAllowNull50],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",v,[(0,t.Wm)(P,{outlined:"",modelValue:$.formEdit.cel_receptor,"onUpdate:modelValue":[r[23]||(r[23]=e=>$.formEdit.cel_receptor=e),r[24]||(r[24]=e=>$.formEdit.cel_receptor=$.formEdit.cel_receptor.toUpperCase())],label:"Celular",rules:[Q.reglasAllowNull50],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"phone_iphone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",E,[(0,t.Wm)(P,{outlined:"",modelValue:$.formEdit.cedula_receptor,"onUpdate:modelValue":[r[25]||(r[25]=e=>$.formEdit.cedula_receptor=e),r[26]||(r[26]=e=>$.formEdit.cedula_receptor=$.formEdit.cedula_receptor.toUpperCase())],label:"Cedula",rules:[Q.reglasAllowNull20],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"contacts"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",C,[(0,t.Wm)(P,{outlined:"",modelValue:$.formEdit.placa,"onUpdate:modelValue":[r[27]||(r[27]=e=>$.formEdit.placa=e),r[28]||(r[28]=e=>$.formEdit.placa=$.formEdit.placa.toUpperCase())],label:"Placa",rules:[Q.reglasAllowNull10],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"money"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",D,[(0,t.Wm)(P,{outlined:"",modelValue:$.formEdit.vehiculo,"onUpdate:modelValue":[r[29]||(r[29]=e=>$.formEdit.vehiculo=e),r[30]||(r[30]=e=>$.formEdit.vehiculo=$.formEdit.vehiculo.toUpperCase())],label:"Descripcion de Vehiculo",rules:[Q.reglasAllowNull100],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"directions_car"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",y,[(0,t.Wm)(j,{label:"Editar Receptor",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(j,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[te]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",x,[(0,t._)("div",V,[(0,t._)("div",W,[k,(0,t._)("div",U,[(0,t.Wm)(P,{modelValue:z.filter,"onUpdate:modelValue":r[32]||(r[32]=e=>z.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(I,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",A,[(0,t.Wm)(j,{label:"Insertar Receptor",rounded:"",color:"primary",onClick:r[33]||(r[33]=e=>z.create=!0),onClickCapture:r[34]||(r[34]=e=>Q.resetForm()),disabled:this.disabledCreate},null,8,["disabled"])])]),(0,t._)("div",N,[(0,t._)("div",q,[(0,t._)("div",Z,[(0,t.Wm)(J,{rows:$.datos,"row-key":"id",columns:$.columns,separator:z.separator,class:"my-sticky-column-table",filter:z.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:z.pagination,"onUpdate:pagination":r[37]||(r[37]=e=>z.pagination=e)},{"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(F,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(j,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:r=>{Q.getData(`/receptores/${e.row.id}`,"setDataEdit","formEdit"),z.edit=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(j,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:r=>$.selected=e.row.id,onClickCapture:r[35]||(r[35]=e=>z.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,l.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(M,{class:(0,l.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(o=>((0,t.wg)(),(0,t.j4)(K,{key:o.name},{default:(0,t.w5)((()=>[(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(L,{side:""},{default:(0,t.w5)((()=>["status"===o.name?((0,t.wg)(),(0,t.j4)(G,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,t.wg)(),(0,t.j4)(j,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.disabledEdit,onClick:r=>{Q.getData(`/receptores/${e.row.id}`,"setDataEdit","formEdit"),z.edit=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"status"===o.name?((0,t.wg)(),(0,t.j4)(G,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,t.wg)(),(0,t.j4)(j,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.disabledDelete,onClick:r=>$.selected=e.row.id,onClickCapture:r[36]||(r[36]=e=>z.deletePopup=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(O,{key:4,caption:"",class:(0,l.C_)(o.classes?o.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","filter","grid","pagination"])])])])])]),(0,t.Wm)(R,{modelValue:z.deletePopup,"onUpdate:modelValue":r[39]||(r[39]=e=>z.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[S])),_:1}),(0,t.Wm)(X,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(j,{flat:"",label:"Cancelar",color:"primary"},null,512),[[te]]),(0,t.wy)((0,t.Wm)(j,{flat:"",label:"Aceptar",color:"primary",onClick:r[38]||(r[38]=e=>Q.deleteData($.selected))},null,512),[[te]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(ee,{ref:"methods",onGetData:r[40]||(r[40]=e=>Q.getData("/receptores","setData","datos")),onSetData:Q.setData,onSetDataEdit:Q.setDataEdit},null,8,["onSetData","onSetDataEdit"]),(0,t.Wm)(re,{ref:"desactivateCrud",onDesactivarCrudBancos:Q.desactivarCrudBancos},null,8,["onDesactivarCrudBancos"])])),_:1})}var $=o(1959),Q=(o(5474),o(8825)),I=o(589),P=o(1444),H=o(7389);const j={components:{"desactivate-crud":H.Z,methods:P.Z},name:"Receptores",data(){return{columns:[{name:"id",label:"Código",field:"id",align:"left",sortable:!0},{name:"nb_receptor",label:"Nombre",field:"nb_receptor",align:"left",sortable:!0},{name:"cedula_receptor",label:"Cedula de Receptor",field:"cedula_receptor",align:"left",sortable:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nb_receptor:"",dir_receptor:"",tlf_receptor:"",cel_receptor:"",cedula_receptor:"",placa:"",vehiculo:"",flag_activo:[]},estatus:[{label:"ACTIVO",value:"A"},{label:"INACTIVO",value:"I"}],datos:[],formEdit:{id:"",nb_receptor:"",dir_receptor:"",tlf_receptor:"",cel_receptor:"",cedula_receptor:"",placa:"",vehiculo:"",flag_activo:[]},selected:[],error:"",disabledCreate:!0,disabledEdit:!0,disabledDelete:!0,axiosConfig:{headers:{Authorization:`Bearer ${I.Z.getItem("token")}`}}}},setup(){(0,Q.Z)(),(0,$.iH)({sortBy:"desc",descending:!1,page:2,rowsPerPage:4});return{pagination:(0,$.iH)({rowsPerPage:10}),separator:(0,$.iH)("vertical"),create:(0,$.iH)(!1),edit:(0,$.iH)(!1),medium:(0,$.iH)(!1),deletePopup:(0,$.iH)(!1),filter:(0,$.iH)("")}},mounted(){this.getData("/receptores","setData","datos"),this.$refs.desactivateCrud.desactivarCrud("c_bancos","d_bancos","u_bancos","desactivarCrudBancos")},methods:{reglasSelect(e){return null===e||""===e?"Debes Seleccionar Algo":void 0},reglasNotNull100(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>99)return"Deben ser Maximo 100 caracteres"}},reglasNotNull20(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>19)return"Deben ser Maximo 19 caracteres"}},reglasNotNull200(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>199)return"Deben ser Maximo 200 caracteres"}},reglasNotNull50(e){if(null!==e!==""){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>49)return"Deben ser Maximo 50 caracteres"}},reglasAllowNull20(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>19)return"Deben ser Maximo 20 caracteres"}},reglasAllowNull100(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>99)return"Deben ser Maximo 100 caracteres"}},reglasAllowNull10(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>9)return"Deben ser Maximo 10 caracteres"}},reglasAllowNull50(e){if(null!==e&&e.length>0){if(e.length<3)return"Deben ser minimo 3 caracteres";if(e.length>49)return"Deben ser Maximo 50 caracteres"}},desactivarCrudBancos(e,r,o){1==e&&(this.disabledCreate=!1),1==r&&(this.disabledDelete=!1),1==o&&(this.disabledEdit=!1)},getData(e,r,o){this.$refs.methods.getData(e,r,o,this.axiosConfig)},setData(e,r){this[r]=e},setDataEdit(e,r){this.formEdit.id=e.id,this.formEdit.nb_receptor=e.nb_receptor,this.formEdit.dir_receptor=e.dir_receptor,this.formEdit.tlf_receptor=e.tlf_receptor,this.formEdit.cel_receptor=e.cel_receptor,this.formEdit.cedula_receptor=e.cedula_receptor,this.formEdit.placa=e.placa,this.formEdit.vehiculo=e.vehiculo,this.formEdit.flag_activo=e.activo_desc},deleteData(e){this.$refs.methods.deleteData(`/receptores/${e}`,"getData",this.axiosConfig)},createData(){this.form.flag_activo=this.form.flag_activo.value,this.$refs.methods.createData("/receptores",this.form,"getData",this.axiosConfig),this.resetForm()},putData(){this.formEdit.flag_activo=this.formEdit.flag_activo.value,this.$refs.methods.putData(`/receptores/${this.formEdit.id}`,this.formEdit,"getData",this.axiosConfig),this.edit=!1,this.resetFormEdit()},resetForm(){this.form.nb_receptor="",this.form.dir_receptor="",this.form.tlf_receptor="",this.form.cel_receptor="",this.form.cedula_receptor="",this.form.cedula_receptor="",this.form.flag_activo="",this.create=!1},resetFormEdit(){this.formEdit.nb_receptor="",this.formEdit.dir_receptor="",this.formEdit.tlf_receptor="",this.formEdit.cel_receptor="",this.formEdit.cedula_receptor="",this.formEdit.flag_activo="",this.formEdit.placa="",this.edit=!1}}};var B=o(4260),T=o(4379),M=o(6778),R=o(151),F=o(5589),O=o(5269),L=o(4842),G=o(4554),K=o(2448),Y=o(8240),J=o(7352),X=o(3884),ee=o(7011),re=o(3414),oe=o(2035),te=o(2350),le=o(7030),ae=o(9367),se=o(677),ie=o(7518),de=o.n(ie);const ce=(0,B.Z)(j,[["render",z]]),ne=ce;de()(j,"components",{QPage:T.Z,QDialog:M.Z,QCard:R.Z,QCardSection:F.Z,QForm:O.Z,QInput:L.Z,QIcon:G.Z,QSelect:K.Z,QBtn:Y.Z,QTable:J.Z,QTd:X.Z,QList:ee.Z,QItem:re.Z,QItemSection:oe.Z,QItemLabel:te.Z,QChip:le.Z,QCardActions:ae.Z}),de()(j,"directives",{ClosePopup:se.Z})}}]);