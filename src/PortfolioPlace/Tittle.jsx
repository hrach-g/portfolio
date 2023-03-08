import React from 'react'
import ukFashion from '../img/UK.png'
import kids from '../img/Kids.png'
import logo from '../img/Logo.png'
import rozmarin from '../img/Rozmarin.png'
import sellzee from '../img/Sellzee.png'
import kings from '../img/Kings.png'
export default function Tittle() {
  return (
    <div>
      <h1 className='tittle'>Portfolio</h1>
    <div className='links'>
      <div>
        <a href="https://hrach-g.github.io/portfolio-uk-fashion/" target="_blank">
         <img src={ukFashion}/>
        </a>
      </div>
      <div>
        <a href="https://hrach-g.github.io/portfolio-sellzee/" target="_blank">
          <img src={sellzee}/>
        </a>
      </div>
      <div>
        <a href="https://hrach-g.github.io/portfolio-kids-shop/" target="_blank">
          <img src={kids}/>
        </a>
      </div>
      <div>
        <a href="https://hrach-g.github.io/portfolio-restaurant-page/" target="_blank">
         <img src={rozmarin}/>
        </a>
      </div>
      <div>
        <a href="https://hrach-g.github.io/portfolio-business-page/" target="_blank">     
           <img src={logo}/>
        </a>
      </div>
      <div>
        <a href="https://hrach-g.github.io/portfolio-restaurant/" target="_blank">
          <img src={kings}/>
        </a>
      </div>
    </div>

    </div>
  )
}
