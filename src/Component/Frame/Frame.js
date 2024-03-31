import React from 'react'
import './Frame.css';
import Frame1 from '../Images/Frame/frame1.png';
import Frame2 from '../Images/Frame/frame2.png';

const Frame = () => {
  
  return (
    <div className='container'>
    
      <div className="frame">
      <h1 className='relation'>Rocketship Relationships </h1>
      <p className='fuel'>Fueling Our Path to Woof-tastic Adventures on Dogechain.</p>
      <div className="frame-icons">
      <div className="frame-icon1">
      <img src={Frame1} alt="" width={300} height={50} className='frame-img'/>
      </div>
      <div className="nav-logo2">
      <h1 className="eden">EDEN</h1>
      </div>
      <div className="frame-icon1">
      <img src={Frame2} alt="" width={300} height={50} className='frame-img'/>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Frame;
