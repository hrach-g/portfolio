import React from 'react'
import image from '../img/Hrach.jpg'
export default function ImagePanel() {
  return (
    <div className='image-block'>
        <img src={image} alt=""  className='my-photo'/>
        <div className='name'>
            <p>Hrach</p>
            <p>Ginosyan</p>
        </div>
    </div>
  )
}
