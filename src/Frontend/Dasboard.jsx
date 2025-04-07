import React,{useState} from 'react'
import './css/Dasboard.css'

const Dasboard = () => {
const getData = () => {
return 'null'
};

const [notifications, setNotifications] = useState([
    { id: 1, imgSrc: 'home_13317522.png', message: 'Bilal has booked on site', read: false },
    { id: 2, imgSrc: 'home_13317522.png', message: 'Bilal has booked on site1', read: false },
    { id: 3, imgSrc: 'home_13317522.png', message: 'Bilal has booked on site2', read: false },
    { id: 4, imgSrc: 'home_13317522.png', message: 'Bilal has booked on site2', read: false },
    // Add more notifications as needed
  ]);
const bk_box4_style=[
    {background:' linear-gradient(336deg, rgba(119,65,232,0.989233193277311) 0%, rgba(160,118,246,1) 100%)'
    },
    {background:'linear-gradient(336deg, rgba(5,114,240,1) 0%, rgba(3,126,246,1) 45%, rgba(4,134,241,1) 62%)'
    },
    {background:'linear-gradient(336deg, rgba(248,80,59,1) 0%, rgba(255,115,112,1) 62%)'
    },
    {background:'linear-gradient(336deg, rgba(46,168,106,1) 0%, rgba(56,196,178,1) 63%, rgba(56,196,178,1) 100%)'
    }


]

  return (
    <div>
    <div className="container-dasboard">
       <form className='search_bar'>
        <input type="text" placeholder="Search..."/>
        <button >Search</button>
      </form>
        <div className="account_nav border_style_shdow">
            <img src="home_13317522.png" className="icon"/>
            <img src="home_13317522.png" className="icon"/>
            <img src="home_13317522.png" className="icon"/>
            <p>Secure one</p>
        </div>
        <div className="box1 border_style_shdow">
            <h1> Hi Bilal !</h1>
            <p>Welcome to the Security Dashboard</p>
            <p>Here you can view and manage all your security
            systems in one place</p>
            <h1>Weather</h1>
            <p>{getData()}</p>
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
        {notifications.map((notifications) => (
            <div className="box3_inside"
            key  = {notifications.id}
            >
            <img src={notifications.imgSrc} className="icon" />
            <p className="box3_inside_p">{notifications.message}</p>
            <p className='box3_inside_p'
            style={{ marginLeft: 'auto', textAlign: 'right' }}>12:30</p>
            </div>
          ))}

        </div>
        <div  className="box4 border_style_shdow">
            <div className="box4_inner" style={bk_box4_style[0]}>
                <h2>Time</h2>
                <p>{getData()}</p>
            </div>
            <div className="box4_inner" style={bk_box4_style[1]}>
                <h2>Num</h2>
                <p>{getData()}</p>
            </div>
            <div className="box4_inner" style={bk_box4_style[2]}>
                <h2>Num</h2>
                <p>{getData()}</p>
            </div>
            <div className="box4_inner" style={bk_box4_style[3]}>
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