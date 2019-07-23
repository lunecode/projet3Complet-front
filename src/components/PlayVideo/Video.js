import React, { Component } from 'react';
import axios from 'axios'
import './Video.css';
import YouTube from 'react-youtube';
import Pop from '../../Images-tripitto/IconVideo/pop.png';
import Pop2 from '../../Images-tripitto/IconVideo/pop2.png';
import Autoplay from '../../Images-tripitto/IconVideo/autoplay.png';
import Camera from '../../Images-tripitto/IconVideo/camera.png';
import Love from '../../Images-tripitto/Icon/Love.png';
import Comment from '../../Images-tripitto/Icon/Comment.png';
import Add from '../../Images-tripitto/Icons/Add-collection.png';
import Share from '../../Images-tripitto/Icon/Share.png';



// Permet l'affichage des données pour un test de la table " General_video "

class Video extends Component {
  state = {
    idVideo: '',
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
      playerVars: { 
        autoplay: 0
      }
    };

    const url = window.location.href;
    const idVideo = url.slice(32)
    console.log(url)

    return (
      <>
        
        {this.state.videos.filter(item => item.id_general_video == idVideo).map(item => (
          <div className="container_video" key={i++}>
            <div key={item.id_general_video}>
              <div className="video_user">
                <YouTube videoId={item.video_link} opts={opts} onReady={this._onReady} />
              </div>
              <div className="video_info">
                <div className="cont_video">
                  <div className="title_video">{item.video_title}
                    <span><img className="pop" src={Pop} alt="image_tripitto"></img></span>
                    <div><button className="buttonCommentVideo">MODIFIER</button>
                    </div>
                  </div>
                  <div className="className">
                    <span><img className="pop2" src={Pop2} alt="image_trip" ></img>
                    </span>
                  </div>
                </div>
                {this.state.popularity.map(item => (
                  <div className="likeComment" key={i++}>
                    <span><img src={Love} alt="love" />     {item.nb_like_popularity}</span>
                    <span> <img src={Comment} alt="comment" />{item.nb_comment_popularity}</span><span> <img className="share" src={Add} alt="share" /> {item.nb_playlist_included}</span> <span> <img src={Share} alt="Share" />{item.nb_share}
                    </span>
                  </div>

                ))}
                <div className="test" >
                  <div><span className="loading">Ajouté le {item.loading_time} -</span><span className="status"><i>{item.video_status}</i></span> </div>
                  <p className="text">{item.video_description}</p>
                  <p><img src={Camera} alt="camera" className="camera" /><a href="{item.link_equipment}>" target="_blank" className="equip_link">Go Pro Hero 6</a></p>

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
                <div className="autoplay">
                  <img className="auto" src={Autoplay} alt="equipment_picture"></img>

                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
}


export default Video;