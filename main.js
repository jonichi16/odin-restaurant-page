(()=>{"use strict";var e={922:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100%;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture,\nsvg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n",""]);const c=i},896:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(81),r=t.n(a),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(406),t.b),l=new URL(t(574),t.b),m=i()(r()),u=s()(d),p=s()(l);m.push([e.id,":root {\n  --font-primary: 'Roboto', sans-serif;\n  --font-logo: 'Lobster', cursive;\n\n  --bg-primary: #030d0b;\n  --text-red: #991b1b;\n}\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n}\n\n.content {\n  min-height: 100%;\n  font-family: var(--font-primary);\n  background-image: url("+u+");\n  background-size: cover;\n  background-attachment: fixed;\n  background-position-x: right;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  background-color: var(--bg-primary);\n  padding: 1em 0;\n}\n\n.nav {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  font-family: var(--font-logo);\n  font-size: 1.5rem;\n  color: white;\n  flex: 1;\n}\n\nli {\n  list-style: none;\n  text-transform: uppercase;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover {\n  text-decoration: underline;\n  text-underline-offset: 3px;\n  text-decoration-thickness: 3px;\n}\n\n.nav-toggle {\n  display: block;\n  margin: 0;\n  width: 1.5rem;\n  height: auto;\n  position: relative;\n}\n\n.hidden {\n  display: none;\n}\n\n.hamburger,\n.hamburger::before,\n.hamburger::after {\n  display: block;\n  margin: 0 auto;\n  height: 3px;\n  background-color: white;\n}\n\n.hamburger::before,\n.hamburger::after {\n  content: '';\n  width: 100%;\n}\n\n.hamburger::before {\n  transform: translateY(-7px);\n}\n\n.hamburger::after {\n  transform: translateY(4px);\n}\n\n/* Main */\n.main {\n  flex: 1;\n  background-color: #030d0b67;\n  display: flex;\n  justify-content: center;\n}\n\n/* Footer */\n.footer {\n  background-color: var(--bg-primary);\n  text-align: center;\n  font-size: 0.8rem;\n  color: white;\n  padding: 1em;\n}\n\n.github-link {\n  text-decoration: underline;\n}\n\n/* Home page & About page & Contacts page */\n\n.home,\n.about,\n.contacts {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2em;\n  color: white;\n}\n\n.title,\n.description {\n  width: 90%;\n}\n\n.title {\n  text-align: center;\n  font-size: 2.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.resto {\n  font-family: var(--font-logo);\n}\n\n.description {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 2;\n  max-width: 55ch;\n}\n\n.contacts {\n  width: 100%;\n}\n\n/* Menu Page */\n\n.menu {\n  width: 90%;\n  max-width: 800px;\n  margin: 1.5em 0;\n  color: var(--bg-primary);\n}\n\n.menu-item {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1em;\n}\n\n.menu-item-card {\n  background-color: white;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n\n.details {\n  padding: 1em 1em;\n}\n\n.menu-name-price {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1em;\n  font-weight: 700;\n}\n\n.menu-name {\n  font-size: 1.5rem;\n  flex: 1;\n}\n\n.menu-price {\n  text-align: end;\n  color: var(--text-red);\n}\n\n@media screen and (max-width: 599px) {\n  .relative {\n    position: relative;\n  }\n\n  .nav-menu {\n    background-color: var(--bg-primary);\n    position: absolute;\n    top: 68px;\n    left: 0;\n    width: 100%;\n    text-align: center;\n    padding: 2em;\n  }\n\n  .nav-menu li:not(:last-of-type) {\n    margin-bottom: 1em;\n  }\n\n  .nav-item:active {\n    text-decoration: underline;\n    text-underline-offset: 3px;\n    text-decoration-thickness: 3px;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .content {\n    background-image: url("+p+");\n    background-position: center;\n  }\n\n  .logo {\n    font-size: 2rem;\n  }\n\n  .nav-menu {\n    display: flex;\n    gap: 2em;\n  }\n\n  .nav-toggle {\n    display: none;\n  }\n\n  .home {\n    gap: 4em;\n  }\n\n  .title {\n    font-size: 3rem;\n  }\n\n  .description {\n    font-size: 1.25rem;\n  }\n\n  .menu-item {\n    grid-template-columns: 1fr 1fr;\n    gap: 3em;\n  }\n\n  .menu-item-card {\n    border-radius: 10px;\n  }\n}\n",""]);const h=m},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=o[d]||0,m="".concat(d," ").concat(l);o[d]=l+1;var u=t(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var h=r(p,a);a.byIndex=c,n.splice(c,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=a(e,r),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},406:(e,n,t)=>{e.exports=t.p+"bf72f964130065a36311.jpg"},574:(e,n,t)=>{e.exports=t.p+"c7856455934257d62ad2.jpg"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),m=t(589),u=t.n(m),p=t(922),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var g=t(896),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;const b=(()=>{const e=document.createElement("header"),n=document.createElement("nav"),t=document.createElement("ul"),a=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div");return e.classList.add("header","relative"),n.classList.add("nav"),t.classList.add("nav-menu","hidden"),a.classList.add("logo"),r.classList.add("nav-toggle"),o.classList.add("hamburger"),a.textContent="Atomic Eatery",[{label:"Home",id:"home",url:"#"},{label:"Menu",id:"menu",url:"#"},{label:"About Us",id:"about",url:"#"},{label:"Contacts",id:"contacts",url:"#"}].forEach((e=>{const n=document.createElement("li"),a=document.createElement("a");a.classList.add("nav-item"),a.href=e.url,a.textContent=e.label,a.id=e.id,n.appendChild(a),t.appendChild(n)})),r.addEventListener("click",(()=>{t.classList.toggle("hidden")})),document.addEventListener("click",(e=>{r.contains(e.target)||t.contains(e.target)||t.classList.add("hidden")})),r.appendChild(o),n.append(a,t,r),e.appendChild(n),{getHeader:()=>e,getNavMenus:()=>document.querySelectorAll(".nav-item"),closeMenu:()=>{t.classList.add("hidden")}}})(),v=(()=>{const e=document.createElement("main");return e.classList.add("main"),{getMain:()=>e,appendPage:n=>{e.textContent="",e.appendChild(n)}}})(),y=(()=>{const e=document.createElement("footer"),n=document.createElement("p"),t=document.createElement("a");return e.classList.add("footer"),n.classList.add("create-by"),t.classList.add("github-link"),n.textContent="Created by: ",t.href="https://github.com/jonichi16",t.textContent="jonichi",n.appendChild(t),e.appendChild(n),{getFooter:()=>e}})(),x=(()=>{const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("span"),a=document.createElement("p");return e.classList.add("home"),n.classList.add("title"),t.classList.add("resto"),a.classList.add("description"),n.textContent="Welcome to ",t.textContent="Atomic Eatery",a.textContent="Located in the heart of downtown, Atomic Eatery is a retro-themed restaurant that specializes in classic American comfort food. Our menu is packed with mouth-watering dishes that will transport you back to the 1950s, including burgers, buffalo wings, and homemade pies.",n.appendChild(t),e.append(n,a),{getPage:()=>e}})(),w=t.p+"64bb304001396c77e074.jpg",E=t.p+"224bf9f5ef8bd25d9487.jpg",C=t.p+"1d30d0b0622abb370426.jpg",L=t.p+"098d7675e275a0a8c9fd.jpg",k=t.p+"de8d94f32f38692f46e7.jpg",A=t.p+"822dedb00bf144c724ac.jpg",S=(()=>{const e=document.createElement("div"),n=document.createElement("div"),t=[{img:w,name:"Bacon Cheeseburger",price:"$11.99",description:"Our classic burger topped with crispy bacon and melted American cheese for an extra burst of flavor."},{img:E,name:"Atomic Wings",price:"$8.99 (6 pcs)",description:"Crispy fried chicken wings tossed in our signature spicy Atomic sauce, served with celery and blue cheese dressing on the side."},{img:C,name:"Apple Pie",price:"$5.99 per slice",description:"A classic American dessert made with fresh apples, cinnamon, and a flaky crust, served warm with a scoop of vanilla ice cream on top."},{img:L,name:"Atomic Club",price:"$10.99",description:"A sandwich made with roasted turkey, crispy bacon, lettuce, tomato, and mayo, served on toasted white bread."},{img:k,name:"Chocolate Peanut Butter Shake",price:"$6.99",description:"A thick and creamy milkshake made with vanilla ice cream, chocolate syrup, and creamy peanut butter, topped with whipped cream and a cherry."},{img:A,name:"Sweet Tea",price:"$2.99 (16 oz)",description:"A refreshing and sweet iced tea made with our house blend of black tea, served over ice."}];return e.classList.add("menu"),n.classList.add("menu-item"),t.forEach((e=>{const t=document.createElement("div"),a=new Image,r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("h2"),c=document.createElement("p"),s=document.createElement("p");t.classList.add("menu-item-card"),a.classList.add("menu-img"),r.classList.add("details"),o.classList.add("menu-name-price"),i.classList.add("menu-name"),c.classList.add("menu-price"),s.classList.add("menu-description"),a.src=e.img,i.textContent=e.name,c.textContent=e.price,s.textContent=e.description,o.append(i,c),r.append(o,s),t.append(a,r),n.appendChild(t)})),e.appendChild(n),{getPage:()=>e}})(),M=(()=>{const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("p");return e.classList.add("about"),n.classList.add("title"),t.classList.add("description"),n.textContent="About Us",t.textContent="Atomic Eatery was founded in 2010 by two friends who shared a passion for retro Americana. They wanted to create a restaurant that celebrated the classic diners of the 1950s, complete with checkered floors, vinyl booths, and vintage decor. Today, Atomic Eatery is a beloved institution in the downtown area, known for its delicious food and welcoming atmosphere.",e.append(n,t),{getPage:()=>e}})(),j=M,P=(()=>{const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("p");return e.classList.add("contacts"),n.classList.add("title"),t.classList.add("description"),n.textContent="Contact Us",["123 Main Street","Anytown, USA 12345","(555) 555-5555","info@atomiceatery.com","Open Monday-Saturday, 11am-10pm","Closed Sunday"].forEach((e=>{const n=document.createElement("div");n.textContent=e,t.appendChild(n)})),e.append(n,t),{getPage:()=>e}})(),T=P,z=document.querySelector(".content"),Z=v.getMain();Z.appendChild(x.getPage()),z.append(b.getHeader(),Z),z.append(y.getFooter());const $=e=>{let n=null;return"home"===e?n=x.getPage():"menu"===e?n=S.getPage():"about"===e?n=j.getPage():"contacts"===e&&(n=T.getPage()),n};b.getNavMenus().forEach((e=>{e.addEventListener("click",(n=>{n.preventDefault(),$(e.id)&&(v.appendPage($(e.id)),b.closeMenu())}))}))})()})();