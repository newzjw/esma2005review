const tobj = {
  foo: 'aaa', bar: 'bbb'
}

const {foo, bar} = tobj
console.log(foo, bar) // aaa, bbb

// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。
// baz // "aaa"
// foo // error: foo is not defined

const arr = [[1, 2], [3, 4]]
const arr2 = arr.map(([a, b]) => a +  b)
console.log(arr2)
// [ 3, 7 ]

// 用处：
// 1.交换变量的值
let x = 1;
let y = 2;
[x, y] = [y, x];

// 2.从函数返回多个值
// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象
function example1() {
  return {
    foo1: 1,
    bar1: 2
  };
}
let { foo1, bar1 } = example1();

// 3.提取json数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
let { id, status, data: number} = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]

// 4.函数参数的默认值
// 指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};

// 5.输入模块的指定方法
// 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
const { SourceMapConsumer, SourceNode } = require("source-map");