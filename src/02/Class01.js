// class Shape {
//   static create(x, y) {
//     return new Shape();
//   }
//   name = 'shape';
//   constructor(x, y) {
//     this.move(x, y);
//   }
//   move(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   area() {
//     return 0;
//   }
// }

function Shape(x, y) {
  this.name = 'Shape';
  this.move = function (x, y) {
    this.x = x;
    this.y = y;
  };
}
// Shape.prototype.move = function (x, y) {
//   this.x = x;
//   this.y = y;
// };
// Shape.prototype.area = function () {
//   return 0;
// };

var s = new Shape(0, 0);
// console.log(s.area());
// console.log(Object.keys(s));
// console.log(s.move);
// console.log(s.area);
// console.log(Shape.create());

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

var c = new Circle(0, 0, 11);
console.log(c.area());
