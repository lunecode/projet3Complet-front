import React, { Component } from 'react';
import axios from 'axios'
// import YouTube from 'react-youtube';
import './HomeComponentsPart3.scss'



// Permet l'affichage des données pour un test de la table " General_video "

class Display extends Component {
    state = {
        videos: [],
        discoveredVideo : [],
        videastes: [],
    };


    getRecentlyPublished = async () => {
        const res = await axios.get('http://localhost:3000/video/play_video')
        const recentlyPubVideo = res.data.slice(res.data.length - 5)
        this.setState({ videos: recentlyPubVideo })
        console.log('getRecentlyPublished', this.state.videos)
    }

    getdiscovered = async () => {
        const res = await axios.get('http://localhost:3000/video/play_video')
        this.setState({ discoveredVideo: res.data })
        console.log(this.state.discoveredVideo)
    }

    getVideastes = async () => {
        const res = await axios.get('http://localhost:3000/profil/get_profil')
        this.setState({ videastes: res.data })
        console.log(this.state.videastes)
    }
    
    componentDidMount() {
        this.getRecentlyPublished()
        this.getdiscovered()
        this.getVideastes()
    }
    
    render() {
        let i = 1
        // const opts = {
            //     height: '150',
            //     width: '150',
            //     playerVars: { // https://developers.google.com/youtube/player_parameters
        //         autoplay: 0
        //     }
        // }
        
        return (
            <>
    <h4>RÉCEMMENT PUBLIÉ</h4>
    <section className="RecentlyPublished">
        {/* <div className="itemRecentlyPublished">
            {this.state.videos.map(video => (
                    <div className="divVideoRecent" key={video.id_general_video}>
                            <p>{video.video_title} </p>
                            <YouTube videoId={video.video_link} opts={opts} onReady={this._onReady} />
                        </div> 
                ))}
        </div> */}
        <div className="item1RecentlyPublished">
            {this.state.videos.reverse().map(image => (
                
                <div className={"latestPublishedVideo" + i} key={i++}>
                    {/* <p>{image.video_title}</p> */}
                    <img src={image.cover_picture} alt={image.video_title}></img>
                </div> 
            ))}
        </div>
        <div className="item4contributor">
            <h4>Merci à nos contributeurs</h4>
        </div>
    </section>
            




            <div className="videoContainer">
                
            </div>  
                <div className="imagesContainer">
                    
                </div>
            <div className="videastesContainer">
                {this.state.videastes.map(videaste => (
                    <div className="videastes" key={videaste.id_profil}>
                        <p>{videaste.lastname} {videaste.firstname}</p>
                        <p>{videaste.location}</p>
                        <p>(Numbers) Video</p>
                    </div> 
                    ))}
            </div>
            </>
        )
    }
}

export default Display;
