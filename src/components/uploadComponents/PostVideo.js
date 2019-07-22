import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import './PostVideo.css'
import jwt from 'jsonwebtoken'
import UploadIcon from '../../Images-tripitto/Icon/Upload-Video.png'
import CoverIcon from '../../Images-tripitto/Icon/Upload Image.png'
import AboutVideo from '../../Images-tripitto/imgUploadVideo/AboutVideo.PNG'



// UPLOAD PAGE 1 / VIDEO AND DESCRIPTION
// ALLOW TO INSERT DATA IN "GENERAL_VIDEO" TABLE
// TEST OK
// NEED TO SEE HOW GET THE ID OF THE PROFIL WHEN IS LOGGING


class PostVideo extends Component {
  state = {
    profil_id_profil : ""
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  changeHandlerYoutube = (e) => {
    this.setState({ [e.target.name]: e.target.value.slice(32) })
  }

  submitHandler = e => {
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
  getIdProfil=()=>{
    const token = localStorage.getItem('token')
		const tokenDecoded = jwt.decode(token)
    const idProfilDecoded = tokenDecoded.id_profil
    this.setState({
      profil_id_profil:idProfilDecoded
    })
  }

  componentDidMount(){
    this.getIdProfil()
  }
  render() {
    
    const { video_title, video_link, video_description, equipment, link_equipment, equipment2, link_equipment2, equipment3, link_equipment3, cover_picture } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className='grid_postVideo'>

            <img src={AboutVideo} alt="About video" className="AboutVideo" />


            <div className="upload_link">
              <img className="uploadIconVideo" src={UploadIcon} alt="upload icon"></img>
              <p>Lien de la vidéo Youtube</p>
              <input className="input_upload" type='text' name="video_link" value={video_link} onChange={this.changeHandlerYoutube} />
            </div>

            <div className="title">
              <p>Titre*</p>
              <textarea rows="2" cols="134" placeholder="Escapade romantique dans la ville des lumières" type='text' name="video_title" value={video_title} onChange={this.changeHandler} />
            </div>


            <div className="description">
              <p>Description</p>
              <textarea rows="6" cols="134" placeholder="Une description qui donne envie, très envie" type="text" name="video_description" value={video_description} onChange={this.changeHandler} />
            </div>

            <div className="showreel">
              <input type="checkbox" />
              <label> Cette vidéo est un showreel qui présente mon portfolio vidéo</label>
            </div>

            <div className="title-equipment1">
              <p>Equipement utilisés pour filmer</p>
            </div>
            <div className="equipment1">
              <input className="input-equipment" placeholder="DJI Mavic Pro" type='text' name="equipment" value={equipment} onChange={this.changeHandler} />
            </div>
            <div className="title-link1">
              <p>Ajouter un lien web</p>
            </div>
            <div className="link1">
              <input className="input-link" type='text' name="link_equipment" value={link_equipment} onChange={this.changeHandler} />
            </div>




            <div className="title-equipment2">
            </div>
            <div className="equipment2">
              <input className="input-equipment2" placeholder="Sony Alpha 7" type='text' name="equipment2" value={equipment2} onChange={this.changeHandler} />
            </div>
            <div className="title-link2">
              <p>Ajouter un lien web</p>
            </div>
            <div className="link2">
              <input className="input-link2" type='text' name="link_equipment2" value={link_equipment2} onChange={this.changeHandler} />
            </div>


            <div className="title-equipment3">
            </div>
            <div className="equipment3">
              <input className="input-equipment3" placeholder="IPhone X" type='text' name="equipment3" value={equipment3} onChange={this.changeHandler} />
            </div>
            <div className="title-link3">
              <p>Ajouter un lien web</p>
            </div>
            <div className="link3">
              <input className="input-link3" type='text' name="link_equipment3" value={link_equipment3} onChange={this.changeHandler} />
            </div>



            <div className="cover-picture">
              <img className="uploadIconCover" src={CoverIcon} alt="upload icon"></img>
              <p>Photo de couverture</p>
              <input className="input-cover" type='text' name="cover_picture" value={cover_picture} onChange={this.changeHandler} />
            </div>


{/* THIS INPUT ALLOW TO INSERT THE ID PROFIL OF THE UPLOAD VIDEO BUT IS HIDDING FOR NOW UNTIL THE LOGIN WORKS */}
            <div className="temp">
              <input type="hidden" name="profil_id_profil" value={this.state.profil_id_profil} onChange={this.changeHandler} />

              {/* <input type="text" name="profil_id_profil" value={profil_id_profil} onChange={this.changeHandler} /> */}
            </div>

            <div className="submit-div">
              <button className="submit-button" type="submit">ENREGISTRER</button>
            </div>

            <div className="next-div">
              <NavLink to={`/uploadInformation/${this.props.idVideo}`}><button className="next-button" type="button">SUIVANT</button></NavLink>
            </div>


          </div>
        </form>
      </div>
    )
  }
}

export default PostVideo
