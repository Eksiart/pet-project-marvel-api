(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},213:function(e,t,c){},226:function(e,t,c){"use strict";c.r(t);var r=c(4),a=c(0),n=c(37),s=c(35),i=c(51),o=(c(102),c.p+"static/media/mjolnir.61f31e18.png"),l=c(2),u=function(e){var t=e.data,c=t.name,r=t.description,a=t.thumbnail,n=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:r}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(e){var t=Object(a.useState)({}),c=Object(r.a)(t,2),n=c[0],j=c[1],h=Object(s.a)(),d=h.getCharacter,b=h.clearError,m=h.process,f=h.setProcess;Object(a.useEffect)((function(){O();var e=setInterval(O,6e4);return function(){clearInterval(e)}}),[]);var p=function(e){j(e)},O=function(){b();var e=Math.floor(400*Math.random())+1011e3;d(e).then(p).then((function(){return f("confirmed")}))};return Object(l.jsxs)("div",{className:"randomchar",children:[Object(i.a)(m,u,n),Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:O,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=c(34),d=c(227),b=c(228),m=c(10),f=c(29),p=(c(103),function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),n=c[0],i=c[1],o=Object(a.useState)(!1),u=Object(r.a)(o,2),j=u[0],p=u[1],O=Object(a.useState)(210),v=Object(r.a)(O,2),x=v[0],_=v[1],g=Object(a.useState)(!1),N=Object(r.a)(g,2),k=N[0],w=N[1],y=Object(s.a)(),C=y.getAllCharacters,E=y.process,S=y.setProcess;Object(a.useEffect)((function(){F(x,!0)}),[]);var F=function(e,t){p(!t),C(e).then(P).then((function(){return S("confirmed")}))},P=function(e){var t=!1;e.length<9&&(t=!0),i((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e))})),p((function(e){return!1})),_((function(e){return e+9})),w((function(e){return t}))},T=Object(a.useRef)([]),I=function(e){T.current.forEach((function(e){var t;return null===e||void 0===e||null===(t=e.classList)||void 0===t?void 0:t.remove("char__item_selected")})),T.current[e].classList.add("char__item_selected"),T.current[e].focus()};var M=Object(a.useMemo)((function(){return function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(m.a,{});case"loading":return c?Object(l.jsx)(t,{}):Object(l.jsx)(m.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(f.a,{});default:throw new Error("Unexpected process state")}}(E,(function(){return function(t){var c=t.map((function(t,c){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(r={objectFit:"unset"}),Object(l.jsx)(d.a,{timeout:500,classNames:"char__item",children:Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return T.current[c]=e},onClick:function(){e.onCharSelected(t.id),I(c)},onKeyPress:function(r){" "!==r.key&&"Enter"!==r.key||(console.log("enter press here! "),e.onCharSelected(t.id),I(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:r}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},c)},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(b.a,{component:null,children:c})})}(n)}),j)}),[E]);return Object(l.jsxs)("div",{className:"char__list",children:[M,Object(l.jsx)("button",{className:"button button__main button__long",disabled:j,style:{display:k?"none":"block"},onClick:function(){return F(x)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),O=c(6),v=(c(104),function(e){var t=e.data,c=t.name,r=t.description,a=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:a,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"Homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:r}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:Object(l.jsx)(O.b,{to:"/comics/".concat(e.resourceURI.split("/")[6]),children:e.name})},t)}))]})]})}),x=function(e){var t=Object(a.useState)(null),c=Object(r.a)(t,2),n=c[0],o=c[1],u=Object(s.a)(),j=u.getCharacter,h=u.clearError,d=u.process,b=u.setProcess;Object(a.useEffect)((function(){m()}),[e.charId]);var m=function(){var t=e.charId;t&&(h(),j(t).then(f).then((function(){return b("confirmed")})))},f=function(e){o(e)};return Object(l.jsx)("div",{className:"char__info",children:Object(i.a)(d,v,n)})},_=c(25),g=c(26),N=c(30),k=c(32),w=function(e){Object(N.a)(c,e);var t=Object(k.a)(c);function c(){var e;Object(_.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(g.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(f.a,{}):this.props.children}}]),c}(a.Component),y=w,C=c.p+"static/media/vision.067d4ae1.png",E=c(219),S=c(220),F=(c(213),function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(s.a)(),o=i.getCharacterByName,u=i.clearError,j=i.process,h=i.setProcess,d=function(e){n(e)},b="error"===j?Object(l.jsx)("div",{className:"char_search-critical-error",children:Object(l.jsx)(f.a,{})}):null,m=c?c.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(l.jsx)(O.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(E.d,{initialValues:{charName:""},validationSchema:S.a({charName:S.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,u(),o(t).then(d).then((function(){return h("confirmed")}))},children:Object(l.jsxs)(E.c,{children:[Object(l.jsx)("label",{htmlFor:"charName",className:"char__search-label",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(E.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===j,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(E.a,{component:"div",className:"char__searc-error",name:"charName"})]})}),m,b]})});t.default=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel information portal"})]}),Object(l.jsx)(y,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(y,{children:Object(l.jsx)(p,{onCharSelected:function(e){s(e)}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(y,{children:Object(l.jsx)(x,{charId:c})}),Object(l.jsx)(y,{children:Object(l.jsx)(F,{})})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:C,alt:"vision"})]})}},29:function(e,t,c){"use strict";var r=c.p+"static/media/error.42292aa1.gif",a=c(2);t.a=function(){return Object(a.jsx)("img",{src:r,alt:"Error",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})}},35:function(e,t,c){"use strict";var r=c(38),a=c.n(r),n=c(39),s=c(4),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],r=t[1],o=Object(i.useCallback)(function(){var e=Object(n.a)(a.a.mark((function e(t){var c,n,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},r("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),r("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{request:o,clearError:Object(i.useCallback)((function(){r("loading")}),[]),process:c,setProcess:r}}(),t=e.request,c=e.clearError,r=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=6ee25e191639a01dff88c6912dd17f12",j=210,h=function(){var e=Object(n.a)(a.a.mark((function e(){var c,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:j,e.next=3,t("".concat(l,"characters?limit=",9,"&offset=").concat(c,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(b));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters/").concat(c,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",b(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"Desciription about this character was not found.",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},m=function(){var e=Object(n.a)(a.a.mark((function e(){var c,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:j,e.next=3,t("".concat(l,"comics?orderBy=issueNumber&limit=",8,"&offset=").concat(c,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"comics/").concat(c,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",p(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description.",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}},O=function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters?name=").concat(c,"&").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(b));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{clearError:c,process:r,setProcess:o,getAllCharacters:h,getCharacter:d,getAllComics:m,getComic:f,getCharacterByName:O}}},51:function(e,t,c){"use strict";var r=c(10),a=c(29),n=(c(53),c(2)),s=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(n.jsx)(s,{});case"loading":return Object(n.jsx)(r.a,{});case"confirmed":return Object(n.jsx)(t,{data:c});case"error":return Object(n.jsx)(a.a,{});default:throw new Error("Unexpected process state")}}},53:function(e,t,c){}}]);
//# sourceMappingURL=6.9c11b5f2.chunk.js.map