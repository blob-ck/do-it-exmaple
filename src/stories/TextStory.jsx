import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../04/Text';

storiesOf('Text', module)
  .addWithJSX('기본 설정', () => <Text>안녕하신가</Text>)
  .addWithJSX('xsmall 예제', () => <Text xsmall>(xsmall)안녕하신가</Text>)
  .addWithJSX('small 예제', () => <Text small>(small)안녕하신가</Text>)
  .addWithJSX('large 예제', () => <Text large>(large)안녕하신가</Text>)
  .addWithJSX('xlarge 예제', () => <Text xlarge>(xlarge)안녕하신가</Text>)
  .addWithJSX('secondary 예제', () => <Text secondary>(secondary)안녕하신가</Text>)
  .addWithJSX('primary 예제', () => <Text primary>(primary)안녕하신가</Text>)
  .addWithJSX('xlarge + primary 예제', () => (
    <Text xlarge primary>
      (xlarge + primary)안녕하신가
    </Text>
  ));
