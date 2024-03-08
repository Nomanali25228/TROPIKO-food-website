import React from 'react'

import './footer.css'


import instagrame from '../../assets/instagrame.jpeg'
import iter from '../../assets/tweter.jpeg'
import linkdin from '../../assets/black in.jpeg'
import face from '../../assets/facebook.jpeg'



import Footers from '../../components/footers clone/Footers'

export default function Footer() {
  var todaydate = new Date
  var fullYear = todaydate.getFullYear()
  return (
    <div>
      <div className='footerFlex'>
        <Footers />
        <div className='cardmaegin'>
          <Footers />
        </div>
        <div className='cardmaegin'>
          <Footers />
        </div>
        <div className='follwingcard'>
          <h1>Follow Us</h1>
          <div className='imgflex'>
            <img src={iter} alt="" />
            <img src={face} alt="" className='imagemargien' />
            <img src={linkdin} alt="" className='imagemargien' />
            <img src={instagrame} alt="" className='imagemargien' />
          </div>
          <h1 className='nowmargien'>Subscribe Now</h1>
          <input type="text" className='lastinput' />
          <div>
            <button className='subcribebut'>
              <p className='tagp'>Subscribe</p>
            </button>
          </div>
        </div>
      </div>
      <div className='githublink'>
        <p>Copyright &copy; {fullYear}
           <a href="https://github.com/Nomanali25228" target='blaank'>github/Name</a>
        </p>
      </div>
    </div>
  )
}
