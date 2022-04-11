(()=>{"use strict";var e={9323:(e,o,r)=>{r(5363),r(71);var t=r(8880),a=r(9592),n=r(3673);function s(e,o,r,t,a,s){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}var i=r(2786);const l=(0,n.aZ)({name:"app",components:{userLogout:i.Z}});var c=r(4260);const u=(0,c.Z)(l,[["render",s]]),d=u;var m=r(4584),p=r(7083),h=r(9582);const g=[{path:"/",redirect:"/login",component:()=>Promise.all([r.e(4736),r.e(8823)]).then(r.bind(r,8823)),children:[{path:"/dashboard",component:()=>Promise.all([r.e(4736),r.e(6478)]).then(r.bind(r,6478)),meta:{requiresauth:!0}},{path:"/operativa",component:()=>Promise.all([r.e(4736),r.e(8856)]).then(r.bind(r,8856)),meta:{requiresauth:!0}},{path:"/costos",component:()=>Promise.all([r.e(4736),r.e(6491)]).then(r.bind(r,6491)),meta:{requiresauth:!0}},{path:"/registrodecostos",component:()=>Promise.all([r.e(4736),r.e(1747)]).then(r.bind(r,1747)),meta:{requiresauth:!0}},{path:"/reportedecostos",component:()=>Promise.all([r.e(4736),r.e(614)]).then(r.bind(r,614)),meta:{requiresauth:!0}},{path:"/pruebasentrega",component:()=>Promise.all([r.e(4736),r.e(5761)]).then(r.bind(r,5761)),meta:{requiresauth:!0}},{path:"/registroserviciocarga",component:()=>Promise.all([r.e(4736),r.e(8717)]).then(r.bind(r,8717)),meta:{requiresauth:!0}},{path:"/facturacioncredito",component:()=>Promise.all([r.e(4736),r.e(3014)]).then(r.bind(r,3014)),meta:{requiresauth:!0}},{path:"/anulacionguias",component:()=>Promise.all([r.e(4736),r.e(6960)]).then(r.bind(r,6960)),meta:{requiresauth:!0}},{path:"/emitircarta",component:()=>Promise.all([r.e(4736),r.e(9326)]).then(r.bind(r,9326)),meta:{requiresauth:!0}},{path:"/administracion",component:()=>Promise.all([r.e(4736),r.e(2709)]).then(r.bind(r,2709)),meta:{requiresauth:!0}},{path:"/notascontables",component:()=>Promise.all([r.e(4736),r.e(557)]).then(r.bind(r,557)),meta:{requiresauth:!0}},{path:"/notasdebito",component:()=>Promise.all([r.e(4736),r.e(6502)]).then(r.bind(r,6502)),meta:{requiresauth:!0}},{path:"/notascredito",component:()=>Promise.all([r.e(4736),r.e(8475)]).then(r.bind(r,8475)),meta:{requiresauth:!0}},{path:"/anulacionnotascontables",component:()=>Promise.all([r.e(4736),r.e(9306)]).then(r.bind(r,9306)),meta:{requiresauth:!0}},{path:"/cuentasporcobrar",component:()=>Promise.all([r.e(4736),r.e(9445)]).then(r.bind(r,9445)),meta:{requiresauth:!0}},{path:"/cuentasporpagar",component:()=>Promise.all([r.e(4736),r.e(4989)]).then(r.bind(r,4989)),meta:{requiresauth:!0}},{path:"/ingresocuentaspagar",component:()=>Promise.all([r.e(4736),r.e(6829)]).then(r.bind(r,6829)),meta:{requiresauth:!0}},{path:"/controlpagosproveedores",component:()=>Promise.all([r.e(4736),r.e(9525)]).then(r.bind(r,9525)),meta:{requiresauth:!0}},{path:"/controldecomisiones",component:()=>Promise.all([r.e(4736),r.e(225)]).then(r.bind(r,225)),meta:{requiresauth:!0}},{path:"/generarcomisiones",component:()=>Promise.all([r.e(4736),r.e(1640)]).then(r.bind(r,1640)),meta:{requiresauth:!0}},{path:"/pagocomisiones",component:()=>Promise.all([r.e(4736),r.e(8593)]).then(r.bind(r,459)),meta:{requiresauth:!0}},{path:"/retencioncomprador",component:()=>Promise.all([r.e(4736),r.e(9737)]).then(r.bind(r,9737)),meta:{requiresauth:!0}},{path:"/relacionretencionescomprador",component:()=>Promise.all([r.e(4736),r.e(8980)]).then(r.bind(r,8980)),meta:{requiresauth:!0}},{path:"/movimientosbancarios",component:()=>Promise.all([r.e(4736),r.e(494)]).then(r.bind(r,494)),meta:{requiresauth:!0}},{path:"/ingresomovimientos",component:()=>Promise.all([r.e(4736),r.e(78)]).then(r.bind(r,78)),meta:{requiresauth:!0}},{path:"/relacionmovimientos",component:()=>Promise.all([r.e(4736),r.e(1304)]).then(r.bind(r,1304)),meta:{requiresauth:!0}},{path:"/estadogananciasperdidas",component:()=>Promise.all([r.e(4736),r.e(3696)]).then(r.bind(r,3696)),meta:{requiresauth:!0}},{path:"/reporteventas",component:()=>Promise.all([r.e(4736),r.e(939)]).then(r.bind(r,939)),meta:{requiresauth:!0}},{path:"/librocompras",component:()=>Promise.all([r.e(4736),r.e(8569)]).then(r.bind(r,8569)),meta:{requiresauth:!0}},{path:"/libroventas",component:()=>Promise.all([r.e(4736),r.e(1181)]).then(r.bind(r,1181)),meta:{requiresauth:!0}},{path:"/pagospendientesproveedores",component:()=>Promise.all([r.e(4736),r.e(2346)]).then(r.bind(r,2346)),meta:{requiresauth:!0}},{path:"/pagosrealizadosproveedores",component:()=>Promise.all([r.e(4736),r.e(6811)]).then(r.bind(r,6811)),meta:{requiresauth:!0}},{path:"/relacionretenciones",component:()=>Promise.all([r.e(4736),r.e(3135)]).then(r.bind(r,3135)),meta:{requiresauth:!0}},{path:"/controlretencionesislr",component:()=>Promise.all([r.e(4736),r.e(8930)]).then(r.bind(r,8930)),meta:{requiresauth:!0}},{path:"/controlretencionesiva",component:()=>Promise.all([r.e(4736),r.e(4291)]).then(r.bind(r,4291)),meta:{requiresauth:!0}},{path:"/franqueopostal",component:()=>Promise.all([r.e(4736),r.e(3812)]).then(r.bind(r,9893)),meta:{requiresauth:!0}},{path:"/agencias",component:()=>Promise.all([r.e(4736),r.e(3569)]).then(r.bind(r,3569)),meta:{requiresauth:!0}},{path:"/agentes",component:()=>Promise.all([r.e(4736),r.e(4232)]).then(r.bind(r,4232)),meta:{requiresauth:!0}},{path:"/paisestadociudad",component:()=>Promise.all([r.e(4736),r.e(4417)]).then(r.bind(r,4417)),meta:{requiresauth:!0}},{path:"/zonasagencia",component:()=>Promise.all([r.e(4736),r.e(5007)]).then(r.bind(r,5007)),meta:{requiresauth:!0}},{path:"/unidadestransporte",component:()=>Promise.all([r.e(4736),r.e(6595)]).then(r.bind(r,3231)),meta:{requiresauth:!0}},{path:"/ayudantes",component:()=>Promise.all([r.e(4736),r.e(9139)]).then(r.bind(r,9139)),meta:{requiresauth:!0}},{path:"/receptores",component:()=>Promise.all([r.e(4736),r.e(7510)]).then(r.bind(r,7510)),meta:{requiresauth:!0}},{path:"/tarifas",component:()=>Promise.all([r.e(4736),r.e(5066)]).then(r.bind(r,5066)),meta:{requiresauth:!0}},{path:"/controlcorrelativo",component:()=>Promise.all([r.e(4736),r.e(4112)]).then(r.bind(r,4112)),meta:{requiresauth:!0}},{path:"/variablecontrol",component:()=>Promise.all([r.e(4736),r.e(470)]).then(r.bind(r,470)),meta:{requiresauth:!0}},{path:"/bancos",name:"Bancos",props:!0,component:()=>Promise.all([r.e(4736),r.e(823)]).then(r.bind(r,823)),meta:{requiresauth:!0}},{path:"/cuentasbancarias",component:()=>Promise.all([r.e(4736),r.e(5565)]).then(r.bind(r,5565)),meta:{requiresauth:!0}},{path:"/clientes",component:()=>Promise.all([r.e(4736),r.e(5194)]).then(r.bind(r,5194)),meta:{requiresauth:!0}},{path:"/empleados",component:()=>Promise.all([r.e(4736),r.e(6783)]).then(r.bind(r,6783)),meta:{requiresauth:!0}},{path:"/proveedores",component:()=>Promise.all([r.e(4736),r.e(8184)]).then(r.bind(r,8184)),meta:{requiresauth:!0}},{path:"/retenciones",component:()=>Promise.all([r.e(4736),r.e(8948)]).then(r.bind(r,8948)),meta:{requiresauth:!0}},{path:"/conceptosoperacion",component:()=>Promise.all([r.e(4736),r.e(3208)]).then(r.bind(r,3208)),meta:{requiresauth:!0}},{path:"/conceptosfacturacion",component:()=>Promise.all([r.e(4736),r.e(5189)]).then(r.bind(r,5189)),meta:{requiresauth:!0}},{path:"/conceptosfpo",component:()=>Promise.all([r.e(4736),r.e(5448)]).then(r.bind(r,5448)),meta:{requiresauth:!0}},{path:"/asignacionguias",component:()=>Promise.all([r.e(4736),r.e(5993)]).then(r.bind(r,5993)),meta:{requiresauth:!0}},{path:"/roles",component:()=>Promise.all([r.e(4736),r.e(4872)]).then(r.bind(r,4872)),meta:{requiresauth:!0}},{path:"/usuarios",component:()=>Promise.all([r.e(4736),r.e(4975)]).then(r.bind(r,4975)),meta:{requiresauth:!0}},{path:"/permisologia",component:()=>Promise.all([r.e(4736),r.e(4098)]).then(r.bind(r,4098)),meta:{requiresauth:!0}},{path:"/transferencia",component:()=>Promise.all([r.e(4736),r.e(6440)]).then(r.bind(r,6440)),meta:{requiresauth:!0}},{path:"/transferenciahidroca",component:()=>Promise.all([r.e(4736),r.e(5020)]).then(r.bind(r,5020)),meta:{requiresauth:!0}},{path:"/cargamanualguias",component:()=>Promise.all([r.e(4736),r.e(6005)]).then(r.bind(r,6005)),meta:{requiresauth:!0}}]},{path:"/login",component:()=>Promise.all([r.e(4736),r.e(7209)]).then(r.bind(r,7209))},{path:"/:catchall(.*)*",component:()=>r.e(5458).then(r.bind(r,5458))}],b=g,f=(0,p.BC)((()=>{const e=h.r5,o=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return o.beforeEach(((e,r,t)=>{const a=e.matched.some((e=>e.meta.requiresAuth)),n=sessionStorage.getItem("isAuthenticated");if(e.matched.some((e=>e.meta.requiresAuth))){let e=moment(o.app.$session.get("1").date),r=moment(new Date),a=moment.duration(r.diff(e)).asMinutes();a>o.app.$session.get("1").limit?t({path:"/login"}):t()}else t();a&&!n?t("login"):t()})),o}));async function v(e,o){const t="function"===typeof m["default"]?await(0,m["default"])({}):m["default"],{storeKey:n}=await Promise.resolve().then(r.bind(r,4584)),s="function"===typeof f?await f({store:t}):f;t.$router=s;const i=e(d);return i.use(a.Z,o),{app:i,store:t,storeKey:n,router:s}}var P=r(8416),C=r(4434),q=r(1417),y=r(7153),w=r(589);const k={config:{},plugins:{AppFullscreen:P.Z,Notify:C.Z,Dialog:q.Z,SessionStorage:y.Z,LocalStorage:w.Z}},R="";async function A({app:e,router:o,store:r,storeKey:t},a){let n=!1;const s=e=>{try{return o.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const o=s(e);null!==o&&(window.location.href=o,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===n&&u<a.length;u++)try{await a[u]({app:e,router:o,store:r,ssrContext:null,redirect:i,urlPath:l,publicPath:R})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(e.use(o),e.use(r,t),e.mount("#q-app"))}v(t.ri,k).then((e=>Promise.all([Promise.resolve().then(r.bind(r,8324)),Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,4822)),Promise.resolve().then(r.bind(r,6498))]).then((o=>{const r=o.map((e=>e.default)).filter((e=>"function"===typeof e));A(e,r)}))))},5474:(e,o,r)=>{r.r(o),r.d(o,{default:()=>i,api:()=>s});var t=r(7083),a=r(52),n=r.n(a);const s=n().create({baseURL:"https://scen.rcsexpress.com/api/v1"}),i=(0,t.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=s}))},8324:(e,o,r)=>{r.r(o),r.d(o,{default:()=>i,i18n:()=>s});var t=r(7083),a=r(5948),n=r(1098);const s=(0,a.o)({locale:"es-es",messages:n.Z}),i=(0,t.xr)((({app:e})=>{e.use(s)}))},1098:(e,o,r)=>{r.d(o,{Z:()=>c});const t={user:"User",password:"Password",login:"LOG IN",remember:"Remember",forgot:"Forgot your password",blank_user:"You must enter the username",blank_pass:"You must enter the password",not_login:"Your login name or password is invalid",records_per_page:"Productos por pagina"},a={dashboard:"Dashboard",logout:"Logout",rights:"All Rights Reserved.",sales:"Sales",operations:"Operations",records_per_page:"Productos por pagina",administration:"Administration",reports:"Reports",system:"System",maintenance:"Maintenance",Formulario:"Formulario",Operativa:"Operativa",Registrodecostos:"Registrodecostos",Reportedecostos:"Reportedecostos",Pruebasdeentrega:"Pruebasdeentrega",Registroserviciocarga:"Registroserviciocarga",Facturacioncredito:"Facturacioncredito",Anulacionguias:"Anulacionguias",Emitircarta:"Emitircarta",Costos:"Costos"},n={Login:t,Menu:a},s={user:"Usuario",password:"Contraseña",login:"INICIAR SESIÓN",remember:"Recordar",forgot:"Olvidaste tu contraseña",blank_user:"Debe ingresar el nombre del usuario",blank_pass:"Debe ingresar la contraseña",not_login:"Su nombre de usuario o contraseña no son válidos"},i={dashboard:"Inicio",logout:"Salir",rights:"Todos los Derechos Reservados.",sales:"Ventas",operations:"Operaciones",administration:"Administracion",reports:"Reportes",system:"Sistema",maintenance:"Mantenimiento",Formulario:"Formulario",Operativa:"Operativa",Registrodecostos:"Registro de costos",Reportedecostos:"Reporte de costos",Pruebasdeentrega:"Pruebas de entrega",Registroserviciocarga:"Registro Del Servicio de carga",Facturacioncredito:"Facturación Crédito, Contado u Otros",Anulacionguias:"Anulacion de Guías y Facturas",Emitircarta:"Emitir Carta para Clientes",Notasdebito:"Notas de debito",Costos:"Costos",Cuentasporcobrar:"Cuentas por Cobrar",Notascredito:"Notas de Credito",AnulacionNotasContables:"Anulacion de Notas Contables",Ingresocuentaspagar:"Ingreso de Cuentas por Pagar",Controlpagosproveedores:"Control de Pagos a Proveedores",Generarcomisiones:"Generar comisiones en Entrega",Pagocomisiones:"Pago de Comisiones",Retencioncomprador:"Retencion Comprador",RelacionRetencionesComprador:"Relacion Retenciones Comprador",Ingresomovimientos:"Ingreso de Movimientos",Relacionmovimientos:"Relacion de Movimientos",Estadogananciasperdidas:"Estado de Ganancias y Perdidas",Reporteventas:"Reporte de Ventas",Librocompras:"Libro de Compras",Libroventas:"Libro de Ventas",Pagospendientesproveedores:"Pagos Pendientes a Proveedores",Pagosrealizadosproveedores:"Pagos Realizados a Proveedores",Relacionretenciones:"Relacion de Retenciones",Controlretencionesislr:"Control de Retenciones ISLR",Controlretencionesiva:"Control de Retenciones IVA",franqueopostal:"Franqueo Postal Obligatorio",Agencias:"Agencias",Agentes:"Agentes",Paisestadociudad:"Pais, Estado, Ciudad",ZonasAgencia:"Zonas por Agencia",UnidadesTransporte:"Unidades de Transporte",Ayudantes:"Ayudantes",Receptores:"Receptores",Tarifas:"Tarifas",Controlcorrelativo:"Control Correlativo",VariableControl:"Variable Control",Bancos:"Bancos",CuentasBancarias:"Cuentas Bancarias",Clientes:"Clientes",Empleados:"Empleados",Proveedores:"Proveedores",Retenciones:"Retenciones",ConceptosOperacion:"Conceptos por Operacion",ConceptosFacturacion:"Conceptos por Facturacion",ConceptosFPO:"Conceptos FPO",Asignacionguias:"Asignacion de Guias",Roles:"Roles",Usuarios:"Usuarios",Permisologia:"Permisologia",Transferencia:"Transferencia",TransferenciaHidroca:"Transferencia de Hidroca",CargaManualGuias:"Carga Manual de Guias"},l={Login:s,Menu:i},c={"en-us":n,"es-es":l}},4584:(e,o,r)=>{r.r(o),r.d(o,{default:()=>n});var t=r(7083),a=r(3617);const n=(0,t.h)((function(){const e=(0,a.MT)({modules:{},strict:!1});return e}))},2786:(e,o,r)=>{r.d(o,{Z:()=>C});var t=r(3673);const a=(0,t._)("div",{class:"col-md-4 col-xs-12",style:{"align-self":"center","text-align":"center","margin-right":"16px"}},[(0,t._)("h4",null,"Su sesion esta a punto de expirar...")],-1),n={class:"full-width row justify-center items-center content-center",style:{"margin-bottom":"10px"}};function s(e,o,r,s,i,l){const c=(0,t.up)("q-btn"),u=(0,t.up)("q-card-section"),d=(0,t.up)("q-card"),m=(0,t.up)("q-dialog");return(0,t.wg)(),(0,t.j4)(m,{modelValue:e.warning,"onUpdate:modelValue":o[0]||(o[0]=o=>e.warning=o)},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{class:"q-pa-md",bordered:"",style:{width:"999px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[a,(0,t._)("div",n,[(0,t.Wm)(c,{label:"Continuar",type:"submit",color:"primary",class:"col-md-5 col-sm-5 col-xs-12"}),(0,t.Wm)(c,{label:"Cerrar Sesion",color:"primary",flat:"",class:"col-md-5 col-sm-5 col-xs-12 btnmovil",icon:"close"})])])),_:1})])),_:1})])),_:1},8,["modelValue"])}var i=r(589),l=r(51),c=r(5474),u=r(8825);const d={name:"userLogout",data:function(){return{axiosConfig:{headers:{Authorization:`Bearer ${i.Z.getItem("token")}`}},events:["logout"],warningTimer:null,logoutTimer:null,warning:null,error:""}},mounted(){this.traducirToken()},setup(){const e=(0,u.Z)();return{errorDelServidor(){e.notify({message:this.error,color:"red"})},añadidoConExito(){e.notify({message:"Agregado exitosamente",color:"green"})},editadoConExito(){e.notify({message:"Editado exitosamente",color:"green"})},eliminadoConExito(){e.notify({message:"Eliminado exitosamente",color:"green"})}}},methods:{getData:function(e,o,r){c.api.get(e,this.axiosConfig).then((e=>{this.$emit(o,e.data,r)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},getDataEdit:function(e,o,r){c.api.get(e,this.axiosConfig).then((e=>{this.$emit(o,e.data,r)})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},deleteData:function(e,o){c.api["delete"](e,this.axiosConfig).then((e=>{(e.status=200)&&(this.$emit(o),this.eliminadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},createData:function(e,o,r){c.api.post(e,o,this.axiosConfig).then((e=>{(e.status=200)&&(this.$emit(r),this.añadidoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},putData:function(e,o,r){c.api.put(e,o,this.axiosConfig).then((e=>{(e.status=200)&&(this.$emit(r),this.editadoConExito())})).catch((e=>{e.response&&(this.error=e.response.data.statusCode),(this.error="400")&&(this.error="Hubo un Error en la Carga de los Datos, Contacta con el Administrador del Sistema"),this.errorDelServidor()}))},traducirToken:function(){var e=(0,l.Z)(i.Z.getItem("token"));i.Z.set("tokenTraducido",e)},desactivarCrud(e,o,r,t){for(var a,n,s,l,c=i.Z.getItem("tokenTraducido"),u=0,d=c.usuario.roles.permisos.length;u<d;u++){if(c.usuario.roles.permisos[u].codigo===e&&(a=!0),1==a)break;if(u==c.usuario.roles.permisos.length.length-1)break}!0===a&&(e=!0);for(u=0,d=c.usuario.roles.permisos.length;u<d;u++){if(c.usuario.roles.permisos[u].codigo===o&&(n=!0),1==n)break;if(u==c.usuario.roles.permisos.length.length-1)break}!0===n&&(o=!0);for(u=0,d=c.usuario.roles.permisos.length;u<d;u++){if(c.usuario.roles.permisos[u].codigo===r&&(s=!0),1==s)break;if(u==c.usuario.roles.permisos.length.length-1)break}!0===s&&(r=!0,this.$emit(t,e,o,r));for(u=0,d=c.usuario.roles.permisos.length;u<d;u++){if("readItem"===c.usuario.roles.permisos[u].codigo&&(l=!0),1==l)break;if(u==c.usuario.roles.permisos.length.length-1)break}!0===l&&console.log("agregar permiso de mostrar")},desactivarOpciones(e,o,r,t,a,n,s){for(var l,c,u,d,m,p,h=i.Z.getItem("tokenTraducido"),g=0,b=h.usuario.roles.permisos.length;g<b;g++){if(h.usuario.roles.permisos[g].codigo==o&&(l=!0),1==l)break;if(g==h.usuario.roles.permisos.length.length-1)break}!0===l&&(o=!0);for(g=0,b=h.usuario.roles.permisos.length;g<b;g++){if(h.usuario.roles.permisos[g].codigo==r&&(c=!0),1==c)break;if(g==h.usuario.roles.permisos.length.length-1)break}!0===c&&(r=!0);for(g=0,b=h.usuario.roles.permisos.length;g<b;g++){if(h.usuario.roles.permisos[g].codigo===t&&(u=!0),1==u)break;if(g==h.usuario.roles.permisos.length.length-1)break}!0===u&&(t=!0);for(g=0,b=h.usuario.roles.permisos.length;g<b;g++){if(h.usuario.roles.permisos[g].codigo===a&&(d=!0),1==d)break;if(g==h.usuario.roles.permisos.length.length-1)break}!0===d&&(a=!0);for(g=0,b=h.usuario.roles.permisos.length;g<b;g++){if(h.usuario.roles.permisos[g].codigo===n&&(m=!0),1==m)break;if(g==h.usuario.roles.permisos.length.length-1)break}!0===m&&(n=!0);for(g=0,b=h.usuario.roles.permisos.length;g<b;g++){if(h.usuario.roles.permisos[g].codigo===s&&(p=!0),1==p)break;if(g==h.usuario.roles.permisos.length.length-1)break}!0===p&&(s=!0,this.$emit(e,o,r,t,a,n,s))},setTimers:function(){this.warningTimer=setTimeout(this.warningMessage,55e3),this.logoutTimer=setTimeout(this.logoutUser,6e4)},warningMessage:function(){this.warning=!0},logoutUser:function(){i.Z.remove("user"),this.$router.push("/login"),this.$q.notify({message:"Sesion expirada",color:"red"}),this.warningTimer=null,this.logoutTimer=null}}};var m=r(4260),p=r(6778),h=r(151),g=r(5589),b=r(8240),f=r(7518),v=r.n(f);const P=(0,m.Z)(d,[["render",s]]),C=P;v()(d,"components",{QDialog:p.Z,QCard:h.Z,QCardSection:g.Z,QBtn:b.Z})}},o={};function r(t){var a=o[t];if(void 0!==a)return a.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,r),n.exports}r.m=e,(()=>{var e=[];r.O=(o,t,a,n)=>{if(!t){var s=1/0;for(u=0;u<e.length;u++){for(var[t,a,n]=e[u],i=!0,l=0;l<t.length;l++)(!1&n||s>=n)&&Object.keys(r.O).every((e=>r.O[e](t[l])))?t.splice(l--,1):(i=!1,n<s&&(s=n));if(i){e.splice(u--,1);var c=a();void 0!==c&&(o=c)}}return o}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[t,a,n]}})(),(()=>{r.n=e=>{var o=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(o,{a:o}),o}})(),(()=>{r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((o,t)=>(r.f[t](e,o),o)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{78:"943ce253",225:"9bbfb956",470:"0b70f695",494:"89c273ca",557:"69f8055c",614:"a51233db",681:"a05dc007",823:"24439ee7",939:"5cfacfed",1176:"5fbd1361",1181:"f9a9a967",1304:"f1f95bde",1640:"de087637",1747:"4dc44596",2346:"b0f8119d",2424:"06bd238e",2709:"6bed174c",3014:"cc2b4fe3",3135:"717f5b27",3208:"7a0d30db",3569:"28e7ce12",3696:"9c7ca09e",3812:"3d0f52e8",4098:"834f7db2",4112:"e6ccc848",4171:"524c948e",4232:"fddbcc30",4291:"1e345c2a",4417:"c762ae27",4707:"d9dfc241",4872:"776fd14c",4975:"051c96bd",4989:"d1dbab1b",5007:"75a3af16",5020:"895e3625",5066:"822850dc",5189:"35641204",5194:"056905d8",5448:"160cc266",5458:"a19637ef",5565:"bfefd7a5",5761:"f2852901",5993:"0bbb4b36",6005:"ccb2876e",6440:"80e9f456",6478:"6962d2cb",6491:"f3a94fa7",6502:"520f64a9",6595:"af05cc62",6783:"a1d3aafa",6811:"27ff186d",6829:"4554762b",6960:"1a13b11d",7209:"cf90a965",7507:"429e7059",7510:"cb9b0ad5",8021:"e277a527",8184:"e01fc9b8",8475:"29fe15d7",8569:"57f84f36",8593:"6055b2c5",8717:"d24ec974",8823:"0c900657",8856:"a966d6f1",8930:"77b2e1c5",8948:"12f76d6d",8980:"ee435ac6",9139:"b99300ed",9185:"a5e54b17",9306:"e7339bec",9326:"420a027f",9445:"8039127a",9525:"f1228e97",9737:"9572fddc"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({2143:"app",4736:"vendor"}[e]||e)+"."+{823:"a987acbe",2143:"21fd47e7",3569:"a987acbe",4736:"4de67747",7209:"067870cf",8823:"8b709625"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o)})(),(()=>{var e={},o="test:";r.l=(t,a,n,s)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==o+n){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",o+n),i.src=t),e[t]=[a];var m=(o,r)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),o)return o(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,o,r,t)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,a.parentNode.removeChild(a),t(l)}};return a.onerror=a.onload=n,a.href=o,document.head.appendChild(a),a},o=(e,o)=>{for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var a=r[t],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===o))return a}var s=document.getElementsByTagName("style");for(t=0;t<s.length;t++){a=s[t],n=a.getAttribute("data-href");if(n===e||n===o)return a}},t=t=>new Promise(((a,n)=>{var s=r.miniCssF(t),i=r.p+s;if(o(s,i))return a();e(t,i,a,n)})),a={2143:0};r.f.miniCss=(e,o)=>{var r={823:1,3569:1,7209:1,8823:1};a[e]?o.push(a[e]):0!==a[e]&&r[e]&&o.push(a[e]=t(e).then((()=>{a[e]=0}),(o=>{throw delete a[e],o})))}})(),(()=>{var e={2143:0};r.f.j=(o,t)=>{var a=r.o(e,o)?e[o]:void 0;if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(((r,t)=>a=e[o]=[r,t]));t.push(a[2]=n);var s=r.p+r.u(o),i=new Error,l=t=>{if(r.o(e,o)&&(a=e[o],0!==a&&(e[o]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;i.message="Loading chunk "+o+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,a[1](i)}};r.l(s,l,"chunk-"+o,o)}},r.O.j=o=>0===e[o];var o=(o,t)=>{var a,n,[s,i,l]=t,c=0;if(s.some((o=>0!==e[o]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var u=l(r)}for(o&&o(t);c<s.length;c++)n=s[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},t=self["webpackChunktest"]=self["webpackChunktest"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var t=r.O(void 0,[4736],(()=>r(9323)));t=r.O(t)})();