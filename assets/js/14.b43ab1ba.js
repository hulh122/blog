(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{383:function(t,a,e){"use strict";e.r(a);var r=e(46),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("Title"),t._v(" "),e("h3",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("在 Server 端面向前端的接口中，一般 id 的类型都会用 "),e("code",[t._v("String")]),t._v(" 来替代 "),e("code",[t._v("Number")]),t._v("，原因是 Javacript 中 "),e("code",[t._v("Number")]),t._v(" 最多能精确表示 2^53 - 1，而超长的 id 可能会导致重大问题。"),e("br"),t._v("\n那么不禁想问，为啥一定是这个值呢？")]),t._v(" "),e("h3",{attrs:{id:"什么是安全整数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是安全整数"}},[t._v("#")]),t._v(" 什么是安全整数？")]),t._v(" "),e("p",[t._v("Javacript 中的数字类型只有一种："),e("code",[t._v("Number")]),t._v(" 类型（这句话可能不一定准确，后来添加了 BigInt），也就是 "),e("code",[t._v("64-bit")]),t._v(" 的浮点数。其在（-2^53, 2^53）范围内，双精度数表示和整数是一对一的。这个范围内的整数叫做安全整数。")]),t._v(" "),e("h3",{attrs:{id:"为什么是-2-53-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么是-2-53-1"}},[t._v("#")]),t._v(" 为什么是 2^53 - 1")]),t._v(" "),e("p",[t._v("根据 "),e("code",[t._v("IEEEE754")]),t._v(" 规定，双精度浮点数的有效数字是 52 位。其第一位是符号位[sign]，接着是 11 位的指数位[exponent]，剩下的是 52 位的有效数字位[significand]。"),e("br"),t._v("\n计算机内部在保存有效数字时，默认第一位总是 1，所以舍去，只保留后面的部分。比如保存 1.01，只存 01，等读取的时候再把第一位 1 加上去。所以 52 位有效数字实际上可以存储 53 位。"),e("br"),t._v("\n即 "),e("code",[t._v("1.1111..1111(小数点后 52 个 1)")]),t._v("，用等比数列相加为 "),e("code",[t._v("2^53 - 1")])]),t._v(" "),e("h3",{attrs:{id:"为什么指数位-exponent-是-11-位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么指数位-exponent-是-11-位"}},[t._v("#")]),t._v(" 为什么指数位 Exponent 是 11 位")]),t._v(" "),e("p",[t._v("为了保证当 sign 为 0，且 E 的首位也为 0 不被程序当做无效片段舍弃，"),e("code",[t._v("IEEE754")]),t._v(" 默认 E 的首位为 1，这就是使得 E 转化为十进制时需要减去 1023。"),e("br"),t._v("\n例：如 E = 10000000001，其十进制数字位 1025，实际代表的指数为 2^(1025 - 1023) = 2^2，即十进制下的指数位为 2。")]),t._v(" "),e("h3",{attrs:{id:"当首位为-1-的时候-怎么表示-0、1、2、3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当首位为-1-的时候-怎么表示-0、1、2、3"}},[t._v("#")]),t._v(" 当首位为 1 的时候，怎么表示 0、1、2、3")]),t._v(" "),e("p",[t._v("用指数位和有效数字来组织，下面的指数位均为十进制减掉 1023 后的结果："),e("br"),t._v("\n0：指数位 0，有效数字 0"),e("br"),t._v("\n1：指数位 0，有效数字 1.0"),e("br"),t._v("\n2：指数位 1，有效数字 1.0"),e("br"),t._v("\n3：指数位 1，有效数字 1.1")]),t._v(" "),e("h3",{attrs:{id:"存储方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储方式"}},[t._v("#")]),t._v(" 存储方式")]),t._v(" "),e("p",[e("code",[t._v("2^53 - 1")]),t._v(" 存储：符号位 0，指数为 52，尾数：1.1111...1111(小数点后一共 52 个 1)。"),e("br"),t._v(" "),e("code",[t._v("2^53 - 2")]),t._v(" 储存：符号位 0，指数为 52，尾数：1.1111...1110(小数点后一共 51 个 1)。"),e("br"),t._v("\n以此类推，可以推到 0。可以看到这个过程中，每向下减一，通过修改尾数和指数（有时指数不变），每一个整数都可以由一个浮点数‘模拟’。")]),t._v(" "),e("h3",{attrs:{id:"一些说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些说明"}},[t._v("#")]),t._v(" 一些说明")]),t._v(" "),e("ul",[e("li",[t._v("为什么 "),e("code",[t._v("2^53")]),t._v(" 不能算是一个安全的整数？"),e("br"),t._v("\n因为 "),e("code",[t._v("2^53")]),t._v(" 的指数位已经达到了 53，损失了一位精度，尽管它确实是"),e("code",[t._v("一一对应")]),t._v("的。")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),e("ul",[e("li",[t._v("在 Javascript 中，一些只处理 32 位或者 16 位的运算符（e.g. & | ^ ~ >> >>> <<）在处理之前要把数值全部转化为 32 位（有/无符号）或 16 位，处理完成后再转换 64 位浮点数返回。")])]),t._v(" "),e("h3",{attrs:{id:"一些扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些扩展"}},[t._v("#")]),t._v(" 一些扩展")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/add-strings/",target:"_blank",rel:"noopener noreferrer"}},[t._v("leetcode 大数相加"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt",target:"_blank",rel:"noopener noreferrer"}},[t._v("BigInt"),e("OutboundLink")],1),t._v(" - 表达比 "),e("code",[t._v("2^53 - 1")]),t._v(" 更大的数")]),t._v(" "),e("li",[e("a",{attrs:{href:"http://weitz.de/ieee/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IEEE-754-calculator"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);