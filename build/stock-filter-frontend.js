!function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=245)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},11:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,r.apply(this,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},115:function(e,t){},116:function(e,t){},117:function(e,t){},12:function(e,t){e.exports=window.wp.isShallowEqual},129:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(28),c=r(70),o=r(154);const u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"filter_stock_status";const r=Object(c.d)(t);if(!r)return[];const o=Object(n.a)(r)?r.split(","):r;return Object.keys(e).filter(e=>o.includes(e))},s=e=>({heading:Object(n.a)(null==e?void 0:e.heading)?e.heading:"",headingLevel:Object(n.a)(null==e?void 0:e.headingLevel)&&parseInt(e.headingLevel,10)||o.attributes.headingLevel.default,showFilterButton:"true"===(null==e?void 0:e.showFilterButton),showCounts:"false"!==(null==e?void 0:e.showCounts),isPreview:!1})},13:function(e,t){e.exports=window.wp.url},133:function(e,t){},134:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(0),c=r(97),o=r(6),u=r(27),s=r(18),a=r(29),l=r(60),i=r(23);const b=e=>{let{queryAttribute:t,queryPrices:r,queryStock:b,queryRating:f,queryState:d}=e,p=Object(i.a)();p+="-collection-data";const[O]=Object(a.a)(p),[m,j]=Object(a.b)("calculate_attribute_counts",[],p),[g,w]=Object(a.b)("calculate_price_range",null,p),[h,k]=Object(a.b)("calculate_stock_status_counts",null,p),[_,E]=Object(a.b)("calculate_rating_counts",null,p),v=Object(u.a)(t||{}),y=Object(u.a)(r),S=Object(u.a)(b),x=Object(u.a)(f);Object(n.useEffect)(()=>{"object"==typeof v&&Object.keys(v).length&&(m.find(e=>Object(s.b)(v,"taxonomy")&&e.taxonomy===v.taxonomy)||j([...m,v]))},[v,m,j]),Object(n.useEffect)(()=>{g!==y&&void 0!==y&&w(y)},[y,w,g]),Object(n.useEffect)(()=>{h!==S&&void 0!==S&&k(S)},[S,k,h]),Object(n.useEffect)(()=>{_!==x&&void 0!==x&&E(x)},[x,E,_]);const[P,C]=Object(n.useState)(!1),[R]=Object(c.a)(P,200);P||C(!0);const A=Object(n.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:r}=e;return{taxonomy:t,query_type:r}}),["taxonomy","query_type"])),t})(O),[O]);return Object(l.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...A},shouldSelect:R})}},15:function(e,t,r){"use strict";var n=r(16),c=r.n(n),o=r(0),u=r(7),s=r(1),a=r(44),l=e=>{let{imageUrl:t=a.l+"/block-error.svg",header:r=Object(s.__)("Oops!","woo-gutenberg-products-block"),text:n=Object(s.__)("There was an error loading the content.","woo-gutenberg-products-block"),errorMessage:c,errorMessagePrefix:u=Object(s.__)("Error:","woo-gutenberg-products-block"),button:l,showErrorBlock:i=!0}=e;return i?Object(o.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&Object(o.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),Object(o.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},r&&Object(o.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},r),n&&Object(o.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},n),c&&Object(o.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},u?u+" ":"",c),l&&Object(o.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},l))):null};r(33);class i extends u.Component{constructor(){super(...arguments),c()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(o.createElement)(o.Fragment,null,Object(o.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}render(){const{header:e,imageUrl:t,showErrorMessage:r=!0,showErrorBlock:n=!0,text:c,errorMessagePrefix:u,renderError:s,button:a}=this.props,{errorMessage:i,hasError:b}=this.state;return b?"function"==typeof s?s({errorMessage:i}):Object(o.createElement)(l,{showErrorBlock:n,errorMessage:r?i:null,header:e,imageUrl:t,text:c,errorMessagePrefix:u,button:a}):this.props.children}}t.a=i},154:function(e){e.exports=JSON.parse('{"name":"woocommerce/stock-filter","version":"1.0.0","title":"Filter by Stock Controls","description":"Enable customers to filter the product grid by stock status.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"link":true,"__experimentalDefaultControls":{"text":true}},"inserter":false,"lock":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"showCounts":{"type":"boolean","default":true},"showFilterButton":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},159:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(24),u=r(27),s=r(61),a=r(29),l=r(134),i=r(2),b=r(96),f=r(95),d=r(94),p=r(51),O=r(62),m=r(12),j=r.n(m),g=r(21),w=r(69),h=r(18),k=r(13),_=r(70),E=r(5),v=r.n(E);const y=[{value:"preview-1",name:"In Stock",label:Object(n.createElement)(O.a,{name:"In Stock",count:3})},{value:"preview-2",name:"Out of sotck",label:Object(n.createElement)(O.a,{name:"Out of stock",count:3})},{value:"preview-3",name:"On backorder",label:Object(n.createElement)(O.a,{name:"On backorder",count:2})}];r(226);var S=r(129),x=r(55);const P=_.a+"stock_status";t.a=e=>{let{attributes:t,isEditor:r=!1}=e;const m=Object(x.b)(),E=Object(i.getSettingWithCoercion)("is_rendering_php_template",!1,w.a),[C,R]=Object(n.useState)(!1),{outofstock:A,...T}=Object(i.getSetting)("stockStatusOptions",{}),N=Object(n.useRef)(Object(i.getSetting)("hideOutOfStockItems",!1)?T:{outofstock:A,...T}),B=Object(n.useMemo)(()=>Object(S.a)(N.current,P),[]),[M,L]=Object(n.useState)(B),[F,q]=Object(n.useState)(t.isPreview?y:[]),[G]=Object(n.useState)(Object.entries(N.current).map(e=>{let[t,r]=e;return{slug:t,name:r}}).filter(e=>!!e.name).sort((e,t)=>e.slug.localeCompare(t.slug))),[Q]=Object(a.a)(),[U,D]=Object(a.b)("stock_status",B),{results:Y,isLoading:K}=Object(l.a)({queryStock:!0,queryState:Q}),V=Object(n.useCallback)(e=>Object(h.b)(Y,"stock_status_counts")&&Array.isArray(Y.stock_status_counts)?Y.stock_status_counts.find(t=>{let{status:r,count:n}=t;return r===e&&0!==Number(n)}):null,[Y]);Object(n.useEffect)(()=>{if(K||t.isPreview)return;const e=G.map(e=>{const r=V(e.slug);if(!(r||M.includes(e.slug)||(c=e.slug,null!=Q&&Q.stock_status&&Q.stock_status.some(e=>{let{status:t=[]}=e;return t.includes(c)}))))return null;var c;const o=r?Number(r.count):0;return{value:e.slug,name:Object(g.decodeEntities)(e.name),label:Object(n.createElement)(O.a,{name:Object(g.decodeEntities)(e.name),count:t.showCounts?o:null})}}).filter(e=>!!e);q(e)},[t.showCounts,t.isPreview,K,V,M,Q.stock_status,G]);const W=Object(n.useCallback)(e=>{r||(e&&!E&&D(e),(e=>{if(!window)return;if(0===e.length){const e=Object(k.removeQueryArgs)(window.location.href,P);return void(e!==window.location.href&&Object(_.c)(e))}const t=Object(k.addQueryArgs)(window.location.href,{[P]:e.join(",")});t!==window.location.href&&Object(_.c)(t)})(e))},[r,D,M,E]);Object(n.useEffect)(()=>{t.showFilterButton||W(M)},[t.showFilterButton,M,W]);const I=Object(n.useMemo)(()=>U,[U]),J=Object(u.a)(I),$=Object(s.a)(J);Object(n.useEffect)(()=>{j()($,J)||j()(M,J)||L(J)},[M,J,$]),Object(n.useEffect)(()=>{C||(D(B),R(!0))},[D,C,R,B]);const z=Object(n.useCallback)(e=>{const t=e=>{const t=F.find(t=>t.value===e);return t?t.name:null},r=e=>{let{filterAdded:r,filterRemoved:n}=e;const u=r?t(r):null,s=n?t(n):null;u?Object(o.speak)(Object(c.sprintf)(
/* translators: %s stock statuses (for example: 'instock'...) */
Object(c.__)("%s filter added.","woo-gutenberg-products-block"),u)):s&&Object(o.speak)(Object(c.sprintf)(
/* translators: %s stock statuses (for example:'instock'...) */
Object(c.__)("%s filter removed.","woo-gutenberg-products-block"),s))},n=M.includes(e),u=M.filter(t=>t!==e);n?r({filterRemoved:e}):(u.push(e),u.sort(),r({filterAdded:e})),L(u)},[M,F]);if(!K&&0===F.length)return m(!1),null;const H="h"+t.headingLevel,X=!t.isPreview&&!N.current||0===F.length,Z=!t.isPreview&&K;if(!Object(i.getSettingWithCoercion)("has_filterable_products",!1,w.a))return m(!1),null;const ee=Object(n.createElement)(H,{className:"wc-block-stock-filter__title"},t.heading),te=X?Object(n.createElement)(p.a,null,ee):ee;return m(!0),Object(n.createElement)(n.Fragment,null,!r&&t.heading&&te,Object(n.createElement)("div",{className:v()("wc-block-stock-filter",{"is-loading":X})},Object(n.createElement)(b.a,{className:"wc-block-stock-filter-list",options:F,checked:M,onChange:z,isLoading:X,isDisabled:Z})),Object(n.createElement)("div",{className:"wc-block-stock-filter__actions"},M.length>0&&!X&&Object(n.createElement)(d.a,{onClick:()=>{L([]),W([])},screenReaderLabel:Object(c.__)("Reset stock filter","woo-gutenberg-products-block")}),t.showFilterButton&&Object(n.createElement)(f.a,{className:"wc-block-stock-filter__button",isLoading:X,disabled:X||Z,onClick:()=>W(M)})))}},16:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},18:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));const n=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return n(e)&&t in e}},2:function(e,t){e.exports=window.wc.wcSettings},21:function(e,t){e.exports=window.wp.htmlEntities},22:function(e,t,r){"use strict";var n=r(0),c=r(5),o=r.n(c);t.a=e=>{let t,{label:r,screenReaderLabel:c,wrapperElement:u,wrapperProps:s={}}=e;const a=null!=r,l=null!=c;return!a&&l?(t=u||"span",s={...s,className:o()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,c)):(t=u||n.Fragment,a&&l&&r!==c?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},r),Object(n.createElement)("span",{className:"screen-reader-text"},c)):Object(n.createElement)(t,s,r))}},226:function(e,t){},23:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);const c=Object(n.createContext)("page"),o=()=>Object(n.useContext)(c);c.Provider},24:function(e,t){e.exports=window.wp.a11y},245:function(e,t,r){e.exports=r(246)},246:function(e,t,r){"use strict";r.r(t);var n=r(38),c=r(159),o=r(129);Object(n.a)({selector:".wp-block-woocommerce-stock-filter",Block:c.a,getProps:e=>({attributes:Object(o.b)(e.dataset),isEditor:!1})})},27:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0),c=r(12),o=r.n(c);function u(e){const t=Object(n.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},28:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=e=>"string"==typeof e},29:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return d}));var n=r(3),c=r(4),o=r(0),u=r(12),s=r.n(u),a=r(27),l=r(61),i=r(23);const b=e=>{const t=Object(i.a)();e=e||t;const r=Object(c.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:u}=Object(c.useDispatch)(n.QUERY_STATE_STORE_KEY);return[r,Object(o.useCallback)(t=>{u(e,t)},[e,u])]},f=(e,t,r)=>{const u=Object(i.a)();r=r||u;const s=Object(c.useSelect)(c=>c(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t),[r,e]),{setQueryValue:a}=Object(c.useDispatch)(n.QUERY_STATE_STORE_KEY);return[s,Object(o.useCallback)(t=>{a(r,e,t)},[r,e,a])]},d=(e,t)=>{const r=Object(i.a)();t=t||r;const[n,c]=b(t),u=Object(a.a)(n),f=Object(a.a)(e),d=Object(l.a)(f),p=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{s()(d,f)||(c(Object.assign({},u,f)),p.current=!0)},[u,f,d,c]),p.current?[n,c]:[e,c]}},3:function(e,t){e.exports=window.wc.wcBlocksData},33:function(e,t){},38:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(11),c=r.n(n),o=r(0),u=r(15);const s=[".wp-block-woocommerce-cart"],a=e=>{let{Block:t,containers:r,getProps:n=(()=>({})),getErrorBoundaryProps:s=(()=>({}))}=e;0!==r.length&&Array.prototype.forEach.call(r,(e,r)=>{const a=n(e,r),l=s(e,r),i={...e.dataset,...a.attributes||{}};(e=>{let{Block:t,container:r,attributes:n={},props:s={},errorBoundaryProps:a={}}=e;Object(o.render)(Object(o.createElement)(u.a,a,Object(o.createElement)(o.Suspense,{fallback:Object(o.createElement)("div",{className:"wc-block-placeholder"})},t&&Object(o.createElement)(t,c()({},s,{attributes:n})))),r,()=>{r.classList&&r.classList.remove("is-loading")})})({Block:t,container:e,props:a,attributes:i,errorBoundaryProps:l})})},l=e=>{const t=document.body.querySelectorAll(s.join(",")),{Block:r,getProps:n,getErrorBoundaryProps:c,selector:o}=e;(e=>{let{Block:t,getProps:r,getErrorBoundaryProps:n,selector:c,wrappers:o}=e;const u=document.body.querySelectorAll(c);o&&o.length>0&&Array.prototype.filter.call(u,e=>!((e,t)=>Array.prototype.some.call(t,t=>t.contains(e)&&!t.isSameNode(e)))(e,o)),a({Block:t,containers:u,getProps:r,getErrorBoundaryProps:n})})({Block:r,getProps:n,getErrorBoundaryProps:c,selector:o,wrappers:t}),Array.prototype.forEach.call(t,t=>{t.addEventListener("wc-blocks_render_blocks_frontend",()=>{(e=>{let{Block:t,getProps:r,getErrorBoundaryProps:n,selector:c,wrapper:o}=e;const u=o.querySelectorAll(c);a({Block:t,containers:u,getProps:r,getErrorBoundaryProps:n})})({...e,wrapper:t})})})}},4:function(e,t){e.exports=window.wp.data},44:function(e,t,r){"use strict";r.d(t,"n",(function(){return o})),r.d(t,"l",(function(){return u})),r.d(t,"k",(function(){return s})),r.d(t,"m",(function(){return a})),r.d(t,"i",(function(){return l})),r.d(t,"d",(function(){return i})),r.d(t,"f",(function(){return b})),r.d(t,"j",(function(){return f})),r.d(t,"c",(function(){return d})),r.d(t,"e",(function(){return p})),r.d(t,"g",(function(){return O})),r.d(t,"a",(function(){return m})),r.d(t,"h",(function(){return j})),r.d(t,"b",(function(){return g}));var n,c=r(2);const o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),u=o.pluginUrl+"images/",s=o.pluginUrl+"build/",a=o.buildPhase,l=null===(n=c.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,i=(c.STORE_PAGES.checkout.id,c.STORE_PAGES.checkout.permalink),b=c.STORE_PAGES.privacy.permalink,f=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),d=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id,c.STORE_PAGES.cart.permalink),p=c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),O=Object(c.getSetting)("shippingCountries",{}),m=Object(c.getSetting)("allowedCountries",{}),j=Object(c.getSetting)("shippingStates",{}),g=Object(c.getSetting)("allowedStates",{})},5:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var u=c.apply(null,n);u&&e.push(u)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(7);function c(e,t,r){var c=this,o=Object(n.useRef)(null),u=Object(n.useRef)(0),s=Object(n.useRef)(null),a=Object(n.useRef)([]),l=Object(n.useRef)(),i=Object(n.useRef)(),b=Object(n.useRef)(e),f=Object(n.useRef)(!0);b.current=e;var d=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var p=!!(r=r||{}).leading,O=!("trailing"in r)||!!r.trailing,m="maxWait"in r,j=m?Math.max(+r.maxWait||0,t):null;return Object(n.useEffect)((function(){return f.current=!0,function(){f.current=!1}}),[]),Object(n.useMemo)((function(){var e=function(e){var t=a.current,r=l.current;return a.current=l.current=null,u.current=e,i.current=b.current.apply(r,t)},r=function(e,t){d&&cancelAnimationFrame(s.current),s.current=d?requestAnimationFrame(e):setTimeout(e,t)},n=function(e){if(!f.current)return!1;var r=e-o.current,n=e-u.current;return!o.current||r>=t||r<0||m&&n>=j},g=function(t){return s.current=null,O&&a.current?e(t):(a.current=l.current=null,i.current)},w=function(){var e=Date.now();if(n(e))return g(e);if(f.current){var c=e-o.current,s=e-u.current,a=t-c,l=m?Math.min(a,j-s):a;r(w,l)}},h=function(){for(var b=[],d=0;d<arguments.length;d++)b[d]=arguments[d];var O=Date.now(),j=n(O);if(a.current=b,l.current=c,o.current=O,j){if(!s.current&&f.current)return u.current=o.current,r(w,t),p?e(o.current):i.current;if(m)return r(w,t),e(o.current)}return s.current||r(w,t),i.current};return h.cancel=function(){s.current&&(d?cancelAnimationFrame(s.current):clearTimeout(s.current)),u.current=0,a.current=o.current=l.current=s.current=null},h.isPending=function(){return!!s.current},h.flush=function(){return s.current?g(Date.now()):i.current},h}),[p,m,t,j,O,d])}},51:function(e,t,r){"use strict";var n=r(0);r(71),t.a=e=>{let{children:t}=e;return Object(n.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},55:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return o}));var n=r(0);const c=Object(n.createContext)({}),o=()=>{const{wrapper:e}=Object(n.useContext)(c);return t=>{e&&e.current&&(e.current.hidden=!t)}}},6:function(e,t){e.exports=window.lodash},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(3),c=r(4),o=r(0),u=r(27),s=r(73);const a=e=>{const{namespace:t,resourceName:r,resourceValues:a=[],query:l={},shouldSelect:i=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),f=Object(u.a)(l),d=Object(u.a)(a),p=Object(s.a)(),O=Object(c.useSelect)(e=>{if(!i)return null;const c=e(n.COLLECTIONS_STORE_KEY),o=[t,r,f,d],u=c.getCollectionError(...o);if(u){if(!(u instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");p(u)}return{results:c.getCollection(...o),isLoading:!c.hasFinishedResolution("getCollection",o)}},[t,r,d,f,i]);return null!==O&&(b.current=O),b.current}},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(7);function c(e,t){const r=Object(n.useRef)();return Object(n.useEffect)(()=>{r.current===e||t&&!t(e,r.current)||(r.current=e)},[e,t]),r.current}},62:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(22);r(133),t.a=e=>{let{name:t,count:r}=e;return Object(n.createElement)(n.Fragment,null,t,null!==r&&Number.isFinite(r)&&Object(n.createElement)(o.a,{label:r.toString(),screenReaderLabel:Object(c.sprintf)(
/* translators: %s number of products. */
Object(c._n)("%s product","%s products",r,"woo-gutenberg-products-block"),r),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))}},69:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=e=>"boolean"==typeof e},7:function(e,t){e.exports=window.React},70:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return a})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return i}));var n=r(13),c=r(2),o=r(69);const u=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),s="query_type_",a="filter_";function l(e){return window?Object(n.getQueryArg)(window.location.href,e):null}function i(e){u?window.location.href=e:window.history.replaceState({},"",e)}},71:function(e,t){},73:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0);const c=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}},9:function(e,t){e.exports=window.wc.blocksCheckout},94:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(5),u=r.n(o),s=r(22);r(115),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
r=Object(c.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:a=Object(c.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{className:u()("wc-block-components-filter-reset-button",t),onClick:o},Object(n.createElement)(s.a,{label:r,screenReaderLabel:a}))}},95:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(5),u=r.n(o),s=r(22);r(116),t.a=e=>{let{className:t,isLoading:r,disabled:o,label:
/* translators: Submit button text for filters. */
a=Object(c.__)("Apply","woo-gutenberg-products-block"),onClick:l,screenReaderLabel:i=Object(c.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{type:"submit",className:u()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":r},t),disabled:o,onClick:l},Object(n.createElement)(s.a,{label:a,screenReaderLabel:i}))}},96:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(5),u=r.n(o),s=r(9);r(117),t.a=e=>{let{className:t,onChange:r,options:o=[],checked:a=[],isLoading:l=!1,isDisabled:i=!1,limit:b=10}=e;const[f,d]=Object(n.useState)(!1),p=Object(n.useMemo)(()=>[...Array(5)].map((e,t)=>Object(n.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),O=Object(n.useMemo)(()=>{const e=o.length-b;return!f&&Object(n.createElement)("li",{key:"show-more",className:"show-more"},Object(n.createElement)("button",{onClick:()=>{d(!0)},"aria-expanded":!1,"aria-label":Object(c.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(c._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(c.sprintf)(
/* translators: %s number of options to reveal. */
Object(c._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[o,b,f]),m=Object(n.useMemo)(()=>f&&Object(n.createElement)("li",{key:"show-less",className:"show-less"},Object(n.createElement)("button",{onClick:()=>{d(!1)},"aria-expanded":!0,"aria-label":Object(c.__)("Show less options","woo-gutenberg-products-block")},Object(c.__)("Show less","woo-gutenberg-products-block"))),[f]),j=Object(n.useMemo)(()=>{const e=o.length>b+5;return Object(n.createElement)(n.Fragment,null,o.map((t,c)=>Object(n.createElement)(n.Fragment,{key:t.value},Object(n.createElement)("li",e&&!f&&c>=b&&{hidden:!0},Object(n.createElement)(s.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:a.includes(t.value),onChange:()=>{r(t.value)}})),e&&c===b-1&&O)),e&&m)},[o,r,a,f,b,m,O,i]),g=u()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":l},t);return Object(n.createElement)("ul",{className:g},l?p:j)}},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(7),c=r(50);function o(e,t){return e===t}function u(e){return"function"==typeof e?function(){return e}:e}function s(e,t,r){var s=r&&r.equalityFn||o,a=function(e){var t=Object(n.useState)(u(e)),r=t[0],c=t[1];return[r,Object(n.useCallback)((function(e){return c(u(e))}),[])]}(e),l=a[0],i=a[1],b=Object(c.a)(Object(n.useCallback)((function(e){return i(e)}),[i]),t,r),f=Object(n.useRef)(e);return s(f.current,e)||(b(e),f.current=e),[l,b]}}});