import React from 'react'
import ImagePanel from './ImagePanel'
import Number from './Info'
import '../css/style.css'
export default function Header() {
  return (
    <div className='header'>
      <ImagePanel/>
      <Number/>
    </div>
  )
}
