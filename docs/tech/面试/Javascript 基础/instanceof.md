---
title: instanceof
permalink: /tech/:year/:month/:day/:slug.html
date: 2021-11-03
desc: instanceof 是面试中常考的 Javascript 关键字，面试官常用它来考察面试者对原型链的基础掌握，我们来通过面试题掌握这个知识点。
imgName: 6
---

# {{$frontmatter.title}}

### 简介
`instanceof` 是面试中常考的 Javascript 关键字，面试官常用它来考察面试者对`原型链`的基础掌握，我们来通过面试题掌握这个知识点。

### 一道面试题
```js
// 判断下面的输出
Function instanceof Object // true
Object instanceof Function // true
```

### 解读 instanceof
要想了解 `instanceof` 是怎么判断的，需要先了解[原型链](./原型链.md)相关的知识。

假使你非常了解`原型链`了，我们来看看 `instanceof` 的定义：

::: tip instanceof
Javascript 中的关键字，它用于检测构造函数的 `prototype` 属性是否出现在某个`实例对象`的`原型链`上。
:::

乍一看挺难理解，但熟悉`原型链`的朋友应该能轻松看出：在 a instanceof b 中，instanceof 的判断原则就是 a 的原型链中是否存在等于 `b.prototype` 的部分，若存在返回 true，不存在返回 false。

我们来看一段代码辅助理解：

```js
const Parent = function () {};
const OtherParent = function () {};
const child = new Parent();

child instanceof Parent; // true
child instanceof OtherParent; // false
child instanceof Object; // true
```

依据构造函数生成对象的原型链关系，`child.__proto__` 指向 `Parent.prototype`，满足 `instanceof` 定义，即返回 true。

而 `Parent.prototype` 作为原型对象，`Parent.prototype.__proto__` 应指向顶层的原型对象，即 `Object.prototype`。故：child instanceof Object，也返回 true。

而 child 和 OtherParent 没有原型关系，理应返回 false。

我们可以这么理解它：

```js
a instanceof b // 可以换算为下面的等式 👇
a.__proto__..__.proto__ === b.prototype // 存在返回 true，不存在返回 false
```

### 重新看看这道面试题
这个题目有两个需要知道的前提知识：

::: tip 知识点
1. 所有构造器的 `constuctor` 都指向 `Function`。
2. `Function.prototype` 指向一个特殊匿名函数，而这个特殊匿名函数的 `__proto__` 指向 `Object.prototype`
:::

根据这个前提知识，我们可以推导：

1. Function 的构造器是他本身，即 `Function.__proto__ === Function.prototype` 为 true；
2. `Function.prototype` 为一个原型对象，`Function.prototype.__proto__ === Object.prototype` 为 true；
3. `Function instanceof Object` 为 true；
4. Object 的构造器是 Function，即 `Object.__proto__ === Function.prototype` 为 ture；
5. `Object instanceof Function` 为 true;

### 拓展 - 实现 instanceof
```js
function instanceofSolution(instance, construtor) {
    // 边界判断
    if (construtor.__proto__ !== Function.prototype) {
        // 非构造器
        throw new Error('Right-hand side of \'instanceof\' is not callable')
    }

    let res = false;
    let nextProto = instance;
    while (nextProto !== Object.prototype) {
        res = nextProto.__proto__ === construtor.prototype;
        nextProto = nextProto.__proto__;
    }
    return res;
}
```
