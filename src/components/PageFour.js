import React from 'react'
import bg from '../assets/images/prov-bg2.jpg'
import DownButton from './DownButton';

function PageFour() {
  return (
    <div className='page-wrapper' id='page2'  style={{backgroundImage: `url(${bg})`}}>
        <div className='page-content'><h3>Let's understand the polcies' impact on the real people living in Downtown and Smith Hill neighborhood.</h3></div>
        <DownButton link='#page5' />
    </div>
  )
}

export default PageFour