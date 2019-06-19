import React, { Component } from 'react'
import axios from 'axios'
import './StyleProfilInfo.css'


  const PostProfilInfo =(props)=>{
    console.log(props);
    
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
          {/* <form onSubmit={this.submitHandler} className="grid-profil-info"> */}
           <form className="grid-profil-info"> 
            <div>
              <h2>Profil</h2>
              <div className='field-profil-picture-bloc'>
                <input type='text' name="profile_picture" 
                 value={props.profile_picture} 
                 onChange={props.changeHandler} 
                 placeholder='Profil Picture' 
                 className='field-profil-picture' />

                <label htmlFor="profile_picture">Modifier l'image</label>
                <p>Format JPG ou JPEG.Une résolution de 600px par 600px est recommandé</p>
              </div>
            </div>
            <div className="profil-bloc-2">
              <div>
                <label htmlFor="pseudo">Nom complet ou pseudo</label>
                <input type="text" name="pseudo" value={props.pseudo} onChange={props.changeHandler} placeholder='Aventurier du Dimanche' className='field-profil-bloc-2' />
              </div>
              <div>
                <label htmlFor="location">Location</label>
                <input type="text" name="location" value={props.location} onChange={props.changeHandler} placeholder='Ou lendroit ou nous avons le plus de chance de vous croisé' className='field-profil-bloc-2' />
              </div>
              <div>
                <label htmlFor="profil_link">Lien de votre profil tripitto</label>
                <span><p className="link-tripitto-p">Utilisez votre pseudo pour partagez votre profil plus facilement</p></span>
                <input type="text" name="profil_link" value={props.profil_link} onChange={props.changeHandler} placeholder='tripitto.com//aventurierdudimanche' className='field-profil-bloc-2' />
              </div>
            </div>
            <div className="profil-bloc-3">
              <div className='field-profil-checkbox'>
                <label htmlFor="identity" className="field-title-identity">Identité</label>
                <div className="identity-field">
                  <label htmlFor="lui">Lui</label>
                  <input type="checkbox" id="lui" name="is_checked_him" value={props.identity} checked={props.is_checked_him} onChange={props.handleCheckbox} className="field-profil-checkbox" />
                  <label htmlFor="elle">Elle</label>
                  <input type="checkbox" id="elle" name="is_checked_her" value={props.identity} checked={props.is_checked_her} onChange={props.handleCheckbox} />
                  <label htmlFor="equipe">Equipe</label>
                  <input type="checkbox" id="equipe" name="is_checked_team" value={props.identity} checked={props.is_checked_team} onChange={props.handleCheckbox} />
                </div>
              </div>
              <div>
                <label htmlFor="birth_date">Date de naissance</label>
                <input type="text" name="birth_date" value={props.birth_date} onChange={props.changeHandler} placeholder='1997/02/02' className='field-profil-bloc-3' />
              </div>
              <div>
                <label htmlFor="nb_contries_visited">Nombre de pays visités</label>
                <input type="text" name="nb_countries_visited" value={props.nb_countries_visited} onChange={props.changeHandler} placeholder='Combien ?' className='field-profil-bloc-3' />
              </div>
            </div>
          
          </form>



        </div>
       
        </div>
     
        )
      }
    
    
    export default PostProfilInfo
