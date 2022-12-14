import React from 'react'
import Accordian from './Accordian'

import bg from '../assets/images/silver-top-bg2.jpg'
import bg1 from '../assets/images/silver-top-bg3.jpg'
import bg2 from '../assets/images/903-bg1.jpg'
import bg3 from '../assets/images/market-bg1.jpg'




function PageSix() {
  return (
    <div className='page-wrapper' id='page7' style={{height: 'auto', minHeight: '120vh', alignItems: 'flex-start'}}>
        <div className='container'>
            <h1>The Silver Top Diner</h1>
            <p>How these Governmental Plans Altered the Daily Lives of Many People and Were the Demise of a Historic Diner</p>
            
            <Accordian title={"The Diner"} text={<div className='accordian-split'>
                <div >
              <div className='bg-dinner' style={{backgroundImage: `url(${bg})`}}></div>
                    <p>
                    From 1941 to 2002, the Silver Top Diner was a fixture at the corner of Harris Ave. and Kinsley Ave. "During its heyday the Silver Top would stay open 24 hours, feeding the City’s factory workers on their way home from the shift or on their way into starting first shift" (“At the Silver Top, the Talk Matters, Not the Decor.”).</p>

<p>The diner was an aesthetic feature on the outskirts of downtown. Because of its wrought-iron railroad motifs, solid mahogany, hand-laid porcelain tiles, and art deco decor, the Silver Top was featured in 1974, in a Sunday New York Times article about New England’s most picturesque diners. RISD students came to take pictures of the Silver Top (“At the Silver Top, the Talk Matters, Not the Decor.”).</p>

<p>However, the appeal for most people was not the beautiful art deco design but rather the access to yummy food at convenient times. The diner catered to a mostly working-class clientele, a majority of which worked at the fruit and produce market just down the road. "One frequentor succinctly summed up his attitude toward fish-scale air vents: ‘Decor is for broads.’ The Fairway Diner up the street gets ‘the office workers more,’ says Mrs. Ladish, ‘we’re more working class’" (“At the Silver Top, the Talk Matters, Not the Decor.”).</p>

<p>While the diner had a catered to cabbies and truck drivers, the primary customers were the workers of the fruit and produce market. The Silver Top diner, "[was] wedded to the wholesale produce market across the street and the men who make their livelihoods on its platform" (“At the Silver Top, the Talk Matters, Not the Decor.”).</p>
                    <div className='bg-dinner' style={{backgroundImage: `url(${bg3})`, marginBottom: 10}}></div>
                    <i>In the image above, the fruit market is on the left (accross the street) and the Silver Top Diner sits on the right</i>
                </div>
            </div>} />

            <Accordian title={"The Diner's Downfall"} text={<div className='accordian-split'>
                <div >
                  <p>In 1988, as part of the Capital Center Project Development Plan, the fruit and produce market was purchased by the government and shut down. What now stands over this old market is part of the I-95. </p>
<p>With the loss of the fruit and produce market, coupled with the prior closing of other industrial sites, the Silver Top Diner lost its core business. In 2002, Mayor Vincent A. Cianci, Jr., sold the parcel of land on which the Silver Top dining car sat to the developer of luxury apartments - the 903 at Jefferson Place. ArtinRuins. “Once surrounded by the Providence Fruit and Produce Warehouse, Merchants Cold Storage, Brown & Sharpe, and others, the departure of the Silver Top marks a changeover from city of industry to city of apartments” (“At the Silver Top, the Talk Matters, Not the Decor.”).</p>
<p>After the land was sold the diner was lifted up and placed on a truck. They moved the diner to a new location in Pawtucket.</p>
              <div className='bg-dinner' style={{backgroundImage: `url(${bg1})`, height: '400px'}}></div>
                
                </div>
            </div>} />

            <Accordian title={"The Diner Lives Forever"} text={<div className='accordian-split'>
                <div >
<p>While the end of Providence’s Silver Top Diner came in 2002, it lives on in the memories of its old regulars who  ate its hearty food, chatted with loved ones, and rested from a hard day's work there.</p>
<p>Memories like those from Vincent Siravo of Belmont Fruit who said that he and his brothers and cousins had been coming to the Silver Top regularly since they were young children. After “dickering” about vegetable prices, the workers from the produce market “[would return] to the diner to repair the wounds and their fellowship” (“At the Silver Top, the Talk Matters, Not the Decor.”). </p>
<p>People remember the diner nostalgically,  “I loved the Silver Top Diner!! . . . . I remember the Western omelets and the most amazing blueberry and corn muffins. I remember always having to wait for a booth . . . [T]here were so many people from the truck drivers of the Produce Company, to police officers, to RISD students . . . .” (“Silver Top Diner.”).</p>
<p>The diner helped to start relationships that still live on today: “My husband and I had our first date in 1991, . . . . finishing up with breakfast at the Silver Top. The Silver Top quickly became my favorite part of the dates in our early relationship, and it will always have a special place in my heart. . . .Been married 22 years now, and we always remember the Silver Top when we drive by the area where it used to sit!” (“Silver Top Diner.”).</p>
<div className='bg-dinner' style={{backgroundImage: `url(${bg2})`, height: '400px'}}></div>
<p>While today a brand new luxury apartment building sits atop the land on which the Silver Top Diner sat, people’s memories of the diner will remain for a lifetime. The story of the diner is intertwined with the development of Providence as a whole. Its downfall showed us the end of an era for Providence.</p>
           </div> </div>} />
        </div>
    </div>
  )
}

export default PageSix