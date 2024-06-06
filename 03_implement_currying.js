function curry(fn) {
  return function curried(...args) {
    console.log("args", args);
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        console.log("next", next);
        return curried(...args, ...next);
      };
    }
    // else {
    //     // return new func with currently received arguments
    //     return curried.bind(null, ...args);
    //     }
    // both code will work
  };
}

const add = (a, b, c) => a + b + c;

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));
