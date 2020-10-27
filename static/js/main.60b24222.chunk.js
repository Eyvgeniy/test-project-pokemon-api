(this["webpackJsonptest-project-pokemon-api"]=this["webpackJsonptest-project-pokemon-api"]||[]).push([[0],{32:function(e,t,n){},46:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),r=n(17),i=n.n(r),o=(n(45),n(46),n(8)),l=n(12),j=n(5),u=n(7),d=n(33),b=function(e){var t=e.condition,n=e.to,a=e.children,s=Object(d.a)(e,["condition","to","children"]);return Object(c.jsx)(j.b,Object(u.a)(Object(u.a)({},s),{},{render:function(){return t?a:Object(c.jsx)(j.a,{to:n})}}))},h=n(3),O=function(e){var t=e.isValid,n=Object(a.useState)(""),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(""),u=Object(o.a)(l,2),d=u[0],b=u[1],h=Object(a.useState)(!1),O=Object(o.a)(h,2),p=O[0],m=O[1],x=Object(j.g)(),f=function(e){return function(t){e(t.target.value)}};return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r,d)&&(m(!1),x.push("/otp")),m(!0)},children:[Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsxs)("label",{htmlFor:"inputLogin",className:"form-label d-block mx-auto",children:["Login",Object(c.jsx)("input",{name:"login",type:"text",className:"form-control",id:"inputLogin","aria-describedby":"loginHelp",required:!0,value:r,onChange:f(i)})]})}),Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsxs)("label",{name:"password",htmlFor:"inputPassword",className:"form-label d-block mx-auto",children:["Password",Object(c.jsx)("input",{name:"password",type:"password",className:"form-control",id:"inputPassword",value:d,required:!0,onChange:f(b)})]})}),Object(c.jsx)("button",{type:"submit",className:"btn btn-secondary d-block mx-auto",children:"Sign In"}),p&&Object(c.jsx)("p",{className:"text-danger my-2",children:"Login or password is not valid"})]})},p=O;O.propsType={isValid:n.n(h).a.func.isRequired};var m=function(e){var t=e.isValid;return Object(c.jsx)("div",{className:"container h-100 d-flex justify-content-center align-items-center",children:Object(c.jsx)("div",{className:"d-flex",children:Object(c.jsx)(p,{isValid:t})})})},x=function(e){var t=e.isValid,n=Object(a.useState)(""),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(null),u=Object(o.a)(l,2),d=u[0],b=u[1],h=Object(j.g)();return Object(c.jsxs)("form",{className:"h-100 d-flex flex-column justify-content-between",onSubmit:function(e){e.preventDefault(),t(r)&&h.push("/cards"),b("Code is not valid")},children:[Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsxs)("label",{htmlFor:"inputOtp",className:"form-label",children:["Code from SMS",Object(c.jsx)("input",{name:"otp",type:"text",className:"form-control",id:"inputOtp",value:r,required:!0,onChange:function(e){var t=e.target;i(t.value)}}),d&&Object(c.jsx)("p",{className:"text-danger",children:d})]})}),Object(c.jsx)("button",{type:"submit",className:"btn btn-secondary d-block mx-auto",children:"Continue"})]})},f=function(e){var t=e.isValid;return Object(c.jsx)("div",{className:"container h-100 d-flex justify-content-center align-items-center",children:Object(c.jsx)("div",{className:"p-3 bg-light",style:{height:"242px"},children:Object(c.jsx)(x,{isValid:t})})})},g=n(18),v=n.n(g),k=n(22),y=n(20),N="https://api.pokemontcg.io/",w="v1",S=function(e){return[N,w,e].join("/")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.entries(t).forEach((function(t){var n=Object(o.a)(t,2),c=n[0],a=n[1];return e.searchParams.set(c,a)}))},B=function(e){return Object.keys(e).length>0},E=function(){var e=Object(k.a)(v.a.mark((function e(t){var n,c,a,s,r,i,o=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},c=S(t),a=new URL(c),B(n)&&C(a,n),e.prev=4,e.next=7,fetch(a);case 7:return s=e.sent,e.next=10,s.json();case 10:return r=e.sent,e.next=13,s.headers.get("total-count");case 13:return i=e.sent,e.abrupt("return",{data:r,total:i});case 17:throw e.prev=17,e.t0=e.catch(4),new Error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),F=function(e){var t=e.isLinkBack,n=e.logout,a=Object(j.g)();return Object(c.jsx)("div",{style:{backgroundColor:"#EBEBEB"},children:Object(c.jsxs)("ul",{className:"nav d-flex justify-content-between border",children:[Object(c.jsx)("li",{className:"nav-item",children:t&&Object(c.jsx)("button",{className:"btn btn-link text-dark",onClick:function(){return a.goBack()},style:{borderStyle:"none"},children:"< Back"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("button",{className:"btn btn-link text-dark",onClick:function(){return n()},children:"Logout"})})]})})},L=function(e){var t=e.name,n=e.list,s=e.setValue,r=e.isLoading,i=e.query,l=e.setBeginPage,j=i[t]||t,u=Object(a.useState)(j),d=Object(o.a)(u,2),b=d[0],h=d[1];return Object(c.jsxs)("select",{name:t,className:"form-select  my-3 w-75",disabled:r,value:b,onChange:function(e){e.preventDefault(),h(e.target.value),s(e.target),l()},children:[Object(c.jsx)("option",{value:"",children:t}),n&&n.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})},P=n.p+"static/media/logo.103b5fa1.svg",V=function(){return Object(c.jsx)("div",{className:" w-100 h-100 d-flex justify-content-center align-items-center",children:Object(c.jsx)("img",{className:"App-logo",src:P,alt:"loading"})})},I=function(e){var t=e.cards,n=e.showModal,a=Object(j.i)().url;return Object(c.jsx)("div",{className:"d-flex flex-wrap justify-content-center aligh-items-center overflow-auto",children:t&&t.map((function(e,t){return Object(c.jsxs)("div",{className:"card w-25 my-3 mx-4 shadow",children:[Object(c.jsx)("img",{src:e.imageUrl,className:"card-img-top",alt:"...",onClick:n(e.name,e.imageUrlHiRes)}),Object(c.jsxs)("div",{className:"card-body p-1 h-25",children:[Object(c.jsx)(l.b,{to:{pathname:"".concat(a,"/").concat(e.id),state:e},children:e.name}),Object(c.jsx)("p",{className:"card-text",children:e.artist})]})]},t)}))})},M=n(6),q=n.n(M),D=function(e,t,n){var c=Math.ceil(n/t);if(e>c)return null;var a="...",s=[];if(5>=c)for(var r=1;r<=c;r++)s.push(r);else if(e-1<=2){for(var i=1;i<=e+2;i++)s.push(i);s.push(a),s.push(c)}else if(c-e<=2){s.push(1),s.push(a);for(var o=e-2;o<=c;o++)s.push(o)}else{s.push(1),s.push(a);for(var l=e-2;l<=e+2;l++)s.push(l);s.push(a),s.push(c)}return s},T=function(e){var t=e.page,n=e.pageSize,a=e.total,s=e.setPage;if(0===a)return null;var r=D(t,n,a);return Object(c.jsx)("div",{className:"d-flex justify-content-center py-1",style:{backgroundColor:"#EBEBEB"},children:Object(c.jsx)("nav",{"aria-label":"Page navigation example",children:Object(c.jsx)("ul",{className:"pagination justify-content-center my-0",children:r&&r.map((function(e,n){var a,r=q()({"btn text-dark mx-1":!0,"btn-active":t===e});return Object(c.jsx)("li",{className:"page-item",children:Object(c.jsx)("button",{className:r,style:{backgroundColor:"#EBEBEB",borderStyle:"none"},onClick:(a=e,function(){"..."!==a&&s(a)}),children:t===e?Object(c.jsx)("strong",{children:e}):e})},n)}))})})})},U=function(){var e=Object(j.h)().state;return Object(c.jsx)(c.Fragment,{children:e?Object(c.jsxs)("div",{className:"row my-2 d-flex flex-grow-1",children:[Object(c.jsx)("div",{className:"col-md-6 ",children:Object(c.jsx)("div",{className:"d-flex flex-column align-items-center h-100",children:Object(c.jsx)("img",{src:e.imageUrlHiRes,alt:e.name,className:"w-75 px-auto"})})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"p-2",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Name: "}),Object(c.jsx)("strong",{children:e.name})]}),e.types&&Object(c.jsx)("p",{children:"Type: ".concat(e.types," ")}),Object(c.jsx)("p",{children:"Subtype: ".concat(e.subtype)}),Object(c.jsx)("hr",{}),e.attacks&&Object(c.jsx)("p",{children:"attackDamage: ".concat(e.attacks[0].damage)}),e.attacks&&Object(c.jsx)("p",{children:"attackCost: ".concat(e.attacks[0].cost[0])}),e.resistances&&Object(c.jsx)("p",{children:"resistances: ".concat(JSON.stringify(e.resistances[0]))}),e.evolvesFrom&&Object(c.jsx)("p",{children:"evolvesFrom: ".concat(e.evolvesFrom)}),e.attacks&&e.attacks.map((function(e,t){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"mb-1",children:"Attack Name: ".concat(e.name)}),e.text&&Object(c.jsx)("small",{children:"Description: ".concat(e.text)})]},t)}))]})})]}):Object(c.jsx)(j.a,{to:"/cards"})})},A=n(57),H=n(58),J=function(e){var t=e.pokemon,n=e.closeModal,a=function(){return n()};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(A.a,{show:!0,onHide:a,children:[Object(c.jsx)(A.a.Header,{closeButton:!0,children:Object(c.jsx)(A.a.Title,{children:t.name})}),Object(c.jsx)(A.a.Body,{children:Object(c.jsx)("img",{src:t.img,alt:"pokemon",className:"d-block w-75 mx-auto"})}),Object(c.jsx)(A.a.Footer,{children:Object(c.jsx)(H.a,{variant:"secondary",onClick:a,children:"Close"})})]})})},z=(n(32),{types:"",subtype:"",page:1,pageSize:6}),R=[{path:"types",name:"types"},{path:"subtypes",name:"subtype"}],Y=R.reduce((function(e,t){var n=t.path;return Object(u.a)(Object(u.a)({},e),{},Object(y.a)({},n,[]))}),{}),G={cards:[],total:0},K={pokemon:{name:"",img:""},show:null},Q=function(e){return function(t){return e((function(e){return Object(u.a)(Object(u.a)({},e),{},{page:t})}))}},W=function(e){return function(t){return e((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(y.a)({},t.name,t.value))}))}},X=function(e){var t=e.logout,n=Object(a.useState)(z),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(a.useState)(Y),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(a.useState)(G),p=Object(o.a)(O,2),m=p[0],x=p[1],f=Object(a.useState)(K),g=Object(o.a)(f,2),N=g[0],w=g[1],S=Object(a.useState)(!1),C=Object(o.a)(S,2),B=C[0],P=C[1],M=Object(a.useState)(!1),q=Object(o.a)(M,2),D=q[0],A=q[1],H=Object(j.i)().path,X=Object(j.h)().pathname,Z=function(){return i((function(e){return Object(u.a)(Object(u.a)({},e),{},{page:1})}))};return Object(a.useEffect)((function(){P(!0);R.forEach(function(){var e=Object(k.a)(v.a.mark((function e(t){var n,c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.path,e.prev=1,e.next=4,E(n);case 4:c=e.sent,a=c.data,h((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(y.a)({},n,a[n]))})),P(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(a.useEffect)((function(){""!==r.types||""!==r.subtype?(A(!0),function(){var e=Object(k.a)(v.a.mark((function e(t){var n,c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(t,r);case 3:n=e.sent,c=n.data,a=n.total,x({cards:c.cards,total:Number(a)}),A(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()("cards")):x(G)}),[r]),Object(c.jsxs)("div",{className:"container h-100 d-flex flex-column ",children:[N.show&&Object(c.jsx)(J,{pokemon:N.pokemon,closeModal:function(){return w(K)}}),Object(c.jsx)(F,{isLinkBack:"/cards"!==X,logout:t}),Object(c.jsx)("div",{className:"row my-2 d-flex flex-grow-1",children:Object(c.jsxs)(j.d,{children:[Object(c.jsxs)(j.b,{exact:!0,path:H,children:[Object(c.jsx)("div",{className:"col-md-3 d-flex",children:Object(c.jsx)("div",{className:"border w-100 d-flex flex-column align-items-center",style:{backgroundColor:"#FAFAFA"},children:R.map((function(e,t){var n=e.path,a=e.name;return Object(c.jsx)(L,{name:a,setValue:W(i),list:b[n],isLoading:B,query:r,setBeginPage:Z},t)}))})}),Object(c.jsx)("div",{className:"col-md-9 flex-grow-1",children:Object(c.jsxs)("div",{className:"border h-100 d-flex flex-column justify-content-between",children:[D||B?Object(c.jsx)(V,{}):Object(c.jsx)(I,{cards:m.cards,showModal:function(e,t){return function(){return w({show:!0,pokemon:{name:e,img:t}})}}}),Object(c.jsx)(T,{page:r.page,pageSize:r.pageSize,total:m.total,setPage:Q(i)})]})})]}),Object(c.jsx)(j.b,{path:"".concat(H,"/:cardId"),children:Object(c.jsx)(U,{cards:m.cards})})]})})]})},Z=function(){var e=Object(j.g)();return setTimeout((function(){return e.push("/cards")}),3e3),Object(c.jsx)("div",{className:"h-100 d-flex justify-content-center align-items-center",children:Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"You are already Logged In, redirecting to Cards Page!"})})})},$=function(e){localStorage.setItem("user",JSON.stringify(e))},_=function(){return JSON.parse(localStorage.getItem("user"))},ee=function(e,t){return function(n,c){var a=e.find((function(e){return e.login===n.trim()}));if(a&&a.password===c.trim())return t((function(e){return Object(u.a)(Object(u.a)({},e),{},{login:n,password:c,passCheck:!0})})),$({login:n,password:c,passCheck:!0}),!0;return!1}},te=function(e,t){return function(n){if(n===e){t((function(e){return Object(u.a)(Object(u.a)({},e),{},{otpCheck:!0})}));var c=_(),a=Object(u.a)(Object(u.a)({},c),{},{otpCheck:!0});return $(a),!0}return!1}},ne={login:null,password:null,passCheck:!1,otp:"123456",otpCheck:!1},ce=function(e){var t=e.savedUser,n=e.users,s=t||ne,r=Object(a.useState)(s),i=Object(o.a)(r,2),u=i[0],d=i[1],h=function(){d(ne),localStorage.clear()};return Object(c.jsx)(l.a,{children:u.otpCheck?Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{path:"/cards",children:Object(c.jsx)(X,{logout:h})}),Object(c.jsx)(j.b,{path:"*",children:Object(c.jsx)(Z,{})})]}):Object(c.jsxs)(j.d,{children:[Object(c.jsx)(b,{path:"/cards",condition:u.otpCheck,to:"/",children:Object(c.jsx)(X,{logout:h})}),Object(c.jsx)(b,{path:"/otp",condition:u.passCheck,to:"/",children:Object(c.jsx)(f,{isValid:te(u.otp,d)})}),Object(c.jsx)(b,{path:"/",condition:!u.otpCheck,to:"/cards",children:Object(c.jsx)(m,{isValid:ee(n,d)})})]})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},se=n(39),re=[new function e(t,n,c){Object(se.a)(this,e),this.login=t,this.password=n,this.otp=c}("kode@kode.ru","Enk0deng")],ie=_();i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(ce,{savedUser:ie,users:re})}),document.getElementById("root")),ae()}},[[54,1,2]]]);
//# sourceMappingURL=main.60b24222.chunk.js.map