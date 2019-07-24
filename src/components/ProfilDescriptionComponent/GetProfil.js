import React, { Component } from 'react';
import axios from 'axios';
import './GetProfil.css';
import { NavLink } from 'react-router-dom';

//Import ingredients pictures

import Selected from "../../Images-tripitto/Icon/Ingredients/Aventurier/Selected.png"
import MontagneCopy2 from "../../Images-tripitto/Icon/Ingredients/MontagneCopy2.png"
import FestivalCopy2 from "../../Images-tripitto/Icon/Ingredients/FestivalCopy2.png"
import EcotourismeCopy2 from "../../Images-tripitto/Icon/Ingredients/EcotourismeCopy2.png"
import HistoireCultureCopy2 from "../../Images-tripitto/Icon/Ingredients/HistoireCultureCopy2.png"
import jwt from 'jsonwebtoken'

// Import pictures
import Pin_On from "../../Images-tripitto/Icon/Pin_ON.png"
import fb from "../../Images-tripitto/Icon/social/fb.png"
import insta from "../../Images-tripitto/Icon/social/insta.png"
import youtube from "../../Images-tripitto/Icon/social/youtube.png"
import link from "../../Images-tripitto/Icon/social/link.png"

// Allow to display data from " profil " table

class GetProfil extends Component {
  state = {
    profil: [],
    general_video: [],
  };

  getProfil = async () => {
    const token = localStorage.getItem('token')
		const idProfilDecod = jwt.decode(token)
		const idProfil = idProfilDecod.id_profil
    const res = await axios.get(`http://localhost:3000/profil/get_video_for_profil_decription/${idProfil}`)
    this.setState({ profil: res.data })
    console.log(this.state.profil)
  }

  getVideo = async () => {
    const res = await axios.get('http://localhost:3000/general_video/get_general_video_liked_popularitylimit')
    this.setState({ general_video: res.data })
    console.log(this.state.general_video)
  }

  componentDidMount() {
    this.getProfil()
    this.getVideo()
  }


  render() {
    let i = 1

    return (
      <>
        <div className="generalprofil">
          <div classname="essai">
            {this.state.profil.map(item => (
              <div key={item.id_profil} >
                <div>
                  <div className="global_part_1">
                    <div className="profil_column_1">
                      <img src={item.profile_picture} alt="profil_pic" className="profilpic" />
                      <p>10 vidéos</p>
                      <p>54 abonnés</p>
                      <p>{item.nb_countries_visited} pays visités</p>

                    </div>
                    <div className="profil_column_2">
                      <div className="identity"><h2 className="name">{item.firstname} {item.lastname}</h2>
                        <span className="span">|</span><p className="traveler_type">{item.profil}</p></div>
                      <p className="localisation"><img src={Pin_On} alt="iconlocalisation" className="iconlocalisation" />{item.location}</p>
                      <p className="bio">{item.bio}</p>
                      <div className="icon_general">
                        <div className="iconaventurier">
                          <div className="iconitemaventurier">
                            <img src={Selected} className="iconProfil" alt="iconaventurier" />
                          </div>
                          <span className="texticonaventurier">Aventurier seul</span>
                        </div>
                        <div className="iconmountain">
                          <div className="iconitemmountain">
                            <img src={MontagneCopy2} className="iconProfil" alt="iconmountain" />
                          </div>
                          <span className="texticonmountain">Campagnes <br />& montagnes</span>
                        </div>
                        <div className="iconmusic">
                          <div className="iconitemmusic">
                            <img src={FestivalCopy2} className="iconProfil" alt="iconmusic" />
                          </div><span className="texticonmusic">Festivals</span></div>
                        <div className="iconplant">
                          <div className="iconitemplant">
                            <img src={EcotourismeCopy2} className="iconProfil" alt="iconplant" />
                          </div><span className="texticonplant">Ecotourisme</span></div>
                        <div className="iconculture"><div className="iconitemculture">
                          <img src={HistoireCultureCopy2} className="iconProfil" alt="iconculture" />
                        </div>
                          <span className="texticonculture">Histoire <br/>& Culture</span></div>
                      </div>
                    </div>
                    <div className="profil_column_3">
                      <div className="social_general">
                        <div className="facebook">
                          <img src={fb} alt="facebook" className="social" />
                        </div>
                        <div className="instagram">
                          <img src={insta} alt="instagram" className="social" />
                        </div>
                        <div className="youtube">
                          <img src={youtube} alt="youtube" className="social" />
                        </div>
                        <div className="lien">
                          <img src={link} alt="lien" className="social" />
                        </div>
                      </div>
                      <div className="buttonprofil">

                        <div className="button">
                          <NavLink exact to="/Profil"><button className="buttonmodifyprofil">MODIFIER PROFIL</button></NavLink>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="video">
            <div>
              <div className="continents"><div className="itemcontinent">Tout</div ><div className="itemcontinent">Afrique</div><div className="itemcontinent">Océanie</div><div className="itemcontinent">Autre</div></div>
              <div className="filter">
                <select class="w3-select" name="option">
                  <option value="" disabled selected>Trier par</option>
                  <option value="1">Date de publication'</option>
                  <option value="2">Status</option>
                  <option value="3">Popularité</option>
                  <option value="3">Titre</option>
                </select>
              </div>
            </div>
            <div className="container_blocs_description">
              {this.state.general_video.map(item => (
                <div key={item.id_general_video} >
                  <div>
                    <div className={"bloc_description" + i++}>
                      <div className="durée_pourcentage">
                        <p className="pourcentage_description">{item.number_tips}%</p>
                        <p className="durée_description" >{item.video_duration}</p>
                      </div>
                      <div className="picture_description"><img src={item.cover_picture} /></div>
                      <h3>{item.video_title}</h3>
                      <div className="infos_Profil_description">
                        <p className="pays_description">Scandinavia</p>
                        <p className="Point_description">.</p>
                        <p className="nb_vues_description"> {item.nb_views} vues</p>
                        <p className="Point_description">.</p>
                        <p className="temps_description">il y 3 semaines</p>
                      </div>
                      <p className="name-personne">{item.video_user} </p>
                    </div>
                  </div>
                </div>
              )
              )
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default GetProfil;
