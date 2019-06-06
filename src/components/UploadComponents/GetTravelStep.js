import React, { Component } from 'react';
import axios from 'axios';


// Allow to display data from " travel_step " table

class GetTravelStep extends Component {
  state = {
    infos_step: [],
  };

  getinfos_step = async () => {
    const res = await axios.get('http://localhost:3000/travel_information/get_travelinformation')
    this.setState({ infos_steps: res.data })
    console.log(this.state.infos_step)
  }
  componentDidMount() {
    this.getinfos_step()
  }


  render() {
    return (
      <>
      
        {this.state.infos_step.map(item => (
          
          <li key={item.id_travel_information}>
            
            <p>{item.continent}</p>
            {/* <p>{item.countries}</p>
            <p>{item.departure_month}</p>
            <p>{item.departure_year}</p>
            <p>{item.nb_step}</p>
            <p>{item.currency}</p>
            <p>{item.accomodation_budget}</p>
            <p>{item.activities_budget}</p>
            <p>{item.travel_type}</p>
            <p>{item.general_video_id_general_video}</p> */}
          </li>
        ))}
      </>
    )
  }
}

export default GetTravelStep;
