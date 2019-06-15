import React, { Component } from 'react';
import axios from 'axios'
import './UserCommentGet.css';
import Picture from '../../Images-tripitto/Icon/User/hover.png';



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
        <div key={item.id_comment}>
            {/* <li>{item.profile_picture}</li> */}
            <img className="pictureuser" src={Picture} alt= "pictureuser"/>
            <span>{item.action_date_comment}</span>
            <span>{item.author_comment}</span>
            <div className="comment">{item.comment}
            </div>
        </div>
   ))}
        {this.state.picture.map(item => (
        <li key={item.id_comment}>
        <li>{item.profile_picture}</li>
        <li>{item.action_date_comment}</li>
        <li>{item.author_comment}</li>
        <li>{item.comment}</li>
    </li>
        
        ))}
        
    </>
    )
    }
}

export default UserCommentGet;
