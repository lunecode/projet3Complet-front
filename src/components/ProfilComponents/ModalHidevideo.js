import React, { Component } from 'react';
import './ModalHidevideo.scss'
import "./VideoProfil.scss"
import Vue from '../../Images-tripitto/Icon_Vidéo/Vue.png'


class ModalHidevideo extends Component {
  state = {
    isModalSecurityOpen: false,
  }


  openModalSecurity = (event) => {
    this.setState({ isModalSecurityOpen: true })
    // console.log(this.state.isModalSecurityOpen);
  }

  closeModalSecurity = (event) => {
    this.setState({ isModalSecurityOpen: false })
    // console.log(this.state.isModalOpen);
  }

  componentDidMount() {
    this.openModalSecurity()
    this.closeModalSecurity()
  }
  render() {
    return (
      <div className="container-Hide_video">
        <button onClick={this.openModalSecurity}>
          <img className="img3" src={Vue} alt="" /> </button>
        <div className="Modal_Hide_video">
          <div className={this.state.isModalSecurityOpen ? 'affichage-block' : 'display-none'} >
            <div className="alerte_info_Hide">Etes-vous sûre de vouloir masquervotre vidéo ?
     </div>
            <p className="description_alerte_Hide">En cliquant sur Confirmer, votre vidéo ne sera plus
             visible par la communauté.
             Vous pourrez à nouveau rendre votre vidéo visible à tout momonent.
       </p>

            <div className="buttons_confirmer_annuler_Hide">
              <div className="button_confirmer_Hide" onClick={this.closeModalSecurity}><button >ANNULER</button></div>
              <div className="button_annuler_Hide" onClick={this.closeModalSecurity}><button >CONFIRMER</button></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalHidevideo;