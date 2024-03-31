import React from 'react'
const SellerCard = (props) => {
  return (
    
        <div className="box1">
        <div className="numb">
          <div className="number">
           <h5>{props.id}</h5>
          </div>
        </div>
        <img src={props.AyazImg} alt="profile" width={50} height={50}  id='profile'/>
        <h4>Ayaz Ahmad</h4>
        <p className='react'>React developer</p>
        </div>
        
  )
}

export default SellerCard;
