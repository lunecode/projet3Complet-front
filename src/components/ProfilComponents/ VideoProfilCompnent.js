import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';
import { NavLink } from 'react-router-dom'
import iconSearch from '../../Images-tripitto/Icon/TRAILING ICON.png'
import iconArrow from '../../Images-tripitto/iconAbonnements/icon-arrow.png'
import "./VideoProfilCompnent.scss"

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
        playerVars: { 
          autoplay: 0
        }
      };
      const { options, value } = this.state;
        return (

<div className="VideoProfilCompnent">
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

        {/*** les video *****/}
        {/* {this.state.videos.map(item => ( */}
        <div className="grid-profil-info">
  <div><h3>Video(5)</h3></div>
   <div className="filter">   
       <select class="w3-select" name="option">
    <option value="" disabled selected>triez par</option>
    <option value="1">Date de publication'</option>
    <option value="2">Status</option>
    <option value="3">Popularité</option>
    <option value="3">Titre</option>
  </select>
       </div> 

       <div className="wrap">
       <div  className="A" id="cover">
  <form>
    <div className="global">
     
   <div className="searchBar"> 
   <input className="inputAsma" type="text" name="city"
    placeholder="Search City..."/> 


     <span className="buttonSearsh" type="submit">
          <img  src={iconArrow} alt='icon fleche' width="20px" height="20px"/>
        </span>
    </div>
      <div className="searchBar" id="s-cover">
      
        
      </div>
    </div>
  </form>
</div>
</div>

     

        {/* <div key={item.id_general_video}>
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
        ))} */}
        {/* ********** */}
   </div>
    </div>
            </div>
        );
    }
}

export default  VideoProfilCompnent;