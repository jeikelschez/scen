(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[3923],{23759:(e,a,s)=>{"use strict";function t(e,a,s,t,i,l){return null}s.d(a,{Z:()=>c});var i=s(80589),l=s(5474),o=s(48825);const n={setup(){const e=(0,o.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,a,s,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,l.api.get(e,t).then((e=>{this.$emit(a,e.data,s)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,a,s,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,l.api.post(e,a,t).then((e=>{(e.status=200)&&(this.$emit(s),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},putData:function(e,a,s,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,l.api.put(e,a,t).then((e=>{(e.status=200)&&(this.$emit(s),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},deleteData:function(e,a,s={headers:{}}){s.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,l.api["delete"](e,s).then((e=>{(e.status=200)&&(this.$emit(a),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,a,s,t={headers:{}}){t.headers.Authorization=`Bearer ${i.Z.getItem("token")}`,l.api.post(e,a,t).then((e=>{(e.status=200)&&this.$emit(s,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var r=s(74260);const d=(0,r.Z)(n,[["render",t]]),c=d},28382:(e,a,s)=>{"use strict";function t(e,a,s,t,i,l){return null}s.d(a,{Z:()=>c});s(65363);var i=s(48825),l=s(11488),o=s.n(l);const n={name:"rules",setup(){(0,i.Z)()},methods:{isReq(e,a){var s=!0;return null!=e&&""!=e.trim()||(s="Valor Requerido"),s},isReqSelect(e,a){var s=!0;return null!=e&&e!=[]&&""!=e||(s="Valor Requerido"),s},isMax(e,a,s){if(null!==e){e=e.replace(".",""),e=e.replace(",","");var t=!0;return""!==e&&null!==e&&e.length>a&&(t=`Maximo ${a} Caracteres`),t}},isMin(e,a,s){if(null!==e){e=e.replace(".",""),e=e.replace(",","");var t=!0;return""!==e&&null!==e&&e.length<a?`Minimo ${a} Caracteres`:t}},checkDate(e,a){var s=!0;return 0==o()(e,"DD/MM/YYYY",!0)._isValid&&(s="Fecha Invalida"),s}}};var r=s(74260);const d=(0,r.Z)(n,[["render",t]]),c=d},62368:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>oe});var t=s(83673),i=s(98880),l=s(62323);const o={class:"row"},n={class:"col-md-4 col-xs-12"},r=(0,t.Uk)(" Sin resultados "),d={class:"col-md-4 col-xs-12"},c=(0,t.Uk)(" Sin resultados "),u={class:"col-md-4 col-xs-12"},m=(0,t.Uk)(" Sin resultados "),p={class:"col-md-7 col-xs-12"},g={class:"col-md-5 col-xs-12"},h={class:"col-md-7 col-xs-12"},f={class:"col-md-5 col-xs-12"},_={class:"col-md-4 col-xs-12"},j={class:"col-md-4 col-xs-12"},b={class:"col-md-4 col-xs-12"},w={class:"col-md-5 col-xs-12"},D={class:"col-md-7 col-xs-12"},y={class:"full-width row justify-center items-center content-center"},C={class:"q-pa-sm justify-center"},v={class:"row justify-end q-pa-md col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},k=(0,t._)("div",{class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12 text-secondary movilTitle",style:{"align-self":"center","text-align":"center","font-size":"20px"}},[(0,t._)("p",null,[(0,t._)("strong",null,"MANTENIMIENTO - AGENCIAS")])],-1),x={class:"col-md-5 col-sm-7 col-xs-12 cardMargin selectMobile",style:{"align-self":"center"}},V={class:"col-md-2 col-sm-3 col-xs-12",style:{"text-align":"center","align-self":"center"}},q={class:"q-pa-md q-gutter-y-md"},W=(0,t._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estás seguro que quieres eliminar este elemento? ",-1);function z(e,a,s,z,$,S){const M=(0,t.up)("q-item-section"),E=(0,t.up)("q-item"),P=(0,t.up)("q-icon"),Z=(0,t.up)("q-select"),A=(0,t.up)("q-input"),U=(0,t.up)("q-btn"),I=(0,t.up)("q-form"),R=(0,t.up)("q-card-section"),T=(0,t.up)("q-card"),Q=(0,t.up)("q-dialog"),O=(0,t.up)("q-inner-loading"),N=(0,t.up)("q-td"),B=(0,t.up)("q-item-label"),F=(0,t.up)("q-list"),L=(0,t.up)("q-table"),H=(0,t.up)("q-card-actions"),Y=(0,t.up)("methods"),G=(0,t.up)("rules-vue"),K=(0,t.up)("q-page"),J=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(K,{class:"pagina q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{modelValue:z.agenciasDialog,"onUpdate:modelValue":a[23]||(a[23]=e=>z.agenciasDialog=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{class:"q-pa-md",bordered:"",style:{width:"900px","max-width":"80vw"}},{default:(0,t.w5)((()=>[(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Wm)(I,{onSubmit:S.sendData,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t._)("div",n,[(0,t.Wm)(Z,{outlined:"",modelValue:$.selectedPais,"onUpdate:modelValue":[a[0]||(a[0]=e=>$.selectedPais=e),a[2]||(a[2]=e=>{this.selectedEstado=[],this.selectedCiudad=[],this.estados=[],this.ciudades=[],S.getData("/estados","setData","estados",{headers:{pais:this.selectedPais.id}})})],label:"País",class:"pcform","input-class":"input",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],hint:"",options:$.paisesSelected,onFilter:a[1]||(a[1]=(e,a,s)=>S.filterArray(e,a,s,"paisesSelected","paises","desc_pais")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_pais","option-value":"id","lazy-rules":""},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{class:"text-grey"},{default:(0,t.w5)((()=>[r])),_:1})])),_:1})])),prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"public"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",d,[(0,t.Wm)(Z,{outlined:"",modelValue:$.selectedEstado,"onUpdate:modelValue":[a[3]||(a[3]=e=>$.selectedEstado=e),a[5]||(a[5]=e=>{this.selectedCiudad=[],this.ciudades=[],S.getData("/ciudades","setData","ciudades",{headers:{estado:this.selectedEstado.id}})})],label:"Estado","input-class":"input",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],hint:"",class:"pcform",options:$.estadosSelected,onFilter:a[4]||(a[4]=(e,a,s)=>S.filterArray(e,a,s,"estadosSelected","estados","desc_estado")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_estado","option-value":"id","lazy-rules":""},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{class:"text-grey"},{default:(0,t.w5)((()=>[c])),_:1})])),_:1})])),prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"public"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",u,[(0,t.Wm)(Z,{outlined:"",modelValue:$.selectedCiudad,"onUpdate:modelValue":a[6]||(a[6]=e=>$.selectedCiudad=e),label:"Ciudad","input-class":"input",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],hint:"",options:$.ciudadesSelected,onFilter:a[7]||(a[7]=(e,a,s)=>S.filterArray(e,a,s,"ciudadesSelected","ciudades","desc_ciudad")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"desc_ciudad","option-value":"id","lazy-rules":""},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{class:"text-grey"},{default:(0,t.w5)((()=>[m])),_:1})])),_:1})])),prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"public"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",p,[(0,t.Wm)(A,{"upper-case":"",outlined:"",modelValue:$.form.nb_agencia,"onUpdate:modelValue":[a[8]||(a[8]=e=>$.form.nb_agencia=e),a[9]||(a[9]=e=>$.form.nb_agencia=$.form.nb_agencia.toUpperCase())],label:"Agencia",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isReq(e,"Requerido"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"apartment"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",g,[(0,t.Wm)(A,{outlined:"",modelValue:$.form.persona_contacto,"onUpdate:modelValue":[a[10]||(a[10]=e=>$.form.persona_contacto=e),a[11]||(a[11]=e=>$.form.persona_contacto=$.form.persona_contacto.toUpperCase())],label:"Nombre",rules:[e=>this.$refs.rulesVue.isMax(e,200,"Maximo 200 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"account_circle"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",h,[(0,t.Wm)(A,{outlined:"",modelValue:$.form.dir_agencia,"onUpdate:modelValue":[a[12]||(a[12]=e=>$.form.dir_agencia=e),a[13]||(a[13]=e=>$.form.dir_agencia=$.form.dir_agencia.toUpperCase())],label:"Dirección",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,200,"Maximo 200 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""]},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"pin_drop"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",f,[(0,t.Wm)(A,{outlined:"",modelValue:$.form.rif_agencia,"onUpdate:modelValue":[a[14]||(a[14]=e=>$.form.rif_agencia=e),a[15]||(a[15]=e=>$.form.rif_agencia=$.form.rif_agencia.toUpperCase())],label:"Rif",hint:"",rules:[e=>this.$refs.rulesVue.isMax(e,200,"Maximo 200 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"badge"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",_,[(0,t.Wm)(A,{outlined:"",modelValue:$.form.nit_agencia,"onUpdate:modelValue":[a[16]||(a[16]=e=>$.form.nit_agencia=e),a[17]||(a[17]=e=>$.form.nit_agencia=$.form.nit_agencia.toUpperCase())],label:"NIT Agencia",rules:[e=>this.$refs.rulesVue.isMax(e,200,"Maximo 200 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],hint:"",class:"pcform","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"list"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",j,[(0,t.Wm)(A,{outlined:"",modelValue:$.form.fax_agencia,"onUpdate:modelValue":a[18]||(a[18]=e=>$.form.fax_agencia=e),label:"Fax",class:"pcform",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,200,"Maximo 200 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],mask:"####-#####"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"fax"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",b,[(0,t.Wm)(A,{outlined:"",modelValue:$.form.tlf_agencia,"onUpdate:modelValue":a[19]||(a[19]=e=>$.form.tlf_agencia=e),label:"Teléfono",hint:"","lazy-rules":"",rules:[e=>this.$refs.rulesVue.isMax(e,200,"Maximo 200 Caracteres"),e=>this.$refs.rulesVue.isMin(e,3,"Minimo 3 Caracteres")||""],mask:"(###) ### - ####"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"phone"})])),_:1},8,["modelValue","rules"])]),(0,t._)("div",w,[(0,t.Wm)(Z,{outlined:"",modelValue:$.form.estatus,"onUpdate:modelValue":a[20]||(a[20]=e=>$.form.estatus=e),label:"Estatus",hint:"",class:"pcform",rules:[e=>this.$refs.rulesVue.isReqSelect(e,"Requerido")||""],options:$.estatus,"lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"done_all"})])),_:1},8,["modelValue","rules","options"])]),(0,t._)("div",D,[(0,t.Wm)(A,{outlined:"",modelValue:$.form.email_agencia,"onUpdate:modelValue":[a[21]||(a[21]=e=>$.form.email_agencia=e),a[22]||(a[22]=e=>$.form.email_agencia=$.form.email_agencia.toUpperCase())],label:"Correo Electrónico",hint:"",type:"email","lazy-rules":""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(P,{name:"email"})])),_:1},8,["modelValue"])])]),(0,t._)("div",y,[(0,t.Wm)(U,{label:"Enviar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,t.wy)((0,t.Wm)(U,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[J]])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",C,[(0,t._)("div",v,[k,(0,t._)("div",x,[(0,t.Wm)(A,{modelValue:$.filter,"onUpdate:modelValue":a[25]||(a[25]=e=>$.filter=e),rounded:"",dense:"",outlined:"",standout:"",label:"Búsqueda avanzada",onKeydown:a[26]||(a[26]=(0,i.D2)((e=>S.getData("/agencias","setDataTable","datos",{headers:{page:1,limit:5,filter:"nb_agencia,tlf_agencia",filter_value:$.filter}})),["enter"]))},{append:(0,t.w5)((()=>[(0,t.Wm)(P,{onClick:a[24]||(a[24]=e=>S.getData("/agencias","setDataTable","datos",{headers:{page:1,limit:5,filter:"nb_agencia,tlf_agencia",filter_value:$.filter}})),class:"cursor-pointer",name:"search"})])),_:1},8,["modelValue"])]),(0,t._)("div",V,[(0,t.Wm)(U,{label:"Insertar Agencia",rounded:"",color:"primary",disabled:this.allowOption(2),onClick:a[27]||(a[27]=e=>z.agenciasDialog=!0),onClickCapture:a[28]||(a[28]=e=>this.resetForm())},null,8,["disabled"])])]),(0,t._)("div",q,[(0,t.Wm)(L,{rows:$.datos,loading:z.loading,"binary-state-sort":"","row-key":"id",columns:$.columns,separator:z.separator,"rows-per-page-options":[5,10,15,20,50],onRequest:S.onRequest,style:{width:"100%"},grid:e.$q.screen.xs,pagination:z.pagination,"onUpdate:pagination":a[31]||(a[31]=e=>z.pagination=e)},{loading:(0,t.w5)((()=>[(0,t.Wm)(O,{showing:"",color:"primary"})])),"body-cell-action":(0,t.w5)((s=>[(0,t.Wm)(N,{props:s},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"edit",onClickCapture:S.resetForm,disabled:this.allowOption(3),onClick:e=>{S.getData(`/agencias/${s.row.id}`,"setDataEdit","form"),z.agenciasDialog=!0}},null,8,["onClickCapture","disabled","onClick"]),(0,t.Wm)(U,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:a=>e.selected=s.row.id,onClickCapture:a[29]||(a[29]=e=>z.deletePopup=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,t.w5)((s=>[(0,t._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,l.j5)(s.selected?"transform: scale(0.95);":"")},[(0,t.Wm)(T,{class:(0,l.C_)(s.selected?"bg-grey-2":"")},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{dense:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.cols,(i=>((0,t.wg)(),(0,t.j4)(E,{key:i.name},{default:(0,t.w5)((()=>[(0,t.Wm)(M,null,{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(i.label),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(M,{side:""},{default:(0,t.w5)((()=>["action"===i.name?((0,t.wg)(),(0,t.j4)(U,{key:0,dense:"",round:"",flat:"",color:"primary",icon:"edit",disabled:this.allowOption(3),onClickCapture:S.resetForm,onClick:e=>{S.getData(`/agencias/${s.row.id}`,"setDataEdit","form"),z.agenciasDialog=!0}},null,8,["disabled","onClickCapture","onClick"])):(0,t.kq)("",!0),"action"===i.name?((0,t.wg)(),(0,t.j4)(U,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:a=>e.selected=s.row.id,onClickCapture:a[30]||(a[30]=e=>z.deletePopup=!0)},null,8,["disabled","onClick"])):((0,t.wg)(),(0,t.j4)(B,{key:2,caption:"",class:(0,l.C_)(i.classes?i.classes:"")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(i.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","loading","columns","separator","onRequest","grid","pagination"])])]),(0,t.Wm)(Q,{modelValue:z.deletePopup,"onUpdate:modelValue":a[33]||(a[33]=e=>z.deletePopup=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{style:{width:"700px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[W])),_:1}),(0,t.Wm)(H,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(U,{flat:"",label:"Cancelar",color:"primary"},null,512),[[J]]),(0,t.wy)((0,t.Wm)(U,{flat:"",label:"Aceptar",color:"primary",onClick:a[32]||(a[32]=a=>S.deleteData(e.selected))},null,512),[[J]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(Y,{ref:"methods",onGetData:a[34]||(a[34]=e=>S.getData("/agencias","setDataTable","datos",{headers:{page:1,limit:5,filter:"nb_agencia,tlf_agencia",filter_value:$.filter,order_direction:$.orderDirection,order_by:z.pagination.sortBy}})),onSetData:S.setData,onSetDataPaises:S.setDataPaises,onResetLoading:S.resetLoading,onSetDataEdit:S.setDataEdit,onOnRequest:S.onRequest,onSetDataTable:S.setDataTable,onSetDataPermisos:S.setDataPermisos},null,8,["onSetData","onSetDataPaises","onResetLoading","onSetDataEdit","onOnRequest","onSetDataTable","onSetDataPermisos"]),(0,t.Wm)(G,{ref:"rulesVue"},null,512)])),_:1})}var $=s(61959),S=s(5474),M=s(48825),E=s(80589),P=s(28382),Z=s(23759);const A={components:{methods:Z.Z,rulesVue:P.Z},name:"Agencias",data(){return{columns:[{name:"Ciudades",label:"Ciudad",field:e=>e.ciudades.desc_ciudad,align:"left",sortable:!0,required:!0},{name:"nb_agencia",label:"Agencia",field:"nb_agencia",align:"left",sortable:!0,required:!0},{name:"tlf_agencia",label:"Teléfono",field:"tlf_agencia",align:"left",sortable:!0,required:!0},{name:"activo_desc",label:"Estatus",field:"activo_desc",align:"left",type:"string",sortable:!0,required:!0},{name:"action",label:"Acciones",align:"center",sortable:!0,required:!0}],form:{cod_ciudad:"",nb_agencia:"",persona_contacto:"",dir_agencia:"",fax_agencia:"",email_agencia:"",tlf_agencia:"",rif_agencia:"",nit_agencia:"",estatus:""},formEdit:{id:"",cod_ciudad:"",nb_agencia:"",persona_contacto:"",dir_agencia:"",fax_agencia:"",email_agencia:"",tlf_agencia:"",rif_agencia:"",nit_agencia:"",estatus:""},estatus:[{label:"ACTIVA",value:"A"},{label:"INACTIVA",value:"I"}],orderDirection:"",paises:[],estados:[],count:1,currentPage:1,ciudades:[],filter:"",datos:[],rpermisos:[],paisesSelected:[],estadosSelected:[],ciudadesSelected:[],selectedPais:[],selectedEstado:[],selectedCiudad:[]}},setup(){(0,M.Z)(),(0,$.iH)(!1),(0,$.iH)(!1);const e=(0,$.iH)({descending:"",page:1,rowsPerPage:5,rowsNumber:""});return{pagination:e,loading:(0,$.iH)(!1),separator:(0,$.iH)("vertical"),agenciasDialog:(0,$.iH)(!1),deletePopup:(0,$.iH)(!1)}},mounted(){this.$emit("changeTitle","SCEN - Mantenimiento - Agencias",""),this.getData("/agencias","setDataTable","datos",{headers:{page:1,limit:5}}),this.getData("/paises","setDataPaises","paises"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:E.Z.getItem("tokenTraducido").usuario.roles.id,menu:"agencias"}})},methods:{onRequest(e){let{page:a,rowsPerPage:s,sortBy:t,descending:i}=e.pagination;this.currentPage!==a&&(i="");const l=0===s?this.pagination.rowsNumber:s;t||(t=""),"Ciudades"==t&&(t="",i=""),"action"==t&&(i="",t=""),""!==i&&(this.pagination.descending=!this.pagination.descending,1==this.pagination.descending?this.orderDirection="DESC":this.orderDirection="ASC"),this.pagination.sortBy=t,this.pagination.page=a,this.pagination.rowsPerPage=s,"activo_desc"==t&&(t="estatus"),this.getData("/agencias","setDataTable","datos",{headers:{page:a,limit:l,order_direction:this.orderDirection,order_by:t,filter:"nb_agencia,tlf_agencia",filter_value:this.filter}})},filterArray(e,a,s,t,i,l){a(""!==e?()=>{const a=e.toUpperCase();for(var s=[],o=0;o<=this[i].length-1;o++)if(this[i][o][l].indexOf(a)>-1&&s.push(this[i][o]),o==this[i].length-1){this[t]=s;break}}:()=>{this[t]=this[i]})},resetLoading(){this.loading=!1},allowOption(e){return this.rpermisos.findIndex((a=>a.acciones.accion==e))<0},setDataPermisos(e,a){this[a]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},getData(e,a,s,t){this.$refs.methods.getData(e,a,s,t)},setDataTable(e,a){this[a]=e.data,this.pagination.page=e.currentPage,this.currentPage=e.currentPage,this.pagination.rowsNumber=e.total,this.pagination.rowsPerPage=e.limit,this.loading=!1},setDataPaises(e,a){this[a]=e},setData(e,a){this[a]=e.data,this.loading=!1},setDataEdit(e,a){this[a].id=e.id,this[a].nb_agencia=e.nb_agencia,this[a].persona_contacto=e.persona_contacto,this[a].dir_agencia=e.dir_agencia,this[a].fax_agencia=e.fax_agencia,this[a].email_agencia=e.email_agencia,this[a].tlf_agencia=e.tlf_agencia,this[a].rif_agencia=e.rif_agencia,this[a].nit_agencia=e.nit_agencia,this[a].estatus=e.activo_desc,this.selectedCiudad=e.ciudades,this.ciudadEdit=e.ciudades.id,S.api.get("/ciudades",{headers:{Authorization:`Bearer ${E.Z.getItem("token")}`,estado:this.selectedCiudad.cod_estado}}).then((e=>{this.ciudades=e.data.data,this.selectedEstado=e.data.data[0].estados,S.api.get("/estados",{headers:{Authorization:`Bearer ${E.Z.getItem("token")}`,pais:this.selectedEstado.cod_pais}}).then((e=>{this.estados=e.data.data,this.selectedPais=e.data.data[0].paises.desc_pais}))}))},deleteData(e){this.$refs.methods.deleteData(`/agencias/${e}`,"getData"),this.loading=!0},sendData(){this.form.cod_ciudad=this.selectedCiudad.id,this.form.estatus=this.form.estatus.value,this.form.id?(this.$refs.methods.putData(`/agencias/${this.form.id}`,this.form,"getData"),this.loading=!0,this.agenciasDialog=!1):(this.$refs.methods.createData("/agencias",this.form,"getData"),this.loading=!0,this.agenciasDialog=!1,this.resetForm())},resetForm(){delete this.form.id,this.selectedPais=[],this.selectedEstado=[],this.selectedCiudad=[],this.estados=[],this.ciudades=[],this.form.persona_contacto="",this.form.nb_agencia="",this.form.dir_agencia="",this.form.fax_agencia="",this.form.email_agencia="",this.form.tlf_agencia="",this.form.rif_agencia="",this.form.nit_agencia="",this.form.estatus=""}}};var U=s(74260),I=s(24379),R=s(46778),T=s(10151),Q=s(25589),O=s(68689),N=s(72448),B=s(83414),F=s(52035),L=s(24554),H=s(34842),Y=s(48240),G=s(17352),K=s(66941),J=s(83884),X=s(27011),ee=s(2350),ae=s(99367),se=s(60677),te=s(7518),ie=s.n(te);const le=(0,U.Z)(A,[["render",z]]),oe=le;ie()(A,"components",{QPage:I.Z,QDialog:R.Z,QCard:T.Z,QCardSection:Q.Z,QForm:O.Z,QSelect:N.Z,QItem:B.Z,QItemSection:F.Z,QIcon:L.Z,QInput:H.Z,QBtn:Y.Z,QTable:G.Z,QInnerLoading:K.Z,QTd:J.Z,QList:X.Z,QItemLabel:ee.Z,QCardActions:ae.Z}),ie()(A,"directives",{ClosePopup:se.Z})},46700:(e,a,s)=>{var t={"./af":5809,"./af.js":5809,"./ar":46069,"./ar-dz":70481,"./ar-dz.js":70481,"./ar-kw":93994,"./ar-kw.js":93994,"./ar-ly":33312,"./ar-ly.js":33312,"./ar-ma":90239,"./ar-ma.js":90239,"./ar-sa":31863,"./ar-sa.js":31863,"./ar-tn":19607,"./ar-tn.js":19607,"./ar.js":46069,"./az":69281,"./az.js":69281,"./be":29945,"./be.js":29945,"./bg":59384,"./bg.js":59384,"./bm":21476,"./bm.js":21476,"./bn":43345,"./bn-bd":70216,"./bn-bd.js":70216,"./bn.js":43345,"./bo":81713,"./bo.js":81713,"./br":19655,"./br.js":19655,"./bs":87296,"./bs.js":87296,"./ca":43049,"./ca.js":43049,"./cs":62722,"./cs.js":62722,"./cv":98039,"./cv.js":98039,"./cy":95563,"./cy.js":95563,"./da":31960,"./da.js":31960,"./de":67533,"./de-at":76674,"./de-at.js":76674,"./de-ch":17732,"./de-ch.js":17732,"./de.js":67533,"./dv":78343,"./dv.js":78343,"./el":37004,"./el.js":37004,"./en-au":32517,"./en-au.js":32517,"./en-ca":84929,"./en-ca.js":84929,"./en-gb":99722,"./en-gb.js":99722,"./en-ie":96923,"./en-ie.js":96923,"./en-il":68050,"./en-il.js":68050,"./en-in":99624,"./en-in.js":99624,"./en-nz":70540,"./en-nz.js":70540,"./en-sg":14375,"./en-sg.js":14375,"./eo":10040,"./eo.js":10040,"./es":99720,"./es-do":25595,"./es-do.js":25595,"./es-mx":10180,"./es-mx.js":10180,"./es-us":61563,"./es-us.js":61563,"./es.js":99720,"./et":9217,"./et.js":9217,"./eu":39474,"./eu.js":39474,"./fa":85243,"./fa.js":85243,"./fi":57645,"./fi.js":57645,"./fil":55350,"./fil.js":55350,"./fo":75622,"./fo.js":75622,"./fr":91467,"./fr-ca":53439,"./fr-ca.js":53439,"./fr-ch":14335,"./fr-ch.js":14335,"./fr.js":91467,"./fy":86026,"./fy.js":86026,"./ga":32969,"./ga.js":32969,"./gd":21347,"./gd.js":21347,"./gl":11085,"./gl.js":11085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":69597,"./gom-latn.js":69597,"./gu":28705,"./gu.js":28705,"./he":69128,"./he.js":69128,"./hi":92821,"./hi.js":92821,"./hr":9002,"./hr.js":9002,"./hu":94814,"./hu.js":94814,"./hy-am":30658,"./hy-am.js":30658,"./id":29344,"./id.js":29344,"./is":28204,"./is.js":28204,"./it":70376,"./it-ch":81549,"./it-ch.js":81549,"./it.js":70376,"./ja":69293,"./ja.js":69293,"./jv":96401,"./jv.js":96401,"./ka":60482,"./ka.js":60482,"./kk":87329,"./kk.js":87329,"./km":44241,"./km.js":44241,"./kn":23566,"./kn.js":23566,"./ko":52742,"./ko.js":52742,"./ku":92915,"./ku.js":92915,"./ky":86846,"./ky.js":86846,"./lb":44959,"./lb.js":44959,"./lo":82188,"./lo.js":82188,"./lt":58967,"./lt.js":58967,"./lv":41245,"./lv.js":41245,"./me":90751,"./me.js":90751,"./mi":57501,"./mi.js":57501,"./mk":11643,"./mk.js":11643,"./ml":15597,"./ml.js":15597,"./mn":67612,"./mn.js":67612,"./mr":19065,"./mr.js":19065,"./ms":84703,"./ms-my":84645,"./ms-my.js":84645,"./ms.js":84703,"./mt":64365,"./mt.js":64365,"./my":83788,"./my.js":83788,"./nb":57357,"./nb.js":57357,"./ne":99109,"./ne.js":99109,"./nl":63746,"./nl-be":31985,"./nl-be.js":31985,"./nl.js":63746,"./nn":27175,"./nn.js":27175,"./oc-lnc":70566,"./oc-lnc.js":70566,"./pa-in":32733,"./pa-in.js":32733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":17839,"./pt-br.js":17839,"./pt.js":505,"./ro":39578,"./ro.js":39578,"./ru":32328,"./ru.js":32328,"./sd":641,"./sd.js":641,"./se":51758,"./se.js":51758,"./si":36680,"./si.js":36680,"./sk":25016,"./sk.js":25016,"./sl":7424,"./sl.js":7424,"./sq":88635,"./sq.js":88635,"./sr":49038,"./sr-cyrl":73716,"./sr-cyrl.js":73716,"./sr.js":49038,"./ss":64771,"./ss.js":64771,"./sv":3517,"./sv.js":3517,"./sw":39419,"./sw.js":39419,"./ta":55959,"./ta.js":55959,"./te":21739,"./te.js":21739,"./tet":22264,"./tet.js":22264,"./tg":94792,"./tg.js":94792,"./th":88328,"./th.js":88328,"./tk":60702,"./tk.js":60702,"./tl-ph":57814,"./tl-ph.js":57814,"./tlh":10797,"./tlh.js":10797,"./tr":16691,"./tr.js":16691,"./tzl":76891,"./tzl.js":76891,"./tzm":16362,"./tzm-latn":37855,"./tzm-latn.js":37855,"./tzm.js":16362,"./ug-cn":77606,"./ug-cn.js":77606,"./uk":30513,"./uk.js":30513,"./ur":43803,"./ur.js":43803,"./uz":60344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":60344,"./vi":70003,"./vi.js":70003,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":62083,"./yo.js":62083,"./zh-cn":84536,"./zh-cn.js":84536,"./zh-hk":92475,"./zh-hk.js":92475,"./zh-mo":67593,"./zh-mo.js":67593,"./zh-tw":4746,"./zh-tw.js":4746};function i(e){var a=l(e);return s(a)}function l(e){if(!s.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=l,e.exports=i,i.id=46700}}]);