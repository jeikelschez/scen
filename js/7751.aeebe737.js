(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[7751],{3759:(e,s,t)=>{"use strict";function a(e,s,t,a,o,r){return null}t.d(s,{Z:()=>c});var o=t(589),r=t(5474),l=t(8825);const i={setup(){const e=(0,l.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,r.api.get(e,a).then((e=>{this.$emit(s,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,r.api.post(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,r.api.put(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,s,t={headers:{}}){t.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,r.api.delete(e,t).then((e=>{(e.status=200)&&(this.$emit(s),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${o.Z.getItem("token")}`,r.api.post(e,s,a).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=t(4260);const d=(0,n.Z)(i,[["render",a]]),c=d},6479:(e,s,t)=>{"use strict";function a(e,s,t,a,o,r){return null}t.d(s,{Z:()=>c});var o=t(8825),r=t(1488),l=t.n(r);const i={name:"rules",setup(){(0,o.Z)()},methods:{isReq(e,s=!1){if(null==e||""==e.trim())return!1!==s?s:"Valor Requerido"},isReqCurrency(e,s=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==s?s:"Valor Requerido"},isReqSelect(e,s=!1){if(null==e||e==[]||""==e)return!1!==s?s:"Valor Requerido"},isMax(e,s,t=!1){if(null!==e&&""!==e&&e.length>s)return!1!==t?t:`Maximo ${s} Caracteres`},isMin(e,s,t=!1){if(null!==e&&""!==e&&e.length<s)return!1!==t?t:`Minimo ${s} Caracteres`},checkDate(e,s=!1){if(0==l()(e,"DD/MM/YYYY",!0)._isValid)return!1!==s?s:"Fecha Invalida"},checkHour(e,s=!1){if(0==l()(e,"HH:mm",!0)._isValid)return!1!==s?s:"Hora Invalida"}}};var n=t(4260);const d=(0,n.Z)(i,[["render",a]]),c=d},3642:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>H});var a=t(3673),o=t(2323);const r={class:"row"},l={class:"col-md-6 col-xs-12"},i={class:"col-md-6 col-xs-12"},n={class:"col-md-12 col-xs-12"},d={class:"row justify-center items-center content-center",style:{"margin-bottom":"10px"}},c={class:"q-pa-sm justify-center"},m={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},u=(0,a._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a._)("strong",null,"MANTENIMIENTO - UNIDADES DE TRANSPORTE")])],-1),p={class:"col-md-5 col-sm-7 col-xs-12 cardMargin selectMobile",style:{"align-self":"center"}},h={class:"col-md-2 col-sm-3 col-xs-12",style:{"text-align":"center","align-self":"center"}},j={class:"q-pa-md q-gutter-y-md"},f=(0,a._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function g(e,s,t,g,b,w){const y=(0,a.up)("q-icon"),k=(0,a.up)("q-input"),v=(0,a.up)("q-btn"),D=(0,a.up)("q-form"),x=(0,a.up)("q-card-section"),_=(0,a.up)("q-card"),q=(0,a.up)("q-dialog"),C=(0,a.up)("q-inner-loading"),$=(0,a.up)("q-td"),z=(0,a.up)("q-item-label"),V=(0,a.up)("q-item-section"),W=(0,a.up)("q-item"),Z=(0,a.up)("q-list"),T=(0,a.up)("q-table"),E=(0,a.up)("q-card-actions"),S=(0,a.up)("methods"),I=(0,a.up)("rules-vue"),M=(0,a.up)("q-page"),P=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(M,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{modelValue:g.dialog,"onUpdate:modelValue":s[6]||(s[6]=e=>g.dialog=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,a.w5)((()=>[(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,{onSubmit:w.sendData,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a._)("div",l,[(0,a.Wm)(k,{outlined:"",modelValue:b.form.placas,"onUpdate:modelValue":[s[0]||(s[0]=e=>b.form.placas=e),s[1]||(s[1]=e=>b.form.placas=b.form.placas.toUpperCase())],label:"Placa Vehículo",class:"pcform",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,10),e=>this.$refs.rulesVue.isMin(e,3)],hint:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(y,{name:"recent_actors"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",i,[(0,a.Wm)(k,{outlined:"",modelValue:b.form.chofer,"onUpdate:modelValue":[s[2]||(s[2]=e=>b.form.chofer=e),s[3]||(s[3]=e=>b.form.chofer=b.form.chofer.toUpperCase())],label:"Chofer",rules:[e=>this.$refs.rulesVue.isMax(e,30),e=>this.$refs.rulesVue.isMin(e,3)],hint:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(y,{name:"face"})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",n,[(0,a.Wm)(k,{outlined:"",modelValue:b.form.descripcion,"onUpdate:modelValue":[s[4]||(s[4]=e=>b.form.descripcion=e),s[5]||(s[5]=e=>b.form.descripcion=b.form.descripcion.toUpperCase())],label:"Descripción",rules:[e=>this.$refs.rulesVue.isReq(e),e=>this.$refs.rulesVue.isMax(e,100),e=>this.$refs.rulesVue.isMin(e)],hint:"","lazy-rules":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(y,{name:"description"})])),_:1},8,["modelValue","rules"])])]),(0,a._)("div",d,[(0,a.Wm)(v,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,a.wy)((0,a.Wm)(v,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[P]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",c,[(0,a._)("div",m,[u,(0,a._)("div",p,[(0,a.Wm)(k,{modelValue:b.filter,"onUpdate:modelValue":s[7]||(s[7]=e=>b.filter=e),rounded:"",outlined:"",dense:"",standout:"",type:"search",label:"Búsqueda avanzada"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(y,{name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",h,[(0,a.Wm)(v,{label:"Insertar",rounded:"",color:"primary",onClick:s[8]||(s[8]=e=>g.dialog=!0),onClickCapture:s[9]||(s[9]=e=>w.resetForm()),disabled:this.allowOption(2),class:"q-px-xl q-py-xs"},null,8,["disabled"])])]),(0,a._)("div",j,[(0,a.Wm)(T,{rows:b.unidades,"binary-state-sort":"","row-key":"id",columns:b.columns,loading:g.loading,separator:g.separator,"rows-per-page-options":[5,10,15,20,50],filter:b.filter,style:{width:"100%"},grid:e.$q.screen.xs,pagination:b.pagination,"onUpdate:pagination":s[12]||(s[12]=e=>b.pagination=e)},{loading:(0,a.w5)((()=>[(0,a.Wm)(C,{showing:"",color:"primary",class:"loading"})])),"body-cell-action":(0,a.w5)((e=>[(0,a.Wm)($,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:s=>{this.$refs.methods.getData(`/unidades/${e.row.id}`,"setDataEdit","form"),g.dialog=!0}},null,8,["disabled","onClick"]),(0,a.Wm)(v,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:s=>b.selected=e.row.id,onClickCapture:s[10]||(s[10]=e=>g.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,o.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(_,{class:(0,o.C_)(e.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(t=>((0,a.wg)(),(0,a.j4)(W,{key:t.name},{default:(0,a.w5)((()=>[(0,a.Wm)(V,null,{default:(0,a.w5)((()=>[(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(V,{side:"",class:"itemMovilSide"},{default:(0,a.w5)((()=>["action"===t.name?((0,a.wg)(),(0,a.j4)(v,{key:0,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClick:s=>{this.$refs.methods.getData(`/unidades/${e.row.id}`,"setDataEdit","form"),g.dialog=!0}},null,8,["disabled","onClick"])):(0,a.kq)("",!0),"action"===t.name?((0,a.wg)(),(0,a.j4)(v,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:s=>b.selected=e.row.id,onClickCapture:s[11]||(s[11]=e=>g.deletePopup=!0)},null,8,["disabled","onClick"])):(0,a.kq)("",!0),(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.value),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","filter","grid","pagination"])])]),(0,a.Wm)(q,{modelValue:g.deletePopup,"onUpdate:modelValue":s[14]||(s[14]=e=>g.deletePopup=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{style:{width:"700px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[f])),_:1}),(0,a.Wm)(E,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(v,{flat:"",label:"Cancelar",color:"primary"},null,512),[[P]]),(0,a.wy)((0,a.Wm)(v,{flat:"",label:"Aceptar",color:"primary",onClick:s[13]||(s[13]=e=>this.$refs.methods.deleteData(`/unidades/${b.selected}`,"getDataTable"))},null,512),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(S,{ref:"methods",onSetDataEdit:w.setDataEdit,onGetDataTable:w.getDataTable,onSetDataTable:w.setDataTable,onSetDataPermisos:w.setDataPermisos},null,8,["onSetDataEdit","onGetDataTable","onSetDataTable","onSetDataPermisos"]),(0,a.Wm)(I,{ref:"rulesVue"},null,512)])),_:1})}var b=t(1959),w=t(589),y=t(3759),k=t(6479);const v={components:{methods:y.Z,rulesVue:k.Z},data(){return{columns:[{name:"placas",label:"Numero de Placa",field:"placas",align:"left",sortable:!0},{name:"chofer",label:"Chofer",field:"chofer",align:"left",sortable:!0},{name:"descripcion",label:"Descripcion de Unidad",field:"descripcion",align:"left",sortable:!0},{name:"action",label:"Acciones",align:"center"}],form:{id:"",placas:"",chofer:"",descripcion:""},pagination:{rowsPerPage:10},unidades:[],selected:[],rpermisos:[],filter:""}},setup(){return{loading:(0,b.iH)(!1),separator:(0,b.iH)("vertical"),dialog:(0,b.iH)(!1),deletePopup:(0,b.iH)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Unidades de Transporte",""),this.getDataTable(),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:w.Z.getItem("tokenTraducido").usuario.roles.id,menu:"unidadestransporte"}})},methods:{allowOption(e){return this.rpermisos.findIndex((s=>s.acciones.accion==e))<0},setDataPermisos(e,s){this[s]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},getDataTable(){this.loading=!0,this.$refs.methods.getData("/unidades","setDataTable","unidades")},setDataTable(e,s){this[s]=e.data?e.data:e,this.loading=!1},setDataEdit(e,s){this[s].id=e.id,this[s].descripcion=e.descripcion,this[s].placas=e.placas,this[s].chofer=e.chofer},sendData(){this.form.id?this.$refs.methods.putData(`/unidades/${this.form.id}`,this.form,"getDataTable"):this.$refs.methods.createData("/unidades",this.form,"getDataTable"),this.dialog=!1,this.resetForm()},resetForm(){delete this.form.id,this.form.chofer="",this.form.descripcion="",this.form.placas="",this.create=!1}}};var D=t(4260),x=t(4379),_=t(6778),q=t(151),C=t(5589),$=t(8689),z=t(4689),V=t(4554),W=t(8240),Z=t(6023),T=t(6941),E=t(3884),S=t(7011),I=t(3414),M=t(2035),P=t(2350),Q=t(9367),U=t(677),A=t(7518),O=t.n(A);const R=(0,D.Z)(v,[["render",g]]),H=R;O()(v,"components",{QPage:x.Z,QDialog:_.Z,QCard:q.Z,QCardSection:C.Z,QForm:$.Z,QInput:z.Z,QIcon:V.Z,QBtn:W.Z,QTable:Z.Z,QInnerLoading:T.Z,QTd:E.Z,QList:S.Z,QItem:I.Z,QItemSection:M.Z,QItemLabel:P.Z,QCardActions:Q.Z}),O()(v,"directives",{ClosePopup:U.Z})},6700:(e,s,t)=>{var a={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":8225,"./ar-dz.js":8225,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":8092,"./es-mx.js":8092,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function o(e){var s=r(e);return t(s)}function r(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=6700}}]);