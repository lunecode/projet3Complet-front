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
import ProfilDescription from './screen/ProfilDescription/ProfilDescription';
import Afrique_video from './screen/HomePage/Afrique_video';
import Asie_video from './screen/HomePage/Asie_video';
import Amerique_video from './screen/HomePage/Amerique_video';
import Europe_video from './screen/HomePage/Europe_video';
import Autres_video from './screen/HomePage/Autres_video';

import Home from './screen/Home';
import PlayVideo from './screen/PlayVideo/PlayVideo';
import Favoris from './screen/Favoris';
import Videaste from './screen/Videaste';
import Footer from './components/NavbarFooterModal/Footer';
import Navbar from './components/NavbarFooterModal/Navbar';

import './App.css'


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
              <Route path="/Profil" component={Profil}></Route>
              <Route path="/Video" component={Video}></Route>
              <Route path="/Abonnements" exact component={Abonnements} ></Route>
              <Route path="/Abonnés" exact component={Abonne} ></Route>
              <Route path="/Notifications" exact component={Notifications} ></Route>
              <Route path="/Security" exact component={Security} ></Route>
              {/* ***** */}
              <Route path="/ProfilDescription" exact component={ProfilDescription} ></Route>
              <Route path="/Favoris" component={Favoris} ></Route>
              <Route path="/uploadVideo" component={UploadVideo} ></Route>
              <Route path="/uploadInformation" component={UploadInformation} ></Route>
              <Route path="/uploadTravelStep" component={UploadTravelStep} ></Route>
              <Route path="/playVideo" component={PlayVideo} ></Route>
              {/* Page Videaste */}
              <Route path="/Videaste" component={Videaste} ></Route>
              {/* ***** */}
              {/* Afrique_video*/}
              <Route path="/Afrique_video" component={Afrique_video} ></Route>
              <Route path="/Asie_video" component={Asie_video} ></Route>
              <Route path="/Amerique_video" component={Amerique_video} ></Route>
              <Route path="/Europe_video" component={Europe_video} ></Route>
              <Route path="/Autres_video" component={Autres_video} ></Route>
              {/* ***** */}
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