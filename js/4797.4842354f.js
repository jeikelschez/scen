(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[4797],{23759:(e,t,s)=>{"use strict";function a(e,t,s,a,o,i){return null}s.d(t,{Z:()=>c});var o=s(80589),i=s(5474),l=s(48825);const r={setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,i.api.get(e,a).then((e=>{this.$emit(t,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,i.api.post(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,i.api.put(e,t,a).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,t,s={headers:{}}){s.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,i.api["delete"](e,s).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,s,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,i.api.post(e,t,a).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=s(74260);const d=(0,n.Z)(r,[["render",a]]),c=d},56188:(e,t,s)=>{"use strict";function a(e,t,s,a,o,i){return null}s.d(t,{Z:()=>c});var o=s(48825),i=s(11488),l=s.n(i);const r={name:"rules",setup(){(0,o.Z)()},methods:{isReq(e,t=!1){if(null==e||""==e.trim())return!1!==t?t:"Valor Requerido"},isReqCurrency(e,t=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==t?t:"Valor Requerido"},isReqSelect(e,t=!1){if(null==e||e==[]||""==e)return!1!==t?t:"Valor Requerido"},isMax(e,t,s=!1){if(null!==e&&""!==e&&e.length>t)return!1!==s?s:`Maximo ${t} Caracteres`},isMin(e,t,s=!1){if(null!==e&&""!==e&&e.length<t)return!1!==s?s:`Minimo ${t} Caracteres`},checkDate(e,t=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==t?t:"Fecha Invalida"}}};var n=s(74260);const d=(0,n.Z)(r,[["render",a]]),c=d},37395:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>X});var a=s(83673),o=s(98880),i=s(62323);const l={class:"row"},r={class:"col-md-6 col-xs-12"},n={class:"col-md-6 col-xs-12"},d={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},u={class:"row justify-center items-center content-center"},m={class:"q-pa-sm justify-center"},p={class:"q-pa-md row justify-end"},h=(0,a._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a._)("strong",null,"MANTENIMIENTO - CONTROL CORRELATIVO")])],-1),g={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-6 cardMargin selectMobile",style:{"align-self":"center","text-align":"center"}},f=(0,a.Uk)(" Sin resultados "),j={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 cardMargin selectMobile"},_=(0,a.Uk)(" Sin resultados "),b={class:"col-md-3 col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 cardMargin selectMobile"},v={class:"col-md-2 col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},w={class:"q-pa-md q-gutter-y-md"},D=(0,a._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1);function y(e,t,s,y,k,x){const C=(0,a.up)("q-icon"),V=(0,a.up)("q-input"),T=(0,a.up)("q-btn"),A=(0,a.up)("q-form"),q=(0,a.up)("q-card-section"),W=(0,a.up)("q-card"),S=(0,a.up)("q-dialog"),$=(0,a.up)("q-item-section"),z=(0,a.up)("q-item"),Z=(0,a.up)("q-select"),I=(0,a.up)("q-inner-loading"),E=(0,a.up)("q-td"),U=(0,a.up)("q-item-label"),P=(0,a.up)("q-list"),M=(0,a.up)("q-table"),O=(0,a.up)("q-card-actions"),Q=(0,a.up)("methods"),R=(0,a.up)("rules-vue"),L=(0,a.up)("q-page"),N=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(L,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(S,{modelValue:y.dialog,"onUpdate:modelValue":t[5]||(t[5]=e=>y.dialog=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(A,{onSubmit:x.sendData,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",r,[(0,a.Wm)(V,{"upper-case":"",outlined:"",modelValue:k.form.control_inicio,"onUpdate:modelValue":t[0]||(t[0]=e=>k.form.control_inicio=e),label:"Primer Correlativo",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,10)],type:"number"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(C,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",n,[(0,a.Wm)(V,{outlined:"",modelValue:k.form.control_final,"onUpdate:modelValue":t[1]||(t[1]=e=>k.form.control_final=e),label:"Ultimo Correlativo",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,10),e=>this.reglasSegundoCorrelativo(e)],hint:"",class:"pcform","lazy-rules":"",type:"number"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(C,{name:"account_circle"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",d,[(0,a.Wm)(V,{outlined:"",modelValue:k.form.serie_doc,"onUpdate:modelValue":[t[2]||(t[2]=e=>k.form.serie_doc=e),t[3]||(t[3]=e=>k.form.serie_doc=k.form.serie_doc.toUpperCase())],label:"Serie Lote",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,1)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(C,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",c,[(0,a.Wm)(V,{outlined:"",modelValue:k.form.ult_doc_referencia,"onUpdate:modelValue":t[4]||(t[4]=e=>k.form.ult_doc_referencia=e),label:"Ultimo Numero Asignado",hint:"",class:"pcform",type:"number",rules:[e=>this.$refs.rulesVue.isMax(e,10)],"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(C,{name:"badge"})])),_:1},8,["modelValue","rules"])])]),(0,a._)("div",u,[(0,a.Wm)(T,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(T,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[N]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",m,[(0,a._)("div",p,[h,(0,a._)("div",g,[(0,a.Wm)(Z,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down","option-label":"nb_agencia","option-value":"id",dense:"",options:k.agenciasSelected,onFilter:t[6]||(t[6]=(e,t)=>x.filterArray(e,t,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",modelValue:k.selectedAgencia,"onUpdate:modelValue":[t[7]||(t[7]=e=>k.selectedAgencia=e),t[8]||(t[8]=e=>x.getDataTable())],outlined:"",standout:"",label:"Escoge una Agencia"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a.Wm)($,{class:"text-grey"},{default:(0,a.w5)((()=>[f])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",j,[(0,a.Wm)(Z,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:k.tiposSelected,onFilter:t[9]||(t[9]=(e,t)=>x.filterArray(e,t,"tiposSelected","tipos","descripcion")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"descripcion","option-value":"id",modelValue:k.selectedTipo,"onUpdate:modelValue":[t[10]||(t[10]=e=>k.selectedTipo=e),t[11]||(t[11]=e=>x.getDataTable())],outlined:"",standout:"",label:"Tipo de Control"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a.Wm)($,{class:"text-grey"},{default:(0,a.w5)((()=>[_])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(C,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",b,[(0,a.Wm)(V,{modelValue:this.pagination.filterValue,"onUpdate:modelValue":t[13]||(t[13]=e=>this.pagination.filterValue=e),rounded:"",dense:"",outlined:"",standout:"",label:"Búsqueda avanzada",onKeydown:t[14]||(t[14]=(0,o.D2)((e=>x.getDataTable()),["enter"]))},{append:(0,a.w5)((()=>[(0,a.Wm)(C,{onClick:t[12]||(t[12]=e=>x.getDataTable()),class:"cursor-pointer",name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",v,[(0,a.Wm)(T,{label:"Insertar",rounded:"",color:"primary",disabled:this.allowOption(2),onClick:t[15]||(t[15]=e=>y.dialog=!0),onClickCapture:x.resetForm,class:"q-px-xl q-py-xs"},null,8,["disabled","onClickCapture"])])]),(0,a._)("div",w,[(0,a.Wm)(M,{rows:k.correlativos,"binary-state-sort":"","row-key":"id",columns:k.columns,separator:y.separator,"rows-per-page-options":[5,10,15,20,50],onRequest:x.getDataTable,style:{width:"100%"},loading:y.loading,grid:e.$q.screen.xs,pagination:k.pagination,"onUpdate:pagination":t[18]||(t[18]=e=>k.pagination=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(I,{showing:"",color:"primary",class:"loading"})])),"body-cell-estatus_lote":(0,a.w5)((e=>[(0,a.Wm)(E,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{outlined:"",dense:"",modelValue:e.row.estatus_desc,"onUpdate:modelValue":[t=>e.row.estatus_desc=t,t=>{this.$refs.methods.getData(`/correlativo/${e.row.id}`,"putDataSelect","form"),this.form.estatus_lote=e.row.estatus_desc.value}],options:k.estatus},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1032,["props"])])),"body-cell-action":(0,a.w5)((s=>[(0,a.Wm)(E,{props:s},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:e=>{this.$refs.methods.getData(`/correlativo/${s.row.id}`,"setDataEdit","form"),y.dialog=!0}},null,8,["disabled","onClick"]),(0,a.Wm)(T,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:t=>e.selected=s.row.id,onClickCapture:t[16]||(t[16]=e=>y.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.w5)((s=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,i.j5)(s.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(W,{class:(0,i.C_)(s.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.cols,(o=>((0,a.wg)(),(0,a.j4)(z,{key:o.name},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)($,{side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>["action"===o.name?((0,a.wg)(),(0,a.j4)(T,{key:0,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:e=>{this.$refs.methods.getData(`/correlativo/${s.row.id}`,"setDataEdit","form"),y.dialog=!0}},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"action"===o.name?((0,a.wg)(),(0,a.j4)(T,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:t=>e.selected=s.row.id,onClickCapture:t[17]||(t[17]=e=>y.deletePopup=!0)},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"estatus_lote"===o.name?((0,a.wg)(),(0,a.j4)(Z,{key:2,outlined:"",dense:"",modelValue:s.row.estatus_desc,"onUpdate:modelValue":[e=>s.row.estatus_desc=e,e=>{this.$refs.methods.getData(`/correlativo/${s.row.id}`,"putDataSelect","form"),this.form.estatus_lote=s.row.estatus_desc.value}],options:k.estatus},null,8,["modelValue","onUpdate:modelValue","options"])):(0,a.kq)("",!0),(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.value),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","onRequest","loading","grid","pagination"])])]),(0,a.Wm)(S,{modelValue:y.deletePopup,"onUpdate:modelValue":t[20]||(t[20]=e=>y.deletePopup=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{style:{width:"700px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(q,null,{default:(0,a.w5)((()=>[D])),_:1}),(0,a.Wm)(O,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(T,{flat:"",label:"Cancelar",color:"primary"},null,512),[[N]]),(0,a.wy)((0,a.Wm)(T,{flat:"",label:"Aceptar",color:"primary",onClick:t[19]||(t[19]=t=>this.$refs.methods.deleteData(`/correlativo/${e.selected}`,"getDataTable"))},null,512),[[N]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Q,{ref:"methods",onSetDataInit:x.setDataInit,onSetDataEdit:x.setDataEdit,onGetDataTable:x.getDataTable,onSetDataTableAll:x.setDataTableAll,onGetDataTableAll:x.getDataTableAll,onSetDataTable:x.setDataTable,onSetDataPermisos:x.setDataPermisos,onPutDataSelect:x.putDataSelect},null,8,["onSetDataInit","onSetDataEdit","onGetDataTable","onSetDataTableAll","onGetDataTableAll","onSetDataTable","onSetDataPermisos","onPutDataSelect"]),(0,a.Wm)(R,{ref:"rulesVue"},null,512)])),_:1})}var k=s(61959),x=s(5474),C=s(56188),V=s(48825),T=s(80589),A=s(23759);const q={components:{methods:A.Z,rulesVue:C.Z},data(){return{columns:[{name:"control_inicio",label:"Primer Correlativo",field:"control_inicio",align:"left",sortable:!0},{name:"control_final",label:"Ultimo Correlativo",field:"control_final",align:"left",sortable:!0},{name:"serie_doc",label:"Serie Lote",field:"serie_doc",align:"left",sortable:!0},{name:"ult_doc_referencia",label:"Ultimo Numero Asignado",field:"ult_doc_referencia",align:"left",type:"string",sortable:!0},{name:"estatus_lote",label:"Estatus",align:"center",sortable:!0},{name:"action",label:"Acciones",align:"center"}],form:{tipo:"",control_inicio:"",control_final:"",ult_doc_referencia:"",estatus_lote:"",serie_doc:"",cod_agencia:""},estatus:[{label:"CERRADO",value:"C"},{label:"ACTIVO",value:"A"},{label:"INACTIVO",value:"I"}],pagination:{page:1,rowsPerPage:5,sortBy:"control_final",descending:!0,filter:"control_inicio,control_final,serie_doc,ult_doc_referencia,estatus_lote",filterValue:"",rowsNumber:""},correlativos:[],correlativosAll:[],agencias:[],tipos:[],selectedAgencia:[],selectedTipo:[],agenciasSelected:[],tiposSelected:[],rpermisos:[],filter:""}},setup(){const e=(0,V.Z)();return{loading:(0,k.iH)(!1),separator:(0,k.iH)("vertical"),dialog:(0,k.iH)(!1),deletePopup:(0,k.iH)(!1),activoExistente(){e.notify({message:"Solo puede haber un Activo por Agencia",color:"red"})}}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Control Correlativo",""),this.$refs.methods.getData("/agencias","setDataInit","agencias"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:T.Z.getItem("tokenTraducido").usuario.roles.id,menu:"controlcorrelativo"}})},methods:{filterArray(e,t,s,a,o){t(""!==e?()=>{const t=e.toUpperCase();for(var i=[],l=0;l<=this[a].length-1;l++)if(this[a][l][o].indexOf(t)>-1&&i.push(this[a][l]),l==this[a].length-1){this[s]=i;break}}:()=>{this[s]=this[a]})},filterDesc(e,t){var s=this[e].findIndex((e=>e.value==t));return s>=0?this[e][s].label:null},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},reglasSegundoCorrelativo(e){if(e-this.form.control_inicio<0)return"El Ultimo Correlativo debe ser Mayor al Primero"},validaLote(){return"A"===this.form.estatus_lote&&this.correlativosAll.findIndex((e=>"A"==e.estatus_lote))>=0},setDataInit(e,t){this[t]=e.data,this.selectedAgencia=this.agencias[0],x.api.get("/tipos",{headers:{Authorization:`Bearer ${T.Z.getItem("token")}`,fuente:"CR"}}).then((e=>{this.tipos=e.data,this.selectedTipo=this.tipos[0],this.getDataTable()}))},getDataTable(e){this.loading=!0,this.getDataTableAll(),e&&(this.pagination=e.pagination),this.$refs.methods.getData("/correlativo","setDataTable","correlativos",{headers:{agencia:this.selectedAgencia.id,tipo:this.selectedTipo.id,page:this.pagination.page,limit:this.pagination.rowsPerPage,order_by:this.pagination.sortBy,order_direction:this.pagination.descending?"DESC":"ASC",filter:this.pagination.filter,filter_value:this.pagination.filterValue}})},setDataTable(e,t){this[t]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit},getDataTableAll(){this.loading=!0,this.$refs.methods.getData("/correlativo","setDataTableAll","correlativosAll",{headers:{agencia:this.selectedAgencia.id,tipo:this.selectedTipo.id}})},setDataTableAll(e,t){this[t]=e.data?e.data:e,this.loading=!1},setDataEdit(e,t){this[t].id=e.id,this[t].tipo=e.tipo,this[t].control_inicio=e.control_inicio,this[t].control_final=e.control_final,this[t].ult_doc_referencia=e.ult_doc_referencia,this[t].estatus_lote=this.filterDesc("estatus",e.estatus_lote),this[t].serie_doc=e.serie_doc,this[t].cod_agencia=e.cod_agencia},sendData(){this.form.cod_agencia=this.selectedAgencia.id,this.form.tipo=this.selectedTipo.id,this.form.id?(this.form.estatus_lote=this.form.estatus_lote.value,this.$refs.methods.putData(`/correlativo/${this.form.id}`,this.form,"getDataTable")):(this.form.estatus_lote="I",this.$refs.methods.createData("/correlativo",this.form,"getDataTable")),this.dialog=!1,this.resetForm()},putDataSelect(e,t){if(this[t].id=e.id,this[t].tipo=e.tipo,this[t].control_inicio=e.control_inicio,this[t].control_final=e.control_final,this[t].ult_doc_referencia=e.ult_doc_referencia,this[t].serie_doc=e.serie_doc,this[t].cod_agencia=e.cod_agencia,this.validaLote())return this.activoExistente(),void this.getDataTable();this.$refs.methods.putData(`/correlativo/${this.form.id}`,this.form,"getDataTable")},resetForm(){delete this.form.id,this.form.tipo="",this.form.control_inicio="",this.form.control_final="",this.form.ult_doc_referencia="",this.form.estatus_lote="",this.form.serie_doc="",this.form.cod_agencia=""}}};var W=s(74260),S=s(24379),$=s(46778),z=s(10151),Z=s(25589),I=s(68689),E=s(64689),U=s(24554),P=s(48240),M=s(72448),O=s(83414),Q=s(52035),R=s(17352),L=s(66941),N=s(83884),B=s(27011),F=s(2350),H=s(99367),Y=s(60677),G=s(7518),K=s.n(G);const J=(0,W.Z)(q,[["render",y]]),X=J;K()(q,"components",{QPage:S.Z,QDialog:$.Z,QCard:z.Z,QCardSection:Z.Z,QForm:I.Z,QInput:E.Z,QIcon:U.Z,QBtn:P.Z,QSelect:M.Z,QItem:O.Z,QItemSection:Q.Z,QTable:R.Z,QInnerLoading:L.Z,QTd:N.Z,QList:B.Z,QItemLabel:F.Z,QCardActions:H.Z}),K()(q,"directives",{ClosePopup:Y.Z})},46700:(e,t,s)=>{var a={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function o(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=46700}}]);