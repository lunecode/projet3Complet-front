import React, { Component } from 'react';
import soleil from '../../Images-tripitto/Icon_Vidéo/soleil.png';
import './MesFavoris.scss'

class MesFavoris extends Component {
    render() {
        return (
            <div className="Mes_favoris">
                <div className="titre_Mes_favoris">
                    <h1>Mes favoris</h1>
                    <p className="number_video">23 Vidéos</p>
                </div>

                <div className="countainer_bloc_favoris">

                    {/* filter */}
                    <div className="filter_favoris">
                        <select className="w3-select_favoris" name="option">
                            <option value="" disabled selected>triez par</option>
                            <option value="1">Date de publication'</option>
                            <option value="2">Status</option>
                            <option value="3">Popularité</option>
                            <option value="3">Titre</option>
                        </select>
                    </div>


    <div className="bloc_1_image_decription">
        <div className="image_Favoris">
            <img src={soleil} alt="" />
        </div>

    <div className="container_bloc">
        <h1>Couchée de soleil sur la Palemeraie de Skoura</h1>
        <div className="infos_Favoris">
            <p className="pays">Maroc</p>
            <p className="Point">.</p>
            <p className="nb_vues">35 vues</p>
            <p className="Point_2">.</p>
            <p className="temps">3 semaines</p>
        </div>
        <p className="desciptipn_text">
            Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Vestibulum tortor
            quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper. Aenean ultricies
            mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est
            et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
        
            tortor neque egestas augue, eu vulputate magna eros eu erat.
            Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
            facilisis luctus, metus
        </p>
    </div>

</div>


                </div>
            </div>
        );
    }
}


export default MesFavoris;