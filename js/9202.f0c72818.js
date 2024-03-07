(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[9202],{3759:(e,t,a)=>{"use strict";function o(e,t,a,o,s,i){return null}a.d(t,{Z:()=>c});var s=a(589),i=a(5474),l=a(8825);const n={setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.get(e,o).then((e=>{this.$emit(t,e.data,a)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.post(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.put(e,t,o).then((e=>{(e.status=200)&&(this.$emit(a),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,a={headers:{}}){a.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.delete(e,a).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,a,o={headers:{}}){o.headers.Authorization=`Bearer ${s.Z.getItem("token")}`,i.api.post(e,t,o).then((e=>{(e.status=200)&&this.$emit(a,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=a(4260);const d=(0,r.Z)(n,[["render",o]]),c=d},6479:(e,t,a)=>{"use strict";function o(e,t,a,o,s,i){return null}a.d(t,{Z:()=>c});var s=a(8825),i=a(1488),l=a.n(i);const n={name:"rules",setup(){(0,s.Z)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,a=!1){if(null!==e&&""!==e&&e.length>t)return!1!==a?a:`Maximo ${t} Caracteres`},isMin(e,t,a=!1){if(null!==e&&""!==e&&e.length<t)return!1!==a?a:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==l()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var r=a(4260);const d=(0,r.Z)(n,[["render",o]]),c=d},8209:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>se});var o=a(3673),s=a(2323);const i={class:"row"},l={class:"col-md-6 col-xs-12"},n={class:"col-md-6 col-xs-12"},r={class:"col-md-12 col-xs-12"},d={class:"row justify-center items-center content-center"},c={class:"q-pa-sm justify-center"},m={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"padding-right":"30px"}},u=(0,o._)("div",{class:"col-md-3 col-xl-2 col-lg-2 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,o._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,o._)("strong",null,"ADMINISTRACIÓN - ANULACIÓN DE NOTAS CONTABLES")])],-1),p={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},h=(0,o.Uk)(" Sin resultados "),_={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},f={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},g={class:"col-md-3 col-xl-3 col-lg-3 col-xs-10 col-sm-10 cardMargin",style:{"align-self":"center","text-align":"center"}},b=(0,o.Uk)(" Sin resultados "),j={class:"col-md-1 col-xl-1 col-lg-1 col-xs-2 col-sm-2",style:{"align-self":"center","text-align":"center"}},D=(0,o.Uk)("Resetear Filtros"),w={class:"q-pa-md q-gutter-y-md",style:{"margin-top":"-20px"}},v=(0,o._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Está seguro que desea Anular el documento seleccionado? ",-1);function y(e,t,a,y,k,x){const A=(0,o.up)("q-icon"),Y=(0,o.up)("q-input"),C=(0,o.up)("q-select"),M=(0,o.up)("q-btn"),W=(0,o.up)("q-form"),z=(0,o.up)("q-card-section"),S=(0,o.up)("q-card"),T=(0,o.up)("q-dialog"),q=(0,o.up)("q-item-section"),I=(0,o.up)("q-item"),$=(0,o.up)("q-date"),E=(0,o.up)("q-popup-proxy"),N=(0,o.up)("q-tooltip"),V=(0,o.up)("q-inner-loading"),Z=(0,o.up)("q-td"),P=(0,o.up)("q-item-label"),U=(0,o.up)("q-list"),O=(0,o.up)("q-table"),R=(0,o.up)("q-card-actions"),F=(0,o.up)("methods"),Q=(0,o.up)("rules-vue"),B=(0,o.up)("q-page"),L=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(B,{class:"pagina q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{modelValue:y.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>y.dialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,o.w5)((()=>[(0,o.Wm)(z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,{class:"q-gutter-md",onSubmit:t[3]||(t[3]=e=>x.sendData())},{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o._)("div",l,[(0,o.Wm)(Y,{"upper-case":"",outlined:"",modelValue:k.form.fecha,"onUpdate:modelValue":t[0]||(t[0]=e=>k.form.fecha=e),label:"Fecha",class:"pcform",hint:"",disable:!0},{prepend:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"apartment"})])),_:1},8,["modelValue"])]),(0,o._)("div",n,[(0,o.Wm)(C,{outlined:"",modelValue:k.form.motivo,"onUpdate:modelValue":t[1]||(t[1]=e=>k.form.motivo=e),label:"Motivo",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e)],options:k.motivos,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"desc_concepto","option-value":"id"},null,8,["modelValue","rules","options"])]),(0,o._)("div",r,[(0,o.Wm)(Y,{outlined:"",modelValue:k.form.observacion,"onUpdate:modelValue":t[2]||(t[2]=e=>k.form.observacion=e),label:"Observación",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMin(e,3),e=>this.$refs.rulesVue.isMax(e,500)]},{prepend:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])])]),(0,o._)("div",d,[(0,o.Wm)(M,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,o.wy)((0,o.Wm)(M,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[L]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o._)("div",c,[(0,o._)("div",m,[u,(0,o._)("div",p,[(0,o.Wm)(C,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:k.agenciasSelected,onFilter:t[5]||(t[5]=(e,t)=>x.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:k.selectedAgencia,"onUpdate:modelValue":[t[6]||(t[6]=e=>k.selectedAgencia=e),t[7]||(t[7]=e=>x.getDataTable())],outlined:"",standout:"",label:"Agencia"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,{class:"text-grey"},{default:(0,o.w5)((()=>[h])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",_,[(0,o.Wm)(Y,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:k.fecha_desde,"onUpdate:modelValue":[t[10]||(t[10]=e=>k.fecha_desde=e),t[11]||(t[11]=e=>x.getDataTable())],"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)($,{modelValue:k.fecha_desde,"onUpdate:modelValue":[t[8]||(t[8]=e=>k.fecha_desde=e),t[9]||(t[9]=e=>{this.$refs.qDateProxy.hide(),x.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",f,[(0,o.Wm)(Y,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:k.fecha_hasta,"onUpdate:modelValue":[t[14]||(t[14]=e=>k.fecha_hasta=e),t[15]||(t[15]=e=>x.getDataTable())],mask:"##/##/####","lazy-rules":"",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)($,{modelValue:k.fecha_hasta,"onUpdate:modelValue":[t[12]||(t[12]=e=>k.fecha_hasta=e),t[13]||(t[13]=e=>{this.$refs.qDateProxy.hide(),x.getDataTable()})],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,o._)("div",g,[(0,o.Wm)(C,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:k.tipos,onFilter:t[16]||(t[16]=(e,t)=>x.filterArray(e,t,"tiposSelected","tipos","descripcion")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"label","option-value":"value",modelValue:k.selectedTipo,"onUpdate:modelValue":[t[17]||(t[17]=e=>k.selectedTipo=e),t[18]||(t[18]=e=>x.getDataTable())],outlined:"",standout:"",label:"Tipo de Documento"},{"no-option":(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,{class:"text-grey"},{default:(0,o.w5)((()=>[b])),_:1})])),_:1})])),prepend:(0,o.w5)((()=>[(0,o.Wm)(A,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,o._)("div",j,[(0,o.Wm)(M,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-left":"15px"},onClick:t[19]||(t[19]=e=>x.resetFilters())},{default:(0,o.w5)((()=>[(0,o.Wm)(A,{size:"25px",name:"filter_alt_off",color:"white"}),(0,o.Wm)(N,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,o.w5)((()=>[D])),_:1})])),_:1})])])]),(0,o._)("div",w,[(0,o.Wm)(O,{rows:k.notas,"binary-state-sort":"","row-key":"id",columns:k.columns,separator:y.separator,"rows-per-page-options":[5,10,15,20,50],onRequest:x.getDataTable,style:{width:"100%",height:"560px"},loading:y.loading,grid:e.$q.screen.xs,pagination:k.pagination,"onUpdate:pagination":t[20]||(t[20]=e=>k.pagination=e),"visible-columns":y.visibleColumns},{loading:(0,o.w5)((()=>[(0,o.Wm)(V,{showing:"",color:"primary",class:"loading"})])),"body-cell-nro_documento":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.buildNroDoc("nro_documento",e.row)),1)])),_:2},1032,["props"])])),"body-cell-cliente_orig_desc":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.row.cliente_orig_desc),1)])),_:2},1032,["props"])])),"body-cell-nro_doc":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.buildNroDoc("nro_doc",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_ref":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.buildNroDoc("nro_ref",e.row)),1)])),_:2},1032,["props"])])),"body-cell-nro_doc_principal":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.buildNroDoc("nro_doc_principal",e.row)),1)])),_:2},1032,["props"])])),"body-cell-tipo_factura":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(x.filterDesc("tipo_factura",e.row.tipo_factura)),1)])),_:2},1032,["props"])])),"body-cell-action":(0,o.w5)((e=>[(0,o.Wm)(Z,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{dense:"",round:"",flat:"",color:"primary",icon:"disabled_by_default",disabled:!!this.allowOption(3)||"A"==e.row.estatus_administra,onClick:t=>{this.form.nota=e.row,y.dialog=!0}},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,o.w5)((e=>[(0,o._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,s.j5)(e.selected?"transform: scale(0.95);":"")},[(0,o.Wm)(S,{class:(0,s.C_)(e.selected?"bg-grey-2":"")},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{dense:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(t=>((0,o.wg)(),(0,o.j4)(I,{key:t.name},{default:(0,o.w5)((()=>[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(q,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.value),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(q,{side:"",class:"itemMovilSide"},{default:(0,o.w5)((()=>[(0,o.Wm)(M,{dense:"",round:"",flat:"",color:"primary",icon:"disabled_by_default",disabled:!!this.allowOption(3)||"A"==e.row.estatus_administra,onClick:t=>{this.form.nota=e.row,y.dialog=!0}},null,8,["disabled","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","onRequest","loading","grid","pagination","visible-columns"])]),(0,o.Wm)(T,{modelValue:y.confirmPopUp,"onUpdate:modelValue":t[23]||(t[23]=e=>y.confirmPopUp=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{style:{width:"700px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(z,null,{default:(0,o.w5)((()=>[v])),_:1}),(0,o.Wm)(R,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(M,{flat:"",label:"Cancelar",color:"primary",onClick:t[21]||(t[21]=e=>this.confirmUpload=!1)},null,512),[[L]]),(0,o.wy)((0,o.Wm)(M,{flat:"",label:"Guardar",color:"primary",onClick:t[22]||(t[22]=e=>this.confirmUpload=!0)},null,512),[[L]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(F,{ref:"methods",onSetData:x.setData,onSetDataInit:x.setDataInit,onSetDataEdit:x.setDataEdit,onGetDataTable:x.getDataTable,onSetDataTable:x.setDataTable,onSetDataPermisos:x.setDataPermisos},null,8,["onSetData","onSetDataInit","onSetDataEdit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,o.Wm)(Q,{ref:"rulesVue"},null,512)])),_:1})}var k=a(1959),x=a(1488),A=a.n(x),Y=a(5474),C=a(6479),M=a(8825),W=a(589),z=a(3759);const S={components:{methods:z.Z,rulesVue:C.Z},data(){return{columns:[{name:"nro_documento",label:"N° Control",field:"nro_documento",align:"left",sortable:!0},{name:"nro_doc",label:"N° Doc.",field:"nro_doc",align:"left"},{name:"nro_ref",label:"Ref.",field:"nro_ref",align:"left"},{name:"fecha_emision",label:"Emisión",field:"fecha_emision",align:"left",sortable:!0},{name:"cliente_orig_desc",label:"Cliente",field:"cliente_orig_desc",align:"left",sortable:!0},{name:"monto_total",label:"Monto Total",field:"monto_total",align:"right",sortable:!0,format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"nro_doc_principal",label:"Doc. Ppal.",field:"nro_doc_principal",align:"left"},{name:"tipo_factura",label:"Tipo Factura",field:"tipo_factura",align:"left",sortable:!0},{name:"action",label:"Acción",align:"center"}],form:{nota:{},fecha:A()().format("DD/MM/YYYY"),motivo:"",observacion:""},estatus_administrativo:[{label:"EN ELABORACIÓN",value:"E"},{label:"PENDIENTE POR FACTURAR",value:"F"},{label:"CON FACTURA GENERADA",value:"G"},{label:"ANULADA",value:"A"},{label:"PENDIENTE DE COBRAR",value:"P"},{label:"CANCELADA",value:"C"},{label:"PENDIENTE POR IMPRIMIR",value:"I"},{label:"MODIFICADA",value:"M"}],tipo_factura:[{label:"GUÍAS CRÉDITO",value:"FG"},{label:"PREPAGO",value:"FP"},{label:"OTROS INGRESOS",value:"FO"},{label:"GUÍAS CONTADO",value:"FC"}],tipos:[{label:"NOTAS DE DÉBITO",value:"ND"},{label:"NOTAS DE CRÉDITO",value:"NC"}],pagination:{page:1,rowsPerPage:10,sortBy:"nro_documento",descending:!0,rowsNumber:""},clientesAll:[],clientesParticularesAll:[],motivos:[],notas:[],fecha_desde:A()().format("DD/MM/YYYY"),fecha_hasta:A()().format("DD/MM/YYYY"),agencias:[],selectedAgencia:[],agenciasSelected:[],selectedTipo:[],rpermisos:[],confirmUpload:!1}},setup(){(0,M.Z)();return{loading:(0,k.iH)(!1),separator:(0,k.iH)("vertical"),dialog:(0,k.iH)(!1),confirmPopUp:(0,k.iH)(!1),visibleColumns:(0,k.iH)(["nro_documento","nro_doc","nro_ref","fecha_emision","cliente_orig_desc","monto_total","nro_doc_principal","action"])}},mounted(){this.$emit("changeTitle","SCEN - Administración - Anulación de Notas Contables",""),this.$refs.methods.getData("/agencias","setDataInit","agencias"),this.$refs.methods.getData("/clientes","setData","clientesAll"),this.$refs.methods.getData("/coperacion","setData","motivos",{headers:{tipo:4}}),this.$refs.methods.getData("/cparticulares","setData","clientesParticularesAll"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:W.Z.getItem("tokenTraducido").usuario.roles.id,menu:"anulacionnotascontables"}})},methods:{filterArray(e,t,a,o,s){t(""!==e?()=>{const t=e.toUpperCase();for(var i=[],l=0;l<=this[o].length-1;l++)if(this[o][l][s].indexOf(t)>-1&&i.push(this[o][l]),l==this[o].length-1){this[a]=i;break}}:()=>{this[a]=this[o]})},filterDesc(e,t){var a=this[e].findIndex((e=>e.value==t));return a>=0?this[e][a].label:null},findIndex(e,t,a){var o=this[e].findIndex((e=>e.id==t));return o>=0?this[e][o][a]:null},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setData(e,t){this[t]=e.data?e.data:e},setDataInit(e,t){this[t]=e.data,this.selectedAgencia=this.agencias[0],this.getDataTable()},getDataTable(e){this.loading=!0,e&&(this.pagination=e.pagination),this.$refs.methods.getData("/mmovimientos","setDataTable","notas",{headers:{filters:JSON.stringify({agencia:this.selectedAgencia.id,tipo_in:this.selectedTipo.value?this.selectedTipo.value:"NC,ND",desde:A()(this.fecha_desde,"DD/MM/YYYY").format("YYYY-MM-DD"),hasta:A()(this.fecha_hasta,"DD/MM/YYYY").format("YYYY-MM-DD"),estatus_admin_ex:"A"}),page:this.pagination.page,limit:this.pagination.rowsPerPage,order:this.pagination.sortBy,direction:this.pagination.descending?"DESC":"ASC"}})},setDataTable(e,t){this[t]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},setDataEdit(e,t){this[t].id=e.id,this[t].tipo=e.tipo,this[t].control_inicio=e.control_inicio,this[t].control_final=e.control_final,this[t].ult_doc_referencia=e.ult_doc_referencia,this[t].estatus_lote=this.filterDesc("estatus",e.estatus_lote),this[t].serie_doc=e.serie_doc,this[t].cod_agencia=e.cod_agencia},async sendData(){if(this.confirmPopUp=!0,await this.until((e=>1==this.confirmUpload)),!this.confirmUpload)return;this.confirmUpload=!1,this.dialog=!1,this.loading=!0;let e={};e.cod_concepto=this.form.motivo.id,e.fecha_anulacion=A()(this.form.fecha,"DD/MM/YYYY").format("YYYY-MM-DD"),e.observacion=this.form.observacion,e.estatus_administra="A",e.check_anulada=1,e.fecha_anulada=A()(this.form.fecha,"DD/MM/YYYY").format("YYYY-MM-DD"),await Y.api.put(`/mmovimientos/${this.form.nota.id}`,e,{headers:{Authorization:`Bearer ${W.Z.getItem("token")}`}}).catch((()=>{this.errorMessage("Error del Sistema. Problemas al actualizar los datos de la anulación. Comuníquese con el proveedor del Sistemas..."),this.loading=!1})),await Y.api.get("/ccomisiones",{headers:{Authorization:`Bearer ${W.Z.getItem("token")}`,cod_movimiento:this.form.nota.id}}).then((e=>{if(e.data.data.length)for(var t=0;t<e.data.data.length;t++){let a={estatus:2};Y.api.put(`/ccomisiones/${e.data.data[t].id}`,a,{headers:{Authorization:`Bearer ${W.Z.getItem("token")}`}})}})),await Y.api.get("/mmovimientos/",{headers:{Authorization:`Bearer ${W.Z.getItem("token")}`,filters:JSON.stringify({tipo:this.form.nota.tipo_doc_principal,nro_documento:this.form.nota.nro_doc_principal,agencia:this.form.nota.cod_agencia})}}).then((e=>{if(e.data.data.length>0){let t={};"NC"==this.form.t_de_documento?t.saldo=e.data.data[0].saldo+this.form.nota.monto_total:t.saldo=e.data.data[0].saldo-this.form.nota.monto_total,t.saldo>0?t.estatus_administra="P":t.estatus_administra="C",Y.api.put(`/mmovimientos/${e.data.data[0].id}`,t,{headers:{Authorization:`Bearer ${W.Z.getItem("token")}`}}).catch((()=>{this.errorMessage("Error del Sistema. Problemas al actualizar el saldo de la Factura Origen. Comuníquese con el proveedor del Sistemas..."),this.loading=!1}))}})),await Y.api.get("/mmovimientos/",{headers:{Authorization:`Bearer ${W.Z.getItem("token")}`,filters:JSON.stringify({tipo_doc_ppal:this.form.nota.tipo_doc_principal,nro_doc_ppal:this.form.nota.nro_doc_principal,agencia:this.form.nota.cod_agencia,serie_doc_ppal:this.form.nota.serie_doc_principal,tipo:"GC"})}}).then((e=>{if(e.data.data.length>0)for(var t=0;t<e.data.data.length;t++){let a=e.data.data[t].id,o=0,s=0,i=e.data.data[t].comision_venta,l=e.data.data[t].comision_seg_vta,n={};e.data.data[t].cod_agente_venta&&Y.api.get(`/agentes/${e.data.data[t].cod_agente_venta}`,{headers:{Authorization:`Bearer ${W.Z.getItem("token")}`}}).then((e=>{o=(100*i/e.data.porc_comision_venta).toFixed(2),s=(100*l/e.data.porc_comision_seguro).toFixed(2),n={base_comision_vta_rcl:o,base_comision_seg:s},Y.api.put(`/mmovimientos/${a}`,n,{headers:{Authorization:`Bearer ${W.Z.getItem("token")}`}}).catch((()=>{this.errorMessage("Error del Sistema. Problemas al actualizar la base de comisiones de las Guias. Comuníquese con el proveedor del Sistemas..."),this.loading=!1}))}))}})),this.$q.notify({message:"Nota Anulada con exito!",color:"green"}),this.loading=!1,this.getDataTable(),this.resetForm()},buildNroDoc(e,t){var a="";switch(e){case"nro_documento":a=t.t_de_documento+" ",t.nro_control?t.nro_control_new?t.serie_documento?a+=t.serie_documento+" - "+t.nro_control_new.padStart(9,"00-000000"):a+=t.nro_control_new.padStart(9,"00-000000"):a+=t.nro_control.padStart(4,"0000"):a+=t.serie_documento+" - "+t.nro_documento;break;case"nro_doc":a=t.nro_control?t.nro_control.padStart(4,"0000"):t.serie_documento+" - "+t.nro_documento;break;case"nro_ref":t.nro_control&&(a=t.cod_agencia+"-"+t.nro_documento);break;case"nro_doc_principal":t.tipo_doc_principal&&(a=t.tipo_doc_principal+"-"),t.serie_doc_principal&&(a+=t.serie_doc_principal+" - "),!t.nro_ctrl_doc_ppal&&t.nro_doc_principal?a+=t.nro_doc_principal:!t.nro_ctrl_doc_ppal_new&&t.nro_ctrl_doc_ppal?a+=t.nro_ctrl_doc_ppal:t.nro_ctrl_doc_ppal_new&&(a+=t.nro_ctrl_doc_ppal_new);break;default:break}return a},async until(e){const t=a=>{e()?a():setTimeout((e=>t(a)),400)};return new Promise(t)},resetForm(){this.form.id="",this.form.motivo="",this.form.observacion=""},resetFilters(){this.selectedAgencia=this.agencias[0],this.fecha_desde=A()().format("DD/MM/YYYY"),this.fecha_hasta=A()().format("DD/MM/YYYY"),this.getDataTable()},errorMessage(e){this.$q.notify({message:e,color:"red"})},parseFloatN(e){return e=Math.round(100*e)/100,e}}};var T=a(4260),q=a(4379),I=a(6778),$=a(151),E=a(5589),N=a(8689),V=a(4689),Z=a(4554),P=a(2448),U=a(8240),O=a(3414),R=a(2035),F=a(3944),Q=a(5626),B=a(5363),L=a(6023),G=a(6941),H=a(3884),J=a(7011),K=a(2350),X=a(9367),ee=a(677),te=a(7518),ae=a.n(te);const oe=(0,T.Z)(S,[["render",y]]),se=oe;ae()(S,"components",{QPage:q.Z,QDialog:I.Z,QCard:$.Z,QCardSection:E.Z,QForm:N.Z,QInput:V.Z,QIcon:Z.Z,QSelect:P.Z,QBtn:U.Z,QItem:O.Z,QItemSection:R.Z,QPopupProxy:F.Z,QDate:Q.Z,QTooltip:B.Z,QTable:L.Z,QInnerLoading:G.Z,QTd:H.Z,QList:J.Z,QItemLabel:K.Z,QCardActions:X.Z}),ae()(S,"directives",{ClosePopup:ee.Z})},6700:(e,t,a)=>{var o={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":8225,"./ar-dz.js":8225,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":8092,"./es-mx.js":8092,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=i,e.exports=s,s.id=6700}}]);