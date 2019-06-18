import React, { Component } from 'react';
import HomeComponents from '../components/UploadComponents/HomeComponents';
import Getnextdestination from '../components/HomeComponents/Getnextdestination';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class Home extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Getnextdestination />
            <HomeComponents />
            <Footer />
            </>
        )
    }
}

export default Home;
