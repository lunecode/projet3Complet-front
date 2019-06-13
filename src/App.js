import React, { Component } from 'react';
import UploadPage from './screen/UploadPage';
import ProfilPage from './screen/ProfilPage';
import UploadVideo  from './screen/UploadVideo';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Ingrédients from './screen/Ingredient';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <div>
             <Route exact path="/" component={ProfilPage}/>
           <Route exact path="/uploadvideo" component={UploadVideo} />
          <Route exact path="/UploadPage" component={UploadPage}/>
          <Route exact path="/Ingrédients" component={Ingrédients}/>
            </div>
        </Router>
       
       
     
      </div>
    )
  }
}


export default App;
