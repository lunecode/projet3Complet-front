import React, { Component } from 'react';
import axios from 'axios';



// Permet l'affichage des données pour un test de la table " travel-information"

class Getdestination extends Component {
  state = {
    destination: [],
  };

  getDestination = async () => {
    const res = await axios.get('http://localhost:3000/travel_information/get_travelinformation')
    this.setState({ destination: res.data })
    console.log(this.state.destination)
  }
  componentDidMount() {
    this.getDestination()
  }

  render() {
    return (
      <>


    <div className='nav-video-category'>
      <ul className='nav-video-continent'>
        <li>AFRIQUE</li>
        <li>ASIE-OCEANIE</li>
        <li>EUROPE</li>
        <li>AMERIQUE</li>
        <li>AUTRES</li>
      </ul>



        {this.state.destination.map(item => (
          <li key={item.id_travel_information}>
          {item.continent_id_continent} 
          {item.countries}
        </li>
        ))}
  
    </div>


      </>
    )
  }
}

export default Getdestination;
