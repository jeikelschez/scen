(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[24],{401:function(t,e,n){n.r(e);var i=n(1),a=n(14),o=n(2);t=n(48);var r=n(32),s=n(9);n=function(){function t(){this.init()}return t.prototype.init=function(){this.I_=!1,this.me=this.Lj=this.connection=null,this.Ip={},this.xa=this.MB=null},t.prototype.Ida=function(t){for(var e=this,n=0;n<t.length;++n){var i=t[n];switch(i.at){case"create":this.Ip[i.author]||(this.Ip[i.author]=i.aName),this.J6(i);break;case"modify":this.xa.Kq(i.xfdf).then((function(t){e.xa.IR(t[0])}));break;case"delete":this.xa.Kq("<delete><id>"+i.aId+"</id></delete>")}}},t.prototype.J6=function(t){var e=this;this.xa.Kq(t.xfdf).then((function(n){n=n[0],n.authorId=t.author,e.xa.IR(n),e.xa.trigger(a.a.UPDATE_ANNOTATION_PERMISSION,[n])}))},t.prototype.l6=function(t,e,n){this.Lj&&this.Lj(t,e,n)},t.prototype.preloadAnnotations=function(t){this.addEventListener("webViewerServerAnnotationsEnabled",this.l6.bind(this,t,"add",{imported:!1}),{once:!0})},t.prototype.initiateCollaboration=function(e,n,i){var s=this;if(e){s.me=n,s.xa=i.Ga(),i.addEventListener(a.d.DOCUMENT_UNLOADED,(function(){s.disableCollaboration()})),s.eea(e);var d=new XMLHttpRequest;d.addEventListener("load",(function(){if(200===d.status&&0<d.responseText.length)try{var n=JSON.parse(d.responseText);s.connection=exports.Na.Oea(Object(r.h)(s.me,"blackbox/"),"annot"),s.MB=n.id,s.Ip[n.id]=n.user_name,s.xa.PS(n.id),s.connection.Ika((function(t){t.t&&t.t.startsWith("a_")&&t.data&&s.Ida(t.data)}),(function(){s.connection.send({t:"a_retrieve",dId:e}),s.trigger(t.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,[s.Ip[n.id],s.MB])}),(function(){s.disableCollaboration()}))}catch(i){Object(o.g)(i.message)}})),d.open("GET",Object(r.h)(this.me,"demo/SessionInfo.jsp")),d.withCredentials=!0,d.send(),s.I_=!0,s.xa.yba((function(t){return s.Ip[t.Author]||t.Author}))}else Object(o.g)("Document ID required for collaboration")},t.prototype.disableCollaboration=function(){this.Lj&&(this.xa.removeEventListener(s.a.Events.ANNOTATION_CHANGED,this.Lj),this.Lj=null),this.connection&&this.connection.Hn(),this.xa&&this.xa.PS("Guest"),this.init(),this.trigger(t.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED)},t.prototype.eea=function(t){var e=this;this.Lj&&this.xa.removeEventListener(s.a.Events.ANNOTATION_CHANGED,this.Lj),this.Lj=function(n,a,o){return Object(i.b)(this,void 0,void 0,(function(){var r,s,d,h,c,l,u,E,I;return Object(i.d)(this,(function(i){switch(i.label){case 0:return o.imported?[2]:(r={t:"a_"+a,dId:t,annots:[]},[4,e.xa.W2()]);case 1:for(s=i.ea(),"delete"!==a&&(d=(new DOMParser).parseFromString(s,"text/xml"),h=new XMLSerializer),c=0;c<n.length;c++)l=n[c],E=u=void 0,"add"===a?(u=d.querySelector('[name="'+l.Id+'"]'),E=h.serializeToString(u),I=null,l.InReplyTo&&(I=e.xa.GE(l.InReplyTo).authorId||"default"),r.annots.push({at:"create",aId:l.Id,author:e.MB,aName:e.Ip[e.MB],parent:I,xfdf:"<add>"+E+"</add>"})):"modify"===a?(u=d.querySelector('[name="'+l.Id+'"]'),E=h.serializeToString(u),r.annots.push({at:"modify",aId:l.Id,xfdf:"<modify>"+E+"</modify>"})):"delete"===a&&r.annots.push({at:"delete",aId:l.Id});return 0<r.annots.length&&e.connection.send(r),[2]}}))}))}.bind(e),this.xa.addEventListener(s.a.Events.ANNOTATION_CHANGED,this.Lj)},t.Events={WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:"webViewerServerAnnotationsEnabled",WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:"webViewerServerAnnotationsDisabled"},t}(),Object(t.a)(n),e["default"]=n}}])}).call(this||window);