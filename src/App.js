import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <img
          src="http://3.bp.blogspot.com/-JXHpRRPAxMw/UV180EDkphI/AAAAAAAAVBE/ovMn6mWUQXw/s1600/LucasArts_GoldGuy_logo_purple.jpg"
          alt="이미지"
        />
        <div>안녕하세요~</div>
      </div>
    );
  }
}

export default App;

// 위의 jsx 문법을 js 형태로 변환하면
// React.createElement(
//   'div',
//   null,
//   React.createElement('img', {
//     src:
//       'http://3.bp.blogspot.com/-JXHpRRPAxMw/UV180EDkphI/AAAAAAAAVBE/ovMn6mWUQXw/s1600/LucasArts_GoldGuy_logo_purple.jpg',
//   }),
//   React.createElement('div', null, '안녕하세요'),
// );
