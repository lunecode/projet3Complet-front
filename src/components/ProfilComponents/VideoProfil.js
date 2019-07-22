import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import iconSearch from '../../Images-tripitto/Icon/TRAILING ICON.png'
import "./VideoProfil.scss"
import ModalDeleteVideo from '../../components/ProfilComponents/ModalDeleteVideo.js';
import ModalHidevide from '../../components/ProfilComponents/ModalHidevideo.js';
import Partager from '../../Images-tripitto/Icon_Vidéo/Partager.png'
import modification from '../../Images-tripitto/Icon_Vidéo/modification.png'
import pourcentage from '../../Images-tripitto/Icon_Vidéo/pourcentage.png'
import pourcentage80 from '../../Images-tripitto/Icon_Vidéo/pourcentage80.png'
import pourcentage60 from '../../Images-tripitto/Icon_Vidéo/pourcentage60.png'
import vinise from '../../Images-tripitto/Icon_Vidéo/vinise.png'
import upload from '../../Images-tripitto/Icon_Vidéo/upload.png'
import img1 from '../../Images-tripitto/Icon_Vidéo/img1.png'
import img2 from '../../Images-tripitto/Icon_Vidéo/img2.png'
import img3 from '../../Images-tripitto/Icon_Vidéo/img3.png'
import img4 from '../../Images-tripitto/Icon_Vidéo/img4.png'
import axios from "axios"

class VideoProfil extends Component {
	state = {

		videos_profil: [],
		isModalSecurityOpen: false,

	}


	getFollowing = async () => {
		const token = localStorage.getItem('token')
		const tokenDecoded = jwt.decode(token)
		const idProfilDecoded = tokenDecoded.id_profil
		// console.log(idProfilDecoded);
		const res = await axios.get(`http://localhost:3000/general_video/get_video_id_profil/${idProfilDecoded}`)
		// console.log(res);
		this.setState({ videos_profil: res.data }, _ => {
			console.log(this.state.videos_profil)
			const getId=this.state.videos_profil[0]
			console.log(getId.id_general_video)
		})
	}

//supprition
	  handleSubmit = (e)=> {	 
		e.preventDefault()

		axios.delete(`http://localhost:3000/general_video/delete_general_video/`)
		  .then(res => {
			console.log(res);
			console.log(res.data);
		  })
		  .then(
	
		)

	  }


	componentDidMount(){
		this.getFollowing()
		this.openModalSecurity()
		this.closeModalSecurity()	
	}
	openModalSecurity = () => {
		this.setState({ isModalSecurityOpen: true })
		// console.log(this.state.isModalSecurityOpen);
	}
	closeModalSecurity = () => {
		this.setState({ isModalSecurityOpen: false })
		// console.log(this.state.isModalOpen);
	}

	componentDidUpdate() {
		console.log(this.state.isModalSecurityOpen);
		
	}

	render() {
    let i = 1
		return (
			<div className="VideoProfilCompnent">
				<div className="membres-profil">
					<img src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" alt="pictures profil" />
					<div className="membres-profil-detail">
						<h4>Julien Mbappé</h4>
						<p>Membre depuis le 20/02/2019</p>
					</div>
				</div>

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
								<NavLink
									to="/Mettre_à_niveau" exact >Mettre à niveau</NavLink>
							</li>
						</ul>
					</div>
					{/*** les video *****/}
					<div className="grid-profil-info">
						<div><h3>Video(5)</h3></div>
						<div className="filter">
							<select className="w3-select" name="option">
								{/* <option value="" disabled selected>Trier par</option> */}
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
								{/* <input type="text" name="" value="" placeholder="Retrouver un abonné" /> */}
							</div>
						</div>
					</div>
				</div>

				
					{/* /bloc video 1 */}
					<div className={"list_videos"+ i++}   >
						{this.state.videos_profil.map(item => (

							<div className="video_user1" key={item.id_general_video} >
								<p>{item.id_general_video} </p>
								<div className="status_durée">
									<div className="status1">
										<p className="status">En attente d'approbation</p>
									</div>
									<div className="durée1" >
										<p className="durée">{item.video_duration} </p>
									</div>
								</div>

								<div className="imagescreen"><img src={item.cover_picture} alt="" /></div>
								<div className="countery">
									<h3> Dans les profondeur du canyon</h3>
									<p className="countery_p">{item.contery} </p>
								</div>
								<div className="infos">
									<p className="A"> 0 vues</p>
									<p className="B">.</p>
									<p className="C">Il y a {item.loading_time} jours </p>
									<p className="D"> <img src={pourcentage} alt="" /></p>
								</div>
								<div className="icons_video">
									<img className="img1" src={modification} alt="" />
									<img className="img2" src={Partager} alt="" />
									<ModalHidevide />
							    	<ModalDeleteVideo 
									{...this.state}
									getFollowing={item.id_general_video}
									openModalSecurity={this.openModalSecurity}
									closeModalSecurity={this.closeModalSecurity}
									handleSubmit={this.handleSubmit}/> 
								</div>
								</div>
						))}
					</div>

			

				{/* /bloc video 4*/}
				<div className="list_videos">

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