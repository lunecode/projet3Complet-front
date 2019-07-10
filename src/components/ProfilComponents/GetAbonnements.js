import React, { Component } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import './GetAbonnements.scss'
import iconSearch from '../../Images-tripitto/Icon/TRAILING ICON.png'
import iconPlus from '../../Images-tripitto/Icon/Plus.png'


<<<<<<< HEAD
=======
// import iconArrow from '../../Images-tripitto/iconAbonnements/icon-arrow.png'

>>>>>>> 9ae180024c27f773543328cc26578b1deb13bc8a
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
                                {this.state.Following.map(item =>(

                                    <div className="bloc-notifications-item">
                                        <div>
                                            <img src={item.following_picture} alt='profilpicture 2' />
                                        </div>
                                        <div className="following-items">
                                            <h3>{item.following_user}</h3>

                                            <div>
                                                <p>{item.following_nb_video} vidéos</p>
                                                <p>{item.following}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button>Abonné</button>
                                        </div>
                                    </div>
                                    ))}
                                 
                                    <div className='bloc-plus'>
<<<<<<< HEAD
                                <button><img src={iconPlus} alt='icon plus' /></button>
                                  </div>     
=======
                                        <button><img src={iconPlus} alt='icon' /></button>
                                    </div>
>>>>>>> 9ae180024c27f773543328cc26578b1deb13bc8a
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
