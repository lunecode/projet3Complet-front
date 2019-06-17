import React, { Component } from 'react';
import GetTravelInformation from '../../components/UploadComponents/GetTravelInformation';
import PostTravelInformation from '../../components/UploadComponents/PostTravelInformation';
import PutTravelInformation from '../../components/UploadComponents/PutTravelInformation';
import DeleteTravelInformation from '../../components/UploadComponents/DeleteTravelInformation';



class UploadInformation extends Component {
  render() {
    return (
      <>
        <h1>Affichage de la table travel information :</h1>
        <GetTravelInformation />
        <h1>Insertion dans la table travel information :</h1>
        <PostTravelInformation />
        <h1>Modification de la table travel information :</h1>
        <PutTravelInformation />
        <h1>Suppression des données de la table Travel information</h1>
        <DeleteTravelInformation />
      </>
    )
  }
}


export default UploadInformation;
