import React, { Component } from 'react';
import axios from 'axios'

class GetProfilInfo extends Component {
  state = {
    profil: [],
  };

  getProfil = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/profil/get_profil'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/profil/get_profil'
    }
    const res = await axios.get(pathApi)
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
