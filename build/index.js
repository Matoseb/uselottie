"use strict";var it=Object.create;var G=Object.defineProperty;var rt=Object.getOwnPropertyDescriptor;var lt=Object.getOwnPropertyNames;var at=Object.getPrototypeOf,st=Object.prototype.hasOwnProperty;var ct=(e,t)=>{for(var n in t)G(e,n,{get:t[n],enumerable:!0})},T=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of lt(t))!st.call(e,i)&&i!==n&&G(e,i,{get:()=>t[i],enumerable:!(o=rt(t,i))||o.enumerable});return e};var E=(e,t,n)=>(n=e!=null?it(at(e)):{},T(t||!e||!e.__esModule?G(n,"default",{value:e,enumerable:!0}):n,e)),gt=e=>T(G({},"__esModule",{value:!0}),e);var Gt={};ct(Gt,{default:()=>R,framify:()=>F});module.exports=gt(Gt);var q=E(require("lottie-web"),1);var Y=require("howler"),p=class extends Y.Howl{constructor(t){super(t)}manualSeek(t){return super.seek(t)}manualPlay(){return super.play()}manualRate(t){return super.rate(t)}manualVolume(t){return super.volume(t)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var M=`/* prevent zoom */
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBZ0JBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFFQTs7QUFFQTtFQUNFOztBQUdGO0FBQUE7RUFFRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7O0FBR0Y7QUFBQTtFQUVFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOztBQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFzREk7O0FBdERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQTZESSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHByZXZlbnQgem9vbSAqL1xuXG5AbWl4aW4gc3ZnRWxlbSB7XG4gIFtzdHJva2VdLFxuICBwYXRoLFxuICBjaXJjbGUsXG4gIGVsbGlwc2UsXG4gIHJlY3QsXG4gIHBvbHlnb24sXG4gIGxpbmUsXG4gIHRleHQsXG4gIHBvbHlsaW5lIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5zdmcubG90dGllLWNvbnRyb2xsZXIge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgPiAqIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuXG4gID4gZ1tjbGlwLXBhdGhdLFxuICAub3ZlcmZsb3cge1xuICAgIGNsaXAtcGF0aDogdW5zZXQ7XG4gIH1cblxuICAqIHtcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7IC8vIG5vbmU/XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLm5vY2xpY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmNsaWNrLFxuICAuaGl0Ym94IHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuaGl0Ym94ICoge1xuICAgIHN0cm9rZTogdHJhbnNwYXJlbnQ7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubm9zY2FsZSB7XG4gICAgQGluY2x1ZGUgc3ZnRWxlbSB7XG4gICAgICB2ZWN0b3ItZWZmZWN0OiBub24tc2NhbGluZy1zdHJva2U7XG4gICAgICAvLyBzdHJva2Utd2lkdGg6IHZhcigtLXN0cm9rZS13aWR0aCwgcmV2ZXJ0LWxheWVyKTtcbiAgICB9XG4gIH1cblxuICAuc2NhbGUge1xuICAgIEBpbmNsdWRlIHN2Z0VsZW0ge1xuICAgICAgdmVjdG9yLWVmZmVjdDogdW5zZXQ7XG4gICAgICAvLyBzdHJva2Utd2lkdGg6IHZhcigtLXN0cm9rZS13aWR0aCwgcmV2ZXJ0LWxheWVyKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */`;var z=E(require("tinycolor2"),1);function D(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}function A(){return window.matchMedia("(pointer: coarse)").matches}var J=()=>{};function V(e,t=document){return t.querySelector(e)}function j(e,t=document){return Array.from(t.querySelectorAll(e))}function ut(e){return!(isNaN(e)||e===null)}function I(e,t){if(arguments.length===1)if(Array.isArray(e)){let n=Math.floor(I(e.length));return e[n]}else{if(typeof e=="object")return I(Object.values(e));if(ut(e))return Math.random()*e}else if(arguments.length===0)return Math.random();return Math.random()*(t-e)+e}function B(e,t=0,n=1){return Math.min(Math.max(e,t),n)}function f(e,t=1){return`${e/t*100}%`}function y(e=""){return e.charAt(0).toUpperCase()+e.slice(1)}function _(e){return typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.slice(0,4)}function P(...e){let{name:t,color:n="lightgray",as:o="log"}=this;if(!t)return console[o](...e);let i=(0,z.default)(n).getLuminance()>=.5?"black":"white";console[o](`%c${t}`,`color: ${i}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...e)}function v(e,t=""){let n="data-type",o=document.querySelector(`style[${n}="${e}]`);o||(o=document.createElement("style"),o.setAttribute(n,e),document.head.appendChild(o)),o.innerHTML=t}function Z(e){return typeof e=="string"?e:JSON.stringify(e)}var C=null,x=new Set;function mt(){function e(i){x.forEach(r=>r(i))}function t(i){i.touches.length>0||e(!1)}function n(){e(!0)}function o(){A()||e(!0)}A()||e(!0),C||(window.addEventListener("touchstart",n),window.addEventListener("mousemove",o),window.addEventListener("touchend",t),C=()=>{window.removeEventListener("touchstart",n),window.removeEventListener("mousemove",o),window.removeEventListener("touchend",t),A()&&e(!1),C=null})}function Q(e){return e&&x.add(e),mt(),function(){e&&(x.delete(e),A()&&e(!1)),x.size===0&&C&&C()}}var tt=require("referentiel");function dt(e,t){return e.markers.find(n=>n.payload.name===t)||null}function W(e,t=null){let{totalFrames:n,currentFrame:o}=e,i=n-1;if(t===null)return[o>=i?0:o,i];if(typeof t=="number")return[t,i];if(typeof t!="string")return t;let r=!e.loop,a=[];return t.split(",").filter(Boolean).slice(0,2).forEach((s,u)=>{s=s.trim();let g=dt(e,s);g!==null&&a.push(bt(g,r?u:0))}),a}function bt(e,t=0){return e.time+(t>0?1:0)}function K(e,t,n=!0){let o;Array.isArray(t)?o=t.map(i=>W(e,i)):o=W(e,t),e.playSegments(o,n)}function It(e,t=0){let[n,o]=e;return n+(o-n)*t}function $(e,t,n=1,o=!0){if(Array.isArray(t)&&Array.isArray(t[0])){let r=Math.min(1,Math.max(0,n)),a=Math.round(r*(t.length-1));t=t[a]}else t===null&&(t=0);let i=W(e,t);e.goToAndStop(It(i,n),o)}var et=E(require("lottie-api"),1),pt=tt.Referentiel.convertPointFromPageToNode;var At={0:"lightblue",1:"orange",2:"lightgray",3:"red"},ft={3:"error",2:"log"},h=class e{animation=null;container=null;api=null;name="";stopHover;player;debug=!1;animVariation=!1;volumeVariation;rateVariation;constructor(t={}){let{debug:n=!1,injectCSS:o=!0,volumeVariation:i=0,name:r="",rateVariation:a=0,filterSpread:s=.5,howlerOptions:u={},...g}=t;this.debug=n,this.volumeVariation=i,this.rateVariation=a,this.name=r,o&&v("lottie-controller",M),this.container=typeof t.container=="string"?(()=>{let l=V(t.container);if(!l)throw this.log("Element not found",3)(t.container),new Error("Element not found:"+t.container);return l})():t.container||document.body,this.player=q.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:e.buildFilterSize(s)},audioFactory(l){return new p({src:l,html5:!!D(),...u})},...g,container:this.container}),this.api=et.default.createAnimationApi(this.player),this.player.addEventListener("DOMLoaded",()=>{this.name=this.getName(),document.title=y(this.name),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let l=this.getElem();l&&(this.stopHover=Q(c=>{this.setAttr("can-hover",c,!0)}),l.dataset.filename=this.name,l.classList.add("lottie-controller"),l.addEventListener("contextmenu",c=>(c.preventDefault(),c.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.setAttr("data-playing",!1),this.log("complete",0)()}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)()});let d=1/0;this.player.addEventListener("enterFrame",l=>{if(l.direction!==1)return;let c=this.isPlaying();if(this.setAttr("data-playing",c),!c)return;let{audios:b}=this.player.audioController||{audios:[]},X=this.player.firstFrame+this.player.currentFrame;b.forEach(({audio:m,data:L})=>{var O,S,H;let{st:N}=L;if(N<=X&&N>d){let k=this.rateVariation*.5;(O=m.manualRate)==null||O.call(m,I(1-k,1+k)),(S=m.manualVolume)==null||S.call(m,I(1-this.volumeVariation,1));let w={audios:b,audio:m,data:L,prevent:!1};this.player.triggerEvent("audio",w),w.prevent!==!0&&((H=m.manualPlay)==null||H.call(m))}}),d=X})}random=I;setAnimVariation=(t=!1)=>this.animVariation=t;onComplete=t=>this.player.addEventListener("complete",t);onLoad=t=>this.player.addEventListener("DOMLoaded",t);onLoopComplete=t=>this.player.addEventListener("loopComplete",t);onAudio=t=>this.player.addEventListener("audio",t);getElem=(t,n)=>(n||(n=this.player.renderer.svgElement),t?V(t,n||void 0):n);getElems=(t,n)=>(n||(n=this.player.renderer.svgElement),j(t,n||void 0));isPlaying=(...t)=>{if(t.length===0)return!this.player.isPaused;let n=t.map(e.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;handleAnimVariation=t=>!t||!Array.isArray(t)||this.animVariation===!1?t:t[B(Number(this.animVariation),0,t.length)];seek=(t,{position:n=0,isFrame:o=!0}={})=>{this.player.loop=!1,this.player.resetSegments(!0),this.setAnimation(t),t=this.handleAnimVariation(t);let i=$(this.player,t,n,o);return this.log("seek",1)({position:n}),i};getAnimation=()=>this.animation;getInfos=()=>({animation:this.animation,currentFrame:this.player.currentFrame});setAnimation=(t=null)=>{this.animation=e.getAnimationKey(t),this.setAttr("data-animation",this.animation)};getPoint=(t,n,{viewbox:o=!1,selector:i=null,normalize:r=!0,clamp:a=!1}={})=>{let s=this.getElem(i);if(!s)return null;let u,g,d,l,c,b;return"getBBox"in s&&o?({x:l,y:d,width:u,height:g}=s.getBBox(),c=l+u,b=d+g):{top:d,left:l,width:u,height:g,right:c,bottom:b}=s.getBoundingClientRect(),o?[t,n]=pt(s,[t,n]):(t-=l,n-=d),a&&(t=B(t,0,u),n=B(n,0,g)),r&&(t/=u,n/=g),{top:d,left:l,width:u,height:g,right:c,bottom:b,x:t,y:n}};setAttr=(t,n="",o=!1)=>{let i=this.getElem();if(i){if(o&&(n=n?"":null),n===null){i.removeAttribute(t);return}i.setAttribute(t,Z(n))}};log=(t,n)=>{if(!this.debug)return J;let o=ft[n||2],i=At[n||2];return(...r)=>{P.call({name:t,color:i,as:o},...r,{...this.getInfos()})}};loop=t=>{this.player.loop=t};play=(t=0,{isFrame:n=!0,loop:o=!1,smooth:i=!1}={})=>{let r=!i;if(this.player.loop=o,typeof t=="number"){this.setAnimation(),this.player.goToAndPlay(t,n);return}return this.setAnimation(t),t=this.handleAnimVariation(t),this.log("play",1)(),K(this.player,t,r)};getName=()=>{let{fileName:t,path:n=""}=this.player;return this.name?this.name:!t||t==="data"?n.split("/").filter(Boolean).pop()||"untitled":t};destroy=()=>{var t;this.player.destroy(),(t=this.stopHover)==null||t.call(this)};static getAnimationKey(t=null){return t==null?null:Z(t)}static buildFilterSize(t){let[n,o,i,r]=_(t);return{x:f(-r),y:f(-n),width:f(1+o+r),height:f(1+i+n)}}};var nt=`.framify {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllL2ZyYW1pZnkiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJBO0VBS0U7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0EsU0FaSTtFQWFKLEtBYkk7RUFjSjtFQUNBO0VBQ0E7O0FBOUNGO0VBc0NBO0lBY0k7SUFDQTs7O0FBSUo7RUFDRTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0EsZUFsQ0k7RUFtQ0o7O0FBakVGO0VBeURBO0lBV0k7OztBQTlESjtFQXVFSTtJQUxBO0lBQ0E7OztBQVNGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLFNBMURFO0VBMkRGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBLGtCQWpFVztFQWtFWDtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQS9GSjtFQWFFO0lBMkZJLGtCQTlFTzs7O0FBUmI7RUFzRk0sa0JBOUVPOztBQWlGVDtFQVRFO0VBQ0E7RUFDQTs7QUE5Rk47RUFzRUU7SUFzQkk7SUFDQTtJQUNBOzs7QUE5Rk47RUE2Q0E7SUFlSTtJQUNBOzs7QUFxREY7RUF0REU7RUFDQTs7QUF5REY7RUFDRTtFQUNBOztBQUdGO0VBQ0U7RUFDQSxLQTNHRTtFQTRHRixNQTVHRTtFQTZHRjtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIG1vYmlsZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBpc21vdXNlIHtcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGlzdG91Y2gge1xuICBAbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBob3ZlciB7XG4gIEBpbmNsdWRlIGlzbW91c2Uge1xuICAgICY6aG92ZXIge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi5mcmFtaWZ5IHtcbiAgJGdhcDogMXJlbTtcbiAgJGNvbG9yLXNoYWRvdzogcmdiYSgxNTgsIDE2MCwgMTYyLCAwLjI1KTtcbiAgJGNvbG9yLWxpbms6IGhzbCgyMTIsIDEwMCUsIDc2JSk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmX19yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiAkZ2FwO1xuICAgIGdhcDogJGdhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLy8gYWxpZ24gY2VsbHNcblxuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmX19jZWxsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNnJlbTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRnYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgQG1peGluIHNoYWRvdyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAkY29sb3Itc2hhZG93O1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBpc21vdXNlIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1saW5rIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICByaWdodDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogJGdhcDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2hhZG93O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5LCBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgQG1peGluIGxpbmstdmlzaWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpbms7XG4gICAgICB9XG5cbiAgICAgIDpob3ZlciA+ICYge1xuICAgICAgICBAaW5jbHVkZSBsaW5rLXZpc2libGU7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGlzdG91Y2gge1xuICAgICAgICBAaW5jbHVkZSBsaW5rLXZpc2libGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgaXN0b3VjaCB7XG4gICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgfVxuXG4gICAgJi5mdWxsc2NyZWVuIHtcbiAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICB9XG5cbiAgICAuZnJhbWlmeTpoYXMoLmZ1bGxzY3JlZW4pICY6bm90KC5mdWxsc2NyZWVuKSB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6ICRnYXA7XG4gICAgICBsZWZ0OiAkZ2FwO1xuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAjeyRnYXB9KTtcbiAgICAgIGhlaWdodDogY2FsYygxMDBkdmggLSAyICogI3skZ2FwfSk7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cblxuICAgID4gaWZyYW1lIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */`;function F(e,{parent:t=document.body}={}){v("framify",nt);let n=document.createElement("div");n.classList.add("framify");let o=[],i=[o];e.forEach(a=>{if(a===null){o=[],i.push(o);return}typeof a=="string"&&o.push(a)});let r=document.createDocumentFragment();i.forEach(a=>{let s=document.createElement("div");s.classList.add("framify__row"),Ct(s,a),r.appendChild(s)}),n.appendChild(r),t.appendChild(n)}function ot(e){return e?!!e.closest("svg > *"):!1}function U(e,t){var o;if(!e||window.matchMedia("(pointer:coarse)").matches)return;t=e.classList.toggle("fullscreen",t);let n=(o=e.querySelector("iframe"))==null?void 0:o.contentWindow;n==null||n.document.documentElement.style.setProperty("--cursor",t?"zoom-out":"zoom-in")}function Ct(e,t){t.forEach(n=>{let o=document.createElement("div");if(e.appendChild(o),!n)return;let i=n.replace(/\/index\.html?$/,"").split("/").pop();o.innerHTML=`
      <a href="${n}" class="framify__cell-link" title="${y(i)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${n}"></iframe>
    `,o.classList.add("framify__cell");let r=o.querySelector("iframe");r&&(r.onload=()=>ht(r,o))})}function ht(e,t){U(t,!1);let n=!1;function o(r){if(!r.view)return;let{style:a}=r.view.document.body;a.cursor=ot(r.target)?"":"var(--cursor)"}let i=e.contentWindow;i&&(i.onpointerover=function(r){o(r)},i.onpointermove=function(r){o(r)},i.onpointerdown=function(r){n=ot(r.target)},i.onclick=function(){n||U(t)},i.onblur=function(){n=!1},i.onkeydown=function(r){r.key==="Escape"&&U(t,!1)})}function R(e){return new h(e)}globalThis.useLottie=R;globalThis.framify=F;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
