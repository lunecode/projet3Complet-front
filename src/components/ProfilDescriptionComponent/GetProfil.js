import React, { Component } from 'react';
import axios from 'axios';
import './GetProfil.css';
import { NavLink } from 'react-router-dom';

// Import pictures
import Pin_On from "../../Images-tripitto/Icon/Pin_ON.png";
import fb from "../../Images-tripitto/Icon/social/fb.png"
import insta from "../../Images-tripitto/Icon/social/insta.png"
import youtube from "../../Images-tripitto/Icon/social/youtube.png"
import link from "../../Images-tripitto/Icon/social/link.png"

// Allow to display data from " profil " table

class GetProfil extends Component {
  state = {
    profil: [],
    video: [],
  };

  getProfil = async () => {
    const res = await axios.get('http://localhost:3000/profil/get_profil_limite1/1')
    this.setState({ profil: res.data })
    console.log(this.state.profil)
  }

  getVideo = async () => {
    const res = await axios.get('http://localhost:3000/general_video/get_general_video_lim/1')
    this.setState({ video: res.data })
    console.log(this.state.video)
  }

  componentDidMount() {
    this.getProfil()
    this.getVideo()
  }


  render() {
    return (
      <>
        <div className="generalprofil">
          <div classname="essai">
            {this.state.profil.map(item => (
              <div key={item.id_profil} >

                <div className="global_part_1">
                  <div className="profil_column_1">
                    <img src={item.profile_picture} alt="profil_pic" className="profilpic" />
                    <p>10 vidéos</p>
                    <p>54 abonnés</p>
                    <p>{item.nb_countries_visited} pays visités</p>
                  </div>
                  <div className="profil_column_2">
                    {/* Remplacer Créateur de contenu par item.type? */}
                    <div className="identity"><h2 className="name">{item.firstname} {item.lastname}</h2><span className="span">|</span><p className="traveler_type">Créateur de contenu</p></div>
                    <p className="localisation"><img src={Pin_On} alt="iconlocalisation" className="iconlocalisation" />{item.location}</p>
                    <p className="bio">{item.bio}</p>
                    <div className="icon_general">
                      <div className="iconaventurier">
                        <div className="iconitemaventurier">
                          <img src="https://i.ibb.co/k5NYkbJ/Selected.png" className="iconProfil" alt="iconaventurier" />
                        </div>
                        <span className="texticonaventurier">Aventurier seul</span>
                      </div>
                      <div className="iconmountain">
                        <div className="iconitemmountain">
                          <img src="https://i.ibb.co/TBD2y8F/Montagne-Copy-2.png" className="iconProfil" alt="iconmountain" />
                        </div>
                        <span className="texticonmountain">Campagnes <br />& montagnes</span>
                      </div>
                      <div className="iconmusic">
                        <div className="iconitemmusic">
                          <img src="https://i.ibb.co/SwFR7Tr/Festival-Copy-2.png" className="iconProfil" alt="iconmusic" />
                        </div><span className="texticonmusic">Festivals</span></div>
                      <div className="iconplant">
                        <div className="iconitemplant">
                          <img src="https://i.ibb.co/M6YmDK4/Ecotourisme-Copy-2.png" className="iconProfil" alt="iconplant" />
                        </div><span className="texticonplant">Ecotourisme</span></div>
                      <div className="iconculture"><div className="iconitemculture">
                        <img src="https://i.ibb.co/55gqM0h/Histoire-Culture-Copy-2.png" className="iconProfil" alt="iconculture" />
                      </div>
                        <span className="texticonculture">Histoire <br />& Culture</span></div>
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
                        <img src={link} alt="liek" className="social" />
                      </div>
                    </div>
                    <div className="buttonprofil">
                      <div className="button">
                        <NavLink exact to="/post_contactrequest"><button className="buttonmessage">MESSAGE</button></NavLink>
                      </div>
                      <div className="button">
                        <NavLink exact to="/update_profil/:id"><button className="buttonmodifyprofil">MODIFIER PROFIL</button></NavLink>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
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
            {this.state.video.map(videos => (
              <div className="video" key={videos.id_general_video}>
                <img src={videos.video_link} alt="videocover" className="videocover" />
                <li>{videos.video_title}</li>
                <li>Danemark</li>
                <li>35 lectures</li>
                <li>Il y a 3 semaines</li>

              </div>
            ))}
            <div>
              {/* <hr color="grey"></hr> */}
              <button>VOIR PLUS</button>
            </div>
          </div>



        </div>
      </>
    )
  }
}

export default GetProfil;