import React, { Component } from 'react';
import soleil from '../../Images-tripitto/Icon_Vidéo/soleil.png';
import fes from '../../Images-tripitto/Icon_Vidéo/fes.png';
import Marakech from '../../Images-tripitto/Icon_Vidéo/Marakech.png';
import tanger from '../../Images-tripitto/Icon_Vidéo/tanger.png';
import "./Display_Afrique_video.scss"
import axios from 'axios';



class Display_Afrique_video extends Component {

    state = {
        general_video: [],
      };
    
     
    
      getVideo = async () => {
        const res = await axios.get('http://localhost:3000/general_video/get_Page_Afrique/1')
        this.setState({ general_video: res.data })
        console.log(this.state.general_video)
      }

      componentDidMount() {
        this.getVideo()
      }
    render() {
        return (
            <div className="Display_Afrique">
                <div className="titre_Display_Afrique">
                    <h1>Afrique / Maroc</h1>
                    <p className="number_video_Display_Afrique">45 Vidéos</p>
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
{this.state.general_video.map(item => (
    <div className="bloc_1_image_Afrique">
        <div className="image_Afrique"  key={item.id_general_video}>
            <div className="durée_pourcentage_Afrique">
            <p className="durée_vidéo_Afrique">{item.number_tips}%</p>
            <p className="pourcentage_Afrique" >{item.video_duration}</p>
            </div>
            <img src={item.cover_picture} alt="" />
        </div>
    <div className="container_bloc_Afrique">
        <h3>{item.video_title}.</h3>
        <div className="infos_Afrique">
            <p className="pays_Afrique">Maroc</p>
            <p className="Point_Afrique">.</p>
            <p className="nb_vues_Afrique">35 vues</p>
            <p className="Point_Afrique">.</p>
            <p className="temps_Afrique">il y 3 semaines</p>
        </div>
             <p className="desciptipn_text">
             <p className="auteur_Afrique">Beth Murphy</p>
            </p>
        </div>
      </div>
      ))}
     </div>

     <div className="container_4_bloc">
{this.state.general_video.map(item => (
    <div className="bloc_1_image_Afrique">
        <div className="image_Afrique"  key={item.id_general_video}>
            <div className="durée_pourcentage_Afrique">
            <p className="durée_vidéo_Afrique">{item.number_tips}%</p>
            <p className="pourcentage_Afrique" >{item.video_duration}</p>
            </div>
            <img src={item.cover_picture} alt="" />
        </div>
    <div className="container_bloc_Afrique">
        <h3>{item.video_title}.</h3>
        <div className="infos_Afrique">
            <p className="pays_Afrique">Maroc</p>
            <p className="Point_Afrique">.</p>
            <p className="nb_vues_Afrique">35 vues</p>
            <p className="Point_Afrique">.</p>
            <p className="temps_Afrique">il y 3 semaines</p>
        </div>
             <p className="desciptipn_text">
             <p className="auteur_Afrique">Beth Murphy</p>
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


export default Display_Afrique_video;