import React, { Component } from 'react'
import axios from 'axios'
import "./PostBioProfil.scss" 

const PostBioProfil =(props)=>{
    return (
      <div className="PostBioProfil">
        <form >
        <div className="Bio">
          <h3>Bio </h3>
            <input type='text' name="bio" value={props.bio} onChange={props.changeHandler}
            placeholder="Parlez de votre personnalité de vaoyageur
            et vos talents de vidéaste ou photohtaphe 
            Rébélez-nous la partoe de globe que vous connaissez la mieux.
            Avouez votre plus grad rêve de voyageur "/>

          </div>
          
        </form>
      </div>
    )
  }


export default PostBioProfil;
