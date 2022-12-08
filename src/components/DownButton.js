import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


function DownButton(props) {
    const {link, color} = props;
  return (
        <div className='down-button'>
        <a href={link}><MdOutlineKeyboardArrowDown style={{color: color}} /></a>
        </div>
  )
}

export default DownButton