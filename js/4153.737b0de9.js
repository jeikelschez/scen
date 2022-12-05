(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[4153],{23759:(e,a,o)=>{"use strict";function t(e,a,o,t,i,s){return null}o.d(a,{Z:()=>m});var i=o(80589),s=o(5474),l=o(48825);const r={setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,o,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,t).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,o,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,a,t).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,a,o,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.put(e,a,t).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,a,o={headers:{}}){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,o,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,a,t).then((e=>{(e.status=200)&&this.$emit(o,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=o(74260);const d=(0,n.Z)(r,[["render",t]]),m=d},3868:(e,a,o)=>{"use strict";function t(e,a,o,t,i,s){return null}o.d(a,{Z:()=>m});var i=o(48825),s=o(11488),l=o.n(s);const r={name:"rules",setup(){(0,i.Z)()},methods:{isReq(e,a=!1){if(null==e||""==e.trim())return!1!==a?a:"Valor Requerido"},isReqCurrency(e,a=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==a?a:"Valor Requerido"},isReqSelect(e,a=!1){if(null==e||e==[]||""==e)return!1!==a?a:"Valor Requerido"},isMax(e,a,o=!1){if(null!==e&&""!==e&&e.length>a)return!1!==o?o:`Maximo ${a} Caracteres`},isMin(e,a,o=!1){if(null!==e&&""!==e&&e.length<a)return!1!==o?o:`Minimo ${a} Caracteres`},checkDate(e,a=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==a?a:"Fecha Invalida"},checkHour(e,a=!1){if(0==l()(e,"HH:mm:mm",!0)._isValid)return!1!==a?a:"Hora Invalida"}}};var n=o(74260);const d=(0,n.Z)(r,[["render",t]]),m=d},70765:(e,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>ee});var t=o(83673),i=o(62323);const s={class:"row"},l={class:"col-md-4 col-xs-12"},r={class:"col-md-4 col-xs-12"},n={class:"col-md-4 col-xs-12"},d={class:"col-md-4 col-xs-12"},m={class:"col-md-4 col-xs-12"},c={class:"col-md-4 col-xs-12"},u={class:"col-md-4 col-xs-12"},p={class:"col-md-4 col-xs-12"},g={class:"col-md-4 col-xs-12"},f={class:"col-md-6 col-xs-12"},h={class:"col-md-6 col-xs-12"},_={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},j={class:"q-pa-sm justify-center"},b={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},w=(0,t._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,t._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,t._)("strong",null,"MANTENIMIENTO - TARIFAS")])],-1),y={class:"col-md-5 col-sm-7 col-xs-12 cardMargin selectMobile",style:{"align-self":"center"}},v={class:"col-md-2 col-sm-3 col-xs-12",style:{"text-align":"center","align-self":"center"}},k={class:"row q-gutter-y-md q-pa-md"},D=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function x(e,a,o,x,V,z){const C=(0,t.up)("q-icon"),W=(0,t.up)("q-select"),T=(0,t.up)("q-input"),U=(0,t.up)("q-btn"),q=(0,t.up)("q-form"),E=(0,t.up)("q-card-section"),A=(0,t.up)("q-card"),$=(0,t.up)("q-dialog"),Z=(0,t.up)("q-inner-loading"),I=(0,t.up)("q-td"),S=(0,t.up)("q-item-label"),O=(0,t.up)("q-item-section"),R=(0,t.up)("q-item"),M=(0,t.up)("q-list"),P=(0,t.up)("q-table"),N=(0,t.up)("q-card-actions"),Q=(0,t.up)("methods"),B=(0,t.up)("rules-vue"),L=(0,t.up)("q-page"),H=(0,t.Q2)("money"),F=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(L,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{modelValue:x.dialog,"onUpdate:modelValue":a[11]||(a[11]=e=>x.dialog=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t.Wm)(q,{onSubmit:z.sendData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",s,[(0,t._)("div",l,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.tipo_urgencia,"onUpdate:modelValue":a[0]||(a[0]=e=>V.form.tipo_urgencia=e),label:"Tipo de Urgencia",class:"pcform","input-class":"input",hint:"",options:V.tipoUrgencia,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",r,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.tipo_tarifa,"onUpdate:modelValue":a[1]||(a[1]=e=>V.form.tipo_tarifa=e),label:"Tipo de Tarifa",class:"pcform","input-class":"input",hint:"",options:V.tipoTarifa,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",n,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.tipo_ubicacion,"onUpdate:modelValue":a[2]||(a[2]=e=>V.form.tipo_ubicacion=e),label:"Tipo de Ubicación","input-class":"input",hint:"",options:V.tipoUbicacion,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",d,[(0,t.wy)((0,t.Wm)(T,{outlined:"",modelValue:V.form.monto_tarifa,"onUpdate:modelValue":a[3]||(a[3]=e=>V.form.monto_tarifa=e),label:"Monto de Tarifa","input-class":"text-right",hint:"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,14)],class:"pcform","lazy-rules":""},null,8,["modelValue","rules"]),[[H,V.money]])]),(0,t._)("div",m,[(0,t.wy)(((0,t.wg)(),(0,t.j4)(T,{outlined:"",modelValue:V.form.kgr_hasta,"onUpdate:modelValue":a[4]||(a[4]=e=>V.form.kgr_hasta=e),label:"Kgrs Hasta","input-class":"text-right",class:"pcform",rules:[e=>this.$refs.rulesVue.isMax(e,8)],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"123"})])),_:1},8,["modelValue","rules"])),[[H,V.money]])]),(0,t._)("div",c,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.tipo_carga,"onUpdate:modelValue":a[5]||(a[5]=e=>V.form.tipo_carga=e),label:"Tipo de Carga","input-class":"input",hint:"",options:V.tipoCarga,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",u,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.modalidad_pago,"onUpdate:modelValue":a[6]||(a[6]=e=>V.form.modalidad_pago=e),label:"Modalidad de Pago",class:"pcform","input-class":"input",hint:"",options:V.modalidadPago,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",p,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.pagado_en,"onUpdate:modelValue":a[7]||(a[7]=e=>V.form.pagado_en=e),label:"Lugar de Pago",class:"pcform","input-class":"input",hint:"",options:V.pagadoEn,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",g,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.region_origen,"onUpdate:modelValue":a[8]||(a[8]=e=>V.form.region_origen=e),label:"Region Origen","input-class":"input",hint:"",options:V.regiones,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",f,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.region_destino,"onUpdate:modelValue":a[9]||(a[9]=e=>V.form.region_destino=e),label:"Region Destino","input-class":"input",class:"pcform",hint:"",options:V.regiones,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",h,[(0,t.Wm)(T,{outlined:"",modelValue:V.form.tiempo_servicio,"onUpdate:modelValue":a[10]||(a[10]=e=>V.form.tiempo_servicio=e),label:"Tiempo (HRS) Servicio",hint:"",type:"number",rules:[e=>this.$refs.rulesVue.isMax(e,3)],"lazy-rules":"",min:"0"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"badge"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",_,[(0,t.Wm)(U,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(U,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[F]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",j,[(0,t._)("div",b,[w,(0,t._)("div",y,[(0,t.Wm)(T,{modelValue:V.filter,"onUpdate:modelValue":a[12]||(a[12]=e=>V.filter=e),rounded:"",dense:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",v,[(0,t.Wm)(U,{label:"Insertar",rounded:"",color:"primary",onClick:a[13]||(a[13]=e=>x.dialog=!0),onClickCapture:a[14]||(a[14]=e=>z.resetForm()),disabled:this.allowOption(2),class:"q-px-xl q-py-xs"},null,8,["disabled"])])]),(0,t._)("div",k,[(0,t.Wm)(P,{rows:V.tarifas,loading:x.loading,"binary-state-sort":"","row-key":"id",columns:V.columns,separator:x.separator,"rows-per-page-options":[5,10,15,20,50],filter:V.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:V.pagination,"onUpdate:pagination":a[17]||(a[17]=e=>V.pagination=e)},{loading:(0,t.w5)((()=>[(0,t.Wm)(Z,{showing:"",color:"primary",class:"loading"})])),"body-cell-tipo_urgencia":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoUrgencia",e.row.tipo_urgencia)),1)])),_:2},1032,["props"])])),"body-cell-tipo_tarifa":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoTarifa",e.row.tipo_tarifa)),1)])),_:2},1032,["props"])])),"body-cell-tipo_ubicacion":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoUbicacion",e.row.tipo_ubicacion)),1)])),_:2},1032,["props"])])),"body-cell-region_origen":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("regiones",e.row.region_origen)),1)])),_:2},1032,["props"])])),"body-cell-region_destino":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("regiones",e.row.region_destino)),1)])),_:2},1032,["props"])])),"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:a=>{this.$refs.methods.getData(`/tarifas/${e.row.id}`,"setDataEdit","form"),x.dialog=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:a=>V.selected=e.row.id,onClickCapture:a[15]||(a[15]=e=>x.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(A,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(o=>((0,t.wg)(),(0,t.j4)(R,{key:o.name},{default:(0,t.w5)((()=>[(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(O,{side:"",class:"itemMovilSide"},{default:(0,t.w5)((()=>["tipo_urgencia"===o.name?((0,t.wg)(),(0,t.j4)(S,{key:0},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoUrgencia",e.row.tipo_urgencia)),1)])),_:2},1024)):(0,t.kq)("",!0),"tipo_tarifa"===o.name?((0,t.wg)(),(0,t.j4)(S,{key:1},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoTarifa",e.row.tipo_tarifa)),1)])),_:2},1024)):(0,t.kq)("",!0),"tipo_ubicacion"===o.name?((0,t.wg)(),(0,t.j4)(S,{key:2},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoUbicacion",e.row.tipo_ubicacion)),1)])),_:2},1024)):(0,t.kq)("",!0),"region_origen"===o.name?((0,t.wg)(),(0,t.j4)(S,{key:3},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("regiones",e.row.region_origen)),1)])),_:2},1024)):(0,t.kq)("",!0),"region_destino"===o.name?((0,t.wg)(),(0,t.j4)(S,{key:4},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("regiones",e.row.region_destino)),1)])),_:2},1024)):(0,t.kq)("",!0),"action"===o.name?((0,t.wg)(),(0,t.j4)(U,{key:5,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:a=>{this.$refs.methods.getData(`/tarifas/${e.row.id}`,"setDataEdit","form"),x.dialog=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"action"===o.name?((0,t.wg)(),(0,t.j4)(U,{key:6,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:a=>V.selected=e.row.id,onClickCapture:a[16]||(a[16]=e=>x.deletePopup=!0)},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"tipo_urgencia"!=o.name&&"tipo_tarifa"!=o.name&&"tipo_ubicacion"!=o.name&&"region_origen"!=o.name&&"region_destino"!=o.name?((0,t.wg)(),(0,t.j4)(S,{key:7},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(o.value),1)])),_:2},1024)):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])]),(0,t.Wm)($,{modelValue:x.deletePopup,"onUpdate:modelValue":a[19]||(a[19]=e=>x.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[D])),_:1}),(0,t.Wm)(N,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(U,{flat:"",label:"Cancelar",color:"primary"},null,512),[[F]]),(0,t.wy)((0,t.Wm)(U,{flat:"",label:"Aceptar",color:"primary",onClick:a[18]||(a[18]=e=>this.$refs.methods.deleteData(`/tarifas/${V.selected}`,"getDataTable"))},null,512),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(Q,{ref:"methods",onSetDataEdit:z.setDataEdit,onGetDataTable:z.getDataTable,onSetDataTable:z.setDataTable,onSetDataPermisos:z.setDataPermisos},null,8,["onSetDataEdit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,t.Wm)(B,{ref:"rulesVue"},null,512)])),_:1})}o(65363),o(97768);var V=o(61959),z=o(80589),C=o(3868),W=o(23759),T=o(31885);const U={directives:{money:T.VMoney},components:{methods:W.Z,VMoney:T.VMoney,rulesVue:C.Z},data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!0},columns:[{name:"monto_tarifa",label:"Monto de Tarifa",field:"monto_tarifa",align:"right",sortable:!0,format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"tipo_urgencia",label:"Tipo de Urgencia",field:"tipo_urgencia",align:"left",sortable:!0},{name:"tipo_tarifa",label:"Tipo de Tarifa",field:"tipo_tarifa",align:"left",sortable:!0},{name:"tipo_ubicacion",label:"Tipo de Ubicación",field:"tipo_ubicacion",align:"left",sortable:!0},{name:"region_origen",label:"Region Origen",field:"region_origen",align:"left",sortable:!0},{name:"region_destino",label:"Region Destino",field:"region_destino",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center"}],form:{monto_tarifa:"",tipo_urgencia:[],tipo_tarifa:[],tipo_ubicacion:[],kgr_hasta:"",tipo_carga:[],modalidad_pago:[],pagado_en:[],region_origen:[],region_destino:[],tiempo_servicio:""},tipoUrgencia:[{label:"NORMAL",value:"N"},{label:"EMERGENCIA",value:"E"},{label:"BASICA",value:"B"}],tipoTarifa:[{label:"BÁSICA",value:"BA"},{label:"KGRS.ADICIONALES",value:"KA"}],tipoUbicacion:[{label:"URBANA",value:"U"},{label:"EXTRA-URBANA",value:"E"},{label:"FORANEA",value:"F"}],tipoCarga:[{label:"PAQUETES",value:"PM"},{label:"SOBRE-BULTOS",value:"SB"}],modalidadPago:[{label:"CONTADO",value:"CO"},{label:"CREDITO",value:"CR"}],pagadoEn:[{label:"ORIGEN",value:"O"},{label:"DESTINO",value:"D"}],regiones:[{label:"CENTRAL",value:"CE"},{label:"OCCIDENTAL",value:"OC"},{label:"ORIENTAL",value:"OR"}],pagination:{rowsPerPage:5},tarifas:[],selected:[],rpermisos:[],filter:""}},setup(){return{loading:(0,V.iH)(!1),separator:(0,V.iH)("vertical"),dialog:(0,V.iH)(!1),deletePopup:(0,V.iH)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Tarifas",""),this.getDataTable(),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:z.Z.getItem("tokenTraducido").usuario.roles.id,menu:"tarifas"}})},methods:{filterDesc(e,a){var o=this[e].findIndex((e=>e.value==a));return o>=0?this[e][o].label:null},allowOption(e){return this.rpermisos.findIndex((a=>a.acciones.accion==e))<0},setDataPermisos(e,a){this[a]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},getDataTable(){this.loading=!0,this.$refs.methods.getData("/tarifas","setDataTable","tarifas")},setDataTable(e,a){this[a]=e.data?e.data:e,this.loading=!1},setDataEdit(e,a){this.form.id=e.id,this.form.monto_tarifa=e.monto_tarifa,this.form.kgr_hasta=e.kgr_hasta,this.form.tiempo_servicio=e.tiempo_servicio,this.form.tipo_urgencia=this.filterDesc("tipoUrgencia",e.tipo_urgencia),this.form.tipo_tarifa=this.filterDesc("tipoTarifa",e.tipo_tarifa),this.form.tipo_ubicacion=this.filterDesc("tipoUbicacion",e.tipo_ubicacion),this.form.tipo_carga=this.filterDesc("tipoCarga",e.tipo_carga),this.form.modalidad_pago=this.filterDesc("modalidadPago",e.modalidad_pago),this.form.pagado_en=this.filterDesc("pagadoEn",e.pagado_en),this.form.region_origen=this.filterDesc("regiones",e.region_origen),this.form.region_destino=this.filterDesc("regiones",e.region_destino)},sendData(){this.form.kgr_hasta=this.form.kgr_hasta.replaceAll(".","").replaceAll(",","."),this.form.monto_tarifa=this.form.monto_tarifa.replaceAll(".","").replaceAll(",","."),this.form.tipo_urgencia=this.form.tipo_urgencia?this.form.tipo_urgencia.value:null,this.form.tipo_tarifa=this.form.tipo_tarifa?this.form.tipo_tarifa.value:null,this.form.tipo_ubicacion=this.form.tipo_ubicacion?this.form.tipo_ubicacion.value:null,this.form.tipo_carga=this.form.tipo_carga?this.form.tipo_carga.value:null,this.form.modalidad_pago=this.form.modalidad_pago?this.form.modalidad_pago.value:null,this.form.pagado_en=this.form.pagado_en?this.form.pagado_en.value:null,this.form.region_origen=this.form.region_origen?this.form.region_origen.value:null,this.form.region_destino=this.form.region_destino?this.form.region_destino.value:null,this.form.id?this.$refs.methods.putData(`/tarifas/${this.form.id}`,this.form,"getDataTable"):this.$refs.methods.createData("/tarifas",this.form,"getDataTable"),this.dialog=!1,this.resetForm()},resetForm(){delete this.form.id,this.form.monto_tarifa="0",this.form.kgr_hasta="",this.form.tiempo_servicio="",this.form.tipo_urgencia="",this.form.tipo_tarifa="",this.form.tipo_ubicacion="",this.form.tipo_carga="",this.form.modalidad_pago="",this.form.pagado_en="",this.form.region_destino="",this.form.region_origen="",this.form.tiempo_servicio=""}}};var q=o(74260),E=o(24379),A=o(46778),$=o(10151),Z=o(25589),I=o(68689),S=o(72448),O=o(24554),R=o(64689),M=o(48240),P=o(96023),N=o(66941),Q=o(83884),B=o(27011),L=o(83414),H=o(52035),F=o(2350),G=o(99367),Y=o(60677),K=o(7518),X=o.n(K);const J=(0,q.Z)(U,[["render",x]]),ee=J;X()(U,"components",{QPage:E.Z,QDialog:A.Z,QCard:$.Z,QCardSection:Z.Z,QForm:I.Z,QSelect:S.Z,QIcon:O.Z,QInput:R.Z,QBtn:M.Z,QTable:P.Z,QInnerLoading:N.Z,QTd:Q.Z,QList:B.Z,QItem:L.Z,QItemSection:H.Z,QItemLabel:F.Z,QCardActions:G.Z}),X()(U,"directives",{ClosePopup:Y.Z})},46700:(e,a,o)=>{var t={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function i(e){var a=s(e);return o(a)}function s(e){if(!o.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=s,e.exports=i,i.id=46700}}]);