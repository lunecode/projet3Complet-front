import React, { Component } from 'react'

import Country from '../../components/json/Country.json'


// THIS CODE DISPLAY ALL THE COUNTRY IN THE UPLOAD PAGE 2


export default class CountryList extends Component {
  state = {
    country: Country
  }

  render() {
    console.log(Country)
    return (
      <>
        <div>
          <label for="Country"></label>
          <select id="Country">
            <option value="">Pays</option>
            {this.state.country.map(item => (
              <option>{item.country}</option>
            ))}
          </select>
        </div>
      </>
    )
  }
}


