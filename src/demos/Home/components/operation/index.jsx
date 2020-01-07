/*
 * Desc: 首页 操作按钮
 * File Created: Friday, 3rd January 2020 9:51:05 am
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */

import React from 'react'
import './index.scss'

import PropTypes from 'prop-types'

const OperBtn = props => {

  let { titleIcon, text, desc, operIcon, onPress } = props

  return (

    <div className='operBtn' onClick={onPress}>

      <img src={titleIcon} className='titleIcon' alt="" />

      <div className='textBox'>
        <span className='title'>{text}</span>
        <span className='desc'>{desc}</span>
      </div>

      <img src={operIcon} className='operIicon' alt="" />

    </div>

  )
}


OperBtn.propTypes = {
  titleIcon: PropTypes.any,
  text: PropTypes.string,
  desc: PropTypes.string,
  operIcon: PropTypes.any,
  onPress: PropTypes.func,
}

OperBtn.defaultProps = {
  titleIcon: null,
  text: '',
  desc: '',
  operIcon: null,
  onPress: _ => console.log('please attach a method to this component')
}

export default React.memo(OperBtn)