import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';

// import UploadVideo from './screen/UploadPage/UploadVideo';

// import TestProfilEnum from './screen/TestProfilEnum';
// import ProfilDescription from './screen/ProfilDescription/ProfilDescription';
// import UploadInformation from './screen/UploadPage/UploadTravelInformation';
// import UploadTravelStep from './screen/UploadPage/UploadTravelStep';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import UploadPage from './screen/UploadPage';
// import Home from './screen/Home';

import PlayVideo from './screen/PlayVideo';



class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      {/* <TestProfilEnum /> */}
        {/* <ProfilDescription /> */}

        {/* <UploadVideo /> */}

        {/* <UploadInformation /> */}
        {/* <UploadTravelStep /> */}
        {/* <Home /> */}
        {/* <UploadPage /> */}

        <PlayVideo />

        {/* <Switch>
        <Route exact path="/" component={PlayVideo}/>
        </Switch> */}
        {/* <Home /> */}
        {/* <UploadPage /> */}
        {/* <Switch>
          <Route exact path="/" component={Home} />
        </Switch> */}
        <Footer/>
      </>
    )
  }
}

export default App;
