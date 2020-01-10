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

  const openModal = _ => {
    setIsShowModal(!isShowModal)

    setTimeout(
      _ => {
        setIsShowModal(false)
      },
      5000
    )
  }

  return (
    <>
      <div className='demoBlank' />

      <Button type='primary' size='large' onClick={openModal} > show Modal </Button>

      <Dialog visible={isShowModal}>哈哈哈</Dialog>

    </>
  )

}

export default React.memo(DemoPageOfModals)
