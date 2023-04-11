var __spreadArray=this&&this.__spreadArray||function(r,n,e){if(e||arguments.length===2)for(var t=0,a=n.length,u;t<a;t++){if(u||!(t in n)){if(!u)u=Array.prototype.slice.call(n,0,t);u[t]=n[t]}}return r.concat(u||Array.prototype.slice.call(n))};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-97891b6b.system.js"],(function(r){"use strict";var n;return{setters:[function(r){n=r.p}],execute:function(){r({q:l,s:b});var e=r("c",(function(r,n){return r.month===n.month&&r.day===n.day&&r.year===n.year}));var t=r("i",(function(r,n){return!!(r.year<n.year||r.year===n.year&&r.month<n.month||r.year===n.year&&r.month===n.month&&r.day!==null&&r.day<n.day)}));var a=r("b",(function(r,n){return!!(r.year>n.year||r.year===n.year&&r.month>n.month||r.year===n.year&&r.month===n.month&&r.day!==null&&r.day>n.day)}));var u=r("w",(function(r,e,u){var i=Array.isArray(r)?r:[r];for(var o=0,f=i;o<f.length;o++){var d=f[o];if(e!==undefined&&t(d,e)||u!==undefined&&a(d,u)){n("The value provided to ion-datetime is out of bounds.\n\n"+"Min: ".concat(JSON.stringify(e),"\n")+"Max: ".concat(JSON.stringify(u),"\n")+"Value: ".concat(JSON.stringify(r)));break}}}));var i=function(r){return r%4===0&&r%100!==0||r%400===0};var o=r("J",(function(r,n){if(n!==undefined){return n==="h23"}var e=new Intl.DateTimeFormat(r,{hour:"numeric"});var t=e.resolvedOptions();if(t.hourCycle!==undefined){return t.hourCycle==="h23"}var a=new Date("5/18/2021 00:00");var u=e.formatToParts(a);var i=u.find((function(r){return r.type==="hour"}));if(!i){throw new Error("Hour value not found from DateTimeFormat")}return i.value==="00"}));var f=r("x",(function(r,n){return r===4||r===6||r===9||r===11?30:r===2?i(n)?29:28:31}));var d=r("C",(function(r,n){if(n===void 0){n={month:"numeric",year:"numeric"}}var e=new Intl.DateTimeFormat(r,n).formatToParts(new Date);return e[0].type==="month"}));var v=r("E",(function(r){var n=new Intl.DateTimeFormat(r,{hour:"numeric"}).formatToParts(new Date);return n[0].type==="dayPeriod"}));var m=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;var c=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;var y=r("r",(function(r){if(r===undefined){return}var n=r;if(typeof r==="string"){n=r.replace(/\[|\]|\s/g,"").split(",")}var e;if(Array.isArray(n)){e=n.map((function(r){return parseInt(r,10)})).filter(isFinite)}else{e=[n]}return e}));var h=r("f",(function(r){return{month:parseInt(r.getAttribute("data-month"),10),day:parseInt(r.getAttribute("data-day"),10),year:parseInt(r.getAttribute("data-year"),10),dayOfWeek:parseInt(r.getAttribute("data-day-of-week"),10)}}));function l(r){if(Array.isArray(r)){return r.map((function(r){return l(r)}))}var n=null;if(r!=null&&r!==""){n=c.exec(r);if(n){n.unshift(undefined,undefined);n[2]=n[3]=undefined}else{n=m.exec(r)}}if(n===null){return undefined}for(var e=1;e<8;e++){n[e]=n[e]!==undefined?parseInt(n[e],10):undefined}return{year:n[1],month:n[2],day:n[3],hour:n[4],minute:n[5],ampm:n[4]<12?"am":"pm"}}var s=r("P",(function(r,n,e){if(n&&t(r,n)){return n}else if(e&&a(r,e)){return e}return r}));var p=r("Q",(function(r){return r>=12?"pm":"am"}));var w=r("o",(function(r,n){var e=l(r),t=e.month,a=e.day,u=e.year,i=e.hour,o=e.minute;var d=u!==null&&u!==void 0?u:n.year;var v=t!==null&&t!==void 0?t:12;return{month:v,day:a!==null&&a!==void 0?a:f(v,d),year:d,hour:i!==null&&i!==void 0?i:23,minute:o!==null&&o!==void 0?o:59}}));var T=r("p",(function(r,n){var e=l(r),t=e.month,a=e.day,u=e.year,i=e.hour,o=e.minute;return{month:t!==null&&t!==void 0?t:1,day:a!==null&&a!==void 0?a:1,year:u!==null&&u!==void 0?u:n.year,hour:i!==null&&i!==void 0?i:0,minute:o!==null&&o!==void 0?o:0}}));var g=function(r){return("0"+(r!==undefined?Math.abs(r):"0")).slice(-2)};var D=function(r){return("000"+(r!==undefined?Math.abs(r):"0")).slice(-4)};function b(r){if(Array.isArray(r)){return r.map((function(r){return b(r)}))}var n="";if(r.year!==undefined){n=D(r.year);if(r.month!==undefined){n+="-"+g(r.month);if(r.day!==undefined){n+="-"+g(r.day);if(r.hour!==undefined){n+="T".concat(g(r.hour),":").concat(g(r.minute),":00")}}}}else if(r.hour!==undefined){n=g(r.hour)+":"+g(r.minute)}return n}var O=function(r,n){if(n===undefined){return r}if(n==="am"){if(r===12){return 0}return r}if(r===12){return 12}return r+12};var A=r("j",(function(r){var n=r.dayOfWeek;if(n===null||n===undefined){throw new Error("No day of week provided")}return C(r,n)}));var I=r("h",(function(r){var n=r.dayOfWeek;if(n===null||n===undefined){throw new Error("No day of week provided")}return _(r,6-n)}));var j=r("l",(function(r){return _(r,1)}));var F=r("k",(function(r){return C(r,1)}));var M=r("m",(function(r){return C(r,7)}));var x=r("n",(function(r){return _(r,7)}));var C=function(r,n){var e=r.month,t=r.day,a=r.year;if(t===null){throw new Error("No day provided")}var u={month:e,day:t,year:a};u.day=t-n;if(u.day<1){u.month-=1}if(u.month<1){u.month=12;u.year-=1}if(u.day<1){var i=f(u.month,u.year);u.day=i+u.day}return u};var _=function(r,n){var e=r.month,t=r.day,a=r.year;if(t===null){throw new Error("No day provided")}var u={month:e,day:t,year:a};var i=f(e,a);u.day=t+n;if(u.day>i){u.day-=i;u.month+=1}if(u.month>12){u.month=1;u.year+=1}return u};var k=r("d",(function(r){var n=r.month===1?12:r.month-1;var e=r.month===1?r.year-1:r.year;var t=f(n,e);var a=t<r.day?t:r.day;return{month:n,year:e,day:a}}));var Z=r("e",(function(r){var n=r.month===12?1:r.month+1;var e=r.month===12?r.year+1:r.year;var t=f(n,e);var a=t<r.day?t:r.day;return{month:n,year:e,day:a}}));var U=function(r,n){var e=r.month;var t=r.year+n;var a=f(e,t);var u=a<r.day?a:r.day;return{month:e,year:t,day:u}};var E=r("O",(function(r){return U(r,-1)}));var G=r("N",(function(r){return U(r,1)}));var P=function(r,n,e){if(n){return r}return O(r,e)};var S=r("R",(function(r,n){var e=r.ampm,t=r.hour;var a=t;if(e==="am"&&n==="pm"){a=O(a,"pm")}else if(e==="pm"&&n==="am"){a=Math.abs(a-12)}return a}));var N=r("v",(function(r,n,t){var a=r.month,u=r.day,i=r.year;var o=Object.assign({},r);var d=f(a,i);if(u!==null&&d<u){o.day=d}if(n!==undefined&&e(o,n)){if(o.hour!==undefined&&n.hour!==undefined){if(o.hour<n.hour){o.hour=n.hour;o.minute=n.minute}else if(o.hour===n.hour&&o.minute!==undefined&&n.minute!==undefined&&o.minute<n.minute){o.minute=n.minute}}}if(t!==undefined&&e(r,t)){if(o.hour!==undefined&&t.hour!==undefined){if(o.hour>t.hour){o.hour=t.hour;o.minute=t.minute}else if(o.hour===t.hour&&o.minute!==undefined&&t.minute!==undefined&&o.minute>t.minute){o.minute=t.minute}}}return o}));var W=r("u",(function(r,n,e,t,a,u){var i=r.hour,o=r.minute,f=r.day,d=r.month,v=r.year;var m=Object.assign(Object.assign({},r),{dayOfWeek:undefined});if(n!==undefined){m.month=J(d,n)}if(f!==null&&e!==undefined){m.day=J(f,e)}if(t!==undefined){m.year=J(v,t)}if(i!==undefined&&a!==undefined){m.hour=J(i,a);m.ampm=p(m.hour)}if(o!==undefined&&u!==undefined){m.minute=J(o,u)}return m}));var J=function(r,n){var e=n[0];var t=Math.abs(e-r);for(var a=1;a<n.length;a++){var u=n[a];var i=Math.abs(u-r);if(i<t){e=u;t=i}}return e};var R=function(r){if(r===undefined){return""}return r.toUpperCase()};var z=r("K",(function(r,n,e){var t={hour:n.hour,minute:n.minute};if(t.hour===undefined||t.minute===undefined){return"Invalid Time"}return new Intl.DateTimeFormat(r,{hour:"numeric",minute:"numeric",timeZone:"UTC",hourCycle:e?"h23":"h12"}).format(new Date(b(Object.assign({year:2023,day:1,month:1},t))+"Z"))}));var H=function(r){var n=r.toString();if(n.length>1){return n}return"0".concat(n)};var $=function(r,n){if(n){return H(r)}if(r===0){return"12"}return r.toString()};var q=r("g",(function(r,n,e){if(e.day===null){return null}var t=new Date("".concat(e.month,"/").concat(e.day,"/").concat(e.year," GMT+0000"));var a=new Intl.DateTimeFormat(r,{weekday:"long",month:"long",day:"numeric",timeZone:"UTC"}).format(t);return n?"Today, ".concat(a):a}));var B=r("L",(function(r,n){var e=new Date("".concat(n.month,"/").concat(n.day,"/").concat(n.year," GMT+0000"));return new Intl.DateTimeFormat(r,{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}).format(e)}));var K=r("G",(function(r,n){var e=new Date("".concat(n.month,"/").concat(n.day,"/").concat(n.year," GMT+0000"));return new Intl.DateTimeFormat(r,{month:"long",year:"numeric",timeZone:"UTC"}).format(e)}));var L=r("T",(function(r,n){return Y(r,n,{month:"short",day:"numeric",year:"numeric"})}));var Q=r("a",(function(r,n){return rr(r,n,{day:"numeric"}).find((function(r){return r.type==="day"})).value}));var V=function(r,n){return Y(r,n,{year:"numeric"})};var X=function(r){var n=r.hour!==undefined&&r.minute!==undefined?" ".concat(r.hour,":").concat(r.minute):"";return new Date("".concat(r.month,"/").concat(r.day,"/").concat(r.year).concat(n," GMT+0000"))};var Y=r("S",(function(r,n,e){var t=X(n);return nr(r,e).format(t)}));var rr=function(r,n,e){var t=X(n);return nr(r,e).formatToParts(t)};var nr=function(r,n){return new Intl.DateTimeFormat(r,Object.assign(Object.assign({},n),{timeZone:"UTC"}))};var er=function(r){if("RelativeTimeFormat"in Intl){var n=new Intl.RelativeTimeFormat(r,{numeric:"auto"}).format(0,"day");return n.charAt(0).toUpperCase()+n.slice(1)}else{return"Today"}};var tr=function(r){var n=r.getTimezoneOffset();r.setMinutes(r.getMinutes()-n);return r};var ar=tr(new Date("2022T01:00"));var ur=tr(new Date("2022T13:00"));var ir=function(r,n){var e=n==="am"?ar:ur;var t=new Intl.DateTimeFormat(r,{hour:"numeric",timeZone:"UTC"}).formatToParts(e).find((function(r){return r.type==="dayPeriod"}));if(t){return t.value}return R(n)};var or=r("M",(function(r){return Array.isArray(r)?r.join(","):r}));var fr=r("t",(function(){return tr(new Date).toISOString()}));var dr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];var vr=[0,1,2,3,4,5,6,7,8,9,10,11];var mr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];var cr=r("F",(function(r,n,e){if(e===void 0){e=0}var t=n==="ios"?"short":"narrow";var a=new Intl.DateTimeFormat(r,{weekday:t});var u=new Date("11/01/2020");var i=[];for(var o=e;o<e+7;o++){var f=new Date(u);f.setDate(f.getDate()+o);i.push(a.format(f))}return i}));var yr=r("H",(function(r,n,e){var t=f(r,n);var a=new Date("".concat(r,"/1/").concat(n)).getDay();var u=a>=e?a-(e+1):6-(e-a);var i=[];for(var o=1;o<=t;o++){i.push({day:o,dayOfWeek:(u+o)%7})}for(var o=0;o<=u;o++){i=__spreadArray([{day:null,dayOfWeek:null}],i,true)}return i}));var hr=function(r,n,u,i,o,f){if(n===void 0){n="h12"}var d=n==="h23";var v=d?mr:vr;var m=dr;var c=true;var y=true;if(o){v=v.filter((function(r){return o.includes(r)}))}if(f){m=m.filter((function(r){return f.includes(r)}))}if(u){if(e(r,u)){if(u.hour!==undefined){v=v.filter((function(n){var e=r.ampm==="pm"?(n+12)%24:n;return(d?n:e)>=u.hour}));c=u.hour<13}if(u.minute!==undefined){var h=false;if(u.hour!==undefined&&r.hour!==undefined){if(r.hour>u.hour){h=true}}m=m.filter((function(r){if(h){return true}return r>=u.minute}))}}else if(t(r,u)){v=[];m=[];c=y=false}}if(i){if(e(r,i)){if(i.hour!==undefined){v=v.filter((function(n){var e=r.ampm==="pm"?(n+12)%24:n;return(d?n:e)<=i.hour}));y=i.hour>=12}if(i.minute!==undefined&&r.hour===i.hour){m=m.filter((function(r){return r<=i.minute}))}}else if(a(r,i)){v=[];m=[];c=y=false}}return{hours:v,minutes:m,am:c,pm:y}};var lr=r("I",(function(r){return[k(r),{month:r.month,year:r.year,day:r.day},Z(r)]}));var sr=r("z",(function(r,n,e,t,a,u){if(u===void 0){u={month:"long"}}var i=n.year;var o=[];if(a!==undefined){var f=a;if((t===null||t===void 0?void 0:t.month)!==undefined){f=f.filter((function(r){return r<=t.month}))}if((e===null||e===void 0?void 0:e.month)!==undefined){f=f.filter((function(r){return r>=e.month}))}f.forEach((function(n){var e=new Date("".concat(n,"/1/").concat(i," GMT+0000"));var t=new Intl.DateTimeFormat(r,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(e);o.push({text:t,value:n})}))}else{var d=t&&t.year===i?t.month:12;var v=e&&e.year===i?e.month:1;for(var m=v;m<=d;m++){var c=new Date("".concat(m,"/1/").concat(i," GMT+0000"));var y=new Intl.DateTimeFormat(r,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(c);o.push({text:y,value:m})}}return o}));var pr=r("A",(function(r,n,e,t,a,u){if(u===void 0){u={day:"numeric"}}var i=n.month,o=n.year;var d=[];var v=f(i,o);var m=(t===null||t===void 0?void 0:t.day)!==null&&(t===null||t===void 0?void 0:t.day)!==undefined&&t.year===o&&t.month===i?t.day:v;var c=(e===null||e===void 0?void 0:e.day)!==null&&(e===null||e===void 0?void 0:e.day)!==undefined&&e.year===o&&e.month===i?e.day:1;if(a!==undefined){var y=a;y=y.filter((function(r){return r>=c&&r<=m}));y.forEach((function(n){var e=new Date("".concat(i,"/").concat(n,"/").concat(o," GMT+0000"));var t=new Intl.DateTimeFormat(r,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(e);d.push({text:t,value:n})}))}else{for(var h=c;h<=m;h++){var l=new Date("".concat(i,"/").concat(h,"/").concat(o," GMT+0000"));var s=new Intl.DateTimeFormat(r,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(l);d.push({text:s,value:h})}}return d}));var wr=r("B",(function(r,n,e,t,a){var u,i;var o=[];if(a!==undefined){o=a;if((t===null||t===void 0?void 0:t.year)!==undefined){o=o.filter((function(r){return r<=t.year}))}if((e===null||e===void 0?void 0:e.year)!==undefined){o=o.filter((function(r){return r>=e.year}))}}else{var f=n.year;var d=(u=t===null||t===void 0?void 0:t.year)!==null&&u!==void 0?u:f;var v=(i=e===null||e===void 0?void 0:e.year)!==null&&i!==void 0?i:f-100;for(var m=d;m>=v;m--){o.push(m)}}return o.map((function(e){return{text:V(r,{year:e,month:n.month,day:n.day}),value:e}}))}));var Tr=function(r,n){if(r.month===n.month&&r.year===n.year){return[r]}return __spreadArray([r],Tr(Z(r),n),true)};var gr=r("y",(function(r,n,t,a,u,i){var o=[];var f=[];var d=Tr(t,a);if(i){d=d.filter((function(r){var n=r.month;return i.includes(n)}))}d.forEach((function(i){var d={month:i.month,day:null,year:i.year};var v=pr(r,d,t,a,u,{month:"short",day:"numeric",weekday:"short"});var m=[];var c=[];v.forEach((function(t){var a=e(Object.assign(Object.assign({},d),{day:t.value}),n);c.push({text:a?er(r):t.text,value:"".concat(d.year,"-").concat(d.month,"-").concat(t.value)});m.push({month:d.month,year:d.year,day:t.value})}));f=__spreadArray(__spreadArray([],f,true),m,true);o=__spreadArray(__spreadArray([],o,true),c,true)}));return{parts:f,items:o}}));var Dr=r("D",(function(r,n,e,t,a,u,i){var f=o(r,e);var d=hr(n,f?"h23":"h12",t,a,u,i),v=d.hours,m=d.minutes,c=d.am,y=d.pm;var h=v.map((function(r){return{text:$(r,f),value:P(r,f,n.ampm)}}));var l=m.map((function(r){return{text:H(r),value:r}}));var s=[];if(c&&!f){s.push({text:ir(r,"am"),value:"am"})}if(y&&!f){s.push({text:ir(r,"pm"),value:"pm"})}return{minutesData:l,hoursData:h,dayPeriodData:s}}))}}}));