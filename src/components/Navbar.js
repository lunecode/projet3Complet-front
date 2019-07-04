import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';



import './Navbar.scss'
import Logo from '../Images-tripitto/Logo/B&W.png';
import Search from '../Images-tripitto/Icons/Search-White.png';
import Avatar from '../Images-tripitto/Icon/User/normal.png';
import Notification from '../Images-tripitto/Icon/Notifications.png';



class Navbar extends Component {

    render () {

        return (
            <div>
            <header>
                    <nav className="container_nav">
                        <div className="containerNavLeft">
                            <div className="divLogoTripitto">
                            <NavLink exact to="/"><img className="logoTripitto" src={Logo}alt="logo tripitto"></img></NavLink>
                            </div>
                            <form method="GET" action="rechercher" className="Search">
                                <input className="inputNav" type="text" placeholder="Voyager..."></input>
                                <img className="icone-loupe"src={Search}alt="Search"></img>
                            </form>
                            <ul className="ulNav">
                                <li><NavLink exact to="/">VIDÉOS 
                                    <div class="dropdown">
                                        <i class="fa fa-caret-down"></i>
                                    <div class="dropdown-content">
                                    <a href="#">AFRIQUE</a>
                                    <a href="#">ASIE-OCEANIE</a>
                                    <a href="#">EUROPE</a>
                                    <a href="#">AMERIQUE</a>
                                    <a href="#">AUTRES</a>
                                    </div>
                                </div></NavLink></li>
                                
                                <li><NavLink exact to="/">VIDÉASTES</NavLink></li>
                                
                                

                            </ul>

                        </div>
                        <div className="containerNavRight">
                            <ul className="Ulbutton">
                                <li><NavLink exact to="/profil"><img className="logoAvatar" src={Avatar}  alt="logo tripitto"></img></NavLink></li>
                                <li><img className="notification" src={Notification}alt="logo notification"></img></li>
                                <li><NavLink exact to="/uploadVideo"><button className="buttonNavbar">PUBLIER</button></NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar