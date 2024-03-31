import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faXTwitter, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const FooterBottom = () => {


  return (
    <div className='footer-bottom'>
      <div className="foot-bottom-para">
      <p>Nft, Inc. All Rights Reserved</p>
      </div>
      <div className="foot-icon">
      
      
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faXTwitter} />
      <FontAwesomeIcon icon={faTelegram} />
      <FontAwesomeIcon icon={faFacebook} />

      </div>
    </div>
  )
}

export default FooterBottom;
