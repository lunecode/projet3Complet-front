import React, { Component } from 'react';
import PostSecurityProfil from '../components/ProfilComponents/PostSecurityProfil';
import UserLastnameFirstname from '../components/ProfilComponents/UserLastnameFirstname';
import axios from "axios"



class ProfilRoutes extends Component {


  submitHandler = e => {
    e.preventDefault()
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/profil/insert_profil'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/profil/insert_profil'
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

  handleCheckbox = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    return (
      <div>
         <UserLastnameFirstname />
        <form onSubmit={this.submitHandler}>
          <PostSecurityProfil
            {...this.state}
            handleCheckbox={this.handleCheckbox}
            changeHandler={this.changeHandler}
          />
        </form>
      </div>
    )
  }
}

export default ProfilRoutes;