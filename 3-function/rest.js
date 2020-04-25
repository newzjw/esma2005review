// arguments变量的写法
function sortNumbers() {
  console.log(Array.prototype.slice.call(arguments))
}
sortNumbers(1,2,3) // [1, 2, 3]
// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort()