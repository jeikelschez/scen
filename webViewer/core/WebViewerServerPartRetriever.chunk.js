(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[17],{394:function(t,e,s){function i(){return!1}function n(t,e,s){if(!(e in g))return!0;e=g[e];for(var i=0;i<e.length;i++){var n=t,r=e[i],h=s;if(r.name in n){var a="",u=!1;switch(n=n[r.name],r.type){case"s":a="String",u=Object(o.isString)(n);break;case"a":a="Array",u=Object(o.isArray)(n);break;case"n":a="Number",u=Object(o.isNumber)(n)&&Object(o.isFinite)(n);break;case"o":a="Object",u=Object(o.isObject)(n)&&!Object(o.isArray)(n)}u||h.reject('Expected response field "'+r.name+'" to have type '+a),r=u}else h.reject('Response missing field "'+r.name+'"'),r=!1;if(!r)return!1}return!0}s.r(e);var r=s(1),o=s(0);s.n(o);var h=s(2);t=s(48);var a=s(32),u=s(413),c=s(84),p=s(315),d=s(38),l=s(142),f=function(){function t(){this.request=this.result=null,this.state=0;var t=this;t.promise=new Promise((function(e,s){t.resolve=function(){0!==t.state&&4!==t.state||(t.state=1,t.result=arguments[0],e.apply(null,arguments))},t.reject=function(){0!==t.state&&4!==t.state||(t.state=2,s.apply(null,arguments))}}))}return t.prototype.Sq=function(){return 1===(1&this.state)},t.prototype.E7=function(){return 2===(2&this.state)},t.prototype.Jh=function(){return!this.E7()&&!this.Sq()},t.prototype.f7=function(){return 4===(4&this.state)},t.prototype.IH=function(){this.state|=4},t}(),b=function(){function t(){this.Eq={},this.sb=[]}return t.prototype.pop=function(){var t=this.sb.pop();return this.Eq[t.key]=void 0,t},t.prototype.push=function(t,e){e={key:t,data:e},this.sb.push(e),this.Eq[t]=e.data},t.prototype.contains=function(t){return!!this.Eq[t]},t.prototype.get=function(t){return this.Eq[t]},t.prototype.set=function(t,e){var s=this;this.Eq[t]=e,this.sb.forEach((function(e,i){e.key===t&&(s.sb[i]=e)}))},t.prototype.remove=function(t){var e=this;this.Eq[t]=void 0,this.sb.forEach((function(s,i){s.key===t&&e.sb.splice(i,1)}))},t.prototype.length=function(){return this.sb.length},t}(),g={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",type:"s"},{name:"rID",type:"s"}],health:[],tiles:[{name:"z",type:"n"},{name:"rID",type:"n"},{name:"tiles",type:"a"},{name:"size",type:"n"}],cAnnots:[{name:"annots",type:"a"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],ApString2Xod:[{name:"url",type:"s"},{name:"rID",type:"s"}]};s=function(){function t(t,e,s){var n=this;this.hI=this.SM=!1,this.jg=this.RB=this.Ur=this.qG=this.GD=this.Rk=null,this.Ak=new f,this.xn=new f,this.qy=!1,this.Ne=this.Ud=this.Vd=this.He=null,this.bf=[],this.Xy=[],this.cache={},this.timeStamp=0,this.dg=[],this.Th=[],this.zE=null,this.BM=!1,this.HS=this.id=null,this.fG=this.SO=i,this.Wg=0,this.yF=!1,this.oQ=1,this.Oh={},this.Ap=0,this.sr=new b,e.endsWith("/")||(e+="/"),s=s||{},this.SM=s.disableWebsockets||!1,this.hI=s.singleServerMode||!1,null!=s.customQueryParameters&&Object(d.b)("wvsQueryParameters",s.customQueryParameters),e.endsWith("blackbox/")||(e+="blackbox/"),this.Rk=s.uploadData||null,this.Ur=s.uriData||null,this.GD=s.cacheKey||null,this.qG=s.officeOptions||null,this.me=e,this.gE=t,this.xm(!0),this.Pp=new u.a(e,null,this.Jg()).C3(!this.SM,(function(t){n.V8(t)}),(function(){return null}),(function(){n.qy=!1}),(function(){n.Uaa()}))}return t.prototype.G0=function(){var t=this;return new Promise((function(e,s){var i=new XMLHttpRequest;i.open("GET",t.me+"ck"),i.withCredentials=t.Jg(),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(200===i.status?e():s())},i.send()}))},t.prototype.Zba=function(t){this.SO=t||i,this.fG=i},t.prototype.H_=function(){return this.mS(),this.Pp.Hn(!0)},t.prototype.mS=function(){Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(t){switch(t.label){case 0:return this.xn=new f,this.Ak=new f,this.qy=!1,this.id=null,this.BM=!1,[4,this.G0()];case 1:return t.ea(),[2]}}))}))},t.prototype.Uaa=function(){var t;for(this.SO(),this.mS(),this.He&&(this.He.Jh()?this.og(this.He.request):this.He.Sq()&&this.fG(this.He.result.url,"pdf")&&(this.He=null,this.lS())),this.Ne&&this.Ne.Jh()&&this.og(this.Ne.request),this.Vd&&this.Vd.Jh()?this.og(this.Vd.request):this.Ud&&this.Ud.Jh()&&this.GO(),t=0;t<this.dg.length;t++)this.dg[t]&&(this.dg[t].Jh()?this.og(this.dg[t].request):this.dg[t].Sq()&&this.fG(this.dg[t].result.url,"image")&&(this.dg[t]=null,this.$A(Object(o.uniqueId)(),t)));for(t=0;t<this.Th.length;t++)this.Th[t]&&this.Th[t].Jh()&&!this.Th[t].f7()&&this.og(this.Th[t].request);for(t=0;t<this.bf.length;t++)this.bf[t]&&this.bf[t].Jh()&&this.og(this.bf[t].request)},t.prototype.P6=function(){return this.qy?Promise.resolve():(this.qy=!0,this.timeStamp=Date.now(),this.Pp.Mz())},t.prototype.Uda=function(){var t,e,s,i,n,r=this;return new Promise((function(o,h){if(r.Rk)t=new FormData,t.append("file",r.Rk.fileHandle,r.Rk.fileHandle.name),e=r.Rk.loadCallback,i="upload",s=r.Rk.extension;else{if(!r.Ur)return void o();t={uri:r.Ur.uri,Bka:r.Ur.shareId},t=Object.keys(t).map((function(e){return e+"="+(t[e]?encodeURIComponent(t[e]):"")})).join("&"),n="application/x-www-form-urlencoded; charset=UTF-8",e=r.Ur.loadCallback,i="url",s=r.Ur.extension}var u=new XMLHttpRequest,c=Object(a.h)(r.me,"AuxUpload");c=Object(l.a)(c,{type:i,ext:s}),u.open("POST",c),u.withCredentials=r.Jg(),n&&u.setRequestHeader("Content-Type",n),u.addEventListener("load",(function(){if(u.readyState===u.DONE&&200===u.status){var t=JSON.parse(u.response);r.gE=t.uri,e(t),o(t)}})),u.addEventListener("error",(function(){h(u.statusText+" "+JSON.stringify(u))})),r.Rk&&null!=r.Rk.onProgress&&(u.upload.onprogress=function(t){r.Rk.onProgress(t)}),u.send(t)}))},t.prototype.Kaa=function(t){return this.password=t||null,this.Ak.Sq()||(this.Ak=new f,this.og({t:"pages"})),this.Ak.promise},t.prototype.qv=function(t){return this.zE=t||null,this.Ak.Sq()||this.og({t:"pages"}),this.Ak.promise},t.prototype.qt=function(t){return t=Object.assign(t,{uri:encodeURIComponent(this.gE)}),this.zE&&(t.ext=this.zE),this.jg&&(t.c=this.jg),this.password&&(t.pswd=this.password),this.GD&&(t.cacheKey=this.GD),this.qG&&(t.officeOptions=this.qG),t},t.prototype.qba=function(){0<this.sr.length()&&10>=this.Ap&&this.rba(this.sr.pop().data)},t.prototype.j_=function(t){0<this.sr.length()&&this.sr.contains(t)&&this.sr.remove(t)},t.prototype.og=function(t){t=this.qt(t),this.Pp.send(t)},t.prototype.CS=function(t,e){10<this.Ap?this.sr.push(t,e):(this.Ap++,t=this.qt(e),this.Pp.send(t))},t.prototype.rba=function(t){this.Ap++,t=this.qt(t),this.Pp.send(t)},t.prototype.Pj=function(t){return t},t.prototype.RO=function(t){this.hI&&t?Object(h.j)("Server failed health check. Single server mode ignoring check."):!this.Nga&&t&&3>=this.Wg?(this.yF=!0,this.Pp.Hn()):3<this.Wg&&(this.hI=!0)},t.prototype.V8=function(t){var e=this,s=t.data,i=t.err,r=t.t;switch(r){case"upload":i?this.Vda.reject(i):this.Vda.resolve("Success");break;case"pages":i?this.Ak.reject(i):n(s,r,this.Ak)&&this.Ak.resolve(s);break;case"config":if(i)this.xn.reject(i);else if(n(s,r,this.xn)){if(this.RO(s.unhealthy),s.id&&(this.id=s.id),s.auth){var a=Object(d.a)("wvsQueryParameters");a.auth=s.auth,Object(d.b)("wvsQueryParameters",a)}s.serverVersion&&(this.RB=s.serverVersion,Object(h.h)("[WebViewer Server] server version: "+this.RB)),s.serverID?(this.Wg=s.serverID===this.HS&&this.yF?this.Wg+1:0,this.HS=s.serverID):this.Wg=0,this.yF=!1,this.xn.resolve(s)}break;case"health":i?this.xn.reject(i):n(s,r,this.xn)&&this.RO(s.unhealthy);break;case"pdf":s.url=Object(l.a)(this.me+"../"+encodeURI(s.url)),i?this.He.reject(i):n(s,r,this.He)&&this.He.resolve(s);break;case"ApString2Xod":s.url=Object(l.a)(this.me+"../data/"+encodeURI(s.url)),i?this.Oh[s.rID].reject(i):n(s,r,this.Oh[s.rID])&&this.Oh[s.rID].resolve(s);break;case"docmod":s.url=Object(l.a)(this.me+"../"+encodeURI(s.url)),i?this.Oh[s.rID].reject(i):n(s,r,this.He)&&this.Oh[s.rID].resolve(s);break;case"xod":i?(this.Vd&&this.Vd.Jh()&&this.Vd.reject(i),this.Ud&&this.Ud.Jh()&&this.Ud.reject(i)):s.notFound?(s.noCreate||this.Vd&&this.Vd.Jh()&&this.Vd.resolve(s),this.Ud&&this.Ud.Jh()&&this.Ud.resolve(s)):(s.url&&(s.url=Object(l.a)(this.me+"../"+encodeURI(s.url))),this.Ud&&!this.Ud.Sq()||(this.Ud=new f,this.Ud.request={t:"xod",noCreate:!0}),this.Vd||(this.Vd=new f,this.Vd.request={t:"xod"}),this.Ud.resolve(s),this.Vd.resolve(s));break;case"cAnnots":if(a=this.Ne,i)a.reject(i);else if(n(s,r,a)){a.IH();var u=[],p=s.annots;s=function(t){var s=p[t].s,i=p[t].e,n=b.me+"../"+encodeURI(p[t].xfdf),r="true"===p[t].hasAppearance?Object(l.a)(n+".xodapp"):null,h=Object(o.range)(s,i+1);u[t]={range:h,promise:new Promise((function(t,s){var i=new XMLHttpRequest;i.open("GET",Object(l.a)(n)),i.responseType="text",i.withCredentials=e.Jg(),i.addEventListener("load",(function(){i.readyState===i.DONE&&200===i.status&&t({Zo:i.response,Hj:r,range:h})})),i.addEventListener("error",(function(){s(i.statusText+" "+JSON.stringify(i))})),i.send()}))}};var b=this;for(i=0;i<p.length;i++)s(i);a.resolve(u)}break;case"annots":if(i)this.Ne.reject(i);else if(n(s,r,this.Ne)){this.Ne.IH();var g=new XMLHttpRequest;a=this.me+"../"+encodeURI(s.url);var v=s.hasAppearance?Object(l.a)(a+".xodapp"):null;g.open("GET",Object(l.a)(a)),g.responseType="text",g.withCredentials=this.Jg(),g.addEventListener("load",(function(){g.readyState===g.DONE&&200===g.status&&e.Ne.resolve({Zo:g.response,Hj:v})})),g.addEventListener("error",(function(){e.Ne.reject(g.statusText+" "+JSON.stringify(g))})),g.send()}break;case"image":this.Ap--;var y=this.dg[s.p];i?y.promise.reject(i):n(s,r,y)&&(y.result=s,y.result.url=Object(l.a)(this.me+"../"+encodeURI(y.result.url)),y.resolve(y.result));break;case"tiles":if(this.Ap--,y=s.rID,a=this.bf[y],this.bf[y]=null,this.Xy.push(y),i)a.reject(i);else if(n(s,r,a)){for(i=0;i<s.tiles.length;i++)s.tiles[i]=Object(l.a)(this.me+"../"+encodeURI(s.tiles[i]));a.resolve(s)}break;case"text":if(y=this.Th[s.p],i)y.reject(i);else if(n(s,r,y)){y.IH();var m=new XMLHttpRequest;s=Object(l.a)(this.me+"../"+encodeURI(s.url)),m.open("GET",s),m.withCredentials=this.Jg(),m.addEventListener("load",(function(){m.readyState===m.DONE&&200===m.status&&(y.result=JSON.parse(m.response),y.resolve(y.result))})),m.addEventListener("error",(function(t){y.reject(m.statusText+" "+JSON.stringify(t))})),m.send()}break;case"progress":"loading"===s.t&&this.trigger(c.a.Events.DOCUMENT_LOADING_PROGRESS,[s.bytes,s.total])}this.qba(),!r&&t.echo&&t&&"apstring2xod"===t.echo.t&&(t=t.echo.reqID)&&(2<=parseInt(this.RB,10)?this.Oh[t].reject("Message unhandled by server"):this.Oh[t].reject())},t.prototype.j4=function(){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(t){switch(t.label){case 0:return[4,this.P6()];case 1:return t.ea(),[2,this.xn.promise]}}))}))},t.prototype.Q3=function(t){for(var e=this,s=new XMLHttpRequest,i=Object(l.a)(this.me+"aul",{id:this.id}),n=new FormData,r={},o=0;o<t.body.length;o++){var h=t.body[o];r[h.id]=h.vD.w+";"+h.vD.h,n.append(h.id,h.vD.dataString)}t={t:"apstring2xod",reqID:this.oQ++,parts:r};var a=this.qt(t);return n.append("msg",JSON.stringify(a)),this.Oh[a.reqID]=new f,s.open("POST",i),s.withCredentials=this.Jg,i=new Promise((function(t,e){s.onreadystatechange=function(){4===s.readyState&&(200===s.status?t():e("An error occurred while sending down appearance strings to the server"))}})),s.send(n),i.then((function(){return e.Oh[a.reqID].promise}))},t.prototype.J_=function(){var t=this.RB.split("-")[0].split("."),e=["1","5","9"];if(3!==t.length)throw Error("Invalid WVS version length.");if(3!==e.length)throw Error("Invalid version length.");for(var s=0;s<t.length;++s){if(e.length===s||t[s]>e[s])return-1;if(t[s]!==e[s])return 1}return 0},t.prototype.un=function(){return 0>=this.J_()},t.prototype.IE=function(){return this.Ne||(this.Ne=new f,this.un()?this.Ne.request={t:"cAnnots"}:this.Ne.request={t:"annots"},this.og(this.Ne.request)),this.Ne.promise},t.prototype.$A=function(t,e){return this.dg[e]||(this.dg[e]=new f,this.dg[e].request={t:"image",p:e},this.CS(t,this.dg[e].request)),this.dg[e].promise},t.prototype.Laa=function(t){return this.Th[t]||(this.Th[t]=new f,this.Th[t].request={t:"text",p:t},this.og(this.Th[t].request)),this.Th[t].promise},t.prototype.Maa=function(t,e,s,i,n){var r=this.bf.length;return this.Xy.length&&(r=this.Xy.pop()),this.bf[r]=new f,this.bf[r].request={t:"tiles",p:e,z:s,r:i,size:n,rID:r},this.CS(t,this.bf[r].request),this.bf[r].promise},t.prototype.lS=function(){return this.He||(this.He=new f,this.He.request={t:"pdf"},this.BM?this.He.resolve({url:this.gE}):this.og(this.He.request)),this.He.promise},t.prototype.lO=function(t){var e=this,s=new XMLHttpRequest,i=Object(l.a)(this.me+"aul",{id:this.id}),n=new FormData,r={};t.annots&&(r.annots="xfdf"),t.watermark&&(r.watermark="png"),t.redactions&&(r.redactions="redact"),r={t:"docmod",reqID:this.oQ++,parts:r},t.print&&(r.print=!0);var o=this.qt(r);return n.append("msg",JSON.stringify(o)),Promise.all([t.annots,t.watermark,t.redactions].map((function(t){return Promise.resolve(t)}))).then((function(t){var r=t[0],h=t[1];return t=t[2],r&&n.append("annots",r),h&&n.append("watermark",h),t&&n.append("redactions",t),e.Oh[o.reqID]=new f,s.open("POST",i),s.withCredentials=e.Jg,r=new Promise((function(t,e){s.onreadystatechange=function(){4===s.readyState&&(200===s.status?t():e("An error occurred while sending down annotation data to the server"))}})),s.send(n),r.then((function(){return e.Oh[o.reqID].promise}))}))},t.prototype.GO=function(){return this.Ud||(this.Ud=new f,this.Ud.request={t:"xod",noCreate:!0},this.og(this.Ud.request)),this.Ud.promise},t.prototype.Naa=function(){return this.Vd||(this.Vd=new f,this.Vd.request={t:"xod"},this.og(this.Vd.request)),this.Vd.promise},t.prototype.sm=function(){return!0},t.prototype.request=function(){},t.prototype.GR=function(){},t.prototype.abort=function(){for(var t=0;t<this.bf.length;t++)this.bf[t]&&(this.bf[t].resolve(null),this.bf[t]=null,this.Xy.push(t));this.close()},t.prototype.jB=function(t){this.jg=this.jg||{},this.jg.headers=t},t.prototype.xm=function(t){this.jg=this.jg||{},this.jg.internal=this.jg.internal||{},this.jg.internal.withCredentials=t},t.prototype.Jg=function(){return this.jg&&this.jg.internal?this.jg.internal.withCredentials:null},t.prototype.getFileData=function(){return Promise.reject()},t}(),Object(t.a)(s),Object(p.a)(s),Object(p.b)(s),e["default"]=s},413:function(t,e,s){var i=s(1),n=s(2),r=s(32),o=s(38),h=s(142),a=s(103),u=function(){function t(t,e,s,i,n,r){void 0===s&&(s=null),void 0===i&&(i=null),void 0===n&&(n=null),void 0===r&&(r=null),this.XP=!1,this.Wg=0,this.SL=this.lea(t),this.url=e?this.SL+"/"+e:this.SL+"/ws",this.cE=s,this.Tu=i,this.nt=n,this.rH=r}return t.prototype.lea=function(t){var e=t.indexOf("://"),s="ws://";0>e?e=0:(5===e&&(s="wss://"),e+=3);var i=t.lastIndexOf("/");return 0>i&&(i=t.length),s+t.slice(e,i)},t.prototype.send=function(t){this.Hm.readyState===WebSocket.CLOSED||this.XP||this.Hm.send(JSON.stringify(t))},t.prototype.Mz=function(){return Object(i.b)(this,void 0,void 0,(function(){var t,e=this;return Object(i.d)(this,(function(){return t=Object(o.a)("wvsQueryParameters"),t.bcid=Object(r.i)(8),Object(o.b)("wvsQueryParameters",t),[2,new Promise((function(t,s){var n=Object(h.a)(e.url);e.Hm=new WebSocket(n),e.Hm.onopen=function(){e.Tu&&e.Tu(),t()},e.Hm.onerror=function(t){e.XP=!0,s(t)},e.Hm.onclose=function(t){var n=t.code;return Object(i.b)(e,void 0,void 0,(function(){var t=this;return Object(i.d)(this,(function(e){switch(e.label){case 0:return this.nt&&this.nt(),3e3===n?[3,3]:8>this.Wg++?[4,new Promise((function(e){return setTimeout((function(){return Object(i.b)(t,void 0,void 0,(function(){return Object(i.d)(this,(function(t){switch(t.label){case 0:return this.rH(),[4,this.Mz()];case 1:return t.ea(),e(),[2]}}))}))}),3e3)}))]:[3,2];case 1:return e.ea(),[3,3];case 2:s(a.a),e.label=3;case 3:return[2]}}))}))},e.Hm.onmessage=function(t){t&&t.data&&(t=JSON.parse(t.data),t.hb?e.send({hb:!0}):t.end?close():e.cE(t))}}))]}))}))},t.prototype.Hn=function(t){return void 0===t&&(t=!1),this.Wg=0,t?this.Hm.close(3e3):this.Hm.close(),Promise.resolve()},t}(),c=function(){function t(t,e,s,i,n,r,o){void 0===i&&(i=null),void 0===n&&(n=null),void 0===r&&(r=null),void 0===o&&(o=null),this.Wg=this.ZA=this.id=0,this.iu=!1,this.request=null,t=this.o$(t),this.url=e?t+"/"+e+"pf":t+"/pf",this.LB=s,this.cE=i,this.Tu=n,this.nt=r,this.rH=o}return t.prototype.o$=function(t){var e=t.lastIndexOf("/");return 0>e&&(e=t.length),t.slice(0,e)},t.prototype.r0=function(t){for(t=t.split("\n"),t[t.length-1]&&t.pop();0<t.length&&3>t[t.length-1].length;)"]"===t.pop()&&(this.id=0);0<t.length&&3>t[0].length&&t.shift();for(var e=0;e<t.length;++e)t[e].endsWith(",")&&(t[e]=t[e].substr(0,t[e].length-1));return t},t.prototype.uS=function(){return Object(i.b)(this,void 0,void 0,(function(){var t=this;return Object(i.d)(this,(function(e){switch(e.label){case 0:return 8>this.Wg++?[4,new Promise((function(e){return setTimeout((function(){t.rH(),t.Mz(),e()}),3e3)}))]:[3,2];case 1:e.ea(),e.label=2;case 2:return[2]}}))}))},t.prototype.q$=function(t){Object(i.b)(this,void 0,void 0,(function(){var e,s;return Object(i.d)(this,(function(i){switch(i.label){case 0:e=null,s=0,i.label=1;case 1:return s<t.length?(e=JSON.parse(t[s]),e?e.end?(close(),[3,5]):[3,2]:[3,5]):[3,6];case 2:return e.id&&Number(e.id)!==this.id?(Object(n.j)("Reconnecting, new server detected"),this.Hn(),[4,this.uS()]):[3,4];case 3:return i.ea(),[3,5];case 4:e.hb&&Number(e.id)===this.id?this.send({hb:!0}):this.iu||this.cE(e),i.label=5;case 5:return++s,[3,1];case 6:return[2]}}))}))},t.prototype.S8=function(t){Object(i.b)(this,void 0,void 0,(function(){var e,s,r;return Object(i.d)(this,(function(i){switch(i.label){case 0:if(!(3<=t.readyState))return[3,2];try{e=t.responseText.length}catch(o){return Object(n.h)("caught exception"),[2]}if(0<e)try{s=this.r0(t.responseText),0===this.id&&0<s.length&&(r=JSON.parse(s.shift()),this.id=r.id,this.Wg=0),this.q$(s)}catch(o){}return this.iu?[3,2]:[4,this.uN()];case 1:i.ea(),i.label=2;case 2:return[2]}}))}))},t.prototype.uN=function(){return Object(i.b)(this,void 0,void 0,(function(){var t=this;return Object(i.d)(this,(function(){return[2,new Promise((function(e,s){function n(){return Object(i.b)(t,void 0,void 0,(function(){return Object(i.d)(this,(function(t){switch(t.label){case 0:s(),this.Hn(),t.label=1;case 1:return this.iu&&8>this.Wg?[4,this.uS()]:[3,3];case 2:return t.ea(),[3,1];case 3:return[2]}}))}))}t.request=new XMLHttpRequest,t.request.withCredentials=t.LB;var r=Object(h.a)(t.url,0!==t.id?{id:String(t.id),uc:String(t.ZA)}:{uc:String(t.ZA)});t.ZA++,t.request.open("GET",r,!0),t.request.setRequestHeader("Cache-Control","no-cache"),t.request.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.request.onreadystatechange=function(){t.S8(t.request)},t.request.addEventListener("error",n),t.request.addEventListener("timeout",n),t.request.addEventListener("load",(function(){t.Tu&&t.Tu(),e()})),t.request.send()}))]}))}))},t.prototype.Mz=function(){var t=Object(o.a)("wvsQueryParameters");return t.bcid=Object(r.i)(8),Object(o.b)("wvsQueryParameters",t),this.ZA=this.id=0,this.iu=!1,this.uN()},t.prototype.send=function(t){var e=this,s=new XMLHttpRequest;s.withCredentials=this.LB;var i=Object(h.a)(this.url,{id:String(this.id)}),n=new FormData;n.append("data",JSON.stringify(t)),s.addEventListener("error",(function(){e.Hn()})),s.open("POST",i),s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.send(n)},t.prototype.Hn=function(){return this.id=0,this.iu=!0,this.nt&&this.nt(),this.request.abort(),Promise.resolve()},t}();t=function(){function t(t,e,s){this.nM=t,this.target=e,this.LB=s}return t.prototype.C3=function(t,e,s,i,n){return void 0===t&&(t=!0),void 0===e&&(e=null),void 0===s&&(s=null),void 0===i&&(i=null),void 0===n&&(n=null),t?new u(this.nM,this.target,e,s,i,n):new c(this.nM,this.target,this.LB,e,s,i,n)},t}(),e.a=t}}])}).call(this||window);