// Given a function `fn` and a time `t` in milliseconds. You need
// to return a debounced version of that function

function debounce(fn, time) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, time);
  };
}
