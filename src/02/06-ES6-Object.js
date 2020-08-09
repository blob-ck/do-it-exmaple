// var x = 0;
// var y = 0;
// // var obj = {
// //   x: x,
// //   y: y,
// // };

// var randomKeyString = 'other';
// var combined = {};
// combined['one' + randomKeyString] = 'some value';
// var obj2 = {
//   x: x,
//   methodA: function () {
//     console.log(this);
//     console.log(this.x);
//     console.log('methodA');
//   },
//   methodB: function () {
//     return 0;
//   },
// };
// obj2.methodA();

// var obj3 = { x, y };
// var combined2 = {
//   ['one' + randomKeyString]: 'some value',
// };
// var obj4 = {
//   x,
//   methodA() {
//     console.log(this);
//     console.log('methodA');
//   },
//   methodB() {
//     return 0;
//   },
// };
// obj4.methodA();

// var list = [0, 1, 2];
// var [item1, item2, item3, item4 = 7] = list;
// console.log(item1, item2, item3, item4);
// [item1, item2] = [item2, item1];
// console.log(item1, item2, item3, item4);

// var obj = {
//   key1: 'kekeke1111',
//   key2: 'kekeke222',
// };
// var { key1: newKey1, key2, key3 = 'default key3 value' } = obj;
// console.log(newKey1, key2, key3);

// var [item1, ...otherItems] = [0, 1, 2, 3];
// var { key1, ...others } = { key1: 111, key2: 'two', key3: 'three' };
// console.log(item1);
// console.log(otherItems);
// console.log(key1);
// console.log(others);

// //파라미터에 스프레드 연산자만 사용하면 배열로 받는다.
// function argtest(...arg) {
//   console.log(arg); // []
//   console.log(typeof arg); // Object
//   console.log(arg instanceof Array); // true
// }

// argtest(1, 2, 3, 4, 5);

const testArr = [1, 3, 5, 7, 9];
const newArr = [...testArr]; // 키를 제외한 값만 배열로 반환
console.log(newArr); // [ 1, 3, 5, 7, 9 ]

const testObj = { key: 'test1', value: 'testValue1' };
const newObj1 = { ...testObj }; // 새 객체를 반환
console.log(newObj1); // { key: 'test1', value: 'testValue1' }

const newObj2 = { ...testArr }; // 배열을 스프레드연산자와 중괄호와 사용하면, 배열의 인덱스를 키로 새 객체를 반환
console.log(newObj2); // { '0': 1, '1': 3, '2': 5, '3': 7, '4': 9 }

//선언시의 ...연산자는 배열로 받고, 실행시의 ...연산자는 배열을 각 원소로 풀어서 보낸다.
(function testSp(...args) {
  return console.log(...args);
})(1, 3, 5, 7, 9);
