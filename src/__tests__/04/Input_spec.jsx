import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

/******************************************************************************************
 * 앞으로 컴포넌트 테스트 시 컴포넌트의 상단에 아래 예제를 추가하여 화면 출력 시 오류발생여부 검사
 ******************************************************************************************/
// it('renders without crashing', () => {
//   expect(() => {
//     shallow(<Input name="test_name" />);
//   }).not.toThrow();
// });

/**
 * describe
 * it
 * expect
 * shallow
 * toEqual
 * toHaveLength
 * toBe
 * find
 * prop
 * props
 * setProps
 * html
 * toContain
 * jest.fn
 * simulate
 * toHaveBeenCalled
 * toHaveBeenCalledTimes
 * toHaveBeenCalledWith
 */

describe('<Input>', () => {
  // ...(renders without crashing에 관햔 예제항목)
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });

  it('has one element', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });

  it('assigns the prop value and type', () => {
    const expectedValue = '123';
    const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
    //input 의 property 중 value의 값과 input 에 전달된 값을 비교검증
    expect(wrapper.find('input').prop('value')).toBe(expectedValue);

    //props() 를 사용하여 input 의 모든 속성을 가져온 후, 객체 추출식을 사용하여 필요한 항목 추출
    const { type, value } = wrapper.find('input').props();
    expect(value).toBe(expectedValue);
    expect(type).toBe('text');
  });

  describe('contains <input>', () => {
    it('renders one input', () => {
      //shallow() 는 enzyme 객체를 반환
      //fine() 는 enzyme 의 함수, 엘리먼트 배열반환
      const wrapper = shallow(<Input name="test_name" />);
      expect(wrapper.find('input')).toHaveLength(1);
      expect(wrapper.find('label')).toHaveLength(1);
    });
  });

  //목표: 생명주기 함수를 검증하거나 변경된 값에 맞춰 화면출력 state를 검증
  // => property는 컴포넌트에서 변경할 수 없음.
  // => 1. state를 가진 상위 컴포넌트를 생성
  // => 2. 테스트할 컴포넌트의 프로퍼티로 변경한 state를 전달
  // setProps() 를 사용하면 위의 과정을 거치지 않고 검증 가능
  it('renders errorMessage', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find('.error')).toHaveLength(0);
    const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';
    wrapper.setProps({ errorMessage: expectedErrorMessage });
    expect(wrapper.find('span').prop('className')).toBe('error');
    expect(wrapper.find('.error')).toHaveLength(1);
    expect(wrapper.html()).toContain(expectedErrorMessage);
  });

  //콜백함수 검증
  it('calls back onChange on input change', () => {
    const changeStub = jest.fn();
    const wrapper = shallow(<Input name="test_name" onChange={changeStub} />);
    expect(changeStub).not.toHaveBeenCalled();
    const expectedTargetValue = 'updated input';
    wrapper.find('input').simulate('change', { target: { value: expectedTargetValue } });
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue);
  });
});
