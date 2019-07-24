import React, { Component } from 'react'
import axios from 'axios';

import ForgottenPassword2 from './ForgottenPassword2'
import './ForgottenPassword.scss'
import Lock from "../../Images-tripitto/Icon/Lock.png"
import ButtonFull from "../../Images-tripitto/Buttons/white/Full.png"
import ButtonGoogle from "../../Images-tripitto/Buttons/Colored/Google.png"

// AUTHENTIFICATION

class Login2 extends Component {
  state = {
    ModalForgottenPassword2: false,
  }

  onSubmitLogin = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    if (email == '' || password == '') {
      alert('Merci de renseigner les champs')
    } else {
      axios
        .post('http://localhost:3000/login/login', {
          email: e.target.email.value,
          password: e.target.password.value
        })
        .then(res => {
          localStorage.setItem('token', res.headers["x-access-token"])
          const token = localStorage.getItem('token')
          if (token == null) {
          } else {
            axios({
              method: 'POST',
              url: 'http://localhost:3000/login/protected',
              headers: {
                'Authorization': `Bearer ${token}`,
              }
            })
              .then(res => {
                if (res.data.message == 'Token OK') {
                  window.location.reload(true)
                } else {
                }
              })
          }
        })
    }
  }



  openModalForgottenPassword2 = () => {
    this.setState({ ModalForgottenPassword2: true })
    this.props.onClose4()
  }

  closeModalForgottenPassword2 = () => {
    this.setState({ ModalForgottenPassword2: false })
  }


  render() {
    const { isOpen4, onClose4 } = this.props;
    const { ModalForgottenPassword2 } = this.state
    return (
      <>
        <div className={isOpen4 ? 'modal--is-open' : 'modal'}>
          <div className="containerIs-open">
            <div>
              <h5 className="ConnexionModal">Connexion</h5>
            </div>
            <div className="divButtonModal">
              <button onClick={onClose4}>X</button>
            </div>
          </div>

          <form onSubmit={this.onSubmitLogin}>
            <div className="containerIs-open2">
              <div className="divInputModal">
                <input type="text" name="email" id="email" placeholder="Adresse email"></input>

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
                <p onClick={this.openModalForgottenPassword2} className="lockModal"><img src={Lock} alt=""></img>Mot de passe oublié</p>
              </div>
            </div>
            <div className="containerIs-open4">
              <div>
                <button className="button_connexion"><img src={ButtonFull} alt="button connexion"></img></button>
              </div>
              <div>
                <p>ou</p>
              </div>
              <div>
                <img src={ButtonGoogle} alt="button google connexion"></img>
              </div>
            </div>
          </form>
        </div>
        <ForgottenPassword2 isOpen5={ModalForgottenPassword2} onClose5={this.closeModalForgottenPassword2} />
      </>
    )
  }
}

export default Login2