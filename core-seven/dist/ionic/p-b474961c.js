/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{l as t}from"./p-2e15200d.js";import{i as o}from"./p-bb5b0f18.js";import{createGesture as r}from"./p-46956a85.js";import"./p-e1c318e0.js";const s=(s,e,n,a,c)=>{const p=s.ownerDocument.defaultView;let i=o(s);const m=t=>i?-t.deltaX:t.deltaX;return r({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>(i=o(s),(t=>{const{startX:o}=t;return i?o>=p.innerWidth-50:o<=50})(t)&&e()),onStart:n,onMove:t=>{const o=m(t);a(o/p.innerWidth)},onEnd:o=>{const r=m(o),s=p.innerWidth,e=r/s,n=(t=>i?-t.velocityX:t.velocityX)(o),a=n>=0&&(n>.2||r>s/2),f=(a?1-e:e)*s;let l=0;if(f>5){const t=f/Math.abs(n);l=Math.min(t,540)}c(a,e<=0?.01:t(0,e,.9999),l)}})};export{s as createSwipeBackGesture}