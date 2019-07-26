import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios'
import jwt from 'jsonwebtoken'

import Login from './Login'
import './Login.scss'
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
		idDecoded: ''
	};


	protectedRoute = () => {
		let pathApi = process.env.REACT_APP_PATH_API_DEV + '/login/protected'
		if (process.env.NODE_ENV === 'production') {
			pathApi = process.env.REACT_APP_PATH_API_PROD + '/login/protected'
		}
		const token = localStorage.getItem('token')
		axios({
			method: 'POST',
			url: pathApi,
			headers: {
				'Authorization': `Bearer ${token}`,
			}
		})
			.then(res => {
				if (!res.data.message === "Token OK") {
				}
			})
	}


	openModal = () => {
		this.setState({ isModalOpen: true })
	}


	closeCrossModal = () => {
		this.setState({ isModalOpen: false })
	}


	// ALLOW TO HIDE CONNEXION BUTTON OF THE NAVBAR IF LOGIN OK
	hideButtonLoginToken = () => {
		const token = localStorage.getItem('token')
		if (token) {
			document.getElementById('displayLoginNone').classList.toggle('buttonNavbarConnexionNone')
		}
	}

	// ALLOW TO HIDE IMAGE OF THE PROFIL MENU IF TOKEN ABSENT
	hidedisplayImgProfilToken = () => {
		const token = localStorage.getItem('token')
		if (!token) {
			document.getElementById('displayProfilImg').classList.toggle('img_profil_hide')
		}
	}

	// ALLOW TO HIDE THE BELL OF NOTIFICATION IF TOKEN ABSENT
	hideDisplayBellToken = () => {
		const token = localStorage.getItem('token')
		if (!token) {
			document.getElementById('displayNotification').classList.toggle('notification_hide')
		} else {
		}
	}

	// ALLOW TO HIDE PUBLICATION BUTTON IF TOKEN ABSENT
	hideDisplayUploadButtonToken = () => {
		const token = localStorage.getItem('token')
		if (!token) {
			document.getElementById('displayUploadButton').classList.toggle('buttonNavbar_hide')
		}
	}


	//ALLOW TO DISPLAY CONNEXION BUTTON OF THE NAVBAR IF TOKEN ABSENT
	displayButtonLoginToken = () => {
		const token = localStorage.getItem('token')
		if (!token) {
			document.getElementById('displayLoginNone').classList.toggle('buttonNavbarConnexionNone')
		}
	}


	// ALLOW TO CLOSE MODAL WITH THE CONNEXION BUTTON OF THE MODAL IF TOKEN OK
	closeModal = () => {
		const token = localStorage.getItem('token')
		if (token) {
			this.setState({ isModalOpen: false })
			document.getElementById('displayLoginNone').classList.toggle('buttonNavbarConnexionNone')
		}
	}


	// LOGOUT 
	logout = () => {
		localStorage.clear();
		window.location.reload(false);
		this.displayButtonLoginToken()
		window.location.assign('/')
	}



	decodeToken = () => {
		const token = localStorage.getItem('token')
		if (token) {
			const decoded = jwt.decode(token)
			const idProfilDecoded = decoded.id_profil
			this.setState({ idDecoded: idProfilDecoded })
		}
	}

	getafrique = async () => {
		let pathApi = process.env.REACT_APP_PATH_API_DEV + '/travel_information/get_travelinformation_continent_afrique'
		if (process.env.NODE_ENV === 'production') {
			pathApi = process.env.REACT_APP_PATH_API_PROD + '/travel_information/get_travelinformation_continent_afrique'
		}
		const res = await axios.get(pathApi)
		const africa = res.data
		this.setState({ afrique: africa })
	}


	getasieoceanie = async () => {
		let pathApi = process.env.REACT_APP_PATH_API_DEV + '/travel_information/get_travelinformation_continent_asieoceanie'
		if (process.env.NODE_ENV === 'production') {
			pathApi = process.env.REACT_APP_PATH_API_PROD + '/travel_information/get_travelinformation_continent_asieoceanie'
		}
		const res = await axios.get(pathApi)
		const asiaoceania = res.data
		this.setState({ asieoceanie: asiaoceania })
	}

	geteurope = async () => {
		let pathApi = process.env.REACT_APP_PATH_API_DEV + '/travel_information/get_travelinformation_continent_europe'
		if (process.env.NODE_ENV === 'production') {
			pathApi = process.env.REACT_APP_PATH_API_PROD + '/travel_information/get_travelinformation_continent_europe'
		}
		const res = await axios.get(pathApi)
		const europes = res.data
		this.setState({ europe: europes })
	}
	getamerique = async () => {
		let pathApi = process.env.REACT_APP_PATH_API_DEV + '/travel_information/get_travelinformation_continent_amerique'
		if (process.env.NODE_ENV === 'production') {
			pathApi = process.env.REACT_APP_PATH_API_PROD + '/travel_information/get_travelinformation_continent_amerique'
		}
		const res = await axios.get(pathApi)
		const america = res.data
		this.setState({ amerique: america })
	}


	getautres = async () => {
		let pathApi = process.env.REACT_APP_PATH_API_DEV + '/travel_information/get_travelinformation_continent_autres'
		if (process.env.NODE_ENV === 'production') {
			pathApi = process.env.REACT_APP_PATH_API_PROD + '/travel_information/get_travelinformation_continent_autres'
		}
	
		const res = await axios.get(pathApi)
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
		this.hidedisplayImgProfilToken()
		this.hideDisplayBellToken()
		this.hideDisplayUploadButtonToken()
		this.decodeToken()
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

								{/* DISPLAY THE PROFIL AVATAR OF THE MENU */}
								<li id="displayProfilImg" className="img_profil">
									<img className='logoAvatar' src={Avatar} alt='logo tripitto'></img>
									<ul className="Sous_nemu">
										<li><NavLink className="link_DropDown" exact to="/Favoris">Mes favoris</NavLink></li>
										<li><NavLink className="link_DropDown" exact to="/#">A regarder plus tard</NavLink></li>
										<li><NavLink className="link_DropDown" exact to='/Profil/' >Gérer mon profil</NavLink></li>
										<li><NavLink className="link_DropDown" exact to="/#">Envoyer un avis</NavLink></li>
										<li><NavLink className="link_DropDown" exact to="/#">Aide</NavLink></li>
										<Link to="/"><li className="li-btn-off"> <button onClick={this.logout} className="btn-deconnection">Se déconnecter</button></li></Link>
									</ul>
								</li>

								{/* BUTTON THAT OPENS THE LOGIN MODAL */}
								<li><button onClick={this.openModal} id="displayLoginNone" className="buttonNavbarConnexion">SE CONNECTER</button></li>

								{/* DISPLAY BELL NOTIFICATION WHEN CONNECTED */}
								<li id="displayNotification" className="notification"><NotificationPopup /></li>

								{/* DISPLAY PUBLICATION BUTTON WHEN CONNECTED */}
								<NavLink to="/uploadVideo"><li><button id="displayUploadButton" className="buttonNavbar">PUBLIER</button></li></NavLink>
							</ul>
						</div>
					</nav>

					{/* COMPONENT WHICH SHOWS THE OPENING OF THE MODAL*/}
					<div className="containerModal">
						<Login crossClose={this.closeCrossModal} isOpen={isModalOpen} onClose={this.closeModal} />
					</div>
				</header>
			</div>
		)
	}
}

export default Navbar
