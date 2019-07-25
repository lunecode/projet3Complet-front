import React, { Component } from 'react';
import axios from 'axios'
import PostVideo from '../../components/uploadComponents/PostVideo';




class UploadVideo extends Component {
state = {
  idGeneralVideo : ''
}

  getIdVideo = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/general_video/get_id_general_video'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/general_video/get_id_general_video'
    }
    const res = await axios.get(pathApi)
    this.setState({ idGeneralVideo: res.data[0] })
    // console.log(this.state.idGeneralVideo.id_general_video)
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
