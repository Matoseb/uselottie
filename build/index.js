"use strict";var T=Object.create;var p=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,K=Object.prototype.hasOwnProperty;var q=(e,t)=>{for(var n in t)p(e,n,{get:t[n],enumerable:!0})},R=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of _(t))!K.call(e,i)&&i!==n&&p(e,i,{get:()=>t[i],enumerable:!(o=J(t,i))||o.enumerable});return e};var G=(e,t,n)=>(n=e!=null?T(P(e)):{},R(t||!e||!e.__esModule?p(n,"default",{value:e,enumerable:!0}):n,e)),$=e=>R(p({},"__esModule",{value:!0}),e);var rt={};q(rt,{default:()=>X,framify:()=>y});module.exports=$(rt);var j=G(require("lottie-web"),1);var U=require("howler"),d=class extends U.Howl{constructor(t){super(t)}manualSeek(t){return super.seek(t)}manualPlay(){return super.play()}manualRate(t){return super.rate(t)}manualVolume(t){return super.volume(t)}playing(){return!1}setVolume(){}seek(){return super.seek()}rate(){return super.rate()}pause(){return this}play(){return-1}};var S=`/* prevent zoom */
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUVBOztBQUVBO0VBQ0U7O0FBR0Y7QUFBQTtFQUVFOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFHRjtBQUFBO0VBRUU7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7O0FBSUE7RUFDRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHByZXZlbnQgem9vbSAqL1xuXG5zdmcubG90dGllLWNvbnRyb2xsZXIge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgPiAqIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuXG4gID4gZ1tjbGlwLXBhdGhdLFxuICAub3ZlcmZsb3cge1xuICAgIGNsaXAtcGF0aDogdW5zZXQ7XG4gIH1cblxuICAqIHtcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLm5vY2xpY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmNsaWNrLFxuICAuaGl0Ym94IHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuaGl0Ym94ICoge1xuICAgIHN0cm9rZTogdHJhbnNwYXJlbnQ7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubm9zY2FsZSB7XG4gICAgW3N0cm9rZV0ge1xuICAgICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlO1xuICAgICAgLy8gc3Ryb2tlLXdpZHRoOiB2YXIoLS1zdHJva2Utd2lkdGgsIHJldmVydC1sYXllcik7XG4gICAgfVxuICB9XG59Il19 */`;var L=G(require("tinycolor2"),1);function N(){return/iPad|iPhone|iPod/.test(navigator.userAgent)}var W=()=>{};function h(e,t=document){return t.querySelector(e)}function k(e,t=document){return Array.from(t.querySelectorAll(e))}function B(e,t){return Math.random()*(t-e)+e}function A(e,t=1){return`${e/t*100}%`}function C(e=""){return e.charAt(0).toUpperCase()+e.slice(1)}function Y(e){return typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.slice(0,4)}function H(...e){let{name:t,color:n="lightgray",as:o="log"}=this;if(!t)return console[o](...e);let i=(0,L.default)(n).getLuminance()>=.5?"black":"white";console[o](`%c${t}`,`color: ${i}; padding: 3px 5px; border-radius: 3px; background-color: ${n};`,...e)}function f(e,t=""){let n="data-type",o=document.querySelector(`style[${n}="${e}]`);o||(o=document.createElement("style"),o.setAttribute(n,e),document.head.appendChild(o)),o.innerHTML=t}function tt(e,t){return e.markers.find(n=>n.payload.name===t)||null}function x(e,t=null){let{totalFrames:n,currentFrame:o}=e,i=n-1;if(t===null)return[o>=i?0:o,i];if(typeof t=="number")return[t,i];if(typeof t!="string")return t;let r=!e.loop,l=[];return t.split(",").filter(Boolean).slice(0,2).forEach((s,u)=>{s=s.trim();let b=tt(e,s);b!==null&&l.push(et(b,r?u:0))}),l}function et(e,t=0){return e.time+(t>0?1:0)}function w(e,t,n=!0){let o;Array.isArray(t)?o=t.map(i=>x(e,i)):o=x(e,t),e.playSegments(o,n)}function nt(e,t=0){let[n,o]=e;return n+(o-n)*t}function M(e,t,n=1,o=!0){if(Array.isArray(t)&&Array.isArray(t[0])){let r=Math.min(1,Math.max(0,n)),l=Math.round(r*(t.length-1));t=t[l]}else t===null&&(t=0);let i=x(e,t);e.goToAndStop(nt(i,n),o)}var z=G(require("lottie-api"),1);var ot={0:"lightblue",1:"orange",2:"lightgray",3:"red"},it={3:"error",2:"log"},I=class e{animation=null;container=null;api=null;player;debug=!1;volumeVariation;rateVariation;constructor(t={}){let{debug:n=!1,injectCSS:o=!0,volumeVariation:i=0,rateVariation:r=0,filterSpread:l=.5,howlerOptions:s={},...u}=t;this.debug=n,this.volumeVariation=i,this.rateVariation=r,o&&f("lottie-controller",S),this.container=typeof t.container=="string"?(()=>{let c=h(t.container);if(!c)throw this.log("Element not found",3)(t.container),new Error("Element not found:"+t.container);return c})():t.container||document.body,this.player=j.default.loadAnimation({renderer:"svg",loop:!1,autoplay:!1,rendererSettings:{filterSize:e.buildFilterSize(l)},audioFactory(c){return new d({src:c,html5:!!N(),...s})},...u,container:this.container}),this.api=z.default.createAnimationApi(this.player),this.player.addEventListener("DOMLoaded",()=>{let c=this.getName();document.title=C(c),this.log("DOMLoaded",0)(this.player.path+this.player.fileName+".json");let g=this.getElem();g&&(g.dataset.filename=c,g.classList.add("lottie-controller"),g.addEventListener("contextmenu",a=>(a.preventDefault(),a.stopPropagation(),!1),!0))}),this.player.addEventListener("complete",()=>{this.log("complete",0)()}),this.player.addEventListener("loopComplete",()=>{this.log("loopComplete",0)()});let b=1/0;this.player.addEventListener("enterFrame",c=>{if(c.direction!==1||this.player.isPaused)return;let{audios:g}=this.player.audioController||{audios:[]},a=this.player.firstFrame+this.player.currentFrame;g.forEach(({audio:m,data:V})=>{var E,Z,F;let{st:v}=V;if(v<=a&&v>b){let O=this.rateVariation*.5;(E=m.manualRate)==null||E.call(m,B(1-O,1+O)),(Z=m.manualVolume)==null||Z.call(m,B(1-this.volumeVariation,1));let Q={audios:g,audio:m,data:V,prevent:!1};this.player.triggerEvent("audio",Q),Q.prevent!==!0&&((F=m.manualPlay)==null||F.call(m))}}),b=a})}onComplete=t=>this.player.addEventListener("complete",t);onLoad=t=>this.player.addEventListener("DOMLoaded",t);onAudio=t=>this.player.addEventListener("audio",t);getElem=(t,n)=>(n||(n=this.player.renderer.svgElement),t?h(t,n||void 0):n);getElems=(t,n)=>(n||(n=this.player.renderer.svgElement),k(t,n||void 0));isPlaying=(...t)=>{let n=t.map(e.getAnimationKey);return this.animation!==null&&n.includes(this.animation)};currentAnimation=()=>this.animation;seek=(t,{position:n=0,isFrame:o=!0}={})=>{this.player.loop=!1,this.setAnimation(t);let i=M(this.player,t,n,o);return this.log("seek",1)({position:n}),i};getAnimation=()=>this.animation;getInfos=()=>({animation:this.animation,currentFrame:this.player.currentFrame});setAnimation=(t=null)=>{this.animation=e.getAnimationKey(t);let n=this.getElem();if(n){if(this.animation===null){n.removeAttribute("data-animation");return}n.setAttribute("data-animation",this.animation)}};log=(t,n)=>{if(!this.debug)return W;let o=it[n||2],i=ot[n||2];return(...r)=>{H.call({name:t,color:i,as:o},...r,{...this.getInfos()})}};play=(t,{isFrame:n=!0,loop:o=!1,smooth:i=!1}={})=>{let r=!i;if(this.player.loop=o,typeof t=="number"){this.setAnimation(),this.player.goToAndPlay(t,n);return}return this.setAnimation(t),this.log("play",1)(),w(this.player,t,r)};getName=()=>{let{fileName:t,path:n=""}=this.player;return!t||t==="data"?n.split("/").filter(Boolean).pop()||"untitled":t};destroy=()=>{this.player.destroy()};static getAnimationKey(t=null){return t==null?null:typeof t=="string"?t:JSON.stringify(t)}static buildFilterSize(t){let[n,o,i,r]=Y(t);return{x:A(-r),y:A(-n),width:A(1+o+r),height:A(1+i+n)}}};var D=`.framify {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvdXNlbG90dGllL3VzZWxvdHRpZS9zcmMvdXNlbG90dGllL2ZyYW1pZnkiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJBO0VBS0U7RUFDQTtFQUNBO0VBQ0EsU0FQTTtFQVFOLEtBUk07RUFTTjs7QUF2Q0E7RUE2QkY7SUFhSTtJQUNBO0lBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0EsZUFyQkk7RUFzQko7O0FBOUNGO0VBc0RJO0lBTEE7SUFDQTs7O0FBU0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsU0F6Q0U7RUEwQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0Esa0JBaERXO0VBaURYO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBOUVKO0VBYUU7SUEwRUksa0JBN0RPOzs7QUFSYjtFQXFFTSxrQkE3RE87O0FBZ0VUO0VBVEU7RUFDQTtFQUNBOztBQTdFTjtFQXFERTtJQXNCSTtJQUNBO0lBQ0E7OztBQTdFTjtFQW1DQTtJQVFJO0lBQ0E7OztBQXFERjtFQXRERTtFQUNBOztBQXlERjtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBLEtBMUZFO0VBMkZGLE1BM0ZFO0VBNEZGO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBtb2JpbGUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaXNtb3VzZSB7XG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBpc3RvdWNoIHtcbiAgQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gaG92ZXIge1xuICBAaW5jbHVkZSBpc21vdXNlIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4uZnJhbWlmeSB7XG4gICRnYXA6IDFyZW07XG4gICRjb2xvci1zaGFkb3c6IHJnYmEoMTU4LCAxNjAsIDE2MiwgMC4yNSk7XG4gICRjb2xvci1saW5rOiBoc2woMjEyLCAxMDAlLCA3NiUpO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNnJlbSwgMWZyKSk7XG4gIHBhZGRpbmc6ICRnYXA7XG4gIGdhcDogJGdhcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBAaW5jbHVkZSBtb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2NlbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGJvcmRlci1yYWRpdXM6ICRnYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBtaXhpbiBzaGFkb3cge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGNvbG9yLXNoYWRvdztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgaXNtb3VzZSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtbGluayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmc6ICRnYXA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgICAgd2lkdGg6IHVuc2V0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNoYWRvdztcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eSwgYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgIEBtaXhpbiBsaW5rLXZpc2libGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saW5rO1xuICAgICAgfVxuXG4gICAgICA6aG92ZXIgPiAmIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBpc3RvdWNoIHtcbiAgICAgICAgQGluY2x1ZGUgbGluay12aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIGlzdG91Y2gge1xuICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgIH1cblxuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICBAaW5jbHVkZSBzaGFkb3c7XG4gICAgfVxuXG4gICAgOmhhcyguZnVsbHNjcmVlbikgPiAmOm5vdCguZnVsbHNjcmVlbikge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAkZ2FwO1xuICAgICAgbGVmdDogJGdhcDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyICogI3skZ2FwfSk7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gMiAqICN7JGdhcH0pO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICB9XG5cbiAgICA+IGlmcmFtZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */`;function y(e,{parent:t=document.body}={}){let n=document.createElement("div");n.classList.add("framify"),f("framify",D),e.forEach(r=>{let l=document.createElement("div"),s=r.replace(/\/index\.html?$/,"").split("/").pop();l.innerHTML=`
      <a href="${r}" class="framify__cell-link" title="${C(s)}" target="_blank" rel="noopener noreferrer">\u{1F517}</a>
      <iframe src="${r}"></iframe>
    `,l.classList.add("framify__cell");let u=l.querySelector("iframe");u&&(u.onload=function(){i(l,!1);let b=!1;function c(a){if(!a.view)return;let{style:m}=a.view.document.body;m.cursor=o(a.target)?"":"var(--cursor)"}let g=u.contentWindow;g&&(g.onpointerover=function(a){c(a)},g.onpointermove=function(a){c(a)},g.onpointerdown=function(a){b=o(a.target)},g.onclick=function(){b||i(l)},g.onblur=function(){b=!1},g.onkeydown=function(a){a.key==="Escape"&&i(l,!1)})},n.appendChild(l))});function o(r){return r?!!r.closest("svg > *"):!1}function i(r,l){var u;if(!r||window.matchMedia("(pointer:coarse)").matches)return;l=r.classList.toggle("fullscreen",l);let s=(u=r.querySelector("iframe"))==null?void 0:u.contentWindow;s==null||s.document.documentElement.style.setProperty("--cursor",l?"zoom-out":"zoom-in")}t.appendChild(n)}function X(e){return new I(e)}globalThis.useLottie=X;globalThis.framify=y;0&&(module.exports={framify});
//# sourceMappingURL=index.js.map
