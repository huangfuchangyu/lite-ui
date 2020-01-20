/*
 * Desc: demo page of Modals
 * File Created: Friday, 10th January 2020 4:43:18 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */

import React, { useState } from 'react'
import './index.scss'

import { Button, Dialog } from '../../components'

const DemoPageOfModals = _ => {

  const [isShowModal, setIsShowModal] = useState(false)

  const showModal = () => {
    setIsShowModal(true)
  }

  const dialogConfirm = () => {
    setIsShowModal(false)
  }

  return (
    <div className='demoModals'>
      <div className='demoBlank' />

      <Button type='primary' size='large' onClick={showModal} > show Modal </Button>

      <Dialog
        visible={isShowModal}
        title='标题'
        onClose={dialogConfirm}
        confirmOnClick={dialogConfirm}
      >
        对 我就是 dialog 正文
      </Dialog>

    </div>
  )

}
export default React.memo(DemoPageOfModals)