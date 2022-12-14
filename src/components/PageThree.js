import React from 'react'
import Accordian from './Accordian'

import map1 from '../assets/images/map1.jpg'
import map2 from '../assets/images/map2.jpg'
import map3 from '../assets/images/map3.jpg'


function PageThree() {
    
  return (
    <div className='page-wrapper' id='page3' style={{height: 'auto', minHeight: '120vh', alignItems: 'flex-start'}}>
        <div className='container' style={{paddingBottom: 200}}>
            <h1>Let's Talk Policy</h1>
            <p>At the beginning of the twentieth century, Providence was “the most industrialized city in the US and was known as the ‘armpit of New England’” (Farbstein 93). Providence had been devoted to the textile, machine tool, and jewelry industries. The city had made several changes to the downtown urban environment to accommodate the needs of industry. It had added a massive highway cutting through downtown, a large railway that covered entirely over the old cove and river, and more rail, roads, and parking spaces that covered up other rivers throughout the city. As industry began to die, the city set out to make itself a more attractive place to live in a nonindustrial era.</p>
            <p>From 1960 to 2000, the Providence city government approved seven plans to develop downtown and the surrounding areas. Three of these seven plans were never developed, and one of these plans focused primarily on the College Hill area, not downtown. That leaves three major plans that shaped the downtown and surrounding neighborhoods. With the downtown area losing its industry, planners were attempting to find ways to draw people back to a center city that would be focused on things other than industry.</p>
            <Accordian title={"Policy 1: Downtown Providence 1970"} text={<div className='accordian-split'>
                <div style={{width: '55%', padding: 5}}>
                    <p>This plan was published in 1961, but named for its 10-year planning horizon. The plan set out to bulldoze parts of the west and north side of Providence. The idea was to replace the properties and buildings with larger streets more conducive to cars. With the widening of streets, planners wanted to shift Interstate 95 to increase its size. The plan suggested tearing down buildings on Sabin Street and constructing a brand-new convention and sports center. Westminister Street was to be closed to traffic and transformed into a pedestrian retail mall area. Planners were interested in modernizing the city. They suggested that old buildings downtown should be ripped out and replaced with newer, taller buildings. Finally, planners wanted to make the river a more prominent feature in the city’s downtown by moving the train line from crossing over the river. City planners described this new vision through the eyes of a visitor stepping off the train:</p>
                    <p style={{marginLeft: 30, marginRight: 30}}>"Downtown . . . has been transformed. [A male visitor] will leave the new train station, and walk past the beautiful new hotel to the Civic Center. Around him are new office structures . . . he will cross a bridge into the new Mall Park . . . the shopping area is not as he remembered. The central axis . . . is now a pedestrian way. He follows the mall . . . [and] there . . . is another surprise. He remembers that on his left he was accustomed to see some old factory buildings, and some other outdated structures. Straight ahead is the new Interstate Bus Terminal, and a huge rounded structure. This is the new Convention and Sports Center . . . along Westminster Mall . . . what had formerly been an area of unattractive buildings is now a park, with large new office structures on his left. There is much more for him to see and do . . . " (Ryan 44).</p>
                </div>
                <div style={{width: '45%'}}>
                    <img src={map1} width={'100%'} />
                    <p style={{fontSize: '1rem', textAlign: 'center'}}>Map of planned changes (Ryan 46)</p>
                </div>
            </div>} />

            <Accordian title={"Policy 2: The Capital Center Project Development Plan"} text={<div className='accordian-split'>
                <div style={{width: '55%', padding: 5}}>
                    <p>The Capital Center Project Development Plan was developed in 1979. The planners embellished on their idea of moving the rail lines by outlining a plan to move the train station. The planners also intended to deindustrialize the area by selling off railroad property to developers. The planners also suggested a series of road and rail bridges over the river. It was later noted that “[m]any of these roads were quite wide and crossed at acute angles, creating oddly shaped city blocks and unnecessary connections to nowhere” (Ryan 49). One centerpiece of the Capital Center Development District was the Providence Place Mall which opened in 1999. The mall was “to revitalize the urban center of the city, create new jobs, and generate tax revenue” (“Providence Architecture: Locations: Providence Place Mall.”).</p>
                </div>
                <div style={{width: '45%'}}>
                    <img src={map2} width={'100%'} />
                    <p style={{fontSize: '1rem', textAlign: 'center'}}>Map of planned changes (Ryan 50)</p>
                </div>
            </div>} />

            <Accordian title={"Policy 3: The Providence Waterfront Study"} text={<div className='accordian-split'>
                <div style={{width: '55%', padding: 5}}>
                    <p>Developed in 1985, the Waterfront Study’s goal was to revitalize the waterfront around the Woonasquatucket, Moshassuck, and Providence rivers. The plan was to rearrange roads to travel parallel to the river and reduce bridges and structures over the river. The planners recreated the original Providence Great Salt Cove by building a small cove in the Woonasquatucket River. They also decided to add parkland along the river and under the I-95.</p>
                </div>
                <div style={{width: '45%'}}>
                    <img src={map3} width={'100%'} />
                    <p style={{fontSize: '1rem', textAlign: 'center'}}>Map of planned changes (Ryan 52)</p>
                </div>
            </div>} />
        </div>
    </div>
  )
}

export default PageThree