import React, { Component } from 'react';
// import HomeComponents from '../components/UploadComponents/HomeComponents';
import Getnextdestination from '../components/HomeComponents/Getnextdestination';
import HomeComponents from '../components/HomeComponents/HomeComponentsPart3';
import TitleHomeNavbar from '../components/TitleHomeNavbar';

import './Home.css'


class Home extends Component {
    render() {
        return (
            <>
                <TitleHomeNavbar />
                <Getnextdestination />
                <HomeComponents />
            </>
        )
    }
}

export default Home;
