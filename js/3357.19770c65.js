(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[3357],{23759:(e,t,s)=>{"use strict";function a(e,t,s,a,i,o){return null}s.d(t,{Z:()=>c});var i=s(80589),o=s(5474),l=s(48825);const n={setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,a).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api["delete"](e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,t,a).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=s(74260);const d=(0,r.Z)(n,[["render",a]]),c=d},3868:(e,t,s)=>{"use strict";function a(e,t,s,a,i,o){return null}s.d(t,{Z:()=>c});var i=s(48825),o=s(11488),l=s.n(o);const n={name:"rules",setup(){(0,i.Z)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==l()(e,"HH:mm:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var r=s(74260);const d=(0,r.Z)(n,[["render",a]]),c=d},39798:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var a=s(83673);const i={id:"WebViewer",ref:"viewer",style:{width:"100%",height:"100%"}};function o(e,t,s,o,l,n){return(0,a.wg)(),(0,a.iD)("div",i,null,512)}s(80812),s(76105),s(15123),s(98685),s(12396);var l=s(61959),n=s(163),r=s.n(n);const d={name:"webViewer",data:function(){return{}},setup(){const e=(0,l.iH)(null);return{viewer:e}},methods:{base64ToBlob(e){const t=window.atob(e),s=t.length,a=new Uint8Array(s);for(let i=0;i<s;++i)a[i]=t.charCodeAt(i);return new Blob([a],{type:"application/pdf"})},showpdf(e,t){const s="https://scen.rcsexpress.com/webViewer";r()({path:s,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((s=>{s.UI.disableElements(["panToolButton"]),s.UI.disableElements(["textSelectButton"]),s.UI.setHeaderItems((e=>{e.push({type:"actionButton",img:"https://i.ibb.co/cr5CYSB/2.png",onClick:()=>{s.downloadPdf()}}),e.push({type:"actionButton",img:"https://i.ibb.co/3RdScYv/1.png",onClick:()=>{1==t?s.print():this.$emit("printPdf")}}),e.push({type:"actionButton",img:"https://i.ibb.co/qJqLZTd/close.png",onClick:()=>{this.$emit("closePdf")}})})),s.UI.loadDocument(this.base64ToBlob(e),{filename:"REPORTE SCEN.pdf"}),s.UI.setLanguage("es")}))}}};var c=s(74260);const m=(0,c.Z)(d,[["render",o]]),u=m},12602:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>ce});var a=s(83673),i=s(98880),o=s(62323);const l={class:"row"},n={class:"col-md-12 col-xs-12"},r={class:"col-md-12 col-xs-12"},d={class:"row justify-center items-center content-center"},c={class:"q-pa-sm justify-center"},m={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},u=(0,a._)("div",{class:"col-md-3 col-xl-2 col-lg-2 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a._)("strong",null,"MANTENIMIENTO - EMITIR CARTA A CLIENTES")])],-1),h={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},p=(0,a.Uk)(" Sin resultados "),g={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},f={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},_={class:"col-md-1 col-xl-1 col-lg-1 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},b={class:"q-gutter-md"},w=(0,a.Uk)("Clientes "),j=(0,a.Uk)("Particulares "),y={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 selectMobile2",style:{"align-self":"center","text-align":"center"}},D=(0,a.Uk)(" Sin resultados "),v={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center"}},x=(0,a.Uk)("Eliminar Filtros"),k=(0,a.Uk)("Imprimir Carta"),C={class:"q-pa-md q-gutter-y-md",style:{"margin-top":"-30px"}},V={style:{width:"700px",height:"700px"}};function M(e,t,s,M,Y,W){const q=(0,a.up)("q-icon"),A=(0,a.up)("q-input"),z=(0,a.up)("q-btn"),U=(0,a.up)("q-form"),S=(0,a.up)("q-card-section"),Z=(0,a.up)("q-card"),$=(0,a.up)("q-dialog"),T=(0,a.up)("q-item-section"),I=(0,a.up)("q-item"),E=(0,a.up)("q-select"),P=(0,a.up)("q-date"),B=(0,a.up)("q-popup-proxy"),N=(0,a.up)("q-tooltip"),Q=(0,a.up)("q-btn-toggle"),F=(0,a.up)("q-inner-loading"),L=(0,a.up)("q-td"),H=(0,a.up)("q-item-label"),R=(0,a.up)("q-list"),O=(0,a.up)("q-table"),G=(0,a.up)("webViewer"),K=(0,a.up)("methods"),J=(0,a.up)("rules-vue"),X=(0,a.up)("q-page"),ee=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(X,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)($,{modelValue:M.dialog,"onUpdate:modelValue":t[5]||(t[5]=e=>M.dialog=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U,{class:"q-gutter-md",onSubmit:t[4]||(t[4]=e=>M.pdfView=!0)},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",n,[(0,a.Wm)(A,{"upper-case":"",outlined:"",modelValue:Y.form.contacto,"onUpdate:modelValue":[t[0]||(t[0]=e=>Y.form.contacto=e),t[1]||(t[1]=e=>Y.form.contacto=Y.form.contacto.toUpperCase())],label:"Contacto",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMin(e,3),e=>this.$refs.rulesVue.isMax(e,100)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(q,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",r,[(0,a.Wm)(A,{"upper-case":"",outlined:"",modelValue:Y.form.cargo,"onUpdate:modelValue":[t[2]||(t[2]=e=>Y.form.cargo=e),t[3]||(t[3]=e=>Y.form.cargo=Y.form.cargo.toUpperCase())],label:"Cargo",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMin(e,3),e=>this.$refs.rulesVue.isMax(e,100)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(q,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])])]),(0,a._)("div",d,[(0,a.Wm)(z,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(z,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[ee]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",c,[(0,a._)("div",m,[u,(0,a._)("div",h,[(0,a.Wm)(E,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:Y.agenciasSelected,onFilter:t[6]||(t[6]=(e,t)=>W.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:Y.selectedAgencia,"onUpdate:modelValue":[t[7]||(t[7]=e=>Y.selectedAgencia=e),t[8]||(t[8]=e=>W.getDataClientes())],outlined:"",standout:"",label:"Agencia"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Wm)(T,{class:"text-grey"},{default:(0,a.w5)((()=>[p])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(q,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",g,[(0,a.Wm)(A,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:Y.fecha_desde,"onUpdate:modelValue":t[13]||(t[13]=e=>Y.fecha_desde=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)],onBlur:t[14]||(t[14]=e=>W.getDataClientes()),onKeyup:t[15]||(t[15]=(0,i.D2)((e=>W.getDataClientes()),["enter"]))},{append:(0,a.w5)((()=>[(0,a.Wm)(q,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{ref:"qDateProxy1","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{modelValue:Y.fecha_desde,"onUpdate:modelValue":[t[9]||(t[9]=e=>Y.fecha_desde=e),t[12]||(t[12]=e=>{W.getDataClientes(),this.$refs.qDateProxy1.hide()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"},onBlur:t[10]||(t[10]=e=>W.getDataClientes()),onKeyup:t[11]||(t[11]=(0,i.D2)((e=>W.getDataClientes()),["enter"]))},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",f,[(0,a.Wm)(A,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:Y.fecha_hasta,"onUpdate:modelValue":t[20]||(t[20]=e=>Y.fecha_hasta=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)],onBlur:t[21]||(t[21]=e=>W.getDataClientes()),onKeyup:t[22]||(t[22]=(0,i.D2)((e=>W.getDataClientes()),["enter"]))},{append:(0,a.w5)((()=>[(0,a.Wm)(q,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{ref:"qDateProxy2","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{modelValue:Y.fecha_hasta,"onUpdate:modelValue":[t[16]||(t[16]=e=>Y.fecha_hasta=e),t[19]||(t[19]=e=>{W.getDataClientes(),this.$refs.qDateProxy2.hide()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"},onBlur:t[17]||(t[17]=e=>W.getDataClientes()),onKeyup:t[18]||(t[18]=(0,i.D2)((e=>W.getDataClientes()),["enter"]))},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",_,[(0,a._)("div",b,[(0,a.Wm)(Q,{modelValue:Y.selectedTipo,"onUpdate:modelValue":[t[23]||(t[23]=e=>Y.selectedTipo=e),t[24]||(t[24]=e=>W.getDataClientes())],spread:"",class:"my-custom-toggle",rounded:"",unelevated:"","toggle-color":"primary",color:"white","text-color":"black",options:Y.tipos},{clte:(0,a.w5)((()=>[(0,a.Wm)(N,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[w])),_:1})])),part:(0,a.w5)((()=>[(0,a.Wm)(N,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[j])),_:1})])),_:1},8,["modelValue","options"])])]),(0,a._)("div",y,[(0,a.Wm)(E,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:Y.clientesSelected,onFilter:t[25]||(t[25]=(e,t)=>W.filterArray(e,t,"clientesSelected","C"==this.selectedTipo?"clientes":"cparticulares","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_cliente","option-value":"id",modelValue:Y.selectedCliente,"onUpdate:modelValue":[t[26]||(t[26]=e=>Y.selectedCliente=e),t[27]||(t[27]=e=>W.getDataTable())],loading:Y.clientesLoading,disable:Y.clientesLoading,outlined:"",standout:"",label:"Cliente"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Wm)(T,{class:"text-grey"},{default:(0,a.w5)((()=>[D])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(q,{name:"search"})])),clientesLoading:(0,a.w5)((()=>[(0,a.Wm)(F,{showing:"",color:"primary",class:"loading"})])),_:1},8,["options","modelValue","loading","disable"])]),(0,a._)("div",v,[(0,a.Wm)(z,{dense:"",color:"primary",round:"",padding:"sm",onClick:t[28]||(t[28]=e=>this.resetFilters()),style:{"margin-right":"15px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{size:"25px",name:"filter_alt_off",color:"white"}),(0,a.Wm)(N,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[x])),_:1})])),_:1}),(0,a.Wm)(z,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-right":"5px"},disabled:!(this.guias.length>0),onClickCapture:t[29]||(t[29]=e=>this.dialog=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{size:"25px",name:"print",color:"white"}),(0,a.Wm)(N,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[k])),_:1})])),_:1},8,["disabled"])])])]),(0,a._)("div",C,[(0,a.Wm)(O,{rows:Y.guias,"binary-state-sort":"","row-key":"id",columns:Y.columns,loading:M.loading,class:"tableHeight",selection:"multiple",separator:M.separator,grid:e.$q.screen.xs,"rows-per-page-options":[0],pagination:M.pagination,style:{width:"100%",height:"560px"},"hide-bottom":"",selected:M.selected,"onUpdate:selected":t[30]||(t[30]=e=>M.selected=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(F,{showing:"",color:"primary",class:"loading"})])),"body-cell-nro_documento":(0,a.w5)((e=>[(0,a.Wm)(L,{props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(W.buildNroDoc("nro_documento",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_fact":(0,a.w5)((e=>[(0,a.Wm)(L,{props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(W.buildNroDoc("nro_fact",e.row)),1)])),_:2},1032,["props"])])),"body-cell-observacion_adic":(0,a.w5)((e=>[(0,a.Wm)(L,{props:e,style:{"padding-top":"30px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{outlined:"",modelValue:e.row.observacion_adic,"onUpdate:modelValue":t=>e.row.observacion_adic=t,dense:"",hint:"",rules:[e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)],"lazy-rules":""},null,8,["modelValue","onUpdate:modelValue","rules"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(Z,{class:(0,o.C_)(e.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(R,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(t=>((0,a.wg)(),(0,a.j4)(I,{key:t.name},{default:(0,a.w5)((()=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(H,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.label),1)])),_:2},1024)])),_:2},1024),"nro_documento"===t.name?((0,a.wg)(),(0,a.j4)(T,{key:0,side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(W.buildNroDoc("nro_documento",e.row)),1)])),_:2},1024)):(0,a.kq)("",!0),"nro_fact"===t.name?((0,a.wg)(),(0,a.j4)(T,{key:1,side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(W.buildNroDoc("nro_fact",e.row)),1)])),_:2},1024)):(0,a.kq)("",!0),"fecha_emision"===t.name?((0,a.wg)(),(0,a.j4)(T,{key:2,side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.fecha_emision),1)])),_:2},1024)):(0,a.kq)("",!0),"monto_total"===t.name?((0,a.wg)(),(0,a.j4)(T,{key:3,side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.monto_total),1)])),_:2},1024)):(0,a.kq)("",!0),"observacion_entrega"===t.name?((0,a.wg)(),(0,a.j4)(T,{key:4,side:"",class:"itemMovilSide",style:{"text-align":"right !important"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.row.observacion_entrega),1)])),_:2},1024)):(0,a.kq)("",!0),"observacion_adic"===t.name?((0,a.wg)(),(0,a.j4)(T,{key:5,side:"",class:"itemMovilSide",style:{"text-align":"right !important","align-self":"center"}},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{outlined:"",modelValue:e.row.observacion_adic,"onUpdate:modelValue":t=>e.row.observacion_adic=t,dense:"",hint:"",rules:[e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)],"lazy-rules":"","hide-bottom-space":"",style:{"padding-top":"20px"}},null,8,["modelValue","onUpdate:modelValue","rules"])])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","grid","pagination","selected"])]),(0,a.Wm)($,{modelValue:M.pdfView,"onUpdate:modelValue":t[31]||(t[31]=e=>M.pdfView=e),onShow:t[32]||(t[32]=e=>this.printLetter())},{default:(0,a.w5)((()=>[(0,a._)("div",V,[(0,a.Wm)(G,{ref:"webViewer",onClosePdf:W.closePdf},null,8,["onClosePdf"])])])),_:1},8,["modelValue"]),(0,a.Wm)(K,{ref:"methods",onSetDataAgencias:W.setDataAgencias,onGetDataClientes:W.getDataClientes,onSetDataClientes:W.setDataClientes,onGetDataTable:W.getDataTable,onSetDataTable:W.setDataTable,onSetDataPermisos:W.setDataPermisos},null,8,["onSetDataAgencias","onGetDataClientes","onSetDataClientes","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,a.Wm)(J,{ref:"rulesVue"},null,512)])),_:1})}s(65363);var Y=s(61959),W=s(5474),q=s(3868),A=s(11488),z=s.n(A),U=s(48825),S=s(80589),Z=s(23759),$=s(39798);const T={components:{methods:Z.Z,webViewer:$.Z,rulesVue:q.Z},data(){return{columns:[{name:"nro_documento",label:"N° Control",field:"nro_documento",align:"left",sortable:!0},{name:"nro_fact",label:"N° Fact.",field:"nro_fact",align:"left"},{name:"fecha_emision",label:"Emisión",field:"fecha_emision",align:"left",sortable:!0},{name:"monto_total",label:"Monto Total",field:"monto_total",align:"right",sortable:!0,format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"observacion_entrega",label:"Descripción",field:"observacion_entrega",align:"left"},{name:"observacion_adic",label:"Observación Adicional",field:"observacion_adic",align:"left"}],form:{contacto:"",cargo:""},tipos:[{label:"Clte",value:"C",slot:"clte"},{label:"Part",value:"P",slot:"part"}],guias:[],guiasAll:[],agencias:[],rpermisos:[],clientes:[],agenciasSelected:[],clientesSelected:[],selectedAgencia:[],selectedCliente:[],selectedTipo:"C",fecha_desde:z()().subtract(7,"days").format("DD/MM/YYYY"),fecha_hasta:z()().format("DD/MM/YYYY"),clientesLoading:!1}},setup(){(0,U.Z)();return{loading:(0,Y.iH)(!1),separator:(0,Y.iH)("vertical"),dialog:(0,Y.iH)(!1),selected:(0,Y.iH)([]),pdfView:(0,Y.iH)(!1),pagination:{page:1,rowsPerPage:0}}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Emitir Carta de Cliente",""),this.$refs.methods.getData("/agencias","setDataAgencias","agencias"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:S.Z.getItem("tokenTraducido").usuario.roles.id,menu:"emitircarta"}})},methods:{closePdf(){this.pdfView=!1},filterArray(e,t,s,a,i){t(""!==e?()=>{const t=e.toUpperCase();for(var o=[],l=0;l<=this[a].length-1;l++)if(this[a][l][i].indexOf(t)>-1&&o.push(this[a][l]),l==this[a].length-1){this[s]=o;break}}:()=>{this[s]=this[a]})},findIndex(e,t,s){var a=this[e].findIndex((e=>e.id==t));return a>=0?this[e][a][s]:null},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setDataAgencias(e,t){this[t]=e.data,this.selectedAgencia=this.agencias[0],this.getDataClientes()},getDataClientes(){this.guias=[],this.selected=[],this.clientes=[],this.selectedCliente=[],this.$refs.methods.getData("/mmovimientos","setDataClientes","guiasAll",{headers:{agencia:this.selectedAgencia.id?this.selectedAgencia.id:"",desde:z()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:z()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),cliente_orig_exist:"C"==this.selectedTipo?"S":"",cliente_part_exist:"C"==this.selectedTipo?"":"S",tipo_in:"FA,NC,ND",estatus_admin_ex:"A"}})},async setDataClientes(e,t){if(this[t]=e.data?e.data:e,0==this.guiasAll.length){var s="C"==this.selectedTipo?"Cliente":"Particular";this.errorMessage("No se han emitido Facturas a ningun "+s+" en este período de Tiempo!!")}else{this.clientesLoading=!0;for(var a=[],i=0;i<=this.guiasAll.length-1;i++)if(a.indexOf(this.guiasAll[i].cod_cliente_org)<0){a.push(this.guiasAll[i].cod_cliente_org);var o="C"==this.selectedTipo?"/clientes":"/cparticulares";await W.api.get(`${o}/${this.guiasAll[i].cod_cliente_org}`,{headers:{Authorization:`Bearer ${S.Z.getItem("token")}`}}).then((e=>{this.clientes.push(e.data)}))}this.clientesLoading=!1}},getDataTable(){this.selectedCliente.id&&(this.loading=!0,this.$refs.methods.getData("/mmovimientos","setDataTable","guias",{headers:{agencia:this.selectedAgencia.id?this.selectedAgencia.id:"",cliente_orig:this.selectedCliente.id?this.selectedCliente.id:"",desde:z()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:z()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),tipo_in:"FA,NC,ND",estatus_admin_ex:"A"}}))},setDataTable(e,t){this[t]=e.data?e.data:e,this.selected=this.guias,this.loading=!1},buildNroDoc(e,t){var s="";switch(e){case"nro_documento":"FA"==t.t_de_documento?(s="FA-",t.nro_control?t.nro_control_new?t.serie_documento?s+=t.serie_documento+" - "+t.nro_control_new.padStart(9,"00-000000"):s+=t.nro_control_new.padStart(9,"00-000000"):s+=t.nro_control.padStart(4,"0000"):s+=t.serie_documento+" - "+t.nro_documento):(s="GC-",s+=t.nro_documento);break;case"nro_fact":"FA"==t.t_de_documento&&(s=t.nro_control?t.nro_control.padStart(4,"0000"):t.serie_documento+" - "+t.nro_documento);break;default:break}return s},resetFilters(){this.guias=[],this.selected=[],this.clientes=[],this.selectedCliente=[],this.selectedTipo="C",this.selectedAgencia=this.agencias[0],this.fecha_desde=z()().subtract(7,"days").format("DD/MM/YYYY"),this.fecha_hasta=z()().format("DD/MM/YYYY"),this.getDataClientes()},printLetter(){var e=[];this.dialog=!1;for(var t=0;t<=this.selected.length-1;t++)e.push(this.selected[t].id+"/"+(this.selected[t].observacion_adic?this.selected[t].observacion_adic.toUpperCase():""));W.api.get("/reports/cartaCliente",{headers:{Authorization:`Bearer ${S.Z.getItem("token")}`,data:e,cliente:this.selectedCliente.nb_cliente,contacto:this.form.contacto,cargo:this.form.cargo,ciudad:this.selectedAgencia.ciudades.desc_ciudad}}).then((e=>{this.$refs.webViewer.showpdf(e.data.base64),this.resetForm()}))},resetForm(){this.form.contacto="",this.form.cargo=""},errorMessage(e){this.$q.notify({message:e,color:"red"})}}};var I=s(74260),E=s(24379),P=s(46778),B=s(10151),N=s(25589),Q=s(68689),F=s(64689),L=s(24554),H=s(48240),R=s(72448),O=s(83414),G=s(52035),K=s(83944),J=s(85626),X=s(38761),ee=s(5363),te=s(66941),se=s(96023),ae=s(83884),ie=s(27011),oe=s(2350),le=s(60677),ne=s(7518),re=s.n(ne);const de=(0,I.Z)(T,[["render",M]]),ce=de;re()(T,"components",{QPage:E.Z,QDialog:P.Z,QCard:B.Z,QCardSection:N.Z,QForm:Q.Z,QInput:F.Z,QIcon:L.Z,QBtn:H.Z,QSelect:R.Z,QItem:O.Z,QItemSection:G.Z,QPopupProxy:K.Z,QDate:J.Z,QBtnToggle:X.Z,QTooltip:ee.Z,QInnerLoading:te.Z,QTable:se.Z,QTd:ae.Z,QList:ie.Z,QItemLabel:oe.Z}),re()(T,"directives",{ClosePopup:le.Z})},46700:(e,t,s)=>{var a={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function i(e){var t=o(e);return s(t)}function o(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=46700}}]);