(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),i=(a(36),a(8)),s=a(7),m=(a(37),a(26)),o=a(27),u=a(30),d=a(29),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper",style:{fontSize:"2em",fontWeight:"500",paddingLeft:"20px"}},l.a.createElement(i.b,{to:"/"},l.a.createElement("div",null,"Movie Finder"))))}}]),a}(n.Component),E=function(e){var t=e.handleSubmit,a=e.handleChange;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s4 offset-s4"},l.a.createElement("form",{action:"",onSubmit:t},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",placeholder:"search movies",onChange:a}))))))},v=a(11),g=a.n(v),b=function(e){var t=e.title,a=e.poster,n=e.id,c=e.date;e.type;return l.a.createElement("div",{className:"col s12 m4 l3"},c?l.a.createElement(i.b,{to:"/movie/".concat(n)},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image waves-effect waves-block"},l.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:"Movie Poster",width:"100%"})),l.a.createElement("div",{className:"detail"},l.a.createElement("p",null,t),t.length<55?l.a.createElement("cite",null,c):null))):null)},f=function(e){var t=e.movies;return l.a.createElement("div",{className:"container"},0===t.length?"Not Found":l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},t.map((function(e,t){return e.first_air_date?null:l.a.createElement(b,{key:t,poster:e.poster_path,title:e.original_title?e.title:e.name,id:e.id,date:e.release_date,type:e.media_type})})))))},h=a(1),y=function(){var e=Object(h.f)().id,t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)("c08c0bba523363fbe74011968b5e905a"),m=Object(s.a)(i,1)[0],o=Object(n.useState)([]),u=Object(s.a)(o,2),d=u[0],p=u[1],E=Object(n.useState)([]),v=Object(s.a)(E,2),b=v[0],f=v[1];return Object(n.useEffect)((function(){g.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(m)).then((function(e){r(e.data),p(e.data.production_companies),f(e.data.genres)}))}),[]),console.log(c),l.a.createElement("div",{className:"container deatilContainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s4"},l.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c.poster_path),alt:"Movie Poster",width:"100%"})),l.a.createElement("div",{className:"col s8"},l.a.createElement("h1",null,c.title?c.title:c.name),l.a.createElement("strong",null,"Overview : "),l.a.createElement("p",{style:{display:"inline"}},c.overview),l.a.createElement("div",{className:"genres"},l.a.createElement("strong",null,"Genres : "),b.map((function(e,t){return l.a.createElement("span",{key:t},l.a.createElement("strong",null,e.name),","," ")}))),l.a.createElement("div",{className:"released_date"},l.a.createElement("strong",null,"Date : "),c.release_date),l.a.createElement("div",{className:"popularity"},l.a.createElement("strong",null,"Popularity : "),c.popularity),l.a.createElement("div",{className:"status"},l.a.createElement("strong",null,"Status : "),c.status),l.a.createElement("div",{className:"language"},l.a.createElement("strong",null,"Language : "),c.original_language),l.a.createElement("div",{className:"company"},l.a.createElement("strong",null,"Production Company : "),d.map((function(e){return l.a.createElement("li",{key:e.id,style:{padding:"0 40px"}},e.name)}))))))};var N=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),m=i[0],o=i[1],u=Object(n.useState)("c08c0bba523363fbe74011968b5e905a"),d=Object(s.a)(u,1)[0],v=function(){g.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(d)).then((function(e){c(e.data.results)}))};return Object(n.useEffect)((function(){v()}),[]),l.a.createElement(h.c,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(h.a,{path:"/",exact:!0},l.a.createElement(n.Fragment,null,l.a.createElement(E,{handleSubmit:function(e){e.preventDefault(),g.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(d,"&query=").concat(m)).then((function(e){c(e.data.results)}))},handleChange:function(e){e.target.value.length>0?o(e.target.value):v()}}),l.a.createElement(f,{movies:a}))),l.a.createElement(h.a,{path:"/movie/:id"},l.a.createElement(y,null)))))};r.a.render(l.a.createElement(i.a,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2d74d1fb.chunk.js.map