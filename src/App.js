import React, { Component } from 'react';
import UploadPage from './screen/UploadPage/UploadPage';
import ProfilDescription from './screen/ProfilDescription/ProfilDescription';
// import UploadTravelStep from './screen/UploadPage/UploadTravelStep';


class App extends Component {
  render() {
    return (
      <>
        <ProfilDescription />
        <UploadPage />
      </>
    )
  }
}

export default App;
