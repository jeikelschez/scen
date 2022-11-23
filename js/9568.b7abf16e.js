(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[9568],{47743:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(61959),src_components_rules_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(56188),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11488),moment__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__),boot_axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5474),quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(48825),quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80589),src_components_methods_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23759),src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(96448);const __WEBPACK_DEFAULT_EXPORT__={components:{methods:src_components_methods_vue__WEBPACK_IMPORTED_MODULE_4__.Z,webViewer:src_components_webViewer_vue__WEBPACK_IMPORTED_MODULE_5__.Z,rulesVue:src_components_rules_vue__WEBPACK_IMPORTED_MODULE_0__.Z},name:"AsignacionGuias",data(){return{columns:[{name:"control_inicio",label:"Primer Correlativo",field:"control_inicio",align:"left",sortable:!0},{name:"control_final",label:"Segundo Correlativo",field:"control_final",align:"left",sortable:!0},{name:"cant_asignada",label:"Asignado",field:"cant_asignada",align:"right",sortable:!0},{name:"cant_disponible",label:"Disponible",field:"cant_disponible",align:"right",sortable:!0},{name:"cod_agencia",label:"Agencia",field:"cod_agencia",align:"left",sortable:!0},{name:"cod_agente",label:"Agente",field:"cod_agente",align:"left",sortable:!0},{name:"cod_cliente",label:"Cliente",field:"cod_cliente",align:"left",sortable:!0},{name:"fecha_asignacion",label:"Fecha de Asignación",field:"fecha_asignacion",align:"left",sortable:!0,format:e=>e.split("-").reverse().join("/")},{name:"action",label:"Acciones",align:"center"}],form:{control_inicio:"",control_final:"",cant_asignada:"",cant_disponible:"",fecha_asignacion:"",cod_agencia:"",cod_agente:"",cod_cliente:"",tipo:"20"},pagination:{page:1,rowsPerPage:5,sortBy:"control_inicio",descending:!0,filter:"",filterValue:"",rowsNumber:""},guias:[],guiasAll:[],clientesAll:[],agentesAll:[],agencias:[],rpermisos:[],menus:[],clientes:[],agentes:[],agenciasSelected:[],agentesSelected:[],clientesSelected:[],selected:[],selectedGuiaCarga:"20",selectedCulminado:"",guia_desde:"",guia_hasta:"",selectedAgencia:[],selectedCliente:[],selectedAgente:[],disabledAgencia:!0,disabledAgente:!1,disabledCliente:!1,disabledInputsEdit:!1,base64:"",agenciasLoading:!1,agentesLoading:!1,clientesLoading:!1}},setup(){(0,quasar_src_composables_use_quasar_js__WEBPACK_IMPORTED_MODULE_6__.Z)();return{dateInit:moment__WEBPACK_IMPORTED_MODULE_1___default()().format("DD/MM/YYYY"),loading:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1),separator:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)("vertical"),deletePopup:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1),dialog:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1),pdfView:(0,vue__WEBPACK_IMPORTED_MODULE_7__.iH)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Asignacion de Guias",""),this.agenciasLoading=!0,this.$refs.methods.getData("/agencias","setData","agencias"),this.$refs.methods.getData("/clientes","setData","clientesAll"),this.$refs.methods.getData("/agentes","setData","agentesAll"),this.getDataTable(),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.Z.getItem("tokenTraducido").usuario.roles.id,menu:"asignacionguias"}})},methods:{filterArray(e,a,t,s,i){a(""!==e?()=>{const a=e.toUpperCase();for(var l=[],n=0;n<=this[s].length-1;n++)if(this[s][n][i].indexOf(a)>-1&&l.push(this[s][n]),n==this[s].length-1){this[t]=l;break}}:()=>{this[t]=this[s]})},filterDesc(e,a){var t=this[e].findIndex((e=>e.value==a));return t>=0?this[e][t].label:null},findIndex(e,a,t){var s=this[e].findIndex((e=>e.id==a));return s>=0?this[e][s][t]:null},allowOption(e){return this.rpermisos.findIndex((a=>a.acciones.accion==e))<0},setDataPermisos(e,a){this[a]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},reglasPrimerCorrelativo(e){if(this.guiasAll.findIndex((a=>a.control_inicio==e))>=0)return"El lote de guía ya se encuentra cargado desde este número!"},reglasUltimoCorrelativo(e){if(e-this.form.control_inicio<0)return"El Ultimo Correlativo debe ser Mayor al Primero"},setData(res,dataRes){eval("this."+dataRes+"Loading = false"),this[dataRes]=res.data?res.data:res},getDataTable(e){this.loading=!0,this.getDataTableAll(),e&&(this.pagination=e.pagination),this.$refs.methods.getData("/cguias","setDataTable","guias",{headers:{agencia:this.selectedAgencia.id?this.selectedAgencia.id:"",agente:this.selectedAgente.id?this.selectedAgente.id:"",cliente:this.selectedCliente.id?this.selectedCliente.id:"",desde:this.guia_desde,hasta:this.guia_hasta,disp:this.selectedCulminado,tipo:20,page:this.pagination.page,limit:this.pagination.rowsPerPage,order_by:this.pagination.sortBy,order_direction:this.pagination.descending?"DESC":"ASC",filter:this.pagination.filter,filter_value:this.pagination.filterValue}})},setDataTable(e,a){this[a]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},getDataTableAll(){this.loading=!0,this.$refs.methods.getData("/cguias","setDataTableAll","guiasAll",{headers:{tipo:20}})},setDataTableAll(e,a){this[a]=e.data?e.data:e,this.loading=!1},sendData(){this.form.fecha_asignacion=this.form.fecha_asignacion.split("/").reverse().join("-"),this.form.cod_agencia=this.selectedAgencia.id?this.selectedAgencia.id:this.form.cod_agencia.id,this.form.cod_agente=this.selectedAgente.id?this.selectedAgente.id:this.form.cod_agente?this.form.cod_agente.id:null,this.form.cod_cliente=this.selectedCliente.id?this.selectedCliente.id:this.form.cod_cliente?this.form.cod_cliente.id:null,this.$refs.methods.createData("/cguias",this.form,"getDataTable"),this.dialog=!1,this.resetForm()},deleteData(e){0!=e.cant_disponible&&e.cant_disponible!=e.cant_asignada?this.$q.notify({message:"El Lote no puede ser Eliminado, debido a que se está usando actualmente!",color:"red"}):this.deletePopup=!0},printPending(){boot_axios__WEBPACK_IMPORTED_MODULE_2__.api.get("/cguias/generatePDF",{headers:{Authorization:`Bearer ${quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.Z.getItem("token")}`,id:this.selected}}).then((e=>{this.$refs.webViewer.showpdf(e.data.base64),this.$refs.webViewer.design(1)}))},resetFilters(){this.selectedAgencia=[],this.selectedCliente=[],this.selectedAgente=[],this.agenciasSelected=[],this.agentesSelected=[],this.clientesSelected=[],this.agentes=[],this.clientes=[],this.selectedGuiaCarga="",this.selectedCulminado="",this.guia_desde="",this.guia_hasta="",this.getDataTable(),this.resetForm()},resetForm(){delete this.form.id,this.form.control_inicio="",this.form.control_final="",this.form.cant_asignada="",this.form.cant_disponible="",this.form.fecha_asignacion="",this.form.cod_agencia="",this.form.cod_agente="",this.form.cod_cliente=""}}}},23759:(e,a,t)=>{"use strict";function s(e,a,t,s,i,l){return null}t.d(a,{Z:()=>c});var i=t(80589),l=t(5474),n=t(48825);const o={setup(){const e=(0,n.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,l.api.get(e,s).then((e=>{this.$emit(a,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,l.api.post(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,a,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,l.api.put(e,a,s).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,a,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,l.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,t,s={headers:{}}){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,l.api.post(e,a,s).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=t(74260);const d=(0,r.Z)(o,[["render",s]]),c=d},56188:(e,a,t)=>{"use strict";function s(e,a,t,s,i,l){return null}t.d(a,{Z:()=>c});var i=t(48825),l=t(11488),n=t.n(l);const o={name:"rules",setup(){(0,i.Z)()},methods:{isReq(e,a=!1){if(null==e||""==e.trim())return!1!==a?a:"Valor Requerido"},isReqCurrency(e,a=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==a?a:"Valor Requerido"},isReqSelect(e,a=!1){if(null==e||e==[]||""==e)return!1!==a?a:"Valor Requerido"},isMax(e,a,t=!1){if(null!==e&&""!==e&&e.length>a)return!1!==t?t:`Maximo ${a} Caracteres`},isMin(e,a,t=!1){if(null!==e&&""!==e&&e.length<a)return!1!==t?t:`Minimo ${a} Caracteres`},checkDate(e,a=!1){if(0==n()(e,"DD/MM/YYYY",!0)._isValid)return!1!==a?a:"Fecha Invalida"}}};var r=t(74260);const d=(0,r.Z)(o,[["render",s]]),c=d},96448:(e,a,t)=>{"use strict";t.d(a,{Z:()=>_});var s=t(83673);const i={id:"WebViewer",ref:"viewer",style:{width:"100%",height:"100%"}};function l(e,a,t,l,n,o){return(0,s.wg)(),(0,s.iD)("div",i,null,512)}t(80812),t(76105),t(15123),t(98685),t(12396);var n=t(61959),o=t(163),r=t.n(o);const d={name:"webViewer",data:function(){return{}},setup(){const e=(0,n.iH)(null);return{viewer:e}},methods:{base64ToBlob(e){const a=window.atob(e),t=a.length,s=new Uint8Array(t);for(let i=0;i<t;++i)s[i]=a.charCodeAt(i);return new Blob([s],{type:"application/pdf"})},showpdf(e){const a="https://scen.rcsexpress.com/webViewer",t="atkUT8UOiniAvAWUG1rN";r()({path:a,licenseKey:t},this.viewer).then((a=>{a.UI.setLanguage("es"),a.UI.loadDocument(this.base64ToBlob(e),{filename:"REPORTE SCEN.pdf"}),a.UI.setHeaderItems((e=>{e.push({type:"actionButton",img:"https://i.ibb.co/3RdScYv/1.png",onClick:()=>{a.print()}}),e.push({type:"actionButton",img:"https://i.ibb.co/cr5CYSB/2.png",onClick:()=>{a.downloadPdf()}})}))}))}}};var c=t(74260);const m=(0,c.Z)(d,[["render",l]]),_=m},4177:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>ge});var s=t(83673),i=t(98880),l=t(62323);const n={class:"row"},o={class:"col-md-6 col-xs-12"},r={class:"col-md-6 col-xs-12"},d={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},m={class:"col-md-6 col-xs-12"},_={class:"col-md-6 col-xs-12"},u=(0,s.Uk)(" Sin resultados "),g={class:"col-md-6 col-xs-12"},p=(0,s.Uk)(" Sin resultados "),h={class:"col-md-6 col-xs-12"},f=(0,s.Uk)(" Sin resultados "),b={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},w={class:"q-pa-sm justify-center"},j={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},y=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,s._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,s._)("strong",null,"MANTENIMIENTO - ASIGNACIÓN DE GUIAS")])],-1),D={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},k=(0,s.Uk)(" Sin resultados "),C={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},x=(0,s.Uk)(" Sin resultados "),v={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin",style:{"align-self":"center","text-align":"center"}},W=(0,s.Uk)(" Sin resultados "),A={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-top":"-20px"}},E={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},V={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},P={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-6",style:{"margin-top":"-4px"}},U={class:"col-md-12 col-xl-2 col-lg-2 col-xs-12 col-sm-6 selectMobile3",style:{"margin-left":"-50px"}},q=(0,s.Uk)("Agregar Control"),M=(0,s.Uk)("Eliminar Filtros"),T=(0,s.Uk)("Carta para el Cliente"),L={class:"q-pa-md q-gutter-y-md",style:{"margin-top":"-40px"}},I=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1),O={style:{width:"700px",height:"700px"}};function S(e,a,t,S,z,Z){const $=(0,s.up)("q-icon"),R=(0,s.up)("q-input"),B=(0,s.up)("q-date"),K=(0,s.up)("q-popup-proxy"),Q=(0,s.up)("q-item-section"),F=(0,s.up)("q-item"),Y=(0,s.up)("q-inner-loading"),G=(0,s.up)("q-select"),N=(0,s.up)("q-btn"),H=(0,s.up)("q-form"),X=(0,s.up)("q-card-section"),J=(0,s.up)("q-card"),ee=(0,s.up)("q-dialog"),ae=(0,s.up)("q-checkbox"),te=(0,s.up)("q-field"),se=(0,s.up)("q-tooltip"),ie=(0,s.up)("q-td"),le=(0,s.up)("q-item-label"),ne=(0,s.up)("q-list"),oe=(0,s.up)("q-table"),re=(0,s.up)("q-card-actions"),de=(0,s.up)("webViewer"),ce=(0,s.up)("methods"),me=(0,s.up)("rules-vue"),_e=(0,s.up)("q-page"),ue=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(_e,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(ee,{modelValue:S.dialog,"onUpdate:modelValue":a[18]||(a[18]=e=>S.dialog=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(J,{class:"q-pa-md",bordered:"",style:{"max-width":"80vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(X,null,{default:(0,s.w5)((()=>[(0,s.Wm)(H,{onSubmit:a[17]||(a[17]=e=>Z.sendData()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s._)("div",o,[(0,s.Wm)(R,{"upper-case":"",outlined:"",modelValue:z.form.control_inicio,"onUpdate:modelValue":[a[0]||(a[0]=e=>z.form.control_inicio=e),a[1]||(a[1]=e=>{this.form.cant_asignada=0,this.form.cant_disponible=0,this.form.control_final-this.form.control_inicio+1>0&&(this.form.cant_asignada=this.form.control_final-this.form.control_inicio+1,this.form.cant_disponible=this.form.cant_asignada)})],label:"Primer Correlativo",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,10),Z.reglasPrimerCorrelativo],type:"number"},{prepend:(0,s.w5)((()=>[(0,s.Wm)($,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",r,[(0,s.Wm)(R,{outlined:"",modelValue:z.form.control_final,"onUpdate:modelValue":[a[2]||(a[2]=e=>z.form.control_final=e),a[3]||(a[3]=e=>{this.form.cant_asignada=0,this.form.cant_disponible=0,this.form.control_final-this.form.control_inicio+1>0&&(this.form.cant_asignada=this.form.control_final-this.form.control_inicio+1,this.form.cant_disponible=this.form.cant_asignada)})],label:"Ultimo Correlativo",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,10),Z.reglasUltimoCorrelativo],hint:"","lazy-rules":"",type:"number"},{prepend:(0,s.w5)((()=>[(0,s.Wm)($,{name:"account_circle"})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",d,[(0,s.Wm)(R,{"upper-case":"",outlined:"",modelValue:z.form.cant_asignada,"onUpdate:modelValue":a[4]||(a[4]=e=>z.form.cant_asignada=e),readonly:!0,label:"Cantidad Asignada",class:"pcform",hint:"","lazy-rules":"",type:"number"},{prepend:(0,s.w5)((()=>[(0,s.Wm)($,{name:"assignment"})])),_:1},8,["modelValue"])]),(0,s._)("div",c,[(0,s.Wm)(R,{"upper-case":"",outlined:"",modelValue:z.form.cant_disponible,"onUpdate:modelValue":a[5]||(a[5]=e=>z.form.cant_disponible=e),readonly:!0,label:"Cantidad Disponible",hint:"","lazy-rules":"",type:"number"},{prepend:(0,s.w5)((()=>[(0,s.Wm)($,{name:"assignment_turned_in"})])),_:1},8,["modelValue"])]),(0,s._)("div",m,[(0,s.Wm)(R,{outlined:"",label:"Fecha de Asignación",hint:"",class:"pcform",modelValue:z.form.fecha_asignacion,"onUpdate:modelValue":a[8]||(a[8]=e=>z.form.fecha_asignacion=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,s.w5)((()=>[(0,s.Wm)($,{name:"event",class:"cursor-pointer"},{default:(0,s.w5)((()=>[(0,s.Wm)(K,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,s.w5)((()=>[(0,s.Wm)(B,{modelValue:z.form.fecha_asignacion,"onUpdate:modelValue":[a[6]||(a[6]=e=>z.form.fecha_asignacion=e),a[7]||(a[7]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY"},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,s._)("div",_,[(0,s.Wm)(G,{outlined:"",modelValue:z.form.cod_agencia,"onUpdate:modelValue":[a[9]||(a[9]=e=>z.form.cod_agencia=e),a[11]||(a[11]=e=>{this.agentesLoading=!0,this.clientesLoading=!0,this.form.cod_agente=null,this.form.cod_cliente=null,this.$refs.methods.getData("/agentes","setData","agentes",{headers:{agencia:z.form.cod_agencia.id}}),this.$refs.methods.getData("/clientes","setData","clientes",{headers:{agencia:z.form.cod_agencia.id}})})],label:"Agencia",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e)],options:z.agenciasSelected,loading:z.agenciasLoading,disable:z.agenciasLoading,readonly:!!this.selectedAgencia.id,onFilter:a[10]||(a[10]=(e,a)=>Z.filterArray(e,a,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"nb_agencia","option-value":"id"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{class:"text-grey"},{default:(0,s.w5)((()=>[u])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)($,{name:"south_america"})])),agenciasLoading:(0,s.w5)((()=>[(0,s.Wm)(Y,{showing:"",color:"primary",class:"loading"})])),_:1},8,["modelValue","rules","options","loading","disable","readonly"])]),(0,s._)("div",g,[(0,s.Wm)(G,{outlined:"",modelValue:z.form.cod_agente,"onUpdate:modelValue":a[12]||(a[12]=e=>z.form.cod_agente=e),label:"Agente",class:"pcform",hint:"",readonly:!!this.selectedAgente.id,options:z.agentesSelected,loading:z.agentesLoading,disable:z.agentesLoading,onFilter:a[13]||(a[13]=(e,a)=>Z.filterArray(e,a,"agentesSelected","agentes","persona_responsable")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"persona_responsable","option-value":"id"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{class:"text-grey"},{default:(0,s.w5)((()=>[p])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)($,{name:"south_america"})])),agentesLoading:(0,s.w5)((()=>[(0,s.Wm)(Y,{showing:"",color:"primary",class:"loading"})])),_:1},8,["modelValue","readonly","options","loading","disable"])]),(0,s._)("div",h,[(0,s.Wm)(G,{outlined:"",modelValue:z.form.cod_cliente,"onUpdate:modelValue":a[14]||(a[14]=e=>z.form.cod_cliente=e),label:"Cliente",hint:"",readonly:!!this.selectedCliente.id,options:z.clientesSelected,loading:z.clientesLoading,disable:z.clientesLoading,onFilter:a[15]||(a[15]=(e,a)=>Z.filterArray(e,a,"clientesSelected","clientes","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","lazy-rules":"","option-label":"nb_cliente","option-value":"id"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{class:"text-grey"},{default:(0,s.w5)((()=>[f])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)($,{name:"south_america"})])),clientesLoading:(0,s.w5)((()=>[(0,s.Wm)(Y,{showing:"",color:"primary",class:"loading"})])),_:1},8,["modelValue","readonly","options","loading","disable"])])]),(0,s._)("div",b,[(0,s.Wm)(N,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(N,{label:"Cerrar",color:"primary",flat:"",onClick:a[16]||(a[16]=e=>this.resetForm()),class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[ue]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",w,[(0,s._)("div",j,[y,(0,s._)("div",D,[(0,s.Wm)(G,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:z.agenciasSelected,onFilter:a[19]||(a[19]=(e,a)=>Z.filterArray(e,a,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:z.selectedAgencia,"onUpdate:modelValue":[a[20]||(a[20]=e=>z.selectedAgencia=e),a[21]||(a[21]=e=>{this.agentesLoading=!0,this.clientesLoading=!0,this.agentesSelected=[],this.clientesSelected=[],Z.getDataTable(),this.$refs.methods.getData("/agentes","setData","agentes",{headers:{agencia:this.selectedAgencia.id}}),this.$refs.methods.getData("/clientes","setData","clientes",{headers:{agencia:this.selectedAgencia.id}})})],outlined:"",standout:"",loading:z.agenciasLoading,disable:z.agenciasLoading,label:"Agencia"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{class:"text-grey"},{default:(0,s.w5)((()=>[k])),_:1})])),_:1})])),agenciasLoading:(0,s.w5)((()=>[(0,s.Wm)(Y,{showing:"",color:"primary",class:"loading"})])),prepend:(0,s.w5)((()=>[(0,s.Wm)($,{name:"search"})])),_:1},8,["options","modelValue","loading","disable"])]),(0,s._)("div",C,[(0,s.Wm)(G,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:z.agentesSelected,onFilter:a[22]||(a[22]=(e,a)=>Z.filterArray(e,a,"agentesSelected","agentes","persona_responsable")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",loading:z.agentesLoading,disable:z.agentesLoading,"option-label":"persona_responsable","option-value":"id",modelValue:z.selectedAgente,"onUpdate:modelValue":[a[23]||(a[23]=e=>z.selectedAgente=e),a[24]||(a[24]=e=>Z.getDataTable())],outlined:"",standout:"",label:"Agente"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{class:"text-grey"},{default:(0,s.w5)((()=>[x])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)($,{name:"search"})])),agentesLoading:(0,s.w5)((()=>[(0,s.Wm)(Y,{showing:"",color:"primary",class:"loading"})])),_:1},8,["options","loading","disable","modelValue"])]),(0,s._)("div",v,[(0,s.Wm)(G,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:z.clientesSelected,onFilter:a[25]||(a[25]=(e,a)=>Z.filterArray(e,a,"clientesSelected","clientes","nb_cliente")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_cliente","option-value":"id",loading:z.clientesLoading,disable:z.clientesLoading,modelValue:z.selectedCliente,"onUpdate:modelValue":[a[26]||(a[26]=e=>z.selectedCliente=e),a[27]||(a[27]=e=>Z.getDataTable())],outlined:"",standout:"",label:"Cliente"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{class:"text-grey"},{default:(0,s.w5)((()=>[W])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)($,{name:"search"})])),clientesLoading:(0,s.w5)((()=>[(0,s.Wm)(Y,{showing:"",color:"primary",class:"loading"})])),_:1},8,["options","loading","disable","modelValue"])])]),(0,s._)("div",A,[(0,s._)("div",E,[(0,s.Wm)(R,{modelValue:z.guia_desde,"onUpdate:modelValue":a[29]||(a[29]=e=>z.guia_desde=e),rounded:"",dense:"",outlined:"",standout:"",label:"Guia Desde",onKeyup:a[30]||(a[30]=(0,i.D2)((e=>Z.getDataTable()),["enter"])),mask:"##########"},{append:(0,s.w5)((()=>[(0,s.Wm)($,{onClick:a[28]||(a[28]=e=>Z.getDataTable()),class:"cursor-pointer",name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",V,[(0,s.Wm)(R,{modelValue:z.guia_hasta,"onUpdate:modelValue":a[32]||(a[32]=e=>z.guia_hasta=e),rounded:"",dense:"",outlined:"",standout:"",label:"Guia Hasta",onKeyup:a[33]||(a[33]=(0,i.D2)((e=>Z.getDataTable()),["enter"])),mask:"##########"},{append:(0,s.w5)((()=>[(0,s.Wm)($,{onClick:a[31]||(a[31]=e=>Z.getDataTable()),class:"cursor-pointer",name:"search"})])),_:1},8,["modelValue"])]),(0,s._)("div",P,[(0,s.Wm)(te,{"hide-bottom-space":"",borderless:"",dense:"",modelValue:z.selectedCulminado,"onUpdate:modelValue":a[36]||(a[36]=e=>z.selectedCulminado=e)},{control:(0,s.w5)((()=>[(0,s.Wm)(ae,{size:"md",modelValue:z.selectedCulminado,"onUpdate:modelValue":[a[34]||(a[34]=e=>z.selectedCulminado=e),a[35]||(a[35]=e=>Z.getDataTable())],"true-value":"0","false-value":"",style:{"font-size":"13px"},label:"Culminado"},null,8,["modelValue"])])),_:1},8,["modelValue"])]),(0,s._)("div",U,[(0,s.Wm)(N,{dense:"",color:"primary",disabled:this.allowOption(2),round:"",onClick:a[37]||(a[37]=e=>{this.dialog=!0,this.form.cod_agencia=Z.findIndex("agencias",this.selectedAgencia.id,"nb_agencia"),this.form.cod_agente=Z.findIndex("agentes",this.selectedAgente.id,"persona_responsable"),this.form.cod_cliente=Z.findIndex("clientes",this.selectedCliente.id,"nb_cliente"),this.form.fecha_asignacion=this.dateInit}),padding:"sm",style:{"margin-right":"25px"}},{default:(0,s.w5)((()=>[(0,s.Wm)($,{size:"25px",name:"add",color:"white"}),(0,s.Wm)(se,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,s.w5)((()=>[q])),_:1})])),_:1},8,["disabled"]),(0,s.Wm)(N,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-right":"25px"},onClick:a[38]||(a[38]=e=>this.resetFilters())},{default:(0,s.w5)((()=>[(0,s.Wm)($,{size:"25px",name:"filter_alt_off",color:"white"}),(0,s.Wm)(se,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,s.w5)((()=>[M])),_:1})])),_:1}),(0,s.Wm)(N,{dense:"",color:"primary",round:"",padding:"sm"},{default:(0,s.w5)((()=>[(0,s.Wm)($,{size:"25px",name:"sticky_note_2",color:"white"}),(0,s.Wm)(se,{class:"bg-primary","transition-show":"scale",style:{"max-height":"30px"},"transition-hide":"scale",color:"primary"},{default:(0,s.w5)((()=>[T])),_:1})])),_:1})])])]),(0,s._)("div",L,[(0,s.Wm)(oe,{rows:z.guias,"binary-state-sort":"","row-key":"id",columns:z.columns,loading:S.loading,separator:S.separator,style:{width:"100%"},grid:e.$q.screen.xs,"rows-per-page-options":[5,10,15,20,50],onRequest:Z.getDataTable,pagination:z.pagination,"onUpdate:pagination":a[41]||(a[41]=e=>z.pagination=e)},{loading:(0,s.w5)((()=>[(0,s.Wm)(Y,{showing:"",color:"primary",class:"loading"})])),"body-cell-cod_agencia":(0,s.w5)((e=>[(0,s.Wm)(ie,{props:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(Z.findIndex("agencias",e.row.cod_agencia,"nb_agencia")),1)])),_:2},1032,["props"])])),"body-cell-cod_agente":(0,s.w5)((e=>[(0,s.Wm)(ie,{props:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(Z.findIndex("agentesAll",e.row.cod_agente,"persona_responsable")),1)])),_:2},1032,["props"])])),"body-cell-cod_cliente":(0,s.w5)((e=>[(0,s.Wm)(ie,{props:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(Z.findIndex("clientesAll",e.row.cod_cliente,"nb_cliente")),1)])),_:2},1032,["props"])])),"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(ie,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:a=>z.selected=e.row.id,onClickCapture:a=>Z.deleteData(e.row)},null,8,["disabled","onClick","onClickCapture"]),(0,s.Wm)(N,{dense:"",round:"",flat:"",color:"primary",icon:"sim_card_download",disabled:!(e.row.cant_disponible>0),onClick:a=>z.selected=e.row.id,onClickCapture:a[39]||(a[39]=e=>this.pdfView=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,l.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(J,{class:(0,l.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(ne,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(t=>((0,s.wg)(),(0,s.j4)(F,{key:t.name},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(le,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(Q,{side:"",class:"itemMovilSide"},{default:(0,s.w5)((()=>["cod_agencia"===t.name?((0,s.wg)(),(0,s.j4)(le,{key:0},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(Z.findIndex("agencias",e.row.cod_agencia,"nb_agencia")),1)])),_:2},1024)):(0,s.kq)("",!0),"cod_agente"===t.name?((0,s.wg)(),(0,s.j4)(le,{key:1},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(Z.findIndex("agentesAll",e.row.cod_agente,"persona_responsable")),1)])),_:2},1024)):(0,s.kq)("",!0),"cod_cliente"===t.name?((0,s.wg)(),(0,s.j4)(le,{key:2},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(Z.findIndex("clientesAll",e.row.cod_cliente,"nb_cliente")),1)])),_:2},1024)):(0,s.kq)("",!0),"action"===t.name?((0,s.wg)(),(0,s.j4)(N,{key:3,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:a=>z.selected=e.row.id,onClickCapture:a=>Z.deleteData(e.row)},null,8,["disabled","onClick","onClickCapture"])):(0,s.kq)("",!0),"action"===t.name?((0,s.wg)(),(0,s.j4)(N,{key:4,dense:"",round:"",flat:"",color:"primary",icon:"sim_card_download",disabled:!(e.row.cant_disponible>0),onClick:a=>z.selected=e.row.id,onClickCapture:a[40]||(a[40]=e=>this.pdfView=!0)},null,8,["disabled","onClick"])):(0,s.kq)("",!0),"cod_agencia"!=t.name&&"cod_agente"!=t.name&&"cod_cliente"!=t.name?((0,s.wg)(),(0,s.j4)(le,{key:5},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.value),1)])),_:2},1024)):(0,s.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","grid","onRequest","pagination"])]),(0,s.Wm)(ee,{modelValue:S.deletePopup,"onUpdate:modelValue":a[43]||(a[43]=e=>S.deletePopup=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(J,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(X,null,{default:(0,s.w5)((()=>[I])),_:1}),(0,s.Wm)(re,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(N,{flat:"",label:"Cancelar",color:"primary"},null,512),[[ue]]),(0,s.wy)((0,s.Wm)(N,{flat:"",label:"Aceptar",color:"primary",onClick:a[42]||(a[42]=e=>this.$refs.methods.deleteData(`/cguias/${z.selected}`,"getDataTable"))},null,512),[[ue]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(ee,{modelValue:S.pdfView,"onUpdate:modelValue":a[44]||(a[44]=e=>S.pdfView=e),onShow:a[45]||(a[45]=e=>this.printPending())},{default:(0,s.w5)((()=>[(0,s._)("div",O,[(0,s.Wm)(de,{ref:"webViewer"},null,512)])])),_:1},8,["modelValue"]),(0,s.Wm)(ce,{ref:"methods",onSetData:Z.setData,onGetDataTable:Z.getDataTable,onSetDataTable:Z.setDataTable,onSetDataTableAll:Z.setDataTableAll,onGetDataTableAll:Z.getDataTableAll,onSetDataPermisos:Z.setDataPermisos},null,8,["onSetData","onGetDataTable","onSetDataTable","onSetDataTableAll","onGetDataTableAll","onSetDataPermisos"]),(0,s.Wm)(me,{ref:"rulesVue"},null,512)])),_:1})}var z=t(47743),Z=t(74260),$=t(24379),R=t(46778),B=t(10151),K=t(25589),Q=t(68689),F=t(64689),Y=t(24554),G=t(83944),N=t(76915),H=t(72448),X=t(83414),J=t(52035),ee=t(66941),ae=t(48240),te=t(57346),se=t(65735),ie=t(5363),le=t(17352),ne=t(83884),oe=t(27011),re=t(2350),de=t(99367),ce=t(60677),me=t(7518),_e=t.n(me);const ue=(0,Z.Z)(z.Z,[["render",S]]),ge=ue;_e()(z.Z,"components",{QPage:$.Z,QDialog:R.Z,QCard:B.Z,QCardSection:K.Z,QForm:Q.Z,QInput:F.Z,QIcon:Y.Z,QPopupProxy:G.Z,QDate:N.Z,QSelect:H.Z,QItem:X.Z,QItemSection:J.Z,QInnerLoading:ee.Z,QBtn:ae.Z,QField:te.Z,QCheckbox:se.Z,QTooltip:ie.Z,QTable:le.Z,QTd:ne.Z,QList:oe.Z,QItemLabel:re.Z,QCardActions:de.Z}),_e()(z.Z,"directives",{ClosePopup:ce.Z})},46700:(e,a,t)=>{var s={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function i(e){var a=l(e);return t(a)}function l(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=l,e.exports=i,i.id=46700}}]);