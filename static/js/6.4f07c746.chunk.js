(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{202:function(e,t,c){},209:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),n=c(25),r=c(39),o=c(53),i=(c(202),c(2));t.default=e=>{let{Component:t,dataType:c}=e;const{id:l}=Object(a.g)(),[u,d]=Object(s.useState)(null),{getComic:p,getCharacter:m,clearError:h,process:b,setProcess:j}=Object(n.a)();Object(s.useEffect)((()=>{g()}),[l]);const g=()=>{switch(h(),c){case"comic":p(l).then(f).then((()=>j("confirmed")));break;case"character":m(l).then(f).then((()=>j("confirmed")))}},f=e=>{d(e)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,{}),Object(r.a)(b,t,u)]})}},22:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",s=c(2);t.a=()=>Object(s.jsx)("img",{src:a,alt:"Error",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})},25:function(e,t,c){"use strict";var a=c(0);t.a=()=>{const{request:e,clearError:t,process:c,setProcess:s}=(()=>{const[e,t]=Object(a.useState)("waiting"),c=Object(a.useCallback)((async function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t("loading");try{const t=await fetch(e,{method:c,body:a,headers:s});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status ").concat(t.status));return await t.json()}catch(n){throw t("error"),n}}),[]);return{request:c,clearError:Object(a.useCallback)((()=>{t("loading")}),[]),process:e,setProcess:t}})(),n="https://gateway.marvel.com:443/v1/public/",r="apikey=6ee25e191639a01dff88c6912dd17f12",o=210,i=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"Desciription about this character was not found.",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>({id:e.id,title:e.title,description:e.description||"There is no description.",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"});return{clearError:t,process:c,setProcess:s,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;const c=await e("".concat(n,"characters?limit=",9,"&offset=").concat(t,"&").concat(r));return c.data.results.map(i)},getCharacter:async t=>{const c=await e("".concat(n,"characters/").concat(t,"?").concat(r));return i(c.data.results[0])},getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;const c=await e("".concat(n,"comics?orderBy=issueNumber&limit=",8,"&offset=").concat(t,"&").concat(r));return c.data.results.map(l)},getComic:async t=>{const c=await e("".concat(n,"comics/").concat(t,"?").concat(r));return l(c.data.results[0])},getCharacterByName:async t=>(await e("".concat(n,"characters?name=").concat(t,"&").concat(r))).data.results.map(i)}}},39:function(e,t,c){"use strict";var a=c(7),s=c(22),n=(c(40),c(2));var r=()=>Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]});t.a=(e,t,c)=>{switch(e){case"waiting":return Object(n.jsx)(r,{});case"loading":return Object(n.jsx)(a.a,{});case"confirmed":return Object(n.jsx)(t,{data:c});case"error":return Object(n.jsx)(s.a,{});default:throw new Error("Unexpected process state")}}},40:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c(52);var a=c.p+"static/media/Avengers.4065c8f9.png",s=c.p+"static/media/Avengers_logo.9eaf2193.png",n=c(2);t.a=()=>Object(n.jsxs)("div",{className:"app__banner",children:[Object(n.jsx)("img",{src:a,alt:"Avengers"}),Object(n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(n.jsx)("br",{}),"Stay tuned!"]}),Object(n.jsx)("img",{src:s,alt:"Avengers logo"})]})}}]);
//# sourceMappingURL=6.4f07c746.chunk.js.map