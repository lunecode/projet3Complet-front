import React, { Component } from 'react'
import axios from 'axios'


class ProfilInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profil_picture:'',
      pseudo:'',
      identity:'',
      location:'',
      profil_link:'',
      birth_date:'',
      nb_countries_visited:''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  axios.post('http://localhost:3000/videoUpload/insertdatavideo', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

}

  render() {
    const { profil_link, profil_picture,nb_countries_visited,identity,birth_date,location,pseudo} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type='text' name="profil_picture" value={profil_picture} onChange={this.changeHandler} />
          </div>
          <div>
            <input type="text" name="pseudo" value={pseudo} onChange={this.changeHandler}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default ProfilInfo
