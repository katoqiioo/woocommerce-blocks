(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[85],{102:function(e,t){},103:function(e,t){},104:function(e,t){},105:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(0);const r=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}},110:function(e,t,c){"use strict";c.d(t,"c",(function(){return s})),c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return l})),c.d(t,"d",(function(){return u}));var n=c(23),r=c(72),o=c(136);const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"filter_stock_status";const c=Object(r.d)(t);if(!c)return[];const o=Object(n.a)(c)?c.split(","):c;return Object.keys(e).filter(e=>o.includes(e))};function a(){return Math.floor(Math.random()*Date.now())}const l=e=>e.trim().replace(/\s/g,"").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,""),u=e=>({heading:Object(n.a)(null==e?void 0:e.heading)?e.heading:"",headingLevel:Object(n.a)(null==e?void 0:e.headingLevel)&&parseInt(e.headingLevel,10)||o.attributes.headingLevel.default,showFilterButton:"true"===(null==e?void 0:e.showFilterButton),showCounts:"false"!==(null==e?void 0:e.showCounts),isPreview:!1,displayStyle:Object(n.a)(null==e?void 0:e.displayStyle)&&e.displayStyle||o.attributes.displayStyle.default,selectType:Object(n.a)(null==e?void 0:e.selectType)&&e.selectType||o.attributes.selectType.default})},115:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c(53);var n=c(37);const r=()=>n.n>1},116:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(23),r=c(20);const o=e=>Object(n.a)(e)?JSON.parse(e)||{}:Object(r.a)(e)?e:{}},117:function(e,t){},118:function(e,t){},136:function(e){e.exports=JSON.parse('{"name":"woocommerce/stock-filter","version":"1.0.0","title":"Filter by Stock Controls","description":"Enable customers to filter the product grid by stock status.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"link":true,"__experimentalDefaultControls":{"text":true}},"inserter":false,"lock":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"showCounts":{"type":"boolean","default":true},"showFilterButton":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},138:function(e,t){},139:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var n=c(0),r=c(98),o=c(5),s=c(30),a=c(20),l=c(32),u=c(63),i=c(25);const b=e=>{let{queryAttribute:t,queryPrices:c,queryStock:b,queryRating:d,queryState:O,productIds:f,isEditor:j=!1}=e,m=Object(i.a)();m+="-collection-data";const[p]=Object(l.a)(m),[g,k]=Object(l.b)("calculate_attribute_counts",[],m),[_,w]=Object(l.b)("calculate_price_range",null,m),[h,y]=Object(l.b)("calculate_stock_status_counts",null,m),[v,E]=Object(l.b)("calculate_rating_counts",null,m),S=Object(s.a)(t||{}),C=Object(s.a)(c),x=Object(s.a)(b),N=Object(s.a)(d);Object(n.useEffect)(()=>{"object"==typeof S&&Object.keys(S).length&&(g.find(e=>Object(a.b)(S,"taxonomy")&&e.taxonomy===S.taxonomy)||k([...g,S]))},[S,g,k]),Object(n.useEffect)(()=>{_!==C&&void 0!==C&&w(C)},[C,w,_]),Object(n.useEffect)(()=>{h!==x&&void 0!==x&&y(x)},[x,y,h]),Object(n.useEffect)(()=>{v!==N&&void 0!==N&&E(N)},[N,E,v]);const[R,L]=Object(n.useState)(j),[T]=Object(r.a)(R,200);R||L(!0);const A=Object(n.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:c}=e;return{taxonomy:t,query_type:c}}),["taxonomy","query_type"])),t})(p),[p]);return Object(u.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...O,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(o.isEmpty)(f)&&{include:f},...A},shouldSelect:T})}},151:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(66),r=c(115),o=c(20),s=c(116);const a=e=>{if(!Object(r.a)())return{className:"",style:{}};const t=Object(o.a)(e)?e:{},c=Object(s.a)(t.style);return Object(n.__experimentalUseBorderProps)({...t,style:c})}},161:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(28),s=c(76),a=c(152),l=c(151),u=c(30),i=c(64),b=c(32),d=c(139),O=c(2),f=c(94),j=c(71),m=c(70),p=c(69),g=c(65),k=c(93),_=c(13),w=c.n(_),h=c(31),y=c(74),v=c(20),E=c(14),S=c(72),C=c(5),x=c(6),N=c.n(x);const R=[{value:"preview-1",name:"In Stock",label:Object(n.createElement)(g.a,{name:"In Stock",count:3}),textLabel:"In Stock (3)"},{value:"preview-2",name:"Out of stock",label:Object(n.createElement)(g.a,{name:"Out of stock",count:3}),textLabel:"Out of stock (3)"},{value:"preview-3",name:"On backorder",label:Object(n.createElement)(g.a,{name:"On backorder",count:2}),textLabel:"On backorder (2)"}];c(228);var L=c(110),T=c(47);const A=S.a+"stock_status";t.a=e=>{let{attributes:t,isEditor:c=!1}=e;const _=Object(T.b)(),x=Object(O.getSettingWithCoercion)("is_rendering_php_template",!1,y.a),[F,P]=Object(n.useState)(!1),{outofstock:q,...I}=Object(O.getSetting)("stockStatusOptions",{}),M=c?[]:Object(O.getSettingWithCoercion)("product_ids",[],Array.isArray),Q=Object(n.useRef)(Object(O.getSetting)("hideOutOfStockItems",!1)?I:{outofstock:q,...I}),B=Object(n.useMemo)(()=>Object(L.c)(Q.current,A),[]),[Y,V]=Object(n.useState)(B),[W,D]=Object(n.useState)(t.isPreview?R:[]),[K]=Object(n.useState)(Object.entries(Q.current).map(e=>{let[t,c]=e;return{slug:t,name:c}}).filter(e=>!!e.name).sort((e,t)=>e.slug.localeCompare(t.slug))),[U]=Object(b.a)(),[J,$]=Object(b.b)("stock_status",B),{results:z,isLoading:H}=Object(d.a)({queryStock:!0,queryState:U,productIds:M,isEditor:c}),Z=Object(n.useCallback)(e=>Object(v.b)(z,"stock_status_counts")&&Array.isArray(z.stock_status_counts)?z.stock_status_counts.find(t=>{let{status:c,count:n}=t;return c===e&&0!==Number(n)}):null,[z]),[G,X]=Object(n.useState)(Object(L.b)()),ee=Object(l.a)(t);Object(n.useEffect)(()=>{if(H||t.isPreview)return;const e=K.map(e=>{const c=Z(e.slug);if(!(c||Y.includes(e.slug)||(r=e.slug,null!=U&&U.stock_status&&U.stock_status.some(e=>{let{status:t=[]}=e;return t.includes(r)}))))return null;var r;const o=c?Number(c.count):0;return{value:e.slug,name:Object(h.decodeEntities)(e.name),label:Object(n.createElement)(g.a,{name:Object(h.decodeEntities)(e.name),count:t.showCounts?o:null}),textLabel:t.showCounts?`${Object(h.decodeEntities)(e.name)} (${o})`:Object(h.decodeEntities)(e.name)}}).filter(e=>!!e);D(e),X(Object(L.b)())},[t.showCounts,t.isPreview,H,Z,Y,U.stock_status,K]);const te="single"!==t.selectType,ce=Object(n.useCallback)(e=>{c||(e&&!x&&$(e),(e=>{if(!window)return;if(0===e.length){const e=Object(E.removeQueryArgs)(window.location.href,A);return void(e!==window.location.href&&Object(S.c)(e))}const t=Object(E.addQueryArgs)(window.location.href,{[A]:e.join(",")});t!==window.location.href&&Object(S.c)(t)})(e))},[c,$,x]);Object(n.useEffect)(()=>{t.showFilterButton||ce(Y)},[t.showFilterButton,Y,ce]);const ne=Object(n.useMemo)(()=>J,[J]),re=Object(u.a)(ne),oe=Object(i.a)(re);Object(n.useEffect)(()=>{w()(oe,re)||w()(Y,re)||V(re)},[Y,re,oe]),Object(n.useEffect)(()=>{F||($(B),P(!0))},[$,F,P,B]);const se=Object(n.useCallback)(e=>{const t=e=>{const t=W.find(t=>t.value===e);return t?t.name:null},c=e=>{let{filterAdded:c,filterRemoved:n}=e;const s=c?t(c):null,a=n?t(n):null;s?Object(o.speak)(Object(r.sprintf)(
/* translators: %s stock statuses (for example: 'instock'...) */
Object(r.__)("%s filter added.","woo-gutenberg-products-block"),s)):a&&Object(o.speak)(Object(r.sprintf)(
/* translators: %s stock statuses (for example:'instock'...) */
Object(r.__)("%s filter removed.","woo-gutenberg-products-block"),a))},n=Y.includes(e);if(!te){const t=n?[]:[e];return c(n?{filterRemoved:e}:{filterAdded:e}),void V(t)}if(n){const t=Y.filter(t=>t!==e);return c({filterRemoved:e}),void V(t)}const s=[...Y,e].sort();c({filterAdded:e}),V(s)},[Y,te,W]);if(!H&&0===W.length)return _(!1),null;const ae="h"+t.headingLevel,le=!t.isPreview&&!Q.current||0===W.length,ue=!t.isPreview&&H;if(!Object(O.getSettingWithCoercion)("has_filterable_products",!1,y.a))return _(!1),null;const ie=te?!le&&Y.length<W.length:!le&&0===Y.length,be=Object(n.createElement)(ae,{className:"wc-block-stock-filter__title"},t.heading),de=le?Object(n.createElement)(p.a,null,be):be;return _(!0),Object(n.createElement)(n.Fragment,null,!c&&t.heading&&de,Object(n.createElement)("div",{className:N()("wc-block-stock-filter","style-"+t.displayStyle,{"is-loading":le})},"dropdown"===t.displayStyle?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(k.a,{key:G,className:N()(ee.className,{"single-selection":!te,"is-loading":le}),style:{...ee.style},suggestions:W.filter(e=>!Y.includes(e.value)).map(e=>e.value),disabled:le,placeholder:Object(r.__)("Select stock status","woo-gutenberg-products-block"),onChange:e=>{!te&&e.length>1&&(e=e.slice(-1)),e=e.map(e=>{const t=W.find(t=>t.value===e);return t?t.value:e});const t=Object(C.difference)(e,Y);if(1===t.length)return se(t[0]);const c=Object(C.difference)(Y,e);1===c.length&&se(c[0])},value:Y,displayTransform:e=>{const t=W.find(t=>t.value===e);return t?t.textLabel:e},saveTransform:L.a,messages:{added:Object(r.__)("Stock filter added.","woo-gutenberg-products-block"),removed:Object(r.__)("Stock filter removed.","woo-gutenberg-products-block"),remove:Object(r.__)("Remove stock filter.","woo-gutenberg-products-block"),__experimentalInvalid:Object(r.__)("Invalid stock filter.","woo-gutenberg-products-block")}}),ie&&Object(n.createElement)(s.a,{icon:a.a,size:30})):Object(n.createElement)(f.a,{className:"wc-block-stock-filter-list",options:W,checked:Y,onChange:se,isLoading:le,isDisabled:ue})),Object(n.createElement)("div",{className:"wc-block-stock-filter__actions"},Y.length>0&&!le&&Object(n.createElement)(m.a,{onClick:()=>{V([]),ce([])},screenReaderLabel:Object(r.__)("Reset stock filter","woo-gutenberg-products-block")}),t.showFilterButton&&Object(n.createElement)(j.a,{className:"wc-block-stock-filter__button",isLoading:le,disabled:le||ue,onClick:()=>ce(Y)})))}},20:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return r}));const n=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return n(e)&&t in e}},21:function(e,t,c){"use strict";var n=c(0),r=c(6),o=c.n(r);t.a=e=>{let t,{label:c,screenReaderLabel:r,wrapperElement:s,wrapperProps:a={}}=e;const l=null!=c,u=null!=r;return!l&&u?(t=s||"span",a={...a,className:o()(a.className,"screen-reader-text")},Object(n.createElement)(t,a,r)):(t=s||n.Fragment,l&&u&&c!==r?Object(n.createElement)(t,a,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},r)):Object(n.createElement)(t,a,c))}},228:function(e,t){},23:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"string"==typeof e},25:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0);const r=Object(n.createContext)("page"),o=()=>Object(n.useContext)(r);r.Provider},285:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(66),r=c(115),o=c(20),s=c(116);const a=e=>{if(!Object(r.a)())return{className:"",style:{}};const t=Object(o.a)(e)?e:{},c=Object(s.a)(t.style);return Object(n.__experimentalUseColorProps)({...t,style:c})}},30:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(0),r=c(13),o=c.n(r);function s(e){const t=Object(n.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},32:function(e,t,c){"use strict";c.d(t,"a",(function(){return b})),c.d(t,"b",(function(){return d})),c.d(t,"c",(function(){return O}));var n=c(3),r=c(7),o=c(0),s=c(13),a=c.n(s),l=c(30),u=c(64),i=c(25);const b=e=>{const t=Object(i.a)();e=e||t;const c=Object(r.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:s}=Object(r.useDispatch)(n.QUERY_STATE_STORE_KEY);return[c,Object(o.useCallback)(t=>{s(e,t)},[e,s])]},d=(e,t,c)=>{const s=Object(i.a)();c=c||s;const a=Object(r.useSelect)(r=>r(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(c,e,t),[c,e]),{setQueryValue:l}=Object(r.useDispatch)(n.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{l(c,e,t)},[c,e,l])]},O=(e,t)=>{const c=Object(i.a)();t=t||c;const[n,r]=b(t),s=Object(l.a)(n),d=Object(l.a)(e),O=Object(u.a)(d),f=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(O,d)||(r(Object.assign({},s,d)),f.current=!0)},[s,d,O,r]),f.current?[n,r]:[e,r]}},484:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(285),o=c(23),s=c(161),a=c(110);t.default=e=>{const t=Object(r.a)(e);return Object(n.createElement)("div",{className:Object(o.a)(e.className)?e.className:"",style:{...t.style}},Object(n.createElement)(s.a,{isEditor:!1,attributes:Object(a.d)(e)}))}},63:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(3),r=c(7),o=c(0),s=c(30),a=c(105);const l=e=>{const{namespace:t,resourceName:c,resourceValues:l=[],query:u={},shouldSelect:i=!0}=e;if(!t||!c)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(o.useRef)({results:[],isLoading:!0}),d=Object(s.a)(u),O=Object(s.a)(l),f=Object(a.a)(),j=Object(r.useSelect)(e=>{if(!i)return null;const r=e(n.COLLECTIONS_STORE_KEY),o=[t,c,d,O],s=r.getCollectionError(...o);if(s){if(!(s instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");f(s)}return{results:r.getCollection(...o),isLoading:!r.hasFinishedResolution("getCollection",o)}},[t,c,O,d,i]);return null!==j&&(b.current=j),b.current}},64:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(8);function r(e,t){const c=Object(n.useRef)();return Object(n.useEffect)(()=>{c.current===e||t&&!t(e,c.current)||(c.current=e)},[e,t]),c.current}},65:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(21);c(138),t.a=e=>{let{name:t,count:c}=e;return Object(n.createElement)(n.Fragment,null,t,null!==c&&Number.isFinite(c)&&Object(n.createElement)(o.a,{label:c.toString(),screenReaderLabel:Object(r.sprintf)(
/* translators: %s number of products. */
Object(r._n)("%s product","%s products",c,"woo-gutenberg-products-block"),c),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))}},69:function(e,t,c){"use strict";var n=c(0);c(102),t.a=e=>{let{children:t}=e;return Object(n.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},70:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(6),s=c.n(o),a=c(21);c(103),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
c=Object(r.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:l=Object(r.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{className:s()("wc-block-components-filter-reset-button",t),onClick:o},Object(n.createElement)(a.a,{label:c,screenReaderLabel:l}))}},71:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(6),s=c.n(o),a=c(21);c(104),t.a=e=>{let{className:t,isLoading:c,disabled:o,label:
/* translators: Submit button text for filters. */
l=Object(r.__)("Apply","woo-gutenberg-products-block"),onClick:u,screenReaderLabel:i=Object(r.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(n.createElement)("button",{type:"submit",className:s()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":c},t),disabled:o,onClick:u},Object(n.createElement)(a.a,{label:l,screenReaderLabel:i}))}},72:function(e,t,c){"use strict";c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return l})),c.d(t,"d",(function(){return u})),c.d(t,"c",(function(){return i}));var n=c(14),r=c(2),o=c(74);const s=Object(r.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),a="query_type_",l="filter_";function u(e){return window?Object(n.getQueryArg)(window.location.href,e):null}function i(e){s?window.location.href=e:window.history.replaceState({},"",e)}},74:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));const n=e=>"boolean"==typeof e},93:function(e,t,c){"use strict";var n=c(15),r=c.n(n),o=c(0),s=c(130),a=c(6),l=c.n(a);c(117),t.a=e=>{let{className:t,style:c,suggestions:n,multiple:a=!0,saveTransform:u=(e=>e.trim().replace(/\s/g,"-")),messages:i={},validateInput:b=(e=>n.includes(e)),label:d="",...O}=e;return Object(o.createElement)("div",{className:l()("wc-blocks-components-form-token-field-wrapper",t,{"single-selection":!a}),style:c},Object(o.createElement)(s.a,r()({label:d,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:b,saveTransform:u,maxLength:a?void 0:1,suggestions:n,messages:i},O)))}},94:function(e,t,c){"use strict";var n=c(0),r=c(1),o=c(6),s=c.n(o),a=c(11);c(118),t.a=e=>{let{className:t,onChange:c,options:o=[],checked:l=[],isLoading:u=!1,isDisabled:i=!1,limit:b=10}=e;const[d,O]=Object(n.useState)(!1),f=Object(n.useMemo)(()=>[...Array(5)].map((e,t)=>Object(n.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),j=Object(n.useMemo)(()=>{const e=o.length-b;return!d&&Object(n.createElement)("li",{key:"show-more",className:"show-more"},Object(n.createElement)("button",{onClick:()=>{O(!0)},"aria-expanded":!1,"aria-label":Object(r.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(r._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(r.sprintf)(
/* translators: %s number of options to reveal. */
Object(r._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[o,b,d]),m=Object(n.useMemo)(()=>d&&Object(n.createElement)("li",{key:"show-less",className:"show-less"},Object(n.createElement)("button",{onClick:()=>{O(!1)},"aria-expanded":!0,"aria-label":Object(r.__)("Show less options","woo-gutenberg-products-block")},Object(r.__)("Show less","woo-gutenberg-products-block"))),[d]),p=Object(n.useMemo)(()=>{const e=o.length>b+5;return Object(n.createElement)(n.Fragment,null,o.map((t,r)=>Object(n.createElement)(n.Fragment,{key:t.value},Object(n.createElement)("li",e&&!d&&r>=b&&{hidden:!0},Object(n.createElement)(a.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:l.includes(t.value),onChange:()=>{c(t.value)},disabled:i})),e&&r===b-1&&j)),e&&m)},[o,c,l,d,b,m,j,i]),g=s()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":u},t);return Object(n.createElement)("ul",{className:g},u?f:p)}}}]);