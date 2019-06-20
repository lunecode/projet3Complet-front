import React, { Component } from 'react';
import Videoupload from '../components/video/Videoupload';


class UploadVideo extends Component {
    render() {
        return (
            <div>
                télèchargement des vidéos:
                <Videoupload />
            </div>
        );
    }
}

export default UploadVideo;