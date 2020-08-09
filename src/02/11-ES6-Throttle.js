// Throttle
// 요청이 실행되는 기간에는 신규 요청 무시
// 요청이 완료되면 신규 요청 가능
function throttle(func, delay) {
  let lastFunc; // 주기 함수
  let lastRan; // 마지막 실행시간
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.call(context, ...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= delay) {
          func.call(context, ...args);
          lastRan = Date.now();
        }
      }, delay);
    }
  };
}

const checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = window.pageYOffset;
  const pageBottomPosition = document.body.offsetHeight - window.innerHeight - offset;
  if (currentScrollPosition >= pageBottomPosition) {
    // fetfh('/page/next')
    console.log('다음 페이지 로딩');
  }
};

const infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);
