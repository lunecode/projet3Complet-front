 import React, { Component } from 'react';
 import './ModalDeleteVideo.scss'
 
 import Delete from '../../Images-tripitto/Icon_Vidéo/Delete.png'

class ModalDeleteVideo extends Component {
  state={
    isModalSecurityOpen:false,
  }
 removeDummy=() =>{
    var elem = document.getElementById('dummy');
    elem.parentNode.removeChild(elem);
    return false;
  }

openModalSecurity =() => {
this.setState( { isModalSecurityOpen: true} )
console.log(this.state.isModalSecurityOpen);
}

closeModalSecurity = () => {
    this.setState({ isModalSecurityOpen: false })
    // console.log(this.state.isModalOpen);
}

componentDidMount() {
    this.openModalSecurity()
    this.closeModalSecurity()
}
  render() {
    
    return ( 
      <div className="as">
      
      <div className="modale_delete_open"><button onClick={this.openModalSecurity}><img src={Delete} alt=""/></button></div>
      <div className="Modal_delete_video">
        <div className={this.state.isModalSecurityOpen ?'affichage-block':'display-none'} >
        <div className="alerte_info">Etes-vous sûre de vouloir supprimer votre vidéo ?</div>
        <p className="description_alerte">Votre vidéo et tous les bons plans partagés seront
        définitivement supprimées. Confirmer la suppresion en renseignant votre mot de passe.
        </p>
        
        <input placeholder="Mot de passe"/>
      <div className="buttons_confirmer_annuler">
       <div className="button_confirmer"><button onClick={this.closeModalSecurity}>ANNULER</button></div> 
      <div className="button_annuler"> <button onClick={this.removeDummy}>CONFIRMER</button></div>
      </div>
</div>
      </div>
      </div>
    );
  }
}
 export default ModalDeleteVideo;