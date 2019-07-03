import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom'


import family from '../../Images-tripitto/Icon/Aventurier/En_famille.png'
import couple from '../../Images-tripitto/Icon/Aventurier/en couple.png'
import friend from '../../Images-tripitto/Icon/Aventurier/entre ami.png'
import alone from '../../Images-tripitto/Icon/Aventurier/seul.png'
import './PostTravelInformation.css';
// import ContinentList from '../json/Continent.json'
// import CountryList from '../json/Country.json'



// UPLOAD PAGE 2 / TRAVEL INFORMATION
// PAGE 55 TO 64 OF THE INVISION PAGE

// ALLOW TO INSERT DATA IN "TRAVEL INFORMATION" TABLE

// MUST SEE FOR THE "TRAVEL_TYPE" COLUMN TO CHANGE TYPE TO ENUM ON NOT VARCHAR ==> DONE, NEED INFORM OTHER TO DO THE CHANGE


// ALTER TABLE FOR DELETE "DEPARTURE_YEAR" COLUMN ==> DONE, NEED INFORM OTHER TO DO THE CHANGE

// MORE THAN A COUNTRY AND WORLD TOUR VISIBLE IN FRONT BUT DOES NOT INTERACT WITH THE BDD

// NB_STEP NOT FINISH




class PostTravelInformation extends Component {
  state = {
    travel_type: 0,
    idGeneralVideo: ''
    // continent: ContinentList
  }

  type1 = () => {
    this.setState({ travel_type: 1 })
  }
  type2 = () => {
    this.setState({ travel_type: 2 })
  }
  type3 = () => {
    this.setState({ travel_type: 3 })
  }
  type4 = () => {
    this.setState({ travel_type: 4 })
  }


  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  submitHandlerInformation = e => {
    e.preventDefault()
    axios.post('http://localhost:3000/travel_information/insert_travelinformation', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  getIdVideo = async () => {
    const res = await axios.get('http://localhost:3000/general_video/get_id_general_video')
    this.setState({ idGeneralVideo: res.data[0] })
    console.log(this.state.idGeneralVideo.id_general_video)
    }
    componentDidMount() {
      this.getIdVideo()
    }



  render() {
    // let i = 1
    const { countries, travel_duration, departure_month, nb_step, accomodation_budget, activities_budget } = this.state
    const id = this.state.idGeneralVideo.id_general_video
    return (
      <>
        <form onSubmit={this.submitHandlerInformation}>
          <div className='grid_postInformation'>
            <div className='empty'></div>

            {/* {this.state.videos.map(item => (
          <li key={item.id_general_video}>
            <p>{item.video_title}</p>
            <Youtube videoId={item.video_link} onReady={this._onReady} />
            <p>{item.video_description}</p>
            <p>{item.equipment}</p>
            <img src={item.cover_picture} alt={item.video_title}></img>
            <p>{item.profil_id_profil}</p>
          </li>
        ))} */}


            {/* <div className="continent">
              <p>Destination*</p>
              <input className="input-continent" type='text' name="continent" placeholder='continent' value={continent} onChange={this.changeHandler} />
            </div> */}

            <div className="continent">
              <p>Destination*</p>
              <input className="input-continent" type='text' name="continent" placeholder='continent' />
            </div>

            <div className="country">
              <p>Pays</p>
              <input className="input-country" type='text' name="countries" placeholder="country" value={countries} onChange={this.changeHandler} />
            </div>
            <div className="moreCountry">
              <input type="checkbox" id="moreCountry" name="moreCountry" />
              <label for="moreCountry">Plus d'un pays </label>
            </div>
            <div className="world">
              <input type="checkbox" id="world" name="world" />
              <label for="world">Tour du monde </label>
            </div>
            <div className="title-month">
              <p>Date de départ*</p>
            </div>
            <div className="month">
              <input className="input-month" type="date" min="1990-01-01" max="2050-01-01" name="departure_month" value={departure_month} onChange={this.changeHandler} />
            </div>


            <div className="title-duration">
              <p>Durée du voyage*</p>
            </div>
            <div className="duration">
              <input className="input-duration" type='number' name="travel_duration" value={travel_duration} onChange={this.changeHandler} />
            </div>
            <div className="day">
              <p>jours</p>
            </div>
            <div className="step">
              <p>Itinéraire</p>
              <input className="input-step" type='number' name="nb_step" value={nb_step} onChange={this.changeHandler} />
            </div>


            <div className="euros">
              <input type="checkbox" name="currency" value='€' onChange={this.changeHandler} />
              <label for="currency"> € </label>
            </div>
            <div className="dollar">
              <input type="checkbox" name="currency" value='$' onChange={this.changeHandler} />
              <label for="currency"> $ </label>
            </div>
            <div className="title-accomodation">
              <p>Budget logement</p>
            </div>
            <div className="accomodation_information">
              <input className="input-accomodation" type="number" name="accomodation_budget" value={accomodation_budget} onChange={this.changeHandler} />
            </div>
            <div className="title-activities">
              <p>Repas et activités</p>
            </div>
            <div className="activities">
              <input className="input-activities" type="number" name="activities_budget" value={activities_budget} onChange={this.changeHandler} />
            </div>



            <div className="title-type">
              <p>Type de voyage</p>
            </div>
            <input className="input-travel_type" type="text" name="travel_type" value={this.state.travel_type} onChange={this.changeHandler} />
            <div className="travel_type" onClick={this.type1}>
              <img src={family} alt="En famille"></img>
              <p>En famille</p>
            </div>
            <div className="travel_type2" onClick={this.type2}>
              <img src={couple} alt="En couple"></img>
              <p>En couple</p>
            </div>
            <div className="travel_type3" onClick={this.type3}>
              <img src={friend} alt="Entre amis"></img>
              <p>Entre amis</p>
            </div>
            <div className="travel_type4" onClick={this.type4}>
              <img src={alone} alt="Aventurier seul"></img>
              <p>Aventurier seul</p>
            </div>


            <div className="fk-video">
              <p>Clé étrangère de l'id général video*</p>
              <input className="input-temp" type="number" name="general_video_id_general_video" value={id} onChange={this.changeHandler} />
            </div>
            <div className="fk-continent">
              <p>Clé étrangère de l'id du continent*</p>
              <p>1 - Autres, 2 - Afrique, 3 - Amerique, 4 - Asie - Oceanie, 5 - Europe</p>
              <input className="input-temp" type="number" name="continent_id_continent" value={this.continent} onChange={this.changeHandler} />
            </div>


            <div className="save_button">
              <button className="save" type="submit" >ENREGISTRER</button>
            </div>
            <div className="preview_div_info">
              <NavLink to="/uploadVideo"><button className="preview" type="button">PRECEDENT</button></NavLink>
            </div>
            <div className="next_div_info">
              <NavLink to="/uploadTravelStep"><button className="next" type="button">SUIVANT</button></NavLink>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default PostTravelInformation;
