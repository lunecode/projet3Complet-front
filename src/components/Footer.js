import React, { Component } from 'react'
import './Footer.scss'

import About from '../Images-tripitto/Icon/Footer/Infos.png';
import WhatToDo from '../Images-tripitto/Icon/Footer/WhatToDo.png';
import Advice from '../Images-tripitto/Icon/Footer/Conseils.png';
import CommunityRules from '../Images-tripitto/Icon/Footer/Reglement.png';
import Love from '../Images-tripitto/Icon/Footer/Love.png';

class Footer extends Component {
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
        <img src={About} alt="info"></img>
                    <p>
                        À propos de Tripitto
                    </p>
                    <div className="item-bMargin">
                        <img class="item-bImage"  src={WhatToDo} alt="interogation"></img>
                        <p>
                            Que faire sur Tripitto ?
                        </p>
                </div>
        </div>
            <div class="item-c">
                <img src={Advice} alt="info"></img>
                    <p>
                        Nos conseils <br></br>pour vos vidéos
                    </p>
                    <div className="item-cMargin">
                        <img src={CommunityRules} alt="interogation"></img>
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

            </p>
        </div>
        <div class="item-d-allRightsReserved">
            <p>

            </p>
        </div>
    </section>
</footer>        
        </>
        )
    }
}

export default Footer