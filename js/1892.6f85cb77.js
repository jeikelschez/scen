(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[1892],{65264:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(61959),src_components_rules_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(64379),boot_axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5474),moment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11488),moment__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__),quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(48825),quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80589),src_components_methods_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23759),src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8500);const __WEBPACK_DEFAULT_EXPORT__={components:{methods:src_components_methods_vue__WEBPACK_IMPORTED_MODULE_4__.Z,webViewer:src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_5__.Z,rulesVue:src_components_rules_vue__WEBPACK_IMPORTED_MODULE_0__.Z},data(){return{montoVenta:[{label:"SI",value:"SI"},{label:"NO",value:"NO"}],serieGuias:[{label:"44",value:"44"},{label:"55",value:"55"}],tipoReporte:[{label:"VENTAS GENERALES",value:"VG",zoom:1.6},{label:"VENTAS POR CLIENTES",value:"VC",zoom:1.6},{label:"TOTALES DE VENTAS",value:"TV",zoom:1.6},{label:"TOTALES RELACIÓN DESPACHO",value:"RD",zoom:1.6},{label:"GUÍAS CARGAS",value:"GC",zoom:1.4},{label:"FACTURAS",value:"FA",zoom:1.4},{label:"FACTURAS FPO",value:"FPO",zoom:1.4},{label:"NOTAS DE CRÉDITO",value:"NC",zoom:1.4},{label:"NOTAS DE DÉBITO",value:"ND",zoom:1.4},{label:"DOCUMENTOS EMITIDOS",value:"DE",zoom:1.4},{label:"COBRANZA GENERAL",value:"CG",zoom:1.4},{label:"COBRO EN DESTINO",value:"CD",zoom:1.4},{label:"CUENTAS POR COBRAR",value:"CC",zoom:1.4},{label:"CUENTAS POR COBRAR CLIENTE",value:"CCC",zoom:1.4}],estatus:[{label:"PENDIENTES POR COBRAR",value:"P"},{label:"PENDIENTES POR FACTURAR",value:"F"},{label:"CANCELADAS",value:"C"},{label:"ANULADAS",value:"A"},{label:"EN ELABORACIÓN",value:"E"},{label:"FACTURADAS",value:"G"},{label:"PENDIENTES POR IMPRIMIR",value:"I"},{label:"MODIFICADAS",value:"M"}],tipoDoc:[{label:"GUÍAS CARGA",value:"GC"},{label:"FACTURAS",value:"FA"}],formaPago:[{label:"CRÉDITO",value:"CR"},{label:"CONTADO",value:"CO"}],pagadoEn:[{label:"ORIGEN",value:"O"},{label:"DESTINO",value:"D"}],cargaNeta:[{label:"PESO KGS",value:"K",slot:"one"},{label:"PESO NETO",value:"N",slot:"two"}],selectedTipo:"",pdf:!0,agenciasSelected:[],selectedAgencia:[],agencias:[],clientesSelected:[],selectedCliente:[],clientesLoading:!1,clientes:[],agentesSelected:[],selectedAgente:[],agentesLoading:!1,agentes:[],selectedEstatus:[],selectedTipoDoc:[],selectedForma:[],selectedPagado:[],reportValue:"",selectedMonto:"SI",selectedNeta:!1,selectedSerie:["44","55"],selectedDolar:!1,selectedCorrelativo:!1,selectedAgrMes:!1,selectedAgrCli:!1,selectedAgrDia:!1,enabledExport:!1,fecha_desde:moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD/MM/YYYY"),fecha_hasta:moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD/MM/YYYY")}},setup(){(0,quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_6__.Z)();return{loading:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1),separator:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)("vertical"),deletePopup:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1),dialog:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1),pdfView:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!0)}},mounted(){this.pdfPrint(),this.$emit("changeTitle","SCEN - Reportes - Reporte de Ventas",""),this.$refs.methods.getData("/agencias","setData","agencias"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.Z.getItem("tokenTraducido").usuario.roles.id,menu:"reporteventas"}})},methods:{filterArray(e,t,l,s,a){t(""!==e?()=>{const t=e.toUpperCase();for(var o=[],i=0;i<=this[s].length-1;i++)if(this[s][i][a].indexOf(t)>-1&&o.push(this[s][i]),i==this[s].length-1){this[l]=o;break}}:()=>{this[l]=this[s]})},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setData(res,dataRes){eval("this."+dataRes+"Loading = false"),this[dataRes]=res.data?res.data:res},async pdfChange(e){e&&""==this.reportValue||(this.reportValue="",this.loading=!0,e||(this.reportValue=this.selectedTipo.value),this.pdf=!1,setTimeout((()=>{this.pdfPrint(),this.pdf=!0}),100))},pdfPrint(){var e={};e.fecha_desde=this.fecha_desde,e.fecha_hasta=this.fecha_hasta,e.agencia=this.selectedAgencia.id,e.cliente=this.selectedCliente.id,e.agente=this.selectedAgente.id,e.dolar=this.selectedDolar,e.visible=this.selectedMonto,e.neta=this.selectedNeta,e.estatus_admin=this.selectedEstatus.value,e.modalidad=this.selectedForma.value,e.pagado_en=this.selectedPagado.value,e.correlativo=this.selectedCorrelativo,e.tipo_doc=this.selectedTipoDoc.value,"VC"!=this.reportValue&&"CCC"!=this.reportValue||(this.selectedAgrMes&&(this.reportValue="VCM"),this.selectedAgrDia&&(this.reportValue="VCD"),this.selectedAgencia.id?this.selectedCliente.id?(e.agencia=this.selectedAgencia.id,e.cliente=this.selectedCliente.id):(this.$q.notify({message:"Debe seleccionar el Cliente antes de imprimir el reporte...",color:"red"}),this.reportValue=""):(this.$q.notify({message:"Debe seleccionar la Agencia antes de imprimir el reporte...",color:"red"}),this.reportValue="")),"TV"==this.reportValue&&(this.selectedAgrCli&&(this.reportValue="TVC"),this.selectedAgrDia&&(this.reportValue="TVD")),"VC"!=this.reportValue&&"VCM"!=this.reportValue&&"VCD"!=this.reportValue&&"TV"!=this.reportValue&&"TVC"!=this.reportValue&&"TVD"!=this.reportValue&&"RD"!=this.reportValue||(0==this.selectedSerie.length?(this.$q.notify({message:"Debe seleccionar al menos una serie...",color:"red"}),this.reportValue=""):e.serie=this.selectedSerie),boot_axios__WEBPACK_IMPORTED_MODULE_1__.api.get("/pdfreports/reporteVentas",{headers:{Authorization:`Bearer ${quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.Z.getItem("token")}`,tipo:this.reportValue,data:JSON.stringify(e)}}).then((e=>{let t=this.reportValue?this.selectedTipo.zoom:.7;e.data.validDoc||(this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"}),t=.7),"reporteBase.pdf"==e.data.pdfPath?this.enabledExport=!1:this.enabledExport=!0,this.$refs.webViewer.showpdf(e.data.pdfPath,t,!1,!1),this.loading=!1})).catch((e=>{this.$q.notify({message:e.message,color:"red"}),this.loading=!1}))},async exportExcel(){if(this.loading=!0,!this.enabledExport)return this.loading=!1,this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"}),void(zoom=.7);var e={};e.fecha_desde=this.fecha_desde,e.fecha_hasta=this.fecha_hasta,e.agencia=this.selectedAgencia.id,e.cliente=this.selectedCliente.id,e.agente=this.selectedAgente.id,e.dolar=this.selectedDolar,e.visible=this.selectedMonto,e.neta=this.selectedNeta,e.estatus_admin=this.selectedEstatus.value,e.modalidad=this.selectedForma.value,e.pagado_en=this.selectedPagado.value,e.correlativo=this.selectedCorrelativo,e.tipo_doc=this.selectedTipoDoc.value,await boot_axios__WEBPACK_IMPORTED_MODULE_1__.api.get("/excelreports/reporteVentas",{headers:{Authorization:`Bearer ${quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.Z.getItem("token")}`,tipo:this.selectedTipo.value,data:JSON.stringify(e)}}).then((e=>{if(!e.data.validDoc)return void this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"});const t=document.createElement("a");t.href=`https://scen.rcsexpress.com/api/v1/excelReports/loadExcel/${e.data.excelPath}`,t.setAttribute("download","file.xlsx"),setTimeout((()=>{t.click()}),1e3),this.loading=!1})).catch((e=>{this.$q.notify({message:e.message,color:"red"})}))},resetFilters(){this.agentes=[],this.clientes=[],this.selectedTipo="",this.reportValue="",this.selectedAgencia=[],this.selectedAgente=[],this.selectedCliente=[],this.selectedEstatus=[],this.selectedTipoDoc=[],this.selectedForma=[],this.selectedPagado=[],this.selectedDolar=!1,this.selectedMonto="SI",this.selectedSerie=["44","55"],this.selectedDolar=!1,this.selectedCorrelativo=!1,this.selectedAgrMes=!1,this.selectedAgrCli=!1,this.selectedAgrDia=!1,this.fecha_desde=moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD/MM/YYYY"),this.fecha_hasta=moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD/MM/YYYY"),this.pdfChange(0)}}}},23759:(e,t,l)=>{"use strict";function s(e,t,l,s,a,o){return null}l.d(t,{Z:()=>c});var a=l(80589),o=l(5474),i=l(48825);const n={setup(){const e=(0,i.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,l,s={headers:{}}){s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,o.api.get(e,s).then((e=>{this.$emit(t,e.data,l)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,l,s={headers:{}}){s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,o.api.post(e,t,s).then((e=>{(e.status=200)&&(this.$emit(l),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,l,s={headers:{}}){s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,o.api.put(e,t,s).then((e=>{(e.status=200)&&(this.$emit(l),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,l={headers:{}}){l.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,o.api.delete(e,l).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,l,s={headers:{}}){s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,o.api.post(e,t,s).then((e=>{(e.status=200)&&this.$emit(l,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=l(74260);const d=(0,r.Z)(n,[["render",s]]),c=d},64379:(e,t,l)=>{"use strict";function s(e,t,l,s,a,o){return null}l.d(t,{Z:()=>c});var a=l(48825),o=l(11488),i=l.n(o);const n={name:"rules",setup(){(0,a.Z)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,l=!1){if(null!==e&&""!==e&&e.length>t)return!1!==l?l:`Maximo ${t} Caracteres`},isMin(e,t,l=!1){if(null!==e&&""!==e&&e.length<t)return!1!==l?l:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==i()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==i()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var r=l(74260);const d=(0,r.Z)(n,[["render",s]]),c=d},8500:(e,t,l)=>{"use strict";l.d(t,{Z:()=>p});var s=l(83673);const a={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function o(e,t,l,o,i,n){return(0,s.wg)(),(0,s.iD)("div",a,null,512)}l(80812),l(15123),l(99802),l(42773),l(4260),l(26887),l(75221);var i=l(61959),n=l(163),r=l.n(n);const d={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,i.iH)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),l=t.length,s=new Uint8Array(l);for(let a=0;a<l;++a)s[a]=t.charCodeAt(a);return new Blob([s],{type:"application/pdf"})},async until(e){const t=l=>{e()?l():setTimeout((e=>t(l)),400)};return new Promise(t)},showpdf(e,t,l=!1,s=!0,a){const o="https://scen.rcsexpress.com/webViewer";r()({path:o,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((o=>{o.UI.disableElements(["panToolButton"]),o.UI.disableElements(["textSelectButton"]),o.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{o.UI.downloadPdf()}}),e.push({type:"actionButton",title:"Exportar Excel",img:"../../icons/icone-excel-grise.png",onClick:()=>{this.$emit("exportExcel")}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{l&&(this.$emit("printPdf"),await this.until((e=>1==this.confirmPrint)),!this.confirmPrint)||o.UI.print()}}),s&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),a?o.UI.loadDocument(this.base64ToBlob(a),{filename:"REPORTE SCEN.pdf"}):o.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/pdfreports/loadPDF/${e}`),o.UI.setLanguage("es"),o.UI.useEmbeddedPrint(!0),setTimeout((()=>{o.UI.setZoomLevel(t||.7)}),1500)}))}}};var c=l(74260);const u=(0,c.Z)(d,[["render",o]]),p=u},30681:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>Oe});var s=l(83673);const a={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"margin-left":"20px"}},o={class:"row col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 q-pa-sm justify-center",style:{"align-self":"center","text-align":"center","margin-top":"15px"}},i=(0,s._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},[(0,s._)("p",{style:{"font-size":"25px","margin-bottom":"25px"},class:"text-secondary"},[(0,s._)("strong",null,"REPORTE DE VENTAS")])],-1),n={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},r={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},d=(0,s.Uk)(" Sin resultados "),c={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},u=(0,s.Uk)(" Sin resultados "),p=(0,s.Uk)(" Sin resultados "),m={key:2,style:{"margin-bottom":"40px"}},_=(0,s._)("div",{class:"col-md-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},[(0,s._)("p",{style:{"font-size":"20px","margin-bottom":"5px"},class:"text-secondary"},[(0,s._)("strong",null,"Periodo Consultado")])],-1),g={class:"col-md-6 col-xs-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},h={class:"col-md-6 col-xs-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},f={class:"col-md-4 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},b={key:1,style:{"margin-bottom":"40px"}},v={class:"col-md-4 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},D={key:2,style:{"margin-bottom":"40px"}},x={class:"col-md-4 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},y={key:1,style:{"margin-bottom":"40px"}},E={class:"col-md-3",style:{"align-self":"center","text-align":"center"}},C={key:0,style:{"font-size":"20px","margin-bottom":"15px"},class:"text-secondary"},j=(0,s._)("strong",null,"Ver Montos",-1),T=[j],V={key:1,style:{"margin-bottom":"40px"}},A={class:"col-md-3 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},w={key:1,style:{"margin-bottom":"40px"}},M={class:"col-md-2",style:{"align-self":"center","text-align":"center"}},k={key:0,style:{"font-size":"20px","margin-bottom":"15px","margin-left":"-50px"},class:"text-secondary"},P=(0,s._)("strong",null,"Serie",-1),O=[P],R={key:1,style:{"font-size":"20px","margin-bottom":"15px","margin-right":"-20px"},class:"text-secondary"},S=(0,s._)("strong",null,"Correlativo",-1),U=[S],I={key:2,style:{"margin-bottom":"40px"}},L={class:"col-md-3 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},z={key:3,style:{"margin-bottom":"40px"}},q={class:"col-md-1 col-xl-1 col-lg-1 col-xs-1 col-sm-1 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},W={key:1,style:{"margin-bottom":"40px"}},B={class:"col-md-3",style:{"align-self":"center","text-align":"center"}},N={key:0,style:{"font-size":"20px","margin-bottom":"15px"},class:"text-secondary"},$=(0,s._)("strong",null,"Agrup. Mes",-1),F=[$],Z={key:1,style:{"font-size":"20px","margin-bottom":"15px"},class:"text-secondary"},K=(0,s._)("strong",null,"Agrup. Clientes",-1),G=[K],Y={key:2,style:{"margin-bottom":"40px"}},H={class:"col-md-1 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px","margin-left":"-10px"}},Q={key:2,style:{"margin-bottom":"40px"}},J={class:"col-md-3",style:{"align-self":"center","text-align":"center"}},X={key:0,style:{"font-size":"20px","margin-bottom":"15px","margin-left":"-10px"},class:"text-secondary"},ee=(0,s._)("strong",null,"Agrup. Días",-1),te=[ee],le={key:1,style:{"margin-bottom":"40px"}},se={class:"col-md-1 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px","margin-left":"-10px"}},ae={key:1,style:{"margin-bottom":"40px"}},oe={class:"col-md-3",style:{"align-self":"center","text-align":"center"}},ie={key:0,style:{"font-size":"20px","margin-bottom":"15px"},class:"text-secondary"},ne=(0,s._)("strong",null,"Neta",-1),re=[ne],de={key:1,style:{"margin-bottom":"40px"}},ce={class:"col-md-1 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"15px","margin-left":"-35px"}},ue={key:1,style:{"margin-bottom":"40px"}},pe={class:"col-md-4 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},me={class:"q-pa-md col-md-8 col-xs-12 q-gutter-y-md justify-center"};function _e(e,t,l,j,P,S){const $=(0,s.up)("q-select"),K=(0,s.up)("q-item-section"),ee=(0,s.up)("q-item"),ne=(0,s.up)("q-icon"),_e=(0,s.up)("q-date"),ge=(0,s.up)("q-popup-proxy"),he=(0,s.up)("q-input"),fe=(0,s.up)("q-btn-toggle"),be=(0,s.up)("q-checkbox"),ve=(0,s.up)("q-btn"),De=(0,s.up)("q-spinner-gears"),xe=(0,s.up)("q-inner-loading"),ye=(0,s.up)("webViewer"),Ee=(0,s.up)("methods"),Ce=(0,s.up)("rules-vue"),je=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(je,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s._)("div",a,[(0,s._)("div",o,[i,(0,s._)("div",n,[(0,s.Wm)($,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.tipoReporte,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",modelValue:P.selectedTipo,"onUpdate:modelValue":[t[0]||(t[0]=e=>P.selectedTipo=e),t[1]||(t[1]=e=>S.pdfChange(!0))],outlined:"",standout:"",label:"Tipo de Reporte"},null,8,["options","modelValue"])]),(0,s._)("div",r,[(0,s.Wm)($,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.agenciasSelected,onFilter:t[2]||(t[2]=(e,t)=>S.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:P.selectedAgencia,"onUpdate:modelValue":[t[3]||(t[3]=e=>P.selectedAgencia=e),t[4]||(t[4]=e=>{this.agentesLoading=!0,this.selectedAgente=[],this.agentes=[],this.$refs.methods.getData("/agentes","setData","agentes",{headers:{agencia:this.selectedAgencia.id}}),this.clientesLoading=!0,this.selectedCliente=[],this.clientes=[],this.$refs.methods.getData("/clientes","setData","clientes",{headers:{agencia:this.selectedAgencia.id,activo:"S"}})})],outlined:"",standout:"",label:"Agencia"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(ee,null,{default:(0,s.w5)((()=>[(0,s.Wm)(K,{class:"text-grey"},{default:(0,s.w5)((()=>[d])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)(ne,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",c,["VG"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)($,{key:0,rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.agentesSelected,loading:P.agentesLoading,disable:P.agentesLoading,onFilter:t[5]||(t[5]=(e,t)=>S.filterArray(e,t,"agentesSelected","agentes","persona_responsable")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"persona_responsable","option-value":"id",modelValue:P.selectedAgente,"onUpdate:modelValue":t[6]||(t[6]=e=>P.selectedAgente=e),outlined:"",standout:"",label:"Agente"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(ee,null,{default:(0,s.w5)((()=>[(0,s.Wm)(K,{class:"text-grey"},{default:(0,s.w5)((()=>[u])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)(ne,{name:"search"})])),_:1},8,["options","loading","disable","modelValue"])):"VC"==P.selectedTipo.value||"RD"==P.selectedTipo.value||"GC"==P.selectedTipo.value||"FA"==P.selectedTipo.value||"CD"==P.selectedTipo.value||"CCC"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)($,{key:1,rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.clientesSelected,loading:P.clientesLoading,disable:P.clientesLoading,onFilter:t[7]||(t[7]=(e,t)=>S.filterArray(e,t,"clientesSelected","clientes","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_cliente","option-value":"id",modelValue:P.selectedCliente,"onUpdate:modelValue":t[8]||(t[8]=e=>P.selectedCliente=e),outlined:"",standout:"",label:"Cliente"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(ee,null,{default:(0,s.w5)((()=>[(0,s.Wm)(K,{class:"text-grey"},{default:(0,s.w5)((()=>[p])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)(ne,{name:"search"})])),_:1},8,["options","loading","disable","modelValue"])):((0,s.wg)(),(0,s.iD)("div",m))]),_,(0,s._)("div",g,[(0,s.Wm)(he,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:P.fecha_desde,"onUpdate:modelValue":t[11]||(t[11]=e=>P.fecha_desde=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,s.w5)((()=>[(0,s.Wm)(ne,{name:"event",class:"cursor-pointer"},{default:(0,s.w5)((()=>[(0,s.Wm)(ge,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,s.w5)((()=>[(0,s.Wm)(_e,{modelValue:P.fecha_desde,"onUpdate:modelValue":[t[9]||(t[9]=e=>P.fecha_desde=e),t[10]||(t[10]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",h,[(0,s.Wm)(he,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:P.fecha_hasta,"onUpdate:modelValue":t[14]||(t[14]=e=>P.fecha_hasta=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,s.w5)((()=>[(0,s.Wm)(ne,{name:"event",class:"cursor-pointer"},{default:(0,s.w5)((()=>[(0,s.Wm)(ge,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,s.w5)((()=>[(0,s.Wm)(_e,{modelValue:P.fecha_hasta,"onUpdate:modelValue":[t[12]||(t[12]=e=>P.fecha_hasta=e),t[13]||(t[13]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",f,["GC"==P.selectedTipo.value||"FA"==P.selectedTipo.value||"CD"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)($,{key:0,rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.estatus,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"label","option-value":"value",modelValue:P.selectedEstatus,"onUpdate:modelValue":t[15]||(t[15]=e=>P.selectedEstatus=e),outlined:"",standout:"",label:"Estatus"},null,8,["options","modelValue"])):((0,s.wg)(),(0,s.iD)("div",b))]),(0,s._)("div",v,["CD"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)($,{key:0,rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.tipoDoc,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"label","option-value":"value",modelValue:P.selectedTipoDoc,"onUpdate:modelValue":t[16]||(t[16]=e=>P.selectedTipoDoc=e),outlined:"",standout:"",label:"Tipo Doc."},null,8,["options","modelValue"])):"GC"==P.selectedTipo.value||"FA"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)($,{key:1,rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.formaPago,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"label","option-value":"value",modelValue:P.selectedForma,"onUpdate:modelValue":t[17]||(t[17]=e=>P.selectedForma=e),outlined:"",standout:"",label:"Forma Pago"},null,8,["options","modelValue"])):((0,s.wg)(),(0,s.iD)("div",D))]),(0,s._)("div",x,["GC"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)($,{key:0,rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.pagadoEn,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"label","option-value":"value",modelValue:P.selectedPagado,"onUpdate:modelValue":t[18]||(t[18]=e=>P.selectedPagado=e),outlined:"",standout:"",label:"Pagado En"},null,8,["options","modelValue"])):((0,s.wg)(),(0,s.iD)("div",y))]),(0,s._)("div",E,["CG"!=P.selectedTipo.value&&"CC"!=P.selectedTipo.value&&"CCC"!=P.selectedTipo.value?((0,s.wg)(),(0,s.iD)("p",C,T)):((0,s.wg)(),(0,s.iD)("div",V))]),(0,s._)("div",A,["CG"!=P.selectedTipo.value&&"CC"!=P.selectedTipo.value&&"CCC"!=P.selectedTipo.value?((0,s.wg)(),(0,s.j4)(fe,{key:0,modelValue:P.selectedMonto,"onUpdate:modelValue":t[19]||(t[19]=e=>P.selectedMonto=e),spread:"",class:"my-custom-toggle",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"black",options:P.montoVenta},null,8,["modelValue","options"])):((0,s.wg)(),(0,s.iD)("div",w))]),(0,s._)("div",M,["VC"==P.selectedTipo.value||"TV"==P.selectedTipo.value||"RD"==P.selectedTipo.value?((0,s.wg)(),(0,s.iD)("p",k,O)):"GC"==P.selectedTipo.value||"FA"==P.selectedTipo.value?((0,s.wg)(),(0,s.iD)("p",R,U)):((0,s.wg)(),(0,s.iD)("div",I))]),(0,s._)("div",L,["VC"==P.selectedTipo.value||"TV"==P.selectedTipo.value||"RD"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)(be,{key:0,modelValue:P.selectedSerie,"onUpdate:modelValue":t[20]||(t[20]=e=>P.selectedSerie=e),color:"primary","left-label":"",val:"44",label:"44",style:{"margin-left":"-60px"}},null,8,["modelValue"])):(0,s.kq)("",!0),"VC"==P.selectedTipo.value||"TV"==P.selectedTipo.value||"RD"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)(be,{key:1,modelValue:P.selectedSerie,"onUpdate:modelValue":t[21]||(t[21]=e=>P.selectedSerie=e),color:"primary","left-label":"",val:"55",label:"55"},null,8,["modelValue"])):"GC"==P.selectedTipo.value||"GF"==P.selectedTipo.value||"FA"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)(be,{key:2,modelValue:P.selectedCorrelativo,"onUpdate:modelValue":t[22]||(t[22]=e=>P.selectedCorrelativo=e),color:"primary","left-label":"",style:{"margin-left":"-40px"}},null,8,["modelValue"])):((0,s.wg)(),(0,s.iD)("div",z))]),(0,s._)("div",q,["VG"==P.selectedTipo.value||"VC"==P.selectedTipo.value||"TV"==P.selectedTipo.value||"RD"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)(be,{key:0,modelValue:P.selectedDolar,"onUpdate:modelValue":t[23]||(t[23]=e=>P.selectedDolar=e),color:"primary","left-label":"",label:"$",class:"text-secondary",style:{"font-size":"20px","font-weight":"bold","margin-left":"-30px"}},null,8,["modelValue"])):((0,s.wg)(),(0,s.iD)("div",W))]),(0,s._)("div",B,["VC"==P.selectedTipo.value?((0,s.wg)(),(0,s.iD)("p",N,F)):"TV"==P.selectedTipo.value?((0,s.wg)(),(0,s.iD)("p",Z,G)):((0,s.wg)(),(0,s.iD)("div",Y))]),(0,s._)("div",H,["VC"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)(be,{key:0,modelValue:P.selectedAgrMes,"onUpdate:modelValue":[t[24]||(t[24]=e=>P.selectedAgrMes=e),t[25]||(t[25]=e=>{P.selectedAgrMes&&(P.selectedAgrDia=!1)})],color:"primary","left-label":""},null,8,["modelValue"])):"TV"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)(be,{key:1,modelValue:P.selectedAgrCli,"onUpdate:modelValue":[t[26]||(t[26]=e=>P.selectedAgrCli=e),t[27]||(t[27]=e=>{P.selectedAgrCli&&(P.selectedAgrDia=!1)})],color:"primary","left-label":""},null,8,["modelValue"])):((0,s.wg)(),(0,s.iD)("div",Q))]),(0,s._)("div",J,["VC"==P.selectedTipo.value||"TV"==P.selectedTipo.value?((0,s.wg)(),(0,s.iD)("p",X,te)):((0,s.wg)(),(0,s.iD)("div",le))]),(0,s._)("div",se,["VC"==P.selectedTipo.value||"TV"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)(be,{key:0,modelValue:P.selectedAgrDia,"onUpdate:modelValue":[t[28]||(t[28]=e=>P.selectedAgrDia=e),t[29]||(t[29]=e=>{P.selectedAgrDia&&(P.selectedAgrMes=!1,P.selectedAgrCli=!1)})],color:"primary","left-label":""},null,8,["modelValue"])):((0,s.wg)(),(0,s.iD)("div",ae))]),(0,s._)("div",oe,["VC"==P.selectedTipo.value||"TV"==P.selectedTipo.value||"RD"==P.selectedTipo.value?((0,s.wg)(),(0,s.iD)("p",ie,re)):((0,s.wg)(),(0,s.iD)("div",de))]),(0,s._)("div",ce,["VC"==P.selectedTipo.value||"TV"==P.selectedTipo.value||"RD"==P.selectedTipo.value?((0,s.wg)(),(0,s.j4)(be,{key:0,modelValue:P.selectedNeta,"onUpdate:modelValue":t[30]||(t[30]=e=>P.selectedNeta=e),color:"primary","left-label":""},null,8,["modelValue"])):((0,s.wg)(),(0,s.iD)("div",ue))]),(0,s._)("div",pe,[(0,s.Wm)(ve,{rounded:"",label:"Generar",type:"submit",color:"primary",class:"col-md-3 col-sm-3 col-xs-12",icon:"input",style:{"margin-right":"20px"},onClick:t[31]||(t[31]=e=>S.pdfChange(!1))}),(0,s.Wm)(ve,{rounded:"",label:"Limpiar",color:"primary",class:"col-md-3 col-sm-3 col-xs-12 btnmovil",icon:"filter_alt_off",onClick:t[32]||(t[32]=e=>S.resetFilters())})])]),(0,s._)("div",me,[1==P.pdf?((0,s.wg)(),(0,s.j4)(ye,{key:0,onExportExcel:S.exportExcel,ref:"webViewer",style:{width:"960px",height:"620px","max-width":"960px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(xe,{showing:e.visible},{default:(0,s.w5)((()=>[(0,s.Wm)(De,{size:"50px",color:"primary"})])),_:1},8,["showing"])])),_:1},8,["onExportExcel"])):(0,s.kq)("",!0),(0,s.Wm)(xe,{showing:j.loading,color:"primary",class:"loading"},null,8,["showing"])])]),(0,s.Wm)(Ee,{ref:"methods",onSetData:S.setData,onSetDataPermisos:S.setDataPermisos},null,8,["onSetData","onSetDataPermisos"]),(0,s.Wm)(Ce,{ref:"rulesVue"},null,512)])),_:1})}var ge=l(65264),he=l(74260),fe=l(24379),be=l(72448),ve=l(83414),De=l(52035),xe=l(24554),ye=l(64689),Ee=l(83944),Ce=l(85626),je=l(38761),Te=l(65735),Ve=l(48240),Ae=l(66941),we=l(6394),Me=l(7518),ke=l.n(Me);const Pe=(0,he.Z)(ge.Z,[["render",_e]]),Oe=Pe;ke()(ge.Z,"components",{QPage:fe.Z,QSelect:be.Z,QItem:ve.Z,QItemSection:De.Z,QIcon:xe.Z,QInput:ye.Z,QPopupProxy:Ee.Z,QDate:Ce.Z,QBtnToggle:je.Z,QCheckbox:Te.Z,QBtn:Ve.Z,QInnerLoading:Ae.Z,QSpinnerGears:we.Z})},46700:(e,t,l)=>{var s={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function a(e){var t=o(e);return l(t)}function o(e){if(!l.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=o,e.exports=a,a.id=46700}}]);