import React, { Component } from 'react'
import axios from 'axios';

import Lock from "../../Images-tripitto/Icon/Lock.png"
import ButtonFull from "../../Images-tripitto/Buttons/white/Full.png"
import ButtonGoogle from "../../Images-tripitto/Buttons/Colored/Google.png"

import ForgottenPassword from './ForgottenPassword'
import './ForgottenPassword.scss'
import ModalLogin from './ModalLogin'
import './ModalLogin.scss'



// AUTHENTIFICATION



class Modal extends Component {
	state = {
		ModalForgottenPassword: false,
		ModalCreateLogin: false,
	}

	onSubmitLogin = e => {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value
		if (email == '' || password == '' ) {
			alert ('Merci de renseigner les champs')
		} else {
			axios
				.post('http://localhost:3000/login/login', {
					email: e.target.email.value,
					password: e.target.password.value
				})
				.then(res => {
					localStorage.setItem('token', res.headers["x-access-token"])
					// console.log('token', localStorage.getItem('token'))
				})
		}
	}


	protectedRoute = () => {
		const token = localStorage.getItem('token')
		axios({
			method: 'POST',
			url: 'http://localhost:3000/login/protected',
			headers: {
				'Authorization': `Bearer ${token}`,
			}
		})
			.then(res => {
			// Rajouter les redirections si le token est validé
			console.log(res)
			})
	}



	openModalForgottenPassword = () => {
		this.setState({ ModalForgottenPassword: true })
		this.props.onClose()
		// if (this.state.ModalForgottenPassword === true) {
		//     return this.state.isModalOpen === false
		// }console.log(this.state.isModalOpen);
	}

	closeModalForgottenPassword = () => {
		this.setState({ ModalForgottenPassword: false })
	}


	openModalLogin = () => {
		this.setState({ ModalCreateLogin: true })
		this.props.onClose()
	}

	closeModalLogin = () => {
		this.setState({ ModalCreateLogin: false })
	}


	componentDidMount() {
		this.openModalForgottenPassword()
		this.closeModalForgottenPassword()
		this.openModalLogin()
		this.closeModalLogin()
	}

	render() {
		// console.log(this.props)
		const { isOpen, onClose } = this.props;
		const { ModalForgottenPassword, ModalCreateLogin } = this.state



		return (
			<>
					<div className={isOpen ? 'modal--is-open' : 'modal'}>
						<div className="containerIs-open">
							<div>
								<h5 className="ConnexionModal">Connexion</h5>
							</div>
							<div className="divButtonModal">
								<button onClick={onClose}>X</button>
							</div>
						</div>

				<form onSubmit={this.onSubmitLogin}>
						<div className="containerIs-open2">
							<div className="divInputModal">
								<input type="email" name="email" id="email" placeholder="Adresse email"></input>

							</div>
							<div className="divInputModal" >
								<input type="password" name="password" id="password" placeholder="Mot de passe"></input>
							</div>
						</div>
						<div className="containerIs-open3">
							<div>
								<p><input className="checkBoxModal" type="checkbox" name="checkMe" id="checkMe" />Se souvenir de moi</p>
							</div>
							<div>
								<p onClick={this.openModalForgottenPassword} className="lockModal"><img src={Lock} alt=""></img>Mot de passe oublié</p>
							</div>
						</div>
						<div className="containerIs-open4">
							<div>





							{/* <button className="button_connexion"><img src={ButtonFull} onClick={onClose} alt="button connexion"></img></button> */}


								<button className="button_connexion" onClick={() => this.protectedRoute()}><img src={ButtonFull} onClick={onClose} alt="button connexion"></img></button>


							</div>





							<div>
								<p>ou</p>
							</div>
							<div>
								<img src={ButtonGoogle} alt="button google connexion"></img>
							</div>
							<div className="register">
								<p>Vous n'avez pas de compte ? <span onClick={this.openModalLogin}>S'inscrire</span></p>
							</div>
						</div>
				</form>
					</div>
				<div>
					<ForgottenPassword isOpen2={ModalForgottenPassword} onClose2={this.closeModalForgottenPassword} />
					<ModalLogin isOpen3={ModalCreateLogin} onClose3={this.closeModalLogin} />
				</div>
			</>
		)
	}
}

export default Modal