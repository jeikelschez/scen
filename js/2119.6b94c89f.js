(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[2119],{96526:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10239),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__),vue__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(38734),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85038),moment__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__),boot_axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80660),quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(14907),quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(45022),src_components_methods_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(93899),src_components_rules_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(99565),src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(21643);const __WEBPACK_DEFAULT_EXPORT__={components:{methods:src_components_methods_vue__WEBPACK_IMPORTED_MODULE_4__.A,rulesVue:src_components_rules_vue__WEBPACK_IMPORTED_MODULE_5__.A,webViewer:src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_6__.A},data(){return{columnsLista:[{name:"fecha_documento",label:"Fec. Fact.",field:"fecha_documento",align:"center"},{name:"nro_documento",label:"Nro. Fact.",field:"nro_documento",align:"center"},{name:"nro_factura",label:"Nro. Control",field:"nro_ctrl_doc",align:"center"},{name:"nro_comprobante",label:"Nro. Comprobante",field:"nro_comprobante_iva",align:"center"},{name:"fecha_comprobante",label:"Fec. Comprobante",field:"fecha_comprobante",align:"center"},{name:"fecha_entrega",label:"Fec. Entrega",field:"fecha_entrega",align:"center"},{name:"action",label:"Acción",align:"center"}],tipoReporte:[{label:"IMPRESIÓN DE COMPROBANTE IVA",value:"IC"},{label:"RESUMEN DE COMPROBANTE IVA",value:"RC"}],pagination:{page:1,rowsPerPage:0,rowsNumber:""},pdf:!0,selected:[],selectedOption:[],proveedores:[],selectedTipo:[],proveedoresSelected:[],selectedProveedor:[],listaIva:[],proveedoresLoading:!0,print:"",nro_comprobante:"",fecha_comprobante:"",generarDisabled:!0,flagGenerar:!1,valorIva:"",fecha_desde:moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY"),fecha_hasta:moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY")}},setup(){(0,quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_7__.A)();return{loading:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)(!1),pdfView:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)(!1),detalleIva:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)(!1),detalleIvaSelected:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)(!1),separator:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)("vertical")}},mounted(){this.pdfPrint(),this.$emit("changeTitle","SCEN - Reportes - Control de Retenciones IVA",""),this.$refs.methods.getData("/proveedores","setData","proveedores",{headers:{activo:"S"}}),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.A.getItem("tokenTraducido").usuario.roles.id,menu:"controlretencionesiva"}}),this.selectedTipo=this.tipoReporte[0]},methods:{filterArray(e,t,s,a,o){t(""!==e?()=>{const t=e.toUpperCase();for(var r=[],l=0;l<=this[a].length-1;l++)if(this[a][l][o].indexOf(t)>-1&&r.push(this[a][l]),l==this[a].length-1){this[s]=r;break}}:()=>{this[s]=this[a]})},findIndex(e,t,s){var a=this[e].findIndex((e=>e.id==t));return a>=0?this[e][a][s]:null},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setData(res,dataRes){eval("this."+dataRes+"Loading = false"),this[dataRes]=res.data?res.data:res},async pdfChange(){this.loading=!0,this.pdf=!1,setTimeout((()=>{this.pdfPrint(),this.pdf=!0}),100)},pdfPrint(){let e={};e.proveedor=this.selectedProveedor.id?this.selectedProveedor.id:"",e.desde=this.fecha_desde,e.hasta=this.fecha_hasta,e.comprobante=this.nro_comprobante,boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/pdfreports/retencionesIva",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.A.getItem("token")}`,print:this.print,tipo:this.selectedTipo.value,data:JSON.stringify(e)}}).then((e=>{e.data.validDoc||(this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"}),this.print=""),this.$refs.webViewer.showpdf(e.data.pdfPath,""==this.print?.64:1.8,!1,!1),this.loading=!1})).catch((e=>{this.$q.notify({message:e.message,color:"red"}),this.pdfView=!1,this.loading=!1}))},async selectDetalleIva(){await boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/mctapagar",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.A.getItem("token")}`,desde:moment__WEBPACK_IMPORTED_MODULE_1___default()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:moment__WEBPACK_IMPORTED_MODULE_1___default()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),proveedor:this.selectedProveedor.id}}).then((e=>{e.data.data.length>0?(this.listaIva=e.data.data,this.detalleIva=!0):this.$q.notify({message:"No existen registros para este Proveedor",color:"red"})}))},selectOptions(){0!=this.selected.length?(this.detalleIva=!1,this.detalleIvaSelected=!0,this.generarDisabled=!0,null!=this.selected[0].nro_comprobante_iva&&""!=this.selected[0].nro_comprobante_iva||(this.generarDisabled=!1),this.nro_comprobante=this.selected[0].nro_comprobante_iva,this.fecha_comprobante=this.selected[0].fecha_comprobante):this.$q.notify({message:"Debe Seleccionar al menos un Registro",color:"red"})},saveNroComp(){if(!this.nro_comprobante)return this.$q.notify({message:"Debe ingresar un número de Comprobante Válido",color:"red"}),void this.$refs.nro_comprobante.$el.focus();for(var e=0;e<=this.selected.length-1;e++){let t={};t.nro_comprobante_iva=this.nro_comprobante,t.fecha_comprobante=moment__WEBPACK_IMPORTED_MODULE_1___default()(this.fecha_comprobante,"DD/MM/YYYY").format("YYYY-MM-DD"),this.selected[e].nro_comprobante_iva=this.nro_comprobante,this.selected[e].fecha_comprobante=this.fecha_comprobante,boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.put(`/mctapagar/${this.selected[e].id}`,t,{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.A.getItem("token")}`}}).catch((()=>{this.$q.notify({message:"Error del Sistema. Problemas al Actualizar el IVA. Comuníquese con el proveedor del Sistemas...",color:"red"})}))}this.flagGenerar&&boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/vcontrol",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.A.getItem("token")}`,name:"COMPROBANTE_IVA"}}).then((e=>{e.data[0].valor=this.valorIva.toString();let t=e.data[0].id;delete e.data[0].id,delete e.data[0].tipo_desc,boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.put(`/vcontrol/${t}`,e.data[0],{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.A.getItem("token")}`}}).then((()=>{this.$q.notify({message:"Actualización Exitosa...",color:"green"}),this.flagGenerar=!1})).catch((()=>{this.$q.notify({message:"Error del Sistema. Problemas al Actualizar el valor del IVA. Comuníquese con el proveedor del Sistemas...",color:"red"})}))})),this.detalleIvaSelected=!1},generaNroComp(){boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/vcontrol",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.A.getItem("token")}`,name:"COMPROBANTE_IVA"}}).then((e=>{this.valorIva=parseInt(e.data[0].valor,10)+1;let t=moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY")+moment__WEBPACK_IMPORTED_MODULE_1___default()().format("MM")+this.valorIva.toString().padStart(8,"0");this.nro_comprobante=t,this.fecha_comprobante=moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY"),this.flagGenerar=!0}))},updateSelected(e,t){let s={};s.fecha_entrega=moment__WEBPACK_IMPORTED_MODULE_1___default()(t,"DD/MM/YYYY").format("YYYY-MM-DD"),boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.put(`/mctapagar/${e}`,s,{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.A.getItem("token")}`}}).then((()=>{this.$q.notify({message:"Actualización Exitosa...",color:"green"})})).catch((()=>{this.$q.notify({message:"Error del Sistema. Problemas al Actualizar la fecha de Entrega. Comuníquese con el proveedor del Sistemas...",color:"red"})}))},deleteSelected(e,t){this.listaIva[t].nro_comprobante_iva=null,this.listaIva[t].fecha_comprobante=null;let s={nro_comprobante_iva:null,fecha_comprobante:null};boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.put(`/mctapagar/${e}`,s,{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.A.getItem("token")}`}}).then((()=>{this.$q.notify({message:"Actualización Exitosa...",color:"green"})})).catch((()=>{this.$q.notify({message:"Error del Sistema. Problemas al borrar los datos del Comprobante. Comuníquese con el proveedor del Sistemas...",color:"red"})}))},resetFilters(){this.selected=[],this.selectedOption=[],this.flagGenerar=!1,this.selectedTipo=this.tipoReporte[0],this.generarDisabled=!0,this.selectedProveedor=[],this.fecha_desde=moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY"),this.fecha_hasta=moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY"),this.print="",this.pdfChange()}}}},93899:(e,t,s)=>{"use strict";function a(e,t,s,a,o,r){return null}s.d(t,{A:()=>d});var o=s(45022),r=s(80660),l=s(14907);const i={setup(){const e=(0,l.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,r.api.get(e,a).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,r.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,r.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${o.A.getItem("token")}`,r.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,r.api.post(e,t,a).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=s(12807);const _=(0,n.A)(i,[["render",a]]),d=_},99565:(e,t,s)=>{"use strict";function a(e,t,s,a,o,r){return null}s.d(t,{A:()=>d});var o=s(14907),r=s(85038),l=s.n(r);const i={name:"rules",setup(){(0,o.A)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrencyWithZero(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==l()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var n=s(12807);const _=(0,n.A)(i,[["render",a]]),d=_},21643:(e,t,s)=>{"use strict";s.d(t,{A:()=>m});var a=s(61758);const o={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function r(e,t,s,r,l,i){return(0,a.uX)(),(0,a.CE)("div",o,null,512)}s(10239),s(33186),s(45531),s(15683),s(9048),s(64702);var l=s(38734),i=s(82429),n=s.n(i);const _={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,l.KR)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),s=t.length,a=new Uint8Array(s);for(let o=0;o<s;++o)a[o]=t.charCodeAt(o);return new Blob([a],{type:"application/pdf"})},async until(e){const t=s=>{e()?s():setTimeout((e=>t(s)),400)};return new Promise(t)},showpdf(e,t,s=!1,a=!0,o){const r="https://scen.rcsexpress.com/webViewer";n()({path:r,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((r=>{r.UI.disableElements(["panToolButton"]),r.UI.disableElements(["textSelectButton"]),r.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{r.UI.downloadPdf()}}),e.push({type:"actionButton",title:"Exportar Excel",img:"../../icons/icone-excel-grise.png",onClick:()=>{this.$emit("exportExcel")}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{s&&(this.$emit("printPdf"),await this.until((e=>1==this.confirmPrint)),!this.confirmPrint)||(r.UI.print(),this.confirmPrint=!1)}}),a&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),o?r.UI.loadDocument(this.base64ToBlob(o),{filename:"REPORTE SCEN.pdf"}):r.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/pdfreports/loadPDF/${e}`),r.UI.setLanguage("es"),r.UI.useEmbeddedPrint(!0),setTimeout((()=>{r.UI.setZoomLevel(t||.7)}),2e3)}))}}};var d=s(12807);const c=(0,d.A)(_,[["render",r]]),m=c},34642:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>K});var a=s(61758);const o={class:"q-pa-sm justify-center",style:{"margin-top":"10px"}},r={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-top":"-20px"}},l=(0,a.Lk)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a.Lk)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a.Lk)("strong",null,"REPORTES - CONTROL DE RETENCIONES IVA")])],-1),i={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},n={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},_={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-6 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},d={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-6 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},c={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 selectMobile2"},m={class:"row justify-center items-center content-center",style:{padding:"20px"}},u=(0,a.Lk)("div",{class:"col-md-11 col-xs-12"},[(0,a.Lk)("p",{style:{"font-size":"20px","text-align":"left"},class:"text-secondary"},[(0,a.Lk)("strong",null,"LISTA DE FACTURAS")])],-1),p={class:"col-md-12 col-xs-12"},h={class:"row justify-center items-center content-center",style:{"margin-bottom":"20px"}},g={class:"row justify-center items-center content-center",style:{padding:"20px"}},f=(0,a.Lk)("div",{class:"col-md-11 col-xs-12"},[(0,a.Lk)("p",{style:{"font-size":"20px","text-align":"left"},class:"text-secondary"},[(0,a.Lk)("strong",null,"INGRESE COMPROBANTE IVA")])],-1),b={class:"row col-md-12 col-xs-12"},E={class:"col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-6 cardMargin selectMobile2"},D={class:"col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-6"},v={class:"row justify-center items-center content-center",style:{"margin-bottom":"20px"}},j={class:"q-pa-md col-md-12 col-xs-12 q-gutter-y-md justify-center",style:{"margin-top":"-30px"}};function M(e,t,s,M,P,k){const A=(0,a.g2)("q-select"),x=(0,a.g2)("q-item-section"),y=(0,a.g2)("q-item"),O=(0,a.g2)("q-icon"),I=(0,a.g2)("q-date"),C=(0,a.g2)("q-popup-proxy"),w=(0,a.g2)("q-input"),L=(0,a.g2)("q-tooltip"),R=(0,a.g2)("q-btn"),T=(0,a.g2)("q-td"),U=(0,a.g2)("q-table"),q=(0,a.g2)("q-card"),B=(0,a.g2)("q-dialog"),Y=(0,a.g2)("webViewer"),V=(0,a.g2)("q-inner-loading"),F=(0,a.g2)("methods"),S=(0,a.g2)("rules-vue"),W=(0,a.g2)("q-page"),$=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.Wv)(W,{class:"pagina q-pa-md"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",o,[(0,a.Lk)("div",r,[l,(0,a.Lk)("div",i,[(0,a.bF)(A,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.tipoReporte,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",modelValue:P.selectedTipo,"onUpdate:modelValue":[t[0]||(t[0]=e=>P.selectedTipo=e),t[1]||(t[1]=e=>this.nro_comprobante="")],outlined:"",standout:"",label:"Tipo de Reporte"},null,8,["options","modelValue"])]),(0,a.Lk)("div",n,[(0,a.bF)(A,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.proveedoresSelected,onFilter:t[2]||(t[2]=(e,t)=>k.filterArray(e,t,"proveedoresSelected","proveedores","nb_proveedor")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_proveedor","option-value":"id",modelValue:P.selectedProveedor,"onUpdate:modelValue":t[3]||(t[3]=e=>P.selectedProveedor=e),outlined:"",loading:P.proveedoresLoading,disable:"DI"==this.selectedTipo.value||P.proveedoresLoading,standout:"",label:"Proveedor"},{"no-option":(0,a.k6)((()=>[(0,a.bF)(y,null,{default:(0,a.k6)((()=>[(0,a.bF)(x,{class:"text-grey"},{default:(0,a.k6)((()=>[(0,a.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,a.k6)((()=>[(0,a.bF)(O,{name:"search"})])),_:1},8,["options","modelValue","loading","disable"])]),(0,a.Lk)("div",_,[(0,a.bF)(w,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:P.fecha_desde,"onUpdate:modelValue":t[6]||(t[6]=e=>P.fecha_desde=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.k6)((()=>[(0,a.bF)(O,{name:"event",class:"cursor-pointer"},{default:(0,a.k6)((()=>[(0,a.bF)(C,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.k6)((()=>[(0,a.bF)(I,{modelValue:P.fecha_desde,"onUpdate:modelValue":[t[4]||(t[4]=e=>P.fecha_desde=e),t[5]||(t[5]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",d,[(0,a.bF)(w,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:P.fecha_hasta,"onUpdate:modelValue":t[9]||(t[9]=e=>P.fecha_hasta=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.k6)((()=>[(0,a.bF)(O,{name:"event",class:"cursor-pointer"},{default:(0,a.k6)((()=>[(0,a.bF)(C,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.k6)((()=>[(0,a.bF)(I,{modelValue:P.fecha_hasta,"onUpdate:modelValue":[t[7]||(t[7]=e=>P.fecha_hasta=e),t[8]||(t[8]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",c,[(0,a.bF)(R,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-right":"15px"},onClick:t[10]||(t[10]=e=>k.selectDetalleIva()),disabled:"IC"!=this.selectedTipo.value||!this.selectedProveedor.id},{default:(0,a.k6)((()=>[(0,a.bF)(O,{size:"25px",name:"list_alt",color:"white"}),(0,a.bF)(L,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)("Seleccionar Facturas")])),_:1})])),_:1},8,["disabled"]),(0,a.bF)(R,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-right":"15px"},onClick:t[11]||(t[11]=e=>k.resetFilters())},{default:(0,a.k6)((()=>[(0,a.bF)(O,{size:"25px",name:"filter_alt_off",color:"white"}),(0,a.bF)(L,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)("Resetear Filtros")])),_:1})])),_:1}),(0,a.bF)(R,{dense:"",color:"primary",round:"",padding:"sm",disabled:"IC"==this.selectedTipo.value&&!this.nro_comprobante,onClick:t[12]||(t[12]=e=>{k.pdfChange(),P.print=1})},{default:(0,a.k6)((()=>[(0,a.bF)(O,{size:"25px",name:"input",color:"white"}),(0,a.bF)(L,{class:"bg-primary","transition-show":"scale",style:{"max-height":"30px"},"transition-hide":"scale",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)("Generar")])),_:1})])),_:1},8,["disabled"])])])]),(0,a.bF)(B,{modelValue:M.detalleIva,"onUpdate:modelValue":t[17]||(t[17]=e=>M.detalleIva=e)},{default:(0,a.k6)((()=>[(0,a.bF)(q,{style:{width:"1000px","max-width":"80vw"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",m,[u,(0,a.Lk)("div",p,[(0,a.bF)(U,{rows:P.listaIva,"row-key":"id",columns:P.columnsLista,"binary-state-sort":"",separator:M.separator,pagination:P.pagination,"onUpdate:pagination":t[14]||(t[14]=e=>P.pagination=e),grid:e.$q.screen.xs,"rows-per-page-options":[0],selection:"multiple",selected:P.selected,"onUpdate:selected":t[15]||(t[15]=e=>P.selected=e),style:{width:"100%",height:"350px"},"hide-bottom":""},{"body-cell-fecha_entrega":(0,a.k6)((e=>[(0,a.bF)(T,{props:e},{default:(0,a.k6)((()=>[(0,a.bF)(w,{label:"Fecha Desde",hint:"",dense:"",style:{"padding-bottom":"0px"},modelValue:e.row.fecha_entrega,"onUpdate:modelValue":t=>e.row.fecha_entrega=t,"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.k6)((()=>[(0,a.bF)(O,{name:"event",class:"cursor-pointer"},{default:(0,a.k6)((()=>[(0,a.bF)(C,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.k6)((()=>[(0,a.bF)(I,{modelValue:e.row.fecha_entrega,"onUpdate:modelValue":[t=>e.row.fecha_entrega=t,t[13]||(t[13]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1536)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue","rules"])])),_:2},1032,["props"])])),"body-cell-action":(0,a.k6)((e=>[(0,a.bF)(T,{props:e},{default:(0,a.k6)((()=>[(0,a.bF)(R,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3)||"00/00/0000"==e.row.fecha_entrega,onClick:t=>k.updateSelected(e.row.id,e.row.fecha_entrega)},null,8,["disabled","onClick"]),(0,a.bF)(R,{dense:"",round:"",flat:"",color:"primary",icon:"backspace",disabled:this.allowOption(4),onClick:t=>k.deleteSelected(e.row.id,e.rowIndex)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","separator","pagination","grid","selected"])])]),(0,a.Lk)("div",h,[(0,a.bF)(R,{label:"Seleccionar",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"done_all",onClick:t[16]||(t[16]=e=>this.selectOptions())}),(0,a.bo)((0,a.bF)(R,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[$]])])])),_:1})])),_:1},8,["modelValue"]),(0,a.bF)(B,{modelValue:M.detalleIvaSelected,"onUpdate:modelValue":t[24]||(t[24]=e=>M.detalleIvaSelected=e)},{default:(0,a.k6)((()=>[(0,a.bF)(q,{style:{width:"500px","max-width":"80vw"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",g,[f,(0,a.Lk)("div",b,[(0,a.Lk)("div",E,[(0,a.bF)(w,{outlined:"",label:"Nro. Comprobante",hint:"",dense:"",rounded:"",ref:"nro_comprobante",style:{"padding-bottom":"10px"},modelValue:P.nro_comprobante,"onUpdate:modelValue":t[18]||(t[18]=e=>P.nro_comprobante=e),"lazy-rules":""},null,8,["modelValue"])]),(0,a.Lk)("div",D,[(0,a.bF)(w,{outlined:"",label:"Fecha Comprobante",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:P.fecha_comprobante,"onUpdate:modelValue":t[21]||(t[21]=e=>P.fecha_comprobante=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.k6)((()=>[(0,a.bF)(O,{name:"event",class:"cursor-pointer"},{default:(0,a.k6)((()=>[(0,a.bF)(C,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.k6)((()=>[(0,a.bF)(I,{modelValue:P.fecha_comprobante,"onUpdate:modelValue":[t[19]||(t[19]=e=>P.fecha_comprobante=e),t[20]||(t[20]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])])])]),(0,a.Lk)("div",v,[(0,a.bF)(R,{label:"Generar",color:"primary",dense:"",class:"col-md-3 col-sm-3 col-xs-12",icon:"settings",style:{"margin-left":"5px"},disable:P.generarDisabled,onClick:t[22]||(t[22]=e=>this.generaNroComp())},null,8,["disable"]),(0,a.bF)(R,{label:"Guardar",color:"primary",dense:"",class:"col-md-3 col-sm-3 col-xs-12",icon:"save",style:{"margin-left":"5px"},onClick:t[23]||(t[23]=e=>this.saveNroComp())}),(0,a.bo)((0,a.bF)(R,{label:"Cerrar",color:"primary",flat:"",dense:"",class:"col-md-3 col-sm-3 col-xs-12",icon:"close"},null,512),[[$]])])])),_:1})])),_:1},8,["modelValue"]),(0,a.Lk)("div",j,[1==P.pdf?((0,a.uX)(),(0,a.Wv)(Y,{key:0,ref:"webViewer",style:{width:"1680px",height:"610px","max-width":"1680px"}},null,512)):(0,a.Q3)("",!0),(0,a.bF)(V,{showing:M.loading,color:"primary",class:"loading"},null,8,["showing"])]),(0,a.bF)(F,{ref:"methods",onSetData:k.setData,onSetDataPermisos:k.setDataPermisos},null,8,["onSetData","onSetDataPermisos"]),(0,a.bF)(S,{ref:"rulesVue"},null,512)])),_:1})}var P=s(96526),k=s(12807),A=s(77716),x=s(94940),y=s(90124),O=s(25173),I=s(50492),C=s(67837),w=s(48975),L=s(93692),R=s(56384),T=s(97410),U=s(82156),q=s(23316),B=s(84191),Y=s(45262),V=s(39035),F=s(88672),S=s(98582),W=s.n(S);const $=(0,k.A)(P.A,[["render",M]]),K=$;W()(P.A,"components",{QPage:A.A,QSelect:x.A,QItem:y.A,QItemSection:O.A,QIcon:I.A,QInput:C.A,QPopupProxy:w.A,QDate:L.A,QBtn:R.A,QTooltip:T.A,QDialog:U.A,QCard:q.A,QTable:B.A,QTd:Y.A,QInnerLoading:V.A}),W()(P.A,"directives",{ClosePopup:F.A})},35358:(e,t,s)=>{var a={"./af":78188,"./af.js":78188,"./ar":50096,"./ar-dz":28495,"./ar-dz.js":28495,"./ar-kw":85891,"./ar-kw.js":85891,"./ar-ly":13194,"./ar-ly.js":13194,"./ar-ma":42195,"./ar-ma.js":42195,"./ar-ps":17084,"./ar-ps.js":17084,"./ar-sa":29393,"./ar-sa.js":29393,"./ar-tn":21867,"./ar-tn.js":21867,"./ar.js":50096,"./az":43224,"./az.js":43224,"./be":61330,"./be.js":61330,"./bg":85096,"./bg.js":85096,"./bm":28746,"./bm.js":28746,"./bn":29303,"./bn-bd":56554,"./bn-bd.js":56554,"./bn.js":29303,"./bo":30528,"./bo.js":30528,"./br":35499,"./br.js":35499,"./bs":29828,"./bs.js":29828,"./ca":35855,"./ca.js":35855,"./cs":68481,"./cs.js":68481,"./cv":1694,"./cv.js":1694,"./cy":98903,"./cy.js":98903,"./da":95908,"./da.js":95908,"./de":85528,"./de-at":21732,"./de-at.js":21732,"./de-ch":54146,"./de-ch.js":54146,"./de.js":85528,"./dv":81313,"./dv.js":81313,"./el":20138,"./el.js":20138,"./en-au":78067,"./en-au.js":78067,"./en-ca":82545,"./en-ca.js":82545,"./en-gb":50124,"./en-gb.js":50124,"./en-ie":6107,"./en-ie.js":6107,"./en-il":13196,"./en-il.js":13196,"./en-in":1654,"./en-in.js":1654,"./en-nz":79557,"./en-nz.js":79557,"./en-sg":35451,"./en-sg.js":35451,"./eo":21591,"./eo.js":21591,"./es":36843,"./es-do":61009,"./es-do.js":61009,"./es-mx":75169,"./es-mx.js":75169,"./es-us":37224,"./es-us.js":37224,"./es.js":36843,"./et":77058,"./et.js":77058,"./eu":61297,"./eu.js":61297,"./fa":46658,"./fa.js":46658,"./fi":75674,"./fi.js":75674,"./fil":45204,"./fil.js":45204,"./fo":74428,"./fo.js":74428,"./fr":80703,"./fr-ca":27812,"./fr-ca.js":27812,"./fr-ch":9411,"./fr-ch.js":9411,"./fr.js":80703,"./fy":89738,"./fy.js":89738,"./ga":21235,"./ga.js":21235,"./gd":96032,"./gd.js":96032,"./gl":16424,"./gl.js":16424,"./gom-deva":53793,"./gom-deva.js":53793,"./gom-latn":14714,"./gom-latn.js":14714,"./gu":33383,"./gu.js":33383,"./he":46660,"./he.js":46660,"./hi":37264,"./hi.js":37264,"./hr":63201,"./hr.js":63201,"./hu":35604,"./hu.js":35604,"./hy-am":61067,"./hy-am.js":61067,"./id":19262,"./id.js":19262,"./is":53423,"./is.js":53423,"./it":73038,"./it-ch":23512,"./it-ch.js":23512,"./it.js":73038,"./ja":87558,"./ja.js":87558,"./jv":86071,"./jv.js":86071,"./ka":95927,"./ka.js":95927,"./kk":62625,"./kk.js":62625,"./km":25499,"./km.js":25499,"./kn":79486,"./kn.js":79486,"./ko":89405,"./ko.js":89405,"./ku":77155,"./ku-kmr":92516,"./ku-kmr.js":92516,"./ku.js":77155,"./ky":13647,"./ky.js":13647,"./lb":42837,"./lb.js":42837,"./lo":91474,"./lo.js":91474,"./lt":96967,"./lt.js":96967,"./lv":48297,"./lv.js":48297,"./me":1545,"./me.js":1545,"./mi":2573,"./mi.js":2573,"./mk":77259,"./mk.js":77259,"./ml":33826,"./ml.js":33826,"./mn":45368,"./mn.js":45368,"./mr":30860,"./mr.js":30860,"./ms":96947,"./ms-my":99418,"./ms-my.js":99418,"./ms.js":96947,"./mt":76906,"./mt.js":76906,"./my":71837,"./my.js":71837,"./nb":24503,"./nb.js":24503,"./ne":31286,"./ne.js":31286,"./nl":17981,"./nl-be":58103,"./nl-be.js":58103,"./nl.js":17981,"./nn":19387,"./nn.js":19387,"./oc-lnc":30803,"./oc-lnc.js":30803,"./pa-in":66742,"./pa-in.js":66742,"./pl":30075,"./pl.js":30075,"./pt":81731,"./pt-br":23352,"./pt-br.js":23352,"./pt.js":81731,"./ro":21776,"./ro.js":21776,"./ru":5746,"./ru.js":5746,"./sd":74100,"./sd.js":74100,"./se":38395,"./se.js":38395,"./si":8823,"./si.js":8823,"./sk":39385,"./sk.js":39385,"./sl":3852,"./sl.js":3852,"./sq":3247,"./sq.js":3247,"./sr":64290,"./sr-cyrl":26189,"./sr-cyrl.js":26189,"./sr.js":64290,"./ss":32177,"./ss.js":32177,"./sv":49038,"./sv.js":49038,"./sw":9741,"./sw.js":9741,"./ta":86932,"./ta.js":86932,"./te":95784,"./te.js":95784,"./tet":13334,"./tet.js":13334,"./tg":23602,"./tg.js":23602,"./th":16947,"./th.js":16947,"./tk":46774,"./tk.js":46774,"./tl-ph":5868,"./tl-ph.js":5868,"./tlh":16695,"./tlh.js":16695,"./tr":22573,"./tr.js":22573,"./tzl":84509,"./tzl.js":84509,"./tzm":17118,"./tzm-latn":87078,"./tzm-latn.js":87078,"./tzm.js":17118,"./ug-cn":82617,"./ug-cn.js":82617,"./uk":56131,"./uk.js":56131,"./ur":56532,"./ur.js":56532,"./uz":69932,"./uz-latn":27220,"./uz-latn.js":27220,"./uz.js":69932,"./vi":20490,"./vi.js":20490,"./x-pseudo":32154,"./x-pseudo.js":32154,"./yo":49955,"./yo.js":49955,"./zh-cn":68355,"./zh-cn.js":68355,"./zh-hk":89547,"./zh-hk.js":89547,"./zh-mo":70374,"./zh-mo.js":70374,"./zh-tw":979,"./zh-tw.js":979};function o(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=35358}}]);