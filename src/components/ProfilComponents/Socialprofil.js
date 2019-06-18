import React, { Component } from 'react';
import iconFacebook from '../../Images-tripitto/Icon/social/icon-fb.png'
import iconInsta from '../../Images-tripitto/Icon/social/icon-insta.png'
import iconYoutube from '../../Images-tripitto/Icon/social/icon-youtube.png'
import iconIdea from '../../Images-tripitto/Icon/Idea.png'
import iconLink from '../../Images-tripitto/Icon/social/link.png'
import iconAutreLien from '../../Images-tripitto/Icon/social/icon-autre-lien.png'
import './StyleProfilInfo.css'
import axios from "axios"



class Socialprofil extends Component {
    state={
     youtube_link:"",
     website_link:"",
    facebook_link:"",
     instagram_link:""
    }
    submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/profil/insert_profil', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

  }
    render() {
        const {youtube_link, website_link, facebook_link, instagram_link} = this.state
        return (
           
             <div className="bloc-social-profil">
          <h2 className="title-social-profil">Mes réseaux sociaux</h2>
          <img src={iconIdea} alt="icon facebook " className="icon-social-idea"/>
          <p>Pour developper votre communité digital</p>
          <div className="social-network-profil">
            <div>
              <img src={iconFacebook} alt="icon facebook "/>
              <input type="text" name="facebook_link" value={facebook_link} onChange={this.changeHandler} placeholder="Facebook" className="field-social"/>
            </div>
            <div>
              <img src={iconInsta} alt="icon instagram "/>
              <input type="text" name="instagram_link" value={instagram_link} onChange={this.changeHandler}placeholder="Instagram" className="field-social" />
            </div>
            <div>
            <img src={iconYoutube} alt="icon youtube"/>
              <input type="text" name="youtube_link" value={youtube_link} onChange={this.changeHandler}placeholder="Youtube" className="field-social"/>
            </div>
            <div>
            <img src={iconAutreLien} alt="icon link"/>
              <input type="text" name="website_link" value={website_link} onChange={this.changeHandler}placeholder="Autre lien ou blog"className="field-social"/>
            </div>
          </div>
         <div className="save-btn">
          <button>SAUVEGARDER</button>
          </div>
        </div>    
            
            
        );
    }
}

export default Socialprofil;