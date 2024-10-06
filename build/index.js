"use strict";var it=Object.create;var G=Object.defineProperty;var rt=Object.getOwnPropertyDescriptor;var lt=Object.getOwnPropertyNames;var at=Object.getPrototypeOf,st=Object.prototype.hasOwnProperty;var ct=(e,t)=>{for(var n in t)G(e,n,{get:t[n],enumerable:!0})},Y=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of lt(t))!st.call(e,i)&&i!==n&&G(e,i,{get:()=>t[i],enumerable:!(o=rt(t,i))||o.enumerable});return e};var X=(e,t,n)=>(n=e!=null?it(at(e)):{},Y(t||!e||!e.__esModule?G(n,"default",{value:e,enumerable:!0}):n,e)),gt=e=>Y(G({},"__esModule",{value:!0}),e);var Gt={};ct(Gt,{default:()=>U,framify:()=>x});module.exports=gt(Gt);var $=X(require("lottie-web"),1);var z=require("howler"),p=class extends z.Howl{constructor(t){super(t)}manualSeek(t){return super.seek(t)}manualPlay(){return super.play()}manualRate(t){return super.rate(t)}manualVolume(t){return super.volume(t)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var D=`/* prevent zoom */
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZSIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQWdCQTtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBRUE7O0FBRUE7RUFDRTs7QUFHRjtBQUFBO0VBRUU7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFOztBQUdGO0FBQUE7RUFFRTtFQUNBOztBQUdGO0VBQ0U7RUFDQTs7QUFqREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBc0RJOztBQXRESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUE2REkiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwcmV2ZW50IHpvb20gKi9cblxuQG1peGluIHN2Z0VsZW0ge1xuICBbc3Ryb2tlXSxcbiAgcGF0aCxcbiAgY2lyY2xlLFxuICBlbGxpcHNlLFxuICByZWN0LFxuICBwb2x5Z29uLFxuICBsaW5lLFxuICB0ZXh0LFxuICBwb2x5bGluZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuc3ZnLmxvdHRpZS1jb250cm9sbGVyIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gID4gKiB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICA+IGdbY2xpcC1wYXRoXSxcbiAgLm92ZXJmbG93IHtcbiAgICBjbGlwLXBhdGg6IHVuc2V0O1xuICB9XG5cbiAgKiB7XG4gICAgdG91Y2gtYWN0aW9uOiBub25lOyAvLyBub25lP1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIC5ub2NsaWNrIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5jbGljayxcbiAgLmhpdGJveCB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmhpdGJveCAqIHtcbiAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm5vc2NhbGUge1xuICAgIEBpbmNsdWRlIHN2Z0VsZW0ge1xuICAgICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlO1xuICAgICAgLy8gc3Ryb2tlLXdpZHRoOiB2YXIoLS1zdHJva2Utd2lkdGgsIHJldmVydC1sYXllcik7XG4gICAgfVxuICB9XG5cbiAgLnNjYWxlIHtcbiAgICBAaW5jbHVkZSBzdmdFbGVtIHtcbiAgICAgIHZlY3Rvci1lZmZlY3Q6IHVuc2V0O1xuICAgICAgLy8gc3Ryb2tlLXdpZHRoOiB2YXIoLS1zdHJva2Utd2lkdGgsIHJldmVydC1sYXllcik7XG4gICAgfVxuICB9XG59XG4iXX0= */`;var j=X(require("tinycolor2"),1);function T(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}function A(){return window.matchMedia("(pointer: coarse)").matches}var M=()=>{};function E(e,t=document){return t.querySelector(e)}function J(e,t=document){return Array.from(t.querySelectorAll(e))}function F(e,t){return Math.random()*(t-e)+e}function V(e,t=0,n=1){return Math.min(Math.max(e,t),n)}function b(e,t=1){return`${e/t*100}%`}function h(e=""){return e.charAt(0).toUpperCase()+e.slice(1)}function _(e){return typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.slice(0,4)}function P(...e){let{name:t,color:n="lightgray",as:o="log"}=this;if(!t)return console[o](...e);let i=(0,j.default)(n).getLuminance()>=.5?"black":"white";console[o](`%c${t}`,`color: ${i}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...e)}function y(e,t=""){let n="data-type",o=document.querySelector(`style[${n}="${e}]`);o||(o=document.createElement("style"),o.setAttribute(n,e),document.head.appendChild(o)),o.innerHTML=t}function R(e){return typeof e=="string"?e:JSON.stringify(e)}var f=null,B=new Set;function ut(){function e(i){B.forEach(r=>r(i))}function t(i){i.touches.length>0||e(!1)}function n(){e(!0)}function o(){A()||e(!0)}A()||e(!0),f||(window.addEventListener("touchstart",n),window.addEventListener("mousemove",o),window.addEventListener("touchend",t),f=()=>{window.removeEventListener("touchstart",n),window.removeEventListener("mousemove",o),window.removeEventListener("touchend",t),A()&&e(!1),f=null})}function Q(e){return e&&B.add(e),ut(),function(){e&&(B.delete(e),A()&&e(!1)),B.size===0&&f&&f()}}var tt=require("referentiel");function mt(e,t){return e.markers.find(n=>n.payload.name===t)||null}function Z(e,t=null){let{totalFrames:n,currentFrame:o}=e,i=n-1;if(t===null)return[o>=i?0:o,i];if(typeof t=="number")return[t,i];if(typeof t!="string")return t;let r=!e.loop,a=[];return t.split(",").filter(Boolean).slice(0,2).forEach((s,u)=>{s=s.trim();let g=mt(e,s);g!==null&&a.push(dt(g,r?u:0))}),a}function dt(e,t=0){return e.time+(t>0?1:0)}function K(e,t,n=!0){let o;Array.isArray(t)?o=t.map(i=>Z(e,i)):o=Z(e,t),e.playSegments(o,n)}function It(e,t=0){let[n,o]=e;return n+(o-n)*t}function q(e,t,n=1,o=!0){if(Array.isArray(t)&&Array.isArray(t[0])){let r=Math.min(1,Math.max(0,n)),a=Math.round(r*(t.length-1));t=t[a]}else t===null&&(t=0);let i=Z(e,t);e.goToAndStop(It(i,n),o)}var et=X(require("lottie-api"),1),pt=tt.Referentiel.convertPointFromPageToNode;var At={0:"lightblue",1:"orange",2:"lightgray",3:"red"},bt={3:"error",2:"log"},C=class e{animation=null;container=null;api=null;name="";stopHover;player;debug=!1;volumeVariation;rateVariation;constructor(t={}){let{debug:n=!1,injectCSS:o=!0,volumeVariation:i=0,name:r="",rateVariation:a=0,filterSpread:s=.5,howlerOptions:u={},...g}=t;this.debug=n,this.volumeVariation=i,this.rateVariation=a,this.name=r,o&&y("lottie-controller",D),this.container=typeof t.container=="string"?(()=>{let l=E(t.container);if(!l)throw this.log("Element not found",3)(t.container),new Error("Element not found:"+t.container);return l})():t.container||document.body,this.player=$.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:e.buildFilterSize(s)},audioFactory(l){return new p({src:l,html5:!!T(),...u})},...g,container:this.container}),this.api=et.default.createAnimationApi(this.player),this.player.addEventListener("DOMLoaded",()=>{this.name=this.getName(),document.title=h(this.name),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let l=this.getElem();l&&(this.stopHover=Q(c=>{this.setAttr("can-hover",c,!0)}),l.dataset.filename=this.name,l.classList.add("lottie-controller"),l.addEventListener("contextmenu",c=>(c.preventDefault(),c.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.setAttr("data-playing",!1),this.log("complete",0)()}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)()});let d=1/0;this.player.addEventListener("enterFrame",l=>{if(l.direction!==1)return;let c=this.isPlaying();if(this.setAttr("data-playing",c),!c)return;let{audios:I}=this.player.audioController||{audios:[]},v=this.player.firstFrame+this.player.currentFrame;I.forEach(({audio:m,data:L})=>{var N,S,H;let{st:W}=L;if(W<=v&&W>d){let k=this.rateVariation*.5;(N=m.manualRate)==null||N.call(m,F(1-k,1+k)),(S=m.manualVolume)==null||S.call(m,F(1-this.volumeVariation,1));let w={audios:I,audio:m,data:L,prevent:!1};this.player.triggerEvent("audio",w),w.prevent!==!0&&((H=m.manualPlay)==null||H.call(m))}}),d=v})}onComplete=t=>this.player.addEventListener("complete",t);onLoad=t=>this.player.addEventListener("DOMLoaded",t);onLoopComplete=t=>this.player.addEventListener("loopComplete",t);onAudio=t=>this.player.addEventListener("audio",t);getElem=(t,n)=>(n||(n=this.player.renderer.svgElement),t?E(t,n||void 0):n);getElems=(t,n)=>(n||(n=this.player.renderer.svgElement),J(t,n||void 0));isPlaying=(...t)=>{if(t.length===0)return!this.player.isPaused;let n=t.map(e.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;seek=(t,{position:n=0,isFrame:o=!0}={})=>{this.player.loop=!1,this.player.resetSegments(!0),this.setAnimation(t);let i=q(this.player,t,n,o);return this.log("seek",1)({position:n}),i};getAnimation=()=>this.animation;getInfos=()=>({animation:this.animation,currentFrame:this.player.currentFrame});setAnimation=(t=null)=>{this.animation=e.getAnimationKey(t),this.setAttr("data-animation",this.animation)};getPoint=(t,n,{viewbox:o=!1,selector:i=null,normalize:r=!0,clamp:a=!1}={})=>{let s=this.getElem(i);if(!s)return null;let u,g,d,l,c,I;return"getBBox"in s&&o?({x:l,y:d,width:u,height:g}=s.getBBox(),c=l+u,I=d+g):{top:d,left:l,width:u,height:g,right:c,bottom:I}=s.getBoundingClientRect(),o?[t,n]=pt(s,[t,n]):(t-=l,n-=d),a&&(t=V(t,0,u),n=V(n,0,g)),r&&(t/=u,n/=g),{top:d,left:l,width:u,height:g,right:c,bottom:I,x:t,y:n}};setAttr=(t,n="",o=!1)=>{let i=this.getElem();if(i){if(o&&(n=n?"":null),n===null){i.removeAttribute(t);return}i.setAttribute(t,R(n))}};log=(t,n)=>{if(!this.debug)return M;let o=bt[n||2],i=At[n||2];return(...r)=>{P.call({name:t,color:i,as:o},...r,{...this.getInfos()})}};play=(t,{isFrame:n=!0,loop:o=!1,smooth:i=!1}={})=>{let r=!i;if(this.player.loop=o,typeof t=="number"){this.setAnimation(),this.player.goToAndPlay(t,n);return}return this.setAnimation(t),this.log("play",1)(),K(this.player,t,r)};getName=()=>{let{fileName:t,path:n=""}=this.player;return this.name?this.name:!t||t==="data"?n.split("/").filter(Boolean).pop()||"untitled":t};destroy=()=>{var t;this.player.destroy(),(t=this.stopHover)==null||t.call(this)};static getAnimationKey(t=null){return t==null?null:R(t)}static buildFilterSize(t){let[n,o,i,r]=_(t);return{x:b(-r),y:b(-n),width:b(1+o+r),height:b(1+i+n)}}};var nt=`.framify {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZS9mcmFtaWZ5Iiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQTtFQUtFO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBLFNBWkk7RUFhSixLQWJJO0VBY0o7RUFDQTtFQUNBOztBQTlDRjtFQXNDQTtJQWNJO0lBQ0E7OztBQUlKO0VBQ0U7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBLGVBbENJO0VBbUNKOztBQWpFRjtFQXlEQTtJQVdJOzs7QUE5REo7RUF1RUk7SUFMQTtJQUNBOzs7QUFTRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxTQTFERTtFQTJERjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQSxrQkFqRVc7RUFrRVg7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUEvRko7RUFhRTtJQTJGSSxrQkE5RU87OztBQVJiO0VBc0ZNLGtCQTlFTzs7QUFpRlQ7RUFURTtFQUNBO0VBQ0E7O0FBOUZOO0VBc0VFO0lBc0JJO0lBQ0E7SUFDQTs7O0FBOUZOO0VBNkNBO0lBZUk7SUFDQTs7O0FBcURGO0VBdERFO0VBQ0E7O0FBeURGO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0EsS0EzR0U7RUE0R0YsTUE1R0U7RUE2R0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaXNtb3VzZSB7XG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBpc3RvdWNoIHtcbiAgQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaG92ZXIge1xuICBAaW5jbHVkZSBpc21vdXNlIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4uZnJhbWlmeSB7XG4gICRnYXA6IDFyZW07XG4gICRjb2xvci1zaGFkb3c6IHJnYmEoMTU4LCAxNjAsIDE2MiwgMC4yNSk7XG4gICRjb2xvci1saW5rOiBoc2woMjEyLCAxMDAlLCA3NiUpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgJl9fcm93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogJGdhcDtcbiAgICBnYXA6ICRnYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC8vIGFsaWduIGNlbGxzXG5cblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgJl9fY2VsbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTZyZW07XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBib3JkZXItcmFkaXVzOiAkZ2FwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIEBtaXhpbiBzaGFkb3cge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGNvbG9yLXNoYWRvdztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgaXNtb3VzZSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtbGluayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmc6ICRnYXA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgICAgd2lkdGg6IHVuc2V0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNoYWRvdztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eSwgYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgIEBtaXhpbiBsaW5rLXZpc2libGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saW5rO1xuICAgICAgfVxuXG4gICAgICA6aG92ZXIgPiAmIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBpc3RvdWNoIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIGlzdG91Y2gge1xuICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgIH1cblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgfVxuXG4gICAgLmZyYW1pZnk6aGFzKC5mdWxsc2NyZWVuKSAmOm5vdCguZnVsbHNjcmVlbikge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAkZ2FwO1xuICAgICAgbGVmdDogJGdhcDtcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICBtYXgtaGVpZ2h0OiB1bnNldDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogI3skZ2FwfSk7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gMiAqICN7JGdhcH0pO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICA+IGlmcmFtZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */`;function x(e,{parent:t=document.body}={}){y("framify",nt);let n=document.createElement("div");n.classList.add("framify");let o=[],i=[o];e.forEach(a=>{if(a===null){o=[],i.push(o);return}typeof a=="string"&&o.push(a)});let r=document.createDocumentFragment();i.forEach(a=>{let s=document.createElement("div");s.classList.add("framify__row"),ft(s,a),r.appendChild(s)}),n.appendChild(r),t.appendChild(n)}function ot(e){return e?!!e.closest("svg > *"):!1}function O(e,t){var o;if(!e||window.matchMedia("(pointer:coarse)").matches)return;t=e.classList.toggle("fullscreen",t);let n=(o=e.querySelector("iframe"))==null?void 0:o.contentWindow;n==null||n.document.documentElement.style.setProperty("--cursor",t?"zoom-out":"zoom-in")}function ft(e,t){t.forEach(n=>{let o=document.createElement("div");if(e.appendChild(o),!n)return;let i=n.replace(/\/index\.html?$/,"").split("/").pop();o.innerHTML=`
      <a href="${n}" class="framify__cell-link" title="${h(i)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${n}"></iframe>
    `,o.classList.add("framify__cell");let r=o.querySelector("iframe");r&&(r.onload=()=>Ct(r,o))})}function Ct(e,t){O(t,!1);let n=!1;function o(r){if(!r.view)return;let{style:a}=r.view.document.body;a.cursor=ot(r.target)?"":"var(--cursor)"}let i=e.contentWindow;i&&(i.onpointerover=function(r){o(r)},i.onpointermove=function(r){o(r)},i.onpointerdown=function(r){n=ot(r.target)},i.onclick=function(){n||O(t)},i.onblur=function(){n=!1},i.onkeydown=function(r){r.key==="Escape"&&O(t,!1)})}function U(e){return new C(e)}globalThis.useLottie=U;globalThis.framify=x;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
