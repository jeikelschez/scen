(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[6010],{3759:(e,t,s)=>{"use strict";function a(e,t,s,a,i,o){return null}s.d(t,{Z:()=>c});var i=s(589),o=s(5474),l=s(8825);const n={setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,a).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,t,a).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=s(4260);const d=(0,r.Z)(n,[["render",a]]),c=d},6479:(e,t,s)=>{"use strict";function a(e,t,s,a,i,o){return null}s.d(t,{Z:()=>c});var i=s(8825),o=s(1488),l=s.n(o);const n={name:"rules",setup(){(0,i.Z)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==l()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var r=s(4260);const d=(0,r.Z)(n,[["render",a]]),c=d},5261:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var a=s(3673);const i={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function o(e,t,s,o,l,n){return(0,a.wg)(),(0,a.iD)("div",i,null,512)}s(812),s(5123);var l=s(1959),n=s(163),r=s.n(n);const d={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,l.iH)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),s=t.length,a=new Uint8Array(s);for(let i=0;i<s;++i)a[i]=t.charCodeAt(i);return new Blob([a],{type:"application/pdf"})},async until(e){const t=s=>{e()?s():setTimeout((e=>t(s)),400)};return new Promise(t)},showpdf(e,t,s=!1,a=!0,i){const o="https://scen.rcsexpress.com/webViewer";r()({path:o,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((o=>{o.UI.disableElements(["panToolButton"]),o.UI.disableElements(["textSelectButton"]),o.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{o.downloadPdf()}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{s&&(this.$emit("printPdf"),await this.until((e=>1==this.confirmPrint)),!this.confirmPrint)||o.print()}}),a&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),i?o.UI.loadDocument(this.base64ToBlob(i),{filename:"REPORTE SCEN.pdf"}):o.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/reports/loadPDF/${e}`),o.UI.setLanguage("es"),o.UI.useEmbeddedPrint(!0),setTimeout((()=>{o.UI.setZoomLevel(t||.7)}),1500)}))}}};var c=s(4260);const m=(0,c.Z)(d,[["render",o]]),u=m},8142:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>de});var a=s(3673),i=s(8880),o=s(2323);const l={class:"row"},n={class:"col-md-12 col-xs-12"},r={class:"col-md-12 col-xs-12"},d={class:"row justify-center items-center content-center"},c={class:"q-pa-sm justify-center"},m={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},u=(0,a._)("div",{class:"col-md-3 col-xl-2 col-lg-2 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a._)("strong",null,"VENTAS - EMITIR CARTA A CLIENTES")])],-1),h={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},p=(0,a.Uk)(" Sin resultados "),g={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},f={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},_={class:"col-md-1 col-xl-1 col-lg-1 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},w={class:"q-gutter-md"},j=(0,a.Uk)("Clientes "),b=(0,a.Uk)("Particulares "),y={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 selectMobile2",style:{"align-self":"center","text-align":"center"}},D=(0,a.Uk)(" Sin resultados "),v={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},x=(0,a.Uk)("Eliminar Filtros"),k=(0,a.Uk)("Imprimir Carta"),C={class:"q-pa-md q-gutter-y-md",style:{"margin-top":"-30px"}};function V(e,t,s,V,M,Y){const W=(0,a.up)("q-icon"),q=(0,a.up)("q-input"),A=(0,a.up)("q-btn"),U=(0,a.up)("q-form"),z=(0,a.up)("q-card-section"),$=(0,a.up)("q-card"),S=(0,a.up)("q-dialog"),Z=(0,a.up)("q-item-section"),T=(0,a.up)("q-item"),I=(0,a.up)("q-select"),P=(0,a.up)("q-date"),E=(0,a.up)("q-popup-proxy"),F=(0,a.up)("q-tooltip"),B=(0,a.up)("q-btn-toggle"),N=(0,a.up)("q-inner-loading"),Q=(0,a.up)("q-td"),L=(0,a.up)("q-item-label"),H=(0,a.up)("q-list"),R=(0,a.up)("q-table"),O=(0,a.up)("webViewer"),G=(0,a.up)("methods"),K=(0,a.up)("rules-vue"),J=(0,a.up)("q-page"),X=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(J,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(S,{modelValue:V.dialog,"onUpdate:modelValue":t[5]||(t[5]=e=>V.dialog=e)},{default:(0,a.w5)((()=>[(0,a.Wm)($,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U,{class:"q-gutter-md",onSubmit:t[4]||(t[4]=e=>V.pdfView=!0)},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",n,[(0,a.Wm)(q,{"upper-case":"",outlined:"",modelValue:M.form.contacto,"onUpdate:modelValue":[t[0]||(t[0]=e=>M.form.contacto=e),t[1]||(t[1]=e=>M.form.contacto=M.form.contacto.toUpperCase())],label:"Contacto",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMin(e,3),e=>this.$refs.rulesVue.isMax(e,100)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",r,[(0,a.Wm)(q,{"upper-case":"",outlined:"",modelValue:M.form.cargo,"onUpdate:modelValue":[t[2]||(t[2]=e=>M.form.cargo=e),t[3]||(t[3]=e=>M.form.cargo=M.form.cargo.toUpperCase())],label:"Cargo",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMin(e,3),e=>this.$refs.rulesVue.isMax(e,100)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])])]),(0,a._)("div",d,[(0,a.Wm)(A,{label:"Imprimir",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"print"}),(0,a.wy)((0,a.Wm)(A,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[X]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",c,[(0,a._)("div",m,[u,(0,a._)("div",h,[(0,a.Wm)(I,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:M.agenciasSelected,onFilter:t[6]||(t[6]=(e,t)=>Y.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:M.selectedAgencia,"onUpdate:modelValue":[t[7]||(t[7]=e=>M.selectedAgencia=e),t[8]||(t[8]=e=>Y.getDataClientes())],outlined:"",standout:"",label:"Agencia"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{class:"text-grey"},{default:(0,a.w5)((()=>[p])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",g,[(0,a.Wm)(q,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:M.fecha_desde,"onUpdate:modelValue":t[13]||(t[13]=e=>M.fecha_desde=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)],onBlur:t[14]||(t[14]=e=>Y.getDataClientes()),onKeyup:t[15]||(t[15]=(0,i.D2)((e=>Y.getDataClientes()),["enter"]))},{append:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{ref:"qDateProxy1","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{modelValue:M.fecha_desde,"onUpdate:modelValue":[t[9]||(t[9]=e=>M.fecha_desde=e),t[12]||(t[12]=e=>{Y.getDataClientes(),this.$refs.qDateProxy1.hide()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"},onBlur:t[10]||(t[10]=e=>Y.getDataClientes()),onKeyup:t[11]||(t[11]=(0,i.D2)((e=>Y.getDataClientes()),["enter"]))},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",f,[(0,a.Wm)(q,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:M.fecha_hasta,"onUpdate:modelValue":t[20]||(t[20]=e=>M.fecha_hasta=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)],onBlur:t[21]||(t[21]=e=>Y.getDataClientes()),onKeyup:t[22]||(t[22]=(0,i.D2)((e=>Y.getDataClientes()),["enter"]))},{append:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{ref:"qDateProxy2","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{modelValue:M.fecha_hasta,"onUpdate:modelValue":[t[16]||(t[16]=e=>M.fecha_hasta=e),t[19]||(t[19]=e=>{Y.getDataClientes(),this.$refs.qDateProxy2.hide()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"},onBlur:t[17]||(t[17]=e=>Y.getDataClientes()),onKeyup:t[18]||(t[18]=(0,i.D2)((e=>Y.getDataClientes()),["enter"]))},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",_,[(0,a._)("div",w,[(0,a.Wm)(B,{modelValue:M.selectedTipo,"onUpdate:modelValue":[t[23]||(t[23]=e=>M.selectedTipo=e),t[24]||(t[24]=e=>Y.getDataClientes())],spread:"",class:"my-custom-toggle",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"black",options:M.tipos},{clte:(0,a.w5)((()=>[(0,a.Wm)(F,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[j])),_:1})])),part:(0,a.w5)((()=>[(0,a.Wm)(F,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[b])),_:1})])),_:1},8,["modelValue","options"])])]),(0,a._)("div",y,[(0,a.Wm)(I,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:M.clientesSelected,onFilter:t[25]||(t[25]=(e,t)=>Y.filterArray(e,t,"clientesSelected","C"==this.selectedTipo?"clientes":"cparticulares","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_cliente","option-value":"id",modelValue:M.selectedCliente,"onUpdate:modelValue":[t[26]||(t[26]=e=>M.selectedCliente=e),t[27]||(t[27]=e=>Y.getDataTable())],loading:M.clientesLoading,disable:M.clientesLoading,outlined:"",standout:"",label:"Cliente"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{class:"text-grey"},{default:(0,a.w5)((()=>[D])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"search"})])),clientesLoading:(0,a.w5)((()=>[(0,a.Wm)(N,{showing:"",color:"primary",class:"loading"})])),_:1},8,["options","modelValue","loading","disable"])]),(0,a._)("div",v,[(0,a.Wm)(A,{dense:"",color:"primary",round:"",padding:"sm",onClick:t[28]||(t[28]=e=>this.resetFilters()),style:{"margin-right":"15px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{size:"25px",name:"filter_alt_off",color:"white"}),(0,a.Wm)(F,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[x])),_:1})])),_:1}),(0,a.Wm)(A,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-right":"5px"},disabled:!(this.guias.length>0),onClickCapture:t[29]||(t[29]=e=>this.dialog=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{size:"25px",name:"print",color:"white"}),(0,a.Wm)(F,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[k])),_:1})])),_:1},8,["disabled"])])])]),(0,a._)("div",C,[(0,a.Wm)(R,{rows:M.guias,"binary-state-sort":"","row-key":"id",columns:M.columns,loading:V.loading,class:"tableHeight",selection:"multiple",separator:V.separator,grid:e.$q.screen.xs,"rows-per-page-options":[0],pagination:V.pagination,style:{width:"100%",height:"560px"},"hide-bottom":"",selected:V.selected,"onUpdate:selected":t[30]||(t[30]=e=>V.selected=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(N,{showing:"",color:"primary",class:"loading"})])),"body-cell-nro_documento":(0,a.w5)((e=>[(0,a.Wm)(Q,{props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(Y.buildNroDoc("nro_documento",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_fact":(0,a.w5)((e=>[(0,a.Wm)(Q,{props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(Y.buildNroDoc("nro_fact",e.row)),1)])),_:2},1032,["props"])])),"body-cell-observacion_adic":(0,a.w5)((e=>[(0,a.Wm)(Q,{props:e,style:{"padding-top":"30px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{outlined:"",modelValue:e.row.observacion_adic,"onUpdate:modelValue":t=>e.row.observacion_adic=t,dense:"",hint:"",rules:[e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)],"lazy-rules":""},null,8,["modelValue","onUpdate:modelValue","rules"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.Wm)($,{class:(0,o.C_)(e.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(t=>((0,a.wg)(),(0,a.j4)(T,{key:t.name},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.label),1)])),_:2},1024)])),_:2},1024),"nro_documento"===t.name?((0,a.wg)(),(0,a.j4)(Z,{key:0,side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(Y.buildNroDoc("nro_documento",e.row)),1)])),_:2},1024)):(0,a.kq)("",!0),"nro_fact"===t.name?((0,a.wg)(),(0,a.j4)(Z,{key:1,side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(Y.buildNroDoc("nro_fact",e.row)),1)])),_:2},1024)):(0,a.kq)("",!0),"fecha_emision"===t.name?((0,a.wg)(),(0,a.j4)(Z,{key:2,side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.fecha_emision),1)])),_:2},1024)):(0,a.kq)("",!0),"monto_total"===t.name?((0,a.wg)(),(0,a.j4)(Z,{key:3,side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.monto_total),1)])),_:2},1024)):(0,a.kq)("",!0),"observacion_entrega"===t.name?((0,a.wg)(),(0,a.j4)(Z,{key:4,side:"",class:"itemMovilSide",style:{"text-align":"right !important"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.observacion_entrega),1)])),_:2},1024)):(0,a.kq)("",!0),"observacion_adic"===t.name?((0,a.wg)(),(0,a.j4)(Z,{key:5,side:"",class:"itemMovilSide",style:{"text-align":"right !important","align-self":"center"}},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{outlined:"",modelValue:e.row.observacion_adic,"onUpdate:modelValue":t=>e.row.observacion_adic=t,dense:"",hint:"",rules:[e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)],"lazy-rules":"","hide-bottom-space":"",style:{"padding-top":"20px"}},null,8,["modelValue","onUpdate:modelValue","rules"])])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","grid","pagination","selected"])]),(0,a.Wm)(S,{modelValue:V.pdfView,"onUpdate:modelValue":t[32]||(t[32]=e=>V.pdfView=e),onShow:t[33]||(t[33]=e=>this.print())},{default:(0,a.w5)((()=>[(0,a.Wm)(O,{ref:"webViewer",onClosePdf:t[31]||(t[31]=e=>this.pdfView=!1),style:{width:"1000px",height:"750px","max-width":"1000px"}},null,512)])),_:1},8,["modelValue"]),(0,a.Wm)(G,{ref:"methods",onSetDataAgencias:Y.setDataAgencias,onGetDataClientes:Y.getDataClientes,onSetDataClientes:Y.setDataClientes,onGetDataTable:Y.getDataTable,onSetDataTable:Y.setDataTable,onSetDataPermisos:Y.setDataPermisos},null,8,["onSetDataAgencias","onGetDataClientes","onSetDataClientes","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,a.Wm)(K,{ref:"rulesVue"},null,512)])),_:1})}var M=s(1959),Y=s(5474),W=s(6479),q=s(1488),A=s.n(q),U=s(8825),z=s(589),$=s(3759),S=s(5261);const Z={components:{methods:$.Z,webViewer:S.Z,rulesVue:W.Z},data(){return{columns:[{name:"nro_documento",label:"N° Control",field:"nro_documento",align:"left",sortable:!0},{name:"nro_fact",label:"N° Fact.",field:"nro_fact",align:"left"},{name:"fecha_emision",label:"Emisión",field:"fecha_emision",align:"left",sortable:!0},{name:"monto_total",label:"Monto Total",field:"monto_total",align:"right",sortable:!0,format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"observacion_entrega",label:"Descripción",field:"observacion_entrega",align:"left"},{name:"observacion_adic",label:"Observación Adicional",field:"observacion_adic",align:"left"}],form:{contacto:"",cargo:""},tipos:[{label:"Clte",value:"C",slot:"clte"},{label:"Part",value:"P",slot:"part"}],guias:[],guiasAll:[],agencias:[],rpermisos:[],clientes:[],agenciasSelected:[],clientesSelected:[],selectedAgencia:[],selectedCliente:[],selectedTipo:"C",fecha_desde:A()().subtract(7,"days").format("DD/MM/YYYY"),fecha_hasta:A()().format("DD/MM/YYYY"),clientesLoading:!1}},setup(){(0,U.Z)();return{loading:(0,M.iH)(!1),separator:(0,M.iH)("vertical"),dialog:(0,M.iH)(!1),selected:(0,M.iH)([]),pdfView:(0,M.iH)(!1),pagination:{page:1,rowsPerPage:0}}},mounted(){this.$emit("changeTitle","SCEN - Ventas - Emitir Carta de Cliente",""),this.$refs.methods.getData("/agencias","setDataAgencias","agencias"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:z.Z.getItem("tokenTraducido").usuario.roles.id,menu:"emitircarta"}})},methods:{filterArray(e,t,s,a,i){t(""!==e?()=>{const t=e.toUpperCase();for(var o=[],l=0;l<=this[a].length-1;l++)if(this[a][l][i].indexOf(t)>-1&&o.push(this[a][l]),l==this[a].length-1){this[s]=o;break}}:()=>{this[s]=this[a]})},findIndex(e,t,s){var a=this[e].findIndex((e=>e.id==t));return a>=0?this[e][a][s]:null},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setDataAgencias(e,t){this[t]=e.data,this.selectedAgencia=this.agencias[0],this.getDataClientes()},getDataClientes(){this.guias=[],this.selected=[],this.clientes=[],this.selectedCliente=[],this.$refs.methods.getData("/mmovimientos","setDataClientes","guiasAll",{headers:{agencia:this.selectedAgencia.id?this.selectedAgencia.id:"",desde:A()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:A()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),cliente_orig_exist:"C"==this.selectedTipo?"S":"",cliente_part_exist:"C"==this.selectedTipo?"":"S",tipo_in:"FA,NC,ND",estatus_admin_ex:"A"}})},async setDataClientes(e,t){if(this[t]=e.data?e.data:e,0==this.guiasAll.length){var s="C"==this.selectedTipo?"Cliente":"Particular";this.errorMessage("No se han emitido Facturas a ningun "+s+" en este período de Tiempo!!")}else{this.clientesLoading=!0;for(var a=[],i=0;i<=this.guiasAll.length-1;i++)if(a.indexOf(this.guiasAll[i].cod_cliente_org)<0){a.push(this.guiasAll[i].cod_cliente_org);var o="C"==this.selectedTipo?"/clientes":"/cparticulares";await Y.api.get(`${o}/${this.guiasAll[i].cod_cliente_org}`,{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`}}).then((e=>{this.clientes.push(e.data)}))}this.clientesLoading=!1}},getDataTable(){this.selectedCliente.id&&(this.loading=!0,this.$refs.methods.getData("/mmovimientos","setDataTable","guias",{headers:{agencia:this.selectedAgencia.id?this.selectedAgencia.id:"",cliente_orig:this.selectedCliente.id?this.selectedCliente.id:"",desde:A()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:A()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),tipo_in:"FA,NC,ND",estatus_admin_ex:"A"}}))},setDataTable(e,t){this[t]=e.data?e.data:e,this.selected=this.guias,this.loading=!1},buildNroDoc(e,t){var s="";switch(e){case"nro_documento":"FA"==t.t_de_documento?(s="FA-",t.nro_control?t.nro_control_new?t.serie_documento?s+=t.serie_documento+" - "+t.nro_control_new.padStart(9,"00-000000"):s+=t.nro_control_new.padStart(9,"00-000000"):s+=t.nro_control.padStart(4,"0000"):s+=t.serie_documento+" - "+t.nro_documento):(s="GC-",s+=t.nro_documento);break;case"nro_fact":"FA"==t.t_de_documento&&(s=t.nro_control?t.nro_control.padStart(4,"0000"):t.serie_documento+" - "+t.nro_documento);break;default:break}return s},resetFilters(){this.guias=[],this.selected=[],this.clientes=[],this.selectedCliente=[],this.selectedTipo="C",this.selectedAgencia=this.agencias[0],this.fecha_desde=A()().subtract(7,"days").format("DD/MM/YYYY"),this.fecha_hasta=A()().format("DD/MM/YYYY"),this.getDataClientes()},print(){var e=[];this.dialog=!1;for(var t=0;t<=this.selected.length-1;t++)e.push(this.selected[t].id+"/"+(this.selected[t].observacion_adic?this.selected[t].observacion_adic.toUpperCase():""));Y.api.get("/reports/cartaCliente",{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`,data:e,cliente:this.selectedCliente.nb_cliente,contacto:this.form.contacto,cargo:this.form.cargo,ciudad:this.selectedAgencia.ciudades.desc_ciudad,usuario:z.Z.getItem("tokenTraducido").usuario.nombre}}).then((e=>{if(!e.data.validDoc)return this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"}),this.resetForm(),void(this.pdfView=!1);this.$refs.webViewer.showpdf(e.data.pdfPath,1.3)})).catch((e=>{this.$q.notify({message:e.message,color:"red"}),this.resetForm(),this.pdfView=!1}))},resetForm(){this.form.contacto="",this.form.cargo=""},errorMessage(e){this.$q.notify({message:e,color:"red"})}}};var T=s(4260),I=s(4379),P=s(6778),E=s(151),F=s(5589),B=s(8689),N=s(4689),Q=s(4554),L=s(8240),H=s(2448),R=s(3414),O=s(2035),G=s(3944),K=s(5626),J=s(8761),X=s(5363),ee=s(6941),te=s(6023),se=s(3884),ae=s(7011),ie=s(2350),oe=s(677),le=s(7518),ne=s.n(le);const re=(0,T.Z)(Z,[["render",V]]),de=re;ne()(Z,"components",{QPage:I.Z,QDialog:P.Z,QCard:E.Z,QCardSection:F.Z,QForm:B.Z,QInput:N.Z,QIcon:Q.Z,QBtn:L.Z,QSelect:H.Z,QItem:R.Z,QItemSection:O.Z,QPopupProxy:G.Z,QDate:K.Z,QBtnToggle:J.Z,QTooltip:X.Z,QInnerLoading:ee.Z,QTable:te.Z,QTd:se.Z,QList:ae.Z,QItemLabel:ie.Z}),ne()(Z,"directives",{ClosePopup:oe.Z})},6700:(e,t,s)=>{var a={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":8225,"./ar-dz.js":8225,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":8092,"./es-mx.js":8092,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function i(e){var t=o(e);return s(t)}function o(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=6700}}]);