(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[9270],{28866:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10239),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__),vue__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(38734),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85038),moment__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__),boot_axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80660),quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(14907),quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(45022),src_components_methods_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(93899),src_components_rules_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(23828),src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(67646);const __WEBPACK_DEFAULT_EXPORT__={components:{methods:src_components_methods_vue__WEBPACK_IMPORTED_MODULE_4__.A,rulesVue:src_components_rules_vue__WEBPACK_IMPORTED_MODULE_5__.A,webViewer:src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_6__.A},data(){return{tipoReporte:[{label:"REPORTE GENERAL",value:"RG",tittle:"GENERAL",kgs_min:0,kgs_max:30},{label:"RESUMEN",value:"RE",tittle:"RESUMEN",kgs_min:0,kgs_max:30},{label:"RESUMEN GENERAL",value:"REG",tittle:"RESUMEN GENERAL",kgs_min:0,kgs_max:30},{label:"PLANILLA DE AUTOLIQUIDACIÓN",value:"PA",tittle:"",kgs_min:0,kgs_max:30},{label:"DE 0 A 0,500 KG",value:"R1",tittle:"GUÍAS HASTA 500 grs.",kgs_min:0,kgs_max:.5},{label:"DE 0,0501 A 1 KG",value:"R2",tittle:"GUÍAS DESDE 501 HASTA 1.000 grs.",kgs_min:.501,kgs_max:1},{label:"DE 1,01 A 2 KG",value:"R3",tittle:"GUÍAS DESDE 1.001 HASTA 2.000 grs.",kgs_min:1.01,kgs_max:2},{label:"DE 2,01 A 4 KG",value:"R4",tittle:"GUÍAS DESDE 2.001 HASTA 4.000 grs.",kgs_min:2.01,kgs_max:4},{label:"DE 4,01 A 5 KG",value:"R5",tittle:"GUÍAS DESDE 4.001 HASTA 5.000 grs.",kgs_min:4.01,kgs_max:5},{label:"DE 5,01 A 10 KG",value:"R6",tittle:"GUÍAS DESDE 5.001 HASTA 10.000 grs.",kgs_min:5.01,kgs_max:10},{label:"DE 10,01 A 20 KG",value:"R7",tittle:"GUÍAS DESDE 10.001 HASTA 20.000 grs.",kgs_min:10.01,kgs_max:20},{label:"DE 20,01 A 30 KG",value:"R8",tittle:"GUÍAS DESDE 20.001 HASTA 30.000 grs.",kgs_min:20.01,kgs_max:30}],pdf:!0,selected:[],selectedOption:[],agencias:[],clientes:[],selectedTipo:[],agenciasSelected:[],selectedAgencia:[],clientesSelected:[],selectedCliente:[],clientesLoading:!1,print:"",nro_planilla:"",fecha_desde:moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY"),fecha_hasta:moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY"),fecha_deposito:moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY")}},setup(){(0,quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_7__.A)();return{loading:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)(!1),pdfView:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)(!1),separator:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)("vertical"),dialog:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)(!1)}},mounted(){this.pdfPrint(),this.$emit("changeTitle","SCEN - Reportes - Relación de Pagos a Ipostel",""),this.$refs.methods.getData("/agencias","setData","agencias"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.A.getItem("tokenTraducido").usuario.roles.id,menu:"franqueopostal"}}),this.selectedTipo=this.tipoReporte[0]},methods:{filterArray(e,t,s,a,i){t(""!==e?()=>{const t=e.toUpperCase();for(var l=[],o=0;o<=this[a].length-1;o++)if(this[a][o][i].indexOf(t)>-1&&l.push(this[a][o]),o==this[a].length-1){this[s]=l;break}}:()=>{this[s]=this[a]})},findIndex(e,t,s){var a=this[e].findIndex((e=>e.id==t));return a>=0?this[e][a][s]:null},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setData(res,dataRes){eval("this."+dataRes+"Loading = false"),this[dataRes]=res.data?res.data:res},async pdfChange(){this.loading=!0,this.pdf=!1,setTimeout((()=>{this.pdfPrint(),this.pdf=!0}),100)},pdfPrint(){let e={};e.cliente=this.selectedCliente.id?this.selectedCliente.id:"",e.nbCliente=this.selectedCliente.id?this.selectedCliente.nb_cliente:"",e.desde=this.fecha_desde,e.hasta=this.fecha_hasta,e.tittle=this.selectedTipo.tittle,e.kgs_min=this.selectedTipo.kgs_min,e.kgs_max=this.selectedTipo.kgs_max,e.fecha_deposito=this.fecha_deposito,e.planilla=this.nro_planilla,boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/pdfreports/relacionFpo",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.A.getItem("token")}`,print:this.print,tipo:this.selectedTipo.value,data:JSON.stringify(e)}}).then((e=>{e.data.validDoc||(this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"}),this.print=""),this.$refs.webViewer.showpdf(e.data.pdfPath,""==this.print?.64:1.8,!1,!1),this.loading=!1})).catch((e=>{this.$q.notify({message:e.message,color:"red"}),this.pdfView=!1,this.loading=!1}))},resetFilters(){this.selected=[],this.selectedOption=[],this.selectedTipo=this.tipoReporte[0],this.selectedAgencia=[],this.selectedCliente=[],this.fecha_desde=moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY"),this.fecha_hasta=moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY"),this.print="",this.pdfChange()}}}},93899:(e,t,s)=>{"use strict";function a(e,t,s,a,i,l){return null}s.d(t,{A:()=>_});var i=s(45022),l=s(80660),o=s(14907);const n={setup(){const e=(0,o.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.A.getItem("token")}`,l.api.get(e,a).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.A.getItem("token")}`,l.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.A.getItem("token")}`,l.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.A.getItem("token")}`,l.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.A.getItem("token")}`,l.api.post(e,t,a).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=s(12807);const d=(0,r.A)(n,[["render",a]]),_=d},23828:(e,t,s)=>{"use strict";function a(e,t,s,a,i,l){return null}s.d(t,{A:()=>_});var i=s(14907),l=s(85038),o=s.n(l);const n={name:"rules",setup(){(0,i.A)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==o()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==o()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var r=s(12807);const d=(0,r.A)(n,[["render",a]]),_=d},67646:(e,t,s)=>{"use strict";s.d(t,{A:()=>u});var a=s(61758);const i={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function l(e,t,s,l,o,n){return(0,a.uX)(),(0,a.CE)("div",i,null,512)}s(10239),s(33186),s(45531),s(15683),s(9048),s(64702);var o=s(38734),n=s(82429),r=s.n(n);const d={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,o.KR)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),s=t.length,a=new Uint8Array(s);for(let i=0;i<s;++i)a[i]=t.charCodeAt(i);return new Blob([a],{type:"application/pdf"})},async until(e){const t=s=>{e()?s():setTimeout((e=>t(s)),400)};return new Promise(t)},showpdf(e,t,s=!1,a=!0,i){const l="https://scen.rcsexpress.com/webViewer";r()({path:l,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((l=>{l.UI.disableElements(["panToolButton"]),l.UI.disableElements(["textSelectButton"]),l.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{l.UI.downloadPdf()}}),e.push({type:"actionButton",title:"Exportar Excel",img:"../../icons/icone-excel-grise.png",onClick:()=>{this.$emit("exportExcel")}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{console.log("asdasd"),s&&(this.$emit("printPdf"),await this.until((e=>1==this.confirmPrint)),!this.confirmPrint)||l.UI.print()}}),a&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),i?l.UI.loadDocument(this.base64ToBlob(i),{filename:"REPORTE SCEN.pdf"}):l.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/pdfreports/loadPDF/${e}`),l.UI.setLanguage("es"),l.UI.useEmbeddedPrint(!0),setTimeout((()=>{l.UI.setZoomLevel(t||.7)}),2e3)}))}}};var _=s(12807);const c=(0,_.A)(d,[["render",l]]),u=c},95321:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>F});var a=s(61758);const i={class:"q-pa-sm justify-center",style:{"margin-top":"10px"}},l={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-top":"-20px"}},o=(0,a.Lk)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a.Lk)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a.Lk)("strong",null,"REPORTES - RELACIÓN DE PAGOS A IPOSTEL")])],-1),n={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},r={class:"col-md-2 col-xl2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},d={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},_={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-6 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},c={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-6 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},u={class:"col-md-1 col-xl-1 col-lg-1 col-xs-12 col-sm-12 selectMobile2"},m={class:"row",style:{"text-align":"center"}},p={class:"col-md-6 col-xs-6"},h={class:"col-md-6 col-xs-6"},g={class:"row justify-center items-center content-center"},f={class:"q-pa-md col-md-12 col-xs-12 q-gutter-y-md justify-center",style:{"margin-top":"-30px"}};function b(e,t,s,b,E,j){const k=(0,a.g2)("q-select"),D=(0,a.g2)("q-item-section"),A=(0,a.g2)("q-item"),x=(0,a.g2)("q-icon"),v=(0,a.g2)("q-date"),P=(0,a.g2)("q-popup-proxy"),y=(0,a.g2)("q-input"),M=(0,a.g2)("q-tooltip"),w=(0,a.g2)("q-btn"),R=(0,a.g2)("q-form"),C=(0,a.g2)("q-card-section"),O=(0,a.g2)("q-card"),L=(0,a.g2)("q-dialog"),T=(0,a.g2)("webViewer"),U=(0,a.g2)("q-inner-loading"),I=(0,a.g2)("methods"),q=(0,a.g2)("rules-vue"),S=(0,a.g2)("q-page"),V=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.Wv)(S,{class:"pagina q-pa-md"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",i,[(0,a.Lk)("div",l,[o,(0,a.Lk)("div",n,[(0,a.bF)(k,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:E.tipoReporte,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",modelValue:E.selectedTipo,"onUpdate:modelValue":t[0]||(t[0]=e=>E.selectedTipo=e),outlined:"",standout:"",label:"Tipo de Reporte"},null,8,["options","modelValue"])]),(0,a.Lk)("div",r,[(0,a.bF)(k,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:E.agenciasSelected,onFilter:t[1]||(t[1]=(e,t)=>j.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:E.selectedAgencia,"onUpdate:modelValue":[t[2]||(t[2]=e=>E.selectedAgencia=e),t[3]||(t[3]=e=>{this.selectedCliente=[],this.clientesLoading=!0,this.$refs.methods.getData("/clientes","setData","clientes",{headers:{agencia:E.selectedAgencia.id,activo:"S"}})})],outlined:"",standout:"",label:"Agencia",disable:"PA"==this.selectedTipo.value},{"no-option":(0,a.k6)((()=>[(0,a.bF)(A,null,{default:(0,a.k6)((()=>[(0,a.bF)(D,{class:"text-grey"},{default:(0,a.k6)((()=>[(0,a.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,a.k6)((()=>[(0,a.bF)(x,{name:"search"})])),_:1},8,["options","modelValue","disable"])]),(0,a.Lk)("div",d,[(0,a.bF)(k,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:E.clientesSelected,onFilter:t[4]||(t[4]=(e,t)=>j.filterArray(e,t,"clientesSelected","clientes","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_cliente","option-value":"id",modelValue:E.selectedCliente,"onUpdate:modelValue":t[5]||(t[5]=e=>E.selectedCliente=e),outlined:"",loading:E.clientesLoading,disable:"PA"==this.selectedTipo.value||E.clientesLoading,standout:"",label:"Cliente"},{"no-option":(0,a.k6)((()=>[(0,a.bF)(A,null,{default:(0,a.k6)((()=>[(0,a.bF)(D,{class:"text-grey"},{default:(0,a.k6)((()=>[(0,a.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,a.k6)((()=>[(0,a.bF)(x,{name:"search"})])),_:1},8,["options","modelValue","loading","disable"])]),(0,a.Lk)("div",_,[(0,a.bF)(y,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:E.fecha_desde,"onUpdate:modelValue":t[8]||(t[8]=e=>E.fecha_desde=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.k6)((()=>[(0,a.bF)(x,{name:"event",class:"cursor-pointer"},{default:(0,a.k6)((()=>[(0,a.bF)(P,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.k6)((()=>[(0,a.bF)(v,{modelValue:E.fecha_desde,"onUpdate:modelValue":[t[6]||(t[6]=e=>E.fecha_desde=e),t[7]||(t[7]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",c,[(0,a.bF)(y,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:E.fecha_hasta,"onUpdate:modelValue":t[11]||(t[11]=e=>E.fecha_hasta=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.k6)((()=>[(0,a.bF)(x,{name:"event",class:"cursor-pointer"},{default:(0,a.k6)((()=>[(0,a.bF)(P,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.k6)((()=>[(0,a.bF)(v,{modelValue:E.fecha_hasta,"onUpdate:modelValue":[t[9]||(t[9]=e=>E.fecha_hasta=e),t[10]||(t[10]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",u,[(0,a.bF)(w,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-right":"15px"},onClick:t[12]||(t[12]=e=>j.resetFilters())},{default:(0,a.k6)((()=>[(0,a.bF)(x,{size:"25px",name:"filter_alt_off",color:"white"}),(0,a.bF)(M,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)("Resetear Filtros")])),_:1})])),_:1}),(0,a.bF)(w,{dense:"",color:"primary",round:"",padding:"sm",onClickCapture:t[13]||(t[13]=e=>{"PA"==this.selectedTipo.value?this.dialog=!0:(j.pdfChange(),E.print=1)})},{default:(0,a.k6)((()=>[(0,a.bF)(x,{size:"25px",name:"input",color:"white"}),(0,a.bF)(M,{class:"bg-primary","transition-show":"scale",style:{"max-height":"30px"},"transition-hide":"scale",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)("Generar")])),_:1})])),_:1})])])]),(0,a.bF)(L,{modelValue:b.dialog,"onUpdate:modelValue":t[19]||(t[19]=e=>b.dialog=e)},{default:(0,a.k6)((()=>[(0,a.bF)(O,{class:"q-pa-md",bordered:"",style:{width:"500","max-width":"80vw"}},{default:(0,a.k6)((()=>[(0,a.bF)(C,null,{default:(0,a.k6)((()=>[(0,a.bF)(R,{class:"q-gutter-md",onSubmit:t[18]||(t[18]=e=>{j.pdfChange(),E.print=1,this.dialog=!1})},{default:(0,a.k6)((()=>[(0,a.Lk)("div",m,[(0,a.Lk)("div",p,[(0,a.bF)(y,{outlined:"",label:"Fecha Depósito",hint:"",dense:"",class:"pcform",style:{"padding-bottom":"0px"},modelValue:E.fecha_deposito,"onUpdate:modelValue":t[16]||(t[16]=e=>E.fecha_deposito=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.k6)((()=>[(0,a.bF)(x,{name:"event",class:"cursor-pointer"},{default:(0,a.k6)((()=>[(0,a.bF)(P,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.k6)((()=>[(0,a.bF)(v,{modelValue:E.fecha_deposito,"onUpdate:modelValue":[t[14]||(t[14]=e=>E.fecha_deposito=e),t[15]||(t[15]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",h,[(0,a.bF)(y,{outlined:"",label:"Planilla",hint:"",dense:"",style:{"padding-bottom":"0px"},modelValue:E.nro_planilla,"onUpdate:modelValue":t[17]||(t[17]=e=>E.nro_planilla=e)},null,8,["modelValue"])])]),(0,a.Lk)("div",g,[(0,a.bF)(w,{label:"Generar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"print"}),(0,a.bo)((0,a.bF)(w,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[V]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Lk)("div",f,[1==E.pdf?((0,a.uX)(),(0,a.Wv)(T,{key:0,ref:"webViewer",style:{width:"1680px",height:"610px","max-width":"1680px"}},null,512)):(0,a.Q3)("",!0),(0,a.bF)(U,{showing:b.loading,color:"primary",class:"loading"},null,8,["showing"])]),(0,a.bF)(I,{ref:"methods",onSetData:j.setData,onSetDataPermisos:j.setDataPermisos},null,8,["onSetData","onSetDataPermisos"]),(0,a.bF)(q,{ref:"rulesVue"},null,512)])),_:1})}var E=s(28866),j=s(12807),k=s(77716),D=s(94940),A=s(90124),x=s(25173),v=s(50492),P=s(67837),y=s(48975),M=s(93692),w=s(56384),R=s(97410),C=s(82156),O=s(23316),L=s(44189),T=s(49200),U=s(39035),I=s(88672),q=s(98582),S=s.n(q);const V=(0,j.A)(E.A,[["render",b]]),F=V;S()(E.A,"components",{QPage:k.A,QSelect:D.A,QItem:A.A,QItemSection:x.A,QIcon:v.A,QInput:P.A,QPopupProxy:y.A,QDate:M.A,QBtn:w.A,QTooltip:R.A,QDialog:C.A,QCard:O.A,QCardSection:L.A,QForm:T.A,QInnerLoading:U.A}),S()(E.A,"directives",{ClosePopup:I.A})},35358:(e,t,s)=>{var a={"./af":78188,"./af.js":78188,"./ar":50096,"./ar-dz":28495,"./ar-dz.js":28495,"./ar-kw":85891,"./ar-kw.js":85891,"./ar-ly":13194,"./ar-ly.js":13194,"./ar-ma":42195,"./ar-ma.js":42195,"./ar-ps":17084,"./ar-ps.js":17084,"./ar-sa":29393,"./ar-sa.js":29393,"./ar-tn":21867,"./ar-tn.js":21867,"./ar.js":50096,"./az":43224,"./az.js":43224,"./be":61330,"./be.js":61330,"./bg":85096,"./bg.js":85096,"./bm":28746,"./bm.js":28746,"./bn":29303,"./bn-bd":56554,"./bn-bd.js":56554,"./bn.js":29303,"./bo":30528,"./bo.js":30528,"./br":35499,"./br.js":35499,"./bs":29828,"./bs.js":29828,"./ca":35855,"./ca.js":35855,"./cs":68481,"./cs.js":68481,"./cv":1694,"./cv.js":1694,"./cy":98903,"./cy.js":98903,"./da":95908,"./da.js":95908,"./de":85528,"./de-at":21732,"./de-at.js":21732,"./de-ch":54146,"./de-ch.js":54146,"./de.js":85528,"./dv":81313,"./dv.js":81313,"./el":20138,"./el.js":20138,"./en-au":78067,"./en-au.js":78067,"./en-ca":82545,"./en-ca.js":82545,"./en-gb":50124,"./en-gb.js":50124,"./en-ie":6107,"./en-ie.js":6107,"./en-il":13196,"./en-il.js":13196,"./en-in":1654,"./en-in.js":1654,"./en-nz":79557,"./en-nz.js":79557,"./en-sg":35451,"./en-sg.js":35451,"./eo":21591,"./eo.js":21591,"./es":36843,"./es-do":61009,"./es-do.js":61009,"./es-mx":75169,"./es-mx.js":75169,"./es-us":37224,"./es-us.js":37224,"./es.js":36843,"./et":77058,"./et.js":77058,"./eu":61297,"./eu.js":61297,"./fa":46658,"./fa.js":46658,"./fi":75674,"./fi.js":75674,"./fil":45204,"./fil.js":45204,"./fo":74428,"./fo.js":74428,"./fr":80703,"./fr-ca":27812,"./fr-ca.js":27812,"./fr-ch":9411,"./fr-ch.js":9411,"./fr.js":80703,"./fy":89738,"./fy.js":89738,"./ga":21235,"./ga.js":21235,"./gd":96032,"./gd.js":96032,"./gl":16424,"./gl.js":16424,"./gom-deva":53793,"./gom-deva.js":53793,"./gom-latn":14714,"./gom-latn.js":14714,"./gu":33383,"./gu.js":33383,"./he":46660,"./he.js":46660,"./hi":37264,"./hi.js":37264,"./hr":63201,"./hr.js":63201,"./hu":35604,"./hu.js":35604,"./hy-am":61067,"./hy-am.js":61067,"./id":19262,"./id.js":19262,"./is":53423,"./is.js":53423,"./it":73038,"./it-ch":23512,"./it-ch.js":23512,"./it.js":73038,"./ja":87558,"./ja.js":87558,"./jv":86071,"./jv.js":86071,"./ka":95927,"./ka.js":95927,"./kk":62625,"./kk.js":62625,"./km":25499,"./km.js":25499,"./kn":79486,"./kn.js":79486,"./ko":89405,"./ko.js":89405,"./ku":77155,"./ku-kmr":92516,"./ku-kmr.js":92516,"./ku.js":77155,"./ky":13647,"./ky.js":13647,"./lb":42837,"./lb.js":42837,"./lo":91474,"./lo.js":91474,"./lt":96967,"./lt.js":96967,"./lv":48297,"./lv.js":48297,"./me":1545,"./me.js":1545,"./mi":2573,"./mi.js":2573,"./mk":77259,"./mk.js":77259,"./ml":33826,"./ml.js":33826,"./mn":45368,"./mn.js":45368,"./mr":30860,"./mr.js":30860,"./ms":96947,"./ms-my":99418,"./ms-my.js":99418,"./ms.js":96947,"./mt":76906,"./mt.js":76906,"./my":71837,"./my.js":71837,"./nb":24503,"./nb.js":24503,"./ne":31286,"./ne.js":31286,"./nl":17981,"./nl-be":58103,"./nl-be.js":58103,"./nl.js":17981,"./nn":19387,"./nn.js":19387,"./oc-lnc":30803,"./oc-lnc.js":30803,"./pa-in":66742,"./pa-in.js":66742,"./pl":30075,"./pl.js":30075,"./pt":81731,"./pt-br":23352,"./pt-br.js":23352,"./pt.js":81731,"./ro":21776,"./ro.js":21776,"./ru":5746,"./ru.js":5746,"./sd":74100,"./sd.js":74100,"./se":38395,"./se.js":38395,"./si":8823,"./si.js":8823,"./sk":39385,"./sk.js":39385,"./sl":3852,"./sl.js":3852,"./sq":3247,"./sq.js":3247,"./sr":64290,"./sr-cyrl":26189,"./sr-cyrl.js":26189,"./sr.js":64290,"./ss":32177,"./ss.js":32177,"./sv":49038,"./sv.js":49038,"./sw":9741,"./sw.js":9741,"./ta":86932,"./ta.js":86932,"./te":95784,"./te.js":95784,"./tet":13334,"./tet.js":13334,"./tg":23602,"./tg.js":23602,"./th":16947,"./th.js":16947,"./tk":46774,"./tk.js":46774,"./tl-ph":5868,"./tl-ph.js":5868,"./tlh":16695,"./tlh.js":16695,"./tr":22573,"./tr.js":22573,"./tzl":84509,"./tzl.js":84509,"./tzm":17118,"./tzm-latn":87078,"./tzm-latn.js":87078,"./tzm.js":17118,"./ug-cn":82617,"./ug-cn.js":82617,"./uk":56131,"./uk.js":56131,"./ur":56532,"./ur.js":56532,"./uz":69932,"./uz-latn":27220,"./uz-latn.js":27220,"./uz.js":69932,"./vi":20490,"./vi.js":20490,"./x-pseudo":32154,"./x-pseudo.js":32154,"./yo":49955,"./yo.js":49955,"./zh-cn":68355,"./zh-cn.js":68355,"./zh-hk":89547,"./zh-hk.js":89547,"./zh-mo":70374,"./zh-mo.js":70374,"./zh-tw":979,"./zh-tw.js":979};function i(e){var t=l(e);return s(t)}function l(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=l,e.exports=i,i.id=35358}}]);