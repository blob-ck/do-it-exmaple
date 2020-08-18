import React from 'react';
import LifeCycleExample from './03/LifeCycleExample';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasDestroyed: false };
  }

  componentDidMount() {
    console.log('> App componentDidMount() => this.setState({ hasDestroyed: true })');
    this.setState({ hasDestroyed: true });
  }

  render() {
    return <div className="body">{this.state.hasDestroyed ? null : <LifeCycleExample />}</div>;
  }
}

export default App;
