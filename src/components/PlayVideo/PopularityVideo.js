import React, { Component } from 'react';
import './PopularityVideo.css';
import axios from 'axios'

class PopularityVideo extends Component {
  state = {
    popularity: [],
  };

  getPopularity = async () => {
    const res = await axios.get('http://localhost:3000/popularity/get_popularity')
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
