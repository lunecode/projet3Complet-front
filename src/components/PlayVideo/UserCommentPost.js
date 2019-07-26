import React, { Component } from 'react'
import axios from 'axios'
import './UserCommentPost.css';
import Picture from '../../Images-tripitto/Icon/User/hover.png';

// Permet d'inserer des données pour un test dans la table "comment"

class UserCommentPost extends Component {
  state = {
    comment: '',
    author_comment: '',
    general_video_id_general_video: '',

  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/comment/post_data_comment'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/comment/post_data_comment'
    }
    axios.post(pathApi, this.state)
      .then(response => {
        console.log(response)
        window.location.reload(false)
      })
      .catch(error => {
        console.log(error)
      })
  }

  addIdGeneralVideo = () => {
    const url = window.location.href;
    this.setState({ general_video_id_general_video: url.slice(32)})
  }

  componentDidMount = () => {
    this.addIdGeneralVideo()
  }

  render() {
    const { author_comment, comment, profil_id_profil, popularity_id_popularity, general_video_id_general_video } = this.state

    return (

      <div className="container_post">
        <form onSubmit={this.submitHandler}>
          <div className="myComment">
            <div className="com">
              <img className="pictureuser" src={Picture} alt="pictureuser" />
              <input className="input-name" type='text' name="author_comment" value={author_comment} onChange={this.changeHandler} placeholder="Votre nom" />
            </div>
            <div className="comment">

              <textarea className="userComment" type='text' name="comment" value={comment} onChange={this.changeHandler} placeholder="Ajouter un commentaire" rows="1" cols="70" />
            </div>
            <div>

              <input type="hidden" name="profil_id_profil" value={profil_id_profil} onChange={this.changeHandler} />
              <input type="hidden" name="popularity_id_popularity" value={popularity_id_popularity} onChange={this.changeHandler} />
              <input type="hidden" name="general_video_id_general_video" value={general_video_id_general_video} onChange={this.changeHandler} />

            </div>
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>


      </div>
    )
  }
}

export default UserCommentPost






