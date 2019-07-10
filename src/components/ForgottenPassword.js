import React, { Component } from 'react'



// MOT DE PASSE OUBLIE

class ForgottenPassword extends Component {
    
    render () {

        const { isOpen2, onClose2 } = this.props;
        return (
            <>
            <div className={isOpen2 ? 'modalPasseword--is-open' : 'modalPasseword'}>
                    <div className="containerPassword">
                        <div>
                            <h5 className="ConnexionModalPassword">Mot de passe oublié</h5>
                        </div>
                        <div className="divButtonModalPassword">
                            <button onClick={onClose2}>X</button>
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
                            <button onClick={onClose2} className="buttonPassword2">ANNULER</button>
                        </div>
                    </div>
            </div>
            </>
        )
    }
}

export default ForgottenPassword