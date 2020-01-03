/*
 * Desc: demo 首页
 * File Created: Thursday, 2nd January 2020 7:48:00 pm
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */

import React from 'react'
import './index.scss'

import { Svg_Ball, Svg_Deer, Svg_Glove, Svg_Spark } from '../../assets'

import Banner from './components/banner'
import Title from './components/title'

const Home = _ => {
  return (
    <div className='container'>

      <Title text='Lite UI' />

      <Banner imgArr={[Svg_Ball, Svg_Deer, Svg_Glove, Svg_Spark]} />

      

    </div>
  )
}

export default React.memo(Home)