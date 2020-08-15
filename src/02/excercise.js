//debouncing
function debounce(func, delay) {
  //closure 사용
  let inDebounce;
  return function (...args) {
    if (inDebounce) clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(...args), delay);
  };
}

// const run = debounce((val) => console.log(val), 100);
