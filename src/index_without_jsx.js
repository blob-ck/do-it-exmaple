// 필수 리액트 구동 모듈들
import React from 'react';
import ReactDOM from 'react-dom';

// 초기 화면을 구성하는 사용자 코드
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 리액트 엔진이 화면을 출력하는 코드
// id가 root인 엘리먼트에 컴포넌트를 출력
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// 만약 jsx 문법을 사용하지 않고 같은 화면을 만든다면...
var img = document.createElement('img');
img.setAttribute(
  'src',
  'http://3.bp.blogspot.com/-JXHpRRPAxMw/UV180EDkphI/AAAAAAAAVBE/ovMn6mWUQXw/s1600/LucasArts_GoldGuy_logo_purple.jpg',
);
var divEl = document.createElement('div');
divEl.innerText = '안녕하세요~ jsx 없이 구현해보기~';
var welcomeEl = document.createElement('div');
welcomeEl.append(img);
welcomeEl.append(divEl);

var root = document.getElementById('root');
root.append(welcomeEl);

// 아래 부분은 서비스워커 구동 코드로 오프라인 모드로 작동하는데 도움이 되는 모듈들
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
