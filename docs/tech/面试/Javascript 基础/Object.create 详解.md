---
title: Object.create 详解
permalink: /tech/:year/:month/:day/:slug.html
date: 2021-11-05
desc: Object.create 是 es6 用于创建一个对象的新方法，常在考察原型链或继承的时候被提到。
imgName: 9
---

<Title />

### 简介
Object.create 是 es6 用于创建一个对象的新方法，常在考察`原型链`或`继承`的时候被提到。

### 定义
Object.create 方法创建一个新对象，使用现有的对象来提供新创建对象的__proto__。
```js
// 我们用字面量来创建一个对象时
const obj = {};
// 此时 obj 的 __proto__ 指向为 Object.prototype
obj.__proto__ === Object.prototype; // true;
// 用 Object.create 创建对象时
const parentObject = {};
const obj2 = Object.create(parentObject);
obj2.__proto__ === parentObject; // true
```

### Object.create 的实现
在不考虑 Object.create 第二个属性时，可以这么实现
```js
Object.prototype.create = (proto) => {
    // 对于输入边界的处理
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object: ' + proto);
    } else if (proto === null) {
        throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    }
    
    // 利用构造函数，修改其指向来完成
    const Fn = new Function();
    Fn.prototype = proto;
    return new Fn();
}
```

### Object.create 第二个参数
第二个参数 propertyObject 主要用于创建对象的时候创建一些属性：
```js
const obj = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: {
    writable:true,
    configurable:true,
    value: "hello"
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});
```

### 类比 Object.setPrototypeOf
`Object.setPrototypeOf` 方法设置一个指定的对象的原型到另一个对象或  null 上。它和 `Object.create` 的区别为不生成新的对象，而是更改源对象的__proto__指向。

但需要注意：
::: warning 注意
由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的__proto__在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。如果关心性能，应该使用 `Object.create`
创建一个新的对象
:::
