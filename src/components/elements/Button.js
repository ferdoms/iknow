import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.elementType,
  color: PropTypes.string,
  size: PropTypes.string,
  pill: PropTypes.bool,
  loading: PropTypes.bool,
  wide: PropTypes.bool,
  wideMobile: PropTypes.bool,
  disabled: PropTypes.bool
}

const defaultProps = {
  tag: 'button',
  color: '',
  size: '6',
  pill: false,
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false
}

const Button = ({
  className,
  tag,
  color,
  size,
  pill,
  loading,
  wide,
  wideMobile,
  disabled,
  ...props
}) => {

  const classes = classNames(
    'link ph3 pv2 mb2 dib white',
    size && `f${size}`,
    color && `bg-${color}`,
    pill && `br-pill`,
    // size && `f-${size}`,
    // loading && 'is-loading',
    // wide && 'button-block',
    // wideMobile && 'button-wide-mobile',
    className
  );

  const Component = tag;
  return (
    <Component
      {...props}
      className={classes}
      disabled={disabled}
    />
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;