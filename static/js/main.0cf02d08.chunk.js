(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(3),n=s.n(c),a=s(4),o=s(5),r=s(7),d=s(6),i=s(1),l=(s(12),s(13),s(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={pressedGood:"Jam"},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this,t=this.state.pressedGood;return Object(l.jsxs)("main",{className:"section container",children:[Object(l.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t.length>0?"".concat(t," is selected"):"No goods selected",t.length>0&&Object(l.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return e.setState({pressedGood:""})}})]}),Object(l.jsx)("table",{className:"table",children:Object(l.jsx)("tbody",{children:u.map((function(s){return Object(l.jsxs)("tr",{"data-cy":"Good",className:t===s?"has-background-success-light":"",children:[Object(l.jsx)("td",{children:Object(l.jsx)("button",{"data-cy":t===s?"RemoveButton":"AddButton",type:"button",className:t===s?"button is-info":"button",onClick:function(){return e.state.pressedGood===s?e.setState({pressedGood:""}):e.setState({pressedGood:s})},children:t===s?"-":"+"})}),Object(l.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:s})]})}))})})]})}}]),s}(i.Component);n.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0cf02d08.chunk.js.map