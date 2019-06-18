import React, { Component } from 'react';
// import GetTravelInformation from '../../components/UploadComponents/GetTravelInformation';
// import PutTravelInformation from '../../components/UploadComponents/PutTravelInformation';
// import DeleteTravelInformation from '../../components/UploadComponents/DeleteTravelInformation';
import PostTravelInformation from '../../components/uploadComponents/PostTravelInformation';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';



class UploadInformation extends Component {
  render() {
    return (
      <>
        {/* <h1>Affichage de la table travel information :</h1>
        <GetTravelInformation /> */}
        <PostTravelInformation />
        {/* <h1>Modification de la table travel information :</h1>
        <PutTravelInformation /> */}
        {/* <h1>Suppression des données de la table Travel information</h1>
        <DeleteTravelInformation /> */}
      </>
    )
  }
}


export default UploadInformation;
