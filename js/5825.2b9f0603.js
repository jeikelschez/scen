(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[5825],{93899:(e,t,s)=>{"use strict";function a(e,t,s,a,o,i){return null}s.d(t,{A:()=>c});var o=s(45022),i=s(80660),l=s(14907);const r={setup(){const e=(0,l.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,i.api.get(e,a).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,i.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,i.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${o.A.getItem("token")}`,i.api.delete(e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,i.api.post(e,t,a).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=s(12807);const d=(0,n.A)(r,[["render",a]]),c=d},99565:(e,t,s)=>{"use strict";function a(e,t,s,a,o,i){return null}s.d(t,{A:()=>c});var o=s(14907),i=s(85038),l=s.n(i);const r={name:"rules",setup(){(0,o.A)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrencyWithZero(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"},checkHour(e,t=!1){if(0==l()(e,"HH:mm",!0)._isValid)return!1!==t?t:"Hora Invalida"}}};var n=s(12807);const d=(0,n.A)(r,[["render",a]]),c=d},24244:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Y});var a=s(61758),o=s(29104),i=s(58790);const l={class:"row"},r={class:"col-md-6 col-xs-12"},n={class:"col-md-6 col-xs-12"},d={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},u={class:"row justify-center items-center content-center"},m={class:"q-pa-sm justify-center"},h={class:"q-pa-md row justify-end"},p=(0,a.Lk)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a.Lk)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a.Lk)("strong",null,"MANTENIMIENTO - CONTROL CORRELATIVO")])],-1),g={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-6 cardMargin selectMobile",style:{"align-self":"center","text-align":"center"}},f={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 cardMargin selectMobile"},b={class:"col-md-3 col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 cardMargin selectMobile"},j={class:"col-md-2 col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},_={class:"q-pa-md q-gutter-y-md"},k=(0,a.Lk)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1);function v(e,t,s,v,D,y){const A=(0,a.g2)("q-icon"),C=(0,a.g2)("q-input"),x=(0,a.g2)("q-btn"),V=(0,a.g2)("q-form"),F=(0,a.g2)("q-card-section"),T=(0,a.g2)("q-card"),w=(0,a.g2)("q-dialog"),S=(0,a.g2)("q-item-section"),q=(0,a.g2)("q-item"),$=(0,a.g2)("q-select"),z=(0,a.g2)("q-inner-loading"),I=(0,a.g2)("q-td"),L=(0,a.g2)("q-item-label"),E=(0,a.g2)("q-list"),P=(0,a.g2)("q-table"),R=(0,a.g2)("q-card-actions"),U=(0,a.g2)("methods"),M=(0,a.g2)("rules-vue"),Q=(0,a.g2)("q-page"),O=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.Wv)(Q,{class:"pagina q-pa-md"},{default:(0,a.k6)((()=>[(0,a.bF)(w,{modelValue:v.dialog,"onUpdate:modelValue":t[5]||(t[5]=e=>v.dialog=e)},{default:(0,a.k6)((()=>[(0,a.bF)(T,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,a.k6)((()=>[(0,a.bF)(F,null,{default:(0,a.k6)((()=>[(0,a.bF)(V,{onSubmit:y.sendData,class:"q-gutter-md"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",l,[(0,a.Lk)("div",r,[(0,a.bF)(C,{"upper-case":"",outlined:"",modelValue:D.form.control_inicio,"onUpdate:modelValue":t[0]||(t[0]=e=>D.form.control_inicio=e),label:"Primer Correlativo",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,10)],type:"number"},{prepend:(0,a.k6)((()=>[(0,a.bF)(A,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",n,[(0,a.bF)(C,{outlined:"",modelValue:D.form.control_final,"onUpdate:modelValue":t[1]||(t[1]=e=>D.form.control_final=e),label:"Ultimo Correlativo",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,10),e=>this.reglasSegundoCorrelativo(e)],hint:"",class:"pcform","lazy-rules":"",type:"number"},{prepend:(0,a.k6)((()=>[(0,a.bF)(A,{name:"account_circle"})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",d,[(0,a.bF)(C,{outlined:"",modelValue:D.form.serie_doc,"onUpdate:modelValue":[t[2]||(t[2]=e=>D.form.serie_doc=e),t[3]||(t[3]=e=>D.form.serie_doc=D.form.serie_doc.toUpperCase())],label:"Serie Lote",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,1)]},{prepend:(0,a.k6)((()=>[(0,a.bF)(A,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",c,[(0,a.bF)(C,{outlined:"",modelValue:D.form.ult_doc_referencia,"onUpdate:modelValue":t[4]||(t[4]=e=>D.form.ult_doc_referencia=e),label:"Ultimo Numero Asignado",hint:"",class:"pcform",type:"number",rules:[e=>this.$refs.rulesVue.isMax(e,10)],"lazy-rules":""},{prepend:(0,a.k6)((()=>[(0,a.bF)(A,{name:"badge"})])),_:1},8,["modelValue","rules"])])]),(0,a.Lk)("div",u,[(0,a.bF)(x,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.bo)((0,a.bF)(x,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[O]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Lk)("div",m,[(0,a.Lk)("div",h,[p,(0,a.Lk)("div",g,[(0,a.bF)($,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down","option-label":"nb_agencia","option-value":"id",dense:"",options:D.agenciasSelected,onFilter:t[6]||(t[6]=(e,t)=>y.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",modelValue:D.selectedAgencia,"onUpdate:modelValue":[t[7]||(t[7]=e=>D.selectedAgencia=e),t[8]||(t[8]=e=>y.getDataTable())],outlined:"",standout:"",label:"Escoge una Agencia"},{"no-option":(0,a.k6)((()=>[(0,a.bF)(q,null,{default:(0,a.k6)((()=>[(0,a.bF)(S,{class:"text-grey"},{default:(0,a.k6)((()=>[(0,a.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,a.k6)((()=>[(0,a.bF)(A,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a.Lk)("div",f,[(0,a.bF)($,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:D.tiposSelected,onFilter:t[9]||(t[9]=(e,t)=>y.filterArray(e,t,"tiposSelected","tipos","descripcion")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"descripcion","option-value":"id",modelValue:D.selectedTipo,"onUpdate:modelValue":[t[10]||(t[10]=e=>D.selectedTipo=e),t[11]||(t[11]=e=>y.getDataTable())],outlined:"",standout:"",label:"Tipo de Control"},{"no-option":(0,a.k6)((()=>[(0,a.bF)(q,null,{default:(0,a.k6)((()=>[(0,a.bF)(S,{class:"text-grey"},{default:(0,a.k6)((()=>[(0,a.eW)(" Sin resultados ")])),_:1})])),_:1})])),prepend:(0,a.k6)((()=>[(0,a.bF)(A,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a.Lk)("div",b,[(0,a.bF)(C,{modelValue:this.pagination.filterValue,"onUpdate:modelValue":t[13]||(t[13]=e=>this.pagination.filterValue=e),rounded:"",dense:"",outlined:"",standout:"",label:"Búsqueda avanzada",onKeydown:t[14]||(t[14]=(0,o.jR)((e=>y.getDataTable()),["enter"]))},{append:(0,a.k6)((()=>[(0,a.bF)(A,{onClick:t[12]||(t[12]=e=>y.getDataTable()),class:"cursor-pointer",name:"search"})])),_:1},8,["modelValue"])]),(0,a.Lk)("div",j,[(0,a.bF)(x,{label:"Insertar",rounded:"",color:"primary",disabled:this.allowOption(2),onClick:t[15]||(t[15]=e=>v.dialog=!0),onClickCapture:y.resetForm,class:"q-px-xl q-py-xs"},null,8,["disabled","onClickCapture"])])]),(0,a.Lk)("div",_,[(0,a.bF)(P,{rows:D.correlativos,"binary-state-sort":"","row-key":"id",columns:D.columns,separator:v.separator,"rows-per-page-options":[5,10,15,20,50],onRequest:y.getDataTable,style:{width:"100%"},loading:v.loading,grid:e.$q.screen.xs,pagination:D.pagination,"onUpdate:pagination":t[18]||(t[18]=e=>D.pagination=e)},{loading:(0,a.k6)((()=>[(0,a.bF)(z,{showing:"",color:"primary",class:"loading"})])),"body-cell-estatus_lote":(0,a.k6)((e=>[(0,a.bF)(I,{props:e},{default:(0,a.k6)((()=>[(0,a.bF)($,{outlined:"",dense:"",modelValue:e.row.estatus_desc,"onUpdate:modelValue":[t=>e.row.estatus_desc=t,t=>{this.$refs.methods.getData(`/correlativo/${e.row.id}`,"putDataSelect","form"),this.form.estatus_lote=e.row.estatus_desc.value}],options:D.estatus},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1032,["props"])])),"body-cell-action":(0,a.k6)((s=>[(0,a.bF)(I,{props:s},{default:(0,a.k6)((()=>[(0,a.bF)(x,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:e=>{this.$refs.methods.getData(`/correlativo/${s.row.id}`,"setDataEdit","form"),v.dialog=!0}},null,8,["disabled","onClick"]),(0,a.bF)(x,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:t=>e.selected=s.row.id,onClickCapture:t[16]||(t[16]=e=>v.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.k6)((s=>[(0,a.Lk)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.Tr)(s.selected?"transform: scale(0.95);":"")},[(0,a.bF)(T,{class:(0,i.C4)(s.selected?"bg-grey-2":"")},{default:(0,a.k6)((()=>[(0,a.bF)(E,{dense:""},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.cols,(o=>((0,a.uX)(),(0,a.Wv)(q,{key:o.name},{default:(0,a.k6)((()=>[(0,a.bF)(S,null,{default:(0,a.k6)((()=>[(0,a.bF)(L,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,i.v_)(o.label),1)])),_:2},1024)])),_:2},1024),(0,a.bF)(S,{side:"",class:"itemMovilSide"},{default:(0,a.k6)((()=>["action"===o.name?((0,a.uX)(),(0,a.Wv)(x,{key:0,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:e=>{this.$refs.methods.getData(`/correlativo/${s.row.id}`,"setDataEdit","form"),v.dialog=!0}},null,8,["disabled","onClick"])):(0,a.Q3)("",!0),"action"===o.name?((0,a.uX)(),(0,a.Wv)(x,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:t=>e.selected=s.row.id,onClickCapture:t[17]||(t[17]=e=>v.deletePopup=!0)},null,8,["disabled","onClick"])):(0,a.Q3)("",!0),"estatus_lote"===o.name?((0,a.uX)(),(0,a.Wv)($,{key:2,outlined:"",dense:"",modelValue:s.row.estatus_desc,"onUpdate:modelValue":[e=>s.row.estatus_desc=e,e=>{this.$refs.methods.getData(`/correlativo/${s.row.id}`,"putDataSelect","form"),this.form.estatus_lote=s.row.estatus_desc.value}],options:D.estatus},null,8,["modelValue","onUpdate:modelValue","options"])):(0,a.Q3)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","onRequest","loading","grid","pagination"])])]),(0,a.bF)(w,{modelValue:v.deletePopup,"onUpdate:modelValue":t[20]||(t[20]=e=>v.deletePopup=e)},{default:(0,a.k6)((()=>[(0,a.bF)(T,{style:{width:"700px"}},{default:(0,a.k6)((()=>[(0,a.bF)(F,null,{default:(0,a.k6)((()=>[k])),_:1}),(0,a.bF)(R,{align:"right"},{default:(0,a.k6)((()=>[(0,a.bo)((0,a.bF)(x,{flat:"",label:"Cancelar",color:"primary"},null,512),[[O]]),(0,a.bo)((0,a.bF)(x,{flat:"",label:"Aceptar",color:"primary",onClick:t[19]||(t[19]=t=>this.$refs.methods.deleteData(`/correlativo/${e.selected}`,"getDataTable"))},null,512),[[O]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.bF)(U,{ref:"methods",onSetDataInit:y.setDataInit,onSetDataEdit:y.setDataEdit,onGetDataTable:y.getDataTable,onSetDataTableAll:y.setDataTableAll,onGetDataTableAll:y.getDataTableAll,onSetDataTable:y.setDataTable,onSetDataPermisos:y.setDataPermisos,onPutDataSelect:y.putDataSelect},null,8,["onSetDataInit","onSetDataEdit","onGetDataTable","onSetDataTableAll","onGetDataTableAll","onSetDataTable","onSetDataPermisos","onPutDataSelect"]),(0,a.bF)(M,{ref:"rulesVue"},null,512)])),_:1})}s(10239);var D=s(38734),y=s(80660),A=s(99565),C=s(14907),x=s(45022),V=s(93899);const F={components:{methods:V.A,rulesVue:A.A},data(){return{columns:[{name:"control_inicio",label:"Primer Correlativo",field:"control_inicio",align:"left",sortable:!0},{name:"control_final",label:"Ultimo Correlativo",field:"control_final",align:"left",sortable:!0},{name:"serie_doc",label:"Serie Lote",field:"serie_doc",align:"left",sortable:!0},{name:"ult_doc_referencia",label:"Ultimo Numero Asignado",field:"ult_doc_referencia",align:"left",type:"string",sortable:!0},{name:"estatus_lote",label:"Estatus",align:"center",sortable:!0},{name:"action",label:"Acciones",align:"center"}],form:{tipo:"",control_inicio:"",control_final:"",ult_doc_referencia:"",estatus_lote:"",serie_doc:"",cod_agencia:""},estatus:[{label:"CERRADO",value:"C"},{label:"ACTIVO",value:"A"},{label:"INACTIVO",value:"I"}],pagination:{page:1,rowsPerPage:8,sortBy:"control_final",descending:!0,filter:"control_inicio,control_final,serie_doc,ult_doc_referencia,estatus_lote",filterValue:"",rowsNumber:""},correlativos:[],correlativosAll:[],agencias:[],tipos:[],selectedAgencia:[],selectedTipo:[],agenciasSelected:[],tiposSelected:[],rpermisos:[],filter:""}},setup(){const e=(0,C.A)();return{loading:(0,D.KR)(!1),separator:(0,D.KR)("vertical"),dialog:(0,D.KR)(!1),deletePopup:(0,D.KR)(!1),activoExistente(){e.notify({message:"Solo puede haber un Activo por Agencia",color:"red"})}}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Control Correlativo",""),this.$refs.methods.getData("/agencias","setDataInit","agencias",{headers:{order_by:"nb_agencia",order_direction:"ASC"}}),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:x.A.getItem("tokenTraducido").usuario.roles.id,menu:"controlcorrelativo"}})},methods:{filterArray(e,t,s,a,o){t(""!==e?()=>{const t=e.toUpperCase();for(var i=[],l=0;l<=this[a].length-1;l++)if(this[a][l][o].indexOf(t)>-1&&i.push(this[a][l]),l==this[a].length-1){this[s]=i;break}}:()=>{this[s]=this[a]})},filterDesc(e,t){var s=this[e].findIndex((e=>e.value==t));return s>=0?this[e][s].label:null},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},reglasSegundoCorrelativo(e){if(e-this.form.control_inicio<0)return"El Ultimo Correlativo debe ser Mayor al Primero"},validaLote(){return"A"===this.form.estatus_lote&&this.correlativosAll.findIndex((e=>"A"==e.estatus_lote))>=0},setDataInit(e,t){this[t]=e.data,y.api.get("/tipos",{headers:{Authorization:`Bearer ${x.A.getItem("token")}`,fuente:"CR"}}).then((e=>{this.tipos=e.data,this.selectedTipo=this.tipos[0],this.getDataTable()}))},getDataTable(e){this.loading=!0,this.getDataTableAll(),e&&(this.pagination=e.pagination),this.$refs.methods.getData("/correlativo","setDataTable","correlativos",{headers:{agencia:this.selectedAgencia.id,tipo:this.selectedTipo.id,page:this.pagination.page,limit:this.pagination.rowsPerPage,order_by:this.pagination.sortBy,order_direction:this.pagination.descending?"DESC":"ASC",filter:this.pagination.filter,filter_value:this.pagination.filterValue}})},setDataTable(e,t){this[t]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit},getDataTableAll(){this.loading=!0,this.$refs.methods.getData("/correlativo","setDataTableAll","correlativosAll",{headers:{agencia:this.selectedAgencia.id,tipo:this.selectedTipo.id}})},setDataTableAll(e,t){this[t]=e.data?e.data:e,this.loading=!1},setDataEdit(e,t){this[t].id=e.id,this[t].tipo=e.tipo,this[t].control_inicio=e.control_inicio,this[t].control_final=e.control_final,this[t].ult_doc_referencia=e.ult_doc_referencia,this[t].estatus_lote=this.filterDesc("estatus",e.estatus_lote),this[t].serie_doc=e.serie_doc,this[t].cod_agencia=e.cod_agencia},sendData(){this.form.cod_agencia=this.selectedAgencia.id,this.form.tipo=this.selectedTipo.id,this.form.id?(this.form.estatus_lote=this.form.estatus_lote.value,this.$refs.methods.putData(`/correlativo/${this.form.id}`,this.form,"getDataTable")):(this.form.estatus_lote="I",this.$refs.methods.createData("/correlativo",this.form,"getDataTable")),this.dialog=!1,this.resetForm()},putDataSelect(e,t){if(this[t].id=e.id,this[t].tipo=e.tipo,this[t].control_inicio=e.control_inicio,this[t].control_final=e.control_final,this[t].ult_doc_referencia=e.ult_doc_referencia,this[t].serie_doc=e.serie_doc,this[t].cod_agencia=e.cod_agencia,this.validaLote())return this.activoExistente(),void this.getDataTable();this.$refs.methods.putData(`/correlativo/${this.form.id}`,this.form,"getDataTable")},resetForm(){delete this.form.id,this.form.tipo="",this.form.control_inicio="",this.form.control_final="",this.form.ult_doc_referencia="",this.form.estatus_lote="",this.form.serie_doc="",this.form.cod_agencia=""}}};var T=s(12807),w=s(77716),S=s(82156),q=s(23316),$=s(44189),z=s(49200),I=s(67837),L=s(50492),E=s(56384),P=s(94940),R=s(90124),U=s(25173),M=s(84191),Q=s(39035),O=s(45262),N=s(53999),B=s(13796),W=s(62669),K=s(88672),X=s(98582),G=s.n(X);const H=(0,T.A)(F,[["render",v]]),Y=H;G()(F,"components",{QPage:w.A,QDialog:S.A,QCard:q.A,QCardSection:$.A,QForm:z.A,QInput:I.A,QIcon:L.A,QBtn:E.A,QSelect:P.A,QItem:R.A,QItemSection:U.A,QTable:M.A,QInnerLoading:Q.A,QTd:O.A,QList:N.A,QItemLabel:B.A,QCardActions:W.A}),G()(F,"directives",{ClosePopup:K.A})},35358:(e,t,s)=>{var a={"./af":78188,"./af.js":78188,"./ar":50096,"./ar-dz":28495,"./ar-dz.js":28495,"./ar-kw":85891,"./ar-kw.js":85891,"./ar-ly":13194,"./ar-ly.js":13194,"./ar-ma":42195,"./ar-ma.js":42195,"./ar-ps":17084,"./ar-ps.js":17084,"./ar-sa":29393,"./ar-sa.js":29393,"./ar-tn":21867,"./ar-tn.js":21867,"./ar.js":50096,"./az":43224,"./az.js":43224,"./be":61330,"./be.js":61330,"./bg":85096,"./bg.js":85096,"./bm":28746,"./bm.js":28746,"./bn":29303,"./bn-bd":56554,"./bn-bd.js":56554,"./bn.js":29303,"./bo":30528,"./bo.js":30528,"./br":35499,"./br.js":35499,"./bs":29828,"./bs.js":29828,"./ca":35855,"./ca.js":35855,"./cs":68481,"./cs.js":68481,"./cv":1694,"./cv.js":1694,"./cy":98903,"./cy.js":98903,"./da":95908,"./da.js":95908,"./de":85528,"./de-at":21732,"./de-at.js":21732,"./de-ch":54146,"./de-ch.js":54146,"./de.js":85528,"./dv":81313,"./dv.js":81313,"./el":20138,"./el.js":20138,"./en-au":78067,"./en-au.js":78067,"./en-ca":82545,"./en-ca.js":82545,"./en-gb":50124,"./en-gb.js":50124,"./en-ie":6107,"./en-ie.js":6107,"./en-il":13196,"./en-il.js":13196,"./en-in":1654,"./en-in.js":1654,"./en-nz":79557,"./en-nz.js":79557,"./en-sg":35451,"./en-sg.js":35451,"./eo":21591,"./eo.js":21591,"./es":36843,"./es-do":61009,"./es-do.js":61009,"./es-mx":75169,"./es-mx.js":75169,"./es-us":37224,"./es-us.js":37224,"./es.js":36843,"./et":77058,"./et.js":77058,"./eu":61297,"./eu.js":61297,"./fa":46658,"./fa.js":46658,"./fi":75674,"./fi.js":75674,"./fil":45204,"./fil.js":45204,"./fo":74428,"./fo.js":74428,"./fr":80703,"./fr-ca":27812,"./fr-ca.js":27812,"./fr-ch":9411,"./fr-ch.js":9411,"./fr.js":80703,"./fy":89738,"./fy.js":89738,"./ga":21235,"./ga.js":21235,"./gd":96032,"./gd.js":96032,"./gl":16424,"./gl.js":16424,"./gom-deva":53793,"./gom-deva.js":53793,"./gom-latn":14714,"./gom-latn.js":14714,"./gu":33383,"./gu.js":33383,"./he":46660,"./he.js":46660,"./hi":37264,"./hi.js":37264,"./hr":63201,"./hr.js":63201,"./hu":35604,"./hu.js":35604,"./hy-am":61067,"./hy-am.js":61067,"./id":19262,"./id.js":19262,"./is":53423,"./is.js":53423,"./it":73038,"./it-ch":23512,"./it-ch.js":23512,"./it.js":73038,"./ja":87558,"./ja.js":87558,"./jv":86071,"./jv.js":86071,"./ka":95927,"./ka.js":95927,"./kk":62625,"./kk.js":62625,"./km":25499,"./km.js":25499,"./kn":79486,"./kn.js":79486,"./ko":89405,"./ko.js":89405,"./ku":77155,"./ku-kmr":92516,"./ku-kmr.js":92516,"./ku.js":77155,"./ky":13647,"./ky.js":13647,"./lb":42837,"./lb.js":42837,"./lo":91474,"./lo.js":91474,"./lt":96967,"./lt.js":96967,"./lv":48297,"./lv.js":48297,"./me":1545,"./me.js":1545,"./mi":2573,"./mi.js":2573,"./mk":77259,"./mk.js":77259,"./ml":33826,"./ml.js":33826,"./mn":45368,"./mn.js":45368,"./mr":30860,"./mr.js":30860,"./ms":96947,"./ms-my":99418,"./ms-my.js":99418,"./ms.js":96947,"./mt":76906,"./mt.js":76906,"./my":71837,"./my.js":71837,"./nb":24503,"./nb.js":24503,"./ne":31286,"./ne.js":31286,"./nl":17981,"./nl-be":58103,"./nl-be.js":58103,"./nl.js":17981,"./nn":19387,"./nn.js":19387,"./oc-lnc":30803,"./oc-lnc.js":30803,"./pa-in":66742,"./pa-in.js":66742,"./pl":30075,"./pl.js":30075,"./pt":81731,"./pt-br":23352,"./pt-br.js":23352,"./pt.js":81731,"./ro":21776,"./ro.js":21776,"./ru":5746,"./ru.js":5746,"./sd":74100,"./sd.js":74100,"./se":38395,"./se.js":38395,"./si":8823,"./si.js":8823,"./sk":39385,"./sk.js":39385,"./sl":3852,"./sl.js":3852,"./sq":3247,"./sq.js":3247,"./sr":64290,"./sr-cyrl":26189,"./sr-cyrl.js":26189,"./sr.js":64290,"./ss":32177,"./ss.js":32177,"./sv":49038,"./sv.js":49038,"./sw":9741,"./sw.js":9741,"./ta":86932,"./ta.js":86932,"./te":95784,"./te.js":95784,"./tet":13334,"./tet.js":13334,"./tg":23602,"./tg.js":23602,"./th":16947,"./th.js":16947,"./tk":46774,"./tk.js":46774,"./tl-ph":5868,"./tl-ph.js":5868,"./tlh":16695,"./tlh.js":16695,"./tr":22573,"./tr.js":22573,"./tzl":84509,"./tzl.js":84509,"./tzm":17118,"./tzm-latn":87078,"./tzm-latn.js":87078,"./tzm.js":17118,"./ug-cn":82617,"./ug-cn.js":82617,"./uk":56131,"./uk.js":56131,"./ur":56532,"./ur.js":56532,"./uz":69932,"./uz-latn":27220,"./uz-latn.js":27220,"./uz.js":69932,"./vi":20490,"./vi.js":20490,"./x-pseudo":32154,"./x-pseudo.js":32154,"./yo":49955,"./yo.js":49955,"./zh-cn":68355,"./zh-cn.js":68355,"./zh-hk":89547,"./zh-hk.js":89547,"./zh-mo":70374,"./zh-mo.js":70374,"./zh-tw":979,"./zh-tw.js":979};function o(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=35358}}]);