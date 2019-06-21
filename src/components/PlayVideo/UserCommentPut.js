import React, { Component } from 'react'
import axios from 'axios'

// Permet d'inserer des données pour un test dans la table "comment"

class UserCommentPut extends Component {
    state = {
        id_comment: '',
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
    axios.put(`http://localhost:3000/comment/put_comment/${this.state.id_comment}`, this.state)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

}

render() {
    const { comment, id_comment, profil_id_profil, popularity_id_popularity, general_video_id_general_video } = this.state
    return (
    <div>
        <form onSubmit={this.submitHandler}>
            <div>
                Comment:<input type='text' name="comment" value={comment} onChange={this.changeHandler} />
            </div>
            <div>
            id_comment:<input type="text" name="id_comment" value={id_comment} onChange={this.changeHandler} />
            profil_id_profil:<input type="text" name="profil_id_profil" value={profil_id_profil} onChange={this.changeHandler} />
            popularity_id_popularity:<input type="text" name="popularity_id_popularity" value={popularity_id_popularity} onChange={this.changeHandler} />
            general_video_id_general_video:<input type="text" name="general_video_id_general_video" value={general_video_id_general_video} onChange={this.changeHandler} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
}

export default UserCommentPut






