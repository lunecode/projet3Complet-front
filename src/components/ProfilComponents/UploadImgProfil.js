import React, { Component } from 'react';
import axios from "axios"
import './UploadImgProfil.scss'
  

class IploadImgProfil extends Component {

  state={
    video_link:"",


  }

      fileSelectedHandler= e=>{
          this.setState({ [e.target.name]: e.target.value})
      }
      fileUploadHandler =(e)=>{
          e.preventDefault()
          console.log(this.state)
          axios.post('http://localhost:3000/general_video/insert_general_video', this.state)
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
    this.setState({video_link : e.target.result}, ()=> {
      console.log("video data",this.state.video_link)
    })
   }
  }
  
  blob2file=(blobData)=> {
    const fd = new FormData();
    fd.set('a', blobData);
    return fd.get('a');
  }
  
      render() {
        const data=this.state.video_link
  
    console.log(this.state);
          return (
              <div className="UploadVideo"> 
              <input type='file' name="video_link"
              
                  onChange={this.handelchange}
                  />
                   <img className="imageprofil" src={this.video_link} alt=""/><img src={`${data}`} width="100%" height="100%"/>
                  <button onClick={this.fileUploadHandler}>Télécharger</button> 
              

              </div>
  
  
          )
  
         }   
   }
  
  


export default IploadImgProfil;