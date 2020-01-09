/*
 * Desc: demo page of buttons (三级页面)
 * File Created: Tuesday, 7th January 2020 2:40:03 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */

import React from 'react'
import './index.scss'

import { Button } from '../../components'

const DemoPageOfButtons = _ => {
  return (
    <div className='demoBtnContainer'>

      <Button type='primary' size='large'>primary</Button>

      <div className='demoBlank'></div>

      <Button type='ghost' size='large'>ghost</Button>

      <div className='demoBlank'></div>

      <Button type='warning' size='large'>warning</Button>

      <div className='demoBlank'></div>

      <Button type='primary' size='large' disabled>disabled</Button>

      <div className='demoBlank'></div>

      <div className='flex-hor'>

        <Button type='primary' size='medium'>primary</Button>
        <div className='horBlank' />
        <Button type='ghost' size='medium'>ghost</Button>
        <div className='horBlank' />
        <Button type='warning' size='medium'>warning</Button>

      </div>

      <div className='demoBlank'></div>

      <div className='demoBlank'></div>

      <div className='flex-hor'>

        <Button type='primary' size='small'>primary</Button>
        <div className='horBlank' />
        <Button type='ghost' size='small'>ghost</Button>
        <div className='horBlank' />
        <Button type='warning' size='small'>warning</Button>

      </div>
      <div className='demoBlank'></div>

    </div>
  )
}

export default React.memo(DemoPageOfButtons)