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
    profil:""
  }

  changeHandler =(e)=>{
    this.setState({
 [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/profil/insert_profil', this.state)
    .then(response => {
    console.log(response)
    })
    .catch(error => {
    console.log(error)
    })   
    }

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

  render() {

    console.log(this.state);

    return (
<div className="Profil_inscription">
        <div className="Titre">
        <h3>Dites en un peu plus sur vous</h3>
        <p> <img src={Idea} alt="icon" />Cela apparaitra sur votre page de profil visible par tous</p>
        <h4>Vous êtes plutôt</h4>
        </div>

<form className="Profil_Pictures" type="hidden" name="profil" onSubmit={this.submitHandler} value={this.state.profil} onChange={this.changeHandler}>
       
        <div className="Profil_picture1">
        <img src={Passionnedevoyage}
        onClick={this.profil1}
        alt="Passioné de voyage"
        />
        Passionné de voyage
        </div>


        <div className="Profil_picture2">
        <img src={Créateurdecontenu}
        onClick={this.profil2}
        alt="Créateur de contenu"
        />
        Créateur de contenu
        </div>


        <div className="Profil_picture3">
        <img src={Blogueurdevoyage}
        onClick={this.profil3}
        alt="Blogueur de voyage"
        />
        Blogueur de voyage
        </div>


        <div className="Profil_picture4">
        <img src={Photographevidéaste}
        onClick={this.Enum4}
        alt="Photograph & vidéaste"
        />
        Photograph & vidéaste
        </div>

        <div className="Profil_picture5">
        <img src={Autre}
           onClick={this.profil4}
        alt="L"
        />
        Autre
        </div>
 {/* <button type="submit" >submit</button>  */}
   </form>
</div>
    );
  }
}


export default PostEnumProfil;