/*! third party licenses: js/vendor.LICENSE.txt */
import{V as m,t as f,f as w}from"./index-GsrzU7tr.mjs";import"./index-Hxwv_8S9.mjs";const y="modulepreload",g=function(t,i){return t[0]==="."?new URL(t,i).href:t},p={},h=function(t,i,d){let c=Promise.resolve();if(i&&i.length>0){const l=document.getElementsByTagName("link");c=Promise.all(i.map(e=>{if(e=g(e,d),e in p)return;p[e]=!0;const a=e.endsWith(".css"),v=a?'[rel="stylesheet"]':"";if(d)for(let s=l.length-1;s>=0;s--){const u=l[s];if(u.href===e&&(!a||u.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(e,'"]').concat(v)))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":y,a||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),a)return new Promise((s,u)=>{o.addEventListener("load",s),o.addEventListener("error",()=>u(new Error("Unable to preload CSS for ".concat(e))))})}))}return c.then(()=>t()).catch(l=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=l,window.dispatchEvent(e),!e.defaultPrevented)throw l})},E='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-lightning-bolt" viewBox="0 0 24 24"><path d="M11 15H6L13 1V9H18L11 23V15Z" /></svg>';m.prototype.t=f,m.prototype.n=w;let n=null,r=null;const _=new OCA.Files.Sidebar.Tab({id:"activity",name:f("activity","Activity"),iconSvg:E,async mount(t,i,d){if(n===null){const{default:c}=await h(()=>import("./ActivityTab-MQIYWiLy.mjs"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);n=n!=null?n:m.extend(c)}r&&r.$destroy(),r=new n({parent:d}),r.update(i),r.$mount(t)},update(t){r.update(t)},destroy(){r.$destroy(),r=null}});window.addEventListener("DOMContentLoaded",async function(){if(OCA.Files&&OCA.Files.Sidebar){OCA.Files.Sidebar.registerTab(_);const{default:t}=await h(()=>import("./ActivityTab-MQIYWiLy.mjs"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);n=n!=null?n:m.extend(t)}});export{E as l};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [OC.filePath('activity', '', 'js/ActivityTab-MQIYWiLy.mjs'),OC.filePath('activity', '', 'js/index.es-C_jZ0iWl.mjs'),OC.filePath('activity', '', 'js/index-Hxwv_8S9.mjs'),OC.filePath('activity', '', 'js/logger-c02nfst_.mjs'),OC.filePath('activity', '', 'js/index-GsrzU7tr.mjs'),OC.filePath('activity', '', 'js/Activity-_CCGvXva.mjs'),OC.filePath('activity', '', 'js/api-w2xTicAv.mjs')]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
