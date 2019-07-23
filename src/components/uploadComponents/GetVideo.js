import React, { Component } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';

import './GetVideo.css'
import UploadIcon from '../../Images-tripitto/Icon/Upload-Video.png'



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
            <p>{item.video_title}</p>
            <img src={item.video_link} alt={item.video_title}></img>
            <p>{item.profil_id_profil}</p>
          </li>
        ))}
      </>
    )
  }
}

export default GetVideo;
