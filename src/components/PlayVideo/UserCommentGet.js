import React, { Component } from 'react';
import axios from 'axios'
import './UserCommentGet.css';
import Picture from '../../Images-tripitto/Icon/User/hover.png';
import EditCom from '../../Images-tripitto/Icon/Edit.png';



class UserCommentGet extends Component {
    state = {
    comment: [],
    picture: []
};

getComment = async () => {
    const res = await axios.get('http://localhost:3000/comment/get_comment')
    this.setState({ comment: res.data })
    // console.log(this.state.comment)
}

getProfil = async () => {
    const res = await axios.get('http://localhost:3000/profil/get_profil')
    this.setState({ picture: res.data })
    // console.log(this.state.picture)
}

componentDidMount() {
    this.getComment()
    this.getProfil()
}



render() {
    
    return (
    <>
        {this.state.comment.map(item => (
            <div className="container_get">
                <div  key={item.id_comment}>
            {/* <li>{item.profile_picture}</li> */}
                <img className="pictureuser" src={Picture} alt= "pictureuser"/>
                <span>{item.author_comment}  </span>
                <span>{item.action_date_comment}  </span>
                <div className="comment">{item.comment}
            {/* <button></button> */}
                <div className="editcomment">
                    <img className="editcom" src={EditCom} alt="pic modify" />
                </div>
                </div>
            </div>
            
        </div>
))}
        
        {this.state.picture.map(item => (
        <div className="container_get1">
        <div key={item.id_comment}>
        <span>{item.profile_picture}</span>
        <span>{item.action_date_comment}</span>
        <span>{item.author_comment}</span>
        <span>{item.comment}</span>
        </div>
        </div>
        ))}
        
    </>
    )
    }
}

export default UserCommentGet;
