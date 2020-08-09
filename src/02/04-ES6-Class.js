// 4. Class

/**************************************************************
 * @desc 기존 클래스 선언 방법 1
 **************************************************************/
function Shape(x, y) {
  this.name = 'Shape';
  this.move(x, y);
}

//static 함수 선언
Shape.create = function (x, y) {
  return new Shape(x, y);
};

// //instance 함수 선언
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
Shape.prototype.area = function () {
  return 0;
};

// /**************************************************************
//  * @desc 기존 클래스 선언 방법 2
//  **************************************************************/
// Shape.prototype = {
//   move: function (x, y) {
//     this.x = x;
//     this.y = y;
//   },
//   area: function () {
//     return 0;
//   },
// };

const test1 = new Shape(1, 3);
console.log(test1);
const test2 = Shape.create(2, 4);
console.log(test2);

function Circle(x, y, radius) {
  Shape.call(this, x, y);
  this.name = 'Circle';
  this.radius = radius;
}

Object.assign(Circle.prototype, Shape.prototype, {
  area: function () {
    return this.radius * this.radius;
  },
});

var c = new Circle(0, 0, 10);
console.log(c.area());

class Circlass extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  area() {
    if (this.radius === 0) return super.area();
    return this.radius * this.radius;
  }
}

var cc = new Circlass(0, 0, 10);
console.log(cc.area());

var t = Shape.create();
console.log(t);
