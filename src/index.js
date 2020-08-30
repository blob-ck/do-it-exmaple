// 필수 리액트 구동 모듈들
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // Strict Mode : https://ko.reactjs.org/docs/strict-mode.html
  // 부작용 검사를 위해 생명주기에 관여하는 메서드들을 두번씩 호출하는 경우가 있다.
  // constructor 가 왜 두 번씩 실행되었는가에 대한 이유
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <App />,
  document.getElementById('root'),
);
