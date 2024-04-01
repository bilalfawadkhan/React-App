import React from 'react'
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import Signup from './Frontend/Signup';
import Navbar from './Frontend/Navbar';
import Dasboard from './Frontend/Dasboard';
import { useState } from 'react';
import SiteForm from './Frontend/SiteForm';


const App = () => {
  const {islogged , setislogged} = useState(true);
  return (
    <>
    {/* {islogged ?  : <></>} */}
    <Navbar/>
    <div>
    <Routes>
    <Route path ='/' element={ <SiteForm/>}/>
    <Route path ='/home' element={<Dasboard/>}/>
    <Route path ='/about' element={<></>}/>
    </Routes>
    </div>
    
    </>
  )
}

export default App