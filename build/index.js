"use strict";var ue=Object.create;var x=Object.defineProperty;var me=Object.getOwnPropertyDescriptor;var de=Object.getOwnPropertyNames;var be=Object.getPrototypeOf,pe=Object.prototype.hasOwnProperty;var Ie=(t,e)=>{for(var n in e)x(t,n,{get:e[n],enumerable:!0})},J=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of de(e))!pe.call(t,r)&&r!==n&&x(t,r,{get:()=>e[r],enumerable:!(i=me(e,r))||i.enumerable});return t};var W=(t,e,n)=>(n=t!=null?ue(be(t)):{},J(e||!t||!t.__esModule?x(n,"default",{value:t,enumerable:!0}):n,t)),fe=t=>J(x({},"__esModule",{value:!0}),t);var Ze={};Ie(Ze,{default:()=>N,framify:()=>V});module.exports=fe(Ze);var re=W(require("lottie-web"),1);var j=require("howler"),A=class extends j.Howl{constructor(e){super(e)}manualSeek(e){return super.seek(e)}manualPlay(){return super.play()}manualRate(e){return super.rate(e)}manualVolume(e){return super.volume(e)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var D=`/* prevent zoom */
svg.lottie-controller {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  overflow: visible;
  pointer-events: none;
}
svg.lottie-controller > * {
  pointer-events: auto;
}
svg.lottie-controller > g[clip-path],
svg.lottie-controller .overflow {
  clip-path: unset;
}
svg.lottie-controller * {
  touch-action: none;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
}
svg.lottie-controller .noclick {
  pointer-events: none;
}
svg.lottie-controller .click,
svg.lottie-controller .hitbox {
  pointer-events: auto;
  cursor: pointer;
}
svg.lottie-controller .hitbox * {
  stroke: transparent;
  fill: transparent;
}
svg.lottie-controller .noscale [stroke],
svg.lottie-controller .noscale path,
svg.lottie-controller .noscale circle,
svg.lottie-controller .noscale ellipse,
svg.lottie-controller .noscale rect,
svg.lottie-controller .noscale polygon,
svg.lottie-controller .noscale line,
svg.lottie-controller .noscale text,
svg.lottie-controller .noscale polyline {
  vector-effect: non-scaling-stroke;
}
svg.lottie-controller .scale [stroke],
svg.lottie-controller .scale path,
svg.lottie-controller .scale circle,
svg.lottie-controller .scale ellipse,
svg.lottie-controller .scale rect,
svg.lottie-controller .scale polygon,
svg.lottie-controller .scale line,
svg.lottie-controller .scale text,
svg.lottie-controller .scale polyline {
  vector-effect: unset;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBZ0JBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFFQTs7QUFFQTtFQUNFOztBQUdGO0FBQUE7RUFFRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7O0FBR0Y7QUFBQTtFQUVFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOztBQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFzREk7O0FBdERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQTZESSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHByZXZlbnQgem9vbSAqL1xuXG5AbWl4aW4gc3ZnRWxlbSB7XG4gIFtzdHJva2VdLFxuICBwYXRoLFxuICBjaXJjbGUsXG4gIGVsbGlwc2UsXG4gIHJlY3QsXG4gIHBvbHlnb24sXG4gIGxpbmUsXG4gIHRleHQsXG4gIHBvbHlsaW5lIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5zdmcubG90dGllLWNvbnRyb2xsZXIge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgPiAqIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuXG4gID4gZ1tjbGlwLXBhdGhdLFxuICAub3ZlcmZsb3cge1xuICAgIGNsaXAtcGF0aDogdW5zZXQ7XG4gIH1cblxuICAqIHtcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7IC8vIG5vbmU/XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLm5vY2xpY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmNsaWNrLFxuICAuaGl0Ym94IHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuaGl0Ym94ICoge1xuICAgIHN0cm9rZTogdHJhbnNwYXJlbnQ7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubm9zY2FsZSB7XG4gICAgQGluY2x1ZGUgc3ZnRWxlbSB7XG4gICAgICB2ZWN0b3ItZWZmZWN0OiBub24tc2NhbGluZy1zdHJva2U7XG4gICAgICAvLyBzdHJva2Utd2lkdGg6IHZhcigtLXN0cm9rZS13aWR0aCwgcmV2ZXJ0LWxheWVyKTtcbiAgICB9XG4gIH1cblxuICAuc2NhbGUge1xuICAgIEBpbmNsdWRlIHN2Z0VsZW0ge1xuICAgICAgdmVjdG9yLWVmZmVjdDogdW5zZXQ7XG4gICAgICAvLyBzdHJva2Utd2lkdGg6IHZhcigtLXN0cm9rZS13aWR0aCwgcmV2ZXJ0LWxheWVyKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */`;var _=W(require("tinycolor2"),1);function P(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}function p(){return window.matchMedia("(pointer: coarse)").matches}var K=()=>{};function Q(t,e=document){return e.querySelector(t)}function q(t,e=document){return Array.from(e.querySelectorAll(t))}function I(t,e,n,i=window){return i.addEventListener(t,e,n),()=>{i.removeEventListener(t,e,n)}}function $(){try{return window.self!==window.top}catch{return!0}}function Ae(t){return!(isNaN(t)||t===null)}function C(t){return new Promise(e=>{setTimeout(e,t)})}function m(t,e){if(arguments.length===1)if(Array.isArray(t)){let n=Math.floor(m(t.length));return t[n]}else{if(typeof t=="object")return m(Object.values(t));if(Ae(t))return Math.random()*t}else if(arguments.length===0)return Math.random();return Math.random()*(e-t)+t}function F(t,e=0,n=1){return Math.min(Math.max(t,e),n)}function h(t,e=1){return`${t/e*100}%`}function X(t=""){return t.charAt(0).toUpperCase()+t.slice(1)}function ee(t){return typeof t=="number"?[t,t,t,t]:t.length===2?[t[0],t[1],t[0],t[1]]:t.length===3?[t[0],t[1],t[2],t[1]]:t.slice(0,4)}function te(...t){let{name:e,color:n="lightgray",as:i="log"}=this;if(!e)return console[i](...t);let r=(0,_.default)(n).getLuminance()>=.5?"black":"white";console[i](`%c${e}`,`color: ${r}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...t)}function y(t,e=""){let n="data-type",i=document.querySelector(`style[${n}="${t}]`);i||(i=document.createElement("style"),i.setAttribute(n,t),document.head.appendChild(i)),i.innerHTML=e}function L(t){return typeof t=="string"?t:JSON.stringify(t)}var G=null,E=new Set;function Ce(){function t(r){E.forEach(o=>o(r))}function e(r){r.touches.length>0||t(!1)}function n(){t(!0)}function i(){p()||t(!0)}p()||t(!0),G||(window.addEventListener("touchstart",n),window.addEventListener("mousemove",i),window.addEventListener("touchend",e),G=()=>{window.removeEventListener("touchstart",n),window.removeEventListener("mousemove",i),window.removeEventListener("touchend",e),p()&&t(!1),G=null})}function R(t){return t&&E.add(t),Ce(),function(){t&&(E.delete(t),p()&&t(!1)),E.size===0&&G&&G()}}var oe=require("referentiel");function he(t,e){return t.markers.find(n=>n.payload.name===e)||null}function U(t,e=null){let{totalFrames:n,currentFrame:i}=t,r=n-1;if(e===null)return[i>=r?0:i,r];if(typeof e=="number")return[e,r];if(typeof e!="string")return e;let o=!t.loop,c=[];return e.split(",").filter(Boolean).slice(0,2).forEach((l,a)=>{l=l.trim();let s=he(t,l);s!==null&&c.push(ye(s,o?a:0))}),c}function ye(t,e=0){return t.time+(e>0?1:0)}function ne(t,e,n=!0){let i;Array.isArray(e)?i=e.map(r=>U(t,r)):i=U(t,e),t.playSegments(i,n)}function Ge(t,e=0){let[n,i]=t;return n+(i-n)*e}function ie(t,e,n=1,i=!0){if(Array.isArray(e)&&Array.isArray(e[0])){let o=Math.min(1,Math.max(0,n)),c=Math.round(o*(e.length-1));e=e[c]}else e===null&&(e=0);let r=U(t,e);t.goToAndStop(Ge(r,n),i)}var le=W(require("lottie-api"),1),Be=oe.Referentiel.convertPointFromPageToNode;var ve={0:"lightblue",1:"orange",2:"lightgray",3:"red"},xe={3:"error",2:"log"},B=class t{animation=null;container=null;api=null;name="";stopHover;player;debug=!1;animVariation=!1;volumeVariation;rateVariation;constructor(e={}){let{debug:n=!1,injectCSS:i=!0,volumeVariation:r=0,name:o="",rateVariation:c=0,filterSpread:l=.5,howlerOptions:a={},...s}=e;this.debug=n,this.volumeVariation=r,this.rateVariation=c,this.name=o,i&&y("lottie-controller",D),this.container=typeof e.container=="string"?(()=>{let g=Q(e.container);if(!g)throw this.log("Element not found",3)(e.container),new Error("Element not found:"+e.container);return g})():e.container||document.body,this.player=re.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:t.buildFilterSize(l)},audioFactory(g){return new A({src:g,html5:!!P(),...a})},...s,container:this.container}),this.api=le.default.createAnimationApi(this.player),this.player.addEventListener("DOMLoaded",()=>{this.name=this.getName(),document.title=X(this.name),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let g=this.getElem();g&&(this.stopHover=R(u=>{this.setAttr("can-hover",u,!0)}),g.dataset.filename=this.name,g.classList.add("lottie-controller"),g.addEventListener("contextmenu",u=>(u.preventDefault(),u.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.setAttr("data-playing",!1),this.log("complete",0)()}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)()});let b=1/0;this.player.addEventListener("enterFrame",g=>{if(g.direction!==1)return;let u=this.isPlaying();if(this.setAttr("data-playing",u),!u)return;let{audios:f}=this.player.audioController||{audios:[]},Z=this.player.firstFrame+this.player.currentFrame;f.forEach(({audio:d,data:w})=>{var k,T,Y;let{st:H}=w;if(H<=Z&&H>b){let M=this.rateVariation*.5;(k=d.manualRate)==null||k.call(d,m(1-M,1+M)),(T=d.manualVolume)==null||T.call(d,m(1-this.volumeVariation,1));let z={audios:f,audio:d,data:w,prevent:!1};this.player.triggerEvent("audio",z),z.prevent!==!0&&((Y=d.manualPlay)==null||Y.call(d))}}),b=Z})}random=m;setAnimVariation=(e=!1)=>this.animVariation=e;onComplete=e=>this.player.addEventListener("complete",e);onLoad=e=>this.player.addEventListener("DOMLoaded",e);onLoopComplete=e=>this.player.addEventListener("loopComplete",e);onAudio=e=>this.player.addEventListener("audio",e);getElem=(e,n)=>(n||(n=this.player.renderer.svgElement),e?Q(e,n||void 0):n);getElems=(e,n)=>(n||(n=this.player.renderer.svgElement),q(e,n||void 0));isPlaying=(...e)=>{if(e.length===0)return!this.player.isPaused;let n=e.map(t.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;handleAnimVariation=e=>!e||!Array.isArray(e)||this.animVariation===!1?e:e[F(Number(this.animVariation),0,e.length)];seek=(e,{position:n=0,isFrame:i=!0}={})=>{this.player.loop=!1,this.player.resetSegments(!0),this.setAnimation(e),e=this.handleAnimVariation(e);let r=ie(this.player,e,n,i);return this.log("seek",1)({position:n}),r};getAnimation=()=>this.animation;getInfos=()=>({animation:this.animation,currentFrame:this.player.currentFrame});setAnimation=(e=null)=>{this.animation=t.getAnimationKey(e),this.setAttr("data-animation",this.animation)};getPoint=(e,n,{viewbox:i=!1,selector:r=null,normalize:o=!0,clamp:c=!1}={})=>{let l=this.getElem(r);if(!l)return null;let a,s,b,g,u,f;return"getBBox"in l&&i?({x:g,y:b,width:a,height:s}=l.getBBox(),u=g+a,f=b+s):{top:b,left:g,width:a,height:s,right:u,bottom:f}=l.getBoundingClientRect(),i?[e,n]=Be(l,[e,n]):(e-=g,n-=b),c&&(e=F(e,0,a),n=F(n,0,s)),o&&(e/=a,n/=s),{top:b,left:g,width:a,height:s,right:u,bottom:f,x:e,y:n}};setAttr=(e,n="",i=!1)=>{let r=this.getElem();if(r){if(i&&(n=n?"":null),n===null){r.removeAttribute(e);return}r.setAttribute(e,L(n))}};log=(e,n)=>{if(!this.debug)return K;let i=xe[n||2],r=ve[n||2];return(...o)=>{te.call({name:e,color:r,as:i},...o,{...this.getInfos()})}};loop=e=>{let{player:n}=this;if(n.loop===!0&&n.loop!==e&&!n.isPaused){let{firstFrame:i,totalFrames:r,currentFrame:o}=n;n.adjustSegment([i,r+i+1],o)}return n.loop=e};play=(e=0,{isFrame:n=!0,loop:i=!1,smooth:r=!1}={})=>{let o=!r;if(this.player.loop=i,typeof e=="number"){this.setAnimation(),this.player.goToAndPlay(e,n);return}return this.setAnimation(e),e=this.handleAnimVariation(e),this.log("play",1)(),ne(this.player,e,o)};getName=()=>{let{fileName:e,path:n=""}=this.player;return this.name?this.name:!e||e==="data"?n.split("/").filter(Boolean).pop()||"untitled":e};destroy=()=>{var e;this.player.destroy(),(e=this.stopHover)==null||e.call(this)};static getAnimationKey(e=null){return e==null?null:L(e)}static buildFilterSize(e){let[n,i,r,o]=ee(e);return{x:h(-o),y:h(-n),width:h(1+i+o),height:h(1+r+n)}}};var ae=`.framify {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.framify__row {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
}
@media (max-width: 768px) {
  .framify__row {
    flex-direction: column;
    width: 100%;
  }
}
.framify__cell {
  position: relative;
  align-self: center;
  width: 100%;
  max-width: 16rem;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  overflow: hidden;
}
@media (max-width: 768px) {
  .framify__cell {
    max-width: 100%;
  }
}
@media (pointer: fine) {
  .framify__cell:hover {
    box-shadow: 0 0 10px rgba(158, 160, 162, 0.25);
    z-index: 1;
  }
}
.framify__cell-link {
  position: absolute;
  z-index: 2;
  right: 0;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 1rem;
  visibility: hidden;
  aspect-ratio: 1/1;
  width: unset;
  display: flex;
  color: transparent;
  background-clip: text;
  background-color: rgba(158, 160, 162, 0.25);
  transition: transform, visibility, opacity, background-color;
  transition-duration: 0.2s;
  transform: scale(0.8);
  transform-origin: bottom left;
  opacity: 0;
}
@media (pointer: fine) {
  .framify__cell-link:hover {
    background-color: hsl(212, 100%, 76%);
  }
}
.framify__cell-link:active {
  background-color: hsl(212, 100%, 76%);
}
:hover > .framify__cell-link {
  visibility: visible;
  transform: scale(1);
  opacity: 1;
}
@media (pointer: coarse) {
  .framify__cell-link {
    visibility: visible;
    transform: scale(1);
    opacity: 1;
  }
}
@media (pointer: coarse) {
  .framify__cell {
    box-shadow: 0 0 10px rgba(158, 160, 162, 0.25);
    z-index: 1;
  }
}
.framify__cell.fullscreen {
  box-shadow: 0 0 10px rgba(158, 160, 162, 0.25);
  z-index: 1;
}
.framify:has(.fullscreen) .framify__cell:not(.fullscreen) {
  visibility: hidden;
  opacity: 0;
}
.framify__cell.fullscreen {
  position: fixed;
  top: 1rem;
  left: 1rem;
  max-width: unset;
  max-height: unset;
  width: calc(100% - 2 * 1rem);
  height: calc(100dvh - 2 * 1rem);
  z-index: 1000;
}
.framify__cell > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllL2ZyYW1pZnkiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJBO0VBS0U7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0EsU0FaSTtFQWFKLEtBYkk7RUFjSjtFQUNBO0VBQ0E7O0FBOUNGO0VBc0NBO0lBY0k7SUFDQTs7O0FBSUo7RUFDRTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0EsZUFsQ0k7RUFtQ0o7O0FBakVGO0VBeURBO0lBV0k7OztBQTlESjtFQXVFSTtJQUxBO0lBQ0E7OztBQVNGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLFNBMURFO0VBMkRGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBLGtCQWpFVztFQWtFWDtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQS9GSjtFQWFFO0lBMkZJLGtCQTlFTzs7O0FBUmI7RUFzRk0sa0JBOUVPOztBQWlGVDtFQVRFO0VBQ0E7RUFDQTs7QUE5Rk47RUFzRUU7SUFzQkk7SUFDQTtJQUNBOzs7QUE5Rk47RUE2Q0E7SUFlSTtJQUNBOzs7QUFxREY7RUF0REU7RUFDQTs7QUF5REY7RUFDRTtFQUNBOztBQUdGO0VBQ0U7RUFDQSxLQTNHRTtFQTRHRixNQTVHRTtFQTZHRjtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIG1vYmlsZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBpc21vdXNlIHtcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGlzdG91Y2gge1xuICBAbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBob3ZlciB7XG4gIEBpbmNsdWRlIGlzbW91c2Uge1xuICAgICY6aG92ZXIge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi5mcmFtaWZ5IHtcbiAgJGdhcDogMXJlbTtcbiAgJGNvbG9yLXNoYWRvdzogcmdiYSgxNTgsIDE2MCwgMTYyLCAwLjI1KTtcbiAgJGNvbG9yLWxpbms6IGhzbCgyMTIsIDEwMCUsIDc2JSk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmX19yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiAkZ2FwO1xuICAgIGdhcDogJGdhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLy8gYWxpZ24gY2VsbHNcblxuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmX19jZWxsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNnJlbTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRnYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgQG1peGluIHNoYWRvdyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAkY29sb3Itc2hhZG93O1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBpc21vdXNlIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1saW5rIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICByaWdodDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogJGdhcDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2hhZG93O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5LCBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgQG1peGluIGxpbmstdmlzaWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpbms7XG4gICAgICB9XG5cbiAgICAgIDpob3ZlciA+ICYge1xuICAgICAgICBAaW5jbHVkZSBsaW5rLXZpc2libGU7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGlzdG91Y2gge1xuICAgICAgICBAaW5jbHVkZSBsaW5rLXZpc2libGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgaXN0b3VjaCB7XG4gICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgfVxuXG4gICAgJi5mdWxsc2NyZWVuIHtcbiAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICB9XG5cbiAgICAuZnJhbWlmeTpoYXMoLmZ1bGxzY3JlZW4pICY6bm90KC5mdWxsc2NyZWVuKSB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6ICRnYXA7XG4gICAgICBsZWZ0OiAkZ2FwO1xuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAjeyRnYXB9KTtcbiAgICAgIGhlaWdodDogY2FsYygxMDBkdmggLSAyICogI3skZ2FwfSk7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cblxuICAgID4gaWZyYW1lIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */`;var se=`:root {
  --cursor: zoom-in;
}

.is-fullscreen {
  --cursor: zoom-out;
}

body:has(svg:not(:hover)) {
  cursor: var(--cursor);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllL2ZyYW1pZnkiLCJzb3VyY2VzIjpbImZyYW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTs7O0FBR0Y7RUFDRTs7O0FBR0Y7RUFDRSIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS1jdXJzb3I6IHpvb20taW47XG59XG5cbi5pcy1mdWxsc2NyZWVuIHtcbiAgLS1jdXJzb3I6IHpvb20tb3V0O1xufVxuXG5ib2R5Omhhcyhzdmc6bm90KDpob3ZlcikpIHtcbiAgY3Vyc29yOiB2YXIoLS1jdXJzb3IpO1xufVxuIl19 */`;function V(t,{parent:e=document.body,animate:n=!1,interval:i=[1e3,2e3]}={}){y("framify",ae);let r=document.createElement("div");r.classList.add("framify");let o=[],c=[o];t.forEach(a=>{if(a===null){o=[],c.push(o);return}typeof a=="string"&&o.push(a)});let l=document.createDocumentFragment();c.forEach(a=>{let s=document.createElement("div");s.classList.add("framify__row"),Xe(s,a),l.appendChild(s)}),r.appendChild(l),e.appendChild(r),n&&ge(r,i)}async function ge(t,e){var r;let n=t.querySelectorAll("iframe");(r=m(n).contentWindow)==null||r.postMessage({type:"animate"},"*"),await C(m(e)),ge(t,e)}function Fe(t){return t?!!t.closest("svg"):!1}function O(t){var e;p()||(e=window.top)==null||e.postMessage({type:"fullscreen:request",isFullscreen:t},"*")}function Xe(t,e){e.forEach(n=>{let i=document.createElement("div");if(t.appendChild(i),!n)return;let r=n.replace(/\/index\.html?$/,"").split("/").pop();i.innerHTML=`
      <a href="${n}" class="framify__cell-link" title="${X(r)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${n}"></iframe>
    `,i.classList.add("framify__cell");let o=i.querySelector("iframe");o&&I("message",c=>{var a,s;if(c.source!==o.contentWindow||((a=c.data)==null?void 0:a.type)!=="fullscreen:request")return;let{isFullscreen:l}=c.data;l=i.classList.toggle("fullscreen",l),(s=c.source)==null||s.postMessage({type:"fullscreen:confirm",isFullscreen:l},c.origin)},!1)})}$()&&window.location.search.includes("framify=1")&&(Ee(),y("framify-cell",se));function Ee(){O(!1);let t=!1;I("message",e=>{var n,i;if(((n=e.data)==null?void 0:n.type)==="animate")Ve();else if(((i=e.data)==null?void 0:i.type)==="fullscreen:confirm"){let r=e.data.isFullscreen;document.body.classList.toggle("is-fullscreen",r)}},!0),I("pointerdown",e=>{t=Fe(e.target)},!0),I("click",e=>{e.isTrusted&&(t||O())},!0),I("blur",()=>{t=!1},!0),I("keydown",e=>{e.key==="Escape"&&O(!1)},!0)}function v(t,e){document.hasFocus()||t==null||t.dispatchEvent(new MouseEvent(e,{bubbles:!0}))}var S=!1;async function Ve(){if(S||document.body.classList.contains("is-fullscreen"))return;S=!0;let e=document.querySelector("svg path");await ce(e),await C(m(2e3,4e3)),await ce(e),S=!1}async function ce(t){t&&(v(t,"pointerdown"),v(t,"mousedown"),await C(m(400,1e3)),v(t,"pointerup"),v(t,"mouseup"),await C(m(800,1e3)),v(t,"click"))}function N(t){return new B(t)}globalThis.useLottie=N;globalThis.framify=V;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
