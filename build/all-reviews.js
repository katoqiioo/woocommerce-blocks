this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["all-reviews"]=function(e){function t(t){for(var o,a,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(d&&d(t);b.length;)b.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],o=!0,i=1;i<r.length;i++){var s=r[i];0!==n[s]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={7:0},c=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;return c.push([391,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},11:function(e,t){e.exports=window.wp.primitives},115:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return d}));var o=r(0),n=r(1),c=r(5),a=r(2),i=r(3);const s=(e,t,r)=>Object(o.createElement)(c.BlockControls,null,Object(o.createElement)(i.ToolbarGroup,{controls:[{icon:"edit",title:r,onClick:()=>t({editMode:!e}),isActive:e}]})),l=(e,t)=>{const r=Object(a.getSetting)("showAvatars",!0),c=Object(a.getSetting)("reviewRatingsEnabled",!0);return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.ToggleControl,{label:Object(n.__)("Product rating","woo-gutenberg-products-block"),checked:e.showReviewRating,onChange:()=>t({showReviewRating:!e.showReviewRating})}),e.showReviewRating&&!c&&Object(o.createElement)(i.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(o.createInterpolateElement)(Object(n.__)("Product rating is disabled in your <a>store settings</a>.","woo-gutenberg-products-block"),{a:Object(o.createElement)("a",{href:Object(a.getAdminLink)("admin.php?page=wc-settings&tab=products"),target:"_blank",rel:"noopener noreferrer"})})),Object(o.createElement)(i.ToggleControl,{label:Object(n.__)("Reviewer name","woo-gutenberg-products-block"),checked:e.showReviewerName,onChange:()=>t({showReviewerName:!e.showReviewerName})}),Object(o.createElement)(i.ToggleControl,{label:Object(n.__)("Image","woo-gutenberg-products-block"),checked:e.showReviewImage,onChange:()=>t({showReviewImage:!e.showReviewImage})}),Object(o.createElement)(i.ToggleControl,{label:Object(n.__)("Review date","woo-gutenberg-products-block"),checked:e.showReviewDate,onChange:()=>t({showReviewDate:!e.showReviewDate})}),Object(o.createElement)(i.ToggleControl,{label:Object(n.__)("Review content","woo-gutenberg-products-block"),checked:e.showReviewContent,onChange:()=>t({showReviewContent:!e.showReviewContent})}),e.showReviewImage&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.__experimentalToggleGroupControl,{label:Object(n.__)("Review image","woo-gutenberg-products-block"),value:e.imageType,onChange:e=>t({imageType:e})},Object(o.createElement)(i.__experimentalToggleGroupControlOption,{value:"reviewer",label:Object(n.__)("Reviewer photo","woo-gutenberg-products-block")}),Object(o.createElement)(i.__experimentalToggleGroupControlOption,{value:"product",label:Object(n.__)("Product","woo-gutenberg-products-block")})),"reviewer"===e.imageType&&!r&&Object(o.createElement)(i.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(o.createInterpolateElement)(Object(n.__)("Reviewer photo is disabled in your <a>site settings</a>.","woo-gutenberg-products-block"),{a:Object(o.createElement)("a",{href:Object(a.getAdminLink)("options-discussion.php"),target:"_blank",rel:"noopener noreferrer"})}))))},d=(e,t)=>Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.ToggleControl,{label:Object(n.__)("Order by","woo-gutenberg-products-block"),checked:e.showOrderby,onChange:()=>t({showOrderby:!e.showOrderby})}),Object(o.createElement)(i.SelectControl,{label:Object(n.__)("Order Product Reviews by","woo-gutenberg-products-block"),value:e.orderby,options:[{label:"Most recent",value:"most-recent"},{label:"Highest Rating",value:"highest-rating"},{label:"Lowest Rating",value:"lowest-rating"}],onChange:e=>t({orderby:e})}),Object(o.createElement)(i.RangeControl,{label:Object(n.__)("Starting Number of Reviews","woo-gutenberg-products-block"),value:e.reviewsOnPageLoad,onChange:e=>t({reviewsOnPageLoad:e}),max:20,min:1}),Object(o.createElement)(i.ToggleControl,{label:Object(n.__)("Load more","woo-gutenberg-products-block"),checked:e.showLoadMore,onChange:()=>t({showLoadMore:!e.showLoadMore})}),e.showLoadMore&&Object(o.createElement)(i.RangeControl,{label:Object(n.__)("Load More Reviews","woo-gutenberg-products-block"),value:e.reviewsOnLoadMore,onChange:e=>t({reviewsOnLoadMore:e}),max:20,min:1}))},12:function(e,t){e.exports=window.wp.compose},124:function(e,t){},130:function(e,t,r){"use strict";var o=r(0),n=r(4),c=r.n(n),a=r(30),i=r(12);r(172),t.a=Object(i.withInstanceId)(e=>{let{className:t,instanceId:r,label:n="",onChange:i,options:s,screenReaderLabel:l,value:d=""}=e;const u="wc-block-components-sort-select__select-"+r;return Object(o.createElement)("div",{className:c()("wc-block-sort-select","wc-block-components-sort-select",t)},Object(o.createElement)(a.a,{label:n,screenReaderLabel:l,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:u}}),Object(o.createElement)("select",{id:u,className:"wc-block-sort-select__select wc-block-components-sort-select__select",onChange:i,value:d},s&&s.map(e=>Object(o.createElement)("option",{key:e.key,value:e.key},e.label))))})},135:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(1),n=r(19);const c={attributes:{editMode:!1,imageType:"reviewer",orderby:"most-recent",reviewsOnLoadMore:10,reviewsOnPageLoad:10,showLoadMore:!0,showOrderby:!0,showReviewDate:!0,showReviewerName:!0,showReviewImage:!0,showReviewRating:!0,showReviewContent:!0,previewReviews:[{id:1,date_created:"2019-07-15T17:05:04",formatted_date_created:Object(o.__)("July 15, 2019","woo-gutenberg-products-block"),date_created_gmt:"2019-07-15T15:05:04",product_id:0,product_name:Object(o.__)("WordPress Pennant","woo-gutenberg-products-block"),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:Object(o.__)("Alice","woo-gutenberg-products-block"),review:`<p>${Object(o.__)("I bought this product last week and I'm very happy with it.","woo-gutenberg-products-block")}</p>\n`,reviewer_avatar_urls:{48:n.o.defaultAvatar,96:n.o.defaultAvatar},rating:5,verified:!0},{id:2,date_created:"2019-07-12T12:39:39",formatted_date_created:Object(o.__)("July 12, 2019","woo-gutenberg-products-block"),date_created_gmt:"2019-07-12T10:39:39",product_id:0,product_name:Object(o.__)("WordPress Pennant","woo-gutenberg-products-block"),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:Object(o.__)("Bob","woo-gutenberg-products-block"),review:`<p>${Object(o.__)("This product is awesome, I love it!","woo-gutenberg-products-block")}</p>\n`,reviewer_avatar_urls:{48:n.o.defaultAvatar,96:n.o.defaultAvatar},rating:null,verified:!1}]}}},14:function(e,t){e.exports=window.wp.apiFetch},157:function(e,t,r){"use strict";t.a={editMode:{type:"boolean",default:!0},imageType:{type:"string",default:"reviewer"},orderby:{type:"string",default:"most-recent"},reviewsOnLoadMore:{type:"number",default:10},reviewsOnPageLoad:{type:"number",default:10},showLoadMore:{type:"boolean",default:!0},showOrderby:{type:"boolean",default:!0},showReviewDate:{type:"boolean",default:!0},showReviewerName:{type:"boolean",default:!0},showReviewImage:{type:"boolean",default:!0},showReviewRating:{type:"boolean",default:!0},showReviewContent:{type:"boolean",default:!0},previewReviews:{type:"array",default:null}}},158:function(e,t,r){"use strict";var o=r(6),n=r.n(o),c=r(0),a=r(5),i=(r(173),r(61));t.a=e=>{let{attributes:t}=e;return Object(c.createElement)("div",n()({},a.useBlockProps.save({className:Object(i.a)(t)}),Object(i.b)(t)))}},163:function(e,t,r){"use strict";var o=r(0),n=r(1),c=r(9),a=r(3),i=r(5),s=r(2),l=r(76),d=r(30);r(208);var u=e=>{let{onClick:t,label:r=Object(n.__)("Load more","woo-gutenberg-products-block"),screenReaderLabel:c=Object(n.__)("Load more","woo-gutenberg-products-block")}=e;return Object(o.createElement)("div",{className:"wp-block-button wc-block-load-more wc-block-components-load-more"},Object(o.createElement)("button",{className:"wp-block-button__link",onClick:t},Object(o.createElement)(d.a,{label:r,screenReaderLabel:c})))},b=r(130);r(205);var w=e=>{let{onChange:t,readOnly:r,value:c}=e;return Object(o.createElement)(b.a,{className:"wc-block-review-sort-select wc-block-components-review-sort-select",label:Object(n.__)("Order by","woo-gutenberg-products-block"),onChange:t,options:[{key:"most-recent",label:Object(n.__)("Most recent","woo-gutenberg-products-block")},{key:"highest-rating",label:Object(n.__)("Highest rating","woo-gutenberg-products-block")},{key:"lowest-rating",label:Object(n.__)("Lowest rating","woo-gutenberg-products-block")}],readOnly:r,screenReaderLabel:Object(n.__)("Order reviews by","woo-gutenberg-products-block"),value:c})},p=r(4),m=r.n(p),g=r(23),h=r.n(g),v=r(192),_=r.n(v);const O=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";const o=_()(e,{suffix:r,limit:t});return o.html},j=(e,t,r)=>(t<=r?e.start=e.middle+1:e.end=e.middle-1,e),f=(e,t,r,o)=>{const n=((e,t,r)=>{let o={start:0,middle:0,end:e.length};for(;o.start<=o.end;)o.middle=Math.floor((o.start+o.end)/2),t.innerHTML=O(e,o.middle),o=j(o,t.clientHeight,r);return o.middle})(e,t,r);return O(e,n-o.length,o)},k={className:"read-more-content",ellipsis:"&hellip;",lessText:Object(n.__)("Read less","woo-gutenberg-products-block"),maxLines:3,moreText:Object(n.__)("Read more","woo-gutenberg-products-block")};class y extends o.Component{constructor(e){super(e),this.state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},this.reviewContent=Object(o.createRef)(),this.reviewSummary=Object(o.createRef)(),this.getButton=this.getButton.bind(this),this.onClick=this.onClick.bind(this)}componentDidMount(){this.setSummary()}componentDidUpdate(e){e.maxLines===this.props.maxLines&&e.children===this.props.children||this.setState({clampEnabled:null,summary:"."},this.setSummary)}setSummary(){if(this.props.children){const{maxLines:e,ellipsis:t}=this.props;if(!this.reviewSummary.current||!this.reviewContent.current)return;const r=(this.reviewSummary.current.clientHeight+1)*e+1,o=this.reviewContent.current.clientHeight+1>r;this.setState({clampEnabled:o}),o&&this.setState({summary:f(this.reviewContent.current.innerHTML,this.reviewSummary.current,r,t)})}}getButton(){const{isExpanded:e}=this.state,{className:t,lessText:r,moreText:n}=this.props,c=e?r:n;if(c)return Object(o.createElement)("a",{href:"#more",className:t+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},c)}onClick(e){e.preventDefault();const{isExpanded:t}=this.state;this.setState({isExpanded:!t})}render(){const{className:e}=this.props,{content:t,summary:r,clampEnabled:n,isExpanded:c}=this.state;return t?!1===n?Object(o.createElement)("div",{className:e},Object(o.createElement)("div",{ref:this.reviewContent},t)):Object(o.createElement)("div",{className:e},(!c||null===n)&&Object(o.createElement)("div",{ref:this.reviewSummary,"aria-hidden":c,dangerouslySetInnerHTML:{__html:r}}),(c||null===n)&&Object(o.createElement)("div",{ref:this.reviewContent,"aria-hidden":!c},t),this.getButton()):null}}h()(y,"defaultProps",k);var R=y;r(207);var E=e=>{let{attributes:t,review:r={}}=e;const{imageType:c,showReviewDate:a,showReviewerName:i,showReviewImage:s,showReviewRating:l,showReviewContent:d,showProductName:u}=t,{rating:b}=r,w=!(Object.keys(r).length>0),p=Number.isFinite(b)&&l;return Object(o.createElement)("li",{className:m()("wc-block-review-list-item__item","wc-block-components-review-list-item__item",{"is-loading":w,"wc-block-components-review-list-item__item--has-image":s}),"aria-hidden":w},(u||a||i||s||p)&&Object(o.createElement)("div",{className:"wc-block-review-list-item__info wc-block-components-review-list-item__info"},s&&function(e,t,r){var c,a;return r||!e?Object(o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"}):Object(o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"},"product"===t?Object(o.createElement)("img",{"aria-hidden":"true",alt:(null===(c=e.product_image)||void 0===c?void 0:c.alt)||"",src:(null===(a=e.product_image)||void 0===a?void 0:a.thumbnail)||""}):Object(o.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[96]||""}),e.verified&&Object(o.createElement)("div",{className:"wc-block-review-list-item__verified wc-block-components-review-list-item__verified",title:Object(n.__)("Verified buyer","woo-gutenberg-products-block")},Object(n.__)("Verified buyer","woo-gutenberg-products-block")))}(r,c,w),(u||i||p||a)&&Object(o.createElement)("div",{className:"wc-block-review-list-item__meta wc-block-components-review-list-item__meta"},p&&function(e){const{rating:t}=e,r={width:t/5*100+"%"},c=Object(n.sprintf)(
/* translators: %f is referring to the average rating value */
Object(n.__)("Rated %f out of 5","woo-gutenberg-products-block"),t),a={__html:Object(n.sprintf)(
/* translators: %s is referring to the average rating value */
Object(n.__)("Rated %s out of 5","woo-gutenberg-products-block"),Object(n.sprintf)('<strong class="rating">%f</strong>',t))};return Object(o.createElement)("div",{className:"wc-block-review-list-item__rating wc-block-components-review-list-item__rating"},Object(o.createElement)("div",{className:"wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars",role:"img","aria-label":c},Object(o.createElement)("span",{style:r,dangerouslySetInnerHTML:a})))}(r),u&&function(e){return Object(o.createElement)("div",{className:"wc-block-review-list-item__product wc-block-components-review-list-item__product"},Object(o.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(r),i&&function(e){const{reviewer:t=""}=e;return Object(o.createElement)("div",{className:"wc-block-review-list-item__author wc-block-components-review-list-item__author"},t)}(r),a&&function(e){const{date_created:t,formatted_date_created:r}=e;return Object(o.createElement)("time",{className:"wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",dateTime:t},r)}(r))),d&&function(e){return Object(o.createElement)(R,{maxLines:10,moreText:Object(n.__)("Read full review","woo-gutenberg-products-block"),lessText:Object(n.__)("Hide full review","woo-gutenberg-products-block"),className:"wc-block-review-list-item__text wc-block-components-review-list-item__text"},Object(o.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(r))};r(206);var S=e=>{let{attributes:t,reviews:r}=e;const n=Object(s.getSetting)("showAvatars",!0),c=Object(s.getSetting)("reviewRatingsEnabled",!0),a=(n||"product"===t.imageType)&&t.showReviewImage,i=c&&t.showReviewRating,l={...t,showReviewImage:a,showReviewRating:i};return Object(o.createElement)("ul",{className:"wc-block-review-list wc-block-components-review-list"},0===r.length?Object(o.createElement)(E,{attributes:l}):r.map((e,t)=>Object(o.createElement)(E,{key:e.id||t,attributes:l,review:e})))},C=r(6),T=r.n(C),P=r(26),N=r.n(P),L=r(61),x=r(31);class A extends o.Component{render(){const{attributes:e,error:t,isLoading:r,noReviewsPlaceholder:c,reviews:i,totalReviews:d}=this.props;if(t)return Object(o.createElement)(l.a,{className:"wc-block-featured-product-error",error:t,isLoading:r});if(0===i.length&&!r)return Object(o.createElement)(c,{attributes:e});const b=Object(s.getSetting)("reviewRatingsEnabled",!0);return Object(o.createElement)(a.Disabled,null,e.showOrderby&&b&&Object(o.createElement)(w,{readOnly:!0,value:e.orderby,onChange:()=>null}),Object(o.createElement)(S,{attributes:e,reviews:i}),e.showLoadMore&&d>i.length&&Object(o.createElement)(u,{screenReaderLabel:Object(n.__)("Load more reviews","woo-gutenberg-products-block")}))}}var M=(e=>{class t extends o.Component{constructor(){super(...arguments),h()(this,"isPreview",!!this.props.attributes.previewReviews),h()(this,"delayedAppendReviews",this.props.delayFunction(this.appendReviews)),h()(this,"isMounted",!1),h()(this,"state",{error:null,loading:!0,reviews:this.isPreview?this.props.attributes.previewReviews:[],totalReviews:this.isPreview?this.props.attributes.previewReviews.length:0}),h()(this,"setError",async e=>{if(!this.isMounted)return;const{onReviewsLoadError:t}=this.props,r=await Object(x.a)(e);this.setState({reviews:[],loading:!1,error:r}),t(r)})}componentDidMount(){this.isMounted=!0,this.replaceReviews()}componentDidUpdate(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}shouldReplaceReviews(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!N()(e.categoryIds,t.categoryIds)}componentWillUnmount(){this.isMounted=!1,this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}getArgs(e){const{categoryIds:t,order:r,orderby:o,productId:n,reviewsToDisplay:c}=this.props,a={order:r,orderby:o,per_page:c-e,offset:e};if(t){const e=Array.isArray(t)?t:JSON.parse(t);a.category_id=Array.isArray(e)?e.join(","):e}return n&&(a.product_id=n),a}replaceReviews(){if(this.isPreview)return;const{onReviewsReplaced:e}=this.props;this.updateListOfReviews().then(e)}appendReviews(){if(this.isPreview)return;const{onReviewsAppended:e,reviewsToDisplay:t}=this.props,{reviews:r}=this.state;t<=r.length||this.updateListOfReviews(r).then(e)}updateListOfReviews(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const{reviewsToDisplay:t}=this.props,{totalReviews:r}=this.state,o=Math.min(r,t)-e.length;return this.setState({loading:!0,reviews:e.concat(Array(o).fill({}))}),Object(L.c)(this.getArgs(e.length)).then(t=>{let{reviews:r,totalReviews:o}=t;return this.isMounted&&this.setState({reviews:e.filter(e=>Object.keys(e).length).concat(r),totalReviews:o,loading:!1,error:null}),{newReviews:r}}).catch(this.setError)}render(){const{reviewsToDisplay:t}=this.props,{error:r,loading:n,reviews:c,totalReviews:a}=this.state;return Object(o.createElement)(e,T()({},this.props,{error:r,isLoading:n,reviews:c.slice(0,t),totalReviews:a}))}}h()(t,"defaultProps",{delayFunction:e=>e,onReviewsAppended:()=>{},onReviewsLoadError:()=>{},onReviewsReplaced:()=>{}});const{displayName:r=e.name||"Component"}=e;return t.displayName=`WithReviews( ${r} )`,t})(A);t.a=e=>{let{attributes:t,icon:r,name:s,noReviewsPlaceholder:l}=e;const{categoryIds:d,productId:u,reviewsOnPageLoad:b,showProductName:w,showReviewDate:p,showReviewerName:m,showReviewContent:g,showReviewImage:h,showReviewRating:v}=t,{order:_,orderby:O}=Object(L.d)(t.orderby),j=!(g||v||p||m||h||w),f=Object(i.useBlockProps)({className:Object(L.a)(t)});return j?Object(o.createElement)(a.Placeholder,{icon:r,label:s},Object(n.__)("The content for this block is hidden due to block settings.","woo-gutenberg-products-block")):Object(o.createElement)("div",f,Object(o.createElement)(M,{attributes:t,categoryIds:d,delayFunction:e=>Object(c.debounce)(e,400),noReviewsPlaceholder:l,orderby:O,order:_,productId:u,reviewsToDisplay:b}))}},172:function(e,t){},173:function(e,t){},19:function(e,t,r){"use strict";r.d(t,"o",(function(){return c})),r.d(t,"m",(function(){return a})),r.d(t,"l",(function(){return i})),r.d(t,"n",(function(){return s})),r.d(t,"j",(function(){return l})),r.d(t,"e",(function(){return d})),r.d(t,"g",(function(){return u})),r.d(t,"k",(function(){return b})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return p})),r.d(t,"h",(function(){return m})),r.d(t,"a",(function(){return g})),r.d(t,"i",(function(){return h})),r.d(t,"b",(function(){return v})),r.d(t,"f",(function(){return _}));var o,n=r(2);const c=Object(n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),a=c.pluginUrl+"images/",i=c.pluginUrl+"build/",s=c.buildPhase,l=null===(o=n.STORE_PAGES.shop)||void 0===o?void 0:o.permalink,d=n.STORE_PAGES.checkout.id,u=(n.STORE_PAGES.checkout.permalink,n.STORE_PAGES.privacy.permalink),b=(n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink),w=(n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id),p=n.STORE_PAGES.cart.permalink,m=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:Object(n.getSetting)("wpLoginUrl","/wp-login.php"),Object(n.getSetting)("shippingCountries",{})),g=Object(n.getSetting)("allowedCountries",{}),h=Object(n.getSetting)("shippingStates",{}),v=Object(n.getSetting)("allowedStates",{}),_=Object(n.getSetting)("localPickupEnabled",!1)},2:function(e,t){e.exports=window.wc.wcSettings},205:function(e,t){},206:function(e,t){},207:function(e,t){},208:function(e,t){},26:function(e,t){e.exports=window.wp.isShallowEqual},3:function(e,t){e.exports=window.wp.components},30:function(e,t,r){"use strict";var o=r(0),n=r(4),c=r.n(n);t.a=e=>{let t,{label:r,screenReaderLabel:n,wrapperElement:a,wrapperProps:i={}}=e;const s=null!=r,l=null!=n;return!s&&l?(t=a||"span",i={...i,className:c()(i.className,"screen-reader-text")},Object(o.createElement)(t,i,n)):(t=a||o.Fragment,s&&l&&r!==n?Object(o.createElement)(t,i,Object(o.createElement)("span",{"aria-hidden":"true"},r),Object(o.createElement)("span",{className:"screen-reader-text"},n)):Object(o.createElement)(t,i,r))}},31:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const o=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}}},34:function(e,t){e.exports=window.wp.escapeHtml},35:function(e,t,r){"use strict";var o=r(0),n=r(1),c=r(34);t.a=e=>{let{error:t}=e;return Object(o.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:r}=e;return t?"general"===r?Object(o.createElement)("span",null,Object(n.__)("The following error was returned","woo-gutenberg-products-block"),Object(o.createElement)("br",null),Object(o.createElement)("code",null,Object(c.escapeHTML)(t))):"api"===r?Object(o.createElement)("span",null,Object(n.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(o.createElement)("br",null),Object(o.createElement)("code",null,Object(c.escapeHTML)(t))):t:Object(n.__)("An error has prevented the block from being updated.","woo-gutenberg-products-block")})(t))}},391:function(e,t,r){e.exports=r(517)},5:function(e,t){e.exports=window.wp.blockEditor},517:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(1),c=r(8),a=r(80),i=r(560),s=(r(173),r(5)),l=r(3),d=r(163),u=()=>Object(o.createElement)(l.Placeholder,{className:"wc-block-all-reviews",icon:Object(o.createElement)(a.a,{icon:i.a,className:"block-editor-block-icon"}),label:Object(n.__)("All Reviews","woo-gutenberg-products-block")},Object(n.__)("This block shows a list of all product reviews. Your store does not have any reviews yet, but they will show up here when it does.","woo-gutenberg-products-block")),b=r(115),w=r(157),p=r(158),m=r(135);Object(c.registerBlockType)("woocommerce/all-reviews",{apiVersion:2,title:Object(n.__)("All Reviews","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(a.a,{icon:i.a,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[Object(n.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(n.__)("Show a list of all product reviews.","woo-gutenberg-products-block"),supports:{html:!1,color:{background:!1},typography:{fontSize:!0}},example:{...m.a,attributes:{...m.a.attributes,showProductName:!0}},attributes:{...w.a,showProductName:{type:"boolean",default:!0}},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:r}=e;return"woocommerce_recent_reviews"===t&&!(null==r||!r.raw)},transform:e=>{let{instance:t}=e;return Object(c.createBlock)("woocommerce/all-reviews",{reviewsOnPageLoad:t.raw.number,imageType:"product",showLoadMore:!1,showOrderby:!1,showReviewDate:!1,showReviewContent:!1})}}]},edit:e=>{let{attributes:t,setAttributes:r}=e;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(s.InspectorControls,{key:"inspector"},Object(o.createElement)(l.PanelBody,{title:Object(n.__)("Content","woo-gutenberg-products-block")},Object(o.createElement)(l.ToggleControl,{label:Object(n.__)("Product name","woo-gutenberg-products-block"),checked:t.showProductName,onChange:()=>r({showProductName:!t.showProductName})}),Object(b.b)(t,r)),Object(o.createElement)(l.PanelBody,{title:Object(n.__)("List Settings","woo-gutenberg-products-block")},Object(b.c)(t,r))),Object(o.createElement)(d.a,{attributes:t,icon:Object(o.createElement)(a.a,{icon:i.a,className:"block-editor-block-icon"}),name:Object(n.__)("All Reviews","woo-gutenberg-products-block"),noReviewsPlaceholder:u}))},save:p.a})},61:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var o=r(14),n=r.n(o),c=r(4),a=r.n(c),i=r(2);const s=e=>{if(Object(i.getSetting)("reviewRatingsEnabled",!0)){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}},l=e=>n()({path:"/wc/store/v1/products/reviews?"+Object.entries(e).map(e=>e.join("=")).join("&"),parse:!1}).then(e=>e.json().then(t=>({reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}))),d=e=>{const{className:t,categoryIds:r,productId:o,showReviewDate:n,showReviewerName:c,showReviewContent:i,showProductName:s,showReviewImage:l,showReviewRating:d}=e;let u="wc-block-all-reviews";return o&&(u="wc-block-reviews-by-product"),Array.isArray(r)&&(u="wc-block-reviews-by-category"),a()(u,t,{"has-image":l,"has-name":c,"has-date":n,"has-rating":d,"has-content":i,"has-product-name":s})},u=e=>{const{categoryIds:t,imageType:r,orderby:o,productId:n,reviewsOnPageLoad:c,reviewsOnLoadMore:a,showLoadMore:i,showOrderby:s}=e,l={"data-image-type":r,"data-orderby":o,"data-reviews-on-page-load":c,"data-reviews-on-load-more":a,"data-show-load-more":i,"data-show-orderby":s};return n&&(l["data-product-id"]=n),Array.isArray(t)&&(l["data-category-ids"]=t.join(",")),l}},76:function(e,t,r){"use strict";var o=r(0),n=r(1),c=r(80),a=r(197),i=r(4),s=r.n(i),l=r(3),d=r(35);r(124),t.a=e=>{let{className:t,error:r,isLoading:i=!1,onRetry:u}=e;return Object(o.createElement)(l.Placeholder,{icon:Object(o.createElement)(c.a,{icon:a.a}),label:Object(n.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:s()("wc-block-api-error",t)},Object(o.createElement)(d.a,{error:r}),u&&Object(o.createElement)(o.Fragment,null,i?Object(o.createElement)(l.Spinner,null):Object(o.createElement)(l.Button,{isSecondary:!0,onClick:u},Object(n.__)("Retry","woo-gutenberg-products-block"))))}},8:function(e,t){e.exports=window.wp.blocks},9:function(e,t){e.exports=window.lodash}});