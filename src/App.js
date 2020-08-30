import React from 'react';
import Input from './03/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: 'Ethan', lastName: 'Hawke', age: 10 };
    this.handleForms = this.handleForms.bind(this);
  }

  handleForms(name, value) {
    this.setState((prev) => ({ ...prev, [name]: value }));
  }

  showNowTarget(e) {
    console.log(`현재 타겟 : ${e.target.name}`);
  }

  render() {
    return (
      <div>
        <Input
          type="text"
          name="firstName"
          value={this.state.firstName}
          errorMessage={this.state.firstName ? '' : '이름을 입력하세요.'}
          label="이름"
          onChange={this.handleForms}
          onFocus={this.showNowTarget}
        />
        <br />
        <Input
          type="text"
          name="lastName"
          value={this.state.lastName}
          errorMessage={this.state.lastName ? '' : '성을 입력하세요.'}
          label="성"
          onChange={this.handleForms}
          onFocus={this.showNowTarget}
        />
        <br />
        <Input
          type="number"
          name="age"
          value={this.state.age}
          errorMessage={this.state.age ? '' : '나이를 입력하세요.'}
          label="나이"
          onChange={this.handleForms}
          onFocus={this.showNowTarget}
        />
      </div>
    );
  }
}

export default App;
