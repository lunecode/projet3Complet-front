import React, { Component } from 'react'
import axios from 'axios'
import "./PostBioProfil.scss" 

class PostBioProfil extends Component {
  state = {
    bio: "",
    
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
    const {bio} = this.state
    return (
      <div className="PostBioProfil">
        <form onSubmit={this.submitHandler}>
        <div className="Bio">
          <h3>Bio </h3>
            <input type='text' name="bio" value={bio} onChange={this.changeHandler}
            placeholder="Parlez de votre personnalité de vaoyageur
            et vos talents de vidéaste ou photohtaphe 
            Rébélez-nous la partoe de globe que vous connaissez la mieux.
            Avouez votre plus grad rêve de voyageur "/>

          </div>
          
        </form>
      </div>
    )
  }
}

export default PostBioProfil;
