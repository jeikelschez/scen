(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[6618],{3759:(e,s,t)=>{"use strict";function a(e,s,t,a,i,o){return null}t.d(s,{Z:()=>c});var i=t(589),o=t(5474),r=t(8825);const n={setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.get(e,a).then((e=>{this.$emit(s,e.data,t)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.put(e,s,a).then((e=>{(e.status=200)&&(this.$emit(t),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,s,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.delete(e,t).then((e=>{(e.status=200)&&(this.$emit(s),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,s,t,a={headers:{}}){a.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,o.api.post(e,s,a).then((e=>{(e.status=200)&&this.$emit(t,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var l=t(4260);const d=(0,l.Z)(n,[["render",a]]),c=d},6479:(e,s,t)=>{"use strict";function a(e,s,t,a,i,o){return null}t.d(s,{Z:()=>c});var i=t(8825),o=t(1488),r=t.n(o);const n={name:"rules",setup(){(0,i.Z)()},methods:{isReq(e,s=!1){if(null==e||""==e.trim())return!1!==s?s:"Valor Requerido"},isReqCurrency(e,s=!1){if(null==e||""==e.trim()||"0,00"==e.trim()||"0"==e.trim())return!1!==s?s:"Valor Requerido"},isReqSelect(e,s=!1){if(null==e||e==[]||""==e)return!1!==s?s:"Valor Requerido"},isMax(e,s,t=!1){if(null!==e&&""!==e&&e.length>s)return!1!==t?t:`Maximo ${s} Caracteres`},isMin(e,s,t=!1){if(null!==e&&""!==e&&e.length<s)return!1!==t?t:`Minimo ${s} Caracteres`},checkDate(e,s=!1){if(0==r()(e,"DD/MM/YYYY",!0)._isValid)return!1!==s?s:"Fecha Invalida"},checkHour(e,s=!1){if(0==r()(e,"HH:mm",!0)._isValid)return!1!==s?s:"Hora Invalida"}}};var l=t(4260);const d=(0,l.Z)(n,[["render",a]]),c=d},3235:(e,s,t)=>{"use strict";t.d(s,{Z:()=>m});var a=t(3673);const i={id:"WebViewer",ref:"viewer",style:{width:"600px",height:"600px"}};function o(e,s,t,o,r,n){return(0,a.wg)(),(0,a.iD)("div",i,null,512)}t(812),t(5123);var r=t(1959),n=t(163),l=t.n(n);const d={name:"webViewer",data:function(){return{confirmPrint:!1}},setup(){const e=(0,r.iH)(null);return{viewer:e}},methods:{base64ToBlob(e){const s=window.atob(e),t=s.length,a=new Uint8Array(t);for(let i=0;i<t;++i)a[i]=s.charCodeAt(i);return new Blob([a],{type:"application/pdf"})},async until(e){const s=t=>{e()?t():setTimeout((e=>s(t)),400)};return new Promise(s)},showpdf(e,s,t=!1,a=!0,i){const o="https://scen.rcsexpress.com/webViewer";l()({path:o,licenseKey:"atkUT8UOiniAvAWUG1rN"},this.viewer).then((o=>{o.UI.disableElements(["panToolButton"]),o.UI.disableElements(["textSelectButton"]),o.UI.setHeaderItems((e=>{e.push({type:"actionButton",title:"Descargar",img:"icon-header-download",onClick:()=>{o.downloadPdf()}}),e.push({type:"actionButton",title:"Imprimir",img:"icon-header-print-line",onClick:async()=>{t&&(this.$emit("printPdf"),await this.until((e=>1==this.confirmPrint)),!this.confirmPrint)||o.print()}}),a&&e.push({type:"actionButton",title:"Cerrar",img:"icon-close",onClick:()=>{this.$emit("closePdf")}})})),i?o.UI.loadDocument(this.base64ToBlob(i),{filename:"REPORTE SCEN.pdf"}):o.UI.loadDocument(`https://scen.rcsexpress.com/api/v1/pdfreports/loadPDF/${e}`),o.UI.setLanguage("es"),o.UI.useEmbeddedPrint(!0),setTimeout((()=>{o.UI.setZoomLevel(s||.7)}),1500)}))}}};var c=t(4260);const h=(0,c.Z)(d,[["render",o]]),m=h},750:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>B});var a=t(3673);const i={class:"q-pa-sm justify-center",style:{"margin-top":"10px"}},o={class:"row q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12",style:{"align-self":"center","text-align":"center","margin-top":"-20px"}},r=(0,a._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 movilTitle",style:{"align-self":"center","text-align":"center"}},[(0,a._)("p",{style:{"font-size":"20px"},class:"text-secondary"},[(0,a._)("strong",null,"REPORTES - PAGOS REALIZADOS A PROVEEDORES")])],-1),n={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},l=(0,a.Uk)(" Sin resultados "),d={class:"col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},c=(0,a.Uk)(" Sin resultados "),h={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-6 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},m={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-6 cardMargin selectMobile2",style:{"align-self":"center","text-align":"center"}},u={class:"col-md-1 col-xl-1 col-lg-1 col-xs-12 col-sm-12 selectMobile2"},p=(0,a.Uk)("Resetear Filtros"),g=(0,a.Uk)("Generar"),f={class:"q-pa-md col-md-12 col-xs-12 q-gutter-y-md justify-center",style:{"margin-top":"-30px"}};function j(e,s,t,j,v,y){const w=(0,a.up)("q-item-section"),x=(0,a.up)("q-item"),b=(0,a.up)("q-icon"),k=(0,a.up)("q-select"),D=(0,a.up)("q-date"),_=(0,a.up)("q-popup-proxy"),P=(0,a.up)("q-input"),V=(0,a.up)("q-tooltip"),z=(0,a.up)("q-btn"),Z=(0,a.up)("webViewer"),$=(0,a.up)("q-inner-loading"),q=(0,a.up)("methods"),S=(0,a.up)("rules-vue"),I=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(I,{class:"pagina q-pa-md"},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",o,[r,(0,a._)("div",n,[(0,a.Wm)(k,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:v.agenciasSelected,onFilter:s[0]||(s[0]=(e,s)=>y.filterArray(e,s,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:v.selectedAgencia,"onUpdate:modelValue":s[1]||(s[1]=e=>v.selectedAgencia=e),outlined:"",standout:"",label:"Agencia"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"text-grey"},{default:(0,a.w5)((()=>[l])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(b,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",d,[(0,a.Wm)(k,{rounded:"",dense:"","transition-show":"flip-up","transition-hide":"flip-down",options:v.proveedoresSelected,onFilter:s[2]||(s[2]=(e,s)=>y.filterArray(e,s,"proveedoresSelected","proveedores","nb_proveedor")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_proveedor","option-value":"id",modelValue:v.selectedProveedor,"onUpdate:modelValue":s[3]||(s[3]=e=>v.selectedProveedor=e),outlined:"",standout:"",label:"Proveedor"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"text-grey"},{default:(0,a.w5)((()=>[c])),_:1})])),_:1})])),prepend:(0,a.w5)((()=>[(0,a.Wm)(b,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,a._)("div",h,[(0,a.Wm)(P,{outlined:"",label:"Fecha Desde",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:v.fecha_desde,"onUpdate:modelValue":s[6]||(s[6]=e=>v.fecha_desde=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.w5)((()=>[(0,a.Wm)(b,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{modelValue:v.fecha_desde,"onUpdate:modelValue":[s[4]||(s[4]=e=>v.fecha_desde=e),s[5]||(s[5]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",m,[(0,a.Wm)(P,{outlined:"",label:"Fecha Hasta",hint:"",dense:"",rounded:"",style:{"padding-bottom":"0px"},modelValue:v.fecha_hasta,"onUpdate:modelValue":s[9]||(s[9]=e=>v.fecha_hasta=e),"lazy-rules":"",mask:"##/##/####",rules:[e=>this.$refs.rulesVue.checkDate(e)]},{append:(0,a.w5)((()=>[(0,a.Wm)(b,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{modelValue:v.fecha_hasta,"onUpdate:modelValue":[s[7]||(s[7]=e=>v.fecha_hasta=e),s[8]||(s[8]=e=>this.$refs.qDateProxy.hide())],mask:"DD/MM/YYYY",style:{"padding-bottom":"0px"}},null,8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",u,[(0,a.Wm)(z,{dense:"",color:"primary",round:"",padding:"sm",style:{"margin-right":"15px"},onClick:s[10]||(s[10]=e=>y.resetFilters())},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{size:"25px",name:"filter_alt_off",color:"white"}),(0,a.Wm)(V,{class:"bg-primary",style:{"max-height":"30px"},"transition-show":"scale","transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[p])),_:1})])),_:1}),(0,a.Wm)(z,{dense:"",color:"primary",round:"",padding:"sm",onClick:s[11]||(s[11]=e=>{y.pdfChange(),v.print=1})},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{size:"25px",name:"input",color:"white"}),(0,a.Wm)(V,{class:"bg-primary","transition-show":"scale",style:{"max-height":"30px"},"transition-hide":"scale",color:"primary"},{default:(0,a.w5)((()=>[g])),_:1})])),_:1})])])]),(0,a._)("div",f,[1==v.pdf?((0,a.wg)(),(0,a.j4)(Z,{key:0,ref:"webViewer",style:{width:"1580px",height:"560px","max-width":"1580px"}},null,512)):(0,a.kq)("",!0),(0,a.Wm)($,{showing:j.loading,color:"primary",class:"loading"},null,8,["showing"])]),(0,a.Wm)(q,{ref:"methods",onSetData:y.setData,onSetDataPermisos:y.setDataPermisos},null,8,["onSetData","onSetDataPermisos"]),(0,a.Wm)(S,{ref:"rulesVue"},null,512)])),_:1})}var v=t(1959),y=t(1488),w=t.n(y),x=t(5474),b=t(8825),k=t(589),D=t(3759),_=t(6479),P=t(3235);const V={components:{methods:D.Z,rulesVue:_.Z,webViewer:P.Z},data(){return{pdf:!0,agencias:[],proveedores:[],agenciasSelected:[],selectedAgencia:[],proveedoresSelected:[],selectedProveedor:[],print:"",tipoReporte:"",detalle:"",fecha_desde:w()().format("DD/MM/YYYY"),fecha_hasta:w()().format("DD/MM/YYYY")}},setup(){(0,b.Z)();return{loading:(0,v.iH)(!1),pdfView:(0,v.iH)(!1)}},mounted(){this.pdfPrint(),this.$emit("changeTitle","SCEN - Reportes - Pagos Realizados a Proveedores",""),this.$refs.methods.getData("/agencias","setData","agencias"),this.$refs.methods.getData("/proveedores","setData","proveedores",{headers:{activo:"S"}}),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:k.Z.getItem("tokenTraducido").usuario.roles.id,menu:"pagosproveedores"}})},methods:{filterArray(e,s,t,a,i){s(""!==e?()=>{const s=e.toUpperCase();for(var o=[],r=0;r<=this[a].length-1;r++)if(this[a][r][i].indexOf(s)>-1&&o.push(this[a][r]),r==this[a].length-1){this[t]=o;break}}:()=>{this[t]=this[a]})},findIndex(e,s,t){var a=this[e].findIndex((e=>e.id==s));return a>=0?this[e][a][t]:null},setDataPermisos(e,s){this[s]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setData(e,s){this[s]=e.data?e.data:e},async pdfChange(){this.loading=!0,this.pdf=!1,setTimeout((()=>{this.pdfPrint(),this.pdf=!0}),100)},pdfPrint(){x.api.get("/pdfreports/pagosProv",{headers:{Authorization:`Bearer ${k.Z.getItem("token")}`,print:this.print,agencia:this.selectedAgencia.id?this.selectedAgencia.id:"",proveedor:this.selectedProveedor.id?this.selectedProveedor.id:"",desde:this.fecha_desde,hasta:this.fecha_hasta}}).then((e=>{e.data.validDoc||(this.$q.notify({message:"No existen registros para este conjunto de Filtos",color:"red"}),this.print=""),this.$refs.webViewer.showpdf(e.data.pdfPath,""==this.print?.64:1.5,!1,!1),this.loading=!1})).catch((e=>{this.$q.notify({message:e.message,color:"red"}),this.pdfView=!1,this.loading=!1}))},resetFilters(){this.selectedAgencia=[],this.selectedProveedor=[],this.fecha_desde=w()().format("DD/MM/YYYY"),this.fecha_hasta=w()().format("DD/MM/YYYY"),this.detalle="",this.print="",this.pdfChange()}}};var z=t(4260),Z=t(4379),$=t(2448),q=t(3414),S=t(2035),I=t(4554),M=t(4689),Y=t(3944),W=t(5626),A=t(8240),C=t(5363),U=t(6941),E=t(7518),R=t.n(E);const T=(0,z.Z)(V,[["render",j]]),B=T;R()(V,"components",{QPage:Z.Z,QSelect:$.Z,QItem:q.Z,QItemSection:S.Z,QIcon:I.Z,QInput:M.Z,QPopupProxy:Y.Z,QDate:W.Z,QBtn:A.Z,QTooltip:C.Z,QInnerLoading:U.Z})},6700:(e,s,t)=>{var a={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":8225,"./ar-dz.js":8225,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":2722,"./cs.js":2722,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":8092,"./es-mx.js":8092,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":7593,"./zh-mo.js":7593,"./zh-tw":4746,"./zh-tw.js":4746};function i(e){var s=o(e);return t(s)}function o(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=6700}}]);