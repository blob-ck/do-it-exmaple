import React, { Component } from 'react';
import PrpoTypes from 'prop-types';

class Counter2 extends Component {
  render() {
    return (
      <div>
        <p>현재 카운트: {this.props.count}</p>
        <button onClick={() => this.props.onAdd()}>카운트 증가</button>
      </div>
    );
  }
}

Counter2.propTypes = {
  count: PrpoTypes.number,
  onAdd: PrpoTypes.func,
};

export default Counter2;
