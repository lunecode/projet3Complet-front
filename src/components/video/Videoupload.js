import React, { Component } from 'react';
import axios from 'axios'



class Videoupload extends Component {
  state = {
    selectFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectFile: event.target.files[0]
    })
  }

  fileUploadHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/videoUpload/insertdatavideo', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Télécharger</button>
      </div>
    );
  }
}

export default Videoupload;