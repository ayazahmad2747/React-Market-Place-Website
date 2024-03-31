import React from 'react'
import './Footer.css';
const FooterTop = () => {
  return (
    <div className='footer-top'>
       <div className="footer-left">
       <div className="nav-logo">
       <h1 className="eden">EDEN</h1>
       </div>

       <div className="foot-para">
       <p>Get the lastes Updates</p>
       </div>

       <div className="footer-input">
       <input type="text" placeholder='Enter Email' className='input-email'/>
       </div>

       <button className='footer-btn'> Send</button>
       </div>

       <div className="footer-right">
       <div className="footer-list">
       
        <h2>NFT</h2>
        <ul>
       <li>Home</li>
       <li>Explore</li>
       <li>Activity</li>
       <li>Contact</li>
       <li>Page</li>
       <li>Community</li>
       </ul>
       </div>
       <div className="footer-list">
         <h2>Support</h2>
         <ul>
       <li>Help center</li>
       <li>Term of serve</li>
       <li>Legal</li>
       <li>Prevecy Policy</li>
       
       </ul>
       </div>
       <div className="footer-list">
          <h2>Partners</h2>
          <ul>
       <li>Dogichain.dog</li>
       <li>roxy@eden.dig</li>
       
       </ul>
       </div>
       </div>
    </div>
  )
}

export default FooterTop;
