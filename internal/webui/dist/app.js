/*! Three.js 0.186.1
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Land outlines: Natural Earth v5.1.2, public domain. */
(()=>{function dh(n=globalThis.fetch?.bind(globalThis)){let e=new Map;async function t(r,a={},o=null){let c=new URLSearchParams;for(let[f,u]of Object.entries(a))u!=null&&c.set(f,u);let l=c.size?`${r}?${c}`:r,h=new AbortController;o&&(e.get(o)?.abort(),e.set(o,h));try{let f=await n(l,{signal:h.signal}),u=await f.text(),m=null;try{m=JSON.parse(u)}catch{}if(!f.ok){let x=u.trim(),v=x.length<200&&!x.startsWith("<")?x:"";throw new Sr(m?.error?.message||v||`Request failed (${f.status}).`,f.status)}if(m===null)throw new Sr("The server returned an unreadable response.",f.status);return m}finally{o&&e.get(o)===h&&e.delete(o)}}let i=r=>new Date(r).toISOString().replace(/\.\d+Z$/,"Z"),s=r=>r?{lat:r.lat,lon:r.lon,alt:r.alt}:{};return{groups:()=>t("/api/satellite-groups"),satellites:r=>t("/api/satellites",{group:r},"satellites"),search:r=>t("/api/v1/search",{q:r},"satellites"),track:(r,a,o)=>t("/api/v1/track",{norad_id:r,start:i(a),duration:"25h",step:"60s",...s(o)},`track:${r}`),report:r=>t("/api/v1/report",{norad_id:r},"report"),passes:(r,a,o)=>t("/api/v1/passes",{norad_id:r,start:i(o),duration:"48h",step:"30s",...s(a)},"passes"),tonight:(r,a,o)=>t("/api/v1/tonight",{norad_id:r,time:typeof o=="number"?i(o):o,...s(a)},"tonight"),sources:()=>t("/api/v1/sources",{},"sources"),spaceWeather:()=>t("/api/v1/space-weather",{},"space-weather"),launches:()=>t("/api/v1/launches",{},"launches"),satelliteDetails:r=>t("/api/v1/satellite-details",{norad_id:r},"satellite-details"),transmitters:r=>t("/api/v1/transmitters",{norad_id:r},"transmitters"),spaceWeatherHistory:()=>t("/api/v1/space-weather-history",{},"space-weather-history"),spaceEvents:()=>t("/api/v1/space-events",{},"space-events"),catalogRecord:r=>t("/api/v1/catalog-record",{norad_id:r},"catalog-record"),spaceTrack:r=>t("/api/v1/space-track",{norad_id:r},"space-track"),lessons:()=>t("/api/v1/lessons",{},"lessons"),satelliteData:r=>t("/api/v1/satellite-data",{norad_id:r},"satellite-data"),recentScenes:r=>t("/api/v1/recent-scenes",{norad_id:r},"recent-scenes"),cloudCover:r=>t("/api/v1/cloud-cover",{lat:r.lat,lon:r.lon},"cloud-cover"),look:(r,a,o,c)=>t("/api/v1/look",{norad_id:r,start:o,end:c,samples:64,...s(a)},"look")}}var Sr=class extends Error{constructor(e,t){super(e),this.status=t}},rn=n=>n?.name==="AbortError";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hh=0,yl=1,Wh=2;var er=1,Xh=2,cs=3,hi=0,Nt=1,wn=2,En=0,hs=1,vl=2,bl=3,Sl=4,qh=5;var wi=100,Yh=101,$h=102,Zh=103,Kh=104,Jh=200,jh=201,Qh=202,eu=203,Ml=204,wl=205,tu=206,nu=207,iu=208,su=209,ru=210,au=211,ou=212,lu=213,cu=214,$r=0,Zr=1,Kr=2,ei=3,Jr=4,jr=5,Qr=6,ea=7,Ca=0,hu=1,uu=2,un=0,El=1,Tl=2,Al=3,Cl=4,Rl=5,Pl=6,Il=7;var Ll=300,ui=301,Ei=302,Ra=303,Pa=304,tr=306,ta=1e3,yn=1001,na=1002,Rt=1003,du=1004;var nr=1005;var It=1006,Ia=1007;var di=1008;var qt=1009,Dl=1010,Nl=1011,us=1012,La=1013,dn=1014,fn=1015,pn=1016,Da=1017,Na=1018,ds=1020,Ul=35902,Fl=35899,Ol=1021,Bl=1022,nn=1023,vn=1026,fi=1027,kl=1028,Ua=1029,pi=1030,Fa=1031;var Oa=1033,ir=33776,sr=33777,rr=33778,ar=33779,Ba=35840,ka=35841,za=35842,Va=35843,Ga=36196,Ha=37492,Wa=37496,Xa=37488,qa=37489,or=37490,Ya=37491,$a=37808,Za=37809,Ka=37810,Ja=37811,ja=37812,Qa=37813,eo=37814,to=37815,no=37816,io=37817,so=37818,ro=37819,ao=37820,oo=37821,lo=36492,co=36494,ho=36495,uo=36283,fo=36284,lr=36285,po=36286;var Ls=2300,ia=2301,qr=2302,hl=2303,ul=2400,dl=2401,fl=2402;var fu=3200;var mo=0,pu=1,kn="",Ht="srgb",Ds="srgb-linear",Ns="linear",ot="srgb";var Yr=7680;var mu=519,gu=512,_u=513,xu=514,go=515,yu=516,vu=517,_o=518,bu=519,Su=35044;var zl="300 es",cn=2e3,Ji=2001;function Rf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Us(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mu(){let n=Us("canvas");return n.style.display="block",n}var fh={},ji=null;function Vl(...n){let e="THREE."+n.shift();ji?ji("log",e,...n):console.log(e,...n)}function wu(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=wu(n);let e="THREE."+n.shift();if(ji)ji("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ze(...n){n=wu(n);let e="THREE."+n.shift();if(ji)ji("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Mi(...n){let e=n.join(" ");e in fh||(fh[e]=!0,Oe(...n))}function Eu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Tu={[$r]:Zr,[Kr]:Qr,[Jr]:ea,[ei]:jr,[Zr]:$r,[Qr]:Kr,[ea]:Jr,[jr]:ei},hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=1234567,Ps=Math.PI/180,Qi=180/Math.PI;function fs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Gl(n,e){return(n%e+e)%e}function If(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Lf(n,e,t){return n!==e?(t-n)/(e-n):0}function Is(n,e,t){return(1-t)*n+t*e}function Df(n,e,t,i){return Is(n,e,1-Math.exp(-t*i))}function Nf(n,e=1){return e-Math.abs(Gl(n,e*2)-e)}function Uf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ff(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Of(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bf(n,e){return n+Math.random()*(e-n)}function kf(n){return n*(.5-Math.random())}function zf(n){n!==void 0&&(ph=n);let e=ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vf(n){return n*Ps}function Gf(n){return n*Qi}function Hf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Wf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qf(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),f=r((e-i)/2),u=a((e-i)/2),m=r((i-e)/2),x=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*f,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*f,o*l);break;case"ZXZ":n.set(c*f,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*x,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*x,o*l);break;case"ZYZ":n.set(c*x,c*m,o*h,o*l);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Hl={DEG2RAD:Ps,RAD2DEG:Qi,generateUUID:fs,clamp:et,euclideanModulo:Gl,mapLinear:If,inverseLerp:Lf,lerp:Is,damp:Df,pingpong:Nf,smoothstep:Uf,smootherstep:Ff,randInt:Of,randFloat:Bf,randFloatSpread:kf,seededRandom:zf,degToRad:Vf,radToDeg:Gf,isPowerOfTwo:Hf,ceilPowerOfTwo:Wf,floorPowerOfTwo:Xf,setQuaternionFromProperEuler:qf,normalize:Gt,denormalize:Zi},$l=class $l{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$l.prototype.isVector2=!0;var Ve=$l,Jt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],m=r[a+1],x=r[a+2],v=r[a+3];if(f!==v||c!==u||l!==m||h!==x){let p=c*u+l*m+h*x+f*v;p<0&&(u=-u,m=-m,x=-x,v=-v,p=-p);let d=1-o;if(p<.9995){let S=Math.acos(p),C=Math.sin(S);d=Math.sin(d*S)/C,o=Math.sin(o*S)/C,c=c*d+u*o,l=l*d+m*o,h=h*d+x*o,f=f*d+v*o}else{c=c*d+u*o,l=l*d+m*o,h=h*d+x*o,f=f*d+v*o;let S=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=S,l*=S,h*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*f+c*m-l*u,e[t+1]=c*x+h*u+l*f-o*m,e[t+2]=l*x+h*m+o*u-c*f,e[t+3]=h*x-o*f-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),u=c(i/2),m=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*m*x,this._y=l*m*f-u*h*x,this._z=l*h*x+u*m*f,this._w=l*h*f-u*m*x;break;case"YXZ":this._x=u*h*f+l*m*x,this._y=l*m*f-u*h*x,this._z=l*h*x-u*m*f,this._w=l*h*f+u*m*x;break;case"ZXY":this._x=u*h*f-l*m*x,this._y=l*m*f+u*h*x,this._z=l*h*x+u*m*f,this._w=l*h*f-u*m*x;break;case"ZYX":this._x=u*h*f-l*m*x,this._y=l*m*f+u*h*x,this._z=l*h*x-u*m*f,this._w=l*h*f+u*m*x;break;case"YZX":this._x=u*h*f+l*m*x,this._y=l*m*f+u*h*x,this._z=l*h*x-u*m*f,this._w=l*h*f-u*m*x;break;case"XZY":this._x=u*h*f-l*m*x,this._y=l*m*f-u*h*x,this._z=l*h*x+u*m*f,this._w=l*h*f+u*m*x;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>f){let m=2*Math.sqrt(1+i-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){let m=2*Math.sqrt(1+o-i-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zl=class Zl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Go.copy(this).projectOnVector(e),this.sub(Go)}reflect(e){return this.sub(Go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zl.prototype.isVector3=!0;var z=Zl,Go=new z,mh=new Jt,Kl=class Kl{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],m=i[5],x=i[8],v=s[0],p=s[3],d=s[6],S=s[1],C=s[4],b=s[7],M=s[2],E=s[5],A=s[8];return r[0]=a*v+o*S+c*M,r[3]=a*p+o*C+c*E,r[6]=a*d+o*b+c*A,r[1]=l*v+h*S+f*M,r[4]=l*p+h*C+f*E,r[7]=l*d+h*b+f*A,r[2]=u*v+m*S+x*M,r[5]=u*p+m*C+x*E,r[8]=u*d+m*b+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*r,m=l*r-a*c,x=t*f+i*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=f*v,e[1]=(s*l-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Mi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return Mi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return Mi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kl.prototype.isMatrix3=!0;var qe=Kl,Ho=new qe,gh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yf(){let n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Ns:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:e,whitePoint:i,transfer:Ns,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}var nt=Yf();function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Fi,sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fi===void 0&&(Fi=Us("canvas")),Fi.width=e.width,Fi.height=e.height;let s=Fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Fi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Us("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$f=0,es=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wo(s[a].image)):r.push(Wo(s[a]))}else r=Wo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Zf=0,Xo=new z,Lt=class n extends hn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=yn,s=yn,r=It,a=di,o=nn,c=qt,l=n.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=fs(),this.name="",this.source=new es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xo).x}get height(){return this.source.getSize(Xo).y}get depth(){return this.source.getSize(Xo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ta:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ta:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ll;Lt.DEFAULT_ANISOTROPY=1;var Jl=class Jl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],m=c[5],x=c[9],v=c[2],p=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,b=(m+1)/2,M=(d+1)/2,E=(h+u)/4,A=(f+v)/4,_=(x+p)/4;return C>b&&C>M?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=E/i,r=A/i):b>M?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=_/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=A/r,s=_/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-x)*(p-x)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-x)/S,this.y=(f-v)/S,this.z=(u-h)/S,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jl.prototype.isVector4=!0;var xt=Jl,ra=class extends hn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Lt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new es(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends ra{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fs=class extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var aa=class extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Aa=class Aa{constructor(e,t,i,s,r,a,o,c,l,h,f,u,m,x,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,f,u,m,x,v,p)}set(e,t,i,s,r,a,o,c,l,h,f,u,m,x,v,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=x,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Aa().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*f,x=o*h,v=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+x*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,m=c*f,x=l*h,v=l*f;t[0]=u+v*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,m=c*f,x=l*h,v=l*f;t[0]=u-v*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,m=a*f,x=o*h,v=o*f;t[0]=c*h,t[4]=x*l-m,t[8]=u*l+v,t[1]=c*f,t[5]=v*l+u,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,m=a*l,x=o*c,v=o*l;t[0]=c*h,t[4]=v-u*f,t[8]=x*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*f+x,t[10]=u-v*f}else if(e.order==="XZY"){let u=a*c,m=a*l,x=o*c,v=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+v,t[5]=a*h,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kf,e,Jf)}lookAt(e,t,i){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),$n.crossVectors(i,$t),$n.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),$n.crossVectors(i,$t)),$n.normalize(),Mr.crossVectors($t,$n),s[0]=$n.x,s[4]=Mr.x,s[8]=$t.x,s[1]=$n.y,s[5]=Mr.y,s[9]=$t.y,s[2]=$n.z,s[6]=Mr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],m=i[13],x=i[2],v=i[6],p=i[10],d=i[14],S=i[3],C=i[7],b=i[11],M=i[15],E=s[0],A=s[4],_=s[8],T=s[12],R=s[1],N=s[5],G=s[9],$=s[13],F=s[2],P=s[6],k=s[10],B=s[14],Q=s[3],H=s[7],J=s[11],se=s[15];return r[0]=a*E+o*R+c*F+l*Q,r[4]=a*A+o*N+c*P+l*H,r[8]=a*_+o*G+c*k+l*J,r[12]=a*T+o*$+c*B+l*se,r[1]=h*E+f*R+u*F+m*Q,r[5]=h*A+f*N+u*P+m*H,r[9]=h*_+f*G+u*k+m*J,r[13]=h*T+f*$+u*B+m*se,r[2]=x*E+v*R+p*F+d*Q,r[6]=x*A+v*N+p*P+d*H,r[10]=x*_+v*G+p*k+d*J,r[14]=x*T+v*$+p*B+d*se,r[3]=S*E+C*R+b*F+M*Q,r[7]=S*A+C*N+b*P+M*H,r[11]=S*_+C*G+b*k+M*J,r[15]=S*T+C*$+b*B+M*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],m=e[14],x=e[3],v=e[7],p=e[11],d=e[15],S=c*m-l*u,C=o*m-l*f,b=o*u-c*f,M=a*m-l*h,E=a*u-c*h,A=a*f-o*h;return t*(v*S-p*C+d*b)-i*(x*S-p*M+d*E)+s*(x*C-v*M+d*A)-r*(x*b-v*E+p*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],m=e[11],x=e[12],v=e[13],p=e[14],d=e[15],S=t*o-i*a,C=t*c-s*a,b=t*l-r*a,M=i*c-s*o,E=i*l-r*o,A=s*l-r*c,_=h*v-f*x,T=h*p-u*x,R=h*d-m*x,N=f*p-u*v,G=f*d-m*v,$=u*d-m*p,F=S*$-C*G+b*N+M*R-E*T+A*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/F;return e[0]=(o*$-c*G+l*N)*P,e[1]=(s*G-i*$-r*N)*P,e[2]=(v*A-p*E+d*M)*P,e[3]=(u*E-f*A-m*M)*P,e[4]=(c*R-a*$-l*T)*P,e[5]=(t*$-s*R+r*T)*P,e[6]=(p*b-x*A-d*C)*P,e[7]=(h*A-u*b+m*C)*P,e[8]=(a*G-o*R+l*_)*P,e[9]=(i*R-t*G-r*_)*P,e[10]=(x*E-v*b+d*S)*P,e[11]=(f*b-h*E-m*S)*P,e[12]=(o*T-a*N-c*_)*P,e[13]=(t*N-i*T+s*_)*P,e[14]=(v*C-x*M-p*S)*P,e[15]=(h*M-f*C+u*S)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,u=r*l,m=r*h,x=r*f,v=a*h,p=a*f,d=o*f,S=c*l,C=c*h,b=c*f,M=i.x,E=i.y,A=i.z;return s[0]=(1-(v+d))*M,s[1]=(m+b)*M,s[2]=(x-C)*M,s[3]=0,s[4]=(m-b)*E,s[5]=(1-(u+d))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(x+C)*A,s[9]=(p-S)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Oi.set(s[0],s[1],s[2]).length(),o=Oi.set(s[4],s[5],s[6]).length(),c=Oi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),an.copy(this);let l=1/a,h=1/o,f=1/c;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=cn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),m=(i+s)/(i-s),x,v;if(c)x=r/(a-r),v=a*r/(a-r);else if(o===cn)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ji)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=cn,c=!1){let l=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),m=-(i+s)/(i-s),x,v;if(c)x=1/(a-r),v=a/(a-r);else if(o===cn)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ji)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Aa.prototype.isMatrix4=!0;var mt=Aa,Oi=new z,an=new mt,Kf=new z(0,0,0),Jf=new z(1,1,1),$n=new z,Mr=new z,$t=new z,xh=new mt,yh=new Jt,Fn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var ts=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jf=0,vh=new z,Bi=new Jt,Rn=new mt,wr=new z,Es=new z,Qf=new z,e1=new Jt,bh=new z(1,0,0),Sh=new z(0,1,0),Mh=new z(0,0,1),wh={type:"added"},t1={type:"removed"},ki={type:"childadded",child:null},qo={type:"childremoved",child:null},Dt=class n extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new z,t=new Fn,i=new Jt,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new qe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wr.copy(e):wr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Es,wr,this.up):Rn.lookAt(wr,Es,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wh),ki.child=e,this.dispatchEvent(ki),ki.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t1),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wh),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,Qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dt.DEFAULT_UP=new z(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},n1={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),d=this._getHandJoint(l,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&u>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n1)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Nn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Yo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Gl(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Yo(a,r,e+1/3),this.g=Yo(a,r,e),this.b=Yo(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let i=Au[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return nt.workingToColorSpace(Ot.copy(this),e),Math.round(et(Ot.r*255,0,255))*65536+Math.round(et(Ot.g*255,0,255))*256+Math.round(et(Ot.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Ot.copy(this),t);let i=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Ht){nt.workingToColorSpace(Ot.copy(this),e);let t=Ot.r,i=Ot.g,s=Ot.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Er);let i=Is(Zn.h,Er.h,t),s=Is(Zn.s,Er.s,t),r=Is(Zn.l,Er.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new Qe;Qe.NAMES=Au;var Os=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},on=new z,Pn=new z,$o=new z,In=new z,zi=new z,Vi=new z,Eh=new z,Zo=new z,Ko=new z,Jo=new z,jo=new xt,Qo=new xt,el=new xt,Qn=class n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),on.subVectors(e,t),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){on.subVectors(s,t),Pn.subVectors(i,t),$o.subVectors(e,t);let a=on.dot(on),o=on.dot(Pn),c=on.dot($o),l=Pn.dot(Pn),h=Pn.dot($o),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(l*c-o*h)*u,x=(a*h-o*c)*u;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,In)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,In.x),c.addScaledVector(a,In.y),c.addScaledVector(o,In.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return jo.setScalar(0),Qo.setScalar(0),el.setScalar(0),jo.fromBufferAttribute(e,t),Qo.fromBufferAttribute(e,i),el.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(jo,r.x),a.addScaledVector(Qo,r.y),a.addScaledVector(el,r.z),a}static isFrontFacing(e,t,i,s){return on.subVectors(i,t),Pn.subVectors(e,t),on.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),on.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;zi.subVectors(s,i),Vi.subVectors(r,i),Zo.subVectors(e,i);let c=zi.dot(Zo),l=Vi.dot(Zo);if(c<=0&&l<=0)return t.copy(i);Ko.subVectors(e,s);let h=zi.dot(Ko),f=Vi.dot(Ko);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(zi,a);Jo.subVectors(e,r);let m=zi.dot(Jo),x=Vi.dot(Jo);if(x>=0&&m<=x)return t.copy(r);let v=m*l-c*x;if(v<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(Vi,o);let p=h*x-m*f;if(p<=0&&f-h>=0&&m-x>=0)return Eh.subVectors(r,s),o=(f-h)/(f-h+(m-x)),t.copy(s).addScaledVector(Eh,o);let d=1/(p+v+u);return a=v*d,o=u*d,t.copy(i).addScaledVector(zi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ti=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Ar.subVectors(this.max,Ts),Gi.subVectors(e.a,Ts),Hi.subVectors(e.b,Ts),Wi.subVectors(e.c,Ts),Kn.subVectors(Hi,Gi),Jn.subVectors(Wi,Hi),yi.subVectors(Gi,Wi);let t=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-yi.z,yi.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,yi.z,0,-yi.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-yi.y,yi.x,0];return!tl(t,Gi,Hi,Wi,Ar)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,Gi,Hi,Wi,Ar))?!1:(Cr.crossVectors(Kn,Jn),t=[Cr.x,Cr.y,Cr.z],tl(t,Gi,Hi,Wi,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ln=[new z,new z,new z,new z,new z,new z,new z,new z],ln=new z,Tr=new ti,Gi=new z,Hi=new z,Wi=new z,Kn=new z,Jn=new z,yi=new z,Ts=new z,Ar=new z,Cr=new z,vi=new z;function tl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){vi.fromArray(n,r);let o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=i.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var bt=new z,Rr=new Ve,i1=0,Wt=class extends hn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Su,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Bs=class extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ks=class extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var St=class extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}},s1=new ti,As=new z,nl=new z,ni=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):s1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);let t=As.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(As,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(nl)),this.expandByPoint(As.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},r1=0,tn=new mt,il=new Dt,Xi=new z,Zt=new ti,Cs=new ti,Ct=new z,Mt=class n extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rf(e)?ks:Bs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Zt.min,Cs.min),Zt.expandByPoint(Ct),Ct.addVectors(Zt.max,Cs.max),Zt.expandByPoint(Ct)):(Zt.expandByPoint(Cs.min),Zt.expandByPoint(Cs.max))}Zt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(e,l),Ct.add(Xi)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Wt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new z,c[_]=new z;let l=new z,h=new z,f=new z,u=new Ve,m=new Ve,x=new Ve,v=new z,p=new z;function d(_,T,R){l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,R),u.fromBufferAttribute(r,_),m.fromBufferAttribute(r,T),x.fromBufferAttribute(r,R),h.sub(l),f.sub(l),m.sub(u),x.sub(u);let N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(N),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(N),o[_].add(v),o[T].add(v),o[R].add(v),c[_].add(p),c[T].add(p),c[R].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,T=S.length;_<T;++_){let R=S[_],N=R.start,G=R.count;for(let $=N,F=N+G;$<F;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}let C=new z,b=new z,M=new z,E=new z;function A(_){M.fromBufferAttribute(s,_),E.copy(M);let T=o[_];C.copy(T),C.sub(M.multiplyScalar(M.dot(T))).normalize(),b.crossVectors(E,T);let N=b.dot(c[_])<0?-1:1;a.setXYZW(_,C.x,C.y,C.z,N)}for(let _=0,T=S.length;_<T;++_){let R=S[_],N=R.start,G=R.count;for(let $=N,F=N+G;$<F;$+=3)A(e.getX($+0)),A(e.getX($+1)),A(e.getX($+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let s=new z,r=new z,a=new z,o=new z,c=new z,l=new z,h=new z,f=new z;if(e)for(let u=0,m=e.count;u<m;u+=3){let x=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),m=0,x=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let d=0;d<h;d++)u[x++]=l[m++]}return new Wt(u,h,f)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],m=e(u,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var sl=new z,a1=new z,o1=new qe,Kt=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=sl.subVectors(i,t).cross(a1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||o1.getNormalMatrix(e),s=this.coplanarPoint(sl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},l1=0,bn=class extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=hs,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=wl,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Kt().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Dn=new z,rl=new z,Pr=new z,Ir=new z,On=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){rl.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(rl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=Ir.dot(this.direction),c=-Ir.dot(Pr),l=Ir.lengthSq(),h=Math.abs(1-a*a),f,u,m,x;if(h>0)if(f=a*c-o,u=a*o-c,x=r*h,f>=0)if(u>=-x)if(u<=x){let v=1/h;f*=v,u*=v,m=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+u*(u+2*c)+l):u<=x?(f=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(rl).addScaledVector(Pr,u),m}intersectSphere(e,t){if(e.radius<0)return null;Dn.subVectors(e.center,this.origin);let i=Dn.dot(this.direction),s=Dn.dot(Dn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,m=e.z-a.z,x=t.x-a.x,v=t.y-a.y,p=t.z-a.z,d=i.x-a.x,S=i.y-a.y,C=i.z-a.z,b=Math.abs(c),M=Math.abs(l),E=Math.abs(h),A,_,T,R,N,G,$,F,P,k,B,Q;if(b>=M&&b>=E?(T=c,G=f,P=x,Q=d,c>=0?(A=l,_=h,R=u,N=m,$=v,F=p,k=S,B=C):(A=h,_=l,R=m,N=u,$=p,F=v,k=C,B=S)):M>=E?(T=l,G=u,P=v,Q=S,l>=0?(A=h,_=c,R=m,N=f,$=p,F=x,k=C,B=d):(A=c,_=h,R=f,N=m,$=x,F=p,k=d,B=C)):(T=h,G=m,P=p,Q=C,h>=0?(A=c,_=l,R=f,N=u,$=x,F=v,k=d,B=S):(A=l,_=c,R=u,N=f,$=v,F=x,k=S,B=d)),T===0)return null;let H=A/T,J=_/T,se=1/T,xe=R-H*G,Ee=N-J*G,$e=$-H*P,Ge=F-J*P,je=k-H*Q,K=B-J*Q,re=je*Ge-K*$e,Ae=xe*K-Ee*je,ke=$e*Ee-Ge*xe;if(s){if(re<0||Ae<0||ke<0)return null}else if((re<0||Ae<0||ke<0)&&(re>0||Ae>0||ke>0))return null;let we=re+Ae+ke;if(we===0)return null;let He=se*(re*G+Ae*P+ke*Q);return(we>0?He<0:He>0)?null:this.at(He/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Sn=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Th=new mt,bi=new On,Lr=new ni,Ah=new z,Dr=new z,Nr=new z,Ur=new z,al=new z,Fr=new z,Ch=new z,Or=new z,wt=class extends Dt{constructor(e=new Mt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(al.fromBufferAttribute(f,e),a?Fr.addScaledVector(al,h):Fr.addScaledVector(al.sub(t),h))}t.add(Fr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(Lr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Lr,Ah)===null||bi.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Th.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Th),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let p=u[x],d=a[p.materialIndex],S=Math.max(p.start,m.start),C=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,M=C;b<M;b+=3){let E=o.getX(b),A=o.getX(b+1),_=o.getX(b+2);s=Br(this,d,e,i,l,h,f,E,A,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=x,d=v;p<d;p+=3){let S=o.getX(p),C=o.getX(p+1),b=o.getX(p+2);s=Br(this,a,e,i,l,h,f,S,C,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let p=u[x],d=a[p.materialIndex],S=Math.max(p.start,m.start),C=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,M=C;b<M;b+=3){let E=b,A=b+1,_=b+2;s=Br(this,d,e,i,l,h,f,E,A,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=x,d=v;p<d;p+=3){let S=p,C=p+1,b=p+2;s=Br(this,a,e,i,l,h,f,S,C,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function c1(n,e,t,i,s,r,a,o){let c;if(e.side===Nt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===hi,o),c===null)return null;Or.copy(o),Or.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Or);return l<t.near||l>t.far?null:{distance:l,point:Or.clone(),object:n}}function Br(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Dr),n.getVertexPosition(c,Nr),n.getVertexPosition(l,Ur);let h=c1(n,e,t,i,Dr,Nr,Ur,Ch);if(h){let f=new z;Qn.getBarycoord(Ch,Dr,Nr,Ur,f),s&&(h.uv=Qn.getInterpolatedAttribute(s,o,c,l,f,new Ve)),r&&(h.uv1=Qn.getInterpolatedAttribute(r,o,c,l,f,new Ve)),a&&(h.normal=Qn.getInterpolatedAttribute(a,o,c,l,f,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new z,materialIndex:0};Qn.getNormal(Dr,Nr,Ur,u.normal),h.face=u,h.barycoord=f}return h}var oa=class extends Lt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Rt,h=Rt,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Si=new ni,h1=new Ve(.5,.5),kr=new z,is=class{constructor(e=new Kt,t=new Kt,i=new Kt,s=new Kt,r=new Kt,a=new Kt){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=cn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],m=r[7],x=r[8],v=r[9],p=r[10],d=r[11],S=r[12],C=r[13],b=r[14],M=r[15];if(s[0].setComponents(l-a,m-h,d-x,M-S).normalize(),s[1].setComponents(l+a,m+h,d+x,M+S).normalize(),s[2].setComponents(l+o,m+f,d+v,M+C).normalize(),s[3].setComponents(l-o,m-f,d-v,M-C).normalize(),i)s[4].setComponents(c,u,p,b).normalize(),s[5].setComponents(l-c,m-u,d-p,M-b).normalize();else if(s[4].setComponents(l-c,m-u,d-p,M-b).normalize(),t===cn)s[5].setComponents(l+c,m+u,d+p,M+b).normalize();else if(t===Ji)s[5].setComponents(c,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);let t=h1.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(kr.x=s.normal.x>0?e.max.x:e.min.x,kr.y=s.normal.y>0?e.max.y:e.min.y,kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bn=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},la=new z,ca=new z,Rh=new mt,Rs=new On,zr=new ni,ol=new z,Ph=new z,ii=class extends Dt{constructor(e=new Mt,t=new Bn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)la.fromBufferAttribute(t,s-1),ca.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=la.distanceTo(ca);e.setAttribute("lineDistance",new St(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;Rh.copy(s).invert(),Rs.copy(e.ray).applyMatrix4(Rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=m,p=x-1;v<p;v+=l){let d=h.getX(v),S=h.getX(v+1),C=Vr(this,e,Rs,c,d,S,v);C&&t.push(C)}if(this.isLineLoop){let v=h.getX(x-1),p=h.getX(m),d=Vr(this,e,Rs,c,v,p,x-1);d&&t.push(d)}}else{let m=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let v=m,p=x-1;v<p;v+=l){let d=Vr(this,e,Rs,c,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){let v=Vr(this,e,Rs,c,x-1,m,x-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vr(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(la.fromBufferAttribute(o,s),ca.fromBufferAttribute(o,r),t.distanceSqToSegment(la,ca,ol,Ph)>i)return;ol.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ol);if(!(l<e.near||l>e.far))return{distance:l,point:Ph.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ih=new z,Lh=new z,zs=class extends ii{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Ih.fromBufferAttribute(t,s),Lh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ih.distanceTo(Lh);e.setAttribute("lineDistance",new St(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ss=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dh=new mt,pl=new On,Gr=new ni,Hr=new z,Vs=class extends Dt{constructor(e=new Mt,t=new ss){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;Dh.copy(s).invert(),pl.copy(e.ray).applyMatrix4(Dh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){let u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let x=u,v=m;x<v;x++){let p=l.getX(x);Hr.fromBufferAttribute(f,p),Nh(Hr,p,c,s,e,t,this)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=u,v=m;x<v;x++)Hr.fromBufferAttribute(f,x),Nh(Hr,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nh(n,e,t,i,s,r,a){let o=pl.distanceSqToPoint(n);if(o<t){let c=new z;pl.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Gs=class extends Lt{constructor(e=[],t=ui,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hs=class extends Lt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var si=class extends Lt{constructor(e,t,i=dn,s,r,a,o=Rt,c=Rt,l,h=vn,f=1){if(h!==vn&&h!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ha=class extends si{constructor(e,t=dn,i=ui,s,r,a=Rt,o=Rt,c,l=vn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ws=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rs=class n extends Mt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(f,2));function x(v,p,d,S,C,b,M,E,A,_,T){let R=b/A,N=M/_,G=b/2,$=M/2,F=E/2,P=A+1,k=_+1,B=0,Q=0,H=new z;for(let J=0;J<k;J++){let se=J*N-$;for(let xe=0;xe<P;xe++){let Ee=xe*R-G;H[v]=Ee*S,H[p]=se*C,H[d]=F,l.push(H.x,H.y,H.z),H[v]=0,H[p]=0,H[d]=E>0?1:-1,h.push(H.x,H.y,H.z),f.push(xe/A),f.push(1-J/_),B+=1}}for(let J=0;J<_;J++)for(let se=0;se<A;se++){let xe=u+se+P*J,Ee=u+se+P*(J+1),$e=u+(se+1)+P*(J+1),Ge=u+(se+1)+P*J;c.push(xe,Ee,Ge),c.push(Ee,$e,Ge),Q+=6}o.addGroup(m,Q,T),m+=Q,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Xs=class n extends Mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=e/o,u=t/c,m=[],x=[],v=[],p=[];for(let d=0;d<h;d++){let S=d*u-a;for(let C=0;C<l;C++){let b=C*f-r;x.push(b,-S,0),v.push(0,0,1),p.push(C/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){let C=S+l*d,b=S+l*(d+1),M=S+1+l*(d+1),E=S+1+l*d;m.push(C,b,E),m.push(b,M,E)}this.setIndex(m),this.setAttribute("position",new St(x,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mn=class n extends Mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new z,u=new z,m=[],x=[],v=[],p=[];for(let d=0;d<=i;d++){let S=[],C=d/i,b=a+C*o,M=e*Math.cos(b),E=Math.sqrt(e*e-M*M),A=0;d===0&&a===0?A=.5/t:d===i&&c===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let T=_/t,R=s+T*r;f.x=-E*Math.cos(R),f.y=M,f.z=E*Math.sin(R),x.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),p.push(T+A,1-C),S.push(l++)}h.push(S)}for(let d=0;d<i;d++)for(let S=0;S<t;S++){let C=h[d][S+1],b=h[d][S],M=h[d+1][S],E=h[d+1][S+1];(d!==0||a>0)&&m.push(C,b,E),(d!==i-1||c<Math.PI)&&m.push(b,M,E)}this.setIndex(m),this.setAttribute("position",new St(x,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ti(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Uh(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Uh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function kt(n){let e={};for(let t=0;t<n.length;t++){let i=Ti(n[t]);for(let s in i)e[s]=i[s]}return e}function Uh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function u1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wl(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Cu={clone:Ti,merge:kt},d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jt=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=f1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=u1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"v3":this.uniforms[i].value=new z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ua=class extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var as=class extends bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var da=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fa=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var qs=class extends Bn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function qi(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ll(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ri=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pa=class extends ri{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ul,endingEnd:ul}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case dl:r=e,o=2*t-i;break;case fl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case dl:a=e,c=2*i-t;break;case fl:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),v=x*x,p=v*x,d=-u*p+2*u*v-u*x,S=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*x+1,C=(-1-m)*p+(1.5+m)*v+.5*x,b=m*p-m*v;for(let M=0;M!==o;++M)r[M]=d*a[h+M]+S*a[l+M]+C*a[c+M]+b*a[f+M];return r}},ma=class extends ri{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},ga=class extends ri{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_a=class extends ri{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(i-t)/(s-t),v=1-x;for(let p=0;p!==o;++p)r[p]=a[l+p]*v+a[c+p]*x;return r}let u=o*2,m=e-1;for(let x=0;x!==o;++x){let v=a[l+x],p=a[c+x],d=m*u+x*2,S=f[d],C=f[d+1],b=e*u+x*2,M=h[b],E=h[b+1],A=m1(i,t,S,M,s);r[x]=Ru(A,v,C,E,p)}return r}};function Ru(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function p1(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function m1(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Ru(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=p1(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Qt=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qi(t,this.TimeBufferType),this.values=qi(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qi(e.times,Array),values:qi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ll(e.settings)&&(i.settings={inTangents:qi(e.settings.inTangents,Array),outTangents:qi(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _a(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case qr:t=this.InterpolantFactoryMethodSmooth;break;case hl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ll(this.settings)&&(Fh(this.settings.inTangents,e),Fh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ze("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Pf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){ze("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*i,u=f-i,m=f+i;for(let x=0;x!==i;++x){let v=t[f+x];if(v!==t[u+x]||v!==t[m+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*i,u=a*i;for(let m=0;m!==i;++m)t[u+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ll(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Qt.prototype.ValueTypeName="";Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=ia;var ai=class extends Qt{constructor(e,t,i){super(e,t,i)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ls;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Qt{constructor(e,t,i,s){super(e,t,i,s)}};xa.prototype.ValueTypeName="color";var ya=class extends Qt{constructor(e,t,i,s){super(e,t,i,s)}};ya.prototype.ValueTypeName="number";var va=class extends ri{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Jt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ys=class extends Qt{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends Qt{constructor(e,t,i){super(e,t,i)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Ls;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends Qt{constructor(e,t,i,s){super(e,t,i,s)}};ba.prototype.ValueTypeName="vector";var Sa=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let m=l[f],x=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pu=new Sa,Ma=class{constructor(e){this.manager=e!==void 0?e:Pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var $s=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var cl=new mt,Oh=new z,Bh=new z,wa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(cl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ji||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wr=new z,Xr=new Jt,xn=new z,Zs=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wr,Xr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Wr,Xr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},jn=new z,kh=new Ve,zh=new Ve,Bt=class extends Zs{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,kh,zh),t.subVectors(zh,kh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var os=class extends Zs{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ml=class extends wa{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends $s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new ml}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Js=class extends $s{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Yi=-90,$i=1,Ea=class extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Yi,$i,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Yi,$i,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Yi,$i,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Yi,$i,e,t);o.layers=this.layers,this.add(o);let c=new Bt(Yi,$i,e,t);c.layers=this.layers,this.add(c);let l=new Bt(Yi,$i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===cn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ji)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Ta=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Xl="\\[\\]\\.:\\/",g1=new RegExp("["+Xl+"]","g"),ql="[^"+Xl+"]",_1="[^"+Xl.replace("\\.","")+"]",x1=/((?:WC+[\/:])*)/.source.replace("WC",ql),y1=/(WCOD+)?/.source.replace("WCOD",_1),v1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),b1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),S1=new RegExp("^"+x1+y1+v1+b1+"$"),M1=["material","materials","bones","map"],gl=class{constructor(e,t,i){let s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g1,"")}static parseTrackName(e){let t=S1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);M1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=gl;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var X7=new Float32Array(1);var Vh=new mt,js=class{constructor(e,t,i=0,s=1/0){this.ray=new On(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vh),this}intersectObject(e,t=!0,i=[]){return _l(e,this,i,t),i.sort(Gh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)_l(e[s],this,i,t);return i.sort(Gh),i}};function Gh(n,e){return n.distance-e.distance}function _l(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)_l(r[a],e,t,!0)}}var ls=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var jl=class jl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};jl.prototype.isMatrix2=!0;var xl=jl;var Qs=class extends hn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Yl(n,e,t,i){let s=w1(i);switch(t){case Ol:return n*e;case kl:return n*e/s.components*s.byteLength;case Ua:return n*e/s.components*s.byteLength;case pi:return n*e*2/s.components*s.byteLength;case Fa:return n*e*2/s.components*s.byteLength;case Bl:return n*e*3/s.components*s.byteLength;case nn:return n*e*4/s.components*s.byteLength;case Oa:return n*e*4/s.components*s.byteLength;case ir:case sr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rr:case ar:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ka:case Va:return Math.max(n,16)*Math.max(e,8)/4;case Ba:case za:return Math.max(n,8)*Math.max(e,8)/2;case Ga:case Ha:case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:case or:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case eo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case to:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case no:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case io:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case so:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ro:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ao:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case oo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lo:case co:case ho:return Math.ceil(n/4)*Math.ceil(e/4)*16;case uo:case fo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lr:case po:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w1(n){switch(n){case qt:case Dl:return{byteLength:1,components:1};case us:case Nl:case pn:return{byteLength:2,components:1};case Da:case Na:return{byteLength:2,components:4};case dn:case La:case fn:return{byteLength:4,components:1};case Ul:case Fl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ju(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function T1(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<f.length;m++){let x=f[u],v=f[m];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++u,f[u]=v)}f.length=u+1;for(let m=0,x=f.length;m<x;m++){let v=f[m];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var A1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,R1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,F1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,z1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,K1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,J1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,j1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ep=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Op=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,U0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:A1,alphahash_pars_fragment:C1,alphamap_fragment:R1,alphamap_pars_fragment:P1,alphatest_fragment:I1,alphatest_pars_fragment:L1,aomap_fragment:D1,aomap_pars_fragment:N1,batching_pars_vertex:U1,batching_vertex:F1,begin_vertex:O1,beginnormal_vertex:B1,bsdfs:k1,iridescence_fragment:z1,bumpmap_pars_fragment:V1,clipping_planes_fragment:G1,clipping_planes_pars_fragment:H1,clipping_planes_pars_vertex:W1,clipping_planes_vertex:X1,color_fragment:q1,color_pars_fragment:Y1,color_pars_vertex:$1,color_vertex:Z1,common:K1,cube_uv_reflection_fragment:J1,defaultnormal_vertex:j1,displacementmap_pars_vertex:Q1,displacementmap_vertex:ep,emissivemap_fragment:tp,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:rp,envmap_common_pars_fragment:ap,envmap_pars_fragment:op,envmap_pars_vertex:lp,envmap_physical_pars_fragment:yp,envmap_vertex:cp,fog_vertex:hp,fog_pars_vertex:up,fog_fragment:dp,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:_p,lights_pars_begin:xp,lights_toon_fragment:vp,lights_toon_pars_fragment:bp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Mp,lights_physical_fragment:wp,lights_physical_pars_fragment:Ep,lights_fragment_begin:Tp,lights_fragment_maps:Ap,lights_fragment_end:Cp,lightprobes_pars_fragment:Rp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Lp,logdepthbuf_vertex:Dp,map_fragment:Np,map_pars_fragment:Up,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:kp,morphinstance_vertex:zp,morphcolor_vertex:Vp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:Yp,normal_pars_vertex:$p,normal_vertex:Zp,normalmap_pars_fragment:Kp,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:a0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:x0,tonemapping_fragment:y0,tonemapping_pars_fragment:v0,transmission_fragment:b0,transmission_pars_fragment:S0,uv_pars_fragment:M0,uv_pars_vertex:w0,uv_vertex:E0,worldpos_vertex:T0,background_vert:A0,background_frag:C0,backgroundCube_vert:R0,backgroundCube_frag:P0,cube_vert:I0,cube_frag:L0,depth_vert:D0,depth_frag:N0,distance_vert:U0,distance_frag:F0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:k0,linedashed_frag:z0,meshbasic_vert:V0,meshbasic_frag:G0,meshlambert_vert:H0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:q0,meshnormal_vert:Y0,meshnormal_frag:$0,meshphong_vert:Z0,meshphong_frag:K0,meshphysical_vert:J0,meshphysical_frag:j0,meshtoon_vert:Q0,meshtoon_frag:e2,points_vert:t2,points_frag:n2,shadow_vert:i2,shadow_frag:s2,sprite_vert:r2,sprite_frag:a2},be={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},An={basic:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:kt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:kt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:kt([be.points,be.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:kt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:kt([be.common,be.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:kt([be.sprite,be.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:kt([be.common,be.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:kt([be.lights,be.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};An.physical={uniforms:kt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var xo={r:0,b:0,g:0},o2=new mt,Qu=new qe;Qu.set(-1,0,0,0,1,0,0,0,1);function l2(n,e,t,i,s,r){let a=new Qe(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function m(S){let C=S.isScene===!0?S.background:null;if(C&&C.isTexture){let b=S.backgroundBlurriness>0;C=e.get(C,b)}return C}function x(S){let C=!1,b=m(S);b===null?p(a,o):b&&b.isColor&&(p(b,1),C=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,C){let b=m(C);b&&(b.isCubeTexture||b.mapping===tr)?(l===void 0&&(l=new wt(new rs(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:Ti(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(o2.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qu),l.material.toneMapped=nt.getTransfer(b.colorSpace)!==ot,(h!==b||f!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new wt(new Xs(2,2),new jt({name:"BackgroundMaterial",uniforms:Ti(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=nt.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,C){S.getRGB(xo,Wl(n)),t.buffers.color.setClear(xo.r,xo.g,xo.b,C,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,C=1){a.set(S),o=C,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:x,addToRenderList:v,dispose:d}}function c2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(N,G,$,F,P){let k=!1,B=f(N,F,$,G);r!==B&&(r=B,l(r.object)),k=m(N,F,$,P),k&&x(N,F,$,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,b(N,G,$,F),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function f(N,G,$,F){let P=F.wireframe===!0,k=i[G.id];k===void 0&&(k={},i[G.id]=k);let B=N.isInstancedMesh===!0?N.id:0,Q=k[B];Q===void 0&&(Q={},k[B]=Q);let H=Q[$.id];H===void 0&&(H={},Q[$.id]=H);let J=H[P];return J===void 0&&(J=u(c()),H[P]=J),J}function u(N){let G=[],$=[],F=[];for(let P=0;P<t;P++)G[P]=0,$[P]=0,F[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:F,object:N,attributes:{},index:null}}function m(N,G,$,F){let P=r.attributes,k=G.attributes,B=0,Q=$.getAttributes();for(let H in Q)if(Q[H].location>=0){let se=P[H],xe=k[H];if(xe===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor)),se===void 0||se.attribute!==xe||xe&&se.data!==xe.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function x(N,G,$,F){let P={},k=G.attributes,B=0,Q=$.getAttributes();for(let H in Q)if(Q[H].location>=0){let se=k[H];se===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(se=N.instanceColor));let xe={};xe.attribute=se,se&&se.data&&(xe.data=se.data),P[H]=xe,B++}r.attributes=P,r.attributesNum=B,r.index=F}function v(){let N=r.newAttributes;for(let G=0,$=N.length;G<$;G++)N[G]=0}function p(N){d(N,0)}function d(N,G){let $=r.newAttributes,F=r.enabledAttributes,P=r.attributeDivisors;$[N]=1,F[N]===0&&(n.enableVertexAttribArray(N),F[N]=1),P[N]!==G&&(n.vertexAttribDivisor(N,G),P[N]=G)}function S(){let N=r.newAttributes,G=r.enabledAttributes;for(let $=0,F=G.length;$<F;$++)G[$]!==N[$]&&(n.disableVertexAttribArray($),G[$]=0)}function C(N,G,$,F,P,k,B){B===!0?n.vertexAttribIPointer(N,G,$,P,k):n.vertexAttribPointer(N,G,$,F,P,k)}function b(N,G,$,F){v();let P=F.attributes,k=$.getAttributes(),B=G.defaultAttributeValues;for(let Q in k){let H=k[Q];if(H.location>=0){let J=P[Q];if(J===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){let se=J.normalized,xe=J.itemSize,Ee=e.get(J);if(Ee===void 0)continue;let $e=Ee.buffer,Ge=Ee.type,je=Ee.bytesPerElement,K=Ge===n.INT||Ge===n.UNSIGNED_INT||J.gpuType===La;if(J.isInterleavedBufferAttribute){let re=J.data,Ae=re.stride,ke=J.offset;if(re.isInstancedInterleavedBuffer){for(let we=0;we<H.locationSize;we++)d(H.location+we,re.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let we=0;we<H.locationSize;we++)p(H.location+we);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let we=0;we<H.locationSize;we++)C(H.location+we,xe/H.locationSize,Ge,se,Ae*je,(ke+xe/H.locationSize*we)*je,K)}else{if(J.isInstancedBufferAttribute){for(let re=0;re<H.locationSize;re++)d(H.location+re,J.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let re=0;re<H.locationSize;re++)p(H.location+re);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let re=0;re<H.locationSize;re++)C(H.location+re,xe/H.locationSize,Ge,se,xe*je,xe/H.locationSize*re*je,K)}}else if(B!==void 0){let se=B[Q];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(H.location,se);break;case 3:n.vertexAttrib3fv(H.location,se);break;case 4:n.vertexAttrib4fv(H.location,se);break;default:n.vertexAttrib1fv(H.location,se)}}}}S()}function M(){T();for(let N in i){let G=i[N];for(let $ in G){let F=G[$];for(let P in F){let k=F[P];for(let B in k)h(k[B].object),delete k[B];delete F[P]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let G=i[N.id];for(let $ in G){let F=G[$];for(let P in F){let k=F[P];for(let B in k)h(k[B].object),delete k[B];delete F[P]}}delete i[N.id]}function A(N){for(let G in i){let $=i[G];for(let F in $){let P=$[F];if(P[N.id]===void 0)continue;let k=P[N.id];for(let B in k)h(k[B].object),delete k[B];delete P[N.id]}}}function _(N){for(let G in i){let $=i[G],F=N.isInstancedMesh===!0?N.id:0,P=$[F];if(P!==void 0){for(let k in P){let B=P[k];for(let Q in B)h(B[Q].object),delete B[Q];delete P[k]}delete $[F],Object.keys($).length===0&&delete i[G]}}}function T(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function h2(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function u2(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==nn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==qt&&A!==fn&&!_&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Oe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:b,maxSamples:M,samples:E}}function d2(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Kt,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||i!==0||s;return s=u,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,m){let x=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!s||x===null||x.length===0||r&&!p)r?h(null):l();else{let S=r?0:i,C=S*4,b=d.clippingState||null;c.value=b,b=h(x,u,C,m);for(let M=0;M!==C;++M)b[M]=t[M];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,m,x){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=c.value,x!==!0||p===null){let d=m+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<d)&&(p=new Float32Array(d));for(let C=0,b=m;C!==v;++C,b+=4)a.copy(f[C]).applyMatrix4(S,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var ms=4,f2=6,p2=20,m2=256,cr=new os,Iu=new Qe,Ql=null,ec=0,tc=0,nc=!1,g2=new z,Ai=new z,vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=g2}=r;Ql=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ql,ec,tc),this._renderer.xr.enabled=nc,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ql=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:pn,format:nn,colorSpace:Ds,depthBuffer:!1},s=Lu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_2(r)),this._blurMaterial=y2(r,e,t),this._ggxMaterial=x2(r,e,t)}return s}_compileMaterial(e){let t=new wt(new Mt,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,i,s,r){let c=new Bt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(Iu),f.toneMapping=un,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new rs,new Sn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,d=!1,S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,d=!0):(p.color.copy(Iu),d=!0);for(let C=0;C<6;C++){let b=C%3;b===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[C],r.y,r.z)):b===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[C]));let M=this._cubeSize;ps(s,b*M,C>2?M:0,M,M),f.setRenderTarget(s),d&&f.render(v,c),f.render(e,c)}f.toneMapping=m,f.autoClear=u,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ui||e.mapping===Ei;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Du());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ps(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,cr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,m=f*u,{_lodMax:x}=this,v=this._sizeLods[i],p=3*v*(i>x-ms?i-x+ms:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=x-t,ps(r,p,d,3*v,2*v),s.setRenderTarget(r),s.render(o,cr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-i,ps(e,p,d,3*v,2*v),s.setRenderTarget(e),s.render(o,cr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-ms?s-this._lodMax+ms:0),u=4*(this._cubeSize-h);ps(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(c,cr)}};function _2(n){let e=[],t=[],i=n,s=n-ms+1+f2;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,m=3,x=new Float32Array(m*u*f),v=new Float32Array(m*u*f);for(let d=0;d<f;d++){let S=d%3*2/3-1,C=d>2?0:-1,b=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];x.set(b,m*u*d);for(let M=0;M<u;M++){let E=h[M*2]*2-1,A=h[M*2+1]*2-1;d===0?Ai.set(1,A,E):d===1?Ai.set(-E,1,-A):d===2?Ai.set(-E,A,1):d===3?Ai.set(-1,A,-E):d===4?Ai.set(-E,-1,A):Ai.set(E,A,-1),Ai.toArray(v,(d*u+M)*m)}}let p=new Mt;p.setAttribute("position",new Wt(x,m)),p.setAttribute("outputDirection",new Wt(v,m)),t.push(new wt(p,null)),i>ms&&i--}return{lodMeshes:t,sizeLods:e}}function Lu(n,e,t){let i=new Xt(n,e,t);return i.texture.mapping=tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function x2(n,e,t){return new jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function y2(n,e,t){return new jt({name:"SphericalGaussianBlur",defines:{SAMPLES:p2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Du(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Nu(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Mo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bo=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Gs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rs(5,5,5),r=new jt({name:"CubemapFromEquirect",uniforms:Ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:En});r.uniforms.tEquirect.value=t;let a=new wt(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=It),new Ea(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function v2(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Ra||m===Pa)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let v=new bo(x.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,x=m===Ra||m===Pa,v=m===ui||m===Ei;if(x||v){let p=t.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new vo(n)),p=x?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let S=u.image;return x&&S&&S.height>0||v&&S&&c(S)?(i===null&&(i=new vo(n)),p=x?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Ra?u.mapping=ui:m===Pa&&(u.mapping=Ei),u}function c(u){let m=0,x=6;for(let v=0;v<x;v++)u[v]!==void 0&&m++;return m===x}function l(u){let m=u.target;m.removeEventListener("dispose",l);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function b2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Mi("WebGLRenderer: "+i+" extension not supported."),s}}}function S2(n,e,t,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(e.remove(m),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(f){let u=f.attributes;for(let m in u)e.update(u[m],n.ARRAY_BUFFER)}function l(f){let u=[],m=f.index,x=f.attributes.position,v=0;if(x===void 0)return;if(m!==null){let S=m.array;v=m.version;for(let C=0,b=S.length;C<b;C+=3){let M=S[C+0],E=S[C+1],A=S[C+2];u.push(M,E,E,A,A,M)}}else{let S=x.array;v=x.version;for(let C=0,b=S.length/3-1;C<b;C+=3){let M=C+0,E=C+1,A=C+2;u.push(M,E,E,A,A,M)}}let p=new(x.count>=65535?ks:Bs)(u,1);p.version=v;let d=r.get(f);d&&e.remove(d),r.set(f,p)}function h(f){let u=r.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function M2(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*a),t.update(u,i,1)}function l(f,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,f*a,m),t.update(u,i,m))}function h(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,m);let v=0;for(let p=0;p<m;p++)v+=u[p];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function w2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function E2(n,e,t){let i=new WeakMap,s=new xt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],C=0;m===!0&&(C=1),x===!0&&(C=2),v===!0&&(C=3);let b=o.attributes.position.count*C,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*M*4*f),A=new Fs(E,b,M,f);A.type=fn,A.needsUpdate=!0;let _=C*4;for(let R=0;R<f;R++){let N=p[R],G=d[R],$=S[R],F=b*M*4*R;for(let P=0;P<N.count;P++){let k=P*_;m===!0&&(s.fromBufferAttribute(N,P),E[F+k+0]=s.x,E[F+k+1]=s.y,E[F+k+2]=s.z,E[F+k+3]=0),x===!0&&(s.fromBufferAttribute(G,P),E[F+k+4]=s.x,E[F+k+5]=s.y,E[F+k+6]=s.z,E[F+k+7]=0),v===!0&&(s.fromBufferAttribute($,P),E[F+k+8]=s.x,E[F+k+9]=s.y,E[F+k+10]=s.z,E[F+k+11]=$.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new Ve(b,M)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];let x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function T2(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var A2={[El]:"LINEAR_TONE_MAPPING",[Tl]:"REINHARD_TONE_MAPPING",[Al]:"CINEON_TONE_MAPPING",[Cl]:"ACES_FILMIC_TONE_MAPPING",[Pl]:"AGX_TONE_MAPPING",[Il]:"NEUTRAL_TONE_MAPPING",[Rl]:"CUSTOM_TONE_MAPPING"};function C2(n,e,t,i,s,r){let a=new Xt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Mt;l.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new St([0,2,0,0,2,0],2));let h=new ua({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new wt(l,h),u=new os(-1,1,1,-1,0,1),m=null,x=null,v=!1,p,d=null,S=[],C=!1;this.setSize=function(b,M){a.setSize(b,M),o!==null&&o.setSize(b,M),c!==null&&c.setSize(b,M);for(let E=0;E<S.length;E++){let A=S[E];A.setSize&&A.setSize(b,M)}},this.setEffects=function(b){S=b,C=S.length>0&&S[0].isRenderPass===!0;let M=a.width,E=a.height;S.length>0&&o===null&&(o=new Xt(M,E,{type:pn,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(M,E,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){let _=S[A];_.setSize&&_.setSize(M,E)}},this.begin=function(b,M){if(v||b.toneMapping===un&&S.length===0)return!1;if(d=M,M!==null){let E=M.width,A=M.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return C===!1&&b.setRenderTarget(a),p=b.toneMapping,b.toneMapping=un,!0},this.hasRenderPass=function(){return C},this.end=function(b,M){b.toneMapping=p,v=!0;let E=a,A=o;for(let _=0;_<S.length;_++){let T=S[_];T.enabled!==!1&&(T.render(b,A,E,M),T.needsSwap!==!1&&(E=A,A=A===o?c:o))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,h.defines={},nt.getTransfer(m)===ot&&(h.defines.SRGB_TRANSFER="");let _=A2[x];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(d),b.render(f,u),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var ed=new Lt,rc=new si(1,1),td=new Fs,nd=new aa,id=new Gs,Uu=[],Fu=[],Ou=new Float32Array(16),Bu=new Float32Array(9),ku=new Float32Array(4);function _s(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Uu[s];if(r===void 0&&(r=new Float32Array(s),Uu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wo(n,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function R2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function P2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function I2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function L2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function D2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;ku.set(i),n.uniformMatrix2fv(this.addr,!1,ku),Tt(t,i)}}function N2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Bu.set(i),n.uniformMatrix3fv(this.addr,!1,Bu),Tt(t,i)}}function U2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Ou.set(i),n.uniformMatrix4fv(this.addr,!1,Ou),Tt(t,i)}}function F2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function O2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function B2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function k2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function z2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function V2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function G2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function H2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function W2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rc.compareFunction=t.isReversedDepthBuffer()?_o:go,r=rc):r=ed,t.setTexture2D(e||r,s)}function X2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||nd,s)}function q2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||id,s)}function Y2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||td,s)}function $2(n){switch(n){case 5126:return R2;case 35664:return P2;case 35665:return I2;case 35666:return L2;case 35674:return D2;case 35675:return N2;case 35676:return U2;case 5124:case 35670:return F2;case 35667:case 35671:return O2;case 35668:case 35672:return B2;case 35669:case 35673:return k2;case 5125:return z2;case 36294:return V2;case 36295:return G2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return W2;case 35679:case 36299:case 36307:return X2;case 35680:case 36300:case 36308:case 36293:return q2;case 36289:case 36303:case 36311:case 36292:return Y2}}function Z2(n,e){n.uniform1fv(this.addr,e)}function K2(n,e){let t=_s(e,this.size,2);n.uniform2fv(this.addr,t)}function J2(n,e){let t=_s(e,this.size,3);n.uniform3fv(this.addr,t)}function j2(n,e){let t=_s(e,this.size,4);n.uniform4fv(this.addr,t)}function Q2(n,e){let t=_s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function em(n,e){let t=_s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tm(n,e){let t=_s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nm(n,e){n.uniform1iv(this.addr,e)}function im(n,e){n.uniform2iv(this.addr,e)}function sm(n,e){n.uniform3iv(this.addr,e)}function rm(n,e){n.uniform4iv(this.addr,e)}function am(n,e){n.uniform1uiv(this.addr,e)}function om(n,e){n.uniform2uiv(this.addr,e)}function lm(n,e){n.uniform3uiv(this.addr,e)}function cm(n,e){n.uniform4uiv(this.addr,e)}function hm(n,e,t){let i=this.cache,s=e.length,r=wo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=rc:a=ed;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function um(n,e,t){let i=this.cache,s=e.length,r=wo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||nd,r[a])}function dm(n,e,t){let i=this.cache,s=e.length,r=wo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||id,r[a])}function fm(n,e,t){let i=this.cache,s=e.length,r=wo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||td,r[a])}function pm(n){switch(n){case 5126:return Z2;case 35664:return K2;case 35665:return J2;case 35666:return j2;case 35674:return Q2;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}var ac=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$2(t.type)}},oc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pm(t.type)}},lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},ic=/(\w+)(\])?(\[|\.)?/g;function zu(n,e){n.seq.push(e),n.map[e.id]=e}function mm(n,e,t){let i=n.name,s=i.length;for(ic.lastIndex=0;;){let r=ic.exec(i),a=ic.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){zu(t,l===void 0?new ac(o,n,e):new oc(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new lc(o),zu(t,f)),t=f}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);mm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Vu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var gm=37297,_m=0;function xm(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Gu=new qe;function ym(n){nt._getMatrix(Gu,nt.workingColorSpace,n);let e=`mat3( ${Gu.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Ns:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xm(n.getShaderSource(e),o)}else return r}function vm(n,e){let t=ym(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var bm={[El]:"Linear",[Tl]:"Reinhard",[Al]:"Cineon",[Cl]:"ACESFilmic",[Pl]:"AgX",[Il]:"Neutral",[Rl]:"Custom"};function Sm(n,e){let t=bm[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yo=new z;function Mm(){nt.getLuminanceCoefficients(yo);let n=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Em(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Tm(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ur(n){return n!==""}function Wu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(n){return n.replace(Am,Rm)}var Cm=new Map;function Rm(n,e){let t=Je[e];if(t===void 0){let i=Cm.get(e);if(i!==void 0)t=Je[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cc(t)}var Pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(n){return n.replace(Pm,Im)}function Im(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Lm={[er]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function Dm(n){return Lm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nm={[ui]:"ENVMAP_TYPE_CUBE",[Ei]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE_UV"};function Um(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Nm[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fm={[Ei]:"ENVMAP_MODE_REFRACTION"};function Om(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Fm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bm={[Ca]:"ENVMAP_BLENDING_MULTIPLY",[hu]:"ENVMAP_BLENDING_MIX",[uu]:"ENVMAP_BLENDING_ADD"};function km(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Bm[n.combine]||"ENVMAP_BLENDING_NONE"}function zm(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Vm(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Dm(t),l=Um(t),h=Om(t),f=km(t),u=zm(t),m=wm(t),x=Em(r),v=s.createProgram(),p,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ur).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ur).join(`
`),d.length>0&&(d+=`
`)):(p=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),d=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Je.tonemapping_pars_fragment:"",t.toneMapping!==un?Sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,vm("linearToOutputTexel",t.outputColorSpace),Mm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=cc(a),a=Wu(a,t),a=Xu(a,t),o=cc(o),o=Wu(o,t),o=Xu(o,t),a=qu(a),o=qu(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=S+p+a,b=S+d+o,M=Vu(s,s.VERTEX_SHADER,C),E=Vu(s,s.FRAGMENT_SHADER,b);s.attachShader(v,M),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(N){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(v)||"",$=s.getShaderInfoLog(M)||"",F=s.getShaderInfoLog(E)||"",P=G.trim(),k=$.trim(),B=F.trim(),Q=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,M,E);else{let J=Hu(s,M,"vertex"),se=Hu(s,E,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+J+`
`+se)}else P!==""?Oe("WebGLProgram: Program Info Log:",P):(k===""||B==="")&&(H=!1);H&&(N.diagnostics={runnable:Q,programLog:P,vertexShader:{log:k,prefix:p},fragmentShader:{log:B,prefix:d}})}s.deleteShader(M),s.deleteShader(E),_=new gs(s,v),T=Tm(s,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,gm)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_m++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=E,this}var Gm=0,hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new uc(e),t.set(e,i)),i}},uc=class{constructor(e){this.id=Gm++,this.code=e,this.usedTimes=0}};function Hm(n){return n===pi||n===or||n===lr}function Wm(n,e,t,i,s,r){let a=new ts,o=new hc,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,R,N,G,$){let F=N.fog,P=G.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=e.get(_.envMap||k,B),H=Q&&Q.mapping===tr?Q.image.height:null,J=m[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Oe("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let se=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,xe=se!==void 0?se.length:0,Ee=0;P.morphAttributes.position!==void 0&&(Ee=1),P.morphAttributes.normal!==void 0&&(Ee=2),P.morphAttributes.color!==void 0&&(Ee=3);let $e,Ge,je,K;if(J){let ft=An[J];$e=ft.vertexShader,Ge=ft.fragmentShader}else{$e=_.vertexShader,Ge=_.fragmentShader;let ft=o.getVertexShaderStage(_),rt=o.getFragmentShaderStage(_);o.update(_,ft,rt),je=ft.id,K=rt.id}let re=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),ke=G.isInstancedMesh===!0,we=G.isBatchedMesh===!0,He=!!_.map,L=!!_.matcap,Y=!!Q,ie=!!_.aoMap,W=!!_.lightMap,ee=!!_.bumpMap&&_.wireframe===!1,he=!!_.normalMap,ye=!!_.displacementMap,We=!!_.emissiveMap,Xe=!!_.metalnessMap,Ze=!!_.roughnessMap,D=_.anisotropy>0,dt=_.clearcoat>0,it=_.dispersion>0,w=_.retroreflectivity>0,g=_.iridescence>0,V=_.sheen>0,Z=_.transmission>0,te=D&&!!_.anisotropyMap,de=dt&&!!_.clearcoatMap,fe=dt&&!!_.clearcoatNormalMap,ne=dt&&!!_.clearcoatRoughnessMap,oe=g&&!!_.iridescenceMap,pe=g&&!!_.iridescenceThicknessMap,Ne=V&&!!_.sheenColorMap,ve=V&&!!_.sheenRoughnessMap,me=!!_.specularMap,Ue=!!_.specularColorMap,Be=!!_.specularIntensityMap,Ye=Z&&!!_.transmissionMap,O=Z&&!!_.thicknessMap,ge=!!_.gradientMap,ae=!!_.alphaMap,_e=_.alphaTest>0,Te=!!_.alphaHash,ce=!!_.extensions,Fe=un;_.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Fe=n.toneMapping);let Le={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:$e,fragmentShader:Ge,defines:_.defines,customVertexShaderID:je,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:we,batchingColor:we&&G._colorsTexture!==null,instancing:ke,instancingColor:ke&&G.instanceColor!==null,instancingMorph:ke&&G.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:L,envMap:Y,envMapMode:Y&&Q.mapping,envMapCubeUVHeight:H,aoMap:ie,lightMap:W,bumpMap:ee,normalMap:he,displacementMap:ye,emissiveMap:We,normalMapObjectSpace:he&&_.normalMapType===pu,normalMapTangentSpace:he&&_.normalMapType===mo,packedNormalMap:he&&_.normalMapType===mo&&Hm(_.normalMap.format),metalnessMap:Xe,roughnessMap:Ze,anisotropy:D,anisotropyMap:te,clearcoat:dt,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:ne,dispersion:it,retroreflection:w,iridescence:g,iridescenceMap:oe,iridescenceThicknessMap:pe,sheen:V,sheenColorMap:Ne,sheenRoughnessMap:ve,specularMap:me,specularColorMap:Ue,specularIntensityMap:Be,transmission:Z,transmissionMap:Ye,thicknessMap:O,gradientMap:ge,opaque:_.transparent===!1&&_.blending===hs&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:_e,alphaHash:Te,combine:_.combine,mapUv:He&&x(_.map.channel),aoMapUv:ie&&x(_.aoMap.channel),lightMapUv:W&&x(_.lightMap.channel),bumpMapUv:ee&&x(_.bumpMap.channel),normalMapUv:he&&x(_.normalMap.channel),displacementMapUv:ye&&x(_.displacementMap.channel),emissiveMapUv:We&&x(_.emissiveMap.channel),metalnessMapUv:Xe&&x(_.metalnessMap.channel),roughnessMapUv:Ze&&x(_.roughnessMap.channel),anisotropyMapUv:te&&x(_.anisotropyMap.channel),clearcoatMapUv:de&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(_.sheenRoughnessMap.channel),specularMapUv:me&&x(_.specularMap.channel),specularColorMapUv:Ue&&x(_.specularColorMap.channel),specularIntensityMapUv:Be&&x(_.specularIntensityMap.channel),transmissionMapUv:Ye&&x(_.transmissionMap.channel),thicknessMapUv:O&&x(_.thicknessMap.channel),alphaMapUv:ae&&x(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(he||D),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!P.attributes.uv&&(He||ae),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&he===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ae,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ee,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:We&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===wn,flipSided:_.side===Nt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function p(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(d(T,_),S(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function d(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function S(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function C(_){let T=m[_.type],R;if(T){let N=An[T];R=Cu.clone(N.uniforms)}else R=_.uniforms;return R}function b(_,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new Vm(n,T,_,s),l.push(R),h.set(T,R)),R}function M(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:C,acquireProgram:b,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:A}}function Xm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function qm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,v,p,d){let S=n[e];return S===void 0?(S={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:d},n[e]=S):(S.id=u.id,S.object=u,S.geometry=m,S.material=x,S.materialVariant=a(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=p,S.group=d),e++,S}function c(u,m,x,v,p,d,S){S.reversedDepth===!0&&(p=-p);let C=o(u,m,x,v,p,d);x.transmission>0?i.push(C):x.transparent===!0?s.push(C):t.push(C)}function l(u,m,x,v,p,d){let S=o(u,m,x,v,p,d);x.transmission>0?i.unshift(S):x.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,m){t.length>1&&t.sort(u||qm),i.length>1&&i.sort(m||$u),s.length>1&&s.sort(m||$u)}function f(){for(let u=e,m=n.length;u<m;u++){let x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Ym(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Zu,n.set(i,[a])):s>=r.length?(a=new Zu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function $m(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Qe};break;case"SpotLight":t={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Zm(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Km=0;function Jm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jm(n){let e=new $m,t=Zm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);let s=new z,r=new mt,a=new mt;function o(l){let h=0,f=0,u=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let m=0,x=0,v=0,p=0,d=0,S=0,C=0,b=0,M=0,E=0,A=0,_=0,T=0,R=0;l.sort(Jm);for(let G=0,$=l.length;G<$;G++){let F=l[G],P=F.color,k=F.intensity,B=F.distance,Q=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===pi?Q=F.shadow.map.texture:Q=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=P.r*k,f+=P.g*k,u+=P.b*k;else if(F.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(F.sh.coefficients[H],k);R++}else if(F.isSunLight){let H=e.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let J=F.shadow,se=t.get(F);se.shadowIntensity=J.intensity,se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[x]=se,i.sunShadowMap[x]=Q;let xe=J.getViewportCount();for(let Ee=0;Ee<xe;Ee++)i.sunShadowMatrix[v+Ee]=J.getMatrix(Ee),i.sunShadowCascade[v+Ee]=J._cascadeData[Ee];v+=xe,x++}i.sun[m]=H,m++}else if(F.isDirectionalLight){let H=e.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let J=F.shadow,se=t.get(F);se.shadowIntensity=J.intensity,se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,i.directionalShadow[p]=se,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=F.shadow.matrix,M++}i.directional[p]=H,p++}else if(F.isSpotLight){let H=e.get(F);H.position.setFromMatrixPosition(F.matrixWorld),H.color.copy(P).multiplyScalar(k),H.distance=B,H.coneCos=Math.cos(F.angle),H.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),H.decay=F.decay,i.spot[S]=H;let J=F.shadow;if(F.map&&(i.spotLightMap[_]=F.map,_++,J.updateMatrices(F),F.castShadow&&T++),i.spotLightMatrix[S]=J.matrix,F.castShadow){let se=t.get(F);se.shadowIntensity=J.intensity,se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,i.spotShadow[S]=se,i.spotShadowMap[S]=Q,A++}S++}else if(F.isRectAreaLight){let H=e.get(F);H.color.copy(P).multiplyScalar(k),H.halfWidth.set(F.width*.5,0,0),H.halfHeight.set(0,F.height*.5,0),i.rectArea[C]=H,C++}else if(F.isPointLight){let H=e.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity),H.distance=F.distance,H.decay=F.decay,F.castShadow){let J=F.shadow,se=t.get(F);se.shadowIntensity=J.intensity,se.shadowBias=J.bias,se.shadowNormalBias=J.normalBias,se.shadowRadius=J.radius,se.shadowMapSize=J.mapSize,se.shadowCameraNear=J.camera.near,se.shadowCameraFar=J.camera.far,i.pointShadow[d]=se,i.pointShadowMap[d]=Q,i.pointShadowMatrix[d]=F.shadow.matrix,E++}i.point[d]=H,d++}else if(F.isHemisphereLight){let H=e.get(F);H.skyColor.copy(F.color).multiplyScalar(k),H.groundColor.copy(F.groundColor).multiplyScalar(k),i.hemi[b]=H,b++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let N=i.hash;(N.sunLength!==m||N.directionalLength!==p||N.pointLength!==d||N.spotLength!==S||N.rectAreaLength!==C||N.hemiLength!==b||N.numSunShadows!==x||N.numDirectionalShadows!==M||N.numPointShadows!==E||N.numSpotShadows!==A||N.numSpotMaps!==_||N.numLightProbes!==R)&&(i.sun.length=m,i.directional.length=p,i.spot.length=S,i.rectArea.length=C,i.point.length=d,i.hemi.length=b,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,N.sunLength=m,N.directionalLength=p,N.pointLength=d,N.spotLength=S,N.rectAreaLength=C,N.hemiLength=b,N.numSunShadows=x,N.numDirectionalShadows=M,N.numPointShadows=E,N.numSpotShadows=A,N.numSpotMaps=_,N.numLightProbes=R,i.version=Km++)}function c(l,h){let f=0,u=0,m=0,x=0,v=0,p=0,d=h.matrixWorldInverse;for(let S=0,C=l.length;S<C;S++){let b=l[S];if(b.isSunLight){let M=i.sun[f];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),f++}else if(b.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),u++}else if(b.isSpotLight){let M=i.spot[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),x++}else if(b.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let M=i.point[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){let M=i.hemi[p];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),p++}}}return{setup:o,setupView:c,state:i}}function Ku(n){let e=new jm(n),t=[],i=[],s=[];function r(u){f.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Qm(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ku(n),e.set(s,[o])):r>=a.length?(o=new Ku(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var e3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,n3=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],i3=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Ju=new mt,hr=new z,sc=new z;function s3(n,e,t){let i=new is,s=new Ve,r=new Ve,a=new xt,o=new da,c=new fa,l={},h=t.maxTextureSize,f={[hi]:Nt,[Nt]:hi,[wn]:wn},u=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:e3,fragmentShader:t3}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new Mt;x.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new wt(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let d=this.type;this.render=function(E,A,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Xh&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);let T=n.getRenderTarget(),R=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),G=n.state;G.setBlending(En),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let $=d!==this.type;$&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(P=>P.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,P=E.length;F<P;F++){let k=E[F],B=k.shadow;if(B===void 0){Oe("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let Q=B.getFrameExtents();s.multiply(Q),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,B.mapSize.y=r.y));let H=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=H,B.map===null||$===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===cs){if(k.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Xt(s.x,s.y,{format:pi,type:pn,minFilter:It,magFilter:It,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new si(s.x,s.y,fn),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=vn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rt,B.map.depthTexture.magFilter=Rt}else k.isPointLight?(B.map=new bo(s.x),B.map.depthTexture=new ha(s.x,dn)):(B.map=new Xt(s.x,s.y),B.map.depthTexture=new si(s.x,s.y,dn)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=vn,this.type===er?(B.map.depthTexture.compareFunction=H?_o:go,B.map.depthTexture.minFilter=It,B.map.depthTexture.magFilter=It):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rt,B.map.depthTexture.magFilter=Rt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let J=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();k.isPointLight!==!0&&B.updateMatrices(k,_);for(let se=0;se<J;se++){let xe=B.getCamera(se);if(k.isPointLight){let Ee=B.camera,$e=B.matrix,Ge=k.distance||Ee.far;Ge!==Ee.far&&(Ee.far=Ge,Ee.updateProjectionMatrix()),hr.setFromMatrixPosition(k.matrixWorld),Ee.position.copy(hr),sc.copy(Ee.position),sc.add(n3[se]),Ee.up.copy(i3[se]),Ee.lookAt(sc),Ee.updateMatrixWorld(),$e.makeTranslation(-hr.x,-hr.y,-hr.z),Ju.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Ju,Ee.coordinateSystem,Ee.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,se),n.clear();else{se===0&&(n.setRenderTarget(B.map),n.clear());let Ee=B.getViewport(se);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),G.viewport(a)}i=B.getFrustum(se),b(A,_,xe,k,this.type)}B.isPointLightShadow!==!0&&this.type===cs&&S(B,_),B.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(T,R,N)};function S(E,A){let _=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new Xt(s.x,s.y,{format:pi,type:pn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,_,u,v,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,_,m,v,null)}function C(E,A,_,T){let R=null,N=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)R=N;else if(R=_.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let G=R.uuid,$=A.uuid,F=l[G];F===void 0&&(F={},l[G]=F);let P=F[$];P===void 0&&(P=R.clone(),F[$]=P,A.addEventListener("dispose",M)),R=P}if(R.visible=A.visible,R.wireframe=A.wireframe,T===cs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let G=n.properties.get(R);G.light=_}return R}function b(E,A,_,T,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===cs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let $=e.update(E),F=E.material;if(Array.isArray(F)){let P=$.groups;for(let k=0,B=P.length;k<B;k++){let Q=P[k],H=F[Q.materialIndex];if(H&&H.visible){let J=C(E,H,T,R);E.onBeforeShadow(n,E,A,_,$,J,Q),n.renderBufferDirect(_,null,$,J,E,Q),E.onAfterShadow(n,E,A,_,$,J,Q)}}}else if(F.visible){let P=C(E,F,T,R);E.onBeforeShadow(n,E,A,_,$,P,null),n.renderBufferDirect(_,null,$,P,E,null),E.onAfterShadow(n,E,A,_,$,P,null)}}let G=E.children;for(let $=0,F=G.length;$<F;$++)b(G[$],A,_,T,R)}function M(E){E.target.removeEventListener("dispose",M);for(let _ in l){let T=l[_],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function r3(n,e){function t(){let O=!1,ge=new xt,ae=null,_e=new xt(0,0,0,0);return{setMask:function(Te){ae!==Te&&!O&&(n.colorMask(Te,Te,Te,Te),ae=Te)},setLocked:function(Te){O=Te},setClear:function(Te,ce,Fe,Le,ft){ft===!0&&(Te*=Le,ce*=Le,Fe*=Le),ge.set(Te,ce,Fe,Le),_e.equals(ge)===!1&&(n.clearColor(Te,ce,Fe,Le),_e.copy(ge))},reset:function(){O=!1,ae=null,_e.set(-1,0,0,0)}}}function i(){let O=!1,ge=!1,ae=null,_e=null,Te=null;return{setReversed:function(ce){if(ge!==ce){let Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ge=ce;let Le=Te;Te=null,this.setClear(Le)}},getReversed:function(){return ge},setTest:function(ce){ce?re(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(ce){ae!==ce&&!O&&(n.depthMask(ce),ae=ce)},setFunc:function(ce){if(ge&&(ce=Tu[ce]),_e!==ce){switch(ce){case $r:n.depthFunc(n.NEVER);break;case Zr:n.depthFunc(n.ALWAYS);break;case Kr:n.depthFunc(n.LESS);break;case ei:n.depthFunc(n.LEQUAL);break;case Jr:n.depthFunc(n.EQUAL);break;case jr:n.depthFunc(n.GEQUAL);break;case Qr:n.depthFunc(n.GREATER);break;case ea:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=ce}},setLocked:function(ce){O=ce},setClear:function(ce){Te!==ce&&(Te=ce,ge&&(ce=1-ce),n.clearDepth(ce))},reset:function(){O=!1,ae=null,_e=null,Te=null,ge=!1}}}function s(){let O=!1,ge=null,ae=null,_e=null,Te=null,ce=null,Fe=null,Le=null,ft=null;return{setTest:function(rt){O||(rt?re(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(rt){ge!==rt&&!O&&(n.stencilMask(rt),ge=rt)},setFunc:function(rt,sn,gn){(ae!==rt||_e!==sn||Te!==gn)&&(n.stencilFunc(rt,sn,gn),ae=rt,_e=sn,Te=gn)},setOp:function(rt,sn,gn){(ce!==rt||Fe!==sn||Le!==gn)&&(n.stencilOp(rt,sn,gn),ce=rt,Fe=sn,Le=gn)},setLocked:function(rt){O=rt},setClear:function(rt){ft!==rt&&(n.clearStencil(rt),ft=rt)},reset:function(){O=!1,ge=null,ae=null,_e=null,Te=null,ce=null,Fe=null,Le=null,ft=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},u={},m=new WeakMap,x=[],v=null,p=!1,d=null,S=null,C=null,b=null,M=null,E=null,A=null,_=new Qe(0,0,0),T=0,R=!1,N=null,G=null,$=null,F=null,P=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Q=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=Q>=2);let J=null,se={},xe=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),$e=new xt().fromArray(xe),Ge=new xt().fromArray(Ee);function je(O,ge,ae,_e){let Te=new Uint8Array(4),ce=n.createTexture();n.bindTexture(O,ce),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<ae;Fe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(ge+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return ce}let K={};K[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(ei),ee(!1),he(yl),re(n.CULL_FACE),ie(En);function re(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Ae(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function ke(O,ge){return u[O]!==ge?(n.bindFramebuffer(O,ge),u[O]=ge,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function we(O,ge){let ae=x,_e=!1;if(O){ae=m.get(ge),ae===void 0&&(ae=[],m.set(ge,ae));let Te=O.textures;if(ae.length!==Te.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Fe=Te.length;ce<Fe;ce++)ae[ce]=n.COLOR_ATTACHMENT0+ce;ae.length=Te.length,_e=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,_e=!0);_e&&n.drawBuffers(ae)}function He(O){return v!==O?(n.useProgram(O),v=O,!0):!1}let L={[wi]:n.FUNC_ADD,[Yh]:n.FUNC_SUBTRACT,[$h]:n.FUNC_REVERSE_SUBTRACT};L[Zh]=n.MIN,L[Kh]=n.MAX;let Y={[Jh]:n.ZERO,[jh]:n.ONE,[Qh]:n.SRC_COLOR,[Ml]:n.SRC_ALPHA,[ru]:n.SRC_ALPHA_SATURATE,[iu]:n.DST_COLOR,[tu]:n.DST_ALPHA,[eu]:n.ONE_MINUS_SRC_COLOR,[wl]:n.ONE_MINUS_SRC_ALPHA,[su]:n.ONE_MINUS_DST_COLOR,[nu]:n.ONE_MINUS_DST_ALPHA,[au]:n.CONSTANT_COLOR,[ou]:n.ONE_MINUS_CONSTANT_COLOR,[lu]:n.CONSTANT_ALPHA,[cu]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(O,ge,ae,_e,Te,ce,Fe,Le,ft,rt){if(O===En){p===!0&&(Ae(n.BLEND),p=!1);return}if(p===!1&&(re(n.BLEND),p=!0),O!==qh){if(O!==d||rt!==R){if((S!==wi||M!==wi)&&(n.blendEquation(n.FUNC_ADD),S=wi,M=wi),rt)switch(O){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vl:n.blendFunc(n.ONE,n.ONE);break;case bl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",O);break}else switch(O){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bl:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",O);break}C=null,b=null,E=null,A=null,_.set(0,0,0),T=0,d=O,R=rt}return}Te=Te||ge,ce=ce||ae,Fe=Fe||_e,(ge!==S||Te!==M)&&(n.blendEquationSeparate(L[ge],L[Te]),S=ge,M=Te),(ae!==C||_e!==b||ce!==E||Fe!==A)&&(n.blendFuncSeparate(Y[ae],Y[_e],Y[ce],Y[Fe]),C=ae,b=_e,E=ce,A=Fe),(Le.equals(_)===!1||ft!==T)&&(n.blendColor(Le.r,Le.g,Le.b,ft),_.copy(Le),T=ft),d=O,R=!1}function W(O,ge){O.side===wn?Ae(n.CULL_FACE):re(n.CULL_FACE);let ae=O.side===Nt;ge&&(ae=!ae),ee(ae),O.blending===hs&&O.transparent===!1?ie(En):ie(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let _e=O.stencilWrite;o.setTest(_e),_e&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),We(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(O){N!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),N=O)}function he(O){O!==Hh?(re(n.CULL_FACE),O!==G&&(O===yl?n.cullFace(n.BACK):O===Wh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),G=O}function ye(O){O!==$&&(B&&n.lineWidth(O),$=O)}function We(O,ge,ae){O?(re(n.POLYGON_OFFSET_FILL),(F!==ge||P!==ae)&&(F=ge,P=ae,a.getReversed()&&(ge=-ge),n.polygonOffset(ge,ae))):Ae(n.POLYGON_OFFSET_FILL)}function Xe(O){O?re(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function Ze(O){O===void 0&&(O=n.TEXTURE0+k-1),J!==O&&(n.activeTexture(O),J=O)}function D(O,ge,ae){ae===void 0&&(J===null?ae=n.TEXTURE0+k-1:ae=J);let _e=se[ae];_e===void 0&&(_e={type:void 0,texture:void 0},se[ae]=_e),(_e.type!==O||_e.texture!==ge)&&(J!==ae&&(n.activeTexture(ae),J=ae),n.bindTexture(O,ge||K[O]),_e.type=O,_e.texture=ge)}function dt(){let O=se[J];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function it(){try{n.compressedTexImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function g(){try{n.texSubImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function V(){try{n.texSubImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function te(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function de(){try{n.texStorage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function fe(){try{n.texStorage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function ne(){try{n.texImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function oe(){try{n.texImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function pe(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function Ne(O,ge){f[O]!==ge&&(n.pixelStorei(O,ge),f[O]=ge)}function ve(O){$e.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),$e.copy(O))}function me(O){Ge.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ge.copy(O))}function Ue(O,ge){let ae=l.get(ge);ae===void 0&&(ae=new WeakMap,l.set(ge,ae));let _e=ae.get(O);_e===void 0&&(_e=n.getUniformBlockIndex(ge,O.name),ae.set(O,_e))}function Be(O,ge){let _e=l.get(ge).get(O);c.get(ge)!==_e&&(n.uniformBlockBinding(ge,_e,O.__bindingPointIndex),c.set(ge,_e))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,se={},u={},m=new WeakMap,x=[],v=null,p=!1,d=null,S=null,C=null,b=null,M=null,E=null,A=null,_=new Qe(0,0,0),T=0,R=!1,N=null,G=null,$=null,F=null,P=null,$e.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:Ae,bindFramebuffer:ke,drawBuffers:we,useProgram:He,setBlending:ie,setMaterial:W,setFlipSided:ee,setCullFace:he,setLineWidth:ye,setPolygonOffset:We,setScissorTest:Xe,activeTexture:Ze,bindTexture:D,unbindTexture:dt,compressedTexImage2D:it,compressedTexImage3D:w,texImage2D:ne,texImage3D:oe,pixelStorei:Ne,getParameter:pe,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:de,texStorage3D:fe,texSubImage2D:g,texSubImage3D:V,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:ve,viewport:me,reset:Ye}}function a3(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap,f=new Set,u,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,g){return x?new OffscreenCanvas(w,g):Us("canvas")}function p(w,g,V){let Z=1,te=it(w);if((te.width>V||te.height>V)&&(Z=V/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let de=Math.floor(Z*te.width),fe=Math.floor(Z*te.height);u===void 0&&(u=v(de,fe));let ne=g?v(de,fe):u;return ne.width=de,ne.height=fe,ne.getContext("2d").drawImage(w,0,0,de,fe),Oe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+de+"x"+fe+")."),ne}else return"data"in w&&Oe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function d(w){return w.generateMipmaps}function S(w){n.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,g,V,Z,te,de=!1){if(w!==null){if(n[w]!==void 0)return n[w];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe;Z&&(fe=e.get("EXT_texture_norm16"),fe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=g;if(g===n.RED&&(V===n.FLOAT&&(ne=n.R32F),V===n.HALF_FLOAT&&(ne=n.R16F),V===n.UNSIGNED_BYTE&&(ne=n.R8),V===n.UNSIGNED_SHORT&&fe&&(ne=fe.R16_EXT),V===n.SHORT&&fe&&(ne=fe.R16_SNORM_EXT)),g===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ne=n.R8UI),V===n.UNSIGNED_SHORT&&(ne=n.R16UI),V===n.UNSIGNED_INT&&(ne=n.R32UI),V===n.BYTE&&(ne=n.R8I),V===n.SHORT&&(ne=n.R16I),V===n.INT&&(ne=n.R32I)),g===n.RG&&(V===n.FLOAT&&(ne=n.RG32F),V===n.HALF_FLOAT&&(ne=n.RG16F),V===n.UNSIGNED_BYTE&&(ne=n.RG8),V===n.UNSIGNED_SHORT&&fe&&(ne=fe.RG16_EXT),V===n.SHORT&&fe&&(ne=fe.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(ne=n.RG8UI),V===n.UNSIGNED_SHORT&&(ne=n.RG16UI),V===n.UNSIGNED_INT&&(ne=n.RG32UI),V===n.BYTE&&(ne=n.RG8I),V===n.SHORT&&(ne=n.RG16I),V===n.INT&&(ne=n.RG32I)),g===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),V===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),V===n.UNSIGNED_INT&&(ne=n.RGB32UI),V===n.BYTE&&(ne=n.RGB8I),V===n.SHORT&&(ne=n.RGB16I),V===n.INT&&(ne=n.RGB32I)),g===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),V===n.UNSIGNED_INT&&(ne=n.RGBA32UI),V===n.BYTE&&(ne=n.RGBA8I),V===n.SHORT&&(ne=n.RGBA16I),V===n.INT&&(ne=n.RGBA32I)),g===n.RGB&&(V===n.UNSIGNED_SHORT&&fe&&(ne=fe.RGB16_EXT),V===n.SHORT&&fe&&(ne=fe.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),g===n.RGBA){let oe=de?Ns:nt.getTransfer(te);V===n.FLOAT&&(ne=n.RGBA32F),V===n.HALF_FLOAT&&(ne=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ne=oe===ot?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&fe&&(ne=fe.RGBA16_EXT),V===n.SHORT&&fe&&(ne=fe.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(w,g){let V;return w?g===null||g===dn||g===ds?V=n.DEPTH24_STENCIL8:g===fn?V=n.DEPTH32F_STENCIL8:g===us&&(V=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===dn||g===ds?V=n.DEPTH_COMPONENT24:g===fn?V=n.DEPTH_COMPONENT32F:g===us&&(V=n.DEPTH_COMPONENT16),V}function E(w,g){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rt&&w.minFilter!==It?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function A(w){let g=w.target;g.removeEventListener("dispose",A),T(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function _(w){let g=w.target;g.removeEventListener("dispose",_),N(g)}function T(w){let g=i.get(w);if(g.__webglInit===void 0)return;let V=w.source,Z=m.get(V);if(Z){let te=Z[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(w),Object.keys(Z).length===0&&m.delete(V)}i.remove(w)}function R(w){let g=i.get(w);n.deleteTexture(g.__webglTexture);let V=w.source,Z=m.get(V);delete Z[g.__cacheKey],a.memory.textures--}function N(w){let g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let te=0;te<g.__webglFramebuffer[Z].length;te++)n.deleteFramebuffer(g.__webglFramebuffer[Z][te]);else n.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[Z]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let V=w.textures;for(let Z=0,te=V.length;Z<te;Z++){let de=i.get(V[Z]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(V[Z])}i.remove(w)}let G=0;function $(){G=0}function F(){return G}function P(w){G=w}function k(){let w=G;return w>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,w}function B(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function Q(w,g){let V=i.get(w);if(w.isVideoTexture&&D(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&V.__version!==w.version){let Z=w.image;if(Z===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(V,w,g);return}}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+g)}function H(w,g){let V=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){Ae(V,w,g);return}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+g)}function J(w,g){let V=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){Ae(V,w,g);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+g)}function se(w,g){let V=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&V.__version!==w.version){ke(V,w,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+g)}let xe={[ta]:n.REPEAT,[yn]:n.CLAMP_TO_EDGE,[na]:n.MIRRORED_REPEAT},Ee={[Rt]:n.NEAREST,[du]:n.NEAREST_MIPMAP_NEAREST,[nr]:n.NEAREST_MIPMAP_LINEAR,[It]:n.LINEAR,[Ia]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},$e={[gu]:n.NEVER,[bu]:n.ALWAYS,[_u]:n.LESS,[go]:n.LEQUAL,[xu]:n.EQUAL,[_o]:n.GEQUAL,[yu]:n.GREATER,[vu]:n.NOTEQUAL};function Ge(w,g){if(g.type===fn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===It||g.magFilter===Ia||g.magFilter===nr||g.magFilter===di||g.minFilter===It||g.minFilter===Ia||g.minFilter===nr||g.minFilter===di)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,xe[g.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,xe[g.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,xe[g.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ee[g.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ee[g.minFilter]),g.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,$e[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Rt||g.minFilter!==nr&&g.minFilter!==di||g.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function je(w,g){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",A));let Z=g.source,te=m.get(Z);te===void 0&&(te={},m.set(Z,te));let de=B(g);if(de!==w.__cacheKey){te[de]===void 0&&(te[de]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[de].usedTimes++;let fe=te[w.__cacheKey];fe!==void 0&&(te[w.__cacheKey].usedTimes--,fe.usedTimes===0&&R(g)),w.__cacheKey=de,w.__webglTexture=te[de].texture}return V}function K(w,g,V){return Math.floor(Math.floor(w/V)/g)}function re(w,g,V,Z){let de=w.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,V,Z,g.data);else{de.sort((Ne,ve)=>Ne.start-ve.start);let fe=0;for(let Ne=1;Ne<de.length;Ne++){let ve=de[fe],me=de[Ne],Ue=ve.start+ve.count,Be=K(me.start,g.width,4),Ye=K(ve.start,g.width,4);me.start<=Ue+1&&Be===Ye&&K(me.start+me.count-1,g.width,4)===Be?ve.count=Math.max(ve.count,me.start+me.count-ve.start):(++fe,de[fe]=me)}de.length=fe+1;let ne=t.getParameter(n.UNPACK_ROW_LENGTH),oe=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ne=0,ve=de.length;Ne<ve;Ne++){let me=de[Ne],Ue=Math.floor(me.start/4),Be=Math.ceil(me.count/4),Ye=Ue%g.width,O=Math.floor(Ue/g.width),ge=Be,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Ye,O,ge,ae,V,Z,g.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function Ae(w,g,V){let Z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=n.TEXTURE_3D);let te=je(w,g),de=g.source;t.bindTexture(Z,w.__webglTexture,n.TEXTURE0+V);let fe=i.get(de);if(de.version!==fe.__version||te===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let ae=nt.getPrimaries(nt.workingColorSpace),_e=g.colorSpace===kn?null:nt.getPrimaries(g.colorSpace),Te=g.colorSpace===kn||ae===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let oe=p(g.image,!1,s.maxTextureSize);oe=dt(g,oe);let pe=r.convert(g.format,g.colorSpace),Ne=r.convert(g.type),ve=b(g.internalFormat,pe,Ne,g.normalized,g.colorSpace,g.isVideoTexture);Ge(Z,g);let me,Ue=g.mipmaps,Be=g.isVideoTexture!==!0,Ye=fe.__version===void 0||te===!0,O=de.dataReady,ge=E(g,oe);if(g.isDepthTexture)ve=M(g.format===fi,g.type),Ye&&(Be?t.texStorage2D(n.TEXTURE_2D,1,ve,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,ve,oe.width,oe.height,0,pe,Ne,null));else if(g.isDataTexture)if(Ue.length>0){Be&&Ye&&t.texStorage2D(n.TEXTURE_2D,ge,ve,Ue[0].width,Ue[0].height);for(let ae=0,_e=Ue.length;ae<_e;ae++)me=Ue[ae],Be?O&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,me.width,me.height,pe,Ne,me.data):t.texImage2D(n.TEXTURE_2D,ae,ve,me.width,me.height,0,pe,Ne,me.data);g.generateMipmaps=!1}else Be?(Ye&&t.texStorage2D(n.TEXTURE_2D,ge,ve,oe.width,oe.height),O&&re(g,oe,pe,Ne)):t.texImage2D(n.TEXTURE_2D,0,ve,oe.width,oe.height,0,pe,Ne,oe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Be&&Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,ve,Ue[0].width,Ue[0].height,oe.depth);for(let ae=0,_e=Ue.length;ae<_e;ae++)if(me=Ue[ae],g.format!==nn)if(pe!==null)if(Be){if(O)if(g.layerUpdates.size>0){let Te=Yl(me.width,me.height,g.format,g.type);for(let ce of g.layerUpdates){let Fe=me.data.subarray(ce*Te/me.data.BYTES_PER_ELEMENT,(ce+1)*Te/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,ce,me.width,me.height,1,pe,Fe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,oe.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,ve,me.width,me.height,oe.depth,0,me.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,oe.depth,pe,Ne,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,ve,me.width,me.height,oe.depth,0,pe,Ne,me.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Be&&Ye&&t.texStorage2D(n.TEXTURE_2D,ge,ve,Ue[0].width,Ue[0].height);for(let ae=0,_e=Ue.length;ae<_e;ae++)me=Ue[ae],g.format!==nn?pe!==null?Be?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,ve,me.width,me.height,0,me.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?O&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,me.width,me.height,pe,Ne,me.data):t.texImage2D(n.TEXTURE_2D,ae,ve,me.width,me.height,0,pe,Ne,me.data)}else if(g.isDataArrayTexture)if(Be){if(Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,ve,oe.width,oe.height,oe.depth),O)if(g.layerUpdates.size>0){let ae=Yl(oe.width,oe.height,g.format,g.type);for(let _e of g.layerUpdates){let Te=oe.data.subarray(_e*ae/oe.data.BYTES_PER_ELEMENT,(_e+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,oe.width,oe.height,1,pe,Ne,Te)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,pe,Ne,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,oe.width,oe.height,oe.depth,0,pe,Ne,oe.data);else if(g.isData3DTexture)Be?(Ye&&t.texStorage3D(n.TEXTURE_3D,ge,ve,oe.width,oe.height,oe.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,pe,Ne,oe.data)):t.texImage3D(n.TEXTURE_3D,0,ve,oe.width,oe.height,oe.depth,0,pe,Ne,oe.data);else if(g.isFramebufferTexture){if(Ye)if(Be)t.texStorage2D(n.TEXTURE_2D,ge,ve,oe.width,oe.height);else{let ae=oe.width,_e=oe.height;for(let Te=0;Te<ge;Te++)t.texImage2D(n.TEXTURE_2D,Te,ve,ae,_e,0,pe,Ne,null),ae>>=1,_e>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),oe.parentNode!==ae){ae.appendChild(oe),f.add(g),ae.onpaint=_e=>{let Te=_e.changedElements;for(let ce of f)Te.includes(ce.image)&&(ce.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,oe);else{let Te=n.RGBA,ce=n.RGBA,Fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Te,ce,Fe,oe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Be&&Ye){let ae=it(Ue[0]);t.texStorage2D(n.TEXTURE_2D,ge,ve,ae.width,ae.height)}for(let ae=0,_e=Ue.length;ae<_e;ae++)me=Ue[ae],Be?O&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,pe,Ne,me):t.texImage2D(n.TEXTURE_2D,ae,ve,pe,Ne,me);g.generateMipmaps=!1}else if(Be){if(Ye){let ae=it(oe);t.texStorage2D(n.TEXTURE_2D,ge,ve,ae.width,ae.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ne,oe)}else t.texImage2D(n.TEXTURE_2D,0,ve,pe,Ne,oe);d(g)&&S(Z),fe.__version=de.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ke(w,g,V){if(g.image.length!==6)return;let Z=je(w,g),te=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+V);let de=i.get(te);if(te.version!==de.__version||Z===!0){t.activeTexture(n.TEXTURE0+V);let fe=nt.getPrimaries(nt.workingColorSpace),ne=g.colorSpace===kn?null:nt.getPrimaries(g.colorSpace),oe=g.colorSpace===kn||fe===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let pe=g.isCompressedTexture||g.image[0].isCompressedTexture,Ne=g.image[0]&&g.image[0].isDataTexture,ve=[];for(let ce=0;ce<6;ce++)!pe&&!Ne?ve[ce]=p(g.image[ce],!0,s.maxCubemapSize):ve[ce]=Ne?g.image[ce].image:g.image[ce],ve[ce]=dt(g,ve[ce]);let me=ve[0],Ue=r.convert(g.format,g.colorSpace),Be=r.convert(g.type),Ye=b(g.internalFormat,Ue,Be,g.normalized,g.colorSpace),O=g.isVideoTexture!==!0,ge=de.__version===void 0||Z===!0,ae=te.dataReady,_e=E(g,me);Ge(n.TEXTURE_CUBE_MAP,g);let Te;if(pe){O&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ye,me.width,me.height);for(let ce=0;ce<6;ce++){Te=ve[ce].mipmaps;for(let Fe=0;Fe<Te.length;Fe++){let Le=Te[Fe];g.format!==nn?Ue!==null?O?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Le.width,Le.height,Ue,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,Ye,Le.width,Le.height,0,Le.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Le.width,Le.height,Ue,Be,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,Ye,Le.width,Le.height,0,Ue,Be,Le.data)}}}else{if(Te=g.mipmaps,O&&ge){Te.length>0&&_e++;let ce=it(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ye,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Ne){O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ve[ce].width,ve[ce].height,Ue,Be,ve[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,ve[ce].width,ve[ce].height,0,Ue,Be,ve[ce].data);for(let Fe=0;Fe<Te.length;Fe++){let ft=Te[Fe].image[ce].image;O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,ft.width,ft.height,Ue,Be,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,Ye,ft.width,ft.height,0,Ue,Be,ft.data)}}else{O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ue,Be,ve[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,Ue,Be,ve[ce]);for(let Fe=0;Fe<Te.length;Fe++){let Le=Te[Fe];O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,Ue,Be,Le.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,Ye,Ue,Be,Le.image[ce])}}}d(g)&&S(n.TEXTURE_CUBE_MAP),de.__version=te.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function we(w,g,V,Z,te,de){let fe=r.convert(V.format,V.colorSpace),ne=r.convert(V.type),oe=b(V.internalFormat,fe,ne,V.normalized,V.colorSpace),pe=i.get(g),Ne=i.get(V);if(Ne.__renderTarget=g,!pe.__hasExternalTextures){let ve=Math.max(1,g.width>>de),me=Math.max(1,g.height>>de);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,de,oe,ve,me,g.depth,0,fe,ne,null):t.texImage2D(te,de,oe,ve,me,0,fe,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Ze(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,te,Ne.__webglTexture,0,Xe(g)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,te,Ne.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(w,g,V){if(n.bindRenderbuffer(n.RENDERBUFFER,w),g.depthBuffer){let Z=g.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,de=M(g.stencilBuffer,te),fe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ze(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(g),de,g.width,g.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(g),de,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,de,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,w)}else{let Z=g.textures;for(let te=0;te<Z.length;te++){let de=Z[te],fe=r.convert(de.format,de.colorSpace),ne=r.convert(de.type),oe=b(de.internalFormat,fe,ne,de.normalized,de.colorSpace);Ze(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(g),oe,g.width,g.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(g),oe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,oe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function L(w,g,V){let Z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(g.depthTexture);if(te.__renderTarget=g,(!te.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,g.depthTexture);let pe=r.convert(g.depthTexture.format),Ne=r.convert(g.depthTexture.type),ve;g.depthTexture.format===vn?ve=n.DEPTH_COMPONENT24:g.depthTexture.format===fi&&(ve=n.DEPTH24_STENCIL8);for(let me=0;me<6;me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ve,g.width,g.height,0,pe,Ne,null)}}else Q(g.depthTexture,0);let de=te.__webglTexture,fe=Xe(g),ne=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,oe=g.depthTexture.format===fi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===vn)Ze(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ne,de,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ne,de,0);else if(g.depthTexture.format===fi)Ze(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ne,de,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ne,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Y(w){let g=i.get(w),V=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let Z=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){let te=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),g.__depthDisposeCallback=te}g.__boundDepthTexture=Z}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(V)for(let Z=0;Z<6;Z++)L(g.__webglFramebuffer[Z],w,Z);else{let Z=w.texture.mipmaps;Z&&Z.length>0?L(g.__webglFramebuffer[0],w,0):L(g.__webglFramebuffer,w,0)}else if(V){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=n.createRenderbuffer(),He(g.__webglDepthbuffer[Z],w,!1);else{let te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=g.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,de)}}else{let Z=w.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),He(g.__webglDepthbuffer,w,!1);else{let te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(w,g,V){let Z=i.get(w);g!==void 0&&we(Z.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Y(w)}function W(w){let g=w.texture,V=i.get(w),Z=i.get(g);w.addEventListener("dispose",_);let te=w.textures,de=w.isWebGLCubeRenderTarget===!0,fe=te.length>1;if(fe||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=g.version,a.memory.textures++),de){V.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[ne]=[];for(let oe=0;oe<g.mipmaps.length;oe++)V.__webglFramebuffer[ne][oe]=n.createFramebuffer()}else V.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)V.__webglFramebuffer[ne]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(fe)for(let ne=0,oe=te.length;ne<oe;ne++){let pe=i.get(te[ne]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Ze(w)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){let oe=te[ne];V.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ne]);let pe=r.convert(oe.format,oe.colorSpace),Ne=r.convert(oe.type),ve=b(oe.internalFormat,pe,Ne,oe.normalized,oe.colorSpace,w.isXRRenderTarget===!0),me=Xe(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,ve,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,V.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),He(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let oe=0;oe<g.mipmaps.length;oe++)we(V.__webglFramebuffer[ne][oe],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe);else we(V.__webglFramebuffer[ne],w,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(g)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ne=0,oe=te.length;ne<oe;ne++){let pe=te[ne],Ne=i.get(pe),ve=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ne.__webglTexture),Ge(ve,pe),we(V.__webglFramebuffer,w,pe,n.COLOR_ATTACHMENT0+ne,ve,0),d(pe)&&S(ve)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),Ge(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let oe=0;oe<g.mipmaps.length;oe++)we(V.__webglFramebuffer[oe],w,g,n.COLOR_ATTACHMENT0,ne,oe);else we(V.__webglFramebuffer,w,g,n.COLOR_ATTACHMENT0,ne,0);d(g)&&S(ne),t.unbindTexture()}w.depthBuffer&&Y(w)}function ee(w){let g=w.textures;for(let V=0,Z=g.length;V<Z;V++){let te=g[V];if(d(te)){let de=C(w),fe=i.get(te).__webglTexture;t.bindTexture(de,fe),S(de),t.unbindTexture()}}}let he=[],ye=[];function We(w){if(w.samples>0){if(Ze(w)===!1){let g=w.textures,V=w.width,Z=w.height,te=n.COLOR_BUFFER_BIT,de=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(w),ne=g.length>1;if(ne)for(let pe=0;pe<g.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let oe=w.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);let Ne=i.get(g[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,V,Z,0,0,V,Z,te,n.NEAREST),c===!0&&(he.length=0,ye.length=0,he.push(n.COLOR_ATTACHMENT0+pe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(he.push(de),ye.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let pe=0;pe<g.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);let Ne=i.get(g[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let g=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Xe(w){return Math.min(s.maxSamples,w.samples)}function Ze(w){let g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(w){let g=a.render.frame;h.get(w)!==g&&(h.set(w,g),w.update())}function dt(w,g){let V=w.colorSpace,Z=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Ds&&V!==kn&&(nt.getTransfer(V)===ot?(Z!==nn||te!==qt)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",V)),g}function it(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=$,this.getTextureUnits=F,this.setTextureUnits=P,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=se,this.rebindTextures=ie,this.setupRenderTarget=W,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function o3(n,e){function t(i,s=kn){let r,a=nt.getTransfer(s);if(i===qt)return n.UNSIGNED_BYTE;if(i===Da)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Na)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ul)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dl)return n.BYTE;if(i===Nl)return n.SHORT;if(i===us)return n.UNSIGNED_SHORT;if(i===La)return n.INT;if(i===dn)return n.UNSIGNED_INT;if(i===fn)return n.FLOAT;if(i===pn)return n.HALF_FLOAT;if(i===Ol)return n.ALPHA;if(i===Bl)return n.RGB;if(i===nn)return n.RGBA;if(i===vn)return n.DEPTH_COMPONENT;if(i===fi)return n.DEPTH_STENCIL;if(i===kl)return n.RED;if(i===Ua)return n.RED_INTEGER;if(i===pi)return n.RG;if(i===Fa)return n.RG_INTEGER;if(i===Oa)return n.RGBA_INTEGER;if(i===ir||i===sr||i===rr||i===ar)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ba||i===ka||i===za||i===Va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ga||i===Ha||i===Wa||i===Xa||i===qa||i===or||i===Ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ga||i===Ha)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xa)return r.COMPRESSED_R11_EAC;if(i===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===or)return r.COMPRESSED_RG11_EAC;if(i===Ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$a||i===Za||i===Ka||i===Ja||i===ja||i===Qa||i===eo||i===to||i===no||i===io||i===so||i===ro||i===ao||i===oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$a)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Za)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ja)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===to)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===no)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===io)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===so)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ro)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ao)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lo||i===co||i===ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lo)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uo||i===fo||i===lr||i===po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===uo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var l3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ws(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new jt({vertexShader:l3,fragmentShader:c3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fc=class extends hn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,m=null,x=null,v=typeof XRWebGLBinding<"u",p=new dc,d={},S=t.getContextAttributes(),C=null,b=null,M=[],E=[],A=new Ve,_=null,T=null,R=new Bt;R.viewport=new xt;let N=new Bt;N.viewport=new xt;let G=[R,N],$=new Ta,F=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=M[K];return re===void 0&&(re=new ns,M[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=M[K];return re===void 0&&(re=new ns,M[K]=re),re.getGripSpace()},this.getHand=function(K){let re=M[K];return re===void 0&&(re=new ns,M[K]=re),re.getHandSpace()};function k(K){let re=E.indexOf(K.inputSource);if(re===-1)return;let Ae=M[re];Ae!==void 0&&(Ae.update(K.inputSource,K.frame,l||a),Ae.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Q);for(let K=0;K<M.length;K++){let re=E[K];re!==null&&(E[K]=null,M[K].disconnect(re))}F=null,P=null,p.reset();for(let K in d)delete d[K];if(e.setRenderTarget(C),m=null,u=null,f=null,s=null,b=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),T!==null){let K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Q),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ke=null,we=null;S.depth&&(we=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=S.stencil?fi:vn,ke=S.stencil?ds:dn);let He={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(He),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Xt(u.textureWidth,u.textureHeight,{format:nn,type:qt,depthTexture:new si(u.textureWidth,u.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ae={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Xt(m.framebufferWidth,m.framebufferHeight,{format:nn,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(K){for(let re=0;re<K.removed.length;re++){let Ae=K.removed[re],ke=E.indexOf(Ae);ke>=0&&(E[ke]=null,M[ke].disconnect(Ae))}for(let re=0;re<K.added.length;re++){let Ae=K.added[re],ke=E.indexOf(Ae);if(ke===-1){for(let He=0;He<M.length;He++)if(He>=E.length){E.push(Ae),ke=He;break}else if(E[He]===null){E[He]=Ae,ke=He;break}if(ke===-1)break}let we=M[ke];we&&we.connect(Ae)}}let H=new z,J=new z;function se(K,re,Ae){H.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(Ae.matrixWorld);let ke=H.distanceTo(J),we=re.projectionMatrix.elements,He=Ae.projectionMatrix.elements,L=we[14]/(we[10]-1),Y=we[14]/(we[10]+1),ie=(we[9]+1)/we[5],W=(we[9]-1)/we[5],ee=(we[8]-1)/we[0],he=(He[8]+1)/He[0],ye=L*ee,We=L*he,Xe=ke/(-ee+he),Ze=Xe*-ee;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ze),K.translateZ(Xe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let D=L+Xe,dt=Y+Xe,it=ye-Ze,w=We+(ke-Ze),g=ie*Y/dt*D,V=W*Y/dt*D;K.projectionMatrix.makePerspective(it,w,g,V,D,dt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function xe(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let re=K.near,Ae=K.far;p.texture!==null&&(p.depthNear>0&&(re=p.depthNear),p.depthFar>0&&(Ae=p.depthFar)),$.near=N.near=R.near=re,$.far=N.far=R.far=Ae,(F!==$.near||P!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),F=$.near,P=$.far),$.layers.mask=K.layers.mask|6,R.layers.mask=$.layers.mask&-5,N.layers.mask=$.layers.mask&-3;let ke=K.parent,we=$.cameras;xe($,ke);for(let He=0;He<we.length;He++)xe(we[He],ke);we.length===2?se($,R,N):$.projectionMatrix.copy(R.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),Ee(K,$,ke)};function Ee(K,re,Ae){Ae===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(Ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Qi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh($)},this.getCameraTexture=function(K){return d[K]};let $e=null;function Ge(K,re){if(h=re.getViewerPose(l||a),x=re,h!==null){let Ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ke=!1;Ae.length!==$.cameras.length&&($.cameras.length=0,ke=!0);for(let Y=0;Y<Ae.length;Y++){let ie=Ae[Y],W=null;if(m!==null)W=m.getViewport(ie);else{let he=f.getViewSubImage(u,ie);W=he.viewport,Y===0&&(e.setRenderTargetTextures(b,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(b))}let ee=G[Y];ee===void 0&&(ee=new Bt,ee.layers.enable(Y),ee.viewport=new xt,G[Y]=ee),ee.matrix.fromArray(ie.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ie.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(W.x,W.y,W.width,W.height),Y===0&&($.matrix.copy(ee.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),ke===!0&&$.cameras.push(ee)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let Y=f.getDepthInformation(Ae[0]);Y&&Y.isValid&&Y.texture&&p.init(Y,s.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Y=0;Y<Ae.length;Y++){let ie=Ae[Y].camera;if(ie){let W=d[ie];W||(W=new Ws,d[ie]=W);let ee=f.getCameraImage(ie);W.sourceTexture=ee}}}}for(let Ae=0;Ae<M.length;Ae++){let ke=E[Ae],we=M[Ae];ke!==null&&we!==void 0&&we.update(ke,re,l||a)}$e&&$e(K,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),x=null}let je=new ju;je.setAnimationLoop(Ge),this.setAnimationLoop=function(K){$e=K},this.dispose=function(){}}},h3=new mt,sd=new qe;sd.set(-1,0,0,0,1,0,0,0,1);function u3(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Wl(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,S,C,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),x(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,S,C):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Nt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Nt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let S=e.get(d),C=S.envMap,b=S.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(h3.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(sd),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,S,C){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*S,p.scale.value=C*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,S){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Nt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){let S=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function d3(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let E=M.program;i.uniformBlockBinding(b,E)}function l(b,M){let E=s[b.id];E===void 0&&(p(b),E=h(b),s[b.id]=E,b.addEventListener("dispose",S));let A=M.program;i.updateUBOMapping(b,A);let _=e.render.frame;r[b.id]!==_&&(u(b),r[b.id]=_)}function h(b){let M=f();b.__bindingPointIndex=M;let E=n.createBuffer(),A=b.__size,_=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let M=s[b.id],E=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let _=0,T=E.length;_<T;_++){let R=E[_];if(Array.isArray(R))for(let N=0,G=R.length;N<G;N++)m(R[N],_,N,A);else m(R,_,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,M,E,A){if(v(b,M,E,A)===!0){let _=b.__offset,T=b.value;if(Array.isArray(T)){let R=0;for(let N=0;N<T.length;N++){let G=T[N],$=d(G);x(G,b.__data,R),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(R+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,b.__data)}}function x(b,M,E){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,E)}function v(b,M,E,A){let _=b.value,T=M+"_"+E;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let R=A[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function p(b){let M=b.uniforms,E=0,A=16;for(let T=0,R=M.length;T<R;T++){let N=Array.isArray(M[T])?M[T]:[M[T]];for(let G=0,$=N.length;G<$;G++){let F=N[G],P=Array.isArray(F.value)?F.value:[F.value];for(let k=0,B=P.length;k<B;k++){let Q=P[k],H=d(Q),J=E%A,se=J%H.boundary,xe=J+se;E+=se,xe!==0&&A-xe<H.storage&&(E+=A-xe),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=H.storage}}}let _=E%A;return _>0&&(E+=A-_),b.__size=E,b.__cache={},this}function d(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",b),M}function S(b){let M=b.target;M.removeEventListener("dispose",S);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function C(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:C}}var f3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tn=null;function p3(){return Tn===null&&(Tn=new oa(f3,16,16,pi,pn),Tn.name="DFG_LUT",Tn.minFilter=It,Tn.magFilter=It,Tn.wrapS=yn,Tn.wrapT=yn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}var So=class{constructor(e={}){let{canvas:t=Mu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=qt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let v=m,p=new Set([Oa,Fa,Ua]),d=new Set([qt,dn,us,ds,Da,Na]),S=new Uint32Array(4),C=new Int32Array(4),b=new z,M=null,E=null,A=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,G=null,$=null,F=null,P=null;this._outputColorSpace=Ht;let k=0,B=0,Q=null,H=-1,J=null,se=new xt,xe=new xt,Ee=null,$e=new Qe(0),Ge=0,je=t.width,K=t.height,re=1,Ae=null,ke=null,we=new xt(0,0,je,K),He=new xt(0,0,je,K),L=!1,Y=new is,ie=!1,W=!1,ee=new mt,he=new z,ye=new xt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function Ze(){return Q===null?re:1}let D=i;function dt(y,U){return t.getContext(y,U)}let it,w,g,V,Z,te,de,fe,ne,oe,pe,Ne,ve,me,Ue,Be,Ye,O,ge,ae,_e,Te,ce;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",sn,!1),D===null){let U="webgl2";if(D=dt(U,y),D===null)throw dt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(y){throw t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),ze("WebGLRenderer: "+y.message),y}function Fe(){it=new b2(D),it.init(),_e=new o3(D,it),w=new u2(D,it,e,_e),g=new r3(D,it),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),$=D.createFramebuffer(),F=D.createFramebuffer(),P=D.createFramebuffer(),V=new w2(D),Z=new Xm,te=new a3(D,it,g,Z,w,_e,V),de=new v2(R),fe=new T1(D),Te=new c2(D,fe),ne=new S2(D,fe,V,Te),oe=new T2(D,ne,fe,Te,V),O=new E2(D,w,te),Ue=new d2(Z),pe=new Wm(R,de,it,w,Te,Ue),Ne=new u3(R,Z),ve=new Ym,me=new Qm(it),Ye=new l2(R,de,g,oe,x,c),Be=new s3(R,oe,w),ce=new d3(D,V,w,g),ge=new h2(D,it,V),ae=new M2(D,it,V),V.programs=pe.programs,R.capabilities=w,R.extensions=it,R.properties=Z,R.renderLists=ve,R.shadowMap=Be,R.state=g,R.info=V}v!==qt&&(T=new C2(v,t.width,t.height,o,s,r));let Le=new fc(R,D);this.xr=Le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=it.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=it.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(y){y!==void 0&&(re=y,this.setSize(je,K,!1))},this.getSize=function(y){return y.set(je,K)},this.setSize=function(y,U,j=!0){if(Le.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}je=y,K=U,t.width=Math.floor(y*re),t.height=Math.floor(U*re),j===!0&&(t.style.width=y+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(je*re,K*re).floor()},this.setDrawingBufferSize=function(y,U,j){je=y,K=U,re=j,t.width=Math.floor(y*j),t.height=Math.floor(U*j),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(v===qt){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(se)},this.getViewport=function(y){return y.copy(we)},this.setViewport=function(y,U,j,X){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,U,j,X),g.viewport(se.copy(we).multiplyScalar(re).round())},this.getScissor=function(y){return y.copy(He)},this.setScissor=function(y,U,j,X){y.isVector4?He.set(y.x,y.y,y.z,y.w):He.set(y,U,j,X),g.scissor(xe.copy(He).multiplyScalar(re).round())},this.getScissorTest=function(){return L},this.setScissorTest=function(y){g.setScissorTest(L=y)},this.setOpaqueSort=function(y){Ae=y},this.setTransparentSort=function(y){ke=y},this.getClearColor=function(y){return y.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,j=!0){let X=0;if(y){let q=!1;if(Q!==null){let Me=Q.texture.format;q=p.has(Me)}if(q){let Me=Q.texture.type,Re=d.has(Me),Se=Ye.getClearColor(),Pe=Ye.getClearAlpha(),De=Se.r,Ke=Se.g,tt=Se.b;Re?(S[0]=De,S[1]=Ke,S[2]=tt,S[3]=Pe,D.clearBufferuiv(D.COLOR,0,S)):(C[0]=De,C[1]=Ke,C[2]=tt,C[3]=Pe,D.clearBufferiv(D.COLOR,0,C))}else X|=D.COLOR_BUFFER_BIT}U&&(X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),G=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),Ye.dispose(),ve.dispose(),me.dispose(),Z.dispose(),de.dispose(),oe.dispose(),Te.dispose(),ce.dispose(),pe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",ih),Le.removeEventListener("sessionend",sh),xi.stop()};function ft(y){y.preventDefault(),Vl("WebGLRenderer: Context Lost."),N=!0}function rt(){Vl("WebGLRenderer: Context Restored."),N=!1;let y=V.autoReset,U=Be.enabled,j=Be.autoUpdate,X=Be.needsUpdate,q=Be.type;Fe(),V.autoReset=y,Be.enabled=U,Be.autoUpdate=j,Be.needsUpdate=X,Be.type=q}function sn(y){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function gn(y){let U=y.target;U.removeEventListener("dispose",gn),Sf(U)}function Sf(y){Mf(y),Z.remove(y)}function Mf(y){let U=Z.get(y).programs;U!==void 0&&(U.forEach(function(j){pe.releaseProgram(j)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,j,X,q,Me){U===null&&(U=We);let Re=q.isMesh&&q.matrixWorld.determinantAffine()<0,Se=Tf(y,U,j,X,q);g.setMaterial(X,Re);let Pe=j.index,De=1;if(X.wireframe===!0){if(Pe=ne.getWireframeAttribute(j),Pe===void 0)return;De=2}let Ke=j.drawRange,tt=j.attributes.position,Ie=Ke.start*De,at=(Ke.start+Ke.count)*De;Me!==null&&(Ie=Math.max(Ie,Me.start*De),at=Math.min(at,(Me.start+Me.count)*De)),Pe!==null?(Ie=Math.max(Ie,0),at=Math.min(at,Pe.count)):tt!=null&&(Ie=Math.max(Ie,0),at=Math.min(at,tt.count));let vt=at-Ie;if(vt<0||vt===1/0)return;Te.setup(q,X,Se,j,Pe);let gt,ut=ge;if(Pe!==null&&(gt=fe.get(Pe),ut=ae,ut.setIndex(gt)),q.isMesh)X.wireframe===!0?(g.setLineWidth(X.wireframeLinewidth*Ze()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(q.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),g.setLineWidth(Ut*Ze()),q.isLineSegments?ut.setMode(D.LINES):q.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else q.isPoints?ut.setMode(D.POINTS):q.isSprite&&ut.setMode(D.TRIANGLES);if(q.isBatchedMesh)if(it.get("WEBGL_multi_draw"))ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ut=q._multiDrawStarts,Ce=q._multiDrawCounts,Vt=q._multiDrawCount,st=Pe?fe.get(Pe).bytesPerElement:1,en=Z.get(X).currentProgram.getUniforms();for(let _n=0;_n<Vt;_n++)en.setValue(D,"_gl_DrawID",_n),ut.render(Ut[_n]/st,Ce[_n])}else if(q.isInstancedMesh)ut.renderInstances(Ie,vt,q.count);else if(j.isInstancedBufferGeometry){let Ut=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ce=Math.min(j.instanceCount,Ut);ut.renderInstances(Ie,vt,Ce)}else ut.render(Ie,vt)};function nh(y,U,j,X){G!==null&&y.isNodeMaterial&&G.setObject(X,y),ie===!0&&Ue.setState(y,j,!1),y.transparent===!0&&y.side===wn&&y.forceSinglePass===!1?(y.side=Nt,y.needsUpdate=!0,br(y,U,X),y.side=hi,y.needsUpdate=!0,br(y,U,X),y.side=wn):br(y,U,X)}this.compile=function(y,U,j=null){j===null&&(j=y),G!==null&&G.renderStart(y,U,j),E=me.get(j),E.init(U),_.push(E),j.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),y!==j&&y.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),G!==null&&G.updateLights(E.state.lightsArray),W=this.localClippingEnabled,ie=Ue.init(this.clippingPlanes,W),ie===!0&&Ue.setGlobalState(this.clippingPlanes,U),G!==null&&Be.render(E.state.shadowsArray,j,U);let X=new Set;return y.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Me=q.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){let Se=Me[Re];nh(Se,j,U,q),X.add(Se)}else nh(Me,j,U,q),X.add(Me)}),E=_.pop(),G!==null&&G.renderEnd(),X},this.compileAsync=function(y,U,j=null){let X=this.compile(y,U,j);return new Promise(q=>{function Me(){if(X.forEach(function(Re){let Pe=Z.get(Re).currentProgram;(Pe===void 0||Pe.isReady())&&X.delete(Re)}),X.size===0){q(y);return}setTimeout(Me,10)}it.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let zo=null;function wf(y){zo&&zo(y)}function ih(){xi.stop()}function sh(){xi.start()}let xi=new ju;xi.setAnimationLoop(wf),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(y){zo=y,Le.setAnimationLoop(y),y===null?xi.stop():xi.start()},Le.addEventListener("sessionstart",ih),Le.addEventListener("sessionend",sh),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;G!==null&&G.renderStart(y,U);let j=Le.enabled===!0&&Le.isPresenting===!0,X=T!==null&&(Q===null||j)&&T.begin(R,Q);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(U),U=Le.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,U,Q),E=me.get(y,_.length),E.init(U),E.state.textureUnits=te.getTextureUnits(),_.push(E),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(ee,cn,U.reversedDepth),W=this.localClippingEnabled,ie=Ue.init(this.clippingPlanes,W),M=ve.get(y,A.length),M.init(),A.push(M),Le.enabled===!0&&Le.isPresenting===!0){let Re=R.xr.getDepthSensingMesh();Re!==null&&Vo(Re,U,-1/0,R.sortObjects)}Vo(y,U,0,R.sortObjects),M.finish(),G!==null&&G.updateLights(E.state.lightsArray),R.sortObjects===!0&&M.sort(Ae,ke),Xe=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Xe&&Ye.addToRenderList(M,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&Ue.beginShadows();let q=E.state.shadowsArray;if(Be.render(q,y,U),ie===!0&&Ue.endShadows(),(X&&T.hasRenderPass())===!1){let Re=M.opaque,Se=M.transmissive;if(E.setupLights(),U.isArrayCamera){let Pe=U.cameras;if(Se.length>0)for(let De=0,Ke=Pe.length;De<Ke;De++){let tt=Pe[De];ah(Re,Se,y,tt)}Xe&&Ye.render(y);for(let De=0,Ke=Pe.length;De<Ke;De++){let tt=Pe[De];rh(M,y,tt,tt.viewport)}}else Se.length>0&&ah(Re,Se,y,U),Xe&&Ye.render(y),rh(M,y,U)}Q!==null&&B===0&&(te.updateMultisampleRenderTarget(Q),te.updateRenderTargetMipmap(Q)),X&&T.end(R),y.isScene===!0&&y.onAfterRender(R,y,U),Te.resetDefaultState(),H=-1,J=null,_.pop(),_.length>0?(E=_[_.length-1],te.setTextureUnits(E.state.textureUnits),ie===!0&&Ue.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,G!==null&&G.renderEnd()};function Vo(y,U,j,X){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)j=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Y)){X&&ye.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ee);let Re=oe.update(y),Se=y.material;Se.visible&&M.push(y,Re,Se,j,ye.z,null,U)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Y))){let Re=oe.update(y),Se=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ye.copy(y.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ye.copy(Re.boundingSphere.center)),ye.applyMatrix4(y.matrixWorld).applyMatrix4(ee)),Array.isArray(Se)){let Pe=Re.groups;for(let De=0,Ke=Pe.length;De<Ke;De++){let tt=Pe[De],Ie=Se[tt.materialIndex];Ie&&Ie.visible&&M.push(y,Re,Ie,j,ye.z,tt,U)}}else Se.visible&&M.push(y,Re,Se,j,ye.z,null,U)}}let Me=y.children;for(let Re=0,Se=Me.length;Re<Se;Re++)Vo(Me[Re],U,j,X)}function rh(y,U,j,X){let{opaque:q,transmissive:Me,transparent:Re}=y;E.setupLightsView(j),ie===!0&&Ue.setGlobalState(R.clippingPlanes,j),X&&g.viewport(se.copy(X)),q.length>0&&vr(q,U,j),Me.length>0&&vr(Me,U,j),Re.length>0&&vr(Re,U,j),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ah(y,U,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Ie=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new Xt(1,1,{generateMipmaps:!0,type:Ie?pn:qt,minFilter:di,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let Me=E.state.transmissionRenderTarget[X.id],Re=X.viewport||se;Me.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);let Se=R.getRenderTarget(),Pe=R.getActiveCubeFace(),De=R.getActiveMipmapLevel();R.setRenderTarget(Me),R.getClearColor($e),Ge=R.getClearAlpha(),Ge<1&&R.setClearColor(16777215,.5),R.clear(),Xe&&Ye.render(j);let Ke=R.toneMapping;R.toneMapping=un;let tt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),ie===!0&&Ue.setGlobalState(R.clippingPlanes,X),vr(y,j,X),te.updateMultisampleRenderTarget(Me),te.updateRenderTargetMipmap(Me),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let at=0,vt=U.length;at<vt;at++){let gt=U[at],{object:ut,geometry:Ut,material:Ce,group:Vt}=gt;if(Ce.side===wn&&ut.layers.test(X.layers)){let st=Ce.side;Ce.side=Nt,Ce.needsUpdate=!0,oh(ut,j,X,Ut,Ce,Vt),Ce.side=st,Ce.needsUpdate=!0,Ie=!0}}Ie===!0&&(te.updateMultisampleRenderTarget(Me),te.updateRenderTargetMipmap(Me))}R.setRenderTarget(Se,Pe,De),R.setClearColor($e,Ge),tt!==void 0&&(X.viewport=tt),R.toneMapping=Ke}function vr(y,U,j){let X=U.isScene===!0?U.overrideMaterial:null;for(let q=0,Me=y.length;q<Me;q++){let Re=y[q],{object:Se,geometry:Pe,group:De}=Re,Ke=Re.material;Ke.allowOverride===!0&&X!==null&&(Ke=X),Se.layers.test(j.layers)&&oh(Se,U,j,Pe,Ke,De)}}function oh(y,U,j,X,q,Me){G!==null&&q.isNodeMaterial&&G.setObject(y,q),y.onBeforeRender(R,U,j,X,q,Me),y.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(R,U,j,X,y,Me),q.transparent===!0&&q.side===wn&&q.forceSinglePass===!1?(q.side=Nt,q.needsUpdate=!0,R.renderBufferDirect(j,U,X,q,y,Me),q.side=hi,q.needsUpdate=!0,R.renderBufferDirect(j,U,X,q,y,Me),q.side=wn):R.renderBufferDirect(j,U,X,q,y,Me),y.onAfterRender(R,U,j,X,q,Me)}function br(y,U,j){U.isScene!==!0&&(U=We);let X=Z.get(y),q=E.state.lights,Me=E.state.shadowsArray,Re=q.state.version,Se=pe.getParameters(y,q.state,Me,U,j,E.state.lightProbeGridArray),Pe=pe.getProgramCacheKey(Se),De=X.programs;X.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;let Ke=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;X.envMap=de.get(y.envMap||X.environment,Ke),X.envMapRotation=X.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",gn),De=new Map,X.programs=De);let tt=De.get(Pe);if(tt!==void 0){if(X.currentProgram===tt&&X.lightsStateVersion===Re)return ch(y,Se),tt}else Se.uniforms=pe.getUniforms(y),G!==null&&y.isNodeMaterial&&G.build(y,j,Se),y.onBeforeCompile(Se,R),tt=pe.acquireProgram(Se,Pe),De.set(Pe,tt),X.uniforms=Se.uniforms;let Ie=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=Ue.uniform),ch(y,Se),X.needsLights=Cf(y),X.lightsStateVersion=Re,X.needsLights&&(Ie.ambientLightColor.value=q.state.ambient,Ie.lightProbe.value=q.state.probe,Ie.sunLights.value=q.state.sun,Ie.sunLightShadows.value=q.state.sunShadow,Ie.directionalLights.value=q.state.directional,Ie.directionalLightShadows.value=q.state.directionalShadow,Ie.spotLights.value=q.state.spot,Ie.spotLightShadows.value=q.state.spotShadow,Ie.rectAreaLights.value=q.state.rectArea,Ie.ltc_1.value=q.state.rectAreaLTC1,Ie.ltc_2.value=q.state.rectAreaLTC2,Ie.pointLights.value=q.state.point,Ie.pointLightShadows.value=q.state.pointShadow,Ie.hemisphereLights.value=q.state.hemi,Ie.sunShadowMatrix.value=q.state.sunShadowMatrix,Ie.sunShadowCascade.value=q.state.sunShadowCascade,Ie.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ie.spotLightMatrix.value=q.state.spotLightMatrix,Ie.spotLightMap.value=q.state.spotLightMap,Ie.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=tt,X.uniformsList=null,tt}function lh(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=gs.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function ch(y,U){let j=Z.get(y);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function Ef(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(U.matrixWorld);for(let j=0,X=y.length;j<X;j++){let q=y[j];if(q.texture!==null&&q.boundingBox.containsPoint(b))return q}return null}function Tf(y,U,j,X,q){U.isScene!==!0&&(U=We),te.resetTextureUnits();let Me=U.fog,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,Se=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:nt.workingColorSpace,Pe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,De=de.get(X.envMap||Re,Pe),Ke=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,tt=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!j.morphAttributes.position,at=!!j.morphAttributes.normal,vt=!!j.morphAttributes.color,gt=un;X.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(gt=R.toneMapping);let ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ut=ut!==void 0?ut.length:0,Ce=Z.get(X),Vt=E.state.lights;if(ie===!0&&(W===!0||y!==J)){let pt=y===J&&X.id===H;Ue.setState(X,y,pt)}let st=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Vt.state.version||Ce.outputColorSpace!==Se||q.isBatchedMesh&&Ce.batching===!1||!q.isBatchedMesh&&Ce.batching===!0||q.isBatchedMesh&&Ce.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ce.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ce.instancing===!1||!q.isInstancedMesh&&Ce.instancing===!0||q.isSkinnedMesh&&Ce.skinning===!1||!q.isSkinnedMesh&&Ce.skinning===!0||q.isInstancedMesh&&Ce.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ce.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ce.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ce.instancingMorph===!1&&q.morphTexture!==null||Ce.envMap!==De||X.fog===!0&&Ce.fog!==Me||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ue.numPlanes||Ce.numIntersection!==Ue.numIntersection)||Ce.vertexAlphas!==Ke||Ce.vertexTangents!==tt||Ce.morphTargets!==Ie||Ce.morphNormals!==at||Ce.morphColors!==vt||Ce.toneMapping!==gt||Ce.morphTargetsCount!==Ut||!!Ce.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Ce.__version=X.version);let en=Ce.currentProgram;st===!0&&(en=br(X,U,q),G&&X.isNodeMaterial&&G.onUpdateProgram(X,en,Ce));let _n=!1,Xn=!1,Ni=!1,ht=en.getUniforms(),yt=Ce.uniforms;if(g.useProgram(en.program)&&(_n=!0,Xn=!0,Ni=!0),X.id!==H&&(H=X.id,Xn=!0),Ce.needsLights){let pt=Ef(E.state.lightProbeGridArray,q);Ce.lightProbeGrid!==pt&&(Ce.lightProbeGrid=pt,Xn=!0)}if(_n||J!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",y.projectionMatrix),ht.setValue(D,"viewMatrix",y.matrixWorldInverse);let Yn=ht.map.cameraPosition;Yn!==void 0&&Yn.setValue(D,he.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ht.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),J!==y&&(J=y,Xn=!0,Ni=!0)}if(Ce.needsLights&&(Vt.state.sunShadowMap.length>0&&ht.setValue(D,"sunShadowMap",Vt.state.sunShadowMap,te),Vt.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",Vt.state.directionalShadowMap,te),Vt.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",Vt.state.spotShadowMap,te),Vt.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",Vt.state.pointShadowMap,te)),q.isSkinnedMesh){ht.setOptional(D,q,"bindMatrix"),ht.setOptional(D,q,"bindMatrixInverse");let pt=q.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ht.setValue(D,"boneTexture",pt.boneTexture,te))}q.isBatchedMesh&&(ht.setOptional(D,q,"batchingTexture"),ht.setValue(D,"batchingTexture",q._matricesTexture,te),ht.setOptional(D,q,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",q._indirectTexture,te),ht.setOptional(D,q,"batchingColorTexture"),q._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",q._colorsTexture,te));let qn=j.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&O.update(q,j,en),(Xn||Ce.receiveShadow!==q.receiveShadow)&&(Ce.receiveShadow=q.receiveShadow,ht.setValue(D,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(yt.envMapIntensity.value=U.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=p3()),Xn){if(ht.setValue(D,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&Af(yt,Ni),Me&&X.fog===!0&&Ne.refreshFogUniforms(yt,Me),Ne.refreshMaterialUniforms(yt,X,re,K,E.state.transmissionRenderTarget[y.id]),Ce.needsLights&&Ce.lightProbeGrid){let pt=Ce.lightProbeGrid;yt.probesSH.value=pt.texture,yt.probesMin.value.copy(pt.boundingBox.min),yt.probesMax.value.copy(pt.boundingBox.max),yt.probesResolution.value.copy(pt.resolution)}gs.upload(D,lh(Ce),yt,te)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(gs.upload(D,lh(Ce),yt,te),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ht.setValue(D,"center",q.center),ht.setValue(D,"modelViewMatrix",q.modelViewMatrix),ht.setValue(D,"normalMatrix",q.normalMatrix),ht.setValue(D,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let pt=X.uniformsGroups;for(let Yn=0,Ui=pt.length;Yn<Ui;Yn++){let uh=pt[Yn];ce.update(uh,en),ce.bind(uh,en)}}return en}function Af(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Cf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(y,U,j){let X=Z.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Z.get(y.texture).__webglTexture=U,Z.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:j,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let j=Z.get(y);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,j=0){Q=y,k=U,B=j;let X=null,q=!1,Me=!1;if(y){let Se=Z.get(y);if(Se.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,Se.__webglFramebuffer),se.copy(y.viewport),xe.copy(y.scissor),Ee=y.scissorTest,g.viewport(se),g.scissor(xe),g.setScissorTest(Ee),H=-1;return}else if(Se.__webglFramebuffer===void 0)te.setupRenderTarget(y);else if(Se.__hasExternalTextures)te.rebindTextures(y,Z.get(y.texture).__webglTexture,Z.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ke=y.depthTexture;if(Se.__boundDepthTexture!==Ke){if(Ke!==null&&Z.has(Ke)&&(y.width!==Ke.image.width||y.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(y)}}let Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Me=!0);let De=Z.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[U])?X=De[U][j]:X=De[U],q=!0):y.samples>0&&te.useMultisampledRTT(y)===!1?X=Z.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?X=De[j]:X=De,se.copy(y.viewport),xe.copy(y.scissor),Ee=y.scissorTest}else se.copy(we).multiplyScalar(re).floor(),xe.copy(He).multiplyScalar(re).floor(),Ee=L;if(j!==0&&(X=$),g.bindFramebuffer(D.FRAMEBUFFER,X)&&g.drawBuffers(y,X),g.viewport(se),g.scissor(xe),g.setScissorTest(Ee),q){let Se=Z.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,j)}else if(Me){let Se=U;for(let Pe=0;Pe<y.textures.length;Pe++){let De=Z.get(y.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,De.__webglTexture,j,Se)}}else if(y!==null&&j!==0){let Se=Z.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Se.__webglTexture,j)}H=-1};function hh(y){let U=Z.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=w.textureFormatReadable(y.format),U.__typeReadable=w.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,j,X,q,Me,Re,Se=0){if(!(y&&y.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){g.bindFramebuffer(D.FRAMEBUFFER,Pe);try{let De=y.textures[Se],Ke=De.format,tt=De.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se);let Ie=hh(De);if(Ie.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-X&&j>=0&&j<=y.height-q&&D.readPixels(U,j,X,q,_e.convert(Ke),_e.convert(tt),Me)}finally{let De=Q!==null?Z.get(Q).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(y,U,j,X,q,Me,Re,Se=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(U>=0&&U<=y.width-X&&j>=0&&j<=y.height-q){g.bindFramebuffer(D.FRAMEBUFFER,Pe);let De=y.textures[Se],Ke=De.format,tt=De.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se);let Ie=hh(De);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,at),D.bufferData(D.PIXEL_PACK_BUFFER,Me.byteLength,D.STREAM_READ),D.readPixels(U,j,X,q,_e.convert(Ke),_e.convert(tt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let vt=Q!==null?Z.get(Q).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,vt);let gt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Eu(D,gt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,at),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Me),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(at),D.deleteSync(gt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,j=0){let X=Math.pow(2,-j),q=Math.floor(y.image.width*X),Me=Math.floor(y.image.height*X),Re=U!==null?U.x:0,Se=U!==null?U.y:0;te.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,Re,Se,q,Me),g.unbindTexture()},this.copyTextureToTexture=function(y,U,j=null,X=null,q=0,Me=0){let Re,Se,Pe,De,Ke,tt,Ie,at,vt,gt=y.isCompressedTexture?y.mipmaps[Me]:y.image;if(j!==null)Re=j.max.x-j.min.x,Se=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,Ke=j.min.y,tt=j.isBox3?j.min.z:0;else{let yt=Math.pow(2,-q);Re=Math.floor(gt.width*yt),Se=Math.floor(gt.height*yt),y.isDataArrayTexture?Pe=gt.depth:y.isData3DTexture?Pe=Math.floor(gt.depth*yt):Pe=1,De=0,Ke=0,tt=0}X!==null?(Ie=X.x,at=X.y,vt=X.z):(Ie=0,at=0,vt=0);let ut=_e.convert(U.format),Ut=_e.convert(U.type),Ce;U.isData3DTexture?(te.setTexture3D(U,0),Ce=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(te.setTexture2DArray(U,0),Ce=D.TEXTURE_2D_ARRAY):(te.setTexture2D(U,0),Ce=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Vt=g.getParameter(D.UNPACK_ROW_LENGTH),st=g.getParameter(D.UNPACK_IMAGE_HEIGHT),en=g.getParameter(D.UNPACK_SKIP_PIXELS),_n=g.getParameter(D.UNPACK_SKIP_ROWS),Xn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,De),g.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),g.pixelStorei(D.UNPACK_SKIP_IMAGES,tt);let Ni=y.isDataArrayTexture||y.isData3DTexture,ht=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let yt=Z.get(y),qn=Z.get(U),pt=Z.get(yt.__renderTarget),Yn=Z.get(qn.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,pt.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Ui=0;Ui<Pe;Ui++)Ni&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Z.get(y).__webglTexture,q,tt+Ui),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Z.get(U).__webglTexture,Me,vt+Ui)),D.blitFramebuffer(De,Ke,Re,Se,Ie,at,Re,Se,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(q!==0||y.isRenderTargetTexture||Z.has(y)){let yt=Z.get(y),qn=Z.get(U);g.bindFramebuffer(D.READ_FRAMEBUFFER,F),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,P);for(let pt=0;pt<Pe;pt++)Ni?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.__webglTexture,q,tt+pt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yt.__webglTexture,q),ht?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qn.__webglTexture,Me,vt+pt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qn.__webglTexture,Me),q!==0?D.blitFramebuffer(De,Ke,Re,Se,Ie,at,Re,Se,D.COLOR_BUFFER_BIT,D.NEAREST):ht?D.copyTexSubImage3D(Ce,Me,Ie,at,vt+pt,De,Ke,Re,Se):D.copyTexSubImage2D(Ce,Me,Ie,at,De,Ke,Re,Se);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ht?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Ce,Me,Ie,at,vt,Re,Se,Pe,ut,Ut,gt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,Me,Ie,at,vt,Re,Se,Pe,ut,gt.data):D.texSubImage3D(Ce,Me,Ie,at,vt,Re,Se,Pe,ut,Ut,gt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Me,Ie,at,Re,Se,ut,Ut,gt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Me,Ie,at,gt.width,gt.height,ut,gt.data):D.texSubImage2D(D.TEXTURE_2D,Me,Ie,at,Re,Se,ut,Ut,gt);g.pixelStorei(D.UNPACK_ROW_LENGTH,Vt),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(D.UNPACK_SKIP_PIXELS,en),g.pixelStorei(D.UNPACK_SKIP_ROWS,_n),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Xn),Me===0&&U.generateMipmaps&&D.generateMipmap(Ce),g.unbindTexture()},this.initRenderTarget=function(y){Z.get(y).__webglFramebuffer===void 0&&te.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?te.setTextureCube(y,0):y.isData3DTexture?te.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?te.setTexture2DArray(y,0):te.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){k=0,B=0,Q=null,g.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var rd={type:"change"},mc={type:"start"},od={type:"end"},Eo=new On,ad=new Kt,m3=Math.cos(70*Hl.DEG2RAD),At=new z,Yt=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pc=1e-6,To=class extends Qs{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Jt,this._lastTargetPosition=new z,this._quat=new Jt().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ls,this._sphericalDelta=new ls,this._scale=1,this._panOffset=new z,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new z,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_3.bind(this),this._onPointerDown=g3.bind(this),this._onPointerUp=x3.bind(this),this._onContextMenu=E3.bind(this),this._onMouseWheel=b3.bind(this),this._onKeyDown=S3.bind(this),this._onTouchStart=M3.bind(this),this._onTouchMove=w3.bind(this),this._onMouseDown=y3.bind(this),this._onMouseMove=v3.bind(this),this._interceptControlDown=T3.bind(this),this._interceptControlUp=A3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ct.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rd),this.update(),this.state=ct.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Yt:i>Math.PI&&(i-=Yt),s<-Math.PI?s+=Yt:s>Math.PI&&(s-=Yt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=At.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new z(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Eo.origin.copy(this.object.position),Eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eo.direction))<m3?this.object.lookAt(this.target):(ad.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eo.intersectPlane(ad,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>pc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pc||this._lastTargetPosition.distanceToSquared(this.target)>pc?(this.dispatchEvent(rd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yt/60*this.autoRotateSpeed*e:Yt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;At.copy(s).sub(this.target);let r=At.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function g3(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _3(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function x3(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(od),this.state=ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function y3(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ct.DOLLY;break;case li.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ct.ROTATE}break;case li.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(mc)}function v3(n){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function b3(n){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(n.preventDefault(),this.dispatchEvent(mc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(od))}function S3(n){this.enabled!==!1&&this._handleKeyDown(n)}function M3(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ct.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ct.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(mc)}function w3(n){switch(this._trackPointer(n),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ct.NONE}}function E3(n){this.enabled!==!1&&n.preventDefault()}function T3(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function A3(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ld={type:"FeatureCollection",name:"ne_110m_land",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-66.290031,-81.000327,-59.572095,-79.628679],geometry:{type:"Polygon",coordinates:[[[-59.572095,-80.040179],[-59.865849,-80.549657],[-60.159656,-81.000327],[-62.255393,-80.863178],[-64.488125,-80.921934],[-65.741666,-80.588827],[-65.741666,-80.549657],[-66.290031,-80.255773],[-64.037688,-80.294944],[-61.883246,-80.39287],[-61.138976,-79.981371],[-60.610119,-79.628679],[-59.572095,-80.040179]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-163.712896,-79.634209,-159.208184,-78.223338],geometry:{type:"Polygon",coordinates:[[[-159.208184,-79.497059],[-161.127601,-79.634209],[-162.439847,-79.281465],[-163.027408,-78.928774],[-163.066604,-78.869966],[-163.712896,-78.595667],[-163.712896,-78.595667],[-163.105801,-78.223338],[-161.245113,-78.380176],[-160.246208,-78.693645],[-159.482405,-79.046338],[-159.208184,-79.497059]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:0},bbox:[-54.164259,-81.025442,-43.333267,-77.831476],geometry:{type:"Polygon",coordinates:[[[-45.154758,-78.04707],[-43.920828,-78.478103],[-43.48995,-79.08556],[-43.372438,-79.516645],[-43.333267,-80.026123],[-44.880537,-80.339644],[-46.506174,-80.594357],[-48.386421,-80.829485],[-50.482107,-81.025442],[-52.851988,-80.966685],[-54.164259,-80.633528],[-53.987991,-80.222028],[-51.853134,-79.94773],[-50.991326,-79.614623],[-50.364595,-79.183487],[-49.914131,-78.811209],[-49.306959,-78.458569],[-48.660616,-78.047018],[-48.660616,-78.047019],[-48.151396,-78.04707],[-46.662857,-77.831476],[-45.154758,-78.04707]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-122.621735,-74.08881,-118.724143,-73.324619],geometry:{type:"Polygon",coordinates:[[[-121.211511,-73.50099],[-119.918851,-73.657725],[-118.724143,-73.481353],[-119.292119,-73.834097],[-120.232217,-74.08881],[-121.62283,-74.010468],[-122.621735,-73.657778],[-122.621735,-73.657777],[-122.406245,-73.324619],[-121.211511,-73.50099]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-127.28313,-73.873268,-124.031882,-73.246226],geometry:{type:"Polygon",coordinates:[[[-125.559566,-73.481353],[-124.031882,-73.873268],[-124.619469,-73.834097],[-125.912181,-73.736118],[-127.28313,-73.461769],[-127.28313,-73.461768],[-126.558472,-73.246226],[-125.559566,-73.481353]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-102.330725,-72.521205,-96.20035,-71.717792],geometry:{type:"Polygon",coordinates:[[[-98.98155,-71.933334],[-97.884743,-72.070535],[-96.787937,-71.952971],[-96.20035,-72.521205],[-96.983765,-72.442864],[-98.198083,-72.482035],[-99.432013,-72.442864],[-100.783455,-72.50162],[-101.801868,-72.305663],[-102.330725,-71.894164],[-102.330725,-71.894164],[-101.703967,-71.717792],[-100.430919,-71.854993],[-98.98155,-71.933334]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-75.012625,-72.503842,-68.333834,-68.87874],geometry:{type:"Polygon",coordinates:[[[-68.451346,-70.955823],[-68.333834,-71.406493],[-68.510128,-71.798407],[-68.784297,-72.170736],[-69.959471,-72.307885],[-71.075889,-72.503842],[-72.388134,-72.484257],[-71.8985,-72.092343],[-73.073622,-72.229492],[-74.19004,-72.366693],[-74.953895,-72.072757],[-75.012625,-71.661258],[-73.915819,-71.269345],[-73.915819,-71.269344],[-73.230331,-71.15178],[-72.074717,-71.190951],[-71.780962,-70.681473],[-71.72218,-70.309196],[-71.741791,-69.505782],[-71.173815,-69.035475],[-70.253252,-68.87874],[-69.724447,-69.251017],[-69.489422,-69.623346],[-69.058518,-70.074016],[-68.725541,-70.505153],[-68.451346,-70.955823]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,-90,180,-63.27066],geometry:{type:"Polygon",coordinates:[[[-58.614143,-64.152467],[-59.045073,-64.36801],[-59.789342,-64.211223],[-60.611928,-64.309202],[-61.297416,-64.54433],[-62.0221,-64.799094],[-62.51176,-65.09303],[-62.648858,-65.484942],[-62.590128,-65.857219],[-62.120079,-66.190326],[-62.805567,-66.425505],[-63.74569,-66.503847],[-64.294106,-66.837004],[-64.881693,-67.150474],[-65.508425,-67.58161],[-65.665082,-67.953887],[-65.312545,-68.365335],[-64.783715,-68.678908],[-63.961103,-68.913984],[-63.1973,-69.227556],[-62.785955,-69.619419],[-62.570516,-69.991747],[-62.276736,-70.383661],[-61.806661,-70.716768],[-61.512906,-71.089045],[-61.375809,-72.010074],[-61.081977,-72.382351],[-61.003661,-72.774265],[-60.690269,-73.166179],[-60.827367,-73.695242],[-61.375809,-74.106742],[-61.96337,-74.439848],[-63.295201,-74.576997],[-63.74569,-74.92974],[-64.352836,-75.262847],[-65.860987,-75.635124],[-67.192818,-75.79191],[-68.446282,-76.007452],[-69.797724,-76.222995],[-70.600724,-76.634494],[-72.206776,-76.673665],[-73.969536,-76.634494],[-75.555977,-76.712887],[-77.24037,-76.712887],[-76.926979,-77.104802],[-75.399294,-77.28107],[-74.282876,-77.55542],[-73.656119,-77.908112],[-74.772536,-78.221633],[-76.4961,-78.123654],[-77.925858,-78.378419],[-77.984666,-78.789918],[-78.023785,-79.181833],[-76.848637,-79.514939],[-76.633224,-79.887216],[-75.360097,-80.259545],[-73.244852,-80.416331],[-71.442946,-80.69063],[-70.013163,-81.004151],[-68.191646,-81.317672],[-65.704279,-81.474458],[-63.25603,-81.748757],[-61.552026,-82.042692],[-59.691416,-82.37585],[-58.712121,-82.846106],[-58.222487,-83.218434],[-57.008117,-82.865691],[-55.362894,-82.571755],[-53.619771,-82.258235],[-51.543644,-82.003521],[-49.76135,-81.729171],[-47.273931,-81.709586],[-44.825708,-81.846735],[-42.808363,-82.081915],[-42.16202,-81.65083],[-40.771433,-81.356894],[-38.244818,-81.337309],[-36.26667,-81.121715],[-34.386397,-80.906172],[-32.310296,-80.769023],[-30.097098,-80.592651],[-28.549802,-80.337938],[-29.254901,-79.985195],[-29.685805,-79.632503],[-29.685805,-79.260226],[-31.624808,-79.299397],[-33.681324,-79.456132],[-35.639912,-79.456132],[-35.914107,-79.083855],[-35.77701,-78.339248],[-35.326546,-78.123654],[-33.896763,-77.888526],[-32.212369,-77.65345],[-30.998051,-77.359515],[-29.783732,-77.065579],[-28.882779,-76.673665],[-27.511752,-76.497345],[-26.160336,-76.360144],[-25.474822,-76.281803],[-23.927552,-76.24258],[-22.458598,-76.105431],[-21.224694,-75.909474],[-20.010375,-75.674346],[-18.913543,-75.439218],[-17.522982,-75.125698],[-16.641589,-74.79254],[-15.701491,-74.498604],[-15.40771,-74.106742],[-16.46532,-73.871614],[-16.112784,-73.460114],[-15.446855,-73.146542],[-14.408805,-72.950585],[-13.311973,-72.715457],[-12.293508,-72.401936],[-11.510067,-72.010074],[-11.020433,-71.539767],[-10.295774,-71.265416],[-9.101015,-71.324224],[-8.611381,-71.65733],[-7.416622,-71.696501],[-7.377451,-71.324224],[-6.868232,-70.93231],[-5.790985,-71.030289],[-5.536375,-71.402617],[-4.341667,-71.461373],[-3.048981,-71.285053],[-1.795492,-71.167438],[-.659489,-71.226246],[-.228637,-71.637745],[.868195,-71.304639],[1.886686,-71.128267],[3.022638,-70.991118],[4.139055,-70.853917],[5.157546,-70.618789],[6.273912,-70.462055],[7.13572,-70.246512],[7.742866,-69.893769],[8.48711,-70.148534],[9.525135,-70.011333],[10.249845,-70.48164],[10.817821,-70.834332],[11.953824,-70.638375],[12.404287,-70.246512],[13.422778,-69.972162],[14.734998,-70.030918],[15.126757,-70.403247],[15.949342,-70.030918],[17.026589,-69.913354],[18.201711,-69.874183],[19.259373,-69.893769],[20.375739,-70.011333],[21.452985,-70.07014],[21.923034,-70.403247],[22.569403,-70.697182],[23.666184,-70.520811],[24.841357,-70.48164],[25.977309,-70.48164],[27.093726,-70.462055],[28.09258,-70.324854],[29.150242,-70.20729],[30.031583,-69.93294],[30.971733,-69.75662],[31.990172,-69.658641],[32.754053,-69.384291],[33.302443,-68.835642],[33.870419,-68.502588],[34.908495,-68.659271],[35.300202,-69.012014],[36.16201,-69.247142],[37.200035,-69.168748],[37.905108,-69.52144],[38.649404,-69.776205],[39.667894,-69.541077],[40.020431,-69.109941],[40.921358,-68.933621],[41.959434,-68.600514],[42.938702,-68.463313],[44.113876,-68.267408],[44.897291,-68.051866],[45.719928,-67.816738],[46.503343,-67.601196],[47.44344,-67.718759],[48.344419,-67.366068],[48.990736,-67.091718],[49.930885,-67.111303],[50.753471,-66.876175],[50.949325,-66.523484],[51.791547,-66.249133],[52.614133,-66.053176],[53.613038,-65.89639],[54.53355,-65.818049],[55.414943,-65.876805],[56.355041,-65.974783],[57.158093,-66.249133],[57.255968,-66.680218],[58.137361,-67.013324],[58.744508,-67.287675],[59.939318,-67.405239],[60.605221,-67.679589],[61.427806,-67.953887],[62.387489,-68.012695],[63.19049,-67.816738],[64.052349,-67.405239],[64.992447,-67.620729],[65.971715,-67.738345],[66.911864,-67.855909],[67.891133,-67.934302],[68.890038,-67.934302],[69.712624,-68.972791],[69.673453,-69.227556],[69.555941,-69.678226],[68.596258,-69.93294],[67.81274,-70.305268],[67.949889,-70.697182],[69.066307,-70.677545],[68.929157,-71.069459],[68.419989,-71.441788],[67.949889,-71.853287],[68.71377,-72.166808],[69.869307,-72.264787],[71.024895,-72.088415],[71.573285,-71.696501],[71.906288,-71.324224],[72.454627,-71.010703],[73.08141,-70.716768],[73.33602,-70.364024],[73.864877,-69.874183],[74.491557,-69.776205],[75.62756,-69.737034],[76.626465,-69.619419],[77.644904,-69.462684],[78.134539,-69.07077],[78.428371,-68.698441],[79.113859,-68.326216],[80.093127,-68.071503],[80.93535,-67.875546],[81.483792,-67.542388],[82.051767,-67.366068],[82.776426,-67.209282],[83.775331,-67.30726],[84.676206,-67.209282],[85.655527,-67.091718],[86.752359,-67.150474],[87.477017,-66.876175],[87.986289,-66.209911],[88.358411,-66.484261],[88.828408,-66.954568],[89.67063,-67.150474],[90.630365,-67.228867],[91.5901,-67.111303],[92.608539,-67.189696],[93.548637,-67.209282],[94.17542,-67.111303],[95.017591,-67.170111],[95.781472,-67.385653],[96.682399,-67.248504],[97.759646,-67.248504],[98.68021,-67.111303],[99.718182,-67.248504],[100.384188,-66.915346],[100.893356,-66.58224],[101.578896,-66.30789],[102.832411,-65.563284],[103.478676,-65.700485],[104.242557,-65.974783],[104.90846,-66.327527],[106.181561,-66.934931],[107.160881,-66.954568],[108.081393,-66.954568],[109.15864,-66.837004],[110.235835,-66.699804],[111.058472,-66.425505],[111.74396,-66.13157],[112.860378,-66.092347],[113.604673,-65.876805],[114.388088,-66.072762],[114.897308,-66.386283],[115.602381,-66.699804],[116.699161,-66.660633],[117.384701,-66.915346],[118.57946,-67.170111],[119.832924,-67.268089],[120.871,-67.189696],[121.654415,-66.876175],[122.320369,-66.562654],[123.221296,-66.484261],[124.122274,-66.621462],[125.160247,-66.719389],[126.100396,-66.562654],[127.001427,-66.562654],[127.882768,-66.660633],[128.80328,-66.758611],[129.704259,-66.58224],[130.781454,-66.425505],[131.799945,-66.386283],[132.935896,-66.386283],[133.85646,-66.288304],[134.757387,-66.209963],[135.031582,-65.72007],[135.070753,-65.308571],[135.697485,-65.582869],[135.873805,-66.033591],[136.206705,-66.44509],[136.618049,-66.778197],[137.460271,-66.954568],[138.596223,-66.895761],[139.908442,-66.876175],[140.809421,-66.817367],[142.121692,-66.817367],[143.061842,-66.797782],[144.374061,-66.837004],[145.490427,-66.915346],[146.195552,-67.228867],[145.999699,-67.601196],[146.646067,-67.895131],[147.723263,-68.130259],[148.839629,-68.385024],[150.132314,-68.561292],[151.483705,-68.71813],[152.502247,-68.874813],[153.638199,-68.894502],[154.284567,-68.561292],[155.165857,-68.835642],[155.92979,-69.149215],[156.811132,-69.384291],[158.025528,-69.482269],[159.181013,-69.599833],[159.670699,-69.991747],[160.80665,-70.226875],[161.570479,-70.579618],[162.686897,-70.736353],[163.842434,-70.716768],[164.919681,-70.775524],[166.11444,-70.755938],[167.309095,-70.834332],[168.425616,-70.971481],[169.463589,-71.20666],[170.501665,-71.402617],[171.20679,-71.696501],[171.089227,-72.088415],[170.560422,-72.441159],[170.109958,-72.891829],[169.75737,-73.24452],[169.287321,-73.65602],[167.975101,-73.812806],[167.387489,-74.165498],[166.094803,-74.38104],[165.644391,-74.772954],[164.958851,-75.145283],[164.234193,-75.458804],[163.822797,-75.870303],[163.568239,-76.24258],[163.47026,-76.693302],[163.489897,-77.065579],[164.057873,-77.457442],[164.273363,-77.82977],[164.743464,-78.182514],[166.604126,-78.319611],[166.995781,-78.750748],[165.193876,-78.907483],[163.666217,-79.123025],[161.766385,-79.162248],[160.924162,-79.730482],[160.747894,-80.200737],[160.316964,-80.573066],[159.788211,-80.945395],[161.120016,-81.278501],[161.629287,-81.690001],[162.490992,-82.062278],[163.705336,-82.395435],[165.095949,-82.708956],[166.604126,-83.022477],[168.895665,-83.335998],[169.404782,-83.825891],[172.283934,-84.041433],[172.477049,-84.117914],[173.224083,-84.41371],[175.985672,-84.158997],[178.277212,-84.472518],[180,-84.71338],[180,-90],[-180,-90],[-180,-84.71338],[-179.942499,-84.721443],[-179.058677,-84.139412],[-177.256772,-84.452933],[-177.140807,-84.417941],[-176.861993,-84.333812],[-176.523952,-84.231811],[-176.230303,-84.143203],[-176.084673,-84.099259],[-175.934101,-84.101591],[-175.829882,-84.117914],[-174.382503,-84.534323],[-173.116559,-84.117914],[-172.889106,-84.061019],[-169.951223,-83.884647],[-168.999989,-84.117914],[-168.530199,-84.23739],[-167.022099,-84.570497],[-164.182144,-84.82521],[-161.929775,-85.138731],[-158.07138,-85.37391],[-155.192253,-85.09956],[-150.942099,-85.295517],[-148.533073,-85.609038],[-145.888918,-85.315102],[-143.107718,-85.040752],[-142.892279,-84.570497],[-146.829068,-84.531274],[-150.060732,-84.296146],[-150.902928,-83.904232],[-153.586201,-83.68869],[-153.409907,-83.23802],[-153.037759,-82.82652],[-152.665637,-82.454192],[-152.861517,-82.042692],[-154.526299,-81.768394],[-155.29018,-81.41565],[-156.83745,-81.102129],[-154.408787,-81.160937],[-152.097662,-81.004151],[-150.648293,-81.337309],[-148.865998,-81.043373],[-147.22075,-80.671045],[-146.417749,-80.337938],[-146.770286,-79.926439],[-148.062947,-79.652089],[-149.531901,-79.358205],[-151.588416,-79.299397],[-153.390322,-79.162248],[-155.329376,-79.064269],[-155.975668,-78.69194],[-157.268302,-78.378419],[-158.051768,-78.025676],[-158.365134,-76.889207],[-157.875474,-76.987238],[-156.974573,-77.300759],[-155.329376,-77.202728],[-153.742832,-77.065579],[-152.920247,-77.496664],[-151.33378,-77.398737],[-150.00195,-77.183143],[-148.748486,-76.908845],[-147.612483,-76.575738],[-146.104409,-76.47776],[-146.143528,-76.105431],[-146.496091,-75.733154],[-146.20231,-75.380411],[-144.909624,-75.204039],[-144.322037,-75.537197],[-142.794353,-75.34124],[-141.638764,-75.086475],[-140.209007,-75.06689],[-138.85759,-74.968911],[-137.5062,-74.733783],[-136.428901,-74.518241],[-135.214583,-74.302699],[-134.431194,-74.361455],[-133.745654,-74.439848],[-132.257168,-74.302699],[-130.925311,-74.479019],[-129.554284,-74.459433],[-128.242038,-74.322284],[-126.890622,-74.420263],[-125.402082,-74.518241],[-124.011496,-74.479019],[-122.562152,-74.498604],[-121.073613,-74.518241],[-119.70256,-74.479019],[-118.684145,-74.185083],[-117.469801,-74.028348],[-116.216312,-74.243891],[-115.021552,-74.067519],[-113.944331,-73.714828],[-113.297988,-74.028348],[-112.945452,-74.38104],[-112.299083,-74.714198],[-111.261059,-74.420263],[-110.066325,-74.79254],[-108.714909,-74.910103],[-107.559346,-75.184454],[-106.149148,-75.125698],[-104.876074,-74.949326],[-103.367949,-74.988497],[-102.016507,-75.125698],[-100.645531,-75.302018],[-100.1167,-74.870933],[-100.763043,-74.537826],[-101.252703,-74.185083],[-102.545337,-74.106742],[-103.113313,-73.734413],[-103.328752,-73.362084],[-103.681289,-72.61753],[-102.917485,-72.754679],[-101.60524,-72.813436],[-100.312528,-72.754679],[-99.13738,-72.911414],[-98.118889,-73.20535],[-97.688037,-73.558041],[-96.336595,-73.616849],[-95.043961,-73.4797],[-93.672907,-73.283743],[-92.439003,-73.166179],[-91.420564,-73.401307],[-90.088733,-73.322914],[-89.226951,-72.558722],[-88.423951,-73.009393],[-87.268337,-73.185764],[-86.014822,-73.087786],[-85.192236,-73.4797],[-83.879991,-73.518871],[-82.665646,-73.636434],[-81.470913,-73.851977],[-80.687447,-73.4797],[-80.295791,-73.126956],[-79.296886,-73.518871],[-77.925858,-73.420892],[-76.907367,-73.636434],[-76.221879,-73.969541],[-74.890049,-73.871614],[-73.852024,-73.65602],[-72.833533,-73.401307],[-71.619215,-73.264157],[-70.209042,-73.146542],[-68.935916,-73.009393],[-67.956622,-72.79385],[-67.369061,-72.480329],[-67.134036,-72.049244],[-67.251548,-71.637745],[-67.56494,-71.245831],[-67.917477,-70.853917],[-68.230843,-70.462055],[-68.485452,-70.109311],[-68.544209,-69.717397],[-68.446282,-69.325535],[-67.976233,-68.953206],[-67.5845,-68.541707],[-67.427843,-68.149844],[-67.62367,-67.718759],[-67.741183,-67.326845],[-67.251548,-66.876175],[-66.703184,-66.58224],[-66.056815,-66.209963],[-65.371327,-65.89639],[-64.568276,-65.602506],[-64.176542,-65.171423],[-63.628152,-64.897073],[-63.001394,-64.642308],[-62.041686,-64.583552],[-61.414928,-64.270031],[-60.709855,-64.074074],[-59.887269,-63.95651],[-59.162585,-63.701745],[-58.594557,-63.388224],[-57.811143,-63.27066],[-57.223582,-63.525425],[-57.59573,-63.858532],[-58.614143,-64.152467]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-74.66253,-55.61183,-65.05,-52.5183],geometry:{type:"Polygon",coordinates:[[[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2],[-66.45,-55.25],[-66.95992,-54.89681],[-67.29103,-55.30124],[-68.14863,-55.61183],[-69.2321,-55.49906],[-69.95809,-55.19843],[-71.00568,-55.05383],[-72.2639,-54.49514],[-73.2852,-53.95752],[-74.66253,-52.83749],[-73.8381,-53.04743],[-72.43418,-53.7154],[-71.10773,-54.07433],[-70.59178,-53.61583],[-70.26748,-52.93123],[-69.34565,-52.5183],[-68.63411,-52.63625],[-68.63401,-52.63637],[-68.25,-53.1],[-67.75,-53.85]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-61.2,-52.3,-57.75,-51.1],geometry:{type:"Polygon",coordinates:[[[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[68.72,-49.775,70.56,-48.625],geometry:{type:"Polygon",coordinates:[[[70.28,-49.71],[68.745,-49.775],[68.72,-49.2425],[68.8675,-48.83],[68.935,-48.625],[69.58,-48.94],[70.525,-49.065],[70.56,-49.255],[70.28,-49.71]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[144.718071,-43.634597,148.359865,-40.703975],geometry:{type:"Polygon",coordinates:[[[145.397978,-40.792549],[146.364121,-41.137695],[146.908584,-41.000546],[147.689259,-40.808258],[148.289068,-40.875438],[148.359865,-42.062445],[148.017301,-42.407024],[147.914052,-43.211522],[147.564564,-42.937689],[146.870343,-43.634597],[146.663327,-43.580854],[146.048378,-43.549745],[145.43193,-42.693776],[145.29509,-42.03361],[144.718071,-41.162552],[144.743755,-40.703975],[145.397978,-40.792549]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[166.509144,-46.641235,174.248517,-40.493962],geometry:{type:"Polygon",coordinates:[[[173.020375,-40.919052],[173.247234,-41.331999],[173.958405,-40.926701],[174.247587,-41.349155],[174.248517,-41.770008],[173.876447,-42.233184],[173.22274,-42.970038],[172.711246,-43.372288],[173.080113,-43.853344],[172.308584,-43.865694],[171.452925,-44.242519],[171.185138,-44.897104],[170.616697,-45.908929],[169.831422,-46.355775],[169.332331,-46.641235],[168.411354,-46.619945],[167.763745,-46.290197],[166.676886,-46.219917],[166.509144,-45.852705],[167.046424,-45.110941],[168.303763,-44.123973],[168.949409,-43.935819],[169.667815,-43.555326],[170.52492,-43.031688],[171.12509,-42.512754],[171.569714,-41.767424],[171.948709,-41.514417],[172.097227,-40.956104],[172.79858,-40.493962],[173.020375,-40.919052]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[172.636005,-41.688308,178.517094,-34.450662],geometry:{type:"Polygon",coordinates:[[[174.612009,-36.156397],[175.336616,-37.209098],[175.357596,-36.526194],[175.808887,-36.798942],[175.95849,-37.555382],[176.763195,-37.881253],[177.438813,-37.961248],[178.010354,-37.579825],[178.517094,-37.695373],[178.274731,-38.582813],[177.97046,-39.166343],[177.206993,-39.145776],[176.939981,-39.449736],[177.032946,-39.879943],[176.885824,-40.065978],[176.508017,-40.604808],[176.01244,-41.289624],[175.239567,-41.688308],[175.067898,-41.425895],[174.650973,-41.281821],[175.22763,-40.459236],[174.900157,-39.908933],[173.824047,-39.508854],[173.852262,-39.146602],[174.574802,-38.797683],[174.743474,-38.027808],[174.697017,-37.381129],[174.292028,-36.711092],[174.319004,-36.534824],[173.840997,-36.121981],[173.054171,-35.237125],[172.636005,-34.529107],[173.007042,-34.450662],[173.551298,-35.006183],[174.32939,-35.265496],[174.612009,-36.156397]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[164.029606,-22.399976,167.120011,-20.105646],geometry:{type:"Polygon",coordinates:[[[167.120011,-22.159991],[166.740035,-22.399976],[166.189732,-22.129708],[165.474375,-21.679607],[164.829815,-21.14982],[164.167995,-20.444747],[164.029606,-20.105646],[164.459967,-20.120012],[165.020036,-20.459991],[165.460009,-20.800022],[165.77999,-21.080005],[166.599991,-21.700019],[167.120011,-22.159991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[177.28504,-18.28799,178.71806,-17.33992],geometry:{type:"Polygon",coordinates:[[[178.3736,-17.33992],[178.71806,-17.62846],[178.55271,-18.15059],[177.93266,-18.28799],[177.38146,-18.16432],[177.28504,-17.72465],[177.67087,-17.38114],[178.12557,-17.50481],[178.3736,-17.33992]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[178.596839,-17.012042,180,-16.067133],geometry:{type:"Polygon",coordinates:[[[179.364143,-16.801354],[178.725059,-17.012042],[178.596839,-16.63915],[179.096609,-16.433984],[179.413509,-16.379054],[180,-16.067133],[180,-16.555217],[179.364143,-16.801354]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-180,-16.555217,-179.79332,-16.020882],geometry:{type:"Polygon",coordinates:[[[-179.917369,-16.501783],[-180,-16.555217],[-180,-16.067133],[-179.79332,-16.020882],[-179.917369,-16.501783]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[167.180008,-16.59785,167.844877,-15.891846],geometry:{type:"Polygon",coordinates:[[[167.844877,-16.466333],[167.515181,-16.59785],[167.180008,-16.159995],[167.216801,-15.891846],[167.844877,-16.466333]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[166.629137,-15.740021,167.270028,-14.626497],geometry:{type:"Polygon",coordinates:[[[167.107712,-14.93392],[167.270028,-15.740021],[167.001207,-15.614602],[166.793158,-15.668811],[166.649859,-15.392704],[166.629137,-14.626497],[167.107712,-14.93392]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[43.254187,-25.601434,50.476537,-12.040557],geometry:{type:"Polygon",coordinates:[[[50.056511,-13.555761],[50.217431,-14.758789],[50.476537,-15.226512],[50.377111,-15.706069],[50.200275,-16.000263],[49.860606,-15.414253],[49.672607,-15.710204],[49.863344,-16.451037],[49.774564,-16.875042],[49.498612,-17.106036],[49.435619,-17.953064],[49.041792,-19.118781],[48.548541,-20.496888],[47.930749,-22.391501],[47.547723,-23.781959],[47.095761,-24.94163],[46.282478,-25.178463],[45.409508,-25.601434],[44.833574,-25.346101],[44.03972,-24.988345],[43.763768,-24.460677],[43.697778,-23.574116],[43.345654,-22.776904],[43.254187,-22.057413],[43.433298,-21.336475],[43.893683,-21.163307],[43.89637,-20.830459],[44.374325,-20.072366],[44.464397,-19.435454],[44.232422,-18.961995],[44.042976,-18.331387],[43.963084,-17.409945],[44.312469,-16.850496],[44.446517,-16.216219],[44.944937,-16.179374],[45.502732,-15.974373],[45.872994,-15.793454],[46.312243,-15.780018],[46.882183,-15.210182],[47.70513,-14.594303],[48.005215,-14.091233],[47.869047,-13.663869],[48.293828,-13.784068],[48.84506,-13.089175],[48.863509,-12.487868],[49.194651,-12.040557],[49.543519,-12.469833],[49.808981,-12.895285],[50.056511,-13.555761]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[113.338953,-39.035757,153.569469,-10.668186],geometry:{type:"Polygon",coordinates:[[[143.561811,-13.763656],[143.922099,-14.548311],[144.563714,-14.171176],[144.894908,-14.594458],[145.374724,-14.984976],[145.271991,-15.428205],[145.48526,-16.285672],[145.637033,-16.784918],[145.888904,-16.906926],[146.160309,-17.761655],[146.063674,-18.280073],[146.387478,-18.958274],[147.471082,-19.480723],[148.177602,-19.955939],[148.848414,-20.39121],[148.717465,-20.633469],[149.28942,-21.260511],[149.678337,-22.342512],[150.077382,-22.122784],[150.482939,-22.556142],[150.727265,-22.402405],[150.899554,-23.462237],[151.609175,-24.076256],[152.07354,-24.457887],[152.855197,-25.267501],[153.136162,-26.071173],[153.161949,-26.641319],[153.092909,-27.2603],[153.569469,-28.110067],[153.512108,-28.995077],[153.339095,-29.458202],[153.069241,-30.35024],[153.089602,-30.923642],[152.891578,-31.640446],[152.450002,-32.550003],[151.709117,-33.041342],[151.343972,-33.816023],[151.010555,-34.31036],[150.714139,-35.17346],[150.32822,-35.671879],[150.075212,-36.420206],[149.946124,-37.109052],[149.997284,-37.425261],[149.423882,-37.772681],[148.304622,-37.809061],[147.381733,-38.219217],[146.922123,-38.606532],[146.317922,-39.035757],[145.489652,-38.593768],[144.876976,-38.417448],[145.032212,-37.896188],[144.485682,-38.085324],[143.609974,-38.809465],[142.745427,-38.538268],[142.17833,-38.380034],[141.606582,-38.308514],[140.638579,-38.019333],[139.992158,-37.402936],[139.806588,-36.643603],[139.574148,-36.138362],[139.082808,-35.732754],[138.120748,-35.612296],[138.449462,-35.127261],[138.207564,-34.384723],[137.71917,-35.076825],[136.829406,-35.260535],[137.352371,-34.707339],[137.503886,-34.130268],[137.890116,-33.640479],[137.810328,-32.900007],[136.996837,-33.752771],[136.372069,-34.094766],[135.989043,-34.890118],[135.208213,-34.47867],[135.239218,-33.947953],[134.613417,-33.222778],[134.085904,-32.848072],[134.273903,-32.617234],[132.990777,-32.011224],[132.288081,-31.982647],[131.326331,-31.495803],[129.535794,-31.590423],[128.240938,-31.948489],[127.102867,-32.282267],[126.148714,-32.215966],[125.088623,-32.728751],[124.221648,-32.959487],[124.028947,-33.483847],[123.659667,-33.890179],[122.811036,-33.914467],[122.183064,-34.003402],[121.299191,-33.821036],[120.580268,-33.930177],[119.893695,-33.976065],[119.298899,-34.509366],[119.007341,-34.464149],[118.505718,-34.746819],[118.024972,-35.064733],[117.295507,-35.025459],[116.625109,-35.025097],[115.564347,-34.386428],[115.026809,-34.196517],[115.048616,-33.623425],[115.545123,-33.487258],[115.714674,-33.259572],[115.679379,-32.900369],[115.801645,-32.205062],[115.689611,-31.612437],[115.160909,-30.601594],[114.997043,-30.030725],[115.040038,-29.461095],[114.641974,-28.810231],[114.616498,-28.516399],[114.173579,-28.118077],[114.048884,-27.334765],[113.477498,-26.543134],[113.338953,-26.116545],[113.778358,-26.549025],[113.440962,-25.621278],[113.936901,-25.911235],[114.232852,-26.298446],[114.216161,-25.786281],[113.721255,-24.998939],[113.625344,-24.683971],[113.393523,-24.384764],[113.502044,-23.80635],[113.706993,-23.560215],[113.843418,-23.059987],[113.736552,-22.475475],[114.149756,-21.755881],[114.225307,-22.517488],[114.647762,-21.82952],[115.460167,-21.495173],[115.947373,-21.068688],[116.711615,-20.701682],[117.166316,-20.623599],[117.441545,-20.746899],[118.229559,-20.374208],[118.836085,-20.263311],[118.987807,-20.044203],[119.252494,-19.952942],[119.805225,-19.976506],[120.85622,-19.683708],[121.399856,-19.239756],[121.655138,-18.705318],[122.241665,-18.197649],[122.286624,-17.798603],[122.312772,-17.254967],[123.012574,-16.4052],[123.433789,-17.268558],[123.859345,-17.069035],[123.503242,-16.596506],[123.817073,-16.111316],[124.258287,-16.327944],[124.379726,-15.56706],[124.926153,-15.0751],[125.167275,-14.680396],[125.670087,-14.51007],[125.685796,-14.230656],[126.125149,-14.347341],[126.142823,-14.095987],[126.582589,-13.952791],[127.065867,-13.817968],[127.804633,-14.276906],[128.35969,-14.86917],[128.985543,-14.875991],[129.621473,-14.969784],[129.4096,-14.42067],[129.888641,-13.618703],[130.339466,-13.357376],[130.183506,-13.10752],[130.617795,-12.536392],[131.223495,-12.183649],[131.735091,-12.302453],[132.575298,-12.114041],[132.557212,-11.603012],[131.824698,-11.273782],[132.357224,-11.128519],[133.019561,-11.376411],[133.550846,-11.786515],[134.393068,-12.042365],[134.678632,-11.941183],[135.298491,-12.248606],[135.882693,-11.962267],[136.258381,-12.049342],[136.492475,-11.857209],[136.95162,-12.351959],[136.685125,-12.887223],[136.305407,-13.29123],[135.961758,-13.324509],[136.077617,-13.724278],[135.783836,-14.223989],[135.428664,-14.715432],[135.500184,-14.997741],[136.295175,-15.550265],[137.06536,-15.870762],[137.580471,-16.215082],[138.303217,-16.807604],[138.585164,-16.806622],[139.108543,-17.062679],[139.260575,-17.371601],[140.215245,-17.710805],[140.875463,-17.369069],[141.07111,-16.832047],[141.274095,-16.38887],[141.398222,-15.840532],[141.702183,-15.044921],[141.56338,-14.561333],[141.63552,-14.270395],[141.519869,-13.698078],[141.65092,-12.944688],[141.842691,-12.741548],[141.68699,-12.407614],[141.928629,-11.877466],[142.118488,-11.328042],[142.143706,-11.042737],[142.51526,-10.668186],[142.79731,-11.157355],[142.866763,-11.784707],[143.115947,-11.90563],[143.158632,-12.325656],[143.522124,-12.834358],[143.597158,-13.400422],[143.561811,-13.763656]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[161.319797,-10.826367,162.398646,-10.204751],geometry:{type:"Polygon",coordinates:[[[162.119025,-10.482719],[162.398646,-10.826367],[161.700032,-10.820011],[161.319797,-10.204751],[161.917383,-10.446701],[162.119025,-10.482719]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[118.967808,-10.25865,120.775502,-9.36134],geometry:{type:"Polygon",coordinates:[[[120.715609,-10.239581],[120.295014,-10.25865],[118.967808,-9.557969],[119.90031,-9.36134],[120.425756,-9.665921],[120.775502,-9.969675],[120.715609,-10.239581]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[159.640003,-9.89521,160.852229,-9.24295],geometry:{type:"Polygon",coordinates:[[[160.852229,-9.872937],[160.462588,-9.89521],[159.849447,-9.794027],[159.640003,-9.63998],[159.702945,-9.24295],[160.362956,-9.400304],[160.688518,-9.610162],[160.852229,-9.872937]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[160.579997,-9.784312,161.679982,-8.320009],geometry:{type:"Polygon",coordinates:[[[161.679982,-9.599982],[161.529397,-9.784312],[160.788253,-8.917543],[160.579997,-8.320009],[160.920028,-8.320009],[161.280006,-9.120011],[161.679982,-9.599982]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[123.459989,-10.359987,127.335928,-8.273345],geometry:{type:"Polygon",coordinates:[[[124.43595,-10.140001],[123.579982,-10.359987],[123.459989,-10.239995],[123.550009,-9.900016],[123.980009,-9.290027],[124.968682,-8.89279],[125.086246,-8.656887],[125.947072,-8.432095],[126.644704,-8.398247],[126.957243,-8.273345],[127.335928,-8.397317],[126.967992,-8.668256],[125.925885,-9.106007],[125.08852,-9.393173],[124.43595,-10.140001]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[116.740141,-9.040895,119.126507,-8.095681],geometry:{type:"Polygon",coordinates:[[[117.900018,-8.095681],[118.260616,-8.362383],[118.87846,-8.280683],[119.126507,-8.705825],[117.970402,-8.906639],[117.277731,-9.040895],[116.740141,-9.032937],[117.083737,-8.457158],[117.632024,-8.449303],[117.900018,-8.095681]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[119.920929,-8.933666,122.903537,-8.094234],geometry:{type:"Polygon",coordinates:[[[122.903537,-8.094234],[122.756983,-8.649808],[121.254491,-8.933666],[119.924391,-8.810418],[119.920929,-8.444859],[120.715092,-8.236965],[121.341669,-8.53674],[122.007365,-8.46062],[122.903537,-8.094234]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[158.21115,-8.53829,159.917402,-7.320018],geometry:{type:"Polygon",coordinates:[[[159.875027,-8.33732],[159.917402,-8.53829],[159.133677,-8.114181],[158.586114,-7.754824],[158.21115,-7.421872],[158.359978,-7.320018],[158.820001,-7.560003],[159.640003,-8.020027],[159.875027,-8.33732]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[156.491358,-7.404767,157.538426,-6.599338],geometry:{type:"Polygon",coordinates:[[[157.538426,-7.34782],[157.33942,-7.404767],[156.90203,-7.176874],[156.491358,-6.765943],[156.542828,-6.599338],[157.14,-7.021638],[157.538426,-7.34782]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[105.365486,-8.751817,115.705527,-5.895919],geometry:{type:"Polygon",coordinates:[[[108.623479,-6.777674],[110.539227,-6.877358],[110.759576,-6.465186],[112.614811,-6.946036],[112.978768,-7.594213],[114.478935,-7.776528],[115.705527,-8.370807],[114.564511,-8.751817],[113.464734,-8.348947],[112.559672,-8.376181],[111.522061,-8.302129],[110.58615,-8.122605],[109.427667,-7.740664],[108.693655,-7.6416],[108.277763,-7.766657],[106.454102,-7.3549],[106.280624,-6.9249],[105.365486,-6.851416],[106.051646,-5.895919],[107.265009,-5.954985],[108.072091,-6.345762],[108.486846,-6.421985],[108.623479,-6.777674]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[134.112776,-6.895238,134.727002,-5.445042],geometry:{type:"Polygon",coordinates:[[[134.724624,-6.214401],[134.210134,-6.895238],[134.112776,-6.142467],[134.290336,-5.783058],[134.499625,-5.445042],[134.727002,-5.737582],[134.724624,-6.214401]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[154.514114,-6.919991,156.019965,-5.042431],geometry:{type:"Polygon",coordinates:[[[155.880026,-6.819997],[155.599991,-6.919991],[155.166994,-6.535931],[154.729192,-5.900828],[154.514114,-5.139118],[154.652504,-5.042431],[154.759991,-5.339984],[155.062918,-5.566792],[155.547746,-6.200655],[156.019965,-6.540014],[155.880026,-6.819997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[148.318937,-6.317754,152.338743,-4.14879],geometry:{type:"Polygon",coordinates:[[[151.982796,-5.478063],[151.459107,-5.56028],[151.30139,-5.840728],[150.754447,-6.083763],[150.241197,-6.317754],[149.709963,-6.316513],[148.890065,-6.02604],[148.318937,-5.747142],[148.401826,-5.437756],[149.298412,-5.583742],[149.845562,-5.505503],[149.99625,-5.026101],[150.139756,-5.001348],[150.236908,-5.53222],[150.807467,-5.455842],[151.089672,-5.113693],[151.647881,-4.757074],[151.537862,-4.167807],[152.136792,-4.14879],[152.338743,-4.312966],[152.318693,-4.867661],[151.982796,-5.478063]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[125.989034,-3.790983,127.249215,-3.129318],geometry:{type:"Polygon",coordinates:[[[127.249215,-3.459065],[126.874923,-3.790983],[126.183802,-3.607376],[125.989034,-3.177273],[127.000651,-3.129318],[127.249215,-3.459065]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[127.898891,-3.858472,130.834836,-2.802154],geometry:{type:"Polygon",coordinates:[[[130.471344,-3.093764],[130.834836,-3.858472],[129.990547,-3.446301],[129.155249,-3.362637],[128.590684,-3.428679],[127.898891,-3.393436],[128.135879,-2.84365],[129.370998,-2.802154],[130.471344,-3.093764]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[150.66205,-4.766427,153.140038,-2.500002],geometry:{type:"Polygon",coordinates:[[[153.140038,-4.499983],[152.827292,-4.766427],[152.638673,-4.176127],[152.406026,-3.789743],[151.953237,-3.462062],[151.384279,-3.035422],[150.66205,-2.741486],[150.939965,-2.500002],[151.479984,-2.779985],[151.820015,-2.999972],[152.239989,-3.240009],[152.640017,-3.659983],[153.019994,-3.980015],[153.140038,-4.499983]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[130.519558,-10.652476,150.801628,-.369538],geometry:{type:"Polygon",coordinates:[[[134.143368,-1.151867],[134.422627,-2.769185],[135.457603,-3.367753],[136.293314,-2.307042],[137.440738,-1.703513],[138.329727,-1.702686],[139.184921,-2.051296],[139.926684,-2.409052],[141.00021,-2.600151],[142.735247,-3.289153],[144.583971,-3.861418],[145.27318,-4.373738],[145.829786,-4.876498],[145.981922,-5.465609],[147.648073,-6.083659],[147.891108,-6.614015],[146.970905,-6.721657],[147.191874,-7.388024],[148.084636,-8.044108],[148.734105,-9.104664],[149.306835,-9.071436],[149.266631,-9.514406],[150.038728,-9.684318],[149.738798,-9.872937],[150.801628,-10.293687],[150.690575,-10.582713],[150.028393,-10.652476],[149.78231,-10.393267],[148.923138,-10.280923],[147.913018,-10.130441],[147.135443,-9.492444],[146.567881,-8.942555],[146.048481,-8.067414],[144.744168,-7.630128],[143.897088,-7.91533],[143.286376,-8.245491],[143.413913,-8.983069],[142.628431,-9.326821],[142.068259,-9.159596],[141.033852,-9.117893],[140.143415,-8.297168],[139.127767,-8.096043],[138.881477,-8.380935],[137.614474,-8.411683],[138.039099,-7.597882],[138.668621,-7.320225],[138.407914,-6.232849],[137.92784,-5.393366],[135.98925,-4.546544],[135.164598,-4.462931],[133.66288,-3.538853],[133.367705,-4.024819],[132.983956,-4.112979],[132.756941,-3.746283],[132.753789,-3.311787],[131.989804,-2.820551],[133.066845,-2.460418],[133.780031,-2.479848],[133.696212,-2.214542],[132.232373,-2.212526],[131.836222,-1.617162],[130.94284,-1.432522],[130.519558,-.93772],[131.867538,-.695461],[132.380116,-.369538],[133.985548,-.78021],[134.143368,-1.151867]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[118.767769,-5.6734,125.240501,1.643259],geometry:{type:"Polygon",coordinates:[[[125.240501,1.419836],[124.437035,.427881],[123.685505,.235593],[122.723083,.431137],[121.056725,.381217],[120.183083,.237247],[120.04087,-.519658],[120.935905,-1.408906],[121.475821,-.955962],[123.340565,-.615673],[123.258399,-1.076213],[122.822715,-.930951],[122.38853,-1.516858],[121.508274,-1.904483],[122.454572,-3.186058],[122.271896,-3.5295],[123.170963,-4.683693],[123.162333,-5.340604],[122.628515,-5.634591],[122.236394,-5.282933],[122.719569,-4.464172],[121.738234,-4.851331],[121.489463,-4.574553],[121.619171,-4.188478],[120.898182,-3.602105],[120.972389,-2.627643],[120.305453,-2.931604],[120.390047,-4.097579],[120.430717,-5.528241],[119.796543,-5.6734],[119.366906,-5.379878],[119.653606,-4.459417],[119.498835,-3.494412],[119.078344,-3.487022],[118.767769,-2.801999],[119.180974,-2.147104],[119.323394,-1.353147],[119.825999,.154254],[120.035702,.566477],[120.885779,1.309223],[121.666817,1.013944],[122.927567,.875192],[124.077522,.917102],[125.065989,1.643259],[125.240501,1.419836]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[127.39949,-.899996,128.688249,2.174596],geometry:{type:"Polygon",coordinates:[[[128.688249,1.132386],[128.635952,.258486],[128.12017,.356413],[127.968034,-.252077],[128.379999,-.780004],[128.100016,-.899996],[127.696475,-.266598],[127.39949,1.011722],[127.600512,1.810691],[127.932378,2.174596],[128.004156,1.628531],[128.594559,1.540811],[128.688249,1.132386]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[95.293026,-5.873285,106.108593,5.479821],geometry:{type:"Polygon",coordinates:[[[105.817655,-5.852356],[104.710384,-5.873285],[103.868213,-5.037315],[102.584261,-4.220259],[102.156173,-3.614146],[101.399113,-2.799777],[100.902503,-2.050262],[100.141981,-.650348],[99.26374,.183142],[98.970011,1.042882],[98.601351,1.823507],[97.699598,2.453184],[97.176942,3.308791],[96.424017,3.86886],[95.380876,4.970782],[95.293026,5.479821],[95.936863,5.439513],[97.484882,5.246321],[98.369169,4.26837],[99.142559,3.59035],[99.693998,3.174329],[100.641434,2.099381],[101.658012,2.083697],[102.498271,1.3987],[103.07684,.561361],[103.838396,.104542],[103.437645,-.711946],[104.010789,-1.059212],[104.369991,-1.084843],[104.53949,-1.782372],[104.887893,-2.340425],[105.622111,-2.428844],[106.108593,-3.061777],[105.857446,-4.305525],[105.817655,-5.852356]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[108.952658,-4.106984,119.181904,6.928053],geometry:{type:"Polygon",coordinates:[[[117.875627,1.827641],[118.996747,.902219],[117.811858,.784242],[117.478339,.102475],[117.521644,-.803723],[116.560048,-1.487661],[116.533797,-2.483517],[116.148084,-4.012726],[116.000858,-3.657037],[114.864803,-4.106984],[114.468652,-3.495704],[113.755672,-3.43917],[113.256994,-3.118776],[112.068126,-3.478392],[111.703291,-2.994442],[111.04824,-3.049426],[110.223846,-2.934032],[110.070936,-1.592874],[109.571948,-1.314907],[109.091874,-.459507],[108.952658,.415375],[109.069136,1.341934],[109.66326,2.006467],[110.396135,1.663775],[111.168853,1.850637],[111.370081,2.697303],[111.796928,2.885897],[112.995615,3.102395],[113.712935,3.893509],[114.204017,4.525874],[114.599961,4.900011],[115.45071,5.44773],[116.220741,6.143191],[116.725103,6.924771],[117.129626,6.928053],[117.643393,6.422166],[117.689075,5.98749],[118.347691,5.708696],[119.181904,5.407836],[119.110694,5.016128],[118.439727,4.966519],[118.618321,4.478202],[117.882035,4.137551],[117.313232,3.234428],[118.04833,2.28769],[117.875627,1.827641]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[121.919928,5.581003,126.537424,9.760335],geometry:{type:"Polygon",coordinates:[[[126.376814,8.414706],[126.478513,7.750354],[126.537424,7.189381],[126.196773,6.274294],[125.831421,7.293715],[125.363852,6.786485],[125.683161,6.049657],[125.396512,5.581003],[124.219788,6.161355],[123.93872,6.885136],[124.243662,7.36061],[123.610212,7.833527],[123.296071,7.418876],[122.825506,7.457375],[122.085499,6.899424],[121.919928,7.192119],[122.312359,8.034962],[122.942398,8.316237],[123.487688,8.69301],[123.841154,8.240324],[124.60147,8.514158],[124.764612,8.960409],[125.471391,8.986997],[125.412118,9.760335],[126.222714,9.286074],[126.306637,8.782487],[126.376814,8.414706]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[79.695167,5.96837,81.787959,9.824078],geometry:{type:"Polygon",coordinates:[[[81.21802,6.197141],[80.348357,5.96837],[79.872469,6.763463],[79.695167,8.200843],[80.147801,9.824078],[80.838818,9.268427],[81.304319,8.564206],[81.787959,7.523055],[81.637322,6.481775],[81.21802,6.197141]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-61.95,10,-60.895,10.89],geometry:{type:"Polygon",coordinates:[[[-60.935,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.365],[-61.68,10.76],[-61.105,10.89],[-60.895,10.855],[-60.935,10.11]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[122.380055,9.022189,124.077936,11.232726],geometry:{type:"Polygon",coordinates:[[[123.982438,10.278779],[123.623183,9.950091],[123.309921,9.318269],[122.995883,9.022189],[122.380055,9.713361],[122.586089,9.981045],[122.837081,10.261157],[122.947411,10.881868],[123.49885,10.940624],[123.337774,10.267384],[124.077936,11.232726],[123.982438,10.278779]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[117.174275,8.3675,119.689677,11.369668],geometry:{type:"Polygon",coordinates:[[[118.504581,9.316383],[117.174275,8.3675],[117.664477,9.066889],[118.386914,9.6845],[118.987342,10.376292],[119.511496,11.369668],[119.689677,10.554291],[119.029458,10.003653],[118.504581,9.316383]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[121.883548,10.441017,123.120217,11.891755],geometry:{type:"Polygon",coordinates:[[[121.883548,11.891755],[122.483821,11.582187],[123.120217,11.58366],[123.100838,11.165934],[122.637714,10.741308],[122.00261,10.441017],[121.967367,10.905691],[122.03837,11.415841],[121.883548,11.891755]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[124.266762,10.134679,125.783465,12.557761],geometry:{type:"Polygon",coordinates:[[[125.502552,12.162695],[125.783465,11.046122],[125.011884,11.311455],[125.032761,10.975816],[125.277449,10.358722],[124.801819,10.134679],[124.760168,10.837995],[124.459101,10.88993],[124.302522,11.495371],[124.891013,11.415583],[124.87799,11.79419],[124.266762,12.557761],[125.227116,12.535721],[125.502552,12.162695]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[120.323436,12.20556,121.527394,13.466413],geometry:{type:"Polygon",coordinates:[[[121.527394,13.06959],[121.26219,12.20556],[120.833896,12.704496],[120.323436,13.466413],[121.180128,13.429697],[121.527394,13.06959]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[119.883773,12.536677,124.181289,18.505227],geometry:{type:"Polygon",coordinates:[[[121.321308,18.504065],[121.937601,18.218552],[122.246006,18.47895],[122.336957,18.224883],[122.174279,17.810283],[122.515654,17.093505],[122.252311,16.262444],[121.662786,15.931018],[121.50507,15.124814],[121.728829,14.328376],[122.258925,14.218202],[122.701276,14.336541],[123.950295,13.782131],[123.855107,13.237771],[124.181289,12.997527],[124.077419,12.536677],[123.298035,13.027526],[122.928652,13.55292],[122.671355,13.185836],[122.03465,13.784482],[121.126385,13.636687],[120.628637,13.857656],[120.679384,14.271016],[120.991819,14.525393],[120.693336,14.756671],[120.564145,14.396279],[120.070429,14.970869],[119.920929,15.406347],[119.883773,16.363704],[120.286488,16.034629],[120.390047,17.599081],[120.715867,18.505227],[121.321308,18.504065]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-67.242428,17.946553,-65.591004,18.520601],geometry:{type:"Polygon",coordinates:[[[-65.591004,18.228035],[-65.847164,17.975906],[-66.599934,17.981823],[-67.184162,17.946553],[-67.242428,18.37446],[-67.100679,18.520601],[-66.282434,18.514762],[-65.771303,18.426679],[-65.591004,18.228035]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-78.337719,17.701116,-76.199659,18.524218],geometry:{type:"Polygon",coordinates:[[[-76.902561,17.868238],[-77.206341,17.701116],[-77.766023,17.861597],[-78.337719,18.225968],[-78.217727,18.454533],[-77.797365,18.524218],[-77.569601,18.490525],[-76.896619,18.400867],[-76.365359,18.160701],[-76.199659,17.886867],[-76.902561,17.868238]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-74.458034,17.598564,-68.317943,19.915684],geometry:{type:"Polygon",coordinates:[[[-72.579673,19.871501],[-71.712361,19.714456],[-71.587304,19.884911],[-70.806706,19.880286],[-70.214365,19.622885],[-69.950815,19.648],[-69.76925,19.293267],[-69.222126,19.313214],[-69.254346,19.015196],[-68.809412,18.979074],[-68.317943,18.612198],[-68.689316,18.205142],[-69.164946,18.422648],[-69.623988,18.380713],[-69.952934,18.428307],[-70.133233,18.245915],[-70.517137,18.184291],[-70.669298,18.426886],[-70.99995,18.283329],[-71.40021,17.598564],[-71.657662,17.757573],[-71.708305,18.044997],[-72.372476,18.214961],[-72.844411,18.145611],[-73.454555,18.217906],[-73.922433,18.030993],[-74.458034,18.34255],[-74.369925,18.664908],[-73.449542,18.526053],[-72.694937,18.445799],[-72.334882,18.668422],[-72.79165,19.101625],[-72.784105,19.483591],[-73.415022,19.639551],[-73.189791,19.915684],[-72.579673,19.871501]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[108.626217,18.197701,111.010051,20.101254],geometry:{type:"Polygon",coordinates:[[[110.339188,18.678395],[109.47521,18.197701],[108.655208,18.507682],[108.626217,19.367888],[109.119056,19.821039],[110.211599,20.101254],[110.786551,20.077534],[111.010051,19.69593],[110.570647,19.255879],[110.339188,18.678395]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-156.07347,18.91619,-154.80741,20.26721],geometry:{type:"Polygon",coordinates:[[[-155.54211,19.08348],[-155.68817,18.91619],[-155.93665,19.05939],[-155.90806,19.33888],[-156.07347,19.70294],[-156.02368,19.81422],[-155.85008,19.97729],[-155.91907,20.17395],[-155.86108,20.26721],[-155.78505,20.2487],[-155.40214,20.07975],[-155.22452,19.99302],[-155.06226,19.8591],[-154.80741,19.50871],[-154.83147,19.45328],[-155.22217,19.23972],[-155.54211,19.08348]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-156.71055,20.57241,-155.99566,21.01249],geometry:{type:"Polygon",coordinates:[[[-156.07926,20.64397],[-156.41445,20.57241],[-156.58673,20.783],[-156.70167,20.8643],[-156.71055,20.92676],[-156.61258,21.01249],[-156.25711,20.91745],[-155.99566,20.76404],[-156.07926,20.64397]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-157.32521,21.06873,-156.75824,21.21958],geometry:{type:"Polygon",coordinates:[[[-156.75824,21.17684],[-156.78933,21.06873],[-157.32521,21.09777],[-157.25027,21.21958],[-156.75824,21.17684]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-158.29265,21.26442,-157.65283,21.71696],geometry:{type:"Polygon",coordinates:[[[-157.65283,21.32217],[-157.70703,21.26442],[-157.7786,21.27729],[-158.12667,21.31244],[-158.2538,21.53919],[-158.29265,21.57912],[-158.0252,21.71696],[-157.94161,21.65272],[-157.65283,21.32217]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-159.80051,21.88299,-159.34512,22.23618],geometry:{type:"Polygon",coordinates:[[[-159.34512,21.982],[-159.46372,21.88299],[-159.80051,22.06533],[-159.74877,22.1382],[-159.5962,22.23618],[-159.36569,22.21494],[-159.34512,21.982]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-84.974911,19.855481,-74.178025,23.188611],geometry:{type:"Polygon",coordinates:[[[-79.679524,22.765303],[-79.281486,22.399202],[-78.347434,22.512166],[-77.993296,22.277194],[-77.146422,21.657851],[-76.523825,21.20682],[-76.19462,21.220565],[-75.598222,21.016624],[-75.67106,20.735091],[-74.933896,20.693905],[-74.178025,20.284628],[-74.296648,20.050379],[-74.961595,19.923435],[-75.63468,19.873774],[-76.323656,19.952891],[-77.755481,19.855481],[-77.085108,20.413354],[-77.492655,20.673105],[-78.137292,20.739949],[-78.482827,21.028613],[-78.719867,21.598114],[-79.285,21.559175],[-80.217475,21.827324],[-80.517535,22.037079],[-81.820943,22.192057],[-82.169992,22.387109],[-81.795002,22.636965],[-82.775898,22.68815],[-83.494459,22.168518],[-83.9088,22.154565],[-84.052151,21.910575],[-84.54703,21.801228],[-84.974911,21.896028],[-84.447062,22.20495],[-84.230357,22.565755],[-83.77824,22.788118],[-83.267548,22.983042],[-82.510436,23.078747],[-82.268151,23.188611],[-81.404457,23.117271],[-80.618769,23.10598],[-79.679524,22.765303]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-78.40848,23.71,-77.53466,25.2103],geometry:{type:"Polygon",coordinates:[[[-77.53466,23.75975],[-77.78,23.71],[-78.03405,24.28615],[-78.40848,24.57564],[-78.19087,25.2103],[-77.89,25.17],[-77.54,24.34],[-77.53466,23.75975]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[120.106189,21.970571,121.951244,25.295459],geometry:{type:"Polygon",coordinates:[[[121.175632,22.790857],[120.74708,21.970571],[120.220083,22.814861],[120.106189,23.556263],[120.69468,24.538451],[121.495044,25.295459],[121.951244,24.997596],[121.777818,24.394274],[121.175632,22.790857]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-78.98,26.42,-77.82,26.87],geometry:{type:"Polygon",coordinates:[[[-77.82,26.58],[-78.91,26.42],[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-77.79,25.87918,-77,27.04],geometry:{type:"Polygon",coordinates:[[[-77,26.59],[-77.17255,25.87918],[-77.35641,26.00735],[-77.34,26.53],[-77.78802,26.92516],[-77.79,27.04],[-77,26.59]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[132.363115,32.704567,134.766379,34.364931],geometry:{type:"Polygon",coordinates:[[[134.638428,34.149234],[134.766379,33.806335],[134.203416,33.201178],[133.79295,33.521985],[133.280268,33.28957],[133.014858,32.704567],[132.363115,32.989382],[132.371176,33.463642],[132.924373,34.060299],[133.492968,33.944621],[133.904106,34.364931],[134.638428,34.149234]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[32.256667,34.571869,34.576474,35.671596],geometry:{type:"Polygon",coordinates:[[[34.576474,35.671596],[33.900804,35.245756],[33.973617,35.058506],[34.004881,34.978098],[32.979827,34.571869],[32.490296,34.701655],[32.256667,35.103232],[32.73178,35.140026],[32.802474,35.145504],[32.946961,35.386703],[33.667227,35.373216],[34.576474,35.671596]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[23.514978,34.919988,26.290003,35.705004],geometry:{type:"Polygon",coordinates:[[[23.69998,35.705004],[24.246665,35.368022],[25.025015,35.424996],[25.769208,35.354018],[25.745023,35.179998],[26.290003,35.29999],[26.164998,35.004995],[24.724982,34.919988],[24.735007,35.084991],[23.514978,35.279992],[23.69998,35.705004]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[12.431004,36.619987,15.520376,38.231155],geometry:{type:"Polygon",coordinates:[[[15.520376,38.231155],[15.160243,37.444046],[15.309898,37.134219],[15.099988,36.619987],[14.335229,36.996631],[13.826733,37.104531],[12.431004,37.61295],[12.570944,38.126381],[13.741156,38.034966],[14.761249,38.143874],[15.520376,38.231155]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[8.159998,38.906618,9.809975,41.209991],geometry:{type:"Polygon",coordinates:[[[9.210012,41.209991],[9.809975,40.500009],[9.669519,39.177376],[9.214818,39.240473],[8.806936,38.906618],[8.428302,39.171847],[8.388253,40.378311],[8.159998,40.950007],[8.709991,40.899984],[9.210012,41.209991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[129.408463,31.029579,141.914263,41.37856],geometry:{type:"Polygon",coordinates:[[[140.976388,37.142074],[140.59977,36.343983],[140.774074,35.842877],[140.253279,35.138114],[138.975528,34.6676],[137.217599,34.606286],[135.792983,33.464805],[135.120983,33.849071],[135.079435,34.596545],[133.340316,34.375938],[132.156771,33.904933],[130.986145,33.885761],[132.000036,33.149992],[131.33279,31.450355],[130.686318,31.029579],[130.20242,31.418238],[130.447676,32.319475],[129.814692,32.61031],[129.408463,33.296056],[130.353935,33.604151],[130.878451,34.232743],[131.884229,34.749714],[132.617673,35.433393],[134.608301,35.731618],[135.677538,35.527134],[136.723831,37.304984],[137.390612,36.827391],[138.857602,37.827485],[139.426405,38.215962],[140.05479,39.438807],[139.883379,40.563312],[140.305783,41.195005],[141.368973,41.37856],[141.914263,39.991616],[141.884601,39.180865],[140.959489,38.174001],[140.976388,37.142074]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[8.544213,41.380007,9.560016,43.009985],geometry:{type:"Polygon",coordinates:[[[9.560016,42.152492],[9.229752,41.380007],[8.775723,41.583612],[8.544213,42.256517],[8.746009,42.628122],[9.390001,43.009985],[9.560016,42.152492]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[139.817544,41.569556,145.543137,45.551483],geometry:{type:"Polygon",coordinates:[[[143.910162,44.1741],[144.613427,43.960883],[145.320825,44.384733],[145.543137,43.262088],[144.059662,42.988358],[143.18385,41.995215],[141.611491,42.678791],[141.067286,41.584594],[139.955106,41.569556],[139.817544,42.563759],[140.312087,43.333273],[141.380549,43.388825],[141.671952,44.772125],[141.967645,45.551483],[143.14287,44.510358],[143.910162,44.1741]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-64.39261,45.96818,-62.01208,47.03601],geometry:{type:"Polygon",coordinates:[[[-63.6645,46.55001],[-62.9393,46.41587],[-62.01208,46.44314],[-62.50391,46.03339],[-62.87433,45.96818],[-64.1428,46.39265],[-64.39261,46.72747],[-64.01486,47.03601],[-63.6645,46.55001]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-64.51912,49.08717,-61.806305,49.95718],geometry:{type:"Polygon",coordinates:[[[-61.806305,49.10506],[-62.29318,49.08717],[-63.58926,49.40069],[-64.51912,49.87304],[-64.17322,49.95718],[-62.85829,49.70641],[-61.835585,49.28855],[-61.806305,49.10506]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-128.444584,48.370846,-123.510002,50.770648],geometry:{type:"Polygon",coordinates:[[[-123.510002,48.510011],[-124.012891,48.370846],[-125.655013,48.825005],[-125.954994,49.179996],[-126.850004,49.53],[-127.029993,49.814996],[-128.059336,49.994959],[-128.444584,50.539138],[-128.358414,50.770648],[-127.308581,50.552574],[-126.695001,50.400903],[-125.755007,50.295018],[-125.415002,49.950001],[-124.920768,49.475275],[-123.922509,49.062484],[-123.510002,48.510011]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-59.419494,46.618292,-52.648099,51.632094],geometry:{type:"Polygon",coordinates:[[[-56.134036,50.68701],[-56.795882,49.812309],[-56.143105,50.150117],[-55.471492,49.935815],[-55.822401,49.587129],[-54.935143,49.313011],[-54.473775,49.556691],[-53.476549,49.249139],[-53.786014,48.516781],[-53.086134,48.687804],[-52.958648,48.157164],[-52.648099,47.535548],[-53.069158,46.655499],[-53.521456,46.618292],[-54.178936,46.807066],[-53.961869,47.625207],[-54.240482,47.752279],[-55.400773,46.884994],[-55.997481,46.91972],[-55.291219,47.389562],[-56.250799,47.632545],[-57.325229,47.572807],[-59.266015,47.603348],[-59.419494,47.899454],[-58.796586,48.251525],[-59.231625,48.523188],[-58.391805,49.125581],[-57.35869,50.718274],[-56.73865,51.287438],[-55.870977,51.632094],[-55.406974,51.588273],[-55.600218,51.317075],[-56.134036,50.68701]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-133.239664,52.180433,-131.179043,54.169975],geometry:{type:"Polygon",coordinates:[[[-132.710008,54.040009],[-132.710009,54.040009],[-132.710008,54.040009],[-132.710008,54.040009],[-131.74999,54.120004],[-132.04948,52.984621],[-131.179043,52.180433],[-131.57783,52.182371],[-132.180428,52.639707],[-132.549992,53.100015],[-133.054611,53.411469],[-133.239664,53.85108],[-133.180004,54.169975],[-132.710008,54.040009]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[141.594076,45.966755,144.654148,54.365881],geometry:{type:"Polygon",coordinates:[[[143.648007,50.7476],[144.654148,48.976391],[143.173928,49.306551],[142.558668,47.861575],[143.533492,46.836728],[143.505277,46.137908],[142.747701,46.740765],[142.09203,45.966755],[141.906925,46.805929],[142.018443,47.780133],[141.904445,48.859189],[142.1358,49.615163],[142.179983,50.952342],[141.594076,51.935435],[141.682546,53.301966],[142.606934,53.762145],[142.209749,54.225476],[142.654786,54.365881],[142.914616,53.704578],[143.260848,52.74076],[143.235268,51.75666],[143.648007,50.7476]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-9.977086,51.669301,-5.661949,55.17286],geometry:{type:"Polygon",coordinates:[[[-6.788857,52.260118],[-8.561617,51.669301],[-9.977086,51.820455],[-9.166283,52.864629],[-9.688525,53.881363],[-8.327987,54.664519],[-7.572168,55.131622],[-6.733847,55.17286],[-5.661949,54.554603],[-6.197885,53.867565],[-6.032985,53.153164],[-6.788857,52.260118]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[10.903914,54.800015,12.690006,56.111407],geometry:{type:"Polygon",coordinates:[[[12.690006,55.609991],[12.089991,54.800015],[11.043543,55.364864],[10.903914,55.779955],[12.370904,56.111407],[12.690006,55.609991]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-154.670993,56.734677,-152.141147,57.968968],geometry:{type:"Polygon",coordinates:[[[-153.006314,57.115842],[-154.00509,56.734677],[-154.516403,56.992749],[-154.670993,57.461196],[-153.76278,57.816575],[-153.228729,57.968968],[-152.564791,57.901427],[-152.141147,57.591059],[-153.006314,57.115842]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-6.149981,49.96,1.681531,58.635],geometry:{type:"Polygon",coordinates:[[[-3.005005,58.635],[-4.073828,57.553025],[-3.055002,57.690019],[-1.959281,57.6848],[-2.219988,56.870017],[-3.119003,55.973793],[-2.085009,55.909998],[-1.114991,54.624986],[-.430485,54.464376],[.184981,53.325014],[.469977,52.929999],[1.681531,52.73952],[1.559988,52.099998],[1.050562,51.806761],[1.449865,51.289428],[.550334,50.765739],[-.787517,50.774989],[-2.489998,50.500019],[-2.956274,50.69688],[-3.617448,50.228356],[-4.542508,50.341837],[-5.245023,49.96],[-5.776567,50.159678],[-4.30999,51.210001],[-3.414851,51.426009],[-4.984367,51.593466],[-5.267296,51.9914],[-4.222347,52.301356],[-4.770013,52.840005],[-4.579999,53.495004],[-3.09208,53.404441],[-2.945009,53.985],[-3.630005,54.615013],[-4.844169,54.790971],[-5.082527,55.061601],[-4.719112,55.508473],[-5.047981,55.783986],[-5.586398,55.311146],[-5.644999,56.275015],[-6.149981,56.78501],[-5.786825,57.818848],[-5.009999,58.630013],[-4.211495,58.550845],[-3.005005,58.635]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-167.455277,59.754441,-165.579164,60.38417],geometry:{type:"Polygon",coordinates:[[[-165.579164,59.909987],[-166.19277,59.754441],[-166.848337,59.941406],[-167.455277,60.213069],[-166.467792,60.38417],[-165.67443,60.293607],[-165.579164,59.909987]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-80.36215,61.63308,-79.26582,62.3856],geometry:{type:"Polygon",coordinates:[[[-79.26582,62.158675],[-79.65752,61.63308],[-80.09956,61.7181],[-80.36215,62.01649],[-80.315395,62.085565],[-79.92939,62.3856],[-79.52002,62.36371],[-79.26582,62.158675]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-83.99367,62.15922,-81.87699,62.91409],geometry:{type:"Polygon",coordinates:[[[-81.89825,62.7108],[-83.06857,62.15922],[-83.77462,62.18231],[-83.99367,62.4528],[-83.25048,62.91409],[-81.87699,62.90458],[-81.89825,62.7108]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-171.791111,62.976931,-168.689439,63.782515],geometry:{type:"Polygon",coordinates:[[[-171.731657,63.782515],[-171.114434,63.592191],[-170.491112,63.694975],[-169.682505,63.431116],[-168.689439,63.297506],[-168.771941,63.188598],[-169.52944,62.976931],[-170.290556,63.194438],[-170.671386,63.375822],[-171.553063,63.317789],[-171.791111,63.405846],[-171.731657,63.782515]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-87.221983,63.052379,-80.103451,65.738778],geometry:{type:"Polygon",coordinates:[[[-85.161308,65.657285],[-84.975764,65.217518],[-84.464012,65.371772],[-83.882626,65.109618],[-82.787577,64.766693],[-81.642014,64.455136],[-81.55344,63.979609],[-80.817361,64.057486],[-80.103451,63.725981],[-80.99102,63.411246],[-82.547178,63.651722],[-83.108798,64.101876],[-84.100417,63.569712],[-85.523405,63.052379],[-85.866769,63.637253],[-87.221983,63.541238],[-86.35276,64.035833],[-86.224886,64.822917],[-85.883848,65.738778],[-85.161308,65.657285]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-24.326184,63.496383,-13.609732,66.526792],geometry:{type:"Polygon",coordinates:[[[-14.508695,66.455892],[-14.739637,65.808748],[-13.609732,65.126671],[-14.909834,64.364082],[-17.794438,63.678749],[-18.656246,63.496383],[-19.972755,63.643635],[-22.762972,63.960179],[-21.778484,64.402116],[-23.955044,64.89113],[-22.184403,65.084968],[-22.227423,65.378594],[-24.326184,65.611189],[-23.650515,66.262519],[-22.134922,66.410469],[-20.576284,65.732112],[-19.056842,66.276601],[-17.798624,65.993853],[-16.167819,66.526792],[-14.508695,66.455892]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-77.2364,67.09873,-75.10333,68.28721],geometry:{type:"Polygon",coordinates:[[[-75.86588,67.14886],[-76.98687,67.09873],[-77.2364,67.58809],[-76.81166,68.14856],[-75.89521,68.28721],[-75.1145,68.01036],[-75.10333,67.58202],[-75.21597,67.44425],[-75.86588,67.14886]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,64.25269,-169.89958,68.963636],geometry:{type:"Polygon",coordinates:[[[-175.01425,66.58435],[-174.33983,66.33556],[-174.57182,67.06219],[-171.85731,66.91308],[-169.89958,65.97724],[-170.89107,65.54139],[-172.53025,65.43791],[-172.555,64.46079],[-172.95533,64.25269],[-173.89184,64.2826],[-174.65392,64.63125],[-175.98353,64.92288],[-176.20716,65.35667],[-177.22266,65.52024],[-178.35993,65.39052],[-178.90332,65.74044],[-178.68611,66.11211],[-179.88377,65.87456],[-179.43268,65.40411],[-180,64.979709],[-180,68.963636],[-177.55,68.2],[-174.92825,67.20589],[-175.01425,66.58435]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-99.797401,68.75704,-95.647681,70.14354],geometry:{type:"Polygon",coordinates:[[[-95.647681,69.10769],[-96.269521,68.75704],[-97.617401,69.06003],[-98.431801,68.9507],[-99.797401,69.40003],[-98.917401,69.71003],[-98.218261,70.14354],[-97.157401,69.86003],[-96.557401,69.68003],[-96.257401,69.49003],[-95.647681,69.10769]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[178.7253,70.78114,180,71.515714],geometry:{type:"Polygon",coordinates:[[[180,70.832199],[178.903425,70.78114],[178.7253,71.0988],[180,71.515714],[180,70.832199]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-180,70.832199,-177.577945,71.55762],geometry:{type:"Polygon",coordinates:[[[-178.69378,70.89302],[-180,70.832199],[-180,71.515714],[-179.871875,71.55762],[-179.02433,71.55553],[-177.577945,71.26948],[-177.663575,71.13277],[-178.69378,70.89302]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-168.110474,-53.856384,-34.72998,71.920471],geometry:{type:"Polygon",coordinates:[[[-90.547119,69.497681],[-90.551514,68.475098],[-89.215088,69.258728],[-88.019592,68.615112],[-88.317505,67.873474],[-87.350098,67.19873],[-86.306091,67.921509],[-85.576599,68.784485],[-85.521912,69.88208],[-84.100769,69.805481],[-82.622498,69.658325],[-81.280396,69.162109],[-81.220215,68.66571],[-81.964294,68.132507],[-81.259277,67.59729],[-81.386475,67.110901],[-83.344482,66.411682],[-84.735413,66.257324],[-85.769409,66.558289],[-86.067627,66.056274],[-87.031372,65.213074],[-87.323181,64.775696],[-88.48291,64.099121],[-89.914429,64.032715],[-90.703979,63.610291],[-90.77002,62.960327],[-91.933411,62.835083],[-93.156982,62.024719],[-94.241516,60.898682],[-94.629272,60.110291],[-94.684509,58.948914],[-93.215027,58.782104],[-92.764587,57.845703],[-92.296997,57.087097],[-90.897705,57.284729],[-89.03949,56.851685],[-88.039795,56.47168],[-87.324219,55.999084],[-86.071228,55.723877],[-85.01178,55.302673],[-83.360474,55.244873],[-82.272827,55.148315],[-82.436218,54.282288],[-82.125,53.2771],[-81.400696,52.157898],[-79.912903,51.208496],[-79.143005,51.533875],[-78.601929,52.562073],[-79.124207,54.141479],[-79.82959,54.667725],[-78.228699,55.136475],[-77.095581,55.837524],[-76.541382,56.534302],[-76.623108,57.202698],[-77.302185,58.052124],[-78.516907,58.804688],[-77.33667,59.852722],[-77.772705,60.757874],[-78.106812,62.319702],[-77.410583,62.550476],[-75.696228,62.278503],[-74.668213,62.181091],[-73.839905,62.443909],[-72.908508,62.105103],[-71.677002,61.52533],[-71.373718,61.137085],[-69.590393,61.061523],[-69.6203,60.221313],[-69.287903,58.957275],[-68.374512,58.801086],[-67.64978,58.212097],[-66.201782,58.767273],[-65.245178,59.870728],[-64.583496,60.335693],[-63.804687,59.442688],[-62.50238,58.167114],[-61.396484,56.967529],[-61.798584,56.339478],[-60.468506,55.775513],[-59.56958,55.204102],[-57.975098,54.945496],[-57.333191,54.626526],[-56.93689,53.780273],[-56.158081,53.647522],[-55.756287,53.270508],[-55.683289,52.146729],[-56.40918,51.770691],[-57.126892,51.419678],[-58.77478,51.06427],[-60.033081,50.24292],[-61.723572,50.080505],[-63.862488,50.291077],[-65.363281,50.298279],[-66.398987,50.228882],[-67.236328,49.511475],[-68.511108,49.068481],[-69.953613,47.744873],[-71.104492,46.821716],[-70.255188,46.986084],[-68.650024,48.30011],[-66.552429,49.133118],[-65.056213,49.23291],[-64.171021,48.742493],[-65.115479,48.070923],[-64.798523,46.993103],[-64.472107,46.238525],[-63.173279,45.739075],[-61.520691,45.883911],[-60.518127,47.007874],[-60.448608,46.282715],[-59.802795,45.920471],[-61.039795,45.26532],[-63.2547,44.670288],[-64.246582,44.265503],[-65.364075,43.545288],[-66.123413,43.618713],[-66.161682,44.465088],[-64.425476,45.292114],[-66.026001,45.259277],[-67.13739,45.137512],[-66.9646,44.809692],[-68.032471,44.325317],[-69.059998,43.980103],[-70.116089,43.684082],[-70.690002,43.03009],[-70.81488,42.865295],[-70.825012,42.335083],[-70.494995,41.805115],[-70.080017,41.78009],[-70.184998,42.145081],[-69.884888,41.922913],[-69.965027,41.637085],[-70.640015,41.475098],[-71.1203,41.494507],[-71.859985,41.320129],[-72.294983,41.270081],[-72.876404,41.220703],[-73.710022,40.931091],[-72.241211,41.119507],[-71.945007,40.930115],[-73.34491,40.630127],[-73.981995,40.628113],[-73.952271,40.750671],[-74.256714,40.473511],[-73.962402,40.427673],[-74.178406,39.70929],[-74.906006,38.939514],[-74.980408,39.196472],[-75.200012,39.248474],[-75.528076,39.498474],[-75.320007,38.960083],[-75.083496,38.781311],[-75.056702,38.404114],[-75.37738,38.015503],[-75.940186,37.216919],[-76.031189,37.256714],[-75.721985,37.937073],[-76.232788,38.319275],[-76.349976,39.150085],[-76.542725,38.717712],[-76.329285,38.083313],[-76.960022,38.23291],[-76.301575,37.918091],[-76.258728,36.966492],[-75.971802,36.897278],[-75.867981,36.551331],[-75.727478,35.55072],[-76.363098,34.808472],[-77.397583,34.512085],[-78.054871,33.925476],[-78.554321,33.861328],[-79.060608,33.49408],[-79.203491,33.158508],[-80.30127,32.509277],[-80.86499,32.033325],[-81.336304,31.440491],[-81.490417,30.730103],[-81.313721,30.035522],[-80.97998,29.180115],[-80.535583,28.472107],[-80.530029,28.0401],[-80.056519,26.880127],[-80.088013,26.205688],[-80.13147,25.816895],[-80.380981,25.206299],[-80.679993,25.080078],[-81.172119,25.201294],[-81.330017,25.640076],[-81.710022,25.870117],[-82.23999,26.730103],[-82.705078,27.495117],[-82.855286,27.886292],[-82.650024,28.55011],[-82.929993,29.100098],[-83.709595,29.936707],[-84.099976,30.090088],[-85.108826,29.636292],[-85.287781,29.686096],[-85.77301,30.15271],[-86.400024,30.400085],[-87.530273,30.274475],[-88.417786,30.384888],[-89.180481,30.316101],[-89.604919,30.176331],[-89.413696,29.894287],[-89.429993,29.488708],[-89.21759,29.291077],[-89.408203,29.159729],[-89.779297,29.307129],[-90.154602,29.117493],[-90.880188,29.148682],[-91.626709,29.677124],[-92.499084,29.552307],[-93.226379,29.783875],[-93.848389,29.713684],[-94.690002,29.480103],[-95.600281,28.738708],[-96.593994,28.307495],[-97.140015,27.830078],[-97.369995,27.380127],[-97.380005,26.690125],[-97.330017,26.210083],[-97.140198,25.869507],[-97.138611,25.86792],[-97.141785,25.865906],[-97.528076,24.992126],[-97.702881,24.272278],[-97.776001,22.932678],[-97.872375,22.444275],[-97.698975,21.898682],[-97.388977,21.411072],[-97.18927,20.635498],[-96.525513,19.89093],[-96.292114,19.320496],[-95.900879,18.828125],[-94.838989,18.562683],[-94.42572,18.144287],[-93.548584,18.423889],[-92.786072,18.524902],[-92.037292,18.704712],[-91.407898,18.876099],[-90.77179,19.284119],[-90.533508,19.867493],[-90.451477,20.70752],[-90.278625,20.999878],[-89.601318,21.261719],[-88.543884,21.493713],[-87.658386,21.458923],[-87.05188,21.543518],[-86.812012,21.331482],[-86.845886,20.849915],[-87.383301,20.255493],[-87.620972,19.646484],[-87.436707,19.472473],[-87.586487,19.0401],[-87.837219,18.259888],[-88.090576,18.516724],[-88.299988,18.500122],[-88.296326,18.353271],[-88.106812,18.348694],[-88.123413,18.076721],[-88.285278,17.644287],[-88.197876,17.489502],[-88.302612,17.131714],[-88.239502,17.036072],[-88.355408,16.530884],[-88.551819,16.265503],[-88.732422,16.233704],[-88.930603,15.887329],[-88.604614,15.706482],[-88.518311,15.85553],[-88.224976,15.727722],[-88.121094,15.688721],[-87.901794,15.864502],[-87.615601,15.878906],[-87.522888,15.797302],[-87.367676,15.846924],[-86.903198,15.756714],[-86.440918,15.782898],[-86.119202,15.893494],[-86.001892,16.005493],[-85.683289,15.953674],[-85.44397,15.885681],[-85.182373,15.909302],[-84.983704,15.995911],[-84.526978,15.8573],[-84.368225,15.835083],[-84.062988,15.648315],[-83.773987,15.424072],[-83.4104,15.270874],[-83.147217,14.995911],[-83.233215,14.899902],[-83.28418,14.676697],[-83.182129,14.31073],[-83.412476,13.970093],[-83.519775,13.567688],[-83.552185,13.127075],[-83.498474,12.869324],[-83.473328,12.419128],[-83.626099,12.320923],[-83.719604,11.893127],[-83.650879,11.629089],[-83.855408,11.373291],[-83.808899,11.103088],[-83.655579,10.938904],[-83.402283,10.395508],[-83.015686,9.993103],[-82.546204,9.566284],[-82.187073,9.20752],[-82.207581,8.995728],[-81.808594,8.950684],[-81.714111,9.032104],[-81.439209,8.786316],[-80.947327,8.858521],[-80.521912,9.111084],[-79.914612,9.312683],[-79.573303,9.611694],[-79.021179,9.552917],[-79.058411,9.454712],[-78.500916,9.420471],[-78.055908,9.247681],[-77.729492,8.946899],[-77.353271,8.670471],[-76.836609,8.638672],[-76.086304,9.336914],[-75.674622,9.443298],[-75.664673,9.774109],[-75.480408,10.61908],[-74.906921,11.08313],[-74.276672,11.102112],[-74.197205,11.310486],[-73.414673,11.227112],[-72.627808,11.732117],[-72.23822,11.955688],[-71.754089,12.437317],[-71.39978,12.376099],[-71.13739,12.113098],[-71.331604,11.776306],[-71.359985,11.5401],[-71.947021,11.423279],[-71.620789,10.969482],[-71.632996,10.446472],[-72.074097,9.865723],[-71.695618,9.072327],[-71.264587,9.137329],[-71.039978,9.860107],[-71.350098,10.211914],[-71.400574,10.969116],[-70.155212,11.375488],[-70.293823,11.846924],[-69.943176,12.162292],[-69.58429,11.459717],[-68.882996,11.443481],[-68.233276,10.885681],[-68.194092,10.554688],[-67.296204,10.545898],[-66.227783,10.648682],[-65.655212,10.200928],[-64.890381,10.077271],[-64.329407,10.389709],[-64.317993,10.641479],[-63.079285,10.701721],[-61.88092,10.715698],[-62.730103,10.420288],[-62.388489,9.948303],[-61.588684,9.873108],[-60.830505,9.381287],[-60.671204,8.580322],[-60.150085,8.602905],[-59.758301,8.367126],[-59.101685,7.999329],[-58.48291,7.347717],[-58.454895,6.832886],[-58.078125,6.809082],[-57.542175,6.321289],[-57.1474,5.973083],[-55.94928,5.772888],[-55.841797,5.953125],[-55.033203,6.02533],[-53.958008,5.756531],[-53.618408,5.646484],[-52.88208,5.409912],[-51.823303,4.565918],[-51.657776,4.156311],[-51.317078,4.203491],[-51.069702,3.650513],[-50.508789,1.901489],[-49.973999,1.736511],[-49.947083,1.046326],[-50.69928,.223083],[-50.388184,-.078369],[-48.620483,-.235413],[-48.584412,-1.237793],[-47.82489,-.581604],[-46.566589,-.940979],[-44.905701,-1.551697],[-44.417603,-2.137695],[-44.581604,-2.691284],[-43.418701,-2.383118],[-41.472595,-2.911987],[-39.978577,-2.872986],[-38.500305,-3.700623],[-37.223206,-4.820923],[-36.452881,-5.109375],[-35.597778,-5.149475],[-35.235413,-5.464905],[-34.895996,-6.73822],[-34.72998,-7.343201],[-35.128174,-8.996399],[-35.636902,-9.649292],[-37.046509,-11.04071],[-37.683594,-12.171204],[-38.423889,-13.038086],[-38.673889,-13.057678],[-38.953186,-13.793396],[-38.882324,-15.666992],[-39.161011,-17.208374],[-39.267273,-17.867676],[-39.583496,-18.262207],[-39.760803,-19.599121],[-40.774719,-20.90448],[-40.944702,-21.937317],[-41.754089,-22.370605],[-41.988281,-22.970093],[-43.074707,-22.967712],[-44.647827,-23.35199],[-45.352112,-23.796814],[-46.472107,-24.088989],[-47.648987,-24.885193],[-48.495483,-25.877014],[-48.640991,-26.623718],[-48.47467,-27.175903],[-48.661499,-28.186096],[-48.888428,-28.674072],[-49.58728,-29.224487],[-50.696899,-30.984375],[-51.576172,-31.77771],[-52.256104,-32.2453],[-52.712097,-33.196594],[-53.373596,-33.768311],[-53.806396,-34.39679],[-54.935791,-34.952576],[-55.674011,-34.752686],[-56.21521,-34.859802],[-57.139709,-34.430481],[-57.81781,-34.462524],[-58.427002,-33.909485],[-58.495422,-34.431519],[-57.225769,-35.288025],[-57.362305,-35.977417],[-56.737488,-36.413086],[-56.788208,-36.901489],[-57.749084,-38.183899],[-59.231812,-38.720215],[-61.237427,-38.928406],[-62.335876,-38.827698],[-62.125793,-39.424072],[-62.330505,-40.172607],[-62.145996,-40.67688],[-62.745789,-41.028687],[-63.770508,-41.166809],[-64.732117,-40.802612],[-65.117981,-41.06427],[-64.978577,-42.057983],[-64.303406,-42.359009],[-63.75592,-42.043701],[-63.458008,-42.56311],[-64.378784,-42.873474],[-65.181824,-43.4953],[-65.328796,-44.501282],[-65.565186,-45.036804],[-66.509888,-45.039612],[-67.293823,-45.55188],[-67.580505,-46.301697],[-66.596985,-47.033875],[-65.640991,-47.236084],[-65.985107,-48.133301],[-67.166199,-48.697327],[-67.816101,-49.86969],[-68.728699,-50.264221],[-69.138489,-50.732483],[-68.815491,-51.771118],[-68.150024,-52.349976],[-68.571472,-52.299377],[-69.461304,-52.29187],[-69.942688,-52.537903],[-70.845093,-52.89917],[-71.006287,-53.833191],[-71.42981,-53.856384],[-72.557922,-53.531372],[-73.702698,-52.835083],[-74.946777,-52.262695],[-75.26001,-51.629272],[-74.976624,-51.043396],[-75.479675,-50.378296],[-75.607971,-48.673706],[-75.182678,-47.711914],[-74.126587,-46.939209],[-75.644409,-46.647583],[-74.692078,-45.763977],[-74.351685,-44.103027],[-73.240295,-44.454895],[-72.717712,-42.383301],[-73.388916,-42.117493],[-73.701294,-43.365784],[-74.331909,-43.224976],[-74.017883,-41.7948],[-73.677124,-39.9422],[-73.21759,-39.258606],[-73.505493,-38.282898],[-73.588013,-37.156311],[-73.166687,-37.123779],[-72.553101,-35.508789],[-71.861694,-33.909119],[-71.438477,-32.418884],[-71.668701,-30.920593],[-71.369995,-30.095703],[-71.489807,-28.861389],[-70.90509,-27.640381],[-70.724976,-25.705872],[-70.403992,-23.628906],[-70.091187,-21.393311],[-70.164429,-19.756409],[-70.372498,-18.3479],[-71.375183,-17.773804],[-71.461975,-17.363403],[-73.444519,-16.359375],[-75.237793,-15.265686],[-76.009216,-14.649292],[-76.423401,-13.823181],[-76.259216,-13.534973],[-77.106201,-12.222717],[-78.092102,-10.377686],[-79.036926,-8.386597],[-79.445923,-7.930786],[-79.760498,-7.194275],[-80.537476,-6.541687],[-81.25,-6.13678],[-80.92627,-5.690491],[-81.410889,-4.736694],[-81.099609,-4.036377],[-80.30249,-3.404785],[-79.770203,-2.657471],[-79.986511,-2.220703],[-80.368713,-2.685181],[-80.967712,-2.246887],[-80.764771,-1.965027],[-80.933594,-1.057373],[-80.583313,-.906677],[-80.399292,-.283691],[-80.020813,.360474],[-80.090576,.768494],[-79.542786,.98291],[-78.855286,1.38092],[-78.990906,1.691284],[-78.617798,1.766479],[-78.662109,2.267273],[-78.427612,2.6297],[-77.931519,2.696716],[-77.510376,3.325073],[-77.127686,3.84967],[-77.496277,4.087708],[-77.307617,4.668091],[-77.533203,5.582886],[-77.318787,5.845276],[-77.476685,6.691101],[-77.881592,7.223877],[-78.214905,7.512329],[-78.429077,8.052124],[-78.182007,8.319275],[-78.435486,8.387695],[-78.62207,8.718079],[-79.1203,8.996094],[-79.5578,8.932495],[-79.760498,8.584473],[-80.16449,8.333313],[-80.382629,8.298523],[-80.480713,8.090271],[-80.003601,7.547485],[-80.276611,7.419678],[-80.421082,7.271484],[-80.886414,7.22052],[-81.059509,7.817871],[-81.189697,7.647888],[-81.51947,7.706726],[-81.721313,8.108887],[-82.131409,8.175476],[-82.390869,8.29248],[-82.820007,8.290894],[-82.850891,8.073914],[-82.965698,8.225098],[-83.508423,8.446899],[-83.711487,8.656921],[-83.596313,8.830505],[-83.632629,9.051514],[-83.909912,9.290894],[-84.303406,9.487488],[-84.647583,9.615479],[-84.713379,9.908081],[-84.975586,10.086731],[-84.911377,9.796082],[-85.110901,9.557129],[-85.339478,9.834473],[-85.660706,9.933289],[-85.797424,10.134888],[-85.791687,10.43927],[-85.659302,10.754272],[-85.941711,10.895325],[-85.712524,11.088501],[-86.058411,11.403503],[-86.525879,11.806885],[-86.745911,12.144104],[-87.16748,12.458313],[-87.668518,12.909912],[-87.557495,13.064697],[-87.392395,12.914124],[-87.316589,12.98468],[-87.48938,13.297485],[-87.793091,13.384521],[-87.904114,13.149109],[-88.483276,13.163879],[-88.843201,13.259705],[-89.256714,13.458679],[-89.812378,13.520691],[-90.095581,13.735474],[-90.608582,13.909912],[-91.232422,13.927917],[-91.689697,14.126282],[-92.227722,14.538879],[-93.359375,15.615479],[-93.875183,15.940308],[-94.691589,16.201111],[-95.250183,16.128296],[-96.053406,15.752075],[-96.557373,15.653503],[-97.263611,15.917114],[-98.013,16.1073],[-98.947693,16.566101],[-99.697388,16.706299],[-100.829529,17.171082],[-101.666077,17.649109],[-101.918518,17.916077],[-102.478088,17.975891],[-103.500977,18.292297],[-103.91748,18.748718],[-104.992004,19.316284],[-105.492981,19.946899],[-105.731384,20.434082],[-105.397705,20.531677],[-105.50061,20.816895],[-105.270691,21.076294],[-105.265808,21.422119],[-105.603088,21.871277],[-105.69342,22.269104],[-106.028687,22.773682],[-106.909912,23.767883],[-107.915405,24.548889],[-108.401917,25.172302],[-109.260193,25.580688],[-109.444092,25.82489],[-109.291626,26.442871],[-109.801392,26.676086],[-110.391724,27.162109],[-110.640991,27.859924],[-111.178894,27.941284],[-111.759583,28.468079],[-112.22821,28.954529],[-112.27179,29.266907],[-112.809509,30.021118],[-113.163818,30.786926],[-113.148682,31.171082],[-113.871887,31.567688],[-114.205688,31.524109],[-114.776428,31.799683],[-114.936707,31.393494],[-114.771179,30.913696],[-114.673889,30.16272],[-114.330994,29.750488],[-113.588806,29.061707],[-113.424011,28.826294],[-113.271912,28.754883],[-113.140015,28.411316],[-112.96228,28.425293],[-112.761597,27.780273],[-112.457886,27.525879],[-112.244873,27.171875],[-111.616516,26.662903],[-111.284607,25.732727],[-110.987793,25.294678],[-110.710022,24.826111],[-110.655029,24.298706],[-110.172791,24.265686],[-109.77179,23.811279],[-109.409119,23.364685],[-109.433411,23.18573],[-109.854187,22.818298],[-110.031311,22.82312],[-110.294983,23.431091],[-110.949524,24.001099],[-111.670593,24.484497],[-112.182007,24.738525],[-112.148987,25.470276],[-112.30072,26.012085],[-112.777283,26.322083],[-113.4646,26.768311],[-113.59668,26.639526],[-113.848877,26.900085],[-114.465698,27.14209],[-115.055115,27.722717],[-114.982178,27.798279],[-114.570312,27.741516],[-114.19928,28.115112],[-114.161987,28.566101],[-114.931824,29.27948],[-115.518677,29.556274],[-115.88739,30.180908],[-116.258301,30.836487],[-116.721497,31.635681],[-117.127686,32.535278],[-117.295898,33.046326],[-117.943909,33.621277],[-118.410583,33.740906],[-118.519897,34.027893],[-119.080994,34.078125],[-119.438782,34.348511],[-120.367798,34.447083],[-120.622803,34.608521],[-120.744324,35.156921],[-121.7146,36.161682],[-122.547485,37.55188],[-122.512024,37.783508],[-122.953186,38.113708],[-123.727112,38.951721],[-123.865112,39.76709],[-124.39801,40.313293],[-124.178772,41.14209],[-124.213684,41.999695],[-124.532776,42.766113],[-124.14209,43.708496],[-123.898926,45.523499],[-124.07959,46.864685],[-124.395691,47.720276],[-124.687195,48.184509],[-124.566101,48.3797],[-123.119995,48.0401],[-122.58728,47.09613],[-122.340027,47.360107],[-122.5,48.180115],[-122.840027,49.000122],[-122.974182,49.002686],[-124.910217,49.98468],[-125.624573,50.416687],[-127.435608,50.830688],[-127.992676,51.715881],[-127.850281,52.329712],[-129.1297,52.755493],[-129.305176,53.561707],[-130.514893,54.28772],[-130.536072,54.802673],[-131.085815,55.178894],[-131.967224,55.497925],[-132.25,56.370117],[-133.539185,57.178894],[-134.078003,58.123108],[-135.038208,58.187683],[-136.627991,58.21228],[-137.799988,58.500122],[-139.867798,59.537903],[-140.825195,59.727478],[-142.574402,60.084473],[-143.958801,59.999329],[-145.925476,60.458679],[-147.11438,60.884705],[-148.224304,60.673096],[-148.018005,59.978271],[-148.570801,59.914307],[-149.727783,59.705688],[-150.608215,59.368286],[-151.716309,59.155884],[-151.859375,59.745117],[-151.409729,60.725891],[-150.346924,61.033691],[-150.621094,61.284485],[-151.895813,60.727295],[-152.578308,60.061707],[-154.019104,59.350281],[-153.287476,58.864685],[-154.232483,58.146484],[-155.307495,57.727905],[-156.308289,57.422913],[-156.556091,56.980103],[-158.117187,56.463684],[-158.433289,55.99408],[-159.603271,55.566711],[-160.289673,55.643677],[-161.223022,55.364685],[-162.237793,55.024292],[-163.069397,54.68988],[-164.785583,54.404297],[-164.9422,54.572327],[-163.848328,55.03949],[-162.869995,55.348083],[-161.804199,55.895081],[-160.563599,56.008118],[-160.070496,56.418091],[-158.684387,57.016724],[-158.461121,57.216919],[-157.722778,57.570129],[-157.550293,58.328308],[-157.041687,58.918884],[-158.194702,58.615906],[-158.517212,58.787903],[-159.058594,58.424316],[-159.711609,58.931519],[-159.981201,58.572693],[-160.355286,59.071106],[-161.35498,58.670898],[-161.968811,58.671692],[-162.054993,59.266907],[-161.874084,59.633728],[-162.518005,59.989685],[-163.818298,59.798096],[-164.66217,60.267517],[-165.346375,60.507507],[-165.350769,61.073914],[-166.121399,61.500122],[-165.734375,62.075073],[-164.919189,62.633118],[-164.5625,63.146484],[-163.753296,63.219482],[-163.0672,63.059509],[-162.260498,63.54187],[-161.534424,63.455872],[-160.772522,63.766113],[-160.958313,64.2229],[-161.518005,64.402893],[-160.77771,64.788696],[-161.391907,64.777283],[-162.453003,64.559509],[-162.757813,64.338684],[-163.546387,64.559082],[-164.960815,64.447083],[-166.425293,64.686707],[-166.844971,65.088928],[-168.110474,65.670105],[-166.7052,66.088318],[-164.47467,66.576721],[-163.652527,66.576721],[-163.788513,66.077271],[-161.677795,66.116089],[-162.489685,66.735474],[-163.719727,67.116516],[-164.430908,67.616272],[-165.390198,68.042908],[-166.764404,68.358887],[-166.204712,68.883118],[-164.430786,68.915527],[-163.168579,69.371094],[-162.930481,69.858093],[-161.908875,70.333313],[-160.934814,70.447693],[-159.039185,70.891724],[-158.11969,70.824707],[-156.580811,71.35791],[-155.06781,71.147888],[-154.344177,70.696472],[-153.900024,70.890076],[-152.210022,70.830078],[-152.27002,70.600098],[-150.73999,70.430115],[-149.719971,70.53009],[-147.613281,70.214111],[-145.690002,70.120117],[-144.919983,69.990112],[-143.589417,70.152527],[-142.07251,69.851929],[-140.985901,69.712097],[-139.120483,69.47113],[-137.546387,68.990112],[-136.503601,68.898071],[-135.625671,69.315125],[-134.414612,69.627502],[-132.929199,69.50531],[-131.431274,69.944519],[-129.794678,70.193726],[-129.107727,69.779297],[-128.361511,70.012878],[-128.138184,70.483887],[-127.447083,70.377319],[-125.756287,69.480713],[-124.424805,70.158508],[-124.289612,69.399719],[-123.061096,69.563721],[-122.683411,69.85553],[-121.47229,69.797913],[-119.94281,69.37793],[-117.6026,69.011292],[-116.226379,68.841492],[-115.246887,68.905884],[-113.897888,68.398926],[-115.30481,67.90271],[-113.497192,67.688293],[-110.797913,67.806091],[-109.946106,67.981079],[-108.880188,67.381531],[-107.792419,67.887512],[-108.812988,68.311707],[-108.167175,68.653931],[-106.950012,68.700073],[-106.150024,68.80011],[-105.342773,68.561279],[-104.337891,68.018127],[-103.221069,68.0979],[-101.454285,67.646912],[-99.901978,67.805725],[-98.443176,67.781677],[-98.558594,68.403931],[-97.669495,68.578674],[-96.119873,68.239502],[-96.125793,67.293518],[-95.48938,68.090698],[-94.684998,68.063904],[-94.232788,69.069092],[-95.304077,69.68573],[-96.471313,70.089905],[-96.391113,71.194885],[-95.208801,71.920471],[-93.889893,71.760071],[-92.878113,71.318726],[-91.519592,70.191284],[-92.406921,69.700073],[-90.547119,69.497681]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-119.40199,68.53554,-100.98078,73.31459],geometry:{type:"Polygon",coordinates:[[[-114.16717,73.12145],[-114.66634,72.65277],[-112.44102,72.9554],[-111.05039,72.4504],[-109.92035,72.96113],[-109.00654,72.63335],[-108.18835,71.65089],[-107.68599,72.06548],[-108.39639,73.08953],[-107.51645,73.23598],[-106.52259,73.07601],[-105.40246,72.67259],[-104.77484,71.6984],[-104.46476,70.99297],[-102.78537,70.49776],[-100.98078,70.02432],[-101.08929,69.58447],[-102.73116,69.50402],[-102.09329,69.11962],[-102.43024,68.75282],[-104.24,68.91],[-105.96,69.18],[-107.12254,69.11922],[-109,68.78],[-111.9668,68.60446],[-113.3132,68.53554],[-113.85496,69.00744],[-115.22,69.28],[-116.10794,69.16821],[-117.34,69.96],[-116.67473,70.06655],[-115.13112,70.2373],[-113.72141,70.19237],[-112.4161,70.36638],[-114.35,70.6],[-116.48684,70.52045],[-117.9048,70.54056],[-118.43238,70.9092],[-116.11311,71.30918],[-117.65568,71.2952],[-119.40199,71.55859],[-118.56267,72.30785],[-117.86642,72.70594],[-115.18909,73.31459],[-114.16717,73.12145]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1.5},bbox:[-106.94,72.76,-104.5,73.64],geometry:{type:"Polygon",coordinates:[[[-104.5,73.42],[-105.38,72.76],[-106.94,73.46],[-106.6,73.6],[-105.26,73.64],[-104.5,73.42]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[-80.876099,72.742203,-76.251404,73.75972],geometry:{type:"Polygon",coordinates:[[[-76.34,73.102685],[-76.251404,72.826385],[-77.314438,72.855545],[-78.39167,72.876656],[-79.486252,72.742203],[-79.775833,72.802902],[-80.876099,73.333183],[-80.833885,73.693184],[-80.353058,73.75972],[-78.064438,73.651932],[-76.34,73.102685]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-90.20516,61.930897,-61.851981,73.803816],geometry:{type:"Polygon",coordinates:[[[-86.562179,73.157447],[-85.774371,72.534126],[-84.850112,73.340278],[-82.31559,73.750951],[-80.600088,72.716544],[-80.748942,72.061907],[-78.770639,72.352173],[-77.824624,72.749617],[-75.605845,72.243678],[-74.228616,71.767144],[-74.099141,71.33084],[-72.242226,71.556925],[-71.200015,70.920013],[-68.786054,70.525024],[-67.91497,70.121948],[-66.969033,69.186087],[-68.805123,68.720198],[-66.449866,68.067163],[-64.862314,67.847539],[-63.424934,66.928473],[-61.851981,66.862121],[-62.163177,66.160251],[-63.918444,64.998669],[-65.14886,65.426033],[-66.721219,66.388041],[-68.015016,66.262726],[-68.141287,65.689789],[-67.089646,65.108455],[-65.73208,64.648406],[-65.320168,64.382737],[-64.669406,63.392927],[-65.013804,62.674185],[-66.275045,62.945099],[-68.783186,63.74567],[-67.369681,62.883966],[-66.328297,62.280075],[-66.165568,61.930897],[-68.877367,62.330149],[-71.023437,62.910708],[-72.235379,63.397836],[-71.886278,63.679989],[-73.378306,64.193963],[-74.834419,64.679076],[-74.818503,64.389093],[-77.70998,64.229542],[-78.555949,64.572906],[-77.897281,65.309192],[-76.018274,65.326969],[-73.959795,65.454765],[-74.293883,65.811771],[-73.944912,66.310578],[-72.651167,67.284576],[-72.92606,67.726926],[-73.311618,68.069437],[-74.843307,68.554627],[-76.869101,68.894736],[-76.228649,69.147769],[-77.28737,69.76954],[-78.168634,69.826488],[-78.957242,70.16688],[-79.492455,69.871808],[-81.305471,69.743185],[-84.944706,69.966634],[-87.060003,70.260001],[-88.681713,70.410741],[-89.51342,70.762038],[-88.467721,71.218186],[-89.888151,71.222552],[-90.20516,72.235074],[-89.436577,73.129464],[-88.408242,73.537889],[-85.826151,73.803816],[-86.562179,73.157447]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-102.5,71.27285,-96.54,73.84389],geometry:{type:"Polygon",coordinates:[[[-100.35642,73.84389],[-99.16387,73.63339],[-97.38,73.76],[-97.12,73.47],[-98.05359,72.99052],[-96.54,72.56],[-96.72,71.66],[-98.35966,71.27285],[-99.32286,71.35639],[-100.01482,71.73827],[-102.5,72.51],[-102.48,72.83],[-100.43836,72.70588],[-101.54,73.36],[-100.35642,73.84389]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[139.86312,73.20544,143.60385,73.85758],geometry:{type:"Polygon",coordinates:[[[143.60385,73.21244],[142.08763,73.20544],[140.038155,73.31692],[139.86312,73.36983],[140.81171,73.76506],[142.06207,73.85758],[143.48283,73.47525],[143.60385,73.21244]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[-96.033745,72.024596,-90.509793,74.134907],geometry:{type:"Polygon",coordinates:[[[-93.196296,72.771992],[-94.269047,72.024596],[-95.409856,72.061881],[-96.033745,72.940277],[-96.018268,73.43743],[-95.495793,73.862417],[-94.503658,74.134907],[-92.420012,74.100025],[-90.509793,73.856732],[-92.003965,72.966244],[-93.196296,72.771992]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-125.92896,70.90164,-115.51081,74.44893],geometry:{type:"Polygon",coordinates:[[[-120.46,71.4],[-123.09219,70.90164],[-123.62,71.34],[-125.92896,71.86868],[-125.59271,72.19452],[-124.80729,73.02256],[-123.94,73.68],[-124.91775,74.29275],[-121.53788,74.44893],[-120.10978,74.24135],[-117.55564,74.18577],[-116.58442,73.89607],[-115.51081,73.47519],[-116.76794,73.22292],[-119.22,72.52],[-120.46,71.82],[-120.46,71.4]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:1},bbox:[146.11919,74.68892,150.73167,75.49682],geometry:{type:"Polygon",coordinates:[[[150.73167,75.08406],[149.575925,74.68892],[147.977465,74.778355],[146.11919,75.17298],[146.358485,75.49682],[148.22223,75.345845],[150.73167,75.08406]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-96.820932,74.592347,-93.612756,75.647218],geometry:{type:"Polygon",coordinates:[[[-93.612756,74.979997],[-94.156909,74.592347],[-95.608681,74.666864],[-96.820932,74.927623],[-96.288587,75.377828],[-94.85082,75.647218],[-93.977747,75.29649],[-93.612756,74.979997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[136.97439,74.61148,145.086285,76.13676],geometry:{type:"Polygon",coordinates:[[[145.086285,75.562625],[144.3,74.82],[140.61381,74.84768],[138.95544,74.61148],[136.97439,75.26167],[137.51176,75.94917],[138.831075,76.13676],[141.471615,76.09289],[145.086285,75.562625]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-102.56552,74.89744,-97.704415,76.72],geometry:{type:"Polygon",coordinates:[[[-98.5,76.72],[-97.735585,76.25656],[-97.704415,75.74344],[-98.16,75],[-99.80874,74.89744],[-100.88366,75.05736],[-100.86292,75.64075],[-102.50209,75.5638],[-102.56552,76.3366],[-101.48973,76.30537],[-99.98349,76.64634],[-98.57699,76.58859],[-98.5,76.72]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-117.7104,74.39427,-105.70498,76.79417],geometry:{type:"Polygon",coordinates:[[[-108.21141,76.20168],[-107.81943,75.84552],[-106.92893,76.01282],[-105.881,75.9694],[-105.70498,75.47951],[-106.31347,75.00527],[-109.7,74.85],[-112.22307,74.41696],[-113.74381,74.39427],[-113.87135,74.72029],[-111.79421,75.1625],[-116.31221,75.04343],[-117.7104,75.2222],[-116.34602,76.19903],[-115.40487,76.47887],[-112.59056,76.14134],[-110.81422,75.54919],[-109.0671,75.47321],[-110.49726,76.42982],[-109.5811,76.79417],[-108.54859,76.67832],[-108.21141,76.20168]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[51.455754,70.632743,68.852211,76.939697],geometry:{type:"Polygon",coordinates:[[[57.535693,70.720464],[56.944979,70.632743],[53.677375,70.762658],[53.412017,71.206662],[51.601895,71.474759],[51.455754,72.014881],[52.478275,72.229442],[52.444169,72.774731],[54.427614,73.627548],[53.50829,73.749814],[55.902459,74.627486],[55.631933,75.081412],[57.868644,75.60939],[61.170044,76.251883],[64.498368,76.439055],[66.210977,76.809782],[68.15706,76.939697],[68.852211,76.544811],[68.180573,76.233642],[64.637326,75.737755],[61.583508,75.260885],[58.477082,74.309056],[56.986786,73.333044],[55.419336,72.371268],[55.622838,71.540595],[57.535693,70.720464]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-97.121379,74.392307,-79.833933,77.161389],geometry:{type:"Polygon",coordinates:[[[-94.684086,77.097878],[-93.573921,76.776296],[-91.605023,76.778518],[-90.741846,76.449597],[-90.969661,76.074013],[-89.822238,75.847774],[-89.187083,75.610166],[-87.838276,75.566189],[-86.379192,75.482421],[-84.789625,75.699204],[-82.753445,75.784315],[-81.128531,75.713983],[-80.057511,75.336849],[-79.833933,74.923127],[-80.457771,74.657304],[-81.948843,74.442459],[-83.228894,74.564028],[-86.097452,74.410032],[-88.15035,74.392307],[-89.764722,74.515555],[-92.422441,74.837758],[-92.768285,75.38682],[-92.889906,75.882655],[-93.893824,76.319244],[-95.962457,76.441381],[-97.121379,76.751078],[-96.745123,77.161389],[-94.684086,77.097878]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-122.854925,75.900019,-116.198587,77.645287],geometry:{type:"Polygon",coordinates:[[[-116.198587,77.645287],[-116.335813,76.876962],[-117.106051,76.530032],[-118.040412,76.481172],[-119.899318,76.053213],[-121.499995,75.900019],[-122.854924,76.116543],[-122.854925,76.116543],[-121.157535,76.864508],[-119.103939,77.51222],[-117.570131,77.498319],[-116.198587,77.645287]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-17.625,-34.819092,180,77.697876],geometry:{type:"Polygon",coordinates:[[[106.970276,76.974304],[107.240112,76.480103],[108.153931,76.723328],[111.077271,76.710083],[113.331482,76.22229],[114.134277,75.847717],[113.885498,75.327881],[112.779297,75.031921],[110.151306,74.476685],[109.400085,74.180115],[110.640076,74.0401],[112.119324,73.78772],[113.01947,73.976929],[113.529724,73.335083],[113.968872,73.59491],[115.567871,73.75293],[118.776306,73.587708],[119.020081,73.120117],[123.200684,72.971313],[123.257874,73.735107],[125.380127,73.56012],[126.976501,73.565491],[128.591309,73.038696],[129.051697,72.398682],[128.460083,71.980103],[129.716125,71.193115],[131.288696,70.787109],[132.253479,71.836304],[133.857727,71.386475],[135.562073,71.655273],[137.497681,71.347717],[138.234131,71.628113],[139.869873,71.487915],[139.147888,72.416321],[140.468079,72.849487],[149.500122,72.200073],[150.351318,71.606506],[152.968872,70.842285],[157.006897,71.031494],[158.997925,70.866699],[159.830322,70.453308],[159.708679,69.722107],[160.940674,69.437317],[162.279114,69.64209],[164.05249,69.668274],[165.940491,69.472107],[167.835693,69.582703],[169.577698,68.693909],[170.816895,69.013672],[170.008301,69.652893],[170.453491,70.097107],[173.643921,69.817505],[175.724121,69.877319],[178.600098,69.400085],[180,68.963722],[180,64.979584],[179.99292,64.974304],[178.707275,64.534912],[177.411316,64.608276],[178.31311,64.075928],[178.908325,63.252075],[179.370483,62.982727],[179.486511,62.569092],[179.228271,62.304077],[177.364319,62.521912],[174.569275,61.769287],[173.680115,61.65271],[172.150085,60.950073],[170.698486,60.336304],[170.330872,59.881897],[168.900513,60.573486],[166.295105,59.788696],[165.840088,60.160095],[164.876892,59.731689],[163.539307,59.868713],[163.217102,59.211121],[162.017273,58.243286],[162.053101,57.839111],[163.191895,57.615112],[163.057922,56.159302],[162.1297,56.122314],[161.701477,55.285706],[162.117493,54.855286],[160.368896,54.344482],[160.021729,53.202698],[158.530884,52.958679],[158.231323,51.942688],[156.789917,51.011108],[156.420105,51.700073],[155.991882,53.158875],[155.433716,55.381104],[155.91449,56.767883],[156.758301,57.364685],[156.810486,57.832092],[158.364319,58.055725],[160.150696,59.31488],[161.87207,60.343079],[163.669678,61.14093],[164.473694,62.55072],[163.258484,62.466309],[162.657898,61.642517],[160.121521,60.544312],[159.302307,61.774109],[156.720703,61.434509],[154.218079,59.758301],[155.043884,59.145081],[152.81189,58.883911],[151.265686,58.780884],[151.338074,59.504089],[149.783691,59.655701],[148.544922,59.16449],[145.487305,59.336487],[142.197876,59.0401],[138.958496,57.088074],[135.126282,54.729675],[136.701721,54.603699],[137.193481,53.977295],[138.164673,53.755127],[138.804688,54.2547],[139.901489,54.189697],[141.345276,53.089722],[141.379272,52.238892],[140.597473,51.239685],[140.513123,50.045471],[140.062073,48.446716],[138.554688,46.999695],[138.219727,46.307922],[136.862305,45.143494],[135.51532,43.989075],[134.869507,43.398315],[133.536926,42.811523],[132.906311,42.798523],[132.278076,43.284485],[130.935913,42.552673],[130.78009,42.220093],[130.400085,42.28009],[129.965881,41.941284],[129.66748,41.601074],[129.705322,40.882874],[129.18811,40.661926],[129.010498,40.485474],[128.633484,40.18988],[127.967529,40.025513],[127.533508,39.756897],[127.502075,39.323914],[127.385498,39.213501],[127.783325,39.050903],[128.34967,38.612305],[129.212891,37.432495],[129.46051,36.784302],[129.468323,35.63208],[129.091492,35.08252],[128.185913,34.890503],[127.386475,34.475708],[126.485718,34.390076],[126.373901,34.934692],[126.559326,35.684692],[126.117493,36.725525],[126.860291,36.893921],[126.174683,37.749695],[125.689087,37.940125],[125.568481,37.752075],[125.27533,37.669128],[125.240112,37.8573],[124.981079,37.948914],[124.71228,38.108276],[124.986084,38.548523],[125.221924,38.665894],[125.132874,38.848694],[125.386719,39.387878],[125.321106,39.551514],[124.737488,39.660278],[124.265686,39.928528],[122.867676,39.637878],[122.131531,39.170471],[121.054688,38.897522],[121.586121,39.360901],[121.376892,39.750305],[122.168701,40.422485],[121.640503,40.946472],[120.768677,40.593506],[119.639709,39.898071],[119.023499,39.252319],[118.042725,39.204285],[117.532715,38.737671],[118.059692,38.061523],[118.878296,37.897278],[118.911682,37.448486],[119.702881,37.156494],[120.823486,37.870483],[121.711304,37.481079],[122.35791,37.454529],[122.520081,36.930725],[121.104309,36.651306],[120.637085,36.111511],[119.664673,35.609924],[119.151306,34.909912],[120.227478,34.360474],[120.620483,33.376709],[121.229126,32.460327],[121.908081,31.692322],[121.891907,30.94928],[121.264282,30.676331],[121.503479,30.142883],[122.092102,29.83252],[121.938477,29.018127],[121.684509,28.225525],[121.125671,28.135681],[120.395508,27.053284],[119.58551,25.740906],[118.656921,24.547485],[117.281677,23.624512],[115.890686,22.782898],[114.763916,22.668091],[114.152527,22.223877],[113.806885,22.548279],[113.241089,22.051514],[111.843689,21.550476],[110.785522,21.397278],[110.444092,20.341125],[109.889893,20.282471],[109.627686,21.008301],[109.864502,21.395081],[108.522888,21.715271],[108.050293,21.55249],[106.715088,20.696899],[105.881714,19.752075],[105.662109,19.058289],[106.42688,18.004089],[107.361877,16.69751],[108.26947,16.079712],[108.877075,15.276672],[109.335327,13.426086],[109.200073,11.66687],[108.366089,11.008301],[107.220886,10.364502],[106.40509,9.530884],[105.158325,8.59967],[104.795288,9.241089],[105.076294,9.918518],[104.334473,10.486694],[103.497314,10.63269],[103.090698,11.153687],[102.585083,12.186707],[101.687073,12.645874],[100.831909,12.627075],[100.978516,13.41272],[100.0979,13.406921],[100.018677,12.307129],[99.478882,10.846497],[99.153687,9.963074],[99.222473,9.239319],[99.873901,9.207886],[100.279724,8.295288],[100.45929,7.429687],[101.017273,6.856873],[101.623108,6.740723],[102.141296,6.22168],[102.371277,6.128296],[102.961731,5.524475],[103.381287,4.855103],[103.438721,4.181702],[103.332092,3.726685],[103.429504,3.382874],[103.502502,2.791077],[103.854675,2.515503],[104.247925,1.631287],[104.228882,1.293091],[103.519714,1.226318],[102.57373,1.967102],[101.390686,2.760925],[101.273682,3.270325],[100.695496,3.939087],[100.557495,4.767273],[100.196716,5.3125],[100.306274,6.04071],[100.085876,6.464478],[99.690674,6.848328],[99.519714,7.343506],[98.988281,7.908081],[98.503906,8.382324],[98.339722,7.794495],[98.150085,8.350098],[98.259277,8.973877],[98.553528,9.933105],[98.457275,10.675293],[98.764526,11.441284],[98.428284,12.033081],[98.509705,13.122498],[98.103699,13.640503],[97.77771,14.83728],[97.597107,16.100708],[97.164673,16.928711],[96.50592,16.427307],[95.369324,15.714478],[94.808472,15.803528],[94.188904,16.038086],[94.533508,17.277283],[94.32489,18.213501],[93.541077,19.366516],[93.66333,19.727112],[93.078308,19.855286],[92.36853,20.670898],[92.082886,21.192322],[92.02533,21.701721],[91.8349,22.182922],[91.417114,22.765076],[90.496094,22.805115],[90.587097,22.392883],[90.272888,21.836487],[89.847473,22.039124],[89.702087,21.857117],[89.418884,21.966309],[89.032104,22.055725],[88.888916,21.690674],[88.208496,21.703308],[86.975708,21.495483],[87.033081,20.743286],[86.499329,20.151672],[85.060303,19.478699],[83.941101,18.302124],[83.18927,17.671326],[82.192871,17.016724],[82.191284,16.556702],[81.692688,16.310303],[80.792114,15.952087],[80.32489,15.899292],[80.025085,15.136475],[80.233276,13.835876],[80.286316,13.006287],[79.862488,12.056274],[79.858093,10.3573],[79.340515,10.308899],[78.885498,9.546082],[79.189697,9.216675],[78.278076,8.933105],[77.941284,8.25293],[77.539917,7.965515],[76.593079,8.899292],[76.130127,10.299683],[75.746521,11.308289],[75.396118,11.781311],[74.864929,12.741882],[74.616699,13.992676],[74.443909,14.61731],[73.534302,15.990723],[73.119873,17.928711],[72.820923,19.208313],[72.824524,20.419495],[72.630676,21.356079],[71.175293,20.757507],[70.47052,20.877319],[69.164124,22.089294],[69.644897,22.450684],[69.34967,22.843323],[68.176697,23.692078],[67.443726,23.944885],[67.145508,24.663696],[66.372925,25.425293],[64.530518,25.237122],[62.905701,25.218506],[61.497498,25.078308],[59.616089,25.380127],[58.525879,25.610107],[57.397278,25.739929],[56.970886,26.966125],[56.492126,27.143311],[55.723694,26.964722],[54.715088,26.480713],[53.493103,26.8125],[52.483704,27.580872],[51.520874,27.865723],[50.853088,28.814514],[50.115112,30.147888],[49.576904,29.985718],[48.941284,30.317078],[48.568115,29.92688],[47.974487,29.975891],[48.183289,29.534485],[48.093872,29.306274],[48.416077,28.552124],[48.807678,27.689697],[49.299683,27.461304],[49.470886,27.110107],[50.152527,26.689697],[50.213074,26.2771],[50.113281,25.944092],[50.239929,25.608093],[50.527527,25.327881],[50.660706,24.999878],[50.81012,24.754883],[50.743896,25.482483],[51.013489,26.00708],[51.286499,26.114685],[51.589111,25.801086],[51.606689,25.215698],[51.389709,24.627502],[51.579529,24.245483],[51.757507,24.294128],[51.794495,24.019897],[52.577087,24.17749],[53.404114,24.151306],[54.008118,24.121887],[54.693115,24.797913],[55.439087,25.439087],[56.070923,26.055481],[56.362122,26.395874],[56.485718,26.309082],[56.391479,25.896118],[56.261108,25.714722],[56.396912,24.924683],[56.845276,24.241699],[57.403503,23.878723],[58.137085,23.747925],[58.729309,23.565674],[59.180481,22.992493],[59.450073,22.660278],[59.808105,22.533691],[59.806274,22.310486],[59.442322,21.714478],[59.282471,21.433899],[58.861084,21.114075],[58.488098,20.429077],[58.034302,20.481506],[57.826477,20.243103],[57.665894,19.736084],[57.788696,19.067688],[57.694519,18.944702],[57.234314,18.94812],[56.60968,18.57428],[56.512329,18.087097],[56.283508,17.876099],[55.661499,17.884277],[55.270081,17.632324],[55.274902,17.228271],[54.791077,16.950684],[54.239319,17.045105],[53.570496,16.707703],[53.108704,16.651123],[52.385315,16.382507],[52.191711,15.938477],[52.168274,15.597473],[51.172485,15.175293],[49.574707,14.708679],[48.679321,14.003296],[48.239075,13.94812],[47.938904,14.007324],[47.354492,13.592285],[46.717102,13.399719],[45.877686,13.3479],[45.625122,13.291077],[45.406494,13.026917],[45.144287,12.953918],[44.989685,12.699707],[44.49469,12.72168],[44.17511,12.585876],[43.483093,12.636902],[43.2229,13.220886],[43.251526,13.7677],[43.088074,14.062683],[42.892273,14.802307],[42.604919,15.213318],[42.805115,15.262085],[42.702515,15.718872],[42.82373,15.911682],[42.77948,16.3479],[42.649719,16.774719],[42.348083,17.075928],[42.270874,17.47467],[41.754517,17.83313],[41.221497,18.671692],[40.93927,19.486511],[40.247681,20.174683],[39.801697,20.338928],[39.139526,21.29187],[39.023682,21.986877],[39.066284,22.579712],[38.49292,23.688477],[38.023926,24.078674],[37.483704,24.285522],[37.154907,24.858521],[37.209473,25.084473],[36.931702,25.603088],[36.639709,25.826294],[36.249084,26.570129],[35.64032,27.376526],[35.13031,28.063477],[34.632324,28.058472],[34.787903,28.607483],[34.832275,28.95752],[34.956116,29.356689],[34.922729,29.501282],[34.641724,29.099487],[34.426697,28.344116],[34.15448,27.823303],[33.921509,27.648682],[33.588074,27.971497],[33.136902,28.417725],[32.423279,29.851074],[32.320496,29.760498],[32.734924,28.705322],[33.348877,27.69989],[34.104675,26.142273],[34.473877,25.598694],[34.795105,25.033875],[35.692505,23.926697],[35.493713,23.752502],[35.526123,23.102478],[36.690674,22.204895],[36.866272,22.000122],[37.188721,21.018921],[36.969482,20.837524],[37.114685,19.808105],[37.481873,18.614075],[37.862671,18.36792],[38.410095,17.998291],[38.990723,16.840698],[39.266113,15.922729],[39.81427,15.43573],[41.179321,14.491089],[41.734924,13.921082],[42.276917,13.344116],[42.589722,13.000488],[43.081299,12.699707],[43.317871,12.390076],[43.286499,11.974915],[42.715881,11.735718],[43.145325,11.462097],[43.470703,11.27771],[43.666687,10.864319],[44.11792,10.445679],[44.614319,10.442322],[45.556885,10.69812],[46.645508,10.816528],[47.525696,11.127319],[48.021729,11.193115],[48.378906,11.375488],[48.948303,11.410706],[49.267883,11.430481],[49.728699,11.578918],[50.258911,11.679688],[50.732117,12.021912],[51.111328,12.024719],[51.133911,11.748291],[51.041504,11.166504],[51.045288,10.64093],[50.83429,10.279724],[50.55249,9.19873],[50.070923,8.081726],[49.452698,6.804688],[48.594482,5.339111],[47.740906,4.219482],[46.56488,2.855286],[45.564087,2.045898],[44.068298,1.052917],[43.136108,.292297],[42.041687,-.919189],[41.811096,-1.446411],[41.585083,-1.683228],[40.884888,-2.08252],[40.637878,-2.499817],[40.263123,-2.57312],[40.121277,-3.27771],[39.80011,-3.681091],[39.604919,-4.346497],[39.202271,-4.676697],[38.740479,-5.908875],[38.799683,-6.475586],[39.440125,-6.840027],[39.470093,-7.099976],[39.194702,-7.703918],[39.252075,-8.007812],[39.186523,-8.485474],[39.535889,-9.112305],[39.949707,-10.098389],[40.316711,-10.317078],[40.478516,-10.765381],[40.437317,-11.761719],[40.560913,-12.639099],[40.59967,-14.201904],[40.775513,-14.691711],[40.477295,-15.406311],[40.089294,-16.100708],[39.452698,-16.720886],[38.53833,-17.101013],[37.411072,-17.586304],[36.281311,-18.659607],[35.896484,-18.842285],[35.198486,-19.552795],[34.786499,-19.783997],[34.701904,-20.497009],[35.176086,-21.254272],[35.373474,-21.84082],[35.385925,-22.140015],[35.562683,-22.090027],[35.533875,-23.070801],[35.371887,-23.535278],[35.607483,-23.706482],[35.458679,-24.12262],[35.04071,-24.478271],[34.215881,-24.816284],[33.013306,-25.357483],[32.574707,-25.727295],[32.660278,-26.148499],[32.916077,-26.215881],[32.830078,-26.742188],[32.580322,-27.470093],[32.46228,-28.301025],[32.203491,-28.75238],[31.521118,-29.257385],[31.325684,-29.401978],[30.901672,-29.909912],[30.622925,-30.423706],[30.055725,-31.140198],[28.925476,-32.171997],[28.219727,-32.771912],[27.464722,-33.22699],[26.419495,-33.614929],[25.909729,-33.666992],[25.780701,-33.94458],[25.172913,-33.796875],[24.677917,-33.987183],[23.594116,-33.794495],[22.988281,-33.916382],[22.57428,-33.864075],[21.542908,-34.258789],[20.689087,-34.417175],[20.071289,-34.795105],[19.616516,-34.819092],[19.193298,-34.462585],[18.855286,-34.444275],[18.424683,-33.997803],[18.377502,-34.136475],[18.244507,-33.867676],[18.250122,-33.281372],[17.925293,-32.611206],[18.247925,-32.429077],[18.22168,-31.661621],[17.566895,-30.725708],[17.064514,-29.878601],[17.062927,-29.875977],[16.345093,-28.576721],[15.601929,-27.821228],[15.21051,-27.090881],[14.989685,-26.11731],[14.743286,-25.392883],[14.408081,-23.853027],[14.385681,-22.656677],[14.25769,-22.111206],[13.868713,-21.698975],[13.352478,-20.872803],[12.826904,-19.673096],[12.608704,-19.045288],[11.794922,-18.069092],[11.734314,-17.30188],[11.640076,-16.673096],[11.778687,-15.793823],[12.123718,-14.878296],[12.17572,-14.449097],[12.500122,-13.547729],[12.738525,-13.137878],[13.312927,-12.483582],[13.633728,-12.038574],[13.738708,-11.297791],[13.686523,-10.731079],[13.387329,-10.373596],[13.121094,-9.766907],[12.875488,-9.16687],[12.929077,-8.959106],[13.236511,-8.562622],[12.933105,-7.596497],[12.728271,-6.927124],[12.227478,-6.294373],[12.32251,-6.100098],[12.182312,-5.789917],[11.9151,-5.037903],[11.093689,-3.978821],[10.066284,-2.969482],[9.405273,-2.144287],[8.798096,-1.111328],[8.830078,-.778992],[9.048523,-.45929],[9.291321,.268677],[9.49292,1.010071],[9.305725,1.160889],[9.649292,2.283875],[9.795288,3.073486],[9.40448,3.734497],[8.94812,3.904114],[8.744873,4.352295],[8.488892,4.495728],[8.500305,4.772095],[7.462097,4.412109],[7.082703,4.464722],[6.69812,4.240723],[5.898315,4.262512],[5.362915,4.888123],[5.033691,5.611877],[4.325684,6.270691],[3.57428,6.258301],[2.691711,6.258911],[1.865295,6.142273],[1.06012,5.928894],[-.507629,5.343506],[-1.063599,5.000488],[-1.964722,4.71051],[-2.856079,4.994507],[-3.311096,4.984314],[-4.008789,5.179871],[-4.649902,5.168274],[-5.834412,4.993713],[-6.528687,4.705078],[-7.518921,4.338318],[-7.712097,4.364685],[-7.974121,4.355896],[-9.004822,4.83252],[-9.913391,5.593689],[-10.765381,6.140686],[-11.438782,6.785889],[-11.708191,6.860107],[-12.428101,7.262878],[-12.948975,7.798706],[-13.124023,8.163879],[-13.246521,8.903076],[-13.685181,9.494873],[-14.073975,9.886292],[-14.330078,10.015686],[-14.579712,10.214478],[-14.693176,10.656311],[-14.839478,10.876709],[-15.13031,11.040527],[-15.664185,11.458496],[-16.085205,11.524719],[-16.314697,11.806519],[-16.308899,11.958679],[-16.61377,12.170898],[-16.677429,12.384888],[-16.841492,13.151489],[-16.713684,13.595093],[-17.126099,14.373474],[-17.625,14.729675],[-17.185181,14.919495],[-16.700684,15.621521],[-16.463013,16.135071],[-16.549683,16.673889],[-16.270508,17.167114],[-16.146301,18.108521],[-16.256897,19.09668],[-16.377625,19.593872],[-16.277771,20.092529],[-16.536316,20.567871],[-17.063416,20.999878],[-17.020386,21.422302],[-16.973206,21.885681],[-16.589111,22.158325],[-16.261902,22.679321],[-16.326416,23.017883],[-15.982605,23.723511],[-15.426025,24.359131],[-15.089294,24.520325],[-14.824585,25.103516],[-14.800903,25.636292],[-14.43988,26.254517],[-13.773804,26.618896],[-13.139893,27.640076],[-12.618774,28.03833],[-11.688904,28.148682],[-10.900879,28.832275],[-10.399597,29.098694],[-9.564819,29.933716],[-9.814697,31.177673],[-9.434814,32.038086],[-9.30072,32.564697],[-8.65741,33.240295],[-7.654175,33.697083],[-6.912476,34.110474],[-6.244324,35.145874],[-5.929993,35.760071],[-5.193787,35.75531],[-4.591003,35.330688],[-3.640076,35.399902],[-2.604309,35.179077],[-2.169922,35.168518],[-1.208618,35.714905],[-.12738,35.888672],[.503906,36.301331],[1.466919,36.605713],[3.161682,36.783875],[4.815674,36.865112],[5.320129,36.716492],[6.261902,37.110718],[7.330505,37.11853],[7.737122,36.885681],[8.421082,36.946472],[9.510071,37.350098],[10.210083,37.230103],[10.180725,36.724121],[11.028931,37.092102],[11.100098,36.900085],[10.600098,36.410095],[10.593323,35.94751],[10.939514,35.699097],[10.807922,34.833496],[10.149719,34.330688],[10.339722,33.785889],[10.856873,33.768677],[11.108521,33.293274],[11.488892,33.137085],[12.66333,32.792908],[13.083313,32.878906],[13.918701,32.712097],[15.245728,32.265076],[15.713928,31.376282],[16.611694,31.182312],[18.021118,30.763489],[19.086487,30.266479],[19.574097,30.525879],[20.053284,30.985901],[19.820312,31.751892],[20.134094,32.238281],[20.854492,32.706909],[21.543091,32.843323],[22.895874,32.638489],[23.236877,32.191528],[23.609131,32.187317],[23.92749,32.016724],[24.921082,31.899475],[25.164917,31.569275],[26.4953,31.585693],[27.457703,31.321289],[28.4505,31.025879],[28.913513,30.870117],[29.683472,31.18689],[30.095093,31.473511],[30.976929,31.555908],[31.68811,31.429688],[31.96051,30.933716],[32.192505,31.260315],[32.993896,31.024109],[33.773499,30.967529],[34.265503,31.219482],[34.556519,31.548889],[34.488098,31.60553],[34.752686,32.072876],[34.955505,32.827515],[35.098511,33.080688],[35.126099,33.090881],[35.4823,33.905518],[35.979675,34.610107],[35.998474,34.644897],[35.90509,35.410095],[36.149902,35.821472],[35.782104,36.275085],[36.160889,36.650696],[35.551086,36.565491],[34.714478,36.795471],[34.026917,36.220093],[32.509277,36.107483],[31.699707,36.644287],[30.621704,36.677917],[30.391113,36.263123],[29.700073,36.144287],[28.73291,36.67688],[27.641296,36.658875],[27.048889,37.653503],[26.318298,38.20813],[26.804688,38.985901],[26.170898,39.463684],[27.28009,40.420105],[28.820129,40.460083],[29.240112,41.220093],[31.145874,41.087708],[32.348083,41.736328],[33.513306,42.019104],[35.167725,42.040283],[36.913086,41.33551],[38.347717,40.94873],[39.512695,41.102905],[40.373474,41.013672],[41.554077,41.535706],[41.703308,41.963074],[41.453491,42.645081],[40.875488,43.013672],[40.321472,43.128723],[39.955078,43.43512],[38.680115,44.28009],[37.539124,44.657288],[36.675476,45.24469],[37.40332,45.40448],[38.233093,46.240906],[37.673706,46.636719],[39.147705,47.044678],[39.121277,47.263489],[38.223694,47.102295],[37.42511,47.022278],[36.759888,46.69873],[35.82373,46.645874],[34.96228,46.273315],[35.020874,45.651306],[35.510071,45.410095],[36.53009,45.470093],[36.334717,45.113281],[35.240112,44.940125],[33.882507,44.361511],[33.326477,44.56488],[33.546875,45.034912],[32.454285,45.327515],[32.63092,45.519287],[33.588074,45.851685],[33.298706,46.080688],[31.74408,46.333496],[31.675293,46.706299],[30.748901,46.58313],[30.377686,46.032471],[29.603271,45.293274],[29.626526,45.035522],[29.141724,44.820312],[28.837891,44.913879],[28.558105,43.70752],[28.039124,43.293274],[27.673889,42.577881],[27.996704,42.007507],[28.115479,41.622925],[28.988525,41.299927],[28.806519,41.054871],[27.61908,40.999878],[27.192505,40.690674],[26.358093,40.1521],[26.043274,40.617676],[26.056885,40.824097],[25.447693,40.852478],[24.925903,40.947083],[23.714905,40.687073],[24.408081,40.125122],[23.900085,39.962097],[23.343079,39.961121],[22.814087,40.476074],[22.626282,40.256531],[22.84967,39.659302],[23.350098,39.190125],[22.973083,38.970886],[23.53009,38.510071],[24.025085,38.220093],[24.0401,37.65509],[23.115112,37.920105],[23.410095,37.410095],[22.775085,37.305115],[23.154297,36.422485],[22.490112,36.410095],[21.670105,36.845093],[21.295105,37.645081],[21.120117,38.310303],[20.730103,38.770081],[20.217712,39.340271],[20.150085,39.625122],[19.980103,39.695129],[19.960083,39.9151],[19.406128,40.250916],[19.319092,40.727295],[19.403687,41.409485],[19.5401,41.720093],[19.371887,41.877686],[19.162476,41.955078],[18.88208,42.281494],[18.450073,42.480103],[17.509888,42.850098],[16.930115,43.210083],[16.015503,43.507324],[15.1745,44.243286],[15.376282,44.317871],[14.920288,44.738525],[14.901672,45.076111],[14.258728,45.233887],[13.952271,44.802124],[13.657104,45.137085],[13.679504,45.484131],[13.715088,45.500305],[13.937683,45.591125],[13.141724,45.736694],[12.328674,45.381897],[12.383911,44.885498],[12.261475,44.600525],[12.589294,44.091492],[13.526917,43.587708],[14.029907,42.761108],[15.1427,41.955078],[15.926331,41.961304],[16.169922,41.740295],[15.889282,41.541077],[16.785095,41.179688],[17.519287,40.877075],[18.376709,40.355713],[18.480286,40.168884],[18.293518,39.810913],[17.738525,40.27771],[16.86969,40.442322],[16.44873,39.795471],[17.171509,39.424683],[17.052917,38.902893],[16.635071,38.843689],[16.101074,37.985901],[15.684082,37.908875],[15.68811,38.214722],[15.89209,38.750916],[16.109314,38.964478],[15.718872,39.544128],[15.413696,40.048279],[14.998474,40.173096],[14.703308,40.604675],[14.06073,40.786499],[13.628113,41.188293],[12.888123,41.253113],[12.106689,41.704529],[11.191895,42.35553],[10.512085,42.931519],[10.200073,43.920105],[9.702515,44.036316],[8.888916,44.366272],[8.428711,44.231323],[7.850891,43.767273],[7.435303,43.693909],[6.529297,43.128906],[4.556885,43.399719],[3.100525,43.075317],[2.986084,42.473083],[3.03949,41.89209],[2.091919,41.226074],[.810486,41.014709],[.721313,40.678284],[.106689,40.124084],[-.278687,39.31012],[.111328,38.738525],[-.467102,38.29248],[-.683411,37.642273],[-1.438293,37.443115],[-2.146423,36.674072],[-3.41571,36.658875],[-4.368896,36.677917],[-4.995178,36.324707],[-5.377075,35.946899],[-5.866394,36.029907],[-6.236694,36.367676],[-6.520203,36.942871],[-7.453674,37.0979],[-7.855591,36.838318],[-8.382812,36.978882],[-8.898804,36.868896],[-8.746094,37.651489],[-8.840027,38.266296],[-9.287476,38.358521],[-9.526489,38.737488],[-9.446899,39.39209],[-9.048279,39.755127],[-8.977295,40.159302],[-8.768677,40.760681],[-8.790771,41.184326],[-8.990784,41.543518],[-9.03479,41.880676],[-8.984375,42.592896],[-9.392883,43.026672],[-7.97821,43.748474],[-6.754517,43.567871],[-5.411804,43.57428],[-4.347778,43.403503],[-3.517517,43.455872],[-1.901306,43.422913],[-1.384216,44.022705],[-1.193787,46.014893],[-2.225708,47.064514],[-2.963196,47.570312],[-4.491577,47.955078],[-4.592285,48.684082],[-3.295776,48.901672],[-1.616516,48.64447],[-1.933411,49.776489],[-.98938,49.347473],[1.338684,50.127319],[1.639099,50.946716],[2.513489,51.148499],[3.315125,51.345886],[3.830322,51.620483],[4.706116,53.091919],[6.07428,53.510498],[6.905273,53.4823],[7.100525,53.693909],[7.936279,53.748291],[8.121704,53.527893],[8.80072,54.020874],[8.572083,54.395691],[8.526306,54.962891],[8.1203,55.5177],[8.090088,56.5401],[8.256714,56.81012],[8.543518,57.110107],[9.4245,57.172119],[9.775696,57.447876],[10.580078,57.730103],[10.546082,57.215881],[10.250122,56.890076],[10.370117,56.610107],[10.912292,56.458679],[10.667908,56.081482],[10.370117,56.190125],[9.650085,55.470093],[9.921875,54.983093],[9.939697,54.59668],[10.950073,54.363708],[10.939514,54.008728],[11.956299,54.196472],[12.518494,54.47052],[13.647522,54.0755],[14.11969,53.75708],[14.802917,54.05072],[16.363525,54.513306],[17.622925,54.851685],[18.620911,54.682678],[18.696289,54.438721],[19.660706,54.426086],[19.888489,54.866089],[21.268494,55.190491],[21.055908,56.031128],[21.090515,56.783875],[21.581909,57.411926],[22.524475,57.753479],[23.318481,57.006287],[24.120728,57.025696],[24.312927,57.793518],[24.429077,58.383484],[24.061279,58.257507],[23.426697,58.612671],[23.339905,59.187317],[24.604309,59.465881],[25.864319,59.611084],[26.94928,59.445923],[27.981079,59.475525],[29.117676,60.028076],[28.070129,60.503479],[26.25531,60.423889],[24.496704,60.057312],[22.86969,59.846497],[22.290894,60.391907],[21.322327,60.720276],[21.544922,61.705322],[21.059326,62.607483],[21.536072,63.18988],[22.442688,63.817871],[24.73053,64.902283],[25.398071,65.111511],[25.294128,65.534485],[23.903503,66.006897],[22.183289,65.723877],[21.213501,65.026123],[21.36969,64.413696],[19.778931,63.60968],[17.8479,62.749512],[17.11969,61.341309],[17.831482,60.636719],[18.78772,60.081909],[17.869324,58.953918],[16.829285,58.71991],[16.447693,57.041077],[15.879883,56.104309],[14.666687,56.200928],[14.100708,55.407898],[12.942871,55.361877],[12.625122,56.307129],[11.788086,57.441895],[11.027283,58.856079],[10.356689,59.46991],[8.38208,58.313293],[7.048889,58.078918],[5.665894,58.588074],[5.308289,59.66333],[4.992126,61.97113],[5.912903,62.614502],[8.553528,63.454102],[10.52771,64.486084],[12.358276,65.8797],[14.761292,67.81073],[16.435913,68.563293],[19.184082,69.817505],[21.378479,70.25531],[23.023682,70.202087],[24.546692,71.030518],[26.370117,70.986328],[28.165527,71.185486],[31.293518,70.453918],[30.005493,70.186279],[31.101074,69.558105],[32.13269,69.905884],[33.775513,69.301514],[36.514099,69.063477],[40.29248,67.932495],[41.059875,67.457275],[41.126099,66.791687],[40.01593,66.266296],[38.382874,65.999512],[33.918701,66.759705],[33.184509,66.632507],[34.81488,65.900085],[34.943909,64.41449],[36.231323,64.109497],[37.012878,63.849915],[37.14209,64.334717],[36.5177,64.780273],[37.176086,65.143311],[39.593506,64.520874],[40.43573,64.764526],[39.762695,65.496887],[42.093079,66.476318],[43.016113,66.418701],[43.94989,66.069092],[44.532288,66.756287],[43.698486,67.352478],[44.187927,67.9505],[43.452881,68.570923],[46.250122,68.250122],[46.821289,67.68988],[45.555298,67.566528],[45.562073,67.010071],[46.349121,66.667725],[47.894287,66.884521],[48.138672,67.522522],[50.227722,67.998718],[53.717529,68.857483],[54.47168,68.808289],[53.485901,68.201294],[54.726318,68.097107],[55.442688,68.438721],[57.317078,68.466309],[58.802124,68.88092],[59.941528,68.278503],[61.077881,68.940674],[60.03009,69.520081],[60.55011,69.850098],[63.504089,69.547485],[64.888123,69.234924],[68.512085,68.092285],[69.180725,68.615723],[68.16449,69.144287],[68.135315,69.356506],[66.930115,69.454712],[67.259888,69.928711],[66.724915,70.708923],[66.694702,71.029114],[68.5401,71.934509],[69.196289,72.843506],[69.940125,73.0401],[72.587524,72.776306],[72.796082,72.220093],[71.848083,71.409119],[72.470093,71.090271],[72.79187,70.391113],[72.564697,69.020874],[73.667908,68.407898],[73.238708,67.740479],[71.28009,66.320129],[72.423096,66.172729],[72.820679,66.532715],[73.921082,66.78949],[74.186523,67.284302],[75.052124,67.760498],[74.469299,68.329102],[74.935913,68.989319],[73.842285,69.071472],[73.601929,69.627686],[74.399902,70.631897],[73.101074,71.447083],[74.89093,72.121277],[74.659302,72.832275],[75.158081,72.855103],[75.683472,72.300476],[75.289124,71.335693],[76.359131,71.152893],[75.903076,71.874084],[77.576721,72.267273],[79.6521,72.320129],[81.500122,71.750122],[80.610718,72.582886],[80.511108,73.648315],[82.250122,73.850098],[84.655273,73.805908],[86.822327,73.93689],[86.009705,74.459717],[87.16687,75.116516],[88.315674,75.143921],[90.260071,75.640076],[92.900696,75.773315],[93.234314,76.047302],[95.860107,76.140076],[96.678284,75.915527],[98.922485,76.446899],[100.759705,76.430298],[101.035278,76.861877],[101.990906,77.287476],[104.351685,77.697876],[106.066711,77.373901],[104.705078,77.127502],[106.970276,76.974304]],[[49.110291,41.282288],[49.618896,40.572876],[50.0849,40.526306],[50.392883,40.256531],[49.569275,40.176086],[49.395325,39.399475],[49.223328,39.049316],[48.856506,38.815491],[48.883301,38.320313],[49.199707,37.582886],[50.147888,37.374695],[50.842285,36.872925],[52.264099,36.7005],[53.825928,36.965088],[53.921692,37.198914],[53.735474,37.906128],[53.88092,38.952087],[53.101074,39.29071],[53.35791,39.975281],[52.694092,40.033691],[52.915283,40.876526],[53.858276,40.631104],[54.736877,40.951111],[54.008301,41.551331],[53.72168,42.123291],[52.916687,41.868103],[52.814697,41.135498],[52.502502,41.783325],[52.446289,42.027283],[52.692078,42.443909],[52.501526,42.792297],[51.342529,43.133118],[50.891296,44.031128],[50.339111,44.284119],[50.305725,44.609924],[51.278503,44.514893],[51.316895,45.246094],[52.16748,45.408508],[53.040894,45.259094],[53.220886,46.23468],[53.042725,46.853088],[52.042114,46.804687],[51.192078,47.048706],[50.034119,46.609131],[49.101318,46.399475],[48.645508,45.806274],[47.675903,45.641479],[46.682129,44.609314],[47.590881,43.660278],[47.492493,42.986694],[48.584473,41.808899],[49.110291,41.282288]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-96.436304,77.491343,-93.720656,77.834629],geometry:{type:"Polygon",coordinates:[[[-93.840003,77.519997],[-94.295608,77.491343],[-96.169654,77.555111],[-96.436304,77.834629],[-94.422577,77.820005],[-93.720656,77.634331],[-93.840003,77.519997]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-113.534279,77.409229,-109.854452,78.152956],geometry:{type:"Polygon",coordinates:[[[-110.186938,77.697015],[-112.051191,77.409229],[-113.534279,77.732207],[-112.724587,78.05105],[-111.264443,78.152956],[-109.854452,77.996325],[-110.186938,77.697015]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[20.72601,77.44493,24.72412,78.45494],geometry:{type:"Polygon",coordinates:[[[24.72412,77.85385],[22.49032,77.44493],[20.72601,77.67704],[21.41611,77.93504],[20.8119,78.25463],[22.88426,78.45494],[23.28134,78.07954],[24.72412,77.85385]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1.5},bbox:[-112.542091,78.40692,-109.663146,78.849994],geometry:{type:"Polygon",coordinates:[[[-109.663146,78.601973],[-110.881314,78.40692],[-112.542091,78.407902],[-112.525891,78.550555],[-111.50001,78.849994],[-110.963661,78.804441],[-109.663146,78.601973]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[-98.631984,77.850597,-95.559278,78.87193],geometry:{type:"Polygon",coordinates:[[[-95.830295,78.056941],[-97.309843,77.850597],[-98.124289,78.082857],[-98.552868,78.458105],[-98.631984,78.87193],[-97.337231,78.831984],[-96.754399,78.765813],[-95.559278,78.418315],[-95.830295,78.056941]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:.5},bbox:[-105.492289,77.907545,-99.670939,79.301594],geometry:{type:"Polygon",coordinates:[[[-100.060192,78.324754],[-99.670939,77.907545],[-101.30394,78.018985],[-102.949809,78.343229],[-105.176133,78.380332],[-104.210429,78.67742],[-105.41958,78.918336],[-105.492289,79.301594],[-103.529282,79.165349],[-100.825158,78.800462],[-100.060192,78.324754]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:.5},bbox:[99.43814,77.921,105.37243,79.34641],geometry:{type:"Polygon",coordinates:[[[105.07547,78.30689],[99.43814,77.921],[101.2649,79.23399],[102.08635,79.34641],[102.837815,79.28129],[105.37243,78.71334],[105.07547,78.30689]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[10.44453,76.77045,21.54383,80.05086],geometry:{type:"Polygon",coordinates:[[[18.25183,79.70175],[21.54383,78.95611],[19.02737,78.5626],[18.47172,77.82669],[17.59441,77.63796],[17.1182,76.80941],[15.91315,76.77045],[13.76259,77.38035],[14.66956,77.73565],[13.1706,78.02493],[11.22231,78.8693],[10.44453,79.65239],[13.17077,80.01046],[13.71852,79.66039],[15.14282,79.67431],[15.52255,80.01608],[16.99085,80.05086],[18.25183,79.70175]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[17.368015,79.400012,27.407506,80.657144],geometry:{type:"Polygon",coordinates:[[[25.447625,80.40734],[27.407506,80.056406],[25.924651,79.517834],[23.024466,79.400012],[20.075188,79.566823],[19.897266,79.842362],[18.462264,79.85988],[17.368015,80.318896],[20.455992,80.598156],[21.907945,80.357679],[22.919253,80.657144],[25.447625,80.40734]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:1,min_zoom:1},bbox:[44.846958,80.010181,51.522933,80.918885],geometry:{type:"Polygon",coordinates:[[[51.136187,80.54728],[49.793685,80.415428],[48.894411,80.339567],[48.754937,80.175468],[47.586119,80.010181],[46.502826,80.247247],[47.072455,80.559424],[44.846958,80.58981],[46.799139,80.771918],[48.318477,80.78401],[48.522806,80.514569],[49.09719,80.753986],[50.039768,80.918885],[51.522933,80.699726],[51.136187,80.54728]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[91.18107,78.7562,100.186655,81.2504],geometry:{type:"Polygon",coordinates:[[[99.93976,78.88094],[97.75794,78.7562],[94.97259,79.044745],[93.31288,79.4265],[92.5454,80.14379],[91.18107,80.34146],[93.77766,81.0246],[95.940895,81.2504],[97.88385,80.746975],[100.186655,79.780135],[99.93976,78.88094]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-96.70972,78.21533,-85.81435,81.25739],geometry:{type:"Polygon",coordinates:[[[-87.02,79.66],[-85.81435,79.3369],[-87.18756,79.0393],[-89.03535,78.28723],[-90.80436,78.21533],[-92.87669,78.34333],[-93.95116,78.75099],[-93.93574,79.11373],[-93.14524,79.3801],[-94.974,79.37248],[-96.07614,79.70502],[-96.70972,80.15777],[-96.01644,80.60233],[-95.32345,80.90729],[-94.29843,80.97727],[-94.73542,81.20646],[-92.40984,81.25739],[-91.13289,80.72345],[-89.45,80.509322],[-87.81,80.32],[-87.02,79.66]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-91.58702,76.17812,-61.85,83.23324],geometry:{type:"Polygon",coordinates:[[[-68.5,83.106322],[-65.82735,83.02801],[-63.68,82.9],[-61.85,82.6286],[-61.89388,82.36165],[-64.334,81.92775],[-66.75342,81.72527],[-67.65755,81.50141],[-65.48031,81.50657],[-67.84,80.9],[-69.4697,80.61683],[-71.18,79.8],[-73.2428,79.63415],[-73.88,79.430162],[-76.90773,79.32309],[-75.52924,79.19766],[-76.22046,79.01907],[-75.39345,78.52581],[-76.34354,78.18296],[-77.88851,77.89991],[-78.36269,77.50859],[-79.75951,77.20968],[-79.61965,76.98336],[-77.91089,77.022045],[-77.88911,76.777955],[-80.56125,76.17812],[-83.17439,76.45403],[-86.11184,76.29901],[-87.6,76.42],[-89.49068,76.47239],[-89.6161,76.95213],[-87.76739,77.17833],[-88.26,77.9],[-87.65,77.970222],[-84.97634,77.53873],[-86.34,78.18],[-87.96192,78.37181],[-87.15198,78.75867],[-85.37868,78.9969],[-85.09495,79.34543],[-86.50734,79.73624],[-86.93179,80.25145],[-84.19844,80.20836],[-83.408696,80.1],[-81.84823,80.46442],[-84.1,80.58],[-87.59895,80.51627],[-89.36663,80.85569],[-90.2,81.26],[-91.36786,81.5531],[-91.58702,81.89429],[-90.1,82.085],[-88.93227,82.11751],[-86.97024,82.27961],[-85.5,82.652273],[-84.260005,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.30664,83.13056],[-76.25,83.172059],[-75.71878,83.06404],[-72.83153,83.23324],[-70.665765,83.169781],[-68.5,83.106322]]]}},{type:"Feature",properties:{featurecla:"Land",scalerank:0,min_zoom:0},bbox:[-73.297,60.03676,-12.20855,83.64513],geometry:{type:"Polygon",coordinates:[[[-27.10046,83.51966],[-20.84539,82.72669],[-22.69182,82.34165],[-26.51753,82.29765],[-31.9,82.2],[-31.39646,82.02154],[-27.85666,82.13178],[-24.84448,81.78697],[-22.90328,82.09317],[-22.07175,81.73449],[-23.16961,81.15271],[-20.62363,81.52462],[-15.76818,81.91245],[-12.77018,81.71885],[-12.20855,81.29154],[-16.28533,80.58004],[-16.85,80.35],[-20.04624,80.17708],[-17.73035,80.12912],[-18.9,79.4],[-19.70499,78.75128],[-19.67353,77.63859],[-18.47285,76.98565],[-20.03503,76.94434],[-21.67944,76.62795],[-19.83407,76.09808],[-19.59896,75.24838],[-20.66818,75.15585],[-19.37281,74.29561],[-21.59422,74.22382],[-20.43454,73.81713],[-20.76234,73.46436],[-22.17221,73.30955],[-23.56593,73.30663],[-22.31311,72.62928],[-22.29954,72.18409],[-24.27834,72.59788],[-24.79296,72.3302],[-23.44296,72.08016],[-22.13281,71.46898],[-21.75356,70.66369],[-23.53603,70.471],[-24.30702,70.85649],[-25.54341,71.43094],[-25.20135,70.75226],[-26.36276,70.22646],[-23.72742,70.18401],[-22.34902,70.12946],[-25.02927,69.2588],[-27.74737,68.47046],[-30.67371,68.12503],[-31.77665,68.12078],[-32.81105,67.73547],[-34.20196,66.67974],[-36.35284,65.9789],[-37.04378,65.93768],[-38.37505,65.69213],[-39.81222,65.45848],[-40.66899,64.83997],[-40.68281,64.13902],[-41.1887,63.48246],[-42.81938,62.68233],[-42.41666,61.90093],[-42.86619,61.07404],[-43.3784,60.09772],[-44.7875,60.03676],[-46.26364,60.85328],[-48.26294,60.85843],[-49.23308,61.40681],[-49.90039,62.38336],[-51.63325,63.62691],[-52.14014,64.27842],[-52.27659,65.1767],[-53.66166,66.09957],[-53.30161,66.8365],[-53.96911,67.18899],[-52.9804,68.35759],[-51.47536,68.72958],[-51.08041,69.14781],[-50.87122,69.9291],[-52.013585,69.574925],[-52.55792,69.42616],[-53.45629,69.283625],[-54.68336,69.61003],[-54.75001,70.28932],[-54.35884,70.821315],[-53.431315,70.835755],[-51.39014,70.56978],[-53.10937,71.20485],[-54.00422,71.54719],[-55,71.406537],[-55.83468,71.65444],[-54.71819,72.58625],[-55.32634,72.95861],[-56.12003,73.64977],[-57.32363,74.71026],[-58.59679,75.09861],[-58.58516,75.51727],[-61.26861,76.10238],[-63.39165,76.1752],[-66.06427,76.13486],[-68.50438,76.06141],[-69.66485,76.37975],[-71.40257,77.00857],[-68.77671,77.32312],[-66.76397,77.37595],[-71.04293,77.63595],[-73.297,78.04419],[-73.15938,78.43271],[-69.37345,78.91388],[-65.7107,79.39436],[-65.3239,79.75814],[-68.02298,80.11721],[-67.15129,80.51582],[-63.68925,81.21396],[-62.23444,81.3211],[-62.65116,81.77042],[-60.28249,82.03363],[-57.20744,82.19074],[-54.13442,82.19962],[-53.04328,81.88833],[-50.39061,82.43883],[-48.00386,82.06481],[-46.59984,81.985945],[-44.523,81.6607],[-46.9007,82.19979],[-46.76379,82.62796],[-43.40644,83.22516],[-39.89753,83.18018],[-38.62214,83.54905],[-35.08787,83.64513],[-27.10046,83.51966]]]}}],bbox:[-180,-90,180,83.64513]};function Ci(n,e){return(n%e+e)%e}function R3(n,e,t,i){return n+(Ci(e-n+i/2,i)-i/2)*t}function gc(n){let e=(n/864e5+24405875e-1-2451545)/36525,t=-62e-7*e**3+.093104*e**2+(876600*3600+8640184812866e-6)*e+67310.54841;return Ci(t*Math.PI/180/240,Math.PI*2)}function Ao(n,e){let t=0,i=n.length-1;for(;i-t>1;){let h=t+i>>1;Date.parse(n[h].time)<=e?t=h:i=h}let s=n[t],r=n[i],a=Date.parse(s.time),o=Date.parse(r.time),c=Math.max(0,Math.min(1,(e-a)/(o-a))),l={};for(let h of["x","y","z","latitude_deg","altitude_km","speed_km_s"])l[h]=s[h]+(r[h]-s[h])*c;return l.longitude_deg=Ci(R3(s.longitude_deg,r.longitude_deg,c,360)+180,360)-180,l.gmst_rad=gc(a+(o-a)*c),l}var gi=8,_c=["#66ccff","#ff8066","#9be564","#d69cff","#ffd166","#72e0c1","#f28cb1","#b8c0ff"],cd=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function zn(n){return cd[Math.floor(Ci(n,360)/22.5+.5)%cd.length]}function Vn(n){if(/\b403\b/.test(n))return"CelesTrak is limiting downloads of this data for now. Try again later.";if(/Failed to fetch|NetworkError|Load failed/.test(n))return"The Khonsu server could not be reached.";let e=/deadline exceeded|Timeout exceeded|i\/o timeout|connection refused|connection reset|no such host|\b50[234]\b/i.test(n);return e&&/celestrak/i.test(n)?"CelesTrak isn't answering right now. Try again in a few minutes. Anything you've loaded before still works from its saved copy.":e?"The data provider isn't answering right now. Try again in a few minutes.":n}function ud(n){let e=(t,i)=>{try{return t(n())}catch{return i}};return{getItem:t=>e(i=>i.getItem(t),null),setItem:(t,i)=>e(s=>s.setItem(t,i)),removeItem:t=>e(i=>i.removeItem(t))}}function yc(n){return/^\d{1,9}$/.test(n)&&Number(n)>=1}function mi(n){return String(n).replace(/^0+(?=\d)/,"")}function dd(n){let e=new URLSearchParams(n),t=new Set,i=[];for(let r of(e.get("sats")||"").split(",")){let a=mi(r.trim());yc(a)&&!t.has(a)&&i.length<gi&&(t.add(a),i.push(a))}let s=mi(e.get("selected")||"");return{ids:i,selected:t.has(s)?s:i[0]??null}}function fd(n,e){if(!n.length)return"";let t=new URLSearchParams;return t.set("sats",n.join(",")),e&&e!==n[0]&&t.set("selected",e),`?${t.toString().replaceAll("%2C",",")}`}function pd(n){return _c.find(e=>!n.includes(e))??_c[n.length%_c.length]}function vc({lat:n,lon:e,alt:t}){let i=Number(n),s=Number(e),r=t===""||t===void 0||t===null?0:Number(t);return String(n).trim()===""||!Number.isFinite(i)||i<-90||i>90?{error:"Latitude must be between -90 and 90 degrees."}:String(e).trim()===""||!Number.isFinite(s)||s<-180||s>180?{error:"Longitude must be between -180 and 180 degrees."}:!Number.isFinite(r)||r<-1||r>100?{error:"Altitude must be between -1 and 100 km."}:{observer:{lat:i,lon:s,alt:r}}}function md(n){for(let e of["observer","utc"]){let t=n.getItem(`tlego.${e}`);t!==null&&(n.getItem(`khonsu.${e}`)===null&&n.setItem(`khonsu.${e}`,t),n.removeItem(`tlego.${e}`))}}function gd(n){try{let e=JSON.parse(n.getItem("khonsu.observer"));return typeof e?.lat!="number"||typeof e?.lon!="number"?null:vc(e).observer??null}catch{return null}}function _d(n,e){let t=e.trim().toLowerCase();return t?n.filter(i=>i.name.toLowerCase().includes(t)||i.norad_id.includes(t)):n}function bc(n,e){if(!n.length||n[0].elevation_deg===void 0)return null;let t=0,i=n.length-1;for(;i-t>1;){let l=t+i>>1;Date.parse(n[l].time)<=e?t=l:i=l}let s=n[t],r=n[i],a=Date.parse(r.time)-Date.parse(s.time),o=a>0?Math.max(0,Math.min(1,(e-Date.parse(s.time))/a)):0;return{azimuth:Ci(s.azimuth_deg+(Ci(r.azimuth_deg-s.azimuth_deg+180,360)-180)*o,360),elevation:s.elevation_deg+(r.elevation_deg-s.elevation_deg)*o}}function xd(n,e){let t=n[0]?.sunlit??!0;for(let i of n){if(Date.parse(i.time)>e)break;t=i.sunlit}return t}function yd(n,e,t){if(!n.length)return{first:0,count:0};let i=t*6e4,s=Date.parse(n[0].time),r=Date.parse(n[n.length-1].time);if(!(i>0)||r-s<=i)return{first:0,count:n.length};let a=Sc(e-i/2,s,r-i),o=a+i,c=n.length,l=-1;return n.forEach((h,f)=>{let u=Date.parse(h.time);u>=a&&u<=o&&(c=Math.min(c,f),l=f)}),l<c?{first:0,count:n.length}:(c=Math.max(0,c-1),l=Math.min(n.length-1,l+1),{first:c,count:l-c+1})}function Sc(n,e,t){return Math.min(t,Math.max(e,n))}var P3=new Set(["sampled_passes","estimated_visibility"]);function vd(n){let e=new Map;for(let t of n)for(let i of t?.warnings??[])!P3.has(i.code)&&!e.has(i.code)&&e.set(i.code,i);return[...e.values()]}function bd(n,e){return n.map(t=>({...t,visible:e.find(i=>Date.parse(i.start.at)<=Date.parse(t.end)&&Date.parse(i.end.at)>=Date.parse(t.start))??null}))}function Sd(n){let e=Math.max(0,Math.round(n/1e3)),t=Math.floor(e/3600),i=Math.floor(e%3600/60);return t>=48?`${Math.round(t/24)} days`:t>0?`${t} h ${i} min`:i>0?`${i} min ${e%60} s`:`${e} s`}function Mc(n,e){let t=n-e;if(t<=0)return"now";if(t<6e4)return"in under a minute";let i=Math.round(t/6e4);return i<60?`in ${i} min`:`in ${Math.floor(i/60)} h ${i%60} min`}function Co(n,e){return Date.parse(n.start)<=Date.parse(e.end)&&Date.parse(n.end)>=Date.parse(e.start)}function wc(n,e,t){let i=Math.abs(n).toFixed(1);return`${i}\xB0 ${n>=0||Number(i)===0?e:t}`}function xs(n,e){return new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:e?"UTC":void 0}).format(n)}function ys(n,e){return new Intl.DateTimeFormat("en-GB",{weekday:"short",day:"numeric",month:"short",timeZone:e?"UTC":void 0}).format(n)}function Md(n){return n>=5?"Geomagnetic storm":n>=4?"Active":"Quiet"}function wd(n){return!Number.isFinite(n)||n<=0?null:n>=1e9?`${(n/1e9).toFixed(3)} GHz`:`${(n/1e6).toFixed(3)} MHz`}function Ed(n){if(!n.length)return null;let e=n.reduce((i,s)=>s.kp_max>i.kp_max?s:i),t=n.reduce((i,s)=>i+s.f107,0)/n.length;return{strongest:e,meanFlux:t}}function Ec(n,e){let t=Math.max(0,Math.round((e-new Date(n).getTime())/6e4));if(t<1)return"just now";if(t<60)return`${t} min ago`;let i=Math.round(t/60);return i<48?`${i} h ago`:`${Math.round(i/24)} days ago`}function Tc(n){return n?"UTC":"local"}function Td(n,e){return(e-Date.parse(n))/864e5}function Ac(n,e,t){return`${Math.abs(n).toFixed(3)}\xB0 ${n>=0?e:t}`}var I3=36e5,L3=25*36e5;function Cc(n){let e=Math.floor((n-I3)/1e3)*1e3;return{start:e,end:e+L3}}function Rc(n,e){return e<n.start||e>n.end-2*36e5}function Pc(n){let e=n?.kp;return e?.length?e[e.length-1].kp??null:null}function Ad(n){return(n??[]).filter(e=>e.alive===!0&&e.status==="active")}function hd(n){return String(n??"").toLowerCase().replace(/[^\p{L}\p{N}]/gu,"")}function Cd(n,e){let t=hd(n),i=hd(e);return!t||!i?!1:t.includes(i)||i.includes(t)}function Rd(n,e=3e5){if(!n?.length)return[];let t=[...n].sort((r,a)=>Date.parse(a.time)-Date.parse(r.time)),i=[],s=null;for(let r of t){let a=Date.parse(r.time);(!i.length||s-a>e)&&i.push([]),i[i.length-1].push(r),s=a}return i.map(r=>{let a=r[0],o=r.map(c=>c.cloud_cover).filter(c=>typeof c=="number");return{time:Date.parse(a.time),scenes:r,lat:a.center_lat,lon:a.center_lon,minCloud:o.length?Math.min(...o):null,maxCloud:o.length?Math.max(...o):null}})}function Pd(n,e){if(!n?.length)return null;let t=null,i=1/0;for(let s of n){let r=Math.abs(Date.parse(s.time)-e);r<i&&(t=s,i=r)}return i<=36e5?t.percent:null}function Id(n,e){let t=null,i=1/0;for(let s of n??[]){let r=Date.parse(s.net);Number.isNaN(r)||r<e||r<i&&(t=s,i=r)}return t}function Ld(n,e){let t=Date.parse(n.net)-e,i=String(n.precision??"").toLowerCase(),s=i!==""&&!["second","minute","hour"].includes(i),r=s?"in about":"in",a=Math.round(t/36e5);if(t<36e5)return s?`${r} ${Math.max(1,a)} h`:`${r} ${Math.max(1,Math.round(t/6e4))} min`;if(t<36*36e5)return`${r} ${a} h`;let o=Math.round(t/864e5);return`${r} ${o} ${o===1?"day":"days"}`}var D3={sun_synchronous:"Sun-synchronous",dawn_dusk:"Dawn-dusk",molniya:"Molniya",tundra:"Tundra",polar:"Polar",near_equatorial:"Near-equatorial",retrograde:"Retrograde"};function N3(n){return(Array.isArray(n)?n:[]).filter(e=>typeof e?.url=="string"&&/^https:\/\//.test(e.url)).map(e=>({label:String(e.label||"Source"),title:String(e.title||e.label||"Source"),url:e.url}))}function xc(n){return(Array.isArray(n)?n:[]).filter(e=>typeof e?.text=="string"&&e.text.trim()).map(e=>({text:e.text,sources:N3(e.sources)}))}function Dd(n,e=[]){let t=n?.described?n.profile:null;if(!t||!Array.isArray(t.instruments)||t.instruments.length===0)return null;let i=new Map(e.map(a=>[a.id,a])),s=(Array.isArray(t.kinds)?t.kinds:[]).filter(a=>a?.id&&a?.name),r=new Map(s.map(a=>[a.id,a.name]));return{name:String(t.name||""),chips:s.map(a=>a.name),items:xc(t.statements),instruments:t.instruments.map(a=>({name:String(a.name||""),kinds:(a.kinds??[]).map(o=>r.get(o)).filter(Boolean),items:xc(a.statements)})),kinds:s.map(a=>({id:a.id,name:a.name,items:xc(a.statements),views:(a.layers??[]).filter(o=>i.has(o)).map(o=>({id:o,name:i.get(o).name})),lessons:(Array.isArray(a.lessons)?a.lessons:[]).filter(o=>o?.id&&o?.title).map(o=>({id:String(o.id),title:String(o.title)}))}))}}function Nd(n){if(!n||!Array.isArray(n.statements)||n.statements.length===0)return null;let e=[n.regime_name||n.regime,...(n.patterns??[]).map(i=>D3[i])].filter(Boolean),t=n.statements.filter(i=>typeof i?.text=="string"&&i.text.trim()).map(i=>({text:i.text,estimate:i.basis!=="derived",sources:(Array.isArray(i.sources)?i.sources:[]).filter(s=>typeof s?.url=="string"&&/^https:\/\//.test(s.url)).map(s=>({label:String(s.label||"Source"),title:String(s.title||s.label||"Source"),url:s.url}))}));return t.length?{chips:e,items:t}:null}var U3={lat:80.8,lon:-72.8},F3={lat:-80.8,lon:107.2};function O3(n){return 66.5-2*Math.min(9,Math.max(0,n))}function Ud(n,e,t=120){let i=Math.PI/180,s=n.lat*i,r=n.lon*i,a=e*i,o=[];for(let c=0;c<t;c+=1){let l=2*Math.PI*c/t,h=Math.asin(Math.sin(s)*Math.cos(a)+Math.cos(s)*Math.sin(a)*Math.cos(l)),f=r+Math.atan2(Math.sin(l)*Math.sin(a)*Math.cos(s),Math.cos(a)-Math.sin(s)*Math.sin(h));o.push({lat:h/i,lon:((f/i+180)%360+360)%360-180})}return o.push({...o[0]}),o}function Fd(n){let e=90-O3(n);return[Ud(U3,e),Ud(F3,e)]}var Ic=6378.137,Lc=n=>new z(n.x/Ic,n.z/Ic,-n.y/Ic);function Ri(n,e,t=1.002){let i=e*Math.PI/180,s=n*Math.PI/180;return new z(t*Math.cos(s)*Math.cos(i),t*Math.sin(s),-t*Math.cos(s)*Math.sin(i))}function Od(n,e,t){let i=[];for(let r of n)for(let a=0;a<r.length-1;a+=1)i.push(r[a].x,r[a].y,r[a].z,r[a+1].x,r[a+1].y,r[a+1].z);let s=new Mt;return s.setAttribute("position",new St(i,3)),new zs(s,new Bn({color:e,transparent:!0,opacity:t}))}var B3=1;function k3(){let n=new Nn;n.add(new wt(new Mn(1,96,64),new as({color:1195868,specular:2381422,shininess:14})));let e=[];for(let i=-60;i<=60;i+=30){let s=[];for(let r=-180;r<=180;r+=3)s.push(Ri(i,r));e.push(s)}for(let i=0;i<360;i+=30){let s=[];for(let r=-90;r<=90;r+=3)s.push(Ri(r,i));e.push(s)}n.add(Od(e,7910597,.1));let t=[];for(let i of ld.features){let s=i.geometry.type==="Polygon"?[i.geometry.coordinates]:i.geometry.coordinates;for(let r of s)for(let a of r)t.push(a.map(([o,c])=>Ri(c,o)))}return n.add(Od(t,14278378,.8)),n}function z3(){let n=[],e=7,t=()=>(e=e*16807%2147483647,e/2147483647);for(let s=0;s<1600;s+=1){let r=t()*2-1,a=t()*Math.PI*2,o=Math.sqrt(1-r*r)*400;n.push(o*Math.cos(a),o*Math.sin(a),r*400)}let i=new Mt;return i.setAttribute("position",new St(n,3)),new Vs(i,new ss({color:11452364,size:1.1,sizeAttenuation:!1,transparent:!0,opacity:.6}))}function Bd(n,{onPick:e,onSelect:t}){let i=new Os,s=new Bt(40,1,.01,2e3),r=new So({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.append(r.domElement);let a=r.domElement;a.setAttribute("role","img"),a.setAttribute("aria-label","Earth with the tracked satellites. Drag to rotate and scroll to zoom. The readouts beside the globe give the same information as text.");let o=new To(s,a);o.enableDamping=!0,o.enablePan=!1,o.minDistance=1.2,o.maxDistance=60,i.add(z3());let c=k3();i.add(c);let l=new wt(new Mn(1.025,64,48),new Sn({color:4892888,transparent:!0,opacity:.09,side:Nt}));i.add(l),i.add(new Js(12111840,.55));let h=new Ks(16774368,2.6);h.position.set(4,3,5),i.add(h);let f=new wt(new Mn(.012,12,10),new Sn({color:16777215}));f.visible=!1,c.add(f);let u=new wt(new Mn(.014,12,10),new Sn({color:5088255}));u.visible=!1,c.add(u);let m=new Mt;m.setAttribute("position",new Wt(new Float32Array(6),3));let x=new ii(m,new Bn({color:16777215,transparent:!0,opacity:.55}));x.visible=!1,x.frustumCulled=!1,i.add(x);let v=new Map,p=null,d=!1,S=!1,C=0,b=[],M=0;function E(){b.forEach((L,Y)=>{L.mesh&&(L.mesh.renderOrder=B3+Y)})}function A(L){L.mesh&&(c.remove(L.mesh),L.mesh.geometry.dispose(),L.mesh.material.dispose(),L.texture.dispose(),L.mesh=null)}function _(L){return new Promise((Y,ie)=>{let W=new Image;W.onload=()=>Y(W),W.onerror=()=>ie(new Error("The image could not be loaded.")),W.src=L})}function T(L){let{naturalWidth:Y,naturalHeight:ie}=L,W=document.createElement("canvas");W.width=Y,W.height=ie;let ee=W.getContext("2d");ee.drawImage(L,0,0);let he=document.createElement("canvas");he.width=Y,he.height=ie;let ye=he.getContext("2d");return ye.filter="blur(10px)",ye.drawImage(L,0,0),ee.globalCompositeOperation="destination-in",ee.drawImage(he,0,0),ee.drawImage(he,0,0),W}async function R(L,Y){let ie=await _(L),W=Y?new Hs(T(ie)):new Lt(ie);return W.colorSpace=Ht,W.needsUpdate=!0,W}function N(L,Y){let ie={id:L.id,url:L.url,transparent:L.transparent,request:Y,status:null,texture:null,mesh:null};return ie.status=R(L.url,L.transparent).then(W=>ie.request!==M?(W.dispose(),new Error("This layer was replaced before it loaded.")):(ie.texture=W,ie.mesh=new wt(new Mn(1,96,64),new as({map:W,transparent:L.transparent,depthWrite:!1,depthFunc:ei,specular:1118481,shininess:6})),c.add(ie.mesh),E(),"ok"),W=>W),ie}function G(L){let Y=++M,ie=b,W=new Set,ee=[];for(let he of L){if(W.has(he.id))continue;W.add(he.id);let ye=!!he.transparent,We=ie.find(Xe=>Xe.id===he.id&&Xe.url===he.url&&Xe.transparent===ye);We?(We.request=Y,ee.push(We)):ee.push(N({id:he.id,url:he.url,transparent:ye},Y))}for(let he of ie)ee.includes(he)||A(he);return b=ee,E(),Promise.all(ee.map(he=>he.status.then(ye=>[he.id,ye]))).then(Object.fromEntries)}let $=[];function F(L){for(let Y of $)c.remove(Y),Y.geometry.dispose(),Y.material.dispose();if($=[],!!Number.isFinite(L))for(let Y of Fd(L)){let ie=new Mt().setFromPoints(Y.map(({lat:he,lon:ye})=>Ri(he,ye,1.004))),W=new qs({color:10476718,transparent:!0,opacity:.8,dashSize:.03,gapSize:.02}),ee=new ii(ie,W);ee.computeLineDistances(),c.add(ee),$.push(ee)}}function P(L){let Y=Math.max(3.6,Math.min(o.maxDistance,L.length()*2.6));s.position.copy(L.normalize().add(new z(0,.35,0)).normalize().multiplyScalar(Y)),o.target.set(0,0,0),o.update()}function k(L=p){let Y=v.get(L),ie=Y?Y.marker.position.clone():new z(.68,.42,.76);ie.lengthSq()<1e-6&&ie.set(.68,.42,.76),P(ie)}function B(L){d=L,o.enableRotate=!L}function Q(L,Y){u.position.copy(Ri(L,Y,1.003)),u.visible=!0,B(!1),c.updateMatrixWorld(!0),P(u.getWorldPosition(new z))}function H(L,Y){B(!1),c.updateMatrixWorld(!0),P(Ri(L,Y,1).applyMatrix4(c.matrixWorld))}function J(){u.visible=!1}function se(L,Y,ie){xe(L);let W=new Float32Array(Y.samples.length*3);Y.samples.forEach((Xe,Ze)=>{let D=Lc(Xe);W.set([D.x,D.y,D.z],Ze*3)});let ee=new Mt;ee.setAttribute("position",new Wt(W,3));let he=new ii(ee,new Bn({color:ie,transparent:!0,opacity:.4}));he.frustumCulled=!1;let ye=new wt(new Mn(.014,16,12),new Sn({color:ie}));i.add(he,ye),v.set(L,{line:he,marker:ye,track:Y});let We=Lc(Y.sun_km);h.position.copy(We.normalize().multiplyScalar(10)),$e(C)}function xe(L){let Y=v.get(L);Y&&(i.remove(Y.line,Y.marker),Y.line.geometry.dispose(),Y.line.material.dispose(),Y.marker.geometry.dispose(),Y.marker.material.dispose(),v.delete(L))}function Ee(){for(let[L,Y]of v){let ie=L===p;Y.line.material.opacity=ie?.95:.3,Y.marker.scale.setScalar(ie?1.5:1)}}function $e(L){C=L,c.rotation.y=gc(L);for(let Y of v.values()){let{samples:ie}=Y.track;if(Y.marker.position.copy(Lc(Ao(ie,L))),Y.rangeAt===void 0||Math.abs(L-Y.rangeAt)>15e3){let W=yd(ie,L,Y.track.period_minutes);Y.line.geometry.setDrawRange(W.first,W.count),Y.rangeAt=L}}if(d&&v.has(p)){let Y=v.get(p).marker.position,ie=Math.max(s.position.length(),Y.length()*1.3);s.position.copy(Y.clone().normalize().multiplyScalar(ie))}Ee()}function Ge(L){f.visible=!!L,L&&f.position.copy(Ri(L.lat,L.lon,1.003))}function je(L){let Y=v.get(p);if(x.visible=!!(L&&Y&&f.visible),!x.visible)return;c.updateMatrixWorld();let ie=f.getWorldPosition(new z);m.attributes.position.setXYZ(0,ie.x,ie.y,ie.z),m.attributes.position.setXYZ(1,Y.marker.position.x,Y.marker.position.y,Y.marker.position.z),m.attributes.position.needsUpdate=!0}function K(L){let Y=a.getBoundingClientRect(),ie=L.clone().project(s);return ie.z>1?null:{x:(ie.x+1)/2*Y.width,y:(1-ie.y)/2*Y.height}}function re(L){let Y=L.clone().sub(s.position),ie=Y.length(),W=Y.normalize(),ee=s.position.dot(W),he=ee*ee-s.position.lengthSq()+1;if(he<0)return!1;let ye=-ee-Math.sqrt(he);return ye>0&&ye<ie}function Ae(){let L=v.get(p);return!L||re(L.marker.position)?null:K(L.marker.position)}function ke(L){let Y=a.getBoundingClientRect(),ie=new Ve((L.clientX-Y.left)/Y.width*2-1,1-(L.clientY-Y.top)/Y.height*2),W=new js;W.setFromCamera(ie,s);let{origin:ee,direction:he}=W.ray,ye=ee.dot(he),We=ye*ye-ee.lengthSq()+1;if(We<0)return null;let Xe=ee.clone().add(he.clone().multiplyScalar(-ye-Math.sqrt(We))),Ze=c.worldToLocal(Xe),D=Math.asin(Math.max(-1,Math.min(1,Ze.y/Ze.length())))*180/Math.PI,dt=Math.atan2(-Ze.z,Ze.x)*180/Math.PI;return dt>=180&&(dt-=360),{lat:D,lon:dt}}function we(L){let Y=a.getBoundingClientRect(),ie=L.clientX-Y.left,W=L.clientY-Y.top,ee=null,he=18;for(let[ye,We]of v){if(re(We.marker.position))continue;let Xe=K(We.marker.position);if(!Xe)continue;let Ze=Math.hypot(Xe.x-ie,Xe.y-W);Ze<he&&(ee=ye,he=Ze)}return ee}let He=null;return a.addEventListener("pointerdown",L=>{He={x:L.clientX,y:L.clientY}}),a.addEventListener("pointerup",L=>{if(!He||Math.hypot(L.clientX-He.x,L.clientY-He.y)>5)return;if(S){let ie=ke(L);ie&&e(ie);return}let Y=we(L);Y&&t(Y)}),new ResizeObserver(()=>{let L=n.getBoundingClientRect();!L.width||!L.height||(s.aspect=L.width/L.height,s.updateProjectionMatrix(),r.setSize(L.width,L.height))}).observe(n),s.position.set(2.4,1.2,2.8),o.update(),{setLayers:G,setAurora:F,setTrack:se,removeTrack:xe,update:$e,setObserver:Ge,setSightLine:je,selectedScreenPosition:Ae,home:k,showPoint:Q,face:H,clearPoint:J,select(L){p=L,Ee()},setFollowing:B,setPicking(L){S=L,a.classList.toggle("is-picking",L)},zoom(L){s.position.multiplyScalar(L);let Y=s.position.length();s.position.setLength(Math.max(o.minDistance,Math.min(o.maxDistance,Y))),o.update()},render(L){o.update(L),r.render(i,s)},onContextChange(L,Y){a.addEventListener("webglcontextlost",ie=>{ie.preventDefault(),L()}),a.addEventListener("webglcontextrestored",Y)}}}var kd="khonsu.layers",zd="true-color",V3="Loading\u2026",G3="The globe is unavailable, so layers are turned off.",H3="Live data is off while serving a local file, so pictures and the aurora are unavailable.",W3="Could not load the list of pictures.",X3="Could not load this picture.",q3="A rough boundary from NOAA's Kp index, not a forecast.",Y3="Aurora estimated from NOAA SWPC Kp";function Vd({element:n,panel:e,credit:t,catalog:i,storage:s,globe:r,fetchHead:a=l=>fetch(l,{method:"HEAD"}),dataAge:o,now:c=Date.now}){let l={base:"",overlays:[],view:"",aurora:!1,live:null,tried:null},h=new Map,f=new Map,u=new Map,m=new Map,x=new Map,v={},p=[],d=new Map,S=!1,C=0,b=L=>"/api/v1/imagery?layer="+encodeURIComponent(L),M=()=>p.filter(L=>!L.topic),E=()=>p.filter(L=>L.topic),A=()=>M().filter(L=>L.transparent===!0).map(L=>L.id),_=L=>d.has(L)&&!d.get(L).topic&&d.get(L).transparent!==!0,T=L=>d.has(L)&&!!d.get(L).topic,R=()=>_(zd)?zd:"",N=()=>l.tried??l.live;function G(){let L=l.view?d.get(l.view):null,Y=[...l.base?[l.base]:[],...l.overlays];return L&&(Y=L.transparent===!0?[...l.base?[l.base]:[],L.id]:[L.id]),Y.filter(ie=>d.has(ie)).map(ie=>({id:ie,url:b(ie),transparent:d.get(ie).transparent===!0}))}function $(){try{s.setItem(kd,JSON.stringify({base:l.base,overlays:l.overlays,view:l.view,aurora:l.aurora}))}catch{}}function F(){let L=null;try{L=JSON.parse(s.getItem(kd))}catch{L=null}if(!L||typeof L!="object")return;l.base=typeof L.base=="string"&&(L.base===""||_(L.base))?L.base:"";let Y=new Set(Array.isArray(L.overlays)?L.overlays:[]);l.overlays=A().filter(ie=>Y.has(ie)),l.view=typeof L.view=="string"&&T(L.view)?L.view:"",l.aurora=L.aurora===!0}function P(L,Y){let ie=new Set(l.overlays);Y?ie.add(L):ie.delete(L),l.overlays=A().filter(W=>ie.has(W))}function k(L){t.replaceChildren(...L.map(Y=>n("span","credit-line",Y))),t.hidden=L.length===0}function B(L){let Y=L.map(ie=>[ie.name,ie.credit,h.get(ie.id)].filter(Boolean).join(" \xB7 "));l.aurora&&Y.push(Y3),k(Y)}async function Q(L){try{let ie=(await a(b(L))).headers,W=[],ee=ie.get("X-Khonsu-Fetched-At");return ee&&!Number.isNaN(Date.parse(ee))&&W.push(`updated ${o(ee,c())}`),ie.get("X-Khonsu-Stale")==="true"&&W.push("saved copy"),W.join(" \xB7 ")}catch{return""}}function H(L,Y){let ie=f.get(L);ie&&(ie.hidden=!Y,ie.textContent=Y?X3:"")}function J(L,Y,ie){if(L!==C)return;for(let ee of Y)H(ee.id,ie[ee.id]!=="ok");let W=Y.filter(ee=>ie[ee.id]==="ok").map(ee=>d.get(ee.id));B(W),Promise.all(W.map(async ee=>{let he=await Q(ee.id);L===C&&h.set(ee.id,he)})).then(()=>{L===C&&B(W)})}function se(){let L=G(),Y=++C,ie=new Set(L.map(ee=>ee.id));for(let ee of f.keys())ie.has(ee)||H(ee,!1);for(let ee of ie)h.delete(ee);k([V3]),r.setAurora(l.aurora?N():null);let W;try{W=Promise.resolve(r.setLayers(L))}catch(ee){W=Promise.reject(ee)}W.then(ee=>J(Y,L,ee??{}),()=>J(Y,L,{}))}function xe(){$(),$e(),se()}function Ee(){return l.tried!==null?`Kp ${l.tried.toFixed(1)}, trying a value`:l.live!==null?`Kp ${l.live.toFixed(1)}, now`:"Kp is not available yet"}function $e(){if(S){for(let[L,Y]of u)Y.checked=L===l.base;for(let[L,Y]of m)Y.checked=l.overlays.includes(L);for(let[L,Y]of x)Y.checked=L===l.view;v.aurora.checked=l.aurora,v.controls.hidden=!l.aurora,v.slider.value=String(N()??0),v.kpNote.textContent=Ee(),v.back.hidden=l.tried===null}}function Ge({type:L,name:Y,value:ie,title:W,note:ee=null,warn:he=!1}){let ye=n("input",null,null);ye.setAttribute("type",L),ye.setAttribute("name",Y),ye.value=ie;let We=n("label","layer-row",null);We.append(ye,n("span",null,W)),ee&&We.append(n("span","note",ee));let Xe=null;return he&&(Xe=n("span","note is-warning",null),Xe.hidden=!0,We.append(Xe)),{label:We,input:ye,warning:Xe}}let je=[["Clouds now",()=>{l.base=R(),l.overlays=A(),l.view=""}],["Yesterday's Earth",()=>{l.base=R(),l.overlays=[],l.view=""}],["Plain",()=>{l.base="",l.overlays=[],l.view="",l.aurora=!1,l.tried=null}]];function K(){u.clear(),m.clear(),x.clear(),f.clear();let L=n("fieldset","layer-group",null);L.append(n("legend",null,"Base picture"));let Y=Ge({type:"radio",name:"layer-base",value:"",title:"Plain globe"});Y.input.addEventListener("change",()=>{Y.input.checked&&(l.base="",xe())}),u.set("",Y.input),L.append(Y.label);for(let w of M().filter(g=>g.transparent!==!0)){let g=Ge({type:"radio",name:"layer-base",value:w.id,title:w.name,note:w.description,warn:!0});g.input.addEventListener("change",()=>{g.input.checked&&(l.base=w.id,xe())}),u.set(w.id,g.input),f.set(w.id,g.warning),L.append(g.label)}let ie=n("fieldset","layer-group",null);ie.append(n("legend",null,"Near-live clouds"));for(let w of M().filter(g=>g.transparent===!0)){let g=Ge({type:"checkbox",name:"layer-overlay",value:w.id,title:w.name,note:w.description,warn:!0});g.input.addEventListener("change",()=>{P(w.id,g.input.checked),xe()}),m.set(w.id,g.input),f.set(w.id,g.warning),ie.append(g.label)}let W=n("fieldset","layer-group",null);W.append(n("legend",null,"What satellites measure"));let ee=Ge({type:"radio",name:"layer-view",value:"",title:"None"});ee.input.addEventListener("change",()=>{ee.input.checked&&(l.view="",xe())}),x.set("",ee.input),W.append(ee.label);for(let w of E()){let g=Ge({type:"radio",name:"layer-view",value:w.id,title:w.name,note:w.description,warn:!0});g.input.addEventListener("change",()=>{g.input.checked&&(l.view=w.id,xe())}),x.set(w.id,g.input),f.set(w.id,g.warning),W.append(g.label)}let he=n("fieldset","layer-group",null);he.append(n("legend",null,"Overlays"));let ye=Ge({type:"checkbox",name:"layer-aurora",value:"aurora",title:"Aurora, estimated from Kp"});ye.input.addEventListener("change",()=>{l.aurora=ye.input.checked,l.aurora||(l.tried=null),xe()}),he.append(ye.label,n("p","note",q3));let We=n("input",null,null);We.setAttribute("type","range"),We.setAttribute("min","0"),We.setAttribute("max","9"),We.setAttribute("step","0.33"),We.setAttribute("aria-label","Try a Kp value");let Xe=n("p","note",null),Ze=n("button",null,"Back to now");Ze.setAttribute("type","button"),Ze.hidden=!0;let D=n("div","aurora-controls",null);D.append(We,Xe,Ze),D.hidden=!0,he.append(D),We.addEventListener("input",()=>{let w=Number(We.value);Number.isFinite(w)&&(l.tried=w,$e(),r.setAurora(N()))}),Ze.addEventListener("click",()=>{l.tried=null,$e(),r.setAurora(N())});let dt=n("div","layer-presets",null);dt.append(...je.map(([w,g])=>{let V=n("button",null,w);return V.setAttribute("type","button"),V.addEventListener("click",()=>{g(),xe()}),V})),v.aurora=ye.input,v.slider=We,v.kpNote=Xe,v.back=Ze,v.controls=D;let it=[L,ie];E().length&&it.push(W),e.replaceChildren(n("h2","eyebrow","Layers"),...it,he,dt)}async function re(){if(!r){e.replaceChildren(n("p","note",G3)),t.hidden=!0;return}let L=null;try{L=await i}catch{L=null}let Y=n("h2","eyebrow","Layers");if(!L){e.replaceChildren(Y,n("p","note",W3)),t.hidden=!0;return}if(!L.liveData){e.replaceChildren(Y,n("p","note",H3)),t.hidden=!0;return}p=Array.isArray(L.layers)?L.layers:[],d=new Map(p.map(ie=>[ie.id,ie])),F(),K(),S=!0,$e(),l.base||l.overlays.length||l.view||l.aurora?se():k([])}function Ae(L){l.live=Number.isFinite(L)?L:null,S&&(l.aurora&&l.tried===null&&r.setAurora(l.live),$e())}function ke(){return{base:l.base,overlays:[...l.overlays],view:l.view,aurora:l.aurora}}function we(L){return!S||L!==""&&!T(L)?!1:(l.view=L,L&&d.get(L).transparent===!0&&!l.base&&(l.base=R()),xe(),!0)}function He(L){return!S||L!==""&&!_(L)?!1:(l.base=L,xe(),!0)}return{start:re,setKp:Ae,selection:ke,show:we,setBase:He,views:()=>E().map(L=>({...L})),viewOn:()=>l.view}}var $3="http://www.w3.org/2000/svg",dr=220,Pt=dr/2,Pi=92;function Cn(n,e,t){let i=document.createElementNS($3,n);for(let[s,r]of Object.entries(e))i.setAttribute(s,r);return t?.append(i),i}function Dc(n,e){let t=Pi*(90-Math.max(0,Math.min(90,e)))/90,i=n*Math.PI/180;return[Pt+t*Math.sin(i),Pt-t*Math.cos(i)]}function Gd(n,e,t,i){n.replaceChildren();let s=Cn("svg",{viewBox:`0 0 ${dr} ${dr}`,class:"sky-plot",role:"img"},n),r=e.filter(l=>l.elevation_deg>=0),a=r.reduce((l,h)=>!l||h.elevation_deg>l.elevation_deg?h:l,null);Cn("title",{},s).textContent=a?`Sky path peaking at ${Math.round(a.elevation_deg)} degrees in the ${zn(a.azimuth_deg)}`:"Sky plot";for(let l of[0,30,60])Cn("circle",{cx:Pt,cy:Pt,r:Pi*(90-l)/90,class:l===0?"sky-horizon":"sky-ring"},s);Cn("line",{x1:Pt,y1:Pt-Pi,x2:Pt,y2:Pt+Pi,class:"sky-ring"},s),Cn("line",{x1:Pt-Pi,y1:Pt,x2:Pt+Pi,y2:Pt,class:"sky-ring"},s);for(let[l,h,f]of[["N",Pt,12],["E",dr-8,Pt+4],["S",Pt,dr-4],["W",8,Pt+4]])Cn("text",{x:h,y:f,class:"sky-label"},s).textContent=l;for(let[l,h]of[[30,"30\xB0"],[60,"60\xB0"]])Cn("text",{x:Pt+3,y:Pt-Pi*(90-l)/90-2,class:"sky-scale"},s).textContent=h;if(!r.length)return;let o=r.map(l=>Dc(l.azimuth_deg,l.elevation_deg).map(h=>h.toFixed(1)).join(",")).join(" ");if(Cn("polyline",{points:o,fill:"none",stroke:t,"stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},s),i){let l=r.filter(h=>{let f=Date.parse(h.at);return f>=Date.parse(i.start.at)&&f<=Date.parse(i.end.at)});l.length>1&&Cn("polyline",{points:l.map(h=>Dc(h.azimuth_deg,h.elevation_deg).map(f=>f.toFixed(1)).join(",")).join(" "),fill:"none",class:"sky-visible"},s)}let c=(l,h,f)=>{let[u,m]=Dc(l.azimuth_deg,l.elevation_deg);Cn("circle",{cx:u,cy:m,r:h,class:f,fill:t},s)};c(r[0],3,"sky-start"),c(a,4.5,"sky-peak")}var Nc=["identity","radio","sees"],Uc=8,Z3="Add a satellite to see its details here.",K3="Live data is off while serving a local file.",Fc="Loading\u2026",Hd="Loading\u2026 The first time, Khonsu downloads the whole catalog, which can take a couple of minutes.",J3="Run khonsu setup to connect your own free Space-Track account, then restart Khonsu.";function Wd({api:n,element:e,feedCredit:t,dataFailure:i,dataTime:s,selectedEntry:r,catalog:a,panels:o,focusScene:c,clearScene:l}){let h=new Map,f=new Map,u={identity:0,radio:0,sees:0},m=Promise.resolve(a).then(P=>({liveData:P?.liveData??!0,spaceTrackReady:P?.spaceTrackReady??!1,imagingIds:P?.imagingIds??new Set}),()=>({liveData:!0,spaceTrackReady:!1,imagingIds:new Set})),x={satelliteDetails:P=>n.satelliteDetails(P),catalogRecord:P=>n.catalogRecord(P),spaceTrack:P=>n.spaceTrack(P),transmitters:P=>n.transmitters(P),recentScenes:P=>n.recentScenes(P)};function v(P,k){let B=`${P}:${k}`;if(h.has(B))return Promise.resolve(h.get(B));if(f.has(B))return f.get(B);let Q=new Promise(H=>H(x[P](k))).then(H=>(h.set(B,H),H)).finally(()=>f.delete(B));return f.set(B,Q),Q}function p(P,k,B,Q){return P.then(H=>{k()&&B(H)},H=>{k()&&H?.name!=="AbortError"&&Q(H)})}let d=P=>e("p","note",P);function S(P){let k=e("ul");return k.append(...P.filter(([,B])=>B).map(([B,Q])=>e("li",null,`${B}: ${Q}`))),k}function C(P){let[k,...B]=P.data;if(!k)return[d("Wikidata has no entry for this satellite."),...t(P)];let Q=[S([["Name",k.name],["Description",k.description],["Types",(k.types??[]).join(", ")],["Operators",(k.operators??[]).join(", ")],["Countries",(k.countries??[]).join(", ")],["Launch date",k.launch_date]])];return B.length&&Q.push(d(`Also matched: ${B.map(H=>H.name).join(", ")}`)),[...Q,...t(P)]}function b(P,k){let B=P.data;if(!B)return[d("GCAT has no entry for this satellite."),...t(P)];let Q=[e("h3","dossier-heading",`Catalog object: ${B.name}`)];return k&&!Cd(k.name,B.name)&&Q.push(d(`GCAT lists this object as ${B.name}, so these figures describe that entry alone.`)),Q.push(S([["Kind",B.kind],["Bus",B.bus],["Mass",B.mass_kg?`${B.mass_kg.toLocaleString("en-GB")} kg`:null],["Launched",B.launch_date],["Owner code",B.owner],["Manufacturer code",B.manufacturer],["Orbit class",B.orbit_class]])),[...Q,...t(P)]}function M(P){let[k]=P.data;return k?[e("h3","dossier-heading","Space-Track record"),S([["Name",k.name],["Object type",k.object_type],["Radar size",k.rcs_size],["Country code",k.country],["Launched",k.launch_date],["Decayed",k.decay_date],["Element epoch",k.epoch]]),...t(P)]:[d("Space-Track has no record for this satellite."),...t(P)]}function E(P){let k=Ad(P.data);if(!k.length)return[d("SatNOGS lists no active transmitters for this satellite."),...t(P)];let B=e("ul");B.append(...k.slice(0,Uc).map(J=>{let se=[wd(J.downlink_hz),J.mode].filter(Boolean).join(" \xB7 ");return e("li",null,se?`${J.description}: ${se}`:J.description)}));let Q=k.length,H=[d(`${Q} active transmitter${Q===1?"":"s"}`),B];return Q>Uc&&H.push(d(`+ ${Q-Uc} more`)),[...H,...t(P)]}function A(P){let k=[P.minCloud,P.maxCloud].filter(H=>H!=null).map(H=>Math.round(H));if(!k.length)return null;let B=Math.min(...k),Q=Math.max(...k);return B===Q?`${B}% cloud`:`${B}\u2013${Q}% cloud`}function _(P){let k=[`near ${P.lat.toFixed(1)}\xB0, ${P.lon.toFixed(1)}\xB0`];P.scenes.length>1&&k.push(`${P.scenes.length} tiles`);let B=A(P);return B&&k.push(B),k.join(" \xB7 ")}function T(P){let k=Rd(P.data);if(!k.length)return[d("Earth Search lists scenes from Sentinel-2 and Landsat satellites. This satellite is not one of them.")];let B=k.map(H=>{let J=e("button","scene-row");return J.type="button",J.dataset.focus=`scene:${H.time}`,J.setAttribute("aria-pressed","false"),J.append(e("strong",null,s(new Date(H.time).toISOString())),e("span",null,_(H))),J.addEventListener("click",()=>{for(let se of B)se.setAttribute("aria-pressed",String(se===J));c({lat:H.lat,lon:H.lon})}),J}),Q=e("div","scene-list");return Q.append(...B),[d("Recent scenes and where their centres are. Choose one to mark it on the globe. These are acquisition locations, not the pictures themselves."),Q,...t(P)]}function R(P,k,B){let Q=e("div","dossier-block"),H=e("div","dossier-block"),J=e("div","dossier-block");Q.append(d(Fc)),H.append(d(Hd)),J.append(d(B.spaceTrackReady?Fc:J3)),o.identity.replaceChildren(Q,H,J);let se=null,xe=null,Ee=()=>{k()&&(xe?xe.error?H.replaceChildren(i(xe.error)):H.replaceChildren(...b(xe.feed,se?.feed?.data?.[0])):H.replaceChildren(d(Hd)))},$e=p(v("satelliteDetails",P.id),k,K=>{se={feed:K},Q.replaceChildren(...C(K)),Ee()},K=>{se={error:K},Q.replaceChildren(i(K)),Ee()}),Ge=p(v("catalogRecord",P.id),k,K=>{xe={feed:K},Ee()},K=>{xe={error:K},Ee()}),je=B.spaceTrackReady?p(v("spaceTrack",P.id),k,K=>J.replaceChildren(...M(K)),K=>J.replaceChildren(i(K))):null;return Promise.all([$e,Ge,je])}function N(P,k,B,Q,H){return P.replaceChildren(d(Fc)),p(v(B,Q.id),k,J=>P.replaceChildren(...H(J)),J=>P.replaceChildren(i(J)))}async function G(P){if(!Nc.includes(P))return;let k=o[P],B=++u[P],Q=r();if(!Q){k.replaceChildren(d(Z3));return}let H=await m,J=()=>u[P]===B&&r()?.id===Q.id;if(J()){if(!H.liveData){k.replaceChildren(d(K3));return}return P==="identity"?R(Q,J,H):P==="radio"?N(k,J,"transmitters",Q,E):N(k,J,"recentScenes",Q,T)}}function $(P=[]){for(let B of Nc)u[B]+=1;l();let k=[].concat(P).filter(B=>Nc.includes(B));return Promise.all(k.map(B=>G(B)))}async function F(){let P=r();return P?(await m).imagingIds.has(P.id):!1}return{open:G,selectionChanged:$,hasSees:F}}var j3="Add a satellite to see what it measures.",Q3="Loading\u2026",e7="Khonsu doesn't describe this satellite's instruments yet. Each description is written by hand, with a source for every sentence, so only some satellites have one.",t7="Views on the globe need live data and WebGL.";function fr(n,e,t){for(let i of t){let s=n("a","why-source",i.label);s.href=i.url,s.target="_blank",s.rel="noopener noreferrer",s.title=i.title,s.setAttribute("aria-label",`Source: ${i.title} (${i.label}, opens in a new tab)`),e.append(" ",s)}}function Xd({api:n,element:e,panel:t,selectedEntry:i,dataFailure:s,layers:r,startLesson:a=null}){let o=new Map,c=new Set,l=0,h=d=>e("p","note",d);function f(d){let S=e("ul","why-list");return S.append(...d.map(C=>{let b=e("li","",C.text);return fr(e,b,C.sources),b})),S}function u(d,S=null){let C=r()?.viewOn()===d.id,b=e("button","text-button data-view",C?`Showing ${d.name} \xB7 Hide`:`Show on the globe: ${d.name}`);return b.type="button",b.dataset.focus=`view:${d.id}`,b.setAttribute("aria-pressed",String(C)),b.addEventListener("click",()=>{S&&c.add(S),r()?.show(C?"":d.id)&&p()}),b}function m(d){let S=[e("h3","why-title","What it measures")],C=e("ul","why-chips data-chips");C.setAttribute("aria-label","Kinds of data"),C.append(...d.chips.map(M=>e("li","why-chip",M))),S.push(C),d.items.length&&S.push(f(d.items));for(let M of d.instruments)S.push(e("h4","data-instrument",M.name)),M.kinds.length&&S.push(h(M.kinds.join(" \xB7 "))),M.items.length&&S.push(f(M.items));S.push(e("h3","why-title data-kinds-title","About these kinds of data"));let b=r()?.views().length>0;for(let M of d.kinds){let E=e("details","data-kind");if(E.open=c.has(M.id),E.addEventListener("toggle",()=>{E.open?c.add(M.id):c.delete(M.id)}),E.append(e("summary","",M.name),f(M.items)),M.views.length||a&&M.lessons.length){let A=e("div","link-row");A.append(...M.views.map(_=>u(_,M.id))),a&&A.append(...M.lessons.map(_=>{let T=e("button","text-button data-view data-lesson",`Lesson: ${_.title}`);return T.type="button",T.addEventListener("click",()=>a(_.id)),T})),E.append(A)}S.push(E)}return b||S.push(h(t7)),S}function x(){let d=[h(e7)],S=r()?.views()??[];if(S.length){d.push(e("h3","why-title","What satellites measure"));let C=e("div","link-row");C.append(...S.map(b=>u(b))),d.push(C)}return d}function v(d,S){if(S.error){t.replaceChildren(s(S.error));return}let C=Dd(S.response,r()?.views()??[]);t.replaceChildren(...C?m(C):x())}async function p(){let d=++l,S=i();if(!S){t.replaceChildren(h(j3));return}if(o.has(S.id)){v(S,o.get(S.id));return}t.replaceChildren(h(Q3));let C;try{C={response:await n.satelliteData(S.id)},o.set(S.id,C)}catch(b){if(b?.name==="AbortError")return;C={error:b}}d===l&&i()?.id===S.id&&v(S,C)}return{render:p}}var qd="khonsu.panels",Ii={catalog:{variable:"--catalog-width",initial:268,min:200,max:480,label:"Resize the satellite list"},inspector:{variable:"--inspector-width",initial:320,min:280,max:640,label:"Resize the satellite details"}},n7=360,i7=16,s7=64;function r7(n,e,t,i){let{min:s,max:r}=Ii[n],a=Math.max(s,t-i-n7);return Math.round(Math.min(Math.max(e,s),r,a))}function a7(n){let e=null;try{e=JSON.parse(n.getItem(qd))}catch{e=null}let t={};for(let i of Object.keys(Ii)){let s=e?.[i];t[i]=Number.isFinite(s)?s:Ii[i].initial}return t}function o7(n,e,t,i){let s=t?s7:i7,r=n==="catalog"?"ArrowRight":"ArrowLeft",a=n==="catalog"?"ArrowLeft":"ArrowRight";return e===r?i+s:e===a?i-s:e==="Home"?Ii[n].min:e==="End"?Ii[n].max:null}function Yd({root:n,handles:e,storage:t,windowWidth:i=()=>window.innerWidth}){let s=a7(t),r=c=>c==="catalog"?"inspector":"catalog";function a(c,l,h=!0){if(s[c]=r7(c,l,i(),s[r(c)]),n.style.setProperty(Ii[c].variable,`${s[c]}px`),e[c].setAttribute("aria-valuenow",String(s[c])),h)try{t.setItem(qd,JSON.stringify(s))}catch{}}for(let[c,l]of Object.entries(e)){let h=Ii[c];l.setAttribute("role","separator"),l.setAttribute("aria-orientation","vertical"),l.setAttribute("aria-label",h.label),l.setAttribute("aria-valuemin",String(h.min)),l.setAttribute("aria-valuemax",String(h.max)),l.tabIndex=0,l.title="Drag to resize. Double-click to reset.",l.addEventListener("pointerdown",f=>{if(f.button!==0)return;f.preventDefault(),l.setPointerCapture?.(f.pointerId),l.classList.add("is-dragging");let u=x=>{let v=c==="catalog"?x.clientX:i()-x.clientX;a(c,v,!1)},m=()=>{l.classList.remove("is-dragging"),l.removeEventListener("pointermove",u),l.removeEventListener("pointerup",m),l.removeEventListener("pointercancel",m),a(c,s[c])};l.addEventListener("pointermove",u),l.addEventListener("pointerup",m),l.addEventListener("pointercancel",m)}),l.addEventListener("keydown",f=>{let u=o7(c,f.key,f.shiftKey,s[c]);u!==null&&(f.preventDefault(),a(c,u))}),l.addEventListener("dblclick",()=>a(c,h.initial))}let o=()=>{for(let c of Object.keys(e))a(c,s[c],!1)};return o(),{fit:o,widths:()=>({...s})}}function l7(n,e){let t=e.trim().toLowerCase().split(/\s+/).filter(Boolean);if(!t.length)return[...n];let i=n.filter(r=>{let a=r.toLowerCase();return t.every(o=>a.includes(o))}),s=e.trim().toLowerCase();return[...i.filter(r=>r.toLowerCase().startsWith(s)),...i.filter(r=>!r.toLowerCase().startsWith(s))]}function $d({element:n,button:e,popover:t,input:i,list:s,onChoose:r,document:a=globalThis.document}){let o=[],c="",l=[],h=0;function f(S){return`group-option-${S}`}function u(){e.textContent=c||(o.length?"Choose a group":"Loading groups\u2026"),e.disabled=o.length===0}function m(){if(l=l7(o,i.value),h=Math.min(h,Math.max(0,l.length-1)),!l.length){s.replaceChildren(n("li","note group-empty","No group matches.")),i.removeAttribute("aria-activedescendant");return}s.replaceChildren(...l.map((S,C)=>{let b=n("li",`group-option${C===h?" is-active":""}`,S);return b.id=f(C),b.setAttribute("role","option"),b.setAttribute("aria-selected",String(S===c)),b.addEventListener("mousedown",M=>{M.preventDefault(),d(S)}),b})),i.setAttribute("aria-activedescendant",f(h)),s.children[h]?.scrollIntoView?.({block:"nearest"})}function x(){return!t.hidden}function v(){o.length&&(t.hidden=!1,e.setAttribute("aria-expanded","true"),i.value="",h=Math.max(0,o.indexOf(c)),m(),i.focus())}function p(S=!0){x()&&(t.hidden=!0,e.setAttribute("aria-expanded","false"),S&&e.focus())}function d(S){p(),S!==c&&(c=S,u(),r(S))}return e.addEventListener("click",()=>x()?p():v()),i.addEventListener("input",()=>{h=0,m()}),i.addEventListener("keydown",S=>{if(S.key==="ArrowDown"||S.key==="ArrowUp"){if(S.preventDefault(),!l.length)return;h=(h+(S.key==="ArrowDown"?1:l.length-1))%l.length,m()}else S.key==="Enter"?(S.preventDefault(),l[h]&&d(l[h])):S.key==="Escape"&&(S.preventDefault(),p())}),a?.addEventListener?.("mousedown",S=>{x()&&!t.contains(S.target)&&!e.contains(S.target)&&p(!1)}),u(),{setGroups(S){o=[...S],u()},setCurrent(S){c=S,u()},current:()=>c,open:v,close:p}}function Kd(n){let e=new URLSearchParams(n),t=e.get("lesson");if(!t||!/^[a-z0-9-]{1,64}$/.test(t))return null;let i=Number.parseInt(e.get("step")??"1",10);return{id:t,step:Number.isFinite(i)&&i>=1?i-1:0}}function Jd(n,e){if(!e)return n;let t=n.includes("?")?"&":"?";return`${n}${t}lesson=${encodeURIComponent(e.id)}&step=${e.step+1}`}function Zd(n){return{text:String(n?.text??""),sources:(Array.isArray(n?.sources)?n.sources:[]).filter(e=>typeof e?.url=="string"&&/^https:\/\//.test(e.url)).map(e=>({label:String(e.label||"Source"),title:String(e.title||e.label||"Source"),url:e.url}))}}function jd({api:n,element:e,card:t,list:i,layers:s,showSatellite:r,face:a,onChange:o}){let c=null,l=null,h=null;function f(){return l??(l=n.lessons().then(A=>(c=Array.isArray(A?.lessons)?A.lessons:[],c),A=>{throw l=null,A})),l}let u=A=>s()?.views().find(_=>_.id===A)?.name??A;function m(A){A.satellite&&r(A.satellite);let _=s();_&&(typeof A.base=="string"&&_.setBase(A.base),Array.isArray(A.compare)&&A.compare.length===2?_.show(A.compare[0]):typeof A.view=="string"&&_.show(A.view)),A.camera&&a(A.camera.lat,A.camera.lon)}function x(A){let _=e("ul","why-list");return _.append(...A.map(T=>{let R=e("li","",T.text);return fr(e,R,T.sources),R})),_}function v(A,_,T){let R=e("button",_,A);return R.type="button",R.addEventListener("click",T),R}function p(A){let _=e("div","lesson-compare");return _.setAttribute("role","group"),_.setAttribute("aria-label","Compare two views"),_.append(...A.compare.map((T,R)=>{let N=v(u(T),"text-button",()=>{h.compareOn=R,s()?.show(T),S()});return N.setAttribute("aria-pressed",String(h.compareOn===R)),N})),_}function d(A){let _=e("div","lesson-question");_.append(e("p","lesson-prompt",A.prompt));let T=e("div","lesson-choices");if(T.append(...A.choices.map((R,N)=>{let G=v(R,"text-button lesson-choice",()=>{h.answer=N,S()});return G.setAttribute("aria-pressed",String(h.answer===N)),h.answer!==null&&(G.disabled=!0,N===A.answer&&G.classList.add("is-right")),G})),_.append(T),h.answer!==null){let R=h.answer===A.answer?"Yes.":`Not quite: it's "${A.choices[A.answer]}".`,N=e("div","lesson-feedback");N.setAttribute("role","status"),N.append(e("p","lesson-verdict",R),x([Zd(A.explain)])),_.append(N)}return _}function S(){if(!h){t.hidden=!0,t.replaceChildren();return}let{lesson:A}=h,_=A.steps[h.step],T=A.steps.length,R=[e("p","eyebrow",`Lesson \xB7 step ${h.step+1} of ${T}`),e("h2","lesson-title",A.title)],N=(_.text??[]).map(Zd).filter(k=>k.text);N.length&&R.push(x(N)),Array.isArray(_.compare)&&_.compare.length===2&&R.push(p(_)),_.hint&&R.push(e("p","note lesson-hint",_.hint)),_.question&&R.push(d(_.question)),!s()?.views().length&&(_.view||_.compare||_.base)&&R.push(e("p","note","The pictures in this lesson need live data and WebGL, so the globe stays as it is."));let G=e("div","lesson-actions"),$=v("Back","text-button",()=>C(h.step-1));$.disabled=h.step===0;let F=h.step===T-1,P=v(F?"Finish":"Next","primary-button",()=>F?M():C(h.step+1));G.append($,P,v("Close","text-button lesson-close",M)),R.push(G),t.replaceChildren(...R),t.hidden=!1}function C(A){if(!h)return;let _=Math.max(0,Math.min(h.lesson.steps.length-1,A));h={lesson:h.lesson,step:_,answer:null,compareOn:0},m(h.lesson.steps[_]),S(),o()}async function b(A,_=0){let R=(await f()).find(G=>G.id===A);if(!R||!Array.isArray(R.steps)||!R.steps.length)return!1;let N=Math.max(0,Math.min(R.steps.length-1,_));for(let G of R.steps.slice(0,N))m({...G,camera:null});return h={lesson:R,step:N,answer:null,compareOn:0},m(R.steps[N]),S(),o(),!0}function M(){h=null,S(),o()}async function E(A){i.replaceChildren(e("p","note","Loading\u2026"));let _;try{_=await f()}catch(T){i.replaceChildren(e("p","note is-error",`Could not load the lessons: ${T.message}`));return}i.replaceChildren(..._.map(T=>{let R=e("div","lesson-item");return R.append(e("h3","lesson-item-title",T.title),e("p","note",T.summary)),R.append(v("Start","text-button",()=>{A?.(),b(T.id)})),R}))}return{start:b,stop:M,renderList:E,current:()=>h?{id:h.lesson.id,step:h.step}:null}}var c7="Loading\u2026",Qd="Live data is off while serving a local file.";function ef({api:n,element:e,feedCredit:t,dataFailure:i,dataTime:s,catalog:r,chips:a,popover:o,onKp:c=()=>{},now:l=Date.now}){let h=E(),f=E(),u=E(),m=E(),x=!1,v=!0,p=null,d=0,S=null,C=null,b=null,M=null;function E(){return{feed:null,error:null,pending:null}}function A(W,ee){if(!W.pending){let he;try{he=Promise.resolve(ee())}catch(ye){he=Promise.reject(ye)}W.pending=he.then(ye=>{W.feed=ye,W.error=null},ye=>{rn(ye)||(W.error=ye)}).then(()=>{W.pending=null,R()})}return W.pending}function _(){if(!v)return"off";if(h.feed){let W=Pc(h.feed.data);return W===null?"unavailable":W.toFixed(1)}return h.error&&!h.pending?"unavailable":"\u2026"}function T(){if(!v)return"off";if(f.feed){let W=l(),ee=Id(f.feed.data,W);return ee?Ld(ee,W):"none listed"}return f.error&&!f.pending?"unavailable":"\u2026"}function R(){b&&(b.textContent=_(),M.textContent=T())}function N(){S?.setAttribute("aria-expanded",String(p==="weather")),C?.setAttribute("aria-expanded",String(p==="launch"))}function G(W,ee,he){let ye=e("button","sky-chip",null);return ye.setAttribute("type","button"),ye.setAttribute("aria-haspopup","dialog"),ye.setAttribute("aria-expanded","false"),ye.append(W,ee),ye.addEventListener("click",()=>He(he)),ye}function $(W){let ee=e("div","data-values");for(let[he,ye]of W){let We=e("span",null,`${he} `);We.append(e("strong",null,ye)),ee.append(We)}return ee}function F(W,ee){if(W.feed){let he=ee(W.feed);return W.error&&he.push(i(W.error)),he}return W.error&&!W.pending?[i(W.error)]:[e("p","note",c7)]}function P(W,ee){let he=e("div","sky-block");return he.append(...F(W,ee)),he}function k(W){let{kp:ee=[],flux:he=[],scales:ye,alerts:We=[]}=W.data,Xe=[],Ze=ee.at(-1),D=Ze?[["Kp",`${Ze.kp.toFixed(1)} ${Md(Ze.kp)}`]]:[];if(he.length&&D.push(["F10.7",String(Math.round(he.at(-1).flux))]),ye&&D.push(["Scales",`G${ye.geomagnetic.level} S${ye.solar.level} R${ye.radio.level}`]),D.length&&Xe.push($(D)),We.length){let dt=e("ul");dt.append(...We.slice(0,3).map(it=>e("li",null,`${s(it.issued_at)}: ${it.headline}`))),Xe.push(dt)}return[...Xe,...t(W)]}function B(W){let ee=Ed(W.data);return ee?[$([["Past year, strongest Kp",`${ee.strongest.kp_max.toFixed(1)} on ${ee.strongest.date}`],["Average F10.7",String(Math.round(ee.meanFlux))]]),...t(W)]:[e("p","note","No observed days are available.")]}function Q(W){if(!W.data.length)return[e("p","note","No events in the past two weeks."),...t(W)];let ee=e("ul");return ee.append(...W.data.slice(0,4).map(he=>e("li",null,`${s(he.time)}: ${he.kind}${he.detail?` (${he.detail})`:""}`))),[ee,...t(W)]}function H(W){if(!W.data.length)return[e("p","note","No upcoming launches are listed."),...t(W)];let ee=e("ul");return ee.append(...W.data.slice(0,5).map(he=>{let ye=e("li","sky-launch",he.name);return ye.append(e("span","sky-meta",` ${s(he.net)} \xB7 ${he.status}`)),ye})),[ee,...t(W)]}function J(){let W=e("h3","sky-title","Space weather");return v?[W,...F(h,k),P(u,B),P(m,Q)]:[W,e("p","note",Qd)]}function se(){let W=e("h3","sky-title","Next launches");return v?[W,...F(f,H)]:[W,e("p","note",Qd)]}function xe(){p&&o.replaceChildren(...p==="weather"?J():se())}function Ee(W,ee){W.then(()=>{ee===d&&xe()})}function $e(){return Promise.resolve(n.spaceWeather()).then(W=>(c(Pc(W.data)),W),W=>{throw rn(W)||c(null),W})}function Ge(W){v&&(Ee(A(h,$e),W),u.feed||Ee(A(u,()=>n.spaceWeatherHistory()),W),m.feed||Ee(A(m,()=>n.spaceEvents()),W))}function je(W){v&&Ee(A(f,()=>n.launches()),W)}function K(W){o.contains(W.target)||S.contains(W.target)||C.contains(W.target)||L()}function re(W){if(W.key!=="Escape"||!p)return;let ee=p==="weather"?S:C;L(),ee.focus()}function Ae(){globalThis.document.addEventListener("pointerdown",K),globalThis.document.addEventListener("keydown",re)}function ke(){globalThis.document.removeEventListener("pointerdown",K),globalThis.document.removeEventListener("keydown",re)}function we(W){p||Ae(),p=W,d+=1;let ee=d;N(),o.hidden=!1,xe(),W==="weather"?Ge(ee):je(ee)}function He(W){p===W?L():we(W)}function L(){p&&(p=null,d+=1,ke(),N(),o.hidden=!0,o.replaceChildren())}async function Y(){if(x)return;if(x=!0,b=e("strong",null,"\u2026"),M=e("strong",null,"\u2026"),S=G("Kp ",b,"weather"),C=G("Launch ",M,"launch"),a.append(S,C),o.hidden=!0,v=(await Promise.resolve(r).catch(()=>null))?.liveData!==!1,!v){R(),c(null);return}await Promise.all([A(h,$e),A(f,()=>n.launches())])}function ie(){M&&(M.textContent=T())}return{start:Y,tick:ie,close:L}}var Oc=200,h7=10*6e4,u7="25544",d7=6e4,f7=15e3,Oo=48,p7=1500,le=n=>document.getElementById(n),zt=dh(),_i=ud(()=>window.localStorage);md(_i);var I={tracked:new Map,selected:null,observer:gd(_i),utc:_i.getItem("khonsu.utc")==="1",window:Cc(Date.now()),time:Date.now(),live:!0,playing:!1,groups:[],items:[],isSearchResult:!1,catalogLoading:!1,tab:"now",report:null,plan:null,planError:null,planLoading:!1,planFor:null,planAt:0,activePass:null,clouds:null},lt=null,tf=0,nf=0,sf=!1,ff=!0,bs=null,Ro=null,rf=null,Ms=null,Do=null,vs=null,No=null,Bc=new Map,af="",of=null,kc=Kd(location.search),zc=null,Gc=null,lf=0,Hc=["now","orbit","data","passes"],pf={identity:"now",radio:"now",sees:"data"};function $c(){return Object.entries(pf).filter(([n,e])=>e===I.tab&&le(`section-${n}`).open&&!le(`section-${n}`).hidden).map(([n])=>n)}function Zc(n,e,t){let i=document.activeElement,s=i&&n.contains(i)?i.dataset.focus:null;if(e(),!s)return;([...n.querySelectorAll("[data-focus]")].find(a=>a.dataset.focus===s)??t)?.focus({preventScroll:!0})}function ue(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!==void 0&&(i.textContent=t),i}function Kc(){return[...I.tracked.keys()]}function mn(){return I.tracked.get(I.selected)??null}function Jc(){history.replaceState(null,"",Jd(fd(Kc(),I.selected)||location.pathname,vs?.current()))}function Di(n){return`${ys(n,I.utc)} ${xs(n,I.utc)}`}async function Bo(n){n.error=null,n.loading=!0,clearTimeout(n.retryTimer),n.request=(n.request??0)+1;let e=n.request;mr();try{let t=await zt.track(n.id,I.window.start,I.observer);if(I.tracked.get(n.id)!==n)return;n.track=t.data,n.name=t.data.name||n.name,n.provenance=t.provenance,n.warnings=t.warnings,n.lookStale=!1,lt?.setTrack(n.id,t.data,n.color),lt?.select(I.selected),n.framePending&&(n.framePending=!1,n.id===I.selected&&lt?.home(n.id))}catch(t){if(rn(t))return;n.error=Vn(t.message),n.retryTimer=setTimeout(()=>{I.tracked.get(n.id)===n&&n.error&&Bo(n)},d7)}finally{n.request===e&&(n.loading=!1),I.tracked.get(n.id)===n&&n.request===e&&(mr(),Wn(),yr(),ko())}}function pr(n,e,{selectIt:t=!0,frame:i=!0}={}){let s=mi(n);if(I.tracked.has(s)){t&&ws(s);return}if(I.tracked.size>=gi){Gn(`You can track up to ${gi} satellites. Remove one to add another.`,"is-warning");return}let r={id:s,name:e||`NORAD ${s}`,color:pd([...I.tracked.values()].map(a=>a.color)),track:null,error:null,loading:!0,framePending:i};I.tracked.set(s,r),t&&ws(s),Bo(r)}function mf(n){clearTimeout(I.tracked.get(n)?.retryTimer),I.tracked.delete(n),lt?.removeTrack(n),I.selected===n?ws(Kc()[0]??null):(Jc(),mr(),Wn(),ko())}function ws(n){let e=I.selected!==n;I.selected=n,lt?.select(n),e&&(I.report=null,I.plan=null,I.planFor=null,I.planError=null,I.activePass=null,n&&I.tracked.get(n)?.track&&lt?.home(n)),Jc(),mr(),Wn(),yr(),ko(),xr(),yf(),e&&m7()}function m7(){let n=++lf;I.tab==="data"&&Do.render(),Ms.hasSees().then(e=>{if(n!==lf)return;let t=le("section-sees");t.hidden=!e,e||(t.open=!1),Ms.selectionChanged($c())})}function gf(){for(let n of I.tracked.values())Bo(n)}function jc(n){I.window=Cc(n),eh(),gf()}function Gn(n,e=""){let t=le("catalog-status");t.textContent=n,t.className=`note ${e}`}async function g7(){try{if(I.groups=await zt.groups(),!Array.isArray(I.groups))throw new Error("The server returned an unexpected response.")}catch(e){I.groups=[],rn(e)||Gn(`Could not load satellite groups: ${Vn(e.message)}`,"is-error");return}No.setGroups(I.groups);let n=I.groups.find(e=>e==="Space Stations")??I.groups[0];n&&(No.setCurrent(n),await Wc(n))}async function Wc(n){if(I.isSearchResult=!1,Bc.has(n)){I.items=Bc.get(n),I.catalogLoading=!1,Gn(""),Wn();return}I.items=[],I.catalogLoading=!0,Wn(),Gn(`Loading ${n}\u2026 The first time can take a few seconds.`);try{let e=await zt.satellites(n);I.items=Array.isArray(e)?e:[],Bc.set(n,I.items),Gn("")}catch(e){if(rn(e))return;Gn(`Could not load ${n}: ${Vn(e.message)}`,"is-error")}I.catalogLoading=!1,Wn()}async function _7(n){I.items=[],I.isSearchResult=!0,I.catalogLoading=!0,Wn(),Gn("Searching every group. The first search can take up to a minute.");try{let e=await zt.search(n);I.items=e.satellites??[];let t=e.groups_covered<e.groups_total;Gn(t?`Searched ${e.groups_covered} of ${e.groups_total} groups, so more matches may exist.`:`${e.satellites.length} matches across all groups.`,t?"is-warning":"")}catch(e){if(rn(e))return;Gn(`Search failed: ${Vn(e.message)}`,"is-error")}I.catalogLoading=!1,Wn()}function Wn(){let n=le("filter-input").value,e=I.tracked.size>=gi,t=[I.items.length,I.items[0]?.norad_id,I.isSearchResult,I.catalogLoading,n,Kc().join(",")].join("|");if(t===af&&of===I.items)return;af=t,of=I.items;let i=I.isSearchResult?I.items:_d(I.items,n),s=le("catalog-list");if(I.catalogLoading&&!I.items.length){s.replaceChildren(...Array.from({length:12},()=>ue("li","catalog-skeleton"))),s.setAttribute("aria-busy","true"),cf(n);return}s.removeAttribute("aria-busy"),Zc(s,()=>{s.replaceChildren(...i.slice(0,Oc).map(r=>{let a=mi(r.norad_id),o=I.tracked.has(a),c=ue("li"),l=ue("button","catalog-row");l.type="button",l.setAttribute("aria-pressed",String(o)),l.disabled=!o&&e,l.dataset.focus=`catalog:${a}`,l.title=o?`Stop tracking ${r.name}`:e?`You can track up to ${gi} satellites`:`Track ${r.name}`;let h=ue("span","catalog-mark",o?"\u2713":"+");return h.setAttribute("aria-hidden","true"),l.append(h,ue("span","catalog-name",r.name),ue("span","catalog-id",r.norad_id)),l.addEventListener("click",()=>o?mf(a):pr(a,r.name)),c.append(l),c})),i.length>Oc&&s.append(ue("li","note",`Showing ${Oc} of ${i.length}. Filter to narrow the list.`)),e&&s.prepend(ue("li","note",`You can track up to ${gi} satellites. Remove one to add another.`))},le("filter-input")),cf(n)}function cf(n){let e=le("catalog-actions");e.replaceChildren();let t=n.trim();if(yc(t)&&!I.tracked.has(mi(t))){let i=ue("button","text-button",`Track NORAD ${mi(t)}`);i.type="button",i.disabled=I.tracked.size>=gi,i.addEventListener("click",()=>pr(t)),e.append(i)}if(t&&!I.isSearchResult){let i=ue("button","text-button","Search all groups");i.type="button",i.addEventListener("click",()=>_7(t)),e.append(i)}}function mr(){let n=le("tracked-list");if(!I.tracked.size){n.replaceChildren(ue("li","note","Nothing yet. Pick a satellite below."));return}Zc(n,()=>n.replaceChildren(...[...I.tracked.values()].map(e=>{let t=ue("li",`tracked-row${e.id===I.selected?" is-selected":""}`),i=ue("button","tracked-select");i.type="button",i.setAttribute("aria-current",String(e.id===I.selected)),i.dataset.focus=`tracked:${e.id}`;let s=ue("span","dot");s.style.setProperty("--color",e.color),i.append(s,ue("span","tracked-name",e.loading&&!e.track?`${e.name} \xB7 loading`:e.name)),e.error&&i.append(ue("span","tracked-error",e.error)),i.addEventListener("click",()=>ws(e.id));let r=ue("button","row-action","\xD7");if(r.type="button",r.setAttribute("aria-label",`Stop tracking ${e.name}`),r.dataset.focus=`remove:${e.id}`,r.title=`Stop tracking ${e.name}`,r.addEventListener("click",()=>mf(e.id)),t.append(i,r),e.error){let a=ue("button","text-button tracked-retry","Try again");a.type="button",a.dataset.focus=`retry:${e.id}`,a.setAttribute("aria-label",`Try loading ${e.name} again`),a.addEventListener("click",()=>Bo(e)),t.append(a)}return t})),le("filter-input"))}function Li(n,e){for(;n.children.length>e.length;)n.lastElementChild.remove();e.forEach(([t,i,s],r)=>{let a=n.children[r];a||(a=ue("div"),a.append(ue("dt"),ue("dd")),n.append(a)),a.children[0].textContent=t,a.children[1].textContent=i,a.children[1].className=s||""})}function Qc(){let n=mn(),e=le("now-note"),t=n?.track?.samples;if(!t?.length){Li(le("now-readouts"),[]),e.textContent=n?.error??(n?"Loading\u2026":"Add a satellite to see its position."),e.className=`note${n?.error?" is-error":""}`;return}let i=Date.parse(t.at(-1).time);if(I.time>i+6e4&&n.warnings?.some(h=>h.code==="propagation_stopped")){Li(le("now-readouts"),[]),e.textContent=`This orbit cannot be predicted past ${Di(i)}. The satellite may have decayed.`,e.className="note is-warning";return}let s=Sc(I.time,Date.parse(t[0].time),i),r=Ao(t,s),a=[["Latitude",Ac(r.latitude_deg,"N","S")],["Longitude",Ac(r.longitude_deg,"E","W")],["Altitude",`${r.altitude_km.toFixed(1)} km`],["Speed",`${r.speed_km_s.toFixed(3)} km/s`],["Sunlight",xd(t,s)?"Sunlit":"In Earth\u2019s shadow"]],o=n.lookStale?null:bc(t,s);o&&(a.push(["Direction",`${zn(o.azimuth)} (${o.azimuth.toFixed(1)}\xB0)`]),a.push(["Elevation",`${o.elevation.toFixed(1)}\xB0`,o.elevation>0?"is-good":""])),Li(le("now-readouts"),a);let c=n.provenance?Td(n.provenance.element_epoch,s):0,l=[];I.observer||l.push("Set your location to see where to look."),Math.abs(c)>3&&l.push(`These elements are ${Math.abs(c).toFixed(0)} days from the displayed time, so positions may be well off.`);for(let h of n.warnings??[])l.push(h.message);e.textContent=l.join(" "),e.className=`note${Math.abs(c)>3||n.warnings?.length?" is-warning":""}`}function x7(){let n=mn(),e=n?.track?.samples,t=e?.length&&!n.lookStale&&I.time<=Date.parse(e.at(-1).time)?bc(e,I.time):null;lt?.setSightLine(!!(t&&t.elevation>0))}function y7(n){let e=ue("div","pass-summary");e.append(ue("strong","","Where are you?"),ue("span","","Set your location to see when this satellite passes overhead.")),n.append(e);let t=ue("button","text-button","Set location");t.type="button",t.style.marginTop="10px",t.addEventListener("click",_r),n.append(t)}var Xc="Brightness, weather and obstructions may prevent a sighting.";function _f(){return(I.plan?.visible??[]).find(e=>Date.parse(e.end.at)>Date.now())??null}function xf(){let{tonight:n}=I.plan,e=_f(),t=ue("div",`pass-summary${e?" is-visible":""}`);if(t.id="pass-summary",e){let i=Date.parse(e.start.at);t.append(ue("strong","",Date.now()>=i?"Viewing window now":`Viewing window ${Mc(i,Date.now())}`),ue("span","",`${Di(i)}, up to ${Math.round(e.peak.elevation_deg)}\xB0 in the ${zn(e.peak.azimuth_deg)}.`),ue("span","pass-caveat",Xc))}else n.dark_start?t.append(ue("strong","",`No viewing windows in the next ${Oo} hours`),ue("span","",`The next dark sky starts ${Di(Date.parse(n.dark_start))}.`)):t.append(ue("strong","","No dark sky soon"),ue("span","","The Sun stays too high for the next 24 hours."));return t}function Hn(){let n=le("passes-content");Zc(n,()=>v7(n))}function v7(n){if(n.replaceChildren(),!mn()){n.append(ue("p","note","Add a satellite to see its passes."));return}if(!I.observer){y7(n);return}if(I.planError&&!I.plan){n.append(ue("p","note is-error",I.planError));let a=ue("button","text-button","Try again");a.type="button",a.addEventListener("click",()=>xr(!0)),n.append(a);return}if(!I.plan){n.append(ue("p","note","Calculating passes\u2026"));return}let{visible:t,passes:i}=I.plan;I.planError&&n.append(ue("p","note is-warning",`Could not update this list: ${I.planError}`));for(let a of I.plan.warnings??[])n.append(ue("p","note is-warning plan-warning",a.message));if(n.append(xf(),ue("h2","eyebrow section-title",`Next ${Oo} hours \xB7 ${Tc(I.utc)} time`)),!i.length){n.append(ue("p","note","No passes above your horizon in this period."));return}let s=bd(i,t),r=I.clouds?.feed?.data??null;for(let a of s.slice(0,40)){let o=!!(I.activePass&&Co(I.activePass.pass,a)),c=ue("button","pass-row");c.type="button",c.dataset.focus=`pass:${a.maximum_at}`,c.setAttribute("aria-pressed",String(o));let l=Date.parse(a.start),h=Date.parse(a.end),f=r?Pd(r,Date.parse(a.maximum_at)):null,u=f===null?"":` \xB7 ${Math.round(f)}% cloud`;c.append(ue("span","pass-time",`${ys(l,I.utc)} ${xs(l,I.utc).slice(0,5)}`),ue("span","pass-elevation",`${Math.round(a.maximum_elevation_deg)}\xB0`),ue("span","pass-detail",`${zn(a.start_azimuth_deg)} to ${zn(a.end_azimuth_deg)} \xB7 ${Sd(h-l)}${u}`)),a.visible&&c.append(ue("span","badge","Window")),c.addEventListener("click",()=>w7(a)),n.append(c),o&&n.append(M7())}n.append(ue("p","note",r?"A viewing window means the satellite is sunlit, your sky is dark and it is at least 10\xB0 high. Brightness is not considered, so a faint satellite may not be seen.":"A viewing window means the satellite is sunlit, your sky is dark and it is at least 10\xB0 high. Weather and brightness are not considered, so a faint satellite may not be seen.")),ff&&n.append(b7())}function b7(){let{clouds:n}=I,e=ue("div","cloud-check"),t=ue("button","text-button",n?.loading?"Loading\u2026":n?.feed?"Check again":"Check clouds near me");return t.type="button",t.dataset.focus="check-clouds",t.addEventListener("click",S7),e.append(t,ue("p","note","Sends your location, rounded to about 10 km, to Open-Meteo.")),n?.error&&e.append(Lo(n.error)),n?.feed&&e.append(...Yc(n.feed)),e}async function S7(){let n=I.observer;if(!n||I.clouds?.loading)return;let e={observer:n,loading:!0};I.clouds=e,Hn();try{let t=await zt.cloudCover(n);if(I.clouds!==e)return;I.clouds={observer:n,feed:t}}catch(t){if(I.clouds!==e)return;I.clouds={observer:n,error:t}}Hn()}function M7(){let n=ue("div","sky"),{pass:e,points:t,error:i}=I.activePass;if(i)return n.append(ue("p","note is-error",i)),n;if(!t)return n.append(ue("p","note","Loading sky path\u2026")),n;let s=ue("div");Gd(s,t,mn()?.color??"#ebd193",e.visible);let r=ue("div","sky-actions"),a=ue("button","text-button","Show on globe");return a.type="button",a.dataset.focus="show-on-globe",a.addEventListener("click",()=>{T7(Date.parse(e.maximum_at)),document.querySelector(".viewport").scrollIntoView({block:"nearest"})}),r.append(a),n.append(s,r),n}async function w7(n){if(I.activePass&&Co(I.activePass.pass,n)){I.activePass=null,Hn();return}I.activePass={pass:n,points:null},Hn();let e=I.selected;try{let t=await zt.look(e,I.observer,n.start,n.end);I.activePass?.pass===n&&I.selected===e&&(I.activePass.points=t.data.points,Hn())}catch(t){if(rn(t)||I.activePass?.pass!==n)return;I.activePass.error=Vn(t.message),Hn()}}async function xr(n=!1){let e=I.selected;if(!e||!I.observer){Uo();return}let t=`${e}|${I.observer.lat}|${I.observer.lon}|${I.observer.alt}`;if(!(!n&&I.planFor===t&&Date.now()-I.planAt<h7)){I.planFor=t,I.planAt=Date.now(),I.planError=null;try{let i=zt.passes(e,I.observer,Date.now());i.catch(()=>{});let s=await zt.tonight(e,I.observer,Date.now()),r=[...s.data.passes],a=[s],o=s.data,c=Date.now()+Oo*36e5;for(;o.dark_end&&!o.dark_end_clipped&&Date.parse(o.dark_end)<c;){let h=await zt.tonight(e,I.observer,o.dark_end);if(I.planFor!==t)return;r.push(...h.data.passes),a.push(h),o=h.data}let l=await i;if(I.planFor!==t)return;I.plan={tonight:s.data,visible:r,passes:l.data.passes,warnings:vd([l,...a])},I.activePass&&!I.plan.passes.some(h=>Co(I.activePass.pass,h))&&(I.activePass=null)}catch(i){if(rn(i)||I.planFor!==t)return;I.planError=Vn(i.message)}Hn(),Uo()}}async function yf(){let n=I.selected;if(!n){qc();return}try{let e=await zt.report(n);if(I.selected!==n)return;I.report=e}catch(e){if(rn(e)||I.selected!==n)return;I.report={error:Vn(e.message)}}qc()}function E7(n){let e=le("orbit-why"),t=Nd(n);e.hidden=!t,t&&(le("orbit-why-chips").replaceChildren(...t.chips.map(i=>ue("li","why-chip",i))),le("orbit-why-list").replaceChildren(...t.items.map(i=>{let s=ue("li","",i.text);if(i.estimate){let r=ue("span","why-estimate","estimate");r.setAttribute("aria-describedby","orbit-why-legend"),s.append(" ",r)}return fr(ue,s,i.sources),s})))}function qc(){let n=le("orbit-readouts"),e=le("orbit-note"),t=le("orbit-links");if(t.replaceChildren(),e.textContent="",e.className="note",E7(I.report?.data?.orbit?.explanation),!I.selected){Li(n,[]),e.textContent="Add a satellite to see its orbit.";return}if(I.report?.error){Li(n,[]),e.textContent=I.report.error,e.className="note is-error";return}if(!I.report){Li(n,[]),e.textContent="Loading\u2026";return}let{data:i,provenance:s}=I.report,r=i.orbit;Li(n,[["Class (estimate)",r.orbit_class_estimate],["Period",`${r.period_minutes.toFixed(1)} min`],["Inclination",`${r.inclination_deg.toFixed(2)}\xB0`],["Apogee",`${r.apogee_km.toFixed(0)} km`],["Perigee",`${r.perigee_km.toFixed(0)} km`],["Eccentricity",r.eccentricity.toFixed(5)],["Element epoch",Di(Date.parse(s.element_epoch))],["Data source",`${s.source} (${s.cache_status})`]]),e.textContent="Apogee and perigee are two-body estimates.";let a=ue("a","","Download JSON report");if(a.href=`/api/v1/report?norad_id=${encodeURIComponent(I.selected)}`,a.download=`khonsu-${I.selected}.json`,t.append(a),i.map_url){let o=ue("a","","Current position on a map");o.href=i.map_url,o.target="_blank",o.rel="noopener noreferrer",t.append(o)}}function yr(){let n=mn();le("selected-name").textContent=n?.name??"No satellite",le("selected-id").textContent=n?`NORAD ${n.id}`:"",le("selected-swatch").style.setProperty("--color",n?.color??"transparent"),document.title=n?`${n.name} \xB7 Khonsu`:"Khonsu",Qc(),Hn(),qc(),Uo()}function Uo(){let n=le("headline");n.replaceChildren();let e=mn();if(!e)return;if(e.loading&&!e.track){n.append(ue("p","headline-title",e.name),ue("p","headline-main","Fetching its orbit\u2026"),ue("p","headline-sub","The first request can take a few seconds. After that it is saved."));return}if(!I.observer){n.append(ue("p","headline-title","See it yourself"),ue("p","headline-main","When can you see it?"));let i=ue("button","text-button","Set your location");i.type="button",i.dataset.focus="headline-location",i.addEventListener("click",_r),n.append(i);return}if(!I.plan)return;let t=_f();if(t){let i=Date.parse(t.start.at),s=Date.now()>=i;n.append(ue("p","headline-title",`${s?"Viewing window now":"Next viewing window"} \xB7 ${e.name}`),ue("p","headline-main",`${Di(i).slice(0,-3)}${s?"":` \xB7 ${Mc(i,Date.now())}`}`),ue("p","headline-sub",`Up to ${Math.round(t.peak.elevation_deg)}\xB0 in the ${zn(t.peak.azimuth_deg)}, starting in the ${zn(t.start.azimuth_deg)}.`),ue("p","headline-sub",I.plan.warnings?.length?`${Xc} ${I.plan.warnings[0].message}`:Xc));return}n.append(ue("p","headline-title",e.name),ue("p","headline-main",I.plan.tonight.dark_start?`No viewing windows in the next ${Oo} hours`:"No dark sky soon"))}function ko(){let n=le("data-status"),e=mn();if(n.classList.remove("is-warning"),!e?.provenance){n.textContent="";return}let{provenance:t}=e;if(t.cache_status==="stale"){n.textContent=e.warnings?.[0]?.message??"Showing saved elements.",n.classList.add("is-warning");return}n.textContent=t.source==="file"?"Using elements from a local file. No provider requests are made.":`Satellite data from CelesTrak, epoch ${Di(Date.parse(t.element_epoch))}.`}function vf(){le("observer-open").classList.toggle("is-set",!!I.observer),le("observer-label").textContent=I.observer?`${wc(I.observer.lat,"N","S")}, ${wc(I.observer.lon,"E","W")}`:"Set location"}function eh(){let n=le("time-slider");n.max=String(Math.round((I.window.end-I.window.start)/1e3)),le("time-start").textContent=`${ys(I.window.start,I.utc)} ${xs(I.window.start,I.utc).slice(0,5)}`,le("time-end").textContent=`${ys(I.window.end,I.utc)} ${xs(I.window.end,I.utc).slice(0,5)}`}function Po(n){I.live=n;let e=le("live-button");e.classList.toggle("is-live",n),e.setAttribute("aria-pressed",String(n)),n&&(Ss(!1),Rc(I.window,Date.now())&&jc(Date.now()))}function Ss(n){I.playing=n;let e=le("play-button");e.textContent=n?"\u275A\u275A":"\u25B6";let t=n?"Pause timeline":"Play timeline";e.setAttribute("aria-label",t),e.title=t}function T7(n){if(Po(!1),Ss(!1),I.time=n,n<I.window.start||n>I.window.end){let e=mn();e&&(e.framePending=!0),jc(n)}else lt?.update(I.time),lt?.home();gr()}function gr(){let n=le("time-slider"),e=Math.round((I.time-I.window.start)/1e3);(document.activeElement!==n||I.live||I.playing)&&(n.value=String(e));let t=`${Di(I.time)} ${I.utc?"UTC":""}`.trim();n.setAttribute("aria-valuetext",t),le("time-current").textContent=t}function A7(){let n=le("sat-label"),e=lt?.selectedScreenPosition(),t=mn();if(!e||!t?.track){n.hidden=!0;return}n.hidden=!1,n.textContent=t.name,n.style.left=`${e.x}px`,n.style.top=`${e.y}px`}function C7(){if(Gc.tick(),!I.plan)return;le("headline").contains(document.activeElement)||Uo(),le("pass-summary")?.replaceWith(xf())}function bf(n,e){let t=e?Math.min(n-e,1e3):0;I.live?(I.time=Date.now(),Rc(I.window,I.time)&&jc(I.time)):I.playing&&(I.time+=t*Number(le("speed-select").value),I.time>=I.window.end&&(I.time=I.window.end,Ss(!1)));try{lt&&(lt.update(I.time),x7(),lt.render(t/1e3),A7()),n-tf>250&&(tf=n,gr(),I.tab==="now"&&Qc()),n-nf>f7&&(nf=n,C7())}catch(i){sf||console.error(i),sf=!0}requestAnimationFrame(i=>bf(i,n))}function hf(n){I.observer=n,n?_i.setItem("khonsu.observer",JSON.stringify(n)):_i.removeItem("khonsu.observer"),lt?.setObserver(n);for(let e of I.tracked.values())e.lookStale=!0;I.plan=null,I.planFor=null,I.planError=null,I.activePass=null,I.clouds=null,vf(),gf(),yr(),xr(!0)}function _r(){Fo(!1),le("observer-lat").value=I.observer?.lat??"",le("observer-lon").value=I.observer?.lon??"",le("observer-alt").value=I.observer?.alt||"",le("observer-error").textContent="",le("observer-dialog").showModal()}function Fo(n){le("pick-hint").hidden=!n,lt?.setPicking(n)}var Io=0;function Yc(n){let e=[n.source.credit,n.source.nature,`updated ${Ec(n.fetched_at,Date.now())}`];n.stale&&e.push("saved copy");let t=ue("p","data-credit",e.join(" \xB7 "));return n.warning?[t,ue("p","note is-warning",n.warning)]:[t]}function Lo(n){return ue("p","note is-warning",Vn(n.message||"")||"This source could not be reached.")}function uf(n){let e=Date.parse(n);return`${ys(e,I.utc)} ${xs(e,I.utc).slice(0,5)} ${Tc(I.utc)}`}function R7(n){le("data-categories").replaceChildren(...n.map(e=>{let t=ue("section","data-category");t.append(ue("h3",null,e.title),ue("p","note",e.description)),e.id==="earth-imagery"&&t.append(ue("p","note","Choose pictures with the Layers button on the globe."));for(let i of e.sources){let s=ue("div","data-source"),r=ue("a",null,i.name);r.href=i.url,r.target="_blank",r.rel="noreferrer";let a=i.status==="live";s.append(r,ue("span",`data-status${a?" is-live":""}`,a?"Live":"Needs account"),ue("p","note",`${i.summary} ${i.refresh}.`)),t.append(s)}return t}))}async function P7(){try{return await bs}catch{return bs=zt.sources(),bs}}async function I7(){let n=++Io,e=le("data-status-note");e.textContent="",e.classList.remove("is-warning"),le("data-dialog").showModal();let t;try{t=await P7()}catch(i){n===Io&&i.name!=="AbortError"&&(e.textContent=i.message,e.classList.add("is-warning"));return}n===Io&&(R7(t.categories),t.live_data||(e.textContent="Live data is off while serving a local file, so no provider requests are made."))}function L7(){let n=le("layers-open"),e=le("layers-panel"),t=i=>{e.hidden=!i,n.setAttribute("aria-expanded",String(i))};n.addEventListener("click",()=>t(e.hidden)),e.addEventListener("keydown",i=>{i.key==="Escape"&&(i.preventDefault(),t(!1),n.focus())})}function D7(n){pr(n,void 0,{frame:!1})}function N7(n,e){lt&&(lt.face(n,e),th(!1))}function U7(){let n=le("learn-dialog");le("learn-open").addEventListener("click",()=>{n.showModal(),vs.renderList(()=>n.close())}),le("learn-close").addEventListener("click",()=>n.close())}function F7(){let n=le("data-dialog");le("data-open").addEventListener("click",I7),le("data-close").addEventListener("click",()=>n.close()),n.addEventListener("close",()=>{Io+=1,le("data-open").focus()})}function O7(){let n=le("observer-dialog");le("observer-open").addEventListener("click",_r),le("observer-cancel").addEventListener("click",()=>n.close()),n.addEventListener("close",()=>{(!document.activeElement||document.activeElement===document.body)&&le("observer-open").focus()}),le("observer-clear").addEventListener("click",()=>{hf(null),n.close()}),le("observer-form").addEventListener("submit",t=>{t.preventDefault();let i=vc({lat:le("observer-lat").value,lon:le("observer-lon").value,alt:le("observer-alt").value});if(i.error){le("observer-error").textContent=i.error;return}hf(i.observer),n.close()}),le("observer-locate").addEventListener("click",()=>{let t=le("observer-error");if(!navigator.geolocation){t.textContent="This browser cannot share a location. Enter it instead.";return}t.textContent="",navigator.geolocation.getCurrentPosition(({coords:i})=>{le("observer-lat").value=i.latitude.toFixed(4),le("observer-lon").value=i.longitude.toFixed(4)},()=>{t.textContent="The browser did not share a location. Enter it instead."},{timeout:1e4})});let e=le("observer-pick");e.addEventListener("click",()=>{n.close(),Fo(!0)}),lt||(e.disabled=!0),document.addEventListener("keydown",t=>{t.key==="Escape"&&!le("pick-hint").hidden&&(t.preventDefault(),Fo(!1),setTimeout(_r))})}function Vc(n,e=!1){I.tab=n;for(let t of Hc){let i=le(`tab-${t}`),s=t===n;i.setAttribute("aria-selected",String(s)),i.tabIndex=s?0:-1,le(`panel-${t}`).hidden=!s,s&&e&&i.focus()}n==="passes"&&xr(),n==="orbit"&&yf(),n==="data"&&Do.render();for(let t of $c())Ms.open(t)}function B7(){for(let n of Hc){let e=le(`tab-${n}`);e.addEventListener("click",()=>Vc(n)),e.addEventListener("keydown",t=>{let i=Hc.filter(r=>!le(`tab-${r}`).hidden),s=i.indexOf(n);t.key==="ArrowRight"&&Vc(i[(s+1)%i.length],!0),t.key==="ArrowLeft"&&Vc(i[(s+i.length-1)%i.length],!0)})}}function k7(){le("live-button").addEventListener("click",()=>Po(!0)),le("play-button").addEventListener("click",()=>{if(I.playing){Ss(!1);return}I.live&&Po(!1),I.time>=I.window.end&&(I.time=I.window.start),Ss(!0)}),le("time-slider").addEventListener("input",i=>{Po(!1),Ss(!1),I.time=I.window.start+Number(i.target.value)*1e3,gr(),Qc()});let n=le("zone-toggle"),e=()=>{n.textContent=I.utc?"UTC":"Local time",n.setAttribute("aria-pressed",String(I.utc))};e(),n.addEventListener("click",()=>{I.utc=!I.utc,_i.setItem("khonsu.utc",I.utc?"1":"0"),e(),eh(),gr(),yr(),ko(),$c().includes("sees")&&Ms.open("sees")}),No=$d({element:ue,button:le("group-button"),popover:le("group-popover"),input:le("group-search"),list:le("group-options"),onChoose(i){le("filter-input").value="",Wc(i)}}),le("filter-input").addEventListener("input",()=>{if(I.isSearchResult){Wc(No.current());return}Wn()}),le("camera-home").addEventListener("click",()=>lt?.home()),le("zoom-in").addEventListener("click",()=>lt?.zoom(.8)),le("zoom-out").addEventListener("click",()=>lt?.zoom(1.25));let t=le("camera-follow");t.addEventListener("click",()=>th(t.getAttribute("aria-pressed")!=="true"))}function th(n){le("camera-follow").setAttribute("aria-pressed",String(n)),lt?.setFollowing(n)}function z7(n){lt&&(lt.showPoint(n.lat,n.lon),th(!1))}function V7(){lt?.clearPoint()}function df(n){let e=le("scene-error");e.hidden=!1,e.textContent=n}function G7(n){let e=n.categories.flatMap(t=>t.sources);return{liveData:n.live_data,spaceTrackReady:e.some(t=>t.id==="space-track"&&t.status==="live"),imagingIds:new Set(n.imaging_satellites??[])}}async function H7(){bs=zt.sources(),Ro=bs.then(G7).catch(()=>null),rf=bs.then(s=>({liveData:s.live_data,layers:s.imagery_layers})).catch(()=>null),Ro.then(s=>{ff=s?.liveData!==!1,Hn()}),Ms=Wd({api:zt,element:ue,feedCredit:Yc,dataFailure:Lo,dataTime:uf,selectedEntry:mn,catalog:Ro,panels:{identity:le("panel-identity"),radio:le("panel-radio"),sees:le("panel-sees")},focusScene:z7,clearScene:V7});for(let s of Object.keys(pf))le(`section-${s}`).addEventListener("toggle",r=>{r.target.open&&Ms.open(s)});let n=Yd({root:document.querySelector(".app"),handles:{catalog:le("resize-catalog"),inspector:le("resize-inspector")},storage:_i});window.addEventListener("resize",()=>n.fit()),vs=jd({api:zt,element:ue,card:le("lesson-card"),list:le("learn-list"),layers:()=>zc,showSatellite:D7,face:N7,onChange(){le("headline").hidden=!!vs.current(),Jc()}}),Do=Xd({api:zt,element:ue,panel:le("data-measures"),selectedEntry:mn,dataFailure:Lo,layers:()=>zc,startLesson:s=>vs.start(s)});try{lt=Bd(le("scene"),{onPick(s){Fo(!1),_r(),le("observer-lat").value=s.lat.toFixed(4),le("observer-lon").value=s.lon.toFixed(4)},onSelect:s=>ws(s)}),lt.setObserver(I.observer),lt.onContextChange(()=>df("The graphics context was lost. The globe will return if the browser restores it. Reload if it does not. The readouts still work."),()=>{le("scene-error").hidden=!0})}catch(s){lt=null,console.error(s),df("3D rendering is unavailable, so the globe is hidden. Enable WebGL in your browser and reload. Satellite details and passes still work.");for(let r of["camera-follow","camera-home","zoom-in","zoom-out"])le(r).disabled=!0}let e=Vd({element:ue,panel:le("layers-panel"),credit:le("imagery-credit"),catalog:rf,storage:_i,globe:lt,dataAge:Ec});zc=e,e.start().then(()=>{I.tab==="data"&&Do.render(),kc&&vs.start(kc.id,kc.step)}),Gc=ef({api:zt,element:ue,feedCredit:Yc,dataFailure:Lo,dataTime:uf,catalog:Ro,chips:le("sky-chips"),popover:le("sky-popover"),onKp:s=>e.setKp(s)}),Gc.start(),B7(),k7(),O7(),F7(),U7(),L7(),vf(),eh(),mr(),yr(),gr(),requestAnimationFrame(s=>bf(s,0)),setInterval(()=>xr(),6e4);let t=dd(location.search),i=g7();if(t.ids.length){await Promise.race([i,new Promise(s=>setTimeout(s,p7))]);for(let s of t.ids)pr(s,void 0,{selectIt:!1});ws(t.selected)}if(await i,!t.ids.length&&!I.tracked.size){let s=I.items.find(r=>mi(r.norad_id)===u7)??I.items[0];s&&pr(s.norad_id,s.name)}}H7();})();
