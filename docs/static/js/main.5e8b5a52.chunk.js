(this.webpackJsonptinder=this.webpackJsonptinder||[]).push([[0],{48:function(e,a,n){e.exports=n(83)},53:function(e,a,n){},54:function(e,a,n){},55:function(e,a,n){},61:function(e,a,n){},65:function(e,a,n){},83:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(11),o=n.n(c),l=(n(53),n(54),n(55),n(34)),s=n.n(l),i=n(97),m=n(35),u=n.n(m);var d=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(i.a,null,r.a.createElement(s.a,{fontSize:"large",className:"header__icon"})),r.a.createElement("img",{src:"https://w7.pngwing.com/pngs/698/493/png-transparent-tinder-hd-logo-thumbnail.png",className:"header__logo"}),r.a.createElement(i.a,null,r.a.createElement(u.a,{fontSize:"large",className:"header__icon"})))},f=(n(61),n(36)),p=n.n(f),g=n(37),E=n.n(g),h=n(38),w=n.n(h),v=n(39),_=n.n(v),N=n(40),S=n.n(N);var b=function(){return r.a.createElement("div",{className:"swipeButtons"},r.a.createElement(i.a,{className:"swipeButtons__repeat"},r.a.createElement(p.a,{fontSize:"large"})),r.a.createElement(i.a,{className:"swipeButtons__left"},r.a.createElement(E.a,{fontSize:"large"})),r.a.createElement(i.a,{className:"swipeButtons__star"},r.a.createElement(w.a,{fontSize:"large"})),r.a.createElement(i.a,{className:"swipeButtons__right"},r.a.createElement(_.a,{fontSize:"large"})),r.a.createElement(i.a,{className:"swipeButtons__lightning"},r.a.createElement(S.a,{fontSize:"large"})))},B=n(20),k=n.n(B),z=n(41),j=n(44),y=n(42),O=n.n(y),C=(n(65),n(43)),x=n.n(C);var I=function(){var e=Object(t.useState)([]),a=Object(j.a)(e,2),n=a[0],c=a[1];return Object(t.useEffect)((function(){(function(){var e=Object(z.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("./data.json");case 2:a=e.sent,c(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"tinderCards"},r.a.createElement("div",{className:"tinderCards__cardContainer"},n.length>0&&n.map((function(e){return r.a.createElement(O.a,{className:"swipe",key:e.name,preventSwipe:["up","down"],onSwipe:function(a){return e.name,void console.log("swiped")},onCardLeftScreen:function(){return e.name,void console.log("outOfFrame")}},r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.img,")")},className:"card"},r.a.createElement("h3",null,e.name)))}))))};var J=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(d,null),r.a.createElement(I,null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.5e8b5a52.chunk.js.map