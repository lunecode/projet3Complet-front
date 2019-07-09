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
      <div className="Modal_delete_video">
        <button onClick={this.openModalSecurity}><img className="img4"src={Delete} alt=""/></button>
        <div className={this.state.isModalSecurityOpen ?'affichage-block':'display-none'} >
          <button onClick={this.removeDummy}>Removeeee</button></div>
        <div>
        <button onClick={this.closeModalSecurity}>close</button>
      </div>

      </div>
    );
  }
}
 export default ModalDeleteVideo;