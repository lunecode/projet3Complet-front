import React, { Component } from 'react';
import PostProfilInfo from '../components/ProfilComponents/PostProfilInfo';

// import PutProfilInfo from '../components/ProfilComponents/PutProfilInfo';
import Footer from'../components/Footer';
import Navbar from '../components/Navbar';

class ProfilPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <PostProfilInfo />
          
        {/* <p>Modification des données de la table profil pour profilInfo</p>
        <PutProfilInfo /> */}
        <Footer />   
        </>
    )
  }
}


export default ProfilPage;
