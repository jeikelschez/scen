(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[10],{434:function(r,t,e){e.r(t);var n=e(1),o=e(2),i=e(149);r=e(94);var a=e(246);e=e(374);var l=window;r=function(r){function t(t,e,n){if(e=r.call(this,t,e,n)||this,t.name&&"xod"!==t.name.toLowerCase().split(".").pop())throw Error("Not an XOD file");if(!l.FileReader||!l.File||!l.Blob)throw Error("File API is not supported in this browser");return e.file=t,e.nB=[],e.UH=0,e}return Object(n.c)(t,r),t.prototype.GK=function(r,t,e){var n=this,i=new FileReader;return i.onloadend=function(r){if(0<n.nB.length){var a=n.nB.shift();a.Lha.readAsBinaryString(a.file)}else n.UH--;return i.error?(r=i.error,r.code===r.ABORT_ERR?void Object(o.j)("Request for chunk "+t.start+"-"+t.stop+" was aborted"):e(r)):(r=i.content||r.target.result)?e(!1,r):void Object(o.j)("No data was returned from FileReader.")},t&&(r=(r.slice||r.webkitSlice||r.mozSlice||r.lpa).call(r,t.start,t.stop)),0===n.nB.length&&50>n.UH?(i.readAsBinaryString(r),n.UH++):n.nB.push({Lha:i,file:r}),function(){i.abort()}},t.prototype.qt=function(r){var t=this;t.jB=!0;var e=i.a;t.GK(t.file,{start:-e,stop:t.file.size},(function(n,i){if(n)return Object(o.j)("Error loading end header: %s "+n),r(n);if(i.length!==e)throw Error("Zip end header data is wrong size!");t.Zd=new a.a(i);var l=t.Zd.wT();t.GK(t.file,l,(function(e,n){if(e)return Object(o.j)("Error loading central directory: %s "+e),r(e);if(n.length!==l.stop-l.start)throw Error("Zip central directory data is wrong size!");return t.Zd.uX(n),t.GH=!0,t.jB=!1,r(!1)}))}))},t.prototype.DL=function(r,t){var e=this,n=e.Zh[r];if(e.Zd.HR(r)){var i=e.Zd.uw(r),a=e.GK(e.file,i,(function(n,a){if(delete e.Zh[r],n)return Object(o.j)('Error loading part "%s": %s, '+r+", "+n),t(n);if(a.length!==i.stop-i.start)throw Error("Part data is wrong size!");t(!1,r,a,e.Zd.$U(r))}));n.DZ=!0,n.cancel=a}else t(Error('File not found: "'+r+'"'),r)},t}(r.a),Object(e.a)(r),Object(e.b)(r),t["default"]=r}}])}).call(this||window);