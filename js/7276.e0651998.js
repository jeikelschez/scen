(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[7276],{3759:(e,a,o)=>{"use strict";function t(e,a,o,t,i,s){return null}o.d(a,{Z:()=>m});var i=o(589),s=o(5474),l=o(8825);const r={setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,o,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.get(e,t).then((e=>{this.$emit(a,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,o,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,a,t).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,a,o,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.put(e,a,t).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,a,o={headers:{}}){o.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.delete(e,o).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,o,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,s.api.post(e,a,t).then((e=>{(e.status=200)&&this.$emit(o,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=o(4260);const d=(0,n.Z)(r,[["render",t]]),m=d},6479:(e,a,o)=>{"use strict";function t(e,a,o,t,i,s){return null}o.d(a,{Z:()=>m});var i=o(8825),s=o(1488),l=o.n(s);const r={name:"rules",setup(){(0,i.Z)()},methods:{isReq(e,a=!1){if(null==e||""==e.trim())return!1!==a?a:"Valor Requerido"},isReqCurrency(e,a=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==a?a:"Valor Requerido"},isReqSelect(e,a=!1){if(null==e||e==[]||""==e)return!1!==a?a:"Valor Requerido"},isMax(e,a,o=!1){if(null!==e&&""!==e&&e.length>a)return!1!==o?o:`Maximo ${a} Caracteres`},isMin(e,a,o=!1){if(null!==e&&""!==e&&e.length<a)return!1!==o?o:`Minimo ${a} Caracteres`},checkDate(e,a=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==a?a:"Fecha Invalida"},checkHour(e,a=!1){if(0==l()(e,"HH:mm",!0)._isValid)return!1!==a?a:"Hora Invalida"}}};var n=o(4260);const d=(0,n.Z)(r,[["render",t]]),m=d},1072:(e,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>ee});var t=o(3673),i=o(2323);const s={class:"row"},l={class:"col-md-4 col-xs-12"},r={class:"col-md-4 col-xs-12"},n={class:"col-md-4 col-xs-12"},d={class:"col-md-4 col-xs-12"},m={class:"col-md-4 col-xs-12"},c={class:"col-md-4 col-xs-12"},u={class:"col-md-4 col-xs-12"},p={class:"col-md-4 col-xs-12"},g={class:"col-md-4 col-xs-12"},f={class:"col-md-6 col-xs-12"},h={class:"col-md-6 col-xs-12"},_={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},j={class:"q-pa-sm justify-center"},b={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},w=(0,t._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,t._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,t._)("strong",null,"MANTENIMIENTO - TARIFAS")])],-1),y={class:"col-md-5 col-sm-7 col-xs-12 cardMargin selectMobile",style:{"align-self":"center"}},v={class:"col-md-2 col-sm-3 col-xs-12",style:{"text-align":"center","align-self":"center"}},k={class:"row q-gutter-y-md q-pa-md"},D=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function x(e,a,o,x,V,z){const C=(0,t.up)("q-icon"),W=(0,t.up)("q-select"),T=(0,t.up)("q-input"),U=(0,t.up)("q-btn"),q=(0,t.up)("q-form"),E=(0,t.up)("q-card-section"),A=(0,t.up)("q-card"),$=(0,t.up)("q-dialog"),Z=(0,t.up)("q-inner-loading"),I=(0,t.up)("q-td"),S=(0,t.up)("q-item-label"),O=(0,t.up)("q-item-section"),R=(0,t.up)("q-item"),M=(0,t.up)("q-list"),P=(0,t.up)("q-table"),N=(0,t.up)("q-card-actions"),Q=(0,t.up)("methods"),B=(0,t.up)("rules-vue"),L=(0,t.up)("q-page"),H=(0,t.Q2)("money"),F=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(L,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{modelValue:x.dialog,"onUpdate:modelValue":a[11]||(a[11]=e=>x.dialog=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t.Wm)(q,{onSubmit:z.sendData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",s,[(0,t._)("div",l,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.tipo_urgencia,"onUpdate:modelValue":a[0]||(a[0]=e=>V.form.tipo_urgencia=e),label:"Tipo de Urgencia",class:"pcform","input-class":"input",hint:"",options:V.tipoUrgencia,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",r,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.tipo_tarifa,"onUpdate:modelValue":a[1]||(a[1]=e=>V.form.tipo_tarifa=e),label:"Tipo de Tarifa",class:"pcform","input-class":"input",hint:"",options:V.tipoTarifa,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",n,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.tipo_ubicacion,"onUpdate:modelValue":a[2]||(a[2]=e=>V.form.tipo_ubicacion=e),label:"Tipo de Ubicación","input-class":"input",hint:"",options:V.tipoUbicacion,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",d,[(0,t.wy)((0,t.Wm)(T,{outlined:"",modelValue:V.form.monto_tarifa,"onUpdate:modelValue":a[3]||(a[3]=e=>V.form.monto_tarifa=e),label:"Monto de Tarifa","input-class":"text-right",hint:"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,14)],class:"pcform","lazy-rules":""},null,8,["modelValue","rules"]),[[H,V.money]])]),(0,t._)("div",m,[(0,t.wy)(((0,t.wg)(),(0,t.j4)(T,{outlined:"",modelValue:V.form.kgr_hasta,"onUpdate:modelValue":a[4]||(a[4]=e=>V.form.kgr_hasta=e),label:"Kgrs Hasta","input-class":"text-right",class:"pcform",rules:[e=>this.$refs.rulesVue.isMax(e,8)],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"123"})])),_:1},8,["modelValue","rules"])),[[H,V.money]])]),(0,t._)("div",c,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.tipo_carga,"onUpdate:modelValue":a[5]||(a[5]=e=>V.form.tipo_carga=e),label:"Tipo de Carga","input-class":"input",hint:"",options:V.tipoCarga,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",u,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.modalidad_pago,"onUpdate:modelValue":a[6]||(a[6]=e=>V.form.modalidad_pago=e),label:"Modalidad de Pago",class:"pcform","input-class":"input",hint:"",options:V.modalidadPago,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",p,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.pagado_en,"onUpdate:modelValue":a[7]||(a[7]=e=>V.form.pagado_en=e),label:"Lugar de Pago",class:"pcform","input-class":"input",hint:"",options:V.pagadoEn,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",g,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.region_origen,"onUpdate:modelValue":a[8]||(a[8]=e=>V.form.region_origen=e),label:"Region Origen","input-class":"input",hint:"",options:V.regiones,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",f,[(0,t.Wm)(W,{outlined:"",modelValue:V.form.region_destino,"onUpdate:modelValue":a[9]||(a[9]=e=>V.form.region_destino=e),label:"Region Destino","input-class":"input",class:"pcform",hint:"",options:V.regiones,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"support_agent"})])),_:1},8,["modelValue","options"])]),(0,t._)("div",h,[(0,t.Wm)(T,{outlined:"",modelValue:V.form.tiempo_servicio,"onUpdate:modelValue":a[10]||(a[10]=e=>V.form.tiempo_servicio=e),label:"Tiempo (HRS) Servicio",hint:"",type:"number",rules:[e=>this.$refs.rulesVue.isMax(e,3)],"lazy-rules":"",min:"0"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"badge"})])),_:1},8,["modelValue","rules"])])]),(0,t._)("div",_,[(0,t.Wm)(U,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(U,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[F]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",j,[(0,t._)("div",b,[w,(0,t._)("div",y,[(0,t.Wm)(T,{modelValue:V.filter,"onUpdate:modelValue":a[12]||(a[12]=e=>V.filter=e),rounded:"",dense:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",v,[(0,t.Wm)(U,{label:"Insertar",rounded:"",color:"primary",onClick:a[13]||(a[13]=e=>x.dialog=!0),onClickCapture:a[14]||(a[14]=e=>z.resetForm()),disabled:this.allowOption(2),class:"q-px-xl q-py-xs"},null,8,["disabled"])])]),(0,t._)("div",k,[(0,t.Wm)(P,{rows:V.tarifas,loading:x.loading,"binary-state-sort":"","row-key":"id",columns:V.columns,separator:x.separator,"rows-per-page-options":[5,10,15,20,50],filter:V.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:V.pagination,"onUpdate:pagination":a[17]||(a[17]=e=>V.pagination=e)},{loading:(0,t.w5)((()=>[(0,t.Wm)(Z,{showing:"",color:"primary",class:"loading"})])),"body-cell-tipo_urgencia":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoUrgencia",e.row.tipo_urgencia)),1)])),_:2},1032,["props"])])),"body-cell-tipo_tarifa":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoTarifa",e.row.tipo_tarifa)),1)])),_:2},1032,["props"])])),"body-cell-tipo_ubicacion":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoUbicacion",e.row.tipo_ubicacion)),1)])),_:2},1032,["props"])])),"body-cell-region_origen":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("regiones",e.row.region_origen)),1)])),_:2},1032,["props"])])),"body-cell-region_destino":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("regiones",e.row.region_destino)),1)])),_:2},1032,["props"])])),"body-cell-action":(0,t.w5)((e=>[(0,t.Wm)(I,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:a=>{this.$refs.methods.getData(`/tarifas/${e.row.id}`,"setDataEdit","form"),x.dialog=!0}},null,8,["disabled","onClick"]),(0,t.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:a=>V.selected=e.row.id,onClickCapture:a[15]||(a[15]=e=>x.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((e=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(e.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(A,{class:(0,i.C_)(e.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(o=>((0,t.wg)(),(0,t.j4)(R,{key:o.name},{default:(0,t.w5)((()=>[(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(O,{side:"",class:"itemMovilSide"},{default:(0,t.w5)((()=>["tipo_urgencia"===o.name?((0,t.wg)(),(0,t.j4)(S,{key:0},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoUrgencia",e.row.tipo_urgencia)),1)])),_:2},1024)):(0,t.kq)("",!0),"tipo_tarifa"===o.name?((0,t.wg)(),(0,t.j4)(S,{key:1},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoTarifa",e.row.tipo_tarifa)),1)])),_:2},1024)):(0,t.kq)("",!0),"tipo_ubicacion"===o.name?((0,t.wg)(),(0,t.j4)(S,{key:2},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("tipoUbicacion",e.row.tipo_ubicacion)),1)])),_:2},1024)):(0,t.kq)("",!0),"region_origen"===o.name?((0,t.wg)(),(0,t.j4)(S,{key:3},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("regiones",e.row.region_origen)),1)])),_:2},1024)):(0,t.kq)("",!0),"region_destino"===o.name?((0,t.wg)(),(0,t.j4)(S,{key:4},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(z.filterDesc("regiones",e.row.region_destino)),1)])),_:2},1024)):(0,t.kq)("",!0),"action"===o.name?((0,t.wg)(),(0,t.j4)(U,{key:5,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:a=>{this.$refs.methods.getData(`/tarifas/${e.row.id}`,"setDataEdit","form"),x.dialog=!0}},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"action"===o.name?((0,t.wg)(),(0,t.j4)(U,{key:6,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:a=>V.selected=e.row.id,onClickCapture:a[16]||(a[16]=e=>x.deletePopup=!0)},null,8,["disabled","onClick"])):(0,t.kq)("",!0),"tipo_urgencia"!=o.name&&"tipo_tarifa"!=o.name&&"tipo_ubicacion"!=o.name&&"region_origen"!=o.name&&"region_destino"!=o.name?((0,t.wg)(),(0,t.j4)(S,{key:7},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(o.value),1)])),_:2},1024)):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])]),(0,t.Wm)($,{modelValue:x.deletePopup,"onUpdate:modelValue":a[19]||(a[19]=e=>x.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[D])),_:1}),(0,t.Wm)(N,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(U,{flat:"",label:"Cancelar",color:"primary"},null,512),[[F]]),(0,t.wy)((0,t.Wm)(U,{flat:"",label:"Aceptar",color:"primary",onClick:a[18]||(a[18]=e=>this.$refs.methods.deleteData(`/tarifas/${V.selected}`,"getDataTable"))},null,512),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(Q,{ref:"methods",onSetDataEdit:z.setDataEdit,onGetDataTable:z.getDataTable,onSetDataTable:z.setDataTable,onSetDataPermisos:z.setDataPermisos},null,8,["onSetDataEdit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,t.Wm)(B,{ref:"rulesVue"},null,512)])),_:1})}var V=o(1959),z=o(589),C=o(6479),W=o(3759),T=o(1885);const U={directives:{money:T.VMoney},components:{methods:W.Z,VMoney:T.VMoney,rulesVue:C.Z},data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!0},columns:[{name:"monto_tarifa",label:"Monto de Tarifa",field:"monto_tarifa",align:"right",sortable:!0,format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"tipo_urgencia",label:"Tipo de Urgencia",field:"tipo_urgencia",align:"left",sortable:!0},{name:"tipo_tarifa",label:"Tipo de Tarifa",field:"tipo_tarifa",align:"left",sortable:!0},{name:"tipo_ubicacion",label:"Tipo de Ubicación",field:"tipo_ubicacion",align:"left",sortable:!0},{name:"region_origen",label:"Region Origen",field:"region_origen",align:"left",sortable:!0},{name:"region_destino",label:"Region Destino",field:"region_destino",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center"}],form:{monto_tarifa:"",tipo_urgencia:[],tipo_tarifa:[],tipo_ubicacion:[],kgr_hasta:"",tipo_carga:[],modalidad_pago:[],pagado_en:[],region_origen:[],region_destino:[],tiempo_servicio:""},tipoUrgencia:[{label:"NORMAL",value:"N"},{label:"EMERGENCIA",value:"E"},{label:"BASICA",value:"B"}],tipoTarifa:[{label:"BÁSICA",value:"BA"},{label:"KGRS.ADICIONALES",value:"KA"}],tipoUbicacion:[{label:"URBANA",value:"U"},{label:"EXTRA-URBANA",value:"E"},{label:"FORANEA",value:"F"}],tipoCarga:[{label:"PAQUETES",value:"PM"},{label:"SOBRE-BULTOS",value:"SB"}],modalidadPago:[{label:"CONTADO",value:"CO"},{label:"CREDITO",value:"CR"}],pagadoEn:[{label:"ORIGEN",value:"O"},{label:"DESTINO",value:"D"}],regiones:[{label:"CENTRAL",value:"CE"},{label:"OCCIDENTAL",value:"OC"},{label:"ORIENTAL",value:"OR"}],pagination:{rowsPerPage:10},tarifas:[],selected:[],rpermisos:[],filter:""}},setup(){return{loading:(0,V.iH)(!1),separator:(0,V.iH)("vertical"),dialog:(0,V.iH)(!1),deletePopup:(0,V.iH)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Tarifas",""),this.getDataTable(),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:z.Z.getItem("tokenTraducido").usuario.roles.id,menu:"tarifas"}})},methods:{filterDesc(e,a){var o=this[e].findIndex((e=>e.value==a));return o>=0?this[e][o].label:null},allowOption(e){return this.rpermisos.findIndex((a=>a.acciones.accion==e))<0},setDataPermisos(e,a){this[a]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},getDataTable(){this.loading=!0,this.$refs.methods.getData("/tarifas","setDataTable","tarifas")},setDataTable(e,a){this[a]=e.data?e.data:e,this.loading=!1},setDataEdit(e,a){this.form.id=e.id,this.form.monto_tarifa=e.monto_tarifa,this.form.kgr_hasta=e.kgr_hasta,this.form.tiempo_servicio=e.tiempo_servicio,this.form.tipo_urgencia=this.filterDesc("tipoUrgencia",e.tipo_urgencia),this.form.tipo_tarifa=this.filterDesc("tipoTarifa",e.tipo_tarifa),this.form.tipo_ubicacion=this.filterDesc("tipoUbicacion",e.tipo_ubicacion),this.form.tipo_carga=this.filterDesc("tipoCarga",e.tipo_carga),this.form.modalidad_pago=this.filterDesc("modalidadPago",e.modalidad_pago),this.form.pagado_en=this.filterDesc("pagadoEn",e.pagado_en),this.form.region_origen=this.filterDesc("regiones",e.region_origen),this.form.region_destino=this.filterDesc("regiones",e.region_destino)},sendData(){this.form.kgr_hasta=this.form.kgr_hasta.replaceAll(".","").replaceAll(",","."),this.form.monto_tarifa=this.form.monto_tarifa.replaceAll(".","").replaceAll(",","."),this.form.tipo_urgencia=this.form.tipo_urgencia?this.form.tipo_urgencia.value:null,this.form.tipo_tarifa=this.form.tipo_tarifa?this.form.tipo_tarifa.value:null,this.form.tipo_ubicacion=this.form.tipo_ubicacion?this.form.tipo_ubicacion.value:null,this.form.tipo_carga=this.form.tipo_carga?this.form.tipo_carga.value:null,this.form.modalidad_pago=this.form.modalidad_pago?this.form.modalidad_pago.value:null,this.form.pagado_en=this.form.pagado_en?this.form.pagado_en.value:null,this.form.region_origen=this.form.region_origen?this.form.region_origen.value:null,this.form.region_destino=this.form.region_destino?this.form.region_destino.value:null,this.form.id?this.$refs.methods.putData(`/tarifas/${this.form.id}`,this.form,"getDataTable"):this.$refs.methods.createData("/tarifas",this.form,"getDataTable"),this.dialog=!1,this.resetForm()},resetForm(){delete this.form.id,this.form.monto_tarifa="0",this.form.kgr_hasta="",this.form.tiempo_servicio="",this.form.tipo_urgencia="",this.form.tipo_tarifa="",this.form.tipo_ubicacion="",this.form.tipo_carga="",this.form.modalidad_pago="",this.form.pagado_en="",this.form.region_destino="",this.form.region_origen="",this.form.tiempo_servicio=""}}};var q=o(4260),E=o(4379),A=o(6778),$=o(151),Z=o(5589),I=o(8689),S=o(2448),O=o(4554),R=o(4689),M=o(8240),P=o(6023),N=o(6941),Q=o(3884),B=o(7011),L=o(3414),H=o(2035),F=o(2350),G=o(9367),Y=o(677),K=o(7518),X=o.n(K);const J=(0,q.Z)(U,[["render",x]]),ee=J;X()(U,"components",{QPage:E.Z,QDialog:A.Z,QCard:$.Z,QCardSection:Z.Z,QForm:I.Z,QSelect:S.Z,QIcon:O.Z,QInput:R.Z,QBtn:M.Z,QTable:P.Z,QInnerLoading:N.Z,QTd:Q.Z,QList:B.Z,QItem:L.Z,QItemSection:H.Z,QItemLabel:F.Z,QCardActions:G.Z}),X()(U,"directives",{ClosePopup:Y.Z})},6700:(e,a,o)=>{var t={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":8225,"./ar-dz.js":8225,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":8092,"./es-mx.js":8092,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function i(e){var a=s(e);return o(a)}function s(e){if(!o.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=s,e.exports=i,i.id=6700}}]);