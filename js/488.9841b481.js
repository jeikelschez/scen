(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[488],{19187:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10239),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__),vue__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(38734),src_components_rules_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(99565),moment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(85038),moment__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__),boot_axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80660),quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(14907),quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(45022),src_components_methods_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(93899),src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(21643);const __WEBPACK_DEFAULT_EXPORT__={components:{methods:src_components_methods_vue__WEBPACK_IMPORTED_MODULE_5__.A,webViewer:src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_6__.A,rulesVue:src_components_rules_vue__WEBPACK_IMPORTED_MODULE_1__.A},name:"AsignacionGuias",data(){return{columns:[{name:"control_inicio",label:"Primer Correlativo",field:"control_inicio",align:"left",sortable:!0},{name:"control_final",label:"Segundo Correlativo",field:"control_final",align:"left",sortable:!0},{name:"cant_asignada",label:"Asignado",field:"cant_asignada",align:"right",sortable:!0},{name:"cant_disponible",label:"Disponible",field:"cant_disponible",align:"right",sortable:!0},{name:"cod_agencia",label:"Agencia",field:"cod_agencia",align:"left",sortable:!0},{name:"cod_agente",label:"Agente",field:"cod_agente",align:"left",sortable:!0},{name:"cod_cliente",label:"Cliente",field:"cod_cliente",align:"left",sortable:!0},{name:"fecha_asignacion",label:"Fecha de Asignación",field:"fecha_asignacion",align:"left",format:e=>moment__WEBPACK_IMPORTED_MODULE_2___default()(e,"YYYY-MM-DD").format("DD/MM/YYYY"),sortable:!0},{name:"action",label:"Acciones",align:"center"}],form:{control_inicio:"",control_final:"",cant_asignada:"",cant_disponible:"",fecha_asignacion:"",cod_agencia:"",cod_agente:"",cod_cliente:"",tipo:"20"},pagination:{page:1,rowsPerPage:8,sortBy:"control_inicio",descending:!0,filter:"",filterValue:"",rowsNumber:""},guias:[],guiasAll:[],clientesAll:[],agentesAll:[],agencias:[],rpermisos:[],menus:[],clientes:[],agentes:[],agenciasSelected:[],agentesSelected:[],clientesSelected:[],selected:[],selectedGuiaCarga:"20",selectedCulminado:"",guia_desde:"",guia_hasta:"",selectedAgencia:[],selectedCliente:[],selectedAgente:[],disabledAgencia:!0,disabledAgente:!1,disabledCliente:!1,disabledInputsEdit:!1,base64:"",agenciasLoading:!1,agentesLoading:!1,clientesLoading:!1}},setup(){(0,quasar_src_composables_use_quasar_use_quasar_js__WEBPACK_IMPORTED_MODULE_7__.A)();return{dateInit:moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD/MM/YYYY"),loading:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)(!1),separator:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)("vertical"),deletePopup:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)(!1),dialog:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)(!1),pdfView:(0,vue__WEBPACK_IMPORTED_MODULE_8__.KR)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Asignacion de Guias",""),this.agenciasLoading=!0,this.$refs.methods.getData("/agencias","setData","agencias"),this.$refs.methods.getData("/clientes","setData","clientesAll"),this.$refs.methods.getData("/agentes","setData","agentesAll",{headers:{activo:"S"}}),this.getDataTable(),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.A.getItem("tokenTraducido").usuario.roles.id,menu:"asignacionguias"}})},methods:{closePdf(){this.pdfView=!1},filterArray(e,a,t,s,i){a(""!==e?()=>{const a=e.toUpperCase();for(var l=[],n=0;n<=this[s].length-1;n++)if(this[s][n][i].indexOf(a)>-1&&l.push(this[s][n]),n==this[s].length-1){this[t]=l;break}}:()=>{this[t]=this[s]})},filterDesc(e,a){var t=this[e].findIndex((e=>e.value==a));return t>=0?this[e][t].label:null},findIndex(e,a,t){var s=this[e].findIndex((e=>e.id==a));return s>=0?this[e][s][t]:null},allowOption(e){return this.rpermisos.findIndex((a=>a.acciones.accion==e))<0},setDataPermisos(e,a){this[a]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},reglasPrimerCorrelativo(e){if(this.guiasAll.findIndex((a=>a.control_inicio==e))>=0)return"El lote de guía ya se encuentra cargado desde este número!"},reglasUltimoCorrelativo(e){if(e-this.form.control_inicio<0)return"El Ultimo Correlativo debe ser Mayor al Primero"},setData(res,dataRes){eval("this."+dataRes+"Loading = false"),this[dataRes]=res.data?res.data:res},getDataTable(e){this.loading=!0,this.getDataTableAll(),e&&(this.pagination=e.pagination),this.$refs.methods.getData("/cguias","setDataTable","guias",{headers:{agencia:this.selectedAgencia.id?this.selectedAgencia.id:"",agente:this.selectedAgente.id?this.selectedAgente.id:"",cliente:this.selectedCliente.id?this.selectedCliente.id:"",desde:this.guia_desde,hasta:this.guia_hasta,disp:this.selectedCulminado,tipo:20,page:this.pagination.page,limit:this.pagination.rowsPerPage,order_by:this.pagination.sortBy,order_direction:this.pagination.descending?"DESC":"ASC",filter:this.pagination.filter,filter_value:this.pagination.filterValue}})},setDataTable(e,a){this[a]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},getDataTableAll(){this.loading=!0,this.$refs.methods.getData("/cguias","setDataTableAll","guiasAll",{headers:{tipo:20}})},setDataTableAll(e,a){this[a]=e.data?e.data:e,this.loading=!1},sendData(){this.form.fecha_asignacion=moment__WEBPACK_IMPORTED_MODULE_2___default()(this.form.fecha_asignacion,"DD/MM/YYYY").format("YYYY-MM-DD"),this.form.cod_agencia=this.selectedAgencia.id?this.selectedAgencia.id:this.form.cod_agencia.id,this.form.cod_agente=this.selectedAgente.id?this.selectedAgente.id:this.form.cod_agente?this.form.cod_agente.id:null,this.form.cod_cliente=this.selectedCliente.id?this.selectedCliente.id:this.form.cod_cliente?this.form.cod_cliente.id:null,this.$refs.methods.createData("/cguias",this.form,"getDataTable"),this.dialog=!1,this.resetForm()},deleteData(e){0!=e.cant_disponible&&e.cant_disponible!=e.cant_asignada?this.$q.notify({message:"El Lote no puede ser Eliminado, debido a que se está usando actualmente!",color:"red"}):this.deletePopup=!0},print(){boot_axios__WEBPACK_IMPORTED_MODULE_3__.api.get("/pdfreports/asignacionGuias",{headers:{Authorization:`Bearer ${quasar_src_plugins_storage_LocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.A.getItem("token")}`,id:this.selected}}).then((e=>{this.$refs.webViewer.showpdf(e.data.pdfPath,1.3)}))},resetFilters(){this.selectedAgencia=[],this.selectedCliente=[],this.selectedAgente=[],this.agenciasSelected=[],this.agentesSelected=[],this.clientesSelected=[],this.agentes=[],this.clientes=[],this.selectedGuiaCarga="",this.selectedCulminado="",this.guia_desde="",this.guia_hasta="",this.getDataTable(),this.resetForm()},resetForm(){delete this.form.id,this.form.control_inicio="",this.form.control_final="",this.form.cant_asignada="",this.form.cant_disponible="",this.form.fecha_asignacion="",this.form.cod_agencia="",this.form.cod_agente="",this.form.cod_cliente=""}}}},93899:(e,a,t)=>{"use strict";function s(e,a,t,s,i,l){return null}t.d(a,{A:()=>c});var i=t(45022),l=t(80660),n=t(14907);const o={setup(){const e=(0,n.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.A.getItem("token")}`,l.api.get(e,s).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.A.getItem("token")}`,l.api.post(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,a,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.A.getItem("token")}`,l.api.put(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,a,t={headers:{}}){t.headers.Authorization=`Bearer ${i.A.getItem("token")}`,l.api.delete(e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.A.getItem("token")}`,l.api.post(e,a,s).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=t(12807);const d=(0,r.A)(o,[["render",s]]),c=d},99565:(e,a,t)=>{"use strict";function s(e,a,t,s,i,l){return null}t.d(a,{A:()=>c});var i=t(14907),l=t(85038),n=t.n(l);const o={name:"rules",setup(){(0,i.A)()},methods:{isReq(e,a=!1){if(null==e||""==e.trim())return!1!==a?a:"Valor Requerido"},isReqCurrency(e,a=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==a?a:"Valor Requerido"},isReqCurrencyWithZero(e,a=!1){if(null==e||""==e.trim())return!1!==a?a:"Valor Requerido"},isReqSelect(e,a=!1){if(null==e||e==[]||""==e)return!1!==a?a:"Valor Requerido"},isMax(e,a,t=!1){if(null!==e&&""!==e&&e.length>a)return!1!==t?t:`Maximo ${a} Caracteres`},isMin(e,a,t=!1){if(null!==e&&""!==e&&e.length<a)return!1!==t?t:`Minimo ${a} Caracteres`},checkDate(e,a=!1){if(0==n()(e,"DD/MM/YYYY",!0)._isValid)return!1!==a?a:"Fecha Invalida"},checkHour(e,a=!1){if(0==n()(e,"HH:mm",!0)._isValid)return!1!==a?a:"Hora Invalida"}}};var r=t(12807);const d=(0,r.A)(o,[["render",s]]),c=d},21643:(e,a,t)=>{"use strict";t.d(a,{A:()=>u});var s=t(61758);const i={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function l(e,a,t,l,n,o){return(0,s.uX)(),(0,s.CE)("div",i,null,512)}t(10239),t(33186),t(45531),t(15683),t(9048),t(64702);var n=t(38734),o=t(82429),r=t.n(o);const d={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,n.KR)(null);return{viewer:e}},methods:{base64ToBlob(e){const a=window.atob(e),t=a.length,s=new Uint8Array(t);for(let i=0;i<t;++i)s[i]=a.charCodeAt(i);return new Blob([s],{type:"application/pdf"})},async until(e){const a=t=>{e()?t():setTimeout((e=>a(t)),400)};return new Promise(a)},showpdf(e,a,t=!1,s=!0,i){const l="https://scen.rcsexpress.com/webViewer";r()({path:l,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((l=>{l.UI.disableElements(["panToolButton"]),l.UI.disableElements(["textSelectButton"]),l.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{l.UI.downloadPdf()}}),e.push({type:"actionButton",title:"Exportar Excel",img:"../../icons/icone-excel-grise.png",onClick:()=>{this.$emit("exportExcel")}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{t&&(this.$emit("printPdf"),await this.until((e=>1==this.confirmPrint)),!this.confirmPrint)||(l.UI.print(),this.confirmPrint=!1)}}),s&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),i?l.UI.loadDocument(this.base64ToBlob(i),{filename:"REPORTE SCEN.pdf"}):l.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/pdfreports/loadPDF/${e}`),l.UI.setLanguage("es"),l.UI.useEmbeddedPrint(!0),setTimeout((()=>{l.UI.setZoomLevel(a||.7)}),2e3)}))}}};var c=t(12807);const _=(0,c.A)(d,[["render",l]]),u=_},58091:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>ie});var s=t(61758),i=t(29104),l=t(58790);const n={class:"row"},o={class:"col-md-6 col-xs-12"},r={class:"col-md-6 col-xs-12"},d={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},_={class:"col-md-6 col-xs-12"},u={class:"col-md-6 col-xs-12"},g={class:"col-md-6 col-xs-12"},m={class:"col-md-6 col-xs-12"},p={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},h={class:"q-pa-sm justify-center"},b={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},f=(0,s.Lk)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,s.Lk)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,s.Lk)("strong",null,"MANTENIMIENTO - ASIGNACIÓN DE GUIAS")])],-1),k={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},D={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},A={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin",style:{"align-self":"center","text-align":"center"}},j={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-top":"-20px"}},y={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},C={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},v={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-6",style:{"margin-top":"-4px"}},x={class:"col-md-12 col-xl-2 col-lg-2 col-xs-12 col-sm-6 selectMobile3",style:{"margin-left":"-50px"}},w={class:"q-pa-md q-gutter-y-md",style:{"margin-top":"-40px"}},E=(0,s.Lk)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1);function F(e,a,t,F,P,L){const M=(0,s.g2)("q-icon"),V=(0,s.g2)("q-input"),T=(0,s.g2)("q-date"),I=(0,s.g2)("q-popup-proxy"),q=(0,s.g2)("q-item-section"),U=(0,s.g2)("q-item"),O=(0,s.g2)("q-inner-loading"),S=(0,s.g2)("q-select"),W=(0,s.g2)("q-btn"),R=(0,s.g2)("q-form"),B=(0,s.g2)("q-card-section"),$=(0,s.g2)("q-card"),z=(0,s.g2)("q-dialog"),K=(0,s.g2)("q-checkbox"),Q=(0,s.g2)("q-field"),Y=(0,s.g2)("q-tooltip"),G=(0,s.g2)("q-td"),N=(0,s.g2)("q-item-label"),X=(0,s.g2)("q-list"),H=(0,s.g2)("q-table"),Z=(0,s.g2)("q-card-actions"),J=(0,s.g2)("webViewer"),ee=(0,s.g2)("methods"),ae=(0,s.g2)("rules-vue"),te=(0,s.g2)("q-page"),se=(0,s.gN)("close-popup");return(0,s.uX)(),(0,s.Wv)(te,{class:"pagina q-pa-md"},{default:(0,s.k6)((()=>[(0,s.bF)(z,{modelValue:F.dialog,"onUpdate:modelValue":a[18]||(a[18]=e=>F.dialog=e)},{default:(0,s.k6)((()=>[(0,s.bF)($,{class:"q-pa-md",bordered:"",style:{"max-width":"80vw"}},{default:(0,s.k6)((()=>[(0,s.bF)(B,null,{default:(0,s.k6)((()=>[(0,s.bF)(R,{onSubmit:a[17]||(a[17]=e=>L.sendData()),class:"q-gutter-md"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",n,[(0,s.Lk)("div",o,[(0,s.bF)(V,{"upper-case":"",outlined:"",modelValue:P.form.control_inicio,"onUpdate:modelValue":[a[0]||(a[0]=e=>P.form.control_inicio=e),a[1]||(a[1]=e=>{this.form.cant_asignada=0,this.form.cant_disponible=0,this.form.control_final-this.form.control_inicio+1>0&&(this.form.cant_asignada=this.form.control_final-this.form.control_inicio+1,this.form.cant_disponible=this.form.cant_asignada)})],label:"Primer Correlativo",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,10),L.reglasPrimerCorrelativo],type:"number"},{prepend:(0,s.k6)((()=>[(0,s.bF)(M,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,s.Lk)("div",r,[(0,s.bF)(V,{outlined:"",modelValue:P.form.control_final,"onUpdate:modelValue":[a[2]||(a[2]=e=>P.form.control_final=e),a[3]||(a[3]=e=>{this.form.cant_asignada=0,this.form.cant_disponible=0,this.form.control_final-this.form.control_inicio+1>0&&(this.form.cant_asignada=this.form.control_final-this.form.control_inicio+1,this.form.cant_disponible=this.form.cant_asignada)})],label:"Ultimo Correlativo",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,10),L.reglasUltimoCorrelativo],hint:"","lazy-rules":"",type:"number"},{prepend:(0,s.k6)((()=>[(0,s.bF)(M,{name:"account_circle"})])),_:1},8,["modelValue","rules"])]),(0,s.Lk)("div",d,[(0,s.bF)(V,{"upper-case":"",outlined:"",modelValue:P.form.cant_asignada,"onUpdate:modelValue":a[4]||(a[4]=e=>P.form.cant_asignada=e),readonly:!0,label:"Cantidad Asignada",class:"pcform",hint:"","lazy-rules":"",type:"number"},{prepend:(0,s.k6)((()=>[(0,s.bF)(M,{name:"assignment"})])),_:1},8,["modelValue"])]),(0,s.Lk)("div",c,[(0,s.bF)(V,{"upper-case":"",outlined:"",modelValue:P.form.cant_disponible,"onUpdate:modelValue":a[5]||(a[5]=e=>P.form.cant_disponible=e),readonly:!0,label:"Cantidad Disponible",hint:"","lazy-rules":"",type:"number"},{prepend:(0,s.k6)((()=>[(0,s.bF)(M,{name:"assignment_turned_in"})])),_:1},8,["modelValue"])]),(0,s.Lk)("div",_,[(0,s.bF)(V,{outlined:"",label:"Fecha de Asignación",hint:"",class:"pcform",modelValue:P.form.fecha_asignacion,"onUpdate:modelValue":a[8]||(a[8]=e=>P.form.fecha_asignacion=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,s.k6)((()=>[(0,s.bF)(M,{name:"event",class:"cursor-pointer"},{default:(0,s.k6)((()=>[(0,s.bF)(I,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,s.k6)((()=>[(0,s.bF)(T,{modelValue:P.form.fecha_asignacion,"onUpdate:modelValue":[a[6]||(a[6]=e=>P.form.fecha_asignacion=e),a[7]||(a[7]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY"},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,s.Lk)("div",u,[(0,s.bF)(S,{outlined:"",modelValue:P.form.cod_agencia,"onUpdate:modelValue":[a[9]||(a[9]=e=>P.form.cod_agencia=e),a[11]||(a[11]=e=>{this.agentesLoading=!0,this.clientesLoading=!0,this.form.cod_agente=null,this.form.cod_cliente=null,this.$refs.methods.getData("/agentes","setData","agentes",{headers:{agencia:P.form.cod_agencia.id}}),this.$refs.methods.getData("/clientes","setData","clientes",{headers:{agencia:P.form.cod_agencia.id}})})],label:"Agencia",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e)],options:P.agenciasSelected,loading:P.agenciasLoading,disable:P.agenciasLoading,readonly:!!this.selectedAgencia.id,onFilter:a[10]||(a[10]=(e,a)=>L.filterArray(e,a,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"nb_agencia","option-value":"id"},{"no-option":(0,s.k6)((()=>[(0,s.bF)(U,null,{default:(0,s.k6)((()=>[(0,s.bF)(q,{class:"text-grey"},{default:(0,s.k6)((()=>[(0,s.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,s.k6)((()=>[(0,s.bF)(M,{name:"south_america"})])),agenciasLoading:(0,s.k6)((()=>[(0,s.bF)(O,{showing:"",color:"primary",class:"loading"})])),_:1},8,["modelValue","rules","options","loading","disable","readonly"])]),(0,s.Lk)("div",g,[(0,s.bF)(S,{outlined:"",modelValue:P.form.cod_agente,"onUpdate:modelValue":a[12]||(a[12]=e=>P.form.cod_agente=e),label:"Agente",class:"pcform",hint:"",readonly:!!this.selectedAgente.id,options:P.agentesSelected,loading:P.agentesLoading,disable:P.agentesLoading,onFilter:a[13]||(a[13]=(e,a)=>L.filterArray(e,a,"agentesSelected","agentes","persona_responsable")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"persona_responsable","option-value":"id"},{"no-option":(0,s.k6)((()=>[(0,s.bF)(U,null,{default:(0,s.k6)((()=>[(0,s.bF)(q,{class:"text-grey"},{default:(0,s.k6)((()=>[(0,s.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,s.k6)((()=>[(0,s.bF)(M,{name:"south_america"})])),agentesLoading:(0,s.k6)((()=>[(0,s.bF)(O,{showing:"",color:"primary",class:"loading"})])),_:1},8,["modelValue","readonly","options","loading","disable"])]),(0,s.Lk)("div",m,[(0,s.bF)(S,{outlined:"",modelValue:P.form.cod_cliente,"onUpdate:modelValue":a[14]||(a[14]=e=>P.form.cod_cliente=e),label:"Cliente",hint:"",readonly:!!this.selectedCliente.id,options:P.clientesSelected,loading:P.clientesLoading,disable:P.clientesLoading,onFilter:a[15]||(a[15]=(e,a)=>L.filterArray(e,a,"clientesSelected","clientes","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"nb_cliente","option-value":"id"},{"no-option":(0,s.k6)((()=>[(0,s.bF)(U,null,{default:(0,s.k6)((()=>[(0,s.bF)(q,{class:"text-grey"},{default:(0,s.k6)((()=>[(0,s.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,s.k6)((()=>[(0,s.bF)(M,{name:"south_america"})])),clientesLoading:(0,s.k6)((()=>[(0,s.bF)(O,{showing:"",color:"primary",class:"loading"})])),_:1},8,["modelValue","readonly","options","loading","disable"])])]),(0,s.Lk)("div",p,[(0,s.bF)(W,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.bo)((0,s.bF)(W,{label:"Cerrar",color:"primary",flat:"",onClick:a[16]||(a[16]=e=>this.resetForm()),class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[se]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Lk)("div",h,[(0,s.Lk)("div",b,[f,(0,s.Lk)("div",k,[(0,s.bF)(S,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.agenciasSelected,onFilter:a[19]||(a[19]=(e,a)=>L.filterArray(e,a,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:P.selectedAgencia,"onUpdate:modelValue":[a[20]||(a[20]=e=>P.selectedAgencia=e),a[21]||(a[21]=e=>{this.agentesLoading=!0,this.clientesLoading=!0,this.agentesSelected=[],this.clientesSelected=[],L.getDataTable(),this.$refs.methods.getData("/agentes","setData","agentes",{headers:{agencia:this.selectedAgencia.id}}),this.$refs.methods.getData("/clientes","setData","clientes",{headers:{agencia:this.selectedAgencia.id}})})],outlined:"",standout:"",loading:P.agenciasLoading,disable:P.agenciasLoading,label:"Agencia"},{"no-option":(0,s.k6)((()=>[(0,s.bF)(U,null,{default:(0,s.k6)((()=>[(0,s.bF)(q,{class:"text-grey"},{default:(0,s.k6)((()=>[(0,s.eW)(" Sin resultados ")])),_:1})])),_:1})])),agenciasLoading:(0,s.k6)((()=>[(0,s.bF)(O,{showing:"",color:"primary",class:"loading"})])),prepend:(0,s.k6)((()=>[(0,s.bF)(M,{name:"search"})])),_:1},8,["options","modelValue","loading","disable"])]),(0,s.Lk)("div",D,[(0,s.bF)(S,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.agentesSelected,onFilter:a[22]||(a[22]=(e,a)=>L.filterArray(e,a,"agentesSelected","agentes","persona_responsable")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",loading:P.agentesLoading,disable:P.agentesLoading,"option-label":"persona_responsable","option-value":"id",modelValue:P.selectedAgente,"onUpdate:modelValue":[a[23]||(a[23]=e=>P.selectedAgente=e),a[24]||(a[24]=e=>L.getDataTable())],outlined:"",standout:"",label:"Agente"},{"no-option":(0,s.k6)((()=>[(0,s.bF)(U,null,{default:(0,s.k6)((()=>[(0,s.bF)(q,{class:"text-grey"},{default:(0,s.k6)((()=>[(0,s.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,s.k6)((()=>[(0,s.bF)(M,{name:"search"})])),agentesLoading:(0,s.k6)((()=>[(0,s.bF)(O,{showing:"",color:"primary",class:"loading"})])),_:1},8,["options","loading","disable","modelValue"])]),(0,s.Lk)("div",A,[(0,s.bF)(S,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:P.clientesSelected,onFilter:a[25]||(a[25]=(e,a)=>L.filterArray(e,a,"clientesSelected","clientes","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_cliente","option-value":"id",loading:P.clientesLoading,disable:P.clientesLoading,modelValue:P.selectedCliente,"onUpdate:modelValue":[a[26]||(a[26]=e=>P.selectedCliente=e),a[27]||(a[27]=e=>L.getDataTable())],outlined:"",standout:"",label:"Cliente"},{"no-option":(0,s.k6)((()=>[(0,s.bF)(U,null,{default:(0,s.k6)((()=>[(0,s.bF)(q,{class:"text-grey"},{default:(0,s.k6)((()=>[(0,s.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,s.k6)((()=>[(0,s.bF)(M,{name:"search"})])),clientesLoading:(0,s.k6)((()=>[(0,s.bF)(O,{showing:"",color:"primary",class:"loading"})])),_:1},8,["options","loading","disable","modelValue"])])]),(0,s.Lk)("div",j,[(0,s.Lk)("div",y,[(0,s.bF)(V,{modelValue:P.guia_desde,"onUpdate:modelValue":a[29]||(a[29]=e=>P.guia_desde=e),rounded:"",dense:"",outlined:"",standout:"",label:"Guia Desde",onKeyup:a[30]||(a[30]=(0,i.jR)((e=>L.getDataTable()),["enter"])),mask:"##########"},{append:(0,s.k6)((()=>[(0,s.bF)(M,{onClick:a[28]||(a[28]=e=>L.getDataTable()),class:"cursor-pointer",name:"search"})])),_:1},8,["modelValue"])]),(0,s.Lk)("div",C,[(0,s.bF)(V,{modelValue:P.guia_hasta,"onUpdate:modelValue":a[32]||(a[32]=e=>P.guia_hasta=e),rounded:"",dense:"",outlined:"",standout:"",label:"Guia Hasta",onKeyup:a[33]||(a[33]=(0,i.jR)((e=>L.getDataTable()),["enter"])),mask:"##########"},{append:(0,s.k6)((()=>[(0,s.bF)(M,{onClick:a[31]||(a[31]=e=>L.getDataTable()),class:"cursor-pointer",name:"search"})])),_:1},8,["modelValue"])]),(0,s.Lk)("div",v,[(0,s.bF)(Q,{"hide-bottom-space":"",borderless:"",dense:"",modelValue:P.selectedCulminado,"onUpdate:modelValue":a[36]||(a[36]=e=>P.selectedCulminado=e)},{control:(0,s.k6)((()=>[(0,s.bF)(K,{size:"md",modelValue:P.selectedCulminado,"onUpdate:modelValue":[a[34]||(a[34]=e=>P.selectedCulminado=e),a[35]||(a[35]=e=>L.getDataTable())],"true-value":"0","false-value":"",style:{"font-size":"13px"},label:"Culminado"},null,8,["modelValue"])])),_:1},8,["modelValue"])]),(0,s.Lk)("div",x,[(0,s.bF)(W,{dense:"",color:"primary",disabled:this.allowOption(2),round:"",onClick:a[37]||(a[37]=e=>{this.dialog=!0,this.form.cod_agencia=L.findIndex("agencias",this.selectedAgencia.id,"nb_agencia"),this.form.cod_agente=L.findIndex("agentes",this.selectedAgente.id,"persona_responsable"),this.form.cod_cliente=L.findIndex("clientes",this.selectedCliente.id,"nb_cliente"),this.form.fecha_asignacion=this.dateInit}),padding:"sm",style:{"margin-right":"25px"}},{default:(0,s.k6)((()=>[(0,s.bF)(M,{size:"25px",name:"add",color:"white"}),(0,s.bF)(Y,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,s.k6)((()=>[(0,s.eW)("Agregar Control")])),_:1})])),_:1},8,["disabled"]),(0,s.bF)(W,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-right":"25px"},onClick:a[38]||(a[38]=e=>this.resetFilters())},{default:(0,s.k6)((()=>[(0,s.bF)(M,{size:"25px",name:"filter_alt_off",color:"white"}),(0,s.bF)(Y,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,s.k6)((()=>[(0,s.eW)("Eliminar Filtros")])),_:1})])),_:1}),(0,s.bF)(W,{dense:"",color:"primary",round:"",padding:"sm"},{default:(0,s.k6)((()=>[(0,s.bF)(M,{size:"25px",name:"sticky_note_2",color:"white"}),(0,s.bF)(Y,{class:"bg-primary","transition-show":"scale",style:{"max-height":"30px"},"transition-hide":"scale",color:"primary"},{default:(0,s.k6)((()=>[(0,s.eW)("Carta para el Cliente")])),_:1})])),_:1})])])]),(0,s.Lk)("div",w,[(0,s.bF)(H,{rows:P.guias,"binary-state-sort":"","row-key":"id",columns:P.columns,loading:F.loading,separator:F.separator,style:{width:"100%"},grid:e.$q.screen.xs,"rows-per-page-options":[5,10,15,20,50],onRequest:L.getDataTable,pagination:P.pagination,"onUpdate:pagination":a[41]||(a[41]=e=>P.pagination=e)},{loading:(0,s.k6)((()=>[(0,s.bF)(O,{showing:"",color:"primary",class:"loading"})])),"body-cell-cod_agencia":(0,s.k6)((e=>[(0,s.bF)(G,{props:e},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(L.findIndex("agencias",e.row.cod_agencia,"nb_agencia")),1)])),_:2},1032,["props"])])),"body-cell-cod_agente":(0,s.k6)((e=>[(0,s.bF)(G,{props:e},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(L.findIndex("agentesAll",e.row.cod_agente,"persona_responsable")),1)])),_:2},1032,["props"])])),"body-cell-cod_cliente":(0,s.k6)((e=>[(0,s.bF)(G,{props:e},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(L.findIndex("clientesAll",e.row.cod_cliente,"nb_cliente")),1)])),_:2},1032,["props"])])),"body-cell-action":(0,s.k6)((e=>[(0,s.bF)(G,{props:e},{default:(0,s.k6)((()=>[(0,s.bF)(W,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:a=>P.selected=e.row.id,onClickCapture:a=>L.deleteData(e.row)},null,8,["disabled","onClick","onClickCapture"]),(0,s.bF)(W,{dense:"",round:"",flat:"",color:"primary",icon:"sim_card_download",disabled:!(e.row.cant_disponible>0),onClick:a=>P.selected=e.row.id,onClickCapture:a[39]||(a[39]=e=>this.pdfView=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.k6)((e=>[(0,s.Lk)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,l.Tr)(e.selected?"transform: scale(0.95);":"")},[(0,s.bF)($,{class:(0,l.C4)(e.selected?"bg-grey-2":"")},{default:(0,s.k6)((()=>[(0,s.bF)(X,{dense:""},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.cols,(t=>((0,s.uX)(),(0,s.Wv)(U,{key:t.name},{default:(0,s.k6)((()=>[(0,s.bF)(q,null,{default:(0,s.k6)((()=>[(0,s.bF)(N,null,{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(t.label),1)])),_:2},1024)])),_:2},1024),(0,s.bF)(q,{side:"",class:"itemMovilSide"},{default:(0,s.k6)((()=>["cod_agencia"===t.name?((0,s.uX)(),(0,s.Wv)(N,{key:0},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(L.findIndex("agencias",e.row.cod_agencia,"nb_agencia")),1)])),_:2},1024)):(0,s.Q3)("",!0),"cod_agente"===t.name?((0,s.uX)(),(0,s.Wv)(N,{key:1},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(L.findIndex("agentesAll",e.row.cod_agente,"persona_responsable")),1)])),_:2},1024)):(0,s.Q3)("",!0),"cod_cliente"===t.name?((0,s.uX)(),(0,s.Wv)(N,{key:2},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(L.findIndex("clientesAll",e.row.cod_cliente,"nb_cliente")),1)])),_:2},1024)):(0,s.Q3)("",!0),"action"===t.name?((0,s.uX)(),(0,s.Wv)(W,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:a=>P.selected=e.row.id,onClickCapture:a=>L.deleteData(e.row)},null,8,["disabled","onClick","onClickCapture"])):(0,s.Q3)("",!0),"action"===t.name?((0,s.uX)(),(0,s.Wv)(W,{key:4,dense:"",round:"",flat:"",color:"primary",icon:"sim_card_download",disabled:!(e.row.cant_disponible>0),onClick:a=>P.selected=e.row.id,onClickCapture:a[40]||(a[40]=e=>this.pdfView=!0)},null,8,["disabled","onClick"])):(0,s.Q3)("",!0),"cod_agencia"!=t.name&&"cod_agente"!=t.name&&"cod_cliente"!=t.name?((0,s.uX)(),(0,s.Wv)(N,{key:5},{default:(0,s.k6)((()=>[(0,s.eW)((0,l.v_)(t.value),1)])),_:2},1024)):(0,s.Q3)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","grid","onRequest","pagination"])]),(0,s.bF)(z,{modelValue:F.deletePopup,"onUpdate:modelValue":a[43]||(a[43]=e=>F.deletePopup=e)},{default:(0,s.k6)((()=>[(0,s.bF)($,{style:{width:"700px"}},{default:(0,s.k6)((()=>[(0,s.bF)(B,null,{default:(0,s.k6)((()=>[E])),_:1}),(0,s.bF)(Z,{align:"right"},{default:(0,s.k6)((()=>[(0,s.bo)((0,s.bF)(W,{flat:"",label:"Cancelar",color:"primary"},null,512),[[se]]),(0,s.bo)((0,s.bF)(W,{flat:"",label:"Aceptar",color:"primary",onClick:a[42]||(a[42]=e=>this.$refs.methods.deleteData(`/cguias/${P.selected}`,"getDataTable"))},null,512),[[se]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.bF)(z,{modelValue:F.pdfView,"onUpdate:modelValue":a[44]||(a[44]=e=>F.pdfView=e),onShow:this.print},{default:(0,s.k6)((()=>[(0,s.bF)(J,{ref:"webViewer",onClosePdf:L.closePdf,style:{width:"1000px",height:"750px","max-width":"1000px"}},null,8,["onClosePdf"])])),_:1},8,["modelValue","onShow"]),(0,s.bF)(ee,{ref:"methods",onSetData:L.setData,onGetDataTable:L.getDataTable,onSetDataTable:L.setDataTable,onSetDataTableAll:L.setDataTableAll,onGetDataTableAll:L.getDataTableAll,onSetDataPermisos:L.setDataPermisos},null,8,["onSetData","onGetDataTable","onSetDataTable","onSetDataTableAll","onGetDataTableAll","onSetDataPermisos"]),(0,s.bF)(ae,{ref:"rulesVue"},null,512)])),_:1})}var P=t(19187),L=t(12807),M=t(77716),V=t(82156),T=t(23316),I=t(44189),q=t(49200),U=t(67837),O=t(50492),S=t(48975),W=t(93692),R=t(94940),B=t(90124),$=t(25173),z=t(39035),K=t(56384),Q=t(67156),Y=t(80460),G=t(97410),N=t(84191),X=t(45262),H=t(53999),Z=t(13796),J=t(62669),ee=t(88672),ae=t(98582),te=t.n(ae);const se=(0,L.A)(P.A,[["render",F]]),ie=se;te()(P.A,"components",{QPage:M.A,QDialog:V.A,QCard:T.A,QCardSection:I.A,QForm:q.A,QInput:U.A,QIcon:O.A,QPopupProxy:S.A,QDate:W.A,QSelect:R.A,QItem:B.A,QItemSection:$.A,QInnerLoading:z.A,QBtn:K.A,QField:Q.A,QCheckbox:Y.A,QTooltip:G.A,QTable:N.A,QTd:X.A,QList:H.A,QItemLabel:Z.A,QCardActions:J.A}),te()(P.A,"directives",{ClosePopup:ee.A})},35358:(e,a,t)=>{var s={"./af":78188,"./af.js":78188,"./ar":50096,"./ar-dz":28495,"./ar-dz.js":28495,"./ar-kw":85891,"./ar-kw.js":85891,"./ar-ly":13194,"./ar-ly.js":13194,"./ar-ma":42195,"./ar-ma.js":42195,"./ar-ps":17084,"./ar-ps.js":17084,"./ar-sa":29393,"./ar-sa.js":29393,"./ar-tn":21867,"./ar-tn.js":21867,"./ar.js":50096,"./az":43224,"./az.js":43224,"./be":61330,"./be.js":61330,"./bg":85096,"./bg.js":85096,"./bm":28746,"./bm.js":28746,"./bn":29303,"./bn-bd":56554,"./bn-bd.js":56554,"./bn.js":29303,"./bo":30528,"./bo.js":30528,"./br":35499,"./br.js":35499,"./bs":29828,"./bs.js":29828,"./ca":35855,"./ca.js":35855,"./cs":68481,"./cs.js":68481,"./cv":1694,"./cv.js":1694,"./cy":98903,"./cy.js":98903,"./da":95908,"./da.js":95908,"./de":85528,"./de-at":21732,"./de-at.js":21732,"./de-ch":54146,"./de-ch.js":54146,"./de.js":85528,"./dv":81313,"./dv.js":81313,"./el":20138,"./el.js":20138,"./en-au":78067,"./en-au.js":78067,"./en-ca":82545,"./en-ca.js":82545,"./en-gb":50124,"./en-gb.js":50124,"./en-ie":6107,"./en-ie.js":6107,"./en-il":13196,"./en-il.js":13196,"./en-in":1654,"./en-in.js":1654,"./en-nz":79557,"./en-nz.js":79557,"./en-sg":35451,"./en-sg.js":35451,"./eo":21591,"./eo.js":21591,"./es":36843,"./es-do":61009,"./es-do.js":61009,"./es-mx":75169,"./es-mx.js":75169,"./es-us":37224,"./es-us.js":37224,"./es.js":36843,"./et":77058,"./et.js":77058,"./eu":61297,"./eu.js":61297,"./fa":46658,"./fa.js":46658,"./fi":75674,"./fi.js":75674,"./fil":45204,"./fil.js":45204,"./fo":74428,"./fo.js":74428,"./fr":80703,"./fr-ca":27812,"./fr-ca.js":27812,"./fr-ch":9411,"./fr-ch.js":9411,"./fr.js":80703,"./fy":89738,"./fy.js":89738,"./ga":21235,"./ga.js":21235,"./gd":96032,"./gd.js":96032,"./gl":16424,"./gl.js":16424,"./gom-deva":53793,"./gom-deva.js":53793,"./gom-latn":14714,"./gom-latn.js":14714,"./gu":33383,"./gu.js":33383,"./he":46660,"./he.js":46660,"./hi":37264,"./hi.js":37264,"./hr":63201,"./hr.js":63201,"./hu":35604,"./hu.js":35604,"./hy-am":61067,"./hy-am.js":61067,"./id":19262,"./id.js":19262,"./is":53423,"./is.js":53423,"./it":73038,"./it-ch":23512,"./it-ch.js":23512,"./it.js":73038,"./ja":87558,"./ja.js":87558,"./jv":86071,"./jv.js":86071,"./ka":95927,"./ka.js":95927,"./kk":62625,"./kk.js":62625,"./km":25499,"./km.js":25499,"./kn":79486,"./kn.js":79486,"./ko":89405,"./ko.js":89405,"./ku":77155,"./ku-kmr":92516,"./ku-kmr.js":92516,"./ku.js":77155,"./ky":13647,"./ky.js":13647,"./lb":42837,"./lb.js":42837,"./lo":91474,"./lo.js":91474,"./lt":96967,"./lt.js":96967,"./lv":48297,"./lv.js":48297,"./me":1545,"./me.js":1545,"./mi":2573,"./mi.js":2573,"./mk":77259,"./mk.js":77259,"./ml":33826,"./ml.js":33826,"./mn":45368,"./mn.js":45368,"./mr":30860,"./mr.js":30860,"./ms":96947,"./ms-my":99418,"./ms-my.js":99418,"./ms.js":96947,"./mt":76906,"./mt.js":76906,"./my":71837,"./my.js":71837,"./nb":24503,"./nb.js":24503,"./ne":31286,"./ne.js":31286,"./nl":17981,"./nl-be":58103,"./nl-be.js":58103,"./nl.js":17981,"./nn":19387,"./nn.js":19387,"./oc-lnc":30803,"./oc-lnc.js":30803,"./pa-in":66742,"./pa-in.js":66742,"./pl":30075,"./pl.js":30075,"./pt":81731,"./pt-br":23352,"./pt-br.js":23352,"./pt.js":81731,"./ro":21776,"./ro.js":21776,"./ru":5746,"./ru.js":5746,"./sd":74100,"./sd.js":74100,"./se":38395,"./se.js":38395,"./si":8823,"./si.js":8823,"./sk":39385,"./sk.js":39385,"./sl":3852,"./sl.js":3852,"./sq":3247,"./sq.js":3247,"./sr":64290,"./sr-cyrl":26189,"./sr-cyrl.js":26189,"./sr.js":64290,"./ss":32177,"./ss.js":32177,"./sv":49038,"./sv.js":49038,"./sw":9741,"./sw.js":9741,"./ta":86932,"./ta.js":86932,"./te":95784,"./te.js":95784,"./tet":13334,"./tet.js":13334,"./tg":23602,"./tg.js":23602,"./th":16947,"./th.js":16947,"./tk":46774,"./tk.js":46774,"./tl-ph":5868,"./tl-ph.js":5868,"./tlh":16695,"./tlh.js":16695,"./tr":22573,"./tr.js":22573,"./tzl":84509,"./tzl.js":84509,"./tzm":17118,"./tzm-latn":87078,"./tzm-latn.js":87078,"./tzm.js":17118,"./ug-cn":82617,"./ug-cn.js":82617,"./uk":56131,"./uk.js":56131,"./ur":56532,"./ur.js":56532,"./uz":69932,"./uz-latn":27220,"./uz-latn.js":27220,"./uz.js":69932,"./vi":20490,"./vi.js":20490,"./x-pseudo":32154,"./x-pseudo.js":32154,"./yo":49955,"./yo.js":49955,"./zh-cn":68355,"./zh-cn.js":68355,"./zh-hk":89547,"./zh-hk.js":89547,"./zh-mo":70374,"./zh-mo.js":70374,"./zh-tw":979,"./zh-tw.js":979};function i(e){var a=l(e);return t(a)}function l(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=l,e.exports=i,i.id=35358}}]);