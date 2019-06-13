import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';
import './Getnextdestination.css'


class Getnextdestination extends Component {
    state = {
        nextvideo : [],
    };

    
    getnextvideo = async () => {
        const res = await axios.get('http://localhost:3000/general_video/get_general_video')
        this.setState({ nextvideo: res.data })
        console.log (Math.random(this.state.nextvideo))
    }
  
    componentDidMount() {
        this.getnextvideo()
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
            <div className="wrapper">
                <div className='container_nextdestination_title'>
                    <h2>PROJETEZ-VOUS DANS VOTRE PROCHAINE DESTINATION</h2>
                </div>   
            </div>
            
            <div class="section_nextdestination_video">
                {this.state.nextvideo.map(nextvideo => (
                    <div className="divVideoNext" key={nextvideo.id_general_video}>
                        <div>
                            <p>{nextvideo.video_title} 
                                <YouTube videoId={nextvideo.video_link} opts={opts} onReady={this._onReady} />
                            </p>
                            <p>{nextvideo.countries}</p>
                    
                        </div> 
                    </div>
                ))}
                </div>  
            
            </>
        )
    }
}

export default Getnextdestination;