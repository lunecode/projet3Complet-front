import React from 'react'
import './SecurityUpdateModal.scss'
import axios from 'axios'


class SecurityUpdateModal extends React.Component {
    state = {
        isModalSecurityOpen: false,
    }

    openModalSecurity = () => {
        this.setState({ isModalSecurityOpen: true })

    }

    closeModalSecurity = () => {
        this.setState({ isModalSecurityOpen: false })

    }

    componentDidMount() {
        this.openModalSecurity()
        this.closeModalSecurity()

    }
    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/profil/update_profil/:id', {
            email: e.target.email.value,
            password: e.target.password.value
        })
            .then(res => {

                localStorage.setItem('token', res.headers["x-access-token"])

            })
    }

    render() {
        const { isOpen, onClose } = this.props;

        return (

            <>
                <div className={isOpen ? 'display-block' : 'display-none'}>
                    <div className="modal-security-bloc-title">
                        <div>
                            <h5 className="security-modal">Modifier adresse email</h5>
                        </div>

                    </div>
                    <div className="containerIs-open-security">

                        <div className="label-modal-security">
                            <label className="label-modal-email" htmlFor="email">Nouvelle adresse email</label>
                            <input type="email" name="email" placeholder="amoureuxduvoyage@video.com" value={this.state.email}></input>
                        </div>
                        <div className="label-modal-security">
                            <label className="label-modal-new-email" htmlFor="email">Confirmez nouvelle adresse email</label>
                            <input type="email" name="email" placeholder="amoureuxduvoyage@video.com" value={this.state.email}></input>
                        </div>
                        <div className="label-modal-security" >
                            <label htmlFor="password" className="label-modal-password">Mot de passe Tripitto</label>
                            <input type="password" name="password" placeholder="xxxxxxxxxx" value={this.state.password}></input>
                        </div>
                    </div>


                    <div className="container-open-security2">
                        <div>
                            <button onClick={onClose} className="btn-modal-close-security">Annuler</button>
                            <button className="btn-modal-confirm-security" onClick={onClose} onSubmit={this.handleSubmit}>Confirmer</button>
                        </div>

                    </div>
                </div>
                <div>


                </div>

            </>
        )
    }
}

export default SecurityUpdateModal
