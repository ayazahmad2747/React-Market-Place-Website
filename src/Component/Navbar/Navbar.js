import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMagnifyingGlass, faUser, faBars} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
const Navbar = () => {

  const [navShow, setNavshow] = useState(false);

  const navShowhandle = ()=>{
    setNavshow(!navShow);
  }

    const faMagnifyingGlassIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />
    const faUserIcon =<FontAwesomeIcon icon={faUser} />
    const faBarsIcon = <FontAwesomeIcon icon={faBars} />
     return (
        <div className="container">
    <div className='nav-container'>
        <div className="nav-logo">
        <h1 className="eden">EDEN</h1>
        </div>
        <div className="nav-search">
        <div className="nav-icon">
        {faMagnifyingGlassIcon}
        </div>
        <input type="text" className='nav-input' placeholder= 'Search....' />
        </div>
        <div className= {`nav-login ${navShow=== true ? 'khan-g': ''}`}>
        <button className='nav-btn '>join eden</button>
        <div className="nav-img">
                {faUserIcon}
        </div>
        </div>
        <div className= 'nav-togler' onClick={navShowhandle}>
           {faBarsIcon} 
        </div>
        </div>
        </div>
  )
}

export default Navbar;
