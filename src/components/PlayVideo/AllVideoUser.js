import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';
import './AllVideoUser.css';

class AllVideoUser extends Component {
    state = {
    video: [],
}; 

getVideo = async () => {
    const res = await axios.get('http://localhost:3000/general_video/get_general_video')
    this.setState({ video: res.data })
   
}
componentDidMount() {
    this.getVideo()
}

render() {

    let i = 1;

    
    
    const opts = {
        height: '150',
        width: '150',
        playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
        }
    };

    const url = window.location.href;
    const idVidUser = url.slice(32)
    
    
    return (
    <>
        {this.state.video.filter(item => 
        item.id_general_video == idVidUser).map(item =>(
        <div className="allVideoUser" key={i++}>
            <div className="contvid" key={item.id_general_video}>
           {/* <h4> {item.lastname} {item.firstname}</h4>  */}
        <div className="youtubeVid">
        <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady}/>
        </div>
        <div className="userVid" key={item.id_profil}>
            <h4>{item.video_title}</h4>
            {/* video youtube a inserer  */}
            <p>{item.video_description}</p>
            {/* <p>{item.profil_id_profil}</p>  */}
        </div>
        </div>
        </div>
        ))}
        
    </>
    )
    }
}

export default AllVideoUser;
