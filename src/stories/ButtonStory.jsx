import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';

storiesOf('Button', module)
  .addWithJSX('기본 설정', () => <Button>전송하기</Button>)
  .addWithJSX('xlarge 설정', () => <Button xlarge>(xlarge)전송하기</Button>)
  .addWithJSX('large 설정', () => <Button large>(large)전송하기</Button>)
  .addWithJSX('small 설정', () => <Button small>(small)전송하기</Button>)
  .addWithJSX('xsmall 설정', () => <Button xsmall>(xsmall)전송하기</Button>)
  .addWithJSX('primary 설정', () => <Button primary>(primary)전송하기</Button>)
  .addWithJSX('secondary 설정', () => <Button secondary>(secondary)전송하기</Button>)
  .addWithJSX('primary + large 설정', () => (
    <Button primary large>
      (primary + large 설정)전송하기
    </Button>
  ));
