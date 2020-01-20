/*
 * Desc: notification component
 * File Created: Sunday, 19th January 2020 4:12:43 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const NOTIFICATION_TYPES = ['success', 'warning', 'info']

export default class Notification extends PureComponent {

  static propTypes = {
    isShow: PropTypes.bool,
    duration: PropTypes.number,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(NOTIFICATION_TYPES),
  }

  static defaultProps = {
    isShow: false,
    duration: 3000,
    onClose: () => console.log('please attach a method to this component'),
    type: NOTIFICATION_TYPES[0],
  }

  constructor(props) {
    super(props)

    this.state = {
      isMutableShow: false,
    }
  }

  componentDidMount() {
    let { isShow } = this.props

    this.switchNotificaiton(isShow)
  }

  componentWillReceiveProps({ isShow }) {
    let { isMutableShow } = this.state

    isMutableShow !== isShow && this.switchNotificaiton(isShow)
  }


  /**
   * 打开，关闭 notification
   * @param {boolean} [isMutableShow=false]
   */
  switchNotificaiton(isMutableShow = false) {

    let { duration, onClose } = this.props

    if (isMutableShow === false) return

    this.setState({ isMutableShow })

    let autoCloseSto = setTimeout(
      () => {

        clearTimeout(autoCloseSto)
        this.setState({ isMutableShow: false })

        onClose()

      }, duration
    )
  }


  render() {

    const { children, type } = this.props
    let { isMutableShow } = this.state

    return (
      <div
        className={
          `
          ${isMutableShow ? 'lite-ui-notification-show' : 'lite-ui-notification-hide'} 
          lite-ui-notification 
          lite-ui-notification-${type}-theme
        `
        }
      >
        {children}
      </div>
    )
  }

}

