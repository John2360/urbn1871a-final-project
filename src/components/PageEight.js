import React from 'react'
import bg from '../assets/images/prov-bg3.jpg'


function PageEight() {
    return (
        <div className='page-wrapper' id='page2'  style={{backgroundImage: `url(${bg})`, flexDirection: 'column'}}>
        <div className='page-content' ><h3>The closing of the diner marked the end of an era for Providence. The planning policies implemented by the government changed the city physical space and citizens lived experiences forever.</h3></div>
        <a href='https://docs.google.com/document/d/1caQZJ3qXAHH-BfEh2tlK5ZOFAXyLFbALMGilOFO99d0/edit?usp=sharing' target='_blank'><i style={{padding: 20, color: 'white'}}>Click here to view project sources.</i></a>
    </div>
    )
}

export default PageEight