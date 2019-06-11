import React, { Component } from 'react';
import axios from 'axios';






// UPLOAD PAGE 2 / TRAVEL INFORMATION
// ALLOW TO DISPLAY DATA FROM "TRAVEL_INFORMATION" TABLE
// TEST OK


// MUST SEE FOR THE "TRAVEL_TYPE" TABLE TO CHANGE TYPE TO ENUM ON NOT VARCHAR

// REVIEW THE TRAVEL_STEP AND TRAVEL_INFORMATION TABLES AS THE TRAVEL_INFORMATION TABLE COLUMNS:
// CURRENCY, ACCOMODATION_BUDGET, ACTIVITIES_BUDGET, TRAVEL_TYPE ARE BASED ON ITINERARY FROM THE TRAVEL_STEP TABLE



class GetTravelInformation extends Component {
  state = {
    travel_infos: [],
  };

  getTravel_infos= async () => {
    const res = await axios.get('http://localhost:3000/travel_information/get_travelinformation')
    this.setState({ travel_infos: res.data })
    console.log(this.state.travel_infos)
  }
  componentDidMount() {
    this.getTravel_infos()
  }


  render() {
    return (
      <>
      
        {this.state.travel_infos.map(item => (          
          <li key={item.id_travel_information}>            
            <p>{item.continent}</p>
            <p>{item.countries}</p>
            <p>{item.departure_month}</p>
            <p>{item.departure_year}</p>
            <p>{item.nb_step}</p>
            <p>{item.currency}</p>
            <p>{item.accomodation_budget}</p>
            <p>{item.activities_budget}</p>
            <p>{item.travel_type}</p>
            <p>{item.general_video_id_general_video}</p>
          </li>
        ))}
      </>
    )
  }
}

export default GetTravelInformation;
