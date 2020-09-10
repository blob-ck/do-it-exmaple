import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../../03/Input';

/**
 * create-react-app 은 default 로 jest를 사용하여 테스트한다.
 * 확장자로 '.test.js', '.spec.js' 이거나
 * __tests__ 폴더에 존재하는 모든 '.js', '.jsx' 파일들을 테스트 환경에서 실행시킨다.
 */
describe('<Input>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input name="name" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
