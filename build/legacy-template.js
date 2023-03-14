this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["legacy-template"]=function(e){function t(t){for(var c,i,l=t[0],u=t[1],s=t[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);for(a&&a(t);d.length;)d.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],c=!0,l=1;l<o.length;l++){var u=o[l];0!==r[u]&&(c=!1)}c&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var c={},r={18:0},n=[];function i(t){if(c[t])return c[t].exports;var o=c[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=c,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(o,c,function(t){return e[t]}.bind(null,c));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var a=u;return n.push([453,0]),o()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},108:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return s}));var c=o(0),r=o(3),n=o(1),i=o(318),l=o(95);const u="core/post-template",s="woocommerce/product-query/product-template";Object(l.a)(u,{blockDescription:Object(n.__)("Contains the block elements used to render a product, like its name, featured image, rating, and more.","woo-gutenberg-products-block"),blockIcon:Object(c.createElement)(r.Icon,{icon:i.a}),blockTitle:Object(n.__)("Product template","woo-gutenberg-products-block"),variationName:s})},109:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return s}));var c=o(0),r=o(3),n=o(83),i=o(196),l=o(95);const u="core/post-title",s="woocommerce/product-query/product-title";Object(l.a)(u,{blockDescription:n.a,blockIcon:Object(c.createElement)(r.Icon,{icon:i.a}),blockTitle:n.c,variationName:s})},11:function(e,t){e.exports=window.wp.primitives},187:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));var c=o(0),r=o(8),n=o(3),i=o(1),l=o(194),u=o(2),s=o(7),a=o(41);const p="woocommerce/product-query",d=["woocommerce/woocommerce//archive-product","woocommerce/woocommerce//taxonomy-product_cat","woocommerce/woocommerce//taxonomy-product_tag","woocommerce/woocommerce//taxonomy-product_attribute","woocommerce/woocommerce//product-search-results"],b=e=>{Object(r.registerBlockVariation)(a.f,{description:Object(i.__)("A block that displays a selection of products in your store.","woo-gutenberg-products-block"),name:p,
/* translators: “Products“ is the name of the block. */
title:Object(i.__)("Products (Beta)","woo-gutenberg-products-block"),isActive:e=>e.namespace===p,icon:Object(c.createElement)(n.Icon,{icon:l.a,className:"wc-block-editor-components-block-icon wc-block-editor-components-block-icon--stacks"}),attributes:{...e,namespace:p},allowedControls:a.b,innerBlocks:a.d,scope:["inserter"]})};if(Object(u.isWpVersion)("6.1",">=")){const e=Object(s.select)("core/edit-site");if(e){let t;Object(s.subscribe)(()=>{const o=t;if(t=null==e?void 0:e.getEditedPostId(),o===t)return;const c={...a.e,query:{...a.e.query,inherit:d.includes(t)}};Object(r.unregisterBlockVariation)(a.f,p),b(c)})}else b(a.e)}},19:function(e,t,o){"use strict";o.d(t,"o",(function(){return n})),o.d(t,"m",(function(){return i})),o.d(t,"l",(function(){return l})),o.d(t,"n",(function(){return u})),o.d(t,"j",(function(){return s})),o.d(t,"e",(function(){return a})),o.d(t,"g",(function(){return p})),o.d(t,"k",(function(){return d})),o.d(t,"c",(function(){return b})),o.d(t,"d",(function(){return m})),o.d(t,"h",(function(){return g})),o.d(t,"a",(function(){return f})),o.d(t,"i",(function(){return k})),o.d(t,"b",(function(){return w})),o.d(t,"f",(function(){return y}));var c,r=o(2);const n=Object(r.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=n.pluginUrl+"images/",l=n.pluginUrl+"build/",u=n.buildPhase,s=null===(c=r.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,a=r.STORE_PAGES.checkout.id,p=(r.STORE_PAGES.checkout.permalink,r.STORE_PAGES.privacy.permalink),d=(r.STORE_PAGES.privacy.title,r.STORE_PAGES.terms.permalink),b=(r.STORE_PAGES.terms.title,r.STORE_PAGES.cart.id),m=r.STORE_PAGES.cart.permalink,g=(r.STORE_PAGES.myaccount.permalink?r.STORE_PAGES.myaccount.permalink:Object(r.getSetting)("wpLoginUrl","/wp-login.php"),Object(r.getSetting)("shippingCountries",{})),f=Object(r.getSetting)("allowedCountries",{}),k=Object(r.getSetting)("shippingStates",{}),w=Object(r.getSetting)("allowedStates",{}),y=Object(r.getSetting)("localPickupEnabled",!1)},194:function(e,t,o){"use strict";var c=o(0),r=o(11);const n=Object(c.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 19.375L4.5 7.625C4.5 7.55596 4.55596 7.5 4.625 7.5L16.375 7.5C16.444 7.5 16.5 7.55596 16.5 7.625L16.5 19.375C16.5 19.444 16.444 19.5 16.375 19.5L4.625 19.5C4.55596 19.5 4.5 19.444 4.5 19.375ZM4.625 21C3.72754 21 3 20.2725 3 19.375L3 7.625C3 6.72754 3.72754 6 4.625 6L16.375 6C17.2725 6 18 6.72754 18 7.625L18 19.375C18 20.2725 17.2725 21 16.375 21L4.625 21ZM19 3.75L8 3.75L8 2.25L19 2.25C20.5183 2.25 21.75 3.4796 21.75 4.99891L21.75 18L20.25 18L20.25 4.99891C20.25 4.30909 19.6909 3.75 19 3.75Z"}));t.a=n},2:function(e,t){e.exports=window.wc.wcSettings},3:function(e,t){e.exports=window.wp.components},41:function(e,t,o){"use strict";o.d(t,"c",(function(){return i})),o.d(t,"f",(function(){return l})),o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return s})),o.d(t,"g",(function(){return a})),o.d(t,"e",(function(){return d})),o.d(t,"d",(function(){return b}));var c=o(2),r=o(109),n=o(108);const i="/wp-admin/edit.php?post_type=product&page=product_attributes",l="core/query",u=["attributes","presets","onSale","stockStatus","wooInherit"],s=["taxQuery","search",...u],a=Object(c.getSetting)("stockStatusOptions",[]),p=Object(c.getSetting)("hideOutOfStockItems",!1),d={allowedControls:s,displayLayout:{type:"flex",columns:3},query:{perPage:9,pages:0,offset:0,postType:"product",order:"asc",orderBy:"title",author:"",search:"",exclude:[],sticky:"",inherit:!1,__woocommerceAttributes:[],__woocommerceStockStatus:p?Object.keys(function(e,t){const{[t]:o,...c}=e;return c}(a,"outofstock")):Object.keys(a)}},b=[["core/post-template",{__woocommerceNamespace:n.b},[["woocommerce/product-image",{style:{spacing:{margin:{bottom:"0.75rem",top:"0"}}}}],["core/post-title",{textAlign:"center",level:3,fontSize:"medium",style:{spacing:{margin:{bottom:"0.75rem",top:"0"}}},isLink:!0,__woocommerceNamespace:r.b},[]],["woocommerce/product-price",{textAlign:"center",fontSize:"small",style:{spacing:{margin:{bottom:"0.75rem",top:"0"}}}},[]],["woocommerce/product-button",{textAlign:"center",fontSize:"small",style:{spacing:{margin:{bottom:"0.75rem",top:"0"}}}},[]]]],["core/query-pagination",{layout:{type:"flex",justifyContent:"center"}},[]],["core/query-no-results"]]},453:function(e,t,o){e.exports=o(507)},454:function(e,t){},455:function(e,t){},5:function(e,t){e.exports=window.wp.blockEditor},507:function(e,t,o){"use strict";o.r(t);var c={};o.r(c),o.d(c,"getBlockifiedTemplate",(function(){return T})),o.d(c,"isConversionPossible",(function(){return x})),o.d(c,"getDescription",(function(){return C})),o.d(c,"getButtonLabel",(function(){return A}));var r={};o.r(r),o.d(r,"getBlockifiedTemplate",(function(){return L})),o.d(r,"isConversionPossible",(function(){return q})),o.d(r,"getDescription",(function(){return I})),o.d(r,"getButtonLabel",(function(){return N}));var n=o(0),i=o(8),l=o(56),u=o(19),s=o(5),a=o(3),p=o(1),d=o(555),b=o(80),m=o(7);o(454),o(455);const g="woocommerce/legacy-template",f={"single-product":{type:"single-product",title:Object(p.__)("WooCommerce Single Product Block","woo-gutenberg-products-block"),placeholder:"single-product"},"archive-product":{type:"product-catalog",title:Object(p.__)("WooCommerce Product Grid Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"taxonomy-product_cat":{type:"product-taxonomy",title:Object(p.__)("WooCommerce Product Taxonomy Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"taxonomy-product_tag":{type:"product-taxonomy",title:Object(p.__)("WooCommerce Product Tag Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"taxonomy-product_attribute":{type:"product-taxonomy",title:Object(p.__)("WooCommerce Product Attribute Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"product-search-results":{type:"product-search-results",title:Object(p.__)("WooCommerce Product Search Results Block","woo-gutenberg-products-block"),placeholder:"archive-product"}};function k(e,t){const o=Object.keys(t);let c=null;for(let r=0;o.length>r;r++){const n=t[e.substr(0,o[r].length)];if(n){c=n;break}}return c}function w(e,t){return!!k(e,t)}const y=(e,t)=>{var o;const c=((null===(o=Object(i.getBlockType)("core/query-title"))||void 0===o?void 0:o.variations)||[]).find(t=>{let{name:o}=t;return o===e});if(!c)return null;const{attributes:r}=c,n={...r,...t,showPrefix:!1};return Object(i.createBlock)("core/query-title",n)},O=(e,t)=>{var o;const c=((null===(o=Object(i.getBlockType)("core/group"))||void 0===o?void 0:o.variations)||[]).find(e=>{let{name:t}=e;return"group-row"===t});if(!c)return null;const{attributes:r}=c,n={...r,...t,layout:{...r.layout,justifyContent:"space-between"}};return Object(i.createBlock)("core/group",n,e)};var j=o(2),h=o(41),v=o(187);const _=(e,t)=>{const o=[...t,...Object(i.createBlocksFromInnerBlocksTemplate)(h.d)];return Object(i.createBlock)("core/query",{...h.e,...e,namespace:v.a,query:{...h.e.query,inherit:!0}},o)},B=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const o=[Object(i.createBlock)("woocommerce/breadcrumbs",e),y("archive-title",e),t?Object(i.createBlock)("core/term-description",e):null,Object(i.createBlock)("woocommerce/store-notices",e),O([Object(i.createBlock)("woocommerce/product-results-count"),Object(i.createBlock)("woocommerce/catalog-sorting")],e)].filter(Boolean);return _(e,o)},S=()=>Object(j.isWpVersion)("6.1",">="),P=(e,t)=>t?(e=>Object(p.sprintf)(
/* translators: %s is the template title */
Object(p.__)("This block serves as a placeholder for your %s. We recommend upgrading to the Products block for more features to edit your products visually. Don't worry, you can always revert back.","woo-gutenberg-products-block"),e))(e):(e=>Object(p.sprintf)(
/* translators: %s is the template title */
Object(p.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woo-gutenberg-products-block"),e))(e),E=()=>Object(p.__)("Upgrade to Products block","woo-gutenberg-products-block"),T=()=>[],x=()=>!1,C=(e,t)=>t?"":(e=>Object(p.sprintf)(
/* translators: %s is the template title */
Object(p.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woo-gutenberg-products-block"),e))(e),A=()=>"",L=e=>((e,t)=>{const o=((e,t)=>{const o=[Object(i.createBlock)("core/paragraph",{content:Object(p.__)("No products were found matching your selection.","woo-gutenberg-products-block")}),Object(i.createBlock)("core/search",{buttonPosition:"button-outside",buttonText:Object(p.__)("Search","woo-gutenberg-products-block"),buttonUseIcon:!1,showLabel:!1,placeholder:Object(p.__)("Search products…","woo-gutenberg-products-block"),query:{post_type:"product"}})],c=e.findIndex(e=>"core/query-no-results"===e[0]),r=["core/query-no-results",{...e[c][1]||{},...t},o];return[...h.d.slice(0,c),r,...h.d.slice(c+1)]})(h.d,e),c=[...t,...Object(i.createBlocksFromInnerBlocksTemplate)(o)];return Object(i.createBlock)("core/query",{...h.e,...e,namespace:v.a,query:{...h.e.query,inherit:!0}},c)})(e,[y("search-title",e),Object(i.createBlock)("woocommerce/store-notices",e),O([Object(i.createBlock)("woocommerce/product-results-count"),Object(i.createBlock)("woocommerce/catalog-sorting")],e)].filter(Boolean)),q=()=>Object(j.isWpVersion)("6.1",">="),I=(e,t)=>t?(e=>Object(p.sprintf)(
/* translators: %s is the template title */
Object(p.__)("This block serves as a placeholder for your %s. We recommend upgrading to the Products block for more features to edit your products visually. Don't worry, you can always revert back.","woo-gutenberg-products-block"),e))(e):(e=>Object(p.sprintf)(
/* translators: %s is the template title */
Object(p.__)("This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.","woo-gutenberg-products-block"),e))(e),N=()=>Object(p.__)("Upgrade to Products block","woo-gutenberg-products-block"),R={"product-catalog":{getBlockifiedTemplate:B,isConversionPossible:S,getDescription:P,getButtonLabel:E},"product-taxonomy":{getBlockifiedTemplate:e=>B(e,!0),isConversionPossible:S,getDescription:P,getButtonLabel:E},"single-product":c,"product-search-results":r,fallback:{isConversionPossible:()=>!1,getBlockifiedTemplate:()=>[],getDescription:()=>"",getButtonLabel:()=>""}},W=e=>{var t,o,c;let{clientId:r,attributes:i,setAttributes:p}=e;const{replaceBlock:b}=Object(m.useDispatch)("core/block-editor"),g=Object(s.useBlockProps)(),w=k(i.template,f),y=null!==(t=null==w?void 0:w.title)&&void 0!==t?t:i.template,O=null!==(o=null==w?void 0:w.placeholder)&&void 0!==o?o:"fallback",j=null!==(c=null==w?void 0:w.type)&&void 0!==c?c:"fallback";Object(n.useEffect)(()=>{var e;return p({template:i.template,align:null!==(e=i.align)&&void 0!==e?e:"wide"})},[i.align,i.template,p]);const{getBlockifiedTemplate:h,isConversionPossible:v,getDescription:_,getButtonLabel:B}=R[j],S=Object(l.a)()&&v(),P=_(y,S);return Object(n.createElement)("div",g,Object(n.createElement)(a.Placeholder,{icon:d.a,label:y,className:"wp-block-woocommerce-classic-template__placeholder"},Object(n.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-copy"},Object(n.createElement)("p",null,P)),Object(n.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-wireframe"},S&&Object(n.createElement)("div",{className:"wp-block-woocommerce-classic-template__placeholder-migration-button-container"},Object(n.createElement)(a.Button,{isPrimary:!0,onClick:()=>{b(r,h(i))},text:B()})),Object(n.createElement)("img",{className:"wp-block-woocommerce-classic-template__placeholder-image",src:`${u.m}template-placeholders/${O}.svg`,alt:y}))))},G=e=>{let{template:t,inserter:o}=e;Object(i.registerBlockType)(g,{title:t&&f[t]?f[t].title:Object(p.__)("WooCommerce Classic Template","woo-gutenberg-products-block"),icon:Object(n.createElement)(b.a,{icon:d.a,className:"wc-block-editor-components-block-icon"}),category:"woocommerce",apiVersion:2,keywords:[Object(p.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(p.__)("Renders classic WooCommerce PHP templates.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1,multiple:!1,reusable:!1,inserter:o},attributes:{template:{type:"string",default:"any"},align:{type:"string",default:"wide"}},edit:e=>{let{attributes:o,clientId:c,setAttributes:r}=e;const i=null!=t?t:o.template;return Object(n.createElement)(W,{attributes:{...o,template:i},setAttributes:r,clientId:c})},save:()=>null})};let D;Object(l.a)()?Object(m.subscribe)(()=>{var e;const t=D,o=Object(m.select)("core/edit-site");if(D=null==o?void 0:o.getEditedPostId(),t===D)return;const c=null===(e=D)||void 0===e?void 0:e.split("//")[1];if(null==c)return;const r=Object(i.getBlockType)(g);if(void 0!==r&&(!w(c,f)||function(e,t){const o=k(t,f);return(null==e?void 0:e.title)!==(null==o?void 0:o.title)}(r,c)))return Object(i.unregisterBlockType)(g),void(D=void 0);void 0===r&&w(c,f)&&G({template:c,inserter:!0})}):G({inserter:!1})},56:function(e,t,o){"use strict";o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return l}));var c=o(8),r=o(19);const n=(e,t)=>{if(r.n>2)return Object(c.registerBlockType)(e,t)},i=()=>r.n>2,l=()=>r.n>1},7:function(e,t){e.exports=window.wp.data},8:function(e,t){e.exports=window.wp.blocks},83:function(e,t,o){"use strict";o.d(t,"c",(function(){return l})),o.d(t,"b",(function(){return u})),o.d(t,"a",(function(){return s}));var c=o(0),r=o(1),n=o(80),i=o(196);const l=Object(r.__)("Product Title","woo-gutenberg-products-block"),u=Object(c.createElement)(n.a,{icon:i.a,className:"wc-block-editor-components-block-icon"}),s=Object(r.__)("Display the title of a product.","woo-gutenberg-products-block")},95:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var c=o(8);function r(e,t){let{blockDescription:o,blockIcon:r,blockTitle:n,variationName:i}=t;Object(c.registerBlockVariation)(e,{description:o,name:i,title:n,isActive:e=>e.__woocommerceNamespace===i,icon:{src:r},attributes:{__woocommerceNamespace:i},scope:["block","inserter"]})}}});