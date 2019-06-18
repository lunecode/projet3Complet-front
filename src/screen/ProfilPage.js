import React, { Component } from 'react';
import PostBioProfil from '../components/ProfilComponents/PostBioProfil';
import GetBioprofil from '../components/ProfilComponents/GetBioProfil';
import PutProfil from '../components/ProfilComponents/PutProfil'
import PostProfilInfo from '../components/ProfilComponents/PostProfilInfo';
import PostEnumProfil from '../components/ProfilComponents/PostEnumProfil';


// import PutProfilInfo from '../components/ProfilComponents/PutProfilInfo';
import Footer from'../components/Footer';
import Navbar from '../components/Navbar';

class ProfilPage extends Component {
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
       <PostEnumProfil />
       <PostProfilInfo />
        </>
    )
  }
}


export default ProfilPage;
