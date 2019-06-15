import React, { Component } from 'react';
import axios from 'axios';
import Autre from "../../Images-tripitto/imageProfil/Autre.png"
import Créateurdecontenu from "../../Images-tripitto/imageProfil/Créateurdecontenu.png"
import Passionnedevoyage from "../../Images-tripitto/imageProfil/Passionnédevoyage.png"
import './Postingrédients.scss'
import Photographevidéaste from "../../Images-tripitto/imageProfil/Photographe&vidéaste.png"
import Blogueurdevoyage from "../../Images-tripitto/imageProfil/Bloggeurdevoyage.png"

class Postingrédients extends Component {
  state = {
    profil: {
      Passionnedevoyage: "Passionné de voyage",
      Créateurdecontenu: "Créateur de contenu",
      PhotographeVidéaste: "Photographe & Vidéaste",
      Blogueurvoyage: "Blogueur voyage",
      Autre: "Autre"
    }
  }
  handleClick = (profil) => {
    axios.post('http://localhost:3000/profil/insert_profil', this.state)
      .then(response => {
        console.log({ response })
      })
      .catch(error => {
        console.log({ error })
      })

  }
  // 'Passionné de voyage','Créateur de contenu','Photographe & Vidéaste','Blogueur voyage','Autre'
  render() {
    return (
      <div className="Profilenum">
        <img className="pictureProfil" onClick={() => this.handleClick("Passionné de voyage")} src={Passionnedevoyage}
          name="Passionnédevoyage"
          alt="Passioné de voyage"
        />
        <img className="pictureProfil" onClick={() => this.handleClick("Créateur de contenu")} src={Créateurdecontenu}
          name="Créateurdecontenu"
          alt="Créateur de contenu"
        />
        <img className="pictureProfil" onClick={() => this.handleClick("Blogueur de voyage")} src={Blogueurdevoyage}

          name="Blogueurdevoyage"
          alt="Blogueur de voyage"

        />
        <img className="pictureProfil" onClick={() => this.handleClick("Photograph & vidéaste")} src={Photographevidéaste}
          name="Photographvidéaste"
          alt="Photograph & vidéaste"
        />

        
        <img className="pictureProfil" onClick={() => this.handleClick("Autre")} src={Autre}
          name="Autre"
          alt="L"
        />
      </div>
    );
  }
}


export default Postingrédients;