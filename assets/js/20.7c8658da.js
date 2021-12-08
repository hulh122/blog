(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{419:function(t,e,v){"use strict";v.r(e);var _=v(56),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("Title"),t._v(" "),v("h3",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),v("p",[v("code",[t._v("typeof")]),t._v(" 是 js 中用于判断变量类型的关键字，其中 "),v("code",[t._v("typeof null")]),t._v(" 的返回常会在面试中提及。")]),t._v(" "),v("h3",{attrs:{id:"typeof-的返回值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#typeof-的返回值"}},[t._v("#")]),t._v(" typeof 的返回值")]),t._v(" "),v("p",[v("code",[t._v("typeof")]),t._v(" 的返回类型有以下几类：")]),t._v(" "),v("ul",[v("li",[t._v("number")]),t._v(" "),v("li",[t._v("string")]),t._v(" "),v("li",[t._v("undefind")]),t._v(" "),v("li",[t._v("boolean")]),t._v(" "),v("li",[t._v("bigint")]),t._v(" "),v("li",[t._v("symbol")]),t._v(" "),v("li",[t._v("function")]),t._v(" "),v("li",[t._v("object")])]),t._v(" "),v("p",[t._v("除了我们的基本类型中的 null，返回值为 "),v("code",[t._v("object")]),t._v(" 外，其余基本类型返回值均为其本身的字符串。而引用类型除函数外返回均为 "),v("code",[t._v("object")]),t._v("，函数返回 "),v("code",[t._v("function")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"为什么-typeof-null-返回-object"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么-typeof-null-返回-object"}},[t._v("#")]),t._v(" 为什么 typeof null 返回 object")]),t._v(" "),v("p",[t._v("事实上，"),v("code",[t._v("typeof null")]),t._v(" 的返回是不正确的，其源自于 js 第一版所带来的 bug。")]),t._v(" "),v("p",[t._v("在 js 第一版的引擎代码中是通过值的低 1 位或 3 位来识别类型，其中引用类型 "),v("code",[t._v("object")]),t._v(" 采用 000 来标识，\n而 "),v("code",[t._v("null")]),t._v(" 实际代表的是机器码空指针，其低三位也是 000，故 "),v("code",[t._v("typeof null === 'object'")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"一些拓展"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一些拓展"}},[t._v("#")]),t._v(" 一些拓展")]),t._v(" "),v("ul",[v("li",[t._v("Number(null) === 0 为 true")]),t._v(" "),v("li",[t._v("曾有提案: "),v("code",[t._v("type null === 'null'")]),t._v(", 但被拒绝")])])],1)}),[],!1,null,null,null);e.default=l.exports}}]);