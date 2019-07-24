import React, { Component } from 'react';

import axios from 'axios';
import jwt from 'jsonwebtoken'

class UserLastnameFirstname extends Component {
  state = {
    profil_name: []
  }


  getNameUser = async () => {
    const token = localStorage.getItem('token')
    const idProfilDecod = jwt.decode(token)
    const idProfil = idProfilDecod.id_profil
    const res = await axios.get(`http://localhost:3000/profil/get_video_for_profil_decription/${idProfil}`)
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