"use strict";var tt=Object.create;var y=Object.defineProperty;var et=Object.getOwnPropertyDescriptor;var nt=Object.getOwnPropertyNames;var it=Object.getPrototypeOf,ot=Object.prototype.hasOwnProperty;var rt=(e,t)=>{for(var n in t)y(e,n,{get:t[n],enumerable:!0})},N=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of nt(t))!ot.call(e,o)&&o!==n&&y(e,o,{get:()=>t[o],enumerable:!(i=et(t,o))||i.enumerable});return e};var v=(e,t,n)=>(n=e!=null?tt(it(e)):{},N(t||!e||!e.__esModule?y(n,"default",{value:e,enumerable:!0}):n,e)),lt=e=>N(y({},"__esModule",{value:!0}),e);var dt={};rt(dt,{default:()=>O,framify:()=>x});module.exports=lt(dt);var K=v(require("lottie-web"),1);var H=require("howler"),p=class extends H.Howl{constructor(t){super(t)}manualSeek(t){return super.seek(t)}manualPlay(){return super.play()}manualRate(t){return super.rate(t)}manualVolume(t){return super.volume(t)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var Y=`/* prevent zoom */
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
svg.lottie-controller .noscale [stroke] {
  vector-effect: non-scaling-stroke;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUVBOztBQUVBO0VBQ0U7O0FBR0Y7QUFBQTtFQUVFOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFHRjtBQUFBO0VBRUU7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7O0FBSUE7RUFDRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHByZXZlbnQgem9vbSAqL1xuXG5zdmcubG90dGllLWNvbnRyb2xsZXIge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgPiAqIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuXG4gID4gZ1tjbGlwLXBhdGhdLFxuICAub3ZlcmZsb3cge1xuICAgIGNsaXAtcGF0aDogdW5zZXQ7XG4gIH1cblxuICAqIHtcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7IC8vIG5vbmU/XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLm5vY2xpY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmNsaWNrLFxuICAuaGl0Ym94IHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuaGl0Ym94ICoge1xuICAgIHN0cm9rZTogdHJhbnNwYXJlbnQ7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubm9zY2FsZSB7XG4gICAgW3N0cm9rZV0ge1xuICAgICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlO1xuICAgICAgLy8gc3Ryb2tlLXdpZHRoOiB2YXIoLS1zdHJva2Utd2lkdGgsIHJldmVydC1sYXllcik7XG4gICAgfVxuICB9XG59Il19 */`;var M=v(require("tinycolor2"),1);function z(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}function b(){return window.matchMedia("(pointer: coarse)").matches}var j=()=>{};function E(e,t=document){return t.querySelector(e)}function D(e,t=document){return Array.from(t.querySelectorAll(e))}function X(e,t){return Math.random()*(t-e)+e}function A(e,t=1){return`${e/t*100}%`}function h(e=""){return e.charAt(0).toUpperCase()+e.slice(1)}function T(e){return typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.slice(0,4)}function J(...e){let{name:t,color:n="lightgray",as:i="log"}=this;if(!t)return console[i](...e);let o=(0,M.default)(n).getLuminance()>=.5?"black":"white";console[i](`%c${t}`,`color: ${o}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...e)}function G(e,t=""){let n="data-type",i=document.querySelector(`style[${n}="${e}]`);i||(i=document.createElement("style"),i.setAttribute(n,e),document.head.appendChild(i)),i.innerHTML=t}function V(e){return typeof e=="string"?e:JSON.stringify(e)}var I=null,B=new Set;function at(){function e(o){B.forEach(r=>r(o))}function t(o){o.touches.length>0||e(!1)}function n(){e(!0)}function i(){b()||e(!0)}b()||e(!0),I||(window.addEventListener("touchstart",n),window.addEventListener("mousemove",i),window.addEventListener("touchend",t),I=()=>{window.removeEventListener("touchstart",n),window.removeEventListener("mousemove",i),window.removeEventListener("touchend",t),b()&&e(!1),I=null})}function Z(e){return e&&B.add(e),at(),function(){e&&(B.delete(e),b()&&e(!1)),B.size===0&&I&&I()}}function st(e,t){return e.markers.find(n=>n.payload.name===t)||null}function F(e,t=null){let{totalFrames:n,currentFrame:i}=e,o=n-1;if(t===null)return[i>=o?0:i,o];if(typeof t=="number")return[t,o];if(typeof t!="string")return t;let r=!e.loop,s=[];return t.split(",").filter(Boolean).slice(0,2).forEach((c,u)=>{c=c.trim();let m=st(e,c);m!==null&&s.push(ct(m,r?u:0))}),s}function ct(e,t=0){return e.time+(t>0?1:0)}function _(e,t,n=!0){let i;Array.isArray(t)?i=t.map(o=>F(e,o)):i=F(e,t),e.playSegments(i,n)}function ut(e,t=0){let[n,i]=e;return n+(i-n)*t}function P(e,t,n=1,i=!0){if(Array.isArray(t)&&Array.isArray(t[0])){let r=Math.min(1,Math.max(0,n)),s=Math.round(r*(t.length-1));t=t[s]}else t===null&&(t=0);let o=F(e,t);e.goToAndStop(ut(o,n),i)}var q=v(require("lottie-api"),1);var gt={0:"lightblue",1:"orange",2:"lightgray",3:"red"},mt={3:"error",2:"log"},f=class e{animation=null;container=null;api=null;name="";stopHover;player;debug=!1;volumeVariation;rateVariation;constructor(t={}){let{debug:n=!1,injectCSS:i=!0,volumeVariation:o=0,name:r="",rateVariation:s=0,filterSpread:c=.5,howlerOptions:u={},...m}=t;this.debug=n,this.volumeVariation=o,this.rateVariation=s,this.name=r,i&&G("lottie-controller",Y),this.container=typeof t.container=="string"?(()=>{let a=E(t.container);if(!a)throw this.log("Element not found",3)(t.container),new Error("Element not found:"+t.container);return a})():t.container||document.body,this.player=K.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:e.buildFilterSize(c)},audioFactory(a){return new p({src:a,html5:!!z(),...u})},...m,container:this.container}),this.api=q.default.createAnimationApi(this.player),this.player.addEventListener("DOMLoaded",()=>{this.name=this.getName(),document.title=h(this.name),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let a=this.getElem();a&&(this.stopHover=Z(l=>{this.setAttr("can-hover",l,!0)}),a.dataset.filename=this.name,a.classList.add("lottie-controller"),a.addEventListener("contextmenu",l=>(l.preventDefault(),l.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.setAttr("data-playing",!1),this.log("complete",0)()}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)()});let d=1/0;this.player.addEventListener("enterFrame",a=>{if(a.direction!==1)return;let l=this.isPlaying();if(this.setAttr("data-playing",l),!l)return;let{audios:C}=this.player.audioController||{audios:[]},L=this.player.firstFrame+this.player.currentFrame;C.forEach(({audio:g,data:Q})=>{var R,U,k;let{st:S}=Q;if(S<=L&&S>d){let w=this.rateVariation*.5;(R=g.manualRate)==null||R.call(g,X(1-w,1+w)),(U=g.manualVolume)==null||U.call(g,X(1-this.volumeVariation,1));let W={audios:C,audio:g,data:Q,prevent:!1};this.player.triggerEvent("audio",W),W.prevent!==!0&&((k=g.manualPlay)==null||k.call(g))}}),d=L})}onComplete=t=>this.player.addEventListener("complete",t);onLoad=t=>this.player.addEventListener("DOMLoaded",t);onLoopComplete=t=>this.player.addEventListener("loopComplete",t);onAudio=t=>this.player.addEventListener("audio",t);getElem=(t,n)=>(n||(n=this.player.renderer.svgElement),t?E(t,n||void 0):n);getElems=(t,n)=>(n||(n=this.player.renderer.svgElement),D(t,n||void 0));isPlaying=(...t)=>{if(t.length===0)return!this.player.isPaused;let n=t.map(e.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;seek=(t,{position:n=0,isFrame:i=!0}={})=>{this.player.loop=!1,this.player.resetSegments(!0),this.setAnimation(t);let o=P(this.player,t,n,i);return this.log("seek",1)({position:n}),o};getAnimation=()=>this.animation;getInfos=()=>({animation:this.animation,currentFrame:this.player.currentFrame});setAnimation=(t=null)=>{this.animation=e.getAnimationKey(t),this.setAttr("data-animation",this.animation)};setAttr=(t,n="",i=!1)=>{let o=this.getElem();if(o){if(i&&(n=n?"":null),n===null){o.removeAttribute(t);return}o.setAttribute(t,V(n))}};log=(t,n)=>{if(!this.debug)return j;let i=mt[n||2],o=gt[n||2];return(...r)=>{J.call({name:t,color:o,as:i},...r,{...this.getInfos()})}};play=(t,{isFrame:n=!0,loop:i=!1,smooth:o=!1}={})=>{let r=!o;if(this.player.loop=i,typeof t=="number"){this.setAnimation(),this.player.goToAndPlay(t,n);return}return this.setAnimation(t),this.log("play",1)(),_(this.player,t,r)};getName=()=>{let{fileName:t,path:n=""}=this.player;return this.name?this.name:!t||t==="data"?n.split("/").filter(Boolean).pop()||"untitled":t};destroy=()=>{var t;this.player.destroy(),(t=this.stopHover)==null||t.call(this)};static getAnimationKey(t=null){return t==null?null:V(t)}static buildFilterSize(t){let[n,i,o,r]=T(t);return{x:A(-r),y:A(-n),width:A(1+i+r),height:A(1+o+n)}}};var $=`.framify {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  padding: 1rem;
  gap: 1rem;
  box-sizing: border-box;
}
@media (max-width: 768px) {
  .framify {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
.framify__cell {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  overflow: hidden;
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
:has(.fullscreen) > .framify__cell:not(.fullscreen) {
  visibility: hidden;
  opacity: 0;
}
.framify__cell.fullscreen {
  position: fixed;
  top: 1rem;
  left: 1rem;
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllL2ZyYW1pZnkiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJBO0VBS0U7RUFDQTtFQUNBO0VBQ0EsU0FQTTtFQVFOLEtBUk07RUFTTjs7QUF2Q0E7RUE2QkY7SUFhSTtJQUNBO0lBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0EsZUFyQkk7RUFzQko7O0FBOUNGO0VBc0RJO0lBTEE7SUFDQTs7O0FBU0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsU0F6Q0U7RUEwQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0Esa0JBaERXO0VBaURYO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBOUVKO0VBYUU7SUEwRUksa0JBN0RPOzs7QUFSYjtFQXFFTSxrQkE3RE87O0FBZ0VUO0VBVEU7RUFDQTtFQUNBOztBQTdFTjtFQXFERTtJQXNCSTtJQUNBO0lBQ0E7OztBQTdFTjtFQW1DQTtJQVFJO0lBQ0E7OztBQXFERjtFQXRERTtFQUNBOztBQXlERjtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBLEtBMUZFO0VBMkZGLE1BM0ZFO0VBNEZGO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaXNtb3VzZSB7XG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBpc3RvdWNoIHtcbiAgQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaG92ZXIge1xuICBAaW5jbHVkZSBpc21vdXNlIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4uZnJhbWlmeSB7XG4gICRnYXA6IDFyZW07XG4gICRjb2xvci1zaGFkb3c6IHJnYmEoMTU4LCAxNjAsIDE2MiwgMC4yNSk7XG4gICRjb2xvci1saW5rOiBoc2woMjEyLCAxMDAlLCA3NiUpO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNnJlbSwgMWZyKSk7XG4gIHBhZGRpbmc6ICRnYXA7XG4gIGdhcDogJGdhcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBAaW5jbHVkZSBtb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2NlbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRnYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBtaXhpbiBzaGFkb3cge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGNvbG9yLXNoYWRvdztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgaXNtb3VzZSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtbGluayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmc6ICRnYXA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgICAgd2lkdGg6IHVuc2V0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNoYWRvdztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eSwgYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgIEBtaXhpbiBsaW5rLXZpc2libGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saW5rO1xuICAgICAgfVxuXG4gICAgICA6aG92ZXIgPiAmIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBpc3RvdWNoIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIGlzdG91Y2gge1xuICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgIH1cblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgfVxuXG4gICAgOmhhcyguZnVsbHNjcmVlbikgPiAmOm5vdCguZnVsbHNjcmVlbikge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAkZ2FwO1xuICAgICAgbGVmdDogJGdhcDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogI3skZ2FwfSk7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gMiAqICN7JGdhcH0pO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICA+IGlmcmFtZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */`;function x(e,{parent:t=document.body}={}){let n=document.createElement("div");n.classList.add("framify"),G("framify",$),e.forEach(r=>{let s=document.createElement("div"),c=r.replace(/\/index\.html?$/,"").split("/").pop();s.innerHTML=`
      <a href="${r}" class="framify__cell-link" title="${h(c)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${r}"></iframe>
    `,s.classList.add("framify__cell");let u=s.querySelector("iframe");u&&(u.onload=function(){o(s,!1);let m=!1;function d(l){if(!l.view)return;let{style:C}=l.view.document.body;C.cursor=i(l.target)?"":"var(--cursor)"}let a=u.contentWindow;a&&(a.onpointerover=function(l){d(l)},a.onpointermove=function(l){d(l)},a.onpointerdown=function(l){m=i(l.target)},a.onclick=function(){m||o(s)},a.onblur=function(){m=!1},a.onkeydown=function(l){l.key==="Escape"&&o(s,!1)})},n.appendChild(s))});function i(r){return r?!!r.closest("svg > *"):!1}function o(r,s){var u;if(!r||window.matchMedia("(pointer:coarse)").matches)return;s=r.classList.toggle("fullscreen",s);let c=(u=r.querySelector("iframe"))==null?void 0:u.contentWindow;c==null||c.document.documentElement.style.setProperty("--cursor",s?"zoom-out":"zoom-in")}t.appendChild(n)}function O(e){return new f(e)}globalThis.useLottie=O;globalThis.framify=x;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
