import React, { Component } from 'react';

import axios from "axios"
import GetFollower from '../components/ProfilComponents/GetFollower';
import UserLastnameFirstname from '../components/ProfilComponents/UserLastnameFirstname';

class Abonnements extends Component {
  submitHandler = e => {
    e.preventDefault()
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/follower/get_follower'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/follower/get_follower'
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