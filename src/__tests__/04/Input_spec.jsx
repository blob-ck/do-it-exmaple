import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

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
});

/******************************************************************************************
 * 앞으로 컴포넌트 테스트 시 컴포넌트의 상단에 아래 예제를 추가하여 화면 출력 시 오류발생여부 검사
 ******************************************************************************************/
// it('renders without crashing', () => {
//   expect(() => {
//     shallow(<Input name="test_name" />);
//   }).not.toThrow();
// });
