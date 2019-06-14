import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


import './Footer.scss'

import About from '../Images-tripitto/Icon/Footer/Infos.png';
import WhatToDo from '../Images-tripitto/Icon/Footer/WhatToDo.png';
import Advice from '../Images-tripitto/Icon/Footer/Conseils.png';
import CommunityRules from '../Images-tripitto/Icon/Footer/Reglement.png';
import Love from '../Images-tripitto/Icon/Footer/Love.png';
import langFR from '../Images-tripitto/Icons/Drapeau-FR.png';
import langEN from '../Images-tripitto/Icons/Drapeau-EN.png';
import Path from '../Images-tripitto/Icon/Footer/Path2.png';


class Footer extends Component {
    state = {
        lang: false,
        flag: langFR,
    };

selectLanguage = () => {
    const data = this.state.lang;
    this.setState({ lang: !this.state.lang });
        if (data === true) {
            this.setState({flag: langFR})
        }else {
            this.setState({flag: langEN})
        }
    }

    render () {
        return (
        <>
<footer>
    <section class="containerFooter">
        <div class="item-a">
            <h3>Tripitto en quelques mots</h3>
                <p>
                    Guide de voyage en vidéo, vous découvrez par Tripitto des destintions avec les yeux de voyageurs 
                    passionés. Ils vous confieront leurs secrets pour vous amener à vous projeter, décider et 
                    planifier votre prochain voyage.
                </p>
                <p>
                    Attention ! Risque d'addiction au site, de déconcetration au bureu et d'achat compulsif de billets 
                    d'avions... Embarquez dans la communauté !
                </p>
        </div>
        <div class="item-b">
            <NavLink><img src={About} alt="info"></img></NavLink>
                    <p>
                        À propos de Tripitto
                    </p>
                    <div className="item-bMargin">
                    <NavLink><img class="item-bImage"  src={WhatToDo} alt="interogation"></img></NavLink>
                        <p>
                            Que faire sur Tripitto ?
                        </p>
                </div>
        </div>
            <div class="item-c">
                <NavLink><img src={Advice} alt="info"></img></NavLink>
                    <p>
                        Nos conseils <br></br>pour vos vidéos
                    </p>
                    <div className="item-cMargin">
                        <NavLink><img src={CommunityRules} alt="interogation"></img></NavLink>
                        <p>
                            Réglement <br></br>de la communauté
                        </p>
                </div>
            </div>
        <div class="item-d">
            <h3>Votre avis nous importe</h3>
                <p>
                    Que le site it été le rayon de soleil de votre journée ou qu'un bug vous ai fait enrager, 
                    nous souhaitons vous entendre.
                </p>
                <p>
                    Défoulez-vous en nous prtageant votre enthousiasme (même exagéré), vos cris de frustation ou humbes avis.
                </p>
                <button className="button-footer">ENVOYER UN AVIS</button>
        </div>  
    </section>
    <section className="allRightsReserved">
        <div class="item-a-allRightsReserved">
            <p>©2019 Tripitto. Tous droits réservés. Fait avec</p>
        </div>
        <div class="item-b-allRightsReserved">
            <img className="love" src={Love} alt="love"></img>
        </div>
        <div class="item-c-allRightsReserved">
            <p>
                à Paris,FR
            </p>
        </div>
        <div class="item-d-allRightsReserved">
            <p>
                Contact/Confidentialité/Conditions
            </p>
        </div>
        <div class="item-e-allRightsReserved">
            <img onClick={this.selectLanguage}src={this.state.flag} alt="flag"></img>
        </div>
        <div class="item-f-allRightsReserved">
            <img onClick={this.selectLanguage}src={Path} alt="f"></img>
        </div>
    </section>
</footer>        
        </>
        )
    }
}

export default Footer