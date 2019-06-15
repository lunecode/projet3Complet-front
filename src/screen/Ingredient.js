import React, { Component } from 'react';
import Postingredients from '../components/ProfilComponents/Postingredients';
import PostProfilInfo from '../components/ProfilComponents/PostProfilInfo'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class Ingrédients extends Component {
  render() {
    return (
      <>

        <Navbar/>  
        <PostProfilInfo />
              <h1>Dites un peu plus ur vous</h1>
        <Postingredients />

       <Footer/>
      </>
    )
  }
}


export default Ingrédients;