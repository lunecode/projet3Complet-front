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
import seine from "../../Images-tripitto/image_Profil_Description/seine.png"
import vert from "../../Images-tripitto/image_Profil_Description/vert.png"
import depl from "../../Images-tripitto/image_Profil_Description/depl.png"
import plage from "../../Images-tripitto/image_Profil_Description/plage.png"
//Import pictures video


import ModalDeleteVideo from '../../components/ProfilComponents/ModalDeleteVideo.js';
import ModalHidevide from '../../components/ProfilComponents/ModalHidevideo.js';
import Partager from '../../Images-tripitto/Icon_Vidéo/Partager.png'
import modification from '../../Images-tripitto/Icon_Vidéo/modification.png'
import pourcentage from '../../Images-tripitto/Icon_Vidéo/pourcentage.png'
import pourcentage80 from '../../Images-tripitto/Icon_Vidéo/pourcentage80.png'
import pourcentage60 from '../../Images-tripitto/Icon_Vidéo/pourcentage60.png'
import vinise from '../../Images-tripitto/Icon_Vidéo/vinise.png'

import img1 from '../../Images-tripitto/Icon_Vidéo/img1.png'

import img3 from '../../Images-tripitto/Icon_Vidéo/img3.png'
import img4 from '../../Images-tripitto/Icon_Vidéo/img4.png'

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
            {/* {this.state.profil.map(item => (  */}
            {/* <div key={item.id_profil} > */}
            <div>
              <div className="global_part_1">
                <div className="profil_column_1">
                  {/* <img src={item.profile_picture} alt="profil_pic" className="profilpic" /> */}
                  <img src="https://cdn.pixabay.com/photo/2017/02/22/20/02/landscape-2090495_960_720.jpg" alt="profil_pic" className="profilpic" />
                  <p>10 vidéos</p>
                  <p>54 abonnés</p>
                  {/* <p>{item.nb_countries_visited} pays visités</p> */}
                  <p>12  pays visités</p>

                </div>
                <div className="profil_column_2">
                  {/* Remplacer Créateur de contenu par item.type? */}
                  {/* <div className="identity"><h2 className="name">{item.firstname} {item.lastname}</h2> */}
                  <div className="identity"><h2 className="name">Asma Moutaoukil</h2>
                    <span className="span">|</span><p className="traveler_type">Créateur de contenu</p></div>
                  {/* <p className="localisation"><img src={Pin_On} alt="iconlocalisation" className="iconlocalisation" />{item.location}</p> */}
                  <p className="localisation"><img src={Pin_On} alt="iconlocalisation" className="iconlocalisation" />ppdpdp</p>
                  {/* <p className="bio">{item.bio}</p> */}
                  <p className="bio">leasure and praising pain was born and
                   I will give you a complete account of the system, and expound the actual teachings
                   of the great explorery encounter consequences
                     that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasu
                  re that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                    </p>
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
                      <NavLink exact to="/Profil"><button className="buttonmodifyprofil">MODIFIER PROFIL</button></NavLink>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* ))} */}
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
          </div>

          <div className="container_blocs_description">
            <div className="bloc_description">
              <div className="durée_pourcentage">
                <p className="pourcentage_description">80%</p>
                <p className="durée_description" >12:23 </p>
              </div>
              <div className="picture_description"><img src={seine} alt='seine' /></div>
              <h3>Scandinavian Trip </h3>
              <div className="infos_Profil_description">
                <p className="pays_description">Danemark</p>
                <p className="Point_description">.</p>
                <p className="nb_vues_description">35 vues</p>
                <p className="Point_description">.</p>
                <p className="temps_description">il y 3 semaines</p>
              </div>
              <div className="name-personne"><p>Julien Mhapé </p></div>
            </div>


            {/* bloc 2 */}
            <div className="bloc_description">
              <div className="durée_pourcentage">
                <p className="pourcentage_description">80%</p>
                <p className="durée_description" >12:23 </p>
              </div>
              <div className="picture_description"><img src={vert} alt='vert' /></div>
              <h3>Scandinavian Trip </h3>
              <div className="infos_Profil_description">
                <p className="pays_description">Danemark</p>
                <p className="Point_description">.</p>
                <p className="nb_vues_description">35 vues</p>
                <p className="Point_description">.</p>
                <p className="temps_description">il y 3 semaines</p>
              </div>
              <div className="name-personne"><p>Julien Mhapé </p></div>
            </div>

          </div>

          <div className="container_blocs_description">
            <div className="bloc_description">
              <div className="durée_pourcentage">
                <p className="pourcentage_description">80%</p>
                <p className="durée_description" >12:23 </p>
              </div>
              <div className="picture_description"><img src={depl} alt="deplacement" /></div>
              <h3>Scandinavian Trip </h3>
              <div className="infos_Profil_description">
                <p className="pays_description">Danemark</p>
                <p className="Point_description">.</p>
                <p className="nb_vues_description">35 vues</p>
                <p className="Point_description">.</p>
                <p className="temps_description">il y 3 semaines</p>
              </div>
              <div className="name-personne"><p>Julien Mhapé </p></div>
            </div>


            {/* bloc 2 */}
            <div className="bloc_description">
              <div className="durée_pourcentage">
                <p className="pourcentage_description">80%</p>
                <p className="durée_description" >12:23 </p>
              </div>
              <div className="picture_description"><img src={plage} alt="plage" /></div>
              <h3>Scandinavian Trip </h3>
              <div className="infos_Profil_description">
                <p className="pays_description">Danemark</p>
                <p className="Point_description">.</p>
                <p className="nb_vues_description">35 vues</p>
                <p className="Point_description">.</p>
                <p className="temps_description">il y 3 semaines</p>
              </div>
              <div className="name-personne"><p>Julien Mhapé </p></div>
            </div>

          </div>

        </div>

      </>
    )
  }
}

export default GetProfil;