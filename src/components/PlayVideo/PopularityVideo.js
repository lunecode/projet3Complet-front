import React, { Component } from 'react';
import './PopularityVideo.css';
import axios from 'axios'



// Permet l'affichage des données pour un test de la table " General_video "

class PopularityVideo extends Component {
    state = {
    popularity: [],
};

getPopularity = async () => {
    const res = await axios.get('http://localhost:3000/popularity/get_popularity')
    this.setState({ popularity: res.data })
    console.log(this.state.popularity)
}
componentDidMount() {
    this.getPopularity()
}

render() {
    
    return (
    <>
        {this.state.popularity.map(item => (
        <div className="popularity">
            <div key={item.id_popularity}>
                <div className="view"><span>Number views => {item.nb_views}</span><span>Number of like =>{item.nb_like_popularity}</span> <span>Number of comment popularity =>  {item.nb_comment_popularity}</span> <span>Number of share => {item.nb_share} </span><span>Number of video in the playlist =>{item.nb_playlist_included}</span>
                </div> 
            </div>
        </div>
        ))}
    </>
    )
    }
}

export default PopularityVideo;
