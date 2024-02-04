(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[6791],{23759:(e,t,a)=>{"use strict";function o(e,t,a,o,s,r){return null}a.d(t,{Z:()=>c});var s=a(80589),r=a(5474),n=a(48825);const i={setup(){const e=(0,n.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,r.api.get(e,o).then((e=>{this.$emit(t,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,r.api.post(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,r.api.put(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,a={headers:{}}){a.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,r.api.delete(e,a).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,r.api.post(e,t,o).then((e=>{(e.status=200)&&this.$emit(a,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var l=a(74260);const d=(0,l.Z)(i,[["render",o]]),c=d},64379:(e,t,a)=>{"use strict";function o(e,t,a,o,s,r){return null}a.d(t,{Z:()=>c});var s=a(48825),r=a(11488),n=a.n(r);const i={name:"rules",setup(){(0,s.Z)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,a=!1){if(null!==e&&""!==e&&e.length>t)return!1!==a?a:`Maximo ${t} Caracteres`},isMin(e,t,a=!1){if(null!==e&&""!==e&&e.length<t)return!1!==a?a:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==n()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==n()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var l=a(74260);const d=(0,l.Z)(i,[["render",o]]),c=d},23599:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var o=a(83673);const s={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function r(e,t,a,r,n,i){return(0,o.wg)(),(0,o.iD)("div",s,null,512)}a(80812),a(4260),a(26887),a(75221);var n=a(61959),i=a(163),l=a.n(i);const d={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,n.iH)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),a=t.length,o=new Uint8Array(a);for(let s=0;s<a;++s)o[s]=t.charCodeAt(s);return new Blob([o],{type:"application/pdf"})},async until(e){const t=a=>{e()?a():setTimeout((e=>t(a)),400)};return new Promise(t)},showpdf(e,t,a=!1,o=!0,s){const r="https://scen.rcsexpress.com/webViewer";l()({path:r,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((r=>{r.UI.disableElements(["panToolButton"]),r.UI.disableElements(["textSelectButton"]),r.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{r.UI.downloadPdf()}}),e.push({type:"actionButton",title:"Exportar Excel",img:"../../icons/icone-excel-grise.png",onClick:()=>{this.$emit("exportExcel")}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{a&&(this.$emit("printPdf"),await this.until((e=>1==this.confirmPrint)),!this.confirmPrint)||r.UI.print()}}),o&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),s?r.UI.loadDocument(this.base64ToBlob(s),{filename:"REPORTE SCEN.pdf"}):r.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/pdfreports/loadPDF/${e}`),r.UI.setLanguage("es"),r.UI.useEmbeddedPrint(!0),setTimeout((()=>{r.UI.setZoomLevel(t||.7)}),2e3)}))}}};var c=a(74260);const m=(0,c.Z)(d,[["render",r]]),u=m},99478:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>pe});var o=a(83673),s=a(62323);const r={class:"q-pa-sm justify-center"},n={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"padding-right":"30px","margin-bottom":"-10px"}},i=(0,o._)("div",{class:"col-md-3 col-xl-2 col-lg-2 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,o._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,o._)("strong",null,"Administración - Cuentas por Cobrar")])],-1),l={class:"col-md-5 col-xl-5 col-lg-5 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center","padding-left":"30px"}},d=(0,o.Uk)(" Sin resultados "),c={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},m={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},u={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},p={class:"col-md-1 col-xl-1 col-lg-1 col-xs-2 col-sm-2",style:{"align-self":"center","text-align":"center"}},h=(0,o.Uk)("Limpiar Filtros"),_=(0,o.Uk)("Cobranza"),g={class:"row justify-center items-center content-center",style:{padding:"10px"}},f={class:"col-md-6 col-xs-12",style:{width:"48%","padding-right":"5px"}},b={class:"row col-md-1 col-xs-12",style:{"text-align":"center","margin-left":"-40px","margin-right":"-40px"}},w={class:"col-md-12 col-xs-3 buttonsCard"},y={class:"col-md-12 col-xs-3 buttonsCard"},x={class:"col-md-6 col-xs-12",style:{width:"48%","padding-left":"5px"}},j={class:"row col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},D={class:"col-md-12 col-xs-12",style:{"margin-top":"20px"}},v={class:"row"},C={class:"col-md-5 col-xs-12 selectMobile2",style:{"margin-bottom":"20px"}},V={class:"col-md-5 col-xs-12",style:{"padding-right":"20px"}},k={class:"col-md-2 col-xs-12"},Y={class:"col-md-3 col-xs-12"},z={class:"col-md-3 col-xs-12"},M={class:"col-md-3 col-xs-12"},W={class:"col-md-3 col-xs-12"},U=(0,o._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Está seguro de los datos de la Cobranza? ",-1);function F(e,t,a,F,I,A){const S=(0,o.up)("q-item-section"),$=(0,o.up)("q-item"),E=(0,o.up)("q-icon"),Z=(0,o.up)("q-select"),q=(0,o.up)("q-date"),T=(0,o.up)("q-popup-proxy"),P=(0,o.up)("q-input"),R=(0,o.up)("q-tooltip"),B=(0,o.up)("q-btn"),N=(0,o.up)("q-inner-loading"),Q=(0,o.up)("q-td"),O=(0,o.up)("q-table"),H=(0,o.up)("q-card-section"),L=(0,o.up)("q-card"),G=(0,o.up)("q-card-actions"),J=(0,o.up)("q-dialog"),K=(0,o.up)("webViewer"),X=(0,o.up)("methods"),ee=(0,o.up)("rules-vue"),te=(0,o.up)("q-page"),ae=(0,o.Q2)("money"),oe=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(te,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o._)("div",n,[i,(0,o._)("div",l,[(0,o.Wm)(Z,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:I.agenciasSelected,onFilter:t[0]||(t[0]=(e,t)=>A.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:I.selectedAgencia,"onUpdate:modelValue":[t[1]||(t[1]=e=>I.selectedAgencia=e),t[2]||(t[2]=e=>A.getDataTable())],outlined:"",standout:"",label:"Agencia"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)($,null,{default:(0,o.w5)((()=>[(0,o.Wm)(S,{class:"text-grey"},{default:(0,o.w5)((()=>[d])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(E,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",c,[(0,o.Wm)(P,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:I.fecha_desde,"onUpdate:modelValue":[t[5]||(t[5]=e=>I.fecha_desde=e),t[6]||(t[6]=e=>A.getDataTable())],"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(E,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{modelValue:I.fecha_desde,"onUpdate:modelValue":[t[3]||(t[3]=e=>I.fecha_desde=e),t[4]||(t[4]=e=>{this.$refs.qDateProxy.hide(),A.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",m,[(0,o.Wm)(P,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:I.fecha_hasta,"onUpdate:modelValue":[t[9]||(t[9]=e=>I.fecha_hasta=e),t[10]||(t[10]=e=>A.getDataTable())],mask:"##/##/####","lazy-rules":"",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(E,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{modelValue:I.fecha_hasta,"onUpdate:modelValue":[t[7]||(t[7]=e=>I.fecha_hasta=e),t[8]||(t[8]=e=>{this.$refs.qDateProxy.hide(),A.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",u,[(0,o.Wm)(P,{outlined:"",label:"Fecha Emisión",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:I.fecha_emision,"onUpdate:modelValue":t[12]||(t[12]=e=>I.fecha_emision=e),mask:"##/##/####","lazy-rules":"",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(E,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{modelValue:I.fecha_emision,"onUpdate:modelValue":t[11]||(t[11]=e=>I.fecha_emision=e),mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",p,[(0,o.Wm)(B,{dense:"",color:"primary",round:"",padding:"sm",onClick:t[13]||(t[13]=e=>this.resetFilters()),style:{"margin-right":"15px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{size:"25px",name:"filter_alt_off",color:"white"}),(0,o.Wm)(R,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,o.w5)((()=>[h])),_:1})])),_:1}),(0,o.Wm)(B,{dense:"",color:"primary",round:"",padding:"sm",disabled:!(this.cuentas_cobrar.length>0),onClick:t[14]||(t[14]=e=>this.saveCuentas())},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{size:"25px",name:"input",color:"white"}),(0,o.Wm)(R,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,o.w5)((()=>[_])),_:1})])),_:1},8,["disabled"])])])]),(0,o._)("div",g,[(0,o._)("div",f,[(0,o.Wm)(L,{style:{"margin-top":"10px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o.Wm)(O,{rows:I.cuentas_cobrar_asignar,dense:"",selection:"multiple",columns:I.columnsCuentasCobrarAsignar,"binary-state-sort":"",separator:F.separator,"rows-per-page-options":[0],selected:I.selectedCuentasCobrarAsignar,"onUpdate:selected":t[15]||(t[15]=e=>I.selectedCuentasCobrarAsignar=e),"row-key":"id",style:{width:"100%",height:"400px"},loading:F.loading,"hide-bottom":""},{loading:(0,o.w5)((()=>[(0,o.Wm)(N,{showing:"",color:"primary",class:"loading"})])),"body-cell-nro_control":(0,o.w5)((e=>[(0,o.Wm)(Q,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(A.buildNroDoc("nro_control",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_documento":(0,o.w5)((e=>[(0,o.Wm)(Q,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(A.buildNroDoc("nro_documento",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_ref":(0,o.w5)((e=>[(0,o.Wm)(Q,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(A.buildNroDoc("nro_ref",e.row)),1)])),_:2},1032,["props"])])),_:1},8,["rows","columns","separator","selected","loading"])])),_:1})])),_:1})]),(0,o._)("div",b,[(0,o._)("div",w,[(0,o.Wm)(B,{color:"primary",round:"",padding:"sm",icon:"chevron_right",onClick:t[16]||(t[16]=e=>A.addSelectedCuenta())})]),(0,o._)("div",y,[(0,o.Wm)(B,{color:"primary",round:"",padding:"sm",icon:"chevron_left",onClick:t[17]||(t[17]=e=>A.removeSelectedCuenta())})])]),(0,o._)("div",x,[(0,o.Wm)(L,{style:{"margin-top":"10px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[(0,o.Wm)(O,{rows:I.cuentas_cobrar,dense:"",selection:"multiple",columns:I.columnsCuentasCobrar,"binary-state-sort":"",separator:F.separator,"rows-per-page-options":[0],selected:I.selectedCuentasCobrar,"onUpdate:selected":t[21]||(t[21]=e=>I.selectedCuentasCobrar=e),"row-key":"id",style:{width:"100%",height:"400px"},loading:F.loading,"hide-bottom":""},{loading:(0,o.w5)((()=>[(0,o.Wm)(N,{showing:"",color:"primary",class:"loading"})])),"body-cell-nro_control":(0,o.w5)((e=>[(0,o.Wm)(Q,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(A.buildNroDoc("nro_control",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_documento":(0,o.w5)((e=>[(0,o.Wm)(Q,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(A.buildNroDoc("nro_documento",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_ref":(0,o.w5)((e=>[(0,o.Wm)(Q,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(A.buildNroDoc("nro_ref",e.row)),1)])),_:2},1032,["props"])])),"body-cell-iva_retenido":(0,o.w5)((e=>[(0,o.Wm)(Q,{props:e},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(P,{dense:"",modelValue:e.row.iva_retenido,"onUpdate:modelValue":[t=>e.row.iva_retenido=t,t[18]||(t[18]=e=>A.calculaTotales())],"input-class":"text-right",style:{"min-width":"80px","font-size":"13px"}},null,8,["modelValue","onUpdate:modelValue"]),[[ae,I.money]])])),_:2},1032,["props"])])),"body-cell-islr_retenido":(0,o.w5)((e=>[(0,o.Wm)(Q,{props:e},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(P,{dense:"",modelValue:e.row.islr_retenido,"onUpdate:modelValue":[t=>e.row.islr_retenido=t,t[19]||(t[19]=e=>A.calculaTotales())],"input-class":"text-right",style:{"min-width":"80px","font-size":"13px"}},null,8,["modelValue","onUpdate:modelValue"]),[[ae,I.money]])])),_:2},1032,["props"])])),"body-cell-monto_pagado":(0,o.w5)((e=>[(0,o.Wm)(Q,{props:e},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(P,{dense:"",modelValue:e.row.monto_pagado,"onUpdate:modelValue":[t=>e.row.monto_pagado=t,t[20]||(t[20]=e=>A.calculaTotales())],"input-class":"text-right",style:{"min-width":"100px","font-size":"13px"}},null,8,["modelValue","onUpdate:modelValue"]),[[ae,I.money]])])),_:2},1032,["props"])])),"body-cell-observacion":(0,o.w5)((e=>[(0,o.Wm)(Q,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{dense:"",modelValue:e.row.observacion,"onUpdate:modelValue":t=>e.row.observacion=t,style:{"min-width":"120px","font-size":"13px"}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","separator","selected","loading"])])),_:1})])),_:1})]),(0,o._)("div",j,[(0,o._)("div",D,[(0,o.Wm)(L,{class:"q-pa-md col-md-12 col-xs-12",bordered:"",style:{padding:"5px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{style:{"padding-bottom":"5px","padding-left":"10px","padding-right":"10px"}},{default:(0,o.w5)((()=>[(0,o._)("div",v,[(0,o._)("div",C,[(0,o.Wm)(Z,{dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:I.bancos,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_banco","option-value":"id",modelValue:I.selectedBanco,"onUpdate:modelValue":[t[22]||(t[22]=e=>I.selectedBanco=e),t[23]||(t[23]=e=>this.setCuentas())],outlined:"",standout:"",ref:"banco",label:"Banco",class:"pcform"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(E,{name:"apartment"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",V,[(0,o.Wm)(Z,{dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:I.cuentas,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nro_cuenta","option-value":"id",modelValue:I.selectedCuenta,"onUpdate:modelValue":t[24]||(t[24]=e=>I.selectedCuenta=e),outlined:"",standout:"",ref:"cuenta",label:"Cuenta"},{prepend:(0,o.w5)((()=>[(0,o.Wm)(E,{name:"apartment"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",k,[(0,o.Wm)(P,{outlined:"",label:"Fecha",hint:"",dense:"",modelValue:I.fecha_cobranza,"onUpdate:modelValue":t[26]||(t[26]=e=>I.fecha_cobranza=e),mask:"##/##/####","lazy-rules":"",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(E,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{modelValue:I.fecha_cobranza,"onUpdate:modelValue":t[25]||(t[25]=e=>I.fecha_cobranza=e),mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",Y,[(0,o.Wm)(P,{outlined:"",modelValue:I.nro_ingreso,"onUpdate:modelValue":t[27]||(t[27]=e=>I.nro_ingreso=e),label:"Ingreso de Caja N°:",hint:"",dense:"",style:{"padding-bottom":"10px"},class:"pcform","lazy-rules":""},null,8,["modelValue"])]),(0,o._)("div",z,[(0,o.wy)((0,o.Wm)(P,{outlined:"",modelValue:I.monto_cobrado,"onUpdate:modelValue":t[28]||(t[28]=e=>I.monto_cobrado=e),label:"Monto Cobrado:",hint:"",class:"pcform",dense:"","input-class":"text-right",style:{"padding-bottom":"10px"},"lazy-rules":""},null,8,["modelValue"]),[[ae,I.money]])]),(0,o._)("div",M,[(0,o.wy)((0,o.Wm)(P,{outlined:"",modelValue:I.monto_retenido,"onUpdate:modelValue":t[29]||(t[29]=e=>I.monto_retenido=e),label:"Monto Retenido:","input-class":"text-right",hint:"",dense:"",style:{"padding-bottom":"10px"},class:"pcform","lazy-rules":""},null,8,["modelValue"]),[[ae,I.money]])]),(0,o._)("div",W,[(0,o.wy)((0,o.Wm)(P,{outlined:"",modelValue:I.monto_deposito,"onUpdate:modelValue":t[30]||(t[30]=e=>I.monto_deposito=e),label:"Monto Depósito:","input-class":"text-right",hint:"",dense:"",style:{"padding-bottom":"10px"},"lazy-rules":""},null,8,["modelValue"]),[[ae,I.money]])])])])),_:1})])),_:1})])])]),(0,o.Wm)(J,{modelValue:F.confirmPopUp,"onUpdate:modelValue":t[33]||(t[33]=e=>F.confirmPopUp=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{style:{width:"700px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(H,null,{default:(0,o.w5)((()=>[U])),_:1}),(0,o.Wm)(G,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(B,{flat:"",label:"Cancelar",color:"primary",onClick:t[31]||(t[31]=e=>this.confirmSave=!1)},null,512),[[oe]]),(0,o.wy)((0,o.Wm)(B,{flat:"",label:"Guardar",color:"primary",onClick:t[32]||(t[32]=e=>this.confirmSave=!0)},null,512),[[oe]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(J,{modelValue:F.pdfView,"onUpdate:modelValue":t[35]||(t[35]=e=>F.pdfView=e),onShow:t[36]||(t[36]=e=>this.pdfPrint())},{default:(0,o.w5)((()=>[(0,o.Wm)(K,{ref:"webViewer",onClosePdf:t[34]||(t[34]=e=>this.pdfView=!1),style:{width:"1000px",height:"750px","max-width":"1000px"}},null,512)])),_:1},8,["modelValue"]),(0,o.Wm)(X,{ref:"methods",onSetData:A.setData,onSetDataInit:A.setDataInit,onGetDataTable:A.getDataTable,onSetDataTable:A.setDataTable,onSetDataPermisos:A.setDataPermisos},null,8,["onSetData","onSetDataInit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,o.Wm)(ee,{ref:"rulesVue"},null,512)])),_:1})}var I=a(61959),A=a(11488),S=a.n(A),$=a(5474),E=a(64379),Z=a(48825),q=a(80589),T=a(23759),P=a(31885),R=a(23599);const B={components:{methods:T.Z,rulesVue:E.Z,VMoney:P.VMoney,webViewer:R.Z},directives:{money:P.VMoney},data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!1},nro_ingreso:"",monto_cobrado:0,monto_retenido:0,monto_deposito:0,pagination:{page:1,rowsPerPage:10,sortBy:"nro_documento",descending:!0,rowsNumber:""},fecha_desde:S()("2023-06-01").startOf("month").format("DD/MM/YYYY"),fecha_hasta:S()().endOf("month").format("DD/MM/YYYY"),fecha_emision:S()().format("DD/MM/YYYY"),fecha_cobranza:S()().format("DD/MM/YYYY"),agencias:[],selectedAgencia:[],agenciasSelected:[],rpermisos:[],cuentas_cobrar:[],selectedCuentasCobrar:[],cuentas_cobrar_asignar:[],selectedCuentasCobrarAsignar:[],bancos:[],selectedBanco:[],cuentas:[],selectedCuenta:[],confirmSave:!1,idCobranza:"",columnsCuentasCobrar:[{name:"t_de_documento",label:"Tipo",field:"t_de_documento",align:"center"},{name:"nro_control",label:"Nº Ctrl.",field:"nro_control",align:"center"},{name:"nro_documento",label:"Nº Doc.",field:"nro_documento",align:"center"},{name:"nro_ref",label:"Ref.",field:"nro_ref",align:"center"},{name:"monto_total",label:"Ingreso",field:"monto_total",align:"right",format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"iva_retenido",label:"Iva Ret.",field:"iva_retenido",align:"right",format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"islr_retenido",label:"Islr Ret.",field:"islr_retenido",align:"right",format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"monto_pagado",label:"Depósito",field:"monto_pagado",align:"right",format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"observacion",label:"Observación",field:"observacion",align:"center"}],columnsCuentasCobrarAsignar:[{name:"t_de_documento",label:"Tipo",field:"t_de_documento",align:"center"},{name:"nro_control",label:"Nº Ctrl.",field:"nro_control",align:"center"},{name:"nro_documento",label:"Nº Doc.",field:"nro_documento",align:"center"},{name:"nro_ref",label:"Ref.",field:"nro_ref",align:"center"},{name:"fecha_emision",label:"Emisión",field:"fecha_emision",align:"center"},{name:"monto_total",label:"Total",field:"monto_total",align:"right"},{name:"saldo",label:"Saldo",field:"saldo",align:"right",format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()}]}},setup(){(0,Z.Z)();return{loading:(0,I.iH)(!1),separator:(0,I.iH)("vertical"),confirmPopUp:(0,I.iH)(!1),pdfView:(0,I.iH)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Administración - Cuentas por Cobrar",""),this.$refs.methods.getData("/agencias","setDataInit","agencias"),this.$refs.methods.getData("/bancos","setData","bancos"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:q.Z.getItem("tokenTraducido").usuario.roles.id,menu:"cuentasporcobrar"}})},methods:{filterArray(e,t,a,o,s){t(""!==e?()=>{const t=e.toUpperCase();for(var r=[],n=0;n<=this[o].length-1;n++)if(this[o][n][s].indexOf(t)>-1&&r.push(this[o][n]),n==this[o].length-1){this[a]=r;break}}:()=>{this[a]=this[o]})},filterDesc(e,t){var a=this[e].findIndex((e=>e.value==t));return a>=0?this[e][a].label:null},findIndex(e,t,a){var o=this[e].findIndex((e=>e.id==t));return o>=0?this[e][o][a]:null},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setData(e,t){this[t]=e.data?e.data:e},setDataInit(e,t){this[t]=e.data,this.selectedAgencia=this.agencias[0],this.getDataTable()},getDataTable(){this.cuentas_cobrar=[],this.$refs.methods.getData("/mmovimientos","setDataTable","cuentas_cobrar_asignar",{headers:{filters:JSON.stringify({agencia:this.selectedAgencia.id,desde:S()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:S()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),estatus_admin_in:"P",tipo_in:"FA,NC"}),order:JSON.stringify([["t_de_documento","DESC"],["nro_documento","ASC"]]),direction:"DESC"}})},setDataTable(e,t){this[t]=e.data?e.data:e},setCuentas(){this.selectedCuenta=[],this.$refs.methods.getData("/cuentas","setData","cuentas",{headers:{rol:q.Z.getItem("tokenTraducido").usuario.roles.id,banco:this.selectedBanco.id}})},async saveCuentas(){if(0==this.selectedBanco.length)return this.$refs.banco.$el.focus(),void this.$q.notify({message:"Debe seleccionar el Banco para poder generar la Cobranza",color:"red"});if(0==this.selectedCuenta.length)return this.$refs.cuenta.$el.focus(),void this.$q.notify({message:"Debe seleccionar la Cuenta para poder generar la Cobranza",color:"red"});if(this.confirmPopUp=!0,await this.until((e=>1==this.confirmSave)),this.confirmSave){this.confirmSave=!1,this.loading=!0;var e={};e.cod_agencia=this.selectedAgencia.id,e.fecha_deposito=S()(this.fecha_cobranza,"DD/MM/YYYY").format("YYYY-MM-DD"),e.monto_cobrado=parseFloat(this.curReplace(this.monto_deposito)),e.cod_cuenta=this.selectedCuenta.id,e.monto_retenido=parseFloat(this.curReplace(this.monto_retenido)),e.monto_deposito=parseFloat(this.curReplace(this.monto_deposito))-parseFloat(this.curReplace(this.monto_retenido)),e.ingreso_caja=this.nro_ingreso,await $.api.post("/mcobranzas/",e,{headers:{Authorization:`Bearer ${q.Z.getItem("token")}`}}).then((e=>{this.idCobranza=e.data.id})).catch((()=>{this.errorMessage("Error al crear el Maestro de Cobranza. Comuníquese con el proveedor del Sistemas...")}));var t={};t.cod_cuenta=this.selectedCuenta.id,t.tipo_transaccion="I",t.fecha_movimiento=S()(this.fecha_cobranza,"DD/MM/YYYY").format("YYYY-MM-DD"),t.nro_documento=0,t.tipo_documento="DP",t.monto_movimiento=parseFloat(this.curReplace(this.monto_deposito))-parseFloat(this.curReplace(this.monto_retenido)),await $.api.post("/mbancarios/",t,{headers:{Authorization:`Bearer ${q.Z.getItem("token")}`}}).catch((()=>{this.errorMessage("Error al crear el Movimiento Bancario. Comuníquese con el proveedor del Sistemas...")}));for(var a=0;a<this.cuentas_cobrar.length;a++){let e=0;"NC"!=this.cuentas_cobrar[a].t_de_documento&&(e=parseFloat(this.curReplace(this.cuentas_cobrar[a].saldo))-parseFloat(this.curReplace(this.cuentas_cobrar[a].monto_pagado)));let t="P";0==e&&(t="C");var o={};o.estatus_administra=t,o.saldo=e.toFixed(2),o.check_cancel=1,o.fecha_cancel=S()().format("YYYY-MM-DD"),await $.api.put(`/mmovimientos/${this.cuentas_cobrar[a].id}`,o,{headers:{Authorization:`Bearer ${q.Z.getItem("token")}`}}).catch((()=>{this.errorMessage("Error actualizando los datos del Movimiento. Comuníquese con el proveedor del Sistemas...")}));var s={};s.cod_cobranza=this.idCobranza,s.cod_movimiento=this.cuentas_cobrar[a].id,s.monto_pagado=parseFloat(this.curReplace(this.cuentas_cobrar[a].monto_pagado)),s.iva_retenido=parseFloat(this.curReplace(this.cuentas_cobrar[a].iva_retenido)),s.islr_retenido=parseFloat(this.curReplace(this.cuentas_cobrar[a].islr_retenido)),s.observacion=this.cuentas_cobrar[a].observacion,await $.api.post("/dcobranzas/",s,{headers:{Authorization:`Bearer ${q.Z.getItem("token")}`}}).catch((()=>{this.errorMessage("Error al crear el Detalle de Cobranza. Comuníquese con el proveedor del Sistemas...")}))}this.$q.notify({message:"Cobranza procesada Exitosamente",color:"green"}),this.pdfView=!0,this.loading=!1,this.resetFilters()}},pdfPrint(){$.api.get("/pdfreports/cobranza",{headers:{Authorization:`Bearer ${q.Z.getItem("token")}`,id:this.idCobranza}}).then((e=>{this.$refs.webViewer.showpdf(e.data.pdfPath,1.5,!0),this.idCobranza=""}))},addSelectedCuenta(){for(var e=0;e<this.selectedCuentasCobrarAsignar.length;e++){this.cuentas_cobrar.push(this.selectedCuentasCobrarAsignar[e]);let t=this.cuentas_cobrar.findIndex((t=>t.id==this.selectedCuentasCobrarAsignar[e].id)),a=this.selectedCuentasCobrarAsignar[e].monto_total,o=(parseFloat(a)/(100+parseFloat(this.selectedCuentasCobrarAsignar[e].monto_impuesto))*100*(parseFloat(this.selectedCuentasCobrarAsignar[e].monto_impuesto)/100*75/100)).toFixed(2),s=(parseFloat(a)/(100+parseFloat(this.selectedCuentasCobrarAsignar[e].monto_impuesto))*100*.03).toFixed(2);"NC"==this.selectedCuentasCobrarAsignar[e].t_de_documento&&(a=(-1*parseFloat(a)).toFixed(2),o=(-1*parseFloat(o)).toFixed(2),s=(-1*parseFloat(s)).toFixed(2)),this.cuentas_cobrar[t].monto_total=a,this.cuentas_cobrar[t].monto_pagado=a,this.cuentas_cobrar[t].iva_retenido=o,this.cuentas_cobrar[t].islr_retenido=s,this.cuentas_cobrar[t].observacion="",this.cuentas_cobrar_asignar.splice(this.cuentas_cobrar_asignar.findIndex((t=>t.id==this.selectedCuentasCobrarAsignar[e].id)),1)}this.selectedCuentasCobrarAsignar=[],this.calculaTotales()},removeSelectedCuenta(){for(var e=0;e<this.selectedCuentasCobrar.length;e++)this.cuentas_cobrar_asignar.push(this.selectedCuentasCobrar[e]),this.cuentas_cobrar.splice(this.cuentas_cobrar.findIndex((t=>t.id==this.selectedCuentasCobrar[e].id)),1);this.selectedCuentasCobrar=[],this.cuentas_cobrar_asignar.sort(((e,t)=>e.nro_documento>t.nro_documento?1:e.nro_documento<t.nro_documento?-1:0)),this.calculaTotales()},calculaTotales(){let e=0,t=0,a=0,o=0;for(var s=0;s<this.cuentas_cobrar.length;s++)e+=parseFloat(this.curReplace(this.cuentas_cobrar[s].monto_total)),t+=parseFloat(this.curReplace(this.cuentas_cobrar[s].monto_pagado)),a+=parseFloat(this.curReplace(this.cuentas_cobrar[s].iva_retenido)),o+=parseFloat(this.curReplace(this.cuentas_cobrar[s].islr_retenido));this.monto_cobrado=e.toFixed(2),this.monto_deposito=t.toFixed(2),this.monto_retenido=(a+o).toFixed(2)},buildNroDoc(e,t){var a="";switch(e){case"nro_control":"FA"==t.t_de_documento?t.nro_control?t.nro_control_new?t.serie_documento?a+=t.serie_documento+" - "+t.nro_control_new.padStart(9,"00-000000"):a+=t.nro_control_new.padStart(9,"00-000000"):a+=t.nro_control.padStart(4,"0000"):a+=t.serie_documento+" - "+t.nro_documento:a+=t.nro_documento;break;case"nro_documento":"FA"==t.t_de_documento&&(a=t.nro_control?t.nro_control.padStart(4,"0000"):t.serie_documento+" - "+t.nro_documento);break;case"nro_ref":"FA"==t.t_de_documento&&t.nro_control&&(a=t.cod_agencia+"-"+t.nro_documento);break;default:break}return a},async until(e){const t=a=>{e()?a():setTimeout((e=>t(a)),400)};return new Promise(t)},resetFilters(){this.selectedAgencia=this.agencias[0],this.fecha_desde=S()().startOf("month").format("DD/MM/YYYY"),this.fecha_hasta=S()().endOf("month").format("DD/MM/YYYY"),this.fecha_emision=S()().format("DD/MM/YYYY"),this.fecha_cobranza=S()().format("DD/MM/YYYY"),this.selectedBanco=[],this.selectedCuenta=[],this.cuentas=[],this.getDataTable()},errorMessage(e){this.$q.notify({message:e,color:"red"})},parseFloatN(e){return e=Math.round(100*e)/100,e},curReplace(e){return e.indexOf(",")<0?e:e.replaceAll(".","").replaceAll(",",".")}}};var N=a(74260),Q=a(24379),O=a(72448),H=a(83414),L=a(52035),G=a(24554),J=a(64689),K=a(83944),X=a(85626),ee=a(48240),te=a(5363),ae=a(10151),oe=a(25589),se=a(96023),re=a(66941),ne=a(83884),ie=a(46778),le=a(99367),de=a(60677),ce=a(7518),me=a.n(ce);const ue=(0,N.Z)(B,[["render",F]]),pe=ue;me()(B,"components",{QPage:Q.Z,QSelect:O.Z,QItem:H.Z,QItemSection:L.Z,QIcon:G.Z,QInput:J.Z,QPopupProxy:K.Z,QDate:X.Z,QBtn:ee.Z,QTooltip:te.Z,QCard:ae.Z,QCardSection:oe.Z,QTable:se.Z,QInnerLoading:re.Z,QTd:ne.Z,QDialog:ie.Z,QCardActions:le.Z}),me()(B,"directives",{ClosePopup:de.Z})},46700:(e,t,a)=>{var o={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=r,e.exports=s,s.id=46700}}]);