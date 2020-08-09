// function work1(onDone) {
//   setTimeout(() => onDone('작업1 완료!'), 100);
// }
// function work2(onDone) {
//   setTimeout(() => onDone('작업2 완료!'), 200);
// }
// function work3(onDone) {
//   setTimeout(() => onDone('작업3 완료!'), 300);
// }
// function urgentWork() {
//   console.log('긴급 작업');
// }

// //닝겐와 코루배쿠노 지오쿠 데스
// work1(function (msg1) {
//   console.log('done after 100ms: ' + msg1);
//   work2(function (msg2) {
//     console.log('done after 300ms' + msg2);
//     work3(function (msg3) {
//       console.log('done after 600ms: ' + msg3);
//     });
//   });
// });

// urgentWork();

// Promise 사용하여 콜백지옥 탈출하기
class Promise3 {
  // 1. new Promise(fn);
  constructor(fn) {
    console.log('생성자 호출~');
    const resolve = (...args) => {
      console.log('resolve ==> promise this.onDone', this.onDone);
      // 2. 첫 실행은 undefined
      if (typeof this.onDone === 'function') {
        this.onDone(...args);
      }
      // 2. 첫 실행은 undefined
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
    };

    const reject = (...args) => {
      // 2. 첫 실행은 undefined
      if (typeof this.onError === 'function') {
        this.onError(...args);
      }
      // 2. 첫 실행은 undefined
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
    };

    // 3. 여기서 비동기 실행
    fn(resolve, reject);
  }

  // 4. 비동기 함수 완료 후 실행할 콜백을 then으로 queue에 등록한다
  then(onDone, onError) {
    console.log('then 실행중!=======================');
    console.log(onDone.toString());

    this.onDone = onDone; // 사실 여기서 마이크로 queue 에 push 하여 resolve에서 하나씩 꺼내어 실행해야 함
    this.onError = onError;

    // 5. Promise Chaining 을 위해서
    return this;
  }
  catch(onError) {
    this.onError = onError;
    return this;
  }
  finally(onComplete) {
    this.onComplete = onComplete;
    return this;
  }
}

const async1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업1 완료!'), 1000);
  });

const async2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업2 완료!'), 1000);
  });

const async3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업3 오나료!'), 1000);
  });

function urgentWork1() {
  console.log('긴급 작업!@!!!!');
}

const nextWorkDone = (msg1) => {
  console.log('done after 1000ms: ' + msg1);
  return async2();
};

async1()
  .then(nextWorkDone)
  .then((msg2) => {
    console.log('done after 2000ms: ' + msg2);
    return async3();
  })
  .then((msg3) => console.log('done after 3000ms: ' + msg3));
urgentWork1();

class Promise2 {
  constructor(fn) {
    const resolve = (...args) => {};
    const reject = (error) => {};

    fn(resolve, reject);
  }

  then(onDone, onError) {
    this.onDone = onDone;
    this.onError = onError;
    return this;
  }

  catch(onError) {
    this.onError = onError;
    return this;
  }

  finally(onComplete) {
    this.onComplete = onComplete;
    return this;
  }
}
