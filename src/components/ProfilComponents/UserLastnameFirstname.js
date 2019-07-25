import React, { Component } from 'react';

import axios from 'axios';
import jwt from 'jsonwebtoken'

class UserLastnameFirstname extends Component {
  state = {
    profil_name: []
  }


  getNameUser = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/profil/get_video_for_profil_decription'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/profil/get_video_for_profil_decription'
    }
    const token = localStorage.getItem('token')
    const idProfilDecod = jwt.decode(token)
    const idProfil = idProfilDecod.id_profil
    const res = await axios.get(`${pathApi}/${idProfil}`)
    this.setState({ profil_name: res.data })
  }

  componentDidMount() {
    this.getNameUser()
  }
  
  render() {
    return (
      <div className="membres-profil">
        {this.state.profil_name.map(item => (
          <div>
            <img src={item.profile_picture} alt="pictures profil" />

            <div>
              <h4> {item.lastname} {item.firstname} </h4>
              <p>Membre depuis le 20/02/2019</p>
            </div>
          </div>

        ))}
      </div>

    );
  }
}

export default UserLastnameFirstname;