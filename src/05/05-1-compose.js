const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = (x) => (a) => multiply(a, x);
const addX = (x) => (a) => add(a, x);

const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
const addFour = addX(4);

//currying 과 Array.prototype.reduce() 를 활용하여 배열순서대로 함수가 실행되는 compose 함수 작성
[multiplyTwo, multiplyThree, addFour].reduce(
  function (prevFunc, nextFunc) {
    return function (value) {
      return nextFunc(prevFunc(value));
    };
  },
  function (k) {
    return k;
  },
);

const compose = (funcArr) => {
  if (!(funcArr instanceof Array)) return console.log('배열타입이 아닙니다.');
  if (funcArr.length === 0) return console.log('배열길이가 0 입니다.');
  return funcArr.reduce(
    (prevFunc, nextFunc) => (value) => nextFunc(prevFunc(value)),
    (value) => value,
  );
};

const formulaWithCompose = compose([multiplyTwo, multiplyThree, addFour]);
console.log(formulaWithCompose(10)); //64
