import React, { Component } from 'react';
import "./Display_Amerique_video.scss"
import axios from 'axios';



class DisplayAmeriqueVideo extends Component {

  state = {
    video: [],
  };


  getVideo = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/popularity/get_popularity_liked_general_video_travel_information_continent_amerique'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/popularity/get_popularity_liked_general_video_travel_information_continent_amerique'
    }
    const res = await axios.get(pathApi)
    this.setState({ video: res.data })
  }




  componentDidMount() {
    this.getVideo()
  }


  render() {

    return (
      <div className="Display_Afrique">
        <div className="titre_Display_Afrique">
          <h1>Amérique</h1>
          <p className="number_video_Display_Afrique">3 Vidéos</p>
        </div>
        <div className="countainer_bloc_Afrique">
          {/* filter */}
          <div className="filter_Afrique">
            <select className="w3-select_Afrique" name="option">
              <option value="" disabled selected>Trier par</option>
              <option value="1">Date de publication'</option>
              <option value="2">Status</option>
              <option value="3">Popularité</option>
              <option value="3">Titre</option>
            </select>
          </div>
          <div className="container_4_bloc">
            {this.state.video.map(item => (
              <div className="bloc_1_image_Afrique">
                <div className="image_Afrique" key={item.id_general_video}>
                  <div className="durée_pourcentage_Afrique">
                    <p className="durée_vidéo_Afrique">{item.tx_remplissage}%</p>
                    <p className="pourcentage_Afrique" >{item.video_duration}</p>
                  </div>
                  <img src={item.cover_picture} alt="" />
                </div>
                <div className="container_bloc_Afrique">
                  <h3>{item.video_title}.</h3>
                  <div className="infos_Afrique">
                    <p className="pays_Afrique">{item.countries}</p>
                    <p className="A">.</p>
                    <p className="nb_vues_Afrique">{item.nb_views} vues</p>
                    <p className="A">.</p>
                    <p className="temps_Afrique">il y 3 semaines</p>
                  </div>
                  <p className="desciptipn_text">
                    <p className="auteur_Afrique">{item.video_user}</p>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


export default DisplayAmeriqueVideo;