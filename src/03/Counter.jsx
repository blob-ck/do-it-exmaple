import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }
  increaseCount() {
    this.setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  }
  decreaseCount() {
    this.setState((prevState) => ({ ...prevState, count: prevState.count - 1 }));
  }
  render() {
    return (
      <div>
        <span>카운트: {this.state.count}</span>
        <br />
        <button onClick={this.increaseCount}>카운트 증가</button>
        <button onClick={this.decreaseCount}>카운트 감소</button>
      </div>
    );
  }
}

export default Counter;
