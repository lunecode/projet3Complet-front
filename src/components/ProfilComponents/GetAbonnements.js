import React, { Component } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import './GetAbonnements.scss'

// image
import image1 from '../../Images-tripitto/iconAbonnements/img-following-1.jpg'
import image2 from '../../Images-tripitto/iconAbonnements/img-following-2.jpg'
import image3 from '../../Images-tripitto/iconAbonnements/img-following-3.jpg'
import image4 from '../../Images-tripitto/iconAbonnements/img-following-4.jpg'
import image5 from '../../Images-tripitto/iconAbonnements/img-following-5.jpg'
import iconSearch from '../../Images-tripitto/Icon/TRAILING ICON.png'
import iconPlus from '../../Images-tripitto/Icon/Plus.png'


// import iconArrow from '../../Images-tripitto/iconAbonnements/icon-arrow.png'

class GetAbonnements extends Component {
    state = {
        Following: [],
    };

    getFollowing = async () => {
        const res = await axios.get('http://localhost:3000/following/get_following')
        this.setState({ Following: res.data })
        console.log(this.state.Following)
    }
    componentDidMount() {
        this.getFollowing()
    }

    render() {
        return (
            <>
                {/* {this.state.Following.map(item => (
          <li key={item.id_following}>
          {item.following_user}
          {item.firstname}
          {item.pseudo}
      
        </li>
        ))} */}
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
                        <form className="following-block">
                            <div>
                                <h2>Abonnements (35)</h2>
                                <div className="search-following">
                                    <p className='tri-following'>Trier par
                                    <ul class='filter-menu'>
                                            <li>Date d'abonnement</li>
                                            <li>Nom</li>
                                        </ul>
                                    </p>
                                    <div className='search-bar-following'>
                                        <button type='submit'><img src={iconSearch} alt='icon search' /></button>
                                        <input type="text" name="" value="" placeholder="Retrouver un abonnement" />

                                    </div>
                                </div>
                                <div className="bloc-following">
                                    <div className="bloc-notifications-item">
                                        <div>
                                            <img src={image2} alt='profilpicture 2' />
                                        </div>
                                        <div>
                                            <h3>Ethan Evans</h3>

                                            <div>
                                                <p>6 videos</p>
                                                <p>Vous êtes abonné depuis 25 jours</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button>Abonné</button>
                                        </div>
                                    </div>
                                    <div className="bloc-notifications-item">
                                        <div>
                                            <img src={image1} alt='profilpicture 1' />
                                        </div>
                                        <div>
                                            <h3>Malin Quist</h3>

                                            <div>
                                                <p>6 videos</p>
                                                <p>Vous êtes abonné depuis 25 jours</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button>Abonné</button>
                                        </div>
                                    </div>
                                    <div className="bloc-notifications-item">
                                        <div>
                                            <img src={image3} alt='profilpicture 3' />
                                        </div>
                                        <div>
                                            <h3>Chineze Afemuna</h3>

                                            <div>
                                                <p>6 videos</p>
                                                <p>Vous êtes abonné depuis 25 jours</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button>Abonné</button>
                                        </div>
                                    </div>
                                    <div className="bloc-notifications-item">
                                        <div>
                                            <img src={image4} alt='profilpicture 4' />
                                        </div>
                                        <div>
                                            <h3>Faadhi Al Rahman</h3>

                                            <div>
                                                <p>6 videos</p>
                                                <p>Vous êtes abonné depuis 25 jours</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button>Abonné</button>
                                        </div>
                                    </div>
                                    <div className="bloc-notifications-item">
                                        <div>
                                            <img src={image5} alt='profilpicture 5' />
                                        </div>
                                        <div>
                                            <h3>Sua Hua</h3>

                                            <div>
                                                <p>6 videos</p>
                                                <p>Vous êtes abonné depuis 25 jours</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button>Abonné</button>
                                        </div>
                                    </div>
                                    <div className='bloc-plus'>
                                        <button><img src={iconPlus} alt='icon' /></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </>
        )
    }
}

export default GetAbonnements;
