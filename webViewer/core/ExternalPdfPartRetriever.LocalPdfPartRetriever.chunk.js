(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[2],{404:function(A,e,n){function a(A){return new Promise((function(e){return Object(c.b)(void 0,void 0,void 0,(function(){var n,a,r,i,s,Q,f,u;return Object(c.d)(this,(function(c){switch(c.label){case 0:return[4,o(A)];case 1:return n=c.ea(),1<n?[4,t(A)]:[3,3];case 2:for(a=c.ea(),r=a.split(",")[1],i=window.atob(r),s=i.length,Q=new Uint8Array(s),f=0;f<s;f++)Q[f]=i.charCodeAt(f);return e(Q),[3,4];case 3:u=new FileReader,u.readAsArrayBuffer(A),u.onloadend=function(){e(u.result)},c.label=4;case 4:return[2]}}))}))}))}function t(A,e){return new Promise((function(n){var a=new Image,t=new FileReader;t.readAsDataURL(A),a.onload=function(){return Object(c.b)(this,void 0,void 0,(function(){var s,Q,f,u,h,g;return Object(c.d)(this,(function(c){switch(c.label){case 0:return s=a.width,Q=a.height,f=document.createElement("canvas"),u=f.getContext("2d"),[4,r()];case 1:return h=c.ea(),f.width=s,f.height=Q,[4,o(A)];case 2:if(g=c.ea(),!h)switch(4<g&&9>g&&(f.width=Q,f.height=s),g){case 2:u&&u.transform(-1,0,0,1,s,0);break;case 3:u&&u.transform(-1,0,0,-1,s,Q);break;case 4:u&&u.transform(1,0,0,-1,0,Q);break;case 5:u&&u.transform(0,1,1,0,0,0);break;case 6:u&&u.transform(0,1,-1,0,Q,0);break;case 7:u&&u.transform(0,-1,-1,0,Q,s);break;case 8:u&&u.transform(0,-1,1,0,0,s)}return 1<g?(u.drawImage(a,0,0),n(f.toDataURL(e&&e.mimeType?e.mimeType:i.JPEG,e&&e.H6?e.H6:.9))):n(t.result),[2]}}))}))},t.onloadend=function(){a.src=t.result}}))}function r(){return new Promise((function(A,e){var n=new Image;n.onload=function(){A(1===n.naturalWidth)},n.onerror=e,n.src="data:image/jpeg;base64,/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRcZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z"}))}function o(A){return new Promise((function(e){var n=new FileReader;n.onload=function(){var A=new DataView(n.result);65496!==A.getUint16(0,!1)&&e(-2);for(var a=A.byteLength,t=2;t<a;){var r=A.getUint16(t,!1);if(t+=2,65505===r){1165519206!==A.getUint32(t+=2,!1)&&e(-1),r=18761===A.getUint16(t+=6,!1),t+=A.getUint32(t+4,r);var o=A.getUint16(t,r);t+=2;for(var i=0;i<o;i++)274===A.getUint16(t+12*i,r)&&e(A.getUint16(t+12*i+8,r))}else{if(65280!==(65280&r))break;t+=A.getUint16(t,!1)}}e(-1)},n.readAsArrayBuffer(A.slice(0,65536))}))}n.d(e,"a",(function(){return a}));var i,c=n(1);(function(A){A.JPEG="image/jpeg",A.PNG="image/png"})(i||(i={}))}}])}).call(this||window);