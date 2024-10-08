"use strict";var ot=Object.create;var G=Object.defineProperty;var rt=Object.getOwnPropertyDescriptor;var lt=Object.getOwnPropertyNames;var at=Object.getPrototypeOf,st=Object.prototype.hasOwnProperty;var ct=(e,t)=>{for(var n in t)G(e,n,{get:t[n],enumerable:!0})},Y=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of lt(t))!st.call(e,o)&&o!==n&&G(e,o,{get:()=>t[o],enumerable:!(i=rt(t,o))||i.enumerable});return e};var E=(e,t,n)=>(n=e!=null?ot(at(e)):{},Y(t||!e||!e.__esModule?G(n,"default",{value:e,enumerable:!0}):n,e)),ut=e=>Y(G({},"__esModule",{value:!0}),e);var Gt={};ct(Gt,{default:()=>U,framify:()=>X});module.exports=ut(Gt);var $=E(require("lottie-web"),1);var z=require("howler"),A=class extends z.Howl{constructor(t){super(t)}manualSeek(t){return super.seek(t)}manualPlay(){return super.play()}manualRate(t){return super.rate(t)}manualVolume(t){return super.volume(t)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var j=`/* prevent zoom */
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZSIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQWdCQTtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBRUE7O0FBRUE7RUFDRTs7QUFHRjtBQUFBO0VBRUU7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFOztBQUdGO0FBQUE7RUFFRTtFQUNBOztBQUdGO0VBQ0U7RUFDQTs7QUFqREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBc0RJOztBQXRESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUE2REkiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwcmV2ZW50IHpvb20gKi9cblxuQG1peGluIHN2Z0VsZW0ge1xuICBbc3Ryb2tlXSxcbiAgcGF0aCxcbiAgY2lyY2xlLFxuICBlbGxpcHNlLFxuICByZWN0LFxuICBwb2x5Z29uLFxuICBsaW5lLFxuICB0ZXh0LFxuICBwb2x5bGluZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuc3ZnLmxvdHRpZS1jb250cm9sbGVyIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gID4gKiB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICA+IGdbY2xpcC1wYXRoXSxcbiAgLm92ZXJmbG93IHtcbiAgICBjbGlwLXBhdGg6IHVuc2V0O1xuICB9XG5cbiAgKiB7XG4gICAgdG91Y2gtYWN0aW9uOiBub25lOyAvLyBub25lP1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIC5ub2NsaWNrIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5jbGljayxcbiAgLmhpdGJveCB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmhpdGJveCAqIHtcbiAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm5vc2NhbGUge1xuICAgIEBpbmNsdWRlIHN2Z0VsZW0ge1xuICAgICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlO1xuICAgICAgLy8gc3Ryb2tlLXdpZHRoOiB2YXIoLS1zdHJva2Utd2lkdGgsIHJldmVydC1sYXllcik7XG4gICAgfVxuICB9XG5cbiAgLnNjYWxlIHtcbiAgICBAaW5jbHVkZSBzdmdFbGVtIHtcbiAgICAgIHZlY3Rvci1lZmZlY3Q6IHVuc2V0O1xuICAgICAgLy8gc3Ryb2tlLXdpZHRoOiB2YXIoLS1zdHJva2Utd2lkdGgsIHJldmVydC1sYXllcik7XG4gICAgfVxuICB9XG59XG4iXX0= */`;var D=E(require("tinycolor2"),1);function M(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}function b(){return window.matchMedia("(pointer: coarse)").matches}var T=()=>{};function F(e,t=document){return t.querySelector(e)}function J(e,t=document){return Array.from(t.querySelectorAll(e))}function gt(e){return!(isNaN(e)||e===null)}function I(e,t){if(arguments.length===1)if(Array.isArray(e)){let n=Math.floor(I(e.length));return e[n]}else{if(typeof e=="object")return I(Object.values(e));if(gt(e))return Math.random()*e}else if(arguments.length===0)return Math.random();return Math.random()*(t-e)+e}function y(e,t=0,n=1){return Math.min(Math.max(e,t),n)}function f(e,t=1){return`${e/t*100}%`}function B(e=""){return e.charAt(0).toUpperCase()+e.slice(1)}function _(e){return typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.slice(0,4)}function P(...e){let{name:t,color:n="lightgray",as:i="log"}=this;if(!t)return console[i](...e);let o=(0,D.default)(n).getLuminance()>=.5?"black":"white";console[i](`%c${t}`,`color: ${o}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...e)}function x(e,t=""){let n="data-type",i=document.querySelector(`style[${n}="${e}]`);i||(i=document.createElement("style"),i.setAttribute(n,e),document.head.appendChild(i)),i.innerHTML=t}function R(e){return typeof e=="string"?e:JSON.stringify(e)}var C=null,v=new Set;function mt(){function e(o){v.forEach(r=>r(o))}function t(o){o.touches.length>0||e(!1)}function n(){e(!0)}function i(){b()||e(!0)}b()||e(!0),C||(window.addEventListener("touchstart",n),window.addEventListener("mousemove",i),window.addEventListener("touchend",t),C=()=>{window.removeEventListener("touchstart",n),window.removeEventListener("mousemove",i),window.removeEventListener("touchend",t),b()&&e(!1),C=null})}function O(e){return e&&v.add(e),mt(),function(){e&&(v.delete(e),b()&&e(!1)),v.size===0&&C&&C()}}var tt=require("referentiel");function dt(e,t){return e.markers.find(n=>n.payload.name===t)||null}function Q(e,t=null){let{totalFrames:n,currentFrame:i}=e,o=n-1;if(t===null)return[i>=o?0:i,o];if(typeof t=="number")return[t,o];if(typeof t!="string")return t;let r=!e.loop,a=[];return t.split(",").filter(Boolean).slice(0,2).forEach((s,g)=>{s=s.trim();let u=dt(e,s);u!==null&&a.push(pt(u,r?g:0))}),a}function pt(e,t=0){return e.time+(t>0?1:0)}function K(e,t,n=!0){let i;Array.isArray(t)?i=t.map(o=>Q(e,o)):i=Q(e,t),e.playSegments(i,n)}function It(e,t=0){let[n,i]=e;return n+(i-n)*t}function q(e,t,n=1,i=!0){if(Array.isArray(t)&&Array.isArray(t[0])){let r=Math.min(1,Math.max(0,n)),a=Math.round(r*(t.length-1));t=t[a]}else t===null&&(t=0);let o=Q(e,t);e.goToAndStop(It(o,n),i)}var et=E(require("lottie-api"),1),At=tt.Referentiel.convertPointFromPageToNode;var bt={0:"lightblue",1:"orange",2:"lightgray",3:"red"},ft={3:"error",2:"log"},h=class e{animation=null;container=null;api=null;name="";stopHover;player;debug=!1;animVariation=!1;volumeVariation;rateVariation;constructor(t={}){let{debug:n=!1,injectCSS:i=!0,volumeVariation:o=0,name:r="",rateVariation:a=0,filterSpread:s=.5,howlerOptions:g={},...u}=t;this.debug=n,this.volumeVariation=o,this.rateVariation=a,this.name=r,i&&x("lottie-controller",j),this.container=typeof t.container=="string"?(()=>{let l=F(t.container);if(!l)throw this.log("Element not found",3)(t.container),new Error("Element not found:"+t.container);return l})():t.container||document.body,this.player=$.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:e.buildFilterSize(s)},audioFactory(l){return new A({src:l,html5:!!M(),...g})},...u,container:this.container}),this.api=et.default.createAnimationApi(this.player),this.player.addEventListener("DOMLoaded",()=>{this.name=this.getName(),document.title=B(this.name),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let l=this.getElem();l&&(this.stopHover=O(c=>{this.setAttr("can-hover",c,!0)}),l.dataset.filename=this.name,l.classList.add("lottie-controller"),l.addEventListener("contextmenu",c=>(c.preventDefault(),c.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.setAttr("data-playing",!1),this.log("complete",0)()}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)()});let d=1/0;this.player.addEventListener("enterFrame",l=>{if(l.direction!==1)return;let c=this.isPlaying();if(this.setAttr("data-playing",c),!c)return;let{audios:p}=this.player.audioController||{audios:[]},V=this.player.firstFrame+this.player.currentFrame;p.forEach(({audio:m,data:L})=>{var N,S,H;let{st:W}=L;if(W<=V&&W>d){let k=this.rateVariation*.5;(N=m.manualRate)==null||N.call(m,I(1-k,1+k)),(S=m.manualVolume)==null||S.call(m,I(1-this.volumeVariation,1));let w={audios:p,audio:m,data:L,prevent:!1};this.player.triggerEvent("audio",w),w.prevent!==!0&&((H=m.manualPlay)==null||H.call(m))}}),d=V})}random=I;setAnimVariation=(t=!1)=>this.animVariation=t;onComplete=t=>this.player.addEventListener("complete",t);onLoad=t=>this.player.addEventListener("DOMLoaded",t);onLoopComplete=t=>this.player.addEventListener("loopComplete",t);onAudio=t=>this.player.addEventListener("audio",t);getElem=(t,n)=>(n||(n=this.player.renderer.svgElement),t?F(t,n||void 0):n);getElems=(t,n)=>(n||(n=this.player.renderer.svgElement),J(t,n||void 0));isPlaying=(...t)=>{if(t.length===0)return!this.player.isPaused;let n=t.map(e.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;handleAnimVariation=t=>!t||!Array.isArray(t)||this.animVariation===!1?t:t[y(Number(this.animVariation),0,t.length)];seek=(t,{position:n=0,isFrame:i=!0}={})=>{this.player.loop=!1,this.player.resetSegments(!0),this.setAnimation(t),t=this.handleAnimVariation(t);let o=q(this.player,t,n,i);return this.log("seek",1)({position:n}),o};getAnimation=()=>this.animation;getInfos=()=>({animation:this.animation,currentFrame:this.player.currentFrame});setAnimation=(t=null)=>{this.animation=e.getAnimationKey(t),this.setAttr("data-animation",this.animation)};getPoint=(t,n,{viewbox:i=!1,selector:o=null,normalize:r=!0,clamp:a=!1}={})=>{let s=this.getElem(o);if(!s)return null;let g,u,d,l,c,p;return"getBBox"in s&&i?({x:l,y:d,width:g,height:u}=s.getBBox(),c=l+g,p=d+u):{top:d,left:l,width:g,height:u,right:c,bottom:p}=s.getBoundingClientRect(),i?[t,n]=At(s,[t,n]):(t-=l,n-=d),a&&(t=y(t,0,g),n=y(n,0,u)),r&&(t/=g,n/=u),{top:d,left:l,width:g,height:u,right:c,bottom:p,x:t,y:n}};setAttr=(t,n="",i=!1)=>{let o=this.getElem();if(o){if(i&&(n=n?"":null),n===null){o.removeAttribute(t);return}o.setAttribute(t,R(n))}};log=(t,n)=>{if(!this.debug)return T;let i=ft[n||2],o=bt[n||2];return(...r)=>{P.call({name:t,color:o,as:i},...r,{...this.getInfos()})}};loop=t=>{this.player.loop=t};play=(t=0,{isFrame:n=!0,loop:i=!1,smooth:o=!1}={})=>{let r=!o;if(this.player.loop=i,typeof t=="number"){this.setAnimation(),this.player.goToAndPlay(t,n);return}return this.setAnimation(t),t=this.handleAnimVariation(t),this.log("play",1)(),K(this.player,t,r)};getName=()=>{let{fileName:t,path:n=""}=this.player;return this.name?this.name:!t||t==="data"?n.split("/").filter(Boolean).pop()||"untitled":t};destroy=()=>{var t;this.player.destroy(),(t=this.stopHover)==null||t.call(this)};static getAnimationKey(t=null){return t==null?null:R(t)}static buildFilterSize(t){let[n,i,o,r]=_(t);return{x:f(-r),y:f(-n),width:f(1+i+r),height:f(1+o+n)}}};var nt=`.framify {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZS9mcmFtaWZ5Iiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQTtFQUtFO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBLFNBWkk7RUFhSixLQWJJO0VBY0o7RUFDQTtFQUNBOztBQTlDRjtFQXNDQTtJQWNJO0lBQ0E7OztBQUlKO0VBQ0U7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBLGVBbENJO0VBbUNKOztBQWpFRjtFQXlEQTtJQVdJOzs7QUE5REo7RUF1RUk7SUFMQTtJQUNBOzs7QUFTRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxTQTFERTtFQTJERjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQSxrQkFqRVc7RUFrRVg7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUEvRko7RUFhRTtJQTJGSSxrQkE5RU87OztBQVJiO0VBc0ZNLGtCQTlFTzs7QUFpRlQ7RUFURTtFQUNBO0VBQ0E7O0FBOUZOO0VBc0VFO0lBc0JJO0lBQ0E7SUFDQTs7O0FBOUZOO0VBNkNBO0lBZUk7SUFDQTs7O0FBcURGO0VBdERFO0VBQ0E7O0FBeURGO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0EsS0EzR0U7RUE0R0YsTUE1R0U7RUE2R0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaXNtb3VzZSB7XG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBpc3RvdWNoIHtcbiAgQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaG92ZXIge1xuICBAaW5jbHVkZSBpc21vdXNlIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4uZnJhbWlmeSB7XG4gICRnYXA6IDFyZW07XG4gICRjb2xvci1zaGFkb3c6IHJnYmEoMTU4LCAxNjAsIDE2MiwgMC4yNSk7XG4gICRjb2xvci1saW5rOiBoc2woMjEyLCAxMDAlLCA3NiUpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgJl9fcm93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogJGdhcDtcbiAgICBnYXA6ICRnYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC8vIGFsaWduIGNlbGxzXG5cblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgJl9fY2VsbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTZyZW07XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBib3JkZXItcmFkaXVzOiAkZ2FwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIEBtaXhpbiBzaGFkb3cge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGNvbG9yLXNoYWRvdztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgaXNtb3VzZSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtbGluayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmc6ICRnYXA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgICAgd2lkdGg6IHVuc2V0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNoYWRvdztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eSwgYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgIEBtaXhpbiBsaW5rLXZpc2libGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saW5rO1xuICAgICAgfVxuXG4gICAgICA6aG92ZXIgPiAmIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBpc3RvdWNoIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIGlzdG91Y2gge1xuICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgIH1cblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgfVxuXG4gICAgLmZyYW1pZnk6aGFzKC5mdWxsc2NyZWVuKSAmOm5vdCguZnVsbHNjcmVlbikge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAkZ2FwO1xuICAgICAgbGVmdDogJGdhcDtcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICBtYXgtaGVpZ2h0OiB1bnNldDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogI3skZ2FwfSk7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gMiAqICN7JGdhcH0pO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICA+IGlmcmFtZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */`;function X(e,{parent:t=document.body}={}){x("framify",nt);let n=document.createElement("div");n.classList.add("framify");let i=[],o=[i];e.forEach(a=>{if(a===null){i=[],o.push(i);return}typeof a=="string"&&i.push(a)});let r=document.createDocumentFragment();o.forEach(a=>{let s=document.createElement("div");s.classList.add("framify__row"),Ct(s,a),r.appendChild(s)}),n.appendChild(r),t.appendChild(n)}function it(e){return e?!!e.closest("svg > *"):!1}function Z(e,t){var i;if(!e||window.matchMedia("(pointer:coarse)").matches)return;t=e.classList.toggle("fullscreen",t);let n=(i=e.querySelector("iframe"))==null?void 0:i.contentWindow;n==null||n.document.documentElement.style.setProperty("--cursor",t?"zoom-out":"zoom-in")}function Ct(e,t){t.forEach(n=>{let i=document.createElement("div");if(e.appendChild(i),!n)return;let o=n.replace(/\/index\.html?$/,"").split("/").pop();i.innerHTML=`
      <a href="${n}" class="framify__cell-link" title="${B(o)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${n}"></iframe>
    `,i.classList.add("framify__cell");let r=i.querySelector("iframe");r&&(r.onload=()=>ht(r,i))})}function ht(e,t){Z(t,!1);let n=!1;function i(r){if(!r.view)return;let{style:a}=r.view.document.body;a.cursor=it(r.target)?"":"var(--cursor)"}let o=e.contentWindow;o&&(o.onpointerover=function(r){i(r)},o.onpointermove=function(r){i(r)},o.onpointerdown=function(r){n=it(r.target)},o.onclick=function(){n||Z(t)},o.onblur=function(){n=!1},o.onkeydown=function(r){r.key==="Escape"&&Z(t,!1)})}function U(e){return new h(e)}globalThis.useLottie=U;globalThis.framify=X;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
