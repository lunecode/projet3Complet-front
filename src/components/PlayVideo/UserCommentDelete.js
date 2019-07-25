import React, { Component } from 'react'
import axios from 'axios'
import './UserCommentDelete.css';


class UserCommentDelete extends Component {
  state = {
    id_comment: '',

  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }



  submitHandler = e => {
    e.preventDefault()

    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/comment/delete_comment'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/comment/delete_comment'
    }

    axios.delete(`${pathApi}/${this.state.id_comment}`, this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

  }

  render() {
    const { id_comment } = this.state
    return (
      <div className="container_delete">
        <form onSubmit={this.submitHandler}>
          <div className="delete_input">
            id_comment:<input type="text" name="id_comment" value={id_comment} onChange={this.changeHandler} />
            <button type="submit">Submit</button>
          </div>

        </form>
        <div className="commentButton">
          <button className="buttonComment">VOIR PLUS</button>
        </div>
      </div>
    )
  }
}

export default UserCommentDelete






