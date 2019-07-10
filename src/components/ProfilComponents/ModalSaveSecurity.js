import React from 'react'
import './ModalSaveSecurity.scss'
import axios from 'axios'


class ModalSaveSecurity extends React.Component {
    state = {
        isModalSaveSecurity: false,
    }

    openModalSecuritySave = () => {
        this.setState({ isModalSaveSecurity: true })
        console.log(this.state.isModalSaveSecurity);
        return

    }

    closeModalSecuritySave = () => {
        this.setState({ isModalSaveSecurity: false })
        // console.log(this.state.isModalOpen);
    }


    render() {


        return (

            <>
                <div>
                    <div>
                        <div className="btn-security-save2">
                            <button className="btn-save-modif" onClick={this.openModalSecuritySave}> Sauvegarder</button>
                        </div>
                        <div className="container-security-save">
                            <div className={this.state.isModalSaveSecurity ? 'display-block-save' : 'display-none-save'}>
                                
                    <div className="modal-security-save-bloc-title">
                                    <div>
                                        <h5 className="security-modal-save">Sauvegarde</h5>
                                    </div>

                                </div>
                                <div className="container-open-security-save">

                                    <div className="text-modal-security-save">
                                             <p>Votre mot de passe a bien été mis à jour</p> 
                                    </div>
          
                                </div>


                                <div className="container-open-security-save">
                                    
                                        <button onClick={this.
    closeModalSecuritySave} className="btn-modal-close-security-save">Retour</button>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ModalSaveSecurity
