import React from 'react'

import orange from '../../assets/orange.jpeg'

import './fruite card.css'

export default function FruiteCard(props) {
  return (
    <div>
              <div className='displayfruits'>
          <div>
            <h1 className='h1tags'>Buy Fresh Orange</h1>
            <p className='loremfresh'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus culpa harum porro a vitae, 
              ratione dolore repellendus cumque obcaecati minus perspiciatis. Architecto facilis corporis beatae odit hic, enim dolore?</p>
              <button className='buynowBut'>
            <p className='tagp'>Buy Now</p>
               </button>
          </div>
          <div>
            <img src={props.img}alt="" className='oppositeSideOrange' />
          </div>
        </div>

    </div>
  )
}
