import React from 'react'
import Accordian from './Accordian'

import bg from '../assets/images/silver-top-bg2.jpg'
import bg1 from '../assets/images/silver-top-bg3.jpg'
import bg2 from '../assets/images/903-bg1.jpg'



function PageSix() {
  return (
    <div className='page-wrapper' id='page7' style={{height: 'auto', minHeight: '100vh', alignItems: 'flex-start'}}>
        <div className='container'>
            <h1>The Silver Top Dinner</h1>
            <p>How these Governmental Plans Altered the Daily Lives of Many People and Were the Demise of a Historic Diner</p>
            
            <Accordian title={"The Dinner"} text={<div className='accordian-split'>
                <div >
              <div className='bg-dinner' style={{backgroundImage: `url(${bg})`}}></div>
                    <p>
                    From 1941 to 2002, the Silver Top Diner was a fixture at the corner of Harris Ave. and Kinsley Ave. "During its heyday the Silver Top would stay open 24 hours, feeding the City’s factory workers on their way home from the shift or on their way into starting first shift." ArtinRuins.</p>

<p>Because of its wrought-iron railroad motifs, solid mahogany, hand-laid porcelain tiles, and art deco decor, the Silver Top was featured in 1974, in a Sunday New York Times article about New England’s most picturesque diners. RISD students came to take pictures of the Silver Top. Providence Journal, July 27, 1975, "At the Silver Top, the Talk Matters, Not the Decor."</p>

<p>But for the Silver Top’s working class clientele, the draw was the food and conversation, not the decor. "One frequentor succintly summed up his attidude toward fish-scale air vents: ‘Decor is for broads.’ The Fairway Diner up the street gets ‘the office workers more,’ says Mrs. Ladish, ‘we’re more working class.’" Providence Journal, July 27, 1975, "At the Silver Top, the Talk Matters, Not the Decor."</p>

<p>The all-night clientele at the Silver Top included cabbies and truck drivers. "But most of all, the diner is wedded to the wholesale produce market across the street and the men who make their livelihoods on its platform." Providence Journal, July 27, 1975, "At the Silver Top, the Talk Matters, Not the Decor."</p>
                </div>
            </div>} />

            <Accordian title={"The Dinner's Downfall"} text={<div className='accordian-split'>
                <div >
<p>In 2002, Mayor Vincent A. Cianci, Jr., sold the parcel of land on which the Silver Top dining car sat to the developer of luxury apartments - the 903 at Jefferson Place. ArtinRuins. “Once surrounded by the Providence Fruit and Produce Warehouse, Merchants Cold Storage, Brown & Sharpe, and others, the departure of the Silver Top marks a changeover from city of industry to city of apartments.” ArtinRuins</p>
<p>After the land was sold the dinner was lifted up and placed on a truck. They moved the dinner to a new location in Pawtucket.</p>
              <div className='bg-dinner' style={{backgroundImage: `url(${bg1})`, height: '400px'}}></div>
                <p>Vincent Siravo of Belmont Fruit said that he and his brothers and cousins had been coming to the Silver Top regularly since they were young children. After “dickering” about vegetable prices, the workers from the produce market “returned to the diner to repair the wounds and their fellowship.” Providence Journal, July 27, 1975, “At the Silver Top, the Talk Matters, Not the Decor.”</p>
                <p>“And that’s the kind of relationship that they have with the Silver Top Diner, too. That’s why they’re there after the tourists and college students and art deco fans have gone their way. ‘I’m in the fruit business,’ says Sigal. ‘When I get into the interior decorating business, I’ll appreciate decor. Right now, I appreciate the coffee and the fellowship. We’re earthy people and this is an erathy diner.’” Providence Journal, July 27, 1975, “At the Silver Top, the Talk Matters, Not the Decor.”</p>
                <p>Now what stands instead of the Silver Top Dinner is the below luxury apartments. They are marketed as the most luxuriouse apartments in Providence. </p>
              <div className='bg-dinner' style={{backgroundImage: `url(${bg2})`, height: '400px'}}></div>
                
                </div>
            </div>} />

            <Accordian title={"The Dinner Lives Forever"} text={<div className='accordian-split'>
                <div >
                  <p>The dinner lives on through the memories of the people. When asked about the Silver Top Dinner today, people had the following memories and stories to share.</p>
<p>“I loved the Silver Top Diner!! . . . . I remeber the Western omelets and the most amazing blueberry and corn muffins. I remember always having to wait for a booth . . . [T]here were so many people from the truck drivers of the Produce Company, to police officers, to RISD students . . . .” Mary King, Sept. 13, 2020, ArtInRuins.com</p>
<p>“My husband and I had our first date in 1991, . . . . finishing up with breakfast at the Silver Top. The Silver Top quickly became my favorite part of the dates in our early relationship, and it will always have a special place in my heart. . . .Been married 22 years now, and we always remember the Silver Top when we drive by the area where it used to sit!” Sherri Q, April 11, 2019, ArtInRuins.com</p>
           </div> </div>} />
        </div>
    </div>
  )
}

export default PageSix