import React from 'react';

class NewCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }

  //Counter 컴포넌트와의 차이점: getDerivedStateFromProps 를 통해 상위컴포넌트의 props 변화를 감지한다.
  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    console.log(count);
    return {
      count,
      newCount: count === state.count ? state.newCount : count,
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({ newCount: newCount + 1 }));
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default NewCounter;
