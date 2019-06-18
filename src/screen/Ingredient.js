import React, { Component } from 'react';
import PostProfilInfo from '../components/ProfilComponents/PostProfilInfo'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PostEnumProfil from '../components/ProfilComponents/PostEnumProfil';
import PostBioProfil from '../components/ProfilComponents/PostBioProfil';
import PostIngedients from '../components/ProfilComponents/PostIngedients';
import Socialprofil from '../components/ProfilComponents/Socialprofil';
import "./Ingredient.scss"



class Ingrédients extends Component {
  render() {
    return (
      <div className="pageprofil">

        <Navbar/>  
        <PostProfilInfo />
        <PostEnumProfil />
        <PostBioProfil/>
        <PostIngedients/>
        <Socialprofil/>
        <Footer/>
      </div>
    )
  }
}


export default Ingrédients;