import React, { Component } from 'react';

import PostSecurityProfil from '../components/ProfilComponents/PostSecurityProfil'
// import PutProfilInfo from '../components/ProfilComponents/PutProfilInfo';
import Footer from'../components/Footer';
import Navbar from '../components/Navbar';

class SecurityProfil extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PostSecurityProfil />
        {/* <p>Modification des données de la table profil pour profilInfo</p>
        <PutProfilInfo /> */}
        <Footer />   
        </>
    )
  }
}


export default SecurityProfil;
