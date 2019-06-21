import React, { Component } from 'react'

import Continent from '../../components/json/Continent.json'
import Country from '../../components/json/Country.json'


// THIS CODE DISPLAY ALL THE CONTINENT AND COUNTRY BUT NOT FILTER THE COUNTRY IN RELATION WITH THE CONTINENT


export default class TestContinentCountry extends Component {
  state = {
    continent: Continent,
    country: Country
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



        <div>
          <label for="Country"></label>
          <select id="Country">
            <option value="">Pays</option>
            {this.state.country.map(item => (
              <option>{item.country}</option>
            ))}
          </select>
        </div>


        {/* <div>
        <select>
        {this.state.country.filter(item => (
          item.id_continent.includes(this.state.continent.id)
        )
        .map((country, index) => (
          <option>{item.country}</option>
        )) )}
        </select>
      </div> */}

      </>
    )
  }
}


