import React, { Component } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import "./GetFollower.scss"
import iconSearch from '../../Images-tripitto/Icon/TRAILING ICON.png'
import iconPlus from '../../Images-tripitto/Icon/Plus.png'
import iconArrow from '../../Images-tripitto/iconAbonnements/icon-arrow.png'

class GetFollower extends Component {
    state = {
        Follower: [],
        visible: 6,
    };
    loadMore = () => {
        this.setState((prev) => {
            return { visible: prev.visible + 4 };
        });
    }
    getFollower = async () => {
        const res = await axios.get('http://localhost:3000/follower/get_follower')
        this.setState({ Follower: res.data })

    }
    componentDidMount() {
        this.getFollower()
    }

    render() {
        return (
            <>
                <div className="bloc-page-profil">
                  
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
                                    {this.state.Follower.slice(0, this.state.visible).map(item => (
                                        <div className="bloc-follower-item">
                                            <div className="bloc-follower-info">
                                                <div key={item.id_follower}>
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
                                    {this.state.visible < this.state.Follower.length &&
                                        <button onClick={this.loadMore} type="button" className="load-more"><img src={iconPlus} alt='icon Plus' /></button>
                                    }
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
