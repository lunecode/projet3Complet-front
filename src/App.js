import React, { Component } from 'react';
import DisplayVideo from './components/DisplayVideo';
import PostVideo from './components/PostVideo';
// import DisplayVideo from './components/displayvideo';


class App extends Component {
  state = {
    getvideos: [],
  };


  // Permet l'affichage de la table general_video via un get

  componentDidMount() {
    fetch('http://localhost:3000/videoUpload/getdatavideo')
      .then(res => res.json())
      .then(json => {
        this.setState({
          getvideos: json,
        })
      })
  }


  render() {
    return (
      <>
        <p>Affichage de la table general_video : </p>
        <DisplayVideo videos={this.state.getvideos} />

        <PostVideo />
      </>
    )
  }
}


export default App;
