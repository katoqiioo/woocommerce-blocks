this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["single-product"]=function(e){function t(t){for(var c,a,s=t[0],l=t[1],i=t[2],d=0,m=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,i||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],c=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(c=!1)}c&&(n.splice(t--,1),e=a(a.s=r[0]))}return e}var c={},o={48:0},n=[];function a(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,c){r=o[e]=[t,c]}));t.push(r[2]=c);var n,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=function(e){return a.p+""+({1:"product-add-to-cart--product-button--product-category-list--product-image--product-price--product-r--a0326d00",2:"product-button--product-category-list--product-image--product-price--product-rating--product-sale-b--e17c7c01",3:"product-button--product-image--product-price--product-rating--product-sale-badge--product-title",4:"product-add-to-cart--product-button--product-image--product-rating--product-title",22:"product-add-to-cart",24:"product-button",27:"product-category-list",28:"product-image",31:"product-price",33:"product-rating",35:"product-sale-badge",37:"product-sku",38:"product-stock-indicator",39:"product-summary",41:"product-tag-list",42:"product-title"}[e]||e)+".js?ver="+{1:"2290b55f47c45f24b676",2:"04db5f2f16e33b3e233c",3:"7951ee4981f8fe50c1ed",4:"df12e44ec3a6110defd8",22:"8bd586db8c4b9617c7d5",24:"9e88fbeea59db9572e81",27:"b6bcecdae7e7aa163044",28:"f4232db03206bd706608",31:"350566cd8a464ad4b605",33:"8a346062ef06a2228000",35:"e16c35f3f3fa8707f6d8",37:"e629ed1146b3f695b460",38:"b99d18536aac1b18fc04",39:"bc042523bf90116bc855",41:"bbcc8034ab3d68c775ed",42:"173a4c412b94e0e6823d"}[e]}(e);var l=new Error;n=function(t){s.onerror=s.onload=null,clearTimeout(i);var r=o[e];if(0!==r){if(r){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",l.name="ChunkLoadError",l.type=c,l.request=n,r[1](l)}o[e]=void 0}};var i=setTimeout((function(){n({type:"timeout",target:s})}),12e4);s.onerror=s.onload=n,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=c,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(r,c,function(t){return e[t]}.bind(null,c));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var s=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;return n.push([488,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wc.wcBlocksData},100:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var c=r(6),o=r.n(c),n=r(0),a=r(1),s=r(3),l=r(80),i=r(547),u=r(4),d=r.n(u),m=r(12),p=r(18),b=r(37),g=r(546),h=r(17);const w=e=>{let{id:t,label:r,popoverContents:c,remove:o,screenReaderLabel:i,className:u=""}=e;const[p,b]=Object(n.useState)(!1),O=Object(m.useInstanceId)(w);if(i=i||r,!r)return null;r=Object(h.decodeEntities)(r);const j=d()("woocommerce-tag",u,{"has-remove":!!o}),f="woocommerce-tag__label-"+O,E=Object(n.createElement)(n.Fragment,null,Object(n.createElement)("span",{className:"screen-reader-text"},i),Object(n.createElement)("span",{"aria-hidden":"true"},r));return Object(n.createElement)("span",{className:j},c?Object(n.createElement)(s.Button,{className:"woocommerce-tag__text",id:f,onClick:()=>b(!0)},E):Object(n.createElement)("span",{className:"woocommerce-tag__text",id:f},E),c&&p&&Object(n.createElement)(s.Popover,{onClose:()=>b(!1)},c),o&&Object(n.createElement)(s.Button,{className:"woocommerce-tag__remove",onClick:o(t),label:Object(a.sprintf)(// Translators: %s label.
Object(a.__)("Remove %s","woo-gutenberg-products-block"),r),"aria-describedby":f},Object(n.createElement)(l.a,{icon:g.a,size:20,className:"clear-icon"})))};var O=w;const j=e=>Object(n.createElement)(b.b,e),f=e=>{const{list:t,selected:r,renderItem:c,depth:a=0,onSelect:s,instanceId:l,isSingle:i,search:u,useExpandedPanelId:d}=e,[m]=d;return t?Object(n.createElement)(n.Fragment,null,t.map(t=>{var p,b;const g=null!==(p=t.children)&&void 0!==p&&p.length&&!i?t.children.every(e=>{let{id:t}=e;return r.find(e=>e.id===t)}):!!r.find(e=>{let{id:r}=e;return r===t.id}),h=(null===(b=t.children)||void 0===b?void 0:b.length)&&m===t.id;return Object(n.createElement)(n.Fragment,{key:t.id},Object(n.createElement)("li",null,c({item:t,isSelected:g,onSelect:s,isSingle:i,selected:r,search:u,depth:a,useExpandedPanelId:d,controlId:l})),h?Object(n.createElement)(f,o()({},e,{list:t.children,depth:a+1})):null)})):null},E=e=>{let{isLoading:t,isSingle:r,selected:c,messages:o,onChange:l,onRemove:i}=e;if(t||r||!c)return null;const u=c.length;return Object(n.createElement)("div",{className:"woocommerce-search-list__selected"},Object(n.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(n.createElement)("strong",null,o.selected(u)),u>0?Object(n.createElement)(s.Button,{isLink:!0,isDestructive:!0,onClick:()=>l([]),"aria-label":o.clear},Object(a.__)("Clear all","woo-gutenberg-products-block")):null),u>0?Object(n.createElement)("ul",null,c.map((e,t)=>Object(n.createElement)("li",{key:t},Object(n.createElement)(O,{label:e.name,id:e.id,remove:i})))):null)},k=e=>{let{filteredList:t,search:r,onSelect:c,instanceId:o,useExpandedPanelId:s,...u}=e;const{messages:d,renderItem:m,selected:p,isSingle:b}=u,g=m||j;return 0===t.length?Object(n.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(n.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(n.createElement)(l.a,{icon:i.a})),Object(n.createElement)("span",{className:"woocommerce-search-list__not-found-text"},r?Object(a.sprintf)(d.noResults,r):d.noItems)):Object(n.createElement)("ul",{className:"woocommerce-search-list__list"},Object(n.createElement)(f,{useExpandedPanelId:s,list:t,selected:p,renderItem:g,onSelect:c,instanceId:o,isSingle:b,search:r}))},_=e=>{const{className:t="",isCompact:r,isHierarchical:c,isLoading:l,isSingle:i,list:u,messages:b=p.a,onChange:g,onSearch:h,selected:w,type:O="text",debouncedSpeak:j}=e,[f,v]=Object(n.useState)(""),y=Object(n.useState)(-1),S=Object(m.useInstanceId)(_),P=Object(n.useMemo)(()=>({...p.a,...b}),[b]),x=Object(n.useMemo)(()=>Object(p.c)(u,f,c),[u,f,c]);Object(n.useEffect)(()=>{j&&j(P.updated)},[j,P]),Object(n.useEffect)(()=>{"function"==typeof h&&h(f)},[f,h]);const C=Object(n.useCallback)(e=>()=>{i&&g([]);const t=w.findIndex(t=>{let{id:r}=t;return r===e});g([...w.slice(0,t),...w.slice(t+1)])},[i,w,g]),N=Object(n.useCallback)(e=>()=>{Array.isArray(e)?g(e):-1===w.findIndex(t=>{let{id:r}=t;return r===e.id})?g(i?[e]:[...w,e]):C(e.id)()},[i,C,g,w]),I=Object(n.useCallback)(e=>{const[t]=w.filter(t=>!e.find(e=>t.id===e.id));C(t.id)()},[C,w]);return Object(n.createElement)("div",{className:d()("woocommerce-search-list",t,{"is-compact":r,"is-loading":l,"is-token":"token"===O})},"text"===O&&Object(n.createElement)(E,o()({},e,{onRemove:C,messages:P})),Object(n.createElement)("div",{className:"woocommerce-search-list__search"},"text"===O?Object(n.createElement)(s.TextControl,{label:P.search,type:"search",value:f,onChange:e=>v(e)}):Object(n.createElement)(s.FormTokenField,{disabled:l,label:P.search,onChange:I,onInputChange:e=>v(e),suggestions:[],__experimentalValidateInput:()=>!1,value:l?[Object(a.__)("Loading…","woo-gutenberg-products-block")]:w.map(e=>({...e,value:e.name})),__experimentalShowHowTo:!1})),l?Object(n.createElement)("div",{className:"woocommerce-search-list__list"},Object(n.createElement)(s.Spinner,null)):Object(n.createElement)(k,o()({},e,{search:f,filteredList:x,messages:P,onSelect:N,instanceId:S,useExpandedPanelId:y})))};Object(s.withSpokenMessages)(_)},101:function(e,t){e.exports=window.wp.warning},11:function(e,t){e.exports=window.wp.primitives},112:function(e,t,r){"use strict";var c=r(0),o=r(1),n=r(80),a=r(241),s=r(2),l=r(5),i=r(21);t.a=e=>{const t=(Object(i.useProductDataContext)().product||{}).id||e.productId||0;return t?Object(c.createElement)(l.InspectorControls,null,Object(c.createElement)("div",{className:"wc-block-single-product__edit-card"},Object(c.createElement)("div",{className:"wc-block-single-product__edit-card-title"},Object(c.createElement)("a",{href:`${s.ADMIN_URL}post.php?post=${t}&action=edit`,target:"_blank",rel:"noopener noreferrer"},Object(o.__)("Edit this product's details","woo-gutenberg-products-block"),Object(c.createElement)(n.a,{icon:a.a,size:16}))),Object(c.createElement)("div",{className:"wc-block-single-product__edit-card-description"},Object(o.__)("Edit details such as title, price, description and more.","woo-gutenberg-products-block")))):null}},12:function(e,t){e.exports=window.wp.compose},124:function(e,t){},13:function(e,t){e.exports=window.wc.blocksCheckout},14:function(e,t){e.exports=window.wp.apiFetch},140:function(e,t,r){"use strict";var c=r(23),o=r.n(c),n=r(0),a=r(1),s=r(19),l=e=>{let{imageUrl:t=s.m+"/block-error.svg",header:r=Object(a.__)("Oops!","woo-gutenberg-products-block"),text:c=Object(a.__)("There was an error loading the content.","woo-gutenberg-products-block"),errorMessage:o,errorMessagePrefix:l=Object(a.__)("Error:","woo-gutenberg-products-block"),button:i,showErrorBlock:u=!0}=e;return u?Object(n.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&Object(n.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),Object(n.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},r&&Object(n.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},r),c&&Object(n.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},c),o&&Object(n.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},l?l+" ":"",o),i&&Object(n.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},i))):null};r(218);class i extends n.Component{constructor(){super(...arguments),o()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(n.createElement)(n.Fragment,null,Object(n.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}render(){const{header:e,imageUrl:t,showErrorMessage:r=!0,showErrorBlock:c=!0,text:o,errorMessagePrefix:a,renderError:s,button:i}=this.props,{errorMessage:u,hasError:d}=this.state;return d?"function"==typeof s?s({errorMessage:u}):Object(n.createElement)(l,{showErrorBlock:c,errorMessage:r?u:null,header:e,imageUrl:t,text:o,errorMessagePrefix:a,button:i}):this.props.children}}t.a=i},147:function(e,t){},16:function(e,t){e.exports=window.wp.url},17:function(e,t){e.exports=window.wp.htmlEntities},18:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return u}));var c=r(0),o=r(9),n=r(1);const a={clear:Object(n.__)("Clear all selected items","woo-gutenberg-products-block"),noItems:Object(n.__)("No items found.","woo-gutenberg-products-block"),
/* Translators: %s search term */
noResults:Object(n.__)("No results for %s","woo-gutenberg-products-block"),search:Object(n.__)("Search for items","woo-gutenberg-products-block"),selected:e=>Object(n.sprintf)(
/* translators: Number of items selected from list. */
Object(n._n)("%d item selected","%d items selected",e,"woo-gutenberg-products-block"),e),updated:Object(n.__)("Search results updated.","woo-gutenberg-products-block")},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const r=Object(o.groupBy)(e,"parent"),c=Object(o.keyBy)(t,"id"),n=["0"],a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.parent)return e.name?[e.name]:[];const t=a(c[e.parent]);return[...t,e.name]},s=e=>e.map(e=>{const t=r[e.id];return n.push(""+e.id),{...e,breadcrumbs:a(c[e.parent]),children:t&&t.length?s(t):[]}}),l=s(r[0]||[]);return Object.entries(r).forEach(e=>{let[t,r]=e;n.includes(t)||l.push(...s(r||[]))}),l},l=(e,t,r)=>{if(!t)return r?s(e):e;const c=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),o=e.map(e=>!!c.test(e.name)&&e).filter(Boolean);return r?s(o,e):o},i=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map((e,t)=>r.test(e)?Object(c.createElement)("strong",{key:t},e):Object(c.createElement)(c.Fragment,{key:t},e))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},19:function(e,t,r){"use strict";r.d(t,"o",(function(){return n})),r.d(t,"m",(function(){return a})),r.d(t,"l",(function(){return s})),r.d(t,"n",(function(){return l})),r.d(t,"j",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"g",(function(){return d})),r.d(t,"k",(function(){return m})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"h",(function(){return g})),r.d(t,"a",(function(){return h})),r.d(t,"i",(function(){return w})),r.d(t,"b",(function(){return O})),r.d(t,"f",(function(){return j}));var c,o=r(2);const n=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),a=n.pluginUrl+"images/",s=n.pluginUrl+"build/",l=n.buildPhase,i=null===(c=o.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,u=o.STORE_PAGES.checkout.id,d=(o.STORE_PAGES.checkout.permalink,o.STORE_PAGES.privacy.permalink),m=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),p=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id),b=o.STORE_PAGES.cart.permalink,g=(o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),Object(o.getSetting)("shippingCountries",{})),h=Object(o.getSetting)("allowedCountries",{}),w=Object(o.getSetting)("shippingStates",{}),O=Object(o.getSetting)("allowedStates",{}),j=Object(o.getSetting)("localPickupEnabled",!1)},2:function(e,t){e.exports=window.wc.wcSettings},202:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(0),a=r(19),s=r(27),l=r(123),i=r(31);t.a=e=>t=>{let{selected:r,...c}=t;const[u,d]=Object(n.useState)(!0),[m,p]=Object(n.useState)(null),[b,g]=Object(n.useState)([]),h=a.o.productCount>100,w=async e=>{const t=await Object(i.a)(e);p(t),d(!1)},O=Object(n.useRef)(r);Object(n.useEffect)(()=>{Object(s.h)({selected:O.current}).then(e=>{g(e),d(!1)}).catch(w)},[O]);const j=Object(l.a)(e=>{Object(s.h)({selected:r,search:e}).then(e=>{g(e),d(!1)}).catch(w)},400),f=Object(n.useCallback)(e=>{d(!0),j(e)},[d,j]);return Object(n.createElement)(e,o()({},c,{selected:r,error:m,products:b,isLoading:u,onSearch:h?f:null}))}},21:function(e,t){e.exports=window.wc.wcBlocksSharedContext},218:function(e,t){},22:function(e,t){e.exports=window.wc.priceFormat},26:function(e,t){e.exports=window.wp.isShallowEqual},27:function(e,t,r){"use strict";r.d(t,"h",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"b",(function(){return d})),r.d(t,"i",(function(){return m})),r.d(t,"f",(function(){return p})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return g})),r.d(t,"g",(function(){return h})),r.d(t,"a",(function(){return w}));var c=r(16),o=r(14),n=r.n(o),a=r(9),s=r(2),l=r(19);const i=e=>{let{selected:t=[],search:r="",queryArgs:o={}}=e;const s=(e=>{let{selected:t=[],search:r="",queryArgs:o={}}=e;const n=l.o.productCount>100,a={per_page:n?100:0,catalog_visibility:"any",search:r,orderby:"title",order:"asc"},s=[Object(c.addQueryArgs)("/wc/store/v1/products",{...a,...o})];return n&&t.length&&s.push(Object(c.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:t,per_page:0})),s})({selected:t,search:r,queryArgs:o});return Promise.all(s.map(e=>n()({path:e}))).then(e=>Object(a.uniqBy)(Object(a.flatten)(e),"id").map(e=>({...e,parent:0}))).catch(e=>{throw e})},u=e=>n()({path:"/wc/store/v1/products/"+e}),d=()=>n()({path:"wc/store/v1/products/attributes"}),m=e=>n()({path:`wc/store/v1/products/attributes/${e}/terms`}),p=e=>{let{selected:t=[],search:r}=e;const o=(e=>{let{selected:t=[],search:r}=e;const o=Object(s.getSetting)("limitTags",!1),n=[Object(c.addQueryArgs)("wc/store/v1/products/tags",{per_page:o?100:0,orderby:o?"count":"name",order:o?"desc":"asc",search:r})];return o&&t.length&&n.push(Object(c.addQueryArgs)("wc/store/v1/products/tags",{include:t})),n})({selected:t,search:r});return Promise.all(o.map(e=>n()({path:e}))).then(e=>Object(a.uniqBy)(Object(a.flatten)(e),"id"))},b=e=>n()({path:Object(c.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),g=e=>n()({path:"wc/store/v1/products/categories/"+e}),h=e=>n()({path:Object(c.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),w=(e,t)=>{if(!e.title.raw)return e.slug;const r=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(r?"":" - "+e.slug)}},28:function(e,t){e.exports=window.React},3:function(e,t){e.exports=window.wp.components},31:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));const c=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}}},337:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(23),a=r.n(n),s=r(0),l=r(12),i=r(27),u=r(31);const d=Object(l.createHigherOrderComponent)(e=>class extends s.Component{constructor(){super(...arguments),a()(this,"state",{error:null,loading:!1,product:"preview"===this.props.attributes.productId?this.props.attributes.previewProduct:null}),a()(this,"loadProduct",()=>{const{productId:e}=this.props.attributes;"preview"!==e&&(e?(this.setState({loading:!0}),Object(i.e)(e).then(e=>{this.setState({product:e,loading:!1,error:null})}).catch(async e=>{const t=await Object(u.a)(e);this.setState({product:null,loading:!1,error:t})})):this.setState({product:null,loading:!1,error:null}))})}componentDidMount(){this.loadProduct()}componentDidUpdate(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}render(){const{error:t,loading:r,product:c}=this.state;return Object(s.createElement)(e,o()({},this.props,{error:t,getProduct:this.loadProduct,isLoading:r,product:c}))}},"withProduct");t.a=d},34:function(e,t){e.exports=window.wp.escapeHtml},35:function(e,t,r){"use strict";var c=r(0),o=r(1),n=r(34);t.a=e=>{let{error:t}=e;return Object(c.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:r}=e;return t?"general"===r?Object(c.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(c.createElement)("br",null),Object(c.createElement)("code",null,Object(n.escapeHTML)(t))):"api"===r?Object(c.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(c.createElement)("br",null),Object(c.createElement)("code",null,Object(n.escapeHTML)(t))):t:Object(o.__)("An error has prevented the block from being updated.","woo-gutenberg-products-block")})(t))}},36:function(e,t){e.exports=window.wp.deprecated},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var c=r(6),o=r.n(c),n=r(0),a=r(4),s=r.n(a),l=r(3);function i(e,t,r){const c=new Set(t.map(e=>e[r]));return e.filter(e=>!c.has(e[r]))}var u=r(18);const d=e=>{let{label:t}=e;return Object(n.createElement)("span",{className:"woocommerce-search-list__item-count"},t)},m=e=>{const{item:t,search:r}=e,c=t.breadcrumbs&&t.breadcrumbs.length;return Object(n.createElement)("span",{className:"woocommerce-search-list__item-label"},c?Object(n.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(u.b)(t.breadcrumbs)):null,Object(n.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(u.d)(t.name,r)))},p=e=>{var t,r;let{countLabel:c,className:a,depth:p=0,controlId:b="",item:g,isSelected:h,isSingle:w,onSelect:O,search:j="",selected:f,useExpandedPanelId:E,...k}=e;const[_,v]=E,y=null!=c&&void 0!==g.count&&null!==g.count,S=!(null===(t=g.breadcrumbs)||void 0===t||!t.length),P=!(null===(r=g.children)||void 0===r||!r.length),x=_===g.id,C=s()(["woocommerce-search-list__item","depth-"+p,a],{"has-breadcrumbs":S,"has-children":P,"has-count":y,"is-expanded":x,"is-radio-button":w}),N=k.name||"search-list-item-"+b,I=`${N}-${g.id}`,B=Object(n.useCallback)(()=>{v(x?-1:Number(g.id))},[x,g.id,v]);return P?Object(n.createElement)("div",{className:C,onClick:B,onKeyDown:e=>"Enter"===e.key||" "===e.key?B():null,role:"treeitem",tabIndex:0},w?Object(n.createElement)(n.Fragment,null,Object(n.createElement)("input",o()({type:"radio",id:I,name:N,value:g.value,onChange:O(g),onClick:e=>e.stopPropagation(),checked:h,className:"woocommerce-search-list__item-input"},k)),Object(n.createElement)(m,{item:g,search:j}),y?Object(n.createElement)(d,{label:c||g.count}):null):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(l.CheckboxControl,o()({className:"woocommerce-search-list__item-input",checked:h},!h&&g.children.some(e=>f.find(t=>t.id===e.id))?{indeterminate:!0}:{},{label:Object(u.d)(g.name,j),onChange:()=>{h?O(i(f,g.children,"id"))():O(function(e,t,r){const c=i(t,e,"id");return[...e,...c]}(f,g.children))()},onClick:e=>e.stopPropagation()})),y?Object(n.createElement)(d,{label:c||g.count}):null)):Object(n.createElement)("label",{htmlFor:I,className:C},w?Object(n.createElement)("input",o()({type:"radio",id:I,name:N,value:g.value,onChange:O(g),checked:h,className:"woocommerce-search-list__item-input"},k)):Object(n.createElement)("input",o()({type:"checkbox",id:I,name:N,value:g.value,onChange:O(g),checked:h,className:"woocommerce-search-list__item-input"},k)),Object(n.createElement)(m,{item:g,search:j}),y?Object(n.createElement)(d,{label:c||g.count}):null)};t.b=p},38:function(e,t){e.exports=window.wc.wcBlocksRegistry},45:function(e,t){e.exports=window.wp.hooks},47:function(e,t){e.exports=window.wc.wcBlocksSharedHocs},488:function(e,t,r){e.exports=r(497)},489:function(e,t){},497:function(e,t,r){"use strict";r.r(t);var c=r(1),o=r(56),n=r(0),a=r(3),s=r(337),l=r(140),i=r(112);const u=Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 230 100"},Object(n.createElement)("path",{fill:"#E1E3E6",d:"M76 0h11v6H76zm0 11h88v11H76zm0 16h28v6H76zm0 17h154v28H76zm0 39h22v17H76zm28 0h44v17h-44zM0 0h66v66H0z",style:{width:"100%"}}));var d=r(5),m=(r(489),r(76)),p=e=>{let{error:t,isLoading:r,getProduct:c}=e;return Object(n.createElement)(m.a,{className:"wc-block-single-product-error",error:t,isLoading:r,onRetry:c})},b=r(88),g=e=>{let{attributes:t,setAttributes:r}=e;return Object(n.createElement)(b.a,{selected:t.productId||0,showVariations:!0,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=e[0]?e[0].id:0;r({productId:t})}})},h=e=>{let{isEditing:t,setIsEditing:r}=e;return Object(n.createElement)(d.BlockControls,null,Object(n.createElement)(a.ToolbarGroup,{controls:[{icon:"edit",title:Object(c.__)("Edit selected product","woo-gutenberg-products-block"),onClick:()=>r(!t),isActive:t}]}))},w=r(7),O=r(21),j=r(8);const f=e=>e.map(e=>{let[t,r={},c=[]]=e;const o=c?f(c):[];return Object(j.createBlock)(t,r,o)});var E=r(80),k=r(583),_=r(582),v=r(531);const y="woocommerce/single-product",S=Object(c.__)("Single Product","woo-gutenberg-products-block"),P=Object(n.createElement)(E.a,{icon:_.a,className:"wc-block-editor-components-block-icon"}),x=Object(c.__)("Display a single product.","woo-gutenberg-products-block"),C=[["core/columns",{},[["core/column",{},[["woocommerce/product-image",{showSaleBadge:!1}]]],["core/column",{},[["woocommerce/product-sale-badge"],["woocommerce/product-title",{headingLevel:2}],["woocommerce/product-rating"],["woocommerce/product-price"],["woocommerce/product-summary"],["woocommerce/product-stock-indicator"],["woocommerce/product-add-to-cart",{showFormElements:!0}],["woocommerce/product-sku"],["woocommerce/product-category-list"],["woocommerce/product-tag-list"]]]]]],N=["core/columns","core/column",...Object.keys(Object(v.a)(y))];var I=e=>{let{isLoading:t,product:r,clientId:o}=e;const{replaceInnerBlocks:s}=Object(w.useDispatch)("core/block-editor"),l=Object(n.useCallback)(()=>{s(o,f(C),!1)},[o,s]);return Object(n.createElement)(O.InnerBlockLayoutContextProvider,{parentName:y,parentClassName:"wc-block-single-product wc-block-layout"},Object(n.createElement)(O.ProductDataContextProvider,{product:r,isLoading:t},Object(n.createElement)(d.InspectorControls,null,Object(n.createElement)(a.PanelBody,{title:Object(c.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(a.Button,{label:Object(c.__)("Reset layout to default","woo-gutenberg-products-block"),onClick:l,isTertiary:!0,className:"wc-block-single-product__reset-layout"},Object(n.createElement)(E.a,{icon:k.a})," ",Object(c.__)("Reset layout","woo-gutenberg-products-block")))),Object(n.createElement)("div",{className:"wc-block-single-product wc-block-layout"},Object(n.createElement)(d.InnerBlocks,{template:C,allowedBlocks:N,templateLock:!1,renderAppender:!1}))))},B=Object(s.a)(e=>{let{className:t,attributes:r,setAttributes:o,error:s,getProduct:m,product:b,isLoading:w,clientId:O}=e;const{productId:j,isPreview:f}=r,[E,k]=Object(n.useState)(!j);return f?u:s?Object(n.createElement)(p,{error:s,isLoading:w,getProduct:m}):Object(n.createElement)("div",{className:t},Object(n.createElement)(l.a,{header:Object(c.__)("Single Product Block Error","woo-gutenberg-products-block")},Object(n.createElement)(h,{setIsEditing:k,isEditing:E}),E?Object(n.createElement)(a.Placeholder,{icon:P,label:S,className:"wc-block-single-product"},x,Object(n.createElement)("div",{className:"wc-block-single-product__selection"},Object(n.createElement)(g,{attributes:r,setAttributes:o}),Object(n.createElement)(a.Button,{isSecondary:!0,onClick:()=>{k(!1)}},Object(c.__)("Done","woo-gutenberg-products-block")))):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(d.InspectorControls,null,Object(n.createElement)(a.PanelBody,{title:Object(c.__)("Product","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(g,{attributes:r,setAttributes:o}))),Object(n.createElement)(i.a,{productId:j}),Object(n.createElement)(I,{clientId:O,product:b,isLoading:w}))))}),L=r(4),A=r.n(L);const T={title:S,icon:{src:P},category:"woocommerce",keywords:[Object(c.__)("WooCommerce","woo-gutenberg-products-block")],description:x,supports:{align:["wide","full"],html:!1},attributes:{isPreview:{type:"boolean",default:!1},productId:{type:"number"}},edit:B,save:e=>{let{attributes:t}=e;return Object(n.createElement)("div",{className:A()("is-loading",t.className)},Object(n.createElement)(d.InnerBlocks.Content,null))}};Object(o.c)(y,T)},5:function(e,t){e.exports=window.wp.blockEditor},531:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var c=r(38),o=r(0),n=r(19);r.p=n.l,Object(c.registerBlockComponent)({blockName:"woocommerce/product-price",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(31)]).then(r.bind(null,186)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-image",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(3),r.e(4),r.e(28)]).then(r.bind(null,587)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-title",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(3),r.e(4),r.e(42)]).then(r.bind(null,588)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-rating",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(3),r.e(4),r.e(33)]).then(r.bind(null,220)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-button",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(3),r.e(4),r.e(24)]).then(r.bind(null,221)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-summary",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(39)]).then(r.bind(null,329)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(3),r.e(35)]).then(r.bind(null,148)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-sku",component:Object(o.lazy)(()=>r.e(37).then(r.bind(null,330)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-category-list",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(27)]).then(r.bind(null,331)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-tag-list",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(41)]).then(r.bind(null,332)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(38)]).then(r.bind(null,333)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(4),r.e(22)]).then(r.bind(null,589)))});const a=e=>Object(c.getRegisteredBlockComponents)(e)},56:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s}));var c=r(8),o=r(19);const n=(e,t)=>{if(o.n>2)return Object(c.registerBlockType)(e,t)},a=()=>o.n>2,s=()=>o.n>1},64:function(e,t){e.exports=window.wp.autop},69:function(e,t){e.exports=window.wp.dom},7:function(e,t){e.exports=window.wp.data},74:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(0),a=r(3),s=r(37),l=r(4),i=r.n(l);t.a=e=>{let{className:t,item:r,isSelected:c,isLoading:l,onSelect:u,disabled:d,...m}=e;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(s.a,o()({},m,{key:r.id,className:t,isSelected:c,item:r,onSelect:u,disabled:d})),c&&l&&Object(n.createElement)("div",{key:"loading",className:i()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},Object(n.createElement)(a.Spinner,null)))}},76:function(e,t,r){"use strict";var c=r(0),o=r(1),n=r(80),a=r(197),s=r(4),l=r.n(s),i=r(3),u=r(35);r(124),t.a=e=>{let{className:t,error:r,isLoading:s=!1,onRetry:d}=e;return Object(c.createElement)(i.Placeholder,{icon:Object(c.createElement)(n.a,{icon:a.a}),label:Object(o.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:l()("wc-block-api-error",t)},Object(c.createElement)(u.a,{error:r}),d&&Object(c.createElement)(c.Fragment,null,s?Object(c.createElement)(i.Spinner,null):Object(c.createElement)(i.Button,{isSecondary:!0,onClick:d},Object(o.__)("Retry","woo-gutenberg-products-block"))))}},8:function(e,t){e.exports=window.wp.blocks},88:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(0),a=r(1),s=r(9),l=r(37),i=r(100),u=r(12),d=Object(u.createHigherOrderComponent)(e=>{class t extends n.Component{render(){const{selected:t}=this.props,r=null==t;return Array.isArray(t)?Object(n.createElement)(e,this.props):Object(n.createElement)(e,o()({},this.props,{selected:r?[]:[t]}))}}return t.defaultProps={selected:null},t},"withTransformSingleSelectToMultipleSelect"),m=r(202),p=r(23),b=r.n(p),g=r(26),h=r.n(g),w=r(27),O=r(31),j=Object(u.createHigherOrderComponent)(e=>{class t extends n.Component{constructor(){super(...arguments),b()(this,"state",{error:null,loading:!1,variations:{}}),b()(this,"loadVariations",()=>{const{products:e}=this.props,{loading:t,variations:r}=this.state;if(t)return;const c=this.getExpandedProduct();if(!c||r[c])return;const o=e.find(e=>e.id===c);o.variations&&0!==o.variations.length?(this.setState({loading:!0}),Object(w.g)(c).then(e=>{const t=e.map(e=>({...e,parent:c}));this.setState({variations:{...this.state.variations,[c]:t},loading:!1,error:null})}).catch(async e=>{const t=await Object(O.a)(e);this.setState({variations:{...this.state.variations,[c]:null},loading:!1,error:t})})):this.setState({variations:{...this.state.variations,[c]:null},loading:!1,error:null})})}componentDidMount(){const{selected:e,showVariations:t}=this.props;e&&t&&this.loadVariations()}componentDidUpdate(e){const{isLoading:t,selected:r,showVariations:c}=this.props;c&&(!h()(e.selected,r)||e.isLoading&&!t)&&this.loadVariations()}isProductId(e){const{products:t}=this.props;return t.some(t=>t.id===e)}findParentProduct(e){var t;const{products:r}=this.props;return null===(t=r.filter(t=>t.variations&&t.variations.find(t=>{let{id:r}=t;return r===e}))[0])||void 0===t?void 0:t.id}getExpandedProduct(){const{isLoading:e,selected:t,showVariations:r}=this.props;if(!r)return null;let c=t&&t.length?t[0]:null;return c?this.prevSelectedItem=c:this.prevSelectedItem&&(e||this.isProductId(this.prevSelectedItem)||(c=this.prevSelectedItem)),!e&&c?this.isProductId(c)?c:this.findParentProduct(c):null}render(){const{error:t,isLoading:r}=this.props,{error:c,loading:a,variations:s}=this.state;return Object(n.createElement)(e,o()({},this.props,{error:c||t,expandedProduct:this.getExpandedProduct(),isLoading:r,variations:s,variationsLoading:a}))}}return b()(t,"defaultProps",{selected:[],showVariations:!1}),t},"withProductVariations"),f=r(35),E=r(4),k=r.n(E),_=r(74);r(147);const v={list:Object(a.__)("Products","woo-gutenberg-products-block"),noItems:Object(a.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(a.__)("Search for a product to display","woo-gutenberg-products-block"),updated:Object(a.__)("Product search results updated.","woo-gutenberg-products-block")},y=e=>{let{expandedProduct:t,error:r,instanceId:c,isCompact:u,isLoading:d,onChange:m,onSearch:p,products:b,renderItem:g,selected:h,showVariations:w,variations:O,variationsLoading:j}=e;if(r)return Object(n.createElement)(f.a,{error:r});const E=[...b,...O&&O[t]?O[t]:[]];return Object(n.createElement)(i.a,{className:"woocommerce-products",list:E,isCompact:u,isLoading:d,isSingle:!0,selected:E.filter(e=>{let{id:t}=e;return h.includes(t)}),onChange:m,renderItem:g||(w?e=>{const{item:t,search:r,depth:i=0,isSelected:u,onSelect:m}=e,p=t.variations&&Array.isArray(t.variations)?t.variations.length:0,b=k()("woocommerce-search-product__item","woocommerce-search-list__item","depth-"+i,"has-count",{"is-searching":r.length>0,"is-skip-level":0===i&&0!==t.parent,"is-variable":p>0});if(!t.breadcrumbs.length)return Object(n.createElement)(_.a,o()({},e,{className:k()(b,{"is-selected":u}),isSelected:u,item:t,onSelect:()=>()=>{m(t)()},isLoading:d||j,countLabel:t.variations.length>0?Object(a.sprintf)(
/* translators: %1$d is the number of variations of a product product. */
Object(a.__)("%1$d variations","woo-gutenberg-products-block"),t.variations.length):null,name:"products-"+c,"aria-label":Object(a.sprintf)(
/* translators: %1$s is the product name, %2$d is the number of variations of that product. */
Object(a._n)("%1$s, has %2$d variation","%1$s, has %2$d variations",t.variations.length,"woo-gutenberg-products-block"),t.name,t.variations.length)}));const g=Object(s.isEmpty)(t.variation)?e:{...e,item:{...e.item,name:t.variation},"aria-label":`${t.breadcrumbs[0]}: ${t.variation}`};return Object(n.createElement)(l.a,o()({},g,{className:b,name:"variations-"+c}))}:null),onSearch:p,messages:v,isHierarchical:!0})};y.defaultProps={isCompact:!1,expandedProduct:null,selected:[],showVariations:!1},t.a=d(Object(m.a)(j(Object(u.withInstanceId)(y))))},9:function(e,t){e.exports=window.lodash},94:function(e,t){e.exports=window.wp.wordcount}});