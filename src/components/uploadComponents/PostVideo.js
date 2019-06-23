import React, { Component } from 'react';
import axios from "axios"
import GetVideo from './GetVideo';

class PostVideo extends Component {
    state={
      video_link:"",

    }

    // fileSelectedHandler= e=>{
    //     this.setState({ [e.target.name]: e.target.value})
    // }
    // fileUploadHandler =(e)=>{
    //     e.preventDefault()
    //     console.log(this.state)
    //     axios.post('http://localhost:3000/general_video/insert_general_video', this.state)
    //       .then(response => {
    //         console.log(response)
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
      
    // }
handelchange=(e)=>{
let files=e.target.files;
let reader=new FileReader();
reader.readAsDataURL(files[0]);
reader.onload=(e)=>{
this.setState({
  video_link:e.target.result
})
//  console.log("img data",e.target.result)
 }
}
 

    render() {
  console.log(this.state);
        return (
            <div onSubmit={this.onFormsubmit}> 
                {/* <input type='file' name="video_link"
                 value={this.state.video_link} 
                onChange={this.fileSelectedHandler}
                />
                <button onClick={this.fileUploadHandler}>Télécharger</button>
                <video controls width="700">
                <source src={this.state.video_link}

                type="video"/> Sorry, your browser doesn't support embedded videos.
                </video> */}
                     <input type='file' name="video_link"
             value={this.state.video_link} 
                onChange={this.handelchange}
                />
                <button onClick={this.fileUploadHandler}>Télécharger</button>
                <video controls width="700">
                <source 

                type="video"/> Sorry, your browser doesn't support embedded videos.
                </video>
                
{/* <GetVideo /> */}
            </div>


        )

       }   
 }


export default PostVideo;