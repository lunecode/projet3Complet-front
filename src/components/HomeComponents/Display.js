import React, { Component } from 'react';
import axios from 'axios'


// Permet l'affichage des données pour un test de la table " General_video "

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
    return (
      <>
        {this.state.videos.map(item => (
          <li key={item.id_general_video}>
          {item.video_title}
          {item.profil_id_profil}
        </li>
        ))}
      </>
    )
  }
}

export default Display;
