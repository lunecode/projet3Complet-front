import React, { Component } from 'react';
import PostProfilInfo from '../components/ProfilComponents/PostProfilInfo';
// import PutProfilInfo from '../components/ProfilComponents/PutProfilInfo';

class ProfilPage extends Component {
  render() {
    return (
      <>

        <PostProfilInfo />
        {/* <p>Modification des données de la table profil pour profilInfo</p>
        <PutProfilInfo /> */}
        </>
    )
  }
}


export default ProfilPage;
