(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[70,73],{19:function(e,t,n){"use strict";var c=n(0),a=n(4),r=n.n(a);t.a=e=>{let t,{label:n,screenReaderLabel:a,wrapperElement:s,wrapperProps:l={}}=e;const o=null!=n,i=null!=a;return!o&&i?(t=s||"span",l={...l,className:r()(l.className,"screen-reader-text")},Object(c.createElement)(t,l,a)):(t=s||c.Fragment,o&&i&&n!==a?Object(c.createElement)(t,l,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},a)):Object(c.createElement)(t,l,n))}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function a(e,t){return c(e)&&t in e}},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n(100);var c=n(46);const a=()=>c.m>1},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(30),a=n(20);const r=e=>Object(c.a)(e)?JSON.parse(e)||{}:Object(a.a)(e)?e:{}},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(111),a=n(216),r=n(20),s=n(217);const l=e=>{if(!Object(a.a)())return{className:"",style:{}};const t=Object(r.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:n})}},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(111),a=n(216),r=n(20),s=n(217);const l=e=>{if(!Object(a.a)())return{className:"",style:{}};const t=Object(r.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalUseColorProps)({...t,style:n})}},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(20),a=n(217);const r=e=>{const t=Object(c.a)(e)?e:{},n=Object(a.a)(t.style),r=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:r.fontSize,lineHeight:r.lineHeight,fontWeight:r.fontWeight,textTransform:r.textTransform,fontFamily:t.fontFamily}}}},319:function(e,t,n){"use strict";n.r(t),n.d(t,"Block",(function(){return p}));var c=n(0),a=n(1),r=n(4),s=n.n(r),l=n(19),o=n(50),i=n(277),u=n(292),b=n(301),d=n(326),m=n(134);n(320);const p=e=>{const{className:t,align:n}=e,{parentClassName:r}=Object(o.useInnerBlockLayoutContext)(),{product:m}=Object(o.useProductDataContext)(),p=Object(i.a)(e),f=Object(u.a)(e),O=Object(b.a)(e),j=Object(d.a)(e);if(!m.id||!m.on_sale)return null;const g="string"==typeof n?"wc-block-components-product-sale-badge--align-"+n:"";return Object(c.createElement)("div",{className:s()("wc-block-components-product-sale-badge",t,g,{[r+"__product-onsale"]:r},f.className,p.className),style:{...f.style,...p.style,...O.style,...j.style}},Object(c.createElement)(l.a,{label:Object(a.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(a.__)("Product on sale","woo-gutenberg-products-block")}))};t.default=Object(m.withProductDataContext)(p)},320:function(e,t){},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(111),a=n(216),r=n(20),s=n(217);const l=e=>{if(!Object(a.a)()||"function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const t=Object(r.a)(e)?e:{},n=Object(s.a)(t.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...t,style:n})}},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(12),a=n.n(c),r=n(0),s=n(1),l=n(4),o=n.n(l),i=n(2),u=n(50),b=n(301),d=n(277),m=n(326),p=n(134),f=n(70),O=n(319);n(339);const j=e=>{const{className:t,imageSizing:n="full-size",showProductLink:c=!0,showSaleBadge:a,saleBadgeAlign:l="right"}=e,{parentClassName:i}=Object(u.useInnerBlockLayoutContext)(),{product:p,isLoading:j}=Object(u.useProductDataContext)(),{dispatchStoreEvent:h}=Object(f.a)(),w=Object(b.a)(e),_=Object(d.a)(e),k=Object(m.a)(e);if(!p.id)return Object(r.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[i+"__product-image"]:i},_.className),style:{...w.style,..._.style,...k.style}},Object(r.createElement)(g,null));const E=!!p.images.length,S=E?p.images[0]:null,N=c?"a":r.Fragment,v=Object(s.sprintf)(
/* translators: %s is referring to the product name */
Object(s.__)("Link to %s","woo-gutenberg-products-block"),p.name),x={href:p.permalink,...!E&&{"aria-label":v},onClick:()=>{h("product-view-link",{product:p})}};return Object(r.createElement)("div",{className:o()(t,"wc-block-components-product-image",{[i+"__product-image"]:i},_.className),style:{...w.style,..._.style,...k.style}},Object(r.createElement)(N,c&&x,!!a&&Object(r.createElement)(O.default,{align:l,product:p}),Object(r.createElement)(y,{fallbackAlt:p.name,image:S,loaded:!j,showFullSize:"cropped"!==n})))},g=()=>Object(r.createElement)("img",{src:i.PLACEHOLDER_IMG_SRC,alt:"",width:500,height:500}),y=e=>{let{image:t,loaded:n,showFullSize:c,fallbackAlt:s}=e;const{thumbnail:l,src:o,srcset:i,sizes:u,alt:b}=t||{},d={alt:b||s,hidden:!n,src:l,...c&&{src:o,srcSet:i,sizes:u}};return Object(r.createElement)(r.Fragment,null,d.src&&Object(r.createElement)("img",a()({"data-testid":"product-image"},d)),!t&&Object(r.createElement)(g,null))};t.b=Object(p.withProductDataContext)(j)},339:function(e,t){},502:function(e,t,n){"use strict";n.r(t);var c=n(134),a=n(338);t.default=Object(c.withFilteredAttributes)({showProductLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0},isDescendentOfQueryLoop:{type:"boolean",default:!1}})(a.b)}}]);