import React, { Component } from 'react';
import axios from 'axios'
import './TravelInfo.css';




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
            <div className="container_travel" key={item.id_travel_information}>
                <div className="travel">
                    <p className="countryName">{item.countries} <span className="month">{item.departure_month}</span> <span className="month">{item.departure_year} - </span><span className="duration">{item.travel_duration} jours</span></p>
                    {/* <li>{item.nb_step}</li> */}
                    <p className="accomodation">  <span>{item.travel_type}</span> | <span> Logement {item.accomodation_budget}</span>  <span>{item.currency}</span>  <span>Repas et activités {item.activities_budget}</span>  <span>{item.currency}</span> <span className="budget">(Budget par jour et par personne)</span></p>
                </div>
            </div>
        ))}
    </>
    )
    }
}

export default TravelInfo;
