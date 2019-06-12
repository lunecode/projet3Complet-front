import React, { Component } from 'react';
import axios from 'axios';

class Postingrédients extends Component {
  state = {
    profil:{
      passionédevoyage:"passioné de voyage",
      Créateurdecontenu:"Créateur de contenu",
      PhotographeetVidéaste:"Photographe et Vidéaste",
      Bloggeurvoyage:"Bloggeur voyage",
      Autre:"Autre"
    }
  }
  handleClick=(e) =>{
    e.preventDefault();
    e = e || window.event;  //récupère la structure des données d'événement dans e
    e = e.target || e.srcElement;//obtenir la source de l'événement
    console.log(e.name);
     axios.post('http://localhost:3000/profil/insert_profil', this.value) 
    .then(response => {
     console.log(response)
     })
    .catch(error => {
     console.log(error)
  })  
//  console.log("tttt",this.state.profil.);
  }
  render() {
  
    return (
      <div onClick={this.handleClick}>
        <img src="https://i.ibb.co/NSqJfc5/Capture-d-e-cran-2019-06-09-a-21-31-34.png"
          name="passioné de voyage"
          value={this.state.profil.passionédevoyage}
          alt="L"
        />
        <img src="https://i.ibb.co/BC1SvVL/Capture-d-e-cran-2019-06-09-a-21-31-44.png"
          name="Créateur de contenu"
          value={this.state.profil.Créateurdecontenu}
          alt="L"
        />
        <img src="https://i.ibb.co/0m2HBgp/Capture-d-e-cran-2019-06-09-a-21-32-15.png"
          name="Photographe et Vidéaste"
          value={this.state.profil.PhotographeetVidéaste}
          alt="L"
        />
        <img src="https://i.ibb.co/XyKHRzx/Capture-d-e-cran-2019-06-09-a-21-32-29.png"
          iname="Bloggeur voyage"
          value={this.state.profil.Bloggeurvoyage}
          alt="L"
        />
        <img src="https://i.ibb.co/brkcGx5/Capture-d-e-cran-2019-06-09-a-21-32-50.png"
          name="Autre"
          value={this.state.profil.Autre}
          alt="L"
        />

      </div>
    );
  }
}


export default Postingrédients;