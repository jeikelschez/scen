(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[6002],{93899:(e,t,a)=>{"use strict";function o(e,t,a,o,s,i){return null}a.d(t,{A:()=>c});var s=a(45022),i=a(80660),l=a(14907);const n={setup(){const e=(0,l.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.A.getItem("token")}`,i.api.get(e,o).then((e=>{this.$emit(t,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.A.getItem("token")}`,i.api.post(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.A.getItem("token")}`,i.api.put(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,a={headers:{}}){a.headers.Authorization=`Bearer ${s.A.getItem("token")}`,i.api.delete(e,a).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.A.getItem("token")}`,i.api.post(e,t,o).then((e=>{(e.status=200)&&this.$emit(a,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=a(12807);const d=(0,r.A)(n,[["render",o]]),c=d},99565:(e,t,a)=>{"use strict";function o(e,t,a,o,s,i){return null}a.d(t,{A:()=>c});var s=a(14907),i=a(85038),l=a.n(i);const n={name:"rules",setup(){(0,s.A)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrencyWithZero(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,a=!1){if(null!==e&&""!==e&&e.length>t)return!1!==a?a:`Maximo ${t} Caracteres`},isMin(e,t,a=!1){if(null!==e&&""!==e&&e.length<t)return!1!==a?a:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==l()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var r=a(12807);const d=(0,r.A)(n,[["render",o]]),c=d},84685:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>te});var o=a(61758),s=a(58790);const i={class:"row"},l={class:"col-md-6 col-xs-12"},n={class:"col-md-6 col-xs-12"},r={class:"col-md-12 col-xs-12"},d={class:"row justify-center items-center content-center"},c={class:"q-pa-sm justify-center"},u={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"padding-right":"30px"}},m=(0,o.Lk)("div",{class:"col-md-3 col-xl-2 col-lg-2 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,o.Lk)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,o.Lk)("strong",null,"VENTAS - ANULACION DE GUIAS")])],-1),p={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},h={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},_={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},f={class:"col-md-3 col-xl-3 col-lg-3 col-xs-10 col-sm-10 cardMargin",style:{"align-self":"center","text-align":"center"}},g={class:"col-md-1 col-xl-1 col-lg-1 col-xs-2 col-sm-2",style:{"align-self":"center","text-align":"center"}},b={class:"q-pa-md q-gutter-y-md",style:{"margin-top":"-20px"}},k=(0,o.Lk)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Está seguro que desea Anular el documento seleccionado? ",-1);function j(e,t,a,j,v,A){const D=(0,o.g2)("q-icon"),y=(0,o.g2)("q-input"),F=(0,o.g2)("q-select"),x=(0,o.g2)("q-btn"),Y=(0,o.g2)("q-form"),w=(0,o.g2)("q-card-section"),C=(0,o.g2)("q-card"),M=(0,o.g2)("q-dialog"),I=(0,o.g2)("q-item-section"),$=(0,o.g2)("q-item"),q=(0,o.g2)("q-date"),S=(0,o.g2)("q-popup-proxy"),T=(0,o.g2)("q-tooltip"),V=(0,o.g2)("q-inner-loading"),z=(0,o.g2)("q-td"),E=(0,o.g2)("q-item-label"),N=(0,o.g2)("q-list"),P=(0,o.g2)("q-table"),R=(0,o.g2)("q-card-actions"),U=(0,o.g2)("methods"),L=(0,o.g2)("rules-vue"),O=(0,o.g2)("q-page"),B=(0,o.gN)("close-popup");return(0,o.uX)(),(0,o.Wv)(O,{class:"pagina q-pa-md"},{default:(0,o.k6)((()=>[(0,o.bF)(M,{modelValue:j.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>j.dialog=e)},{default:(0,o.k6)((()=>[(0,o.bF)(C,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,o.k6)((()=>[(0,o.bF)(w,null,{default:(0,o.k6)((()=>[(0,o.bF)(Y,{class:"q-gutter-md",onSubmit:t[3]||(t[3]=e=>A.sendData())},{default:(0,o.k6)((()=>[(0,o.Lk)("div",i,[(0,o.Lk)("div",l,[(0,o.bF)(y,{"upper-case":"",outlined:"",modelValue:v.form.fecha,"onUpdate:modelValue":t[0]||(t[0]=e=>v.form.fecha=e),label:"Fecha",class:"pcform",hint:"",disable:!0},{prepend:(0,o.k6)((()=>[(0,o.bF)(D,{name:"apartment"})])),_:1},8,["modelValue"])]),(0,o.Lk)("div",n,[(0,o.bF)(F,{outlined:"",modelValue:v.form.motivo,"onUpdate:modelValue":t[1]||(t[1]=e=>v.form.motivo=e),label:"Motivo",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e)],options:v.motivos,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"desc_concepto","option-value":"id"},null,8,["modelValue","rules","options"])]),(0,o.Lk)("div",r,[(0,o.bF)(y,{outlined:"",modelValue:v.form.observacion,"onUpdate:modelValue":t[2]||(t[2]=e=>v.form.observacion=e),label:"Observación",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMin(e,3),e=>this.$refs.rulesVue.isMax(e,500)]},{prepend:(0,o.k6)((()=>[(0,o.bF)(D,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])])]),(0,o.Lk)("div",d,[(0,o.bF)(x,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.bo)((0,o.bF)(x,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[B]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Lk)("div",c,[(0,o.Lk)("div",u,[m,(0,o.Lk)("div",p,[(0,o.bF)(F,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:v.agenciasSelected,onFilter:t[5]||(t[5]=(e,t)=>A.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:v.selectedAgencia,"onUpdate:modelValue":[t[6]||(t[6]=e=>v.selectedAgencia=e),t[7]||(t[7]=e=>A.getDataTable())],outlined:"",standout:"",label:"Agencia"},{"no-option":(0,o.k6)((()=>[(0,o.bF)($,null,{default:(0,o.k6)((()=>[(0,o.bF)(I,{class:"text-grey"},{default:(0,o.k6)((()=>[(0,o.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,o.k6)((()=>[(0,o.bF)(D,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o.Lk)("div",h,[(0,o.bF)(y,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:v.fecha_desde,"onUpdate:modelValue":[t[10]||(t[10]=e=>v.fecha_desde=e),t[11]||(t[11]=e=>A.getDataTable())],"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.k6)((()=>[(0,o.bF)(D,{name:"event",class:"cursor-pointer"},{default:(0,o.k6)((()=>[(0,o.bF)(S,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.k6)((()=>[(0,o.bF)(q,{modelValue:v.fecha_desde,"onUpdate:modelValue":[t[8]||(t[8]=e=>v.fecha_desde=e),t[9]||(t[9]=e=>{this.$refs.qDateProxy.hide(),A.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o.Lk)("div",_,[(0,o.bF)(y,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:v.fecha_hasta,"onUpdate:modelValue":[t[14]||(t[14]=e=>v.fecha_hasta=e),t[15]||(t[15]=e=>A.getDataTable())],mask:"##/##/####","lazy-rules":"",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.k6)((()=>[(0,o.bF)(D,{name:"event",class:"cursor-pointer"},{default:(0,o.k6)((()=>[(0,o.bF)(S,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.k6)((()=>[(0,o.bF)(q,{modelValue:v.fecha_hasta,"onUpdate:modelValue":[t[12]||(t[12]=e=>v.fecha_hasta=e),t[13]||(t[13]=e=>{this.$refs.qDateProxy.hide(),A.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o.Lk)("div",f,[(0,o.bF)(F,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:v.tipos,onFilter:t[16]||(t[16]=(e,t)=>A.filterArray(e,t,"tiposSelected","tipos","descripcion")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"label","option-value":"value",modelValue:v.selectedTipo,"onUpdate:modelValue":[t[17]||(t[17]=e=>v.selectedTipo=e),t[18]||(t[18]=e=>A.getDataTable())],outlined:"",standout:"",label:"Tipo de Control"},{"no-option":(0,o.k6)((()=>[(0,o.bF)($,null,{default:(0,o.k6)((()=>[(0,o.bF)(I,{class:"text-grey"},{default:(0,o.k6)((()=>[(0,o.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,o.k6)((()=>[(0,o.bF)(D,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o.Lk)("div",g,[(0,o.bF)(x,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-left":"15px"},onClick:t[19]||(t[19]=e=>A.resetFilters())},{default:(0,o.k6)((()=>[(0,o.bF)(D,{size:"25px",name:"filter_alt_off",color:"white"}),(0,o.bF)(T,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,o.k6)((()=>[(0,o.eW)("Resetear Filtros")])),_:1})])),_:1})])])]),(0,o.Lk)("div",b,[(0,o.bF)(P,{rows:v.guias,"binary-state-sort":"","row-key":"id",columns:v.columns,separator:j.separator,"rows-per-page-options":[5,10,15,20,50],onRequest:A.getDataTable,style:{width:"100%",height:"590px"},loading:j.loading,grid:e.$q.screen.xs,pagination:v.pagination,"onUpdate:pagination":t[20]||(t[20]=e=>v.pagination=e),"visible-columns":j.visibleColumns},{loading:(0,o.k6)((()=>[(0,o.bF)(V,{showing:"",color:"primary",class:"loading"})])),"body-cell-nro_documento":(0,o.k6)((e=>[(0,o.bF)(z,{props:e},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(A.buildNroDoc("nro_documento",e.row)),1)])),_:2},1032,["props"])])),"body-cell-cod_cliente_org":(0,o.k6)((e=>[(0,o.bF)(z,{props:e},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(A.buildNbCliente(e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_doc":(0,o.k6)((e=>[(0,o.bF)(z,{props:e},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(A.buildNroDoc("nro_doc",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_ref":(0,o.k6)((e=>[(0,o.bF)(z,{props:e},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(A.buildNroDoc("nro_ref",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_doc_principal":(0,o.k6)((e=>[(0,o.bF)(z,{props:e},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(A.buildNroDoc("nro_doc_principal",e.row)),1)])),_:2},1032,["props"])])),"body-cell-estatus_administra":(0,o.k6)((e=>[(0,o.bF)(z,{props:e},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(A.filterDesc("estatus_administrativo",e.row.estatus_administra)),1)])),_:2},1032,["props"])])),"body-cell-tipo_factura":(0,o.k6)((e=>[(0,o.bF)(z,{props:e},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(A.filterDesc("tipo_factura",e.row.tipo_factura)),1)])),_:2},1032,["props"])])),"body-cell-action":(0,o.k6)((e=>[(0,o.bF)(z,{props:e},{default:(0,o.k6)((()=>[(0,o.bF)(x,{dense:"",round:"",flat:"",color:"primary",icon:"disabled_by_default",disabled:!!this.allowOption(3)||"A"==e.row.estatus_administra,onClick:t=>{this.form.guia=e.row,j.dialog=!0}},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,o.k6)((e=>[(0,o.Lk)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,s.Tr)(e.selected?"transform: scale(0.95);":"")},[(0,o.bF)(C,{class:(0,s.C4)(e.selected?"bg-grey-2":"")},{default:(0,o.k6)((()=>[(0,o.bF)(N,{dense:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.cols,(t=>((0,o.uX)(),(0,o.Wv)($,{key:t.name},{default:(0,o.k6)((()=>[(0,o.bF)(I,null,{default:(0,o.k6)((()=>[(0,o.bF)(E,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(t.label),1)])),_:2},1024)])),_:2},1024),(0,o.bF)(I,{side:""},{default:(0,o.k6)((()=>[(0,o.bF)(E,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(t.value),1)])),_:2},1024)])),_:2},1024),(0,o.bF)(I,{side:"",class:"itemMovilSide"},{default:(0,o.k6)((()=>[(0,o.bF)(x,{dense:"",round:"",flat:"",color:"primary",icon:"disabled_by_default",disabled:!!this.allowOption(3)||"A"==e.row.estatus_administra,onClick:t=>{this.form.guia=e.row,j.dialog=!0}},null,8,["disabled","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","onRequest","loading","grid","pagination","visible-columns"])]),(0,o.bF)(M,{modelValue:j.confirmPopUp,"onUpdate:modelValue":t[23]||(t[23]=e=>j.confirmPopUp=e),persistent:""},{default:(0,o.k6)((()=>[(0,o.bF)(C,{style:{width:"700px"}},{default:(0,o.k6)((()=>[(0,o.bF)(w,null,{default:(0,o.k6)((()=>[k])),_:1}),(0,o.bF)(R,{align:"right"},{default:(0,o.k6)((()=>[(0,o.bo)((0,o.bF)(x,{flat:"",label:"Cancelar",color:"primary",onClick:t[21]||(t[21]=e=>this.confirmUpload=!1)},null,512),[[B]]),(0,o.bo)((0,o.bF)(x,{flat:"",label:"Guardar",color:"primary",onClick:t[22]||(t[22]=e=>this.confirmUpload=!0)},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.bF)(U,{ref:"methods",onSetData:A.setData,onSetDataInit:A.setDataInit,onSetDataEdit:A.setDataEdit,onGetDataTable:A.getDataTable,onSetDataTable:A.setDataTable,onSetDataPermisos:A.setDataPermisos},null,8,["onSetData","onSetDataInit","onSetDataEdit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,o.bF)(L,{ref:"rulesVue"},null,512)])),_:1})}a(10239);var v=a(38734),A=a(85038),D=a.n(A),y=a(80660),F=a(99565),x=a(14907),Y=a(45022),w=a(93899);const C={components:{methods:w.A,rulesVue:F.A},data(){return{columns:[{name:"nro_documento",label:"N° Control",field:"nro_documento",align:"left",sortable:!0},{name:"nro_doc",label:"N° Doc.",field:"nro_doc",align:"left"},{name:"nro_ref",label:"Ref.",field:"nro_ref",align:"left"},{name:"fecha_emision",label:"Emisión",field:"fecha_emision",align:"left",sortable:!0},{name:"cod_cliente_org",label:"Cliente",field:"cod_cliente_org",align:"left",sortable:!0},{name:"monto_total",label:"Monto Total",field:"monto_total",align:"right",sortable:!0,format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"nro_doc_principal",label:"Doc. Ppal.",field:"nro_doc_principal",align:"left"},{name:"estatus_administra",label:"Estatus",field:"estatus_administra",align:"left",sortable:!0},{name:"tipo_factura",label:"Tipo Factura",field:"tipo_factura",align:"left",sortable:!0},{name:"action",label:"Acción",align:"center"}],form:{guia:{},fecha:D()().format("DD/MM/YYYY"),motivo:"",observacion:""},estatus_administrativo:[{label:"EN ELABORACIÓN",value:"E"},{label:"PENDIENTE POR FACTURAR",value:"F"},{label:"CON FACTURA GENERADA",value:"G"},{label:"ANULADA",value:"A"},{label:"PENDIENTE DE COBRAR",value:"P"},{label:"CANCELADA",value:"C"},{label:"PENDIENTE POR IMPRIMIR",value:"I"},{label:"MODIFICADA",value:"M"}],tipo_factura:[{label:"GUÍAS CRÉDITO",value:"FG"},{label:"PREPAGO",value:"FP"},{label:"OTROS INGRESOS",value:"FO"},{label:"GUÍAS CONTADO",value:"FC"}],tipos:[{label:"GUÍA CARGA",value:"GC"},{label:"FACTURA",value:"FA"}],pagination:{page:1,rowsPerPage:10,sortBy:"nro_documento",descending:!0,rowsNumber:""},clientesAll:[],clientesParticularesAll:[],motivos:[],guias:[],fecha_desde:D()().format("DD/MM/YYYY"),fecha_hasta:D()().format("DD/MM/YYYY"),agencias:[],selectedAgencia:[],agenciasSelected:[],selectedTipo:[],rpermisos:[],confirmUpload:!1}},setup(){(0,x.A)();return{loading:(0,v.KR)(!1),separator:(0,v.KR)("vertical"),dialog:(0,v.KR)(!1),confirmPopUp:(0,v.KR)(!1),visibleColumns:(0,v.KR)(["nro_documento","nro_doc","nro_ref","fecha_emision","cod_cliente_org","monto_total","nro_doc_principal","estatus_administra","action"])}},mounted(){this.$emit("changeTitle","SCEN - Ventas - Anulacion de Guias",""),this.$refs.methods.getData("/agencias","setDataInit","agencias",{headers:{order_by:"nb_agencia",order_direction:"ASC"}}),this.$refs.methods.getData("/clientes","setData","clientesAll"),this.$refs.methods.getData("/coperacion","setData","motivos",{headers:{tipo:2}}),this.$refs.methods.getData("/cparticulares","setData","clientesParticularesAll"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:Y.A.getItem("tokenTraducido").usuario.roles.id,menu:"anulacionguias"}})},methods:{filterArray(e,t,a,o,s){t(""!==e?()=>{const t=e.toUpperCase();for(var i=[],l=0;l<=this[o].length-1;l++)if(this[o][l][s].indexOf(t)>-1&&i.push(this[o][l]),l==this[o].length-1){this[a]=i;break}}:()=>{this[a]=this[o]})},filterDesc(e,t){var a=this[e].findIndex((e=>e.value==t));return a>=0?this[e][a].label:null},findIndex(e,t,a){var o=this[e].findIndex((e=>e.id==t));return o>=0?this[e][o][a]:null},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setData(e,t){this[t]=e.data?e.data:e},setDataInit(e,t){this[t]=e.data,this.selectedTipo=this.tipos[0],this.getDataTable()},getDataTable(e){this.loading=!0,"FA"==this.selectedTipo.value?this.visibleColumns.push("tipo_factura"):this.visibleColumns=this.visibleColumns.filter((e=>"tipo_factura"!==e)),e&&(this.pagination=e.pagination),this.$refs.methods.getData("/mmovimientos","setDataTable","guias",{headers:{filters:JSON.stringify({agencia:this.selectedAgencia.id,tipo:this.selectedTipo.value,desde:D()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:D()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),estatus_admin_ex:"G,C",no_abono:"S"}),page:this.pagination.page,limit:this.pagination.rowsPerPage,order:this.pagination.sortBy,direction:this.pagination.descending?"DESC":"ASC"}})},setDataTable(e,t){this[t]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},setDataEdit(e,t){this[t].id=e.id,this[t].tipo=e.tipo,this[t].control_inicio=e.control_inicio,this[t].control_final=e.control_final,this[t].ult_doc_referencia=e.ult_doc_referencia,this[t].estatus_lote=this.filterDesc("estatus",e.estatus_lote),this[t].serie_doc=e.serie_doc,this[t].cod_agencia=e.cod_agencia},async sendData(){if(this.confirmPopUp=!0,await this.until((e=>1==this.confirmUpload)),this.confirmUpload){this.confirmUpload=!1;var e={};e.cod_concepto=this.form.motivo.id,e.fecha_anulacion=D()(this.form.fecha,"DD/MM/YYYY").format("YYYY-MM-DD"),e.observacion=this.form.observacion,e.estatus_administra="A",e.check_anulada=1,e.fecha_anulada=D()(this.form.fecha,"DD/MM/YYYY").format("YYYY-MM-DD"),await y.api.put(`/mmovimientos/${this.form.guia.id}`,e,{headers:{Authorization:`Bearer ${Y.A.getItem("token")}`}}).catch((()=>{this.errorMessage("Error del Sistema. Problemas al actualizar los datos de la anulación. Comuníquese con el proveedor del Sistemas...")})),"FA"!=this.form.guia.t_de_documento||"FG"!=this.form.guia.tipo_factura&&"FC"!=this.form.guia.tipo_factura||(this.form.guia.porc_descuento>0&&await y.api.get("/mmovimientos/",{headers:{Authorization:`Bearer ${Y.A.getItem("token")}`,filters:JSON.stringify({nro_doc_ppal:this.form.guia.nro_documento,nro_ctrl_doc_ppal:this.form.guia.nro_control})}}).then((e=>{if(e.data.data.length>0)for(var t=0;t<=e.data.data.length-1;t++){var a={},o=this.parseFloatN(this.form.guia.monto_ref_cte_sin_imp),s=this.parseFloatN(this.form.guia.porc_impuesto),i=this.parseFloatN(o)*this.parseFloatN(s)/100,l=this.parseFloatN(o)+this.parseFloatN(i);a.monto_base=o,a.monto_subtotal=o,a.monto_impuesto=0,a.monto_total=l,a.saldo=l,a.porc_descuento=0,a.monto_descuento=0,a.base_comision_vta_rcl=o,y.api.put(`/mmovimientos/${e.data.data[t].id}`,a,{headers:{Authorization:`Bearer ${Y.A.getItem("token")}`}}),e.data.data[t].cod_agente_venta&&y.api.get(`/agentes/${e.data.data[t].cod_agente_venta}`,{headers:{Authorization:`Bearer ${Y.A.getItem("token")}`}}).then((e=>{e.data.porc_comision_venta>0&&y.api.get("/ccomisiones",{headers:{Authorization:`Bearer ${Y.A.getItem("token")}`,cod_movimiento:e.data.data[t].id,tipo:"V"}}).then((e=>{if(e.data.data[0]){var t={monto_comision:this.parseFloatN(o)*this.parseFloatN(e.data.porc_comision_venta)/100};y.api.put(`/ccomisiones/${e.data.data[0].id}`,t,{headers:{Authorization:`Bearer ${Y.A.getItem("token")}`}})}}))}))}})),await y.api.get("/mmovimientos/",{headers:{Authorization:`Bearer ${Y.A.getItem("token")}`,filters:JSON.stringify({tipo_doc_ppal:"FA",nro_doc_ppal:this.form.guia.nro_documento,nro_ctrl_doc_ppal:this.form.guia.nro_control,cod_ag_doc_ppal:this.form.guia.cod_agencia,tipo:"GC"})}}).then((e=>{if(e.data.data.length>0)for(var t=0;t<=e.data.data.length-1;t++){var a={estatus_administra:"F",tipo_doc_principal:null,nro_doc_principal:null,serie_doc_principal:null,nro_ctrl_doc_ppal:null,cod_ag_doc_ppal:null,nro_ctrl_doc_ppal_new:null};a.fecha_pxfac=D()().format("YYYY-MM-DD"),a.check_pxfac=1,a.fecha_anulada=D()().format("YYYY-MM-DD"),a.check_anulada=1,y.api.put(`/mmovimientos/${e.data.data[t].id}`,a,{headers:{Authorization:`Bearer ${Y.A.getItem("token")}`}})}}))),"GC"==this.form.guia.t_de_documento&&await y.api.get("/ccomisiones",{headers:{Authorization:`Bearer ${Y.A.getItem("token")}`,cod_movimiento:this.form.guia.id,mayor:"S"}}).then((t=>{if(t.data.data.length>0)for(var a=0;a<=t.data.data.length-1;a++){var o=t.data.data[a].fecha_emision,s={};o==e.fecha_anulacion||0==t.data.data[a].estatus?(s={estatus:2},y.api.put(`/ccomisiones/${t.data.data[a].id}`,s,{headers:{Authorization:`Bearer ${Y.A.getItem("token")}`}})):(s=t.data.data[a],delete s.id,s.monto_comision=-1*t.data.data[a].monto_comision,s.estatus=0,s.fecha_emision=e.fecha_anulacion,y.api.post("/ccomisiones/",s,{headers:{Authorization:`Bearer ${Y.A.getItem("token")}`}}))}})),this.$q.notify({message:"Guía Anulada con exito!",color:"green"}),this.getDataTable(),this.dialog=!1,this.resetForm()}},buildNroDoc(e,t){var a="";switch(e){case"nro_documento":"FA"==t.t_de_documento?(a="FA-",t.nro_control?t.nro_control_new?t.serie_documento?a+=t.serie_documento+" - "+t.nro_control_new.padStart(9,"00-000000"):a+=t.nro_control_new.padStart(9,"00-000000"):a+=t.nro_control.padStart(4,"0000"):a+=t.serie_documento+" - "+t.nro_documento):(a="GC-",a+=t.nro_documento);break;case"nro_doc":"FA"==t.t_de_documento&&(a=t.nro_control?t.nro_control.padStart(4,"0000"):t.serie_documento+" - "+t.nro_documento);break;case"nro_ref":"FA"==t.t_de_documento&&t.nro_control&&(a=t.cod_agencia+"-"+t.nro_documento);break;case"nro_doc_principal":t.tipo_doc_principal&&(a=t.tipo_doc_principal+"-"),t.serie_doc_principal&&(a+=t.serie_doc_principal+" - "),!t.nro_ctrl_doc_ppal&&t.nro_doc_principal?a+=t.nro_doc_principal:!t.nro_ctrl_doc_ppal_new&&t.nro_ctrl_doc_ppal?a+=t.nro_ctrl_doc_ppal:t.nro_ctrl_doc_ppal_new&&(a+=t.nro_ctrl_doc_ppal_new);break;default:break}return a},buildNbCliente(e){return"FA"==e.t_de_documento||"O"==e.pagado_en?e.ci_rif_cte_conta_org&&""!=e.ci_rif_cte_conta_org?this.findIndex("clientesParticularesAll",e.cod_cliente_org,"nb_cliente"):this.findIndex("clientesAll",e.cod_cliente_org,"nb_cliente"):e.ci_rif_cte_conta_dest&&""!=!e.ci_rif_cte_conta_dest?this.findIndex("clientesParticularesAll",e.cod_cliente_dest,"nb_cliente"):this.findIndex("clientesAll",e.cod_cliente_dest,"nb_cliente")},async until(e){const t=a=>{e()?a():setTimeout((e=>t(a)),400)};return new Promise(t)},resetForm(){this.form.id="",this.form.motivo="",this.form.observacion=""},resetFilters(){this.selectedAgencia=this.agencias[0],this.selectedTipo=this.tipos[0],this.fecha_desde=D()().format("DD/MM/YYYY"),this.fecha_hasta=D()().format("DD/MM/YYYY"),this.getDataTable()},errorMessage(e){this.$q.notify({message:e,color:"red"})},parseFloatN(e){return e=Math.round(100*e)/100,e}}};var M=a(12807),I=a(77716),$=a(82156),q=a(23316),S=a(44189),T=a(49200),V=a(67837),z=a(50492),E=a(94940),N=a(56384),P=a(90124),R=a(25173),U=a(48975),L=a(93692),O=a(97410),B=a(84191),G=a(39035),Q=a(45262),W=a(53999),K=a(13796),H=a(62669),J=a(88672),X=a(98582),Z=a.n(X);const ee=(0,M.A)(C,[["render",j]]),te=ee;Z()(C,"components",{QPage:I.A,QDialog:$.A,QCard:q.A,QCardSection:S.A,QForm:T.A,QInput:V.A,QIcon:z.A,QSelect:E.A,QBtn:N.A,QItem:P.A,QItemSection:R.A,QPopupProxy:U.A,QDate:L.A,QTooltip:O.A,QTable:B.A,QInnerLoading:G.A,QTd:Q.A,QList:W.A,QItemLabel:K.A,QCardActions:H.A}),Z()(C,"directives",{ClosePopup:J.A})},35358:(e,t,a)=>{var o={"./af":78188,"./af.js":78188,"./ar":50096,"./ar-dz":28495,"./ar-dz.js":28495,"./ar-kw":85891,"./ar-kw.js":85891,"./ar-ly":13194,"./ar-ly.js":13194,"./ar-ma":42195,"./ar-ma.js":42195,"./ar-ps":17084,"./ar-ps.js":17084,"./ar-sa":29393,"./ar-sa.js":29393,"./ar-tn":21867,"./ar-tn.js":21867,"./ar.js":50096,"./az":43224,"./az.js":43224,"./be":61330,"./be.js":61330,"./bg":85096,"./bg.js":85096,"./bm":28746,"./bm.js":28746,"./bn":29303,"./bn-bd":56554,"./bn-bd.js":56554,"./bn.js":29303,"./bo":30528,"./bo.js":30528,"./br":35499,"./br.js":35499,"./bs":29828,"./bs.js":29828,"./ca":35855,"./ca.js":35855,"./cs":68481,"./cs.js":68481,"./cv":1694,"./cv.js":1694,"./cy":98903,"./cy.js":98903,"./da":95908,"./da.js":95908,"./de":85528,"./de-at":21732,"./de-at.js":21732,"./de-ch":54146,"./de-ch.js":54146,"./de.js":85528,"./dv":81313,"./dv.js":81313,"./el":20138,"./el.js":20138,"./en-au":78067,"./en-au.js":78067,"./en-ca":82545,"./en-ca.js":82545,"./en-gb":50124,"./en-gb.js":50124,"./en-ie":6107,"./en-ie.js":6107,"./en-il":13196,"./en-il.js":13196,"./en-in":1654,"./en-in.js":1654,"./en-nz":79557,"./en-nz.js":79557,"./en-sg":35451,"./en-sg.js":35451,"./eo":21591,"./eo.js":21591,"./es":36843,"./es-do":61009,"./es-do.js":61009,"./es-mx":75169,"./es-mx.js":75169,"./es-us":37224,"./es-us.js":37224,"./es.js":36843,"./et":77058,"./et.js":77058,"./eu":61297,"./eu.js":61297,"./fa":46658,"./fa.js":46658,"./fi":75674,"./fi.js":75674,"./fil":45204,"./fil.js":45204,"./fo":74428,"./fo.js":74428,"./fr":80703,"./fr-ca":27812,"./fr-ca.js":27812,"./fr-ch":9411,"./fr-ch.js":9411,"./fr.js":80703,"./fy":89738,"./fy.js":89738,"./ga":21235,"./ga.js":21235,"./gd":96032,"./gd.js":96032,"./gl":16424,"./gl.js":16424,"./gom-deva":53793,"./gom-deva.js":53793,"./gom-latn":14714,"./gom-latn.js":14714,"./gu":33383,"./gu.js":33383,"./he":46660,"./he.js":46660,"./hi":37264,"./hi.js":37264,"./hr":63201,"./hr.js":63201,"./hu":35604,"./hu.js":35604,"./hy-am":61067,"./hy-am.js":61067,"./id":19262,"./id.js":19262,"./is":53423,"./is.js":53423,"./it":73038,"./it-ch":23512,"./it-ch.js":23512,"./it.js":73038,"./ja":87558,"./ja.js":87558,"./jv":86071,"./jv.js":86071,"./ka":95927,"./ka.js":95927,"./kk":62625,"./kk.js":62625,"./km":25499,"./km.js":25499,"./kn":79486,"./kn.js":79486,"./ko":89405,"./ko.js":89405,"./ku":77155,"./ku-kmr":92516,"./ku-kmr.js":92516,"./ku.js":77155,"./ky":13647,"./ky.js":13647,"./lb":42837,"./lb.js":42837,"./lo":91474,"./lo.js":91474,"./lt":96967,"./lt.js":96967,"./lv":48297,"./lv.js":48297,"./me":1545,"./me.js":1545,"./mi":2573,"./mi.js":2573,"./mk":77259,"./mk.js":77259,"./ml":33826,"./ml.js":33826,"./mn":45368,"./mn.js":45368,"./mr":30860,"./mr.js":30860,"./ms":96947,"./ms-my":99418,"./ms-my.js":99418,"./ms.js":96947,"./mt":76906,"./mt.js":76906,"./my":71837,"./my.js":71837,"./nb":24503,"./nb.js":24503,"./ne":31286,"./ne.js":31286,"./nl":17981,"./nl-be":58103,"./nl-be.js":58103,"./nl.js":17981,"./nn":19387,"./nn.js":19387,"./oc-lnc":30803,"./oc-lnc.js":30803,"./pa-in":66742,"./pa-in.js":66742,"./pl":30075,"./pl.js":30075,"./pt":81731,"./pt-br":23352,"./pt-br.js":23352,"./pt.js":81731,"./ro":21776,"./ro.js":21776,"./ru":5746,"./ru.js":5746,"./sd":74100,"./sd.js":74100,"./se":38395,"./se.js":38395,"./si":8823,"./si.js":8823,"./sk":39385,"./sk.js":39385,"./sl":3852,"./sl.js":3852,"./sq":3247,"./sq.js":3247,"./sr":64290,"./sr-cyrl":26189,"./sr-cyrl.js":26189,"./sr.js":64290,"./ss":32177,"./ss.js":32177,"./sv":49038,"./sv.js":49038,"./sw":9741,"./sw.js":9741,"./ta":86932,"./ta.js":86932,"./te":95784,"./te.js":95784,"./tet":13334,"./tet.js":13334,"./tg":23602,"./tg.js":23602,"./th":16947,"./th.js":16947,"./tk":46774,"./tk.js":46774,"./tl-ph":5868,"./tl-ph.js":5868,"./tlh":16695,"./tlh.js":16695,"./tr":22573,"./tr.js":22573,"./tzl":84509,"./tzl.js":84509,"./tzm":17118,"./tzm-latn":87078,"./tzm-latn.js":87078,"./tzm.js":17118,"./ug-cn":82617,"./ug-cn.js":82617,"./uk":56131,"./uk.js":56131,"./ur":56532,"./ur.js":56532,"./uz":69932,"./uz-latn":27220,"./uz-latn.js":27220,"./uz.js":69932,"./vi":20490,"./vi.js":20490,"./x-pseudo":32154,"./x-pseudo.js":32154,"./yo":49955,"./yo.js":49955,"./zh-cn":68355,"./zh-cn.js":68355,"./zh-hk":89547,"./zh-hk.js":89547,"./zh-mo":70374,"./zh-mo.js":70374,"./zh-tw":979,"./zh-tw.js":979};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=i,e.exports=s,s.id=35358}}]);