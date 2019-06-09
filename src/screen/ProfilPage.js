import React, { Component } from 'react';
import PostBioProfil from '../components/ProfilComponents/PostBioProfil';
import GetBioprofil from '../components/ProfilComponents/GetBioProfil';
import PutProfil from '../components/ProfilComponents/PutProfil'
import Postingredients from '../components/ProfilComponents/Postingredients';


class Profilpage extends Component {
  render() {
    return (
      <>
        <h1>Affichage de la table Profil : </h1>
        <PostBioProfil />
        <h1>Insertion de données Bio dans la table Profil</h1>
        <GetBioprofil />
        <h1>modification des données</h1>
        <PutProfil />
        <h1>Post Ingrédients</h1>
        <Postingredients />

      </>
    )
  }
}


export default Profilpage;
