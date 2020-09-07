import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

class Text extends PureComponent {
  render() {
    const { children, styles, large, xlarge, small, xsmall, primary, secondary } = this.props;
    return (
      <div>
        <span
          {...css(
            styles.default,
            xsmall && styles.xsmall,
            small && styles.small,
            large && styles.large,
            xlarge && styles.xlarge,
            secondary && styles.secondary,
            primary && styles.primary,
          )}
        >
          {children}
        </span>
      </div>
    );
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

//Theme.js 의 속성을 비구조화할당하여 사용
//Theme.js 는 withStyles.js 에서 등록하였으므로,
// 이곳에서 호출하는 withStyles 는 파라미터로 Theme.js 의 default 객체를 사용한다.
export default withStyles(({ color, size }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
  },
  xsmall: {
    fontSize: size.xs,
  },
  small: {
    fontSize: size.sm,
  },
  large: {
    fontSize: size.lg,
  },
  xlarge: {
    fontSize: size.xg,
  },
  secondary: {
    color: color.secondary,
  },
  primary: {
    color: color.primary,
  },
}))(Text);
