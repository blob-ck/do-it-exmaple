function addFt(first, second) {
  return first + second;
}
console.log(addFt.toString());
//유명함수
// function addFt(first, second) {
//   return first + second;
// }

var addLtr = function (first, second) {
  return first + second;
};
console.log(addLtr.toString());
//익명함수
// function (first, second) {
//   return first + second;
// }

var addArr = (first, second) => first + second;
console.log(addArr.toString());
//(first, second) => first + second

// currying 등의 디자인패턴에서 주로 사용됨. 가독성이 좋은건...가?
function addNumber(num) {
  return function (value) {
    return num + value;
  };
}

//이것도 계속 중첩해서 쓰면 이해하긴 힘들거같은데
//함수를 반환하는 함수를 반환하는 함수를 반환하는 함수를 반환하는... 그만......
const addNumberArr = (num) => (value) => num + value;

//Arrow Function this binding : bind()
class MyClass {
  value = 10;
  constructor() {
    // this 를 못찾음
    // var addWithoutBind = function (first, second) {
    //   return this.value + first + second;
    // };

    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);

    // ArrowFunction은 위의 bind(this)를 포함하고 있다.
    //    Why? => 콜백함수의 this범위 차이로 인한 오류 방지
    var addThis3 = (first, second) => this.value + first + second;

    // console.log(addWithoutBind(11, 22));
    console.log(addThis2(11, 22));
    console.log(addThis3(11, 22));
  }
  addProp(x, y) {
    return this.value + x + y;
  }
}

var test = new MyClass();
console.log(test.addProp(11, 22));
