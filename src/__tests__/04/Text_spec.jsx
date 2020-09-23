import React from 'react';
import { shallow, mount } from 'enzyme';

import Text from '../../04/Text';

/**
 * mount 모든 하위컴포넌트 출력
 * dive 직계 하위컴포넌트까지 출력 -> 성능면에서 이득
 */
describe('<Text>', () => {
  // √ renders without crashing (6ms)
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Text>테스트</Text>);
    }).not.toThrow();
  });

  it('contains <span>', () => {
    //Aphrodite 의 StyleInjection 무시(테스트환경에 없는 함수 호출 건너뛰기 ex:document.querySelector)
    // √ contains <span> (26ms)
    expect(mount(<Text>텍스트</Text>).find('span')).toHaveLength(1);
  });

  it('contains <span>', () => {
    expect(
      shallow(<Text>테스트</Text>)
        // √ contains <span> (3ms)
        .dive()
        .find('span'),
    ).toHaveLength(1);
  });
});
