import React from 'react'

import './services.css'
import orange from '../../assets/black orange.jpeg'
import Grapes from '../../assets/graps.jpeg'
import Gauva from '../../assets/black gava.jpeg'
import Card from '../../components/card/Card'


export default function Services() {
  return (
    <div>

        <h1 className='htag'>Our Services</h1>   
        <p className='ptag'>There are many variations of passsage of lorem ipsum available, but the majority have</p>     

        <div className='displayCard'>
        <Card title="Grapes"  img={Grapes}/>
        <Card title="Orange"  img={orange}/>
        <Card title="Gauva"  img={Gauva}/>
        </div>

        <div>
        <button className='readmoreBut'>
            <p className='tagp'>Read more</p>
            
        </button>
        </div>




















    </div>
  )
}
