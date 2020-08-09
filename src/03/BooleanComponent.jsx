import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BooleanComponent extends PureComponent {
  render() {
    const message = this.props.bored ? '놀러 가즈아' : '마무리 다 했어?';
    return <div className="message-container">{message}</div>;
  }
}

BooleanComponent.propTypes = {
  bored: PropTypes.bool,
};

export default BooleanComponent;
