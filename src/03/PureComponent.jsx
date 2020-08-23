import { Component } from 'react';
import shallowEqual from 'shallow-equal';

//`PureComponent` implements a shallow comparison on props and state and returns true if any
/**
 * PureComponent 사용이유
 * 정보변경시 shallow Compare(얕읕 비교) + 불변 변수 사용을 통해 비교효율을 높여 리액트 성능을 최적화하기 위함
 */
class PureComponentTest extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }
  render() {
    return null;
  }
}

export default PureComponentTest;
