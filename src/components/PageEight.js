import React from 'react'
import bg from '../assets/images/prov-bg3.jpg'


function PageEight() {
    return (
        <div className='page-wrapper' id='page2'  style={{backgroundImage: `url(${bg})`, flexDirection: 'column'}}>
        <div className='page-content' ><h3>The closing of the diner marked the end of an era for Providence. The planning policies implemented by the government changed the city physical space and citizens lived experinces forever.</h3></div>
        <i style={{padding: 20, color: 'white'}}>Click here to view project sources.</i>
    </div>
    )
}

export default PageEight