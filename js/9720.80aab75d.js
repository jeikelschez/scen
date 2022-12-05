(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[9720],{23759:(e,t,a)=>{"use strict";function o(e,t,a,o,s,i){return null}a.d(t,{Z:()=>c});var s=a(80589),i=a(5474),l=a(48825);const n={setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.get(e,o).then((e=>{this.$emit(t,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.post(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.put(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,a={headers:{}}){a.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api["delete"](e,a).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.post(e,t,o).then((e=>{(e.status=200)&&this.$emit(a,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=a(74260);const d=(0,r.Z)(n,[["render",o]]),c=d},3868:(e,t,a)=>{"use strict";function o(e,t,a,o,s,i){return null}a.d(t,{Z:()=>c});var s=a(48825),i=a(11488),l=a.n(i);const n={name:"rules",setup(){(0,s.Z)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,a=!1){if(null!==e&&""!==e&&e.length>t)return!1!==a?a:`Maximo ${t} Caracteres`},isMin(e,t,a=!1){if(null!==e&&""!==e&&e.length<t)return!1!==a?a:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==l()(e,"HH:mm:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var r=a(74260);const d=(0,r.Z)(n,[["render",o]]),c=d},96741:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>se});var o=a(83673),s=a(62323);const i={class:"row"},l={class:"col-md-6 col-xs-12"},n={class:"col-md-6 col-xs-12"},r={class:"col-md-12 col-xs-12"},d={class:"row justify-center items-center content-center"},c={class:"q-pa-sm justify-center"},u={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"padding-right":"30px"}},m=(0,o._)("div",{class:"col-md-3 col-xl-2 col-lg-2 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,o._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,o._)("strong",null,"MANTENIMIENTO - ANULACION DE GUIAS")])],-1),p={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},h=(0,o.Uk)(" Sin resultados "),_={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},f={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},g={class:"col-md-3 col-xl-3 col-lg-3 col-xs-10 col-sm-10 cardMargin",style:{"align-self":"center","text-align":"center"}},b=(0,o.Uk)(" Sin resultados "),j={class:"col-md-1 col-xl-1 col-lg-1 col-xs-2 col-sm-2",style:{"align-self":"center","text-align":"center"}},v=(0,o.Uk)("Resetear Filtros"),w={class:"q-pa-md q-gutter-y-md",style:{"margin-top":"-20px"}},D=(0,o._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Está seguro que desea Anular el documento seleccionado? ",-1);function y(e,t,a,y,k,x){const A=(0,o.up)("q-icon"),Y=(0,o.up)("q-input"),M=(0,o.up)("q-select"),C=(0,o.up)("q-btn"),z=(0,o.up)("q-form"),W=(0,o.up)("q-card-section"),I=(0,o.up)("q-card"),$=(0,o.up)("q-dialog"),T=(0,o.up)("q-item-section"),q=(0,o.up)("q-item"),V=(0,o.up)("q-date"),U=(0,o.up)("q-popup-proxy"),Z=(0,o.up)("q-tooltip"),S=(0,o.up)("q-inner-loading"),E=(0,o.up)("q-td"),F=(0,o.up)("q-item-label"),N=(0,o.up)("q-list"),P=(0,o.up)("q-table"),R=(0,o.up)("q-card-actions"),O=(0,o.up)("methods"),B=(0,o.up)("rules-vue"),G=(0,o.up)("q-page"),Q=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(G,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)($,{modelValue:y.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>y.dialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(z,{class:"q-gutter-md",onSubmit:t[3]||(t[3]=e=>x.sendData())},{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o._)("div",l,[(0,o.Wm)(Y,{"upper-case":"",outlined:"",modelValue:k.form.fecha,"onUpdate:modelValue":t[0]||(t[0]=e=>k.form.fecha=e),label:"Fecha",class:"pcform",hint:"",disable:!0},{prepend:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"apartment"})])),_:1},8,["modelValue"])]),(0,o._)("div",n,[(0,o.Wm)(M,{outlined:"",modelValue:k.form.motivo,"onUpdate:modelValue":t[1]||(t[1]=e=>k.form.motivo=e),label:"Motivo",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e)],options:k.motivos,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"desc_concepto","option-value":"id"},null,8,["modelValue","rules","options"])]),(0,o._)("div",r,[(0,o.Wm)(Y,{outlined:"",modelValue:k.form.observacion,"onUpdate:modelValue":t[2]||(t[2]=e=>k.form.observacion=e),label:"Observación",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMin(e,3),e=>this.$refs.rulesVue.isMax(e,500)]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])])]),(0,o._)("div",d,[(0,o.Wm)(C,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(C,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[Q]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",c,[(0,o._)("div",u,[m,(0,o._)("div",p,[(0,o.Wm)(M,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:k.agenciasSelected,onFilter:t[5]||(t[5]=(e,t)=>x.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:k.selectedAgencia,"onUpdate:modelValue":[t[6]||(t[6]=e=>k.selectedAgencia=e),t[7]||(t[7]=e=>x.getDataTable())],outlined:"",standout:"",label:"Agencia"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"text-grey"},{default:(0,o.w5)((()=>[h])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",_,[(0,o.Wm)(Y,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:k.fecha_desde,"onUpdate:modelValue":[t[10]||(t[10]=e=>k.fecha_desde=e),t[11]||(t[11]=e=>x.getDataTable())],"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{modelValue:k.fecha_desde,"onUpdate:modelValue":[t[8]||(t[8]=e=>k.fecha_desde=e),t[9]||(t[9]=e=>{this.$refs.qDateProxy.hide(),x.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",f,[(0,o.Wm)(Y,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:k.fecha_hasta,"onUpdate:modelValue":[t[14]||(t[14]=e=>k.fecha_hasta=e),t[15]||(t[15]=e=>x.getDataTable())],mask:"##/##/####","lazy-rules":"",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{modelValue:k.fecha_hasta,"onUpdate:modelValue":[t[12]||(t[12]=e=>k.fecha_hasta=e),t[13]||(t[13]=e=>{this.$refs.qDateProxy.hide(),x.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",g,[(0,o.Wm)(M,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:k.tipos,onFilter:t[16]||(t[16]=(e,t)=>x.filterArray(e,t,"tiposSelected","tipos","descripcion")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"label","option-value":"value",modelValue:k.selectedTipo,"onUpdate:modelValue":[t[17]||(t[17]=e=>k.selectedTipo=e),t[18]||(t[18]=e=>x.getDataTable())],outlined:"",standout:"",label:"Tipo de Control"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"text-grey"},{default:(0,o.w5)((()=>[b])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",j,[(0,o.Wm)(C,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-left":"15px"},onClick:t[19]||(t[19]=e=>x.resetFilters())},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{size:"25px",name:"filter_alt_off",color:"white"}),(0,o.Wm)(Z,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,o.w5)((()=>[v])),_:1})])),_:1})])])]),(0,o._)("div",w,[(0,o.Wm)(P,{rows:k.guias,"binary-state-sort":"","row-key":"id",columns:k.columns,separator:y.separator,"rows-per-page-options":[5,10,15,20,50],onRequest:x.getDataTable,style:{width:"100%",height:"580px"},loading:y.loading,grid:e.$q.screen.xs,pagination:k.pagination,"onUpdate:pagination":t[20]||(t[20]=e=>k.pagination=e),"visible-columns":y.visibleColumns},{loading:(0,o.w5)((()=>[(0,o.Wm)(S,{showing:"",color:"primary",class:"loading"})])),"body-cell-nro_documento":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.buildNroDoc("nro_documento",e.row)),1)])),_:2},1032,["props"])])),"body-cell-cod_cliente_org":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.buildNbCliente(e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_doc":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.buildNroDoc("nro_doc",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_ref":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.buildNroDoc("nro_ref",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_doc_principal":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.buildNroDoc("nro_doc_principal",e.row)),1)])),_:2},1032,["props"])])),"body-cell-estatus_administra":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.filterDesc("estatus_administrativo",e.row.estatus_administra)),1)])),_:2},1032,["props"])])),"body-cell-tipo_factura":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.filterDesc("tipo_factura",e.row.tipo_factura)),1)])),_:2},1032,["props"])])),"body-cell-action":(0,o.w5)((e=>[(0,o.Wm)(E,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{dense:"",round:"",flat:"",color:"primary",icon:"disabled_by_default",disabled:!!this.allowOption(3)||"A"==e.row.estatus_administra,onClick:t=>{this.form.guia=e.row,y.dialog=!0}},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,o.w5)((e=>[(0,o._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,s.j5)(e.selected?"transform: scale(0.95);":"")},[(0,o.Wm)(I,{class:(0,s.C_)(e.selected?"bg-grey-2":"")},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{dense:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(t=>((0,o.wg)(),(0,o.j4)(q,{key:t.name},{default:(0,o.w5)((()=>[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(F,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(T,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(F,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.value),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(T,{side:"",class:"itemMovilSide"},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{dense:"",round:"",flat:"",color:"primary",icon:"disabled_by_default",disabled:!!this.allowOption(3)||"A"==e.row.estatus_administra,onClick:t=>{this.form.guia=e.row,y.dialog=!0}},null,8,["disabled","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","onRequest","loading","grid","pagination","visible-columns"])]),(0,o.Wm)($,{modelValue:y.confirmPopUp,"onUpdate:modelValue":t[23]||(t[23]=e=>y.confirmPopUp=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{style:{width:"700px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[D])),_:1}),(0,o.Wm)(R,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(C,{flat:"",label:"Cancelar",color:"primary",onClick:t[21]||(t[21]=e=>this.confirmUpload=!1)},null,512),[[Q]]),(0,o.wy)((0,o.Wm)(C,{flat:"",label:"Guardar",color:"primary",onClick:t[22]||(t[22]=e=>this.confirmUpload=!0)},null,512),[[Q]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(O,{ref:"methods",onSetData:x.setData,onSetDataInit:x.setDataInit,onSetDataEdit:x.setDataEdit,onGetDataTable:x.getDataTable,onSetDataTable:x.setDataTable,onSetDataPermisos:x.setDataPermisos},null,8,["onSetData","onSetDataInit","onSetDataEdit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,o.Wm)(B,{ref:"rulesVue"},null,512)])),_:1})}a(65363);var k=a(61959),x=a(11488),A=a.n(x),Y=a(5474),M=a(3868),C=a(48825),z=a(80589),W=a(23759);const I={components:{methods:W.Z,rulesVue:M.Z},data(){return{columns:[{name:"nro_documento",label:"N° Control",field:"nro_documento",align:"left",sortable:!0},{name:"nro_doc",label:"N° Doc.",field:"nro_doc",align:"left"},{name:"nro_ref",label:"Ref.",field:"nro_ref",align:"left"},{name:"fecha_emision",label:"Emisión",field:"fecha_emision",align:"left",sortable:!0},{name:"cod_cliente_org",label:"Cliente",field:"cod_cliente_org",align:"left",sortable:!0},{name:"monto_total",label:"Monto Total",field:"monto_total",align:"right",sortable:!0,format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"nro_doc_principal",label:"Doc. Ppal.",field:"nro_doc_principal",align:"left"},{name:"estatus_administra",label:"Estatus",field:"estatus_administra",align:"left",sortable:!0},{name:"tipo_factura",label:"Tipo Factura",field:"tipo_factura",align:"left",sortable:!0},{name:"action",label:"Acción",align:"center"}],form:{guia:{},fecha:A()().format("DD/MM/YYYY"),motivo:"",observacion:""},estatus_administrativo:[{label:"EN ELABORACIÓN",value:"E"},{label:"PENDIENTE POR FACTURAR",value:"F"},{label:"CON FACTURA GENERADA",value:"G"},{label:"ANULADA",value:"A"},{label:"PENDIENTE DE COBRAR",value:"P"},{label:"CANCELADA",value:"C"},{label:"PENDIENTE POR IMPRIMIR",value:"I"},{label:"MODIFICADA",value:"M"}],tipo_factura:[{label:"GUÍAS CRÉDITO",value:"FG"},{label:"PREPAGO",value:"FP"},{label:"OTROS INGRESOS",value:"FO"},{label:"GUÍAS CONTADO",value:"FC"}],tipos:[{label:"GUÍA CARGA",value:"GC"},{label:"FACTURA",value:"FA"}],pagination:{page:1,rowsPerPage:10,sortBy:"nro_documento",descending:!0,filter:"",filterValue:"",rowsNumber:""},clientesAll:[],clientesParticularesAll:[],motivos:[],guias:[],fecha_desde:A()().format("DD/MM/YYYY"),fecha_hasta:A()().format("DD/MM/YYYY"),agencias:[],selectedAgencia:[],agenciasSelected:[],selectedTipo:[],rpermisos:[],confirmUpload:!1}},setup(){(0,C.Z)();return{loading:(0,k.iH)(!1),separator:(0,k.iH)("vertical"),dialog:(0,k.iH)(!1),confirmPopUp:(0,k.iH)(!1),visibleColumns:(0,k.iH)(["nro_documento","nro_doc","nro_ref","fecha_emision","cod_cliente_org","monto_total","nro_doc_principal","estatus_administra","action"])}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Anulacion de Guias",""),this.$refs.methods.getData("/agencias","setDataInit","agencias"),this.$refs.methods.getData("/clientes","setData","clientesAll"),this.$refs.methods.getData("/coperacion","setData","motivos",{headers:{tipo:2}}),this.$refs.methods.getData("/cparticulares","setData","clientesParticularesAll"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:z.Z.getItem("tokenTraducido").usuario.roles.id,menu:"anulacionguias"}})},methods:{filterArray(e,t,a,o,s){t(""!==e?()=>{const t=e.toUpperCase();for(var i=[],l=0;l<=this[o].length-1;l++)if(this[o][l][s].indexOf(t)>-1&&i.push(this[o][l]),l==this[o].length-1){this[a]=i;break}}:()=>{this[a]=this[o]})},filterDesc(e,t){var a=this[e].findIndex((e=>e.value==t));return a>=0?this[e][a].label:null},findIndex(e,t,a){var o=this[e].findIndex((e=>e.id==t));return o>=0?this[e][o][a]:null},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setData(e,t){this[t]=e.data?e.data:e},setDataInit(e,t){this[t]=e.data,this.selectedAgencia=this.agencias[0],this.selectedTipo=this.tipos[0],this.getDataTable()},getDataTable(e){this.loading=!0,"FA"==this.selectedTipo.value?this.visibleColumns.push("tipo_factura"):this.visibleColumns=this.visibleColumns.filter((e=>"tipo_factura"!==e)),e&&(this.pagination=e.pagination),this.$refs.methods.getData("/mmovimientos","setDataTable","guias",{headers:{agencia:this.selectedAgencia.id,tipo:this.selectedTipo.value,desde:A()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:A()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),estatus_admin_ex:"G,C",no_abono:"S",page:this.pagination.page,limit:this.pagination.rowsPerPage,order_by:this.pagination.sortBy,order_direction:this.pagination.descending?"DESC":"ASC",filter:this.pagination.filter,filter_value:this.pagination.filterValue}})},setDataTable(e,t){this[t]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},setDataEdit(e,t){this[t].id=e.id,this[t].tipo=e.tipo,this[t].control_inicio=e.control_inicio,this[t].control_final=e.control_final,this[t].ult_doc_referencia=e.ult_doc_referencia,this[t].estatus_lote=this.filterDesc("estatus",e.estatus_lote),this[t].serie_doc=e.serie_doc,this[t].cod_agencia=e.cod_agencia},async sendData(){if(this.confirmPopUp=!0,await this.until((e=>1==this.confirmUpload)),this.confirmUpload){this.confirmUpload=!1;var e={};e.cod_concepto=this.form.motivo.id,e.fecha_anulacion=A()(this.form.fecha,"DD/MM/YYYY").format("YYYY-MM-DD"),e.observacion=this.form.observacion,e.estatus_administra="A",e.check_anulada=1,e.fecha_anulada=A()(this.form.fecha,"DD/MM/YYYY").format("YYYY-MM-DD"),await Y.api.put(`/mmovimientos/${this.form.guia.id}`,e,{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`}}).catch((()=>{this.errorMessage("Error del Sistema. Problemas al actualizar los datos de la anulación. Comuníquese con el proveedor del Sistemas...")})),"FA"!=this.form.guia.t_de_documento||"FG"!=this.form.guia.tipo_factura&&"FC"!=this.form.guia.tipo_factura||(this.form.guia.porc_descuento>0&&await Y.api.get("/mmovimientos/",{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`,nro_doc_ppal:this.form.guia.nro_documento,nro_ctrl_doc_ppal:this.form.guia.nro_control}}).then((e=>{if(e.data.data.length>0)for(var t=0;t<=e.data.data.length-1;t++){var a={},o=this.parseFloatN(this.form.guia.monto_ref_cte_sin_imp),s=this.parseFloatN(this.form.guia.porc_impuesto),i=this.parseFloatN(o)*this.parseFloatN(s)/100,l=this.parseFloatN(o)+this.parseFloatN(i);a.monto_base=o,a.monto_subtotal=o,a.monto_impuesto=0,a.monto_total=l,a.saldo=l,a.porc_descuento=0,a.monto_descuento=0,a.base_comision_vta_rcl=o,Y.api.put(`/mmovimientos/${e.data.data[t].id}`,a,{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`}}),e.data.data[t].cod_agente_venta&&Y.api.get(`/agentes/${e.data.data[t].cod_agente_venta}`,{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`}}).then((e=>{e.data.porc_comision_venta>0&&Y.api.get("/ccomisiones",{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`,cod_movimiento:e.data.data[t].id,tipo:"V"}}).then((e=>{if(e.data.data[0]){var t={monto_comision:this.parseFloatN(o)*this.parseFloatN(e.data.porc_comision_venta)/100};Y.api.put(`/ccomisiones/${e.data.data[0].id}`,t,{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`}})}}))}))}})),await Y.api.get("/mmovimientos/",{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`,tipo_doc_ppal:"FA",nro_doc_ppal:this.form.guia.nro_documento,nro_ctrl_doc_ppal:this.form.guia.nro_control,cod_ag_doc_ppal:this.form.guia.cod_agencia,tipo:"GC"}}).then((e=>{if(e.data.data.length>0)for(var t=0;t<=e.data.data.length-1;t++){var a={estatus_administra:"F",tipo_doc_principal:null,nro_doc_principal:null,serie_doc_principal:null,nro_ctrl_doc_ppal:null,cod_ag_doc_ppal:null,nro_ctrl_doc_ppal_new:null};a.fecha_pxfac=A()().format("YYYY-MM-DD"),a.check_pxfac=1,a.fecha_anulada=A()().format("YYYY-MM-DD"),a.check_anulada=1,Y.api.put(`/mmovimientos/${e.data.data[t].id}`,a,{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`}})}}))),"GC"==this.form.guia.t_de_documento&&await Y.api.get("/ccomisiones",{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`,cod_movimiento:this.form.guia.id,mayor:"S"}}).then((t=>{if(t.data.data.length>0)for(var a=0;a<=t.data.data.length-1;a++){var o=t.data.data[a].fecha_emision,s={};o==e.fecha_anulacion||0==t.data.data[a].estatus?(s={estatus:2},Y.api.put(`/ccomisiones/${t.data.data[a].id}`,s,{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`}})):(s=t.data.data[a],delete s.id,s.monto_comision=-1*t.data.data[a].monto_comision,s.estatus=0,s.fecha_emision=e.fecha_anulacion,Y.api.post("/ccomisiones/",s,{headers:{Authorization:`Bearer ${z.Z.getItem("token")}`}}))}})),this.$q.notify({message:"Guía Anulada con exito!",color:"green"}),this.getDataTable(),this.dialog=!1,this.resetForm()}},buildNroDoc(e,t){var a="";switch(e){case"nro_documento":"FA"==t.t_de_documento?(a="FA-",t.nro_control?t.nro_control_new?t.serie_documento?a+=t.serie_documento+" - "+t.nro_control_new.padStart(9,"00-000000"):a+=t.nro_control_new.padStart(9,"00-000000"):a+=t.nro_control.padStart(4,"0000"):a+=t.serie_documento+" - "+t.nro_documento):(a="GC-",a+=t.nro_documento);break;case"nro_doc":"FA"==t.t_de_documento&&(a=t.nro_control?t.nro_control.padStart(4,"0000"):t.serie_documento+" - "+t.nro_documento);break;case"nro_ref":"FA"==t.t_de_documento&&t.nro_control&&(a=t.cod_agencia+"-"+t.nro_documento);break;case"nro_doc_principal":t.tipo_doc_principal&&(a=t.tipo_doc_principal+"-"),t.serie_doc_principal&&(a+=t.serie_doc_principal+" - "),!t.nro_ctrl_doc_ppal&&t.nro_doc_principal?a+=t.nro_doc_principal:!t.nro_ctrl_doc_ppal_new&&t.nro_ctrl_doc_ppal?a+=t.nro_ctrl_doc_ppal:t.nro_ctrl_doc_ppal_new&&(a+=t.nro_ctrl_doc_ppal_new);break;default:break}return a},buildNbCliente(e){return"FA"==e.t_de_documento||"O"==e.pagado_en?e.ci_rif_cte_conta_org&&""!=e.ci_rif_cte_conta_org?this.findIndex("clientesParticularesAll",e.cod_cliente_org,"nb_cliente"):this.findIndex("clientesAll",e.cod_cliente_org,"nb_cliente"):e.ci_rif_cte_conta_dest&&""!=!e.ci_rif_cte_conta_dest?this.findIndex("clientesParticularesAll",e.cod_cliente_dest,"nb_cliente"):this.findIndex("clientesAll",e.cod_cliente_dest,"nb_cliente")},async until(e){const t=a=>{e()?a():setTimeout((e=>t(a)),400)};return new Promise(t)},resetForm(){this.form.id="",this.form.motivo="",this.form.observacion=""},resetFilters(){this.selectedAgencia=this.agencias[0],this.selectedTipo=this.tipos[0],this.fecha_desde=A()().format("DD/MM/YYYY"),this.fecha_hasta=A()().format("DD/MM/YYYY"),this.getDataTable()},errorMessage(e){this.$q.notify({message:e,color:"red"})},parseFloatN(e){return e=Math.round(100*e)/100,e}}};var $=a(74260),T=a(24379),q=a(46778),V=a(10151),U=a(25589),Z=a(68689),S=a(64689),E=a(24554),F=a(72448),N=a(48240),P=a(83414),R=a(52035),O=a(83944),B=a(85626),G=a(5363),Q=a(96023),L=a(66941),H=a(83884),K=a(27011),J=a(2350),X=a(99367),ee=a(60677),te=a(7518),ae=a.n(te);const oe=(0,$.Z)(I,[["render",y]]),se=oe;ae()(I,"components",{QPage:T.Z,QDialog:q.Z,QCard:V.Z,QCardSection:U.Z,QForm:Z.Z,QInput:S.Z,QIcon:E.Z,QSelect:F.Z,QBtn:N.Z,QItem:P.Z,QItemSection:R.Z,QPopupProxy:O.Z,QDate:B.Z,QTooltip:G.Z,QTable:Q.Z,QInnerLoading:L.Z,QTd:H.Z,QList:K.Z,QItemLabel:J.Z,QCardActions:X.Z}),ae()(I,"directives",{ClosePopup:ee.Z})},46700:(e,t,a)=>{var o={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=i,e.exports=s,s.id=46700}}]);