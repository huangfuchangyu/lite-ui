import React from 'react'
import './index.scss'

import { Svg_Ball, Svg_Deer, Svg_Glove, Svg_Spark } from '../../assets'

import Banner from './components/banner'

const Home = _ => {
  return (
    <div className='container'>

      <Banner imgArr={[Svg_Ball, Svg_Deer, Svg_Glove, Svg_Spark]} />

      <div>基础</div>
      <div>操作反馈</div>
      <div>布局</div>
      
    </div>
  )
}

export default React.memo(Home)