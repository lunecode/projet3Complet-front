import React, { Component } from 'react'

class ModalLogin extends Component {
    render () {
        const { isOpen3, onClose3 } = this.props;
        return (
            <>
            <div className={isOpen3 ? 'modalLogin--is-open' : 'modalLogin'}>
                    <div className="containerLogin">
                        <div>
                            <h5 className="ConnexionModalLogin">Inscription</h5>
                        </div>
                        <div className="divButtonModalLogin">
                            <button onClick={onClose3}>X</button>
                        </div>
                    </div>
                    <div className="containerLogin2">
                        <div className="divInputModalLogin">
                            <input className="LoginInput" type="text"  placeholder="Prénom"></input>
                        </div>
                        <div className="divInputModalLogin">
                            <input className="LoginInput" type="text"  placeholder="Nom"></input>
                        </div>
                        <div className="divInputModalLogin">
                            <input className="LoginInput" type="email"  placeholder="Adresse email"></input>
                        </div>
                        <div className="divInputModalLogin">
                            <input className="LoginInput" type="password"  placeholder="********"></input>
                        </div>
                        <div>
                        <p className="LoginChecbox"><input type="checkbox" ></input>Je souhaite recevoir la newletter de Tripitto</p>
                        </div>
                        <div>
                            <button className="buttonLogin1">S'inscrire</button>
                        </div>
                        <div>
                            <p className="pOuLogin">ou</p>
                        </div>
                        <div>
                            <p className="pGoogleButton"><span>G</span><button className="buttonLogin2">S'inscrire avec Google</button></p> 
                        </div>
                        <div className="CgvLogin">
                            <p>En créant un compte j'accepte les Conditions Générales d'utilisation de Tripitto</p>
                        </div>
                        <div>
                            <p className="LoginToTheSite">Vous avez déjà un compte ? <span>Se connecter</span></p>
                        </div>

                    </div>

            </div>
            </>
        )
    }
}

export default ModalLogin