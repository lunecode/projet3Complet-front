import React, { Component } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';


// Permet l'affichage des données de la table " General_video "

class Display extends Component {
  state = {
    videos: [],
    
  };

  getVideo = async () => {
    const res = await axios.get('http://localhost:3000/videoUpload/getdatavideo')
    this.setState({ videos: res.data })
    console.log(this.state.videos)
  }
  componentDidMount() {
    this.getVideo()
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <>
      
        {this.state.videos.map(item => (
          <li key={item.id_general_video}>
            <Youtube videoId="P7LqDtG60o4" opts={item.video_link} onReady={this._onReady} />
            {/* <video controls src={item.video_link}></video> */}
            {/* {item.video_link} */}
            <p>{item.video_title}</p>
            <p>{item.video_description}</p>
            <p>{item.equipment}</p>
            <img src={item.cover_picture} alt={item.video_title}></img>
            <p>{item.profil_id_profil}</p>
          </li>
        ))}
      </>
    )
  }
}

export default Display;
