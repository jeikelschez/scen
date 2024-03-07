(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[4281],{7894:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1959),moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1488),moment__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__),boot_axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5474),quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8825),quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(589),src_components_methods_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3759),src_components_rules_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6479),src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3599);const __WEBPACK_DEFAULT_EXPORT__={components:{methods:src_components_methods_vue__WEBPACK_IMPORTED_MODULE_3__.Z,rulesVue:src_components_rules_vue__WEBPACK_IMPORTED_MODULE_4__.Z,webViewer:src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_5__.Z},data(){return{columnsLista:[{name:"fecha_factura",label:"Fec. Fact.",field:"fecha_factura",align:"center"},{name:"nro_documento",label:"Nro. Fact.",field:"nro_documento",align:"center"},{name:"nro_factura",label:"Nro. Control",field:"nro_factura",align:"center"},{name:"nro_comprobante",label:"Nro. Comprobante",field:e=>e.retenciones.nro_comprobante,align:"center"},{name:"fecha_comprobante",label:"Fec. Comprobante",field:e=>e.retenciones.fecha_comprobante,align:"center"},{name:"action",label:"Acción",align:"center"}],tipoReporte:[{label:"IMPRESIÓN DE COMPROBANTE ISLR",value:"IC"},{label:"RESUMEN DE COMPROBANTE ISLR",value:"RC"},{label:"DECLARACIÓN DE ISLR",value:"DI"}],pagination:{page:1,rowsPerPage:0,rowsNumber:""},pdf:!0,selected:[],selectedOption:[],proveedores:[],cislrfac:[],selectedTipo:[],proveedoresSelected:[],selectedProveedor:[],listaIslr:[],proveedoresLoading:!0,print:"",nro_comprobante:"",fecha_comprobante:"",generarDisabled:!0,flagGenerar:!1,valorIslr:"",fecha_desde:moment__WEBPACK_IMPORTED_MODULE_0___default()().format("DD/MM/YYYY"),fecha_hasta:moment__WEBPACK_IMPORTED_MODULE_0___default()().format("DD/MM/YYYY")}},setup(){(0,quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_6__.Z)();return{loading:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1),pdfView:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1),detalleIslr:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1),detalleIslrSelected:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1),deletePopup:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1),separator:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)("vertical")}},mounted(){this.pdfPrint(),this.$emit("changeTitle","SCEN - Reportes - Control de Retenciones ISLR",""),this.$refs.methods.getData("/proveedores","setData","proveedores",{headers:{activo:"S"}}),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.Z.getItem("tokenTraducido").usuario.roles.id,menu:"controlretencionesislr"}}),this.selectedTipo=this.tipoReporte[0]},methods:{filterArray(e,t,s,o,a){t(""!==e?()=>{const t=e.toUpperCase();for(var r=[],l=0;l<=this[o].length-1;l++)if(this[o][l][a].indexOf(t)>-1&&r.push(this[o][l]),l==this[o].length-1){this[s]=r;break}}:()=>{this[s]=this[o]})},findIndex(e,t,s){var o=this[e].findIndex((e=>e.id==t));return o>=0?this[e][o][s]:null},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setData(res,dataRes){eval("this."+dataRes+"Loading = false"),this[dataRes]=res.data?res.data:res},async pdfChange(){this.loading=!0,this.pdf=!1,setTimeout((()=>{this.pdfPrint(),this.pdf=!0}),100)},pdfPrint(){let e={};e.proveedor=this.selectedProveedor.id?this.selectedProveedor.id:"",e.desde=this.fecha_desde,e.hasta=this.fecha_hasta,e.comprobante=this.nro_comprobante,boot_axios__WEBPACK_IMPORTED_MODULE_1__.api.get("/pdfreports/retencionesIslr",{headers:{Authorization:`Bearer ${quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.Z.getItem("token")}`,print:this.print,tipo:this.selectedTipo.value,data:JSON.stringify(e)}}).then((e=>{e.data.validDoc||(this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"}),this.print=""),this.$refs.webViewer.showpdf(e.data.pdfPath,""==this.print?.64:1.8,!1,!1),this.loading=!1})).catch((e=>{this.$q.notify({message:e.message,color:"red"}),this.pdfView=!1,this.loading=!1}))},async selectDetalleIslr(){await boot_axios__WEBPACK_IMPORTED_MODULE_1__.api.get("/cislrfac",{headers:{Authorization:`Bearer ${quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.Z.getItem("token")}`,desde:moment__WEBPACK_IMPORTED_MODULE_0___default()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:moment__WEBPACK_IMPORTED_MODULE_0___default()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),proveedor:this.selectedProveedor.id}}).then((e=>{e.data.data.length>0?(this.listaIslr=e.data.data,this.detalleIslr=!0):this.$q.notify({message:"No existen registros para este Proveedor",color:"red"})}))},selectOptions(){0!=this.selected.length?(this.detalleIslr=!1,this.detalleIslrSelected=!0,this.generarDisabled=!0,null!=this.selected[0].retenciones.nro_comprobante&&""!=this.selected[0].retenciones.nro_comprobante||(this.generarDisabled=!1),this.nro_comprobante=this.selected[0].retenciones.nro_comprobante,this.fecha_comprobante=this.selected[0].retenciones.fecha_comprobante):this.$q.notify({message:"Debe Seleccionar al menos un Registro",color:"red"})},deleteIslr(e){boot_axios__WEBPACK_IMPORTED_MODULE_1__.api.delete(`/cislrfac/${e}`,{headers:{Authorization:`Bearer ${quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.Z.getItem("token")}`}}).then((()=>{this.listaIslr.splice(this.listaIslr.findIndex((t=>t.id==e)),1),this.$q.notify({message:"ISLR eliminado con Exito...",color:"green"})})).catch((()=>{this.$q.notify({message:"Error del Sistema. Problemas al Eliminar el ISLR. Comuníquese con el proveedor del Sistemas...",color:"red"})}))},saveNroComp(){if(!this.nro_comprobante)return this.$q.notify({message:"Debe ingresar un número de Comprobante Válido",color:"red"}),void this.$refs.nro_comprobante.$el.focus();for(var e=0;e<=this.selected.length-1;e++){let t={};t.nro_comprobante=this.nro_comprobante,t.fecha_comprobante=moment__WEBPACK_IMPORTED_MODULE_0___default()(this.fecha_comprobante,"DD/MM/YYYY").format("YYYY-MM-DD"),this.selected[e].retenciones.nro_comprobante=this.nro_comprobante,this.selected[e].retenciones.fecha_comprobante=this.fecha_comprobante,boot_axios__WEBPACK_IMPORTED_MODULE_1__.api.put(`/cislr/${this.selected[e].cod_islr}`,t,{headers:{Authorization:`Bearer ${quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.Z.getItem("token")}`}}).catch((()=>{this.$q.notify({message:"Error del Sistema. Problemas al Actualizar el ISLR. Comuníquese con el proveedor del Sistemas...",color:"red"})}))}this.flagGenerar&&boot_axios__WEBPACK_IMPORTED_MODULE_1__.api.get("/vcontrol",{headers:{Authorization:`Bearer ${quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.Z.getItem("token")}`,name:"COMPROBANTE_ISLR"}}).then((e=>{e.data[0].valor=this.valorIslr.toString();let t=e.data[0].id;delete e.data[0].id,delete e.data[0].tipo_desc,boot_axios__WEBPACK_IMPORTED_MODULE_1__.api.put(`/vcontrol/${t}`,e.data[0],{headers:{Authorization:`Bearer ${quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.Z.getItem("token")}`}}).then((()=>{this.$q.notify({message:"Actualización Exitosa...",color:"green"}),this.flagGenerar=!1})).catch((()=>{this.$q.notify({message:"Error del Sistema. Problemas al Actualizar el valor del ISLR. Comuníquese con el proveedor del Sistemas...",color:"red"})}))})),this.detalleIslrSelected=!1},generaNroComp(){boot_axios__WEBPACK_IMPORTED_MODULE_1__.api.get("/vcontrol",{headers:{Authorization:`Bearer ${quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.Z.getItem("token")}`,name:"COMPROBANTE_ISLR"}}).then((e=>{this.valorIslr=parseInt(e.data[0].valor,10)+1;let t=moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY")+this.valorIslr.toString().padStart(4,"0");this.nro_comprobante=t,this.fecha_comprobante=moment__WEBPACK_IMPORTED_MODULE_0___default()().format("DD/MM/YYYY"),this.flagGenerar=!0}))},resetFilters(){this.selected=[],this.selectedOption=[],this.flagGenerar=!1,this.selectedTipo=this.tipoReporte[0],this.generarDisabled=!0,this.selectedProveedor=[],this.fecha_desde=moment__WEBPACK_IMPORTED_MODULE_0___default()().format("DD/MM/YYYY"),this.fecha_hasta=moment__WEBPACK_IMPORTED_MODULE_0___default()().format("DD/MM/YYYY"),this.print="",this.pdfChange()}}}},3759:(e,t,s)=>{"use strict";function o(e,t,s,o,a,r){return null}s.d(t,{Z:()=>d});var a=s(589),r=s(5474),l=s(8825);const i={setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,r.api.get(e,o).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,r.api.post(e,t,o).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,r.api.put(e,t,o).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,r.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,r.api.post(e,t,o).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=s(4260);const c=(0,n.Z)(i,[["render",o]]),d=c},6479:(e,t,s)=>{"use strict";function o(e,t,s,o,a,r){return null}s.d(t,{Z:()=>d});var a=s(8825),r=s(1488),l=s.n(r);const i={name:"rules",setup(){(0,a.Z)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==l()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var n=s(4260);const c=(0,n.Z)(i,[["render",o]]),d=c},3599:(e,t,s)=>{"use strict";s.d(t,{Z:()=>m});var o=s(3673);const a={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function r(e,t,s,r,l,i){return(0,o.wg)(),(0,o.iD)("div",a,null,512)}s(812),s(8408),s(6887),s(5221);var l=s(1959),i=s(163),n=s.n(i);const c={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,l.iH)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),s=t.length,o=new Uint8Array(s);for(let a=0;a<s;++a)o[a]=t.charCodeAt(a);return new Blob([o],{type:"application/pdf"})},async until(e){const t=s=>{e()?s():setTimeout((e=>t(s)),400)};return new Promise(t)},showpdf(e,t,s=!1,o=!0,a){const r="https://scen.rcsexpress.com/webViewer";n()({path:r,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((r=>{r.UI.disableElements(["panToolButton"]),r.UI.disableElements(["textSelectButton"]),r.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{r.UI.downloadPdf()}}),e.push({type:"actionButton",title:"Exportar Excel",img:"../../icons/icone-excel-grise.png",onClick:()=>{this.$emit("exportExcel")}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{s&&(this.$emit("printPdf"),await this.until((e=>1==this.confirmPrint)),!this.confirmPrint)||r.UI.print()}}),o&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),a?r.UI.loadDocument(this.base64ToBlob(a),{filename:"REPORTE SCEN.pdf"}):r.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/pdfreports/loadPDF/${e}`),r.UI.setLanguage("es"),r.UI.useEmbeddedPrint(!0),setTimeout((()=>{r.UI.setZoomLevel(t||.7)}),2e3)}))}}};var d=s(4260);const _=(0,d.Z)(c,[["render",r]]),m=_},5118:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>X});var o=s(3673);const a={class:"q-pa-sm justify-center",style:{"margin-top":"10px"}},r={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-top":"-20px"}},l=(0,o._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,o._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,o._)("strong",null,"REPORTES - CONTROL DE RETENCIONES ISLR")])],-1),i={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},n={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},c=(0,o.Uk)(" Sin resultados "),d={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-6 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},_={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-6 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},m={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 selectMobile2"},p=(0,o.Uk)("Seleccionar Facturas"),u=(0,o.Uk)("Resetear Filtros"),h=(0,o.Uk)("Generar"),g={class:"row justify-center items-center content-center",style:{padding:"20px"}},f=(0,o._)("div",{class:"col-md-11 col-xs-12"},[(0,o._)("p",{style:{"font-size":"20px","text-align":"left"},class:"text-secondary"},[(0,o._)("strong",null,"LISTA DE FACTURAS")])],-1),b={class:"col-md-12 col-xs-12"},E={class:"row justify-center items-center content-center",style:{"margin-bottom":"20px"}},D={class:"row justify-center items-center content-center",style:{padding:"20px"}},j=(0,o._)("div",{class:"col-md-11 col-xs-12"},[(0,o._)("p",{style:{"font-size":"20px","text-align":"left"},class:"text-secondary"},[(0,o._)("strong",null,"INGRESE COMPROBANTE ISLR")])],-1),P={class:"row col-md-12 col-xs-12"},v={class:"col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-6 cardMargin selectMobile2"},M={class:"col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-6"},x={class:"row justify-center items-center content-center",style:{"margin-bottom":"20px"}},w=(0,o._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1),y={class:"q-pa-md col-md-12 col-xs-12 q-gutter-y-md justify-center",style:{"margin-top":"-30px"}};function I(e,t,s,I,O,C){const W=(0,o.up)("q-select"),k=(0,o.up)("q-item-section"),R=(0,o.up)("q-item"),T=(0,o.up)("q-icon"),L=(0,o.up)("q-date"),A=(0,o.up)("q-popup-proxy"),U=(0,o.up)("q-input"),q=(0,o.up)("q-tooltip"),B=(0,o.up)("q-btn"),S=(0,o.up)("q-td"),Y=(0,o.up)("q-table"),V=(0,o.up)("q-card"),$=(0,o.up)("q-dialog"),z=(0,o.up)("q-card-section"),Z=(0,o.up)("q-card-actions"),K=(0,o.up)("webViewer"),N=(0,o.up)("q-inner-loading"),F=(0,o.up)("methods"),Q=(0,o.up)("rules-vue"),H=(0,o.up)("q-page"),G=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(H,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o._)("div",r,[l,(0,o._)("div",i,[(0,o.Wm)(W,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:O.tipoReporte,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",modelValue:O.selectedTipo,"onUpdate:modelValue":[t[0]||(t[0]=e=>O.selectedTipo=e),t[1]||(t[1]=e=>this.nro_comprobante="")],outlined:"",standout:"",label:"Tipo de Reporte"},null,8,["options","modelValue"])]),(0,o._)("div",n,[(0,o.Wm)(W,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:O.proveedoresSelected,onFilter:t[2]||(t[2]=(e,t)=>C.filterArray(e,t,"proveedoresSelected","proveedores","nb_proveedor")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_proveedor","option-value":"id",modelValue:O.selectedProveedor,"onUpdate:modelValue":t[3]||(t[3]=e=>O.selectedProveedor=e),outlined:"",loading:O.proveedoresLoading,disable:"DI"==this.selectedTipo.value||O.proveedoresLoading,standout:"",label:"Proveedor"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(R,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{class:"text-grey"},{default:(0,o.w5)((()=>[c])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(T,{name:"search"})])),_:1},8,["options","modelValue","loading","disable"])]),(0,o._)("div",d,[(0,o.Wm)(U,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:O.fecha_desde,"onUpdate:modelValue":t[6]||(t[6]=e=>O.fecha_desde=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(T,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{modelValue:O.fecha_desde,"onUpdate:modelValue":[t[4]||(t[4]=e=>O.fecha_desde=e),t[5]||(t[5]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",_,[(0,o.Wm)(U,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:O.fecha_hasta,"onUpdate:modelValue":t[9]||(t[9]=e=>O.fecha_hasta=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(T,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{modelValue:O.fecha_hasta,"onUpdate:modelValue":[t[7]||(t[7]=e=>O.fecha_hasta=e),t[8]||(t[8]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",m,[(0,o.Wm)(B,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-right":"15px"},onClick:t[10]||(t[10]=e=>C.selectDetalleIslr()),disabled:"IC"!=this.selectedTipo.value||!this.selectedProveedor.id},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{size:"25px",name:"list_alt",color:"white"}),(0,o.Wm)(q,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,o.w5)((()=>[p])),_:1})])),_:1},8,["disabled"]),(0,o.Wm)(B,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-right":"15px"},onClick:t[11]||(t[11]=e=>C.resetFilters())},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{size:"25px",name:"filter_alt_off",color:"white"}),(0,o.Wm)(q,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,o.w5)((()=>[u])),_:1})])),_:1}),(0,o.Wm)(B,{dense:"",color:"primary",round:"",padding:"sm",disabled:"IC"==this.selectedTipo.value&&!this.nro_comprobante,onClick:t[12]||(t[12]=e=>{C.pdfChange(),O.print=1})},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{size:"25px",name:"input",color:"white"}),(0,o.Wm)(q,{class:"bg-primary","transition-show":"scale",style:{"max-height":"30px"},"transition-hide":"scale",color:"primary"},{default:(0,o.w5)((()=>[h])),_:1})])),_:1},8,["disabled"])])])]),(0,o.Wm)($,{modelValue:I.detalleIslr,"onUpdate:modelValue":t[17]||(t[17]=e=>I.detalleIslr=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{style:{width:"800px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o._)("div",g,[f,(0,o._)("div",b,[(0,o.Wm)(Y,{rows:O.listaIslr,"row-key":"id",columns:O.columnsLista,"binary-state-sort":"",separator:I.separator,pagination:O.pagination,"onUpdate:pagination":t[14]||(t[14]=e=>O.pagination=e),grid:e.$q.screen.xs,"rows-per-page-options":[0],selection:"multiple",selected:O.selected,"onUpdate:selected":t[15]||(t[15]=e=>O.selected=e),style:{width:"100%",height:"350px"},"hide-bottom":""},{"body-cell-action":(0,o.w5)((e=>[(0,o.Wm)(S,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(B,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:t=>O.selectedOption=e.row.id,onClickCapture:t[13]||(t[13]=e=>I.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","separator","pagination","grid","selected"])])]),(0,o._)("div",E,[(0,o.Wm)(B,{label:"Seleccionar",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"done_all",onClick:t[16]||(t[16]=e=>this.selectOptions())}),(0,o.wy)((0,o.Wm)(B,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[G]])])])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)($,{modelValue:I.detalleIslrSelected,"onUpdate:modelValue":t[24]||(t[24]=e=>I.detalleIslrSelected=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{style:{width:"500px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o._)("div",D,[j,(0,o._)("div",P,[(0,o._)("div",v,[(0,o.Wm)(U,{outlined:"",label:"Nro. Comprobante",hint:"",dense:"",rounded:"",ref:"nro_comprobante",style:{"padding-bottom":"10px"},modelValue:O.nro_comprobante,"onUpdate:modelValue":t[18]||(t[18]=e=>O.nro_comprobante=e),"lazy-rules":""},null,8,["modelValue"])]),(0,o._)("div",M,[(0,o.Wm)(U,{outlined:"",label:"Fecha Comprobante",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:O.fecha_comprobante,"onUpdate:modelValue":t[21]||(t[21]=e=>O.fecha_comprobante=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(T,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{modelValue:O.fecha_comprobante,"onUpdate:modelValue":[t[19]||(t[19]=e=>O.fecha_comprobante=e),t[20]||(t[20]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])])])]),(0,o._)("div",x,[(0,o.Wm)(B,{label:"Generar",color:"primary",dense:"",class:"col-md-3 col-sm-3 col-xs-12",icon:"settings",style:{"margin-left":"5px"},disable:O.generarDisabled,onClick:t[22]||(t[22]=e=>this.generaNroComp())},null,8,["disable"]),(0,o.Wm)(B,{label:"Guardar",color:"primary",dense:"",class:"col-md-3 col-sm-3 col-xs-12",icon:"save",style:{"margin-left":"5px"},onClick:t[23]||(t[23]=e=>this.saveNroComp())}),(0,o.wy)((0,o.Wm)(B,{label:"Cerrar",color:"primary",flat:"",dense:"",class:"col-md-3 col-sm-3 col-xs-12",icon:"close"},null,512),[[G]])])])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)($,{modelValue:I.deletePopup,"onUpdate:modelValue":t[26]||(t[26]=e=>I.deletePopup=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{style:{width:"700px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(z,null,{default:(0,o.w5)((()=>[w])),_:1}),(0,o.Wm)(Z,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(B,{flat:"",label:"Cancelar",color:"primary"},null,512),[[G]]),(0,o.wy)((0,o.Wm)(B,{flat:"",label:"Aceptar",color:"primary",onClick:t[25]||(t[25]=e=>this.deleteIslr(O.selectedOption))},null,512),[[G]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",y,[1==O.pdf?((0,o.wg)(),(0,o.j4)(K,{key:0,ref:"webViewer",style:{width:"1580px",height:"560px","max-width":"1580px"}},null,512)):(0,o.kq)("",!0),(0,o.Wm)(N,{showing:I.loading,color:"primary",class:"loading"},null,8,["showing"])]),(0,o.Wm)(F,{ref:"methods",onSetData:C.setData,onSetDataPermisos:C.setDataPermisos},null,8,["onSetData","onSetDataPermisos"]),(0,o.Wm)(Q,{ref:"rulesVue"},null,512)])),_:1})}var O=s(7894),C=s(4260),W=s(4379),k=s(2448),R=s(3414),T=s(2035),L=s(4554),A=s(4689),U=s(3944),q=s(5626),B=s(8240),S=s(5363),Y=s(6778),V=s(151),$=s(6023),z=s(3884),Z=s(5589),K=s(9367),N=s(6941),F=s(677),Q=s(7518),H=s.n(Q);const G=(0,C.Z)(O.Z,[["render",I]]),X=G;H()(O.Z,"components",{QPage:W.Z,QSelect:k.Z,QItem:R.Z,QItemSection:T.Z,QIcon:L.Z,QInput:A.Z,QPopupProxy:U.Z,QDate:q.Z,QBtn:B.Z,QTooltip:S.Z,QDialog:Y.Z,QCard:V.Z,QTable:$.Z,QTd:z.Z,QCardSection:Z.Z,QCardActions:K.Z,QInnerLoading:N.Z}),H()(O.Z,"directives",{ClosePopup:F.Z})},6700:(e,t,s)=>{var o={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":8225,"./ar-dz.js":8225,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":8092,"./es-mx.js":8092,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id=6700}}]);