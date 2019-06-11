import React, { Component } from 'react';
import axios from 'axios';






// UPLOAD PAGE 2 / TRAVEL STEP
// ALLOW TO DISPLAY DATA FROM "TRAVEL_STEP" TABLE
// TEST OK




// REVIEW THE TRAVEL_STEP AND TRAVEL_INFORMATION TABLES AS THE TRAVEL_INFORMATION TABLE COLUMNS:
// CURRENCY, ACCOMODATION_BUDGET, ACTIVITIES_BUDGET, TRAVEL_TYPE ARE BASED ON ITINERARY FROM THE TRAVEL_STEP TABLE


class GetTravelStep extends Component {
  state = {
    travel_step: [],
  };

  getTravel_step= async () => {
    const res = await axios.get('http://localhost:3000/travel_step/get_travelstep')
    this.setState({ travel_step: res.data })
    console.log(this.state.travel_step)
  }

  componentDidMount() {
    this.getTravel_step()
  }


  render() {
    return (
      <>
        {this.state.travel_step.map(item => (
          <li key={item.id_travel_step}>
            <p>{item.step_number}</p>
            <p>{item.step_name}</p>
            <p>{item.step_type}</p>
            <p>{item.step_duration}</p>
            <p>{item.step_weather}</p>
            <p>{item.step_transport}</p>
            <p>{item.way_get_around}</p>
            <p>{item.way_get_around_comment}</p>
            <p>{item.district1}</p>
            <p>{item.district2}</p>
            <p>{item.district3}</p>
            <p>{item.district_comment}</p>
            <p>{item.accomodation1}</p>
            <a href={item.accomodation_link1}>Lien web de l'hébergement</a>
            <p>{item.accomodation2}</p>
            <a href={item.accomodation_link2}>Lien web de l'hébergement</a>
            <p>{item.accomodation3}</p>
            <a href={item.accomodation_link3}>Lien web de l'hébergement</a>
            <p>{item.restaurant1}</p>
            <p>{item.restaurant2}</p>
            <p>{item.restaurant3}</p>
            <p>{item.bar1}</p>
            <p>{item.bar2}</p>
            <p>{item.bar3}</p>
            <p>{item.must_visit1}</p>
            <p>{item.must_visit2}</p>
            <p>{item.must_visit3}</p>
            <p>{item.sport_activity1}</p>
            <p>{item.sport_activity2}</p>
            <p>{item.sport_activity3}</p>
            <p>{item.sport_activity_comment}</p>
            <p>{item.crush}</p>
            <p>{item.advice}</p>
            <p>{item.general_video_id_general_video}</p>
          </li>
        ))}
      </>
    )
  }
}

export default GetTravelStep;
