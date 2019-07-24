import React from 'react';
import iconFacebook from '../../Images-tripitto/Icon/social/icon-fb.png'
import iconInsta from '../../Images-tripitto/Icon/social/icon-insta.png'
import iconYoutube from '../../Images-tripitto/Icon/social/icon-youtube.png'
import iconIdea from '../../Images-tripitto/Icon/Idea.png'
import iconAutreLien from '../../Images-tripitto/Icon/social/icon-autre-lien.png'
import './PostProfilInfo.css'


const Socialprofil = (props) => {
  return (
    <div className="bloc-social-profil" >
      <h5 className="title-social-profil">Mes réseaux sociaux</h5>
      <img src={iconIdea} alt="icon facebook " className="icon-social-idea" />
      <p>Pour developper votre communité digital</p>
      <div className="social-network-profil">
        <div>
          <img src={iconFacebook} alt="icon facebook " />
          <input type="text" name="facebook_link" value={props.facebook_link} onChange={props.changeHandler} placeholder="Facebook" className="field-social" />
        </div>
        <div>
          <img src={iconInsta} alt="icon instagram " />
          <input type="text" name="instagram_link" value={props.instagram_link} onChange={props.changeHandler} placeholder="Instagram" className="field-social" />
        </div>
        <div>
          <img src={iconYoutube} alt="icon youtube" />
          <input type="text" name="youtube_link" value={props.youtube_link} onChange={props.changeHandler} placeholder="Youtube" className="field-social" />
        </div>
        <div>
          <img src={iconAutreLien} alt="icon link" />
          <input type="text" name="website_link" value={props.website_link} onChange={props.changeHandler} placeholder="Autre lien ou blog" className="field-social" />
        </div>
      </div>
    </div>


  );
}

export default Socialprofil;