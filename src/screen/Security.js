import React, { Component } from 'react';
import PostSecurityProfil from '../components/ProfilComponents/PostSecurityProfil';
import axios from "axios"

class ProfilRoutes extends Component {
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/profil/insert_profil', this.state)
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
        <form onSubmit={this.submitHandler}>
          <PostSecurityProfil
            {...this.state}
            handleCheckbox={this.handleCheckbox}
            changeHandler={this.changeHandler}
          />
          <div className="save-btn">
            <button type="submit" >SAUVEGARDER</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ProfilRoutes;