import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    // Object Destructuring Assignment - 객체 구조분해할당
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;
    return (
      <div>
        <span>불리언값: {boolValue}</span>
        <br />
        <span>숫자값: {numValue}</span>
        <br />
        <span>배열값: {arrayValue}</span>
        <br />
        <span>객체값: {String(objValue)}</span>
        <br />
        <span>노드값: {nodeValue}</span>
        <br />
        <span>함수값: {String(funcValue)}</span>
        <br />
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number), //숫자만을 원소로 가지는 배열
  objValue: PropTypes.object,
  nodeValue: PropTypes.node, //node는 component ==> ex) <h1>노드</h1> or <Comp data={data} />
  funcValue: PropTypes.func,
};

export default ChildComponent;
