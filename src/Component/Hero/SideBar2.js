import React from 'react'
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Icon1 from '../../Component/Images/Hero/Icons/icon1.png';
import Icon2 from '../../Component/Images/Hero/Icons/icon2.png';
import Icon3 from '../../Component/Images/Hero/Icons/icon3.png';
import Icon4 from '../../Component/Images/Hero/Icons/icon4.png';
import Icon5 from '../../Component/Images/Hero/Icons/icon5.png';
import Icon6 from '../../Component/Images/Hero/Icons/icon6.png';
import Icon7 from '../../Component/Images/Hero/Icons/icon7.png';
import Icon8 from '../../Component/Images/Hero/Icons/icon8.png';
import { NavLink } from 'react-router-dom';
const SideBar2 = (props) => {
    const LeftButton = <FontAwesomeIcon icon= {faArrowRight} />
  return (
    <div className='sidebar sidebar2'>
    <div className="side-btn" onClick={props.myFunction}>
    {LeftButton}
</div>
        <div className="side-list2">
        <ul>
        <li> <NavLink to = '/hero' className= 'navlink'><img src={Icon1} alt="" width={25} height={25} className='side-img'/>  </NavLink>  </li>
        <li> <NavLink to = '/frame' className= 'navlink'><img src={Icon2} alt="" width={25} height={25} className='side-img'/> </NavLink>  </li>
        <li> <NavLink to = '/choice' className= 'navlink'><img src={Icon3} alt="" width={25} height={25} className='side-img'/> </NavLink> </li>
        <li> <NavLink to = '/collection' className= 'navlink'><img src={Icon4} alt="" width={25} height={25} className='side-img'/> </NavLink> </li>
        <li><NavLink to = '/catagories' className= 'navlink'><img src={Icon5} alt="" width={25} height={25} className='side-img'/> </NavLink>  </li>
        <li> <NavLink to = '/wallet' className= 'navlink'><img src={Icon6} alt="" width={25} height={25} className='side-img'/> </NavLink> </li>
        <li> <NavLink to = '/possibilities' className= 'navlink'><img src={Icon7} alt="" width={25} height={25} className='side-img'/> </NavLink> </li>
        <li> <NavLink to = '/seller' className= 'navlink'><img src={Icon8} alt="" width={25} height={25} className='side-img'/> </NavLink>  </li>
       
        </ul>
        </div>
    </div>
  )
}

export default SideBar2;