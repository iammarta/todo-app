(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{28:function(e,t,n){e.exports=n(40)},33:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(11),r=n.n(c),l=(n(33),n(25)),u=n(22),i=n(62),m=n(64),s=n(61),d=n(63),f=o.a.createContext(),p=(n(34),function(e){var t=e.title,n=e.id,c=e.completed,r=Object(a.useContext)(f),l=r.removeTodo,u=r.toggleTodo;return o.a.createElement("div",{className:"item"},o.a.createElement("li",{className:c?"".concat("todo-item"," completed"):"".concat("todo-item")},o.a.createElement(d.a,{color:"primary",checked:c,onChange:function(){return u(n)}}),o.a.createElement("span",null,t)),o.a.createElement(s.a,{className:"delete",onClick:function(){return l(n)}},"delete"))}),E=function(e){var t=e.todos;return o.a.createElement("ul",null,t.map((function(e){return o.a.createElement(p,Object.assign({key:e.id},e))})))},g=(n(39),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),d=s[0],p=s[1];Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(a.useEffect)((function(){var e=localStorage.getItem("todos")||[];c(JSON.parse(e))}),[]);return o.a.createElement(f.Provider,{value:{removeTodo:function(e){c(n.filter((function(t){return t.id!==e})))},toggleTodo:function(e){c(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}},o.a.createElement(i.a,null,o.a.createElement("header",{className:"header-wrapper"},o.a.createElement("h1",null,"TODO List"),o.a.createElement(m.a,{value:d,onChange:function(e){return p(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(c([].concat(Object(l.a)(n),[{id:Date.now(),title:d,completed:!1}])),p(""))},placeholder:"todo name",name:"todo"})),o.a.createElement("main",{className:"main-wrapper"},o.a.createElement(E,{todos:n}))))});r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.094933b7.chunk.js.map