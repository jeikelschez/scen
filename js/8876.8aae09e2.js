(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[8876],{93899:(e,s,t)=>{"use strict";function a(e,s,t,a,o,l){return null}t.d(s,{A:()=>c});var o=t(45022),l=t(80660),r=t(14907);const i={setup(){const e=(0,r.A)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,l.api.get(e,a).then((e=>{this.$emit(s,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,l.api.post(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,l.api.put(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,s,t={headers:{}}){t.headers.Authorization=`Bearer ${o.A.getItem("token")}`,l.api.delete(e,t).then((e=>{(e.status=200)&&(this.$emit(s),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.A.getItem("token")}`,l.api.post(e,s,a).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=t(12807);const d=(0,n.A)(i,[["render",a]]),c=d},99565:(e,s,t)=>{"use strict";function a(e,s,t,a,o,l){return null}t.d(s,{A:()=>c});var o=t(14907),l=t(85038),r=t.n(l);const i={name:"rules",setup(){(0,o.A)()},methods:{isReq(e,s=!1){if(null==e||""==e.trim())return!1!==s?s:"Valor Requerido"},isReqCurrency(e,s=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==s?s:"Valor Requerido"},isReqCurrencyWithZero(e,s=!1){if(null==e||""==e.trim())return!1!==s?s:"Valor Requerido"},isReqSelect(e,s=!1){if(null==e||e==[]||""==e)return!1!==s?s:"Valor Requerido"},isMax(e,s,t=!1){if(null!==e&&""!==e&&e.length>s)return!1!==t?t:`Maximo ${s} Caracteres`},isMin(e,s,t=!1){if(null!==e&&""!==e&&e.length<s)return!1!==t?t:`Minimo ${s} Caracteres`},checkDate(e,s=!1){if(0==r()(e,"DD/MM/YYYY",!0)._isValid)return!1!==s?s:"Fecha Invalida"},checkHour(e,s=!1){if(0==r()(e,"HH:mm",!0)._isValid)return!1!==s?s:"Hora Invalida"}}};var n=t(12807);const d=(0,n.A)(i,[["render",a]]),c=d},43415:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>H});var a=t(61758),o=t(58790);const l={class:"row"},r={class:"col-md-6 col-xs-12"},i={class:"col-md-6 col-xs-12"},n={class:"col-md-3 col-xs-12",style:{"margin-bottom":"15px"}},d={class:"col-md-3 col-xs-12"},c={class:"col-md-3 col-xs-12"},m={class:"col-md-3 col-xs-12"},u={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},p={class:"q-pa-sm justify-center"},h={class:"q-pa-md row justify-end"},f=(0,a.Lk)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a.Lk)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a.Lk)("strong",null,"MANTENIMIENTO - EMPLEADOS")])],-1),j={class:"col-md-5 col-sm-7 col-xs-12 cardMargin selectMobile",style:{"align-self":"center","text-align":"center"}},b={class:"col-md-2 col-sm-4 col-xs-12",style:{"text-align":"center","align-self":"center"}},g={class:"q-pa-md q-gutter-y-md"},k=(0,a.Lk)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function y(e,s,t,y,v,x){const _=(0,a.g2)("q-icon"),D=(0,a.g2)("q-input"),A=(0,a.g2)("q-checkbox"),V=(0,a.g2)("q-btn"),F=(0,a.g2)("q-form"),q=(0,a.g2)("q-card-section"),$=(0,a.g2)("q-card"),C=(0,a.g2)("q-dialog"),z=(0,a.g2)("q-inner-loading"),E=(0,a.g2)("q-td"),w=(0,a.g2)("q-item-label"),L=(0,a.g2)("q-item-section"),I=(0,a.g2)("q-item"),M=(0,a.g2)("q-list"),R=(0,a.g2)("q-table"),T=(0,a.g2)("q-card-actions"),S=(0,a.g2)("methods"),Q=(0,a.g2)("rules-vue"),P=(0,a.g2)("q-page"),U=(0,a.gN)("money"),N=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.Wv)(P,{class:"pagina q-pa-md"},{default:(0,a.k6)((()=>[(0,a.bF)(C,{modelValue:y.dialog,"onUpdate:modelValue":s[8]||(s[8]=e=>y.dialog=e)},{default:(0,a.k6)((()=>[(0,a.bF)($,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,a.k6)((()=>[(0,a.bF)(q,null,{default:(0,a.k6)((()=>[(0,a.bF)(F,{onSubmit:x.sendData,class:"q-gutter-md"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",l,[(0,a.Lk)("div",r,[(0,a.bF)(D,{outlined:"",modelValue:v.form.nombre,"onUpdate:modelValue":[s[0]||(s[0]=e=>v.form.nombre=e),s[1]||(s[1]=e=>v.form.nombre=v.form.nombre.toUpperCase())],label:"Nombre de Empleado",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,30),e=>this.$refs.rulesVue.isMin(e,3)],hint:"",class:"pcform","lazy-rules":""},{prepend:(0,a.k6)((()=>[(0,a.bF)(_,{name:"person"})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",i,[(0,a.bF)(D,{outlined:"",modelValue:v.form.rif_empleado,"onUpdate:modelValue":s[2]||(s[2]=e=>v.form.rif_empleado=e),label:"RIF de Empleado",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,10),e=>this.$refs.rulesVue.isMin(e,3)],hint:"","lazy-rules":"",mask:"##########"},{prepend:(0,a.k6)((()=>[(0,a.bF)(_,{name:"fact_check"})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",n,[(0,a.bF)(A,{size:"lg",modelValue:v.form.aplica_retencion,"onUpdate:modelValue":s[3]||(s[3]=e=>v.form.aplica_retencion=e),"true-value":"1","false-value":"0",style:{"font-size":"13px"},label:"¿APLICA RETENCIÓN?"},null,8,["modelValue"])]),(0,a.Lk)("div",d,[(0,a.bo)(((0,a.uX)(),(0,a.Wv)(D,{outlined:"",modelValue:v.form.porcentaje_retencion,"onUpdate:modelValue":s[4]||(s[4]=e=>v.form.porcentaje_retencion=e),label:"% Retención",class:"pcform","input-class":"text-right",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,6),e=>this.$refs.rulesVue.isMin(e,3)],hint:"","lazy-rules":""},{prepend:(0,a.k6)((()=>[(0,a.bF)(_,{name:"percent"})])),_:1},8,["modelValue","rules"])),[[U,v.money]])]),(0,a.Lk)("div",c,[(0,a.bF)(D,{outlined:"",modelValue:v.form.periodo,"onUpdate:modelValue":[s[5]||(s[5]=e=>v.form.periodo=e),s[6]||(s[6]=e=>v.form.periodo=v.form.periodo.toUpperCase())],label:"Período",class:"pcform",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,6)],hint:"","lazy-rules":""},{prepend:(0,a.k6)((()=>[(0,a.bF)(_,{name:"calendar_today"})])),_:1},8,["modelValue","rules"])]),(0,a.Lk)("div",m,[(0,a.bo)(((0,a.uX)(),(0,a.Wv)(D,{outlined:"",modelValue:v.form.sueldo,"onUpdate:modelValue":s[7]||(s[7]=e=>v.form.sueldo=e),label:"Sueldo",rules:[e=>this.$refs.rulesVue.isMax(e,13)],hint:"","input-class":"text-right","lazy-rules":""},{prepend:(0,a.k6)((()=>[(0,a.bF)(_,{name:"paid"})])),_:1},8,["modelValue","rules"])),[[U,v.money]])])]),(0,a.Lk)("div",u,[(0,a.bF)(V,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.bo)((0,a.bF)(V,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[N]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Lk)("div",p,[(0,a.Lk)("div",h,[f,(0,a.Lk)("div",j,[(0,a.bF)(D,{modelValue:v.filter,"onUpdate:modelValue":s[9]||(s[9]=e=>v.filter=e),rounded:"",dense:"",outlined:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,a.k6)((()=>[(0,a.bF)(_,{name:"search"})])),_:1},8,["modelValue"])]),(0,a.Lk)("div",b,[(0,a.bF)(V,{label:"Insertar",rounded:"",color:"primary",onClick:s[10]||(s[10]=e=>y.dialog=!0),disabled:this.allowOption(2),class:"q-px-xl q-py-xs"},null,8,["disabled"])])]),(0,a.Lk)("div",g,[(0,a.bF)(R,{rows:v.empleados,"binary-state-sort":"","row-key":"id",loading:y.loading,columns:v.columns,separator:y.separator,"rows-per-page-options":[5,10,15,20,50],filter:v.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:v.pagination,"onUpdate:pagination":s[13]||(s[13]=e=>v.pagination=e)},{loading:(0,a.k6)((()=>[(0,a.bF)(z,{showing:"",color:"primary",class:"loading"})])),"body-cell-action":(0,a.k6)((e=>[(0,a.bF)(E,{props:e},{default:(0,a.k6)((()=>[(0,a.bF)(V,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:s=>{this.$refs.methods.getData(`/empleados/${e.row.id}`,"setDataEdit","form"),y.dialog=!0}},null,8,["disabled","onClick"]),(0,a.bF)(V,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:s=>v.selected=e.row.id,onClickCapture:s[11]||(s[11]=e=>y.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.k6)((e=>[(0,a.Lk)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.Tr)(e.selected?"transform: scale(0.95);":"")},[(0,a.bF)($,{class:(0,o.C4)(e.selected?"bg-grey-2":"")},{default:(0,a.k6)((()=>[(0,a.bF)(M,{dense:""},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.cols,(t=>((0,a.uX)(),(0,a.Wv)(I,{key:t.name},{default:(0,a.k6)((()=>[(0,a.bF)(L,null,{default:(0,a.k6)((()=>[(0,a.bF)(w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(t.label),1)])),_:2},1024)])),_:2},1024),(0,a.bF)(L,{side:"",class:"itemMovilSide"},{default:(0,a.k6)((()=>["action"===t.name?((0,a.uX)(),(0,a.Wv)(V,{key:0,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:s=>{this.$refs.methods.getData(`/empleados/${e.row.id}`,"setDataEdit","form"),y.dialog=!0}},null,8,["disabled","onClick"])):(0,a.Q3)("",!0),"action"===t.name?((0,a.uX)(),(0,a.Wv)(V,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:s=>v.selected=e.row.id,onClickCapture:s[12]||(s[12]=e=>y.deletePopup=!0)},null,8,["disabled","onClick"])):(0,a.Q3)("",!0),(0,a.bF)(w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,o.v_)(t.value),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","filter","grid","pagination"])])]),(0,a.bF)(C,{modelValue:y.deletePopup,"onUpdate:modelValue":s[15]||(s[15]=e=>y.deletePopup=e)},{default:(0,a.k6)((()=>[(0,a.bF)($,{style:{width:"700px"}},{default:(0,a.k6)((()=>[(0,a.bF)(q,null,{default:(0,a.k6)((()=>[k])),_:1}),(0,a.bF)(T,{align:"right"},{default:(0,a.k6)((()=>[(0,a.bo)((0,a.bF)(V,{flat:"",label:"Cancelar",color:"primary"},null,512),[[N]]),(0,a.bo)((0,a.bF)(V,{flat:"",label:"Aceptar",color:"primary",onClick:s[14]||(s[14]=e=>this.$refs.methods.deleteData(`/empleados/${v.selected}`,"getData"))},null,512),[[N]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.bF)(S,{ref:"methods",onSetDataEdit:x.setDataEdit,onGetDataTable:x.getDataTable,onSetDataTable:x.setDataTable,onSetDataPermisos:x.setDataPermisos},null,8,["onSetDataEdit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,a.bF)(Q,{ref:"rulesVue"},null,512)])),_:1})}t(10239);var v=t(38734),x=t(45022),_=t(32939),D=t(93899),A=t(99565);const V={directives:{money:_.VMoney},components:{methods:D.A,VMoney:_.VMoney,rulesVue:A.A},name:"Empleados",data(){return{money:{decimal:",",thousands:".",prefix:"",suffix:"",precision:2,masked:!0},columns:[{name:"nombre",label:"Nombre del Empleado",field:"nombre",align:"left",sortable:!0},{name:"sueldo",label:"Sueldo",field:"sueldo",align:"right",sortable:!0,format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"porcentaje_retencion",label:"Porcentaje Retención",field:"porcentaje_retencion",align:"right",sortable:!0,format:e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",currencyDisplay:"code"}).format(e).replace("EUR","").trim()},{name:"action",label:"Acciones",align:"center"}],form:{rif_empleado:"",nombre:"",aplica_retencion:"0",porcentaje_retencion:"",periodo:"",sueldo:""},pagination:{rowsPerPage:10},empleados:[],selected:[],rpermisos:[],filter:""}},setup(){return{loading:(0,v.KR)(!1),separator:(0,v.KR)("vertical"),dialog:(0,v.KR)(!1),deletePopup:(0,v.KR)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Empleados",""),this.getDataTable(),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:x.A.getItem("tokenTraducido").usuario.roles.id,menu:"empleados"}})},methods:{allowOption(e){return this.rpermisos.findIndex((s=>s.acciones.accion==e))<0},setDataPermisos(e,s){this[s]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},getDataTable(){this.loading=!0,this.$refs.methods.getData("/empleados","setDataTable","empleados")},setDataTable(e,s){this[s]=e.data?e.data:e,this.loading=!1},setDataEdit(e,s){this[s].id=e.id,this[s].nombre=e.nombre,this[s].rif_empleado=e.rif_empleado,this[s].aplica_retencion=e.aplica_retencion,this[s].periodo=e.periodo,this[s].porcentaje_retencion=e.porcentaje_retencion,this[s].sueldo=e.sueldo},sendData(){this.form.porcentaje_retencion=this.form.porcentaje_retencion.replaceAll(".","").replaceAll(",","."),this.form.sueldo=this.form.sueldo.replaceAll(".","").replaceAll(",","."),this.form.id?this.$refs.methods.putData(`/empleados/${this.form.id}`,this.form,"getDataTable"):this.$refs.methods.createData("/empleados",this.form,"getDataTable"),this.dialog=!1,this.resetForm()},resetForm(){delete this.form.id,this.form.rif_empleado="",this.form.nombre="",this.form.aplica_retencion="0",this.form.porcentaje_retencion="",this.form.periodo="",this.form.sueldo=""}}};var F=t(12807),q=t(77716),$=t(82156),C=t(23316),z=t(44189),E=t(49200),w=t(67837),L=t(50492),I=t(80460),M=t(56384),R=t(84191),T=t(39035),S=t(45262),Q=t(53999),P=t(90124),U=t(25173),N=t(13796),O=t(62669),W=t(88672),B=t(98582),X=t.n(B);const K=(0,F.A)(V,[["render",y]]),H=K;X()(V,"components",{QPage:q.A,QDialog:$.A,QCard:C.A,QCardSection:z.A,QForm:E.A,QInput:w.A,QIcon:L.A,QCheckbox:I.A,QBtn:M.A,QTable:R.A,QInnerLoading:T.A,QTd:S.A,QList:Q.A,QItem:P.A,QItemSection:U.A,QItemLabel:N.A,QCardActions:O.A}),X()(V,"directives",{ClosePopup:W.A})},35358:(e,s,t)=>{var a={"./af":78188,"./af.js":78188,"./ar":50096,"./ar-dz":28495,"./ar-dz.js":28495,"./ar-kw":85891,"./ar-kw.js":85891,"./ar-ly":13194,"./ar-ly.js":13194,"./ar-ma":42195,"./ar-ma.js":42195,"./ar-ps":17084,"./ar-ps.js":17084,"./ar-sa":29393,"./ar-sa.js":29393,"./ar-tn":21867,"./ar-tn.js":21867,"./ar.js":50096,"./az":43224,"./az.js":43224,"./be":61330,"./be.js":61330,"./bg":85096,"./bg.js":85096,"./bm":28746,"./bm.js":28746,"./bn":29303,"./bn-bd":56554,"./bn-bd.js":56554,"./bn.js":29303,"./bo":30528,"./bo.js":30528,"./br":35499,"./br.js":35499,"./bs":29828,"./bs.js":29828,"./ca":35855,"./ca.js":35855,"./cs":68481,"./cs.js":68481,"./cv":1694,"./cv.js":1694,"./cy":98903,"./cy.js":98903,"./da":95908,"./da.js":95908,"./de":85528,"./de-at":21732,"./de-at.js":21732,"./de-ch":54146,"./de-ch.js":54146,"./de.js":85528,"./dv":81313,"./dv.js":81313,"./el":20138,"./el.js":20138,"./en-au":78067,"./en-au.js":78067,"./en-ca":82545,"./en-ca.js":82545,"./en-gb":50124,"./en-gb.js":50124,"./en-ie":6107,"./en-ie.js":6107,"./en-il":13196,"./en-il.js":13196,"./en-in":1654,"./en-in.js":1654,"./en-nz":79557,"./en-nz.js":79557,"./en-sg":35451,"./en-sg.js":35451,"./eo":21591,"./eo.js":21591,"./es":36843,"./es-do":61009,"./es-do.js":61009,"./es-mx":75169,"./es-mx.js":75169,"./es-us":37224,"./es-us.js":37224,"./es.js":36843,"./et":77058,"./et.js":77058,"./eu":61297,"./eu.js":61297,"./fa":46658,"./fa.js":46658,"./fi":75674,"./fi.js":75674,"./fil":45204,"./fil.js":45204,"./fo":74428,"./fo.js":74428,"./fr":80703,"./fr-ca":27812,"./fr-ca.js":27812,"./fr-ch":9411,"./fr-ch.js":9411,"./fr.js":80703,"./fy":89738,"./fy.js":89738,"./ga":21235,"./ga.js":21235,"./gd":96032,"./gd.js":96032,"./gl":16424,"./gl.js":16424,"./gom-deva":53793,"./gom-deva.js":53793,"./gom-latn":14714,"./gom-latn.js":14714,"./gu":33383,"./gu.js":33383,"./he":46660,"./he.js":46660,"./hi":37264,"./hi.js":37264,"./hr":63201,"./hr.js":63201,"./hu":35604,"./hu.js":35604,"./hy-am":61067,"./hy-am.js":61067,"./id":19262,"./id.js":19262,"./is":53423,"./is.js":53423,"./it":73038,"./it-ch":23512,"./it-ch.js":23512,"./it.js":73038,"./ja":87558,"./ja.js":87558,"./jv":86071,"./jv.js":86071,"./ka":95927,"./ka.js":95927,"./kk":62625,"./kk.js":62625,"./km":25499,"./km.js":25499,"./kn":79486,"./kn.js":79486,"./ko":89405,"./ko.js":89405,"./ku":77155,"./ku-kmr":92516,"./ku-kmr.js":92516,"./ku.js":77155,"./ky":13647,"./ky.js":13647,"./lb":42837,"./lb.js":42837,"./lo":91474,"./lo.js":91474,"./lt":96967,"./lt.js":96967,"./lv":48297,"./lv.js":48297,"./me":1545,"./me.js":1545,"./mi":2573,"./mi.js":2573,"./mk":77259,"./mk.js":77259,"./ml":33826,"./ml.js":33826,"./mn":45368,"./mn.js":45368,"./mr":30860,"./mr.js":30860,"./ms":96947,"./ms-my":99418,"./ms-my.js":99418,"./ms.js":96947,"./mt":76906,"./mt.js":76906,"./my":71837,"./my.js":71837,"./nb":24503,"./nb.js":24503,"./ne":31286,"./ne.js":31286,"./nl":17981,"./nl-be":58103,"./nl-be.js":58103,"./nl.js":17981,"./nn":19387,"./nn.js":19387,"./oc-lnc":30803,"./oc-lnc.js":30803,"./pa-in":66742,"./pa-in.js":66742,"./pl":30075,"./pl.js":30075,"./pt":81731,"./pt-br":23352,"./pt-br.js":23352,"./pt.js":81731,"./ro":21776,"./ro.js":21776,"./ru":5746,"./ru.js":5746,"./sd":74100,"./sd.js":74100,"./se":38395,"./se.js":38395,"./si":8823,"./si.js":8823,"./sk":39385,"./sk.js":39385,"./sl":3852,"./sl.js":3852,"./sq":3247,"./sq.js":3247,"./sr":64290,"./sr-cyrl":26189,"./sr-cyrl.js":26189,"./sr.js":64290,"./ss":32177,"./ss.js":32177,"./sv":49038,"./sv.js":49038,"./sw":9741,"./sw.js":9741,"./ta":86932,"./ta.js":86932,"./te":95784,"./te.js":95784,"./tet":13334,"./tet.js":13334,"./tg":23602,"./tg.js":23602,"./th":16947,"./th.js":16947,"./tk":46774,"./tk.js":46774,"./tl-ph":5868,"./tl-ph.js":5868,"./tlh":16695,"./tlh.js":16695,"./tr":22573,"./tr.js":22573,"./tzl":84509,"./tzl.js":84509,"./tzm":17118,"./tzm-latn":87078,"./tzm-latn.js":87078,"./tzm.js":17118,"./ug-cn":82617,"./ug-cn.js":82617,"./uk":56131,"./uk.js":56131,"./ur":56532,"./ur.js":56532,"./uz":69932,"./uz-latn":27220,"./uz-latn.js":27220,"./uz.js":69932,"./vi":20490,"./vi.js":20490,"./x-pseudo":32154,"./x-pseudo.js":32154,"./yo":49955,"./yo.js":49955,"./zh-cn":68355,"./zh-cn.js":68355,"./zh-hk":89547,"./zh-hk.js":89547,"./zh-mo":70374,"./zh-mo.js":70374,"./zh-tw":979,"./zh-tw.js":979};function o(e){var s=l(e);return t(s)}function l(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=l,e.exports=o,o.id=35358}}]);