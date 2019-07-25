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
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/videoUpload/insertdatavideo'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/videoUpload/insertdatavideo'
  }
    console.log(this.state)
    axios.post(pathApi, this.state)
      .then(response => {
        // console.log(response)
      })
      .catch(error => {
        // console.log(error)
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