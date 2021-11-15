---
title: typeof
permalink: /tech/:year/:month/:day/:slug.html
date: 2021-11-15
desc: typeof 是 js 中用于判断变量类型的关键字，其中 typeof null 的返回常会在面试中提及。
imgName: 10
---

<Title />

### 简介
`typeof` 是 js 中用于判断变量类型的关键字，其中 `typeof null` 的返回常会在面试中提及。

### typeof 的返回值
`typeof` 的返回类型有以下几类：
- number
- string
- undefind
- boolean
- bigint
- symbol
- function
- object

除了我们的基本类型中的 null，返回值为 `object` 外，其余基本类型返回值均为其本身的字符串。而引用类型除函数外返回均为 `object`，函数返回 `function`。

### 为什么 typeof null 返回 object
事实上，`typeof null` 的返回是不正确的，其源自于 js 第一版所带来的 bug。


在 js 第一版的引擎代码中是通过值的低 1 位或 3 位来识别类型，其中引用类型 `object` 采用 000 来标识，
而 `null` 实际代表的是机器码空指针，其低三位也是 000，故 `typeof null === 'object'`。

### 一些拓展
- Number(null) === 0 为 true
- 曾有提案: `type null === 'null'`, 但被拒绝
