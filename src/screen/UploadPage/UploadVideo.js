import React, { Component } from 'react';

import PostVideo from '../../components/uploadComponents/PostVideo';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import GetVideo from '../../components/uploadComponents/GetVideo';
// import PutVideo from '../../components/uploadComponents/PutVideo';
// import DeleteVideo from '../../components/uploadComponents/DeleteVideo';
// import TestContinentCountry from '../../components/uploadComponents/TestContinentCountry';



class UploadVideo extends Component {
  render() {
    return (
      <>
      {/* <TestContinentCountry /> */}

        {/* <h1>Affichage de la table general_video :</h1> */}
        {/* <Navbar />
        <GetVideo />
        <Footer /> */}
        {/* <h1>Insertion de données dans la table general_video</h1> */}
        
        <Navbar />
        <PostVideo />
        <Footer />

        {/* <h1>Modification de données dans la table general_video</h1>
        <PutVideo /> */}

        {/* <h1>Suppression des données de la table general_video</h1>
        <DeleteVideo /> */}
      </>
    )
  }
}


export default UploadVideo;
