import React, { Component } from 'react';
// import Getdestination from '../components/HomeComponents/Getdestination';

import Getnexdestination from '../components/HomeComponents/Getnextdestination';
import Getplan from '../components/HomeComponents/Getplan';



class HomePage extends Component {
    render() {
      return (
        <>
          <p>Affichage des videos selon la destination </p>
          {/* <Getdestination /> */}
          <Getnexdestination />
          <Getplan />


        </>
      )
    }
  }
  
  
  export default HomePage;
  