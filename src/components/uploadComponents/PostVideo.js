import React, { Component } from 'react';
import axios from "axios"

class PostVideo extends Component {
    state={
      video_link:"",

    }

    fileSelectedHandler= e=>{
        this.setState({ [e.target.name]: e.target.value})
    }
    fileUploadHandler =(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/general_video/insert_general_video', this.state)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      
    }
 

    render() {
  console.log(this.state);
        return (
            <div>
                <input type='file' name="video_link"
                 value={this.state.video_link} 
                onChange={this.fileSelectedHandler}
                />
                <button onClick={this.fileUploadHandler}>Télécharger</button>
                <video controls width="700">
                <source src={this.state.video_link}

                type="video"/> Sorry, your browser doesn't support embedded videos.
                </video>

            </div>


          
           
       

        );
    }
}


export default PostVideo;