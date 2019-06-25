import React, { Component } from 'react';
import axios from "axios"
import './UploadImgProfil.scss'

class IploadImgProfil extends Component {
  state={
    profil_link:"",
  }

  fileUploadHandler =(e)=>{
      e.preventDefault()
      console.log(this.state)
      axios.post('http://localhost:3000/profil/uploaddufichie', this.state)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })  
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  



  render() {

console.log(this.state);
      return (
          <div className="UploadVideo"> 
  
         <form method="POST" enctype="multipart/form-data" action="uploaddufichier">
    <input type="file"  name="profil_link" value={this.state.profil_link} onChange={this.changeHandler}/>
    <button onSubmit={this.fileUploadHandler}> envoyer </button>
</form>
          </div>


      )

     }   
 }


export default IploadImgProfil;