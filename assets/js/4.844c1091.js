(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{345:function(t,e,n){var a=n(2),i=n(18),r=Date.prototype,c=a(r.toString),o=a(r.getTime);"Invalid Date"!=String(new Date(NaN))&&i(r,"toString",(function(){var t=o(this);return t==t?c(this):"Invalid Date"}))},368:function(t,e,n){},398:function(t,e,n){"use strict";n(368)},405:function(t,e,n){"use strict";n.r(e);n(345),n(187);var a={computed:{title:function(){return this.$frontmatter.title},date:function(){var t=new Date(this.$frontmatter.date);return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDay())}},name:"Title"},i=(n(398),n(56)),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("div",[n("span",{staticClass:"date"},[t._v(t._s(t.date))])]),t._v(" "),n("div",{staticClass:"line"})])}),[],!1,null,"30ff1c6a",null);e.default=r.exports}}]);