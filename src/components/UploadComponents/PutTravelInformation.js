import React, { Component } from 'react'
import axios from 'axios'




// UPLOAD PAGE 2 / TRAVEL INFORMATION
// ALLOW TO EDIT THE DATA OF "TRAVEL INFORMATION" TABLE WITH THE ID
// TEST OK



// REVIEW THE TRAVEL_STEP AND TRAVEL_INFORMATION TABLES AS THE TRAVEL_INFORMATION TABLE COLUMNS:
// CURRENCY, ACCOMODATION_BUDGET, ACTIVITIES_BUDGET, TRAVEL_TYPE ARE BASED ON ITINERARY FROM THE TRAVEL_STEP TABLE


class PutTravelInformation extends Component {
  state = {
    id_travel_information: '',
    continent: '',
    countries: '',
    departure_month: '',
    departure_year: '',
    travel_duration: '',
    nb_step: '',
    currency: '',
    accomodation_budget: '',
    activities_budget: '',
    travel_type: '',
    general_video_id_general_video: '',
  }

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}


submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  axios.put(`http://localhost:3000/travel_information/update_travelinformation/${this.state.id_travel_information}`, this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

}

render() {
  const { id_travel_information, continent, countries, departure_month, departure_year, travel_duration, nb_step, currency, accomodation_budget, activities_budget, travel_type, general_video_id_general_video } = this.state
  return (
    <div>
      <form onSubmit={this.submitHandler}>
      <div>
          <p>Id de travel information*</p>
          <input type='text' name="id_travel_information" value={id_travel_information} onChange={this.changeHandler} />
        </div>
      <div>
          <p>Continent*</p>
          <input type='text' name="continent" value={continent} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Pays</p>
          <input type='text' name="countries" value={countries} onChange={this.changeHandler} />
        </div>
        <div>
        <p>Mois de départ*</p>
          <input type='text' name="departure_month" value={departure_month} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Année de départ</p>
          <input type='number' name="departure_year" value={departure_year} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Durée du voyage*</p>
          <input type='number' name="travel_duration" value={travel_duration} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Itinéraire*</p>
          <input type='number' name="nb_step" value={nb_step} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Devise</p>
          <input type="text" name="currency" value={currency} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Budget logement</p>
          <input type="number" name="accomodation_budget" value={accomodation_budget} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Repas et activités</p>
          <input type="number" name="activities_budget" value={activities_budget} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Type de voyage</p>
          <input type="text" name="travel_type" value={travel_type} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Clé étrangère de Id général video</p>
          <input type="number" name="general_video_id_general_video" value={general_video_id_general_video} onChange={this.changeHandler} />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
}

export default PutTravelInformation
