import React, { Component } from 'react'

import Lock from "../Images-tripitto/Icon/Lock.png"

class Modal extends Component {

    render () { 
        const { isOpen, onClose } = this.props;
        return (
            <>
                <div className={isOpen ? 'modal modal--is-open' : 'modal'}>
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
                            <p className="checkBoxModal"><input type="checkbox" name="checkMe" id="checkMe" />Se souvenir de moi</p>
                        </div>
                        <div>
                            <p className="lockModal"><img src={Lock} alt=""></img>Mot de passe oublié</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Modal