import React, { Component } from 'react'
import axios from 'axios'

import './PostVideo.css'



// UPLOAD PAGE 1 / VIDEO AND DESCRIPTION
// ALLOW TO INSERT DATA IN "GENERAL_VIDEO" TABLE
// TEST OK



class PostVideo extends Component {
  state = {
    video_link: '',
    video_title: '',
    video_description: '',
    equipment: '',
    equipment2: '',
    equipment3: '',
    link_equipment: '',
    link_equipment2: '',
    link_equipment3: '',
    cover_picture: '',
    profil_id_profil: '',
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
    const { video_link, video_title, profil_id_profil, video_description, equipment, link_equipment, equipment2, link_equipment2, equipment3, link_equipment3, cover_picture } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className='grid'>
            <div className="empty">

            </div>
          <div className="one">
            <p>Lien de la vidéo</p>
            <input type='text' name="video_link" value={video_link} onChange={this.changeHandler} />
          </div>
          <div className="two">
            <p>Titre ( obligatoire )</p>
            <input className="input-title" type='text' name="video_title" value={video_title} onChange={this.changeHandler} />
          </div>
          <div className="three">
            <p>Description</p>
            <input className="input-description" type='text' name="video_description" value={video_description} onChange={this.changeHandler} />
          </div>
          <div className="four">
            <p>Equipement</p>
            <input className="input-equipment"   type='text' name="equipment" value={equipment} onChange={this.changeHandler} />
            <p>lien web de l'équipement</p>
            <input className="input-link" type='text' name="link_equipment" value={link_equipment} onChange={this.changeHandler} />
          </div>
          <div className="five">
            <p>Equipement2</p>
            <input className="input-equipment2" type='text' name="equipment2" value={equipment2} onChange={this.changeHandler} />
            <p>lien web de l'équipement2</p>
            <input className="input-link2" type='text' name="link_equipment2" value={link_equipment2} onChange={this.changeHandler} />
          </div>
          <div className="six">
            <p>Equipemen3</p>
            <input className="input-equipment3" type='text' name="equipment3" value={equipment3} onChange={this.changeHandler} />
            <p>lien web de l'équipement3</p>
            <input className="input-link3" type='text' name="link_equipment3" value={link_equipment3} onChange={this.changeHandler} />
          </div>
          <div className="seven">
            <p>Photo de couverture</p>
            <input type='text' name="cover_picture" value={cover_picture} onChange={this.changeHandler} />
          </div>
          <div className="temp">
            <p>Profil_id ( obligatoire )</p>
            <input type="text" name="profil_id_profil" value={profil_id_profil} onChange={this.changeHandler} />
          </div>
          <button className="nine" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default PostVideo
