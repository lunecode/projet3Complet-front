import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import UploadPage from './screen/UploadPage';
import Home from './screen/Home';


class App extends Component {
  render() {
    return (
      <>
        {/* <UploadPage /> */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </>
    )
  }
}


export default App;
