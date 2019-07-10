import React, { Component } from 'react';

import axios from "axios"
import GetAbonnements from '../components/ProfilComponents/GetAbonnements';


class Abonnements extends Component {
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/following/get_following', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
 

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <GetAbonnements 
          
            {...this.state}
            changeHandler={this.changeHandler}
          />
      
        </form>
      </div>
    )
  }
}

export default Abonnements;