/**
 * import 는 ES6 module 인 경우 사용할 수 있고, node 는 2020.08.21 현재 실험적으로 지원하고 있다.
 * package.json 에 "type": "module" 을 입력하면 import/export 를 사용할 수 있다고 하는데
 * node의 기본설정은 "type": "commonjs" 로, require/export 를 말함이다.
 */
// import { shallowEqualArrays } from 'shallow-equal';
// import { shallowEqualArrays } from '../../node_modules/shallow-equal/dist/index.cjs.js';
const shallow = require('shallow-equal');
const obj = { name: 'park' };
const myList = [1, 2, 3, obj];
const list1 = [1, 2, 3, obj];
const list2 = [1, 2, 3, { name: 'park' }];

console.log(myList === list1); // false
console.log(shallow.shallowEqualArrays(myList, list1)); // true
console.log(shallow.shallowEqualArrays(list1, list2)); // false
