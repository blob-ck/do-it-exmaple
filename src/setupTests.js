// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';

configure({ adapter: new Adapter() });

//jest 의 afterEach, beforeEach 는 테스트코드 실행 후 특정 설정을 추가하고 변경된 설정을 초기화하기 위해 실행되는 함수
afterEach(() => {
  //console.error()함수 객체에 spyOn()함수로 추가된 가상의 감지코드 제거
  console.error.mockClear();
});

beforeEach(() => {
  //감시 함수인 spyOn()을 사용하여 console 객체의 error() 함수를
  //실제 기능대신 mockImplementation 에 정의된 함수가 실행되도록 함
  jest.spyOn(console, 'error').mockImplementation((e) => {
    throw new Error(e);
  });
});
