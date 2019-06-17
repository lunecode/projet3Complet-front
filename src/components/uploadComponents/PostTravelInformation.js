import React, { Component } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';


import './PostTravelInformation.css';


// UPLOAD PAGE 2 / TRAVEL INFORMATION
// ALLOW TO INSERT DATA IN "TRAVEL INFORMATION" TABLE
// TEST OK


// MUST SEE FOR THE "TRAVEL_TYPE" COLUMN TO CHANGE TYPE TO ENUM ON NOT VARCHAR ==> DONE, NEED INFORM OTHER TO DO THE CHANGE

// REVIEW THE TRAVEL_STEP AND TRAVEL_INFORMATION TABLES AS THE TRAVEL_INFORMATION TABLE COLUMNS:
// CURRENCY, ACCOMODATION_BUDGET, ACTIVITIES_BUDGET, TRAVEL_TYPE ARE BASED ON ITINERARY FROM THE TRAVEL_STEP TABLE


class PostTravelInformation extends Component {
  state = {
    videos: []
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  getVideo = async () => {
    const res = await axios.get('http://localhost:3000/general_video/get_general_video')
    this.setState({ videos: res.data })
    console.log(this.state.videos)
  }
  componentDidMount() {
    this.getVideo()
  }

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
    const { continent, countries, departure_month, departure_year, travel_duration, nb_step, currency, accomodation_budget, activities_budget, travel_type, general_video_id_general_video } = this.state
    return (
      <form onSubmit={this.submitHandler}>
        <div className='grid'>



          {this.state.videos.map(item => (
            <div className="video_link" key={i++}>
              <Youtube className="video" videoId={item.video_link} onReady={this._onReady}
              />
            </div>
          ))}

          <div className='empty'></div>



          <div className="continent">
            <p>Destination</p>
            <input className="input-continent" type='text' name="continent" placeholder='continent' value={continent} onChange={this.changeHandler} />
          </div>

          <div className="country">
            <p>Pays</p>
            <input className="input-country" type='text' name="countries" placeholder="country" value={countries} onChange={this.changeHandler} />
          </div>

          <div className="month">
            <p>Mois de départ*</p>
            <input type="date" min="1990-01-01" max="2050-01-01" name="the_date" />
            {/* <input className="input-month" type='text' name="departure_month" value={departure_month} onChange={this.changeHandler} /> */}
          </div>


          {/* <div className="">
              <p>Année de départ</p>
              <input type='number' name="departure_year" value={departure_year} onChange={this.changeHandler} />
            </div> */}

          <div className="duration">
            <p>Durée du voyage*</p>
            <input className="input-duration" type='number' name="travel_duration" value={travel_duration} onChange={this.changeHandler} />
          </div>

          <div className="step">
            <p>Itinéraire*</p>
            <input className="input-step" type='number' name="nb_step" value={nb_step} onChange={this.changeHandler} />
          </div>

          <div className="currency">
            <p>Devise</p>
            <input className="input-currency" type="text" name="currency" value={currency} onChange={this.changeHandler} />
          </div>

          <div className="accomodation">
            <p>Budget logement</p>
            <input className="input-accomodation" type="number" name="accomodation_budget" value={accomodation_budget} onChange={this.changeHandler} />
          </div>

          <div className="activities">
            <p>Repas et activités</p>
            <input className="input-activities" type="number" name="activities_budget" value={activities_budget} onChange={this.changeHandler} />
          </div>

          <div className="travel_type">
            <p>Type de voyage</p>
            <input className="input-travel_type" type="text" name="travel_type" value={travel_type} onChange={this.changeHandler} />
          </div>

          <div className="temp">
            <p>Clé étrangère de Id général video</p>
            <input className="input-temp" type="number" name="general_video_id_general_video" value={general_video_id_general_video} onChange={this.changeHandler} />
          </div>

          <button className="save" type="submit">ENREGISTRER</button>

          <button className="preview" type="button">PRECEDENT</button>

          <button className="next" type="button">SUIVANT</button>
        </div>
      </form>

    )
  }
}

export default PostTravelInformation;
