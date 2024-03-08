import React from 'react'

import './fresh.css'
import orange from '../../assets/orange.jpeg'
import grapes from '../../assets/black grape.jpeg'
import gauva from '../../assets/gava.jpeg'

import FruiteCard from '../../components/fresh fruit card/FruiteCard'

export default function Fresh() {
  return (
    <div>
        <h1 className='fresh'>Fresh Fruits</h1>
        <p className='pera'>There are many variations of passsage of lorem ipsum available, but the majority have</p>

        
       <FruiteCard  img={orange}/>
       <FruiteCard img={grapes}/>
       <FruiteCard img={gauva}/>
       


        



    </div>
  )
}
