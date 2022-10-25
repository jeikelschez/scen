(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[15],{392:function(t,e,s){s.r(e);var r=s(1),i=s(0);s.n(i);var n=s(2),a=s(132);t=s(48);var h=s(84),u=s(216),o=s(61),c=s(215);s=s(315);var E,d=window,f=function(){function t(t,e,s){var r=-1===t.indexOf("?")?"?":"&";switch(e){case o.a.NEVER_CACHE:this.url=t+r+"_="+Object(i.uniqueId)();break;default:this.url=t}this.ze=s,this.request=new XMLHttpRequest,this.request.open("GET",this.url,!0),this.request.setRequestHeader("X-Requested-With","XMLHttpRequest"),this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined"),this.status=c.a.NOT_STARTED}return t.prototype.start=function(e,s){var r,i=this,n=this,a=this.request;n.Au=0,e&&Object.keys(e).forEach((function(t){i.request.setRequestHeader(t,e[t])})),s&&(this.request.withCredentials=s),this.PA=setInterval((function(){var e=0===window.document.URL.indexOf("file:///");if(e=200===a.status||e&&0===a.status,a.readyState!==c.b.DONE||e){try{a.responseText}catch(s){return}n.Au<a.responseText.length&&(r=n.v$())&&n.trigger(t.Events.DATA,[r]),0===a.readyState&&(clearInterval(n.PA),n.trigger(t.Events.DONE))}else clearInterval(n.PA),n.trigger(t.Events.DONE,["Error received return status "+a.status])}),1e3),this.request.send(null),this.status=c.a.STARTED},t.prototype.v$=function(){var e=this.request,s=e.responseText;if(0!==s.length){if(this.Au!==s.length)return s=Math.min(this.Au+3e6,s.length),e=d.tO(e,this.Au,!0,s),this.Au=s,e;clearInterval(this.PA),this.trigger(t.Events.DONE)}},t.prototype.abort=function(){clearInterval(this.PA);var e=this;this.request.onreadystatechange=function(){return Object(n.j)("StreamingRequest aborted"),e.status=c.a.ABORTED,e.trigger(t.Events.ABORTED)},this.request.abort()},t.prototype.finish=function(){var e=this;this.request.onreadystatechange=function(){return e.status=c.a.SUCCESS,e.trigger(t.Events.DONE)},this.request.abort()},t.Events={DONE:"done",DATA:"data",ABORTED:"aborted"},t}();Object(t.a)(f),function(t){t[t.LOCAL_HEADER=0]="LOCAL_HEADER",t[t.FILE=1]="FILE",t[t.CENTRAL_DIR=2]="CENTRAL_DIR"}(E||(E={}));var l=function(t){function e(){var e=t.call(this)||this;return e.buffer="",e.state=E.LOCAL_HEADER,e.gI=4,e.sk=null,e.br=a.c,e.Ml={},e}return Object(r.c)(e,t),e.prototype.p$=function(t){var s;for(t=this.buffer+t;t.length>=this.br;)switch(this.state){case E.LOCAL_HEADER:if(this.sk=s=this.z$(t.slice(0,this.br)),s.Fr!==a.g)throw Error("Wrong signature in local header: "+s.Fr);t=t.slice(this.br),this.state=E.FILE,this.br=s.ED+s.so+s.Ht+this.gI,this.trigger(e.Events.HEADER,[s]);break;case E.FILE:this.sk.name=t.slice(0,this.sk.so),this.Ml[this.sk.name]=this.sk,s=this.br-this.gI;var r=t.slice(this.sk.so+this.sk.Ht,s);if(this.trigger(e.Events.FILE,[this.sk.name,r,this.sk.TD]),t=t.slice(s),t.slice(0,this.gI)!==a.h)return this.state=E.CENTRAL_DIR,!0;this.state=E.LOCAL_HEADER,this.br=a.c}return this.buffer=t,!1},e.Events={HEADER:"header",FILE:"file"},e}(u.a);Object(t.a)(l),t=function(t){function e(e,s,r,i,n){return r=t.call(this,e,r,i)||this,r.url=e,r.stream=new f(e,s),r.qd=new l,r.gR=window.createPromiseCapability(),r.HR={},r.ze=n,r}return Object(r.c)(e,t),e.prototype.qv=function(t){var e=this;return this.request([this.ji,this.sj,this.ii]),this.stream.addEventListener(f.Events.DATA,(function(s){try{if(e.qd.p$(s))return e.stream.finish()}catch(r){throw e.stream.abort(),e.Et(r),t(r),r}})),this.stream.addEventListener(f.Events.DONE,(function(s){e.W9=!0,e.gR.resolve(),s&&(e.Et(s),t(s))})),this.qd.addEventListener(l.Events.HEADER,Object(i.bind)(this.GR,this)),this.qd.addEventListener(l.Events.FILE,Object(i.bind)(this.P$,this)),this.stream.start(this.ze,this.withCredentials)},e.prototype.rO=function(t){var e=this;this.gR.promise.then((function(){t(Object.keys(e.qd.Ml))}))},e.prototype.sm=function(){return!0},e.prototype.request=function(t){var e=this;this.W9&&t.forEach((function(t){e.HR[t]||e.Bda(t)}))},e.prototype.GR=function(){},e.prototype.abort=function(){this.stream&&this.stream.abort()},e.prototype.Bda=function(t){this.trigger(h.a.Events.PART_READY,[{Ta:t,error:"Requested part not found",uh:!1,nf:!1}])},e.prototype.P$=function(t,e,s){this.HR[t]=!0,this.trigger(h.a.Events.PART_READY,[{Ta:t,data:e,uh:!1,nf:!1,error:null,Ac:s}])},e}(h.a),Object(s.a)(t),Object(s.b)(t),e["default"]=t}}])}).call(this||window);