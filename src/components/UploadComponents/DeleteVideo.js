import React, { Component } from 'react'
import axios from 'axios'


// Allow to delete the data of " general_video "  table with the ID ( test NOK)
// Problem with the foreign key 

class DeleteVideo extends Component {
  state = {
    id_general_video: '',
    profil_id_profil: '',
  }

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  axios.delete(`http://localhost:3000/general_video/delete_general_video/${this.state.id_general_video}`, this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

}

render() {
  const { profil_id_profil, id_general_video } = this.state
  return (
    <div>
      <form onSubmit={this.submitHandler}>
      <div>
          <p>Id de la vidéo</p>
          <input type='text' name="id_general_video" value={id_general_video} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Profil_id_profil</p>
          <input type='text' name="profil_id_profil" value={profil_id_profil} onChange={this.changeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
}

export default DeleteVideo
