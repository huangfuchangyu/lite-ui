/*
 * Desc: 首页 操作按钮
 * File Created: Friday, 3rd January 2020 9:51:05 am
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */

import React from 'react'
import './index.scss'

import PropTypes from 'prop-types'

const OperBtn = props => {

  let { titleIcon, text, desc, operIcon } = props

  return (

    <div className='container'>

      <img src={titleIcon} alt="" />

      <div>
        <span>{text}</span>
        <span>{desc}</span>
      </div>

      <img src={operIcon} alt="" />

    </div>

  )
}


OperBtn.propTypes = {
  titleIcon: PropTypes.any,
  text: PropTypes.string,
  desc: PropTypes.string,
  operIcon: PropTypes.any,
}

OperBtn.defaultProps = {
  titleIcon: null,
  text: '',
  desc: '',
  operIcon: null,
}

export default React.memo(OperBtn)