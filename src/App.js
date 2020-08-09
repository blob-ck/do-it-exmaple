import React from 'react';
import ChildComponent2 from './03/ChildComponent2';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <ChildComponent2 objValue={{ age: '20살' }} />
        {/* Failed prop type: Invalid prop `objValue.age` of type `string` supplied to `ChildComponent2`, expected `number` */}
        {/* Failed prop type: The prop `requiredStringValue` is marked as required in `ChildComponent2`, but its value is `undefined` */}
      </div>
    );
  }
}

export default App;
