import React, { Component } from 'react';
import axios from 'axios'


class GetBioprofil extends Component {
  state = {
    Bios: [],
  };

  getBio = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/profil/get_profil'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/profil/get_profil'
    }
  
    const res = await axios.get(pathApi)
    this.setState({ Bios: res.data })
  }
  componentDidMount() {
    this.getBio()
  }

  render() {
    return (
      <>
        {this.state.Bios.map(item => (
          <li key={item.id_profil}>
            {item.lastname}
            {item.firstname}
            {item.pseudo}
            {item.email}
            {item.birth_date}
            {item.type}
            {item.position}
            {item.profil_link}
            {item.profile_picture}
            {item.bio}
            {item.inscription_date}
            {item.password}
            {item.password_forget}
          </li>
        ))}
      </>
    )
  }
}

export default GetBioprofil;
