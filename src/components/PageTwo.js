import React from 'react'
import bg from '../assets/images/prov-bg1.jpg'
import DownButton from './DownButton';

function PageTwo() {
  return (
    <div className='page-wrapper' id='page2'  style={{backgroundImage: `url(${bg})`}}>
        <div className='page-content'><h3>This is the story of Providence’s Urban Renewal in downtown and Smith Hill and the people and places it changed.</h3></div>
        <DownButton link='#page3' />
    </div>
  )
}

export default PageTwo