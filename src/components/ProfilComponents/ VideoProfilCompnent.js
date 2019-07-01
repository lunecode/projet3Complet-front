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

       <div className="searsh">
        <div className='search-bar-following'>
            <button type='submit'><img src={iconSearch} alt='icon search' /></button>
            <input type="text" name="" value="" placeholder="Retrouver un abonné" />
        </div>
</div>
</div>


 </div>



{/* /les videdo  */}
<div className="list_videos">
{this.state.videos.map(item => (
   <div key={item.id_general_video}>
          <div className="video_user1">
            <div className="status_durée">
            <div className="status1">
            <p className="status">En attente d'approbation</p>
            </div>
            <div className="durée1" >
            <p className="durée">12:45</p>
            </div>
            </div>
            
            <YouTube className="V" videoId={item.video_link} opts={opts}  onReady={this._onReady} />
            <h3>Dans es profondeur du canyon</h3>
            <h4>USA</h4>
            <p>0 VUES</p>
            <p>Il y a un jour</p>
          </div>
          
        </div> 
         ))} 
     </div>
      

  





    </div>
        );
    }
}

export default  VideoProfilCompnent;