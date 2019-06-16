import React, { Component } from 'react';
import axios from 'axios';
import Autre from "../../Images-tripitto/imageProfil/Autre.png"
import Créateurdecontenu from "../../Images-tripitto/imageProfil/Créateurdecontenu.png"
import Passionnedevoyage from "../../Images-tripitto/imageProfil/Passionnédevoyage.png"
import './PostEnumProfil.scss'
import Photographevidéaste from "../../Images-tripitto/imageProfil/Photographe&vidéaste.png"
import Blogueurdevoyage from "../../Images-tripitto/imageProfil/Bloggeurdevoyage.png"
import Idea from "../../Images-tripitto/Icon/Idea.png"

class PostEnumProfil extends Component {
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

  render() {
    return (
<div className="Profil_inscription">

        <div className="Titre">
        <h3>Dites en un peu plus sur vous</h3>
        <p> <img src={Idea} alt="icon" />Cela apparaitra sur votre page de profil visible par tous</p>
        <h4>Vous êtes plutôt</h4>
        </div>

  <div className="Profil_Pictures">
        <div className="Profil_picture1">
        <img onClick={() => this.handleClick("Passionné de voyage")} src={Passionnedevoyage}
        name="Passionnédevoyage"
        alt="Passioné de voyage"
        />
        Passionné de voyage
        </div>


        <div className="Profil_picture2">
        <img onClick={() => this.handleClick("Créateur de contenu")} src={Créateurdecontenu}
        name="Créateurdecontenu"
        alt="Créateur de contenu"
        />
        Créateur de contenu
        </div>


        <div className="Profil_picture3">
        <img onClick={() => this.handleClick("Blogueur de voyage")} src={Blogueurdevoyage}
        name="Blogueurdevoyage"
        alt="Blogueur de voyage"
        />
        Blogueur de voyage
        </div>


        <div className="Profil_picture4">
        <img onClick={() => this.handleClick("Photograph & vidéaste")} src={Photographevidéaste}
        name="Photographvidéaste"
        alt="Photograph & vidéaste"
        />
        Photograph & vidéaste
        </div>

        <div className="Profil_picture5">
        <img onClick={() => this.handleClick("Autre")} src={Autre}
        name="Autre"
        alt="L"
        />
        Autre
        </div>



        </div>
      </div>
    );
  }
}


export default PostEnumProfil;