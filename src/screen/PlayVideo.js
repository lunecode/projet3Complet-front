import React, { Component } from 'react';
import Video from '../components/PlayVideo/Video';
import PopularityVideo from '../components/PlayVideo/PopularityVideo';
import UserNameFirstname from '../components/PlayVideo/UserNameFirstname';
import TravelInfo from '../components/PlayVideo/TravelInfo';


class PlayVideo extends Component {
  render() {
    return (
      <>
        <p>Affichage des informations de la video : </p>
        <Video  />
        <p>Affichage des informations concernant la popularité de la vidéo</p>
        <PopularityVideo />
        <p>Affichage des noms et prénoms du propriétaire de la video</p>
        <UserNameFirstname />
        <p>Affichage des informations concernants relatives au parcours de l'utilisateur en vacance</p>
        <TravelInfo />
      </>
    )
  }
}


export default PlayVideo;
