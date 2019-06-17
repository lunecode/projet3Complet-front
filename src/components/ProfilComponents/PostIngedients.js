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
                ingredients: ""

        }
              handleClick(e) {
                e.preventDefault();
                axios.post('http://localhost:3000/profil/insert_profil', this.state)
                .then(response => {
                 console.log(response)
                 })
               .catch(error => {
                   console.log(error)
                })
              }

render() {
const ingredients = this.state
return (
<div className="ingédients" >
        <h3>Vos ingrédients pour un voyage inoubliable </h3>
        <p> <img src={Idea} alt="icon" />Selectionnez jusqu'à 5 choix</p>

<div className="Ingredient_list1" onClick={this.handleClick}>
        <div className="ingredient1">
        <img src={Aventurierseul}
        name=""
        alt=""
        />
        Aventurier seul
        </div>

        <div className="ingredient2">
        <img src={Copains}
        name=""
        alt=""
        />
        Copains d'abord
        </div>
                
        <div className="ingredient3">
        <img src={DigitalNomad}
        name=""
        alt=""
        />
        Digital Nomad
        </div>

        <div className="ingredient4">
        <img src={Ecotourisme}
        name=""
        alt=""
        />
         Ecotourisme
        </div>

        <div className="ingredient5">
        <img src={Enforet}
        name=""
        alt=""
        />
        En forêt
        </div>
</div>

       <div className="Ingredient_list2">
                <div className="ingredient6">
                <img src={Festival}
                name=""
                alt=""
                />
                Festival
                </div>

                <div className="ingredient7">
                <img src={Humanitaire}
                name=""
                alt=""
                />
                Humanitaire
                </div>

                <div className="ingredient8">
                <img src={Luxe}
                name=""
                alt=""
                />
                Luxe
                </div>

                <div className="ingredient9">
                <img src={Montagne}
                name=""
                alt=""
                />
                Montagne
                </div>

                <div className="ingredient10">
                <img src={Plage}
                name=""
                alt=""
                />
                Plage
                </div>
        </div>

                <div className="Ingredient_list3">
                        <div className="ingredient11">
                        <img src={Rencontre}
                        name=""
                        alt=""
                        />
                        Rencontre
                        </div>

                        <div className="ingredient12">
                        <img src={Romantique}
                        name=""
                        alt=""
                        />
                        Romantique
                        </div>

                        <div className="ingredient13">
                        <img src={Sacados}
                        name=""
                        alt=""
                        />
                        Sacados
                        </div>

                        <div className="ingredient15">
                        <img src={Ville}
                        name=""
                        alt=""
                        />
                        Ville
                        </div>
                </div>

                       <div className="Ingredient_list4">
                                <div className="ingredient16">
                                <img src={Spiritualité}
                                name=""
                                alt=""
                                />
                                Spiritualité
                                </div>

                                <div className="ingredient17">
                                <img src={Sportaventure}
                                name=""
                                alt=""
                                />
                                Sportaventure
                                </div>

                                <div className="ingredient18">
                                <img src={Plaisirculinaire}
                                name=""
                                alt=""
                                />
                                Plaisirculinaire
                                </div>

                                <div className="ingredient19">
                                <img src={Romantique}
                                name=""
                                alt=""
                                />
                                Romantique
                                </div>
                        </div>

</div>
);
}
}

export default PostIngedients;