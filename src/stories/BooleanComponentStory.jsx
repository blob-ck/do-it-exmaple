import React from 'react';
import { storiesOf } from '@storybook/react';
import BooleanComponent from '../03/BooleanComponent';

storiesOf('BooleanComponent', module)
  .addWithJSX('기본설정', () => <BooleanComponent />)
  .addWithJSX('bored 설정', () => <BooleanComponent bored />);
