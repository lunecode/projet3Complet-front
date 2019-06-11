import React, { Component } from 'react';
import GetTravelStep from '../../components/UploadComponents/GetTravelStep';
import PostTravelStep from '../../components/UploadComponents/PostTravelStep';
import PutTravelStep from '../../components/UploadComponents/PutTravelStep';
import DeleteTravelStep from '../../components/UploadComponents/DeleteTravelStep';



class UploadTravelStep extends Component {
  render() {
    return (
      <>
        <h1>Affichage des datas la table travel_step :</h1>
        <GetTravelStep />
        <h1>Insertion de data dans la table travel_step</h1>
        <PostTravelStep />
        <h1>Modification des datas de la table travel_step</h1>
        <PutTravelStep />
        <h1>Suppression d'une data de la table travel_step</h1>
        <DeleteTravelStep />

      </>
    )
  }
}


export default UploadTravelStep;
