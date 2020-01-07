/*
 * Desc: demo page of buttons
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

      <Button type='primary' size='large' disabled>primary disabled</Button>

      <div className='demoBlank'></div>

      <Button type='ghost' size='large'>ghost</Button>

      <div className='demoBlank'></div>

      <Button type='ghost' size='large' disabled>ghost disabled</Button>

      <div className='demoBlank'></div>

      <Button type='warning' size='large'>warning</Button>

      <div className='demoBlank'></div>

      <Button type='warning' size='large' disabled>warning disabled</Button>

      <div className='demoBlank'></div>

      <div className='flex-hor'>

        <Button type='primary' size='medium'>primary</Button>
        <div className='horBlank' />
        <Button type='ghost' size='medium'>ghost</Button>
        <div className='horBlank' />
        <Button type='warning' size='medium'>warning</Button>

      </div>

      <div className='demoBlank'></div>

      <div className='flex-hor'>

        <Button type='primary' size='medium' disabled>primary</Button>
        <div className='horBlank' />
        <Button type='ghost' size='medium' disabled>ghost</Button>
        <div className='horBlank' />
        <Button type='warning' size='medium' disabled>warning</Button>

      </div>

      <div className='demoBlank'></div>

      <div className='flex-hor'>

        <Button type='primary' size='small'>primary</Button>
        <div className='horBlank' />
        <Button type='ghost' size='small'>ghost</Button>
        <div className='horBlank' />
        <Button type='warning' size='small'>warning</Button>

      </div>
      <div className='demoBlank'></div>

      <div className='flex-hor'>

        <Button type='primary' size='small' disabled>primary</Button>
        <div className='horBlank' />
        <Button type='ghost' size='small' disabled>ghost</Button>
        <div className='horBlank' />
        <Button type='warning' size='small' disabled>warning</Button>

      </div>


    </div>
  )
}

export default React.memo(DemoPageOfButtons)