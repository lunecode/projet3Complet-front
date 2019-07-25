import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios'
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
		videoByProfil: []
	}




	getVideoById = async () => {
		// e.preventDefault()
		let pathApi = process.env.REACT_APP_PATH_API_DEV + '/general_video/get_video_id_profil'
		if (process.env.NODE_ENV === 'production') {
			pathApi = process.env.REACT_APP_PATH_API_PROD + '/general_video/get_video_id_profil'
		}
		const token = localStorage.getItem('token')
		const idProfilDecod = jwt.decode(token)
		const id = idProfilDecod.id_profil
		const res = await axios.get(`${pathApi}/${id}`)
		this.setState({ videoByProfil: res.data })
		console.log(this.state.videoByProfil)
		// console.log(res.data)
	}



	componentDidMount = () => {
		this.getVideoById()
	}

	render() {
		return (
			<>
			<div>
    <section>
        <div className="bloc_2_video_2">
            {this.state.videoByProfil.map(item => (
                <div key={item.id_general_video}>
                    <img src={item.cover_picture} alt={item.video_title}></img>
                    <p>{item.video_title}</p>
                </div> 
            ))}
        </div>
    </section>



		
		</div>
			</>
		)
	}
}

export default VideoProfil;