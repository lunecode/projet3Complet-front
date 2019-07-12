import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ModaldisplayProfil.scss'
import Avatar from '../../Images-tripitto/Icon/User/normal.png';

class ModaldisplayProfi extends Component {
    state={
        isModalSecurityOpen:false,
      }
     openModalSecurity =() => {
     this.setState( { isModalSecurityOpen: true} )
     console.log(this.state.isModalSecurityOpen);
     }
     
     closeModalSecurity = () => {
        this.setState({ isModalSecurityOpen: false })
        console.log(this.state.isModalOpen);
     }
     
     componentDidMount() {
        this.openModalSecurity()
        this.closeModalSecurity()
     }

      render() {
        return ( 
          <div className="container-display_video">
          <button onClick={this.openModalSecurity}>
          <img className="img3" src={Avatar} alt=""/></button>
          <div className="Modal_display_video">
            <div className={this.state.isModalSecurityOpen ?'affichage-block_display':'display-none'} >
          <div className="buttons_confirmer_annuler_display">
          <li> <NavLink exact to="/Profil">Gérer mon Profil</NavLink> </li>
          <li> <NavLink exact to="/Favoris">Mes favoris</NavLink> </li>
          <div className=""onClick={this.closeModalSecurity}><button >Close</button></div>
          </div>
     </div>
          </div>
          </div>
        );
      }
     }

export default ModaldisplayProfi;