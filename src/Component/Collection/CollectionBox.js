import React from 'react'
import './Collection.css';
const CollectionBox = (props) => {
    const {AyazImg,ColImg1, ColImg3,ColImg2} = props
  return (
    <div className="col-box-1">
            <div className="col-head">
        
            <div className="art-img">
            <img src={AyazImg} alt="profile" width={30} height={30}  className='profile'/>
            </div>

            <div className="art-title">
            <h2 className='art-h'>Creative art colloction</h2>
            <p id='fluf'> <span id='menu-p'>Created by</span> FLUF World</p>
            </div>

            <div className="art-btn">
                
            <button className='art-btn1'> 989</button>
            </div>
            </div>
            <div className="col-box">
            <div className="col-img1">
            <img src={ColImg1} alt="" className='responsive'/>
            </div>
            <div className="col-img1">
            <img src={ColImg2} alt=""  className='responsive'/>
            <img src={ColImg3} alt="" className='responsive'/>
            </div>
            </div>
            </div>
  )
}

export default CollectionBox;
