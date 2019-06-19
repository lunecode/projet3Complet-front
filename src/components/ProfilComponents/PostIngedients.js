import Aventurierseul from '../../Images-tripitto/Icon/Ingredients/Aventurierseul.png'
import React, { Component } from 'react';
import Copains from '../../Images-tripitto/Icon/Ingredients/Copains.png'
import DigitalNomad from '../../Images-tripitto/Icon/Ingredients/DigitalNomad.png'
import Ecotourisme from '../../Images-tripitto/Icon/Ingredients/Ecotourisme.png'
import Enforet from '../../Images-tripitto/Icon/Ingredients/Enforet.png'
import Festival from '../../Images-tripitto/Icon/Ingredients/Festival.png'
import Humanitaire from '../../Images-tripitto/Icon/Ingredients/Humanitaire.png'
import Luxe from '../../Images-tripitto/Icon/Ingredients/Luxe.png'
import Montagne from '../../Images-tripitto/Icon/Ingredients/Montagne.png'
import Rencontre from '../../Images-tripitto/Icon/Ingredients/Rencontre.png'
import Romantique from '../../Images-tripitto/Icon/Ingredients/Romantique.png'
import Sacados from '../../Images-tripitto/Icon/Ingredients/Sacados.png'
import Safari from '../../Images-tripitto/Icon/Ingredients/Safari.png'
import Ville from '../../Images-tripitto/Icon/Ingredients/Ville.png'
import Spiritualité from '../../Images-tripitto/Icon/Ingredients/Spiritualité.png'
import Sportaventure from '../../Images-tripitto/Icon/Ingredients/Sportaventure.png'
import En_famille from '../../Images-tripitto/Icon/Aventurier/En_famille.png'
import plage from '../../Images-tripitto/Icon/Ingredients/Aventurier/plage.png'
import histoireCulture from '../../Images-tripitto/Icon/Ingredients/histoirCulture.png'


import Plaisirculinaire from '../../Images-tripitto/Icon/Ingredients/Plaisirculinaire.png'
import Idea from "../../Images-tripitto/Icon/Idea.png"
import axios from "axios"


import "./postIngredient.scss"

class PostIngedients extends Component {

        state = {
                ingredients:0

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
        
              Enum1 = () => {
                this.setState({ ingredients: 1 })
              }
              Enum2 = () => {
                this.setState({ ingredients: 2 })
              }
              Enum3 = () => {
                this.setState({ ingredients: 3 })
              }
              Enum4 = () => {
                this.setState({ ingredients: 4 })
              }
              Enum5 = () => {
                this.setState({ ingredients: 5})
              }
              Enum6 = () => {
                this.setState({ ingredients: 6 })
              }
              Enum7 = () => {
                this.setState({ ingredients: 7})
              }
              Enum8 = () => {
                this.setState({ ingredients: 8})
              }
              Enum9 = () => {
                this.setState({ ingredients: 9})
              }
              Enum10 = () => {
                this.setState({ ingredients: 10})
              }
              Enum11= () => {
                this.setState({ ingredients: 11})
              }
        
              Enum12= () => {
                this.setState({ ingredients: 12})
              }
              Enum13= () => {
                this.setState({ ingredients: 13})
              }
               Enum14= () => {
                this.setState({ ingredients: 14})
              } 
              Enum15= () => {
                this.setState({ ingredients: 15})
              }
              Enum16= () => {
                this.setState({ ingredients: 16})
              }
              Enum17= () => {
                this.setState({ ingredients: 17})
              }
              Enum18= () => {
                this.setState({ ingredients: 18})
              }
               Enum19= () => {
                this.setState({ ingredients: 19})
              }
               Enum20= () => {
                this.setState({ ingredients: 20})
              }
              Enum21= () => {
                this.setState({ ingredients: 21})
              }
             
                
render() {
console.log(this.state);

return (

<div className="ingédients" >
        <h3>Vos ingrédients pour un voyage inoubliable </h3>
        <p> <img src={Idea} alt="icon" />Selectionnez jusqu'à 5 choix</p>

<form className="globale" onSubmit={this.submitHandler}>  
  <input className="I" type="hidden" name="ingredients" value={this.state.ingredients} onChange={this.changeHandler} />
   <div className="Ingredient_list1">

        <div className="ingredient1">
        <img src={Aventurierseul}
        onClick={this.Enum1}
        alt="Aventurier d'abord"
        />
        Aventurier seul
        </div>

        <div className="ingredient2">
        <img src={Copains}
        onClick={this.Enum2}
        alt="Les copains d'abord"
        />
        Copains d'abord
        </div>
                
        <div className="ingredient3">
        <img src={Romantique}
        onClick={this.Enum3}
        alt="Escapade_romantique"
        />
        Escapade romantique
        </div>

        <div className="ingredient4">
        <img src={En_famille}
        onClick={this.Enum4}
        alt="En_famille"
        />
        En famille
        </div>

        <div className="ingredient5">
        <img src={DigitalNomad}
     
        onClick={this.Enum5}
        alt="Digita_nomad"
        />
        Digita nomad
        </div>
</div>

       <div className="Ingredient_list2">
                <div className="ingredient6">
                <img src={plage}
               
                onClick={this.Enum6}
                alt="Iles_Plages"
                />
                Iles & Plages
                </div>

                <div className="ingredient9">
                <img src={Montagne}
               
                onClick={this.Enum7}
                alt="Grandes_villes"
                />
                Montagne
                </div>

                <div className="ingredient8">
                <img src={Safari}
                
                onClick={this.Enum8}
                alt="Safari_Animaux"
                />
                Safari & Animaux
                </div>

                <div className="ingredient15">
                <img src={Ville}
             
                onClick={this.Enum9}
                alt="Histoire_Culture"
                />
                Grande Ville
                </div>

                <div className="ingredient7">
                <img src={Enforet}
                
                onClick={this.Enum10}
                alt="En foret"
                />
                En foret
                </div>
               
        </div>

                <div className="Ingredient_list3"> <div className="ingredient7">
                <img src={Sportaventure}
              
                onClick={this.Enum11}
                alt="Montagnes_Campagnes"
                />
                Sport & Aventures
                </div>

                <div className="ingredient9">
                <img src={Festival}
                
                onClick={this.Enum12}
                alt="Grandes_villes"
                />
                Festivals & Musique
                </div>

                <div className="ingredient10">
                <img src={Plaisirculinaire}
               
                onClick={this.Enum13}
                alt="En_foret"
                />
                Plaisir culinaire
                </div>

                <div className="ingredient11">
                <img src={histoireCulture}
               
                onClick={this.Enum14}
                alt="Histoire_Culture"
                />
                Histoire_Culture
                </div>
                
                <div className="ingredient16">
                <img src={Spiritualité}
              
                onClick={this.Enum15}
                alt="Spiritualité"
                />
                Spiritualité
                </div>
                </div>


 <div className="Ingredient_list4"> 
 
           <div className="ingredient17">
                <img src={Humanitaire}
               
                onClick={this.Enum16}
                alt="Humanitaire"
                />
                Humanitaire
                </div>

                <div className="ingredient15">
                <img src={Ecotourisme}
                
                onClick={this.Enum17}
                alt="Ecotourisme"
                />
                Ecotourisme
                </div> 

                <div className="ingredient18">
                <img src={Plaisirculinaire}
              
                onClick={this.Enum18}
                alt="Ecotourise"
                />
                Plaisirculinaire
                </div>

                <div className="ingredient19">
                <img src={Luxe}
                
                onClick={this.Enum19}
                alt="Luxe"
                />
                Luxe
                </div>

                <div className="ingredient19">
                <img src={Sacados}
               
                onClick={this.Enum20}
                alt="En_sac_dos"
                />
                Sac a dos
                </div>

                <div className="ingredient19">
                <img src={Rencontre}
                
                onClick={this.Enum21}
                alt="En_sac_dos"
                />
                Sac a dos
                </div>
                               
        </div>
        {/* <button type="submit" >submit</button> */}
</form>
</div>

);
}
}

export default PostIngedients;