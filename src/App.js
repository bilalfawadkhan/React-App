import React from 'react'
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import Signup from './Frontend/Signup';
import Navbar from './Frontend/Navbar';
import Dasboard from './Frontend/Dasboard';
import { useState } from 'react';
import SiteForm from './Frontend/SiteForm';
import ManageSite from './Frontend/ManageSite';
import WebFont from 'webfontloader';
import { useEffect } from 'react';



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
    {/* {islogged ?  : <></>} */}
    <Navbar/>
    <div>
    <Routes>
    <Route path ='/' element={<Signup/>}/>
    <Route path ='/home' element={<Dasboard/>}/>
    <Route path ='/manageSite' element={<SiteForm/>}/>
    <Route path ='/crewManage' element={<ManageSite/>}/>
    </Routes>
    </div>
    
    </>
  )
}

export default App