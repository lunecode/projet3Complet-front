import React, { Component } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';

import { NavLink } from 'react-router-dom'

import family from '../../Images-tripitto/Icon/Aventurier/En_famille.png'
import couple from '../../Images-tripitto/Icon/Aventurier/en couple.png'
import friend from '../../Images-tripitto/Icon/Aventurier/entre ami.png'
import alone from '../../Images-tripitto/Icon/Aventurier/seul.png'
import './PostTravelInformation.css';


// UPLOAD PAGE 2 / TRAVEL INFORMATION
// PAGE 55 TO 64 OF THE INVISION PAGE

// ALLOW TO INSERT DATA IN "TRAVEL INFORMATION" TABLE

// MUST SEE FOR THE "TRAVEL_TYPE" COLUMN TO CHANGE TYPE TO ENUM ON NOT VARCHAR ==> DONE, NEED INFORM OTHER TO DO THE CHANGE


// ALTER TABLE FOR DELETE "DEPARTURE_YEAR" COLUMN ==> DONE, NEED INFORM OTHER TO DO THE CHANGE

// MORE THAN A COUNTRY AND WORLD TOUR VISIBLE IN FRONT BUT DOES NOT INTERACT WITH THE BDD

// NB_STEP NOT FINISH




class PostTravelInformation extends Component {
  state = {
    // videos: [],
    travel_type: 0
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


  // getVideo = async () => {
  //   const res = await axios.get('http://localhost:3000/general_video/get_general_video')
  //   this.setState({ videos: res.data })
  //   console.log(this.state.videos)
  // }
  // componentDidMount() {
  //   this.getVideo()
  // }


  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/travel_information/insert_travelinformation', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    let i = 1
    const { continent, countries, travel_duration, departure_month, nb_step, accomodation_budget, activities_budget, general_video_id_general_video, } = this.state
    return (

      <>

{/* 
        {this.state.videos.map(item => (
          <div className="video_link" key={i++}>
            <Youtube className="video" videoId={item.video_link} onReady={this._onReady}
            />
          </div>
        ))} */}




        <form onSubmit={this.submitHandler}>
          <div className='grid_postInformation'>

            <div className='empty'></div>

            <div className="continent">
              <p>Destination*</p>
              <input className="input-continent" type='text' name="continent" placeholder='continent' value={continent} onChange={this.changeHandler} />
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





            <div className="fk-temp">
              <p>Clé étrangère de l'id général video*</p>
              <input className="input-temp" type="number" name="general_video_id_general_video" value={general_video_id_general_video} onChange={this.changeHandler} />
            </div>

            <button className="save" type="submit">ENREGISTRER</button>

            <button className="preview" type="button"><NavLink exact to="/">PRECEDENT</NavLink></button>

            <button className="next" type="button"><NavLink exact to="/uploadTravelStep">SUIVANT</NavLink></button>


          </div>
        </form>
      </>
    )
  }
}

export default PostTravelInformation;
