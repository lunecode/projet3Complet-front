import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';
import './HomeComponents.scss'
import Navbar from '../Navbar';
import Footer from '../Footer';


// Permet l'affichage des données pour un test de la table " General_video "

class Display extends Component {
    state = {
        videos: [],
        discoveredVideo : [],
        videastes: [],
    };


    getRecentlyPublished = async () => {
        const res = await axios.get('http://localhost:3000/videoUpload/getdatavideo')
        this.setState({ videos: res.data })
        console.log(this.state.videos)
    }

    getdiscovered = async () => {
        const res = await axios.get('http://localhost:3000/videoUpload/getdatavideo')
        this.setState({ discoveredVideo: res.data })
        console.log(this.state.discoveredVideo)
    }

    getVideastes = async () => {
        const res = await axios.get('http://localhost:3000/profil/get_profil_general_video')
        this.setState({ videastes: res.data })
        console.log(this.state.videastes)
    }
    
    componentDidMount() {
        this.getRecentlyPublished()
        this.getdiscovered()
        this.getVideastes()
    }

    render() {
        const opts = {
            height: '150',
            width: '150',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        }

        return (
            <>
            <Navbar />
            <h4>RÉCEMMENT PUBLIÉ</h4>
            <div class="videoContainer">
                {this.state.videos.map(video => (
                    <div className="divVideoRecent" key={video.id_general_video}>
                        <div>
                            <p>{video.video_title} 
                                <YouTube videoId={video.video_link} opts={opts} onReady={this._onReady} /></p><br></br>
                        </div> 
                    </div>
                ))}
            </div>  
                <div class="imagesContainer">
                    {this.state.discoveredVideo.map(image => (
                        <div className="discoveredVideo" key={image.id_general_video}>
                                <p>{image.video_title}</p>
                                <img src={image.cover_picture} alt={image.video_title}></img>
                        </div> 
                    ))}
                </div>
            <div class="videastesContainer">
                {this.state.videastes.map(videaste => (
                    <div className="videastes" key={videaste.id_general_video}>
                        <p>{videaste.lastname} {videaste.firstname}</p>
                        <p>{videaste.location}</p>
                        <p>(Numbers) Video</p>
                    </div> 
                    ))}
            </div>
            <Footer />
            </>
        )
    }
}

export default Display;
