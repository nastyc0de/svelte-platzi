(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return 0===Object.keys(t).length}new Set;let i,l=!1;function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){i=t}new Set;const f=[],$=[],h=[],p=[],m=Promise.resolve();let g=!1;function b(t){h.push(t)}let y=!1;const _=new Set;function k(){if(!y){y=!0;do{for(let t=0;t<f.length;t+=1){const e=f[t];d(e),w(e.$$)}for(d(null),f.length=0;$.length;)$.pop()();for(let t=0;t<h.length;t+=1){const e=h[t];_.has(e)||(_.add(e),e())}h.length=0}while(f.length);for(;p.length;)p.pop()();g=!1,y=!1,_.clear()}}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const x=new Set;let v;function E(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function C(s,c,a,$,h,p,y,_=[-1]){const w=i;d(s);const v=s.$$={fragment:null,ctx:null,props:p,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(w?w.$$.context:c.context||[]),callbacks:n(),dirty:_,skip_bound:!1,root:c.target||w.$$.root};y&&y(v.root);let E=!1;if(v.ctx=a?a(s,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return v.ctx&&h(v.ctx[t],v.ctx[t]=o)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](o),E&&function(t,e){-1===t.$$.dirty[0]&&(f.push(t),g||(g=!0,m.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(s,t)),e})):[],v.update(),E=!0,o(v.before_update),v.fragment=!!$&&$(v.ctx),c.target){if(c.hydrate){l=!0;const t=(T=c.target,Array.from(T.childNodes));v.fragment&&v.fragment.l(t),t.forEach(u)}else v.fragment&&v.fragment.c();c.intro&&((C=s.$$.fragment)&&C.i&&(x.delete(C),C.i(S))),function(t,n,s,c){const{fragment:i,on_mount:l,on_destroy:u,after_update:a}=t.$$;i&&i.m(n,s),c||b((()=>{const n=l.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(b)}(s,c.target,c.anchor,c.customElement),l=!1,k()}var C,S,T;d(w)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(r);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){E(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function S(t){!function(t,e,n){const o=function(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e.host?e:document}(t);if(!o.getElementById(e)){const t=a("style");t.id=e,t.textContent="body{background-color:#676788;color:azure}",function(t,e){!function(t,e){t.appendChild(e)}(t.head||t,e)}(o,t)}}(t,"svelte-o4rja8")}function T(e){let n;return{c(){var t,e,o;n=a("div"),n.innerHTML="<h1>Pugstagram</h1>",t=n,e="class",null==(o="main")?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}new class extends class{$destroy(){E(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,null,T,s,{},S)}}({target:document.querySelector("main")})})();