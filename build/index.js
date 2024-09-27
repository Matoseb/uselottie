"use strict";var T=Object.create;var b=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,K=Object.prototype.hasOwnProperty;var P=(e,t)=>{for(var n in t)b(e,n,{get:t[n],enumerable:!0})},X=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of j(t))!K.call(e,o)&&o!==n&&b(e,o,{get:()=>t[o],enumerable:!(i=D(t,o))||i.enumerable});return e};var R=(e,t,n)=>(n=e!=null?T(_(e)):{},X(t||!e||!e.__esModule?b(n,"default",{value:e,enumerable:!0}):n,e)),$=e=>X(b({},"__esModule",{value:!0}),e);var ot={};P(ot,{default:()=>B,framify:()=>G});module.exports=$(ot);var w=R(require("lottie-web"),1);var Z=require("howler"),p=class extends Z.Howl{constructor(t){super(t)}manualSeek(t){return super.seek(t)}manualPlay(){return super.play()}manualRate(t){return super.rate(t)}manualVolume(t){return super.volume(t)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var L=`/* prevent zoom */
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZSIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFFQTs7QUFFQTtFQUNFOztBQUdGO0FBQUE7RUFFRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7O0FBR0Y7QUFBQTtFQUVFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOztBQUlBO0VBQ0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwcmV2ZW50IHpvb20gKi9cblxuc3ZnLmxvdHRpZS1jb250cm9sbGVyIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gID4gKiB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICA+IGdbY2xpcC1wYXRoXSxcbiAgLm92ZXJmbG93IHtcbiAgICBjbGlwLXBhdGg6IHVuc2V0O1xuICB9XG5cbiAgKiB7XG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIC5ub2NsaWNrIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5jbGljayxcbiAgLmhpdGJveCB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmhpdGJveCAqIHtcbiAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm5vc2NhbGUge1xuICAgIFtzdHJva2VdIHtcbiAgICAgIHZlY3Rvci1lZmZlY3Q6IG5vbi1zY2FsaW5nLXN0cm9rZTtcbiAgICAgIC8vIHN0cm9rZS13aWR0aDogdmFyKC0tc3Ryb2tlLXdpZHRoLCByZXZlcnQtbGF5ZXIpO1xuICAgIH1cbiAgfVxufSJdfQ== */`;var U=R(require("tinycolor2"),1);function N(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}var z=()=>{};function y(e,t=document){return t.querySelector(e)}function k(e,t=document){return Array.from(t.querySelectorAll(e))}function h(e,t){return Math.random()*(t-e)+e}function I(e,t=1){return`${e/t*100}%`}function f(e=""){return e.charAt(0).toUpperCase()+e.slice(1)}function S(e){return typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.slice(0,4)}function Y(...e){let{name:t,color:n="lightgray",as:i="log"}=this;if(!t)return console[i](...e);let o=(0,U.default)(n).getLuminance()>=.5?"black":"white";console[i](`%c${t}`,`color: ${o}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...e)}function C(e,t=""){let n="data-type",i=document.querySelector(`style[${n}="${e}]`);i||(i=document.createElement("style"),i.setAttribute(n,e),document.head.appendChild(i)),i.innerHTML=t}function q(e,t){return e.markers.find(n=>n.payload.name===t)||null}function x(e,t=null){let{totalFrames:n,currentFrame:i}=e,o=n-1;if(t===null)return[i>=o?0:i,o];if(typeof t=="number")return[t,o];if(typeof t!="string")return t;let r=!e.loop,l=[];return t.split(",").filter(Boolean).slice(0,2).forEach((s,u)=>{s=s.trim();let d=q(e,s);d!==null&&l.push(tt(d,r?u:0))}),l}function tt(e,t=0){return e.time+(t>0?1:0)}function H(e,t,n=!0){let i;Array.isArray(t)?i=t.map(o=>x(e,o)):i=x(e,t),e.playSegments(i,n)}function et(e,t=0){let[n,i]=e;return n+(i-n)*t}function J(e,t,n=1,i=!0){if(Array.isArray(t)&&Array.isArray(t[0])){let r=Math.min(1,Math.max(0,n)),l=Math.round(r*(t.length-1));t=t[l]}else t===null&&(t=0);let o=x(e,t);e.goToAndStop(et(o,n),i)}var nt={0:"lightblue",1:"orange",2:"lightgray",3:"red"},it={3:"error",2:"log"},A=class e{animation=null;container=null;player;debug=!1;volumeVariation;rateVariation;constructor(t={}){let{debug:n=!1,injectCSS:i=!0,volumeVariation:o=0,rateVariation:r=0,filterSpread:l=.5,howlerOptions:s={},...u}=t;this.debug=n,this.volumeVariation=o,this.rateVariation=r,i&&C("lottie-controller",L),this.container=typeof t.container=="string"?(()=>{let g=y(t.container);if(!g)throw this.log("Element not found",3)(t.container),new Error("Element not found:"+t.container);return g})():t.container||document.body,this.player=w.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:e.buildFilterSize(l)},audioFactory(g){return new p({src:g,html5:!!N(),...s})},...u,container:this.container}),this.player.addEventListener("DOMLoaded",()=>{let g=e.getName(this.player);document.title=f(g),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let c=this.getElem();c&&(c.dataset.filename=g,c.classList.add("lottie-controller"),c.addEventListener("contextmenu",a=>(a.preventDefault(),a.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.log("complete",0)()}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)()});let d=1/0;this.player.addEventListener("enterFrame",g=>{if(g.direction!==1||this.player.isPaused)return;let{audios:c}=this.player.audioController||{audios:[]},a=this.player.firstFrame+this.player.currentFrame;c.forEach(({audio:m,data:v})=>{var E,O,Q;let{st:F}=v;if(F<=a&&F>d){let W=this.rateVariation*.5;(E=m.manualRate)==null||E.call(m,h(1-W,1+W)),(O=m.manualVolume)==null||O.call(m,h(1-this.volumeVariation,1));let V={audios:c,audio:m,data:v,prevent:!1};this.player.triggerEvent("audio",V),V.prevent!==!0&&((Q=m.manualPlay)==null||Q.call(m))}}),d=a})}onComplete=t=>this.player.addEventListener("complete",t);onLoad=t=>this.player.addEventListener("DOMLoaded",t);onAudio=t=>this.player.addEventListener("audio",t);getElem=(t,n)=>(n||(n=this.player.renderer.svgElement),t?y(t,n||void 0):n);getElems=(t,n)=>(n||(n=this.player.renderer.svgElement),k(t,n||void 0));isPlaying=(...t)=>{let n=t.map(e.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;seek=(t,{position:n=0,isFrame:i=!0}={})=>{this.player.loop=!1,this.setAnimation(t);let o=J(this.player,t,n,i);return this.log("seek",1)({position:n}),o};getAnimation=()=>this.animation;getInfos=()=>({animation:this.animation,currentFrame:this.player.currentFrame});setAnimation=(t=null)=>{this.animation=e.getAnimationKey(t);let n=this.getElem();if(n){if(this.animation===null){n.removeAttribute("data-animation");return}n.setAttribute("data-animation",this.animation)}};log=(t,n)=>{if(!this.debug)return z;let i=it[n||2],o=nt[n||2];return(...r)=>{Y.call({name:t,color:o,as:i},...r,{...this.getInfos()})}};play=(t,{isFrame:n=!0,loop:i=!1,smooth:o=!1}={})=>{let r=!o;if(this.player.loop=i,typeof t=="number"){this.setAnimation(),this.player.goToAndPlay(t,n);return}return this.setAnimation(t),this.log("play",1)(),H(this.player,t,r)};destroy=()=>{this.player.destroy()};static getName(t){let{fileName:n,path:i=""}=t;return!n||n==="data"?i.split("/").filter(Boolean).pop()||"untitled":n}static getAnimationKey(t=null){return t==null?null:typeof t=="string"?t:JSON.stringify(t)}static buildFilterSize(t){let[n,i,o,r]=S(t);return{x:I(-r),y:I(-n),width:I(1+i+r),height:I(1+o+n)}}};var M=`.framify {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdG9zZWIvRG9jdW1lbnRzL0dpdEh1Yi91c2Vsb3R0aWUvc3JjL3VzZWxvdHRpZS9mcmFtaWZ5Iiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQTtFQUtFO0VBQ0E7RUFDQTtFQUNBLFNBUE07RUFRTixLQVJNO0VBU047O0FBdkNBO0VBNkJGO0lBYUk7SUFDQTtJQUNBOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBLGVBckJJO0VBc0JKOztBQTlDRjtFQXNESTtJQUxBO0lBQ0E7OztBQVNGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLFNBekNFO0VBMENGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBLGtCQWhEVztFQWlEWDtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQTlFSjtFQWFFO0lBMEVJLGtCQTdETzs7O0FBUmI7RUFxRU0sa0JBN0RPOztBQWdFVDtFQVRFO0VBQ0E7RUFDQTs7QUE3RU47RUFxREU7SUFzQkk7SUFDQTtJQUNBOzs7QUE3RU47RUFtQ0E7SUFRSTtJQUNBOzs7QUFxREY7RUF0REU7RUFDQTs7QUF5REY7RUFDRTtFQUNBOztBQUdGO0VBQ0U7RUFDQSxLQTFGRTtFQTJGRixNQTNGRTtFQTRGRjtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbW9iaWxlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGlzbW91c2Uge1xuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaXN0b3VjaCB7XG4gIEBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGhvdmVyIHtcbiAgQGluY2x1ZGUgaXNtb3VzZSB7XG4gICAgJjpob3ZlciB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLmZyYW1pZnkge1xuICAkZ2FwOiAxcmVtO1xuICAkY29sb3Itc2hhZG93OiByZ2JhKDE1OCwgMTYwLCAxNjIsIDAuMjUpO1xuICAkY29sb3ItbGluazogaHNsKDIxMiwgMTAwJSwgNzYlKTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTZyZW0sIDFmcikpO1xuICBwYWRkaW5nOiAkZ2FwO1xuICBnYXA6ICRnYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmX19jZWxsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBib3JkZXItcmFkaXVzOiAkZ2FwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAbWl4aW4gc2hhZG93IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICRjb2xvci1zaGFkb3c7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGlzbW91c2Uge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWxpbmsge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBwYWRkaW5nOiAkZ2FwO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICAgIHdpZHRoOiB1bnNldDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zaGFkb3c7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0sIHZpc2liaWxpdHksIG9wYWNpdHksIGJhY2tncm91bmQtY29sb3I7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICBAbWl4aW4gbGluay12aXNpYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgaG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGluaztcbiAgICAgIH1cblxuICAgICAgOmhvdmVyID4gJiB7XG4gICAgICAgIEBpbmNsdWRlIGxpbmstdmlzaWJsZTtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgaXN0b3VjaCB7XG4gICAgICAgIEBpbmNsdWRlIGxpbmstdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaW5jbHVkZSBpc3RvdWNoIHtcbiAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICB9XG5cbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgIH1cblxuICAgIDpoYXMoLmZ1bGxzY3JlZW4pID4gJjpub3QoLmZ1bGxzY3JlZW4pIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgJi5mdWxsc2NyZWVuIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogJGdhcDtcbiAgICAgIGxlZnQ6ICRnYXA7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMiAqICN7JGdhcH0pO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMGR2aCAtIDIgKiAjeyRnYXB9KTtcbiAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgfVxuXG4gICAgPiBpZnJhbWUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */`;function G(e,{parent:t=document.body}={}){let n=document.createElement("div");n.classList.add("framify"),C("framify",M),e.forEach(r=>{let l=document.createElement("div"),s=r.replace(/\/index\.html?$/,"").split("/").pop();l.innerHTML=`
      <a href="${r}" class="framify__cell-link" title="${f(s)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${r}"></iframe>
    `,l.classList.add("framify__cell");let u=l.querySelector("iframe");u&&(u.onload=function(){o(l,!1);let d=!1;function g(a){if(!a.view)return;let{style:m}=a.view.document.body;m.cursor=i(a.target)?"":"var(--cursor)"}let c=u.contentWindow;c&&(c.onpointerover=function(a){g(a)},c.onpointermove=function(a){g(a)},c.onpointerdown=function(a){d=i(a.target)},c.onclick=function(){d||o(l)},c.onblur=function(){d=!1},c.onkeydown=function(a){a.key==="Escape"&&o(l,!1)})},n.appendChild(l))});function i(r){return r?!!r.closest("svg > *"):!1}function o(r,l){var u;if(!r||window.matchMedia("(pointer:coarse)").matches)return;l=r.classList.toggle("fullscreen",l);let s=(u=r.querySelector("iframe"))==null?void 0:u.contentWindow;s==null||s.document.documentElement.style.setProperty("--cursor",l?"zoom-out":"zoom-in")}t.appendChild(n)}function B(e){return new A(e)}globalThis.useLottie=B;globalThis.framify=G;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
