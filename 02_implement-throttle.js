// Given a function `fn` and a time `t` in milliseconds. You need
// to return a throttled version of that function

const throttle = (fn, delay) => {
  let timerFlag = null;

  return function (...args) {
    if (timerFlag === null) {
      fn(...args);

      timerFlag = setTimeout(() => {
        timerFlag = null;
      }, delay);
    }
  };
};
