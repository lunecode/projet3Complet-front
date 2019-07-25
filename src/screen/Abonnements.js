import React, { Component } from 'react';

import axios from "axios"
import GetAbonnements from '../components/ProfilComponents/GetAbonnements';
import UserLastnameFirstname from '../components/ProfilComponents/UserLastnameFirstname';

class Abonnements extends Component {
  submitHandler = e => {
    e.preventDefault()
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/following/get_following'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/following/get_following'
    }
    console.log(this.state)
    axios.post(pathApi, this.state)
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