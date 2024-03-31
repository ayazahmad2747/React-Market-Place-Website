import React from 'react'
import './Catagories.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Catagories = () => {
  
  const prevButton = ()=>{
    let ayaz = document.querySelector('.cat-box')
    let rect = ayaz.getBoundingClientRect();
    let width = rect.width;
   ayaz.scrollLeft = ayaz.scrollLeft - width;
  }

  const nextButton = ()=>{
    let ayaz = document.querySelector('.cat-box')
    let rect = ayaz.getBoundingClientRect();
    let width = rect.width;
    ayaz.scrollLeft = ayaz.scrollLeft + width;
  }

    const leftButton = <FontAwesomeIcon icon= {faChevronLeft}/>
    const rightButton = <FontAwesomeIcon icon= {faChevronRight}/>

  return (
    <div className='container'>
    <div className='left-btn' onClick={prevButton}>
    {leftButton}
    </div>
      <div className="catagories">
        <div className="cat-heading">
        <h2 className='cat-title'>Paws, Click, Explore</h2>
        </div>

        <div className="cat-box">
          
      
      <div className="inner-box">
            <div className="inner-text">
            <h2 className='cata'>Catagorey</h2>
            </div>
        </div>
  
   
        <div className="inner-box">
            <div className="inner-text2">
            <h2 className='cata'>Abstract</h2>
            </div>
        </div>
        
        
        <div className="inner-box">
            <div className="inner-text3">
            <h2 className='cata'>Music</h2>
            </div>
        </div>
        
        
        <div className="inner-box">
            <div className="inner-text4">
            <h2 className='cata'>Goge</h2>
            </div>
        </div>

        
        
        
        <div className="inner-box">
            <div className="inner-text5">
            <h2 className='cata'>Anime</h2>
            </div>
        </div>

        <div className="inner-box">
        <div className="inner-text">
        <h2 className='cata'>Catagorey</h2>
        </div>
    </div>

    <div className="inner-box">
            <div className="inner-text2">
            <h2 className='cata'>Abstract</h2>
            </div>
        </div>
        <div className="inner-box">
            <div className="inner-text3">
            <h2 className='cata'>Music</h2>
            </div>
        </div>


        </div>

       

      </div>
      <div className='right-btn' onClick={nextButton}>
    {rightButton}
    </div>
    </div>
  )
}

export default Catagories;
