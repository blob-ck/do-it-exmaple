import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);

    /**
     * state 사용시 주의점
     * 1. constructor 에서 반드시 초기화해야한다. 빈 객체라도 this.state = {}
     * 2. state 값을 변경할 때는 반드시 setState() 함수를 사용해야 한다. => 그래야 react 엔진이 render 함수를 호출한다.
     * 3. setState() 함수는 비동기로 처리되며, setState() 코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을 거친다.
     *  ==> TODO: 이 말의 의미는 setState와 동일한 context에서 실행되는 소스들이 전부 실행된 후(콜스택이 비워지면) 비동기 큐에서 실행된다는 말인지 확인 필요?
     */
    this.state = {
      loading: true,
      formData: 'no data',
    };

    // 함수의 인자로 넘어갈 this는 반드시 생성자에서 bind 로 묶어야 함.
    this.handleData = this.handleData.bind(this);

    setTimeout(this.handleData, 4000);
  }

  handleData(data) {
    //setState 인자로 함수를 넘기면, 그 함수의 인자로 바로직전 state를 넘긴다.
    this.setState(function (prevState) {
      const newState = {
        loading: false,
        formData: data + prevState.formData,
      };
      return newState;
    });

    console.log('loading값 : ', this.state.loading);
  }

  render() {
    return (
      <div>
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
