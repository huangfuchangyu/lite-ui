/*
 * Desc: dialog
 * File Created: Friday, 10th January 2020 10:22:19 am
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

import { Svg_Close } from '../assets'

const DIALOG_FOOTER_TYPE = ['none', 'single', 'double']

export default class Dialog extends PureComponent {

  static propTypes = {
    visible: PropTypes.bool,                            // 对话框是否可见
    closable: PropTypes.bool,                           // 是否显示关闭按钮
    maskClosable: PropTypes.bool,                       // 点击蒙层是否允许关闭
    onClose: PropTypes.func,                            // dialog 关闭时 callback
    transparent: PropTypes.bool,                        // 是否背景透明
    animationType: PropTypes.oneOf(['slide', 'fade']),  // 动画效果
    title: PropTypes.string,                            // 标题
    cancelText: PropTypes.string,                       // 取消 按钮文字
    confirmText: PropTypes.string,                      // 确定按钮文字
    cancelOnClick: PropTypes.func,                      // 取消 按钮 点击 callback
    confirmOnClick: PropTypes.func,                     // 确定 按钮 点击 callback
    footerType: PropTypes.oneOf(DIALOG_FOOTER_TYPE),    // footer 按钮 样式
  }

  static defaultProps = {
    visible: false,
    closable: false,
    maskClosable: true,
    onClose: _ => console.log('please attach a method to Dialog component'),
    transparent: false,
    animationType: 'slide',
    title: null,
    cancelText: '取消',
    confirmText: '确定',
    cancelOnClick: _ => console.log('please attach a method to Dialog component'),
    confirmOnClick: _ => console.log('please attach a method to Dialog component'),
    footerType: DIALOG_FOOTER_TYPE[2]
  }

  constructor(props) {
    super(props)

    this.state = {
      isMutableShow: false
    }

    this.cancleBtnPress = this.cancleBtnPress.bind(this)
    this.confirmBtnPress = this.confirmBtnPress.bind(this)
    this.maskPress = this.maskPress.bind(this)
    this.dialogBodyPress = this.dialogBodyPress.bind(this)
  }

  componentDidMount() {
    let { visible } = this.props

    this.dialogVisiable(visible)
  }

  componentWillReceiveProps({ visible }) {
    let { isMutableShow } = this.state

    isMutableShow !== visible && this.dialogVisiable(visible)
  }

  /**
   * 取消 按钮点击
   */
  cancleBtnPress() {
    let { cancelOnClick } = this.props

    cancelOnClick()
    this.dialogVisiable(false)
    this.dialogHasClosed()
  }

  /**
   * 确定 按钮点击
   */
  confirmBtnPress() {
    let { confirmOnClick } = this.props

    confirmOnClick()
  }

  /**
   * 蒙层 点击
   */
  maskPress() {
    let { maskClosable } = this.props

    if (maskClosable) {
      this.dialogVisiable(false)
      this.dialogHasClosed()
    }
  }

  /**
   * 触发 dialog 关闭 callback
   */
  dialogHasClosed() {
    let { onClose } = this.props

    let closedTimeout = setTimeout(
      () => {
        clearTimeout(closedTimeout)
        onClose()
      },
      0
    )
  }


  /**
   * 打开 、关闭  dialog
   * @param {boolean} [isMutableShow=false]
   */
  dialogVisiable(isMutableShow = false) {
    this.setState({ isMutableShow })
  }

  /**
   * dialog body 点击 阻止时间冒泡
   * @param {*} e
   */
  dialogBodyPress(e) {
    e.stopPropagation()
  }

  render() {

    let { isMutableShow } = this.state

    let {
      closable,
      transparent,
      // animationType,
      title,
      children,
      cancelText,
      confirmText,
      footerType,
    } = this.props

    return (
      <>

        <div
          className={
            `
            ${transparent ? 'lite-ui-mask-transparent' : 'lite-ui-mask'} 
            ${isMutableShow && 'show-lite-ui-mask'}
            `
          }
        />

        <div className={`lite-ui-dialog-content ${isMutableShow && 'show-lite-ui-dialog'}`} onClick={this.maskPress} >

          <section className='lite-ui-dialog' onClick={this.dialogBodyPress}>

            {
              closable &&
              <img src={Svg_Close} alt='' className='closeIcon' />
            }

            {
              title &&
              <div className='title'>{title}</div>
            }

            <div className='body'>
              {children}
            </div>

            <div className='footer'>

              {
                footerType === DIALOG_FOOTER_TYPE[2] &&
                <>
                  <div className='cancel' onClick={this.cancleBtnPress}>{cancelText}</div>
                  <div className='confirm' onClick={this.confirmBtnPress}>{confirmText}</div>
                </>
              }

              {
                footerType === DIALOG_FOOTER_TYPE[1] &&
                <div className='cancelSingle' onClick={this.cancleBtnPress}>{cancelText}</div>
              }

            </div>

          </section>

        </div>

      </>
    )
  }

}
