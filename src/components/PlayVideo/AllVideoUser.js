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

    let i = 1;
    
    const opts = {
        height: '150',
        width: '150',
        playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
        }
    };
    
    return (
    <>
        {this.state.video.map(item => (
          
        <div className="allVideoUser" key={i++}>
           {/* <h4> {item.lastname} {item.firstname}</h4>  */}
        <div className="youtubeVid">
        <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady}/>
        </div>
        
        
        <div className="containerAllVideoUser">
        <div key={item.id_profil}>
            <h4>{item.video_title}</h4>
            {/* video youtube a inserer  */}
            
            <p>{item.video_description}</p>
            <p>{item.profil_id_profil}</p>
        </div>
        </div>
        
        </div>
        ))}
        
    </>
    )
    }
}

export default AllVideoUser;
