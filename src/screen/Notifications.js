import React, { Component } from 'react';

import axios from "axios"
import PostNotifications from '../components/ProfilComponents/PostNotifications';
import UserLastnameFirstname from '../components/ProfilComponents/UserLastnameFirstname';

class Notifications extends Component {
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/notification/post_notification', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleRadio = (e) => {
    const target = e.target;
    const value = target.type === 'radio' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleCheckbox = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  //Enum Preference_language
  language_Preference_FR = () => {
    this.setState({ preference_language: 1 })
  }
  language_Preference_EN = () => {
    this.setState({ preference_language: 2 })
  }

  render() {
    return (
      <div>
         
          <UserLastnameFirstname />
          <form onSubmit={this.submitHandler}>

          <PostNotifications
            {...this.state}
            handleRadio={this.handleRadio}
            changeHandler={this.changeHandler}
            handleCheckbox={this.handleCheckbox}
            language_Preference_FR={this.language_Preference_FR}
            language_Preference_EN={this.language_Preference_EN}
          />

        </form>
      </div>
    )
  }
}

export default Notifications;