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
import Plage from '../../Images-tripitto/Icon/Ingredients/Plage.png'
import Rencontre from '../../Images-tripitto/Icon/Ingredients/Rencontre.png'
import Romantique from '../../Images-tripitto/Icon/Ingredients/Romantique.png'
import Sacados from '../../Images-tripitto/Icon/Ingredients/Sacados.png'
import Safari from '../../Images-tripitto/Icon/Ingredients/Safari.png'
import Ville from '../../Images-tripitto/Icon/Ingredients/Ville.png'
import Spiritualité from '../../Images-tripitto/Icon/Ingredients/Spiritualité.png'
import Sportaventure from '../../Images-tripitto/Icon/Ingredients/Sportaventure.png'
import Plaisirculinaire from '../../Images-tripitto/Icon/Ingredients/Plaisirculinaire.png'
import Idea from "../../Images-tripitto/Icon/Idea.png"
import axios from "axios"


import "./postIngredient.scss"

class PostIngedients extends Component {

        state = {

                Aventurier_abord:"",
                Les_copains_dabord:"",
                Escapade_romantique:"",
                En_famille:"",
                Digita_nomad:"",
                Iles_Plages:"",
                Montagnes_Campagnes:"",
                Safari_Animaux:"",
                Grandes_villes:"",
                En_foret:"",
                Sport_Aventures:"",
                Festivals_Musique:"",
                Plaisir_culinaire:"",
                Histoire_Culture:"",
                Spiritualite:"",
                Humanitaire:"",
                Ecotourise:"",
                Luxe:"",
                En_sac_dos:"",
                Rencontres_d_exceptions:"",

         }
         

        //       handleClick= (e) =>{
        //         e.preventDefault();
        //         axios.post('http://localhost:3000/ingredients/insert_ingredients', this.satate)
        //         .then(response => {
        //          console.log(response)
        //          })
        //        .catch(error => {
        //            console.log(error)
        //         })
        //       }
        handleCheckbox = (e) => {
                const target = e.target;
                const value = target.type === 'image' ? target.checked : target.value;
                const name = target.name;
            
                this.setState({
                  [name]: value
                });
              }
              submitHandler = e => {
                e.preventDefault()
                console.log(this.state)
                axios.post('http://localhost:3000/ingredients/insert_ingredients', this.state)
                  .then(response => {
                    console.log(response)
                  })
                  .catch(error => {
                    console.log(error)
                  })
            
              }

render() {
        console.log(this.state); 
return (
 
<div className="ingédients" >
        <h3>Vos ingrédients pour un voyage inoubliable </h3>
        <p> <img src={Idea} alt="icon" />Selectionnez jusqu'à 5 choix</p>

<div className="Ingredient_list1" onsubmit={this.submitHandler}>

        <div className="ingredient1">
        <img src={Aventurierseul}
        name="Aventurier_abord"
        type="image"
        data={this.state.Aventurier_abord}
        onClick={this.handleCheckbox}
        alt="Aventurier d'abord"
        />
        Aventurier seul
        </div>

        <div className="ingredient2">
        <img src={Copains}
        name="Les_copains_dabord"
        value={this.state.Les_copains_dabord}
        onChange={this.handleCheckbox}
        alt="Les copains d'abord"
        />
        Copains d'abord
        </div>
                
        <div className="ingredient3">
        <img src={DigitalNomad}
        name="Escapade_romantique"
        value={this.state.Escapade_romantique}
        onChange={this.handleCheckbox}
        alt="Escapade_romantique"
        />
        Digital Nomad
        </div>

        <div className="ingredient4">
        <img src={Ecotourisme}
        name="En_famille"
        value={this.state.En_famille}
        onChange={this.handleCheckbox}
        alt="En_famille"
        />
         Ecotourisme
        </div>

        <div className="ingredient5">
        <img src={Enforet}
        name="Digita_nomad"
        value={this.state.Digita_nomad}
        onChange={this.handleCheckbox}
        alt="Digita_nomad"
        />
        En forêt
        </div>
</div>

       <div className="Ingredient_list2">
                <div className="ingredient6">
                <img src={Festival}
                name="Iles_Plages"
                data={this.state.Iles_Plages}
                onChange={this.handleCheckbox}
                alt="Iles_Plages"
                />
                Festival
                </div>

                <div className="ingredient7">
                <img src={Humanitaire}
                name="Montagnes_Campagnes"
                value={this.state.Montagnes_Campagnes}
                onChange={this.handleCheckbox}
                alt="Montagnes_Campagnes"
                />
                Humanitaire
                </div>

                <div className="ingredient8">
                <img src={Luxe}
                name="Safari_Animaux"
                value={this.state.Safari_Animaux}
                onChange={this.handleCheckbox}
                alt="Safari_Animaux"
                />
                Luxe
                </div>

                <div className="ingredient9">
                <img src={Montagne}
                name="Grandes_villes"
                value={this.state.Grandes_villes}
                onChange={this.handleCheckbox}
                alt="Grandes_villes"
                />
                Montagne
                </div>

                <div className="ingredient10">
                <img src={Plage}
                name="En_foret"
                value={this.state.En_foret}
                onChange={this.handleCheckbox}
                alt="En_foret"
                />
                Plage
                </div>
        </div>

                <div className="Ingredient_list3">
                        <div className="ingredient11">
                        <img src={Rencontre}
                        name="Sport_Aventures"
                        value={this.state.Sport_Aventures}
                        onChange={this.handleCheckbox}
                        alt="Sport_Aventures"
                        />
                        Rencontre
                        </div>

                        <div className="ingredient12">
                        <img src={Romantique}
                        name="Festivals_Musique"
                        value={this.state.Festivals_Musique}
                        onChange={this.handleCheckbox}
                        alt="Festivals_Musique"
                        />
                        Romantique
                        </div>

                        <div className="ingredient13">
                        <img src={Sacados}
                        name="Plaisir_culinaire"
                        value={this.state.Plaisir_culinaire}
                        onChange={this.handleCheckbox}
                        alt="Plaisir_culinaire"
                        />
                        Sacados
                        </div>

                        <div className="ingredient15">
                        <img src={Ville}
                        name="Histoire_Culture"
                        value={this.state.Histoire_Culture}
                        onChange={this.handleCheckbox}
                        alt="Histoire_Culture"
                        />
                        Ville
                        </div>

                        <div className="ingredient15">
                        <img src={Ville}
                        name="Histoire_Culture"
                        value={this.state.Histoire_Culture}
                        onChange={this.handleCheckbox}
                        alt="Histoire_Culture"
                        />
                        Ville
                        </div>
                </div>

                       <div className="Ingredient_list4">
                                <div className="ingredient16">
                                <img src={Spiritualité}
                                name="Spiritualité"
                                value={this.state.Spiritualite}
                                onChange={this.handleCheckbox}
                                alt="Spiritualité"
                                />
                                Spiritualité
                                </div>

                                <div className="ingredient17">
                                <img src={Sportaventure}
                                name="Humanitaire"
                                value={this.state.Humanitaire}
                                onChange={this.handleCheckbox}
                                alt="Humanitaire"
                                />
                                Sportaventure
                                </div>

                                <div className="ingredient18">
                                <img src={Plaisirculinaire}
                                name="Ecotourise"
                                value= {this.state.Ecotourise}
                                onChange={this.handleCheckbox}
                                alt="Ecotourise"
                                />
                                Plaisirculinaire
                                </div>

                                <div className="ingredient19">
                                <img src={Romantique}
                                name="Luxe"
                                value={this.state.Luxe}
                                alt="Luxe"
                                />
                                Romantique
                                </div>

                                <div className="ingredient19">
                                <img src={Romantique}
                                name="En_sac_dos"
                                value={this.state.En_sac_dos}
                                alt="En_sac_dos"
                                />
                                Romantique
                                </div>
                               
                        </div>

</div>
);
}
}

export default PostIngedients;