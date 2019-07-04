import React, { Component } from 'react'

import Lock from "../Images-tripitto/Icon/Lock.png"
import ButtonFull from "../Images-tripitto/Buttons/white/Full.png"
import ButtonGoogle from "../Images-tripitto/Buttons/Colored/Google.png"

import ForgottenPassword from './ForgottenPassword'
import './ForgottenPassword.scss'

class Modal extends Component {
    state = {
        ModalForgottenPassword: false,
    }

    openModalForgottenPassword =() => {
        this.setState( { ModalForgottenPassword: true} )
        this.props.onClose()
    console.log(this.state.ModalForgottenPassword);
    }
    
    closeModalForgottenPassword = () => {
        this.setState( { ModalForgottenPassword: false } )
        console.log(this.state.ModalForgottenPassword);
    }


    componentDidMount() {
        this.openModalForgottenPassword()
        this.closeModalForgottenPassword()
    }

    render () { 
        const { isOpen, onClose } = this.props;
        const { ModalForgottenPassword } = this.state
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
                    <div className="containerIs-open2">
                        <div className="divInputModal">
                                <input type="text" name="mail" id="mail" placeholder="Adresse email"></input>
                        </div>
                        <div className="divInputModal" >
                                <input type="text" name="mail" id="mail" placeholder="Mot de passe"></input>
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
                            <img src={ButtonFull} alt="button connexion"></img>
                        </div>
                        <div>
                            <p>ou</p>
                        </div>
                        <div>
                            <img src={ButtonGoogle} alt="button google connexion"></img>
                        </div>
                        <div className="register">
                            <p>Vous n'avez pas de compte ? <span>s'inscrire</span></p>
                        </div>
                    </div>
                </div>
                <div>
                <ForgottenPassword isOpen2={ModalForgottenPassword} onClose2={this.closeModalForgottenPassword} />
                </div>
            </>
        )
    }
}

export default Modal