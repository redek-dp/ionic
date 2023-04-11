/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-685529e3.system.js","./p-081ea0a8.system.js","./p-b7ffe8c7.system.js","./p-1ef14636.system.js","./p-7959e9ee.system.js","./p-ad72ae57.system.js"],(function(t){"use strict";var o,e,n,i,a,r,s,l,d,b;return{setters:[function(t){o=t.r;e=t.d;n=t.h;i=t.H;a=t.f},function(t){r=t.b;s=t.c},function(t){l=t.c},function(t){d=t.c},function(t){b=t.j},function(){}],execute:function(){var c=":host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-400, #999999));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}";var h=":host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}";var p=t("ion_tab_bar",function(){function t(t){o(this,t);this.ionTabBarChanged=e(this,"ionTabBarChanged",7);this.keyboardCtrl=null;this.keyboardVisible=false;this.color=undefined;this.selectedTab=undefined;this.translucent=false}t.prototype.selectedTabChanged=function(){if(this.selectedTab!==undefined){this.ionTabBarChanged.emit({tab:this.selectedTab})}};t.prototype.componentWillLoad=function(){this.selectedTabChanged()};t.prototype.connectedCallback=function(){var t=this;this.keyboardCtrl=l((function(o){t.keyboardVisible=o}))};t.prototype.disconnectedCallback=function(){if(this.keyboardCtrl){this.keyboardCtrl.destroy()}};t.prototype.render=function(){var t;var o=this,e=o.color,a=o.translucent,s=o.keyboardVisible;var l=r(this);var b=s&&this.el.getAttribute("slot")!=="top";return n(i,{role:"tablist","aria-hidden":b?"true":null,class:d(e,(t={},t[l]=true,t["tab-bar-translucent"]=a,t["tab-bar-hidden"]=b,t))},n("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{selectedTab:["selectedTabChanged"]}},enumerable:false,configurable:true});return t}());p.style={ios:c,md:h};var u=':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge),:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px)}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px)}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}';var g=':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}[dir=rtl] ::slotted(ion-icon),:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge),:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}';var f=t("ion_tab_button",function(){function t(t){var n=this;o(this,t);this.ionTabButtonClick=e(this,"ionTabButtonClick",7);this.inheritedAttributes={};this.onKeyUp=function(t){if(t.key==="Enter"||t.key===" "){n.selectTab(t)}};this.onClick=function(t){n.selectTab(t)};this.disabled=false;this.download=undefined;this.href=undefined;this.rel=undefined;this.layout=undefined;this.selected=false;this.tab=undefined;this.target=undefined}t.prototype.onTabBarChanged=function(t){var o=t.target;var e=this.el.parentElement;if(t.composedPath().includes(e)||(o===null||o===void 0?void 0:o.contains(this.el))){this.selected=this.tab===t.detail.tab}};t.prototype.componentWillLoad=function(){this.inheritedAttributes=Object.assign({},b(this.el,["aria-label"]));if(this.layout===undefined){this.layout=s.get("tabButtonLayout","icon-top")}};t.prototype.selectTab=function(t){if(this.tab!==undefined){if(!this.disabled){this.ionTabButtonClick.emit({tab:this.tab,href:this.href,selected:this.selected})}t.preventDefault()}};Object.defineProperty(t.prototype,"hasLabel",{get:function(){return!!this.el.querySelector("ion-label")},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"hasIcon",{get:function(){return!!this.el.querySelector("ion-icon")},enumerable:false,configurable:true});t.prototype.render=function(){var t;var o=this,e=o.disabled,a=o.hasIcon,s=o.hasLabel,l=o.href,d=o.rel,b=o.target,c=o.layout,h=o.selected,p=o.tab,u=o.inheritedAttributes;var g=r(this);var f={download:this.download,href:l,rel:d,target:b};return n(i,{onClick:this.onClick,onKeyup:this.onKeyUp,id:p!==undefined?"tab-button-".concat(p):null,class:(t={},t[g]=true,t["tab-selected"]=h,t["tab-disabled"]=e,t["tab-has-label"]=s,t["tab-has-icon"]=a,t["tab-has-label-only"]=s&&!a,t["tab-has-icon-only"]=a&&!s,t["tab-layout-".concat(c)]=true,t["ion-activatable"]=true,t["ion-selectable"]=true,t["ion-focusable"]=true,t)},n("a",Object.assign({},f,{class:"button-native",part:"native",role:"tab","aria-selected":h?"true":null,"aria-disabled":e?"true":null,tabindex:e?"-1":undefined},u),n("span",{class:"button-inner"},n("slot",null)),g==="md"&&n("ion-ripple-effect",{type:"unbounded"})))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());f.style={ios:u,md:g}}}}));