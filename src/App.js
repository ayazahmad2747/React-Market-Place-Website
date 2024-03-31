import React from 'react'
import './App.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';
import Home from './Home';
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
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/navbar' element={<Navbar/>}/>
    <Route  path='/hero' element={<Hero/>}/>
    <Route  path='/frame' element={<Frame/>}/>
    <Route  path='/choice' element={<Choice/>}/>
    <Route  path='/collection' element={<Collection/>}/>
    <Route  path='/catagories' element={<Catagories/>}/>
    <Route  path='/wallet' element={<Wallet/>}/>
    <Route  path='/possibilities' element={<Possibilities/>}/>
    <Route  path='/seller' element={<Seller/>}/>
    <Route  path='/footer' element={<Footer/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
