import React, { Component } from 'react'
import axios from 'axios'


class PostVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      video_title: '',
      profil_id_profil: '',
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
    const { video_title, profil_id_profil} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type='text' name="video_title" value={video_title} onChange={this.changeHandler} />
          </div>
          <div>
            <input type="text" name="profil_id_profil" value={profil_id_profil} onChange={this.changeHandler}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostVideo
