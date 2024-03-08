import React from 'react'
import orange from '../../assets/orangepic.jpeg'
import serche from '../../assets/sercehe.jpeg'
import line from '../../assets/3line.jpeg'
import './header.css'

export default function Header() {
  return (
    <div>
        <div className='navebardisplay'>
            
            <img src={orange} alt=""className='headerpic' />
            <h1 className=' tropiko'>TROPIKO</h1>
            <h4 className='parents'>Home</h4>
            <h4 className='children'>Fruits</h4>
            <h4 className='children'>Services</h4>
            <h4 className='children'>Contect us</h4>
            <img src= {serche} alt="" className='sercheimg'/>
            <button className='quatebut' >
                <p className='getAquote'>GET A QUOTE</p>

            </button>
            <img src={line} alt="" className='threeline' />

        </div> 
    </div>
  )
  }
