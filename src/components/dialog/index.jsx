/*
 * Desc: dialog
 * File Created: Friday, 10th January 2020 10:22:19 am
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */

import React, { Children } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

import { Svg_Close } from '../assets'

const Dialog = props => {

  let {
    visible,
    closable,
    maskClosable,
    onClose,
    transparent,
    animationType,
    title,
    children
  } = props

  return (
    <>

      <div className={`${transparent ? 'lite-ui-mask-transparent' : 'lite-ui-mask'}`} />

      <div className='lite-ui-dialog-content'>

        <section className='lite-ui-dialog'>

          {
            closable &&
            <img src={closable} alt='' className='closeIcon' />
          }

          <div className='title'>{title}</div>

          <div className='body'>
            {children}
          </div>

          <div className='footer'></div>

        </section>

      </div>

    </>
  )

}

Button.propTypes = {
  visible: PropTypes.bool,                            // 对话框是否可见
  closable: PropTypes.bool,                           // 是否显示关闭按钮
  maskClosable: PropTypes.bool,                       // 点击蒙层是否允许关闭
  onClose: PropTypes.func,                            // 点击 x 或 mask 回调
  transparent: PropTypes.bool,                        // 是否背景透明
  animationType: PropTypes.oneOf(['slide', 'fade']),  // 动画效果
  title: PropTypes.string,                            // 标题
}

Button.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
  onClose: _ => console.log('please attach a method to Dialog component'),
  transparent: false,
  animationType: 'slide',
  title: null,
}

export default React.memo(Dialog)
