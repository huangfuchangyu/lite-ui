/*
 * Desc: 基础 page(二级页面)
 * File Created: Thursday, 9th January 2020 4:15:24 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */


import React from 'react'
import './index.scss'

import { Svg_Menu, Svg_Right_Point_Base } from '../../assets'

const BasePage = props => {

  const jumpToButtons = _ => {
    props.history.push('/buttons')
  }

  return (
    <div className='basePage'>

      <section className='titleBox'>
        <img src={Svg_Menu} className='icon' alt="" />
        <span className='text'>基础</span>
      </section>

      <div className='menuContainer'>

        <section className='sections'>
          <span className='text'>Color 颜色</span>
          <img src={Svg_Right_Point_Base} alt="" className='icon' />
        </section>

        <section className='sections'>
          <span className='text'>Icon 图标</span>
          <img src={Svg_Right_Point_Base} alt="" className='icon' />
        </section>

        <section className='sections'>
          <span className='text'>Typo 字体</span>
          <img src={Svg_Right_Point_Base} alt="" className='icon' />
        </section>

        <section className='sections' onClick={jumpToButtons}>
          <span className='text'>Button 按钮</span>
          <img src={Svg_Right_Point_Base} alt="" className='icon' />
        </section>

      </div>

    </div>
  )
}

export default React.memo(BasePage)
