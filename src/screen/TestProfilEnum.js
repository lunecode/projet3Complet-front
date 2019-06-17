import React, { Component } from 'react'
import axios from 'axios'

// import UploadIcon from '/../Images-tripitto/Icon/ingredients/Aventurier-seul.png'
import icon from '../Images-tripitto/Icon/Ingredients/Aventurier-seul.png'
import icon2 from '../Images-tripitto/Icon/Ingredients/Copains.png'

// UPLOAD PAGE 2 / TRAVEL INFORMATION
// ALLOW TO INSERT DATA IN "TRAVEL INFORMATION" TABLE
// TEST OK


// MUST SEE FOR THE "TRAVEL_TYPE" COLUMN TO CHANGE TYPE TO ENUM ON NOT VARCHAR ==> DONE, NEED INFORM OTHER TO DO THE CHANGE

// REVIEW THE TRAVEL_STEP AND TRAVEL_INFORMATION TABLES AS THE TRAVEL_INFORMATION TABLE COLUMNS:
// CURRENCY, ACCOMODATION_BUDGET, ACTIVITIES_BUDGET, TRAVEL_TYPE ARE BASED ON ITINERARY FROM THE TRAVEL_STEP TABLE


class TestProfilEnum extends Component {
  state = {
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/profil/enum', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

  }

  render() {
    const { testenum } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <p>enum</p>
            <input type='image' img src={icon} alt="enum" name="testenum" value={testenum} onChange={this.changeHandler} />
          </div>
          <div>
            <p>enum</p>
            <input type='image' img src={icon2} alt="enum" name="testenum" value={testenum} onChange={this.changeHandler} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default TestProfilEnum;
