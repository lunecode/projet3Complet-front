import React, { Component } from 'react';
import Getdestination from '../components/HomeComponents/Getdestination';
import Getplan from '../components/HomeComponents/Getplan';




class HomePage extends Component {
    render() {
      return (
        <>
          <p>Affichage des videos selon la destination </p>
          <Getdestination />
          <Getplan />


        </>
      )
    }
  }
  
  
  export default HomePage;
  