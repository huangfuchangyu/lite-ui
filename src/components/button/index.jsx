/*
 * Desc: Button
 * File Created: Monday, 6th January 2020 7:37:43 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */

import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const Button = props => {

  const {
    type,
    size,
    disabled,
    onClick,
    icon,
    style,
    activeStyle,
    children,
    ...restProps
  } = props

  return (
    <a
      className={
        `
        lite-ui-button-base 
        lite-ui-button-type-${type} 
        lite-ui-button-size-${size} 
        ${disabled && 'lite-ui-button-disabled'}
        `
      }
      {...restProps}
    >
      <span>{children}</span>
    </a>
  )

}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'ghost', 'warning']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
}

Button.defaultProps = {
  type: 'primary',
  size: 'large',
  disabled: false,
  onClick: _ => console.log('please attach a method to Button component'),
  icon: null,
  style: {},
  activeStyle: {}
}

export default React.memo(Button)