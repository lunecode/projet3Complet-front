import React, { Component } from 'react'
import axios from 'axios'

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
      <div>
        <form onSubmit={this.submitHandler}>
        <div className="Bio">
          Bio
            <input type='text' name="bio" value={bio} onChange={this.changeHandler} />
          </div>
          
        </form>
      </div>
    )
  }
}

export default PostBioProfil;
