// Array function
// forEach, map, reduce, filter, some, every
// [forEach] 반복문의 순번과 배열의 크기를 따로 변수에 저장하는 과정을 생략할 수 있다.
// [map] 배열을 가공하여 새 배열을 생성
// [reduce] 실무에서는 보통 배열을 특정 자료형으로 변환하는데 사용 ex)Array => Object or Number or String or something
function parse1(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&'); // queryString = 'banana=10&apple=20&orange=30';
  let result = {};
  for (var i = 0; i < chunks.length; i++) {
    const parts = chunks[i].split('=');
    const key = parts[0];
    const value = parts[1];
    result[key] = value;
  }
  return result;
}

/**
 * 배열의 원소를 변환한 후 새 배열로 반환
 * @param {string} qs
 */
function parse2(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&'); // queryString = 'banana=10&apple=20&orange=30';
  const result = chunks.map((chunk) => {
    var [key, value] = chunk.split('=');
    return { key: key, value: value };
  });
  return result;
}

/**
 * @description 배열을 숫자로 변환하는 예제1 - 배열의 합계
 * @param {Array} numbers
 */
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

/**
 * @description 배열을 숫자로 변환하는 예제2 - 배열을 객체로
 * @param {Array} numbers
 */
function parse3(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&'); // queryString = 'banana=10&apple=20&orange=30';
  const result = chunks.reduce((obj, chunk) => {
    const [key, value] = chunk.split('=');
    obj[key] = value;
    return obj;
  }, {});
  return result;
}

(function test() {
  const qs = 'Qbanana=10&apple=20&orange=30';
  console.log(parse1(qs));
  console.log(parse2(qs));
  console.log(parse3(qs));
  console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
})();
