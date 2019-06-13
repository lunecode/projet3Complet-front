import React, { Component } from 'react';
import ProfilPage from './screen/ProfilPage'
// import UploadPage from './screen/UploadPage';
import Home from './screen/Home';


class App extends Component {
  render() {
    return (
      <>
     
        <Home />   
        <ProfilPage />
        {/* <UploadPage /> */}
        
      </>
    )
  }
}


export default App;
