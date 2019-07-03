import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.scss'
import Modal from './Modal';
import './Modal.scss'

import Logo from '../Images-tripitto/Logo/B&W.png';
import Search from '../Images-tripitto/Icons/Search-White.png';
import Avatar from '../Images-tripitto/Icon/User/normal.png';
import Notification from '../Images-tripitto/Icon/Notifications.png';

class Navbar extends Component {
state = {
    isModalOpen: false,
    // ForgottenPassword: false,
}

openModal =() => {
    this.setState( { isModalOpen: true} )
console.log(this.state.isModalOpen);

}

closeModal = () => {
    this.setState( { isModalOpen: false } )
    console.log(this.state.isModalOpen);
}

componentDidMount() {
    this.openModal()
    this.closeModal()
}

    render () {
        const { isModalOpen } = this.state
        return (
            <>
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
                                <li><img className="logoAvatar" src={Avatar}  alt="logo tripitto"></img></li>
                                <li><img className="notification" src={Notification}alt="logo notification"></img></li>
                                <li><button onClick={this.openModal} className="buttonNavbar">PUBLIER</button></li>
                            </ul>
                        </div>
                    </nav> 
                </header>
                <div className="containerModal">
                    <Modal isOpen={isModalOpen} onClose={this.closeModal}/>
                    {/* <Modal isOpenForgottenPassword={ForgottenPassword} onCloseForgottenPassword={this.closeModalForgottenPassword} /> */}
                </div>
            </>
        )
    }
}

export default Navbar