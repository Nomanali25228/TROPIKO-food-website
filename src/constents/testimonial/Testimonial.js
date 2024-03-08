import React from 'react'
import './testimonial.css'

import manPic from '../../assets/chacha.jpeg'
import lemon from '../../assets/lamon.jpeg'

export default function Testimonial() {
  return (
    <div>
        <h1 className='centertesti'>Testimonial</h1>
        <p className='centerPera'>There are many variations of passsage of lorem ipsum available, but the majority have</p>
        <img src= {manPic}alt=""  className='centerManPic'/>
        <h1 className='centerJohnhex'>Johnhex</h1>
        <p className='loremCenter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur eos aut dignissimos
             distinctio iusto molestiae illum architecto obcaecati recusandae vitae sapiente blanditiis 
             soluta officia similique, aspernatur aliquam exercitationem! Labore. distinctio iusto 
             molestiae illum architecto obcaecati recusandae <span className='lastLineCenterLorem'>sapiente blanditiis soluta officia similique, 
             aspernatur aliquam exercitationem! Labore </span></p>

             <div className='inputFlex'>


                <div>
                    <h1 className='ContactMargine'>Contact US</h1>
                    <input type="text"  placeholder='Name' className='inputname'/>
                    <input type="number"  placeholder='Phone Number' className='inputname'/>
                    <input type="email"  placeholder='Email' className='inputname'/>
                    <input type="Message"  placeholder='Message' className='inputnamelast'/>
                    <div>
                    <button className='sendBut'>
                     <p className='tagp'>Send</p>
                    </button>
                    </div>
                </div>
                <img src={lemon} alt="" className='lemonpic' />







             </div>




    </div>
  )
}
