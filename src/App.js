import React, { Component } from 'react';
import Security from './screen/Security';
import Profil from './screen/Profil';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import UploadInformation from './screen/UploadPage/UploadTravelInformation';
import UploadVideo from './screen/UploadPage/UploadVideo';
import UploadTravelStep from './screen/UploadPage/UploadTravelStep';
import Notifications from './screen/Notifications'
import Abonnements from './screen/Abonnements'
import Abonne from './screen/Abonne'
// import ProfilDescription from './screen/ProfilDescription/ProfilDescription';
import Home from './screen/Home';
// import PlayVideo from './screen/PlayVideo';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PlayVideo from './screen/PlayVideo';






class App extends Component {
  render() {
    return (
<>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/Profil" component={Profil}/>
            <Route path="/Security" component={Security}/>
            <Route path="/uploadVideo" component={UploadVideo} ></Route>
            <Route path="/Notifications" component={Notifications} ></Route>
            <Route path="/uploadInformation" component={UploadInformation} ></Route>
            <Route path="/uploadTravelStep" component={UploadTravelStep} ></Route>
            <Route path="/playVideo" component={PlayVideo} ></Route>
            <Route path="/Abonnements" component={Abonnements} ></Route>
            <Route path="/Abonnés" component={Abonne} ></Route>
            <Route component={Error}></Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
