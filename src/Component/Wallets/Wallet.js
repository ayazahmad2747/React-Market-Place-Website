import React from 'react';
import './Wallet.css';
import Emoji from '../../Component/Images/Wallet/image 4.png'
const Wallet = () => {
  return (
    <div className='container'>
    <div className="wallet">
    <div className="wal-heading">
    <h1 className='wal-title'>Wallets</h1>
    </div>
   
    

    <div className="wal-box">
        <div className="wal-center">
            <div className="wal-img">
            <img src={Emoji} alt="emoji" className='emoji' />
            </div>
            <h1 className='gaurd'>Doge Guard</h1>
            <p className='found'>The foundation, for every step we take and every decision we make.</p>
        </div>
    </div>
        <div className="wal-para">
        <p>We won’t stop you from downloading the other guy’s Wallet <br /> Just Remmember, We have got the dogecoin rocket waiting for you whenever you are ready to liftoff!</p>
        </div>
    </div>
    </div>
  )
}

export default Wallet;
