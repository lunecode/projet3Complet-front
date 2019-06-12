import React, { Component } from 'react';
import axios from 'axios'

class AllVideoUser extends Component {
    state = {
    video: [],
};

getVideo = async () => {
    const res = await axios.get('http://localhost:3000/profil/get_video_user')
    this.setState({ video: res.data })
    console.log(this.state.video)
}
componentDidMount() {
    this.getVideo()
}

render() {
    
    return (
    <>
        {this.state.video.map(item => (
        <li key={item.id_profil}>
            <li>{item.firstname}</li>
            <li>{item.lastname}</li>
            <li>{item.video_title}</li>
            {/* video youtube a inserer  */}
            <li>{item.video_link}</li>
            <li>{item.video_description}</li>
            <li>{item.profil_id_profil}</li>
        </li>
        ))}
    </>
    )
    }
}

export default AllVideoUser;
