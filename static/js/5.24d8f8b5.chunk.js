(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{198:function(e,t,c){},210:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(27),r=c(25),n=c(39),i=(c(87),c.p+"static/media/mjolnir.61f31e18.png"),o=c(2);const l=e=>{let{data:t}=e;const{name:c,description:a,thumbnail:s,homepage:r,wiki:n}=t;let i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s&&(i={objectFit:"contain"}),Object(o.jsxs)("div",{className:"randomchar__block",children:[Object(o.jsx)("img",{src:s,alt:"Random character",className:"randomchar__img",style:i}),Object(o.jsxs)("div",{className:"randomchar__info",children:[Object(o.jsx)("p",{className:"randomchar__name",children:c}),Object(o.jsx)("p",{className:"randomchar__descr",children:a}),Object(o.jsxs)("div",{className:"randomchar__btns",children:[Object(o.jsx)("a",{href:r,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:n,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})};var h=e=>{const[t,c]=Object(a.useState)({}),{getCharacter:s,clearError:h,process:d,setProcess:j}=Object(r.a)();Object(a.useEffect)((()=>{b();const e=setInterval(b,6e4);return()=>{clearInterval(e)}}),[]);const m=e=>{c(e)},b=()=>{h();const e=Math.floor(400*Math.random())+1011e3;s(e).then(m).then((()=>j("confirmed")))};return Object(o.jsxs)("div",{className:"randomchar",children:[Object(n.a)(d,l,t),Object(o.jsxs)("div",{className:"randomchar__static",children:[Object(o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(o.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(o.jsx)("button",{onClick:b,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"try it"})}),Object(o.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})},d=c(211),j=c(212),m=c(7),b=c(22);c(88);var u=e=>{const[t,c]=Object(a.useState)([]),[s,n]=Object(a.useState)(!1),[i,l]=Object(a.useState)(210),[h,u]=Object(a.useState)(!1),{getAllCharacters:O,process:_,setProcess:x}=Object(r.a)();Object(a.useEffect)((()=>{p(i,!0)}),[]);const p=(e,t)=>{n(!t),O(e).then(v).then((()=>x("confirmed")))},v=e=>{let t=!1;e.length<9&&(t=!0),c((t=>[...t,...e])),n((e=>!1)),l((e=>e+9)),u((e=>t))},g=Object(a.useRef)([]),N=e=>{g.current.forEach((e=>{var t;return null===e||void 0===e||null===(t=e.classList)||void 0===t?void 0:t.remove("char__item_selected")})),g.current[e].classList.add("char__item_selected"),g.current[e].focus()};const f=Object(a.useMemo)((()=>((e,t,c)=>{switch(e){case"waiting":return Object(o.jsx)(m.a,{});case"loading":return c?Object(o.jsx)(t,{}):Object(o.jsx)(m.a,{});case"confirmed":return Object(o.jsx)(t,{});case"error":return Object(o.jsx)(b.a,{});default:throw new Error("Unexpected process state")}})(_,(()=>function(t){const c=t.map(((t,c)=>{let a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(o.jsx)(d.a,{timeout:500,classNames:"char__item",children:Object(o.jsxs)("li",{className:"char__item",tabIndex:0,ref:e=>g.current[c]=e,onClick:()=>{e.onCharSelected(t.id),N(c)},onKeyPress:a=>{" "!==a.key&&"Enter"!==a.key||(console.log("enter press here! "),e.onCharSelected(t.id),N(c))},children:[Object(o.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(o.jsx)("div",{className:"char__name",children:t.name})]},c)},t.id)}));return Object(o.jsx)("ul",{className:"char__grid",children:Object(o.jsx)(j.a,{component:null,children:c})})}(t)),s)),[_]);return Object(o.jsxs)("div",{className:"char__list",children:[f,Object(o.jsx)("button",{className:"button button__main button__long",disabled:s,style:{display:h?"none":"block"},onClick:()=>p(i),children:Object(o.jsx)("div",{className:"inner",children:"load more"})})]})},O=c(5);c(89);const _=e=>{let{data:t}=e;const{name:c,description:a,thumbnail:s,homepage:r,wiki:n,comics:i}=t;let l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s&&(l={objectFit:"contain"}),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"char__basics",children:[Object(o.jsx)("img",{src:s,alt:c,style:l}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"char__info-name",children:c}),Object(o.jsxs)("div",{className:"char__btns",children:[Object(o.jsx)("a",{href:r,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"Homepage"})}),Object(o.jsx)("a",{href:n,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(o.jsx)("div",{className:"char__descr",children:a}),Object(o.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(o.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map(((e,t)=>{if(!(t>9))return Object(o.jsx)("li",{className:"char__comics-item",children:Object(o.jsx)(O.b,{to:"/comics/".concat(e.resourceURI.split("/")[6]),children:e.name})},t)}))]})]})};var x=e=>{const[t,c]=Object(a.useState)(null),{getCharacter:s,clearError:i,process:l,setProcess:h}=Object(r.a)();Object(a.useEffect)((()=>{d()}),[e.charId]);const d=()=>{const{charId:t}=e;t&&(i(),s(t).then(j).then((()=>h("confirmed"))))},j=e=>{c(e)};return Object(o.jsx)("div",{className:"char__info",children:Object(n.a)(l,_,t)})};class p extends a.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,t){console.log(e,t),this.setState({error:!0})}render(){return this.state.error?Object(o.jsx)(b.a,{}):this.props.children}}var v=p,g=c.p+"static/media/vision.067d4ae1.png",N=c(203),f=c(204);c(198);var y=()=>{const[e,t]=Object(a.useState)(null),{getCharacterByName:c,clearError:s,process:n,setProcess:i}=Object(r.a)(),l=e=>{t(e)},h="error"===n?Object(o.jsx)("div",{className:"char_search-critical-error",children:Object(o.jsx)(b.a,{})}):null,d=e?e.length>0?Object(o.jsxs)("div",{className:"char__search-wrapper",children:[Object(o.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",e[0].name," page?"]}),Object(o.jsx)(O.b,{to:"/characters/".concat(e[0].id),className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"To page"})})]}):Object(o.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(o.jsxs)("div",{className:"char__search-form",children:[Object(o.jsx)(N.d,{initialValues:{charName:""},validationSchema:f.a({charName:f.b().required("This field is required")}),onSubmit:e=>{let{charName:t}=e;var a;a=t,s(),c(a).then(l).then((()=>i("confirmed")))},children:Object(o.jsxs)(N.c,{children:[Object(o.jsx)("label",{htmlFor:"charName",className:"char__search-label",children:"Or find a character by name:"}),Object(o.jsxs)("div",{className:"char__search-wrapper",children:[Object(o.jsx)(N.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(o.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===n,children:Object(o.jsx)("div",{className:"inner",children:"find"})})]}),Object(o.jsx)(N.a,{component:"div",className:"char__searc-error",name:"charName"})]})}),d,h]})};t.default=()=>{const[e,t]=Object(a.useState)(null);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(s.a,{children:[Object(o.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(o.jsx)("title",{children:"Marvel information portal"})]}),Object(o.jsx)(v,{children:Object(o.jsx)(h,{})}),Object(o.jsxs)("div",{className:"char__content",children:[Object(o.jsx)(v,{children:Object(o.jsx)(u,{onCharSelected:e=>{t(e)}})}),Object(o.jsxs)("div",{children:[Object(o.jsx)(v,{children:Object(o.jsx)(x,{charId:e})}),Object(o.jsx)(v,{children:Object(o.jsx)(y,{})})]})]}),Object(o.jsx)("img",{className:"bg-decoration",src:g,alt:"vision"})]})}},22:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",s=c(2);t.a=()=>Object(s.jsx)("img",{src:a,alt:"Error",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})},25:function(e,t,c){"use strict";var a=c(0);t.a=()=>{const{request:e,clearError:t,process:c,setProcess:s}=(()=>{const[e,t]=Object(a.useState)("waiting"),c=Object(a.useCallback)((async function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t("loading");try{const t=await fetch(e,{method:c,body:a,headers:s});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status ").concat(t.status));return await t.json()}catch(r){throw t("error"),r}}),[]);return{request:c,clearError:Object(a.useCallback)((()=>{t("loading")}),[]),process:e,setProcess:t}})(),r="https://gateway.marvel.com:443/v1/public/",n="apikey=6ee25e191639a01dff88c6912dd17f12",i=210,o=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"Desciription about this character was not found.",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>({id:e.id,title:e.title,description:e.description||"There is no description.",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"});return{clearError:t,process:c,setProcess:s,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;const c=await e("".concat(r,"characters?limit=",9,"&offset=").concat(t,"&").concat(n));return c.data.results.map(o)},getCharacter:async t=>{const c=await e("".concat(r,"characters/").concat(t,"?").concat(n));return o(c.data.results[0])},getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;const c=await e("".concat(r,"comics?orderBy=issueNumber&limit=",8,"&offset=").concat(t,"&").concat(n));return c.data.results.map(l)},getComic:async t=>{const c=await e("".concat(r,"comics/").concat(t,"?").concat(n));return l(c.data.results[0])},getCharacterByName:async t=>(await e("".concat(r,"characters?name=").concat(t,"&").concat(n))).data.results.map(o)}}},39:function(e,t,c){"use strict";var a=c(7),s=c(22),r=(c(40),c(2));var n=()=>Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(r.jsxs)("div",{className:"skeleton",children:[Object(r.jsxs)("div",{className:"pulse skeleton__header",children:[Object(r.jsx)("div",{className:"pulse skeleton__circle"}),Object(r.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(r.jsx)("div",{className:"pulse skeleton__block"}),Object(r.jsx)("div",{className:"pulse skeleton__block"}),Object(r.jsx)("div",{className:"pulse skeleton__block"})]})]});t.a=(e,t,c)=>{switch(e){case"waiting":return Object(r.jsx)(n,{});case"loading":return Object(r.jsx)(a.a,{});case"confirmed":return Object(r.jsx)(t,{data:c});case"error":return Object(r.jsx)(s.a,{});default:throw new Error("Unexpected process state")}}},40:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){}}]);
//# sourceMappingURL=5.24d8f8b5.chunk.js.map