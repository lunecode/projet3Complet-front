import React, { Component } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken'
import './UploadImgProfil.scss'

class UploadImgProfil extends Component {
  state = {
    image: []
  }
  getImageProfil = async () => {
    const token = localStorage.getItem('token')
    const idProfilDecod = jwt.decode(token)
    const idProfil = idProfilDecod.id_profil
    const res = await axios.get(`http://localhost:3000/profil/get_video_for_profil_decription/${idProfil}`)
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
            <img src={item.profile_picture} alt="pictures profil" width="100%" height="100%"  className="img-profil-after"/>
          </div>
        ))}
      </>
    );
  }
}

export default UploadImgProfil;