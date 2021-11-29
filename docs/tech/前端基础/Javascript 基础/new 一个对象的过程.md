---
title: new 一个对象的过程
permalink: /tech/:year/:month/:day/:slug.html
date: 2021-11-03
desc: new 是实现构造函数继承生成对象的关键字，在面试中用于考察候选人对于构造函数继承的理解。
imgName: 8
---

<Title />

### 简介
`new` 是实现构造函数继承生成对象的关键字，在面试中用于考察候选人对于构造函数继承的理解。

### 一道面试题
```js
// 实现 new 关键字

function newSolution(constructor: Function, ...args: any): Object {
    // 原型关系继承
    const obj = {};
    obj.__proto__ = constructor.prototype;
    // 也可采用下面的方式 👇
    const obj = Object.create(constructor.prototype);
    // 替换 this 指向并执行构造函数
    const res = constructor.apply(obj, [...args]);
    // 注意：一般来说构造函数的是不能有返回值的，但如果有，根据 new 的官方标准，返回值如果是对象或者是函数，则直接将变量指向返回值
    return (res && (typeof res === 'function' || typeof res === 'object')) ? res : obj;
}

const Parent = function (name: string, age: number): void {
    this.name = name;
    this.age = age;
}

const child = new Parent('jack', 18);
const child2 = newSolution(Parent, 'jack', 18);

child; // Parent {name: 'jack', age: 18}
child2; // Parent {name: 'jack', age: 18}
child.__proto__ === Parent.prototype; // true
child2.__proto__ === Parent.prototype; // true
```

### 解析
实现构造函数继承其实就是`原型链`的指针改变，在访问一个对象属性的时候，会沿着`原型链`向上寻找，
将对象的 `__proto__` 指向目标构造函数的原型对象，通过 `apply` 更改 this 指向获取函数参数即可。
