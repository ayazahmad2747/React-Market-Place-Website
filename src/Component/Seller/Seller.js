import React from 'react'
import './Seller.css';
import AyazImg1 from '../../Component/Images/Seller/Ayaz1.jpg'
import AyazImg2 from '../../Component/Images/Seller/Ayaz2.jpg'
import AyazImg3 from '../../Component/Images/Seller/Ayaz3.jpg'
import AyazImg4 from '../../Component/Images/Seller/Ayaz4.jpg'
import AyazImg5 from '../../Component/Images/Seller/Ayaz5.jpg'
import AyazImg6 from '../../Component/Images/Seller/Ayaz6.jpg'
import AyazImg7 from '../../Component/Images/Seller/Ayaz7.jpg'
import AyazImg8 from '../../Component/Images/Seller/Ayaz8.jpg'
import AyazImg9 from '../../Component/Images/Seller/Ayaz9.jpg'
import AyazImg10 from '../../Component/Images/Seller/Ayaz10.jpg'
import AyazImg11 from '../../Component/Images/Seller/Ayaz11.jpg'
import AyazImg12 from '../../Component/Images/Seller/Ayaz12.jpg'
import SellerCard from './SellerCard';

const Seller = () => {
  return (
    <div className='container'>
    <div className="seller">
      <div className="sel-head">
      <h1 className='sel-title'>Top Sellers</h1>
      <p className='sel-para'>Creators Worth Barking About</p>
      </div>


        <div className="sel-box">
          <div className="row">
            <div className="row1">

              <SellerCard
              AyazImg = {AyazImg1}
              id = {1}
              />

              
              <SellerCard
              AyazImg = {AyazImg2}
              id = {2}
              />

            </div>
            <div className="row2">

            <SellerCard
              AyazImg = {AyazImg3}
              id = {3}
              />

              <SellerCard
              AyazImg = {AyazImg4}
              id = {4}
              />

            </div>
          </div>

          <div className="row">
            <div className="row1">

            <SellerCard
            AyazImg = {AyazImg5}
            id = {5}
            />

            <SellerCard
            AyazImg = {AyazImg6}
            id = {6}
            />

            </div>
            <div className="row2">

            <SellerCard
            AyazImg = {AyazImg7}
            id = {7}
            />

            <SellerCard
            AyazImg = {AyazImg8}
            id = {8}
            />

            </div>
          </div>
          <div className="row">
            <div className="row1">

            <SellerCard
            AyazImg = {AyazImg9}
            id = {9}
            />

            <SellerCard
            AyazImg = {AyazImg10}
            id = {10}
            />

            </div>
            <div className="row2">
            <SellerCard
            AyazImg = {AyazImg11}
            id = {11}
            />

            <SellerCard
            AyazImg = {AyazImg12}
            id = {12}
            />


            </div>
          </div>
        </div>


        
    </div>

    
      
    </div>
  )
}

export default Seller;
