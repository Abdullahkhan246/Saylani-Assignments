import React from 'react';
import avatar from '../../assets/images/my-avatar.png';
import Infotile from '../infotile/Infotile';
import { infoTile } from '../../constant/about.constant';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5';

export default Sidebar;


function Sidebar() {

  return (
  
      <aside className="sidebar" data-sidebar>

<div className="sidebar-info">

  <figure className="avatar-box">
  <img src={avatar} alt="Richard hanrick" width="80" />
  </figure>

  <div className="info-content">
    <h1 className="name" title="Richard hanrick">Abdullah Durrani</h1>

    <p className="title">Web developer</p>
  </div>

  <button className="info_more-btn" data-sidebar-btn>
    <span>Show Contacts</span>

    <ion-icon name="chevron-down"></ion-icon>
  </button>

</div>

<div className="sidebar-info_more">

  <div className="separator"></div>

  <ul className="contacts-list">


  {
      infoTile.map((item,index)=>{
        return <Infotile key={index} image={item.image} title={item.title} link={item.link}/>
      })
    }
 
  </ul>

  <div className="separator"></div>

  <ul className="social-list">

    <li className="social-item">
      <a href="https://github.com/haseeb-ali1/WMA-08-Assignment/tree/master/myapp" className="social-link">
      <IoLogoFacebook className="socials-icons" />
      </a>
    </li>

    <li className="social-item">
      <a href="#" className="social-link">
      <IoLogoTwitter className="socials-icons" />
      </a>
    </li>

    <li className="social-item">
      <a href="#" className="social-link">
      <IoLogoInstagram className="socials-icons" />
      </a>
    </li>

  </ul>

</div>

</aside>

    
  )
}
