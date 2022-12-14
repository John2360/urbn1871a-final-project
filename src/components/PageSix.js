import React from 'react'
import DownButton from './DownButton'
import bg from '../assets/images/silver-top-bg1.jpg'

function PageSix() {
  return (
    <div className='page-wrapper' id='page2'  style={{backgroundImage: `url(${bg})`}}>
        <div className='page-content'><h3>Now we know the general impact. Let's look at some specific narratives. The story of the Silver Top Diner.</h3></div>
        <DownButton link='#page7' />
    </div>
  )
}

export default PageSix