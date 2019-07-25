import React, { Component } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken'
import './UploadImgProfil.scss'

class UploadImgProfil extends Component {
  state = {
    image: []
  }
  getImageProfil = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/profil/get_video_for_profil_decription'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/profil/get_video_for_profil_decription'
    }
    const token = localStorage.getItem('token')
    const idProfilDecod = jwt.decode(token)
    const idProfil = idProfilDecod.id_profil
    const res = await axios.get(`${pathApi}/${idProfil}`)
    this.setState({ image: res.data })
  }

  componentDidMount() {
    this.getImageProfil()
  }


  render() {
    return (
      <>
        {this.state.image.map(item => (
          <div className="UploadVideo">
            <img src={item.profile_picture} alt="pictures profil" width="100%" height="100%" className="img-profil-after" />
          </div>
        ))}
      </>
    );
  }
}

export default UploadImgProfil;