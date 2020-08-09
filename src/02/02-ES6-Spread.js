// ES6 Essence
// 2. Spread Operator

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined1 = [array1[0], array1[1], array2[0], array2[1]];
var combined2 = array1.concat(array2);
var combined3 = [].concat(array1, array2);

console.log('array1 = ', array1);
console.log('array2 = ', array2);
console.log('combined1 = ', combined1);
console.log('combined2 = ', combined2);
console.log('combined3 = ', combined3);

var first = array1[0];
var second = array1[1];
var three = array2[0] || 'empty';
function func1() {
  // console.log(this);
  // function의 this 는 상위객체를 가리킨다. 브라우저에서 사용할 경우 Window, Node에서 사용할 경우 Object [global]
  // var args = Array.prototype.slice.call(this, arguments);
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
  var first = args[0];
  var others = args.slice(1, args.length);
  console.log('first = ', first);
  console.log('others = ', others);
}
func1(1, 3, 9);

function func2(...args) {
  var [first, ...others] = args;
  console.log('first = ', first);
  console.log('others = ', others);
}
func2(2, 4, 8);

var [...array3] = array1;
var { ...array4 } = array1;
console.log(array3);
console.log(array4);

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combinedObj1 = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
var combinedObj2 = Object.assign({}, objectOne, objectTwo);
var combinedObj3 = Object.assign({}, objectTwo, objectOne);
var others = Object.assign({}, combinedObj3);
console.log('combinedObj1 = ', combinedObj1);
console.log('combinedObj2 = ', combinedObj2);
console.log('combinedObj3 = ', combinedObj3);
console.log('others = ', others);

var combinedObj4 = { ...objectOne, ...objectTwo };
var combinedObj5 = { ...objectTwo, ...objectOne };
var { other, ...others } = combinedObj5;
console.log('combinedObj4 = ', combinedObj4);
console.log('combinedObj5 = ', combinedObj5);
console.log('other = ', other);
console.log('others = ', others);

var { ...test } = array1;
console.log(test);
