// 扩展运算符的应用
// 1.数组的复制
// es5
const a1 = [1, 2, 3]
const a2 = a1.slice()
const a3 = a1.concat()

// es6
const a4 = [...a1]

// 2.合并数组
const arr1 = ['a', 'b']
const arr2 = ['c']
const arr3 = ['d', 'e']
const arr4 = [...arr1, ...arr2, ...arr3] // 注意这是浅拷贝

// 3.和解构赋值合作
const list = [1, 2, 3, 1, 2, 3]
// ES5
// a = list[0], rest = list.slice(1)
// ES6
const [a, ...rest] = list
rest // [2, 3, 1, 2, 3]

// 4.把字符串变成数组
const arr5 = [...'hello'] //[ "h", "e", "l", "l", "o" ]

// 5.任何定义了遍历器（Iterator）接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。
let nodeList = document.querySelectorAll('div'); // NodeList(3) [div, div, div]
let array = [...nodeList] // [div, div, div]
