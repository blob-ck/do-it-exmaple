import React, { Component } from 'react';

/**
 * 강제로 화면 새로고침
 * - 강제라는 단어가 들어가면 무언가 무시하는게 있을텐데?
 * - 리액트 성능에 제약이 있다.
 * - 가급적 사용 지양
 */
class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);

    //forceUpdate를 사용하려면
    //this.state.loading, this.state.formData 로 초기화 하지 않고 클래스 변수에 직접 초기화 한다.
    this.loading = true;
    this.formData = 'no data';
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    this.loading = false;
    this.formData = data + this.formData;

    //컴포넌트 내장함수 forceUpdate를 호출하여 강제로 화면을 새로고침
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <span>로딩중 : {String(this.loading)}</span>
        <span>결과 : {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
