import React, { Component } from 'react';
import axios from 'axios'
import PostVideo from '../../components/uploadComponents/PostVideo';




class UploadVideo extends Component {
state = {
  idGeneralVideo : ''
}

  getIdVideo = async () => {
    const res = await axios.get('http://localhost:3000/general_video/get_id_general_video')
    this.setState({ idGeneralVideo: res.data[0] })
    console.log(this.state.idGeneralVideo.id_general_video)
  }
  componentDidMount() {
    this.getIdVideo()
  }


  render() {
    console.log(this.state.idGeneralVideo)
    return (
      <>
        <PostVideo idVideo={this.state.idGeneralVideo.id_general_video} />
      </>
    )
  }
}


export default UploadVideo;
