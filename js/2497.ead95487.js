"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[2497],{55325:(e,t,o)=>{function s(e,t,o,s,a,i){return null}o.d(t,{Z:()=>c});var a=o(80589),i=o(5474),r=o(48825);const l={name:"userLogout",data:function(){return{}},setup(){const e=(0,r.Z)();return{errorDelServidor(){this.$emit("resetLoading"),e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,t,o,s){void 0==s?s={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api.get(e,s).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(console.log(e.response),this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},getDataEdit:function(e,t,o,s){void 0==s?s={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api.get(e,s).then((e=>{this.$emit(t,e.data,o)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},deleteData:function(e,t,o){void 0==o?o={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:o.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api["delete"](e,o).then((e=>{(e.status=200)&&(this.$emit(t),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},createData:function(e,t,o,s){void 0==s?s={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api.post(e,t,s).then((e=>{(e.status=200)&&(this.$emit(o),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor(),this.$emit("resetLoading")}))},login:function(e,t,o,s){void 0==s?s={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api.post(e,t,s).then((e=>{(e.status=200)&&this.$emit(o,e.data)})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))},putData:function(e,t,o,s){void 0==s?s={headers:{Authorization:`Bearer ${a.Z.getItem("token")}`}}:s.headers.Authorization=`Bearer ${a.Z.getItem("token")}`,i.api.put(e,t,s).then((e=>{(e.status=200)&&(this.$emit(o),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.message),this.errorDelServidor()}))}}};var n=o(74260);const d=(0,n.Z)(l,[["render",s]]),c=d},42497:(e,t,o)=>{o.r(t),o.d(t,{default:()=>J});var s=o(83673),a=o(62323);const i={class:"row"},r={class:"col-md-12 col-xs-12"},l=(0,s.Uk)(" Sin resultados "),n={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}},d={class:"row q-pa-sm justify-center"},c={class:"col-md-12 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},m={class:"row"},u=(0,s._)("div",{class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-12 text-secondary",style:{"align-self":"center","text-align":"center"}},[(0,s._)("h4",{style:{"font-size":"30px"}},[(0,s._)("strong",null,"SEGURIDAD - PERMISOLOGÍA")])],-1),p={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-5 inputestadospc",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},g=(0,s.Uk)(" Sin resultados "),h={class:"col-md-3 col-xl-3 col-lg-3 col-xs-12 col-sm-6 inputestadospc2",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},f=(0,s.Uk)(" Sin resultados "),w={class:"col-md-2 col-xl-2 col-lg-2 col-xs-12 col-sm-12",style:{"text-align":"center","align-self":"center"}},b={class:"q-pa-md",style:{"margin-top":"20px"}},y={class:"q-gutter-y-md"},x={bordered:"",flat:"",class:"my-card row"},D=(0,s._)("div",{class:"text-h5",style:{"font-size":"18px"}}," ¿Estas seguro que quieres eliminar este elemento? ",-1);function _(e,t,o,_,v,W){const k=(0,s.up)("q-item-section"),Z=(0,s.up)("q-item"),S=(0,s.up)("q-icon"),P=(0,s.up)("q-select"),q=(0,s.up)("q-btn"),A=(0,s.up)("q-form"),C=(0,s.up)("q-card-section"),I=(0,s.up)("q-card"),V=(0,s.up)("q-dialog"),$=(0,s.up)("q-inner-loading"),E=(0,s.up)("q-checkbox"),z=(0,s.up)("q-td"),U=(0,s.up)("q-item-label"),Q=(0,s.up)("q-chip"),j=(0,s.up)("q-list"),B=(0,s.up)("q-table"),R=(0,s.up)("q-card-actions"),L=(0,s.up)("methods"),F=(0,s.up)("q-page"),H=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(F,{class:"pagina q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(V,{modelValue:_.permisosForm,"onUpdate:modelValue":t[3]||(t[3]=e=>_.permisosForm=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s.Wm)(A,{onSubmit:t[2]||(t[2]=t=>e.createData()),class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s._)("div",i,[(0,s._)("div",r,[(0,s.Wm)(P,{outlined:"",modelValue:v.formPermisos.codigo,"onUpdate:modelValue":t[0]||(t[0]=e=>v.formPermisos.codigo=e),label:"Permisos",hint:"",rules:[W.reglasInputs],options:v.objetosNoDuplicadosSelected,onFilter:t[1]||(t[1]=(e,t,o)=>W.filterArray(e,t,o,"objetosNoDuplicadosSelected","objetosNoDuplicados","codigo")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"codigo","option-value":"codigo","lazy-rules":""},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,{class:"text-grey"},{default:(0,s.w5)((()=>[l])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)(S,{name:"settings"})])),_:1},8,["modelValue","rules","options"])])]),(0,s._)("div",n,[(0,s.Wm)(q,{label:"Agregar Permiso",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12",icon:"person_add"}),(0,s.wy)((0,s.Wm)(q,{label:"Cerrar",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"},null,512),[[H]])])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s._)("div",d,[(0,s._)("div",c,[(0,s._)("div",m,[u,(0,s._)("div",p,[(0,s.Wm)(P,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:v.agenciasSelected,onFilter:t[4]||(t[4]=(e,t,o)=>W.filterArray(e,t,o,"agenciasSelected","agencias","nb_agencia")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"nb_agencia","option-value":"id",modelValue:v.selectedAgencia,"onUpdate:modelValue":[t[5]||(t[5]=e=>v.selectedAgencia=e),t[6]||(t[6]=e=>{W.getData("/roles","setDataRoles","rolesPermisos",{headers:{agencia:this.selectedAgencia.id}}),this.permisos=[]})],outlined:"",standout:"",label:"Escoge una Agencia"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,{class:"text-grey"},{default:(0,s.w5)((()=>[g])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)(S,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",h,[(0,s.Wm)(P,{rounded:"","transition-show":"flip-up","transition-hide":"flip-down",options:v.rolesPermisosSelected,onFilter:t[7]||(t[7]=(e,t,o)=>W.filterArray(e,t,o,"rolesPermisosSelected","rolesPermisos","descripcion")),"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0","option-label":"descripcion","option-value":"id",modelValue:v.selectedRol,"onUpdate:modelValue":[t[8]||(t[8]=e=>v.selectedRol=e),t[9]||(t[9]=e=>W.getData("/permisos","setDataPermisos","permisos"))],outlined:"",standout:"",label:"Escoge un Rol"},{"no-option":(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,{class:"text-grey"},{default:(0,s.w5)((()=>[f])),_:1})])),_:1})])),prepend:(0,s.w5)((()=>[(0,s.Wm)(S,{name:"search"})])),_:1},8,["options","modelValue"])]),(0,s._)("div",w,[(0,s.Wm)(q,{label:"Insertar",rounded:"",color:"primary",size:"16px",class:"q-px-xl q-py-xs insertarestadosmovil"})])]),(0,s._)("div",b,[(0,s._)("div",y,[(0,s._)("div",x,[(0,s.Wm)(B,{rows:v.menus,"row-key":"id",columns:v.columnsPermisos,loading:_.loading,"binary-state-sort":"",separator:_.separator,filter:_.filterPermisos,style:{width:"100%"},grid:e.$q.screen.xs,pagination:_.pagination,"onUpdate:pagination":t[12]||(t[12]=e=>_.pagination=e),"hide-bottom":""},{loading:(0,s.w5)((()=>[(0,s.Wm)($,{showing:"",color:"primary"})])),"body-cell-leer":(0,s.w5)((e=>[(0,s.Wm)(z,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{modelValue:e.row.acciones[0].rpermisos,"onUpdate:modelValue":t=>e.row.acciones[0].rpermisos=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"])])),"body-cell-crear":(0,s.w5)((e=>[(0,s.Wm)(z,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{modelValue:e.row.acciones[1].rpermisos,"onUpdate:modelValue":t=>e.row.acciones[1].rpermisos=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"])])),"body-cell-editar":(0,s.w5)((e=>[(0,s.Wm)(z,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{modelValue:e.row.acciones[2].rpermisos,"onUpdate:modelValue":t=>e.row.acciones[2].rpermisos=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"])])),"body-cell-eliminar":(0,s.w5)((e=>[(0,s.Wm)(z,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{modelValue:e.row.acciones[3].rpermisos,"onUpdate:modelValue":t=>e.row.acciones[3].rpermisos=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"])])),"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(z,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(q,{dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:t=>v.selected=e.row.id,onClickCapture:t[10]||(t[10]=e=>_.permisosDelete=!0)},null,8,["disabled","onClick"])])),_:2},1032,["props"])])),item:(0,s.w5)((e=>[(0,s._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,a.j5)(e.selected?"transform: scale(0.95);":"")},[(0,s.Wm)(I,{class:(0,a.C_)(e.selected?"bg-grey-2":"")},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.cols,(o=>((0,s.wg)(),(0,s.j4)(Z,{key:o.name},{default:(0,s.w5)((()=>[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(k,{side:""},{default:(0,s.w5)((()=>["status"===o.name?((0,s.wg)(),(0,s.j4)(Q,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.value),1)])),_:2},1032,["color"])):"action"===o.name?((0,s.wg)(),(0,s.j4)(q,{key:1,dense:"",round:"",flat:"",color:"primary",icon:"delete",disabled:this.allowOption(4),onClick:t=>v.selected=e.row.id,onClickCapture:t[11]||(t[11]=e=>_.permisosDelete=!0)},null,8,["disabled","onClick"])):((0,s.wg)(),(0,s.j4)(U,{key:2,caption:"",class:(0,a.C_)(o.classes?o.classes:"")},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns","loading","separator","filter","grid","pagination"])])])])])]),(0,s.Wm)(V,{modelValue:_.permisosDelete,"onUpdate:modelValue":t[14]||(t[14]=e=>_.permisosDelete=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{style:{width:"700px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[D])),_:1}),(0,s.Wm)(R,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(q,{flat:"",label:"Cancelar",color:"primary"},null,512),[[H]]),(0,s.wy)((0,s.Wm)(q,{flat:"",label:"Aceptar",color:"primary",onClick:t[13]||(t[13]=t=>e.deleteData(v.selected))},null,512),[[H]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(L,{ref:"methods",onSetData:W.setData,onSetDataRoles:[W.setDataRoles,W.setDataRoles],onResetLoading:W.resetLoading,onSetDataInit:W.setDataInit,onSetDataPermisos:W.setDataPermisos},null,8,["onSetData","onSetDataRoles","onResetLoading","onSetDataInit","onSetDataPermisos"])])),_:1})}var v=o(61959),W=o(5474),k=o(48825),Z=o(80589),S=o(55325);const P={components:{methods:S.Z},name:"Permisologia",data(){return{columnsPermisos:[{name:"label",label:"Menu",field:"label",align:"left",sortable:!0,required:!0},{name:"leer",label:"Leer",align:"center"},{name:"crear",label:"Crear",align:"center"},{name:"editar",label:"Editar",align:"center"},{name:"eliminar",label:"Eliminar",align:"center"},{name:"action",label:"Otros",align:"center",sortable:!0,required:!0}],permisos:[],agencias:[],agenciasSelected:[],permisosDuplicados:[],roles:[],rolesPermisos:[],formPermisos:{codigo:"",cod_rol:""},formEditPermisos:{codigo:"",cod_rol:"",id:""},objetos:[],objetosNoDuplicados:[],agenciasSelected:[],rolesPermisosSelected:[],objetosNoDuplicadosSelected:[],selected:[],selectedAgencia:[],selectedRol:[],rpermisos:[],menus:[],error:"",items:0}},setup(){const e=(0,k.Z)();(0,v.iH)({sortBy:"desc",descending:!1,page:1,control:0,rowsPerPage:100});return{axiosConfig:{headers:{Authorization:""}},pagination:(0,v.iH)({rowsPerPage:100}),separator:(0,v.iH)("vertical"),reglasCodigo:[e=>null!==e&&""!==e||"Por favor escribe algo",e=>e.length<25||"Deben ser máximo 25 caracteres",e=>e.length>3||"Deben ser minimo 3 caracteres"],permisosForm:(0,v.iH)(!1),loading:(0,v.iH)(!1),permisosFormEdit:(0,v.iH)(!1),errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},sinPermisos(){e.notify({message:"No hay más permisos que agregar...",color:"red"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})},permisosDelete:(0,v.iH)(!1),filterPermisos:(0,v.iH)("")}},mounted(){this.loading=!0,this.getData("/agencias","setDataInit","agencias"),this.$refs.methods.getData("/rpermisos","setDataPermisos","rpermisos",{headers:{rol:Z.Z.getItem("tokenTraducido").usuario.roles.id,menu:"permisologia"}})},methods:{filterArray(e,t,o,s,a,i){t(""!==e?()=>{const t=e.toUpperCase();for(var o=[],r=0;r<=this[a].length-1;r++)if(this[a][r][i].indexOf(t)>-1&&o.push(this[a][r]),r==this[a].length-1){this[s]=o;break}}:()=>{this[s]=this[a]})},resetLoading(){this.loading=!1},reglasInputs(e){if(null===e)return"Debes Seleccionar Algo"},verificatePermisos(){this.items===this.objetos.length&&this.sinPermisos(),this.items<this.objetos.length&&(this.permisosForm=!0),this.items=0},allowOption(e){return this.rpermisos.findIndex((t=>t.acciones.accion==e))<0},setDataPermisos(e,t){this[t]=e,this.rpermisos.findIndex((e=>1==e.acciones.accion))<0&&this.$router.push("/error403")},setDataInit(e,t){this[t]=e.data,this.selectedAgencia=this.agencias[0],W.api.get("/roles",{headers:{Authorization:`Bearer ${Z.Z.getItem("token")}`,agencia:this.agencias[0].id}}).then((e=>{this.selectedRol=e.data[0],this.rolesPermisos=e.data,W.api.get("/menus",{headers:{Authorization:`Bearer ${Z.Z.getItem("token")}`,rol:e.data[0].id}}).then((e=>{this.menus=e.data;for(let t=0;t<this.menus.length;t++)for(let e=0;e<this.menus[t].acciones.length;e++)this.menus[t].acciones[e].rpermisos.length>0?this.menus[t].acciones[e].rpermisos=!0:this.menus[t].acciones[e].rpermisos=!1}))})),this.loading=!1},setData(e,t){this[t]=e},getData(e,t,o,s){this.$refs.methods.getData(e,t,o,s)},setDataRoles(e,t){this[t]=e,this.selectedRol=this.roles[0]}}};var q=o(74260),A=o(24379),C=o(46778),I=o(10151),V=o(25589),$=o(68689),E=o(72448),z=o(83414),U=o(52035),Q=o(24554),j=o(48240),B=o(17352),R=o(66941),L=o(83884),F=o(65735),H=o(27011),O=o(2350),N=o(67030),T=o(99367),G=o(60677),M=o(7518),K=o.n(M);const Y=(0,q.Z)(P,[["render",_]]),J=Y;K()(P,"components",{QPage:A.Z,QDialog:C.Z,QCard:I.Z,QCardSection:V.Z,QForm:$.Z,QSelect:E.Z,QItem:z.Z,QItemSection:U.Z,QIcon:Q.Z,QBtn:j.Z,QTable:B.Z,QInnerLoading:R.Z,QTd:L.Z,QCheckbox:F.Z,QList:H.Z,QItemLabel:O.Z,QChip:N.Z,QCardActions:T.Z}),K()(P,"directives",{ClosePopup:G.Z})}}]);