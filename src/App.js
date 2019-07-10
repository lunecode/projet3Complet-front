import React, { Component } from 'react';
// import Security from './screen/Security';
// import ProfilDescription from './screen/ProfilDescription/ProfilDescription';
import Security from './screen/Security';
import Profil from './screen/Profil';
import Video from './screen/Video';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import UploadInformation from './screen/UploadPage/UploadTravelInformation';
import UploadVideo from './screen/UploadPage/UploadVideo';
import UploadTravelStep from './screen/UploadPage/UploadTravelStep';
import Notifications from './screen/Notifications'
import Abonnements from './screen/Abonnements'
import Abonne from './screen/Abonne'
// import ProfilDescription from './screen/ProfilDescription/ProfilDescription';
import Home from './screen/Home';
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
             {/* les routes de page Profil */}
            <Route path="/" exact component={Home}  ></Route>
            <Route path="/Profil" exact component={Profil}></Route>
            <Route path="/Video" exact component={Video}></Route>
            <Route path="/Abonnements"exact component={Abonnements} ></Route>
            <Route path="/Abonnés" exact component={Abonne} ></Route>
            <Route path="/Notifications" exact component={Notifications} ></Route>
            <Route path="/Security" exact component={Security} ></Route>
                     {/* ***** */}
            <Route path="/uploadVideo" component={UploadVideo} ></Route>
            <Route path="/uploadInformation" component={UploadInformation} ></Route>
            <Route path="/uploadTravelStep" component={UploadTravelStep} ></Route>
            <Route path="/playVideo" component={PlayVideo} ></Route>
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
