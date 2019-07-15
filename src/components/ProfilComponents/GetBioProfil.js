import React, { Component } from 'react';
import axios from 'axios'


class GetBioprofil extends Component {
  state = {
  Bios: [],
  };

  getBio = async () => {
    const res = await axios.get('http://localhost:3000/profil/get_profil')
    this.setState({ Bios: res.data })
    console.log(this.state.Bios)
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
