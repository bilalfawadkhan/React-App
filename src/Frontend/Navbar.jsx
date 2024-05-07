import React from 'react'
import { Link  , useMatch , useResolvedPath} from 'react-router-dom'
import './css/Navbar.css'
import imgHome from './img/icons/home.png';
import setBodyClr from '../setBodyClr';
import imgProject from './img/icons/project.png';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';


const Navbar = () => {
  return (
    <div className='navcontainer'>
            <ul className="border_style_shdow navbar-ul">
            <Avatar
             size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 90 }}
              icon={<AntDesignOutlined />}/>
              <CustomLink to={'/home'}><img src= {imgHome} className="icon"/></CustomLink>
                <CustomLink to={'/'} index={0}>Home</CustomLink>
                <CustomLink to={'/manageSite'} index={1}>Site</CustomLink>
                <CustomLink to={'/crewManage'}>Crew</CustomLink>
                <CustomLink to={'/setings'}>Settings</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink to={'/contactUs'}>ContactUs</CustomLink>
            </ul>
    </div>
  )

  function CustomLink({to,children ,index,...props}){
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({path: resolvePath.pathname, end:true })
    return(
      <li className= { `${isActive ? 'active' : ''} list-clr navbar-li`}>
         <Link to={to} {...props}>
          {children}
          </Link> 
      </li>
    )

  }




}

export default Navbar