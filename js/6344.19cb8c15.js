(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[6344],{46584:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10239),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__),vue__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(38734),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85038),moment__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__),boot_axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80660),v_money__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(32939),v_money__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(v_money__WEBPACK_IMPORTED_MODULE_3__),src_components_rules_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23828),quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(14907),quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(45022),src_components_methods_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(93899),src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(21643);const __WEBPACK_DEFAULT_EXPORT__={directives:{money:v_money__WEBPACK_IMPORTED_MODULE_3__.VMoney},components:{methods:src_components_methods_vue__WEBPACK_IMPORTED_MODULE_6__.A,webViewer:src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_7__.A,rulesVue:src_components_rules_vue__WEBPACK_IMPORTED_MODULE_4__.A},data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!1},agencias:[],clientes:[],facturas:[],selectedFacturas:[],agenciasSelected:[],selectedAgencia:[],selectedCliente:[],clientesSelected:[],clientesLoading:!1,monto_subtotal:0,fecha_igtf:null,periodo_igtf:"",nro_comp_igtf:"",monto_divisas_igtf:0,tasa_bcv:0,monto_bs:0,porc_igtf:"3%",divisas_igtf:0,bs_igtf:0,columnsFacturas:[{name:"t_de_documento",label:"Tipo",field:"t_de_documento",align:"center"},{name:"nro_control",label:"Nº Ctrl.",field:"nro_control",align:"center"},{name:"nro_documento",label:"Nº Doc.",field:"nro_documento",align:"center"},{name:"nro_ref",label:"Ref.",field:"nro_ref",align:"center"},{name:"fecha_emision",label:"Emisión",field:"fecha_emision",align:"center"},{name:"monto_total",label:"Total",field:"monto_total",align:"right",format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"monto_impuesto",label:"IVA",field:"monto_impuesto",align:"right",format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()}]}},setup(){(0,quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_8__.A)();return{loading:(0,vue__WEBPACK_IMPORTED_MODULE_9__.KR)(!1),separator:(0,vue__WEBPACK_IMPORTED_MODULE_9__.KR)("vertical"),pdfView:(0,vue__WEBPACK_IMPORTED_MODULE_9__.KR)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Administración - Comprobantes IGTF",""),this.$refs.methods.getData("/agencias","setData","agencias"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__.A.getItem("tokenTraducido").usuario.roles.id,menu:"comprobantesigtf"}})},methods:{filterArray(e,t,s,a,o){t(""!==e?()=>{const t=e.toUpperCase();for(var i=[],r=0;r<=this[a].length-1;r++)if(this[a][r][o].indexOf(t)>-1&&i.push(this[a][r]),r==this[a].length-1){this[s]=i;break}}:()=>{this[s]=this[a]})},findIndex(e,t,s){var a=this[e].findIndex((e=>e.id==t));return a>=0?this[e][a][s]:null},filterDesc(e,t){var s=this[e].findIndex((e=>e.value==t));return s>=0?this[e][s].label:null},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setData(res,dataRes){eval("this."+dataRes+"Loading = false"),this[dataRes]=res.data?res.data:res},async setFacturas(){this.facturas=[],this.selectedFacturas=[],this.loading=!0,await boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/mmovimientos",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__.A.getItem("token")}`,filters:JSON.stringify({agencia:this.selectedAgencia.id,cliente_orig:this.selectedCliente.id,tipo_in:"FA,NC,ND",estatus_admin_ex:"A"}),order:JSON.stringify([["t_de_documento","ASC"],["nro_documento","DESC"]]),direction:"DESC"}}).then((e=>{this.facturas=e.data.data,this.loading=!1}))},async onSelection({rows:e,added:t}){this.fecha_igtf=null,this.periodo_igtf="",this.nro_comp_igtf="",this.monto_divisas_igtf=0,this.tasa_bcv=0,this.monto_bs=0,this.divisas_igtf=0,this.bs_igtf=0,t&&(this.fecha_igtf=null!=e[0].fecha_comp_igtf?e[0].fecha_comp_igtf:moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY"),this.periodo_igtf=e[0].periodo_igtf,this.nro_comp_igtf=e[0].nro_comp_igtf,this.monto_divisas_igtf=e[0].monto_divisas_igtf,await boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/hdolar/",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__.A.getItem("token")}`,fecha:moment__WEBPACK_IMPORTED_MODULE_1___default()(e[0].fecha_emision,"DD/MM/YYYY").format("YYYY-MM-DD")}}).then((e=>{e.data.data[0]&&(this.tasa_bcv=e.data.data[0].valor)})),this.calculaTotales())},buildNroDoc(e,t){var s="";switch(e){case"nro_control":"FA"==t.t_de_documento?t.nro_control?t.nro_control_new?t.serie_documento?s+=t.serie_documento+" - "+t.nro_control_new.padStart(9,"00-000000"):s+=t.nro_control_new.padStart(9,"00-000000"):s+=t.nro_control.padStart(4,"0000"):s+=t.serie_documento+" - "+t.nro_documento:s+=t.nro_documento;break;case"nro_documento":"FA"==t.t_de_documento&&(s=t.nro_control?t.nro_control.padStart(4,"0000"):t.serie_documento+" - "+t.nro_documento);break;case"nro_ref":"FA"==t.t_de_documento&&t.nro_control&&(s=t.cod_agencia+"-"+t.nro_documento);break;default:break}return s},async sendData(){if(""==this.nro_comp_igtf||null==this.nro_comp_igtf||""==this.periodo_igtf||null==this.monto_divisas_igtf||parseFloat(this.monto_divisas_igtf)<=0)return void this.$q.notify({message:"Recuerde que dede ingresar el número de comprobante, la fecha de recepción, el periodo fiscal del mismo y el monto cobrado en $ antes de guardar...",color:"red"});var e=this.facturas.findIndex((e=>e.id==this.selectedFacturas[0].id));this.facturas[e].fecha_comp_igtf=this.fecha_igtf,this.facturas[e].nro_comp_igtf=this.nro_comp_igtf,this.facturas[e].periodo_igtf=this.periodo_igtf,this.facturas[e].monto_divisas_igtf=this.monto_divisas_igtf;let t={};t.fecha_comp_igtf=moment__WEBPACK_IMPORTED_MODULE_1___default()(this.fecha_igtf,"DD/MM/YYYY").format("YYYY-MM-DD"),t.nro_comp_igtf=this.nro_comp_igtf,t.periodo_igtf=this.periodo_igtf,t.monto_divisas_igtf=parseFloat(this.curReplace(this.monto_divisas_igtf)),await boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.put(`/mmovimientos/${this.selectedFacturas[0].id}`,t,{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__.A.getItem("token")}`}}).catch((()=>{this.$q.notify({message:"Error del Sistema. Problemas al actualizar datos del Movimiento. Comuníquese con el proveedor del Sistemas...",color:"red"})})),this.$q.notify({message:"IGTF guardado exitosamente",color:"green"})},async printData(){if(""==this.nro_comp_igtf||null==this.nro_comp_igtf||""==this.periodo_igtf||null==this.monto_divisas_igtf||parseFloat(this.monto_divisas_igtf)<=0)return this.$q.notify({message:"Recuerde que dede ingresar el número de comprobante, la fecha de recepción, el periodo fiscal del mismo y el monto cobrado en $ antes de guardar...",color:"red"}),void(this.pdfView=!1);await this.sendData(),this.pdfView=!0},pdfPrint(){boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/pdfreports/comprobanteIgtf",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_5__.A.getItem("token")}`,id:this.selectedFacturas[0].id}}).then((e=>{this.$refs.webViewer.showpdf(e.data.pdfPath,1),this.idCobranza=""}))},calculaTotales(){this.monto_bs=(parseFloat(this.curReplace(this.tasa_bcv))*parseFloat(this.curReplace(this.monto_divisas_igtf))).toFixed(2),this.divisas_igtf=(.03*parseFloat(this.curReplace(this.monto_divisas_igtf))).toFixed(2),this.bs_igtf=(parseFloat(this.curReplace(this.tasa_bcv))*parseFloat(this.curReplace(this.divisas_igtf))).toFixed(2)},curReplace(e){return e.indexOf(",")<0?e:e.replaceAll(".","").replaceAll(",",".")},resetFilters(){this.selectedAgencia=[],this.selectedCliente=[],this.facturas=[],this.clientes=[],this.selectedFacturas=[],this.fecha_igtf=null,this.periodo_igtf="",this.nro_comp_igtf="",this.monto_divisas_igtf=0,this.tasa_bcv=0,this.monto_bs=0,this.divisas_igtf=0,this.bs_igtf=0}}}},93899:(e,t,s)=>{"use strict";function a(e,t,s,a,o,i){return null}s.d(t,{A:()=>d});var o=s(45022),i=s(80660),r=s(14907);const n={setup(){const e=(0,r.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,i.api.get(e,a).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,i.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,i.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${o.A.getItem("token")}`,i.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,i.api.post(e,t,a).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var l=s(12807);const _=(0,l.A)(n,[["render",a]]),d=_},23828:(e,t,s)=>{"use strict";function a(e,t,s,a,o,i){return null}s.d(t,{A:()=>d});var o=s(14907),i=s(85038),r=s.n(i);const n={name:"rules",setup(){(0,o.A)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==r()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==r()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var l=s(12807);const _=(0,l.A)(n,[["render",a]]),d=_},21643:(e,t,s)=>{"use strict";s.d(t,{A:()=>u});var a=s(61758);const o={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function i(e,t,s,i,r,n){return(0,a.uX)(),(0,a.CE)("div",o,null,512)}s(10239),s(33186),s(45531),s(15683),s(9048),s(64702);var r=s(38734),n=s(82429),l=s.n(n);const _={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,r.KR)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),s=t.length,a=new Uint8Array(s);for(let o=0;o<s;++o)a[o]=t.charCodeAt(o);return new Blob([a],{type:"application/pdf"})},async until(e){const t=s=>{e()?s():setTimeout((e=>t(s)),400)};return new Promise(t)},showpdf(e,t,s=!1,a=!0,o){const i="https://scen.rcsexpress.com/webViewer";l()({path:i,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((i=>{i.UI.disableElements(["panToolButton"]),i.UI.disableElements(["textSelectButton"]),i.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{i.UI.downloadPdf()}}),e.push({type:"actionButton",title:"Exportar Excel",img:"../../icons/icone-excel-grise.png",onClick:()=>{this.$emit("exportExcel")}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{s&&(this.$emit("printPdf"),await this.until((e=>1==this.confirmPrint)),!this.confirmPrint)||(i.UI.print(),this.confirmPrint=!1)}}),a&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),o?i.UI.loadDocument(this.base64ToBlob(o),{filename:"REPORTE SCEN.pdf"}):i.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/pdfreports/loadPDF/${e}`),i.UI.setLanguage("es"),i.UI.useEmbeddedPrint(!0),setTimeout((()=>{i.UI.setZoomLevel(t||.7)}),2e3)}))}}};var d=s(12807);const c=(0,d.A)(_,[["render",i]]),u=c},60347:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>$});var a=s(61758),o=s(58790);const i={class:"q-pa-sm justify-center"},r={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},n=(0,a.Lk)("div",{class:"col-md-3 col-xl-2 col-lg-2 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a.Lk)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a.Lk)("strong",null,"ADMINISTRACIÓN - COMPROBANTES IGTF")])],-1),l={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},_={class:"col-md-6 col-xl-6 col-lg-6 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},d={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},c={class:"row justify-center items-center content-center",style:{padding:"10px"}},u={class:"col-md-12 col-xs-12"},m={class:"row",style:{"margin-top":"10px"}},h={class:"col-md-3 col-xs-12"},p={class:"col-md-3 col-xs-12"},g={class:"col-md-3 col-xs-12"},f={class:"col-md-3 col-xs-12"},b={class:"col-md-2 col-xs-12"},j={class:"col-md-3 col-xs-12"},y={class:"col-md-2 col-xs-12"},E={class:"col-md-2 col-xs-12"},D={class:"col-md-3 col-xs-12"};function k(e,t,s,k,v,A){const x=(0,a.g2)("q-item-section"),w=(0,a.g2)("q-item"),P=(0,a.g2)("q-icon"),F=(0,a.g2)("q-select"),M=(0,a.g2)("q-inner-loading"),I=(0,a.g2)("q-tooltip"),O=(0,a.g2)("q-btn"),C=(0,a.g2)("q-td"),L=(0,a.g2)("q-table"),T=(0,a.g2)("q-date"),U=(0,a.g2)("q-popup-proxy"),R=(0,a.g2)("q-input"),V=(0,a.g2)("q-card-section"),q=(0,a.g2)("q-card"),B=(0,a.g2)("webViewer"),S=(0,a.g2)("q-dialog"),W=(0,a.g2)("methods"),z=(0,a.g2)("rules-vue"),K=(0,a.g2)("q-page"),$=(0,a.gN)("money");return(0,a.uX)(),(0,a.Wv)(K,{class:"pagina q-pa-md"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",i,[(0,a.Lk)("div",r,[n,(0,a.Lk)("div",l,[(0,a.bF)(F,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:v.agenciasSelected,onFilter:t[0]||(t[0]=(e,t)=>A.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:v.selectedAgencia,"onUpdate:modelValue":[t[1]||(t[1]=e=>v.selectedAgencia=e),t[2]||(t[2]=e=>{this.selectedCliente=[],this.facturas=[],this.selectedFacturas=[],this.clientesLoading=!0,this.$refs.methods.getData("/clientes","setData","clientes",{headers:{agencia:this.selectedAgencia.id}})})],outlined:"",standout:"",loading:k.loading,disable:k.loading,label:"Agencia"},{"no-option":(0,a.k6)((()=>[(0,a.bF)(w,null,{default:(0,a.k6)((()=>[(0,a.bF)(x,{class:"text-grey"},{default:(0,a.k6)((()=>[(0,a.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,a.k6)((()=>[(0,a.bF)(P,{name:"search"})])),_:1},8,["options","modelValue","loading","disable"])]),(0,a.Lk)("div",_,[(0,a.bF)(F,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:v.clientesSelected,loading:v.clientesLoading,disable:v.clientesLoading,ref:"clientes",onFilter:t[3]||(t[3]=(e,t)=>A.filterArray(e,t,"clientesSelected","clientes","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_cliente","option-value":"id",modelValue:v.selectedCliente,"onUpdate:modelValue":[t[4]||(t[4]=e=>v.selectedCliente=e),t[5]||(t[5]=e=>A.setFacturas())],outlined:"",standout:"",label:"Cliente"},{"no-option":(0,a.k6)((()=>[(0,a.bF)(w,null,{default:(0,a.k6)((()=>[(0,a.bF)(x,{class:"text-grey"},{default:(0,a.k6)((()=>[(0,a.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,a.k6)((()=>[(0,a.bF)(P,{name:"search"})])),clientesLoading:(0,a.k6)((()=>[(0,a.bF)(M,{showing:"",color:"primary",class:"loading"})])),_:1},8,["options","loading","disable","modelValue"])]),(0,a.Lk)("div",d,[(0,a.bF)(O,{dense:"",color:"primary",round:"",padding:"sm",onClick:t[6]||(t[6]=e=>this.resetFilters()),style:{"margin-right":"15px"}},{default:(0,a.k6)((()=>[(0,a.bF)(P,{size:"25px",name:"filter_alt_off",color:"white"}),(0,a.bF)(I,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)("Eliminar Filtros")])),_:1})])),_:1}),(0,a.bF)(O,{dense:"",color:"primary",round:"",padding:"sm",onClick:t[7]||(t[7]=e=>this.sendData()),style:{"margin-right":"15px"},disable:0==this.selectedFacturas.length},{default:(0,a.k6)((()=>[(0,a.bF)(P,{size:"25px",name:"save",color:"white"}),(0,a.bF)(I,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)("Guardar Selección")])),_:1})])),_:1},8,["disable"]),(0,a.bF)(O,{dense:"",color:"primary",round:"",padding:"sm",onClick:t[8]||(t[8]=e=>this.printData()),style:{"margin-right":"5px"},disable:0==this.selectedFacturas.length},{default:(0,a.k6)((()=>[(0,a.bF)(P,{size:"25px",name:"print",color:"white"}),(0,a.bF)(I,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.k6)((()=>[(0,a.eW)("Imprimir IGTF")])),_:1})])),_:1},8,["disable"])])])]),(0,a.Lk)("div",c,[(0,a.Lk)("div",u,[(0,a.bF)(q,null,{default:(0,a.k6)((()=>[(0,a.bF)(V,null,{default:(0,a.k6)((()=>[(0,a.bF)(L,{rows:v.facturas,dense:"",selection:"single",columns:v.columnsFacturas,"binary-state-sort":"",separator:k.separator,"rows-per-page-options":[0],selected:v.selectedFacturas,"onUpdate:selected":t[9]||(t[9]=e=>v.selectedFacturas=e),"row-key":"id",style:{width:"100%",height:"470px"},onSelection:A.onSelection,loading:k.loading,"hide-bottom":""},{loading:(0,a.k6)((()=>[(0,a.bF)(M,{showing:"",color:"primary",class:"loading"})])),"body-cell-nro_control":(0,a.k6)((e=>[(0,a.bF)(C,{props:e},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(A.buildNroDoc("nro_control",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_documento":(0,a.k6)((e=>[(0,a.bF)(C,{props:e},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(A.buildNroDoc("nro_documento",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_ref":(0,a.k6)((e=>[(0,a.bF)(C,{props:e},{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(A.buildNroDoc("nro_ref",e.row)),1)])),_:2},1032,["props"])])),_:1},8,["rows","columns","separator","selected","onSelection","loading"]),(0,a.Lk)("div",m,[(0,a.Lk)("div",h,[(0,a.bF)(R,{outlined:"",label:"Fecha IGTF",hint:"",dense:"",style:{"padding-bottom":"0px"},modelValue:v.fecha_igtf,"onUpdate:modelValue":t[12]||(t[12]=e=>v.fecha_igtf=e),class:"pcform","lazy-rules":"",mask:"##/##/####",disable:0==this.selectedFacturas.length,readonly:0==this.selectedFacturas.length,rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.k6)((()=>[(0,a.bF)(P,{name:"event",class:"cursor-pointer"},{default:(0,a.k6)((()=>[(0,a.bF)(U,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.k6)((()=>[(0,a.bF)(T,{modelValue:v.fecha_igtf,"onUpdate:modelValue":[t[10]||(t[10]=e=>v.fecha_igtf=e),t[11]||(t[11]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","disable","readonly","rules"])]),(0,a.Lk)("div",p,[(0,a.bF)(R,{outlined:"",modelValue:v.periodo_igtf,"onUpdate:modelValue":t[13]||(t[13]=e=>v.periodo_igtf=e),label:"Período Fiscal",hint:"",dense:"","input-class":"text-right",style:{"padding-bottom":"10px"},class:"pcform",disable:0==this.selectedFacturas.length,readonly:0==this.selectedFacturas.length,"lazy-rules":""},null,8,["modelValue","disable","readonly"])]),(0,a.Lk)("div",g,[(0,a.bF)(R,{outlined:"",modelValue:v.nro_comp_igtf,"onUpdate:modelValue":t[14]||(t[14]=e=>v.nro_comp_igtf=e),label:"Nº Comp. IGTF",hint:"",dense:"","input-class":"text-right",style:{"padding-bottom":"10px"},class:"pcform",disable:0==this.selectedFacturas.length,readonly:0==this.selectedFacturas.length,"lazy-rules":""},null,8,["modelValue","disable","readonly"])]),(0,a.Lk)("div",f,[(0,a.bo)((0,a.bF)(R,{outlined:"",modelValue:v.monto_divisas_igtf,"onUpdate:modelValue":t[15]||(t[15]=e=>v.monto_divisas_igtf=e),label:"Monto $",hint:"",dense:"","input-class":"text-right",style:{"padding-bottom":"10px"},disable:0==this.selectedFacturas.length,readonly:0==this.selectedFacturas.length,"lazy-rules":"",onKeyup:t[16]||(t[16]=e=>A.calculaTotales())},null,8,["modelValue","disable","readonly"]),[[$,v.money]])]),(0,a.Lk)("div",b,[(0,a.bo)((0,a.bF)(R,{outlined:"",modelValue:v.tasa_bcv,"onUpdate:modelValue":t[17]||(t[17]=e=>v.tasa_bcv=e),label:"Tasa BCV",hint:"",dense:"","input-class":"text-right",style:{"padding-bottom":"0px"},class:"pcform",disable:!0,readonly:!0,"lazy-rules":""},null,8,["modelValue"]),[[$,v.money]])]),(0,a.Lk)("div",j,[(0,a.bo)((0,a.bF)(R,{outlined:"",modelValue:v.monto_bs,"onUpdate:modelValue":t[18]||(t[18]=e=>v.monto_bs=e),label:"Monto Bs",hint:"",dense:"","input-class":"text-right",style:{"padding-bottom":"0px"},class:"pcform",disable:!0,readonly:!0,"lazy-rules":""},null,8,["modelValue"]),[[$,v.money]])]),(0,a.Lk)("div",y,[(0,a.bF)(R,{outlined:"",modelValue:v.porc_igtf,"onUpdate:modelValue":t[19]||(t[19]=e=>v.porc_igtf=e),label:"IGTF %",hint:"",dense:"","input-class":"text-right",style:{"padding-bottom":"0px"},class:"pcform",disable:!0,readonly:!0,"lazy-rules":""},null,8,["modelValue"])]),(0,a.Lk)("div",E,[(0,a.bo)((0,a.bF)(R,{outlined:"",modelValue:v.divisas_igtf,"onUpdate:modelValue":t[20]||(t[20]=e=>v.divisas_igtf=e),label:"IGTF $",hint:"",dense:"","input-class":"text-right",style:{"padding-bottom":"0px"},class:"pcform",disable:!0,readonly:!0,"lazy-rules":""},null,8,["modelValue"]),[[$,v.money]])]),(0,a.Lk)("div",D,[(0,a.bo)((0,a.bF)(R,{outlined:"",modelValue:v.bs_igtf,"onUpdate:modelValue":t[21]||(t[21]=e=>v.bs_igtf=e),label:"IGTF Bs",hint:"",dense:"","input-class":"text-right",style:{"padding-bottom":"0px"},disable:!0,readonly:!0,"lazy-rules":""},null,8,["modelValue"]),[[$,v.money]])])])])),_:1})])),_:1})])]),(0,a.bF)(S,{modelValue:k.pdfView,"onUpdate:modelValue":t[23]||(t[23]=e=>k.pdfView=e),onShow:t[24]||(t[24]=e=>this.pdfPrint())},{default:(0,a.k6)((()=>[(0,a.bF)(B,{ref:"webViewer",onClosePdf:t[22]||(t[22]=e=>this.pdfView=!1),style:{width:"1000px",height:"750px","max-width":"1000px"}},null,512)])),_:1},8,["modelValue"]),(0,a.bF)(W,{ref:"methods",onSetData:A.setData,onSetDataPermisos:A.setDataPermisos},null,8,["onSetData","onSetDataPermisos"]),(0,a.bF)(z,{ref:"rulesVue"},null,512)])),_:1})}var v=s(46584),A=s(12807),x=s(77716),w=s(94940),P=s(90124),F=s(25173),M=s(50492),I=s(39035),O=s(56384),C=s(97410),L=s(23316),T=s(44189),U=s(84191),R=s(45262),V=s(67837),q=s(48975),B=s(93692),S=s(82156),W=s(98582),z=s.n(W);const K=(0,A.A)(v.A,[["render",k]]),$=K;z()(v.A,"components",{QPage:x.A,QSelect:w.A,QItem:P.A,QItemSection:F.A,QIcon:M.A,QInnerLoading:I.A,QBtn:O.A,QTooltip:C.A,QCard:L.A,QCardSection:T.A,QTable:U.A,QTd:R.A,QInput:V.A,QPopupProxy:q.A,QDate:B.A,QDialog:S.A})},35358:(e,t,s)=>{var a={"./af":78188,"./af.js":78188,"./ar":50096,"./ar-dz":28495,"./ar-dz.js":28495,"./ar-kw":85891,"./ar-kw.js":85891,"./ar-ly":13194,"./ar-ly.js":13194,"./ar-ma":42195,"./ar-ma.js":42195,"./ar-ps":17084,"./ar-ps.js":17084,"./ar-sa":29393,"./ar-sa.js":29393,"./ar-tn":21867,"./ar-tn.js":21867,"./ar.js":50096,"./az":43224,"./az.js":43224,"./be":61330,"./be.js":61330,"./bg":85096,"./bg.js":85096,"./bm":28746,"./bm.js":28746,"./bn":29303,"./bn-bd":56554,"./bn-bd.js":56554,"./bn.js":29303,"./bo":30528,"./bo.js":30528,"./br":35499,"./br.js":35499,"./bs":29828,"./bs.js":29828,"./ca":35855,"./ca.js":35855,"./cs":68481,"./cs.js":68481,"./cv":1694,"./cv.js":1694,"./cy":98903,"./cy.js":98903,"./da":95908,"./da.js":95908,"./de":85528,"./de-at":21732,"./de-at.js":21732,"./de-ch":54146,"./de-ch.js":54146,"./de.js":85528,"./dv":81313,"./dv.js":81313,"./el":20138,"./el.js":20138,"./en-au":78067,"./en-au.js":78067,"./en-ca":82545,"./en-ca.js":82545,"./en-gb":50124,"./en-gb.js":50124,"./en-ie":6107,"./en-ie.js":6107,"./en-il":13196,"./en-il.js":13196,"./en-in":1654,"./en-in.js":1654,"./en-nz":79557,"./en-nz.js":79557,"./en-sg":35451,"./en-sg.js":35451,"./eo":21591,"./eo.js":21591,"./es":36843,"./es-do":61009,"./es-do.js":61009,"./es-mx":75169,"./es-mx.js":75169,"./es-us":37224,"./es-us.js":37224,"./es.js":36843,"./et":77058,"./et.js":77058,"./eu":61297,"./eu.js":61297,"./fa":46658,"./fa.js":46658,"./fi":75674,"./fi.js":75674,"./fil":45204,"./fil.js":45204,"./fo":74428,"./fo.js":74428,"./fr":80703,"./fr-ca":27812,"./fr-ca.js":27812,"./fr-ch":9411,"./fr-ch.js":9411,"./fr.js":80703,"./fy":89738,"./fy.js":89738,"./ga":21235,"./ga.js":21235,"./gd":96032,"./gd.js":96032,"./gl":16424,"./gl.js":16424,"./gom-deva":53793,"./gom-deva.js":53793,"./gom-latn":14714,"./gom-latn.js":14714,"./gu":33383,"./gu.js":33383,"./he":46660,"./he.js":46660,"./hi":37264,"./hi.js":37264,"./hr":63201,"./hr.js":63201,"./hu":35604,"./hu.js":35604,"./hy-am":61067,"./hy-am.js":61067,"./id":19262,"./id.js":19262,"./is":53423,"./is.js":53423,"./it":73038,"./it-ch":23512,"./it-ch.js":23512,"./it.js":73038,"./ja":87558,"./ja.js":87558,"./jv":86071,"./jv.js":86071,"./ka":95927,"./ka.js":95927,"./kk":62625,"./kk.js":62625,"./km":25499,"./km.js":25499,"./kn":79486,"./kn.js":79486,"./ko":89405,"./ko.js":89405,"./ku":77155,"./ku-kmr":92516,"./ku-kmr.js":92516,"./ku.js":77155,"./ky":13647,"./ky.js":13647,"./lb":42837,"./lb.js":42837,"./lo":91474,"./lo.js":91474,"./lt":96967,"./lt.js":96967,"./lv":48297,"./lv.js":48297,"./me":1545,"./me.js":1545,"./mi":2573,"./mi.js":2573,"./mk":77259,"./mk.js":77259,"./ml":33826,"./ml.js":33826,"./mn":45368,"./mn.js":45368,"./mr":30860,"./mr.js":30860,"./ms":96947,"./ms-my":99418,"./ms-my.js":99418,"./ms.js":96947,"./mt":76906,"./mt.js":76906,"./my":71837,"./my.js":71837,"./nb":24503,"./nb.js":24503,"./ne":31286,"./ne.js":31286,"./nl":17981,"./nl-be":58103,"./nl-be.js":58103,"./nl.js":17981,"./nn":19387,"./nn.js":19387,"./oc-lnc":30803,"./oc-lnc.js":30803,"./pa-in":66742,"./pa-in.js":66742,"./pl":30075,"./pl.js":30075,"./pt":81731,"./pt-br":23352,"./pt-br.js":23352,"./pt.js":81731,"./ro":21776,"./ro.js":21776,"./ru":5746,"./ru.js":5746,"./sd":74100,"./sd.js":74100,"./se":38395,"./se.js":38395,"./si":8823,"./si.js":8823,"./sk":39385,"./sk.js":39385,"./sl":3852,"./sl.js":3852,"./sq":3247,"./sq.js":3247,"./sr":64290,"./sr-cyrl":26189,"./sr-cyrl.js":26189,"./sr.js":64290,"./ss":32177,"./ss.js":32177,"./sv":49038,"./sv.js":49038,"./sw":9741,"./sw.js":9741,"./ta":86932,"./ta.js":86932,"./te":95784,"./te.js":95784,"./tet":13334,"./tet.js":13334,"./tg":23602,"./tg.js":23602,"./th":16947,"./th.js":16947,"./tk":46774,"./tk.js":46774,"./tl-ph":5868,"./tl-ph.js":5868,"./tlh":16695,"./tlh.js":16695,"./tr":22573,"./tr.js":22573,"./tzl":84509,"./tzl.js":84509,"./tzm":17118,"./tzm-latn":87078,"./tzm-latn.js":87078,"./tzm.js":17118,"./ug-cn":82617,"./ug-cn.js":82617,"./uk":56131,"./uk.js":56131,"./ur":56532,"./ur.js":56532,"./uz":69932,"./uz-latn":27220,"./uz-latn.js":27220,"./uz.js":69932,"./vi":20490,"./vi.js":20490,"./x-pseudo":32154,"./x-pseudo.js":32154,"./yo":49955,"./yo.js":49955,"./zh-cn":68355,"./zh-cn.js":68355,"./zh-hk":89547,"./zh-hk.js":89547,"./zh-mo":70374,"./zh-mo.js":70374,"./zh-tw":979,"./zh-tw.js":979};function o(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=35358}}]);