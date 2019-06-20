import React, { Component } from 'react';
import Video from '../components/PlayVideo/Video';
import PopularityVideo from '../components/PlayVideo/PopularityVideo';
import UserNameFirstname from '../components/PlayVideo/UserNameFirstname';
import TravelInfo from '../components/PlayVideo/TravelInfo';
import DetailledInfo from '../components/PlayVideo/DetailledInfo';
import UserCommentGet from '../components/PlayVideo/UserCommentGet';
import UserCommentPost from '../components/PlayVideo/UserCommentPost';
import UserCommentPut from '../components/PlayVideo/UserCommentPut';
import UserCommentDelete from '../components/PlayVideo/UserCommentDelete';
import AllVideoUser from '../components/PlayVideo/AllVideoUser';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import './Playvideo.css';



class PlayVideo extends Component {
  render() {
    return (
      <>
        {/* <Navbar/> */}
        {/* <p>Affichage des informations de la video : </p> */}
        <Video/>
        {/* <p>Affichage des informations concernant la popularité de la vidéo</p> */}
        <PopularityVideo />
        {/* <p>Affichage des noms et prénoms du propriétaire de la video</p> */}
        <UserNameFirstname />
        {/* <p>Affichage des informations concernants relatives au parcours de l'utilisateur en vacance</p> */}

        <TravelInfo />
        <DetailledInfo />
        <AllVideoUser />
        
        {/* <p>Affichage des informations détaillées concernant le road trip</p> */}
        
        {/* <p>Permet de reccupérer les videos de l'user dans la page "lecture video"</p> */}
       
        <p>Permet d'inserer des commentaires sous la videos</p>
        <UserCommentPost />
        <p>Permet de reccuperer les commentaires sous la video</p>
        <UserCommentGet />
        <p>Permet de  modifier des commentaires sous la video</p>
        <UserCommentPut /> 
        <p>Permet de supprimer les commentaires sous la video</p>
        <UserCommentDelete />
{/*         
        <Footer/> */}
      </>
    )
  }
}


export default PlayVideo;
