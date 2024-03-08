import React from 'react'
// import orange from '../../assets/black orange.jpeg'
import Grapes from '../../assets/graps.jpeg'
// import Gauva from '../../../assets/black gava.jpeg'


import './card.css'

export default function Card(obj) {
  return (
    <div>
      <div className='perantCard'>
        <img src={obj.img} alt="" className='corangePic' />
        <h1 className='h2tag'>{obj.title}</h1>
        <p className='pTageCard'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur aperiam atque nisi, distinctio
          amet soluta beatae perferendis nesciunt dolorem, voluptatum cum? Hic,temporibus consequuntur
          beatae natus quo repudiandae suscipit?</p>
      </div>


    </div>
  )
}
