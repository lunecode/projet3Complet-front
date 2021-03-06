import React, { Component } from 'react';
import soleil from '../../Images-tripitto/Icon_Vidéo/soleil.png';
import fes from '../../Images-tripitto/Icon_Vidéo/fes.png';
import Marakech from '../../Images-tripitto/Icon_Vidéo/Marakech.png';
import tanger from '../../Images-tripitto/Icon_Vidéo/tanger.png';
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
                            <option value="" disabled selected>Trier par</option>
                            <option value="1">Date de publication'</option>
                            <option value="2">Status</option>
                            <option value="3">Popularité</option>
                            <option value="3">Titre</option>
                        </select>
                    </div>


    <div className="bloc_1_image_decription">
        <div className="image_Favoris">
            <div className="favoris_durée_pourcentage">
            <p className="durée_vidéo_favoris">+80%</p>
            <p className="pourcentage_favoris" >12:23</p>
            </div>
            <img src={soleil} alt="" />
        </div>

    <div className="container_bloc">
     <h1>Couchée de soleil sur la Palemeraie de Skoura</h1>
        <div className="infos_Favoris">
            <p className="pays">Maroc</p>
            <p className="Point">.</p>
            <p className="nb_vues">35 vues</p>
            <p className="Point">.</p>
            <p className="temps">il y 3 semaines</p>
        </div>
        <p className="desciptipn_text">
             <p className="auteur">Beth Murphy</p>
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


<div className="bloc_1_image_decription">
        <div className="image_Favoris">
            <div className="favoris_durée_pourcentage">
            <p className="durée_vidéo_favoris">+80%</p>
            <p className="pourcentage_favoris" >12:23</p>
            
            </div>
            <img src={fes} alt="" />
        </div>

    <div className="container_bloc">
     <h1>Maroc 2018</h1>
        <div className="infos_Favoris">
            <p className="pays">Finlande</p>
            <p className="Point">.</p>
            <p className="nb_vues">1008 vues</p>
            <p className="Point">.</p>
            <p className="temps">il y 1 semaine</p>
        </div>
        <p className="desciptipn_text">
             <p className="auteur">Carmelita Marsham</p>
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

<div className="bloc_1_image_decription">
        <div className="image_Favoris">
            <div className="favoris_durée_pourcentage">
            <p className="durée_vidéo_favoris">+80%</p>
            <p className="pourcentage_favoris" >12:23</p>
            
            </div>
            <img src={Marakech} alt="" />
        </div>

    <div className="container_bloc">
     <h1>Longin Maroc</h1>
        <div className="infos_Favoris">
            <p className="pays">Maroc</p>
            <p className="Point">.</p>
            <p className="nb_vues">35 vues</p>
            <p className="Point">.</p>
            <p className="temps">il y 3 semaines</p>
        </div>
  <p className="desciptipn_text">
             <p className="auteur">Beth Murphy</p>
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

<div className="bloc_1_image_decription">
        <div className="image_Favoris">
            <div className="favoris_durée_pourcentage">
            <p className="durée_vidéo_favoris">+80%</p>
            <p className="pourcentage_favoris" >12:23</p>
            
            </div>
            <img src={tanger} alt="" />
        </div>

    <div className="container_bloc">
     <h1>Lost in Casba </h1>
        <div className="infos_Favoris">
            <p className="pays">Maroc</p>
            <p className="Point">.</p>
            <p className="nb_vues">35 vues</p>
            <p className="Point">.</p>
            <p className="temps">il y 3 semaines</p>
        </div>

       
        <p className="desciptipn_text">
             <p className="auteur">Beth Murphy</p>
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