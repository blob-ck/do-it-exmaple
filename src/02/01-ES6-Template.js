// ES6 Essence
//1. Template String BackTick => `
var string1 = '안녕하세요';
var string2 = '반갑습니다';

var greeting = string1 + ' ' + string2;
var greeting6 = `${string1} ${string2}`;
console.log(greeting);
console.log(greeting6);

var product = { name: '도서', price: '4200원' };
var message = '제품' + product.name + '의 가격은' + product.price + ' 입니다.';
var message6 = `제품 ${product.name}의 가격은 ${product.price} 입니다.`;
console.log(message);
console.log(message6);

var multiLine = '문자열1\n문자열2';
var multiLine6 = `문자열1
문자열2`;
console.log(multiLine);
console.log(multiLine6);

var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = '곱셈값은 ' + (value1 + value2) + ' 입니다.';
var operator16 = `곱셈값은 ${value1 + value2} 입니다.`;
console.log(operator1);
console.log(operator16);

var operator2 = '불리언값은 ' + (boolValue ? '참' : '거짓') + ' 입니다.';
var operator26 = `불리언값은 ${boolValue ? '참' : '거짓'} 입니다.`;
console.log(operator2);
console.log(operator26);
