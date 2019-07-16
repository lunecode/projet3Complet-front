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

//Import pictures video

import iconSearch from '../../Images-tripitto/Icon/TRAILING ICON.png'
import ModalDeleteVideo from '../../components/ProfilComponents/ModalDeleteVideo.js';
import ModalHidevide from '../../components/ProfilComponents/ModalHidevideo.js';
import Partager from '../../Images-tripitto/Icon_Vidéo/Partager.png'
import modification from '../../Images-tripitto/Icon_Vidéo/modification.png'
import pourcentage from '../../Images-tripitto/Icon_Vidéo/pourcentage.png'
import pourcentage80 from '../../Images-tripitto/Icon_Vidéo/pourcentage80.png'
import pourcentage60 from '../../Images-tripitto/Icon_Vidéo/pourcentage60.png'
import vinise from '../../Images-tripitto/Icon_Vidéo/vinise.png'
import upload from '../../Images-tripitto/Icon_Vidéo/upload.png'
import img1 from '../../Images-tripitto/Icon_Vidéo/img1.png'
import img2 from '../../Images-tripitto/Icon_Vidéo/img2.png'
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
                        <NavLink exact to="/Profil"><button className="buttonmodifyprofil">MODIFIER PROFIL</button></NavLink>
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
            {/* {this.state.video.map(videos => (
              <div className="video" key={videos.id_general_video}>
                <img src={videos.video_link} alt="videocover" className="videocover" />
                <li>{videos.video_title}</li>
                <li>Danemark</li>
                <li>35 lectures</li>
                <li>Il y a 3 semaines</li>

              </div>
            ))} */}

<div className="bloc_2_video">
{/* /bloc video 1 */}
<div className="list_videos" id ="dummy">
   <div>
          <div className="video_user1">
            <div className="status_durée">
            <div className="status1">
            <p className="status">En attente d'approbation</p>
            </div>
            <div className="durée1" >
            <p className="durée">12:45</p>
            </div>
            </div>

<div className="imagescreen"><img src={img1} alt=""/></div>
          <div className="countery"> 
            <h3> Dans les profondeur du canyon</h3>
            <p className="countery_p">USA</p>
         </div> 
           <div className="infos">
            <p className="A"> 0 vues</p>
            <p className="B">.</p>
            <p className="C">Il y a un jour</p>
            <p className="D"> <img src={pourcentage} alt=""/></p>
          </div>
            <div className="icons_video"> 
            <img  className="img1" src={modification} alt=""/> 
            <img className="img2"src={Partager} alt=""/>  

            <ModalHidevide />
            <ModalDeleteVideo />
            </div>
          </div>
         
          </div>
           
     </div>
      

      {/* /*****************************************$ */}

{/* /bloc video 2 */}
<div className="list_videos" id ="dummy">
   <div>
       <div className="video_user1">
            <div className="status_durée">
            <div className="status1">
            <p className="status_enligne">En ligne</p>
            </div>
            <div className="durée1" >
            <p className="durée">08:36</p>
            </div>
         </div>

       <div className="imagescreen"><img src={img3} alt=""/></div>

       <div className="countery"> 
            <h3>Perdu dans le sahara</h3>
            <p className="countery_p">Mauritanie</p>
            </div> 
       <div className="infos">
            <p className="A"> 1903 vues</p>
            <p className="B">.</p>
            <p className="C">Il y a 3 mois</p>
            <p className="D"> <img src={pourcentage80} alt=""/></p>
       </div>
       <div className="icons_video"> 
            <img  className="img1" src={modification} alt=""/> 
            <img className="img2" src={Partager} alt=""/>  
           <ModalHidevide />
            <ModalDeleteVideo />
            </div>
          </div>
          </div>   
        
     </div>

</div>
     {/* /*****************************************$ */}

     <div className="bloc_2_video_2">
{/* /bloc video 3 */}
<div className="list_videos" id ="dummy">

   <div>
       <div className="video_user1">
            <div className="status_durée">
            <div className="status1">
            <p className="status_refusé">Non adaptée</p>
            </div>
            <div className="durée1" >
            <p className="durée">03:56</p>
            </div>
         </div>

       <div className="imagescreen"><img src={img4} alt=""/></div>

       <div className="countery"> 
            <h3>Extréme Xest Caoest</h3>
            <p className="countery_p">Mauritanie</p>
            </div> 
       <div className="infos">
            <p className="A"> 1903 vues</p>
            <p className="B">.</p>
            <p className="C">Il y a 3 mois</p>
            <p className="D"> <img src={pourcentage60} alt=""/></p>
            </div>
       <div className="icons_video"> 
            <img  className="img1" src={modification} alt=""/> 
            <img className="img2"src={Partager} alt=""/>  
            <ModalHidevide />
            <ModalDeleteVideo />
            {/* <button onClick={this.removeDummy}><img className="img4"src={Delete} alt=""/> </button>  */}
            </div>
          </div>
          </div>   
        
     </div>


     {/* /bloc video 4*/}
<div className="list_videos" id ="dummy">

   <div>
       <div className="video_user1">
            <div className="status_durée">
            <div className="status1">
            <p className="status_Brouillon">Brouillon</p>
            </div>
            <div className="durée1" >
            <p className="durée">03:56</p>
            </div>
         </div>

       <div className="imagescreen"><img src={vinise} alt=""/></div>

       <div className="countery"> 
            <h3>Souvenir de Venise</h3>
            <p className="countery_p">Italie</p>
            </div> 
       <div className="infos">
            <p className="A"> 0 vues</p>
            <p className="B">.</p>
            <p className="C">Il y a 1 mois</p>
            <p className="D"> <img src={pourcentage60} alt=""/></p>
            </div>

       <div className="icons_video"> 
            <img  className="img1" src={modification} alt=""/> 
            <img className="img2"src={Partager} alt=""/>  
            <ModalHidevide />
            <ModalDeleteVideo />
            </div>
          </div>
          </div>   
        
     </div>
     </div>
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