// ES6 Essence
// 3. Immutable Variables
//무결성 내장함수
[].concat();
[].slice();

//변조 내장함수
[].push();
[].plice();
[].popo();
[].shift();
[].unshift();

// const 는 다시 초기화 할 수 없다. 그런데 값은 변경할 수 있다???
// const num = 1;
// num = 2;
// const str = '문자1';
// str = 'answk1';
// const arr = [];
// arr = [1, 2, 3];
// const obj = {};
// obj = { a: 1, b: 2 };

const arr2 = [];
arr2[0] = 'a';
console.log(arr2);
arr2.splice(0, 0, 0);
console.log(arr2);
arr2.pop();
console.log(arr2);
const obj2 = {};
obj2['name'] = '내이름';
Object.assign(obj2, { name: '새이름' });
console.log(obj2);
delete obj2.name;
console.log(obj2);

const num1 = 1;
const num2 = num1 * 3;
console.log('num2 = ', num2);
const str1 = '문자';
const str2 = str1 + '추가';
console.log('str2 = ', str2);
const arr3 = [];
const arr4 = arr3.concat(1);
console.log('arr4 = ', arr4);
const arr5 = [...arr4, 2, 3];
const arr6 = arr5.slice(0, 1);
console.log('arr6 = ', arr6);
const [first, ...arr7] = arr5;
console.log('first = ', first);
console.log('arr5 = ', arr5);
console.log('arr7 = ', arr7);
const obj3 = { name: '내이름', age: 20 };
const objValue = { name: '새이름', age: obj3.age };
console.log('objValue = ', objValue);
const obj4 = { ...obj3, name: '네이름' };
const { name, ...obj5 } = obj4;
console.log('obj5 = ', obj5);
