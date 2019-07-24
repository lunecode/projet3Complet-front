import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import Modal from './Modal'
import './Modal.scss'
import './Navbar.scss'
import Logo from '../../Images-tripitto/Logo/B&W.png';
import Search from '../../Images-tripitto/Icons/Search-White.png';
import Avatar from '../../Images-tripitto/Icon/User/normal.png';

import NotificationPopup from '../HomeComponents/NotificationPopup';


class Navbar extends Component {
    state = {
        isModalOpen: false,
        afrique: [],
        asieoceanie: [],
        europe: [],
        amerique: [],
        autres: [],
    };

    openModal = () => {
        this.setState({ isModalOpen: true })
    }

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

    closeModal = () => {
        this.setState({ isModalOpen: false })
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
    render() {
        let i = 1
        let a = 1
        let e = 1
        let o = 1
        const { isModalOpen } = this.state
        return (
            <div>
                <header>
                    <nav className="container_nav">
                        <div className="containerNavLeft">
                            <div className="divLogoTripitto">
                                <NavLink exact to="/"><img className="logoTripitto" src={Logo} alt="logo tripitto"></img></NavLink>
                            </div>
                            <form method="GET" action="rechercher" className="Search">
                                <input className="inputNav" type="text" placeholder="Voyager..."></input>
                                <img className="icone-loupe" src={Search} alt="Search"></img>
                            </form>
                            <ul className="ulNav">
                                <li className='Nav_menu'><button className="button_video"><NavLink exact to="/">VIDÉOS</NavLink></button>
                                    <ul className="ul_list">
                                        <div className="container_list">
                                       <li><NavLink className="continent_name" exact to="/Afrique_video">AFRIQUE</NavLink>  
                                                {this.state.afrique.map(afrique => (
                                                    <div key={i++} className="container_list_afrique">
                                                        <p className="list_afrique">
                                                        {afrique.countries}</p>
                                                    </div>
                                                ))}
                                                <button className="button_countries">...</button>
                                                
                                         </li>
                                         <li><NavLink className="continent_name" exact to="/Asie_video">ASIE-OCEANIE</NavLink>
                                                {this.state.asieoceanie.map(asieoceanie => (
                                                    <div key={a++} className="container_list_asieoceanie">
                                                        <p className="list_asieoceanie">{asieoceanie.countries}</p>
                                                    </div>
                                                ))}
                                                <button className="button_countries">...</button>
                                            </li>

                                            <li><NavLink className="continent_name" exact to="/Europe_video">EUROPE</NavLink>
                                                {this.state.europe.map(europe => (
                                                    <div key={e++} className="container_list_europe">
                                                        <p className="list_europe">{europe.countries}</p>
                                                    </div>
                                                ))}
                                                <button className="button_countries">...</button>
                                            </li>
                                            <li><NavLink className="continent_name" exact to="/Amerique_video">AMERIQUE</NavLink>
                                                {this.state.amerique.map(amerique => (
                                                    <div key={o++} className="container_list_amerique">
                                                        <p className="list_amerique">{amerique.countries}</p>
                                                    </div>
                                                ))}
                                                <button className="button_countries">...</button>
                                            </li>
                                            <li><NavLink className="continent_name" exact to="/Autres_video">AUTRES</NavLink>
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
                                <li className="li-videaste"><NavLink exact to="/Videaste">VIDÉASTES</NavLink></li>
                            </ul>
                        </div>
                        <div className="containerNavRight">
                        <ul className="Ulbutton" >
                     <li  className="img_profil" onClick={isModalOpen === true ? this.closeModal : null }>
                         
                          <img  className={this.state.isModalOpen === false ? "buttonNavbarConnexionNone" : "logoAvatar"}
                            src={Avatar} alt="logo tripitto">
                                 </img> 
                                    <ul className="Sous_nemu">
                                    <li><NavLink className="link_DropDown" exact to="/Favoris">Mes favoris</NavLink></li>
                                    <li><NavLink className="link_DropDown" exact to="/Profil">Gérer mon profil</NavLink></li>
                                    <li><NavLink className="link_DropDown" exact to="/Profil">Envoyer un avis</NavLink></li>
                                    
                                   <li className="li-btn-off"> <button className="btn-deconnection">Se déconnecter</button></li>
                                    </ul>                        
                                </li> 
                                <li className={this.state.isModalOpen === false ? "buttonNavbarConnexionNone" : "notification"}><NotificationPopup /></li>
                                <li><button onClick={this.openModal} className={this.state.isModalOpen === false ? "buttonNavbarConnexion" : "buttonNavbarConnexionNone"}>SE CONNECTER</button></li>
                                <NavLink to ="/uploadVideo"><li><button className={this.state.isModalOpen === false ? "buttonNavbarChange" : "buttonNavbar"}>PUBLIER</button></li></NavLink>

                            </ul>
                        </div>
                    </nav>

                    <div className="containerModal">
                        <Modal isOpen={isModalOpen} onClose={this.closeModal} />
                    </div>


                </header>
            </div>

        )
    }
}



export default Navbar