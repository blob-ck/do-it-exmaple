import React from 'react';
import { shallow, mount } from 'enzyme';

import Text from '../../04/Text';

describe('<Text>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Text>테스트</Text>);
    }).not.toThrow();
  });

  it('contains <span>', () => {
    //Aphrodite 의 StyleInjection 무시(테스트환경에 없는 함수 호출 건너뛰기 ex:document.querySelector)
    expect(mount(<Text>텍스트</Text>).find('span')).toHaveLength(1);
  });
});
