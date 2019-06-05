import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';

// Permet l'affichage des données pour un test de la table " General_video "

class Display extends Component {
    state = {
        videos: [],
    };


    getRecentlyPublished = async () => {
        const res = await axios.get('http://localhost:3000/videoUpload/getdatavideo')
        this.setState({ videos: res.data })
        console.log(this.state.videos)
    }

    componentDidMount() {
        this.getRecentlyPublished()
    }

    render() {
        const opts = {
            height: '190',
            width: '190',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        }

        return (
            <>
                {this.state.videos.map(video => (
                    <li key={video.id_general_video}>
                        {video.video_title} <br></br>
                        <YouTube videoId={video.video_link} opts={opts} onReady={this._onReady} />
                    </li>
                ))}
            </>
        )
    }
}

export default Display;
