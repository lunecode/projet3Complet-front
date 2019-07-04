import React, { Component } from 'react';
import axios from 'axios'
import './UserCommentGet.css';
import Picture from '../../Images-tripitto/Icon/User/hover.png';
import EditCom from '../../Images-tripitto/Icon/Edit.png';



class UserCommentGet extends Component {
    state = {
    idComment: '',
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
    let i = 1;


    const url = window.location.href;
    const idComment = url.slice(32)
    console.log(idComment)
    return (
    <>
        {this.state.comment.filter(item => 
            item.id_comment === idComment).map( item => (
                <div className="container_get" key={i++}>
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
        <div className="container_get1" key={i++}>
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
