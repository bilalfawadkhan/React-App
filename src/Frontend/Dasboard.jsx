import React from 'react'
import './css/Dasboard.css'

const Dasboard = () => {
const getData = () => {

return 'null'


};


  return (
    <div>
    <div className="container-dasboard">
       {/* <div>
        <img src="home_13317522.png" className="icon"/>
       </div> */}
       <form className='search_bar'>
        <input type="search" placeholder="Search..."/>
      </form>
        <div className="account_nav border_style_shdow">
            <img src="home_13317522.png" className="icon"/>
            <img src="home_13317522.png" className="icon"/>
            <img src="home_13317522.png" className="icon"/>
            <p>Secure one</p>
        </div>
        {/* <ul className="border_style_shdow">
            <li><a><img src="home_13317522.png" className="icon"/></a></li>
            <li><a><img src="home_13317522.png" className="icon"/></a></li>
            <li><a><img src="home_13317522.png" className="icon"/></a></li>
            <li><a><img src="home_13317522.png" className="icon"/></a></li>
            <li><a><img src="home_13317522.png" className="icon"/></a></li>
            <li><a><img src="home_13317522.png" className="icon logout_icon"/></a></li>
            
        </ul> */}
        <div className="box1 border_style_shdow">
        </div>
        <div className="box2 border_style_shdow">
            <div className="box2_inside">
                <h3 >Active Site</h3>
                <p>{getData()}</p>
            </div>
            <div className="box2_inside">
                <h3 >Pending</h3>
                <p>{getData()}</p>
            </div>
            <div className="box2_inside">
                <h3 >Late Call</h3>
                <p>{getData()}</p>
            </div>
            <div className="box2_inside">
                <h3 >Tme</h3>
                <p>{getData()}</p>
            </div>
        </div>
        <div className="box3 border_style_shdow">

        </div>
        <div  className="box4 border_style_shdow">
            <div className="box4_inner" style={{background:' linear-gradient(336deg, rgba(119,65,232,0.989233193277311) 0%, rgba(160,118,246,1) 100%)'}}>
                <h2>Num</h2>
                <p>{getData()}</p>
            </div>
            <div className="box4_inner" style={{background:'linear-gradient(336deg, rgba(5,114,240,1) 0%, rgba(3,126,246,1) 45%, rgba(4,134,241,1) 62%)'}}>
                <h2>Num</h2>
                <p>{getData()}</p>
            </div>
            <div className="box4_inner" style={{background:'linear-gradient(336deg, rgba(248,80,59,1) 0%, rgba(255,115,112,1) 62%)'}}>
                <h2>Num</h2>
                <p>{getData()}</p>
            </div>
            <div className="box4_inner" style={{background:'linear-gradient(336deg, rgba(46,168,106,1) 0%, rgba(56,196,178,1) 63%, rgba(56,196,178,1) 100%)'}}>
                <h2>Num</h2>
                <p>{getData()}</p>
            </div>
        </div>
        <div className="box5 border_style_shdow">
        </div>
    </div>
</div>
  )
}

export default Dasboard;