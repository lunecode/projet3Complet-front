import React, { Component } from 'react';
import axios from 'axios'
import './TravelInfo.css';
import Alone from '../../Images-tripitto/Icon/Aventurier/seulwhite.png';
import House from '../../Images-tripitto/Icon/logement_blc.png';
import Mug from '../../Images-tripitto/Icon/repas_blc.png';


class TravelInfo extends Component {
  state = {
    travel: [],
  };

  getTravel = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/travel_information/get_travelinformation'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/travel_information/get_travelinformation'
    }
    const res = await axios.get(pathApi)
    this.setState({ travel: res.data })

  }
  componentDidMount() {
    this.getTravel()
  }

  render() {

    const url = window.location.href;
    const idTravel = url.slice(32)


    return (
      <>

        {this.state.travel.filter(item => item.id_travel_information == idTravel).map(item => (
          <div className="container_travel" key={item.id_travel_information}>
            <div className="travel">
              <p className="countryName1">{item.countries} <span className="month1">{item.departure_month}</span> <span className="year1">{item.departure_year} - </span><span className="duration1">{item.travel_duration} jours</span></p>
              <span className="accomodation1"> <img className="alone" src={Alone} alt="seul" />   <span className="travelAlone">{item.travel_type}</span> | <img className="house" src={House} alt="house" /> <span> Logement {item.accomodation_budget}</span>  <span className="currency">{item.currency}</span> | <img className="mug" src={Mug} alt="mug" /><span>   Repas et activités {item.activities_budget}</span>  <span>{item.currency}</span> </span>
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default TravelInfo;
