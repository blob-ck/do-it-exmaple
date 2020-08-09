import React, { Component } from 'react';
import PropTypes from 'prop-types';

//객체형 property 사용하기 + 필수 property 지정하기
//연관단어 mandatory, required
class ChildComponent2 extends Component {
  render() {
    const { objValue, requiredStringValue } = this.props;
    return (
      <div>
        <div>객체값: {String(Object.entries(objValue))}</div>
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;
