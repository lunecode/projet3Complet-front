import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.scss'
import Logo from '../Images-tripitto/Logo/B&W.png';
import Search from '../Images-tripitto/Icons/Search-White.png';
import Avatar from '../Images-tripitto/Icon/User/avatar_defaut-1.png';
import Notification from '../Images-tripitto/Icon/Notifications.png';

class Navbar extends Component {
  render() {
    return (
      <>
        <header>
          <nav className="container_nav">
            <div className="containerNavLeft">
              <div className="divLogoTripitto">
                <img className="logoTripitto" src={Logo} alt="logo tripitto"></img>
              </div>
              <htmlform method="GET" action="rechercher" className="Search">
                <input className="inputNav" type="text" placeholder="Voyager..."></input>
                <img className="icone-loupe" src={Search} alt="Search"></img>
              </htmlform>
              <ul className="ulNav">
                <li>VIDÉOS</li>
                <li>VIDÉASTES</li>
              </ul>
            </div>
            <div className="containerNavRight">
              <ul>
                <li><img className="logoAvatar" src={Avatar} alt="logo tripitto"></img></li>
                <li><img className="notification" src={Notification} alt="logo notification"></img></li>
                <li><button className="buttonNavbar">PUBLIER</button></li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    )
  }
}

export default Navbar