import React, { Component } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import "./GetFollower.scss"
// image

import iconSearch from '../../Images-tripitto/Icon/TRAILING ICON.png'
import iconPlus from '../../Images-tripitto/Icon/Plus.png'
import iconArrow from '../../Images-tripitto/iconAbonnements/icon-arrow.png'

class GetFollower extends Component {
    state = {
        Follower: [],
    };

    getFollower = async () => {
        const res = await axios.get('http://localhost:3000/follower/get_follower')
        this.setState({ Follower: res.data })
        console.log(this.state.Follower)
    }
    componentDidMount() {
        this.getFollower()
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
                                <h2>Abonnés (129)</h2>
                                <div className="search-following">
                                    <p className='tri-following'>Trier par
                                    <ul class='filter-menu'>
                                            <li>Date d'abonnement</li>
                                            <li>Nom</li>
                                        </ul>
                                    </p>
                                    <button><img src={iconArrow} alt='icon fleche' width="20px" height="20px" /></button>
                                    <div className='search-bar-following'>
                                        <button type='submit'><img src={iconSearch} alt='icon search' /></button>
                                        <input type="text" name="" value="" placeholder="Retrouver un abonné" />

                                    </div>
                                </div>
                                <div className="bloc-follower">
                                    {this.state.Follower.map(item => (


                                        <div className="bloc-follower-item">
                                            <div className="bloc-follower-info">
                                                <div>
                                                    <img src={item.follower_picture} alt='profilpicture 2' />
                                                </div>
                                                <div>
                                                    <h3>{item.follower_user}</h3>

                                                    <div className="info_follower">

                                                        <p>{item.follower}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                </div>
                                                <button>Abonné</button>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <div className='bloc-plus'>
                                    <button><img src={iconPlus} alt='icon plus' /></button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </>
        )
    }
}

export default GetFollower;
