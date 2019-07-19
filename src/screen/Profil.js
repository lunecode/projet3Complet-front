import React, { Component } from 'react';
import jwt from 'jsonwebtoken'
import AutoriseContact from '../components/ProfilComponents/AutoriseContact'
import PostProfilInfo from '../components/ProfilComponents/PostProfilInfo'
import PostEnumProfil from '../components/ProfilComponents/PostEnumProfil';
import PostBioProfil from '../components/ProfilComponents/PostBioProfil';
import PostIngedients from '../components/ProfilComponents/PostIngedients';
import Socialprofil from '../components/ProfilComponents/Socialprofil';
import { NavLink } from 'react-router-dom';


import "./Profil.scss"
import "../components/ProfilComponents/PostProfilInfo.css"
import axios from "axios"



class Profil extends Component {
  state={
    // lastname:"",
    // firstname:"",
    // pseudo:"",
    // identity:"",
    // email:"",
    // location:"",
    // birth_date:"",
    // type:"",
    // position:"",
    // profil_link:"",
    // nb_countries_visited:"",
    // profile_picture:"",
    // profil:"",
    // bio:"",
    // ingredients: ["Aventurier dabord", "Les copains dabord", "Escapade romantique", "En famille", "Digital nomad", "Iles  Plages", "Montagnes  Campagnes", "Safari & Animaux", "Grandes villes", "En foret", "Sport & Aventures", "Festivals & Musique", "Plaisir culinaire", "Histoire & Culture", "Spiritualité", "Humanitaire", "Ecotourise", "luxe", "En sac à dos", "Rencontres dexceptions"],
    // ingredients:[],
    // // option_msg:"",
    // facebook_link:"",
    // instagram_link:"",
    // website_link:"",
    // inscription_date:"",
    // inscription_type:"",
    // password:"",
    // password_forget:"",
    // checked_option_msg:"",
    // is_checked_her:"",
    // is_checked_team:"",
    // is_checked_him:"",
    // New_password:"",



  }
 


  submitHandler = e => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const tokenDecoded = jwt.decode(token)
    const idProfilDecoded = tokenDecoded.id_profil
    console.log(idProfilDecoded)

    axios.put(`http://localhost:3000/profil/update_profil/${idProfilDecoded}`, this.state)
      .then(response => {
        console.log(response)
      })
    //   .then( 
    //     //Pour que  button submit renvoie vers la page ProfilDescription
    //     this.props.history.push("/ProfilDescription"),
    //     //permet de rafraichir la page pour afficher le Get
    //     window.location.reload(true)
    //  )
      .catch(error => {
        console.log(error)
      })
  }


  // submitHandler = e => {
  //   e.preventDefault()
  //   const token = localStorage.getItem('token')
  //   const tokenDecoded = jwt.decoded(token)
  //   const idProfilDecoded = tokenDecoded.id_profil

  //   console.log(idProfilDecoded)
  //   axios.put(`http://localhost:3000/profil/update_profil/${idProfilDecoded}`, this.state)
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }




  handleCheckbox = (e) => {
    e.preventDefault()
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  //les Enumes de la table profile.//
  profil1 = () => {
    this.setState({ profil: 1 })
  }
  profil2 = () => {
    this.setState({ profil: 2 })
  }
  profil3 = () => {
    this.setState({ profil: 3 })
  }
  profil4 = () => {
    this.setState({ profil: 4 })
  }
  profil5 = () => {
    this.setState({ profil: 5 })
  }


 
  //les Enumes ingredients//
  Enum1 = () => {
    const ingredients = this.state.ingredients
   
    this.state.ingredients.push("Aventurier dabord")
    this.setState({ ingredients: ingredients })

    
  }
  Enum2 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Les copains dabord")
    this.setState({ ingredients: ingredients})
  }
  Enum3 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Escapade romantique")
    this.setState({ ingredients: ingredients })
  }
  Enum4 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("En famille")
    this.setState({ ingredients: ingredients})
  }
  Enum5 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Digital nomad")
    this.setState({ ingredients: ingredients})
  }
  Enum6 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Iles  Plages")
    this.setState({ ingredients: ingredients})
  }
  Enum7 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Iles  Plages")
    this.setState({ ingredients: ingredients})
  }
  Enum8 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Montagnes  Campagnes")
    this.setState({ ingredients: ingredients})
  }
  Enum9 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Safari & Animaux")
    this.setState({ ingredients: ingredients})
  }
  Enum10 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Grandes villes")
    this.setState({ ingredients: ingredients})
  }
  Enum11 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("En foret")
    this.setState({ ingredients: ingredients})
  }

  Enum12 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Sport & Aventures")
    this.setState({ ingredients: ingredients})
  }
  Enum13 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Festivals & Musique")
    this.setState({ ingredients: ingredients})
  }
  Enum14 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Plaisir culinaire")
    this.setState({ ingredients: ingredients})
  }
  Enum15 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Histoire & Culture")
    this.setState({ ingredients: ingredients})
  }
  Enum16 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Spiritualité")
    this.setState({ ingredients: ingredients})
  }
  Enum17 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Humanitaire")
    this.setState({ ingredients: ingredients})
  }
  Enum18 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Ecotourise")
    this.setState({ ingredients: ingredients})
  }
  Enum19 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("luxe")
    this.setState({ ingredients: ingredients})
  }
  Enum20 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("En sac à dos")
    this.setState({ ingredients: ingredients})
  }
  Enum21 = () => {
    const ingredients = this.state.ingredients
    ingredients.push("Rencontres dexceptions")
    this.setState({ ingredients: ingredients})
  }
//ouvrir le fichier et le convertir  en binair


 
  render() {
    console.log(this.state);
 
  

    return (
      <div className="pageprofil" >
        <form onSubmit={this.submitHandler}>
          <PostProfilInfo
            {...this.state}
            handleCheckbox={this.handleCheckbox}
            changeHandler={this.changeHandler} 
            handelchange={this.handelchange} 
           
          />

          <PostEnumProfil
            {...this.state}
            profil1={this.profil1}
            profil2={this.profil2}
            profil3={this.profil3}
            profil4={this.profil4}
            profil5={this.profil5}
            changeHandler={this.changeHandler}
          />

          <PostBioProfil
            {...this.state}
            changeHandler={this.changeHandler}
          />

          <PostIngedients
            {...this.state}
            Enum1={this.Enum1}
            Enum2={this.Enum2}
            Enum3={this.Enum3}
            Enum4={this.Enum4}
            Enum5={this.Enum5}
            Enum6={this.Enum6}
            Enum7={this.Enum7}
            Enum8={this.Enum8}
            Enum9={this.Enum9}
            Enum10={this.Enum10}
            Enum11={this.Enum11}
            Enum12={this.Enum12}
            Enum13={this.Enum13}
            Enum14={this.Enum14}
            Enum15={this.Enum15}
            Enum16={this.Enum17}
            Enum18={this.Enum18}
            Enum19={this.Enum19}
            Enum20={this.Enum20}
            Enum21={this.Enum21}
            Enum22={this.Enum22}
            changeHandler={this.changeHandler}
            converti={this.converti}
          />

          <AutoriseContact
            {...this.state}
            handleCheckbox={this.handleCheckbox}
          />
          <Socialprofil
            {...this.state}
            changeHandler={this.changeHandler}
          />
          
          <div className="save-btn">

      <button type="submit" onSubmit={this.submitHandler}>SAUVEGARDER</button>  
      {/* <NavLink to="/ProfilDescription"><button type="submit" onSubmit={this.submitHandler}>SAUVEGARDER</button></NavLink>  */}
      {/* <button type="submit" onSubmit={this.submitHandler}  onClick={this.functionName}>SAUVEGARDER</button> */}
          </div>
        </form>
      </div>
    )
  }
}

export default Profil;
