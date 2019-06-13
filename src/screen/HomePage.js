import React, { Component } from 'react';
import Getnexdestination from '../components/HomeComponents/Getnextdestination';
import Getplan from '../components/HomeComponents/Getplan';



class HomePage extends Component {
    render() {
      return (
        <>
          <p>Affichage des videos selon la destination </p>
          <Getnexdestination />
          <Getplan />


        </>
      )
    }
  }
  
  
  export default HomePage;
  