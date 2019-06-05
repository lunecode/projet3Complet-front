import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';


// Permet l'affichage des données pour un test de la table " General_video "

class Video extends Component {
  state = {
    videos: [],
  };

  getVideo = async () => {
    const res = await axios.get('http://localhost:3000/video/play_video')
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
        <li key={item.id_general_video}>
           <li>{item.video_title}</li> 
            <li>{item.video_description}</li>
            
            <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady}/>
          
        </li>
        ))}
    </>
    )
    }
}

export default Video;
