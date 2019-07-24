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

    }

    getCurrentDate(separator = '') {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
    }

    componentDidMount() {
        this.getComment()
        this.getProfil()
        this.getCurrentDate()

    }

    render() {
        let i = 1;

        const url = window.location.href;
        const idVideo = url.slice(32)

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let separator = '/'


        return (
            <>
                {this.state.comment.filter(item => item.general_video_id_general_video == idVideo).map(item => (
                    <div className="container_get" key={i++}>
                        <div key={item.video_comment}>


                            <div className="container_date"><img className="pictureuser" src={Picture} alt="pictureuser" />
                                <span className="author">{item.author_comment}  </span>
                                <span className="comment_date">{date}{separator}{month < 10 ? `0${month}` : `${month}`}{separator}{year}
                                </span>
                            </div>
                            <div className="comment">
                                <div className="display_com">{item.comment}</div>
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
