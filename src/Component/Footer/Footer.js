import React from 'react'
import './Footer.css';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
const Footer = () => {
  return (
    <div className='container'>
    <div className="footer">
        <FooterTop/>
        <FooterBottom/>
    </div>
      
    </div>
  )
}

export default Footer;
