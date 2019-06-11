import React, { Component } from 'react'
import axios from 'axios'


// UPLOAD PAGE 1 / VIDEO AND DESCRIPTION
// ALLOW TO DELETE DATA OF "GENERAL VIDEO" TABLE WITH THE ID (TEST OK)

// PROBLEM WITH THE FOREIGN KEY OF PROFIL ID ==> RESOLVED BY UPDATE THE CHILD FOREIGN KEY TO DELETE WITH CASCADE
// FK ON TABLE : ( COMMENT, TRAVEL_INFORMATION, TRAVEL_STEP)





class DeleteVideo extends Component {
  state = {
    id_general_video: ''
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
  const { id_general_video } = this.state
  return (
    <div>
      <form onSubmit={this.submitHandler}>
      <div>
          <p>Id de la vidéo</p>
          <input type='text' name="id_general_video" value={id_general_video} onChange={this.changeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
}

export default DeleteVideo
