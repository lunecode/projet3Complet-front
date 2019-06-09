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
        height: '490',
        width: '850',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
    return (
    <>
        {this.state.videos.map(item => (
        <div className="container_video">
        <div key={item.id_general_video}>
          <div className="video_user">
            <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady}/>
          </div>
          <div className="video_info">
            <p className="title_video">{item.video_title}</p> 
            <p><span className="loading">Ajouté le {item.loading_time} -</span><span className="status"><i>{item.video_status}</i> </span> </p>
            <p className="text">{item.video_description}</p>
            <p><img src={item.cover_picture} alt="equipment_picture"></img><a href="{item.link_equipment}>" target="_blank">Go Pro Hero 6</a></p>
            {/* <a>{item.equipment}</a> */}
            
            {/* <a>{item.video_link}</a> */}
          </div>
        </div>
        </div>
        ))}
    </>
    )
    }
}

export default Video;
