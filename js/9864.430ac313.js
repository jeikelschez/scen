(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[9864],{59950:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10239),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__),vue__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(38734),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85038),moment__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__),boot_axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80660),v_money__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(32939),v_money__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(v_money__WEBPACK_IMPORTED_MODULE_3__),src_components_rules_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(99565),quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(14907),quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(45022),src_components_methods_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(93899),src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(55302);const __WEBPACK_DEFAULT_EXPORT__={directives:{money:v_money__WEBPACK_IMPORTED_MODULE_3__.VMoney},components:{methods:src_components_methods_vue__WEBPACK_IMPORTED_MODULE_6__.A,webViewer:src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_7__.A,rulesVue:src_components_rules_vue__WEBPACK_IMPORTED_MODULE_4__.A},data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!1},moneyNotDecimal:{decimal:",",thousands:".",prefix:"",suffix:"",precision:0,masked:!1},columns:[{name:"nro_documento",label:"Nro. Documento",field:"nro_documento",align:"left"},{name:"fecha_emision",label:"Fecha Emisión",field:"fecha_emision",align:"left"},{name:"fecha_envio",label:"Fecha Envío",field:"fecha_envio",align:"left"},{name:"fecha_recepcion",label:"Fecha Entrega",field:"fecha_recepcion",align:"left"},{name:"dias_entrega",label:"Días Entrega",field:"dias_entrega",align:"center"},{name:"siglas_org",label:"Org.",field:"siglas_org",align:"center"},{name:"cod_cliente_org",label:"Cliente",field:"cod_cliente_org",align:"left"},{name:"monto_total",label:"Monto Total",field:"monto_total",align:"right",format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"estatus_operativo",label:"Estatus Operativo",field:"estatus_operativo",align:"left"},{name:"estatus_administra",label:"Estatus Administra",field:"estatus_administra",align:"left"},{name:"com_entrega",label:"Comisión Entrega",field:"com_entrega",align:"right",format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"com_seguro",label:"Comisión Seguro",field:"com_seguro",align:"right",format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()}],opciones:[{label:"GENERAR COMISIONES",value:"GC"}],estatusOperativo:[{label:"Conforme",value:"CO"},{label:"No Conforme",value:"NC"}],estatusAdministrativo:[{label:"En Elaboracion",value:"E"},{label:"Por Facturar",value:"F"},{label:"Facturada",value:"G"},{label:"Anulada",value:"A"},{label:"Por Cobrar",value:"P"},{label:"Cancelada",value:"C"},{label:"Por Imprimir",value:"I"},{label:"Modificada",value:"M"}],pagination:{page:1,rowsPerPage:0,sortBy:JSON.stringify([["cod_agencia_dest","ASC"],["cod_agente_entrega","ASC"],["nro_documento","ASC"],["fecha_emision","ASC"]]),descending:!1},selected:[],guias:[],agencias:[],agentes:[],agentesAll:[],agentesArray:[],agentesEntrega:[],agentesSeguro:[],agenciasSelected:[],selectedAgenciaDestino:[],selectedAgente:[],agentesSelected:[],agentesLoading:!1,selectedOpcion:[],selectedId:[],printData:[],selectedSerie:["44","55"],selectedAgrup:!1,selectedDolar:!1,fecha_desde:moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("month").format("DD/MM/YYYY"),fecha_hasta:moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf("month").format("DD/MM/YYYY"),cantidad:0,monto_total:0,comision_entrega:0,comision_seguro:0}},setup(){(0,quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_8__.A)();return{loading:(0,vue__WEBPACK_IMPORTED_MODULE_9__.KR)(!1),separator:(0,vue__WEBPACK_IMPORTED_MODULE_9__.KR)("vertical"),pdfView:(0,vue__WEBPACK_IMPORTED_MODULE_9__.KR)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Administración - Generar Comisiones",""),this.$refs.methods.getData("/agencias","setDataInit","agencias",{headers:{order_by:"nb_agencia",order_direction:"ASC"}}),this.$refs.methods.getData("/agentes","setData","agentesAll",{headers:{activo:"S",order_by:"persona_responsable",order_direction:"ASC"}}),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__.A.getItem("tokenTraducido").usuario.roles.id,menu:"generarcomisiones"}})},methods:{filterArray(e,t,s,a,i){t(""!==e?()=>{const t=e.toUpperCase();for(var o=[],l=0;l<=this[a].length-1;l++)if(this[a][l][i].indexOf(t)>-1&&o.push(this[a][l]),l==this[a].length-1){this[s]=o;break}}:()=>{this[s]=this[a]})},findIndex(e,t,s){var a=this[e].findIndex((e=>e.id==t));return a>=0?this[e][a][s]:null},filterDesc(e,t){var s=this[e].findIndex((e=>e.value==t));return s>=0?this[e][s].label:null},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},async setDataInit(e,t){this.loading=!0,this[t]=e.data?e.data:e,this.selectedOpcion=this.opciones[0],this.getDataTable()},setData(res,dataRes){eval("this."+dataRes+"Loading = false"),this[dataRes]=res.data?res.data:res},async getDataTable(e){if(this.loading=!0,e&&(this.pagination=e.pagination),this.agentesArray=[],this.selectedAgente.persona_responsable&&!this.selectedAgente.id)for(var t=0;t<=this.selectedAgenciaDestino.length-1;t++)await boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/agentes/",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__.A.getItem("token")}`,agencia:this.selectedAgenciaDestino[t],responsable:this.selectedAgente.persona_responsable,activo:"S",order_by:"persona_responsable",order_direction:"ASC"}}).then((e=>{e.data.data.length>0&&this.agentesArray.push(e.data.data[0].id)}));this.$refs.methods.getData("/mmovimientos","setDataTable","guias",{headers:{filters:JSON.stringify({agencia_dest:this.selectedAgenciaDestino.id?this.selectedAgenciaDestino.id:this.selectedAgenciaDestino.length>0?this.selectedAgenciaDestino:"",agente:this.selectedAgente.id?this.selectedAgente.id:this.agentesArray.length>0?this.agentesArray:"",desde:moment__WEBPACK_IMPORTED_MODULE_1___default()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:moment__WEBPACK_IMPORTED_MODULE_1___default()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),estatus_admin_ex:"A",estatus_oper_in:"CO,NC",include_fc:"S",serie:this.selectedSerie}),order:this.pagination.sortBy,direction:this.pagination.descending?"DESC":"ASC"}})},setDataTable(e,t){this[t]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1,this.selected=this.guias,this.guias.length>0&&this.calculaTotales()},buildData(e,t){var s="";switch(e){case"fecha_envio":s=t.fecha_envio,t.fecha_envio_costo&&(s=moment__WEBPACK_IMPORTED_MODULE_1___default()(t.fecha_envio_costo,"YYYY-MM-DD").format("DD/MM/YYYY"));break;case"dias_entrega":let e=moment__WEBPACK_IMPORTED_MODULE_1___default()(t.fecha_recepcion,"DD/MM/YYYY"),a=moment__WEBPACK_IMPORTED_MODULE_1___default()(t.fecha_envio,"DD/MM/YYYY");t.fecha_envio_costo&&(a=moment__WEBPACK_IMPORTED_MODULE_1___default()(t.fecha_envio_costo)),s=e.diff(a,"days");break;case"cod_cliente_org":s=t.cliente_dest_desc,"O"==t.pagado_en&&(s=t.cliente_orig_desc);break;default:break}return s},print(){for(var e=0;e<this.selected.length;e++)this.selectedId.push(this.selected[e].id);boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/pdfreports/comisiones",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__.A.getItem("token")}`,data:JSON.stringify(this.selectedId),desde:this.fecha_desde,hasta:this.fecha_hasta,dolar:this.selectedDolar,group:this.selectedAgrup}}).then((e=>{if(!e.data.validDoc)return this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"}),void(this.pdfView=!1);this.$refs.webViewer.showpdf(e.data.pdfPath,1.4)})).catch((e=>{this.$q.notify({message:"Error en generar el reporte: "+e,color:"red"}),this.pdfView=!1})),this.printData=[]},async exportExcel(){this.pdfView=!1,this.loading=!0;for(var e=0;e<this.selected.length;e++)this.selectedId.push(this.selected[e].id);await boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/excelreports/comisiones",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__.A.getItem("token")}`,data:JSON.stringify(this.selectedId),desde:this.fecha_desde,hasta:this.fecha_hasta,dolar:this.selectedDolar}}).then((e=>{if(!e.data.validDoc)return void this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"});const t=document.createElement("a");t.href=`https://scen.rcsexpress.com/api/v1/excelReports/loadExcel/${e.data.excelPath}`,t.setAttribute("download","file.xlsx"),setTimeout((()=>{t.click()}),1e3),this.loading=!1})).catch((e=>{this.$q.notify({message:e.message,color:"red"})}))},async calculaTotales(){let e=0,t=0,s=0,a=0,i=0;for(var o=0;o<this.guias.length;o++)e+=this.guias[o].monto_total?this.parseFloatN(this.curReplace(this.guias[o].monto_total)):0,t+=this.guias[o].com_entrega?this.parseFloatN(this.curReplace(this.guias[o].com_entrega)):0,s+=this.guias[o].com_seguro?this.parseFloatN(this.curReplace(this.guias[o].com_seguro)):0,o>0&&this.guias[o].cod_agencia_dest+"-"+this.guias[o].cod_agente_entrega!=this.guias[o-1].cod_agencia_dest+"-"+this.guias[o-1].cod_agente_entrega&&(this.agentesEntrega[this.guias[o-1].cod_agencia_dest+"-"+this.guias[o-1].cod_agente_entrega]=a,this.agentesSeguro[this.guias[o-1].cod_agencia_dest+"-"+this.guias[o-1].cod_agente_entrega]=i,a=0,i=0),a+=this.guias[o].com_entrega?this.parseFloatN(this.curReplace(this.guias[o].com_entrega)):0,i+=this.guias[o].com_seguro?this.parseFloatN(this.curReplace(this.guias[o].com_seguro)):0;this.agentesEntrega[this.guias[this.guias.length-1].cod_agencia_dest+"-"+this.guias[this.guias.length-1].cod_agente_entrega]=a,this.agentesSeguro[this.guias[this.guias.length-1].cod_agencia_dest+"-"+this.guias[this.guias.length-1].cod_agente_entrega]=i,this.cantidad=this.guias.length,this.monto_total=e.toFixed(2),this.comision_entrega=t.toFixed(2),this.comision_seguro=s.toFixed(2)},resetFilters(){this.selectedOpcion=this.opciones[0],this.selectedAgenciaDestino=[],this.selectedAgente=[],this.fecha_desde=moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("month").format("DD/MM/YYYY"),this.fecha_hasta=moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf("month").format("DD/MM/YYYY"),this.selectedSerie=["44","55"],this.selectedAgrup=!1,this.selectedDolar=!1,this.getDataTable()},curReplace(e){return e.indexOf(",")<0?e:e.replaceAll(".","").replaceAll(",",".")},parseFloatN(e){return e=Math.round(100*e)/100,e}}}},93899:(e,t,s)=>{"use strict";function a(e,t,s,a,i,o){return null}s.d(t,{A:()=>c});var i=s(45022),o=s(80660),l=s(14907);const n={setup(){const e=(0,l.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.A.getItem("token")}`,o.api.get(e,a).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.A.getItem("token")}`,o.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.A.getItem("token")}`,o.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.A.getItem("token")}`,o.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.A.getItem("token")}`,o.api.post(e,t,a).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=s(12807);const d=(0,r.A)(n,[["render",a]]),c=d},99565:(e,t,s)=>{"use strict";function a(e,t,s,a,i,o){return null}s.d(t,{A:()=>c});var i=s(14907),o=s(85038),l=s.n(o);const n={name:"rules",setup(){(0,i.A)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrencyWithZero(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==l()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var r=s(12807);const d=(0,r.A)(n,[["render",a]]),c=d},55302:(e,t,s)=>{"use strict";s.d(t,{A:()=>u});var a=s(61758);const i={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function o(e,t,s,o,l,n){return(0,a.uX)(),(0,a.CE)("div",i,null,512)}s(10239),s(33186),s(45531),s(15683),s(9048),s(64702);var l=s(38734),n=s(82429),r=s.n(n);const d={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,l.KR)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),s=t.length,a=new Uint8Array(s);for(let i=0;i<s;++i)a[i]=t.charCodeAt(i);return new Blob([a],{type:"application/pdf"})},async until(e){const t=s=>{e()?s():setTimeout((e=>t(s)),400)};return new Promise(t)},showpdf(e,t,s=!1,a=!0,i){const o="https://scen.rcsexpress.com/webViewer";r()({path:o,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((o=>{o.UI.disableElements(["panToolButton"]),o.UI.disableElements(["textSelectButton"]),o.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{o.UI.downloadPdf()}}),e.push({type:"actionButton",title:"Exportar Excel",img:"../../icons/icone-excel-grise.png",onClick:()=>{this.$emit("exportExcel")}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{s&&(this.$emit("printPdf"),await this.until((e=>this.confirmPrint)),"false"==this.confirmPrint)||(o.UI.print(),this.confirmPrint=!1)}}),a&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),i?o.UI.loadDocument(this.base64ToBlob(i),{filename:"REPORTE SCEN.pdf"}):o.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/pdfreports/loadPDF/${e}`),o.UI.setLanguage("es"),o.UI.useEmbeddedPrint(!0),setTimeout((()=>{o.UI.setZoomLevel(t||.7)}),2e3)}))}}};var c=s(12807);const _=(0,c.A)(d,[["render",o]]),u=_},65707:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>ge});var a=s(61758),i=s(29104),o=s(58790);const l={class:"q-pa-sm justify-center"},n={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},r=(0,a.Lk)("div",{class:"col-md-3 col-xl-2 col-lg-2 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a.Lk)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a.Lk)("strong",null,"ADMINISTRACIÓN - GENERAR COMISIONES")])],-1),d={class:"col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},c={class:"col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},_={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-top":"-25px"}},u={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},g={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},m={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},h={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},p={class:"col-md-1 col-xl-1 col-lg-1 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},f={class:"col-md-1 col-xl-1 col-lg-1 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},b={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},D={class:"q-pa-md justify-center",style:{"margin-top":"-25px"}},E={class:"text-left",style:{"margin-bottom":"-30px"}},x={class:"text-left",style:{"margin-bottom":"-30px"}},k={class:"text-left"},y={class:"text-left"},v={class:"text-left"},A={class:"text-left"},j={class:"text-left"},M={class:"text-left"},w={key:0},I={key:1},P={key:2},O={key:3},C={key:4},L={key:5},F={class:"col-md-6 col-xs-12"},T={class:"row"},U={class:"col-md-1 col-xs-12"},V=(0,a.Lk)("div",{class:"col-md-5 col-xs-12"},null,-1),R={class:"col-md-2 col-xs-12"},S={class:"col-md-2 col-xs-12"},q={class:"col-md-2 col-xs-12"};function B(e,t,s,B,Y,W){const K=(0,a.g2)("q-item-section"),z=(0,a.g2)("q-item"),$=(0,a.g2)("q-icon"),N=(0,a.g2)("q-select"),Q=(0,a.g2)("q-inner-loading"),X=(0,a.g2)("q-date"),G=(0,a.g2)("q-popup-proxy"),H=(0,a.g2)("q-input"),J=(0,a.g2)("q-checkbox"),Z=(0,a.g2)("q-tooltip"),ee=(0,a.g2)("q-btn"),te=(0,a.g2)("q-th"),se=(0,a.g2)("q-tr"),ae=(0,a.g2)("q-td"),ie=(0,a.g2)("q-table"),oe=(0,a.g2)("q-card-section"),le=(0,a.g2)("q-card"),ne=(0,a.g2)("q-form"),re=(0,a.g2)("webViewer"),de=(0,a.g2)("q-dialog"),ce=(0,a.g2)("methods"),_e=(0,a.g2)("rules-vue"),ue=(0,a.g2)("q-page"),ge=(0,a.gN)("money");return(0,a.uX)(),(0,a.Wv)(ue,{class:"pagina q-pa-md"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",l,[(0,a.Lk)("div",n,[r,(0,a.Lk)("div",d,[(0,a.bF)(N,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:Y.agenciasSelected,onFilter:t[0]||(t[0]=(e,t)=>W.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","fill-input":"",multiple:"","use-chips":"","emit-value":"","map-options":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:Y.selectedAgenciaDestino,"onUpdate:modelValue":[t[1]||(t[1]=e=>Y.selectedAgenciaDestino=e),t[2]||(t[2]=e=>{this.selectedAgente=[],this.agenteLoading=!0,this.$refs.methods.getData("/agentes","setData","agentes",{headers:{agencia:this.selectedAgenciaDestino.id?this.selectedAgenciaDestino.id:this.selectedAgenciaDestino?this.selectedAgenciaDestino:"",activo:"S",order_by:"persona_responsable",order_direction:"ASC"}}),this.getDataTable()})],outlined:"",standout:"",loading:B.loading,disable:B.loading,label:"Agencia Destino"},{"no-option":(0,a.k6)((()=>[(0,a.bF)(z,null,{default:(0,a.k6)((()=>[(0,a.bF)(K,{class:"text-grey"},{default:(0,a.k6)((()=>[(0,a.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,a.k6)((()=>[(0,a.bF)($,{name:"search"})])),_:1},8,["options","modelValue","loading","disable"])]),(0,a.Lk)("div",c,[(0,a.bF)(N,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:Y.agentesSelected,loading:Y.agentesLoading,disable:Y.agentesLoading,ref:"agentes",onFilter:t[3]||(t[3]=(e,t)=>W.filterArray(e,t,"agentesSelected","agentes","persona_responsable")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"persona_responsable","option-value":"id",modelValue:Y.selectedAgente,"onUpdate:modelValue":[t[4]||(t[4]=e=>Y.selectedAgente=e),t[5]||(t[5]=e=>W.getDataTable())],outlined:"",standout:"",label:"Agente"},{"no-option":(0,a.k6)((()=>[(0,a.bF)(z,null,{default:(0,a.k6)((()=>[(0,a.bF)(K,{class:"text-grey"},{default:(0,a.k6)((()=>[(0,a.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,a.k6)((()=>[(0,a.bF)($,{name:"search"})])),agentesLoading:(0,a.k6)((()=>[(0,a.bF)(Q,{showing:"",color:"primary",class:"loading"})])),_:1},8,["options","loading","disable","modelValue"])])]),(0,a.Lk)("div",_,[(0,a.Lk)("div",u,[(0,a.bF)(N,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:Y.opciones,"use-input":"","hide-selected":"","fill-input":"","option-label":"label","option-value":"value","input-debounce":"0",modelValue:Y.selectedOpcion,"onUpdate:modelValue":[t[6]||(t[6]=e=>Y.selectedOpcion=e),t[7]||(t[7]=e=>W.getDataTable())],outlined:"",standout:"",label:"Opciones"},null,8,["options","modelValue"])]),(0,a.Lk)("div",g,[(0,a.bF)(H,{outlined:"",label:"Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:Y.fecha_desde,"onUpdate:modelValue":t[10]||(t[10]=e=>Y.fecha_desde=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)],onKeyup:t[11]||(t[11]=(0,i.jR)((e=>W.getDataTable()),["enter"]))},{append:(0,a.k6)((()=>[(0,a.bF)($,{name:"event",class:"cursor-pointer"},{default:(0,a.k6)((()=>[(0,a.bF)(G,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.k6)((()=>[(0,a.bF)(X,{modelValue:Y.fecha_desde,"onUpdate:modelValue":[t[8]||(t[8]=e=>Y.fecha_desde=e),t[9]||(t[9]=e=>{this.$refs.qDateProxy.hide(),W.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",m,[(0,a.bF)(H,{outlined:"",label:"Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:Y.fecha_hasta,"onUpdate:modelValue":t[14]||(t[14]=e=>Y.fecha_hasta=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)],onKeyup:t[15]||(t[15]=(0,i.jR)((e=>W.getDataTable()),["enter"]))},{append:(0,a.k6)((()=>[(0,a.bF)($,{name:"event",class:"cursor-pointer"},{default:(0,a.k6)((()=>[(0,a.bF)(G,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.k6)((()=>[(0,a.bF)(X,{modelValue:Y.fecha_hasta,"onUpdate:modelValue":[t[12]||(t[12]=e=>Y.fecha_hasta=e),t[13]||(t[13]=e=>{this.$refs.qDateProxy.hide(),W.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",h,[(0,a.bF)(J,{modelValue:Y.selectedSerie,"onUpdate:modelValue":[t[16]||(t[16]=e=>Y.selectedSerie=e),t[17]||(t[17]=e=>W.getDataTable())],color:"primary","left-label":"",val:"44",label:"Serie 44",disable:!(this.selectedSerie.length>1)&&"55"!=this.selectedSerie[0],readonly:!(this.selectedSerie.length>1)&&"55"!=this.selectedSerie[0]},null,8,["modelValue","disable","readonly"]),(0,a.bF)(J,{modelValue:Y.selectedSerie,"onUpdate:modelValue":[t[18]||(t[18]=e=>Y.selectedSerie=e),t[19]||(t[19]=e=>W.getDataTable())],color:"primary","left-label":"",val:"55",label:"Serie 55",disable:!(this.selectedSerie.length>1)&&"44"!=this.selectedSerie[0],readonly:!(this.selectedSerie.length>1)&&"44"!=this.selectedSerie[0]},null,8,["modelValue","disable","readonly"])]),(0,a.Lk)("div",p,[(0,a.bF)(J,{modelValue:Y.selectedAgrup,"onUpdate:modelValue":t[20]||(t[20]=e=>Y.selectedAgrup=e),color:"primary","left-label":"",label:"Agrupado"},null,8,["modelValue"])]),(0,a.Lk)("div",f,[(0,a.bF)(J,{modelValue:Y.selectedDolar,"onUpdate:modelValue":t[21]||(t[21]=e=>Y.selectedDolar=e),color:"primary","left-label":"",label:"$"},null,8,["modelValue"])]),(0,a.Lk)("div",b,[(0,a.bF)(ee,{dense:"",color:"primary",round:"",padding:"sm",onClick:t[22]||(t[22]=e=>this.resetFilters()),style:{"margin-right":"15px"}},{default:(0,a.k6)((()=>[(0,a.bF)($,{size:"25px",name:"filter_alt_off",color:"white"}),(0,a.bF)(Z,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)("Eliminar Filtros")])),_:1})])),_:1}),(0,a.bF)(ee,{dense:"",color:"primary",round:"",padding:"sm",onClick:t[23]||(t[23]=e=>this.sendData()),style:{"margin-right":"15px"},disabled:""},{default:(0,a.k6)((()=>[(0,a.bF)($,{size:"25px",name:"save",color:"white"}),(0,a.bF)(Z,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)("Guardar Selección")])),_:1})])),_:1}),(0,a.bF)(ee,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-right":"5px"},disabled:!(this.selected.length>0),onClickCapture:t[24]||(t[24]=e=>this.pdfView=!0)},{default:(0,a.k6)((()=>[(0,a.bF)($,{size:"25px",name:"print",color:"white"}),(0,a.bF)(Z,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)("Imprimir Reporte")])),_:1})])),_:1},8,["disabled"])])])]),(0,a.bF)(ne,{ref:"formData"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",D,[(0,a.bF)(ie,{rows:Y.guias,columns:Y.columns,"binary-state-sort":"",separator:B.separator,selection:"multiple","row-key":"id",loading:B.loading,"rows-per-page-options":[0],onRequest:W.getDataTable,style:{width:"100%",height:"500px","margin-bottom":"30px"},grid:e.$q.screen.xs,selected:Y.selected,"onUpdate:selected":t[25]||(t[25]=e=>Y.selected=e),pagination:Y.pagination,"onUpdate:pagination":t[26]||(t[26]=e=>Y.pagination=e),"hide-bottom":""},{loading:(0,a.k6)((()=>[(0,a.bF)(Q,{showing:"",color:"primary",class:"loading"})])),header:(0,a.k6)((e=>[(0,a.bF)(se,{props:e},{default:(0,a.k6)((()=>[(0,a.bF)(te,{"auto-width":""},{default:(0,a.k6)((()=>[(0,a.bF)(J,{modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.cols,(t=>((0,a.uX)(),(0,a.Wv)(te,{key:t.name,props:e},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(t.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,a.k6)((e=>[-1*e.rowIndex==0?((0,a.uX)(),(0,a.Wv)(se,{key:0,props:e},{default:(0,a.k6)((()=>[(0,a.bF)(ae,{colspan:"100%",style:{"font-size":"20px",color:"#283593"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",E,[(0,a.Lk)("strong",null,(0,o.v_)(W.findIndex("agencias",this.guias[e.rowIndex].cod_agencia_dest,"nb_agencia")),1)])])),_:2},1024)])),_:2},1032,["props"])):this.guias[e.rowIndex].cod_agencia_dest!=this.guias[e.rowIndex-1].cod_agencia_dest?((0,a.uX)(),(0,a.Wv)(se,{key:1,props:e},{default:(0,a.k6)((()=>[(0,a.bF)(ae,{colspan:"100%",style:{"font-size":"20px",color:"#283593"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",x,[(0,a.Lk)("strong",null,(0,o.v_)(W.findIndex("agencias",this.guias[e.rowIndex].cod_agencia_dest,"nb_agencia")),1)])])),_:2},1024)])),_:2},1032,["props"])):(0,a.Q3)("",!0),-1*e.rowIndex==0?((0,a.uX)(),(0,a.Wv)(se,{key:2,props:e},{default:(0,a.k6)((()=>[(0,a.bF)(ae,{colspan:"4",style:{"font-size":"16px"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",k,[(0,a.Lk)("strong",null,(0,o.v_)("Agente de Entrega: "+W.findIndex("agentesAll",this.guias[e.rowIndex].cod_agente_entrega,"persona_responsable")),1)])])),_:2},1024),(0,a.bF)(ae,{colspan:"2",style:{"font-size":"16px"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",y,[(0,a.Lk)("strong",null,(0,o.v_)("% Com. Entrega: "+W.findIndex("agentesAll",this.guias[e.rowIndex].cod_agente_entrega,"porc_comision_entrega").replace(".",",")),1)])])),_:2},1024),(0,a.bF)(ae,{colspan:"7",style:{"font-size":"16px"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",v,[(0,a.Lk)("strong",null,(0,o.v_)("% Com. Seguro: "+W.findIndex("agentesAll",this.guias[e.rowIndex].cod_agente_entrega,"porc_comision_seguro").replace(".",",")),1)])])),_:2},1024)])),_:2},1032,["props"])):this.guias[e.rowIndex].cod_agencia_dest+"-"+this.guias[e.rowIndex].cod_agente_entrega!=this.guias[e.rowIndex-1].cod_agencia_dest+"-"+this.guias[e.rowIndex-1].cod_agente_entrega?((0,a.uX)(),(0,a.Wv)(se,{key:3,props:e},{default:(0,a.k6)((()=>[(0,a.bF)(ae,{colspan:"4",style:{"font-size":"16px"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",A,[(0,a.Lk)("strong",null,(0,o.v_)("Agente de Entrega: "+W.findIndex("agentesAll",this.guias[e.rowIndex].cod_agente_entrega,"persona_responsable")),1)])])),_:2},1024),(0,a.bF)(ae,{colspan:"2",style:{"font-size":"16px"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",j,[(0,a.Lk)("strong",null,(0,o.v_)("% Com. Entrega: "+W.findIndex("agentesAll",this.guias[e.rowIndex].cod_agente_entrega,"porc_comision_entrega").replace(".",",")),1)])])),_:2},1024),(0,a.bF)(ae,{colspan:"7",style:{"font-size":"16px"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",M,[(0,a.Lk)("strong",null,(0,o.v_)("% Com. Seguro: "+W.findIndex("agentesAll",this.guias[e.rowIndex].cod_agente_entrega,"porc_comision_seguro").replace(".",",")),1)])])),_:2},1024)])),_:2},1032,["props"])):(0,a.Q3)("",!0),(0,a.bF)(se,{props:e},{default:(0,a.k6)((()=>[(0,a.bF)(ae,null,{default:(0,a.k6)((()=>[(0,a.bF)(J,{modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.cols,(t=>((0,a.uX)(),(0,a.Wv)(ae,{key:t.name,props:e},{default:(0,a.k6)((()=>["fecha_envio"==t.name?((0,a.uX)(),(0,a.CE)("div",w,(0,o.v_)(W.buildData("fecha_envio",e.row)),1)):"dias_entrega"==t.name?((0,a.uX)(),(0,a.CE)("div",I,(0,o.v_)(W.buildData("dias_entrega",e.row)),1)):"cod_cliente_org"==t.name?((0,a.uX)(),(0,a.CE)("div",P,(0,o.v_)(W.buildData("cod_cliente_org",e.row)),1)):"estatus_operativo"==t.name?((0,a.uX)(),(0,a.CE)("div",O,(0,o.v_)(W.filterDesc("estatusOperativo",e.row.estatus_operativo)),1)):"estatus_administra"==t.name?((0,a.uX)(),(0,a.CE)("div",C,(0,o.v_)(W.filterDesc("estatusAdministrativo",e.row.estatus_administra)),1)):((0,a.uX)(),(0,a.CE)("div",L,(0,o.v_)(t.value),1))])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows","columns","separator","loading","onRequest","grid","selected","pagination"]),(0,a.Lk)("div",F,[(0,a.bF)(le,{class:"q-pa-md col-md-12 col-xs-12",bordered:"",style:{padding:"3px","margin-top":"-20px"}},{default:(0,a.k6)((()=>[(0,a.bF)(oe,{style:{padding:"3px","margin-bottom":"-22px"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",T,[(0,a.Lk)("div",U,[(0,a.bo)((0,a.bF)(H,{outlined:"",modelValue:Y.cantidad,"onUpdate:modelValue":t[27]||(t[27]=e=>Y.cantidad=e),label:"Cantidad",hint:"",dense:"",disable:!0,"input-class":"text-right",class:"pcform"},null,8,["modelValue"]),[[ge,Y.moneyNotDecimal]])]),V,(0,a.Lk)("div",R,[(0,a.bo)((0,a.bF)(H,{outlined:"",modelValue:Y.monto_total,"onUpdate:modelValue":t[28]||(t[28]=e=>Y.monto_total=e),label:"Monto Total",class:"pcform",dense:"",disable:!0,"input-class":"text-right"},null,8,["modelValue"]),[[ge,Y.money]])]),(0,a.Lk)("div",S,[(0,a.bo)((0,a.bF)(H,{outlined:"",modelValue:Y.comision_entrega,"onUpdate:modelValue":t[29]||(t[29]=e=>Y.comision_entrega=e),label:"Comisión Entrega",class:"pcform",dense:"",disable:!0,"input-class":"text-right"},null,8,["modelValue"]),[[ge,Y.money]])]),(0,a.Lk)("div",q,[(0,a.bo)((0,a.bF)(H,{outlined:"",modelValue:Y.comision_seguro,"onUpdate:modelValue":t[30]||(t[30]=e=>Y.comision_seguro=e),label:"Comisión Seguro",class:"pcform",dense:"",disable:!0,"input-class":"text-right"},null,8,["modelValue"]),[[ge,Y.money]])])])])),_:1})])),_:1})])])])),_:1},512),(0,a.bF)(de,{modelValue:B.pdfView,"onUpdate:modelValue":t[32]||(t[32]=e=>B.pdfView=e),onShow:t[33]||(t[33]=e=>this.print())},{default:(0,a.k6)((()=>[(0,a.bF)(re,{ref:"webViewer",onExportExcel:W.exportExcel,onClosePdf:t[31]||(t[31]=e=>this.pdfView=!1),style:{width:"1200px",height:"750px","max-width":"1200px"}},null,8,["onExportExcel"])])),_:1},8,["modelValue"]),(0,a.bF)(ce,{ref:"methods",onSetData:W.setData,onSetDataInit:W.setDataInit,onGetDataTable:W.getDataTable,onSetDataTable:W.setDataTable,onSetDataPermisos:W.setDataPermisos},null,8,["onSetData","onSetDataInit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,a.bF)(_e,{ref:"rulesVue"},null,512)])),_:1})}var Y=s(59950),W=s(12807),K=s(77716),z=s(94940),$=s(90124),N=s(25173),Q=s(50492),X=s(39035),G=s(67837),H=s(48975),J=s(93692),Z=s(80460),ee=s(56384),te=s(97410),se=s(49200),ae=s(84191),ie=s(44488),oe=s(57722),le=s(45262),ne=s(23316),re=s(44189),de=s(82156),ce=s(98582),_e=s.n(ce);const ue=(0,W.A)(Y.A,[["render",B]]),ge=ue;_e()(Y.A,"components",{QPage:K.A,QSelect:z.A,QItem:$.A,QItemSection:N.A,QIcon:Q.A,QInnerLoading:X.A,QInput:G.A,QPopupProxy:H.A,QDate:J.A,QCheckbox:Z.A,QBtn:ee.A,QTooltip:te.A,QForm:se.A,QTable:ae.A,QTr:ie.A,QTh:oe.A,QTd:le.A,QCard:ne.A,QCardSection:re.A,QDialog:de.A})},35358:(e,t,s)=>{var a={"./af":78188,"./af.js":78188,"./ar":50096,"./ar-dz":28495,"./ar-dz.js":28495,"./ar-kw":85891,"./ar-kw.js":85891,"./ar-ly":13194,"./ar-ly.js":13194,"./ar-ma":42195,"./ar-ma.js":42195,"./ar-ps":17084,"./ar-ps.js":17084,"./ar-sa":29393,"./ar-sa.js":29393,"./ar-tn":21867,"./ar-tn.js":21867,"./ar.js":50096,"./az":43224,"./az.js":43224,"./be":61330,"./be.js":61330,"./bg":85096,"./bg.js":85096,"./bm":28746,"./bm.js":28746,"./bn":29303,"./bn-bd":56554,"./bn-bd.js":56554,"./bn.js":29303,"./bo":30528,"./bo.js":30528,"./br":35499,"./br.js":35499,"./bs":29828,"./bs.js":29828,"./ca":35855,"./ca.js":35855,"./cs":68481,"./cs.js":68481,"./cv":1694,"./cv.js":1694,"./cy":98903,"./cy.js":98903,"./da":95908,"./da.js":95908,"./de":85528,"./de-at":21732,"./de-at.js":21732,"./de-ch":54146,"./de-ch.js":54146,"./de.js":85528,"./dv":81313,"./dv.js":81313,"./el":20138,"./el.js":20138,"./en-au":78067,"./en-au.js":78067,"./en-ca":82545,"./en-ca.js":82545,"./en-gb":50124,"./en-gb.js":50124,"./en-ie":6107,"./en-ie.js":6107,"./en-il":13196,"./en-il.js":13196,"./en-in":1654,"./en-in.js":1654,"./en-nz":79557,"./en-nz.js":79557,"./en-sg":35451,"./en-sg.js":35451,"./eo":21591,"./eo.js":21591,"./es":36843,"./es-do":61009,"./es-do.js":61009,"./es-mx":75169,"./es-mx.js":75169,"./es-us":37224,"./es-us.js":37224,"./es.js":36843,"./et":77058,"./et.js":77058,"./eu":61297,"./eu.js":61297,"./fa":46658,"./fa.js":46658,"./fi":75674,"./fi.js":75674,"./fil":45204,"./fil.js":45204,"./fo":74428,"./fo.js":74428,"./fr":80703,"./fr-ca":27812,"./fr-ca.js":27812,"./fr-ch":9411,"./fr-ch.js":9411,"./fr.js":80703,"./fy":89738,"./fy.js":89738,"./ga":21235,"./ga.js":21235,"./gd":96032,"./gd.js":96032,"./gl":16424,"./gl.js":16424,"./gom-deva":53793,"./gom-deva.js":53793,"./gom-latn":14714,"./gom-latn.js":14714,"./gu":33383,"./gu.js":33383,"./he":46660,"./he.js":46660,"./hi":37264,"./hi.js":37264,"./hr":63201,"./hr.js":63201,"./hu":35604,"./hu.js":35604,"./hy-am":61067,"./hy-am.js":61067,"./id":19262,"./id.js":19262,"./is":53423,"./is.js":53423,"./it":73038,"./it-ch":23512,"./it-ch.js":23512,"./it.js":73038,"./ja":87558,"./ja.js":87558,"./jv":86071,"./jv.js":86071,"./ka":95927,"./ka.js":95927,"./kk":62625,"./kk.js":62625,"./km":25499,"./km.js":25499,"./kn":79486,"./kn.js":79486,"./ko":89405,"./ko.js":89405,"./ku":77155,"./ku-kmr":92516,"./ku-kmr.js":92516,"./ku.js":77155,"./ky":13647,"./ky.js":13647,"./lb":42837,"./lb.js":42837,"./lo":91474,"./lo.js":91474,"./lt":96967,"./lt.js":96967,"./lv":48297,"./lv.js":48297,"./me":1545,"./me.js":1545,"./mi":2573,"./mi.js":2573,"./mk":77259,"./mk.js":77259,"./ml":33826,"./ml.js":33826,"./mn":45368,"./mn.js":45368,"./mr":30860,"./mr.js":30860,"./ms":96947,"./ms-my":99418,"./ms-my.js":99418,"./ms.js":96947,"./mt":76906,"./mt.js":76906,"./my":71837,"./my.js":71837,"./nb":24503,"./nb.js":24503,"./ne":31286,"./ne.js":31286,"./nl":17981,"./nl-be":58103,"./nl-be.js":58103,"./nl.js":17981,"./nn":19387,"./nn.js":19387,"./oc-lnc":30803,"./oc-lnc.js":30803,"./pa-in":66742,"./pa-in.js":66742,"./pl":30075,"./pl.js":30075,"./pt":81731,"./pt-br":23352,"./pt-br.js":23352,"./pt.js":81731,"./ro":21776,"./ro.js":21776,"./ru":5746,"./ru.js":5746,"./sd":74100,"./sd.js":74100,"./se":38395,"./se.js":38395,"./si":8823,"./si.js":8823,"./sk":39385,"./sk.js":39385,"./sl":3852,"./sl.js":3852,"./sq":3247,"./sq.js":3247,"./sr":64290,"./sr-cyrl":26189,"./sr-cyrl.js":26189,"./sr.js":64290,"./ss":32177,"./ss.js":32177,"./sv":49038,"./sv.js":49038,"./sw":9741,"./sw.js":9741,"./ta":86932,"./ta.js":86932,"./te":95784,"./te.js":95784,"./tet":13334,"./tet.js":13334,"./tg":23602,"./tg.js":23602,"./th":16947,"./th.js":16947,"./tk":46774,"./tk.js":46774,"./tl-ph":5868,"./tl-ph.js":5868,"./tlh":16695,"./tlh.js":16695,"./tr":22573,"./tr.js":22573,"./tzl":84509,"./tzl.js":84509,"./tzm":17118,"./tzm-latn":87078,"./tzm-latn.js":87078,"./tzm.js":17118,"./ug-cn":82617,"./ug-cn.js":82617,"./uk":56131,"./uk.js":56131,"./ur":56532,"./ur.js":56532,"./uz":69932,"./uz-latn":27220,"./uz-latn.js":27220,"./uz.js":69932,"./vi":20490,"./vi.js":20490,"./x-pseudo":32154,"./x-pseudo.js":32154,"./yo":49955,"./yo.js":49955,"./zh-cn":68355,"./zh-cn.js":68355,"./zh-hk":89547,"./zh-hk.js":89547,"./zh-mo":70374,"./zh-mo.js":70374,"./zh-tw":979,"./zh-tw.js":979};function i(e){var t=o(e);return s(t)}function o(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=35358}}]);