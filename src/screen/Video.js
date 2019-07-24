import React, { Component } from 'react';
import VideoProfil from '../components/ProfilComponents/VideoProfil';
import UserLastnameFirstname from '../components/ProfilComponents/UserLastnameFirstname';

class Video extends Component {
  render() {
    return (
      <div>
          <UserLastnameFirstname />
        <VideoProfil />
      </div>
    );
  }
}

export default Video;