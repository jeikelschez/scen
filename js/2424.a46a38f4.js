"use strict";(globalThis["webpackChunktest"]=globalThis["webpackChunktest"]||[]).push([[2424],{42424:(e,a,l)=>{l.r(a),l.d(a,{default:()=>U});var n=l(83673),i=l(62323);const o={class:"row q-col-gutter-sm"},t={class:"col-lg-12 col-md-12 col-sm-12 col-xs-12"};function r(e,a,l,r,s,d){const c=(0,n.up)("q-icon"),u=(0,n.up)("q-input"),m=(0,n.up)("q-tooltip"),p=(0,n.up)("q-btn"),f=(0,n.up)("q-table"),g=(0,n.up)("q-card-section"),b=(0,n.up)("q-card"),w=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",t,[(0,n.Wm)(b,{class:"text-grey-8"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{class:"q-pa-none"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{class:"no-shadow",rows:e.rows,title:"Registro de usuarios","hide-header":"grid"===e.mode,columns:e.columns,"row-key":"name",filter:e.filter,pagination:e.pagination,"onUpdate:pagination":a[1]||(a[1]=a=>e.pagination=a)},{"top-right":(0,n.w5)((l=>[(0,n.Wm)(u,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":a[0]||(a[0]=a=>e.filter=a),placeholder:"Busqueda"},{append:(0,n.w5)((()=>[(0,n.Wm)(c,{name:"search"})])),_:1},8,["modelValue"]),"list"===e.mode?((0,n.wg)(),(0,n.j4)(p,{key:0,flat:"",round:"",dense:"",icon:l.inFullscreen?"fullscreen_exit":"fullscreen",onClick:l.toggleFullscreen,class:"q-px-sm"},{default:(0,n.w5)((()=>[(0,n.wy)(((0,n.wg)(),(0,n.j4)(m,{disable:e.$q.platform.is.mobile},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(l.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)])),_:2},1032,["disable"])),[[w]])])),_:2},1032,["icon","onClick"])):(0,n.kq)("",!0),(0,n.Wm)(p,{color:"primary","icon-right":"archive",label:"Exportar a CSV","no-caps":"",onClick:e.exportTable},null,8,["onClick"])])),_:1},8,["rows","hide-header","columns","filter","pagination"])])),_:1})])),_:1})])])}var s=l(12841),d=l(48825),c=l(61959);function u(e,a){let l=void 0!==a?a(e):e;return l=void 0===l||null===l?"":String(l),l=l.split('"').join('""'),`"${l}"`}const m=[{name:"id",align:"left",label:"User ID",field:"id",sortable:!0},{name:"user_name",align:"left",label:"User Name",field:"user_name",sortable:!0},{name:"desc",required:!0,label:"Page",align:"left",field:e=>e.name,sortable:!0},{name:"date",align:"right",label:"Date",field:"date",sortable:!0}],p=[{id:"U0001",name:"/login",date:"12-10-2019",user_name:"Pratik Patel"},{id:"U0002",name:"/Dashboard",date:"11-02-2019",user_name:"Razvan Stoenescu"},{id:"U0003",name:"/Map",date:"03-25-2019",user_name:"Pratik Patel"},{id:"U0004",name:"/Mail",date:"03-18-2019",user_name:"Jeff Galbraith"},{id:"U0005",name:"/Profile",date:"04-09-2019",user_name:"Pratik Patel"}],f=(0,n.aZ)({name:"TableVisits",setup(){const e=(0,d.Z)(),a=(0,c.iH)("");return{filter:a,mode:"list",columns:m,rows:p,pagination:{rowsPerPage:10},exportTable(){const a=[m.map((e=>u(e.label)))].concat(p.map((e=>m.map((a=>u("function"===typeof a.field?a.field(e):e[void 0===a.field?a.name:a.field],a.format))).join(",")))).join("\r\n"),l=(0,s.Z)("table-export.csv",a,"text/csv");!0!==l&&e.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}}});var g=l(74260),b=l(10151),w=l(25589),h=l(17352),k=l(34842),_=l(24554),q=l(48240),v=l(5363),Z=l(60677),P=l(7518),x=l.n(P);const C=(0,g.Z)(f,[["render",r]]),U=C;x()(f,"components",{QCard:b.Z,QCardSection:w.Z,QTable:h.Z,QInput:k.Z,QIcon:_.Z,QBtn:q.Z,QTooltip:v.Z}),x()(f,"directives",{ClosePopup:Z.Z})}}]);