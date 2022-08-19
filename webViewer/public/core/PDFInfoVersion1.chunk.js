(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[12],{446:function(e,a,t){function n(e){e.Ga(),e.advance();var a=e.current.textContent;return e.Wa(),a}function r(e){var a=[];for(e.Ga();e.advance();){var t=e.Ka();"field"===t?a.push(String(e.ga("name"))):Object(b.j)("unrecognised field list element: "+t)}return e.Wa(),a}function c(e,a){return a?"false"!==e:"true"===e}function o(e,a){var t=e.Ka();switch(t){case"javascript":return{name:"JavaScript",javascript:e.current.textContent};case"uri":return{name:"URI",uri:e.ga("uri")};case"goto":if(t=null,e.Ga(),e.advance()){var n=e.ga("fit");if(t={page:e.ga("page"),fit:n},"0"===t.page)Object(b.j)("null page encountered in dest");else switch(a=a(Number(t.page)),n){case"Fit":case"FitB":break;case"FitH":case"FitBH":t.top=a.pa({x:0,y:e.ga("top")||0}).y;break;case"FitV":case"FitBV":t.left=a.pa({x:e.ga("left")||0,y:0}).x;break;case"FitR":n=a.pa({x:e.ga("left")||0,y:e.ga("top")||0}),a=a.pa({x:e.ga("right")||0,y:e.ga("bottom")||0}),a=new h.d(n.x,n.y,a.x,a.y),t.top=a.y1,t.left=a.x1,t.bottom=a.y2,t.right=a.x2;break;case"XYZ":n=a.pa({x:e.ga("left")||0,y:e.ga("top")||0}),t.top=n.y,t.left=n.x,t.zoom=e.ga("zoom")||0;break;default:Object(b.j)("unknown dest fit: "+n)}t={name:"GoTo",dest:t}}else Object(b.j)("missing dest in GoTo action");return e.Wa(),t;case"submit-form":for(t={name:"SubmitForm",url:e.ga("url"),format:e.ga("format"),method:e.ga("method")||"POST",exclude:c(e.ga("exclude"),!1)},a=e.ga("flags"),t.flags=a?a.split(" "):[],e.Ga();e.advance();)switch(a=e.Ka(),a){case"fields":t.fields=r(e);break;default:Object(b.j)("unrecognised submit-form child: "+a)}return e.Wa(),t;case"reset-form":for(t={name:"ResetForm",exclude:c(e.ga("exclude"),!1)},e.Ga();e.advance();)switch(a=e.Ka(),a){case"fields":t.fields=r(e);break;default:Object(b.j)("unrecognised reset-form child: "+a)}return e.Wa(),t;case"hide":for(t={name:"Hide",hide:c(e.ga("hide"),!0)},e.Ga();e.advance();)switch(a=e.Ka(),a){case"fields":t.fields=r(e);break;default:Object(b.j)("unrecognised hide child: "+a)}return e.Wa(),t;case"named":return{name:"Named",action:e.ga("name")};default:Object(b.j)("Encountered unexpected action type: "+t)}return null}function i(e,a,t){var n={};for(e.Ga();e.advance();){var r=e.Ka();switch(r){case"action":if(r=e.ga("trigger"),a&&-1===a.indexOf(r))Object(b.j)("encountered unexpected trigger on field: "+r);else{for(n[r]=[],e.Ga();e.advance();){var c=o(e,t);Object(p.isNull)(c)||n[r].push(c)}e.Wa()}break;default:Object(b.j)("encountered unknown action child: "+r)}}return e.Wa(),n}function s(e){return new m.a(e.ga("r")||0,e.ga("g")||0,e.ga("b")||0,e.ga("a")||1)}function d(e,a){var t=e.ga("name"),n=e.ga("type")||"Type1",r=e.ga("size"),c=a.pa({x:0,y:0});for(r=a.pa({x:Number(r),y:0}),a=c.x-r.x,c=c.y-r.y,t={name:t,type:n,size:Math.sqrt(a*a+c*c)||0,strokeColor:[0,0,0],fillColor:[0,0,0]},e.Ga();e.advance();)switch(n=e.Ka(),n){case"stroke-color":t.strokeColor=s(e);break;case"fill-color":t.fillColor=s(e);break;default:Object(b.j)("unrecognised font child: "+n)}return e.Wa(),t}function l(e){var a=[];for(e.Ga();e.advance();){var t=e.Ka();switch(t){case"option":t=a;var n=t.push,r=e;r={value:r.ga("value"),displayValue:r.ga("display-value")||void 0},n.call(t,r);break;default:Object(b.j)("unrecognised options child: "+t)}}return e.Wa(),a}function u(e,a){var t=e.ga("name"),r={type:e.ga("type"),quadding:e.ga("quadding")||"Left-justified",maxLen:e.ga("max-len")||-1},c=e.ga("flags");for(Object(p.isString)(c)&&(r.flags=c.split(" ")),e.Ga();e.advance();)switch(c=e.Ka(),c){case"actions":r.actions=i(e,["C","F","K","V"],(function(){return a}));break;case"default-value":r.defaultValue=n(e);break;case"font":r.font=d(e,a);break;case"options":r.options=l(e);break;default:Object(b.j)("unknown field child: "+c)}return e.Wa(),new window.Annotations.ha.na(t,r)}function g(e,a){switch(e.type){case"Tx":try{if(Object(v.c)(e.actions))return new j.a.DatePickerWidgetAnnotation(e,a)}catch(t){Object(b.j)(t)}return new j.a.TextWidgetAnnotation(e,a);case"Ch":return e.flags.get(k.WidgetFlags.COMBO)?new j.a.ChoiceWidgetAnnotation(e,a):new j.a.ListWidgetAnnotation(e,a);case"Btn":return e.flags.get(k.WidgetFlags.PUSH_BUTTON)?new j.a.PushButtonWidgetAnnotation(e,a):e.flags.get(k.WidgetFlags.RADIO)?new j.a.RadioButtonWidgetAnnotation(e,a):new j.a.CheckButtonWidgetAnnotation(e,a);case"Sig":return new j.a.SignatureWidgetAnnotation(e,a);default:Object(b.j)("Unrecognised field type: "+e.type)}return null}function f(e,a,t,n){var c=[],o={};e.Ga();var l=[],f={},p=[];Object(w.a)((function(){if(e.advance()){var t=e.Ka();switch(t){case"calculation-order":l="calculation-order"===e.Ka()?r(e):[];break;case"document-actions":f=i(e,["Init","Open"],a);break;case"pages":for(t=[],e.Ga();e.advance();){var n=e.Ka();switch(n){case"page":n=t;var j=n.push,m=e,w=a,k={number:m.ga("number")};for(m.Ga();m.advance();){var x=m.Ka();switch(x){case"actions":k.actions=i(m,["O","C"],w);break;default:Object(b.j)("unrecognised page child: "+x)}}m.Wa(),j.call(n,k);break;default:Object(b.j)("unrecognised page child: "+n)}}e.Wa(),p=t;break;case"field":n=u(e,a(1)),o[n.name]=n;break;case"widget":for(t={border:{style:"Solid",width:1},backgroundColor:[],fieldName:e.ga("field"),page:e.ga("page"),index:e.ga("index")||0,rotation:e.ga("rotation")||0,flags:[],isImporting:!0},(n=e.ga("appearance"))&&(t.appearance=n),(n=e.ga("flags"))&&(t.flags=n.split(" ")),e.Ga();e.advance();)switch(n=e.Ka(),n){case"rect":j=e,m=a(Number(t.page)),n=m.pa({x:j.ga("x1")||0,y:j.ga("y1")||0}),j=m.pa({x:j.ga("x2")||0,y:j.ga("y2")||0}),n=new h.d(n.x,n.y,j.x,j.y),n.normalize(),t.rect={x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2};break;case"border":for(n=e,j={style:n.ga("style")||"Solid",width:n.ga("width")||1,color:[0,0,0]},n.Ga();n.advance();)switch(m=n.Ka(),m){case"color":j.color=s(n);break;default:Object(b.j)("unrecognised border child: "+m)}n.Wa(),t.border=j;break;case"background-color":t.backgroundColor=s(e);break;case"actions":t.actions=i(e,"E X D U Fo Bl PO PC PV PI".split(" "),a);break;case"appearances":for(n=e,j=Object(v.b)(t,"appearances"),n.Ga();n.advance();)if(m=n.Ka(),"appearance"===m){for(m=n.ga("name"),w=Object(v.b)(j,m),m=n,m.Ga();m.advance();)switch(k=m.Ka(),k){case"Normal":Object(v.b)(w,"Normal").data=m.current.textContent;break;default:Object(b.j)("unexpected appearance state: ",k)}m.Wa()}else Object(b.j)("unexpected appearances child: "+m);n.Wa();break;case"extra":for(n=e,j=a,m={},n.Ga();n.advance();)switch(w=n.Ka(),w){case"font":m.font=d(n,j(1));break;default:Object(b.j)("unrecognised extra child: "+w)}n.Wa(),n=m,n.font&&(t.font=n.font);break;case"captions":j=e,n={},(m=j.ga("Normal"))&&(n.Normal=m),(m=j.ga("Rollover"))&&(n.Rollover=m),(j=j.ga("Down"))&&(n.Down=j),t.captions=n;break;default:Object(b.j)("unrecognised widget child: "+n)}e.Wa(),(n=o[t.fieldName])?(t=g(n,t),c.push(t)):Object(b.j)("ignoring widget with no corresponding field data: "+t.fieldName);break;default:Object(b.j)("Unknown element encountered in PDFInfo: "+t)}return!0}return!1}),(function(){e.Wa(),t({calculationOrder:l,widgets:c,fields:o,documentActions:f,pages:p,custom:[]})}),n)}t.r(a),t.d(a,"parse",(function(){return f}));var b=t(2),p=t(0);t.n(p);var j=t(117),h=t(4),m=t(7),w=t(20),v=t(102),k=t(17)}}])}).call(this||window);