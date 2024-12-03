(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[6971],{93899:(e,o,s)=>{"use strict";function t(e,o,s,t,r,i){return null}s.d(o,{A:()=>c});var r=s(45022),i=s(80660),a=s(14907);const l={setup(){const e=(0,a.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,o,s,t={headers:{}}){t.headers.Authorization=`Bearer ${r.A.getItem("token")}`,i.api.get(e,t).then((e=>{this.$emit(o,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,o,s,t={headers:{}}){t.headers.Authorization=`Bearer ${r.A.getItem("token")}`,i.api.post(e,o,t).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,o,s,t={headers:{}}){t.headers.Authorization=`Bearer ${r.A.getItem("token")}`,i.api.put(e,o,t).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,o,s={headers:{}}){s.headers.Authorization=`Bearer ${r.A.getItem("token")}`,i.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(o),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,o,s,t={headers:{}}){t.headers.Authorization=`Bearer ${r.A.getItem("token")}`,i.api.post(e,o,t).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=s(12807);const d=(0,n.A)(l,[["render",t]]),c=d},99565:(e,o,s)=>{"use strict";function t(e,o,s,t,r,i){return null}s.d(o,{A:()=>c});var r=s(14907),i=s(85038),a=s.n(i);const l={name:"rules",setup(){(0,r.A)()},methods:{isReq(e,o=!1){if(null==e||""==e.trim())return!1!==o?o:"Valor Requerido"},isReqCurrency(e,o=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==o?o:"Valor Requerido"},isReqCurrencyWithZero(e,o=!1){if(null==e||""==e.trim())return!1!==o?o:"Valor Requerido"},isReqSelect(e,o=!1){if(null==e||e==[]||""==e)return!1!==o?o:"Valor Requerido"},isMax(e,o,s=!1){if(null!==e&&""!==e&&e.length>o)return!1!==s?s:`Maximo ${o} Caracteres`},isMin(e,o,s=!1){if(null!==e&&""!==e&&e.length<o)return!1!==s?s:`Minimo ${o} Caracteres`},checkDate(e,o=!1){if(0==a()(e,"DD/MM/YYYY",!0)._isValid)return!1!==o?o:"Fecha Invalida"},checkHour(e,o=!1){if(0==a()(e,"HH:mm",!0)._isValid)return!1!==o?o:"Hora Invalida"}}};var n=s(12807);const d=(0,n.A)(l,[["render",t]]),c=d},68590:(e,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>ae});var t=s(61758),r=s(29104),i=s(58790);const a={class:"row"},l={class:"col-md-4 col-xs-12"},n={class:"col-md-4 col-xs-12"},d={class:"col-md-4 col-xs-12"},c={class:"col-md-6 col-xs-12"},u={class:"col-md-6 col-xs-12"},m={class:"col-md-6 col-xs-12"},p={class:"col-md-6 col-xs-12"},f={class:"col-md-4 col-xs-12"},h={class:"col-md-4 col-xs-12"},b={class:"col-md-4 col-xs-12"},g={class:"col-md-4 col-xs-12"},v={class:"col-md-4 col-xs-12"},_={class:"col-md-4 col-xs-12"},j={class:"col-md-6 col-xs-12"},k={class:"col-md-6 col-xs-12"},V={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},y={class:"q-pa-sm justify-center"},x={class:"q-pa-md row justify-end"},D=(0,t.Lk)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,t.Lk)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,t.Lk)("strong",null,"MANTENIMIENTO - PROVEEDORES")])],-1),F={class:"col-md-5 col-sm-7 col-xs-12 cardMargin selectMobile",style:{"align-self":"center"}},A={class:"col-md-2 col-sm-4 col-xs-12",style:{"text-align":"center","align-self":"center"}},C={class:"q-pa-md q-gutter-y-md"},$=(0,t.Lk)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function q(e,o,s,q,z,w){const P=(0,t.g2)("q-icon"),S=(0,t.g2)("q-input"),L=(0,t.g2)("q-select"),R=(0,t.g2)("q-item-section"),T=(0,t.g2)("q-item"),M=(0,t.g2)("q-btn"),E=(0,t.g2)("q-form"),I=(0,t.g2)("q-card-section"),U=(0,t.g2)("q-card"),N=(0,t.g2)("q-dialog"),Q=(0,t.g2)("q-inner-loading"),O=(0,t.g2)("q-td"),W=(0,t.g2)("q-item-label"),B=(0,t.g2)("q-list"),X=(0,t.g2)("q-table"),K=(0,t.g2)("q-card-actions"),G=(0,t.g2)("methods"),H=(0,t.g2)("rules-vue"),Y=(0,t.g2)("q-page"),J=(0,t.gN)("money"),Z=(0,t.gN)("close-popup");return(0,t.uX)(),(0,t.Wv)(Y,{class:"pagina q-pa-md"},{default:(0,t.k6)((()=>[(0,t.bF)(N,{modelValue:q.dialog,"onUpdate:modelValue":o[26]||(o[26]=e=>q.dialog=e)},{default:(0,t.k6)((()=>[(0,t.bF)(U,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.k6)((()=>[(0,t.bF)(I,null,{default:(0,t.k6)((()=>[(0,t.bF)(E,{onSubmit:w.sendData,class:"q-gutter-md"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",a,[(0,t.Lk)("div",l,[(0,t.bF)(S,{outlined:"",modelValue:z.form.nb_beneficiario,"onUpdate:modelValue":[o[0]||(o[0]=e=>z.form.nb_beneficiario=e),o[1]||(o[1]=e=>z.form.nb_beneficiario=z.form.nb_beneficiario.toUpperCase())],label:"Beneficiario",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,t.Lk)("div",n,[(0,t.bF)(S,{outlined:"",modelValue:z.form.nb_proveedor,"onUpdate:modelValue":[o[2]||(o[2]=e=>z.form.nb_proveedor=e),o[3]||(o[3]=e=>z.form.nb_proveedor=z.form.nb_proveedor.toUpperCase())],label:"Proveedor",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,t.Lk)("div",d,[(0,t.bF)(S,{outlined:"",modelValue:z.form.rif_proveedor,"onUpdate:modelValue":[o[4]||(o[4]=e=>z.form.rif_proveedor=e),o[5]||(o[5]=e=>z.form.rif_proveedor=z.form.rif_proveedor.toUpperCase())],label:"RIF",hint:"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,20),e=>this.$refs.rulesVue.isMin(e,3)],"lazy-rules":""},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"badge"})])),_:1},8,["modelValue","rules"])]),(0,t.Lk)("div",c,[(0,t.bF)(S,{outlined:"",modelValue:z.form.nit_proveedor,"onUpdate:modelValue":[o[6]||(o[6]=e=>z.form.nit_proveedor=e),o[7]||(o[7]=e=>z.form.nit_proveedor=z.form.nit_proveedor.toUpperCase())],label:"NIT",class:"pcform",rules:[e=>this.$refs.rulesVue.isMax(e,20),e=>this.$refs.rulesVue.isMin(e,3)],hint:"","lazy-rules":""},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"123"})])),_:1},8,["modelValue","rules"])]),(0,t.Lk)("div",u,[(0,t.bo)(((0,t.uX)(),(0,t.Wv)(S,{outlined:"",modelValue:z.form.condicion_pago,"onUpdate:modelValue":o[8]||(o[8]=e=>z.form.condicion_pago=e),label:"Condición de Pago (Días)",rules:[e=>this.$refs.rulesVue.isMax(e,2)],"input-class":"text-right",hint:"","lazy-rules":""},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"free_cancellation"})])),_:1},8,["modelValue","rules"])),[[J,z.moneyNotDecimal]])]),(0,t.Lk)("div",m,[(0,t.bF)(S,{outlined:"",modelValue:z.form.direccion_correo,"onUpdate:modelValue":[o[9]||(o[9]=e=>z.form.direccion_correo=e),o[10]||(o[10]=e=>z.form.direccion_correo=z.form.direccion_correo.toUpperCase())],label:"Direccion de Correo",rules:[e=>this.$refs.rulesVue.isMax(e,200),e=>this.$refs.rulesVue.isMin(e,3)],hint:"",class:"pcform","lazy-rules":""},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"drafts"})])),_:1},8,["modelValue","rules"])]),(0,t.Lk)("div",p,[(0,t.bF)(S,{outlined:"",modelValue:z.form.direccion_fiscal,"onUpdate:modelValue":[o[11]||(o[11]=e=>z.form.direccion_fiscal=e),o[12]||(o[12]=e=>z.form.direccion_fiscal=z.form.direccion_fiscal.toUpperCase())],label:"Direccion Fiscal",rules:[e=>this.$refs.rulesVue.isMax(e,200),e=>this.$refs.rulesVue.isMin(e,3)],hint:"","lazy-rules":""},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,t.Lk)("div",f,[(0,t.bF)(S,{outlined:"",modelValue:z.form.tlf_proveedor,"onUpdate:modelValue":o[13]||(o[13]=e=>z.form.tlf_proveedor=e),label:"Telefono",rules:[e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)],hint:"","lazy-rules":"",class:"pcform",mask:"(####) ### - ####"},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,t.Lk)("div",h,[(0,t.bF)(S,{outlined:"",modelValue:z.form.fax_proveedor,"onUpdate:modelValue":[o[14]||(o[14]=e=>z.form.fax_proveedor=e),o[15]||(o[15]=e=>z.form.fax_proveedor=z.form.fax_proveedor.toUpperCase())],label:"Fax",rules:[e=>this.$refs.rulesVue.isMax(e,50),e=>this.$refs.rulesVue.isMin(e,3)],hint:"","lazy-rules":"",class:"pcform",mask:"(####) ### - ####"},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,t.Lk)("div",b,[(0,t.bF)(S,{outlined:"",modelValue:z.form.email_proveedor,"onUpdate:modelValue":[o[16]||(o[16]=e=>z.form.email_proveedor=e),o[17]||(o[17]=e=>z.form.email_proveedor=z.form.email_proveedor.toUpperCase())],label:"Email",rules:[e=>this.$refs.rulesVue.isMax(e,50),e=>this.$refs.rulesVue.isMin(e,3)],hint:"","lazy-rules":"",type:"email"},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"email"})])),_:1},8,["modelValue","rules"])]),(0,t.Lk)("div",g,[(0,t.bF)(L,{outlined:"",modelValue:z.form.tipo_servicio,"onUpdate:modelValue":o[18]||(o[18]=e=>z.form.tipo_servicio=e),label:"Servicio Prestado",class:"pcform","input-class":"input",hint:"",options:z.servicioPrestado,"lazy-rules":""},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t.Lk)("div",v,[(0,t.bF)(L,{outlined:"",modelValue:z.form.tipo_persona,"onUpdate:modelValue":[o[19]||(o[19]=e=>z.form.tipo_persona=e),o[20]||(o[20]=e=>{this.$refs.methods.getData("mretenciones","setData","retenciones",{headers:{vigente:"s",tipo_persona:z.form.tipo_persona.value}}),this.selectedRetencion=[]})],label:"Tipo de Persona",class:"pcform","input-class":"input",hint:"",options:z.tipoPersona,rules:[e=>this.$refs.rulesVue.isReqSelect(e)],"lazy-rules":""},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"group"})])),_:1},8,["modelValue","options","rules"])]),(0,t.Lk)("div",_,[(0,t.bF)(L,{outlined:"",modelValue:z.selectedRetencion,"onUpdate:modelValue":o[21]||(o[21]=e=>z.selectedRetencion=e),label:"Tipo Retención ISLR",hint:"",options:z.retencionesSelected,onFilter:o[22]||(o[22]=(e,o)=>w.filterArray(e,o,"retencionesSelected","retenciones","nb_tipo_retencion")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",rules:[e=>this.$refs.rulesVue.isReqSelect(e)],"option-label":"nb_tipo_retencion","option-value":"id","lazy-rules":""},{"no-option":(0,t.k6)((()=>[(0,t.bF)(T,null,{default:(0,t.k6)((()=>[(0,t.bF)(R,{class:"text-grey"},{default:(0,t.k6)((()=>[(0,t.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"block"})])),_:1},8,["modelValue","options","rules"])]),(0,t.Lk)("div",j,[(0,t.bF)(L,{outlined:"",modelValue:z.form.flag_activo,"onUpdate:modelValue":o[23]||(o[23]=e=>z.form.flag_activo=e),label:"Estatus","input-class":"input",rules:[e=>this.$refs.rulesVue.isReqSelect(e)],hint:"",class:"pcform",options:z.estatus,"lazy-rules":""},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"block"})])),_:1},8,["modelValue","rules","options"])]),(0,t.Lk)("div",k,[(0,t.bF)(S,{outlined:"",modelValue:z.form.observacion,"onUpdate:modelValue":[o[24]||(o[24]=e=>z.form.observacion=e),o[25]||(o[25]=e=>z.form.observacion=z.form.observacion.toUpperCase())],label:"Observaciones",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,t.k6)((()=>[(0,t.bF)(P,{name:"visibility"})])),_:1},8,["modelValue","rules"])])]),(0,t.Lk)("div",V,[(0,t.bF)(M,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.bo)((0,t.bF)(M,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[Z]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Lk)("div",y,[(0,t.Lk)("div",x,[D,(0,t.Lk)("div",F,[(0,t.bF)(S,{modelValue:this.pagination.filterValue,"onUpdate:modelValue":o[28]||(o[28]=e=>this.pagination.filterValue=e),rounded:"",dense:"",outlined:"",standout:"",label:"Búsqueda avanzada",onKeydown:o[29]||(o[29]=(0,r.jR)((e=>w.getDataTable()),["enter"]))},{append:(0,t.k6)((()=>[(0,t.bF)(P,{onClick:o[27]||(o[27]=e=>w.getDataTable()),class:"cursor-pointer",name:"search"})])),_:1},8,["modelValue"])]),(0,t.Lk)("div",A,[(0,t.bF)(M,{label:"Insertar",rounded:"",color:"primary",onClick:o[30]||(o[30]=e=>{q.dialog=!0,this.resetForm()}),disabled:this.allowOption(2),class:"q-px-xl q-py-xs"},null,8,["disabled"])])]),(0,t.Lk)("div",C,[(0,t.bF)(X,{rows:z.proveedores,"binary-state-sort":"",loading:q.loading,"row-key":"id",columns:z.columns,"rows-per-page-options":[5,10,15,20,50],onRequest:w.getDataTable,separator:q.separator,style:{width:"100%"},grid:e.$q.screen.xs,pagination:z.pagination,"onUpdate:pagination":o[33]||(o[33]=e=>z.pagination=e)},{loading:(0,t.k6)((()=>[(0,t.bF)(Q,{showing:"",color:"primary",class:"loading"})])),"body-cell-flag_activo":(0,t.k6)((e=>[(0,t.bF)(O,{props:e},{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(w.filterDesc("estatus",e.row.flag_activo)),1)])),_:2},1032,["props"])])),"body-cell-action":(0,t.k6)((e=>[(0,t.bF)(O,{props:e},{default:(0,t.k6)((()=>[(0,t.bF)(M,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:o=>{this.$refs.methods.getData(`/proveedores/${e.row.id}`,"setDataEdit","form"),q.dialog=!0}},null,8,["disabled","onClick"]),(0,t.bF)(M,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:o=>z.selected=e.row.id,onClickCapture:o[31]||(o[31]=e=>q.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.k6)((e=>[(0,t.Lk)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.Tr)(e.selected?"transform: scale(0.95);":"")},[(0,t.bF)(U,{class:(0,i.C4)(e.selected?"bg-grey-2":"")},{default:(0,t.k6)((()=>[(0,t.bF)(B,{dense:""},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.cols,(s=>((0,t.uX)(),(0,t.Wv)(T,{key:s.name},{default:(0,t.k6)((()=>[(0,t.bF)(R,null,{default:(0,t.k6)((()=>[(0,t.bF)(W,null,{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(s.label),1)])),_:2},1024)])),_:2},1024),(0,t.bF)(R,{side:"",class:"itemMovilSide"},{default:(0,t.k6)((()=>["flag_activo"===s.name?((0,t.uX)(),(0,t.Wv)(W,{key:0},{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(w.filterDesc("estatus",e.row.flag_activo)),1)])),_:2},1024)):(0,t.Q3)("",!0),"action"===s.name?((0,t.uX)(),(0,t.Wv)(M,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:o=>{this.$refs.methods.getData(`/proveedores/${e.row.id}`,"setDataEdit","form"),q.dialog=!0}},null,8,["disabled","onClick"])):(0,t.Q3)("",!0),"action"===s.name?((0,t.uX)(),(0,t.Wv)(M,{key:2,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:o=>z.selected=e.row.id,onClickCapture:o[32]||(o[32]=e=>q.deletePopup=!0)},null,8,["disabled","onClick"])):(0,t.Q3)("",!0),"flag_activo"!=s.name?((0,t.uX)(),(0,t.Wv)(W,{key:3},{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(s.value),1)])),_:2},1024)):(0,t.Q3)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","onRequest","separator","grid","pagination"])])]),(0,t.bF)(N,{modelValue:q.deletePopup,"onUpdate:modelValue":o[35]||(o[35]=e=>q.deletePopup=e)},{default:(0,t.k6)((()=>[(0,t.bF)(U,{style:{width:"700px"}},{default:(0,t.k6)((()=>[(0,t.bF)(I,null,{default:(0,t.k6)((()=>[$])),_:1}),(0,t.bF)(K,{align:"right"},{default:(0,t.k6)((()=>[(0,t.bo)((0,t.bF)(M,{flat:"",label:"Cancelar",color:"primary"},null,512),[[Z]]),(0,t.bo)((0,t.bF)(M,{flat:"",label:"Aceptar",color:"primary",onClick:o[34]||(o[34]=e=>this.$refs.methods.deleteData(`/proveedores/${z.selected}`,"getDataTable"))},null,512),[[Z]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.bF)(G,{ref:"methods",onSetData:w.setData,onSetDataEdit:w.setDataEdit,onGetDataTable:w.getDataTable,onSetDataTable:w.setDataTable,onSetDataPermisos:w.setDataPermisos},null,8,["onSetData","onSetDataEdit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,t.bF)(H,{ref:"rulesVue"},null,512)])),_:1})}s(10239);var z=s(38734),w=s(80660),P=s(45022),S=s(99565),L=s(32939),R=s(93899);const T={directives:{money:L.VMoney},components:{methods:R.A,VMoney:L.VMoney,rulesVue:S.A},data(){return{moneyNotDecimal:{decimal:",",thousands:".",prefix:"",suffix:"",precision:0,masked:!0},columns:[{name:"nb_proveedor",label:"Nombre del Proveedor",field:"nb_proveedor",align:"left",sortable:!0},{name:"condicion_pago",label:"Condicion de Pago",field:"condicion_pago",align:"left",sortable:!0,format:e=>null!=e?e+" Días":""},{name:"flag_activo",label:"Estatus",field:"flag_activo",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center"}],form:{nb_proveedor:"",nb_beneficiario:"",rif_proveedor:"",nit_proveedor:"",direccion_fiscal:"",direccion_correo:"",tlf_proveedor:"",fax_proveedor:"",email_proveedor:"",condicion_pago:"",observacion:"",tipo_servicio:[],cod_tipo_retencion:[],tipo_persona:[],flag_activo:[]},tipoPersona:[{label:"JURÍDICA",value:"J"},{label:"NATURAL",value:"N"}],servicioPrestado:[{label:"TRANSPORTE",value:"TP"},{label:"PAPELERIA",value:"PP"},{label:"SUMINISTROS DE COMPUTACIÓN",value:"SC"},{label:"GENERALES",value:"GE"}],estatus:[{label:"ACTIVO",value:"A"},{label:"INACTIVO",value:"I"}],pagination:{page:1,rowsPerPage:10,sortBy:"nb_proveedor",descending:!1,filter:"nb_proveedor,condicion_pago,flag_activo",filterValue:"",rowsNumber:""},retenciones:[],currentPage:1,proveedores:[],selected:[],selectedRetencion:[],retencionesSelected:[],rpermisos:[]}},setup(){return{loading:(0,z.KR)(!1),separator:(0,z.KR)("vertical"),dialog:(0,z.KR)(!1),deletePopup:(0,z.KR)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Proveedores",""),this.getDataTable(),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:P.A.getItem("tokenTraducido").usuario.roles.id,menu:"proveedores"}})},methods:{filterArray(e,o,s,t,r){o(""!==e?()=>{const o=e.toUpperCase();for(var i=[],a=0;a<=this[t].length-1;a++)if(this[t][a][r].indexOf(o)>-1&&i.push(this[t][a]),a==this[t].length-1){this[s]=i;break}}:()=>{this[s]=this[t]})},findIndex(e,o){var s=this[e].findIndex((e=>e.id==o));return s>=0?s:null},filterDesc(e,o){var s=this[e].findIndex((e=>e.value==o));return s>=0?this[e][s].label:null},allowOption(e){return this.rpermisos.findIndex((o=>o.acciones.accion==e))<0},setDataPermisos(e,o){this[o]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setData(e,o){this[o]=e.data?e.data:e},getDataTable(e){this.loading=!0,e&&(this.pagination=e.pagination),this.$refs.methods.getData("/proveedores","setDataTable","proveedores",{headers:{page:this.pagination.page,limit:this.pagination.rowsPerPage,order_by:this.pagination.sortBy,order_direction:this.pagination.descending?"DESC":"ASC",filter:this.pagination.filter,filter_value:this.pagination.filterValue}})},setDataTable(e,o){this[o]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},setDataEdit(e,o){w.api.get("/mretenciones/",{headers:{Authorization:`Bearer ${P.A.getItem("token")}`,vigente:"s",tipo_persona:e.tipo_persona}}).then((o=>{this.retenciones=o.data.data,e.cod_tipo_retencion&&(this.selectedRetencion=this.retenciones[this.findIndex("retenciones",e.cod_tipo_retencion)])})),this[o].id=e.id,this[o].condicion_pago=e.condicion_pago,this[o].nb_proveedor=e.nb_proveedor,this[o].nb_beneficiario=e.nb_beneficiario,this[o].rif_proveedor=e.rif_proveedor,this[o].nit_proveedor=e.nit_proveedor,this[o].direccion_fiscal=e.direccion_fiscal,this[o].direccion_correo=e.direccion_correo,this[o].tlf_proveedor=e.tlf_proveedor,this[o].fax_proveedor=e.fax_proveedor,this[o].email_proveedor=e.email_proveedor,this[o].observacion=e.observacion,this[o].tipo_servicio=e.tipo_svc,this[o].tipo_persona=e.tipo_desc,this[o].flag_activo=e.activo_desc,this[o].cod_tipo_retencion=e.retenciones},sendData(){this.form.condicion_pago=this.form.condicion_pago.replaceAll(".","").replaceAll(",","."),this.form.tipo_servicio=this.form.tipo_servicio.value,this.form.tipo_persona=this.form.tipo_persona.value,this.form.flag_activo=this.form.flag_activo.value,this.form.cod_tipo_retencion=this.selectedRetencion.id,this.form.id?this.$refs.methods.putData(`/proveedores/${this.form.id}`,this.form,"getDataTable"):this.$refs.methods.createData("/proveedores",this.form,"getDataTable"),this.dialog=!1,this.resetForm()},resetForm(){delete this.form.id,this.form.nb_proveedor="",this.form.nb_beneficiario="",this.form.rif_proveedor="",this.form.nit_proveedor="",this.form.direccion_fiscal="",this.form.direccion_correo="",this.form.tlf_proveedor="",this.form.fax_proveedor="",this.form.email_proveedor="",this.form.condicion_pago="",this.form.observacion="",this.form.tipo_servicio="",this.selectedRetencion=[],this.retenciones=[],this.form.tipo_persona="",this.form.flag_activo=""}}};var M=s(12807),E=s(77716),I=s(82156),U=s(23316),N=s(44189),Q=s(49200),O=s(67837),W=s(50492),B=s(94940),X=s(90124),K=s(25173),G=s(56384),H=s(84191),Y=s(39035),J=s(45262),Z=s(53999),ee=s(13796),oe=s(62669),se=s(88672),te=s(98582),re=s.n(te);const ie=(0,M.A)(T,[["render",q]]),ae=ie;re()(T,"components",{QPage:E.A,QDialog:I.A,QCard:U.A,QCardSection:N.A,QForm:Q.A,QInput:O.A,QIcon:W.A,QSelect:B.A,QItem:X.A,QItemSection:K.A,QBtn:G.A,QTable:H.A,QInnerLoading:Y.A,QTd:J.A,QList:Z.A,QItemLabel:ee.A,QCardActions:oe.A}),re()(T,"directives",{ClosePopup:se.A})},35358:(e,o,s)=>{var t={"./af":78188,"./af.js":78188,"./ar":50096,"./ar-dz":28495,"./ar-dz.js":28495,"./ar-kw":85891,"./ar-kw.js":85891,"./ar-ly":13194,"./ar-ly.js":13194,"./ar-ma":42195,"./ar-ma.js":42195,"./ar-ps":17084,"./ar-ps.js":17084,"./ar-sa":29393,"./ar-sa.js":29393,"./ar-tn":21867,"./ar-tn.js":21867,"./ar.js":50096,"./az":43224,"./az.js":43224,"./be":61330,"./be.js":61330,"./bg":85096,"./bg.js":85096,"./bm":28746,"./bm.js":28746,"./bn":29303,"./bn-bd":56554,"./bn-bd.js":56554,"./bn.js":29303,"./bo":30528,"./bo.js":30528,"./br":35499,"./br.js":35499,"./bs":29828,"./bs.js":29828,"./ca":35855,"./ca.js":35855,"./cs":68481,"./cs.js":68481,"./cv":1694,"./cv.js":1694,"./cy":98903,"./cy.js":98903,"./da":95908,"./da.js":95908,"./de":85528,"./de-at":21732,"./de-at.js":21732,"./de-ch":54146,"./de-ch.js":54146,"./de.js":85528,"./dv":81313,"./dv.js":81313,"./el":20138,"./el.js":20138,"./en-au":78067,"./en-au.js":78067,"./en-ca":82545,"./en-ca.js":82545,"./en-gb":50124,"./en-gb.js":50124,"./en-ie":6107,"./en-ie.js":6107,"./en-il":13196,"./en-il.js":13196,"./en-in":1654,"./en-in.js":1654,"./en-nz":79557,"./en-nz.js":79557,"./en-sg":35451,"./en-sg.js":35451,"./eo":21591,"./eo.js":21591,"./es":36843,"./es-do":61009,"./es-do.js":61009,"./es-mx":75169,"./es-mx.js":75169,"./es-us":37224,"./es-us.js":37224,"./es.js":36843,"./et":77058,"./et.js":77058,"./eu":61297,"./eu.js":61297,"./fa":46658,"./fa.js":46658,"./fi":75674,"./fi.js":75674,"./fil":45204,"./fil.js":45204,"./fo":74428,"./fo.js":74428,"./fr":80703,"./fr-ca":27812,"./fr-ca.js":27812,"./fr-ch":9411,"./fr-ch.js":9411,"./fr.js":80703,"./fy":89738,"./fy.js":89738,"./ga":21235,"./ga.js":21235,"./gd":96032,"./gd.js":96032,"./gl":16424,"./gl.js":16424,"./gom-deva":53793,"./gom-deva.js":53793,"./gom-latn":14714,"./gom-latn.js":14714,"./gu":33383,"./gu.js":33383,"./he":46660,"./he.js":46660,"./hi":37264,"./hi.js":37264,"./hr":63201,"./hr.js":63201,"./hu":35604,"./hu.js":35604,"./hy-am":61067,"./hy-am.js":61067,"./id":19262,"./id.js":19262,"./is":53423,"./is.js":53423,"./it":73038,"./it-ch":23512,"./it-ch.js":23512,"./it.js":73038,"./ja":87558,"./ja.js":87558,"./jv":86071,"./jv.js":86071,"./ka":95927,"./ka.js":95927,"./kk":62625,"./kk.js":62625,"./km":25499,"./km.js":25499,"./kn":79486,"./kn.js":79486,"./ko":89405,"./ko.js":89405,"./ku":77155,"./ku-kmr":92516,"./ku-kmr.js":92516,"./ku.js":77155,"./ky":13647,"./ky.js":13647,"./lb":42837,"./lb.js":42837,"./lo":91474,"./lo.js":91474,"./lt":96967,"./lt.js":96967,"./lv":48297,"./lv.js":48297,"./me":1545,"./me.js":1545,"./mi":2573,"./mi.js":2573,"./mk":77259,"./mk.js":77259,"./ml":33826,"./ml.js":33826,"./mn":45368,"./mn.js":45368,"./mr":30860,"./mr.js":30860,"./ms":96947,"./ms-my":99418,"./ms-my.js":99418,"./ms.js":96947,"./mt":76906,"./mt.js":76906,"./my":71837,"./my.js":71837,"./nb":24503,"./nb.js":24503,"./ne":31286,"./ne.js":31286,"./nl":17981,"./nl-be":58103,"./nl-be.js":58103,"./nl.js":17981,"./nn":19387,"./nn.js":19387,"./oc-lnc":30803,"./oc-lnc.js":30803,"./pa-in":66742,"./pa-in.js":66742,"./pl":30075,"./pl.js":30075,"./pt":81731,"./pt-br":23352,"./pt-br.js":23352,"./pt.js":81731,"./ro":21776,"./ro.js":21776,"./ru":5746,"./ru.js":5746,"./sd":74100,"./sd.js":74100,"./se":38395,"./se.js":38395,"./si":8823,"./si.js":8823,"./sk":39385,"./sk.js":39385,"./sl":3852,"./sl.js":3852,"./sq":3247,"./sq.js":3247,"./sr":64290,"./sr-cyrl":26189,"./sr-cyrl.js":26189,"./sr.js":64290,"./ss":32177,"./ss.js":32177,"./sv":49038,"./sv.js":49038,"./sw":9741,"./sw.js":9741,"./ta":86932,"./ta.js":86932,"./te":95784,"./te.js":95784,"./tet":13334,"./tet.js":13334,"./tg":23602,"./tg.js":23602,"./th":16947,"./th.js":16947,"./tk":46774,"./tk.js":46774,"./tl-ph":5868,"./tl-ph.js":5868,"./tlh":16695,"./tlh.js":16695,"./tr":22573,"./tr.js":22573,"./tzl":84509,"./tzl.js":84509,"./tzm":17118,"./tzm-latn":87078,"./tzm-latn.js":87078,"./tzm.js":17118,"./ug-cn":82617,"./ug-cn.js":82617,"./uk":56131,"./uk.js":56131,"./ur":56532,"./ur.js":56532,"./uz":69932,"./uz-latn":27220,"./uz-latn.js":27220,"./uz.js":69932,"./vi":20490,"./vi.js":20490,"./x-pseudo":32154,"./x-pseudo.js":32154,"./yo":49955,"./yo.js":49955,"./zh-cn":68355,"./zh-cn.js":68355,"./zh-hk":89547,"./zh-hk.js":89547,"./zh-mo":70374,"./zh-mo.js":70374,"./zh-tw":979,"./zh-tw.js":979};function r(e){var o=i(e);return s(o)}function i(e){if(!s.o(t,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=i,e.exports=r,r.id=35358}}]);