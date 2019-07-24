import React from 'react';
import './ModalDeleteVideo.scss'
import "./VideoProfil.scss"
import Delete from '../../Images-tripitto/Icon_Vidéo/Delete.png'


const ModalDeleteVideo = (props) => {

  return (
    <div>
      <div className="container-modal_video" >
        <button onClick={props.openModalSecurity}>
          <img className="img4" src={Delete} alt="" />
        </button>
        <div className="Modal_delete_video">
          <div className={props.isModalSecurityOpen ? 'affichage-block' : 'display-none'} >
            <div className="alerte_info">Etes-vous sûre de vouloir supprimer votre vidéo ?
        </div>
            <p className="description_alerte">Votre vidéo et tous les bons plans partagés seront
            définitivement supprimées. Confirmer la suppresion en renseignant votre mot de passe.</p>

            <input placeholder="Mot de passe" type="password" />
            <div className="buttons_confirmer_annuler">
              <div className="button_confirmer" onClick={props.closeModalSecurity}><button >ANNULER</button></div>
              <div className="button_annuler" onClick={props.submitIdVideoDelete} >CONFIRMER</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

}
export default ModalDeleteVideo
