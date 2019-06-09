import React, { Component } from 'react';
import UploadPage from './screen/UploadPage';
import ProfilPage from './screen/ProfilPage';
import UploadVideo  from './screen/UploadVideo';

class App extends Component {
  render() {
    return (
      <div>
      <UploadVideo/>
        <UploadPage />
        <ProfilPage/>
      </div>
    )
  }
}


export default App;
