import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// import UploadInformation from './screen/UploadPage/UploadTravelInformation';
// import UploadVideo from './screen/UploadPage/UploadVideo';
import UploadTravelStep from './screen/UploadPage/UploadTravelStep';


// import ProfilDescription from './screen/ProfilDescription/ProfilDescription';
// import Home from './screen/Home';
// import PlayVideo from './screen/PlayVideo';

import Navbar from './components/Navbar';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <>

        <Navbar />
        <UploadTravelStep />
        {/* <UploadVideo /> */}
        {/* <UploadInformation /> */}


        {/* <Home /> */}
        {/* <PlayVideo /> */}
        {/* <Home /> */}
        {/* <ProfilDescription /> */}
        <Footer />
      </>



      // <BrowserRouter>
      //   <div>
      //     <Switch>
      //       <Route path="/" component={UploadVideo} exact></Route>
      //       <Route path="/uploadInformation" component={UploadInformation} ></Route>
      //       <Route component={Error}></Route>
      //     </Switch>
      //   </div>
      // </BrowserRouter>

    )
  }
}

export default App;
