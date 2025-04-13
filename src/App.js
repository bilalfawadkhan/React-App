
import React from 'react'
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import Signup from './Frontend/Signup';
import Navbar from './Frontend/Navbar';
import Dasboard from './Frontend/Dasboard';
import SiteForm from './Frontend/SiteForm';
import ManageSite from './Frontend/ManageSite';
import CrewManage from './Frontend/CrewManage';
import { useState, useEffect } from 'react';
import WebFont from 'webfontloader';


import './index.css';



const App = () => {
  const {islogged , setislogged} = useState(true);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
   }, []);
  return (
    <>
    <Navbar/>
    <div>
    <Routes>
    <Route path ='/' element={<Signup/>}/>
    <Route path ='/home' element={<Dasboard/>}/>
    <Route path ='/manageSite' element={<ManageSite/>}/>
    <Route path ='/crewManage' element={<CrewManage/>}/>
    </Routes>
    </div>
    
    </>
  )
}

export default App