import React from 'react';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }

  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        {/*Counter 컴포넌트와의 차이점: getDerivedStateFromProps 를 통해 상위컴포넌트의 props 변화를 감지한다.*/}
        <NewCounter count={this.state.count} />
        <button onClick={this.resetCount}>{this.state.count + 10}로 초기화</button>
      </div>
    );
  }
}

export default App;
