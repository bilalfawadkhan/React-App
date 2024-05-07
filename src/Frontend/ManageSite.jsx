import React from 'react';
import style from './css/ManageSite.css';
import {Button,ConfigProvider} from 'antd';
import SiteForm from './SiteForm';
import { useState } from 'react';
import project from './img/icons/project.png';
const json = require('./form_data.json');
import './css/Font.css'
const ManageSite = () => {
  const [popup, setPopup] = useState(false);
  const onAppear = () => {
    setPopup(true);
  }
  function handleEdit(entry) {
    // Handle edit action here
    console.log('Edit button clicked for entry: ', entry);
  }
  
  function handleDelete(entry) {
    // Handle delete action here
    console.log('Delete button clicked for entry: ', entry);
  }
  return (
    <div>
      {/* to be changed to value = popup */}
    < SiteForm value={popup} setPopup={setPopup}/> 
    <div className= {`manageSite-container ${popup ? 'blur' : ''} `}>
      {/* <SiteForm/> */}
      <div className='manageSite-mid-conatiner border_style_shdow'>
        <ConfigProvider
          theme={{
          components:{
          Button:{
          colorPrimaryBg: "#299e12",
          colorPrimaryBorder: "#299e12",
          colorPrimaryBorderHover: "#2fb315",
          colorPrimaryHover: "#2fb315",
          colorPrimary: "#299e12",
          // colorPrimaryActive: "lightgray",
          // colorPrimaryTextHover: "lightgray",
          // colorPrimaryText: "lightgray",
          // colorPrimaryTextActive: "lightgray",
          // colorBgContainer: "red",
          // colorBorderBg: "red",
          // controlOutline: "none",
          algorithm:true,
        }
       }
      }}>
          <Button type="primary" onClick={onAppear}>Add Site</Button>
        </ConfigProvider>
          <div className='site-list'>
            <ul className='site-ul'>
  <CustomList jsonEntry={json}/>

            </ul>
          </div>
      </div>
    </div>
  </div>
  )
  function CustomList({jsonEntry}){
    let listItems = [];
    if(jsonEntry.length > 0){
        jsonEntry.map((entry,index) => {
          listItems.push(
            <li key={entry.id}>
            <div style={{display:'flex',flexDirection:'row'}}>
            <img src={project} alt='site_image' style={{width:'100px',height:'100px'}}/>
            <div style={{display:'flex' , flexDirection:'column'}}>
              <h1 className='font-loader'>{entry.sitename}</h1>
              <p className='font-loader'>Timings: {entry.startTime + '-' + entry.endTime}</p>
              <p>Postcode: {entry.postcode}</p>
              </div>
              <div style={{marginLeft:'auto'}}>
              <CustomButton onClick={() => handleEdit(entry)} chirldrem='Edit'/>
              <CustomButton onClick={() => handleDelete(entry)} chirldrem='Delete'/>
            </div>
            </div>
            </li>
           
          )
        }) ;
        console.log(listItems);
      }
    
    return listItems;
  }

  function CustomButton({onClick, chirldrem}){

    if(chirldrem === 'Edit'){
      return(
        <ConfigProvider
          theme={{
          components:{
          Button:{
          colorPrimaryBg: "#299e12",
          colorPrimaryBorder: "#299e12",
          colorPrimaryBorderHover: "#2fb315",
          colorPrimaryHover: "#2fb315",
          colorPrimary: "#299e12",
          // colorPrimaryActive: "lightgray",
          // colorPrimaryTextHover: "lightgray",
          // colorPrimaryText: "lightgray",
          // colorPrimaryTextActive: "lightgray",
          // colorBgContainer: "red",
          // colorBorderBg: "red",
          // controlOutline: "none",
          algorithm:true,
        }
       }
      }}>
          <Button type="primary" onClick={onClick} style={{height:'60%'}}>Edit</Button>
        </ConfigProvider>
      )
    }
    else{
      return(
      <ConfigProvider
      theme={{
      components:{
      Button:{
      colorPrimaryBg: "#d11a2a",
      colorPrimaryBorder: "#d11a2a",
      colorPrimaryBorderHover: "#f06571",
      colorPrimaryHover: "#f06571",
      colorPrimary: "#d11a2a",
      // colorPrimaryActive: "lightgray",
      // colorPrimaryTextHover: "lightgray",
      // colorPrimaryText: "lightgray",
      // colorPrimaryTextActive: "lightgray",
      // colorBgContainer: "red",
      // colorBorderBg: "red",
      // controlOutline: "none",
      algorithm:true,
    }
   }
  }}>
      <Button type="primary" onClick={onClick} style={{height:'60%'}}>{chirldrem}</Button>
    </ConfigProvider>
    )
    }

  }


}
export default ManageSite