(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[3817],{67404:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(61959),moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11488),moment__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__),src_components_rules_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3868),quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(48825),quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80589),src_components_methods_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(23759),src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(39798);const __WEBPACK_DEFAULT_EXPORT__={components:{methods:src_components_methods_vue__WEBPACK_IMPORTED_MODULE_3__.Z,webViewer:src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_4__.Z,rulesVue:src_components_rules_vue__WEBPACK_IMPORTED_MODULE_1__.Z},data(){return{tipoReporte:[{label:"OPERATIVA",value:"O"},{label:"COSTOS",value:"C"}],visible:[{label:"VISIBLE",value:"V"},{label:"NO VISIBLE",value:"N"}],reportes:[{label:"GPA",value:"GPA",slot:"one"},{label:"APZ",value:"APZ",slot:"two"},{label:"MAD",value:"MAD",slot:"three"}],cargaNeta:[{label:"KG+NETA",value:"K",slot:"one"},{label:"NETA",value:"N",slot:"two"}],columns:[{name:"nro_documento",label:"Guía",field:"nro_documento",required:!0,align:"left"},{name:"fecha_emision",label:"Emisión",field:"fecha_emision",required:!0,align:"left"},{name:"cod_agencia",label:"Origen",field:"cod_agencia",required:!0,align:"left"},{name:"cod_agencia_dest",label:"Destino",field:"cod_agencia_dest",required:!0,align:"left"},{name:"zona_dest",label:"Zona",field:e=>e.zonas_dest?e.zonas_dest.nb_zona:"SIN ZONA DEFINIDA",align:"left"},{name:"cliente_orig_desc",label:"Remitente",field:"cliente_orig_desc",required:!0,align:"left"},{name:"cliente_dest_desc",label:"Destinatario",field:"cliente_dest_desc",required:!0,align:"left"}],columnsAgencia:[{name:"nb_agencia",label:"Agencia",field:"nb_agencia",align:"left"}],visibleColumns:["zona_dest"],optionSerie:[{label:"Serie 44",value:"44"},{label:"Serie 55",value:"55"}],pagination:{page:1,rowsPerPage:0,sortBy:"nro_documento",descending:!1},selected:[],guias:[],selectedTipo:"O",selectedReporte:"GPA",selectedVisible:"V",selectedSerie:["44","55"],selectedDolar:!1,selectedNeta:"",agencias:[],agenciasSelected:[],selectedAgencia:[],selectedAgenciaDestino:[],clientesSelected:[],selectedCliente:[],clientesLoading:!1,agentesSelected:[],selectedAgente:[],unidadesSelected:[],selectedUnidad:[],ayudantesSelected:[],selectedAyudante:[],receptoresSelected:[],selectedReceptor:[],fecha_desde:moment__WEBPACK_IMPORTED_MODULE_0___default()().format("DD/MM/YYYY"),fecha_hasta:moment__WEBPACK_IMPORTED_MODULE_0___default()().format("DD/MM/YYYY")}},setup(){(0,quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_5__.Z)();return{loading:(0,vue__WEBPACK_IMPORTED_MODULE_6__.iH)(!1),separator:(0,vue__WEBPACK_IMPORTED_MODULE_6__.iH)("vertical"),dialog:(0,vue__WEBPACK_IMPORTED_MODULE_6__.iH)(!1),dialogAgencias:(0,vue__WEBPACK_IMPORTED_MODULE_6__.iH)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Relación de Despacho",""),this.$refs.methods.getData("/agencias","setData","agencias"),this.$refs.methods.getData("/agentes","setData","agentes",{headers:{agencia:1,activo:"S"}}),this.$refs.methods.getData("/unidades","setData","unidades"),this.$refs.methods.getData("/ayudantes","setData","ayudantes",{headers:{activo:"S"}}),this.$refs.methods.getData("/receptores","setData","receptores",{headers:{activo:"S"}}),this.getDataTable(),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.Z.getItem("tokenTraducido").usuario.roles.id,menu:"relaciondespacho"}})},methods:{findIndex(e,t,s){var a=this[e].findIndex((e=>e.id==t));return a>=0?this[e][a][s]:null},findSiglas(e,t){var s=this[e].findIndex((e=>e.id==t));return s>=0?this[e][s].ciudades.siglas:null},filterArray(e,t,s,a,l){t(""!==e?()=>{const t=e.toUpperCase();for(var o=[],i=0;i<=this[a].length-1;i++)if(this[a][i][l].indexOf(t)>-1&&o.push(this[a][i]),i==this[a].length-1){this[s]=o;break}}:()=>{this[s]=this[a]})},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setData(res,dataRes){eval("this."+dataRes+"Loading = false"),this[dataRes]=res.data?res.data:res},getDataTable(e){(this.selectedAgencia.id||0!=this.selectedAgenciaDestino.length)&&(this.loading=!0,e&&(this.pagination=e.pagination),this.$refs.methods.getData("/mmovimientos","setDataTable","guias",{headers:{agencia:this.selectedAgencia.id?this.selectedAgencia.id:"",cliente_orig:this.selectedCliente.id?this.selectedCliente.id:"",agencia_dest:this.selectedAgenciaDestino.id?this.selectedAgenciaDestino.id:this.selectedAgenciaDestino?this.selectedAgenciaDestino:"",desde:moment__WEBPACK_IMPORTED_MODULE_0___default()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:moment__WEBPACK_IMPORTED_MODULE_0___default()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),prefix_nro:this.selectedSerie.length<2?this.selectedSerie[0]:"",tipo:"GC",estatus_admin_ex:"A",estatus_oper:"C"==this.selectedTipo?"PR":"",include_zona:"S",order_by:this.pagination.sortBy,order_direction:this.pagination.descending?"DESC":"ASC"}}))},setDataTable(e,t){this[t]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.selected=this.guias,this.loading=!1},resetFilters(){this.guias=[],this.selected=[],this.selectedAgencia=[],this.selectedAgenciaDestino=[],this.selectedCliente=[],this.selectedTipo="O",this.selectedSerie=["44","55"],this.selectedReporte="GPA",this.fecha_desde=moment__WEBPACK_IMPORTED_MODULE_0___default()().format("DD/MM/YYYY"),this.fecha_hasta=moment__WEBPACK_IMPORTED_MODULE_0___default()().format("DD/MM/YYYY")},changeReporte(){switch(this.selectedAgenciaDestino=[],this.guias=[],this.selectedReporte){case"GPA":this.visibleColumns=["zona_dest"],this.pagination.sortBy="nro_documento";break;case"APZ":this.visibleColumns=[],this.pagination.sortBy=JSON.stringify([["cod_zona_dest","ASC"],["nro_documento","ASC"]]);break;case"MAD":this.visibleColumns=["zona_dest"],this.pagination.sortBy=JSON.stringify([["cod_agencia_dest","ASC"],["nro_documento","ASC"]]);break;default:break}this.getDataTable()}}}},23759:(e,t,s)=>{"use strict";function a(e,t,s,a,l,o){return null}s.d(t,{Z:()=>c});var l=s(80589),o=s(5474),i=s(48825);const n={setup(){const e=(0,i.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,o.api.get(e,a).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,o.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,o.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,o.api["delete"](e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,o.api.post(e,t,a).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=s(74260);const d=(0,r.Z)(n,[["render",a]]),c=d},3868:(e,t,s)=>{"use strict";function a(e,t,s,a,l,o){return null}s.d(t,{Z:()=>c});var l=s(48825),o=s(11488),i=s.n(o);const n={name:"rules",setup(){(0,l.Z)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==i()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==i()(e,"HH:mm:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var r=s(74260);const d=(0,r.Z)(n,[["render",a]]),c=d},39798:(e,t,s)=>{"use strict";s.d(t,{Z:()=>_});var a=s(83673);const l={id:"WebViewer",ref:"viewer",style:{width:"100%",height:"100%"}};function o(e,t,s,o,i,n){return(0,a.wg)(),(0,a.iD)("div",l,null,512)}s(80812),s(76105),s(15123),s(98685),s(12396);var i=s(61959),n=s(163),r=s.n(n);const d={name:"webViewer",data:function(){return{}},setup(){const e=(0,i.iH)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),s=t.length,a=new Uint8Array(s);for(let l=0;l<s;++l)a[l]=t.charCodeAt(l);return new Blob([a],{type:"application/pdf"})},showpdf(e,t){const s="https://scen.rcsexpress.com/webViewer";r()({path:s,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((s=>{s.UI.disableElements(["panToolButton"]),s.UI.disableElements(["textSelectButton"]),s.UI.setHeaderItems((e=>{e.push({type:"actionButton",img:"https://i.ibb.co/cr5CYSB/2.png",onClick:()=>{s.downloadPdf()}}),e.push({type:"actionButton",img:"https://i.ibb.co/3RdScYv/1.png",onClick:()=>{1==t?s.print():this.$emit("printPdf")}}),e.push({type:"actionButton",img:"https://i.ibb.co/qJqLZTd/close.png",onClick:()=>{this.$emit("closePdf")}})})),s.UI.loadDocument(this.base64ToBlob(e),{filename:"REPORTE SCEN.pdf"}),s.UI.setLanguage("es")}))}}};var c=s(74260);const u=(0,c.Z)(d,[["render",o]]),_=u},53641:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>ke});var a=s(83673),l=s(62323);const o={class:"row",style:{"text-align":"center"}},i={class:"col-md-6 col-xs-12 pcform",style:{"margin-bottom":"10px"}},n=(0,a.Uk)(" Sin resultados "),r={class:"col-md-6 col-xs-12",style:{"margin-bottom":"10px"}},d=(0,a.Uk)(" Sin resultados "),c={class:"col-md-6 col-xs-12 pcform",style:{"margin-bottom":"10px"}},u=(0,a.Uk)(" Sin resultados "),_={class:"col-md-6 col-xs-12",style:{"margin-bottom":"10px"}},m=(0,a.Uk)(" Sin resultados "),p={class:"col-md-6 col-xs-12 pcform",style:{"margin-bottom":"10px"}},g={class:"col-md-5 col-xs-12",style:{"margin-bottom":"10px"}},h={class:"col-md-1 col-xs-12",style:{"margin-bottom":"10px"}},f={class:"row justify-center items-center content-center"},b={class:"q-pa-md row col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"left","text-align":"center"}},w=(0,a._)("div",{class:"row align-center justify-center"},[(0,a._)("p",{style:{"font-size":"25px","text-align":"left","margin-bottom":"10px"},class:"text-secondary col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 movilTitle"},[(0,a._)("strong",null,"RELACIÓN DE DESPACHO POR AGENCIA")])],-1),D={key:0,class:"col-md-4 col-xs-12 selectMobile2 cardMargin",style:{"margin-bottom":"10px"}},y=(0,a.Uk)(" Sin resultados "),j={key:1,class:"col-md-4 col-xs-12 selectMobile2 cardMargin",style:{"margin-bottom":"10px"}},x=(0,a.Uk)(" Sin resultados "),v={class:"col-md-4 col-xs-12 selectMobile2 cardMargin"},A=(0,a.Uk)(" Sin resultados "),E={class:"col-md-4 col-xs-12 selectMobile2 cardMargin"},k=(0,a.Uk)(" Sin resultados "),W={class:"col-md-2 col-xs-12 cardMargin selectMobile2"},M={class:"col-md-2 col-xs-12 selectMobile2 cardMargin"},P={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 selectMobile2 cardMargin"},S=(0,a.Uk)("GENERAL POR AGENCIA"),I=(0,a.Uk)("AGRUPADO POR ZONA"),V=(0,a.Uk)("MULTIPLES AGENCIA DESTINO"),U=(0,a.Uk)("MULTIPLES AGENCIA AGRUPADO"),C={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 selectMobile2",style:{"padding-right":"25px"}},O={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 selectMobile2 cardMargin"},T={class:"col-md-1 col-xl-1 col-lg-1 col-xs-6 col-sm-6",style:{"padding-right":"10px"}},z=(0,a.Uk)("Limpiar Filtros"),R=(0,a.Uk)("Imprimir Reporte"),q={class:"q-pa-md col-md-12 col-xs-12 justify-center cardMargin"},Z={class:"text-left"},L=(0,a._)("strong",null,(0,l.zw)("Zona Destino: "),-1),B={class:"text-left"},Y=(0,a._)("strong",null,(0,l.zw)("Zona Destino: "),-1),N={class:"text-left"},$=(0,a._)("strong",null,(0,l.zw)("Agencia Destino: "),-1),K={class:"text-left"},F=(0,a._)("strong",null,(0,l.zw)("Agencia Destino: "),-1),Q={key:0},G={key:1},H={key:2};function J(e,t,s,J,X,ee){const te=(0,a.up)("q-item-section"),se=(0,a.up)("q-item"),ae=(0,a.up)("q-icon"),le=(0,a.up)("q-select"),oe=(0,a.up)("q-btn-toggle"),ie=(0,a.up)("q-checkbox"),ne=(0,a.up)("q-btn"),re=(0,a.up)("q-form"),de=(0,a.up)("q-card-section"),ce=(0,a.up)("q-card"),ue=(0,a.up)("q-dialog"),_e=(0,a.up)("q-date"),me=(0,a.up)("q-popup-proxy"),pe=(0,a.up)("q-input"),ge=(0,a.up)("q-tooltip"),he=(0,a.up)("q-option-group"),fe=(0,a.up)("q-inner-loading"),be=(0,a.up)("q-th"),we=(0,a.up)("q-tr"),De=(0,a.up)("q-td"),ye=(0,a.up)("q-table"),je=(0,a.up)("methods"),xe=(0,a.up)("rules-vue"),ve=(0,a.up)("q-page"),Ae=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(ve,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(ue,{modelValue:J.dialog,"onUpdate:modelValue":t[14]||(t[14]=e=>J.dialog=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(ce,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(de,null,{default:(0,a.w5)((()=>[(0,a.Wm)(re,{class:"q-gutter-md",onSubmit:t[13]||(t[13]=t=>e.pdfView=!0)},{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a._)("div",i,[(0,a.Wm)(le,{options:X.agentesSelected,onFilter:t[0]||(t[0]=(e,t)=>ee.filterArray(e,t,"agentesSelected","agentes","agente_desc")),"option-label":"agente_desc","option-value":"id",modelValue:X.selectedAgente,"onUpdate:modelValue":t[1]||(t[1]=e=>X.selectedAgente=e),outlined:"",label:"Chofer"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(se,null,{default:(0,a.w5)((()=>[(0,a.Wm)(te,{class:"text-grey"},{default:(0,a.w5)((()=>[n])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(ae,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",r,[(0,a.Wm)(le,{options:X.unidadesSelected,onFilter:t[2]||(t[2]=(e,t)=>ee.filterArray(e,t,"unidadesSelected","unidades","unidad_desc")),"option-label":"unidad_desc","option-value":"id",modelValue:X.selectedUnidad,"onUpdate:modelValue":t[3]||(t[3]=e=>X.selectedUnidad=e),outlined:"",label:"Vehiculo"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(se,null,{default:(0,a.w5)((()=>[(0,a.Wm)(te,{class:"text-grey"},{default:(0,a.w5)((()=>[d])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(ae,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",c,[(0,a.Wm)(le,{options:X.ayudantesSelected,onFilter:t[4]||(t[4]=(e,t)=>ee.filterArray(e,t,"ayudantesSelected","ayudantes","nb_ayudante")),"option-label":"nb_ayudante","option-value":"id",modelValue:X.selectedAyudante,"onUpdate:modelValue":t[5]||(t[5]=e=>X.selectedAyudante=e),outlined:"",label:"Ayudante"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(se,null,{default:(0,a.w5)((()=>[(0,a.Wm)(te,{class:"text-grey"},{default:(0,a.w5)((()=>[u])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(ae,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",_,[(0,a.Wm)(le,{options:X.receptoresSelected,onFilter:t[6]||(t[6]=(e,t)=>ee.filterArray(e,t,"receptoresSelected","receptores","nb_receptor")),"option-label":"nb_receptor","option-value":"id",modelValue:X.selectedReceptor,"onUpdate:modelValue":t[7]||(t[7]=e=>X.selectedReceptor=e),outlined:"",label:"Receptor"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(se,null,{default:(0,a.w5)((()=>[(0,a.Wm)(te,{class:"text-grey"},{default:(0,a.w5)((()=>[m])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(ae,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",p,[(0,a.Wm)(oe,{modelValue:X.selectedVisible,"onUpdate:modelValue":[t[8]||(t[8]=e=>X.selectedVisible=e),t[9]||(t[9]=()=>{})],spread:"",class:"my-custom-toggle",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"black",options:X.visible},null,8,["modelValue","options"])]),(0,a._)("div",g,[(0,a.Wm)(oe,{modelValue:X.selectedNeta,"onUpdate:modelValue":[t[10]||(t[10]=e=>X.selectedNeta=e),t[11]||(t[11]=()=>{})],spread:"",class:"my-custom-toggle",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"black",options:X.cargaNeta},null,8,["modelValue","options"])]),(0,a._)("div",h,[(0,a.Wm)(ie,{modelValue:X.selectedDolar,"onUpdate:modelValue":t[12]||(t[12]=e=>X.selectedDolar=e),label:"$",color:"primary","left-label":""},null,8,["modelValue"])])]),(0,a._)("div",f,[(0,a.Wm)(ne,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(ne,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[Ae]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",b,[w,"MAD"==X.selectedReporte?((0,a.wg)(),(0,a.iD)("div",D,[(0,a.Wm)(le,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:X.agenciasSelected,onFilter:t[15]||(t[15]=(e,t)=>ee.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","fill-input":"",multiple:"","use-chips":"","emit-value":"","map-options":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:X.selectedAgenciaDestino,"onUpdate:modelValue":[t[16]||(t[16]=e=>X.selectedAgenciaDestino=e),t[17]||(t[17]=e=>ee.getDataTable())],outlined:"",standout:"",label:"Agencia Destino"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(se,null,{default:(0,a.w5)((()=>[(0,a.Wm)(te,{class:"text-grey"},{default:(0,a.w5)((()=>[y])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(ae,{name:"search"})])),_:1},8,["options","modelValue"])])):((0,a.wg)(),(0,a.iD)("div",j,[(0,a.Wm)(le,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:X.agenciasSelected,onFilter:t[18]||(t[18]=(e,t)=>ee.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:X.selectedAgenciaDestino,"onUpdate:modelValue":[t[19]||(t[19]=e=>X.selectedAgenciaDestino=e),t[20]||(t[20]=e=>ee.getDataTable())],outlined:"",standout:"",label:"Agencia Destino"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(se,null,{default:(0,a.w5)((()=>[(0,a.Wm)(te,{class:"text-grey"},{default:(0,a.w5)((()=>[x])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(ae,{name:"search"})])),_:1},8,["options","modelValue"])])),(0,a._)("div",v,[(0,a.Wm)(le,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:X.agenciasSelected,onFilter:t[21]||(t[21]=(e,t)=>ee.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:X.selectedAgencia,"onUpdate:modelValue":[t[22]||(t[22]=e=>X.selectedAgencia=e),t[23]||(t[23]=e=>{ee.getDataTable(),this.selectedCliente=[],this.clientesLoading=!0,this.$refs.methods.getData("/clientes","setData","clientes",{headers:{agencia:X.selectedAgencia.id,activo:"S"}})})],outlined:"",standout:"",label:"Agencia Origen"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(se,null,{default:(0,a.w5)((()=>[(0,a.Wm)(te,{class:"text-grey"},{default:(0,a.w5)((()=>[A])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(ae,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",E,[(0,a.Wm)(le,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:X.clientesSelected,onFilter:t[24]||(t[24]=(e,t)=>ee.filterArray(e,t,"clientesSelected","clientes","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"",loading:X.clientesLoading,disable:X.clientesLoading,"input-debounce":"0","option-label":"nb_cliente","option-value":"id",modelValue:X.selectedCliente,"onUpdate:modelValue":[t[25]||(t[25]=e=>X.selectedCliente=e),t[26]||(t[26]=e=>ee.getDataTable())],outlined:"",standout:"",label:"Cliente"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(se,null,{default:(0,a.w5)((()=>[(0,a.Wm)(te,{class:"text-grey"},{default:(0,a.w5)((()=>[k])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(ae,{name:"search"})])),_:1},8,["options","loading","disable","modelValue"])]),(0,a._)("div",W,[(0,a.Wm)(pe,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:X.fecha_desde,"onUpdate:modelValue":[t[29]||(t[29]=e=>X.fecha_desde=e),t[30]||(t[30]=e=>ee.getDataTable())],"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.w5)((()=>[(0,a.Wm)(ae,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(me,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(_e,{modelValue:X.fecha_desde,"onUpdate:modelValue":[t[27]||(t[27]=e=>X.fecha_desde=e),t[28]||(t[28]=e=>{this.$refs.qDateProxy.hide(),ee.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",M,[(0,a.Wm)(pe,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:X.fecha_hasta,"onUpdate:modelValue":[t[33]||(t[33]=e=>X.fecha_hasta=e),t[34]||(t[34]=e=>ee.getDataTable())],"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.w5)((()=>[(0,a.Wm)(ae,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(me,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(_e,{modelValue:X.fecha_hasta,"onUpdate:modelValue":[t[31]||(t[31]=e=>X.fecha_hasta=e),t[32]||(t[32]=e=>{this.$refs.qDateProxy.hide(),ee.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",P,[(0,a.Wm)(oe,{modelValue:X.selectedReporte,"onUpdate:modelValue":[t[35]||(t[35]=e=>X.selectedReporte=e),t[36]||(t[36]=e=>ee.changeReporte())],spread:"",class:"my-custom-toggle",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"black",options:X.reportes},{one:(0,a.w5)((()=>[(0,a.Wm)(ge,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[S])),_:1})])),two:(0,a.w5)((()=>[(0,a.Wm)(ge,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[I])),_:1})])),three:(0,a.w5)((()=>[(0,a.Wm)(ge,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[V])),_:1})])),four:(0,a.w5)((()=>[(0,a.Wm)(ge,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[U])),_:1})])),_:1},8,["modelValue","options"])]),(0,a._)("div",C,[(0,a.Wm)(he,{modelValue:X.selectedSerie,"onUpdate:modelValue":[t[37]||(t[37]=e=>X.selectedSerie=e),t[38]||(t[38]=e=>ee.getDataTable())],options:X.optionSerie,color:"primary",type:"checkbox",inline:""},null,8,["modelValue","options"])]),(0,a._)("div",O,[(0,a.Wm)(oe,{modelValue:X.selectedTipo,"onUpdate:modelValue":[t[39]||(t[39]=e=>X.selectedTipo=e),t[40]||(t[40]=e=>ee.getDataTable())],spread:"",class:"my-custom-toggle",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"black",options:X.tipoReporte},null,8,["modelValue","options"])]),(0,a._)("div",T,[(0,a.Wm)(ne,{dense:"",color:"primary",padding:"sm",round:"",style:{"margin-right":"10px"},onClick:t[41]||(t[41]=e=>ee.resetFilters())},{default:(0,a.w5)((()=>[(0,a.Wm)(ae,{size:"25px",name:"filter_alt_off",color:"white"}),(0,a.Wm)(ge,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[z])),_:1})])),_:1}),(0,a.Wm)(ne,{dense:"",round:"",color:"primary",padding:"sm",onClickCapture:t[42]||(t[42]=e=>this.dialog=!0),disabled:!(this.guias.length>0)},{default:(0,a.w5)((()=>[(0,a.Wm)(ae,{size:"25px",name:"print",color:"white"}),(0,a.Wm)(ge,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[R])),_:1})])),_:1},8,["disabled"])])]),(0,a._)("div",q,[(0,a.Wm)(ye,{rows:X.guias,columns:X.columns,loading:J.loading,class:"tableHeight",selection:"multiple","binary-state-sort":"",separator:J.separator,"row-key":"id",grid:e.$q.screen.xs,"rows-per-page-options":[0],pagination:X.pagination,style:{width:"100%",height:"520px"},"visible-columns":X.visibleColumns,selected:X.selected,"onUpdate:selected":t[43]||(t[43]=e=>X.selected=e),"onUpdate:pagination":t[44]||(t[44]=e=>X.pagination=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(fe,{showing:"",color:"primary",class:"loading"})])),header:(0,a.w5)((e=>[(0,a.Wm)(we,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(be,{"auto-width":""},{default:(0,a.w5)((()=>[(0,a.Wm)(ie,{modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(t=>((0,a.wg)(),(0,a.j4)(be,{key:t.name,props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,a.w5)((e=>["APZ"==X.selectedReporte&&-1*e.rowIndex==0?((0,a.wg)(),(0,a.j4)(we,{key:0,props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(De,{colspan:"100%",style:{"font-size":"20px",color:"#283593"}},{default:(0,a.w5)((()=>[(0,a._)("div",Z,[L,(0,a.Uk)(" "+(0,l.zw)(this.guias[e.rowIndex].zonas_dest?this.guias[e.rowIndex].zonas_dest.nb_zona:"SIN ZONA DEFINIDA"),1)])])),_:2},1024)])),_:2},1032,["props"])):"APZ"==X.selectedReporte&&(this.guias[e.rowIndex].zonas_dest?this.guias[e.rowIndex].zonas_dest.nb_zona:"SIN ZONA DEFINIDA")!=(this.guias[e.rowIndex-1].zonas_dest?this.guias[e.rowIndex-1].zonas_dest.nb_zona:"SIN ZONA DEFINIDA")?((0,a.wg)(),(0,a.j4)(we,{key:1,props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(De,{colspan:"100%",style:{"font-size":"20px",color:"#283593"}},{default:(0,a.w5)((()=>[(0,a._)("div",B,[Y,(0,a.Uk)(" "+(0,l.zw)(this.guias[e.rowIndex].zonas_dest?this.guias[e.rowIndex].zonas_dest.nb_zona:"SIN ZONA DEFINIDA"),1)])])),_:2},1024)])),_:2},1032,["props"])):(0,a.kq)("",!0),"MAD"==X.selectedReporte&&-1*e.rowIndex==0?((0,a.wg)(),(0,a.j4)(we,{key:2,props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(De,{colspan:"100%",style:{"font-size":"20px",color:"#283593"}},{default:(0,a.w5)((()=>[(0,a._)("div",N,[$,(0,a.Uk)(" "+(0,l.zw)(this.findIndex("agencias",this.guias[e.rowIndex].cod_agencia_dest,"nb_agencia")),1)])])),_:2},1024)])),_:2},1032,["props"])):"MAD"==X.selectedReporte&&this.guias[e.rowIndex].cod_agencia_dest!=this.guias[e.rowIndex-1].cod_agencia_dest?((0,a.wg)(),(0,a.j4)(we,{key:3,props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(De,{colspan:"100%",style:{"font-size":"20px",color:"#283593"}},{default:(0,a.w5)((()=>[(0,a._)("div",K,[F,(0,a.Uk)(" "+(0,l.zw)(this.findIndex("agencias",this.guias[e.rowIndex].cod_agencia_dest,"nb_agencia")),1)])])),_:2},1024)])),_:2},1032,["props"])):(0,a.kq)("",!0),(0,a.Wm)(we,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(De,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ie,{modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(t=>((0,a.wg)(),(0,a.j4)(De,{key:t.name,props:e},{default:(0,a.w5)((()=>["cod_agencia"==t.name?((0,a.wg)(),(0,a.iD)("div",Q,(0,l.zw)(this.findSiglas("agencias",e.row.cod_agencia)),1)):"cod_agencia_dest"==t.name?((0,a.wg)(),(0,a.iD)("div",G,(0,l.zw)(this.findSiglas("agencias",e.row.cod_agencia_dest)),1)):((0,a.wg)(),(0,a.iD)("div",H,(0,l.zw)(t.value),1))])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),_:1},8,["rows","columns","loading","separator","grid","pagination","visible-columns","selected"])]),(0,a.Wm)(je,{ref:"methods",onSetData:ee.setData,onGetDataTable:ee.getDataTable,onSetDataTable:ee.setDataTable,onSetDataPermisos:ee.setDataPermisos},null,8,["onSetData","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,a.Wm)(xe,{ref:"rulesVue"},null,512)])),_:1})}var X=s(67404),ee=s(74260),te=s(24379),se=s(46778),ae=s(10151),le=s(25589),oe=s(68689),ie=s(72448),ne=s(83414),re=s(52035),de=s(24554),ce=s(38761),ue=s(65735),_e=s(48240),me=s(64689),pe=s(83944),ge=s(85626),he=s(5363),fe=s(28758),be=s(96023),we=s(66941),De=s(18186),ye=s(92414),je=s(83884),xe=s(60677),ve=s(7518),Ae=s.n(ve);const Ee=(0,ee.Z)(X.Z,[["render",J]]),ke=Ee;Ae()(X.Z,"components",{QPage:te.Z,QDialog:se.Z,QCard:ae.Z,QCardSection:le.Z,QForm:oe.Z,QSelect:ie.Z,QItem:ne.Z,QItemSection:re.Z,QIcon:de.Z,QBtnToggle:ce.Z,QCheckbox:ue.Z,QBtn:_e.Z,QInput:me.Z,QPopupProxy:pe.Z,QDate:ge.Z,QTooltip:he.Z,QOptionGroup:fe.Z,QTable:be.Z,QInnerLoading:we.Z,QTr:De.Z,QTh:ye.Z,QTd:je.Z}),Ae()(X.Z,"directives",{ClosePopup:xe.Z})},46700:(e,t,s)=>{var a={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function l(e){var t=o(e);return s(t)}function o(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=o,e.exports=l,l.id=46700}}]);