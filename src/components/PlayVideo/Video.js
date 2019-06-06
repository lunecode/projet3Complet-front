import React, { Component } from 'react';
import axios from 'axios'
import './Video.css';
import YouTube from 'react-youtube';


// Permet l'affichage des données pour un test de la table " General_video "

class Video extends Component {
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
    const opts = {
        height: '390',
        width: '540',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
    return (
    <>
        {this.state.videos.map(item => (
        <div className="container_video">
        <li key={item.id_general_video}>
           <li>{item.video_title}</li> 
            <li>{item.video_description}</li>
            <li>{item.video_status}</li>
            <li>{item.equipment}</li>
            <li>{item.link_equipment}</li>
            <li><img src={item.cover_picture} alt="equipment_picture"></img></li>
            
            <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady}/>
            <li>{item.video}</li>
          
        </li>
        </div>
        ))}
    </>
    )
    }
}

export default Video;
