import React, { Component } from 'react'

import Country from '../../components/json/Country.json'


// THIS CODE DISPLAY THE CONTINENT AND COUNTRY ON THE UPLOAD VIDEO PAGE 2

export default class ContinentList extends Component {
  state = {
    continent: Continent,
  }

  render() {
    console.log(Country)
    return (
      <>
        <div>
          <label for="Continent"></label>
          <select id="Continent">
            <option value="">Continent</option>
            {Continent.map(item => (
              <option>{item.continent}</option>
            ))}
          </select>
        </div>
      </>
    )
  }
}


