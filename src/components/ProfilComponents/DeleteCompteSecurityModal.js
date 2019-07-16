import React from 'react'
import './DeleteCompteSecurityModal.scss'


class DeleteCompteSecurityModal extends React.Component {
    state = {
        isModalOffCompte: false,
    }

    openModalSecurityCompteOff = () => {
        this.setState({ isModalOffCompte: true })
        console.log(this.state.isModalOffCompte);
        return

    }

    closeModalSecurityCompteOff = () => {
        this.setState({ isModalOffCompte: false })
        // console.log(this.state.isModalOpen);
    }

 
    



    // handleSubmit = (e) => {
    //     e.preventDefault()

    //     axios.post('http://localhost:3000/profil/update_profil/:id', {
    //         email: e.target.email.value,
    //         password: e.target.password.value
    //     })
    //         .then(res => {
    //             console.log(res)
    //             localStorage.setItem('token', res.headers["x-access-token"])
    //             console.log('token', localStorage.getItem('token'))
    //         })
    // }

    render() {


        return (

            <>
                <div>
                    <div>
                        <div className="btn-security-account-off">
                            <button className="btn-desactiver-compte" onClick={this.openModalSecurityCompteOff}> DESACTIVER MON COMPTE TEMPORAIREMENT</button>
                        </div>
                        <div className="container-security-account-off">
                            <div className={this.state.isModalOffCompte ? 'display-block-off-account' : 'display-none-account-off'}>
                                
                    <div className="modal-security-off-bloc-title">
                                    <div>
                                        <h5 className="security-modal-account-off">Désactiver mon compte temporairement</h5>
                                    </div>

                                </div>
                                <div className="container-open-security-account-off">

                                    <div className="text-modal-security-off">
                                             <p>Votre profil Tripitto et toutes vos vidéos seront masqués</p> 
                                    </div>
                                    <div className="text-modal-security-off">
                                        <p>Vous pourrez à tout moment revenir réactivez votre compte pour rendre publique votre profil et votre vidéos.</p>
                                    </div>

                                </div>


                                <div className="container-open-security-account-off">
                                    
                                     
                                        <button className="btn-modal-confirm-security" onClick={this.closeModalSecurityCompteOff} onSubmit={this.handleSubmit}>DESACTIVEZ MON COMPTE TEMPORAIREMENT</button>
                                        <button onClick={this.closeModalSecurityCompteOff} className="btn-modal-close-security-account-off">Annuler</button>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DeleteCompteSecurityModal
