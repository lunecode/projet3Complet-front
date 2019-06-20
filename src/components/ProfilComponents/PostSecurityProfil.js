import React, { Component } from 'react'
import axios from 'axios'
import './PostSecurityProfil.css'

import IconProfil from '../../Images-tripitto/Icon/User/normal.png'
import iconIdea from '../../Images-tripitto/Icon/Idea.png'
import { BrowserRouter as Router, Route,NavLink } from 'react-router-dom'

const PostSecurityProfil =(props)=>{
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
            to="/Profil" exact>profil</NavLink>
          </li>
          <li>
          <NavLink 
           to="/Video" exact >Video</NavLink>
          </li>
          <li>
          <NavLink 
           to="/Video" exact >Abonnements</NavLink>
          </li>
          <li>
          <NavLink 
         
           to="/Video" exact >Abonnés</NavLink>
          </li>
          <li>
          <NavLink 
           to="/Video" exact >Notifications</NavLink>
          </li>
          <li>
          <NavLink 
           to="/Video" exact >Sécurité</NavLink>
          </li>
          <li>
          <NavLink 
           to="/Video" exact >Mettre à niveau</NavLink>
          </li>
          </ul>
          </div>
          <form className="grid-profil-info">
            <div className="bloc-security">
              <h2>Securité</h2>
              <div className="mail-info">
                <p className="title-mail">Adresse email</p>
                <p className="email-user">benedik1888@gmail.com</p>
                <p><a href="profil" className="linkModif">Modifier</a></p>
              </div>
              <div className="bloc-mdp">
                <p>Mettre à jour votre mot de passe</p>
                <div className="mdp-form">
                  <label htmlFor="password" className="field-mdp">Mot de passe actuel</label>
                  <input type="text" name="password" value={props.password} onChange={props.changeHandler} />
                </div>
                <div  className="mdp-form">
                  <label htmlFor="password_forget" className="field-mdp">Nouveau mot de passe</label>
                  <input type="text" name="password_forget" value={props.password_forget} onChange={props.changeHandler} />
                </div>
                <div  className="mdp-form">
                  <label htmlFor="password_forget_check" className="field-mdp">Confirmer nouveau mot de passe</label>
                  <input type="text" name="New_password" value={props.New_password} onChange={props.changeHandler} />
                </div>
                <div className="btn-save-security">
                  <button>SAUVEGARDER</button>
                </div>
              </div>
            </div>
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
          <p className="account-finally">Pour supprimer définitivement  votre compte et les données associés, <u>contactez-nous</u></p>
        </div>
      </div>
    )
  }


export default PostSecurityProfil
