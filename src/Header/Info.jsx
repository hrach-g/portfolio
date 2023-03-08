import React from 'react'
import gmailLogo from '../img/gmail.png'
import teleLogo from '../img/telegram.png'
export default function () {
  return (
    <div className='about-me'>
        <img className='gmail-logo' src={gmailLogo} alt=''/>
        <a href='mailto:ginosyan.hracho@gmail.com' target='_blank' className='gmail-text'>ginosyan.hracho@gmail.com</a>
        <img src={teleLogo} alt=""  className='telegram-logo'/>
        <a href='https://t.me/hrach_g' target='_blank' className='gmail-text'>Hrach_G</a>
    </div>
  )
}
