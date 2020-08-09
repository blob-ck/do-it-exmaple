import React from 'react';
import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    const array = [1, 2, 3];
    const obj = { name: '제목', age: 30 };
    const node = <h1>노드</h1>;
    const func = () => {
      console.log('메시지');
    };
    return (
      <div className="body">
        <ChildComponent
          boolValue={true} //boolValue 만 입력해도 true 로 전달하고, boolValue 명시하지 않으면 false로 전달(undefined는 falsy함을 이용)
          numValue={1}
          arrayValue={array}
          objValue={obj}
          nodeValue={node}
          funcValue={func}
        />
      </div>
    );
  }
}

export default App;
