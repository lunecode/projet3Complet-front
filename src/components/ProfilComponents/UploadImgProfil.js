import React, { Component } from 'react';
import axios from "axios"
import './UploadImgProfil.scss'

const IploadImgProfil=(props)=> {

    const data = props.profil_link
    console.log(props.profil_link);
          return (
              <div className="UploadVideo"> 
              <input type='file' name="video_link"

                  onChange={props.handelchange}
                  />
                   <img className="imageprofil" src={props.video_link} alt=""/><img src={`${data}`} width="100%" height="100%" className="img-profil-after" />
                  <button onClick={props.fileUploadHandler}>Télécharger</button> 
            
              </div>
  
  
          )
  
         }   
  

export default IploadImgProfil;
