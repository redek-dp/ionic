import{r as i,c as t,h as r,H as o,e}from"./p-94e8fa7d.js";import{b as s}from"./p-3681ae7c.js";import{f as n}from"./p-01cf4201.js";import{c as a,h as c}from"./p-5e5b60e6.js";class d{constructor(r){i(this,r),this.inputId="ion-rb-"+l++,this.radioGroup=null,this.checked=!1,this.name=this.inputId,this.disabled=!1,this.updateState=()=>{this.radioGroup&&(this.checked=this.radioGroup.value===this.value)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionStyle=t(this,"ionStyle",7),this.ionFocus=t(this,"ionFocus",7),this.ionBlur=t(this,"ionBlur",7)}connectedCallback(){void 0===this.value&&(this.value=this.inputId);const i=this.radioGroup=this.el.closest("ion-radio-group");i&&(this.updateState(),i.addEventListener("ionChange",this.updateState))}disconnectedCallback(){const i=this.radioGroup;i&&(i.removeEventListener("ionChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}render(){const{inputId:i,disabled:t,checked:e,color:d,el:l}=this,h=s(this),b=i+"-lbl",m=n(l);return m&&(m.id=b),r(o,{role:"radio","aria-disabled":t?"true":null,"aria-checked":""+e,"aria-labelledby":b,class:Object.assign(Object.assign({},a(d)),{[h]:!0,"in-item":c("ion-item",l),interactive:!0,"radio-checked":e,"radio-disabled":t})},r("div",{class:"radio-icon",part:"container"},r("div",{class:"radio-inner",part:"mark"})),r("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:t}))}get el(){return e(this)}static get watchers(){return{color:["emitStyle"],checked:["emitStyle"],disabled:["emitStyle"]}}}let l=0;d.style={md:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}'};class h{constructor(r){i(this,r),this.inputId="ion-rg-"+b++,this.labelId=this.inputId+"-lbl",this.allowEmptySelection=!1,this.name=this.inputId,this.onClick=i=>{const t=i.target&&i.target.closest("ion-radio");if(t){const i=t.value;i!==this.value?this.value=i:this.allowEmptySelection&&(this.value=void 0)}},this.ionChange=t(this,"ionChange",7)}valueChanged(i){this.ionChange.emit({value:i})}async connectedCallback(){const i=this.el,t=i.querySelector("ion-list-header")||i.querySelector("ion-item-divider");if(t){const i=t.querySelector("ion-label");i&&(this.labelId=i.id=this.name+"-lbl")}}render(){return r(o,{role:"radiogroup","aria-labelledby":this.labelId,onClick:this.onClick,class:s(this)})}get el(){return e(this)}static get watchers(){return{value:["valueChanged"]}}}let b=0;export{d as ion_radio,h as ion_radio_group}