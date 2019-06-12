import React, { Component } from 'react';
import PostVideo from '../../components/uploadComponents/PostVideo';
import GetVideo from '../../components/uploadComponents/GetVideo';
// import PutVideo from '../../components/uploadComponents/PutVideo';
// import DeleteVideo from '../../components/uploadComponents/DeleteVideo';
import ContinentJson from './Continent';


class UploadVideo extends Component {
  render() {
    return (
      <>
      {/* <ContinentJson /> */}
        <h1>Affichage de la table general_video :</h1>
        <GetVideo />
        <h1>Insertion de données dans la table general_video</h1>
        <PostVideo />
        {/* <h1>Modification de données dans la table general_video</h1>
        <PutVideo />
        <h1>Suppression des données de la table general_video</h1>
        <DeleteVideo /> */}
      </>
    )
  }
}


export default UploadVideo;
