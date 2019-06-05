import React, { Component } from 'react';
import PostVideo from '../components/UploadComponents/PostVideo';
import Display from '../components/UploadComponents/Display';
import PutVideo from '../components/UploadComponents/PutVideo';


class UploadPage extends Component {
  render() {
    return (
      <>
        <p>Affichage de la table general_video : </p>
        <Display />
        <p>Insertion de données dans la table general_video</p>
        <PostVideo />
        <p>Modification de données dans la table general_video</p>
        <PutVideo />
      </>
    )
  }
}


export default UploadPage;
