/*
 * Desc: 首页banner
 * File Created: Friday, 3rd January 2020 9:50:51 am
 * Author: huangfuchangyu (changyu.huangfu@tcl.com)
 */

import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const Banner = props => {

  let { imgArr } = props

  return (
    <div className='bannerContanter'>

      {
        imgArr.map(
          item => <img src={item} key={item} className='bannerImg' alt='' />
        )
      }

    </div>
  )
}

Banner.propTypes = {
  imgArr: PropTypes.array
}

Banner.defaultProps = {
  onPress: []
}

export default React.memo(Banner)
