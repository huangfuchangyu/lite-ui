/*
 * Desc: 操作反馈 page(二级页面)
 * File Created: Thursday, 9th January 2020 4:15:24 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */


import React from 'react'
import './index.scss'

import { Svg_Menu, Svg_Right_Point_Base } from '../../assets'

const OperatoinPage = props => {

  const jumpToModal = _ => {
    props.history.push('/modals')
  }

  return (
    <div className='basePage'>

      <section className='titleBox'>
        <img src={Svg_Menu} className='icon' alt="" />
        <span className='text'>操作反馈</span>
      </section>

      <div className='menuContainer'>

        <section className='sections' onClick={jumpToModal}>
          <span className='text'>Dialog 弹框</span>
          <img src={Svg_Right_Point_Base} alt="" className='icon' />
        </section>

        <section className='sections'>
          <span className='text'>Toast 轻提示</span>
          <img src={Svg_Right_Point_Base} alt="" className='icon' />
        </section>

        <section className='sections'>
          <span className='text'>Message 消息通知</span>
          <img src={Svg_Right_Point_Base} alt="" className='icon' />
        </section>

      </div>

    </div>
  )
}

export default React.memo(OperatoinPage)
