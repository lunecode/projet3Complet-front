import React, { Component } from 'react'
import axios from 'axios'
import './UserCommentPost.css';
import Picture from '../../Images-tripitto/Icon/User/hover.png';

// Permet d'inserer des données pour un test dans la table "comment"

class UserCommentPost extends Component {
    state = {
        comment: '',
        general_video_id_general_video: '',
        popularity_id_popularity: '',
        profil_id_profil: '',
}

changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}

submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/comment/post_data_comment', this.state)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

}

render() {
    const { comment, profil_id_profil, popularity_id_popularity, general_video_id_general_video } = this.state
    return (
    <div className="container_post">
        <form onSubmit={this.submitHandler}>
            <div className="myComment">
            <div className="comment">
            <img className="pictureuser" src={Picture} alt= "pictureuser"/>Comment:<textarea className="userComment" type='text' name="comment" value={comment} onChange={this.changeHandler} placeholder="Ajouter un commentaire..." rows="1" cols="90"/>
            </div>
            <div>
            profil_id_profil:<input type="text" name="profil_id_profil" value={profil_id_profil} onChange={this.changeHandler} />
            popularity_id_popularity:<input type="text" name="popularity_id_popularity" value={popularity_id_popularity} onChange={this.changeHandler} />
            general_video_id_general_video:<input type="text" name="general_video_id_general_video" value={general_video_id_general_video} onChange={this.changeHandler} />
            </div>
            <button type="submit">Submit</button>
            </div>
        </form>
        
    </div>
  )
}
}

export default UserCommentPost






