import React, { Component } from 'react'
import axios from 'axios'
import './PostSecurityProfil.css'

import IconProfil from '../../Images-tripitto/Icon/User/normal.png'
import iconIdea from '../../Images-tripitto/Icon/Idea.png'

class PostSecurityProfil extends Component {
  state = {
    profile_picture: '',
    pseudo: '',
    location: '',
    profil_link: '',
    birth_date: '',
    nb_countries_visited: '',
    email: '',
    lastname: '',
    firstname: '',
    type: '',
    position: '',
    inscription_date: '',
    inscription_type: '',
    password: '',
    password_forget: '',
  }

  changeHandler = (e) => {

    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleCheckbox = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/profil/insert_profil', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

  }

  render() {
    const { profil_link, lastname, firstname, email, identity, password, password_forget, type, position, inscription_date, inscription_type, profile_picture, nb_countries_visited, birth_date, location, pseudo } = this.state
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
              <li><a href="lienprofil">Profil</a></li>
              <li><a href="lienvideo">Video</a></li>
              <li><a href="lienabonnement">Abonnements</a></li>
              <li><a href="lienabonnes">Abonnés</a></li>
              <li><a href="liennotifications">Notifications</a></li>
              <li><a href="liensecurite">Sécurité</a></li>
              <li><a href="lienmettreaniveau">Mettre à niveau</a></li>
            </ul>
          </div>
          <form onSubmit={this.submitHandler} className="grid-profil-info">
            <div className="bloc-security">
              <h2>Securité</h2>
              <div className="mail-info">
                <p className="title-mail">Adresse email</p>
                <p className="email-user">benedik1888@gmail.com</p>
                <p><a href="profil" className="linkModif">Modifier</a></p>
              </div>
              <div className="bloc-mdp">
                <p>Mettre à jour votre mot de passe</p>
                <div>
                  <label htmlFor="password" className="field-mdp">Mot de passe</label>
                  <input type="text" name="password" value={password} onChange={this.changeHandler} />
                </div>
                <div>
                  <label htmlFor="password_forget" className="field-mdp">Nouveau mot de passe</label>
                  <input type="text" name="password_forget" value={password_forget} onChange={this.changeHandler} />
                </div>
                <div>
                  <label htmlFor="password_forget" className="field-mdp">Confirmer nouveau mot de passe</label>
                  <input type="text" name="password_forget" value={password_forget} onChange={this.changeHandler} />
                </div>
                <div className="btn-save-security">
                  <button>SAUVEGARDER</button>
                </div>
              </div>
            </div>

            {/* <div>
            <h2>Profil</h2>
            <div className='field-profil-picture-bloc'>
              <input type='text' name="profile_picture" value={profile_picture} onChange={this.changeHandler} placeholder='Profil Picture' className='field-profil-picture' />
              <label htmlFor="profile_picture">Modifier l'image</label>
              <p>Format JPG ou JPEG.Une résolution de 600px par 600px est recommandé</p>
            </div>
          </div> */}
            {/* <div className="profil-bloc-2">
            <div>
              <label htmlFor="pseudo">Nom complet ou pseudo</label>
              <input type="text" name="pseudo" value={pseudo} onChange={this.changeHandler} placeholder='Aventurier du Dimanche' className='field-profil-bloc-2' />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input type="text" name="location" value={location} onChange={this.changeHandler} placeholder='Ou lendroit ou nous avons le plus de chance de vous croisé' className='field-profil-bloc-2' />
            </div>
            <div>
              <label htmlFor="profil_link">Lien de votre profil tripitto</label>
              <span><p className="link-tripitto-p">Utilisez votre pseudo pour partagez votre profil plus facilement</p></span>
              <input type="text" name="profil_link" value={profil_link} onChange={this.changeHandler} placeholder='tripitto.com//aventurierdudimanche' className='field-profil-bloc-2' />
            </div>
          </div> */}
            {/* <div className="profil-bloc-3">
            <div className='field-profil-checkbox'>
              <label htmlFor="identity" className="field-title-identity">Identité</label>
              <label htmlFor="lui">Lui</label>
              <input type="checkbox" id="lui" name="is_checked_him" value={identity} checked={this.state.is_checked_him} onChange={this.handleCheckbox}  className="field-profil-checkbox"/>
              <label htmlFor="elle">Elle</label>
              <input type="checkbox" id="elle" name="is_checked_her" value={identity} checked={this.state.is_checked_her} onChange={this.handleCheckbox} />
              <label htmlFor="equipe">Equipe</label>
              <input type="checkbox" id="equipe" name="is_checked_team" value={identity} checked={this.state.is_checked_team} onChange={this.handleCheckbox} />
            </div>
            <div>
              <label htmlFor="birth_date">Date de naissance</label>
              <input type="text" name="birth_date" value={birth_date} onChange={this.changeHandler} placeholder='1997/02/02' className='field-profil-bloc-3' />
            </div>
            <div>
              <label htmlFor="nb_contries_visited">Nombre de pays visités</label>
              <input type="text" name="nb_countries_visited" value={nb_countries_visited} onChange={this.changeHandler} placeholder='Combien ?' className='field-profil-bloc-3' />
            </div>
          </div> */}
            {/* <div>
          <div>
            <label htmlFor="type">Type</label>
            <input type="text" name="type" value={type} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="position">Position</label>
            <input type="text" name="position" value={position} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="inscription_date">Date d'inscription</label>
            <input type="text" name="inscription_date" value={inscription_date} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="inscription_type">Type d'inscription</label>
            <input type="text" name="inscription_type" value={inscription_type} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} onChange={this.changeHandler} />
          </div>

          <div>
            <label htmlFor="lastname">lastname</label>
            <input type="text" name="lastname" value={lastname} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="firstname">Firstname</label>
            <input type="text" name="firstname" value={firstname} onChange={this.changeHandler} />
          </div>
         
          <button type="submit">Submit</button>
         </div>  */}


          </form>
        </div>
        <div className="bloc-cookies">
          <h2>Cookies</h2>
          <p>J'accepte l'utlisation de cookies non essentiels.</p>
          <div className="cookiespolicy">
            <p><img src={iconIdea} alt="icon conseil" /></p>
           <a href="linkcookiestripitto" className="linkcookies">Politiques de cookies tripitto</a>
           <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
          </div>
          <div className="off-account">
            <button> DESACTIVER MON COMPTE TEMPORAIREMENT</button>
          </div>
        </div>
      </div>
    )
  }

}
export default PostSecurityProfil
