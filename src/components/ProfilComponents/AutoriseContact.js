import React from 'react';
import Idea from "../../Images-tripitto/Icon/Idea.png"
import './PostProfilInfo.css'
import './AutoriseContact.scss'

const AutoriseContact=(props)=>{
        return (
          <div className="AutoriseContact">
          <h3><input type="checkbox" id="ok" name="checked_option_msg" value={props.option_msg}
          checked={props.checked_option_msg}
          onChange={props.handleCheckbox} className="" />J'autorise les membres Tripitto à me contacter pour une colloboration </h3>
          <p> <img src={Idea} alt="icon" />Un bouton message apparaîtra sur profil et permettre aux membres de vous envoyer un message sur votre boîte mail </p>
          </div>
        );
    
}

export default AutoriseContact;