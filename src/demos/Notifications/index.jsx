/*
 * Desc: Notifications demo
 * File Created: Sunday, 19th January 2020 5:25:08 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */
import React from 'react'
import './index.scss'

import { Button, Notification } from '../../components'

const DemoPageOfNotifications = () => {

  const showNotification = () => Notification({ isShow: true })

  return (
    <div className='demoNotifications'>
      <div className='demoBlank' />

      <Button type='primary' size='large' onClick={showNotification} > show Notification </Button>

    </div>
  )

}

export default React.memo(DemoPageOfNotifications)