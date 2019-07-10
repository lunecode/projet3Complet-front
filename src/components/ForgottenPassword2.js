import React, { Component } from 'react'

class ForgottenPassword2 extends Component {
    
    render () {

        const { isOpen5, onClose5 } = this.props;
        return (
            <>
            <div className={isOpen5 ? 'modalPasseword--is-open' : 'modalPasseword'}>
                    <div className="containerPassword">
                        <div>
                            <h5 className="ConnexionModalPassword">Mot de passe oublié</h5>
                        </div>
                        <div className="divButtonModalPassword">
                            <button onClick={onClose5}>X</button>
                        </div>
                    </div>
                    <div className="containerPassword2">
                        <div className="divInputModalPasseword">
                            <p>Saisissez votre adresse email :</p>
                        </div>
                        <div>
                            <input type="text" name="mail" id="mail" placeholder="Email"></input>
                        </div>
                        <div>
                            <button className="buttonPassword">ENVOYER</button>
                        </div>
                        <div>
                            <button onClick={onClose5} className="buttonPassword2">ANNULER</button>
                        </div>
                    </div>
            </div>
            </>
        )
    }
}

export default ForgottenPassword2