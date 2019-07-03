import React, { Component } from 'react';
import axios from 'axios'
import './Video.css';
import YouTube from 'react-youtube';
import NumberTips from '../../Images-tripitto/IconVideo/Infosnbr.png';
import Play from '../../Images-tripitto/Icon/Play.png';
import Love from '../../Images-tripitto/Icon/Love.png';
import Comment from '../../Images-tripitto/Icon/Comment.png';
import Add from '../../Images-tripitto/Icons/Add-collection.png';
import Share from '../../Images-tripitto/Icon/Share.png';




// Permet l'affichage des données pour un test de la table " General_video "

class Video extends Component {
  state = {
  
    videos: [],
    popularity: []
  };

  getVideo = async () => {
    const res = await axios.get('http://localhost:3000/general_video/get_general_video')
    this.setState({ videos: res.data })
    console.log(this.state.videos)
  }

  getPopularity = async () => {
    const res = await axios.get('http://localhost:3000/popularity/get_popularity_liked_general_video')
    this.setState({ popularity: res.data })
    console.log(this.state.popularity)
  }

  componentDidMount() {

    this.getVideo()
    this.getPopularity()
  }

render() {
    let i = 1;
    const opts = {
        height: '490',
        width: '850',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
    return (
      
    <>
        {this.state.videos.filter(item => item.id_general_video === 1 ).map(item => (
         
        <div className="container_video" key={i++}>
        <div key={item.id_general_video}>
          <div className="video_user">
            <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady}/>
          </div>
          <div className="video_info">
            <div className="title_video">{item.video_title} <span><img className="play" src={Play} alt="play"/>{item.nb_views}</span><span className="number_tips"><img className="numberTips" src={NumberTips} alt="number tips"/>{item.number_tips}</span>
            <div><button className="buttonCommentVideo">MODIFIER</button>
            </div>
            </div>
            {this.state.popularity.map(item => (
              <div className="likeComment" key={i++}>
              <span><img src={Love} alt= "love"/>     {item.nb_like_popularity}</span> 
              <span> <img src={Comment} alt="comment"/>{item.nb_comment_popularity}</span><span> <img className="share" src={Add} alt="share"/> {item.nb_playlist_included}</span> <span> <img src={Share} alt="Share"/>{item.nb_share}
            </span>
            </div>

            ))}
            <div className="test" >
            <p><span className="loading">Ajouté le {item.loading_time} -</span><span className="status"><i>{item.video_status}</i></span> </p>
            <p className="text">{item.video_description}</p>
            <p><a href="{item.link_equipment}>" target="_blank">Go Pro Hero 6</a></p>
            
            </div>
            <div className="userVideo">
            <div className="pictureUser">
              <img className="pictureUser" src={item.cover_picture} alt="equipment_picture"></img>
              
              </div>
              <div className="container_suscribe">
              <p className="username">{item.video_user} </p>
                <button className="suscribe">S'ABONNER</button>
              </div>
            </div>
            
            {/* <a>{item.equipment}</a> */}
            
            {/* <a>{item.video_link}</a> */}
          </div>
        </div>

        </div>
        ))}
    </>
    )
    }
}

export default Video;
