/*
 * Desc: demo 首页
 * File Created: Thursday, 2nd January 2020 7:48:00 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */

import React from 'react'
import './index.scss'
import { useHistory } from "react-router-dom"

import {
  Svg_Ball,
  Svg_Deer,
  Svg_Glove,
  Svg_Spark,
  Svg_Right_Point,
  Svg_Menu
} from '../../assets'

import Banner from './components/banner'
import Title from './components/title'
import OperBar from './components/operation'

const Home = _ => {
  let history = useHistory()

  const btnPress = _ => {
    history.push("/buttons")
  }

  return (
    <div className='container'>

      <Title text='Lite UI' />

      <Banner imgArr={[Svg_Ball, Svg_Deer, Svg_Glove, Svg_Spark]} />

      <OperBar
        titleIcon={Svg_Menu}
        operIcon={Svg_Right_Point}
        text='基础'
        desc='包含 颜色, 按钮, 图标 等'
        onPress={btnPress}
      />

      <OperBar
        titleIcon={Svg_Menu}
        operIcon={Svg_Right_Point}
        text='布局'
        desc='包含 列表, 浮层, 卡片 等'
      />

      <OperBar
        titleIcon={Svg_Menu}
        operIcon={Svg_Right_Point}
        text='操作反馈'
        desc='包含 对话框, 轻提示, 图标 等'
      />

      <OperBar
        titleIcon={Svg_Menu}
        operIcon={Svg_Right_Point}
        text='视图'
        desc='包含 通告栏, 标签, 徽标 等'
      />

    </div>
  )
}

export default React.memo(Home)