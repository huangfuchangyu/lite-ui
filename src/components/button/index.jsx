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
    ...restProps
  } = props

  return (
    <a
      {...restProps}
    >
      button
    </a>
  )

}

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  activeStyle: PropTypes.object,
  icon: PropTypes.node,
}

Button.defaultProps = {
}

export default React.memo(Button)