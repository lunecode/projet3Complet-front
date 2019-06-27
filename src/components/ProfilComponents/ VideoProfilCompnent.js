import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';
import { NavLink } from 'react-router-dom'
import iconSearch from '../../Images-tripitto/Icon/TRAILING ICON.png'


class  VideoProfilCompnent extends Component {
    state = {
        videos: [],
      };
      componentDidMount() {
        this.getVideo()
      }

      getVideo = async () => {
        const res = await axios.get('http://localhost:3000/general_video/get_general_video_limite1/1')
        this.setState({ videos: res.data })
        console.log(this.state.videos)
      }
    render() {
// const { filterVideo } = this.props;
    const opts = {
        height: '490',
        width: '850',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
        return (

<div className="VideoProfil">
  <div className="membres-profil">
        <img src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" alt="pictures profil" />
        <div className="membres-profil-detail">
          <h4>Julien Mbappé</h4>
          <p>Membre depuis le 20/02/2019</p>
        </div>
      </div>
      <div className='position-bloc'>
        <div className='profil-menu'>
          <ul>
            <li>
              <NavLink
                className="nav"
                to="/Profil" exact>Profil</NavLink>
            </li>
            <li>
              <NavLink
                to="/Video" exact >Video</NavLink>
            </li>
            <li>
              <NavLink
                to="/Abonnements" exact >Abonnements</NavLink>
            </li>
            <li>
              <NavLink
                to="/Abonnés" exact >Abonnés</NavLink>
               </li>
               <li>
              <NavLink
                to="/Notifications" exact >Notifications</NavLink>
            </li>
            <li>
              <NavLink
                to="/Security" exact >Sécurité</NavLink>
            </li>
            <li>
              <NavLink
                to="/Mettre_à_niveau" exact >Mettre à niveau</NavLink>
            </li>
          </ul>
        </div>

        <div><h3>Video(5)</h3></div>

       <div className="body"> <div className="countainer"><input type="text" maxlength= "12" placeholder="Search..." class="searchbar"/>
  <img src="https://images-na.ssl-images-amazon.com/images/I/41gYkruZM2L.png" alt="Magnifying Glass" className="button"></img>
   </div>
</div>

        {this.state.videos.map(item => (
        <div className="container_video">
        <div key={item.id_general_video}>
          <div className="video_user">
            <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady}
            width="320px" height="100px"/>
          </div>
          <div className="video_user">
            <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady} 
            width="320" height="240"/>
          </div>
          <div className="video_user">
            <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady}/>
          </div>
          <div className="video_user">
            <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady}/>
          </div>
          <div className="video_user">
            <YouTube  videoId={item.video_link} opts={opts} onReady={this._onReady}/>
          </div>
        </div>
     </div>
        ))}
   
   
    </div>
            </div>
        );
    }
}

export default  VideoProfilCompnent;