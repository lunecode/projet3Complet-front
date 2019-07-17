import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import Modal from './Modal'
import './Modal.scss'
import './Navbar.scss'
import Logo from '../../Images-tripitto/Logo/B&W.png';
import Search from '../../Images-tripitto/Icons/Search-White.png';
import Avatar from '../../Images-tripitto/Icon/User/normal.png';
// import Notification from '../Images-tripitto/Icon/Notifications.png';
import NotificationPopup from '../HomeComponents/NotificationPopup';
// import ModalDeleteVideo from './ProfilComponents/ModalDeleteVideo';

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


	closeCrossModal = () => {
		this.setState({ isModalOpen: false })
	}


	// PERMET DE CACHER LE BOUTTON CONNEXION DE LA NAVBAR SI LOGIN OK
	hideButtonLoginToken = () => {
		const token = localStorage.getItem('token')
		if(token) {
			document.getElementById('displayLoginNone').classList.toggle('buttonNavbarConnexionNone')
		}
	}


	// PERMET D'AFFICHER LE BOUTON DE CONNEXION DE LA NAVBAR SI TOKEN ABSENT
	displayButtonLoginToken = () => {
		const token = localStorage.getItem('token')
		if(!token) {
			document.getElementById('displayLoginNone').classList.toggle('buttonNavbarConnexionNone')
		}
	}


	// PERMET DE FERMER LA MODAL VIA LE BOUTON CONNEXION DU COMPOSANT DE LA MODAL SI TOKEN OK
	closeModal = () => {
		const token = localStorage.getItem('token')
		if(token) {
			this.setState({ isModalOpen: false })
			document.getElementById('displayLoginNone').classList.toggle('buttonNavbarConnexionNone')
		}	
	}

// PERMET L'AFFICHE DE L'IMAGE DU MENU PROFIL SI TOKEN PRESENT

	displayImgProfilToken = () => {
		const token = localStorage.getItem('token')
		if(token) {
			document.getElementById('displayProfilImg').classList.toggle('img_profil')
		} else {
		}
	}


	// DECONNEXION 
	logout = () => {
		localStorage.clear();
		window.location.reload(false);
		this.displayButtonLoginToken()
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
		this.hideButtonLoginToken()
		this.displayImgProfilToken()
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
											<li><a href=" " className='continent_name'>AFRIQUE</a>
												{this.state.afrique.map(afrique => (
													<div key={i++} className="container_list_afrique">
														<p className="list_afrique">
															{afrique.countries}</p>
													</div>
												))}
												<button className="button_countries">...</button>
											</li>
											<li><a href=" " className='continent_name'>ASIE-OCEANIE</a>
												{this.state.asieoceanie.map(asieoceanie => (
													<div key={a++} className="container_list_asieoceanie">
														<p className="list_asieoceanie">{asieoceanie.countries}</p>
													</div>
												))}
												<button className="button_countries">...</button>
											</li>

											<li><a href=" " className='continent_name'>EUROPE</a>
												{this.state.europe.map(europe => (
													<div key={e++} className="container_list_europe">
														<p className="list_europe">{europe.countries}</p>
													</div>
												))}
												<button className="button_countries">...</button>
											</li>
											<li><a href=" " className='continent_name'>AMERIQUE</a>
												{this.state.amerique.map(amerique => (
													<div key={o++} className="container_list_amerique">
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
											<li><a href=" " className='continent_name'>AUTRES</a>
												{this.state.autres.map(autres => (
													<div className="container_list_autres">
														<li><p className="list_autres">{autres.countries}</p></li>
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












								{/* AFFICHE L'AVATAR DU PROFIL ET LE MENU */}

								<li id="displayProfilImg" className="img_profil_hide">
									<img className='logoAvatar' src={Avatar} alt='logo tripitto'></img>
									<ul className="Sous_nemu">
										<li><NavLink className="link_DropDown" exact to="/Favoris">Mes favoris</NavLink></li>
										<li><NavLink className="link_DropDown" exact to="/Profil">Gérer mon profil</NavLink></li>
										<li><NavLink className="link_DropDown" exact to="/Profil">Envoyer un avis</NavLink></li>
										<li className="li-btn-off"> <button onClick={this.logout}  className="btn-deconnection">Se déconnecter</button></li>
									</ul>
								</li>



								{/* BOUTON QUI OUVRE LA MODAL DE LOGIN */}
								<li><button onClick={this.openModal} id="displayLoginNone" className="buttonNavbarConnexion">SE CONNECTER</button></li>


								{/* BOUTON TEST DE LA VERIFICATION DU TOKEN */}
								<button onClick={this.displayImgProfilToken}>Test</button>




								{/* Permet l'affichage du profil ORIGINE */}

								{/* <li className="img_profil" onClick={isModalOpen === true ? this.closeModal : null}>
									<img className={this.state.isModalOpen === false ? "buttonNavbarConnexionNone" : "logoAvatar"}
										src={Avatar} alt="logo tripitto">
									</img>
									<ul className="Sous_nemu">
										<li><NavLink className="link_DropDown" exact to="/Favoris">Mes favoris</NavLink></li>
										<li><NavLink className="link_DropDown" exact to="/Profil">Gérer mon profil</NavLink></li>
										<li><NavLink className="link_DropDown" exact to="/Profil">Envoyer un avis</NavLink></li>
										<li className="li-btn-off"> <button className="btn-deconnection">Se déconnecter</button></li>
									</ul>
								</li> */}






								{/* Permet l'affichage de la cloche de notification une fois connecté */}
								{/* <li className={this.state.isModalOpen === false ? "buttonNavbarConnexionNone" : "notification"}><NotificationPopup /></li> */}





								{/* BOUTON QUI OUVRE LA MODAL DE LOGIN D'ORIGINE */}
								{/* 
								<li><button onClick={this.openModal} className={this.state.isModalOpen === false ? "buttonNavbarConnexion" : "buttonNavbarConnexionNone"}>SE CONNECTER</button></li> */}


								{/* Permet d'afficher le bouton de publication  */}
								{/* <NavLink to="/uploadVideo"><li><button className={this.state.isModalOpen === false ? "buttonNavbarChange" : "buttonNavbar"}>PUBLIER</button></li></NavLink> */}

							</ul>
						</div>
					</nav>


					{/* COMPOSANT QUI DECLENCHE L'OUVERTURE DE LA MODAL */}
					<div className="containerModal">
						<Modal crossClose={this.closeCrossModal} isOpen={isModalOpen} onClose={this.closeModal} test={this.displayButtonLoginToken} />
					</div>


				</header>
			</div>

		)
	}
}



export default Navbar
