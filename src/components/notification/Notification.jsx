/*
 * Desc: notification component
 * File Created: Sunday, 19th January 2020 4:12:43 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const NOTIFICATION_TYPES = ['success', 'warning', 'info']
const CSS_ANIMATION_DURING = 400

export default class Notification extends PureComponent {

  static propTypes = {
    isShow: PropTypes.bool,
    duration: PropTypes.number,
    onClose: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.oneOf(NOTIFICATION_TYPES),
    _compMounted: PropTypes.func,
  }

  static defaultProps = {
    isShow: false,
    duration: 3000,
    onClose: () => console.log('please attach a method to this component'),
    text: 'notification',
    type: NOTIFICATION_TYPES[0],
    _compMounted: () => { },
  }

  constructor(props) {
    super(props)

    this.state = {
      isMutableShow: false,
    }
  }

  componentDidMount() {
    let { isShow, _compMounted } = this.props

    this.switchNotificaiton(isShow)

    _compMounted()
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

    let { duration } = this.props

    if (isMutableShow === false) return

    this.setState({ isMutableShow })

    let autoCloseSto = setTimeout(
      () => {

        clearTimeout(autoCloseSto)

        this.setState({ isMutableShow: false })

        this.callOnCloseCb()

      }, duration
    )
  }

  callOnCloseCb() {

    let { onClose } = this.props

    let animTimeout = setTimeout(

      () => {
        clearTimeout(animTimeout)
        onClose()
      },
      CSS_ANIMATION_DURING
    )

  }


  render() {

    const { text, type } = this.props
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
        {text}
      </div>
    )
  }

}

