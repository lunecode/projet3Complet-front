import React, { Component } from 'react';
import axios from 'axios'


// Permet l'affichage des données pour un test de la table " General_video "

class Display extends Component {
  state = {
    videos: [],
  };

  getVideo = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/videoUpload/getdatavideo'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/videoUpload/getdatavideo'
    }
    const res = await axios.get(pathApi)
    this.setState({ videos: res.data })
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
