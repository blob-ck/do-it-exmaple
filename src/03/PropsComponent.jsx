import React, { Component } from 'react';

// React에서 제공하는 property type 선언
//  1. property type을 미리 선언하면 react engine이 property로 전달하는 값의 변화를 효율적으로 감지,
//  2. 본 의도와는 다른 type을 전달할 때 경고
import PropTypes from 'prop-types';

class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

//property의 type을 객체형태로 저장
PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
