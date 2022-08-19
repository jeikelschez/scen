(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{447:function(t,e,n){n.r(e);var r,o=n(1),i=n(474),u=n(475);(function(t){t[t.EXTERNAL_XFDF_NOT_REQUESTED=0]="EXTERNAL_XFDF_NOT_REQUESTED",t[t.EXTERNAL_XFDF_NOT_AVAILABLE=1]="EXTERNAL_XFDF_NOT_AVAILABLE",t[t.EXTERNAL_XFDF_AVAILABLE=2]="EXTERNAL_XFDF_AVAILABLE"})(r||(r={})),t=function(){function t(t){this.aa=t,this.state=r.EXTERNAL_XFDF_NOT_REQUESTED}return t.prototype.Xca=function(){var t=this;return function(e,n,i){return Object(o.b)(t,void 0,void 0,(function(){var t,u,a,l,c,f,s,h,p=this;return Object(o.d)(this,(function(o){switch(o.label){case 0:return this.state!==r.EXTERNAL_XFDF_NOT_REQUESTED?[3,2]:(t=this.aa.getDocument().As(),[4,this.kba(t)]);case 1:u=o.ea(),a=this.j7(u),this.xI=null!==(h=null===a||void 0===a?void 0:a.parse())&&void 0!==h?h:null,this.state=null===this.xI?r.EXTERNAL_XFDF_NOT_AVAILABLE:r.EXTERNAL_XFDF_AVAILABLE,o.label=2;case 2:return this.state===r.EXTERNAL_XFDF_NOT_AVAILABLE?(i(e),[2]):(l=new DOMParser,c=l.parseFromString(e,"text/xml"),n.forEach((function(t){p.merge(c,p.xI,t-1)})),f=new XMLSerializer,s=f.serializeToString(c),i(s),[2])}}))}))}},t.prototype.qM=function(t){this.kba=t},t.prototype.qe=function(){this.xI=void 0,this.state=r.EXTERNAL_XFDF_NOT_REQUESTED},t.prototype.j7=function(t){return t?Array.isArray(t)?new i.a(t):"string"!==typeof t?null:(new DOMParser).parseFromString(t,"text/xml").querySelector("xfdf > add")?new i.a(t):new u.a(t):null},t.prototype.merge=function(t,e,n){var r=this;0===n&&(this.pfa(t,e.rp),this.rfa(t,e.eI));var o=e.ca[n];if(o&&(this.sfa(t,o.sn),this.ufa(t,o.v_,e.hw),this.tfa(t,o.page,n),this.qfa(t,o.fS)),o=this.aa.Lb(),n===o-1){var i=e.hw;Object.keys(i).forEach((function(e){i[e].OJ||r.XV(t,e,i[e])}))}},t.prototype.pfa=function(t,e){null!==e&&(t=this.vv(t),this.Hq(t,"calculation-order",e))},t.prototype.rfa=function(t,e){null!==e&&(t=this.vv(t),this.Hq(t,"document-actions",e))},t.prototype.sfa=function(t,e){var n=this,r=this.uv(t.querySelector("xfdf"),"annots");Object.keys(e).forEach((function(t){n.Hq(r,'[name="'+t+'"]',e[t])}))},t.prototype.ufa=function(t,e,n){var r=this;if(0!==e.length){var o=this.vv(t);e.forEach((function(e){var i=e.getAttribute("field"),u=n[i];u&&(r.XV(t,i,u),r.Hq(o,"null",e))}))}},t.prototype.XV=function(t,e,n){var r=this.vv(t);null!==n.$B&&this.Hq(r,'ffield [name="'+e+'"]',n.$B),t=this.uv(t.querySelector("xfdf"),"fields"),e=e.split("."),this.AL(t,e,0,n.value),n.OJ=!0},t.prototype.tfa=function(t,e,n){null!==e&&(t=this.vv(t),t=this.uv(t,"pages"),this.Hq(t,'[number="'+(n+1)+'"]',e))},t.prototype.qfa=function(t,e){Object.keys(e).forEach((function(e){(e=t.querySelector('annots [name="'+e+'"]'))&&e.parentElement.removeChild(e)}))},t.prototype.AL=function(t,e,n,r){if(n===e.length)e=document.createElementNS("","value"),e.textContent=r,this.Hq(t,"value",e);else{var o=e[n];this.uv(t,'[name="'+o+'"]',"field").setAttribute("name",o),t=t.querySelectorAll('[name="'+o+'"]'),1===t.length?this.AL(t[0],e,n+1,r):(o=this.X$(t),this.AL(n===e.length-1?o:this.gma(t,o),e,n+1,r))}},t.prototype.X$=function(t){for(var e=null,n=0;n<t.length;n++){var r=t[n];if(0===r.childElementCount||1===r.childElementCount&&"value"===r.children[0].tagName){e=r;break}}return e},t.prototype.gma=function(t,e){for(var n=0;n<t.length;n++)if(t[n]!==e)return t[n];return null},t.prototype.Hq=function(t,e,n){e=t.querySelector(e),null!==e&&t.removeChild(e),t.appendChild(n)},t.prototype.vv=function(t){var e=t.querySelector("pdf-info");return null!==e||(e=this.uv(t.querySelector("xfdf"),"pdf-info"),e.setAttribute("xmlns","http://www.pdftron.com/pdfinfo"),e.setAttribute("version","2"),e.setAttribute("import-version","4")),e},t.prototype.uv=function(t,e,n){var r=t.querySelector(e);return null!==r||(r=document.createElementNS("",n||e),t.appendChild(r)),r},t}(),e["default"]=t},459:function(t,e){t=function(){function t(){}return t.prototype.BA=function(t){var e={rp:null,eI:null,hw:{},ca:{}};return t=(new DOMParser).parseFromString(t,"text/xml"),e.rp=t.querySelector("pdf-info calculation-order"),e.eI=t.querySelector("pdf-info document-actions"),e.hw=this.mga(t),e.ca=this.yga(t),e},t.prototype.mga=function(t){var e=t.querySelector("fields");if(t=t.querySelectorAll("pdf-info > ffield"),null===e&&null===t)return{};var n={};return this.J4(n,e),this.H4(n,t),n},t.prototype.J4=function(t,e){if(null!==e&&e.children){for(var n=[],r=0;r<e.children.length;r++){var o=e.children[r];n.push({name:o.getAttribute("name"),element:o})}for(;0!==n.length;)for(e=n.shift(),r=0;r<e.element.children.length;r++)o=e.element.children[r],"value"===o.tagName?t[e.name]={value:o.textContent,$B:null,OJ:!1}:o.children&&n.push({name:e.name+"."+o.getAttribute("name"),element:o})}},t.prototype.H4=function(t,e){e.forEach((function(e){var n=e.getAttribute("name");t[n]?t[n].$B=e:t[n]={value:null,$B:e,OJ:!1}}))},t.prototype.yga=function(t){var e=this,n={};return t.querySelectorAll("pdf-info widget").forEach((function(t){var r=parseInt(t.getAttribute("page"),10)-1;e.aD(n,r),n[r].v_.push(t)})),t.querySelectorAll("pdf-info page").forEach((function(t){var r=parseInt(t.getAttribute("number"),10)-1;e.aD(n,r),n[r].page=t})),this.MT(t).forEach((function(t){var r=parseInt(t.getAttribute("page"),10),o=t.getAttribute("name");e.aD(n,r),n[r].sn[o]=t})),this.vT(t).forEach((function(t){var r=parseInt(t.getAttribute("page"),10);t=t.textContent,e.aD(n,r),n[r].fS[t]=!0})),n},t.prototype.aD=function(t,e){t[e]||(t[e]={sn:{},fS:{},v_:[],page:null})},t}(),e.a=t},474:function(t,e,n){var r=n(1),o=n(0);n.n(o),t=function(t){function e(e){var n=t.call(this)||this;return n.J$=Array.isArray(e)?e:[e],n}return Object(r.c)(e,t),e.prototype.parse=function(){var t=this,e={rp:null,eI:null,hw:{},ca:{}};return this.J$.forEach((function(n){e=Object(o.merge)(e,t.BA(n))})),e},e.prototype.MT=function(t){var e=[];return t.querySelectorAll("add > *").forEach((function(t){e.push(t)})),t.querySelectorAll("modify > *").forEach((function(t){e.push(t)})),e},e.prototype.vT=function(t){return t.querySelectorAll("delete > *")},e}(n(459).a),e.a=t},475:function(t,e,n){var r=n(1);t=function(t){function e(e){var n=t.call(this)||this;return n.K$=e,n}return Object(r.c)(e,t),e.prototype.parse=function(){return this.BA(this.K$)},e.prototype.MT=function(t){return t.querySelectorAll("annots > *")},e.prototype.vT=function(){return[]},e}(n(459).a),e.a=t}}])}).call(this||window);