import React from 'react';
import './UploadImgProfil.scss'

const IploadImgProfil=(props)=> {
    const data = props.profil_link
    console.log(props.profil_link);
          return (
              <div className="UploadVideo"> 
              <input type='file' name="video_link"
                  onChange={props.handelchange}
                  />
                   <img className="imageprofil" src={props.video_link} alt="videolink"/><img src={`${data}`} alt="videolink" width="100%" height="100%" className="img-profil-after" />
                  <button onClick={props.fileUploadHandler}>Télécharger</button> 
            
              </div>
  
  
          )
  
         }   
  

export default IploadImgProfil;
// import React, { Component } from 'react';

// class UploadImgProfil extends Component {
//    state = {
//           image: null
//         }
     
//       handleChange=(event) =>{
//         this.setState({
//           image: URL.createObjectURL(event.target.files[0])}) 
//       }
//       render() {
        
          
//         return (
//           <div>
//             <input type="file" onChange={this.handleChange}/>
//             <img src={this.state.image} />
//           </div>
//         );
//       }
//     }

// export default UploadImgProfil;