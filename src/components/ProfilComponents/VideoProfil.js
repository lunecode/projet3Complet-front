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

class VideoProfil extends Component {
	state = {
		id_Profil: '',
	}


	idProfilVideo = () => {
		const token = localStorage.getItem('token')
		if (token) {
			const idToken = jwt.decode(token)
			const idProfilDecoded = idToken.id_profil
			this.setState = ({ id_Profil: idProfilDecoded })
		}
	}


	componentDidMount = () => {
		// this.idProfilVideo()
	}

	render() {
		const token = localStorage.getItem('token')
		const idProfilDecod = jwt.decode(token)
		const idProfil = idProfilDecod.id_profil
		console.log(idProfilDecod)
		console.log(idProfil)

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

				<div className="bloc_2_video">
					{/* /bloc video 1 */}
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

								<div className="imagescreen"><img src={img1} alt="" /></div>
								<div className="countery">
									<h3> Dans les profondeur du canyon</h3>
									<p className="countery_p">USA</p>
								</div>
								<div className="infos">
									<p className="A"> 0 vues</p>
									<p className="B">.</p>
									<p className="C">Il y a un jour</p>
									<p className="D"> <img src={pourcentage} alt="" /></p>
								</div>
								<div className="icons_video">
									<img className="img1" src={modification} alt="" />
									<img className="img2" src={Partager} alt="" />

									<ModalHidevide />
									<ModalDeleteVideo />
								</div>
							</div>

						</div>

					</div>


					{/* /*****************************************$ */}

					{/* /bloc video 2 */}
					<div className="list_videos" id="dummy">
						<div>
							<div className="video_user1">
								<div className="status_durée">
									<div className="status1">
										<p className="status_enligne">En ligne</p>
									</div>
									<div className="durée1" >
										<p className="durée">08:36</p>
									</div>
								</div>

								<div className="imagescreen"><img src={img3} alt="" /></div>

								<div className="countery">
									<h3>Perdu dans le sahara</h3>
									<p className="countery_p">Mauritanie</p>
								</div>
								<div className="infos">
									<p className="A"> 1903 vues</p>
									<p className="B">.</p>
									<p className="C">Il y a 3 mois</p>
									<p className="D"> <img src={pourcentage80} alt="" /></p>
								</div>
								<div className="icons_video">
									<img className="img1" src={modification} alt="" />
									<img className="img2" src={Partager} alt="" />
									<ModalHidevide />
									<ModalDeleteVideo />
								</div>
							</div>
						</div>

					</div>

				</div>
				{/* /*****************************************$ */}

				<div className="bloc_2_video_2">
					{/* /bloc video 3 */}
					<div className="list_videos" id="dummy">

						<div>
							<div className="video_user1">
								<div className="status_durée">
									<div className="status1">
										<p className="status_refusé">Non adaptée</p>
									</div>
									<div className="durée1" >
										<p className="durée">03:56</p>
									</div>
								</div>

								<div className="imagescreen"><img src={img4} alt="" /></div>

								<div className="countery">
									<h3>Extréme Xest Caoest</h3>
									<p className="countery_p">Mauritanie</p>
								</div>
								<div className="infos">
									<p className="A"> 1903 vues</p>
									<p className="B">.</p>
									<p className="C">Il y a 3 mois</p>
									<p className="D"> <img src={pourcentage60} alt="" /></p>
								</div>
								<div className="icons_video">
									<img className="img1" src={modification} alt="" />
									<img className="img2" src={Partager} alt="" />
									<ModalHidevide />
									<ModalDeleteVideo />
									{/* <button onClick={this.removeDummy}><img className="img4"src={Delete} alt=""/> </button>  */}
								</div>
							</div>
						</div>

					</div>


					{/* /bloc video 4*/}
					<div className="list_videos" id="dummy">

						<div>
							<div className="video_user1">
								<div className="status_durée">
									<div className="status1">
										<p className="status_Brouillon">Brouillon</p>
									</div>
									<div className="durée1" >
										<p className="durée">03:56</p>
									</div>
								</div>

								<div className="imagescreen"><img src={vinise} alt="" /></div>

								<div className="countery">
									<h3>Souvenir de Venise</h3>
									<p className="countery_p">Italie</p>
								</div>
								<div className="infos">
									<p className="A"> 0 vues</p>
									<p className="B">.</p>
									<p className="C">Il y a 1 mois</p>
									<p className="D"> <img src={pourcentage60} alt="" /></p>
								</div>

								<div className="icons_video">
									<img className="img1" src={modification} alt="" />
									<img className="img2" src={Partager} alt="" />
									<ModalHidevide />
									<ModalDeleteVideo />
								</div>
							</div>
						</div>

					</div>
				</div>




				{/* *************************************$$ */}
				<div className="bloc_2_video_3">
					{/* /bloc video 3 */}
					<div className="list_videos" id="dummy">

						<div>
							<div className="video_user1">
								<div className="status_durée">
									<div className="status1">
										<p className="status_Masquée">Masquée</p>
									</div>
									<div className="durée1" >
										<p className="durée">03:56</p>
									</div>
								</div>

								<div className="imagescreen"><img src={img2} alt="" /></div>

								<div className="countery">
									<h3>Extréme Xest Caoest</h3>
									<p className="countery_p">SHOWREEL</p>
								</div>
								<div className="infos">
									<p className="A"> 1903 vues</p>
									<p className="B">.</p>
									<p className="C">Il y a 3 mois</p>
									<p className="D"> <img src={pourcentage80} alt="" /></p>
								</div>
								<div className="icons_video">
									<img className="img1" src={modification} alt="" />
									<img className="img2" src={Partager} alt="" />
									<ModalHidevide />
									<ModalDeleteVideo />
								</div>
							</div>
						</div>
					</div>


					{/* /bloc video 4*/}
					<div className="list_videos">

						<div>
							<div className="video_user1">
								<div className="upload_video">
									<img src={upload} alt="upload" />
									<p>Ajouter une nouvelle video</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default VideoProfil;