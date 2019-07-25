import React, { Component } from 'react';
import './PopularityVideo.css';
import axios from 'axios'

class PopularityVideo extends Component {
  state = {
    popularity: [],
  };

  getPopularity = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/popularity/get_popularity'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/popularity/get_popularity'
    }
  
    const res = await axios.get(pathApi)
    this.setState({ popularity: res.data })

  }
  componentDidMount() {
    this.getPopularity()
  }

  render() {

    let i = 1;

    return (
      <>
        {this.state.popularity.map(item => (
          <div className="popularity" key={i++}>
          </div>
        ))}
      </>
    )
  }
}

export default PopularityVideo;
