import React from 'react'

function StatTile(props) {
    const {icon, year, stat} = props;
  return (
    <div className='stat-tile'>
        <div className='stat-icon' style={{width: '40%'}}>
            {icon}
        </div>

        <div className='stat-text' style={{width: '60%'}}>
            <h3>{year}</h3>
            <h1>{stat}</h1>
        </div>

    </div>
  )
}

export default StatTile