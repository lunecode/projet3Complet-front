import React from 'react'
import './PostSecurityProfil.css'
import { NavLink } from 'react-router-dom'
import SecurityUpdateModal from './SecurityUpdateModal';
import DeleteCompteSecurityModal from'./DeleteCompteSecurityModal'
import ModalSaveSecurity from './ModalSaveSecurity';
class PostSecurityProfil extends React.Component {
    state={
      isModalSecurityOpen:false,
    }
  
openModalSecurity =() => {
  this.setState( { isModalSecurityOpen: true} )

  }

  closeModalSecurity = () => {
      this.setState({ isModalSecurityOpen: false })
      // console.log(this.state.isModalOpen);
  }

  componentDidMount() {
      this.openModalSecurity()
      this.closeModalSecurity()
  }

  render() {

    const { isModalSecurityOpen} = this.state
    return (
      <div className="bloc-page-profil">
        <div className="membres-profil">
          <img src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" alt="pictures profil" />
          <div className="membres-profil-detail">
            <h4>Julien Mbappé</h4>
            <p>Membre depuis le 20/02/2019</p>
          </div>
        </div>
        <div className='position-bloc'>
          <div className='profil-menu'>
          <ul>
            <li>
              <NavLink
                className="nav"
                to="/Profil" exact>Profil</NavLink>
            </li>
            <li>
              <NavLink
                to="/Video" exact >Video</NavLink>
            </li>
            <li>
              <NavLink
                to="/Abonnements" exact >Abonnements</NavLink>
            </li>
            <li>
              <NavLink
                to="/Abonnés" exact >Abonnés</NavLink>
               </li>
               <li>
              <NavLink
                to="/Notifications" exact >Notifications</NavLink>
            </li>
            <li>
              <NavLink
                to="/Security" exact >Sécurité</NavLink>
            </li>
            <li>
              <NavLink
                to="/Mettre_à_niveau" exact >Mettre à niveau</NavLink>
            </li>
          </ul>
          </div>
          <form className="grid-security-info">
            <div className="bloc-security">
              <h2>Securité</h2>
              <div className="mail-info">
                <p className="title-mail">Adresse email</p>
                <p className="email-user">benedik1888@gmail.com</p>
                <button type="button" onClick={this.openModalSecurity} className="btn-security-modify">Modifier</button>
              </div>
              <div className="container-security-modal">
              <SecurityUpdateModal isOpen={isModalSecurityOpen} onClose={this.closeModalSecurity} />
              </div>
              <div className="bloc-mdp">
                <p>Mettre à jour votre mot de passe</p>
                <div className="mdp-form">
                  <label htmlFor="password" className="field-mdp">Mot de passe actuel</label>

                  <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
                </div>
                <div className="mdp-form">
                  <label htmlFor="password_forget" className="field-mdp">Nouveau mot de passe</label>
                  <input type="password" name="password_forget" value={this.state.password_forget} onChange={this.changeHandler} />
                </div>
                <div className="mdp-form">
                  <label htmlFor="password_forget_check" className="field-mdp">Confirmer nouveau mot de passe</label>
                  <input type="password" name="New_password" value={this.state.New_password} onChange={this.changeHandler} />
                </div>
                <div className="modal-save-security">
                  <ModalSaveSecurity />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="bloc-cookies">
          <h2>Cookies</h2>
          <p>J'accepte l'utlisation de cookies non essentiels.</p>
          <div className="cookiespolicy">
            <p> </p>
            <a href="linkcookiestripitto" className="linkcookies">Politiques de cookies tripitto</a>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
          <div className="off-account">
          <DeleteCompteSecurityModal />
            {/* <button onClick={this.openModalSecurity}> DESACTIVER MON COMPTE TEMPORAIREMENT</button> */}
          </div>
      
          <p className="account-finally">Pour supprimer définitivement  votre compte et les données associés, <u>contactez-nous</u></p>
        </div>
      </div>
    )
  }

}
export default PostSecurityProfil
