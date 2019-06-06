import React, { Component } from 'react';
import axios from 'axios'


// Permet l'affichage des données pour un test de la table " Profil "

class GetProfilInfo extends Component {
  state = {
    profil: [],
  };

  getProfil = async () => {
    const res = await axios.get('http://localhost:3000/profil/get_profil')
    this.setState({ profil: res.data })
    console.log(this.state.profil)
  }
  componentDidMount() {
    this.getProfil()
  }

  render() {
    return (
      <>
        {this.state.profil.map(item => (
          <li key={item.id_profil}>
          {item.profile_picture}
          {item.pseudo}
          {item.identiy}
          {item.location}
          {item.profil_link}
          {item.birth_date}
          {item.nb_countries_visited}
          
        </li>
        ))}
      </>
    )
  }
}

export default GetProfilInfo;
