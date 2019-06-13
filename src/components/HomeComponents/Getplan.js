import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';


class Getplan extends Component {
    state = {
        videos: [],
        nextvideo : [],
    };



    // getnextvideo = async () => {
    //     const res = await axios.get('http://localhost:3000/popularity/get_popularity_liked_general_video')
    //     this.setState({ nextvideo: res.data })
    //     console.log(this.state.nextvideo)
    // }
    getbestplan = async () => {
        const res = await axios.get('http://localhost:3000/popularity/get_popularity_liked_general_video')
        this.setState({ videos: res.data })
        console.log(this.state.videos)
    }


    componentDidMount() {
        // this.getnextvideo()
        this.getbestplan()
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
            <div className='container_nextdestination_title'>
                <h4>AVEC UN MAXIMUM DE BONS PLANS</h4>
            </div>      

            <div class="section_bestplan_video">
                {this.state.videos.map(video => (
                    <div className="divVideoPLan" key={video.id_general_video}>
                        <div>
                            <p>{video.video_title} 
                                <YouTube videoId={video.video_link} opts={opts} onReady={this._onReady} />
                            </p>
                            <p>{video.countries}</p>
                            <p>{video.video_user}</p>
                            <p>{video.number_tips}</p>
                            <p>{video.nb_views}</p>
                        </div> 
                    </div>
                ))}
            </div>  
           
            </>
        )
    }
}

export default Getplan;