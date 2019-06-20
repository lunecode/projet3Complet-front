import React from 'react';

import Aventurierseul from '../../Images-tripitto/Icon/Ingredients/Aventurierseul.png'
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
import "./postIngredient.scss"

const PostIngedients = (props) => {
        return (

                <div className="ingédients" >
                        <h3>Vos ingrédients pour un voyage inoubliable </h3>
                        <p> <img src={Idea} alt="icon" />Selectionnez jusqu'à 5 choix</p>

                        <form className="globale">
                                <input className="I" type="hidden" name="ingredients" value={props.ingredients} onChange={props.changeHandler} />
                                <div className="Ingredient_list1">

                                        <div className="ingredient1">
                                                <img src={Aventurierseul}
                                                        onClick={props.Enum1}
                                                        alt="Aventurier d'abord"
                                                />
                                                Aventurier seul
        </div>

                                        <div className="ingredient2">
                                                <img src={Copains}
                                                        onClick={props.Enum2}
                                                        alt="Les copains d'abord"
                                                />
                                                Copains d'abord
        </div>

                                        <div className="ingredient3">
                                                <img src={Romantique}
                                                        onClick={props.Enum3}
                                                        alt="Escapade_romantique"
                                                />
                                                Escapade romantique
        </div>

                                        <div className="ingredient4">
                                                <img src={En_famille}
                                                        onClick={props.Enum4}
                                                        alt="En_famille"
                                                />
                                                En famille
        </div>

                                        <div className="ingredient5">
                                                <img src={DigitalNomad}

                                                        onClick={props.Enum5}
                                                        alt="Digita_nomad"
                                                />
                                                Digita nomad
        </div>
                                </div>

                                <div className="Ingredient_list2">
                                        <div className="ingredient6">
                                                <img src={plage}

                                                        onClick={props.Enum6}
                                                        alt="Iles_Plages"
                                                />
                                                Iles & Plages
                </div>

                                        <div className="ingredient9">
                                                <img src={Montagne}
                                                        onClick={props.Enum7}
                                                        alt="Grandes_villes"
                                                />
                                                Montagne
                </div>

                                        <div className="ingredient8">
                                                <img src={Safari}

                                                        onClick={props.Enum8}
                                                        alt="Safari_Animaux"
                                                />
                                                Safari & Animaux
                </div>

                                        <div className="ingredient15">
                                                <img src={Ville}

                                                        onClick={props.Enum9}
                                                        alt="Histoire_Culture"
                                                />
                                                Grande Ville
                </div>

                                        <div className="ingredient7">
                                                <img src={Enforet}

                                                        onClick={props.Enum10}
                                                        alt="En foret"
                                                />
                                                En foret
                </div>

                                </div>

                                <div className="Ingredient_list3"> <div className="ingredient7">
                                        <img src={Sportaventure}

                                                onClick={props.Enum11}
                                                alt="Montagnes_Campagnes"
                                        />
                                        Sport & Aventures
                </div>

                                        <div className="ingredient9">
                                                <img src={Festival}

                                                        onClick={props.Enum12}
                                                        alt="Grandes_villes"
                                                />
                                                Festivals & Musique
                </div>

                                        <div className="ingredient10">
                                                <img src={Plaisirculinaire}

                                                        onClick={props.Enum13}
                                                        alt="En_foret"
                                                />
                                                Plaisir culinaire
                </div>

                                        <div className="ingredient11">
                                                <img src={histoireCulture}

                                                        onClick={props.Enum14}
                                                        alt="Histoire_Culture"
                                                />
                                                Histoire_Culture
                </div>

                                        <div className="ingredient16">
                                                <img src={Spiritualité}

                                                        onClick={props.Enum15}
                                                        alt="Spiritualité"
                                                />
                                                Spiritualité
                </div>
                                </div>


                                <div className="Ingredient_list4">

                                        <div className="ingredient17">
                                                <img src={Humanitaire}

                                                        onClick={props.Enum16}
                                                        alt="Humanitaire"
                                                />
                                                Humanitaire
                </div>

                                        <div className="ingredient15">
                                                <img src={Ecotourisme}

                                                        onClick={props.Enum17}
                                                        alt="Ecotourisme"
                                                />
                                                Ecotourisme
                </div>

                                        <div className="ingredient18">
                                                <img src={Plaisirculinaire}

                                                        onClick={props.Enum18}
                                                        alt="Ecotourise"
                                                />
                                                Plaisirculinaire
                </div>

                                        <div className="ingredient19">
                                                <img src={Luxe}

                                                        onClick={props.Enum19}
                                                        alt="Luxe"
                                                />
                                                Luxe
                </div>

                                        <div className="ingredient19">
                                                <img src={Sacados}

                                                        onClick={props.Enum20}
                                                        alt="En_sac_dos"
                                                />
                                                Sac a dos
                </div>

                                        <div className="ingredient19">
                                                <img src={Rencontre}

                                                        onClick={props.Enum21}
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

export default PostIngedients;