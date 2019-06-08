import React, { Component } from 'react';
import axios from 'axios'



class TravelInfo extends Component {
    state = {
    travel: [],
};

getTravel = async () => {
    const res = await axios.get('http://localhost:3000/travel_information/get_travelinformation')
    this.setState({ travel: res.data })
    console.log(this.state.travel)
}
componentDidMount() {
    this.getTravel()
}

render() {
    
    return (
    <>
        {this.state.travel.map(item => (
        <li key={item.id_travel_information}>
            <li>{item.countries}</li>
            <li>{item.departure_month}</li>
            <li>{item.departure_year}</li>
            <li>{item.travel_duration}</li>
            <li>{item.nb_step}</li>
            <li>{item.currency}</li>
            <li>{item.accomodation_budget}</li>
            <li>{item.activities_budget}</li>
            <li>{item.travel_type}</li>
        </li>
        ))}
    </>
    )
    }
}

export default TravelInfo;
