import React, { Component } from 'react';
import axios from "axios"
import './UploadImgProfil.scss'

class IploadImgProfil extends Component {
  state = {
    profil_link: "",
  }
  //envoyer a la base de donnée
  fileUploadHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/profil/insert_profil', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  //ouvrir le fichier et le convertir  en binair
  handelchange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ profil_link: e.target.result }, () => {
        console.log("video data", this.state.profil_link)
      })
    }
  }
  //convertir en binair
  blob2file = (blobData) => {
    const fd = new FormData();
    fd.set('a', blobData);
    return fd.get('a');
  }
  render() {
    //permet d'afficher la photo
    const data = this.state.profil_link
    console.log(this.state);
          return (
              <div className="UploadVideo"> 
              <input type='file' name="video_link"
              
                  onChange={this.handelchange}
                  />
                   <img className="imageprofil" src={this.video_link} alt=""/><img src={`${data}`} width="100%" height="100%" className="img-profil-after" />
                  <button onClick={this.fileUploadHandler}>Télécharger</button> 
            
              </div>
  
  
          )
  
         }   
   }
  
  


export default IploadImgProfil;