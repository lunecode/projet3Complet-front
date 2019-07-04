import React, { Component } from 'react';
import axios from 'axios';
import './GetProfil.css';
import Pin_On from "../../Images-tripitto/Icon/Pin_ON.png";
import { NavLink } from 'react-router-dom';

// Allow to display data from " profil " table

class GetProfil extends Component {
  state = {
    profil: [],
    video: [],
  };

  getProfil = async () => {
    const res = await axios.get('http://localhost:3000/profil/get_profil')
    this.setState({ profil: res.data })
    console.log(this.state.profil)
  }

  getVideo = async () => {
    const res = await axios.get('http://localhost:3000/general_video/get_general_video')
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
          <div>
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
                    <p>{item.bio}</p>
                    <div className="icon_general">
                      <div className="iconaventurier">
                      <div className="iconitem">
                        <img src="https://i.ibb.co/k5NYkbJ/Selected.png" className="iconProfil" alt="iconaventurier" />
                      </div>
                      <span className="texticonaventurier">Aventurier seul</span>
                      </div>
                      <div><div className="iconitem">
                        <img src="https://i.ibb.co/TBD2y8F/Montagne-Copy-2.png" className="iconProfil" alt="iconmountain" />
                      </div><span className="texticon">Histoire & Culture</span></div>
                      <div><div className="iconitem">
                        <img src="https://i.ibb.co/SwFR7Tr/Festival-Copy-2.png" className="iconProfil" alt="iconmusic" />
                      </div><span className="texticon">Histoire & Culture</span></div>
                      <div><div className="iconitem">
                        <img src="https://i.ibb.co/M6YmDK4/Ecotourisme-Copy-2.png" className="iconProfil" alt="iconplant" />
                      </div><span className="texticon">Histoire & Culture</span></div>
                      <div><div className="iconitem">
                        <img src="https://i.ibb.co/55gqM0h/Histoire-Culture-Copy-2.png" className="iconProfil" alt="iconculture" />
                      </div>
                      <span className="texticon">Histoire & Culture</span></div>
                    </div>
                  </div>
                  <div className="profil_column_3">
                    <NavLink exact to="/post_contactrequest"><button>MESSAGE</button></NavLink>
                    <NavLink exact to="/update_profil/:id"><button >MODIFIER LE PROFIL</button></NavLink>
                  </div>

                </div>
              </div>
            ))}
          </div>
          <div>
            <p>Tout</p><p>Afrique</p><p>Océanie</p><p>Autre</p>
            {this.state.video.map(videos => (
              <div className="video" key={videos.id_general_video}>
                <img src={videos.video_link} alt="videocover" className="videocover" />
                <p>{videos.video_title}</p>
                <p>Danemark</p>
                <p>35 lectures</p>
                <p>Il y a 3 semaines</p>

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