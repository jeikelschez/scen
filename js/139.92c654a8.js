(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[139],{55325:(e,o,s)=>{"use strict";function t(e,o,s,t,r,i){return null}s.d(o,{Z:()=>c});var r=s(80589),i=s(5474),a=s(48825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,a.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,o,s,t){void 0==t?t={headers:{Authorization:`Bearer ${r.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,i.api.get(e,t).then((e=>{this.$emit(o,e.data,s)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,o,s,t){void 0==t?t={headers:{Authorization:`Bearer ${r.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,i.api.get(e,t).then((e=>{this.$emit(o,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,o,s){void 0==s?s={headers:{Authorization:`Bearer ${r.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,i.api["delete"](e,s).then((e=>{(e.status=200)&&(this.$emit(o),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,o,s,t){void 0==t?t={headers:{Authorization:`Bearer ${r.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,i.api.post(e,o,t).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,o,s,t){void 0==t?t={headers:{Authorization:`Bearer ${r.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,i.api.post(e,o,t).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,o,s,t){void 0==t?t={headers:{Authorization:`Bearer ${r.Z.getItem("token")}`}}:t.headers.Authorization=`Bearer ${r.Z.getItem("token")}`,i.api.put(e,o,t).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=s(74260);const d=(0,n.Z)(l,[["render",t]]),c=d},54440:(e,o,s)=>{"use strict";function t(e,o,s,t,r,i){return null}s.d(o,{Z:()=>m});var r=s(61959),i=s(48825),a=s(11488),l=s.n(a);const n={name:"rules",setup(){const e=(0,r.iH)(!1);(0,i.Z)();return{showSimulatedReturnData:e}},methods:{isReq(e,o){var s=!0;return null!=e&&""!=e.trim()||(s=o),s},isReqSelect(e,o){var s=!0;return null!=e&&e!=[]&&""!=e||(s=o),s},isMax(e,o,s){var t=!0;return""!==e&&null!==e&&e.length>o&&(t=s),t},isMin(e,o,s){var t=!0;return""!==e&&null!==e&&e.length<o?s:t},checkDate(e){var o=!0;return 0==l()(e,"DD/MM/YYYY",!0)._isValid&&(o=!1),o}}};var d=s(74260);const c=(0,d.Z)(n,[["render",t]]),m=c},50758:(e,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>le});var t=s(83673),r=s(62323);const i={class:"row"},a={class:"col-md-4 col-xs-12"},l={class:"col-md-4 col-xs-12"},n={class:"col-md-4 col-xs-12"},d={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},m={class:"col-md-6 col-xs-12"},u={class:"col-md-6 col-xs-12"},p={class:"col-md-4 col-xs-12"},h={class:"col-md-4 col-xs-12"},f={class:"col-md-4 col-xs-12"},g={class:"col-md-4 col-xs-12"},_={class:"col-md-4 col-xs-12"},v={class:"col-md-4 col-xs-12"},b=(0,t.Uk)(" Sin resultados "),j={class:"col-md-6 col-xs-12"},w={class:"col-md-6 col-xs-12"},y={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},x={class:"q-pa-sm justify-center"},V={class:"q-pa-md row justify-end"},k=(0,t._)("div",{class:"col-md-4 col-xs-12 text-secondary movilTitle",style:{"align-self":"center","text-align":"center","font-size":"20px","margin-bottom":"15px"}},[(0,t._)("p",null,[(0,t._)("strong",null,"MANTENIMIENTO - PROVEEDORES")])],-1),D={class:"col-md-5 col-sm-7 col-xs-12 cardMargin selectMobile",style:{"align-self":"center"}},C={class:"col-md-2 col-sm-4 col-xs-12",style:{"text-align":"center","align-self":"center"}},$={class:"q-pa-md q-gutter-y-md"},z=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function q(e,o,s,q,W,M){const P=(0,t.up)("q-icon"),Z=(0,t.up)("q-input"),S=(0,t.up)("q-select"),U=(0,t.up)("q-item-section"),A=(0,t.up)("q-item"),E=(0,t.up)("q-btn"),I=(0,t.up)("q-form"),R=(0,t.up)("q-card-section"),T=(0,t.up)("q-card"),N=(0,t.up)("q-dialog"),O=(0,t.up)("q-inner-loading"),Q=(0,t.up)("q-td"),L=(0,t.up)("q-item-label"),B=(0,t.up)("q-chip"),F=(0,t.up)("q-list"),H=(0,t.up)("q-table"),Y=(0,t.up)("q-card-actions"),J=(0,t.up)("methods"),G=(0,t.up)("rules-vue"),K=(0,t.up)("q-page"),X=(0,t.Q2)("money"),ee=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(K,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{modelValue:q.dialog,"onUpdate:modelValue":o[26]||(o[26]=e=>q.dialog=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Wm)(I,{onSubmit:M.sendData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",i,[(0,t._)("div",a,[(0,t.Wm)(Z,{outlined:"",modelValue:W.form.nb_beneficiario,"onUpdate:modelValue":[o[0]||(o[0]=e=>W.form.nb_beneficiario=e),o[1]||(o[1]=e=>W.form.nb_beneficiario=W.form.nb_beneficiario.toUpperCase())],label:"Beneficiario",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",l,[(0,t.Wm)(Z,{outlined:"",modelValue:W.form.nb_proveedor,"onUpdate:modelValue":[o[2]||(o[2]=e=>W.form.nb_proveedor=e),o[3]||(o[3]=e=>W.form.nb_proveedor=W.form.nb_proveedor.toUpperCase())],label:"Proveedor",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,100,"Maximo 100 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",n,[(0,t.Wm)(Z,{outlined:"",modelValue:W.form.rif_proveedor,"onUpdate:modelValue":[o[4]||(o[4]=e=>W.form.rif_proveedor=e),o[5]||(o[5]=e=>W.form.rif_proveedor=W.form.rif_proveedor.toUpperCase())],label:"RIF",hint:"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMax(e,20,"Maximo 22 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"badge"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",d,[(0,t.Wm)(Z,{outlined:"",modelValue:W.form.nit_proveedor,"onUpdate:modelValue":[o[6]||(o[6]=e=>W.form.nit_proveedor=e),o[7]||(o[7]=e=>W.form.nit_proveedor=W.form.nit_proveedor.toUpperCase())],label:"NIT",class:"pcform",rules:[e=>this.$refs.rulesVue.isMax(e,20,"Maximo 20 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"123"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",c,[(0,t.wy)(((0,t.wg)(),(0,t.j4)(Z,{outlined:"",modelValue:W.form.condicion_pago,"onUpdate:modelValue":o[8]||(o[8]=e=>W.form.condicion_pago=e),label:"Condición de Pago (Días)",rules:[e=>this.$refs.rulesVue.isMax(e,2,"Maximo 2 Caracteres")||""],"input-class":"text-right",hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"free_cancellation"})])),_:1},8,["modelValue","rules"])),[[X,W.moneyNotDecimal]])]),(0,t._)("div",m,[(0,t.Wm)(Z,{outlined:"",modelValue:W.form.direccion_correo,"onUpdate:modelValue":[o[9]||(o[9]=e=>W.form.direccion_correo=e),o[10]||(o[10]=e=>W.form.direccion_correo=W.form.direccion_correo.toUpperCase())],label:"Direccion de Correo",rules:[e=>this.$refs.rulesVue.isMax(e,200,"Maximo 200 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"",class:"pcform","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"drafts"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",u,[(0,t.Wm)(Z,{outlined:"",modelValue:W.form.direccion_fiscal,"onUpdate:modelValue":[o[11]||(o[11]=e=>W.form.direccion_fiscal=e),o[12]||(o[12]=e=>W.form.direccion_fiscal=W.form.direccion_fiscal.toUpperCase())],label:"Direccion Fiscal",rules:[e=>this.$refs.rulesVue.isMax(e,200,"Maximo 200 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",p,[(0,t.Wm)(Z,{outlined:"",modelValue:W.form.tlf_proveedor,"onUpdate:modelValue":o[13]||(o[13]=e=>W.form.tlf_proveedor=e),label:"Telefono",rules:[e=>this.$refs.rulesVue.isMax(e,100,"Maximo 100 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"","lazy-rules":"",class:"pcform",mask:"### - ### - ##########"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",h,[(0,t.Wm)(Z,{outlined:"",modelValue:W.form.fax_proveedor,"onUpdate:modelValue":[o[14]||(o[14]=e=>W.form.fax_proveedor=e),o[15]||(o[15]=e=>W.form.fax_proveedor=W.form.fax_proveedor.toUpperCase())],label:"Fax",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"","lazy-rules":"",class:"pcform"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",f,[(0,t.Wm)(Z,{outlined:"",modelValue:W.form.email_proveedor,"onUpdate:modelValue":[o[16]||(o[16]=e=>W.form.email_proveedor=e),o[17]||(o[17]=e=>W.form.email_proveedor=W.form.email_proveedor.toUpperCase())],label:"Email",rules:[e=>this.$refs.rulesVue.isMax(e,50,"Maximo 50 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"","lazy-rules":"",type:"email"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"email"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",g,[(0,t.Wm)(S,{outlined:"",modelValue:W.form.tipo_servicio,"onUpdate:modelValue":o[18]||(o[18]=e=>W.form.tipo_servicio=e),label:"Servicio Prestado",class:"pcform","input-class":"input",hint:"",options:W.servicio_prestado,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",_,[(0,t.Wm)(S,{outlined:"",modelValue:W.form.tipo_persona,"onUpdate:modelValue":[o[19]||(o[19]=e=>W.form.tipo_persona=e),o[20]||(o[20]=e=>{this.getData("/mretenciones","setData","retenciones",{headers:{vigente:"s",tipo_persona:W.form.tipo_persona.value}}),this.form.cod_tipo_retencion=[]})],label:"Tipo de Persona",class:"pcform","input-class":"input",hint:"",options:W.tipo_persona,rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"group"})])),_:1},8,["modelValue","options","rules"])]),(0,t._)("div",v,[(0,t.Wm)(S,{outlined:"",modelValue:W.form.cod_tipo_retencion,"onUpdate:modelValue":o[21]||(o[21]=e=>W.form.cod_tipo_retencion=e),label:"Tipo Retención ISLR",hint:"",options:W.retencionesSelected,onFilter:o[22]||(o[22]=(e,o,s)=>M.filterArray(e,o,s,"retencionesSelected","retenciones","nb_tipo_retencion")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],"option-label":"nb_tipo_retencion","option-value":"id","lazy-rules":""},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[(0,t.Wm)(U,{class:"text-grey"},{default:(0,t.w5)((()=>[b])),_:1})])),_:1})])),prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"block"})])),_:1},8,["modelValue","options","rules"])]),(0,t._)("div",j,[(0,t.Wm)(S,{outlined:"",modelValue:W.form.flag_activo,"onUpdate:modelValue":o[23]||(o[23]=e=>W.form.flag_activo=e),label:"Estatus","input-class":"input",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],hint:"",class:"pcform",options:W.estatus,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"block"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",w,[(0,t.Wm)(Z,{outlined:"",modelValue:W.form.observacion,"onUpdate:modelValue":[o[24]||(o[24]=e=>W.form.observacion=e),o[25]||(o[25]=e=>W.form.observacion=W.form.observacion.toUpperCase())],label:"Observaciones",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"visibility"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",y,[(0,t.Wm)(E,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(E,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[ee]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",x,[(0,t._)("div",V,[k,(0,t._)("div",D,[(0,t.Wm)(Z,{modelValue:q.filter,"onUpdate:modelValue":o[27]||(o[27]=e=>q.filter=e),rounded:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",C,[(0,t.Wm)(E,{label:"Insertar Proveedor",rounded:"",color:"primary",onClick:o[28]||(o[28]=e=>{q.dialog=!0,this.resetForm()}),disabled:this.allowOption(2)},null,8,["disabled"])])]),(0,t._)("div",$,[(0,t.Wm)(H,{rows:W.datos,"binary-state-sort":"",loading:q.loading,"row-key":"id",columns:W.columns,"rows-per-page-options":[5,10,15,20,50],onRequest:M.onRequest,separator:q.separator,filter:q.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:q.pagination,"onUpdate:pagination":o[31]||(o[31]=e=>q.pagination=e)},{loading:(0,t.w5)((()=>[(0,t.Wm)(O,{showing:"",color:"primary"})])),"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(Q,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(E,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:o=>{M.getData(`/proveedores/${e.row.id}`,"setDataEdit","form",{headers:{Authorization:"",vigente:"s"}}),q.dialog=!0,this.resetForm()}},null,8,["disabled","onClick"]),(0,t.Wm)(E,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:o=>W.selected=e.row.id,onClickCapture:o[29]||(o[29]=e=>q.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,r.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(T,{class:(0,r.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(s=>((0,t.wg)(),(0,t.j4)(A,{key:s.name},{default:(0,t.w5)((()=>[(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(s.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(U,{side:""},{default:(0,t.w5)((()=>["status"===s.name?((0,t.wg)(),(0,t.j4)(B,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,t.wg)(),(0,t.j4)(E,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:o=>{M.getData(`/proveedores/${e.row.id}`,"setDataEdit","form",{headers:{Authorization:"",vigente:"s"}}),this.resetForm(),q.dialog=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"status"===s.name?((0,t.wg)(),(0,t.j4)(B,{key:2,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(s.value),1)])),_:2},1032,["color"])):"action"===s.name?((0,t.wg)(),(0,t.j4)(E,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:o=>W.selected=e.row.id,onClickCapture:o[30]||(o[30]=e=>q.deletePopup=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(L,{key:4,caption:"",class:(0,r.C_)(s.classes?s.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(s.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","onRequest","separator","filter","grid","pagination"])])]),(0,t.Wm)(N,{modelValue:q.deletePopup,"onUpdate:modelValue":o[33]||(o[33]=e=>q.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[z])),_:1}),(0,t.Wm)(Y,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(E,{flat:"",label:"Cancelar",color:"primary"},null,512),[[ee]]),(0,t.wy)((0,t.Wm)(E,{flat:"",label:"Aceptar",color:"primary",onClick:o[32]||(o[32]=e=>M.deleteData(W.selected))},null,512),[[ee]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(J,{ref:"methods",onGetDataProveedores:o[34]||(o[34]=e=>M.getDataProveedores("/proveedores","setDataTable","datos")),onSetDataTable:M.setDataTable,onOnRequest:M.onRequest,onSetData:M.setData,onResetLoading:M.resetLoading,onSetDataEdit:M.setDataEdit,onSetDataPermisos:M.setDataPermisos},null,8,["onSetDataTable","onOnRequest","onSetData","onResetLoading","onSetDataEdit","onSetDataPermisos"]),(0,t.Wm)(G,{ref:"rulesVue"},null,512)])),_:1})}s(65363),s(97768);var W=s(61959),M=s(48825),P=s(80589),Z=s(54440),S=s(31885),U=s(55325);const A={directives:{money:S.VMoney},components:{methods:U.Z,VMoney:S.VMoney,rulesVue:Z.Z},data(){return{moneyNotDecimal:{decimal:",",thousands:".",prefix:"",suffix:"",precision:0,masked:!0},columns:[{name:"nb_proveedor",label:"Nombre del Proveedor",field:"nb_proveedor",align:"left",sortable:!0,required:!0},{name:"condicion_pago",label:"Condicion de Pago",field:"condicion_pago",align:"left",sortable:!0,required:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{nb_proveedor:"",nb_beneficiario:"",rif_proveedor:"",nit_proveedor:"",direccion_fiscal:"",direccion_correo:"",tlf_proveedor:"",fax_proveedor:"",email_proveedor:"",condicion_pago:"",observacion:"",tipo_servicio:[],cod_tipo_retencion:[],tipo_persona:[],flag_activo:[]},tipo_persona:[{label:"JURÍDICA",value:"J"},{label:"NATURAL",value:"N"}],servicio_prestado:[{label:"TRANSPORTE",value:"TP"},{label:"PAPELERIA",value:"PP"},{label:"SUMINISTROS DE COMPUTACIÓN",value:"SC"},{label:"GENERALES",value:"GE"}],estatus:[{label:"ACTIVO",value:"A"},{label:"INACTIVO",value:"I"}],retenciones:[],count:1,currentPage:1,datos:[],selected:[],retencionesSelected:[],rpermisos:[],error:""}},setup(){(0,M.Z)(),(0,W.iH)(!1),(0,W.iH)(!1);const e=(0,W.iH)({descending:"",page:1,rowsPerPage:5,rowsNumber:""});return{pagination:e,anulate:(0,W.iH)(!1),separator:(0,W.iH)("vertical"),loading:(0,W.iH)(!1),dialog:(0,W.iH)(!1),deletePopup:(0,W.iH)(!1),filter:(0,W.iH)("")}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Proveedores",""),this.getDataProveedores("/proveedores","onRequest","datos"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:P.Z.getItem("tokenTraducido").usuario.roles.id,menu:"proveedores"}})},methods:{onRequest(e,o){if(1==this.count){this[o]=e.data,this.pagination.rowsNumber=e.total;for(var s=0,t=this.datos.length;s<t;s++)if(null!==this.datos[s].condicion_pago&&(this.datos[s].condicion_pago=this.datos[s].condicion_pago+" Dias"),s==this.datos.length-1)break;this.loading=!1}else{let{page:o,rowsPerPage:s,sortBy:t,descending:n}=e.pagination;this.currentPage!==o&&(n="");e.filter;const d=0===s?this.pagination.rowsNumber:s;var r="",i=o,a=d;if(t)var l=t;else l="nro_item";""!==n&&(this.pagination.descending=!this.pagination.descending,r=1==this.pagination.descending?"DESC":"ASC"),t&&(this.pagination.sortBy=t),this.pagination.page=o,this.pagination.rowsPerPage=s,this.getData("/proveedores","setDataTable","datos",{headers:{page:i,limit:a,order_direction:r,order_by:l}})}this.count=0},setDataTable(e,o){this[o]=e.data,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1;for(var s=0,t=this.datos.length;s<t;s++)if(null!==this.datos[s].condicion_pago&&(this.datos[s].condicion_pago=this.datos[s].condicion_pago+" Dias"),s==this.datos.length-1)break},filterArray(e,o,s,t,r,i){o(""!==e?()=>{const o=e.toUpperCase();for(var s=[],a=0;a<=this[r].length-1;a++)if(this[r][a][i].indexOf(o)>-1&&s.push(this[r][a]),a==this[r].length-1){this[t]=s;break}}:()=>{this[t]=this[r]})},resetLoading(){this.loading=!1},allowOption(e){return this.rpermisos.findIndex((o=>o.acciones.accion==e))<0},setDataPermisos(e,o){this[o]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},getData(e,o,s,t){this.$refs.methods.getData(e,o,s,t)},getDataProveedores(e,o,s){this.$refs.methods.getData(e,o,s,{headers:{vigente:"s",page:1,limit:5}}),this.loading=!0},setData(e,o){this.loading=!1,this[o]=e.data},setDataEdit(e,o){if("J"===e.tipo_persona)var s="J";else if("N"===e.tipo_persona)s="N";this.loading=!1,this.getData("/mretenciones","setData","retenciones",{headers:{vigente:"s",tipo_persona:s}}),this.form.id=e.id,this.form.condicion_pago=e.condicion_pago,this.form.nb_proveedor=e.nb_proveedor,this.form.nb_beneficiario=e.nb_beneficiario,this.form.rif_proveedor=e.rif_proveedor,this.form.nit_proveedor=e.nit_proveedor,this.form.direccion_fiscal=e.direccion_fiscal,this.form.direccion_correo=e.direccion_correo,this.form.tlf_proveedor=e.tlf_proveedor,this.form.fax_proveedor=e.fax_proveedor,this.form.email_proveedor=e.email_proveedor,this.form.observacion=e.observacion,this.form.tipo_servicio=e.tipo_svc,this.form.tipo_persona=e.tipo_desc,this.form.flag_activo=e.activo_desc,this.form.cod_tipo_retencion=e.retenciones},deleteData(e){this.$refs.methods.deleteData(`/proveedores/${e}`,"getDataProveedores"),this.loading=!0},sendData(){this.form.condicion_pago=this.form.condicion_pago.replaceAll(".","").replaceAll(",","."),this.form.tipo_servicio=this.form.tipo_servicio.value,this.form.tipo_persona=this.form.tipo_persona.value,this.form.flag_activo=this.form.flag_activo.value,this.form.cod_tipo_retencion=this.form.cod_tipo_retencion.id,this.form.id?(this.$refs.methods.putData(`/proveedores/${this.form.id}`,this.form,"getDataProveedores"),this.dialog=!1,this.resetForm(),this.loading=!0):(this.$refs.methods.createData("/proveedores",this.form,"getDataProveedores"),this.resetForm(),this.loading=!0,this.dialog=!1)},resetForm(){delete this.form.id,this.form.nb_proveedor="",this.form.nb_beneficiario="",this.form.rif_proveedor="",this.form.nit_proveedor="",this.form.direccion_fiscal="",this.form.direccion_correo="",this.form.tlf_proveedor="",this.form.fax_proveedor="",this.form.email_proveedor="",this.form.condicion_pago="",this.form.observacion="",this.form.tipo_servicio="",this.form.cod_tipo_retencion="",this.retenciones=[],this.form.tipo_persona="",this.form.flag_activo=""}}};var E=s(74260),I=s(24379),R=s(46778),T=s(10151),N=s(25589),O=s(68689),Q=s(34842),L=s(24554),B=s(72448),F=s(83414),H=s(52035),Y=s(48240),J=s(17352),G=s(66941),K=s(83884),X=s(27011),ee=s(2350),oe=s(67030),se=s(99367),te=s(60677),re=s(7518),ie=s.n(re);const ae=(0,E.Z)(A,[["render",q]]),le=ae;ie()(A,"components",{QPage:I.Z,QDialog:R.Z,QCard:T.Z,QCardSection:N.Z,QForm:O.Z,QInput:Q.Z,QIcon:L.Z,QSelect:B.Z,QItem:F.Z,QItemSection:H.Z,QBtn:Y.Z,QTable:J.Z,QInnerLoading:G.Z,QTd:K.Z,QList:X.Z,QItemLabel:ee.Z,QChip:oe.Z,QCardActions:se.Z}),ie()(A,"directives",{ClosePopup:te.Z})},46700:(e,o,s)=>{var t={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function r(e){var o=i(e);return s(o)}function i(e){if(!s.o(t,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=i,e.exports=r,r.id=46700}}]);