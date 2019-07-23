import React from 'react';
import Autre from "../../Images-tripitto/imageProfil/Autre.png"
import Créateurdecontenu from "../../Images-tripitto/imageProfil/Créateurdecontenu.png"
import Passionnedevoyage from "../../Images-tripitto/imageProfil/Passionnédevoyage.png"
import './PostEnumProfil.scss'
import Photographevidéaste from "../../Images-tripitto/imageProfil/Photographe&vidéaste.png"
import Blogueurdevoyage from "../../Images-tripitto/imageProfil/Bloggeurdevoyage.png"
import Idea from "../../Images-tripitto/Icon/Idea.png"

const PostEnumProfil = (props) => {
console.log("mes props",props);

    return (
        <div className="Profil_inscription">
            <div className="Titre">
                <h3>Dites en un peu plus sur vous</h3>
                <div className="bloc-profil-type-title"><p><img src={Idea} alt="icon" /></p><p className="title-profil-enum">Cela apparaitra sur votre page de profil visible par tous</p></div>
                <h4>Vous êtes plutôt</h4>
            </div>

    <form className="Profil_Pictures" type="hidden" name="profil"  onSubmit={props.submitHandler} value={props.profil} 
               onChange={props.changeHandler}>

                <div className="Profil_picture1">
                    <img src={Passionnedevoyage}
                        onClick={props.profil1}
                        alt="Passioné de voyage"
                    />
                  <p> Passionné de voyage</p> 
        </div>


                <div className="Profil_picture2">
                    <img src={Créateurdecontenu}
                        onClick={props.profil2}
                        alt="Créateur de contenu"
                    />
                    <p>Créateur de contenu</p>
        </div>


                <div className="Profil_picture3">
                    <img src={Blogueurdevoyage}
                        onClick={props.profil3}
                        alt="Blogueur de voyage"
                    />
                    <p>Blogueur de voyage</p>
        </div>
                <div className="Profil_picture4">
                    <img src={Photographevidéaste}
                        onClick={props.profil4}
                        alt="Photograph & vidéaste"
                    />
                   <p> Photographe & vidéaste</p>
               </div>
                <div className="Profil_picture5">
                    <img src={Autre}
                        onClick={props.profil5}
                        alt="L"
                    />
                    <p>Autre</p>
        </div>
            </form>
        </div>
    );

}


export default PostEnumProfil;