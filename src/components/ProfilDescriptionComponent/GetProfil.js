import React, { Component } from 'react';
import axios from 'axios';
import './GetProfil.scss';

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
        console.log (this.state.video)
    }

      componentDidMount() {
        this.getProfil()
        this.getVideo().profilpic {
          overflow:hidden;
          border-radius:50%;
          width:140px;
          height:140px;
      }
      
      .profil_column_1 {
          margin-left: auto;
          margin-right: auto;
          width: 10em;
          text-align: center;
      }
      
      .container {
          display: grid | inline-grid;
        }
      
       .generalprofil {
           width: 900px;
           height: 900px;
        }
      }
      

      render() {    
        return (
          <>
          <div className="generalprofil">
            <div>
              {this.state.profil.map(item => (
                <div key={item.id_profil} className="container">
                <div className="profil_column_1">
                  <img src={item.profile_picture} alt="profil_pic" className="profilpic"/>
                  <p>10 vidéos</p>                                       
                  <p>54 abonnés</p>
                  <p>{item.nb_countries_visited} pays visités</p>
                </div>
                <div className="profil_column_2">
                    {/* Remplacer Créateur de contenu par item.type? */}
                  <p><h1>{item.firstname} {item.lastname}</h1> | Créateur de contenu</p>
                  <p>{item.location}</p>
                  <p>{item.bio}</p> 
                  <img src="https://i.ibb.co/k5NYkbJ/Selected.png" alt="iconaventurier" /><img src="https://i.ibb.co/TBD2y8F/Montagne-Copy-2.png" alt="iconmountain" /><img src="https://i.ibb.co/SwFR7Tr/Festival-Copy-2.png" alt="iconmusic" /><img src="https://i.ibb.co/M6YmDK4/Ecotourisme-Copy-2.png" alt="iconplant" /><img src="https://i.ibb.co/55gqM0h/Histoire-Culture-Copy-2.png" alt="iconculture" /> 
                  <hr color="grey"></hr>
                </div>
                <div>
                  <button>MESSAGE</button>
                  <button>MODIFIER LE PROFIL</button>
                </div>           
                </div>
          ))}
          </div>
          <div>
            {this.state.video.map(videos => (
            <div className="video" key={videos.id_general_video}>
            <img src={videos.video_link} alt="videocover" className="videocover" /> <img src={videos.video_link} alt="videocover" alt="videocover" /><img src={videos.video_link} alt="videocover" alt="videocover" /><img src={videos.video_link} alt="videocover" alt="videocover" />
            <p>{videos.video_title}</p>

            <p>test</p>
            </div>
            ))}
          </div>
          </div>
          </>
     )
   }
}

export default GetProfil;