/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,d as o,f as n,h as i,H as e}from"./p-973c78ac.js";import{c as r,u as s}from"./p-2e15200d.js";import{b as c}from"./p-bb7f6a2b.js";import{o as a,c as h}from"./p-fe01417c.js";const u=class{constructor(n){t(this,n),this.ionRouteDataChanged=o(this,"ionRouteDataChanged",7),this.url="",this.component=void 0,this.componentProps=void 0,this.beforeLeave=void 0,this.beforeEnter=void 0}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,o){if(t===o)return;const n=t?Object.keys(t):[],i=o?Object.keys(o):[];if(n.length===i.length){for(const i of n)if(t[i]!==o[i])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},l=class{constructor(n){t(this,n),this.ionRouteRedirectChanged=o(this,"ionRouteRedirectChanged",7),this.from=void 0,this.to=void 0}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},f="root",d="forward",w=t=>"/"+t.filter((t=>t.length>0)).join("/"),p=t=>{let o,n=[""];if(null!=t){const i=t.indexOf("?");i>-1&&(o=t.substring(i+1),t=t.substring(0,i)),n=t.split("/").map((t=>t.trim())).filter((t=>t.length>0)),0===n.length&&(n=[""])}return{segments:n,queryString:o}},m=async(t,o,n,i,e=!1,s)=>{try{const c=g(t);if(i>=o.length||!c)return e;await new Promise((t=>r(c,t)));const a=o[i],h=await c.setRouteId(a.id,a.params,n,s);return h.changed&&(n=f,e=!0),e=await m(h.element,o,n,i+1,e,s),h.markVisible&&await h.markVisible(),e}catch(t){return console.error(t),!1}},v=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",g=t=>{if(!t)return;if(t.matches(v))return t;const o=t.querySelector(v);return null!=o?o:void 0},b=(t,o)=>o.find((o=>((t,o)=>{const{from:n,to:i}=o;if(void 0===i)return!1;if(n.length>t.length)return!1;for(let o=0;o<n.length;o++){const i=n[o];if("*"===i)return!0;if(i!==t[o])return!1}return n.length===t.length})(t,o))),y=(t,o)=>{const n=Math.min(t.length,o.length);let i=0;for(let e=0;e<n;e++){const n=t[e],r=o[e];if(n.id.toLowerCase()!==r.id)break;if(n.params){const t=Object.keys(n.params);if(t.length===r.segments.length){const o=t.map((t=>`:${t}`));for(let t=0;t<o.length&&o[t].toLowerCase()===r.segments[t];t++)i++}}i++}return i},R=(t,o)=>{const n=new O(t);let i,e=!1;for(let t=0;t<o.length;t++){const r=o[t].segments;if(""===r[0])e=!0;else{for(const o of r){const e=n.next();if(":"===o[0]){if(""===e)return null;i=i||[],(i[t]||(i[t]={}))[o.slice(1)]=e}else if(e!==o)return null}e=!1}}return e&&e!==(""===n.next())?null:i?o.map(((t,o)=>({id:t.id,segments:t.segments,params:C(t.params,i[o]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}))):o},C=(t,o)=>t||o?Object.assign(Object.assign({},t),o):void 0,j=(t,o)=>{let n=null,i=0;for(const e of o){const o=R(t,e);if(null!==o){const t=k(o);t>i&&(i=t,n=o)}}return n},k=t=>{let o=1,n=1;for(const i of t)for(const t of i.segments)":"===t[0]?o+=Math.pow(1,n):""!==t&&(o+=Math.pow(2,n)),n++;return o};class O{constructor(t){this.segments=t.slice()}next(){return this.segments.length>0?this.segments.shift():""}}const D=(t,o)=>o in t?t[o]:t.hasAttribute(o)?t.getAttribute(o):null,E=t=>Array.from(t.children).filter((t=>"ION-ROUTE-REDIRECT"===t.tagName)).map((t=>{const o=D(t,"to");return{from:p(D(t,"from")).segments,to:null==o?void 0:p(o)}})),S=t=>L($(t)),$=t=>Array.from(t.children).filter((t=>"ION-ROUTE"===t.tagName&&t.component)).map((t=>{const o=D(t,"component");return{segments:p(D(t,"url")).segments,id:o.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:$(t)}})),L=t=>{const o=[];for(const n of t)P([],o,n);return o},P=(t,o,n)=>{if(t=[...t,{id:n.id,segments:n.segments,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}],0!==n.children.length)for(const i of n.children)P(t,o,i);else o.push(t)},U=class{constructor(n){t(this,n),this.ionRouteWillChange=o(this,"ionRouteWillChange",7),this.ionRouteDidChange=o(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){await(g(document.body)?Promise.resolve():new Promise((t=>{window.addEventListener("ionNavWillLoad",(()=>t()),{once:!0})})));const t=await this.runGuards(this.getSegments());if(!0!==t){if("object"==typeof t){const{redirect:o}=t,n=p(o);this.setSegments(n.segments,f,n.queryString),await this.writeNavStateRoot(n.segments,f)}}else await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",s(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",s(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let o=this.getSegments();const n=await this.runGuards(o);if(!0!==n){if("object"!=typeof n)return!1;o=p(n.redirect).segments}return this.writeNavStateRoot(o,t)}onBackButton(t){t.detail.register(0,(t=>{this.back(),t()}))}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,o="forward",n){var i;if(t.startsWith(".")){const o=null!==(i=this.previousPath)&&void 0!==i?i:"/",n=new URL(t,`https://host/${o}`);t=n.pathname+n.search}let e=p(t);const r=await this.runGuards(e.segments);if(!0!==r){if("object"!=typeof r)return!1;e=p(r.redirect)}return this.setSegments(e.segments,o,e.queryString),this.writeNavStateRoot(e.segments,o,n)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const o of t){const t=[];o.forEach((o=>t.push(...o.segments)));const n=o.map((t=>t.id));console.debug(`%c ${w(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${n.join(", ")})`)}console.groupEnd()})(S(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const o of t)o.to&&console.debug("FROM: ",`$c ${w(o.from)}`,"font-weight: bold"," TO: ",`$c ${w(o.to.segments)}`,"font-weight: bold");console.groupEnd()})(E(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:o,outlet:n}=await(async()=>{const t=[];let o,n=window.document.body;for(;o=g(n);){const i=await o.getRouteId();if(!i)break;n=i.element,i.element=void 0,t.push(i)}return{ids:t,outlet:o}})(),i=((t,o)=>{let n=null,i=0;for(const e of o){const o=y(t,e);o>i&&(n=e,i=o)}return n?n.map(((o,n)=>{var i;return{id:o.id,segments:o.segments,params:C(o.params,null===(i=t[n])||void 0===i?void 0:i.params)}})):null})(o,S(this.el));if(!i)return console.warn("[ion-router] no matching URL for ",o.map((t=>t.id))),!1;const e=(t=>{const o=[];for(const n of t)for(const t of n.segments)if(":"===t[0]){const i=n.params&&n.params[t.slice(1)];if(!i)return null;o.push(i)}else""!==t&&o.push(t);return o})(i);return e?(this.setSegments(e,t),await this.safeWriteNavState(n,i,f,e,null,o.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getSegments();t&&b(t,E(this.el))&&this.writeNavStateRoot(t,f)}onRoutesChanged(){return this.writeNavStateRoot(this.getSegments(),f)}historyDirection(){var t;const o=window;null===o.history.state&&(this.state++,o.history.replaceState(this.state,o.document.title,null===(t=o.document.location)||void 0===t?void 0:t.href));const n=o.history.state,i=this.lastState;return this.lastState=n,n>i||n>=i&&i>0?d:n<i?"back":f}async writeNavStateRoot(t,o,n){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const i=E(this.el),e=b(t,i);let r=null;if(e){const{segments:n,queryString:i}=e.to;this.setSegments(n,o,i),r=e.from,t=n}const s=S(this.el),c=j(t,s);return c?this.safeWriteNavState(document.body,c,o,t,r,0,n):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,o,n,i,e,r=0,s){const c=await this.lock();let a=!1;try{a=await this.writeNavState(t,o,n,i,e,r,s)}catch(t){console.error(t)}return c(),a}async lock(){const t=this.waitPromise;let o;return this.waitPromise=new Promise((t=>o=t)),void 0!==t&&await t,o}async runGuards(t=this.getSegments(),o){if(void 0===o&&(o=p(this.previousPath).segments),!t||!o)return!0;const n=S(this.el),i=j(o,n),e=i&&i[i.length-1].beforeLeave,r=!e||await e();if(!1===r||"object"==typeof r)return r;const s=j(t,n),c=s&&s[s.length-1].beforeEnter;return!c||c()}async writeNavState(t,o,n,i,e,r=0,s){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const c=this.routeChangeEvent(i,e);c&&this.ionRouteWillChange.emit(c);const a=await m(t,o,n,r,!1,s);return this.busy=!1,c&&this.ionRouteDidChange.emit(c),a}setSegments(t,o,n){this.state++,((t,o,n,i,e,r,s)=>{const c=((t,o,n)=>{let i=w(t);return o&&(i="#"+i),void 0!==n&&(i+="?"+n),i})([...p(o).segments,...i],n,s);e===d?t.pushState(r,"",c):t.replaceState(r,"",c)})(window.history,this.root,this.useHash,t,o,this.state,n)}getSegments(){return((t,o,n)=>{const i=p(this.root).segments,e=n?t.hash.slice(1):t.pathname;return((t,o)=>{if(t.length>o.length)return null;if(t.length<=1&&""===t[0])return o;for(let n=0;n<t.length;n++)if(t[n]!==o[n])return null;return o.length===t.length?[""]:o.slice(t.length)})(i,p(e).segments)})(window.location,0,this.useHash)}routeChangeEvent(t,o){const n=this.previousPath,i=w(t);return this.previousPath=i,i===n?null:{from:n,redirectedFrom:o?w(o):null,to:i}}get el(){return n(this)}},x=class{constructor(o){t(this,o),this.onClick=t=>{a(this.href,t,this.routerDirection,this.routerAnimation)},this.color=void 0,this.href=void 0,this.rel=void 0,this.routerDirection="forward",this.routerAnimation=void 0,this.target=void 0}render(){const t=c(this),o={href:this.href,rel:this.rel,target:this.target};return i(e,{onClick:this.onClick,class:h(this.color,{[t]:!0,"ion-activatable":!0})},i("a",Object.assign({},o),i("slot",null)))}};x.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";export{u as ion_route,l as ion_route_redirect,U as ion_router,x as ion_router_link}