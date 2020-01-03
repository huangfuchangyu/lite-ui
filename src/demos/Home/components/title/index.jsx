/*
 * Desc: title
 * File Created: Friday, 3rd January 2020 2:34:34 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */

import React from 'react'
import './index.scss'

import PropTypes from 'prop-types'

const Title = props => {

  let { text } = props

  return (
    <span className='title'>{text}</span>
  )
}

Title.propTypes = {
  text: PropTypes.string
}

Title.defaultProps = {
  text: ''
}

export default React.memo(Title)
