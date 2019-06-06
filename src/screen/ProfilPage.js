import React, { Component } from 'react';
import PostProfilInfo from '../components/ProfilComponents/PostProfilInfo';
import GetProfilInfo from '../components/ProfilComponents/GetProfilInfo';
import PutProfilInfo from '../components/ProfilComponents/PutProfilInfo';

class ProfilPage extends Component {
  render() {
    return (
      <>
      <p>Affichage de la table profil pour profilInfo</p>
      <GetProfilInfo />
        <p>Insertion de données dans la table profil</p>
        <PostProfilInfo />
        <p>Modification des données de la table profil pour profilInfo</p>
        <PutProfilInfo />
        </>
    )
  }
}


export default ProfilPage;
