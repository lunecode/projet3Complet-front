import React, { Component } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import './GetAbonnements.scss'
import iconSearch from '../../Images-tripitto/Icon/TRAILING ICON.png'
import iconPlus from '../../Images-tripitto/Icon/Plus.png'


class GetAbonnements extends Component {
    state = {
        Following: [],
        visible:6,
        toggleBtnFollowing:false
    };
    showToggleBtnFollowing=()=>{
        this.setState({toggleBtnFollowing:true})
    }
    loadMore=() =>{
        this.setState((prev) => {
          return {visible: prev.visible + 4};
        });
      }
    getFollowing = async () => {
        const res = await axios.get('http://localhost:3000/following/get_following')
        this.setState({ Following: res.data })
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
                                {this.state.Following.slice(0,this.state.visible).map(item =>(

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
                                        <div className="btn-abonnements-bloc">
                                            <button className="btn-abonnments">Abonné</button>
                                        </div>
                                    </div>
                                    ))}
                                 
                                 <div className='bloc-plus'>
                                {this.state.visible < this.state.Following.length &&
             <button onClick={this.loadMore} type="button" className="load-more"><img src={iconPlus} alt='icon Plus' /></button>
          }
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
