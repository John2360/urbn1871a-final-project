import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import SilverTopImg from '../assets/images/silvertop.jpg';
import NewAppsImg from '../assets/images/903apps.jpg';
import DownButton from './DownButton';

function PageOne() {
  return (
    <div className='page-wrapper'>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={SilverTopImg} alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={NewAppsImg}  alt="Image two" />}
          style={{width: '100%', height: '100%'}}
        />        
        <DownButton link='#page2' />
    </div>
  )
}

export default PageOne