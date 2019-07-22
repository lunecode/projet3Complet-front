import React, { Component } from 'react'
import axios from 'axios'
import Modal2 from './Modal2';
import './Modal.scss'



// REGISTRATION OK

class ModalLogin extends Component {

    state = {
        isModalOpe4: false,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        // ForgottenPassword: false,
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:3000/registration/registration", this.state )
            .then(resp => {
                if (resp.data.error === "User already exists") {
                    console.log(resp.data.error)
                } else {
                    console.log('inscription réussi')
                }
            })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }

    openModal4 = () => {
        this.setState({ isModalOpe4: true })
        this.props.onClose3()
    }

    closeModal4 = () => {
        this.setState({ isModalOpe4: false })
    }

    componentDidMount() {
        this.openModal4()
        this.closeModal4()
    }

    render() {
        const { isModalOpe4 } = this.state
        const { isOpen3, onClose3 } = this.props;

        const { firstname, lastname, email, password } = this.state
        return (
            <>
            <form onSubmit={this.onSubmit}>
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
                            <input className="LoginInput" type="text" name="firstname"
                            value={firstname}
                            onChange={this.changeHandler} placeholder="Prénom"></input>
                        </div>
                        <div className="divInputModalLogin">
                            <input className="LoginInput" type="text" name="lastname"
                            value={lastname}
                            onChange={this.changeHandler} placeholder="Nom"></input>
                        </div>
                        <div className="divInputModalLogin">
                            <input className="LoginInput" type="email" name="email"
                            value={email}
                            onChange={this.changeHandler} placeholder="Adresse email"></input>
                        </div>
                        <div className="divInputModalLogin">
                            <input className="LoginInput" type="password" name="password" 
                            value={password}
                            onChange={this.changeHandler} placeholder="********"></input>
                        </div>
                        <div>
                            <p className="LoginChecbox"><input type="checkbox" ></input>Je souhaite recevoir la newletter de Tripitto</p>
                        </div>
                        <div>
                            <button className="buttonLogin1" onClick={this.onChange} >S'inscrire</button>
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
                            <p className="LoginToTheSite">Vous avez déjà un compte ? <span onClick={this.openModal4}>Se connecter</span></p>
                        </div>

                    </div>

                </div>
                <Modal2 isOpen4={isModalOpe4} onClose4={this.closeModal4} />
                </form>
            </>
        )
    }
}

export default ModalLogin