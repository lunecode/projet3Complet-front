import React, { Component } from 'react';
import axios from 'axios';
import Destination from './Displaydestination'


// Permet l'affichage des données pour un test de la table " travel-information"

class Getdestination extends Component {
  state = {
    destination: [],
  };

  getDestination = async () => {
    const res = await axios.get('http://localhost:3000/home/datatravelinformation')
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

        <ul className='nav-video'>
        {this.state.destination.map(item => (
          <li key={item.id_travel_information}>
          {item.continent} 
          {item.countries}
        </li>
        ))}
        </ul>
    </div>


      </>
    )
  }
}

export default Getdestination;
