import React from 'react';

class TodaysPlan extends React.Component {
  render() {
    //property basic
    // <TodaysPlan name="message" />
    const name = this.props.name;
    return <div className="message-container">놀러가자~ {name}야~</div>;
  }
}

export default TodaysPlan;
