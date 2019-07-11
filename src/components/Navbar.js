import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'


import './Navbar.scss'
import Logo from '../Images-tripitto/Logo/B&W.png';
import Search from '../Images-tripitto/Icons/Search-White.png';
import Avatar from '../Images-tripitto/Icon/User/normal.png';
import Notification from '../Images-tripitto/Icon/Notifications.png';



class Navbar extends Component {
    state = {
        afrique: [],
        asieoceanie: [],
        europe: [],
        amerique: [],
        autres: [],
    };

    getafrique = async () => {
        const res = await axios.get('http://localhost:3000/travel_information/get_travelinformation_continent_afrique')
        const africa = res.data
        this.setState({ afrique: africa })
    }
    getasieoceanie = async () => {
        const res = await axios.get('http://localhost:3000/travel_information/get_travelinformation_continent_asieoceanie')
        const asiaoceania = res.data
        this.setState({ asieoceanie: asiaoceania })
    }

    geteurope = async () => {
        const res = await axios.get('http://localhost:3000/travel_information/get_travelinformation_continent_europe')
        const europes = res.data
        this.setState({ europe: europes })
    }
    getamerique = async () => {
        const res = await axios.get('http://localhost:3000/travel_information/get_travelinformation_continent_amerique')
        const america = res.data
        this.setState({ amerique: america })
    }
    getautres = async () => {
        const res = await axios.get('http://localhost:3000/travel_information/get_travelinformation_continent_autres')
        const other = res.data
        this.setState({ autres: other })
    }
    componentDidMount() {
        this.getafrique()
        this.getasieoceanie()
        this.geteurope()
        this.getamerique()
        this.getautres()
    }
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
                                <li className='Nav_menu'><button className="button_video"><NavLink exact to="/">VIDÉOS</NavLink></button>
                                    <ul className="ul_list">
                                     <div className="container_list">
                                        <li><a href=" " className='continent_name'>AFRIQUE</a>
                                            {this.state.afrique.map(afrique => (
                                            <div className="container_list_afrique">
                                            <p className="list_afrique">{afrique.countries}</p>
                                            </div>
                                            ))}
                                            <button className="button_countries">...</button>
                                            </li>
                                        <li><a href=" " className='continent_name'>ASIE-OCEANIE</a>
                                        {this.state.asieoceanie.map(asieoceanie => (
                                            <div className="container_list_asieoceanie">
                                            <p className="list_asieoceanie">{asieoceanie.countries}</p>
                                            </div>
                                            ))}
                                            <button className="button_countries">...</button>
                                            </li>
                                        
                                        <li><a href=" " className='continent_name'>EUROPE</a>
                                        {this.state.europe.map(europe => (
                                            <div className="container_list_europe">
                                            <p className="list_europe">{europe.countries}</p>
                                            </div>
                                            ))}
                                            <button className="button_countries">...</button>
                                        </li>
                                        <li><a href=" " className='continent_name'>AMERIQUE</a>
                                        {this.state.amerique.map(amerique => (
                                            <div className="container_list_amerique">
                                            <p className="list_amerique">{amerique.countries}</p>
                                            </div>
                                            ))}
                                            <button className="button_countries">...</button>
                                        </li>
                                        <li><a href=" " className='continent_name'>AUTRES</a>
                                        {this.state.autres.map(autres => (
                                            <div className="container_list_autres">
                                            <p className="list_autres">{autres.countries}</p>
                                            </div>
                                            ))}
                                            <button className="button_countries">...</button>
                                            </li>
                                            
                                    </div>
                                    </ul>
                                </li>
                                <li><button className='button_video'><NavLink exact to="/">VIDÉASTES</NavLink></button></li>
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