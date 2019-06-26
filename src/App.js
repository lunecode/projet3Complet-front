import React, { Component } from 'react';
import Security from './screen/Security';
import Profil from './screen/Profil';
import Video from './screen/Video';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import UploadInformation from './screen/UploadPage/UploadTravelInformation';
import UploadVideo from './screen/UploadPage/UploadVideo';
import UploadTravelStep from './screen/UploadPage/UploadTravelStep';
import Home from './screen/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';





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
            <Route path="/Video" component={Video}/>
            <Route path="/uploadVideo" component={UploadVideo} ></Route>
            <Route path="/uploadInformation" component={UploadInformation} ></Route>
            <Route path="/uploadTravelStep" component={UploadTravelStep} ></Route>
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
