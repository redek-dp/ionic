var __awaiter=this&&this.__awaiter||function(e,i,n,t){function o(e){return e instanceof n?e:new n((function(i){i(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{d(t.next(e))}catch(e){r(e)}}function s(e){try{d(t["throw"](e))}catch(e){r(e)}}function d(e){e.done?n(e.value):o(e.value).then(a,s)}d((t=t.apply(e,i||[])).next())}))};var __generator=this&&this.__generator||function(e,i){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,o,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(i){return d([e,i])}}function d(s){if(t)throw new TypeError("Generator is already executing.");while(a&&(a=0,s[0]&&(n=0)),n)try{if(t=1,o&&(r=s[0]&2?o["return"]:s[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;if(o=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;o=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){n.label=s[1];break}if(s[0]===6&&n.label<r[1]){n.label=r[1];r=s;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(s);break}if(r[2])n.ops.pop();n.trys.pop();continue}s=i.call(e,n)}catch(e){s=[6,e];o=0}finally{t=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-685529e3.system.js","./p-081ea0a8.system.js","./p-5503807a.system.js","./p-7959e9ee.system.js","./p-d47655a4.system.js","./p-1ef14636.system.js","./p-6fd23f56.system.js","./p-b5c775a9.system.js","./p-04f1268e.system.js","./p-97891b6b.system.js","./p-ad72ae57.system.js"],(function(e){"use strict";var i,n,t,o,r,a,s,d,l,c,p,u,h,f,g,m,y,b,v;return{setters:[function(e){i=e.r;n=e.d;t=e.h;o=e.H;r=e.f},function(e){a=e.c;s=e.b},function(e){d=e.E;l=e.a},function(e){c=e.r},function(e){p=e.d;u=e.e;h=e.B;f=e.j;g=e.f;m=e.g;y=e.h},function(e){b=e.g},function(e){v=e.c},function(){},function(){},function(){},function(){}],execute:function(){var x=function(e){var i=v();var n=v();var t=v();n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);t.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]);return i.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,t])};var w=function(e){var i=v();var n=v();var t=v();n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);t.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]);return i.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,t])};var k=function(e){var i=v();var n=v();var t=v();n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);t.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]);return i.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,t])};var T=function(e){var i=v();var n=v();var t=v();n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);t.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]);return i.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,t])};var j=".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}";var C=".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}";var D=e("ion_loading",function(){function e(e){var t=this;i(this,e);this.didPresent=n(this,"ionLoadingDidPresent",7);this.willPresent=n(this,"ionLoadingWillPresent",7);this.willDismiss=n(this,"ionLoadingWillDismiss",7);this.didDismiss=n(this,"ionLoadingDidDismiss",7);this.didPresentShorthand=n(this,"didPresent",7);this.willPresentShorthand=n(this,"willPresent",7);this.willDismissShorthand=n(this,"willDismiss",7);this.didDismissShorthand=n(this,"didDismiss",7);this.delegateController=p(this);this.triggerController=u();this.customHTMLEnabled=a.get("innerHTMLTemplatesEnabled",d);this.presented=false;this.onBackdropTap=function(){t.dismiss(undefined,h)};this.overlayIndex=undefined;this.delegate=undefined;this.hasController=false;this.keyboardClose=true;this.enterAnimation=undefined;this.leaveAnimation=undefined;this.message=undefined;this.cssClass=undefined;this.duration=0;this.backdropDismiss=false;this.showBackdrop=true;this.spinner=undefined;this.translucent=false;this.animated=true;this.htmlAttributes=undefined;this.isOpen=false;this.trigger=undefined}e.prototype.onIsOpenChange=function(e,i){if(e===true&&i===false){this.present()}else if(e===false&&i===true){this.dismiss()}};e.prototype.triggerChanged=function(){var e=this,i=e.trigger,n=e.el,t=e.triggerController;if(i){t.addClickListener(n,i)}};e.prototype.connectedCallback=function(){f(this.el);this.triggerChanged()};e.prototype.componentWillLoad=function(){if(this.spinner===undefined){var e=s(this);this.spinner=a.get("loadingSpinner",a.get("spinner",e==="ios"?"lines":"crescent"))}};e.prototype.componentDidLoad=function(){var e=this;if(this.isOpen===true){c((function(){return e.present()}))}};e.prototype.disconnectedCallback=function(){this.triggerController.removeClickListener()};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(i){switch(i.label){case 0:if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:i.sent();i.label=2;case 2:return[4,this.delegateController.attachViewToDom()];case 3:i.sent();this.currentTransition=g(this,"loadingEnter",x,k);return[4,this.currentTransition];case 4:i.sent();if(this.duration>0){this.durationTimeout=setTimeout((function(){return e.dismiss()}),this.duration+10)}this.currentTransition=undefined;return[2]}}))}))};e.prototype.dismiss=function(e,i){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(t){switch(t.label){case 0:if(this.durationTimeout){clearTimeout(this.durationTimeout)}this.currentTransition=m(this,e,i,"loadingLeave",w,T);return[4,this.currentTransition];case 1:n=t.sent();if(n){this.delegateController.removeViewFromDom()}return[2,n]}}))}))};e.prototype.onDidDismiss=function(){return y(this.el,"ionLoadingDidDismiss")};e.prototype.onWillDismiss=function(){return y(this.el,"ionLoadingWillDismiss")};e.prototype.renderLoadingMessage=function(e){var i=this,n=i.customHTMLEnabled,o=i.message;if(n){return t("div",{class:"loading-content",id:e,innerHTML:l(o)})}return t("div",{class:"loading-content",id:e},o)};e.prototype.render=function(){var e;var i=this,n=i.message,r=i.spinner,a=i.htmlAttributes,d=i.overlayIndex;var l=s(this);var c="loading-".concat(d,"-msg");var p=n!==undefined?c:null;return t(o,Object.assign({role:"dialog","aria-modal":"true","aria-labelledby":p,tabindex:"-1"},a,{style:{zIndex:"".concat(4e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},b(this.cssClass)),(e={},e[l]=true,e["overlay-hidden"]=true,e["loading-translucent"]=this.translucent,e))}),t("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),t("div",{tabindex:"0"}),t("div",{class:"loading-wrapper ion-overlay-wrapper"},r&&t("div",{class:"loading-spinner"},t("ion-spinner",{name:r,"aria-hidden":"true"})),n!==undefined&&this.renderLoadingMessage(c)),t("div",{tabindex:"0"}))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}},enumerable:false,configurable:true});return e}());D.style={ios:j,md:C}}}}));