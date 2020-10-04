/**
 * Currying : 함수의 인자를 다시 구성하여 필요한 함수를 만드는 패턴
 */

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;
// function multiply(a, b) {
//   return a * b;
// }

// function multiplyX(x) {
//   return function (a) {
//     return multiply(a, x);
//   };
// }

const multiplyX = (x) => (a) => multiply(a, x);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);

const addX = (x) => (a) => add(a, x);
const addFour = addX(4);

const equation = (a, b, c) => (x) => x * a * b + c;
const formula = equation(2, 3, 4);
const x = 10;
const result = formula(x);

const formula2 = (x) => addFour(multiplyThree(multiplyTwo(x)));
const result2 = formula2(10);

// formula2 는 뒤에서부터 계산을 추적해야 검증할 수 있으므로, 흐름을 한 번에 이해하기 힘듦
// => 코드 가독성이 떨어지므로 Array.prototype.reduce() 를 활용하여 compose() 를 만들어 사용
// => 05-1-compose.js 참조
console.log(result); // 64
console.log(result === result2); // true
