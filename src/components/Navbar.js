import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.scss'
import Modal from './Modal';
import './Modal.scss'

import Logo from '../Images-tripitto/Logo/B&W.png';
import Search from '../Images-tripitto/Icons/Search-White.png';
import Avatar from '../Images-tripitto/Icon/User/avatar_defaut-1.png';

import NotificationPopup from './HomeComponents/NotificationPopup';

class Navbar extends Component {
state = {
    isModalOpen: false,
    // ForgottenPassword: false,
}

openModal =() => {
    this.setState( { isModalOpen: true} )
// console.log(this.state.isModalOpen);

}

closeModal = () => {
    this.setState( { isModalOpen: false } )
    // console.log(this.state.isModalOpen);
}

// openModalForgottenPassword =() => {
//     this.setState( { ForgottenPassword: true} )
// console.log(this.state.ForgottenPassword);
// }

// closeModalForgottenPassword = () => {
//     this.setState( { ForgottenPassword: false } )
//     console.log(this.state.ForgottenPassword);
// }

componentDidMount() {
    this.openModal()
    this.closeModal()
    // this.openModalForgottenPassword()
    // this.closeModalForgottenPassword()
}

    render () {
        const { isModalOpen, ForgottenPassword } = this.state
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
                                <li><NavLink exact to="/">VIDÉOS</NavLink></li>
                                <li><NavLink exact to="/">VIDÉASTES</NavLink></li>
                            </ul>
                        </div>
                        <div className="containerNavRight">
                            <ul className="Ulbutton">
                                <li><NavLink exact to="/profil"><img className="logoAvatar" src={Avatar}  alt="logo tripitto"></img></NavLink></li>
                                <li><NotificationPopup /></li>
                                <li><NavLink exact to="/uploadVideo"><button className="buttonNavbar">PUBLIER</button></NavLink></li>
                            </ul>
                        </div>
                    </nav> 
                </header>
                <div className="containerModal">
                    <Modal isOpen={isModalOpen} onClose={this.closeModal}/>
                    {/* <Modal isOpenForgottenPassword={ForgottenPassword} onCloseForgottenPassword={this.closeModalForgottenPassword} /> */}
                </div>
            </div>
        )
    }
}

export default Navbar