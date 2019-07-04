import React, { Component } from 'react';
import './PopularityVideo.css';
import axios from 'axios'
// import Love from '../../Images-tripitto/Icon/Love.png';
// import Comment from '../../Images-tripitto/Icon/Comment.png';
// import Add from '../../Images-tripitto/Icons/Add-collection.png';
// import Share from '../../Images-tripitto/Icon/Share.png';




// Permet l'affichage des données pour un test de la table " General_video "

class PopularityVideo extends Component {
    state = {
    popularity: [],
};

getPopularity = async () => {
    const res = await axios.get('http://localhost:3000/popularity/get_popularity')
    this.setState({ popularity: res.data })
    // console.log(this.state.popularity)
}
componentDidMount() {
    this.getPopularity()
}

render() {
    
    return (
    <>
        {/* {this.state.popularity.map(item => (
        <div className="popularity">
            <div key={item.id_popularity}>
                <div className="view">                                    
                    <span><img src={Love} alt= "love"/>     {item.nb_like_popularity}</span> 
                    <span> <img src={Comment} alt="comment"/>{item.nb_comment_popularity}</span> <span><img src={Comment} alt="Comment"/> <img src={Share} alt="Share"/>{item.nb_share} </span><span><img className="share" src={Add} alt="share"/>{item.nb_playlist_included}</span>
                </div> 
            </div>
        </div>
        ))} */}
    </>
    )
    }
}

export default PopularityVideo;
