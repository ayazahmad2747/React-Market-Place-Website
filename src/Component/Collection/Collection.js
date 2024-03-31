import React from 'react'
import './Collection.css'
import AyazImg from '../../Component/Images/Collection/Ayaz.jpg'
import ColImg1 from '../../Component/Images/Collection/col-img2.png'
import ColImg2 from '../../Component/Images/Collection/col-img1.png'
import ColImg3 from '../../Component/Images/Collection/col-img3.png'
import ColImg4 from '../../Component/Images/Collection/col-img4.png'
import ColImg5 from '../../Component/Images/Collection/col-img5.png'
import ColImg6 from '../../Component/Images/Collection/col-img6.png'
import ColImg7 from '../../Component/Images/Collection/col-img7.png'
import ColImg8 from '../../Component/Images/Collection/col-img8.png'
import ColImg9 from '../../Component/Images/Collection/col-img9.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
  import CollectionBox from './CollectionBox'
const Collection = () => {

  const leftButton = <FontAwesomeIcon icon= {faChevronLeft}/>
  const rightButton = <FontAwesomeIcon icon= {faChevronRight}/>

  
  const prevItems = ()=>{
    let box = document.querySelector('.collection-box');
    let rect = box.getBoundingClientRect();
     let width = rect.width;
    box.scrollLeft = box.scrollLeft - width;
  }
  const nextItems = ()=>{
    let box = document.querySelector('.collection-box');
    let rect = box.getBoundingClientRect();
   let width = rect.width;
    box.scrollLeft = box.scrollLeft + width;
  }

  return (
    <div className='container'>
    <div className='left-btn' onClick={prevItems}>
    {leftButton}
    </div>
      <div className="collection">
        <div className="tastic">
        <h1 className='heading'>Howl-tastic Collections!</h1>
        </div>

        <div className="collection-box">
        <CollectionBox
        AyazImg= {AyazImg}
        ColImg1 = {ColImg1}
        ColImg2 ={ColImg2}
        ColImg3= {ColImg3}
        />
        <CollectionBox
        AyazImg= {AyazImg}
        ColImg1 = {ColImg4}
        ColImg2 ={ColImg5}
        ColImg3= {ColImg6}
        />
        <CollectionBox
        AyazImg= {AyazImg}
        ColImg1 = {ColImg7}
        ColImg2 ={ColImg8}
        ColImg3= {ColImg9}
        />
        <CollectionBox
        AyazImg= {AyazImg}
        ColImg1 = {ColImg1}
        ColImg2 ={ColImg2}
        ColImg3= {ColImg3}
        />
        <CollectionBox
        AyazImg= {AyazImg}
        ColImg1 = {ColImg4}
        ColImg2 ={ColImg5}
        ColImg3= {ColImg6}
        />
        <CollectionBox
        AyazImg= {AyazImg}
        ColImg1 = {ColImg7}
        ColImg2 ={ColImg8}
        ColImg3= {ColImg9}
        />
        </div>
        
        </div>
        <div className='right-btn' onClick={nextItems}>
      {rightButton}
      </div>
      </div>
    
  )
}

export default Collection;
