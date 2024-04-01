import React from 'react'
import { Link  , useMatch , useResolvedPath} from 'react-router-dom'
import './css/Navbar.css'
import imgHome from './img/icons/home.png';
import setBodyClr from '../setBodyClr';
import imgProject from './img/icons/project.png';


const Navbar = () => {
  return (
    <div className='navcontainer'>
      {/* <div className='top_Left_wrap'>
        <img src= {imgHome} className="icon top_left"/>
      </div> */}
            <ul className="border_style_shdow">
              <CustomLink to={'/home'}><img src= {imgHome} className="icon"/></CustomLink>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/manage'}>Site</CustomLink>
                <CustomLink to={'/crewManage'}>Crew</CustomLink>
                <CustomLink to={'/setings'}>Settings</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink to={'/contactUs'}>ContactUs</CustomLink>
            </ul>
    </div>
  )

  function CustomLink({to,children ,...props}){
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({path: resolvePath.pathname, end:true })
    return(
      <li className= { `${isActive ? 'active' : ''} list-clr`}>
         <Link to={to} {...props}>
          {children}
          </Link> 
      </li>
    )

  }




}

export default Navbar