import React from 'react'

import './PostNotification.scss';
import iconIdea from '../../Images-tripitto/Icon/Idea.png'
import iconFrance from '../../Images-tripitto/Icons/Drapeau-FR.png';
import iconEN from '../../Images-tripitto/Icons/Drapeau-EN.png';
import { BrowserRouter as NavLink } from 'react-router-dom'


const PostNotifications = (props) => {
    return (
        <div className="bloc-page-profil">
            <div className="membres-profil">
                <img src="https://i.ytimg.com/vi/BfCwN4iy6T8/maxresdefault.jpg" alt="pictures profil" />
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
                <form className="notification-block">
                    <div>
                        <h2>Notification</h2>
                        <div className="bloc-langage-pref">
                            <p className="title-language-pref">Language de préférence pour les notifications par emails</p>
                            <div className='field-language'>
                                <input type='radio' name='preference_language' value={props.language_preference_FR} onChange={props.handleRadio} />
                                <img src={iconFrance} alt='icon drapeau france' />
                                <input type='radio' name='preference_language' value={props.language_preference_EN} onChange={props.handleRadio} />
                                <img src={iconEN} alt='icon drapeau france' />
                            </div>
                        </div>
                        <div className="bloc-notifications">
                            <p>Décider quand vous souhaitez recevoir nos communications</p>
                            <h4>Activité sur le site</h4>
                            <div className="bloc-notifications-item">
                                <h3>Ma nouvelle vidéo est en ligne</h3>
                                <label class="switch" htmlFor="notification_online_video" >
                                    <input type="checkbox" name="notification_online_video" value={props.notification_online_video} checked={props.notification_online_video} onChange={props.handleCheckbox} />
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="bloc-notifications-item">
                                <h3>Quelqu'un a commenté une de mes vidéos</h3>
                                <label htmlFor="notification_comment" className="switch">
                                    <input type="checkbox" name="notification_comment" value={props.notification_comment} onChange={props.handleCheckbox} />
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="bloc-notifications-item">
                                <h3>Quelqu'un m'a mentionné dans un commentaire ou une vidéo</h3>
                                <label htmlFor="notification_mention" className="switch">
                                    <input type="checkbox" name="notification_mention" value={props.notification_mention} onChange={props.handleCheckbox} />
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="bloc-notifications-item">
                                <h3>J'ai un nouvel abonné</h3>
                                <label htmlFor="notification_follower" className="switch">
                                    <input type="checkbox" name="notification_follower" value={props.notification_follower} onChange={props.handleCheckbox} />
                                    <span class="slider"></span>
                                </label>
                            </div>
                            <div className="bloc-notifications-item">
                                <h3>Nouvelle vidéos postée par un de mes abonnés</h3>
                                <label htmlFor="notification_video_following" className="switch">
                                    <input type="checkbox" name="notification_video_following" value={props.notification_video_following} onChange={props.handleCheckbox} />
                                    <span class="slider"></span>
                                </label>
                            </div>

                            <div className="notification_team">
                                <h4>De la part de l'équipe tripitto </h4>
                                <div>
                                        <h3>Newsletter mensuelle</h3>
                                        <div className="text-newsletter">
                                        <img src={iconIdea} alt="icon idée" />
                                        <p>Vidéos à couper le souffle, idées d'aventure,bons plans de voyageurs,astuce de vidéaste ...</p>
                                    </div>
                                    <label htmlFor="notification_video_following" className="switch">
                                        <input type="checkbox" name="notification_video_following" value={props.notification_video_following} onChange={props.handleCheckbox} />
                                        <span class="slider"></span>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="btn-notification">
                                < button> SAUVEGARDER</ button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}


export default PostNotifications
