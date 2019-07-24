import React, { Component } from 'react';

import axios from "axios"
import GetFollower from '../components/ProfilComponents/GetFollower';
import UserLastnameFirstname from '../components/ProfilComponents/UserLastnameFirstname';

class Abonnements extends Component {
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/follower/get_follower', this.state)
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
         <UserLastnameFirstname />
        <form onSubmit={this.submitHandler}>
          <GetFollower
            {...this.state}
            changeHandler={this.changeHandler}
          />
      
        </form>
      </div>
    )
  }
}

export default Abonnements;