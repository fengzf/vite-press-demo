import{U as o,at as p,au as u,av as l,aw as c,ax as f,ay as d,az as m,aA as h,aB as A,aC as g,d as v,u as y,y as P,x as C,aD as w,aE as E,aF as b,aG as R}from"./chunks/framework.P5gDzHv8.js";import{t as S}from"./chunks/theme.CsiOd6-3.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(S),_=v({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=y();return P(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),E(),b(),s.setup&&s.setup(),()=>R(s.Layout)}});async function x(){globalThis.__VITEPRESS__=!0;const e=T(),a=D();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function D(){return h(_)}function T(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{x as createApp};
