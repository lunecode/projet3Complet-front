import React, { Component } from 'react'
import axios from 'axios'


// UPLOAD PAGE 2 / TRAVEL STEP
// ALLOW TO DELETE DATA OF "TRAVEL STEP" TABLE WITH THE ID 
// TEST OK

// REVIEW THE TRAVEL_STEP AND TRAVEL_INFORMATION TABLES AS THE TRAVEL_INFORMATION TABLE COLUMNS:
// CURRENCY, ACCOMODATION_BUDGET, ACTIVITIES_BUDGET, TRAVEL_TYPE ARE BASED ON ITINERARY FROM THE TRAVEL_STEP TABLE



class DeleteTravelStep extends Component {
  state = {
    id_travel_step: '',
  }

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  axios.delete(`http://localhost:3000/travel_step/delete_travelstep/${this.state.id_travel_step}`, this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

}

render() {
  const { id_travel_step } = this.state
  return (
    <div>
      <form onSubmit={this.submitHandler}>
      <div>
          <p>Id de travel step</p>
          <input type='text' name="id_travel_step" value={id_travel_step} onChange={this.changeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
}

export default DeleteTravelStep
