import React from 'react'
import './Possibilities.css';
import Step1 from '../../Component/Images/possiblities/step1.png';
import Step2 from '../../Component/Images/possiblities/step2.png';
import Step3 from '../../Component/Images/possiblities/step3.png';
import Step4 from '../../Component/Images/possiblities/step4.png';
const Possibilities = () => {
  return (
    <div className='container'>
    <div className="possible">
    <div className="pos-heading">
    <h1 className='pos-title'>Unleash The DOGE-Tastic NFT Universe On Eden: Mint, Trade, HODL, Create, And Collaborate With WOW-Some Possibilities!</h1>
    </div>

    <div className="pos-box">
        <div className="pox-box1">
        <div className="pos-img">
        <img src={Step1} alt="icon" />
        </div>
        <h3 className='pos-title1'>Choose Your Wallet - DogeGuard a Shiba's Best Friend or Metamask!</h3>
        <p className='pos-para'>Select your trusty companion for the DogeChain journey! You can go with DogeGuard, the dedicated wallet for Shibs, or MetaMask. Either way, your Doge is in good paws!</p>
        </div>

        <div className="pox-box1">
        <div className="pos-img">
        <img src={Step2} alt="icon" />
        </div>
        <h3 className='pos-title1'>Build Your Doge-llection - Where Shibs Dreams Take Shape!</h3>
        <p className='pos-para'>Building your very own 'Doge-llection.' Eden is the place where creativity knows no bounds, and DogeChain enthusiasts become true artists with our intuitive builder.</p>
        </div>

        <div className="pox-box1">
        <div className="pos-img">
        <img src={Step3} alt="icon" />
        </div>
        <h3 className='pos-title1'>Fetch Your Art - Transform Creativity into Howl-tastic NFTs!</h3>
        <p className='pos-para'>Turn your artistic 'howl-ent' into woof-tastic NFTs! In this step, your creativity shines as you fetch, mint, and create NFT art that'll have the community howling with joy. With Eden's ultimate builder if you can dream it you can achieve to the moon!</p>
        </div>

        <div className="pox-box1">
        <div className="pos-img">
        <img src={Step4} alt="icon" />
        </div>
        <h3 className='pos-title1'>List for Sale - Turn Treasures into DogeCoin Gold!</h3>
        <p className='pos-para'>Ready to cash in on your NFT treasures? 'List for Sale,' and watch as your creations turn into Doge gold! It's the ultimate treasure hunt with a digital twist, and the possibilities are 'pawsome'!</p>
        </div>


    </div>
    </div>
    </div>
  )
}

export default Possibilities;
