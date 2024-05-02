(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[5448],{3759:(e,t,s)=>{"use strict";function o(e,t,s,o,l,a){return null}s.d(t,{Z:()=>c});var l=s(589),a=s(5474),i=s(8825);const n={setup(){const e=(0,i.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,a.api.get(e,o).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,a.api.post(e,t,o).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,a.api.put(e,t,o).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,a.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,o={headers:{}}){o.headers.Authorization=`Bearer ${l.Z.getItem("token")}`,a.api.post(e,t,o).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=s(4260);const d=(0,r.Z)(n,[["render",o]]),c=d},6479:(e,t,s)=>{"use strict";function o(e,t,s,o,l,a){return null}s.d(t,{Z:()=>c});var l=s(8825),a=s(1488),i=s.n(a);const n={name:"rules",setup(){(0,l.Z)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==i()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==i()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var r=s(4260);const d=(0,r.Z)(n,[["render",o]]),c=d},3599:(e,t,s)=>{"use strict";s.d(t,{Z:()=>m});var o=s(3673);const l={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function a(e,t,s,a,i,n){return(0,o.wg)(),(0,o.iD)("div",l,null,512)}s(812),s(8408),s(6887),s(5221);var i=s(1959),n=s(163),r=s.n(n);const d={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,i.iH)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),s=t.length,o=new Uint8Array(s);for(let l=0;l<s;++l)o[l]=t.charCodeAt(l);return new Blob([o],{type:"application/pdf"})},async until(e){const t=s=>{e()?s():setTimeout((e=>t(s)),400)};return new Promise(t)},showpdf(e,t,s=!1,o=!0,l){const a="https://scen.rcsexpress.com/webViewer";r()({path:a,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((a=>{a.UI.disableElements(["panToolButton"]),a.UI.disableElements(["textSelectButton"]),a.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{a.UI.downloadPdf()}}),e.push({type:"actionButton",title:"Exportar Excel",img:"../../icons/icone-excel-grise.png",onClick:()=>{this.$emit("exportExcel")}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{s&&(this.$emit("printPdf"),await this.until((e=>1==this.confirmPrint)),!this.confirmPrint)||a.UI.print()}}),o&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),l?a.UI.loadDocument(this.base64ToBlob(l),{filename:"REPORTE SCEN.pdf"}):a.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/pdfreports/loadPDF/${e}`),a.UI.setLanguage("es"),a.UI.useEmbeddedPrint(!0),setTimeout((()=>{a.UI.setZoomLevel(t||.7)}),2e3)}))}}};var c=s(4260);const u=(0,c.Z)(d,[["render",a]]),m=u},5103:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>X});var o=s(3673);const l={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"margin-left":"20px"}},a={class:"col-md-4 col-xs-12 q-pa-sm justify-center"},i=(0,o._)("div",{class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},[(0,o._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},[(0,o._)("p",{style:{"font-size":"25px","margin-bottom":"25px"},class:"text-secondary"},[(0,o._)("strong",null,"REPORTE DE COSTOS")])])],-1),n={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-top":"-25px"}},r={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},d={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},c=(0,o.Uk)(" Sin resultados "),u={class:"col-md-2 col-xl-2 col-lg-2 col-xs-2 col-sm-2 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},m={class:"col-md-10 col-xl-10 col-lg-10 col-xs-10 col-sm-10 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},p=(0,o.Uk)(" Sin resultados "),h=(0,o.Uk)(" Sin resultados "),g={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},f=(0,o.Uk)(" Sin resultados "),j={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile",style:{"align-self":"center","text-align":"center","margin-bottom":"15px"}},b=(0,o.Uk)(" Sin resultados "),y=(0,o._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},[(0,o._)("p",{style:{"font-size":"25px","margin-bottom":"15px"},class:"text-secondary"},[(0,o._)("strong",null,"Periodo Consultado")])],-1),v={class:"col-md-6 col-xs-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},x={class:"col-md-6 col-xs-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},D={class:"col-md-10 col-xl-10 col-lg-10 col-xs-10 col-sm-10 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},w={class:"col-md-2 col-xl-2 col-lg-2 col-xs-2 col-sm-2 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","margin-bottom":"25px"}},_={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},T={class:"q-pa-md col-md-8 col-xs-12 q-gutter-y-md justify-center"};function V(e,t,s,V,A,k){const S=(0,o.up)("q-select"),E=(0,o.up)("q-item-section"),P=(0,o.up)("q-item"),C=(0,o.up)("q-icon"),R=(0,o.up)("q-btn-toggle"),O=(0,o.up)("q-date"),U=(0,o.up)("q-popup-proxy"),I=(0,o.up)("q-input"),z=(0,o.up)("q-checkbox"),M=(0,o.up)("q-btn"),$=(0,o.up)("webViewer"),q=(0,o.up)("q-inner-loading"),W=(0,o.up)("methods"),Z=(0,o.up)("rules-vue"),N=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(N,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",l,[(0,o._)("div",a,[i,(0,o._)("div",n,[(0,o._)("div",r,[(0,o.Wm)(S,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.tipoReporte,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",modelValue:A.selectedTipo,"onUpdate:modelValue":[t[0]||(t[0]=e=>A.selectedTipo=e),t[1]||(t[1]=e=>k.pdfChange(!0))],outlined:"",standout:"",label:"Tipo de Reporte"},null,8,["options","modelValue"])]),(0,o._)("div",d,[(0,o.Wm)(S,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.agenciasSelected,onFilter:t[2]||(t[2]=(e,t)=>k.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:A.selectedAgencia,"onUpdate:modelValue":[t[3]||(t[3]=e=>A.selectedAgencia=e),t[4]||(t[4]=e=>{this.selectedAgente=[],this.agentes=[],this.$refs.methods.getData("/agentes","setData","agentes",{headers:{agencia:this.selectedAgencia.id}})})],outlined:"",standout:"",label:"Agencia"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"text-grey"},{default:(0,o.w5)((()=>[c])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",u,[(0,o.Wm)(R,{modelValue:A.selectedTipoT,"onUpdate:modelValue":t[5]||(t[5]=e=>A.selectedTipoT=e),spread:"",class:"my-custom-toggle",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"black",options:A.tipo},null,8,["modelValue","options"])]),(0,o._)("div",m,["I"==A.selectedTipoT?((0,o.wg)(),(0,o.j4)(S,{key:0,rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.agentesSelected,onFilter:t[6]||(t[6]=(e,t)=>k.filterArray(e,t,"agentesSelected","agentes","persona_responsable")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"persona_responsable","option-value":"id",modelValue:A.selectedAgente,"onUpdate:modelValue":t[7]||(t[7]=e=>A.selectedAgente=e),outlined:"",standout:"",label:"Agente"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"text-grey"},{default:(0,o.w5)((()=>[p])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"])):((0,o.wg)(),(0,o.j4)(S,{key:1,rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.proveedoresSelected,onFilter:t[8]||(t[8]=(e,t)=>k.filterArray(e,t,"proveedoresSelected","proveedores","nb_proveedor")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_proveedor","option-value":"id",modelValue:A.selectedProveedor,"onUpdate:modelValue":t[9]||(t[9]=e=>A.selectedProveedor=e),outlined:"",standout:"",label:"Proveedor"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"text-grey"},{default:(0,o.w5)((()=>[h])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"]))]),(0,o._)("div",g,[(0,o.Wm)(S,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.unidadesSelected,onFilter:t[10]||(t[10]=(e,t)=>k.filterArray(e,t,"unidadesSelected","unidades","unidad_desc")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"unidad_desc","option-value":"id",modelValue:A.selectedUnidad,"onUpdate:modelValue":t[11]||(t[11]=e=>A.selectedUnidad=e),outlined:"",standout:"",label:"Vehiculo"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"text-grey"},{default:(0,o.w5)((()=>[f])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",j,[(0,o.Wm)(S,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.ayudantesSelected,onFilter:t[12]||(t[12]=(e,t)=>k.filterArray(e,t,"ayudantesSelected","ayudantes","nb_ayudante")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_ayudante","option-value":"id",modelValue:A.selectedAyudante,"onUpdate:modelValue":t[13]||(t[13]=e=>A.selectedAyudante=e),outlined:"",standout:"",label:"Ayudante"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E,{class:"text-grey"},{default:(0,o.w5)((()=>[b])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"])]),y,(0,o._)("div",v,[(0,o.Wm)(I,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:A.fecha_desde,"onUpdate:modelValue":t[16]||(t[16]=e=>A.fecha_desde=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{modelValue:A.fecha_desde,"onUpdate:modelValue":[t[14]||(t[14]=e=>A.fecha_desde=e),t[15]||(t[15]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",x,[(0,o.Wm)(I,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:A.fecha_hasta,"onUpdate:modelValue":t[19]||(t[19]=e=>A.fecha_hasta=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(C,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{modelValue:A.fecha_hasta,"onUpdate:modelValue":[t[17]||(t[17]=e=>A.fecha_hasta=e),t[18]||(t[18]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",D,[(0,o.Wm)(R,{modelValue:A.selectedNeta,"onUpdate:modelValue":t[20]||(t[20]=e=>A.selectedNeta=e),spread:"",class:"my-custom-toggle",rounded:"",unelevated:"",disable:"CTP"!=A.selectedTipo.value,"toggle-color":"primary",color:"white","text-color":"black",options:A.cargaNeta},null,8,["modelValue","disable","options"])]),(0,o._)("div",w,[(0,o.Wm)(z,{modelValue:A.selectedDolar,"onUpdate:modelValue":t[21]||(t[21]=e=>A.selectedDolar=e),label:"$",disable:"CTP"!=A.selectedTipo.value&&"CTA"!=A.selectedTipo.value&&"RVV"!=A.selectedTipo.value,color:"primary","left-label":""},null,8,["modelValue","disable"])]),(0,o._)("div",_,[(0,o.Wm)(M,{rounded:"",label:"Generar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"input",style:{"margin-right":"30px"},onClick:t[22]||(t[22]=e=>k.pdfChange(!1))}),(0,o.Wm)(M,{rounded:"",label:"Limpiar",color:"primary",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"filter_alt_off",onClick:t[23]||(t[23]=e=>k.resetFilters())})])])]),(0,o._)("div",T,[1==A.pdf?((0,o.wg)(),(0,o.j4)($,{key:0,ref:"webViewer",style:{width:"1080px",height:"650px","max-width":"1080px"}},null,512)):(0,o.kq)("",!0),(0,o.Wm)(q,{showing:V.loading,color:"primary",class:"loading"},null,8,["showing"])])]),(0,o.Wm)(W,{ref:"methods",onSetData:k.setData,onSetDataPermisos:k.setDataPermisos},null,8,["onSetData","onSetDataPermisos"]),(0,o.Wm)(Z,{ref:"rulesVue"},null,512)])),_:1})}var A=s(1959),k=s(6479),S=s(5474),E=s(1488),P=s.n(E),C=s(8825),R=s(589),O=s(3759),U=s(3599);const I={components:{methods:O.Z,webViewer:U.Z,rulesVue:k.Z},data(){return{tipo:[{label:"I",value:"I"},{label:"E",value:"E"}],cargaNeta:[{label:"PESO KGS",value:"K",slot:"one"},{label:"PESO NETO",value:"N",slot:"two"}],tipoReporte:[{label:"RESUMEN DE COSTOS DE TRANSPORTE",value:"RCT",zoom:1.3},{label:"COSTOS DE TRANSPORTE POR RANGO DE FECHAS",value:"CTR",zoom:1.3},{label:"DISTRIBUCIÓN PRORRATEADA DEL COSTO DE TRANSPORTE POR CIUDAD",value:"DTC",zoom:1.3},{label:"DISTRIBUCIÓN REAL DEL COSTO DE TRANSPORTE POR CIUDAD",value:"DRC",zoom:1.3},{label:"COSTO DE TRANSPORTE POR AGENTE O PROVEEDORES",value:"CTP",zoom:1.3},{label:"COSTO DE TRANSPORTE POR AYUDANTE",value:"CTA",zoom:1},{label:"GUÍAS PENDIENTES POR ASOCIAR COSTOS DE TRANSPORTE",value:"GPC",zoom:1.3},{label:"REPORTE DE VIAJES POR VEHÍCULO",value:"RVV",zoom:1}],pdf:!0,reportValue:"",selectedNeta:"K",selectedTipoT:"I",selectedDolar:!1,selectedTipo:[],agencias:[],agentes:[],proveedores:[],unidades:[],ayudantes:[],agenciasSelected:[],selectedAgencia:[],agentesSelected:[],selectedAgente:[],unidadesSelected:[],selectedUnidad:[],proveedoresSelected:[],selectedProveedor:[],ayudantesSelected:[],selectedAyudante:[],fecha_desde:P()().format("DD/MM/YYYY"),fecha_hasta:P()().format("DD/MM/YYYY")}},setup(){(0,C.Z)();return{loading:(0,A.iH)(!1),separator:(0,A.iH)("vertical"),deletePopup:(0,A.iH)(!1),dialog:(0,A.iH)(!1),pdfView:(0,A.iH)(!0)}},mounted(){this.pdfPrint(),this.$emit("changeTitle","SCEN - Operaciones - Reporte de Costos",""),this.$refs.methods.getData("/agencias","setData","agencias"),this.$refs.methods.getData("/proveedores","setData","proveedores",{headers:{tipo_servicio:"TP",activo:"S"}}),this.$refs.methods.getData("/unidades","setData","unidades"),this.$refs.methods.getData("/ayudantes","setData","ayudantes",{headers:{activo:"S"}}),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:R.Z.getItem("tokenTraducido").usuario.roles.id,menu:"reportecostos"}})},methods:{filterArray(e,t,s,o,l){t(""!==e?()=>{const t=e.toUpperCase();for(var a=[],i=0;i<=this[o].length-1;i++)if(this[o][i][l].indexOf(t)>-1&&a.push(this[o][i]),i==this[o].length-1){this[s]=a;break}}:()=>{this[s]=this[o]})},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setData(e,t){this[t]=e.data?e.data:e},async pdfChange(e){e&&""==this.reportValue||(this.reportValue="",this.loading=!0,e||(this.reportValue=this.selectedTipo.value),this.pdf=!1,setTimeout((()=>{this.pdfPrint(),this.pdf=!0}),100))},pdfPrint(){var e={};if(e.fecha_desde=this.fecha_desde,e.fecha_hasta=this.fecha_hasta,e.agencia=this.selectedAgencia.id,e.dolar=this.selectedDolar,e.neta=this.selectedNeta,"CTP"==this.reportValue)if("I"==this.selectedTipoT){if(!this.selectedAgente.id)return this.$q.notify({message:"Debe seleccionar el Agente antes de generar el reporte...",color:"red"}),void(this.loading=!1);e.agente=this.selectedAgente.id,e.nombreAgente=this.selectedAgente.nb_agente+" - "+this.selectedAgente.persona_responsable}else{if(!this.selectedProveedor.id)return this.$q.notify({message:"Debe seleccionar el Proveedor antes de generar el reporte...",color:"red"}),void(this.loading=!1);e.proveedor=this.selectedProveedor.id,e.nombreProveedor=this.selectedProveedor.nb_proveedor}if("CTA"==this.reportValue){if(!this.selectedAyudante.id)return this.$q.notify({message:"Debe seleccionar el Ayudante antes de generar el reporte...",color:"red"}),void(this.loading=!1);e.ayudante=this.selectedAyudante.id,e.nombreAyudante=this.selectedAyudante.nb_ayudante}if("RVV"==this.reportValue){if(!this.selectedUnidad.id)return this.$q.notify({message:"Debe seleccionar el Transporte antes de generar el reporte...",color:"red"}),void(this.loading=!1);e.transporte=this.selectedUnidad.id,e.nombreTransporte=this.selectedUnidad.unidad_desc}S.api.get("/pdfreports/reporteCostos",{headers:{Authorization:`Bearer ${R.Z.getItem("token")}`,tipo:this.reportValue,data:JSON.stringify(e)}}).then((e=>{let t=this.reportValue?this.selectedTipo.zoom:.7;e.data.validDoc||(this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"}),t=.7),this.$refs.webViewer.showpdf(e.data.pdfPath,t,!1,!1),this.loading=!1})).catch((e=>{this.$q.notify({message:e.message,color:"red"}),this.loading=!1}))},resetFilters(){this.agentes=[],this.selectedTipo=[],this.selectedAgencia=[],this.selectedAgente=[],this.selectedAyudante=[],this.selectedProveedor=[],this.selectedUnidad=[],this.selectedNeta="K",this.selectedTipoT="I",this.selectedDolar=!1,this.fecha_desde=P()().format("DD/MM/YYYY"),this.fecha_hasta=P()().format("DD/MM/YYYY"),this.pdfChange(0)}}};var z=s(4260),M=s(4379),$=s(2448),q=s(3414),W=s(2035),Z=s(4554),N=s(8761),Y=s(4689),B=s(3944),F=s(5626),H=s(5735),L=s(8240),Q=s(6941),G=s(7518),K=s.n(G);const J=(0,z.Z)(I,[["render",V]]),X=J;K()(I,"components",{QPage:M.Z,QSelect:$.Z,QItem:q.Z,QItemSection:W.Z,QIcon:Z.Z,QBtnToggle:N.Z,QInput:Y.Z,QPopupProxy:B.Z,QDate:F.Z,QCheckbox:H.Z,QBtn:L.Z,QInnerLoading:Q.Z})},6700:(e,t,s)=>{var o={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":8225,"./ar-dz.js":8225,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":8092,"./es-mx.js":8092,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function l(e){var t=a(e);return s(t)}function a(e){if(!s.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}l.keys=function(){return Object.keys(o)},l.resolve=a,e.exports=l,l.id=6700}}]);