(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[7],{117:function(e,t,n){"use strict";var a=n(12),c=n.n(a),o=n(0),r=n(148),s=n(4),l=n.n(s);n(214);const i=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:a,onValueChange:s,displayType:p="text",...u}=e;const d="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(d))return null;const b=d/10**a.minorUnit;if(!Number.isFinite(b))return null;const m=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),g={...u,...i(a),value:void 0,currency:void 0,onValueChange:void 0},O=s?e=>{const t=+e.value*10**a.minorUnit;s(t)}:()=>{};return Object(o.createElement)(r.a,c()({className:m,displayType:p},g,{value:b,onValueChange:O}))}},19:function(e,t,n){"use strict";var a=n(0),c=n(4),o=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:r,wrapperProps:s={}}=e;const l=null!=n,i=null!=c;return!l&&i?(t=r||"span",s={...s,className:o()(s.className,"screen-reader-text")},Object(a.createElement)(t,s,c)):(t=r||a.Fragment,l&&i&&n!==c?Object(a.createElement)(t,s,Object(a.createElement)("span",{"aria-hidden":"true"},n),Object(a.createElement)("span",{className:"screen-reader-text"},c)):Object(a.createElement)(t,s,n))}},214:function(e,t){},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),c=n(13),o=n.n(c);function r(e){const t=Object(a.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),c=n(6),o=n(3);n(293);const r=e=>{let{errorMessage:t="",propertyName:n="",elementId:r=""}=e;const{validationError:s,validationErrorId:l}=Object(c.useSelect)(e=>{const t=e(o.VALIDATION_STORE_KEY);return{validationError:t.getValidationError(n),validationErrorId:t.getValidationErrorId(r)}});if(!t||"string"!=typeof t){if(null==s||!s.message||null!=s&&s.hidden)return null;t=s.message}return Object(a.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(a.createElement)("p",{id:l},t))};t.b=r},293:function(e,t){},294:function(e,t){},295:function(e,t,n){"use strict";var a=n(12),c=n.n(a),o=n(0),r=n(44),s=n(4),l=n.n(s),i=n(146);n(296),t.a=e=>{let{className:t,showSpinner:n=!1,children:a,variant:s="contained",...p}=e;const u=l()("wc-block-components-button",t,s,{"wc-block-components-button--loading":n});return Object(o.createElement)(r.a,c()({className:u},p),n&&Object(o.createElement)(i.a,null),Object(o.createElement)("span",{className:"wc-block-components-button__text"},a))}},296:function(e,t){},299:function(e,t,n){"use strict";var a=n(0),c=n(4),o=n.n(c),r=n(300);t.a=e=>{let{checked:t,name:n,onChange:c,option:s}=e;const{value:l,label:i,description:p,secondaryLabel:u,secondaryDescription:d}=s;return Object(a.createElement)("label",{className:o()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":t}),htmlFor:`${n}-${l}`},Object(a.createElement)("input",{id:`${n}-${l}`,className:"wc-block-components-radio-control__input",type:"radio",name:n,value:l,onChange:e=>c(e.target.value),checked:t,"aria-describedby":o()({[`${n}-${l}__label`]:i,[`${n}-${l}__secondary-label`]:u,[`${n}-${l}__description`]:p,[`${n}-${l}__secondary-description`]:d})}),Object(a.createElement)(r.a,{id:`${n}-${l}`,label:i,secondaryLabel:u,description:p,secondaryDescription:d}))}},300:function(e,t,n){"use strict";var a=n(0);t.a=e=>{let{label:t,secondaryLabel:n,description:c,secondaryDescription:o,id:r}=e;return Object(a.createElement)("div",{className:"wc-block-components-radio-control__option-layout"},Object(a.createElement)("div",{className:"wc-block-components-radio-control__label-group"},t&&Object(a.createElement)("span",{id:r&&r+"__label",className:"wc-block-components-radio-control__label"},t),n&&Object(a.createElement)("span",{id:r&&r+"__secondary-label",className:"wc-block-components-radio-control__secondary-label"},n)),Object(a.createElement)("div",{className:"wc-block-components-radio-control__description-group"},c&&Object(a.createElement)("span",{id:r&&r+"__description",className:"wc-block-components-radio-control__description"},c),o&&Object(a.createElement)("span",{id:r&&r+"__secondary-description",className:"wc-block-components-radio-control__secondary-description"},o)))}},322:function(e,t,n){"use strict";var a=n(0),c=n(4),o=n.n(c),r=n(11),s=n(299);n(323);const l=e=>{let{className:t="",id:n,selected:c,onChange:i,options:p=[]}=e;const u=Object(r.useInstanceId)(l),d=n||u;return p.length?Object(a.createElement)("div",{className:o()("wc-block-components-radio-control",t)},p.map(e=>Object(a.createElement)(s.a,{key:`${d}-${e.value}`,name:"radio-control-"+d,checked:e.value===c,option:e,onChange:t=>{i(t),"function"==typeof e.onChange&&e.onChange(t)}}))):null};t.a=l},323:function(e,t){},333:function(e,t,n){"use strict";var a=n(12),c=n.n(a),o=n(0),r=n(1),s=n(8),l=n(4),i=n.n(l),p=n(11),u=n(30),d=n(6),b=n(3),m=n(19);n(294);var g=Object(s.forwardRef)((e,t)=>{let{className:n,id:a,type:r="text",ariaLabel:s,ariaDescribedBy:l,label:p,screenReaderLabel:u,disabled:d,help:b,autoCapitalize:g="off",autoComplete:O="off",value:h="",onChange:j,required:E=!1,onBlur:f=(()=>{}),feedback:_,...v}=e;const[k,y]=Object(o.useState)(!1);return Object(o.createElement)("div",{className:i()("wc-block-components-text-input",n,{"is-active":k||h})},Object(o.createElement)("input",c()({type:r,id:a,value:h,ref:t,autoCapitalize:g,autoComplete:O,onChange:e=>{j(e.target.value)},onFocus:()=>y(!0),onBlur:e=>{f(e.target.value),y(!1)},"aria-label":s||p,disabled:d,"aria-describedby":b&&!l?a+"__help":l,required:E},v)),Object(o.createElement)(m.a,{label:p,screenReaderLabel:u||p,wrapperElement:"label",wrapperProps:{htmlFor:a},htmlFor:a}),!!b&&Object(o.createElement)("p",{id:a+"__help",className:"wc-block-components-text-input__help"},b),_)}),O=n(291);t.a=Object(p.withInstanceId)(e=>{let{className:t,instanceId:n,id:a,ariaDescribedBy:l,errorId:p,focusOnMount:m=!1,onChange:h,showError:j=!0,errorMessage:E="",value:f="",..._}=e;const[v,k]=Object(s.useState)(!0),y=Object(s.useRef)(null),{setValidationErrors:w,hideValidationError:C,clearValidationError:N}=Object(d.dispatch)(b.VALIDATION_STORE_KEY),I=void 0!==a?a:"textinput-"+n,S=void 0!==p?p:I,{validationError:R,validationErrorId:L}=Object(d.useSelect)(e=>{const t=e(b.VALIDATION_STORE_KEY);return{validationError:t.getValidationError(S),validationErrorId:t.getValidationErrorId(S)}}),x=Object(s.useCallback)((function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=y.current||null;if(!t)return;t.value=t.value.trim();const n=t.checkValidity();if(n)N(S);else{const n={[S]:{message:t.validationMessage||Object(r.__)("Invalid value.","woo-gutenberg-products-block"),hidden:e}};w(n)}}),[N,S,w]);Object(s.useEffect)(()=>{var e;v&&m&&(null===(e=y.current)||void 0===e||e.focus()),k(!1)},[m,v,k]),Object(s.useEffect)(()=>{var e,t;(null===(e=y.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.activeElement)!==y.current&&x(!0)},[f,x]),Object(s.useEffect)(()=>()=>{N(S)},[N,S]),Object(u.a)(E)&&""!==E&&(R.message=E);const M=(null==R?void 0:R.message)&&!(null!=R&&R.hidden),V=j&&M&&L?L:l;return Object(o.createElement)(g,c()({className:i()(t,{"has-error":M}),"aria-invalid":!0===M,id:I,onBlur:()=>{x(!1)},feedback:j&&Object(o.createElement)(O.a,{errorMessage:E,propertyName:S}),ref:y,onChange:e=>{C(S),h(e)},ariaDescribedBy:V,value:f},_))})},356:function(e,t){},357:function(e,t){},358:function(e,t){},359:function(e,t){},379:function(e,t){},385:function(e,t,n){"use strict";var a=n(0),c=n(1),o=n(24),r=n(147),s=n(10),l=n(419),i=n(38),p=n(36),u=n(4),d=n.n(u),b=n(23),m=n(19),g=n(93),O=n(109),h=n(322),j=n(300),E=n(40),f=n(117),_=n(2);const v=e=>{const t=Object(_.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:Object(b.decodeEntities)(e.name),value:e.rate_id,description:Object(a.createElement)(a.Fragment,null,Number.isFinite(t)&&Object(a.createElement)(f.a,{currency:Object(E.getCurrencyFromPriceResponse)(e),value:t}),Number.isFinite(t)&&e.delivery_time?" — ":null,Object(b.decodeEntities)(e.delivery_time))}};var k=e=>{let{className:t="",noResultsMessage:n,onSelectRate:c,rates:o,renderOption:r=v,selectedRate:s}=e;const l=(null==s?void 0:s.rate_id)||"",[i,p]=Object(a.useState)(l);if(Object(a.useEffect)(()=>{l&&p(l)},[l]),0===o.length)return n;if(o.length>1)return Object(a.createElement)(h.a,{className:t,onChange:e=>{p(e),c(e)},selected:i,options:o.map(r)});const{label:u,secondaryLabel:d,description:b,secondaryDescription:m}=r(o[0]);return Object(a.createElement)(j.a,{label:u,secondaryLabel:d,description:b,secondaryDescription:m})};n(359);var y=e=>{let{packageId:t,className:n="",noResultsMessage:o,renderOption:r,packageData:l,collapsible:i=!1,collapse:p=!1,showItems:u=!1}=e;const{selectShippingRate:h}=Object(g.a)(),j=Object(a.createElement)(a.Fragment,null,(u||i)&&Object(a.createElement)("div",{className:"wc-block-components-shipping-rates-control__package-title",dangerouslySetInnerHTML:{__html:Object(O.a)(l.name)}}),u&&Object(a.createElement)("ul",{className:"wc-block-components-shipping-rates-control__package-items"},Object.values(l.items).map(e=>{const t=Object(b.decodeEntities)(e.name),n=e.quantity;return Object(a.createElement)("li",{key:e.key,className:"wc-block-components-shipping-rates-control__package-item"},Object(a.createElement)(m.a,{label:n>1?`${t} × ${n}`:""+t,screenReaderLabel:Object(c.sprintf)(
/* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
Object(c._n)("%1$s (%2$d unit)","%1$s (%2$d units)",n,"woo-gutenberg-products-block"),t,n)}))}))),E=Object(a.createElement)(k,{className:n,noResultsMessage:o,rates:l.shipping_rates,onSelectRate:e=>h(e,t),selectedRate:l.shipping_rates.find(e=>e.selected),renderOption:r});return i?Object(a.createElement)(s.Panel,{className:"wc-block-components-shipping-rates-control__package",initialOpen:!p,title:j},E):Object(a.createElement)("div",{className:d()("wc-block-components-shipping-rates-control__package",n)},j,E)};const w=e=>{let{packages:t,collapse:n,showItems:c,collapsible:o,noResultsMessage:r,renderOption:s}=e;return t.length?Object(a.createElement)(a.Fragment,null,t.map(e=>{let{package_id:l,...i}=e;return Object(a.createElement)(y,{key:l,packageId:l,packageData:i,collapsible:!!o,collapse:!!n,showItems:c||t.length>1,noResultsMessage:r,renderOption:s})})):null};t.a=e=>{let{shippingRates:t,isLoadingRates:n,className:u,collapsible:d=!1,noResultsMessage:b,renderOption:m,context:g}=e;Object(a.useEffect)(()=>{if(n)return;const e=Object(l.a)(t),a=Object(l.b)(t);1===e?Object(o.speak)(Object(c.sprintf)(
/* translators: %d number of shipping options found. */
Object(c._n)("%d shipping option was found.","%d shipping options were found.",a,"woo-gutenberg-products-block"),a)):Object(o.speak)(Object(c.sprintf)(
/* translators: %d number of shipping packages packages. */
Object(c._n)("Shipping option searched for %d package.","Shipping options searched for %d packages.",e,"woo-gutenberg-products-block"),e)+" "+Object(c.sprintf)(
/* translators: %d number of shipping options available. */
Object(c._n)("%d shipping option was found","%d shipping options were found",a,"woo-gutenberg-products-block"),a))},[n,t]);const{extensions:O,receiveCart:h,...j}=Object(i.a)(),E={className:u,collapsible:d,noResultsMessage:b,renderOption:m,extensions:O,cart:j,components:{ShippingRatesControlPackage:y},context:g,shippingRates:t},{isEditor:f}=Object(p.a)();return Object(a.createElement)(r.a,{isLoading:n,screenReaderLabel:Object(c.__)("Loading shipping rates…","woo-gutenberg-products-block"),showSpinner:!0},f?Object(a.createElement)(w,{packages:t,noResultsMessage:b,renderOption:m}):Object(a.createElement)(a.Fragment,null,Object(a.createElement)(s.ExperimentalOrderShippingPackages.Slot,E),Object(a.createElement)(s.ExperimentalOrderShippingPackages,null,Object(a.createElement)(w,{showItems:t.length>1,packages:t,noResultsMessage:b,renderOption:m}))))}},418:function(e,t){},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));const a=e=>e.length,c=e=>e.reduce((function(e,t){return e+t.shipping_rates.length}),0)},431:function(e,t,n){"use strict";var a=n(0),c=n(333),o=n(12),r=n.n(o),s=n(46),l=n(1),i=n(23),p=n(4),u=n.n(p),d=n(11),b=n(476),m=n(291),g=n(20),O=n(6),h=n(3);n(357);var j=Object(d.withInstanceId)(e=>{let{id:t,className:n,label:c,onChange:o,options:r,value:s,required:i=!1,errorMessage:p=Object(l.__)("Please select a value.","woo-gutenberg-products-block"),errorId:d,instanceId:j="0",autoComplete:E="off"}=e;const f=Object(a.useRef)(null),_=t||"control-"+j,v=d||_,{setValidationErrors:k,clearValidationError:y}=Object(O.useDispatch)(h.VALIDATION_STORE_KEY),w=Object(O.useSelect)(e=>e(h.VALIDATION_STORE_KEY).getValidationError(v));return Object(a.useEffect)(()=>(!i||s?y(v):k({[v]:{message:p,hidden:!0}}),()=>{y(v)}),[y,s,v,p,i,k]),Object(a.createElement)("div",{id:_,className:u()("wc-block-components-combobox",n,{"is-active":s,"has-error":(null==w?void 0:w.message)&&!(null!=w&&w.hidden)}),ref:f},Object(a.createElement)(b.a,{className:"wc-block-components-combobox-control",label:c,onChange:o,onFilterValueChange:e=>{if(e.length){const t=Object(g.a)(f.current)?f.current.ownerDocument.activeElement:void 0;if(t&&Object(g.a)(f.current)&&f.current.contains(t))return;const n=e.toLocaleUpperCase(),a=r.find(e=>e.label.toLocaleUpperCase().startsWith(n)||e.value.toLocaleUpperCase()===n);a&&o(a.value)}},options:r,value:s||"",allowReset:!1,autoComplete:E,"aria-invalid":(null==w?void 0:w.message)&&!(null!=w&&w.hidden)}),Object(a.createElement)(m.a,{propertyName:v}))});n(356);var E=e=>{let{className:t,countries:n,id:c,label:o,onChange:r,value:s="",autoComplete:p="off",required:d=!1,errorId:b,errorMessage:m=Object(l.__)("Please select a country.","woo-gutenberg-products-block")}=e;const g=Object(a.useMemo)(()=>Object.entries(n).map(e=>{let[t,n]=e;return{value:t,label:Object(i.decodeEntities)(n)}}),[n]);return Object(a.createElement)("div",{className:u()(t,"wc-block-components-country-input")},Object(a.createElement)(j,{id:c,label:o,onChange:r,options:g,value:s,errorId:b,errorMessage:m,required:d,autoComplete:p}),"off"!==p&&Object(a.createElement)("input",{type:"text","aria-hidden":!0,autoComplete:p,value:s,onChange:e=>{const t=e.target.value.toLocaleUpperCase(),n=g.find(e=>2!==t.length&&e.label.toLocaleUpperCase()===t||2===t.length&&e.value.toLocaleUpperCase()===t);r(n?n.value:"")},style:{minHeight:"0",height:"0",border:"0",padding:"0",position:"absolute"},tabIndex:-1}))},f=e=>Object(a.createElement)(E,r()({countries:s.g},e)),_=e=>Object(a.createElement)(E,r()({countries:s.a},e));n(358);const v=(e,t)=>{const n=t.find(t=>t.label.toLocaleUpperCase()===e.toLocaleUpperCase()||t.value.toLocaleUpperCase()===e.toLocaleUpperCase());return n?n.value:""};var k=e=>{let{className:t,id:n,states:o,country:r,label:s,onChange:p,autoComplete:d="off",value:b="",required:m=!1}=e;const g=o[r],O=Object(a.useMemo)(()=>g?Object.keys(g).map(e=>({value:e,label:Object(i.decodeEntities)(g[e])})):[],[g]),h=Object(a.useCallback)(e=>{p(O.length>0?v(e,O):e)},[p,O]),E=Object(a.useRef)(b);return Object(a.useEffect)(()=>{E.current!==b&&(E.current=b)},[b]),Object(a.useEffect)(()=>{if(O.length>0&&E.current){const e=v(E.current,O);e!==E.current&&h(e)}},[O,h]),O.length>0?Object(a.createElement)(a.Fragment,null,Object(a.createElement)(j,{className:u()(t,"wc-block-components-state-input"),id:n,label:s,onChange:h,options:O,value:b,errorMessage:Object(l.__)("Please select a state.","woo-gutenberg-products-block"),required:m,autoComplete:d}),"off"!==d&&Object(a.createElement)("input",{type:"text","aria-hidden":!0,autoComplete:d,value:b,onChange:e=>h(e.target.value),style:{minHeight:"0",height:"0",border:"0",padding:"0",position:"absolute"},tabIndex:-1})):Object(a.createElement)(c.a,{className:t,id:n,label:s,onChange:h,autoComplete:d,value:b,required:m})},y=e=>Object(a.createElement)(k,r()({states:s.h},e)),w=e=>Object(a.createElement)(k,r()({states:s.b},e)),C=n(29),N=n(2),I=n(57);t.a=Object(d.withInstanceId)(e=>{let{id:t="",fields:n=Object.keys(N.defaultAddressFields),fieldConfig:o={},instanceId:r,onChange:s,type:i="shipping",values:p}=e;const{setValidationErrors:u,clearValidationError:d}=Object(O.useDispatch)(h.VALIDATION_STORE_KEY),b=Object(O.useSelect)(e=>e(h.VALIDATION_STORE_KEY).getValidationError("shipping-missing-country")),m=Object(C.a)(n),g=Object(a.useMemo)(()=>Object(I.a)(m,o,p.country),[m,o,p.country]);return Object(a.useEffect)(()=>{g.forEach(e=>{e.hidden&&p[e.key]&&s({...p,[e.key]:""})})},[g,s,p]),Object(a.useEffect)(()=>{"shipping"===i&&((e,t,n,a)=>{a||e.country||!(e.city||e.state||e.postcode)||t({"shipping-missing-country":{message:Object(l.__)("Please select a country to calculate rates.","woo-gutenberg-products-block"),hidden:!1}}),a&&e.country&&n("shipping-missing-country")})(p,u,d,!(null==b||!b.message||null!=b&&b.hidden))},[p,null==b?void 0:b.message,null==b?void 0:b.hidden,u,d,i]),t=t||r,Object(a.createElement)("div",{id:t,className:"wc-block-components-address-form"},g.map(e=>{if(e.hidden)return null;if("country"===e.key){const n="shipping"===i?f:_;return Object(a.createElement)(n,{key:e.key,id:`${t}-${e.key}`,label:e.required?e.label:e.optionalLabel,value:p.country,autoComplete:e.autocomplete,onChange:e=>s({...p,country:e,state:""}),errorId:"shipping"===i?"shipping-missing-country":null,errorMessage:e.errorMessage,required:e.required})}if("state"===e.key){const n="shipping"===i?y:w;return Object(a.createElement)(n,{key:e.key,id:`${t}-${e.key}`,country:p.country,label:e.required?e.label:e.optionalLabel,value:p.state,autoComplete:e.autocomplete,onChange:e=>s({...p,state:e}),errorMessage:e.errorMessage,required:e.required})}return Object(a.createElement)(c.a,{key:e.key,id:`${t}-${e.key}`,className:"wc-block-components-address-form__"+e.key,label:e.required?e.label:e.optionalLabel,value:p[e.key],autoCapitalize:e.autocapitalize,autoComplete:e.autocomplete,onChange:t=>s({...p,[e.key]:t}),errorMessage:e.errorMessage,required:e.required})}))})},470:function(e,t,n){"use strict";var a=n(12),c=n.n(a),o=n(0),r=n(4),s=n.n(r),l=n(1),i=n(38),p=n(10),u=n(2),d=n(23);const b=e=>{let{selectedShippingRates:t}=e;return Object(o.createElement)("div",{className:"wc-block-components-totals-item__description wc-block-components-totals-shipping__via"},Object(l.__)("via","woo-gutenberg-products-block")," ",Object(d.decodeEntities)(t.join(", ")))};var m=n(98),g=n(385),O=e=>{let{hasRates:t,shippingRates:n,isLoadingRates:a}=e;const c=t?Object(l.__)("Shipping options","woo-gutenberg-products-block"):Object(l.__)("Choose a shipping option","woo-gutenberg-products-block");return Object(o.createElement)("fieldset",{className:"wc-block-components-totals-shipping__fieldset"},Object(o.createElement)("legend",{className:"screen-reader-text"},c),Object(o.createElement)(g.a,{className:"wc-block-components-totals-shipping__options",collapsible:!0,noResultsMessage:Object(o.createElement)(m.a,{isDismissible:!1,className:s()("wc-block-components-shipping-rates-control__no-results-notice","woocommerce-error")},Object(l.__)("No shipping options were found.","woo-gutenberg-products-block")),shippingRates:n,isLoadingRates:a,context:"woocommerce/cart"}))},h=n(75),j=n(295),E=n(13),f=n.n(E),_=n(3),v=n(6),k=(n(379),n(431)),y=e=>{let{address:t,onUpdate:n,addressFields:a}=e;const[c,r]=Object(o.useState)(t),{showAllValidationErrors:s}=Object(v.useDispatch)(_.VALIDATION_STORE_KEY),{hasValidationErrors:i}=Object(v.useSelect)(e=>({hasValidationErrors:e(_.VALIDATION_STORE_KEY).hasValidationErrors}));return Object(o.createElement)("form",{className:"wc-block-components-shipping-calculator-address"},Object(o.createElement)(k.a,{fields:a,onChange:r,values:c}),Object(o.createElement)(j.a,{className:"wc-block-components-shipping-calculator-address__button",disabled:f()(c,t),onClick:e=>{if(e.preventDefault(),s(),!i())return n(c)},type:"submit"},Object(l.__)("Update","woo-gutenberg-products-block")))},w=e=>{let{onUpdate:t=(()=>{}),addressFields:n=["country","state","city","postcode"]}=e;const{shippingAddress:a,setShippingAddress:c,setBillingAddress:r}=Object(h.a)();return Object(o.createElement)("div",{className:"wc-block-components-shipping-calculator"},Object(o.createElement)(y,{address:a,addressFields:n,onUpdate:e=>{c(e),r(e),t(e)}}))},C=e=>{let{address:t}=e;if(0===Object.values(t).length)return null;const n=Object(u.getSetting)("shippingCountries",{}),a=Object(u.getSetting)("shippingStates",{}),c="string"==typeof n[t.country]?Object(d.decodeEntities)(n[t.country]):"",r="object"==typeof a[t.country]&&"string"==typeof a[t.country][t.state]?Object(d.decodeEntities)(a[t.country][t.state]):t.state,s=[];s.push(t.postcode.toUpperCase()),s.push(t.city),s.push(r),s.push(c);const i=s.filter(Boolean).join(", ");return i?Object(o.createElement)("span",{className:"wc-block-components-shipping-address"},Object(l.sprintf)(
/* translators: %s location. */
Object(l.__)("Shipping to %s","woo-gutenberg-products-block"),i)+" "):null};n(418);const N=e=>{let{label:t=Object(l.__)("Calculate","woo-gutenberg-products-block"),isShippingCalculatorOpen:n,setIsShippingCalculatorOpen:a}=e;return Object(o.createElement)("button",{className:"wc-block-components-totals-shipping__change-address-button",onClick:()=>{a(!n)},"aria-expanded":n},t)},I=e=>{let{showCalculator:t,isShippingCalculatorOpen:n,setIsShippingCalculatorOpen:a,shippingAddress:c}=e;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(C,{address:c}),t&&Object(o.createElement)(N,{label:Object(l.__)("(change address)","woo-gutenberg-products-block"),isShippingCalculatorOpen:n,setIsShippingCalculatorOpen:a}))},S=e=>{let{showCalculator:t,isShippingCalculatorOpen:n,setIsShippingCalculatorOpen:a,isCheckout:c=!1}=e;return t?Object(o.createElement)(N,{isShippingCalculatorOpen:n,setIsShippingCalculatorOpen:a}):Object(o.createElement)("em",null,c?Object(l.__)("No shipping options available","woo-gutenberg-products-block"):Object(l.__)("Calculated during checkout","woo-gutenberg-products-block"))};t.a=e=>{let{currency:t,values:n,showCalculator:a=!0,showRateSelector:r=!0,isCheckout:d=!1,className:m}=e;const[g,h]=Object(o.useState)(!1),{shippingAddress:j,cartHasCalculatedShipping:E,shippingRates:f,isLoadingRates:_}=Object(i.a)(),v=Object(u.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(n.total_shipping,10)+parseInt(n.total_shipping_tax,10):parseInt(n.total_shipping,10),k=f.some(e=>e.shipping_rates.length)||v,y={isShippingCalculatorOpen:g,setIsShippingCalculatorOpen:h},C=f.flatMap(e=>e.shipping_rates.filter(e=>e.selected).flatMap(e=>e.name));return Object(o.createElement)("div",{className:s()("wc-block-components-totals-shipping",m)},Object(o.createElement)(p.TotalsItem,{label:Object(l.__)("Shipping","woo-gutenberg-products-block"),value:k&&E?v:Object(o.createElement)(S,c()({showCalculator:a,isCheckout:d},y)),description:k&&E?Object(o.createElement)(o.Fragment,null,Object(o.createElement)(b,{selectedShippingRates:C}),Object(o.createElement)(I,c()({shippingAddress:j,showCalculator:a},y))):null,currency:t}),a&&g&&Object(o.createElement)(w,{onUpdate:()=>{h(!1)}}),r&&E&&Object(o.createElement)(O,{hasRates:k,shippingRates:f,isLoadingRates:_}))}}}]);