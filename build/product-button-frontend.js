(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[69],{116:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n(51);var c=n(36);const o=()=>c.m>1},117:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(24),o=n(19);const r=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(o.a)(t)?t:{}},155:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(63),o=n(116),r=n(19),s=n(117);const a=t=>{if(!Object(o.a)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalUseBorderProps)({...e,style:n})}},19:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));const c=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function o(t,e){return c(t)&&e in t}},288:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(63),o=n(116),r=n(19),s=n(117);const a=t=>{if(!Object(o.a)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},294:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(19),o=n(117);const r=t=>{const e=Object(c.a)(t)?t:{},n=Object(o.a)(e.style),r=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:r.fontSize,lineHeight:r.lineHeight,fontWeight:r.fontWeight,fontStyle:r.fontStyle,textTransform:r.textTransform,fontFamily:e.fontFamily}}}},315:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var c=n(0),o=n(7),r=n(3),s=n(23),a=n(41);const i=(t,e)=>{const n=t.find(t=>{let{id:n}=t;return n===e});return n?n.quantity:0},l=t=>{const{addItemToCart:e}=Object(o.useDispatch)(r.CART_STORE_KEY),{cartItems:n,cartIsLoading:l}=Object(a.a)(),{createErrorNotice:u,removeNotice:d}=Object(o.useDispatch)("core/notices"),[b,p]=Object(c.useState)(!1),y=Object(c.useRef)(i(n,t));return Object(c.useEffect)(()=>{const e=i(n,t);e!==y.current&&(y.current=e)},[n,t]),{cartQuantity:Number.isFinite(y.current)?y.current:0,addingToCart:b,cartIsLoading:l,addToCart:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return p(!0),e(t,n).then(()=>{d("add-to-cart")}).catch(t=>{u(Object(s.decodeEntities)(t.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{p(!1)})}}}},323:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(63),o=n(116),r=n(19),s=n(117);const a=t=>{if(!Object(o.a)()||"function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},341:function(t,e){},361:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return _}));var c=n(15),o=n.n(c),r=n(0),s=n(5),a=n.n(s),i=n(1),l=n(69),u=n(315),d=n(288),b=n(155),p=n(294),y=n(323),f=n(23),O=n(36),j=n(2),m=n(50),g=n(140);n(341);const _=t=>{const{className:e}=t,{parentClassName:n}=Object(m.useInnerBlockLayoutContext)(),{product:c}=Object(m.useProductDataContext)(),o=Object(d.a)(t),s=Object(b.a)(t),i=Object(p.a)(t),l=Object(y.a)(t),{textAlign:u}=t;return Object(r.createElement)("div",{className:a()(e,"wp-block-button","wc-block-components-product-button",{[n+"__product-add-to-cart"]:n},{["has-text-align-"+u]:u})},c.id?Object(r.createElement)(S,{product:c,colorStyles:o,borderStyles:s,typographyStyles:i,spacingStyles:l}):Object(r.createElement)(h,{colorStyles:o,borderStyles:s,typographyStyles:i,spacingStyles:l}))},S=t=>{let{product:e,colorStyles:n,borderStyles:c,typographyStyles:s,spacingStyles:d,textAlign:b}=t;const{id:p,permalink:y,add_to_cart:m,has_options:g,is_purchasable:_,is_in_stock:S}=e,{dispatchStoreEvent:h}=Object(l.a)(),{cartQuantity:w,addingToCart:v,addToCart:k}=Object(u.a)(p,"woocommerce/single-product/"+(p||0)),x=Number.isFinite(w)&&w>0,N=!g&&_&&S,C=Object(f.decodeEntities)((null==m?void 0:m.description)||""),E=x?Object(i.sprintf)(
/* translators: %s number of products in cart. */
Object(i._n)("%d in cart","%d in cart",w,"woo-gutenberg-products-block"),w):Object(f.decodeEntities)((null==m?void 0:m.text)||Object(i.__)("Add to cart","woo-gutenberg-products-block")),A=N?"button":"a",T={};return N?T.onClick=async()=>{await k(),h("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=Object(j.getSetting)("productsSettings");t&&(window.location.href=O.c)}:(T.href=y,T.rel="nofollow",T.onClick=()=>{h("product-view-link",{product:e})}),Object(r.createElement)(A,o()({"aria-label":C,className:a()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",n.className,c.className,{loading:v,added:x},{["has-text-align-"+b]:b}),style:{...n.style,...c.style,...s.style,...d.style},disabled:v},T),E)},h=t=>{let{colorStyles:e,borderStyles:n,typographyStyles:c,spacingStyles:o}=t;return Object(r.createElement)("button",{className:a()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e.className,n.className),style:{...e.style,...n.style,...c.style,...o.style},disabled:!0})};e.default=Object(g.withProductDataContext)(_)},5:function(t,e,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var r=typeof c;if("string"===r||"number"===r)t.push(c);else if(Array.isArray(c)){if(c.length){var s=o.apply(null,c);s&&t.push(s)}}else if("object"===r)if(c.toString===Object.prototype.toString)for(var a in c)n.call(c,a)&&c[a]&&t.push(a);else t.push(c.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(c=function(){return o}.apply(e,[]))||(t.exports=c)}()}}]);