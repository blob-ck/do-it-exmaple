import React from 'react';
import ChildProperty from './03/ChildProperty';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <ChildProperty children={<h1>이렇게 보내면 뭘 받을까?</h1>}>
          <div>
            <span>자식노드</span>
          </div>
        </ChildProperty>
      </div>
    );
  }
}

export default App;
