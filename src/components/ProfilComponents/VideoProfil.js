import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import iconSearch from '../../Images-tripitto/Icon/TRAILING ICON.png'
import "./VideoProfil.scss"
import ModalDeleteVideo from './ModalDeleteVideo.js';
import ModalHidevideo from './ModalHidevideo.js';
import Partager from '../../Images-tripitto/Icon_Vidéo/Partager.png'
import modification from '../../Images-tripitto/Icon_Vidéo/modification.png'
import pourcentage from '../../Images-tripitto/Icon_Vidéo/pourcentage.png'
import upload from '../../Images-tripitto/Icon_Vidéo/upload.png'
import Delete from '../../Images-tripitto/Icon_Vidéo/Delete.png'

class VideoProfil extends Component {
	state = {
		videos_profil: [],
		videoByProfil: [],
		isModalSecurityOpen: false,
	}


	getVideoById = async () => {
		let pathApi = process.env.REACT_APP_PATH_API_DEV + '/general_video/get_general_video_travel_information'
		if (process.env.NODE_ENV === 'production') {
			pathApi = process.env.REACT_APP_PATH_API_PROD + '/general_video/get_general_video_travel_information'
		}
		const token = localStorage.getItem('token')
		const idProfilDecod = jwt.decode(token)
		const idProfil = idProfilDecod.id_profil
		const res = await axios.get(`${pathApi}/${idProfil}`)
		this.setState({ videoByProfil: res.data })
	}


	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}


	submitHandler = (id) => {
		let pathApi = process.env.REACT_APP_PATH_API_DEV + '/general_video/delete_general_video'
		if (process.env.NODE_ENV === 'production') {
			pathApi = process.env.REACT_APP_PATH_API_PROD + '/general_video/delete_general_video'
		}
		axios.delete(`${pathApi}/${id}`)
			.then(response => {
				window.location.reload(true);
				console.log(response)
			})
			.catch(error => {
			})
	}

	componentDidMount = () => {
		this.getVideoById()
		this.openModalSecurity()
		this.closeModalSecurity()
	}

	openModalSecurity = () => {
		this.setState({ isModalSecurityOpen: true })
	
	}
	closeModalSecurity = () => {
		this.setState({ isModalSecurityOpen: false })
		
	}

	componentDidUpdate() {
	
	}
	render() {
		return (
			<div className="VideoProfilCompnent">
				<div className='position-bloc'>
					<div className='profil-menu'>
						<ul>
							<li>
								<NavLink
									className="nav"
									to="/Profil" exact>Profil</NavLink>
							</li>
							<li>
								<NavLink
									to="/Video" exact >Video</NavLink>
							</li>
							<li>
								<NavLink
									to="/Abonnements" exact >Abonnements</NavLink>
							</li>
							<li>
								<NavLink
									to="/Abonnés" exact >Abonnés</NavLink>
							</li>
							<li>
								<NavLink
									to="/Notifications" exact >Notifications</NavLink>
							</li>
							<li>
								<NavLink
									to="/Security" exact >Sécurité</NavLink>
							</li>
							<li>
								Mettre à niveau
							</li>
						</ul>
					</div>


					{/*** les videos *****/}
					<div className="grid-profil-info">
						<div><h3>Video(5)</h3></div>
						<div className="filter">
							<select className="w3-select" name="option">
								<option>Trier par</option>
								<option value="1">Date de publication'</option>
								<option value="2">Status</option>
								<option value="3">Popularité</option>
								<option value="3">Titre</option>
							</select>
						</div>

						<div className="searsh">
							<div className='search-bar-following'>
								<button type='submit'><img src={iconSearch} alt='icon search' /></button>
								<input type="text" placeholder="Retrouver un abonné" />
							</div>
						</div>
					</div>
				</div>


				<div className="container_vidéos">
					{this.state.videoByProfil.map(item => (

						<div className="list_videos" id="dummy">
							<div>
								<div className="video_user1">
									<div className="status_durée">
										<div className="status1">
											<p className="status">En attente d'approbation</p>
										</div>
										<div className="durée1" >
											<p className="durée">12:45</p>
										</div>
									</div>
									<div className="imagescreen">
										<img src={item.cover_picture} alt="item.video_title" />
									</div>
									<div className="countery">
										<h3>{item.video_title}</h3>
										<p className="countery_p">{item.countries}</p>
									</div>
									<div className="infos">
										<p className="A"> 0 vues</p>
										<p className="B">.</p>
										<p className="C">Il y a un jour</p>
										<p className="D"> <img src={pourcentage} alt="pourcentage" /></p>
									</div>

									<div className="icons_video">
										<img className="img1" src={modification} alt="modification" />
										<img className="img2" src={Partager} alt="Partager" />
										<ModalHidevideo />
										<ModalDeleteVideo
											{...this.state}
											openModalSecurity={this.openModalSecurity}
											closeModalSecurity={this.closeModalSecurity}
											submitIdVideoDelete={() => this.submitHandler(item.id_general_video)} />

									</div>
								</div>
							</div>
						</div>

					))}
				</div>



				<div className="Upload_video">
					<div className="video_user1">
						<div className="upload_video">
							<img src={upload} alt="upload" />
							<p>Ajouter une nouvelle video</p>
						</div>
					</div>
				</div>


			</div>

		);
	}
}



export default VideoProfil;