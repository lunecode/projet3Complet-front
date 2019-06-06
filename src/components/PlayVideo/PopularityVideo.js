import React, { Component } from 'react';
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
        <li key={item.id_popularity}>
            <li>{item.nb_views}</li> 
            <li>{item.nb_like_popularity}</li>
            <li>{item.nb_comment_popularity}</li>
            <li>{item.nb_share}</li>
            <li>{item.nb_playlist_included}</li>
        </li>
        ))}
    </>
    )
    }
}

export default PopularityVideo;
