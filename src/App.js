import React, { Component } from 'react';
import UploadPage from './screen/UploadPage';
import UploadVideo  from './screen/UploadVideo';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Profil from './screen/Profil';
// import UploadPage from './screen/UploadPage';
import Home from './screen/Home';
import Security from './screen/Security';

class App extends Component {
  render() {
    return (
      <div>

        <Router>
            <div>
          <Route exact path="/Home" component={Home}/> 
          <Route exact path="/Profil" component={Profil}/>
          <Route exact path="/Security" component={Security}/>
           <Route exact path="/uploadvideo" component={UploadVideo} />
          <Route exact path="/UploadPage" component={UploadPage}/>

            </div>
        </Router>
       
       
     
      </div>
      
    )
  }
}


export default App;
