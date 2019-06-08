import React, { Component } from 'react';
import axios from 'axios'



class UserCommentGet extends Component {
    state = {
    comment: [],
    picture: [],
};

getComment = async () => {
    const res = await axios.get('http://localhost:3000/comment/get_comment')
    this.setState({ comment: res.data })
    console.log(this.state.comment)
}

getProfil = async () => {
    const res = await axios.get('http://localhost:3000/profil/get_profil')
    this.setState({ picture: res.data })
    console.log(this.state.picture)
}

componentDidMount() {
    this.getComment()
    this.getProfil()
}



render() {
    
    return (
    <>
        {this.state.comment.map(item => (
        <li key={item.id_comment}>
            <li>{item.profile_picture}</li>
            <li>{item.action_date_comment}</li>
            <li>{item.author}</li>
            <li>{item.comment}</li>
        </li>
   ))}
        {this.state.picture.map(item => (
        <li key={item.id_comment}>
        <li>{item.profile_picture}</li>
        <li>{item.action_date_comment}</li>
        <li>{item.author}</li>
        <li>{item.comment}</li>
    </li>
        
        ))}
        
    </>
    )
    }
}

export default UserCommentGet;
