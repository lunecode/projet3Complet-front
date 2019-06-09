import React, { Component } from 'react'
import axios from 'axios'

class PostBioProfil extends Component {
  state = {
    lastname: "",
    firstname: "",
    pseudo: "",
    email: "",
    birth_date: "",
    type: "",
    position: "",
    profil_link: "",
    profile_picture: "",
    bio: "",
    inscription_date: "",
    inscription_type: "",
    password: "",
    password_forget: "",
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
    const { lastname, firstname, pseudo, email, birth_date, type,
      position, profil_link, profile_picture, bio, inscription_date, inscription_type, password,
      password_forget } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type='text' name="lastname" value={lastname} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="firstname" value={firstname} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="pseudo" value={pseudo} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="email" value={email} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="birth_date" value={birth_date} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="type" value={type} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="position" value={position} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="profil_link" value={profil_link} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="profile_picture" value={profile_picture} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="bio" value={bio} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="inscription_date" value={inscription_date} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="inscription_type" value={inscription_type} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="password" value={password} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name="password_forget" value={password_forget} onChange={this.changeHandler} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostBioProfil;
