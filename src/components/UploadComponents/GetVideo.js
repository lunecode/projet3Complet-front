import React, { Component } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';


// Allow to display data from " general_video " table

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
            <Youtube videoId="P7LqDtG60o4"  onReady={this._onReady} />
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

export default GetVideo;
