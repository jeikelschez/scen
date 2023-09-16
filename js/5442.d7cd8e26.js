(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[5442],{23759:(e,t,s)=>{"use strict";function o(e,t,s,o,l,a){return null}s.d(t,{Z:()=>c});var l=s(80589),a=s(5474),i=s(48825);const n={setup(){const e=(0,i.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,a.api.get(e,o).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,a.api.post(e,t,o).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,a.api.put(e,t,o).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,a.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,a.api.post(e,t,o).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=s(74260);const d=(0,r.Z)(n,[["render",o]]),c=d},64379:(e,t,s)=>{"use strict";function o(e,t,s,o,l,a){return null}s.d(t,{Z:()=>c});var l=s(48825),a=s(11488),i=s.n(a);const n={name:"rules",setup(){(0,l.Z)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==i()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==i()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var r=s(74260);const d=(0,r.Z)(n,[["render",o]]),c=d},8500:(e,t,s)=>{"use strict";s.d(t,{Z:()=>m});var o=s(83673);const l={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function a(e,t,s,a,i,n){return(0,o.wg)(),(0,o.iD)("div",l,null,512)}s(80812),s(15123),s(99802),s(42773),s(4260),s(26887),s(75221);var i=s(61959),n=s(163),r=s.n(n);const d={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,i.iH)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),s=t.length,o=new Uint8Array(s);for(let l=0;l<s;++l)o[l]=t.charCodeAt(l);return new Blob([o],{type:"application/pdf"})},async until(e){const t=s=>{e()?s():setTimeout((e=>t(s)),400)};return new Promise(t)},showpdf(e,t,s=!1,o=!0,l){const a="https://scen.rcsexpress.com/webViewer";r()({path:a,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((a=>{a.UI.disableElements(["panToolButton"]),a.UI.disableElements(["textSelectButton"]),a.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{a.UI.downloadPdf()}}),e.push({type:"actionButton",title:"Exportar Excel",img:"../../icons/icone-excel-grise.png",onClick:()=>{this.$emit("exportExcel")}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{s&&(this.$emit("printPdf"),await this.until((e=>1==this.confirmPrint)),!this.confirmPrint)||a.UI.print()}}),o&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),l?a.UI.loadDocument(this.base64ToBlob(l),{filename:"REPORTE SCEN.pdf"}):a.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/pdfreports/loadPDF/${e}`),a.UI.setLanguage("es"),a.UI.useEmbeddedPrint(!0),setTimeout((()=>{a.UI.setZoomLevel(t||.7)}),1500)}))}}};var c=s(74260);const u=(0,c.Z)(d,[["render",a]]),m=u},81434:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>X});var o=s(83673);const l={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"margin-left":"20px"}},a={class:"col-md-4 col-xs-12 q-pa-sm justify-center"},i=(0,o._)("div",{class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},[(0,o._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},[(0,o._)("p",{style:{"font-size":"25px","margin-bottom":"25px"},class:"text-secondary"},[(0,o._)("strong",null,"REPORTE DE COSTOS")])])],-1),n={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-top":"-25px"}},r={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},d={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},c=(0,o.Uk)(" Sin resultados "),u={class:"col-md-2 col-xl-2 col-lg-2 col-xs-2 col-sm-2 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},m={class:"col-md-10 col-xl-10 col-lg-10 col-xs-10 col-sm-10 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},p=(0,o.Uk)(" Sin resultados "),h=(0,o.Uk)(" Sin resultados "),g={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},f=(0,o.Uk)(" Sin resultados "),j={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},b=(0,o.Uk)(" Sin resultados "),y=(0,o._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},[(0,o._)("p",{style:{"font-size":"25px","margin-bottom":"15px"},class:"text-secondary"},[(0,o._)("strong",null,"Periodo Consultado")])],-1),v={class:"col-md-6 col-xs-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},x={class:"col-md-6 col-xs-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},D={class:"col-md-10 col-xl-10 col-lg-10 col-xs-10 col-sm-10 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},w={class:"col-md-2 col-xl-2 col-lg-2 col-xs-2 col-sm-2 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},_={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},T={class:"q-pa-md col-md-8 col-xs-12 q-gutter-y-md justify-center"};function V(e,t,s,V,A,k){const S=(0,o.up)("q-select"),E=(0,o.up)("q-item-section"),P=(0,o.up)("q-item"),C=(0,o.up)("q-icon"),R=(0,o.up)("q-btn-toggle"),O=(0,o.up)("q-date"),U=(0,o.up)("q-popup-proxy"),I=(0,o.up)("q-input"),z=(0,o.up)("q-checkbox"),M=(0,o.up)("q-btn"),$=(0,o.up)("webViewer"),q=(0,o.up)("q-inner-loading"),W=(0,o.up)("methods"),Z=(0,o.up)("rules-vue"),N=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(N,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",l,[(0,o._)("div",a,[i,(0,o._)("div",n,[(0,o._)("div",r,[(0,o.Wm)(S,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.tipoReporte,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",modelValue:A.selectedTipo,"onUpdate:modelValue":[t[0]||(t[0]=e=>A.selectedTipo=e),t[1]||(t[1]=e=>k.pdfChange(!0))],outlined:"",standout:"",label:"Tipo de Reporte"},null,8,["options","modelValue"])]),(0,o._)("div",d,[(0,o.Wm)(S,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.agenciasSelected,onFilter:t[2]||(t[2]=(e,t)=>k.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:A.selectedAgencia,"onUpdate:modelValue":[t[3]||(t[3]=e=>A.selectedAgencia=e),t[4]||(t[4]=e=>{this.selectedAgente=[],this.agentes=[],this.$refs.methods.getData("/agentes","setData","agentes",{headers:{agencia:this.selectedAgencia.id}})})],outlined:"",standout:"",label:"Agencia"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"text-grey"},{default:(0,o.w5)((()=>[c])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",u,[(0,o.Wm)(R,{modelValue:A.selectedTipoT,"onUpdate:modelValue":t[5]||(t[5]=e=>A.selectedTipoT=e),spread:"",class:"my-custom-toggle",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"black",options:A.tipo},null,8,["modelValue","options"])]),(0,o._)("div",m,["I"==A.selectedTipoT?((0,o.wg)(),(0,o.j4)(S,{key:0,rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.agentesSelected,onFilter:t[6]||(t[6]=(e,t)=>k.filterArray(e,t,"agentesSelected","agentes","persona_responsable")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"persona_responsable","option-value":"id",modelValue:A.selectedAgente,"onUpdate:modelValue":t[7]||(t[7]=e=>A.selectedAgente=e),outlined:"",standout:"",label:"Agente"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"text-grey"},{default:(0,o.w5)((()=>[p])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"])):((0,o.wg)(),(0,o.j4)(S,{key:1,rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.proveedoresSelected,onFilter:t[8]||(t[8]=(e,t)=>k.filterArray(e,t,"proveedoresSelected","proveedores","nb_proveedor")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_proveedor","option-value":"id",modelValue:A.selectedProveedor,"onUpdate:modelValue":t[9]||(t[9]=e=>A.selectedProveedor=e),outlined:"",standout:"",label:"Proveedor"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"text-grey"},{default:(0,o.w5)((()=>[h])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"]))]),(0,o._)("div",g,[(0,o.Wm)(S,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.unidadesSelected,onFilter:t[10]||(t[10]=(e,t)=>k.filterArray(e,t,"unidadesSelected","unidades","unidad_desc")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"unidad_desc","option-value":"id",modelValue:A.selectedUnidad,"onUpdate:modelValue":t[11]||(t[11]=e=>A.selectedUnidad=e),outlined:"",standout:"",label:"Vehiculo"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"text-grey"},{default:(0,o.w5)((()=>[f])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",j,[(0,o.Wm)(S,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.ayudantesSelected,onFilter:t[12]||(t[12]=(e,t)=>k.filterArray(e,t,"ayudantesSelected","ayudantes","nb_ayudante")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_ayudante","option-value":"id",modelValue:A.selectedAyudante,"onUpdate:modelValue":t[13]||(t[13]=e=>A.selectedAyudante=e),outlined:"",standout:"",label:"Ayudante"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"text-grey"},{default:(0,o.w5)((()=>[b])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"])]),y,(0,o._)("div",v,[(0,o.Wm)(I,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:A.fecha_desde,"onUpdate:modelValue":t[16]||(t[16]=e=>A.fecha_desde=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{modelValue:A.fecha_desde,"onUpdate:modelValue":[t[14]||(t[14]=e=>A.fecha_desde=e),t[15]||(t[15]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",x,[(0,o.Wm)(I,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:A.fecha_hasta,"onUpdate:modelValue":t[19]||(t[19]=e=>A.fecha_hasta=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{modelValue:A.fecha_hasta,"onUpdate:modelValue":[t[17]||(t[17]=e=>A.fecha_hasta=e),t[18]||(t[18]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",D,[(0,o.Wm)(R,{modelValue:A.selectedNeta,"onUpdate:modelValue":t[20]||(t[20]=e=>A.selectedNeta=e),spread:"",class:"my-custom-toggle",rounded:"",unelevated:"",disable:"CTP"!=A.selectedTipo.value,"toggle-color":"primary",color:"white","text-color":"black",options:A.cargaNeta},null,8,["modelValue","disable","options"])]),(0,o._)("div",w,[(0,o.Wm)(z,{modelValue:A.selectedDolar,"onUpdate:modelValue":t[21]||(t[21]=e=>A.selectedDolar=e),label:"$",disable:"CTP"!=A.selectedTipo.value&&"CTA"!=A.selectedTipo.value&&"RVV"!=A.selectedTipo.value,color:"primary","left-label":""},null,8,["modelValue","disable"])]),(0,o._)("div",_,[(0,o.Wm)(M,{rounded:"",label:"Generar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"input",style:{"margin-right":"30px"},onClick:t[22]||(t[22]=e=>k.pdfChange(!1))}),(0,o.Wm)(M,{rounded:"",label:"Limpiar",color:"primary",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"filter_alt_off",onClick:t[23]||(t[23]=e=>k.resetFilters())})])])]),(0,o._)("div",T,[1==A.pdf?((0,o.wg)(),(0,o.j4)($,{key:0,ref:"webViewer",style:{width:"960px",height:"620px","max-width":"960px"}},null,512)):(0,o.kq)("",!0),(0,o.Wm)(q,{showing:V.loading,color:"primary",class:"loading"},null,8,["showing"])])]),(0,o.Wm)(W,{ref:"methods",onSetData:k.setData,onSetDataPermisos:k.setDataPermisos},null,8,["onSetData","onSetDataPermisos"]),(0,o.Wm)(Z,{ref:"rulesVue"},null,512)])),_:1})}var A=s(61959),k=s(64379),S=s(5474),E=s(11488),P=s.n(E),C=s(48825),R=s(80589),O=s(23759),U=s(8500);const I={components:{methods:O.Z,webViewer:U.Z,rulesVue:k.Z},data(){return{tipo:[{label:"I",value:"I"},{label:"E",value:"E"}],cargaNeta:[{label:"PESO KGS",value:"K",slot:"one"},{label:"PESO NETO",value:"N",slot:"two"}],tipoReporte:[{label:"RESUMEN DE COSTOS DE TRANSPORTE",value:"RCT",zoom:1.3},{label:"COSTOS DE TRANSPORTE POR RANGO DE FECHAS",value:"CTR",zoom:1.3},{label:"DISTRIBUCIÓN PRORRATEADA DEL COSTO DE TRANSPORTE POR CIUDAD",value:"DTC",zoom:1.3},{label:"DISTRIBUCIÓN REAL DEL COSTO DE TRANSPORTE POR CIUDAD",value:"DRC",zoom:1.3},{label:"COSTO DE TRANSPORTE POR AGENTE O PROVEEDORES",value:"CTP",zoom:1.3},{label:"COSTO DE TRANSPORTE POR AYUDANTE",value:"CTA",zoom:1},{label:"GUÍAS PENDIENTES POR ASOCIAR COSTOS DE TRANSPORTE",value:"GPC",zoom:1.3},{label:"REPORTE DE VIAJES POR VEHÍCULO",value:"RVV",zoom:1}],pdf:!0,reportValue:"",selectedNeta:"K",selectedTipoT:"I",selectedDolar:!1,selectedTipo:[],agencias:[],agentes:[],proveedores:[],unidades:[],ayudantes:[],agenciasSelected:[],selectedAgencia:[],agentesSelected:[],selectedAgente:[],unidadesSelected:[],selectedUnidad:[],proveedoresSelected:[],selectedProveedor:[],ayudantesSelected:[],selectedAyudante:[],fecha_desde:P()().format("DD/MM/YYYY"),fecha_hasta:P()().format("DD/MM/YYYY")}},setup(){(0,C.Z)();return{loading:(0,A.iH)(!1),separator:(0,A.iH)("vertical"),deletePopup:(0,A.iH)(!1),dialog:(0,A.iH)(!1),pdfView:(0,A.iH)(!0)}},mounted(){this.pdfPrint(),this.$emit("changeTitle","SCEN - Operaciones - Reporte de Costos",""),this.$refs.methods.getData("/agencias","setData","agencias"),this.$refs.methods.getData("/proveedores","setData","proveedores",{headers:{tipo_servicio:"TP",activo:"S"}}),this.$refs.methods.getData("/unidades","setData","unidades"),this.$refs.methods.getData("/ayudantes","setData","ayudantes",{headers:{activo:"S"}}),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:R.Z.getItem("tokenTraducido").usuario.roles.id,menu:"reportecostos"}})},methods:{filterArray(e,t,s,o,l){t(""!==e?()=>{const t=e.toUpperCase();for(var a=[],i=0;i<=this[o].length-1;i++)if(this[o][i][l].indexOf(t)>-1&&a.push(this[o][i]),i==this[o].length-1){this[s]=a;break}}:()=>{this[s]=this[o]})},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setData(e,t){this[t]=e.data?e.data:e},async pdfChange(e){e&&""==this.reportValue||(this.reportValue="",this.loading=!0,e||(this.reportValue=this.selectedTipo.value),this.pdf=!1,setTimeout((()=>{this.pdfPrint(),this.pdf=!0}),100))},pdfPrint(){var e={};if(e.fecha_desde=this.fecha_desde,e.fecha_hasta=this.fecha_hasta,e.agencia=this.selectedAgencia.id,e.dolar=this.selectedDolar,e.neta=this.selectedNeta,"CTP"==this.reportValue)if("I"==this.selectedTipoT){if(!this.selectedAgente.id)return this.$q.notify({message:"Debe seleccionar el Agente antes de generar el reporte...",color:"red"}),void(this.loading=!1);e.agente=this.selectedAgente.id,e.nombreAgente=this.selectedAgente.nb_agente+" - "+this.selectedAgente.persona_responsable}else{if(!this.selectedProveedor.id)return this.$q.notify({message:"Debe seleccionar el Proveedor antes de generar el reporte...",color:"red"}),void(this.loading=!1);e.proveedor=this.selectedProveedor.id,e.nombreProveedor=this.selectedProveedor.nb_proveedor}if("CTA"==this.reportValue){if(!this.selectedAyudante.id)return this.$q.notify({message:"Debe seleccionar el Ayudante antes de generar el reporte...",color:"red"}),void(this.loading=!1);e.ayudante=this.selectedAyudante.id,e.nombreAyudante=this.selectedAyudante.nb_ayudante}if("RVV"==this.reportValue){if(!this.selectedUnidad.id)return this.$q.notify({message:"Debe seleccionar el Transporte antes de generar el reporte...",color:"red"}),void(this.loading=!1);e.transporte=this.selectedUnidad.id,e.nombreTransporte=this.selectedUnidad.unidad_desc}S.api.get("/pdfreports/reporteCostos",{headers:{Authorization:`Bearer ${R.Z.getItem("token")}`,tipo:this.reportValue,data:JSON.stringify(e)}}).then((e=>{let t=this.reportValue?this.selectedTipo.zoom:.7;e.data.validDoc||(this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"}),t=.7),this.$refs.webViewer.showpdf(e.data.pdfPath,t,!1,!1),this.loading=!1})).catch((e=>{this.$q.notify({message:e.message,color:"red"}),this.loading=!1}))},resetFilters(){this.agentes=[],this.selectedTipo=[],this.selectedAgencia=[],this.selectedAgente=[],this.selectedAyudante=[],this.selectedProveedor=[],this.selectedUnidad=[],this.selectedNeta="K",this.selectedTipoT="I",this.selectedDolar=!1,this.fecha_desde=P()().format("DD/MM/YYYY"),this.fecha_hasta=P()().format("DD/MM/YYYY"),this.pdfChange(0)}}};var z=s(74260),M=s(24379),$=s(72448),q=s(83414),W=s(52035),Z=s(24554),N=s(38761),Y=s(64689),B=s(83944),F=s(85626),H=s(65735),L=s(48240),Q=s(66941),G=s(7518),K=s.n(G);const J=(0,z.Z)(I,[["render",V]]),X=J;K()(I,"components",{QPage:M.Z,QSelect:$.Z,QItem:q.Z,QItemSection:W.Z,QIcon:Z.Z,QBtnToggle:N.Z,QInput:Y.Z,QPopupProxy:B.Z,QDate:F.Z,QCheckbox:H.Z,QBtn:L.Z,QInnerLoading:Q.Z})},46700:(e,t,s)=>{var o={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function l(e){var t=a(e);return s(t)}function a(e){if(!s.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}l.keys=function(){return Object.keys(o)},l.resolve=a,e.exports=l,l.id=46700}}]);