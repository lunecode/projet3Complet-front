import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



import './Navbar.scss'
import Modal from './Modal';
import './Modal.scss'
import Logo from '../Images-tripitto/Logo/B&W.png';
import Search from '../Images-tripitto/Icons/Search-White.png';
import Avatar from '../Images-tripitto/Icon/User/normal.png';
// import Notification from '../Images-tripitto/Icon/Notifications.png';
import NotificationPopup from './HomeComponents/NotificationPopup';
// import ModalDeleteVideo from './ProfilComponents/ModalDeleteVideo';

class Navbar extends Component {
    state = {
        isModalOpen: false,
        // ForgottenPassword: false,
    }

openModal =() => {
    this.setState( { isModalOpen: true} )
console.log(this.state.isModalOpen);
return 

    }

    closeModal = () => {
        this.setState({ isModalOpen: false })
    }

    componentDidMount() {
        this.openModal()
        this.closeModal()
    }

    render() {
        const { isModalOpen } = this.state
        return (
            <>
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
                                <li><NavLink exact to="/Profil"><img className="logoAvatar" src={Avatar} alt="logo tripitto"></img></NavLink></li>
                                <li className="notification"><NotificationPopup /></li>
                                <li><button onClick={this.openModal} className={this.state.isModalOpen === false ? "buttonNavbarConnexion" : "buttonNavbarConnexionNone"}>SE CONNECTER</button></li>
                                <li><button onClick={this.openModal} className={this.state.isModalOpen === false ? "buttonNavbarChange" : "buttonNavbar"}>PUBLIER</button></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div className="containerModal">
                    <Modal isOpen={isModalOpen} onClose={this.closeModal} />
                </div>


            </>
        )
    }
}

export default Navbar
