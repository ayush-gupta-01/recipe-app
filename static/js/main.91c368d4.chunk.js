(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(9),s=n.n(r),l=(n(15),n(5)),o=n(1),a=function(){return Object(o.jsx)("div",{style:{fontSize:" 1.5rem",fontWeight:"700",backgroundColor:"#191919",height:"8vh",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(o.jsx)(l.b,{style:{textDecoration:"none",color:"white"},to:"/",children:"Recipe Finder"})})},j=n(4),d=n(8),u=n.n(d),b=n(10),h=Object(c.createContext)(),x=function(e){var t=e.children,n=Object(c.useState)("banana"),i=Object(j.a)(n,2),r=i[0],s=i[1],l=Object(c.useState)(!1),a=Object(j.a)(l,2),d=a[0],x=a[1],O=Object(c.useState)([]),p=Object(j.a)(O,2),f=p[0],v=p[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(b.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,fetch("https://api.edamam.com/search?q=".concat(r,"&app_id=").concat("1a4b2004","&app_key=").concat("5a1918529fb18fa1a456bf253a03a912"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,v(n.hits),x(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]),Object(o.jsx)(h.Provider,{value:{query:r,setQuery:s,recipes:f,setRecipes:v,loading:d},children:t})},O=n(2),p=(n(18),function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(c.useContext)(h),s=(r.query,r.setQuery),l=Object(O.f)();return Object(o.jsxs)("div",{className:"input",children:[Object(o.jsxs)("h2",{children:["WELCOME TO"," ",Object(o.jsx)("span",{style:{color:"red"},children:"RECIPE FINDER"})," "]}),Object(o.jsx)("h2",{children:"YOUR ONE PLACE TO FIND TASTY RECIPIES"}),Object(o.jsx)("h3",{children:"Enter Your Recipe here : "}),Object(o.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),s(n),i("")},children:[Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)},placeholder:"Enter Item Name"}),Object(o.jsx)("button",{onClick:function(){return l("/recipe")},children:"Submit"})]})]})}),f=(n(19),function(){var e,t,n,i,r,s,l,a,j=Object(O.g)().id,d=Object(c.useContext)(h).recipes.filter((function(e,t){return e.recipe.label===j}));return d=null===(e=d[0])||void 0===e?void 0:e.recipe,Object(o.jsxs)("div",{className:"data",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{style:{fontWeight:"900"},children:null===(t=d)||void 0===t?void 0:t.label}),Object(o.jsx)("img",{src:null===(n=d)||void 0===n?void 0:n.image,alt:null===(i=d)||void 0===i?void 0:i.label}),Object(o.jsxs)("h3",{children:["Calories : ",null===(r=d)||void 0===r?void 0:r.calories.toFixed(3)]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{style:{color:"red",fontSize:"1.2rem"},children:"Ingredients"}),Object(o.jsx)("ul",{style:{textAlign:"left"},children:null===(s=d)||void 0===s?void 0:s.ingredients.map((function(e,t){return Object(o.jsx)("li",{style:{fontWeight:"600"},children:e.text},t)}))}),Object(o.jsxs)("h3",{children:["Recipe :"," ",Object(o.jsx)("a",{href:null===(l=d)||void 0===l?void 0:l.url,target:"_blank",children:"Click here"})]})]})]}),Object(o.jsxs)("h3",{style:{color:"blue",fontWeight:"bold",textDecoration:"underline",fontSize:"1.2rem"},children:["Nutrients :"," "]}),Object(o.jsx)("div",{className:"nutrients-list",children:null===(a=d)||void 0===a?void 0:a.digest.map((function(e,t){return Object(o.jsxs)("div",{className:"nutrients",children:[Object(o.jsxs)("div",{style:{fontWeight:"bolder"},children:[null===e||void 0===e?void 0:e.label," :"]}),Object(o.jsxs)("div",{children:[null===e||void 0===e?void 0:e.total.toFixed(2)," ",null===e||void 0===e?void 0:e.unit]})]},t)}))})]})}),v=(n(20),function(e){var t=e.name,n=e.image;e.index;return Object(o.jsxs)("div",{className:"recipe",children:[Object(o.jsx)("h2",{style:{fontWeight:"800"},children:t}),Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)(l.b,{to:"/recipe/".concat(t),children:Object(o.jsx)("button",{children:"View Recipe"})})]})}),m=function(){var e=Object(c.useContext)(h),t=e.recipes,n=(e.setRecipes,e.loading);return Object(o.jsxs)(o.Fragment,{children:[n?Object(o.jsx)("h2",{style:{textAlign:"center",fontSize:"1rem"},children:"Finding Recipies for you..."}):0===t.length?Object(o.jsx)("h2",{style:{color:"red"},children:"Oops ! Sorry we didn't find any recipe ."}):"",Object(o.jsx)("div",{style:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",alignItems:"center"},children:t.map((function(e,t){return Object(o.jsx)("div",{children:Object(o.jsx)(v,{name:e.recipe.label,image:e.recipe.image,index:t})},t)}))})]})},g=function(){return Object(o.jsxs)("div",{style:{margin:"50px",fontWeight:"900"},children:["MADE BY"," ",Object(o.jsx)("a",{style:{color:"red",textDecoration:"none"},href:"https://github.com/ayush-gupta-01",target:"_blank",children:"AYUSH GUPTA"})]})};var y=function(){return Object(o.jsx)(x,{children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(a,{}),Object(o.jsx)(p,{}),Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{path:"/recipe",element:Object(o.jsx)(m,{})}),Object(o.jsx)(O.a,{path:"/recipe/:id",element:Object(o.jsx)(f,{})})]}),Object(o.jsx)(g,{})]})})};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.91c368d4.chunk.js.map