import React, { Component } from 'react';
import axios from 'axios'
import YouTube from 'react-youtube';
import './AllVideoUser.css';

class AllVideoUser extends Component {
  state = {
    video: [],
  };

  getVideo = async () => {
    const res = await axios.get('http://localhost:3000/general_video/get_general_video')
    this.setState({ video: res.data })

  }
  componentDidMount() {
    this.getVideo()
  }

  render() {

    let i = 1;



    const opts = {
      height: '150',
      width: '150',
      playerVars: {
        autoplay: 0
      }
    };

    const url = window.location.href;
    const idVidUser = url.slice(32)


    return (
      <>
        {this.state.video.filter(item =>
          item.id_general_video == idVidUser).map(item => (
            <div className="allVideoUser" key={i++}>
              <div className="contvid" key={item.id_general_video}>
                <div className="youtubeVid">
                  <YouTube videoId={item.video_link} opts={opts} onReady={this._onReady} />
                </div>
                <div className="userVid" key={item.id_profil}>
                  <p className="title_vid">{item.video_title}</p>
                  <span>{item.video_description}</span>

                </div>
              </div>
            </div>
          ))}

      </>
    )
  }
}

export default AllVideoUser;
