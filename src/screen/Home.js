import React, { Component } from 'react';
import HomeComponents from '../components/UploadComponents/HomeComponents';
import Getnexdestination from '../components/HomeComponents/Getnextdestination';
import Getplan from '../components/HomeComponents/Getplan';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class Home extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Getnexdestination />
            <Getplan />
            <HomeComponents />
            <Footer />
            </>
        )
    }
}

export default Home;
