(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[8],{215:function(e,t,c){},229:function(e,t,c){"use strict";c.r(t);var n=c(37),r=c(95),i=c(34),s=c(4),a=c(0),o=c(6),u=c(35),j=(c(215),c(29)),b=c(10),l=c(2),m=function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(b.a,{});case"loading":return c?Object(l.jsx)(t,{}):Object(l.jsx)(b.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(j.a,{});default:throw new Error("Unexpected process state")}},d=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),j=Object(s.a)(r,2),b=j[0],d=j[1],O=Object(a.useState)(0),f=Object(s.a)(O,2),h=f[0],x=f[1],p=Object(a.useState)(!1),_=Object(s.a)(p,2),v=_[0],g=_[1],y=Object(u.a)(),w=y.getAllComics,N=y.process,S=y.setProcess;Object(a.useEffect)((function(){k(h,!0)}),[]);var k=function(e,t){d(!t),w(e).then(A).then((function(){return S("confirmed")}))},A=function(e){var t=!1;e.length<8&&(t=!0),n((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))})),d(!1),x((function(e){return e+8})),g(t)};return Object(l.jsxs)("div",{className:"comics__list",children:[m(N,(function(){return function(e){var t=e.map((function(e,t){return Object(l.jsx)("li",{className:"comics__item",children:Object(l.jsxs)(o.b,{to:"./".concat(e.id),children:[Object(l.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),Object(l.jsx)("div",{className:"comics__item-name",children:e.title}),Object(l.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(l.jsx)("ul",{className:"comics__grid",children:t})}(c)}),b),Object(l.jsx)("button",{className:"button button__main button__long",disabled:b,style:{display:v?"none":"block"},onClick:function(){return k(h)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})};t.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(l.jsx)("title",{children:"Comics page"})]}),Object(l.jsx)(r.a,{}),Object(l.jsx)(d,{})]})}},34:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(8);var r=c(7);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=8.6ba4ddcf.chunk.js.map