import React, { Component } from 'react'
import axios from 'axios'

class PostBioProfil extends Component {
  state = {
    id_profil: "",
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/profil/update_profil'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/profil/update_profil'
    }
  
    console.log(this.state)
    axios.put(`${pathApi}/${this.state.id_profil}`, this.state)
      .then(response => {
      })
      .catch(error => {
      })
  }


  render() {
    const { id_profil, lastname, firstname, pseudo, email, birth_date, type,
      position, profil_link, profile_picture, bio, inscription_date, inscription_type, password,
      password_forget } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>id profil
          <input type='text' name="id_profil" value={id_profil} onChange={this.changeHandler} />
          </div>
          <div>
            lastname:
          <input type='text' name="lastname" value={lastname} onChange={this.changeHandler} />
          </div>
          <div>
            firstname:
          <input type='text' name="firstname" value={firstname} onChange={this.changeHandler} />
          </div>
          <div>
            pseudo:
          <input type='text' name="pseudo" value={pseudo} onChange={this.changeHandler} />
          </div>
          <div>email:
          <input type='text' name="email" value={email} onChange={this.changeHandler} />
          </div>
          <div>
            birth_date:
          <input type='text' name="birth_date" value={birth_date} onChange={this.changeHandler} />
          </div>
          <div>
            type:
          <input type='text' name="type" value={type} onChange={this.changeHandler} />
          </div>
          <div>
            position
          <input type='text' name="position" value={position} onChange={this.changeHandler} />
          </div>
          <div>
            profil-link:
          <input type='text' name="profil_link" value={profil_link} onChange={this.changeHandler} />
          </div>
          <div>
            profile_picture
          <input type='text' name="profile_picture" value={profile_picture} onChange={this.changeHandler} />
          </div>
          <div>
            bio:
          <input type='text' name="bio" value={bio} onChange={this.changeHandler} />
          </div>
          <div>
            inscription_date:
          <input type='text' name="inscription_date" value={inscription_date} onChange={this.changeHandler} />
          </div>
          <div>
            inscription_type:
          <input type='text' name="inscription_type" value={inscription_type} onChange={this.changeHandler} />
          </div>
          <div>
            password:
          <input type='text' name="password" value={password} onChange={this.changeHandler} />
          </div>
          <div>
            password_forget:
          <input type='text' name="password_forget" value={password_forget} onChange={this.changeHandler} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostBioProfil;
