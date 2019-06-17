import React, { Component } from 'react';
import UploadPage from './screen/UploadPage/UploadPage';
import ProfilDescription from './screen/ProfilDescription/ProfilDescription';
// import UploadTravelStep from './screen/UploadPage/UploadTravelStep';
import { Route, Switch } from 'react-router-dom';
// import UploadPage from './screen/UploadPage';
import Home from './screen/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <>
       <Navbar />
        {/* <UploadPage /> */}
        <ProfilDescription />
        <Footer />
        <Switch>
           <Route exact path="/" component={Home} />
        </Switch>
      </>
    )
  }
}

export default App;
