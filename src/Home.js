import React from 'react'
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Frame from './Component/Frame/Frame';
import Choice from './Component/Choice/Choice';
import Collection from './Component/Collection/Collection';
import Catagories from './Component/Catogories/Catagories';
import Wallet from './Component/Wallets/Wallet';
import Possibilities from './Component/Possibilities/Possibilities';
import Seller from './Component/Seller/Seller';
import Footer from './Component/Footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Frame/>
      <Choice/>
      <Collection/>
      <Catagories/>
      <Wallet/>
      <Possibilities/>
      <Seller/>
      <Footer/>
    </div>
  )
}

export default Home;
