/*
 * Desc: notification component
 * File Created: Sunday, 19th January 2020 4:12:43 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */
import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const NOTIFICATION_TYPES = ['success', 'warning', 'info']

const Notification = props => {

  const { children, isShow, type } = props

  return (
    <div
      className={
        `
          ${isShow ? 'lite-ui-notification-show' : 'lite-ui-notification-hide'} 
          lite-ui-notification 
          lite-ui-notification-${type}-theme
        `
      }
    >
      {children}
    </div>
  )
}

Notification.propTypes = {
  isShow: PropTypes.bool,
  duration: PropTypes.number,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(NOTIFICATION_TYPES),
}

Notification.defaultProps = {
  isShow: false,
  duration: 5000,
  onClose: () => console.log('please attach a method to this component'),
  type: NOTIFICATION_TYPES[0],
}

export default React.memo(Notification)