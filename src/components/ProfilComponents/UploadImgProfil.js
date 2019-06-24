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
      axios.post('http://localhost:3000/profil/insert_profil', this.state)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })  
  }
  
handelchange=(e)=>{
let files=e.target.files;
let reader=new FileReader();
reader.readAsDataURL(files[0]);
reader.onload=(e)=>{
this.setState({profil_link : e.target.result}, ()=> {
  console.log("video data",this.state.profil_link)
})
}
}

blob2file=(blobData)=> {
const fd = new FormData();
fd.set('a', blobData);
return fd.get('a');
}

  render() {
    const data=this.state.profil_link
console.log(this.state);
      return (
          <div className="UploadVideo"> 
          <input type='file' name="profil_link" 
                 onChange={this.handelchange}
              />
{/* <video preload="" src={`${data}`} type="video/mp4"></video>   */}
               <img src={`${data}`} width="100%" height="100%" />
              <button onClick={this.fileUploadHandler}>Télécharger</button> 
          
{/* <GetVideo />  */}
          </div>


      )

     }   
 }


export default IploadImgProfil;