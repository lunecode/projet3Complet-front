import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import './PostVideo.css'

import UploadIcon from '../../Images-tripitto/Icon/Upload-Video.png'
import CoverIcon from '../../Images-tripitto/Icon/Upload Image.png'



// UPLOAD PAGE 1 / VIDEO AND DESCRIPTION
// ALLOW TO INSERT DATA IN "GENERAL_VIDEO" TABLE
// TEST OK



class PostVideo extends Component {
  state = {
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/general_video/insert_general_video', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { video_link,profil_id_profil, equipment, link_equipment, equipment2, link_equipment2, equipment3, link_equipment3, cover_picture } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className='grid_postVideo'>

            <div className="empty">
            </div>

            <div className="upload-link">
              <img className="uploadIconVideo" src={UploadIcon} alt="upload icon"></img>
              <p>Lien de la vidéo</p>
              <input className="input-upload" type='text' name="video_link" value={video_link} onChange={this.changeHandler} />
            </div>

            <div className="title">
              <p>Titre*</p>
              <textarea placeholder="Escapade romantique dans la ville des lumières" name="title" rows="2" cols="134"></textarea>
              {/* <input className="input-title" placeholder="Escapade romantique dans la ville des lumières" type='text' name="video_title" value={video_title} onChange={this.changeHandler} /> */}
            </div>




            <div className="description">
              <p>Description</p>
              <textarea placeholder="Une description qui donne envie, très envie" name="description" rows="8" cols="135"></textarea>
              <br></br>
              {/* <input className="input-description" placeholder="Une description qui donne envie, très envie" type='text' name="video_description" value={video_description} onChange={this.changeHandler} /> */}
            </div>




            <div className="title-equipment1">
              <p>Equipement utilisés pour filmer</p>
            </div>
            <div className="equipment1">
              <input className="input-equipment" placeholder="DJI Mavic Pro" type='text' name="equipment" value={equipment} onChange={this.changeHandler} />
            </div>
            <div className="title-link1">
              <p>Ajouter un lien web</p>
            </div>
            <div className="link1">
              <input className="input-link" type='text' name="link_equipment" value={link_equipment} onChange={this.changeHandler} />
            </div>




            <div className="title-equipment2">
            </div>
            <div className="equipment2">
              <input className="input-equipment2" placeholder="Sony Alpha 7" type='text' name="equipment2" value={equipment2} onChange={this.changeHandler} />
            </div>
            <div className="title-link2">
              <p>Ajouter un lien web</p>
            </div>
            <div className="link2">
              <input className="input-link2" type='text' name="link_equipment2" value={link_equipment2} onChange={this.changeHandler} />
            </div>


            <div className="title-equipment3">

            </div>
            <div className="equipment3">
              <input className="input-equipment3" placeholder="IPhone X" type='text' name="equipment3" value={equipment3} onChange={this.changeHandler} />
            </div>
            <div className="title-link3">
              <p>Ajouter un lien web</p>
            </div>
            <div className="link3">
              <input className="input-link3" type='text' name="link_equipment3" value={link_equipment3} onChange={this.changeHandler} />
            </div>



            <div className="cover-picture">
              <img className="uploadIconCover" src={CoverIcon} alt="upload icon"></img>
              <p>Photo de couverture</p>
              <input className="input-cover" type='text' name="cover_picture" value={cover_picture} onChange={this.changeHandler} />
            </div>

            <div className="temp">
              <p>Profil_id ( obligatoire )</p>
              <input type="text" name="profil_id_profil" value={profil_id_profil} onChange={this.changeHandler} />
            </div>

            <div className="submit-div">
              <button className="submit-button" type="submit">ENREGISTRER</button>
            </div>

            <div className="next-div">
              <button className="next-button" type="button"><NavLink exact to="/uploadInformation"> SUIVANT</NavLink></button>
            </div>

          </div>
        </form>
      </div>
    )
  }
}

export default PostVideo


