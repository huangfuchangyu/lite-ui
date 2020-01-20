/*
 * Desc: Notifications demo
 * File Created: Sunday, 19th January 2020 5:25:08 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */
import React, { useState } from 'react'
import './index.scss'

import { Button, Notification } from '../../components'

const DemoPageOfNotifications = () => {

  const [isShowNotice, setIsShowNotice] = useState(false)

  const showNotification = () => {
    setIsShowNotice(!isShowNotice)
  }

  return (
    <div className='demoNotifications'>
      <div className='demoBlank' />

      <Button type='primary' size='large' onClick={showNotification} > show Notification </Button>

      <Notification isShow={isShowNotice}>Notifications</Notification>

    </div>
  )

}

export default React.memo(DemoPageOfNotifications)