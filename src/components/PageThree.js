import React from 'react'
import Accordian from './Accordian'

import map1 from '../assets/images/map1.jpg'
import map2 from '../assets/images/map2.jpg'
import map3 from '../assets/images/map3.jpg'


function PageThree() {
    
  return (
    <div className='page-wrapper' id='page3' style={{height: 'auto', minHeight: '100vh', alignItems: 'flex-start'}}>
        <div className='container'>
            <h1>Let's Talk Policy</h1>
            <p>From 1960 to 2000, the Providence city government approved seven plans to develop downtown and the surrounding areas. Three of these seven plans were never developed. One of these plans focuses primarily on the College Hill area. That leaves three major plans that shaped the downtown and surrounding neighborhoods.</p>
            <Accordian title={"Policy 1: Downtown Providence 1970"} text={<div className='accordian-split'>
                <div style={{width: '55%', padding: 5}}>
                    <p>This plan was published in 1961, but named for its 10-year planning horizon. The plan set out to bulldoze parts of the west and north side of Providence. The idea was to replace the properties and buildings with larger streets more conducive to cars. With the widening of streets,  planners wanted to shift the I95 to increase its size. The plan suggested tearing down buildings on Sabin Street and constructing a brand-new convention and sports center. Planners were interested in modernizing the city. They suggested that old buildings downtown should be ripped out and replaced with newer, taller buildings. Finally planners wanted tomake the river a more prominent feature in the city’s downtown by moving the train line from crossing over the river. City planners described this new vision through the eyes of a visitor stepping off the train:</p>
                    <p style={{marginLeft: 30, marginRight: 30}}>"Downtown . . . has been transformed. [A male visitor] will leave the new train station, and walk past the beautiful new hotel to the Civic Center. Around him are new office structures . . . he will cross a bridge into the new Mall Park . . . the shopping area is not as he remembered. The central axis . . . is now a pedestrian way. He follows the mall . . . [and] there . . . is another surprise. He remembers that on his left he was accustomed to see some old factory buildings, and some other outdated structures. Straight ahead is the new Interstate Bus Terminal, and a huge rounded structure. This is the new Convention and Sports Center . . . along Westminster Mall . . . what had formerly been an area of unattractive buildings is now a park, with large new office structures on his left. There is much more for him to see and do . . . "</p>
                </div>
                <div style={{width: '45%'}}>
                    <img src={map1} width={'100%'} />
                    <p style={{fontSize: '1rem', textAlign: 'center'}}>Map of planned changes</p>
                </div>
            </div>} />

            <Accordian title={"Policy 2: The Capital Center Project Development Plan"} text={<div className='accordian-split'>
                <div style={{width: '55%', padding: 5}}>
                    <p>The Capital Center Project Development Plan was developed in 1979. The planners embellished on their idea of moving the rail lines by outlining a plan to move the train station. The planners also intended to deindustrialize the area by selling off railroad property to developers. The planners also suggested a series of road and rail bridges over the river.</p>
                </div>
                <div style={{width: '45%'}}>
                    <img src={map2} width={'100%'} />
                    <p style={{fontSize: '1rem', textAlign: 'center'}}>Map of planned changes</p>
                </div>
            </div>} />

            <Accordian title={"Policy 3: The Providence Waterfront Study"} text={<div className='accordian-split'>
                <div style={{width: '55%', padding: 5}}>
                    <p>Developed in 1985, the Waterfront Study’s goal was to revitalize the waterfront. The plan was to rearrange roads to travel parallel to the river and reduce bridges and structures over the bridge. The planners recreated the original Providence cove by building a small cove in the Woonasquatucket River. They also decided to add parkland along the river and under the I95.</p>
                </div>
                <div style={{width: '45%'}}>
                    <img src={map3} width={'100%'} />
                    <p style={{fontSize: '1rem', textAlign: 'center'}}>Map of planned changes</p>
                </div>
            </div>} />
        </div>
    </div>
  )
}

export default PageThree