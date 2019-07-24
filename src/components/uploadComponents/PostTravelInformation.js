import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom'

import family from '../../Images-tripitto/Icon/Aventurier/En_famille.png'
import couple from '../../Images-tripitto/Icon/Aventurier/en couple.png'
import friend from '../../Images-tripitto/Icon/Aventurier/entre ami.png'
import alone from '../../Images-tripitto/Icon/Aventurier/seul.png'
import AboutVideo2 from '../../Images-tripitto/imgUploadVideo/AboutVideo2.PNG'
import uploadVideoCard3 from '../../Images-tripitto/imgUploadVideo/uploadVideoCard3.PNG'
import itinerary_nb from '../../Images-tripitto/imgUploadVideo/itinerary_nb.PNG'

import './PostTravelInformation.css';

import ContinentList from '../json/Continent.json'
import CountryList from '../json/Country.json'
import { emptyStatement } from '@babel/types';



// UPLOAD PAGE 2 / TRAVEL INFORMATION
// PAGE 55 TO 64 OF THE INVISION PAGE

// ALLOW TO INSERT DATA IN "TRAVEL INFORMATION" TABLE

// MUST SEE FOR THE "TRAVEL_TYPE" COLUMN TO CHANGE TYPE TO ENUM ON NOT VARCHAR ==> DONE, NEED INFORM OTHER TO DO THE CHANGE

// ALTER TABLE FOR DELETE "DEPARTURE_YEAR" COLUMN ==> DONE, NEED INFORM OTHER TO DO THE CHANGE

// MORE THAN A COUNTRY AND WORLD TOUR VISIBLE IN FRONT BUT DOES NOT INTERACT WITH THE BDD

// NB_STEP NOT FINISH




class PostTravelInformation extends Component {
  state = {
    general_video_id_general_video: '',
    continent_id_continent: ''
  }


  // ALLOW TO GIVE THE ID OF THE ENUM

  type1 = () => {
    // ALLOW TO DISPLAY A BORDER WHEN WE CLIC ON THE IMG
    // const images = document.querySelectorAll(".travel_type");
    // images.forEach(function(i) {i.addEventListener("click", function(event) {
    // i.classList.toggle("selected");
    // })});
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

  // ALLOW TO GIVE THE ID OF THE CONTINENT WHEN SELECTED

  continentID = (e) => {
    if (e.target.value === 'AUTRES') {
      this.setState({ continent_id_continent: 1 })
    } else if (e.target.value === 'AFRIQUE') {
      this.setState({ continent_id_continent: 2 })
    } else if (e.target.value === 'AMERIQUE') {
      this.setState({ continent_id_continent: 3 })
    } else if (e.target.value === 'ASIE-OCEANIE') {
      this.setState({ continent_id_continent: 4 })
    } else if (e.target.value === 'EUROPE') {
      this.setState({ continent_id_continent: 5 })
    } else if (e.target.value === 'Continent') {
      this.setState({ continent_id_continent: emptyStatement })
    }
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



  render() {
    // INITIALIZE THE STATE FOR THE FORM
    const { countries, travel_duration, departure_month, accomodation_budget, activities_budget } = this.state


    // ALLOW TO ACCES CONTINENT JSON
    const continent = ContinentList.map((item) =>
      <option key={item.id}>{item.continent}</option>)

    // ALLOW TO ACCESS COUNTRY JSON
    const country = CountryList.map((item) =>
      <option key={item.id}>{item.country}</option>)

    // ALLOW TO ASSOCIATE THE ID OF THE VIDEO TO THE TRAVEL INFORMATION
    const url = window.location.href.slice(40);
    // this.setState = ({ general_video_id_general_video: url})
    this.state.general_video_id_general_video = url

    return (
      <>
        <form onSubmit={this.submitHandlerInformation}>

          <div className='grid_postInformation'>

            <div className='AboutVideo2'>
              <img src={AboutVideo2} alt="About video"></img>
            </div>


            <img src={uploadVideoCard3} alt="upload video" className="uploadVideoCard"></img>


            <div className="continent" onClick={this.continentID}>
              <label>
                Destination *

                <select className="input-continent" name="continent" >
                  <option>Continent</option>
                  {continent}
                </select>

              </label>
            </div>

            <div className="country">
              <select className="input-country" name="countries" value={countries} onChange={this.changeHandler}>
                <option>Pays</option>
                {country}
              </select>
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
              <input className="input-duration" type='text' name="travel_duration" value={travel_duration} onChange={this.changeHandler} />
            </div>
            <div className="day">
              <p>jours</p>
            </div>




            <div className="step">
              <img src={itinerary_nb} alt="itinerary number"></img>
            </div>

            {/* ITS THE INPUT FOR POST ITINERARY DATA TO THE DB

            <div className="step">
              <p>Itinéraire</p>
              <input className="input-step" type='number' name="nb_step" value={nb_step} onChange={this.changeHandler} />
            </div> */}


            <div className="budget">
              <p>Budget moyen par personne et par jour</p>

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
              <p>Logement</p>
            </div>
            <div className="accomodation_information">
              <input className="input-accomodation" type="text" name="accomodation_budget" value={accomodation_budget} onChange={this.changeHandler} />
            </div>
            <div className="title-activities">
              <p>Repas et activités</p>
            </div>
            <div className="activities">
              <input className="input-activities" type="text" name="activities_budget" value={activities_budget} onChange={this.changeHandler} />
            </div>



            <div className="title-type">
              <p>Type de voyage</p>
            </div>


            {/* THIS INPUT RECEIVED THE ID OF THE TRAVEL TYPE ENUM, ITS HIDDEN FOR THE FRONT */}

            <input className="input-travel_type" type="hidden" name="travel_type" value={this.state.travel_type} onChange={this.changeHandler} />

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





            {/* THIS INPUT ALLOW TO CAPTURE THE ID OF THE VIDEO ASSOCIATE WITH THE INFORMATION OF THIS PAGE */}
            <div className="fk-video">
              <input className="input-temp" type="hidden" name="general_video_id_general_video" value={this.state.general_video_id_general_video} onChange={this.changeHandler} />
            </div>



            {/* THIS INPUT ALLOW TO CAPTURE THE ID OF THE CONTINENT SELECTED BY THE USERS */}
            <div className="fk-continent">
              {/* <p>1 - Autres, 2 - Afrique, 3 - Amerique, 4 - Asie - Oceanie, 5 - Europe</p> */}
              <input className="input-temp" type="hidden" name="continent_id_continent" value={this.state.continent_id_continent} onChange={this.changeHandler} />
            </div>





            <div className="save_button">
              <button className="save" type="submit" >ENREGISTRER</button>
            </div>
            <div className="preview_div_info">
              <NavLink to={`/uploadVideo/${this.state.general_video_id_general_video}`}><button className="preview" type="button">PRECEDENT</button></NavLink>
            </div>
            <div className="next_div_info">
              <NavLink to={`/uploadTravelStep/${this.state.general_video_id_general_video}`}><button className="next" type="button">SUIVANT</button></NavLink>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default PostTravelInformation;
