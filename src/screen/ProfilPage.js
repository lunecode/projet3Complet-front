import React, { Component } from 'react';
import PostBioProfil from '../components/ProfilComponents/PostBioProfil';
import GetBioprofil from '../components/ProfilComponents/GetBioProfil';
import PutProfil from '../components/ProfilComponents/PutProfil'


class Profilpage extends Component {
  render() {
    return (
      <>
        <h1>Affichage de la table Profil : </h1>
        <PostBioProfil/>
        <h1>Insertion de données Bio dans la table Profil</h1>
        <GetBioprofil />
        <h1>modification des données</h1>
        <PutProfil />
   
      </>
    )
  }
}


export default Profilpage;
