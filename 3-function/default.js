// 1.利用参数默认值，可以指定某个参数不能省略，如果省略，就报错
function throwIfMissing() {
  throw new Error('Missing parameter')
}

function foo(mustBeProvided = throwIfMissing()) {
  return mustBeProvided
}

// foo() // Error: Missing parameter