import React, { useEffect, useState } from 'react'
import './Hero.css';
import './SideBar.css'
import Aos from 'aos';
import Card1 from '../Images/Hero/card1.png';
import Card2 from '../Images/Hero/card2.png';
import Card3 from '../Images/Hero/card3.png';
import AyazImg from '../Images/Hero/Ayaz.jpg';
import SideBar1 from './SideBar1';
import SideBar2 from './SideBar2';

const Hero = () => {
 const [showItem, setShowItem] = useState(false)

        const myFunction = ()=>{
          setShowItem(!showItem)
        }
        
        
  return (
    <div className='container'>
    <div className="full-size">
        
        {showItem ? <SideBar1 myFunction = {myFunction}/> : <SideBar2 myFunction = {myFunction}/>}
      
      <div className="hero" >
       <div className="title">
        <h1 className="heading">Empower <span id='creator'> Creators, </span> Enchant  <span id='collector'> Collectors, </span></h1>
        <p className='nft'>Where NFTs go from RUFF to remarkable</p>
        <div className="hero-btn">
        <button className='h-btn'>Explore</button>
        <button className='h-btn'>Create</button>
        </div>
       </div>
       <div className="card">
        <div className="card-item1">
        <div className="card-img">
        <img src={Card1} alt="card" width={200} height={200} className='game' />
        </div>
        <h1 className='dog'>Radioactive Doge</h1>
        <div className="card-div">
            <img src={AyazImg} alt="profile" width={40} height={40}  id='profile'/>
            <div className="menu">
            <h2 id='menu-titel'>Ayaz Ahmad</h2>
            <p id='menu-p'>Creator</p>
            </div>
        </div>
        </div>

        <div className="card-item1 item2">
        <div className="card-img">
        <img src={Card2} alt="card" width={200} height={200} className='game'/>
        </div>
        <h1 className='dog'>Radioactive Doge</h1>
        <div className="card-div">
            <img src={AyazImg} alt="profile" width={40} height={40}  id='profile'/>
            <div className="menu">
            <h2 id='menu-titel'>Ayaz Ahmad</h2>
            <p id='menu-p'>Creator</p>
            </div>
            <div className="menu">
            <h2 id='menu-titel'>50.12 wDOGE</h2>
            <p id='menu-p'>Creator</p>
            </div>
            
        </div>
        </div>

        <div className="card-item1 item3">
        <div className="card-img">
        <img src={Card3} alt="card" width={150} height={150} className='game2'/>
        </div>
        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Hero;
