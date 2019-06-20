import React, { Component } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';

import './GetVideo.css'
import UploadIcon from '../../Images-tripitto/Icon/Upload-Video.png'




// UPLOAD PAGE 1 / VIDEO AND DESCRIPTION
// ALLOW TO DISPLAY DATA FROM "GENERAL_VIDEO" TABLE
// TEST NOK





class GetVideo extends Component {
  state = {
    videos: [],
  };

  getVideo = async () => {
    const res = await axios.get('http://localhost:3000/general_video/get_general_video')
    this.setState({ videos: res.data })
    console.log(this.state.videos)
  }
  componentDidMount() {
    this.getVideo()
  }

  render() {
    return (
      <>
        {this.state.videos.map(item => (
          <li key={item.id_general_video}>

            <div className='grid'>

              <div className='empty'></div>

              <div className="upload-link">
                <img className="uploadIconVideo" src={UploadIcon} alt="upload icon"></img>
                <p>Lien de la vidéo</p>'

                <Youtube className="input-upload" videoId={item.video_link} onReady={this._onReady} />
              </div>
            

            <div className="title">
              <p>Titre*</p>
              <input className="input-title" placeholder={item.video_title} type='text' name="video_title" />
            </div>


            <div className="description">
              <p>Description</p>
              <input className="input-description" placeholder={item.video_description} type='text' name="video_description"/>
            </div>






            <div className="title-equipment1">
              <p>Equipement utilisés pour filmer</p>
            </div>
            <div className="equipment1">
            <input className="input-equipment" placeholder={item.equipment} type='text' name="equipment"/>
            </div>
            <div className="title-link1">
              <p>Ajouter un lien web</p>
            </div>
            <div className="link1">
            <input className="input-link" type='text' name="link_equipment" placeholder={item.link_equipment} />
            </div>






            <div className="title-equipment2">
              <p>Equipement utilisés pour filmer</p>
            </div>
            <div className="equipment2">
            <input className="input-equipment2" placeholder={item.equipment2} type='text' name="equipment2"/>
            </div>            
            <div className="title-link2">
              <p>Ajouter un lien web</p>
            </div>
            <div className="link2">
            <input className="input-link2" type='text' name="link_equipment2" placeholder={item.link_equipment2} />
            </div>





            <div className="title-equipment3">
              <p>Equipement utilisés pour filmer</p>
            </div>
            <div className="equipment3">
            <input className="input-equipment3" placeholder={item.equipment3} type='text' name="equipment"/>
            </div>            
            <div className="title-link3">
              <p>Ajouter un lien web</p>
            </div>
            <div className="link3">
            <input className="input-link2" type='text' name="link_equipment2" placeholder={item.link_equipment3} />
            </div>






            <div className="cover-picture">
              <img className="uploadIconCover" src={UploadIcon} alt="upload icon"></img>
              <p>Photo de couverture</p>
              <img className="picture-size"  src={item.cover_picture} width="90%" alt={item.video_title} ></img>
            </div>

            <div className="temp">
              <p>Profil_id ( obligatoire )</p>
              <input type="text" name="profil_id_profil" placeholder={item.profil_id_profil} />
            </div>

            <div className="next-div">
              <button className="next-button" type="button">SUIVANT</button>
            </div>

            <div className="submit-div">
              <button className="submit-button" type="submit">ENREGISTRER</button>
            </div>
            


            </div>
          </li>
        ))}

        {/* {this.state.videos.map(item => (
          <li key={item.id_general_video}>
            <p>{item.video_title}</p>
            <Youtube videoId={item.video_link} onReady={this._onReady} />
            <p>{item.video_description}</p>
            <p>{item.equipment}</p>
            <img src={item.cover_picture} alt={item.video_title}></img>
            <p>{item.profil_id_profil}</p>
          </li>
        ))} */}
      </>
    )
  }
}

export default GetVideo;
