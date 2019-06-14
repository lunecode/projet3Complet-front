import React, { Component } from 'react';
import axios from 'axios';

class Postingrédients extends Component {
  state ={
    profil:{Passionnedevoyage:"Passionné de voyage",
    Créateurdecontenu:"Créateur de contenu",
    PhotographeVidéaste:"Photographe & Vidéaste",
    Blogueurvoyage:"Blogueur voyage",
    Autre:"Autre"

   }
  }
  handleClick = (profil) => {

    axios.post('http://localhost:3000/profil/insert_profil', this.state)
      .then(response => {
        console.log({response})
      })
      .catch(error => {
        console.log({error})
      })
  }
  // 'Passionné de voyage','Créateur de contenu','Photographe & Vidéaste','Blogueur voyage','Autre'
  render(){
    return (
      <div>
    
        <img  onClick={() => this.handleClick("Passionné de voyage")} src="https://i.ibb.co/NSqJfc5/Capture-d-e-cran-2019-06-09-a-21-31-34.png"
          name="Passionnédevoyage"
          alt="L"
        />
   

  
         <img onClick={() => this.handleClick("Créateur de contenu")}src="https://i.ibb.co/BC1SvVL/Capture-d-e-cran-2019-06-09-a-21-31-44.png"
           name="Créateurdecontenu"
           alt="L"
         />
   

 
         <img onClick={() => this.handleClick("Photographe & Vidéaste")}src="https://i.ibb.co/0m2HBgp/Capture-d-e-cran-2019-06-09-a-21-32-15.png"
           name="PhotographeVidéaste"
           alt="L"
         />
   

       
         <img onClick={() => this.handleClick("Blogueur voyage")}src="https://i.ibb.co/XyKHRzx/Capture-d-e-cran-2019-06-09-a-21-32-29.png"
           name="Blogueurvoyage"
           alt="L"
         />
    

    
         <img onClick={() => this.handleClick("Autre")}src="https://i.ibb.co/brkcGx5/Capture-d-e-cran-2019-06-09-a-21-32-50.png"
           name="Autre"
           alt="L"
         />
     

    </div>
    );
  }
}


export default Postingrédients;