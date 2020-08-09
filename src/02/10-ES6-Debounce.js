// Debounce
// 어떤 내용을 입력하다가 특정시간 동안 대기하면
// 마지막에 입력된 내용을 바탕으로 서버에 요청을 보내는 방법
function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(...args), delay);
  };
}
const run = debounce((val) => console.log(val), 100);
run('a');
run('b');
run('2222');
