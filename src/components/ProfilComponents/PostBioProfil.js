import React from 'react'
import "./PostBioProfil.scss" 

const PostBioProfil =(props)=>{
    return (
      <div className="PostBioProfil">
        <form >
        <div className="Bio">
          <h3>Bio </h3>
            <textarea type='text' name="bio" value={props.bio} onChange={props.changeHandler}
            placeholder="Parlez de votre personnalité de vaoyageur
            et vos talents de vidéaste ou photohtaphe .
            Révélez-nous la partie de globe que vous connaissez la mieux.
            Avouez votre plus grad rêve de voyageur "/>

          </div>
          
        </form>
      </div>
    )
  }


export default PostBioProfil;
