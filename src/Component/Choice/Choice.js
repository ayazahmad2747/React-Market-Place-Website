import React from 'react'
import './Choice.css';
import ChoiceImage1 from '../../Component/Images/Choice/choice-img1.png';
import ChoiceImage2 from '../../Component/Images/Choice/choice-img2.png';
import ChoiceImage3 from '../../Component/Images/Choice/choice-img3.png';
import ChoiceImage4 from '../../Component/Images/Choice/choice-img4.png';
import ChoiceImage5 from '../../Component/Images/Choice/choice-img5.png';
import ChoiceImage6 from '../../Component/Images/Choice/choice-img6.png';
import ChoiceImage7 from '../../Component/Images/Choice/choice-img7.png';
import ChoiceImage8 from '../../Component/Images/Choice/choice-img8.png';
import AyazImg from '../Images/Hero/Ayaz.jpg';
import ChoiceBox from './ChoiceBox';
const Choice = () => {
  
  return (
    <div className='container'>
      <div className="choice">
      <h1 className='doge'>Community's Top Doge Choices!</h1>

      <div className="card choice-card1">

      <ChoiceBox
      ChoiceImage = {ChoiceImage1}
      AyazImg = {AyazImg}
      />
      <ChoiceBox
      ChoiceImage = {ChoiceImage2}
      AyazImg = {AyazImg}
      />
      <ChoiceBox
      ChoiceImage = {ChoiceImage3}
      AyazImg = {AyazImg}
      />
      <ChoiceBox
      ChoiceImage = {ChoiceImage4}
      AyazImg = {AyazImg}
      />
      
      
      </div>

      <div className="card choice-card1">
      <ChoiceBox
      ChoiceImage = {ChoiceImage5}
      AyazImg = {AyazImg}
      />
      <ChoiceBox
      ChoiceImage = {ChoiceImage6}
      AyazImg = {AyazImg}
      />
      <ChoiceBox
      ChoiceImage = {ChoiceImage7}
      AyazImg = {AyazImg}
      />
      <ChoiceBox
      ChoiceImage = {ChoiceImage8}
      AyazImg = {AyazImg}
      />
      </div>
      
      <div className="choice-btn">
      <button className='btn'> view more</button>
      </div>
      </div>
      
    </div>
  )
}

export default Choice;
