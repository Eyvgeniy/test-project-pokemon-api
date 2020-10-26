(this["webpackJsonptest-project-pokemon-api"]=this["webpackJsonptest-project-pokemon-api"]||[]).push([[0],{20:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(21),i=n.n(r),o=(n(31),n(32),n(3)),l=n(9),u=n(2),j=n(4),d=n(22),b=function(e){var t=e.condition,n=e.to,a=e.children,s=Object(d.a)(e,["condition","to","children"]);return Object(c.jsx)(u.b,Object(j.a)(Object(j.a)({},s),{},{render:function(){return t?a:Object(c.jsx)(u.a,{to:n})}}))},p=n(12),h=function(e){var t=e.isValid,n=Object(a.useState)(""),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(""),j=Object(o.a)(l,2),d=j[0],b=j[1],p=Object(a.useState)(!1),h=Object(o.a)(p,2),O=h[0],x=h[1],m=Object(u.g)(),f=function(e){return function(t){e(t.target.value)}};return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r,d)&&(x(!1),m.push("/otp")),x(!0)},children:[Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsxs)("label",{htmlFor:"inputLogin",className:"form-label d-block mx-auto",children:["Login",Object(c.jsx)("input",{name:"login",type:"text",className:"form-control",id:"inputLogin","aria-describedby":"loginHelp",required:!0,value:r,onChange:f(i)})]})}),Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsxs)("label",{name:"password",htmlFor:"inputPassword",className:"form-label d-block mx-auto",children:["Password",Object(c.jsx)("input",{name:"password",type:"password",className:"form-control",id:"inputPassword",value:d,required:!0,onChange:f(b)})]})}),Object(c.jsx)("button",{type:"submit",className:"btn btn-secondary d-block mx-auto",children:"Sign In"}),O&&Object(c.jsx)("p",{className:"text-danger my-2",children:"Login or password is not valid"})]})},O=h;h.propsType={isValid:n.n(p).a.func.isRequired};var x=function(e){var t=e.isValid;return Object(c.jsx)("div",{className:"container h-100 d-flex justify-content-center align-items-center",children:Object(c.jsx)("div",{className:"d-flex",children:Object(c.jsx)(O,{isValid:t})})})},m=function(e){var t=e.isValid,n=Object(a.useState)(""),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(null),j=Object(o.a)(l,2),d=j[0],b=j[1],p=Object(u.g)();return Object(c.jsxs)("form",{className:"h-100 d-flex flex-column justify-content-between",onSubmit:function(e){e.preventDefault(),t(r)&&p.push("/cards"),b("Code is not valid")},children:[Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsxs)("label",{htmlFor:"inputOtp",className:"form-label",children:["Code from SMS",Object(c.jsx)("input",{name:"otp",type:"text",className:"form-control",id:"inputOtp",value:r,required:!0,onChange:function(e){var t=e.target;i(t.value)}}),d&&Object(c.jsx)("p",{className:"text-danger",children:d})]})}),Object(c.jsx)("button",{type:"submit",className:"btn btn-secondary d-block mx-auto",children:"Continue"})]})},f=function(e){var t=e.isValid;return Object(c.jsx)("div",{className:"container h-100 d-flex justify-content-center align-items-center",children:Object(c.jsx)("div",{className:"p-3 bg-light",style:{height:"242px"},children:Object(c.jsx)(m,{isValid:t})})})},v=n(11),g=n.n(v),y=n(14),N=n(13),k="https://api.pokemontcg.io/",w="v1",S=function(e){return[k,w,e].join("/")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.entries(t).forEach((function(t){var n=Object(o.a)(t,2),c=n[0],a=n[1];return e.searchParams.set(c,a)}))},E=function(e){return Object.keys(e).length>0},B=function(){var e=Object(y.a)(g.a.mark((function e(t){var n,c,a,s,r,i,o=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},c=S(t),a=new URL(c),E(n)&&C(a,n),e.prev=4,e.next=7,fetch(a);case 7:return s=e.sent,e.next=10,s.json();case 10:return r=e.sent,e.next=13,s.headers.get("total-count");case 13:return i=e.sent,e.abrupt("return",{data:r,total:i});case 17:throw e.prev=17,e.t0=e.catch(4),new Error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),F=function(e){var t=e.isLinkBack,n=e.logout,a=Object(u.g)();return Object(c.jsx)("div",{style:{backgroundColor:"#EBEBEB"},children:Object(c.jsxs)("ul",{className:"nav d-flex justify-content-between border",children:[Object(c.jsx)("li",{className:"nav-item",children:t&&Object(c.jsx)("button",{className:"btn btn-link text-dark",onClick:function(){return a.goBack()},style:{borderStyle:"none"},children:"< Back"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("button",{className:"btn btn-link text-dark",onClick:function(){return n()},children:"Logout"})})]})})},L=function(e){var t=e.name,n=e.list,s=e.setValue,r=e.isLoading,i=Object(a.useState)(t),l=Object(o.a)(i,2),u=l[0],j=l[1];return Object(c.jsxs)("select",{name:t,className:"form-select  my-3 w-75",disabled:r,value:u,onChange:function(e){e.preventDefault(),j(e.target.value),s(e.target)},children:[Object(c.jsx)("option",{value:"",children:t}),n.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})},V=n.p+"static/media/logo.103b5fa1.svg",P=function(){return Object(c.jsx)("div",{className:" w-100 h-100 d-flex justify-content-center align-items-center",children:Object(c.jsx)("img",{className:"App-logo",src:V,alt:"loading"})})},I=function(e){var t=e.cards,n=Object(u.i)().url;return Object(c.jsx)("div",{className:"d-flex flex-wrap justify-content-center aligh-items-center overflow-auto",children:t.map((function(e,t){return Object(c.jsxs)("div",{className:"card w-25 my-2 mx-4",children:[Object(c.jsx)("img",{src:e.imageUrl,className:"card-img-top",alt:"..."}),Object(c.jsxs)("div",{className:"card-body p-1 h-25",children:[Object(c.jsx)(l.b,{to:{pathname:"".concat(n,"/").concat(e.id),state:e},children:e.name}),Object(c.jsx)("p",{className:"card-text",children:e.artist})]})]},t)}))})},D=n(24),J=n.n(D),T=function(e,t,n){var c=Math.ceil(n/t);if(e>c)return null;var a="...",s=[];if(5>=c)for(var r=1;r<=c;r++)s.push(r);else if(e-1<=2){for(var i=1;i<=e+2;i++)s.push(i);s.push(a),s.push(c)}else if(c-e<=2){s.push(1),s.push(a);for(var o=e-2;o<=c;o++)s.push(o)}else{s.push(1),s.push(a);for(var l=e-2;l<=e+2;l++)s.push(l);s.push(a),s.push(c)}return s},U=function(e){var t=e.page,n=e.pageSize,a=e.total,s=e.setPage;if(0===a)return null;var r=T(t,n,a);return Object(c.jsx)("div",{className:"d-flex justify-content-center py-1",style:{backgroundColor:"#EBEBEB"},children:Object(c.jsx)("nav",{"aria-label":"Page navigation example",children:Object(c.jsx)("ul",{className:"pagination justify-content-center my-0",children:r.map((function(e,n){var a,r=J()({"btn text-dark mx-1":!0,"btn-active":t===e});return Object(c.jsx)("li",{className:"page-item",children:Object(c.jsx)("button",{className:r,style:{backgroundColor:"#EBEBEB",borderStyle:"none"},onClick:(a=e,function(){s(a)}),children:e})},n)}))})})})},q=function(){var e=Object(u.h)().state;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"row my-2 d-flex flex-grow-1",children:[Object(c.jsx)("div",{className:"col-md-6 ",children:Object(c.jsx)("div",{className:"d-flex flex-column align-items-center h-100",children:Object(c.jsx)("img",{src:e.imageUrlHiRes,alt:e.name,className:"w-75 px-auto"})})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"p-2",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Name: "}),Object(c.jsx)("strong",{children:e.name})]}),e.types&&Object(c.jsx)("p",{children:"Type: ".concat(e.types," ")}),Object(c.jsx)("p",{children:"Subtype: ".concat(e.subtype)}),Object(c.jsx)("hr",{}),e.attacks&&Object(c.jsx)("p",{children:"attackDamage: ".concat(e.attacks[0].damage)}),e.attacks&&Object(c.jsx)("p",{children:"attackCost: ".concat(e.attacks[0].cost[0])}),e.resistances&&Object(c.jsx)("p",{children:"resistances: ".concat(JSON.stringify(e.resistances[0]))}),e.evolvesFrom&&Object(c.jsx)("p",{children:"evolvesFrom: ".concat(e.evolvesFrom)}),e.attacks&&e.attacks.map((function(t){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"mb-1",children:"Name: ".concat(t.name)}),t.text&&Object(c.jsx)("small",{children:"Description: ".concat(t.text)})]},e.id)}))]})})]})})},z=(n(20),{types:"",subtype:"",page:1,pageSize:6}),A=[{path:"types",name:"types"},{path:"subtypes",name:"subtype"}],M=A.reduce((function(e,t){var n=t.path;return Object(j.a)(Object(j.a)({},e),{},Object(N.a)({},n,[]))}),{}),R={cards:[],total:0},H=function(e){return function(t){return e((function(e){return Object(j.a)(Object(j.a)({},e),{},{page:t})}))}},Y=function(e){return function(t){return e((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(N.a)({},t.name,t.value))}))}},G=function(e){var t=e.logout,n=Object(a.useState)(z),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(M),d=Object(o.a)(l,2),b=d[0],p=d[1],h=Object(a.useState)(R),O=Object(o.a)(h,2),x=O[0],m=O[1],f=Object(a.useState)(!1),v=Object(o.a)(f,2),k=v[0],w=v[1],S=Object(a.useState)(!1),C=Object(o.a)(S,2),E=C[0],V=C[1],D=Object(u.i)().path;return Object(a.useEffect)((function(){w(!0);A.forEach(function(){var e=Object(y.a)(g.a.mark((function e(t){var n,c,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.path,e.prev=1,e.next=4,B(n);case 4:c=e.sent,a=c.data,p((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(N.a)({},n,a[n]))})),w(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(a.useEffect)((function(){""!==r.types||""!==r.subtype?(V(!0),function(){var e=Object(y.a)(g.a.mark((function e(t){var n,c,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(t,r);case 3:n=e.sent,c=n.data,a=n.total,m({cards:c.cards,total:Number(a)}),V(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()("cards")):m(R)}),[r]),Object(c.jsxs)("div",{className:"container h-100 d-flex flex-column ",children:[Object(c.jsx)(F,{isLinkBack:!0,logout:t}),Object(c.jsx)("div",{className:"row my-2 d-flex flex-grow-1",children:Object(c.jsxs)(u.d,{children:[Object(c.jsxs)(u.b,{exact:!0,path:D,children:[Object(c.jsx)("div",{className:"col-sm-3 d-flex",children:Object(c.jsx)("div",{className:"border w-100 d-flex flex-column align-items-center",style:{backgroundColor:"#FAFAFA"},children:A.map((function(e,t){var n=e.path,a=e.name;return Object(c.jsx)(L,{name:a,setValue:Y(i),list:b[n],isLoading:k},t)}))})}),Object(c.jsx)("div",{className:"col-sm-9 flex-grow-1",children:Object(c.jsxs)("div",{className:"bg-light border h-100 d-flex flex-column justify-content-between",children:[E||k?Object(c.jsx)(P,{}):Object(c.jsx)(I,{cards:x.cards}),Object(c.jsx)(U,{page:r.page,pageSize:r.pageSize,total:x.total,setPage:H(i)})]})})]}),Object(c.jsx)(u.b,{path:"".concat(D,"/:cardId"),children:Object(c.jsx)(q,{cards:x.cards})})]})})]})},K=function(){var e=Object(u.g)();return setTimeout((function(){return e.push("/cards")}),3e3),Object(c.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"You are already Logged In, redirecting to Cards Page!"})})})},Q=function(e){localStorage.setItem("user",JSON.stringify(e))},W=function(){return JSON.parse(localStorage.getItem("user"))},X=function(e,t){return function(n,c){var a=e.find((function(e){return e.login===n}));if(a&&a.password===c)return t((function(e){return Object(j.a)(Object(j.a)({},e),{},{login:n,password:c,passCheck:!0})})),Q({login:n,password:c,passCheck:!0}),!0;return!1}},Z=function(e,t){return function(n){if(n===e){t((function(e){return Object(j.a)(Object(j.a)({},e),{},{otpCheck:!0})}));var c=W(),a=Object(j.a)(Object(j.a)({},c),{},{otpCheck:!0});return Q(a),!0}return!1}},$={login:null,password:null,passCheck:!1,otp:"123456",otpCheck:!0},_=function(e){var t=e.savedUser,n=e.users,s=t||$,r=Object(a.useState)(s),i=Object(o.a)(r,2),j=i[0],d=i[1],p=function(){d($),localStorage.clear()};return Object(c.jsx)(l.a,{children:j.otpCheck?Object(c.jsxs)(u.d,{children:[Object(c.jsx)(u.b,{path:"/cards",children:Object(c.jsx)(G,{logout:p})}),Object(c.jsx)(u.b,{path:"*",children:Object(c.jsx)(K,{})})]}):Object(c.jsxs)(u.d,{children:[Object(c.jsx)(b,{path:"/cards",condition:j.otpCheck,to:"/",children:Object(c.jsx)(G,{logout:p})}),Object(c.jsx)(b,{path:"/otp",condition:j.passCheck,to:"/",children:Object(c.jsx)(f,{isValid:Z(j.otp,d)})}),Object(c.jsx)(b,{path:"/",condition:!j.otpCheck,to:"/cards",children:Object(c.jsx)(x,{isValid:X(n,d)})})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},te=n(25),ne=[new function e(t,n,c){Object(te.a)(this,e),this.login=t,this.password=n,this.otp=c}("kode@kode.ru","Enk0deng")],ce=W();i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(_,{savedUser:ce,users:ne})}),document.getElementById("root")),ee()}},[[39,1,2]]]);
//# sourceMappingURL=main.d21be0ae.chunk.js.map