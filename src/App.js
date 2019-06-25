import React, { Component } from 'react';
// import Security from './screen/Security';
import ProfilDescription from './screen/ProfilDescription/ProfilDescription';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import UploadInformation from './screen/UploadPage/UploadTravelInformation';
import UploadVideo from './screen/UploadPage/UploadVideo';
import UploadTravelStep from './screen/UploadPage/UploadTravelStep';


// import ProfilDescription from './screen/ProfilDescription/ProfilDescription';
import Home from './screen/Home';
// import PlayVideo from './screen/PlayVideo';

import Navbar from './components/Navbar';
import Footer from './components/Footer';



class App extends Component {
 render() {
   return (


<>
     <BrowserRouter>
       <div>
         <Navbar />   
         <ProfilDescription />     
         <Switch>
           <Route path="/" component={Home} exact></Route>
           <Route path="/ProfilDescription" component={ProfilDescription} ></Route>
           {/* <Route path="/Security" component={Security}/> */}
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
