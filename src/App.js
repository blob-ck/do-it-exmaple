import React, { Component, PureComponent } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.value = props.value;
  }
  componentDidUpdate() {
    console.log(`MyComponent 새로 고침! ${this.props.value}`);
  }
  render() {
    return null;
  }
}

class MyPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.value = props.value;
  }
  componentDidUpdate() {
    console.log(`MyPureComponent 새로 고침! ${this.props.value}`);
  }
  render() {
    return null;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.listValue = [{ name: 'Park' }, { name: 'Lee' }];
    this.state = { version: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    setTimeout(() => {
      // MyPureComponent 는 얕은 비교를 하므로, shouldComponentUpdate() === false
      this.listValue[0].name = 'Jason';
      this.setState({ version: 1 });
    }, 1000);
    setTimeout(() => {
      // 새 배열로 초기화 하므로, 두 컴포넌트 모두 shouldComponentUpdate() === true
      this.listValue = [{ name: 'Jason' }, { name: 'Lee' }];
      this.setState({ version: 2 });
    }, 2000);
  }

  render() {
    return (
      <div>
        <MyComponent value={this.listValue} />
        <MyPureComponent value={this.listValue} />
        <button onClick={this.handleClick}>버튼</button>
      </div>
    );
  }
}

export default App;
