import React from 'react'

import './scroller.css'
import friutepic from '../../assets/friute pic.jpeg'


export default function Scroller() {
  return (
    <div>
        <div className='displayFlex'>



            <div>      

        <h1 className='welcomeTexts'> Welcome To </h1>
          <h1 className='fruitTexts'> Our Fruits Shop</h1>
          <div className='ptagmiendiv'>
          <p className='ptag'>Lorem ipsum dolor sit amet adipisicing elit. Aliquid , beatae ? in Laudantium,
             officiideserunt culpa suscipit voluptatemab! Minima delectus ut ratione! Veritatis 
             deleniti inventore nam veniam soluta,ab porro  doloremque.</p>
             </div>

             <div className='displayFlexss'>  
            <button className='shopbutton'>
            <p>Shope Now</p>
            </button>
            <button className='contectbutton'>
            <p>Contect us</p>
            </button>
            </div>
                </div>

                <div>
                    <img src={friutepic} alt="" className='friuteImg' />
                    
                </div>


        </div>

    </div>
  )
  }
