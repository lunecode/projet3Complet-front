import React, { Component } from 'react'
import axios from 'axios'


// UPLOAD PAGE 2 / TRAVEL INFORMATION
// ALLOW TO DELETE DATA OF "TRAVEL INFORMATION" TABLE WITH THE ID 
// TEST OK

// MUST SEE FOR THE "TRAVEL_TYPE" COLUMN TO CHANGE TYPE TO ENUM ON NOT VARCHAR ==> DONE, NEED INFORM OTHER TO DO THE CHANGE

// REVIEW THE TRAVEL_STEP AND TRAVEL_INFORMATION TABLES AS THE TRAVEL_INFORMATION TABLE COLUMNS:
// CURRENCY, ACCOMODATION_BUDGET, ACTIVITIES_BUDGET, TRAVEL_TYPE ARE BASED ON ITINERARY FROM THE TRAVEL_STEP TABLE



class DeleteTravelInformation extends Component {
  state = {
    id_travel_information: '',
    general_video_id_general_video: '',
  }

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  axios.delete(`http://localhost:3000/travel_information/delete_travelinformation/${this.state.id_travel_information}`, this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

}

render() {
  const { id_travel_information, general_video_id_general_video } = this.state
  return (
    <div>
      <form onSubmit={this.submitHandler}>
      <div>
          <p>Id de travel step</p>
          <input type='text' name="id_travel_information" value={id_travel_information} onChange={this.changeHandler} />
        </div>
        <div>
          <p>Id de la clé étrangère de general video</p>
          <input type='text' name="general_video_id_general_video" value={general_video_id_general_video} onChange={this.changeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
}

export default DeleteTravelInformation
