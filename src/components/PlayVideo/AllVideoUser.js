import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';
import './AllVideoUser.css';

class AllVideoUser extends Component {
    state = {
    video: [],
};

getVideo = async () => {
    const res = await axios.get('http://localhost:3000/profil/get_video_user')
    this.setState({ video: res.data })
    console.log(this.state.video)
}
componentDidMount() {
    this.getVideo()
}

render() {
    const opts = {
        height: '250',
        width: '250',
        playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
        }
    };
    
    return (
    <>
        {this.state.video.map(item => (
        <li key={item.id_profil}>
            <li>{item.firstname}</li>
            <li>{item.lastname}</li>
            <li>{item.video_title}</li>
            {/* video youtube a inserer  */}
            <div className="allVideoUser">
            <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady}/>
            </div>
            <li>{item.video_description}</li>
            <li>{item.profil_id_profil}</li>
        </li>
        ))}
    </>
    )
    }
}

export default AllVideoUser;
