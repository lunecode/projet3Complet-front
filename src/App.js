import React, { Component } from 'react';
import UploadPage from './screen/UploadPage';
import HomePage from './screen/HomePage';
// import UploadPage from './screen/UploadPage';
import Home from './screen/Home';


class App extends Component {
  render() {
    return (
      <>
        <HomePage />
        <UploadPage />
  
        <Home />
        {/* <UploadPage /> */}
        
      </>
    )
  }
}


export default App;
