import React, { Component } from 'react'
import axios from 'axios'


// NE MARCHE PAS 
// Permet de modifier des données de la table " General_video "

class PutVideo extends Component {
  state = {
    id_general_video: '',
    video_link: '',
    video_title: '',
    video_description: '',
    equipment: '',
    link_equipment: '',    
    cover_picture: '',
    profil_id_profil: '',
  }

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  axios.put('http://localhost:3000/videoupload//updatedatavideo/1', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

}

render() {
  const { video_link, video_title, profil_id_profil, video_description, equipment, link_equipment, cover_picture, id_general_video } = this.state
  return (
    <div>
      <form onSubmit={this.submitHandler}>
      <div>
          <p>Id de la vidéo</p>
          <input type='text' name="id_general_video" value={id_general_video} onChange={this.changeHandler} />
        </div>
      <div>
          <p>Lien de la vidéo</p>
          <input type='text' name="video_link" value={video_link} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Titre ( obligatoire )</p>
          <input type='text' name="video_title" value={video_title} onChange={this.changeHandler} />
        </div>
        <div>
        <p>Description</p>
          <input type='text' name="video_description" value={video_description} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Equipement</p>
          <input type='text' name="equipment" value={equipment} onChange={this.changeHandler} />
        </div>
        <div>
          <p>lien web de l'équipement</p>
          <input type='text' name="link_equipment" value={link_equipment} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Photo de couverture</p>
          <input type='text' name="cover_picture" value={cover_picture} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Profil_id ( obligatoire )</p>
          <input type="text" name="profil_id_profil" value={profil_id_profil} onChange={this.changeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
}

export default PutVideo
