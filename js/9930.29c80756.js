(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[9930],{23759:(e,s,t)=>{"use strict";function a(e,s,t,a,o,l){return null}t.d(s,{Z:()=>c});var o=t(80589),l=t(5474),i=t(48825);const n={setup(){const e=(0,i.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.get(e,a).then((e=>{this.$emit(s,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.post(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.put(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,s,t={headers:{}}){t.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api["delete"](e,t).then((e=>{(e.status=200)&&(this.$emit(s),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.post(e,s,a).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=t(74260);const d=(0,r.Z)(n,[["render",a]]),c=d},3868:(e,s,t)=>{"use strict";function a(e,s,t,a,o,l){return null}t.d(s,{Z:()=>c});var o=t(48825),l=t(11488),i=t.n(l);const n={name:"rules",setup(){(0,o.Z)()},methods:{isReq(e,s=!1){if(null==e||""==e.trim())return!1!==s?s:"Valor Requerido"},isReqCurrency(e,s=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==s?s:"Valor Requerido"},isReqSelect(e,s=!1){if(null==e||e==[]||""==e)return!1!==s?s:"Valor Requerido"},isMax(e,s,t=!1){if(null!==e&&""!==e&&e.length>s)return!1!==t?t:`Maximo ${s} Caracteres`},isMin(e,s,t=!1){if(null!==e&&""!==e&&e.length<s)return!1!==t?t:`Minimo ${s} Caracteres`},checkDate(e,s=!1){if(0==i()(e,"DD/MM/YYYY",!0)._isValid)return!1!==s?s:"Fecha Invalida"},checkHour(e,s=!1){if(0==i()(e,"HH:mm:mm",!0)._isValid)return!1!==s?s:"Hora Invalida"}}};var r=t(74260);const d=(0,r.Z)(n,[["render",a]]),c=d},58368:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>ie});var a=t(83673),o=t(98880),l=t(62323);const i={class:"row"},n={class:"col-md-6 col-xs-12"},r={class:"col-md-6 col-xs-12"},d={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},m={class:"col-md-12 col-xs-12"},u={class:"col-md-12 col-xs-12"},p={class:"row"},g=(0,a._)("div",{class:"col-md-12 col-xs-12",style:{"align-self":"center","text-align":"left","margin-top":"-30px"}},[(0,a._)("h4",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a._)("strong",null,"IDENTIFICACIÓN Y COMISIONES")])],-1),f={class:"col-md-6 col-xs-12"},h={class:"col-md-6 col-xs-12"},_={class:"col-md-4 col-xs-12"},b={class:"col-md-4 col-xs-12"},j={class:"col-md-4 col-xs-12"},w={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},v={class:"row q-pa-sm justify-center"},y={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},x={class:"q-pa-md row",style:{"margin-top":"2px"}},V=(0,a._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a._)("strong",null,"MANTENIMIENTO - AGENTES")])],-1),k={class:"col-md-5 col-xl-5 col-lg-5 col-xs-12 col-sm-6 cardMargin selectMobile",style:{"align-self":"center","text-align":"center"}},D=(0,a.Uk)(" Sin resultados "),C={class:"col-md-5 col-xl-5 col-lg-5 col-xs-12 col-sm-6",style:{"align-self":"center","text-align":"center"}},W={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMarginButton",style:{"text-align":"center","align-self":"center"}},z={class:"q-pa-md my-card row",bordered:"",flat:"",style:{"margin-top":"2px"}},$=(0,a._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function q(e,s,t,q,A,I){const S=(0,a.up)("q-icon"),E=(0,a.up)("q-input"),M=(0,a.up)("q-select"),T=(0,a.up)("q-card-section"),Z=(0,a.up)("q-card"),U=(0,a.up)("q-btn"),P=(0,a.up)("q-form"),Q=(0,a.up)("q-dialog"),R=(0,a.up)("q-item-section"),O=(0,a.up)("q-item"),N=(0,a.up)("q-inner-loading"),B=(0,a.up)("q-td"),F=(0,a.up)("q-item-label"),H=(0,a.up)("q-list"),L=(0,a.up)("q-table"),Y=(0,a.up)("q-card-actions"),G=(0,a.up)("methods"),K=(0,a.up)("rules-vue"),J=(0,a.up)("q-page"),X=(0,a.Q2)("money"),ee=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(J,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{modelValue:q.dialog,"onUpdate:modelValue":s[18]||(s[18]=e=>q.dialog=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(P,{onSubmit:s[17]||(s[17]=e=>I.sendData()),class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",n,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.nb_agente,"onUpdate:modelValue":[s[0]||(s[0]=e=>A.form.nb_agente=e),s[1]||(s[1]=e=>A.form.nb_agente=A.form.nb_agente.toUpperCase())],label:"Nombre de Agente",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",r,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.fax_agente,"onUpdate:modelValue":[s[2]||(s[2]=e=>A.form.fax_agente=e),s[3]||(s[3]=e=>A.form.fax_agente=A.form.fax_agente.toUpperCase())],label:"Fax",hint:"",mask:"(####) ### - ####","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",d,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.persona_responsable,"onUpdate:modelValue":[s[4]||(s[4]=e=>A.form.persona_responsable=e),s[5]||(s[5]=e=>A.form.persona_responsable=A.form.persona_responsable.toUpperCase())],label:"Persona Responsable",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"contact_phone"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",c,[(0,a.Wm)(M,{outlined:"",modelValue:A.form.flag_activo,"onUpdate:modelValue":s[6]||(s[6]=e=>A.form.flag_activo=e),label:"Activo",hint:"",mask:"(####) ### - ####",rules:[e=>this.$refs.rulesVue.isReqSelect(e)],options:A.estatus,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",m,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.dir_agente,"onUpdate:modelValue":[s[7]||(s[7]=e=>A.form.dir_agente=e),s[8]||(s[8]=e=>A.form.dir_agente=A.form.dir_agente.toUpperCase())],label:"Dirección",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",u,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.email_web,"onUpdate:modelValue":[s[9]||(s[9]=e=>A.form.email_web=e),s[10]||(s[10]=e=>A.form.email_web=A.form.email_web.toUpperCase())],label:"Email",hint:"",type:"email","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"email"})])),_:1},8,["modelValue","rules"])]),(0,a.Wm)(Z,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw","margin-bottom":"20px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a._)("div",p,[g,(0,a._)("div",f,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.rif_ci_agente,"onUpdate:modelValue":[s[11]||(s[11]=e=>A.form.rif_ci_agente=e),s[12]||(s[12]=e=>A.form.rif_ci_agente=A.form.rif_ci_agente.toUpperCase())],label:"RIF/CI",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,20),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"account_box"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",h,[(0,a.Wm)(M,{outlined:"",modelValue:A.form.tipo_agente,"onUpdate:modelValue":s[13]||(s[13]=e=>A.form.tipo_agente=e),label:"Tipo de Agente",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e)],options:A.tipoAgente,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"face"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",_,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(E,{outlined:"",modelValue:A.form.porc_comision_venta,"onUpdate:modelValue":s[14]||(s[14]=e=>A.form.porc_comision_venta=e),label:"% Comisión por Venta","input-class":"text-right",hint:"",class:"pcform",rules:[e=>this.$refs.rulesVue.isMax(e,7)],"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"percent"})])),_:1},8,["modelValue","rules"])),[[X,A.money]])]),(0,a._)("div",b,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(E,{outlined:"",class:"pcform",modelValue:A.form.porc_comision_entrega,"onUpdate:modelValue":s[15]||(s[15]=e=>A.form.porc_comision_entrega=e),label:"% Comisión por Entrega","input-class":"text-right",hint:"",rules:[e=>this.$refs.rulesVue.isMax(e,7)],"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"percent"})])),_:1},8,["modelValue","rules"])),[[X,A.money]])]),(0,a._)("div",j,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(E,{outlined:"",modelValue:A.form.porc_comision_seguro,"onUpdate:modelValue":s[16]||(s[16]=e=>A.form.porc_comision_seguro=e),label:"% Comisión por Seguro","input-class":"text-right",hint:"",rules:[e=>this.$refs.rulesVue.isMax(e,7)],"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"percent"})])),_:1},8,["modelValue","rules"])),[[X,A.money]])])])])),_:1})])),_:1})]),(0,a._)("div",w,[(0,a.Wm)(U,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(U,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[ee]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",v,[(0,a._)("div",y,[(0,a._)("div",x,[V,(0,a._)("div",k,[(0,a.Wm)(M,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.agenciasSelected,onFilter:s[19]||(s[19]=(e,s)=>I.filterArray(e,s,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"",dense:"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:A.selectedAgencia,"onUpdate:modelValue":[s[20]||(s[20]=e=>A.selectedAgencia=e),s[21]||(s[21]=e=>I.getDataTable())],outlined:"",standout:"",label:"Escoge una Agencia"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(R,{class:"text-grey"},{default:(0,a.w5)((()=>[D])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",C,[(0,a.Wm)(E,{modelValue:this.pagination.filterValue,"onUpdate:modelValue":s[23]||(s[23]=e=>this.pagination.filterValue=e),rounded:"",dense:"",outlined:"",standout:"",label:"Búsqueda avanzada",onKeydown:s[24]||(s[24]=(0,o.D2)((e=>I.getDataTable()),["enter"]))},{append:(0,a.w5)((()=>[(0,a.Wm)(S,{onClick:s[22]||(s[22]=e=>I.getDataTable()),class:"cursor-pointer",name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",W,[(0,a.Wm)(U,{label:"Insertar",rounded:"",color:"primary",disabled:this.allowOption(2),onClick:s[25]||(s[25]=e=>q.dialog=!0),onClickCapture:s[26]||(s[26]=e=>I.resetForm()),class:"q-px-xl q-py-xs"},null,8,["disabled"])])]),(0,a._)("div",z,[(0,a.Wm)(L,{rows:A.agentes,"binary-state-sort":"","row-key":"id",columns:A.columns,separator:q.separator,"rows-per-page-options":[5,10,15,20,50],onRequest:I.getDataTable,style:{width:"100%"},loading:q.loading,grid:e.$q.screen.xs,pagination:A.pagination,"onUpdate:pagination":s[29]||(s[29]=e=>A.pagination=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(N,{showing:"",color:"primary",class:"loading"})])),"body-cell-tipo_agente":(0,a.w5)((e=>[(0,a.Wm)(B,{props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(I.filterDesc("tipoAgente",e.row.tipo_agente)),1)])),_:2},1032,["props"])])),"body-cell-flag_activo":(0,a.w5)((e=>[(0,a.Wm)(B,{props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(I.filterDesc("estatus",e.row.flag_activo)),1)])),_:2},1032,["props"])])),"body-cell-action":(0,a.w5)((e=>[(0,a.Wm)(B,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:s=>{this.$refs.methods.getData(`/agentes/${e.row.id}`,"setDataEdit","form"),q.dialog=!0}},null,8,["disabled","onClick"]),(0,a.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:s=>A.selected=e.row.id,onClickCapture:s[27]||(s[27]=e=>q.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,l.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(Z,{class:(0,l.C_)(e.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(t=>((0,a.wg)(),(0,a.j4)(O,{key:t.name},{default:(0,a.w5)((()=>[(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[(0,a.Wm)(F,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(R,{side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>["flag_activo"===t.name?((0,a.wg)(),(0,a.j4)(F,{key:0},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(I.filterDesc("estatus",e.row.flag_activo)),1)])),_:2},1024)):(0,a.kq)("",!0),"action"===t.name?((0,a.wg)(),(0,a.j4)(U,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:s=>{this.$refs.methods.getData(`/agentes/${e.row.id}`,"setDataEdit","form"),q.dialog=!0}},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"action"===t.name?((0,a.wg)(),(0,a.j4)(U,{key:2,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:s=>A.selected=e.row.id,onClickCapture:s[28]||(s[28]=e=>q.deletePopup=!0)},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"flag_activo"!=t.name?((0,a.wg)(),(0,a.j4)(F,{key:3},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.value),1)])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","onRequest","loading","grid","pagination"])])])]),(0,a.Wm)(Q,{modelValue:q.deletePopup,"onUpdate:modelValue":s[31]||(s[31]=e=>q.deletePopup=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{style:{width:"700px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[$])),_:1}),(0,a.Wm)(Y,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(U,{flat:"",label:"Cancelar",color:"primary"},null,512),[[ee]]),(0,a.wy)((0,a.Wm)(U,{flat:"",label:"Aceptar",color:"primary",onClick:s[30]||(s[30]=e=>this.$refs.methods.deleteData(`/agentes/${A.selected}`,"getDataTable"))},null,512),[[ee]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(G,{ref:"methods",onSetDataInit:I.setDataInit,onSetDataEdit:I.setDataEdit,onGetDataTable:I.getDataTable,onSetDataTable:I.setDataTable,onSetDataPermisos:I.setDataPermisos},null,8,["onSetDataInit","onSetDataEdit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,a.Wm)(K,{ref:"rulesVue"},null,512)])),_:1})}t(65363),t(97768);var A=t(61959),I=t(80589),S=t(3868),E=t(31885),M=t(23759);const T={directives:{money:E.VMoney},components:{methods:M.Z,VMoney:E.VMoney,rulesVue:S.Z},name:"Agentes",data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!0},columns:[{name:"nb_agente",label:"Nombre",field:"nb_agente",align:"left",sortable:!0},{name:"persona_responsable",label:"Persona Responsable",field:"persona_responsable",align:"left",sortable:!0},{name:"tipo_agente",label:"Tipo de Agente",field:"tipo_agente",align:"left",sortable:!0},{name:"flag_activo",label:"Estatus",field:"flag_activo",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center"}],form:{nb_agente:"",persona_responsable:"",dir_agente:"",tlf_agente:"",fax_agente:"",email_web:"",tipo_agente:"",flag_activo:"",rif_ci_agente:"",porc_comision_venta:"",porc_comision_entrega:"",porc_comision_seguro:"",cod_agencia:[]},estatus:[{label:"ACTIVO",value:"1"},{label:"INACTIVO",value:"0"}],tipoAgente:[{label:"RESPONSABLE DE AGENCIA",value:"RP"},{label:"COURIERS",value:"CR"}],pagination:{page:1,rowsPerPage:10,sortBy:"persona_responsable",descending:!1,filter:"nb_agente,persona_responsable",filterValue:"",rowsNumber:""},agencias:[],agentes:[],agenciasSelected:[],rpermisos:[],selected:[],selectedAgencia:[]}},setup(){return{loading:(0,A.iH)(!1),separator:(0,A.iH)("vertical"),deletePopup:(0,A.iH)(!1),dialog:(0,A.iH)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Agentes",""),this.$refs.methods.getData("/agencias","setDataInit","agencias"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:I.Z.getItem("tokenTraducido").usuario.roles.id,menu:"agentes"}})},methods:{filterArray(e,s,t,a,o){s(""!==e?()=>{const s=e.toUpperCase();for(var l=[],i=0;i<=this[a].length-1;i++)if(this[a][i][o].indexOf(s)>-1&&l.push(this[a][i]),i==this[a].length-1){this[t]=l;break}}:()=>{this[t]=this[a]})},filterDesc(e,s){var t=this[e].findIndex((e=>e.value==s));return t>=0?this[e][t].label:null},allowOption(e){return this.rpermisos.findIndex((s=>s.acciones.accion==e))<0},setDataPermisos(e,s){this[s]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setDataInit(e,s){this[s]=e.data?e.data:e,this.selectedAgencia=this.agencias[0],this.getDataTable()},getDataTable(e){this.loading=!0,e&&(this.pagination=e.pagination),this.$refs.methods.getData("/agentes","setDataTable","agentes",{headers:{agencia:this.selectedAgencia.id,page:this.pagination.page,limit:this.pagination.rowsPerPage,order_by:this.pagination.sortBy,order_direction:this.pagination.descending?"DESC":"ASC",filter:this.pagination.filter,filter_value:this.pagination.filterValue}})},setDataTable(e,s){this[s]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},setDataEdit(e,s){this[s].id=e.id,this[s].cod_agencia=e.cod_agencia,this[s].nb_agente=e.nb_agente,this[s].persona_responsable=e.persona_responsable,this[s].dir_agente=e.dir_agente,this[s].tlf_agente=e.tlf_agente,this[s].fax_agente=e.fax_agente,this[s].email_web=e.email_web,this[s].rif_ci_agente=e.rif_ci_agente,this[s].porc_comision_venta=e.porc_comision_venta,this[s].porc_comision_seguro=e.porc_comision_seguro,this[s].porc_comision_entrega=e.porc_comision_entrega,this[s].tipo_agente=this.filterDesc("tipoAgente",e.tipo_agente),this[s].flag_activo=this.filterDesc("estatus",e.flag_activo)},sendData(){this.form.porc_comision_venta=this.form.porc_comision_venta.replaceAll(".","").replaceAll(",","."),this.form.porc_comision_entrega=this.form.porc_comision_entrega.replaceAll(".","").replaceAll(",","."),this.form.porc_comision_seguro=this.form.porc_comision_seguro.replaceAll(".","").replaceAll(",","."),this.form.cod_agencia=this.selectedAgencia.id,this.form.tipo_agente=this.form.tipo_agente.value,this.form.flag_activo=this.form.flag_activo.value,this.form.id?this.$refs.methods.putData(`/agentes/${this.form.id}`,this.form,"getDataTable"):this.$refs.methods.createData("/agentes",this.form,"getDataTable"),this.dialog=!1,this.resetForm()},resetForm(){delete this.form.id,this.form.nb_agente="",this.form.persona_responsable="",this.form.dir_agente="",this.form.tlf_agente="",this.form.email_web="",this.form.tipo_agente="",this.form.fax_agente="",this.form.rif_ci_agente="",this.form.porc_comision_venta="",this.form.flag_activo="",this.form.porc_comision_entrega="",this.form.porc_comision_seguro="",this.form.cod_agencia=null,this.dialog=!1}}};var Z=t(74260),U=t(24379),P=t(46778),Q=t(10151),R=t(25589),O=t(68689),N=t(64689),B=t(24554),F=t(72448),H=t(48240),L=t(83414),Y=t(52035),G=t(96023),K=t(66941),J=t(83884),X=t(27011),ee=t(2350),se=t(99367),te=t(60677),ae=t(7518),oe=t.n(ae);const le=(0,Z.Z)(T,[["render",q]]),ie=le;oe()(T,"components",{QPage:U.Z,QDialog:P.Z,QCard:Q.Z,QCardSection:R.Z,QForm:O.Z,QInput:N.Z,QIcon:B.Z,QSelect:F.Z,QBtn:H.Z,QItem:L.Z,QItemSection:Y.Z,QTable:G.Z,QInnerLoading:K.Z,QTd:J.Z,QList:X.Z,QItemLabel:ee.Z,QCardActions:se.Z}),oe()(T,"directives",{ClosePopup:te.Z})},46700:(e,s,t)=>{var a={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function o(e){var s=l(e);return t(s)}function l(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=l,e.exports=o,o.id=46700}}]);