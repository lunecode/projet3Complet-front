import React, { Component } from 'react';
import PostVideo from '../../components/HomeComponents/PostVideo';
import GetVideo from '../../components/HomeComponents/GetVideo';
import PutVideo from '../../components/HomeComponents/PutVideo';
import DeleteVideo from '../../components/HomeComponents/DeleteVideo';


class UploadPage extends Component {
  render() {
    return (
      <>
        <h1>Affichage de la table general_video :</h1>
        <GetVideo />
        <h1>Insertion de données dans la table general_video</h1>
        <PostVideo />
        <h1>Modification de données dans la table general_video</h1>
        <PutVideo />

       {/* Problem with the foreign key  */}
        <h1>Suppression des données de la table general_video</h1>
        <DeleteVideo />        
      </>
    )
  }
}


export default UploadPage;
