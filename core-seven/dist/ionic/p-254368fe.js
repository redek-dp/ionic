/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const e="ionKeyboardDidShow",t="ionKeyboardDidHide";let o={},d={},i=!1;const a=()=>{o={},d={},i=!1},n=e=>{s(e),e.visualViewport&&(d=g(e.visualViewport),e.visualViewport.onresize=()=>{y(e),c()||f(e)?h(e):r(e)&&b(e)})},s=e=>{e.addEventListener("keyboardDidShow",(t=>h(e,t))),e.addEventListener("keyboardDidHide",(()=>b(e)))},h=(e,t)=>{p(e,t),i=!0},b=e=>{w(e),i=!1},c=()=>!i&&o.width===d.width&&(o.height-d.height)*d.scale>150,f=e=>i&&!r(e),r=e=>i&&d.height===e.innerHeight,p=(t,o)=>{const i=new CustomEvent(e,{detail:{keyboardHeight:o?o.keyboardHeight:t.innerHeight-d.height}});t.dispatchEvent(i)},w=e=>{const o=new CustomEvent(t);e.dispatchEvent(o)},y=e=>{o=Object.assign({},d),d=g(e.visualViewport)},g=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale});export{t as KEYBOARD_DID_CLOSE,e as KEYBOARD_DID_OPEN,g as copyVisualViewport,r as keyboardDidClose,c as keyboardDidOpen,f as keyboardDidResize,a as resetKeyboardAssist,b as setKeyboardClose,h as setKeyboardOpen,n as startKeyboardAssist,y as trackViewportChanges}