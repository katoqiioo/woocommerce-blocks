(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[47],{144:function(e,c,t){"use strict";var a=t(0);t(213),c.a=()=>Object(a.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},145:function(e,c,t){"use strict";var a=t(0),n=t(1),s=t(5),r=t.n(s),o=(t(216),t(144));c.a=e=>{let{children:c,className:t,screenReaderLabel:s,showSpinner:l=!1,isLoading:i=!0}=e;return Object(a.createElement)("div",{className:r()(t,{"wc-block-components-loading-mask":i})},i&&l&&Object(a.createElement)(o.a,null),Object(a.createElement)("div",{className:r()({"wc-block-components-loading-mask__children":i}),"aria-hidden":i},c),i&&Object(a.createElement)("span",{className:"screen-reader-text"},s||Object(n.__)("Loading…","woo-gutenberg-products-block")))}},213:function(e,c){},216:function(e,c){},498:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t(467),s=t(39),r=t(36),o=t(9);c.default=e=>{let{className:c=""}=e;const{cartTotals:t,cartNeedsShipping:l}=Object(r.a)();if(!l)return null;const i=Object(s.getCurrencyFromPriceResponse)(t);return Object(a.createElement)(o.TotalsWrapper,{className:c},Object(a.createElement)(n.a,{showCalculator:!1,showRateSelector:!1,values:t,currency:i}))}}}]);