import React, { Component } from 'react';
import Postingredients from '../components/ProfilComponents/Postingredients';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class Ingrédients extends Component {
  render() {
    return (
      <>

        <Navbar/>  
              <h1>Post Ingrédients</h1>
        <Postingredients />
       <Footer/>
      </>
    )
  }
}


export default Ingrédients;