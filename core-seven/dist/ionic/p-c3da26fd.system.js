/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-72dbfdd4.system.js"],(function(e){"use strict";var r;return{setters:[function(t){r=t.G;e("GESTURE_CONTROLLER",t.G)}],execute:function(){var t=function(e,r,t,a){var i=n(e)?{capture:!!a.capture,passive:!!a.passive}:!!a.capture;var u;var f;if(e["__zone_symbol__addEventListener"]){u="__zone_symbol__addEventListener";f="__zone_symbol__removeEventListener"}else{u="addEventListener";f="removeEventListener"}e[u](r,t,i);return function(){e[f](r,t,i)}};var n=function(e){if(a===undefined){try{var r=Object.defineProperty({},"passive",{get:function(){a=true}});e.addEventListener("optsTest",(function(){return}),r)}catch(e){a=false}}return!!a};var a;var i=2e3;var u=function(e,r,n,a,u){var v;var s;var o;var c;var l;var d;var m;var p=0;var y=function(a){p=Date.now()+i;if(!r(a)){return}if(!s&&n){s=t(e,"touchmove",n,u)}if(!o){o=t(a.target,"touchend",Y,u)}if(!c){c=t(a.target,"touchcancel",Y,u)}};var X=function(a){if(p>Date.now()){return}if(!r(a)){return}if(!d&&n){d=t(f(e),"mousemove",n,u)}if(!m){m=t(f(e),"mouseup",h,u)}};var Y=function(e){g();if(a){a(e)}};var h=function(e){_();if(a){a(e)}};var g=function(){if(s){s()}if(o){o()}if(c){c()}s=o=c=undefined};var _=function(){if(d){d()}if(m){m()}d=m=undefined};var b=function(){g();_()};var T=function(r){if(r===void 0){r=true}if(!r){if(v){v()}if(l){l()}v=l=undefined;b()}else{if(!v){v=t(e,"touchstart",y,u)}if(!l){l=t(e,"mousedown",X,u)}}};var E=function(){T(false);a=n=r=undefined};return{enable:T,stop:b,destroy:E}};var f=function(e){return e instanceof Document?e:e.ownerDocument};var v=function(e,r,t){var n=t*(Math.PI/180);var a=e==="x";var i=Math.cos(n);var u=r*r;var f=0;var v=0;var s=false;var o=0;return{start:function(e,r){f=e;v=r;o=0;s=true},detect:function(e,r){if(!s){return false}var t=e-f;var n=r-v;var c=t*t+n*n;if(c<u){return false}var l=Math.sqrt(c);var d=(a?t:n)/l;if(d>i){o=1}else if(d<-i){o=-1}else{o=0}s=false;return true},isGesture:function(){return o!==0},getDirection:function(){return o}}};var s=e("createGesture",(function(e){var t=false;var n=false;var a=true;var i=false;var f=Object.assign({disableScroll:false,direction:"x",gesturePriority:0,passive:true,maxAngle:40,threshold:10},e);var s=f.canStart;var d=f.onWillStart;var m=f.onStart;var p=f.onEnd;var y=f.notCaptured;var X=f.onMove;var Y=f.threshold;var h=f.passive;var g=f.blurOnStart;var _={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:undefined,data:undefined};var b=v(f.direction,f.threshold,f.maxAngle);var T=r.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll});var E=function(e){var r=l(e);if(n||!a){return false}c(e,_);_.startX=_.currentX;_.startY=_.currentY;_.startTime=_.currentTime=r;_.velocityX=_.velocityY=_.deltaX=_.deltaY=0;_.event=e;if(s&&s(_)===false){return false}T.release();if(!T.start()){return false}n=true;if(Y===0){return G()}b.start(_.startX,_.startY);return true};var S=function(e){if(t){if(!i&&a){i=true;o(_,e);requestAnimationFrame(L)}return}o(_,e);if(b.detect(_.currentX,_.currentY)){if(!b.isGesture()||!G()){P()}}};var L=function(){if(!t){return}i=false;if(X){X(_)}};var G=function(){if(!T.capture()){return false}t=true;a=false;_.startX=_.currentX;_.startY=_.currentY;_.startTime=_.currentTime;if(d){d(_).then(w)}else{w()}return true};var D=function(){if(typeof document!=="undefined"){var e=document.activeElement;if(e===null||e===void 0?void 0:e.blur){e.blur()}}};var w=function(){if(g){D()}if(m){m(_)}a=true};var x=function(){t=false;n=false;i=false;a=true;T.release()};var O=function(e){var r=t;var n=a;x();if(!n){return}o(_,e);if(r){if(p){p(_)}return}if(y){y(_)}};var M=u(f.el,E,S,O,{capture:false,passive:h});var P=function(){x();M.stop();if(y){y(_)}};return{enable:function(e){if(e===void 0){e=true}if(!e){if(t){O(undefined)}x()}M.enable(e)},destroy:function(){T.destroy();M.destroy()}}}));var o=function(e,r){if(!r){return}var t=e.currentX;var n=e.currentY;var a=e.currentTime;c(r,e);var i=e.currentX;var u=e.currentY;var f=e.currentTime=l(r);var v=f-a;if(v>0&&v<100){var s=(i-t)/v;var o=(u-n)/v;e.velocityX=s*.7+e.velocityX*.3;e.velocityY=o*.7+e.velocityY*.3}e.deltaX=i-e.startX;e.deltaY=u-e.startY;e.event=r};var c=function(e,r){var t=0;var n=0;if(e){var a=e.changedTouches;if(a&&a.length>0){var i=a[0];t=i.clientX;n=i.clientY}else if(e.pageX!==undefined){t=e.pageX;n=e.pageY}}r.currentX=t;r.currentY=n};var l=function(e){return e.timeStamp||Date.now()}}}}));