import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/sass/materialize.scss';

function loadStories() {
  //매번 스토리 추가를 수동으로 하기 번거로우므로,
  //경로설정을 통해 자동으로 스토리북에 스토리를 추가함

  //contextReq 는 require와 동일한 역할을 한다.
  // 가변경로를 사용할 때  사용
  const contextReq = require.context('../src/stories', true, /Story\.jsx$/);
  contextReq.keys().forEach((srcFile) => {
    //contextReq 로 import 한 파일 중 default 항목을 import 한다.
    interopRequireDefault(contextReq(srcFile));
  });
}

setAddon(JSXAddon);
configure(loadStories, module);
