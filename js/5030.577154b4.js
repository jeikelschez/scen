(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[5030],{3759:(e,s,t)=>{"use strict";function a(e,s,t,a,o,l){return null}t.d(s,{Z:()=>c});var o=t(589),l=t(5474),i=t(8825);const n={setup(){const e=(0,i.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.get(e,a).then((e=>{this.$emit(s,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.post(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.put(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,s,t={headers:{}}){t.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.delete(e,t).then((e=>{(e.status=200)&&(this.$emit(s),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,l.api.post(e,s,a).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=t(4260);const d=(0,r.Z)(n,[["render",a]]),c=d},6479:(e,s,t)=>{"use strict";function a(e,s,t,a,o,l){return null}t.d(s,{Z:()=>c});var o=t(8825),l=t(1488),i=t.n(l);const n={name:"rules",setup(){(0,o.Z)()},methods:{isReq(e,s=!1){if(null==e||""==e.trim())return!1!==s?s:"Valor Requerido"},isReqCurrency(e,s=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==s?s:"Valor Requerido"},isReqSelect(e,s=!1){if(null==e||e==[]||""==e)return!1!==s?s:"Valor Requerido"},isMax(e,s,t=!1){if(null!==e&&""!==e&&e.length>s)return!1!==t?t:`Maximo ${s} Caracteres`},isMin(e,s,t=!1){if(null!==e&&""!==e&&e.length<s)return!1!==t?t:`Minimo ${s} Caracteres`},checkDate(e,s=!1){if(0==i()(e,"DD/MM/YYYY",!0)._isValid)return!1!==s?s:"Fecha Invalida"},checkHour(e,s=!1){if(0==i()(e,"HH:mm",!0)._isValid)return!1!==s?s:"Hora Invalida"}}};var r=t(4260);const d=(0,r.Z)(n,[["render",a]]),c=d},544:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>ie});var a=t(3673),o=t(8880),l=t(2323);const i={class:"row"},n={class:"col-md-6 col-xs-12"},r={class:"col-md-6 col-xs-12"},d={class:"col-md-6 col-xs-12"},c={class:"col-md-6 col-xs-12"},m={class:"col-md-12 col-xs-12"},u={class:"col-md-12 col-xs-12"},p={class:"row"},g=(0,a._)("div",{class:"col-md-12 col-xs-12",style:{"align-self":"center","text-align":"left","margin-top":"-30px"}},[(0,a._)("h4",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a._)("strong",null,"IDENTIFICACIÓN Y COMISIONES")])],-1),f={class:"col-md-6 col-xs-12"},h={class:"col-md-6 col-xs-12"},_={class:"col-md-4 col-xs-12"},b={class:"col-md-4 col-xs-12"},j={class:"col-md-4 col-xs-12"},w={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},v={class:"row q-pa-sm justify-center"},y={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},x={class:"q-pa-md row",style:{"margin-top":"2px"}},V=(0,a._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a._)("strong",null,"MANTENIMIENTO - AGENTES")])],-1),k={class:"col-md-5 col-xl-5 col-lg-5 col-xs-12 col-sm-6 cardMargin selectMobile",style:{"align-self":"center","text-align":"center"}},D=(0,a.Uk)(" Sin resultados "),C={class:"col-md-5 col-xl-5 col-lg-5 col-xs-12 col-sm-6",style:{"align-self":"center","text-align":"center"}},W={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12 cardMarginButton",style:{"text-align":"center","align-self":"center"}},z={class:"q-pa-md my-card row",bordered:"",flat:"",style:{"margin-top":"2px"}},$=(0,a._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function q(e,s,t,q,A,I){const S=(0,a.up)("q-icon"),E=(0,a.up)("q-input"),M=(0,a.up)("q-select"),T=(0,a.up)("q-card-section"),Z=(0,a.up)("q-card"),U=(0,a.up)("q-btn"),P=(0,a.up)("q-form"),Q=(0,a.up)("q-dialog"),R=(0,a.up)("q-item-section"),O=(0,a.up)("q-item"),N=(0,a.up)("q-inner-loading"),B=(0,a.up)("q-td"),F=(0,a.up)("q-item-label"),H=(0,a.up)("q-list"),L=(0,a.up)("q-table"),Y=(0,a.up)("q-card-actions"),G=(0,a.up)("methods"),K=(0,a.up)("rules-vue"),J=(0,a.up)("q-page"),X=(0,a.Q2)("money"),ee=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(J,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{modelValue:q.dialog,"onUpdate:modelValue":s[18]||(s[18]=e=>q.dialog=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"90vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(P,{onSubmit:s[17]||(s[17]=e=>I.sendData()),class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",n,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.nb_agente,"onUpdate:modelValue":[s[0]||(s[0]=e=>A.form.nb_agente=e),s[1]||(s[1]=e=>A.form.nb_agente=A.form.nb_agente.toUpperCase())],label:"Nombre de Agente",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",r,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.fax_agente,"onUpdate:modelValue":[s[2]||(s[2]=e=>A.form.fax_agente=e),s[3]||(s[3]=e=>A.form.fax_agente=A.form.fax_agente.toUpperCase())],label:"Fax",hint:"",mask:"(####) ### - ####","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",d,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.persona_responsable,"onUpdate:modelValue":[s[4]||(s[4]=e=>A.form.persona_responsable=e),s[5]||(s[5]=e=>A.form.persona_responsable=A.form.persona_responsable.toUpperCase())],label:"Persona Responsable",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,50),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"contact_phone"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",c,[(0,a.Wm)(M,{outlined:"",modelValue:A.form.flag_activo,"onUpdate:modelValue":s[6]||(s[6]=e=>A.form.flag_activo=e),label:"Activo",hint:"",mask:"(####) ### - ####",rules:[e=>this.$refs.rulesVue.isReqSelect(e)],options:A.estatus,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"rule"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",m,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.dir_agente,"onUpdate:modelValue":[s[7]||(s[7]=e=>A.form.dir_agente=e),s[8]||(s[8]=e=>A.form.dir_agente=A.form.dir_agente.toUpperCase())],label:"Dirección",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",u,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.email_web,"onUpdate:modelValue":[s[9]||(s[9]=e=>A.form.email_web=e),s[10]||(s[10]=e=>A.form.email_web=A.form.email_web.toUpperCase())],label:"Email",hint:"",type:"email","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"email"})])),_:1},8,["modelValue","rules"])]),(0,a.Wm)(Z,{class:"q-pa-md",bordered:"",style:{width:"999px","max-width":"80vw","margin-bottom":"20px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a._)("div",p,[g,(0,a._)("div",f,[(0,a.Wm)(E,{outlined:"",modelValue:A.form.rif_ci_agente,"onUpdate:modelValue":[s[11]||(s[11]=e=>A.form.rif_ci_agente=e),s[12]||(s[12]=e=>A.form.rif_ci_agente=A.form.rif_ci_agente.toUpperCase())],label:"RIF/CI",hint:"",class:"pcform","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,20),e=>this.$refs.rulesVue.isMin(e,3)]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"account_box"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",h,[(0,a.Wm)(M,{outlined:"",modelValue:A.form.tipo_agente,"onUpdate:modelValue":s[13]||(s[13]=e=>A.form.tipo_agente=e),label:"Tipo de Agente",hint:"",rules:[e=>this.$refs.rulesVue.isReqSelect(e)],options:A.tipoAgente,"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"face"})])),_:1},8,["modelValue","rules","options"])]),(0,a._)("div",_,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(E,{outlined:"",modelValue:A.form.porc_comision_venta,"onUpdate:modelValue":s[14]||(s[14]=e=>A.form.porc_comision_venta=e),label:"% Comisión por Venta","input-class":"text-right",hint:"",class:"pcform",rules:[e=>this.$refs.rulesVue.isMax(e,7)],"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"percent"})])),_:1},8,["modelValue","rules"])),[[X,A.money]])]),(0,a._)("div",b,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(E,{outlined:"",class:"pcform",modelValue:A.form.porc_comision_entrega,"onUpdate:modelValue":s[15]||(s[15]=e=>A.form.porc_comision_entrega=e),label:"% Comisión por Entrega","input-class":"text-right",hint:"",rules:[e=>this.$refs.rulesVue.isMax(e,7)],"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"percent"})])),_:1},8,["modelValue","rules"])),[[X,A.money]])]),(0,a._)("div",j,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(E,{outlined:"",modelValue:A.form.porc_comision_seguro,"onUpdate:modelValue":s[16]||(s[16]=e=>A.form.porc_comision_seguro=e),label:"% Comisión por Seguro","input-class":"text-right",hint:"",rules:[e=>this.$refs.rulesVue.isMax(e,7)],"lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"percent"})])),_:1},8,["modelValue","rules"])),[[X,A.money]])])])])),_:1})])),_:1})]),(0,a._)("div",w,[(0,a.Wm)(U,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(U,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[ee]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",v,[(0,a._)("div",y,[(0,a._)("div",x,[V,(0,a._)("div",k,[(0,a.Wm)(M,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:A.agenciasSelected,onFilter:s[19]||(s[19]=(e,s)=>I.filterArray(e,s,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"",dense:"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:A.selectedAgencia,"onUpdate:modelValue":[s[20]||(s[20]=e=>A.selectedAgencia=e),s[21]||(s[21]=e=>I.getDataTable())],outlined:"",standout:"",label:"Escoge una Agencia"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(R,{class:"text-grey"},{default:(0,a.w5)((()=>[D])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(S,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",C,[(0,a.Wm)(E,{modelValue:this.pagination.filterValue,"onUpdate:modelValue":s[23]||(s[23]=e=>this.pagination.filterValue=e),rounded:"",dense:"",outlined:"",standout:"",label:"Búsqueda avanzada",onKeydown:s[24]||(s[24]=(0,o.D2)((e=>I.getDataTable()),["enter"]))},{append:(0,a.w5)((()=>[(0,a.Wm)(S,{onClick:s[22]||(s[22]=e=>I.getDataTable()),class:"cursor-pointer",name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",W,[(0,a.Wm)(U,{label:"Insertar",rounded:"",color:"primary",disabled:this.allowOption(2),onClick:s[25]||(s[25]=e=>q.dialog=!0),onClickCapture:s[26]||(s[26]=e=>I.resetForm()),class:"q-px-xl q-py-xs"},null,8,["disabled"])])]),(0,a._)("div",z,[(0,a.Wm)(L,{rows:A.agentes,"binary-state-sort":"","row-key":"id",columns:A.columns,separator:q.separator,"rows-per-page-options":[5,10,15,20,50],onRequest:I.getDataTable,style:{width:"100%"},loading:q.loading,grid:e.$q.screen.xs,pagination:A.pagination,"onUpdate:pagination":s[29]||(s[29]=e=>A.pagination=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(N,{showing:"",color:"primary",class:"loading"})])),"body-cell-tipo_agente":(0,a.w5)((e=>[(0,a.Wm)(B,{props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(I.filterDesc("tipoAgente",e.row.tipo_agente)),1)])),_:2},1032,["props"])])),"body-cell-flag_activo":(0,a.w5)((e=>[(0,a.Wm)(B,{props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(I.filterDesc("estatus",e.row.flag_activo)),1)])),_:2},1032,["props"])])),"body-cell-action":(0,a.w5)((e=>[(0,a.Wm)(B,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:s=>{this.$refs.methods.getData(`/agentes/${e.row.id}`,"setDataEdit","form"),q.dialog=!0}},null,8,["disabled","onClick"]),(0,a.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:s=>A.selected=e.row.id,onClickCapture:s[27]||(s[27]=e=>q.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,l.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(Z,{class:(0,l.C_)(e.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(t=>((0,a.wg)(),(0,a.j4)(O,{key:t.name},{default:(0,a.w5)((()=>[(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[(0,a.Wm)(F,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(R,{side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>["flag_activo"===t.name?((0,a.wg)(),(0,a.j4)(F,{key:0},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(I.filterDesc("estatus",e.row.flag_activo)),1)])),_:2},1024)):(0,a.kq)("",!0),"action"===t.name?((0,a.wg)(),(0,a.j4)(U,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:s=>{this.$refs.methods.getData(`/agentes/${e.row.id}`,"setDataEdit","form"),q.dialog=!0}},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"action"===t.name?((0,a.wg)(),(0,a.j4)(U,{key:2,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:s=>A.selected=e.row.id,onClickCapture:s[28]||(s[28]=e=>q.deletePopup=!0)},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"flag_activo"!=t.name?((0,a.wg)(),(0,a.j4)(F,{key:3},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.value),1)])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","separator","onRequest","loading","grid","pagination"])])])]),(0,a.Wm)(Q,{modelValue:q.deletePopup,"onUpdate:modelValue":s[31]||(s[31]=e=>q.deletePopup=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{style:{width:"700px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[$])),_:1}),(0,a.Wm)(Y,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(U,{flat:"",label:"Cancelar",color:"primary"},null,512),[[ee]]),(0,a.wy)((0,a.Wm)(U,{flat:"",label:"Aceptar",color:"primary",onClick:s[30]||(s[30]=e=>this.$refs.methods.deleteData(`/agentes/${A.selected}`,"getDataTable"))},null,512),[[ee]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(G,{ref:"methods",onSetDataInit:I.setDataInit,onSetDataEdit:I.setDataEdit,onGetDataTable:I.getDataTable,onSetDataTable:I.setDataTable,onSetDataPermisos:I.setDataPermisos},null,8,["onSetDataInit","onSetDataEdit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,a.Wm)(K,{ref:"rulesVue"},null,512)])),_:1})}var A=t(1959),I=t(589),S=t(6479),E=t(1885),M=t(3759);const T={directives:{money:E.VMoney},components:{methods:M.Z,VMoney:E.VMoney,rulesVue:S.Z},name:"Agentes",data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!0},columns:[{name:"nb_agente",label:"Nombre",field:"nb_agente",align:"left",sortable:!0},{name:"persona_responsable",label:"Persona Responsable",field:"persona_responsable",align:"left",sortable:!0},{name:"tipo_agente",label:"Tipo de Agente",field:"tipo_agente",align:"left",sortable:!0},{name:"flag_activo",label:"Estatus",field:"flag_activo",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center"}],form:{nb_agente:"",persona_responsable:"",dir_agente:"",tlf_agente:"",fax_agente:"",email_web:"",tipo_agente:"",flag_activo:"",rif_ci_agente:"",porc_comision_venta:"",porc_comision_entrega:"",porc_comision_seguro:"",cod_agencia:[]},estatus:[{label:"ACTIVO",value:"1"},{label:"INACTIVO",value:"0"}],tipoAgente:[{label:"RESPONSABLE DE AGENCIA",value:"RP"},{label:"COURIERS",value:"CR"}],pagination:{page:1,rowsPerPage:10,sortBy:"persona_responsable",descending:!1,filter:"nb_agente,persona_responsable",filterValue:"",rowsNumber:""},agencias:[],agentes:[],agenciasSelected:[],rpermisos:[],selected:[],selectedAgencia:[]}},setup(){return{loading:(0,A.iH)(!1),separator:(0,A.iH)("vertical"),deletePopup:(0,A.iH)(!1),dialog:(0,A.iH)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Agentes",""),this.$refs.methods.getData("/agencias","setDataInit","agencias"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:I.Z.getItem("tokenTraducido").usuario.roles.id,menu:"agentes"}})},methods:{filterArray(e,s,t,a,o){s(""!==e?()=>{const s=e.toUpperCase();for(var l=[],i=0;i<=this[a].length-1;i++)if(this[a][i][o].indexOf(s)>-1&&l.push(this[a][i]),i==this[a].length-1){this[t]=l;break}}:()=>{this[t]=this[a]})},filterDesc(e,s){var t=this[e].findIndex((e=>e.value==s));return t>=0?this[e][t].label:null},allowOption(e){return this.rpermisos.findIndex((s=>s.acciones.accion==e))<0},setDataPermisos(e,s){this[s]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setDataInit(e,s){this[s]=e.data?e.data:e,this.selectedAgencia=this.agencias[0],this.getDataTable()},getDataTable(e){this.loading=!0,e&&(this.pagination=e.pagination),this.$refs.methods.getData("/agentes","setDataTable","agentes",{headers:{agencia:this.selectedAgencia.id,page:this.pagination.page,limit:this.pagination.rowsPerPage,order_by:this.pagination.sortBy,order_direction:this.pagination.descending?"DESC":"ASC",filter:this.pagination.filter,filter_value:this.pagination.filterValue}})},setDataTable(e,s){this[s]=e.data?e.data:e,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},setDataEdit(e,s){this[s].id=e.id,this[s].cod_agencia=e.cod_agencia,this[s].nb_agente=e.nb_agente,this[s].persona_responsable=e.persona_responsable,this[s].dir_agente=e.dir_agente,this[s].tlf_agente=e.tlf_agente,this[s].fax_agente=e.fax_agente,this[s].email_web=e.email_web,this[s].rif_ci_agente=e.rif_ci_agente,this[s].porc_comision_venta=e.porc_comision_venta,this[s].porc_comision_seguro=e.porc_comision_seguro,this[s].porc_comision_entrega=e.porc_comision_entrega,this[s].tipo_agente=this.filterDesc("tipoAgente",e.tipo_agente),this[s].flag_activo=this.filterDesc("estatus",e.flag_activo)},sendData(){this.form.porc_comision_venta=this.form.porc_comision_venta.replaceAll(".","").replaceAll(",","."),this.form.porc_comision_entrega=this.form.porc_comision_entrega.replaceAll(".","").replaceAll(",","."),this.form.porc_comision_seguro=this.form.porc_comision_seguro.replaceAll(".","").replaceAll(",","."),this.form.cod_agencia=this.selectedAgencia.id,this.form.tipo_agente=this.form.tipo_agente.value,this.form.flag_activo=this.form.flag_activo.value,this.form.id?this.$refs.methods.putData(`/agentes/${this.form.id}`,this.form,"getDataTable"):this.$refs.methods.createData("/agentes",this.form,"getDataTable"),this.dialog=!1,this.resetForm()},resetForm(){delete this.form.id,this.form.nb_agente="",this.form.persona_responsable="",this.form.dir_agente="",this.form.tlf_agente="",this.form.email_web="",this.form.tipo_agente="",this.form.fax_agente="",this.form.rif_ci_agente="",this.form.porc_comision_venta="",this.form.flag_activo="",this.form.porc_comision_entrega="",this.form.porc_comision_seguro="",this.form.cod_agencia=null,this.dialog=!1}}};var Z=t(4260),U=t(4379),P=t(6778),Q=t(151),R=t(5589),O=t(8689),N=t(4689),B=t(4554),F=t(2448),H=t(8240),L=t(3414),Y=t(2035),G=t(6023),K=t(6941),J=t(3884),X=t(7011),ee=t(2350),se=t(9367),te=t(677),ae=t(7518),oe=t.n(ae);const le=(0,Z.Z)(T,[["render",q]]),ie=le;oe()(T,"components",{QPage:U.Z,QDialog:P.Z,QCard:Q.Z,QCardSection:R.Z,QForm:O.Z,QInput:N.Z,QIcon:B.Z,QSelect:F.Z,QBtn:H.Z,QItem:L.Z,QItemSection:Y.Z,QTable:G.Z,QInnerLoading:K.Z,QTd:J.Z,QList:X.Z,QItemLabel:ee.Z,QCardActions:se.Z}),oe()(T,"directives",{ClosePopup:te.Z})},6700:(e,s,t)=>{var a={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":8225,"./ar-dz.js":8225,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":8092,"./es-mx.js":8092,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function o(e){var s=l(e);return t(s)}function l(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=l,e.exports=o,o.id=6700}}]);