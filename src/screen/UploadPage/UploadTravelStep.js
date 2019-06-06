import React, { Component } from 'react';
import GetTravelStep from '../../components/UploadComponents/GetTravelStep';
// import PostTravelStep from '../../components/UploadComponents/PostTravelStep';



class UploadTravelStep extends Component {
  render() {
    return (
      <>
        <h1>Affichage de la table travel information :</h1>
        <GetTravelStep />

        {/* <h1>Insertion dans la table travel information :</h1> */}
        {/* <PostTravelStep /> */}

      </>
    )
  }
}


export default UploadTravelStep;
