import React, { Component } from 'react';
import PostVideo from '../components/HomeComponents/PostVideo';
import Display from '../components/HomeComponents/Display';


class UploadPage extends Component {
  render() {
    return (
      <>
        <p>Affichage de la table general_video : </p>
        <Display />
        <p>Insertion de données dans la table general_video</p>
        <PostVideo />
      </>
    )
  }
}


export default UploadPage;
